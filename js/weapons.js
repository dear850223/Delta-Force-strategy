/**
 * 武器图鉴页面逻辑 - Weapons Arsenal Controller
 * 功能：武器渲染/筛选/搜索/详情模态框/对比工具/收藏系统/雷达图绘制
 */

import weaponsDatabase, { getWeaponsByType, getWeaponById } from './data/weapons-data.js';

'use strict';

/* ===== 状态管理 ===== */
const state = {
  currentType: 'all',
  searchQuery: '',
  sortBy: 'default',
  viewMode: 'grid',
  favorites: [],
  compareList: [],
  maxCompareSlots: 3,
};

/* ===== 武器类型配置 ===== */
const TYPE_CONFIG = [
  { key: 'all', label: '全部', icon: '🔫' },
  { key: 'assaultRifle', label: '突击步枪', icon: '🎯' },
  { key: 'sniper', label: '狙击枪', icon: '🔭' },
  { key: 'smg', label: '冲锋枪', icon: '💨' },
  { key: 'shotgun', label: '霰弹枪', icon: '💥' },
  { key: 'pistol', label: '手枪', icon: '🔫' },
  { key: 'lmg', label: '机枪', icon: '🔥' },
];

/* ===== 武器Emoji映射 ===== */
const WEAPON_EMOJI = {
  m4a1: '🔫',
  ak47: '🔫',
  mp5: '💨',
  awm: '🔭',
  spas12: '💥',
  m1911: '🔫',
  m249: '🔥',
  p90: '💨',
};

/* ===== 稀有度映射 ===== */
const RARITY_CLASS_MAP = {
  common: 'common',
  rare: 'rare',
  epic: 'epic',
  legendary: 'legendary',
};

/* ===== 六维属性标签 ===== */
const STAT_LABELS = {
  damage: '伤害',
  range: '射程',
  fireRate: '射速',
  accuracy: '精准',
  stability: '稳定',
  mobility: '机动',
};

/* ===== DOM引用缓存 ===== */
let dom = {};

/* ===== 初始化 ===== */
function init() {
  cacheDom();
  loadFavorites();
  renderTabs();
  bindEvents();
  applyFilters();
  updateFavoritesUI();
  initBackToTop();
}

/* ===== 缓存DOM引用 ===== */
function cacheDom() {
  dom = {
    tabsContainer: document.getElementById('weaponsTabs'),
    weaponsGrid: document.getElementById('weaponsGrid'),
    searchInput: document.getElementById('weaponSearchInput'),
    searchClear: document.getElementById('searchClearBtn'),
    sortSelect: document.getElementById('weaponSortSelect'),
    resultBar: document.getElementById('resultBar'),
    resultCount: document.getElementById('resultCount'),
    resultClear: document.getElementById('resultClear'),
    emptyState: document.getElementById('weaponsEmpty'),

    modalBackdrop: document.getElementById('weaponModalBackdrop'),
    modalContent: document.getElementById('weaponModalContent'),
    modalClose: document.getElementById('weaponModalClose'),

    compareSection: document.getElementById('compareSection'),
    compareSlots: document.querySelectorAll('.compare-slot'),
    compareCanvas: document.getElementById('compareRadarCanvas'),
    compareEmpty: document.getElementById('compareEmptyState'),
    compareRadarArea: document.getElementById('compareRadarArea'),
    compareClearAll: document.getElementById('compareClearAll'),

    favoritesPanel: document.getElementById('favoritesPanel'),
    favoritesPanelBody: document.getElementById('favoritesPanelBody'),
    favoritesTrigger: document.getElementById('favoritesTrigger'),
    favoritesPanelClose: document.getElementById('favoritesPanelClose'),
    favoritesCountBadge: document.getElementById('favoritesCountBadge'),

    viewToggleBtns: document.querySelectorAll('.weapons-view-toggle__btn'),
    backToTop: document.getElementById('backToTop'),
  };
}

/* ===== 加载收藏（LocalStorage） ===== */
function loadFavorites() {
  try {
    const saved = localStorage.getItem('delta_weapons_favorites');
    state.favorites = saved ? JSON.parse(saved) : [];
  } catch (e) {
    state.favorites = [];
  }
}

/* ===== 保存收藏到LocalStorage ===== */
function saveFavorites() {
  try {
    localStorage.setItem('delta_weapons_favorites', JSON.stringify(state.favorites));
  } catch (e) {
    console.warn('无法保存收藏数据:', e);
  }
}

/* ===== 切换收藏状态 ===== */
function toggleFavorite(weaponId, event) {
  if (event) event.stopPropagation();
  const idx = state.favorites.indexOf(weaponId);
  if (idx === -1) {
    state.favorites.push(weaponId);
  } else {
    state.favorites.splice(idx, 1);
  }
  saveFavorites();
  updateFavoritesUI();

  const card = document.querySelector(`[data-weapon-id="${weaponId}"]`);
  if (card) {
    const btn = card.querySelector('.weapon-card__favorite-btn');
    if (btn) btn.classList.toggle('favorited', idx === -1);
  }
}

/* ===== 更新收藏相关UI ===== */
function updateFavoritesUI() {
  if (!dom.favoritesCountBadge) return;
  const count = state.favorites.length;
  dom.favoritesCountBadge.textContent = count;
  dom.favoritesCountBadge.style.display = count > 0 ? 'flex' : 'none';
  renderFavoritesList();
}

/* ===== 渲染收藏列表 ===== */
function renderFavoritesList() {
  if (!dom.favoritesPanelBody) return;
  if (state.favorites.length === 0) {
    dom.favoritesPanelBody.innerHTML = `
      <div class="favorites-panel__empty">
        <div class="favorites-panel__empty-icon">⭐</div>
        <p>暂无收藏武器</p>
        <p style="font-size:12px;margin-top:4px;">点击武器卡片上的星标添加收藏</p>
      </div>`;
    return;
  }

  const html = state.favorites.map(id => {
    const w = getWeaponById(id);
    if (!w) return '';
    return `
      <div class="favorite-item" data-fav-id="${w.id}" role="button" tabindex="0">
        <img class="favorite-item__image" src="${w.image}" alt="${w.name}">
        <div class="favorite-item__info">
          <div class="favorite-item__name">${w.name}</div>
          <div class="favorite-item__type">${w.typeName}</div>
        </div>
        <span class="favorite-item__remove" data-remove-fav="${w.id}" title="移除收藏">×</span>
      </div>`;
  }).join('');

  dom.favoritesPanelBody.innerHTML = html;

  dom.favoritesPanelBody.querySelectorAll('.favorite-item').forEach(item => {
    item.addEventListener('click', () => openWeaponDetail(item.dataset.favId));
  });

  dom.favoritesPanelBody.querySelectorAll('[data-remove-fav]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      toggleFavorite(btn.dataset.removeFav);
    });
  });
}

/* ===== 渲染Tab栏 ===== */
function renderTabs() {
  if (!dom.tabsContainer) return;
  dom.tabsContainer.innerHTML = TYPE_CONFIG.map(type => {
    const count = type.key === 'all'
      ? weaponsDatabase.length
      : weaponsDatabase.filter(w => w.type === type.key).length;
    return `
      <button class="weapons-tab ${type.key === state.currentType ? 'active' : ''}"
              data-type="${type.key}" role="tab" aria-selected="${type.key === state.currentType}">
        <span class="weapons-tab__icon">${type.icon}</span>
        <span>${type.label}</span>
        <span class="weapons-tab__count">${count}</span>
      </button>`;
  }).join('');
}

/* ===== 绑定事件 ===== */
function bindEvents() {
  if (dom.tabsContainer) {
    dom.tabsContainer.addEventListener('click', handleTabClick);
  }

  if (dom.searchInput) {
    dom.searchInput.addEventListener('input', debounce(handleSearch, 200));
  }

  if (dom.searchClear) {
    dom.searchClear.addEventListener('click', clearSearch);
  }

  if (dom.sortSelect) {
    dom.sortSelect.addEventListener('change', handleSortChange);
  }

  if (dom.resultClear) {
    dom.resultClear.addEventListener('click', clearSearch);
  }

  if (dom.modalBackdrop) {
    dom.modalBackdrop.addEventListener('click', handleBackdropClick);
  }

  if (dom.modalClose) {
    dom.modalClose.addEventListener('click', closeWeaponModal);
  }

  if (dom.weaponsGrid) {
    dom.weaponsGrid.addEventListener('click', handleCardClick);
  }

  dom.compareSlots.forEach((slot, index) => {
    slot.addEventListener('click', () => handleCompareSlotClick(index));
  });

  if (dom.compareClearAll) {
    dom.compareClearAll.addEventListener('click', clearCompare);
  }

  if (dom.favoritesTrigger) {
    dom.favoritesTrigger.addEventListener('click', toggleFavoritesPanel);
  }

  if (dom.favoritesPanelClose) {
    dom.favoritesPanelClose.addEventListener('click', toggleFavoritesPanel);
  }

  dom.viewToggleBtns.forEach(btn => {
    btn.addEventListener('click', handleViewToggle);
  });

  document.addEventListener('keydown', handleKeydown);

  window.addEventListener('scroll', throttle(handleScroll, 100));
}

/* ===== Tab点击处理 ===== */
function handleTabClick(e) {
  const tab = e.target.closest('.weapons-tab');
  if (!tab) return;
  state.currentType = tab.dataset.type;

  dom.tabsContainer.querySelectorAll('.weapons-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.type === state.currentType);
    t.setAttribute('aria-selected', t.dataset.type === state.currentType);
  });

  applyFilters();
}

/* ===== 搜索处理 ===== */
function handleSearch(e) {
  state.searchQuery = e.target.value.trim().toLowerCase();
  dom.searchClear?.classList.toggle('visible', state.searchQuery.length > 0);
  applyFilters();
}

/* ===== 清除搜索 ===== */
function clearSearch() {
  state.searchQuery = '';
  if (dom.searchInput) dom.searchInput.value = '';
  dom.searchClear?.classList.remove('visible');
  applyFilters();
}

/* ===== 排序变更处理 ===== */
function handleSortChange(e) {
  state.sortBy = e.target.value;
  applyFilters();
}

/* ===== 视图切换 ===== */
function handleViewToggle(e) {
  const btn = e.currentTarget;
  const mode = btn.dataset.view;
  state.viewMode = mode;
  dom.viewToggleBtns.forEach(b => b.classList.toggle('active', b === btn));

  if (dom.weaponsGrid) {
    dom.weaponsGrid.classList.toggle('weapons-grid--list', mode === 'list');
  }
}

/* ===== 核心过滤+排序+渲染 ===== */
function applyFilters() {
  let filtered = getWeaponsByType(state.currentType);

  if (state.searchQuery) {
    const q = state.searchQuery;
    filtered = filtered.filter(w =>
      w.name.toLowerCase().includes(q) ||
      w.nameEn.toLowerCase().includes(q) ||
      w.typeName.includes(q)
    );
  }

  switch (state.sortBy) {
    case 'damage':
      filtered.sort((a, b) => b.stats.damage - a.stats.damage);
      break;
    case 'fireRate':
      filtered.sort((a, b) => b.stats.fireRate - a.stats.fireRate);
      break;
    case 'mobility':
      filtered.sort((a, b) => b.stats.mobility - a.stats.mobility);
      break;
    case 'name':
      filtered.sort((a, b) => a.name.localeCompare(b.name, 'zh'));
      break;
    default:
      break;
  }

  renderWeapons(filtered);
  updateResultBar(filtered.length, weaponsDatabase.length);
}

/* ===== 更新结果计数栏 ===== */
function updateResultBar(shown, total) {
  if (!dom.resultCount) return;
  dom.resultCount.textContent = `${shown} / ${total}`;
  if (dom.resultBar) {
    dom.resultBar.style.display = shown > 0 ? 'flex' : 'none';
  }
  if (dom.emptyState) {
    dom.emptyState.style.display = shown === 0 ? '' : 'none';
  }
}

/* ===== 渲染武器卡片列表 ===== */
function renderWeapons(weapons) {
  if (!dom.weaponsGrid) return;

  if (weapons.length === 0) {
    dom.weaponsGrid.innerHTML = '';
    if (dom.emptyState) {
      dom.emptyState.style.display = '';
      dom.emptyState.innerHTML = `
        <div class="weapons-empty__icon">🔍</div>
        <h3 class="weapons-empty__title">未找到匹配的武器</h3>
        <p class="weapons-empty__text">尝试更换关键词或切换分类</p>`;
    }
    return;
  }

  if (dom.emptyState) dom.emptyState.style.display = 'none';

  dom.weaponsGrid.innerHTML = weapons.map(weapon => buildWeaponCard(weapon)).join('');

  requestAnimationFrame(() => {
    dom.weaponsGrid.querySelectorAll('.weapon-card').forEach(card => {
      card.style.opacity = '1';
    });
  });
}

/* ===== 构建单张武器卡片HTML ===== */
function buildWeaponCard(w) {
  const isFavorited = state.favorites.includes(w.id);
  const rarityClass = RARITY_CLASS_MAP[w.rarity] || 'common';
  const stats = w.stats;

  const attrItems = [
    { key: 'damage', cls: 'dmg', val: stats.damage },
    { key: 'range', cls: 'rng', val: stats.range },
    { key: 'fireRate', cls: 'rate', val: stats.fireRate },
    { key: 'accuracy', cls: 'acc', val: stats.accuracy },
    { key: 'stability', cls: 'stab', val: stats.stability },
    { key: 'mobility', cls: 'mob', val: stats.mobility },
  ].slice(0, 4);

  const attrHtml = attrItems.map(a =>
    `<div class="weapon-card__attr-row">
      <span class="weapon-card__attr-label">${STAT_LABELS[a.key]}</span>
      <div class="weapon-card__attr-track">
        <div class="weapon-card__attr-fill weapon-card__attr-fill--${a.cls}" style="width:${a.val}%"></div>
      </div>
      <span class="weapon-card__attr-value">${a.val}</span>
    </div>`
  ).join('');

  return `
    <article class="weapon-card weapon-card--${rarityClass}"
             data-weapon-id="${w.id}"
             role="button"
             tabindex="0"
             aria-label="查看${w.name}详情">
      <div class="weapon-card__image-wrapper">
        <img class="weapon-card__image" src="${w.image}" alt="${w.name}" loading="lazy">
        <span class="weapon-card__type-badge">${w.typeName}</span>
        <span class="weapon-card__rarity-badge weapon-card__rarity-badge--${rarityClass}">${w.rarityName}</span>
        <button class="weapon-card__favorite-btn ${isFavorited ? 'favorited' : ''}"
                data-fav-toggle="${w.id}"
                aria-label="${isFavorited ? '取消收藏' : '添加收藏'}"
                title="收藏">★</button>
      </div>
      <div class="weapon-card__info">
        <div class="weapon-card__header">
          <div>
            <h3 class="weapon-card__name">${w.name}</h3>
            <span class="weapon-card__name-en">${w.nameEn}</span>
          </div>
          <span class="weapon-card__level">Lv.${w.unlockLevel}</span>
        </div>
        <div class="weapon-card__attributes">${attrHtml}</div>
        <div class="weapon-card__footer">
          <span class="weapon-card__mag">
            <span class="weapon-card__mag-icon">📦</span>
            弹容 ${stats.magSize}
          </span>
          <span class="weapon-card__action">
            查看详情 →
          </span>
        </div>
      </div>

      <div class="weapon-card__stats-bar">
        <div class="weapon-card__stat-mini"><div class="weapon-card__stat-mini-value">${stats.damage}</div><div class="weapon-card__stat-mini-label">伤害</div></div>
        <div class="weapon-card__stat-mini"><div class="weapon-card__stat-mini-value">${stats.range}</div><div class="weapon-card__stat-mini-label">射程</div></div>
        <div class="weapon-card__stat-mini"><div class="weapon-card__stat-mini-value">${stats.fireRate}</div><div class="weapon-card__stat-mini-label">射速</div></div>
        <div class="weapon-card__stat-mini"><div class="weapon-card__stat-mini-value">${stats.accuracy}</div><div class="weapon-card__stat-mini-label">精准</div></div>
        <div class="weapon-card__stat-mini"><div class="weapon-card__stat-mini-value">${stats.stability}</div><div class="weapon-card__stat-mini-label">稳定</div></div>
        <div class="weapon-card__stat-mini"><div class="weapon-card__stat-mini-value">${stats.mobility}</div><div class="weapon-card__stat-mini-label">机动</div></div>
      </div>
    </article>`;
}

/* ===== 卡片点击处理（事件委托） ===== */
function handleCardClick(e) {
  const favToggle = e.target.closest('[data-fav-toggle]');
  if (favToggle) {
    toggleFavorite(favToggle.dataset.favToggle, e);
    return;
  }

  const card = e.target.closest('.weapon-card[data-weapon-id]');
  if (card && !e.target.closest('.weapon-card__favorite-btn')) {
    openWeaponDetail(card.dataset.weaponId);
  }
}

/* ===== 打开武器详情模态框 ===== */
function openWeaponDetail(weaponId) {
  const weapon = getWeaponById(weaponId);
  if (!weapon) return;

  renderWeaponModalContent(weapon);
  showModal();
}

/* ===== 渲染模态框内容 ===== */
function renderWeaponModalContent(w) {
  if (!dom.modalContent) return;
  const s = w.stats;
  const ds = w.detailedStats;
  const rarityClass = RARITY_CLASS_MAP[w.rarity] || 'common';

  const attrListHtml = [
    { key: 'damage', label: '伤害', cls: 'dmg', val: s.damage },
    { key: 'range', label: '射程', cls: 'rng', val: s.range },
    { key: 'fireRate', label: '射速', cls: 'rate', val: s.fireRate },
    { key: 'accuracy', label: '精准度', cls: 'acc', val: s.accuracy },
    { key: 'stability', label: '稳定性', cls: 'stab', val: s.stability },
    { key: 'mobility', label: '便携性', cls: 'mob', val: s.mobility },
  ].map(a =>
    `<div class="weapon-modal__attr-item">
      <span class="weapon-modal__attr-name">${a.label}</span>
      <div class="weapon-modal__attr-bar">
        <div class="weapon-modal__attr-bar-fill weapon-modal__attr-bar-fill--${a.cls}" style="width:${a.val}%"></div>
      </div>
      <span class="weapon-modal__attr-val">${a.val}</span>
    </div>`
  ).join('');

  const detailCellsHtml = [
    { label: '头部倍率', value: `×${ds.headMultiplier}` },
    { label: '腿部倍率', value: `×${ds.legMultiplier}` },
    { label: '弹速(m/s)', value: ds.bulletVelocity },
    { label: '换弹时间(s)', value: ds.reloadTime },
    { label: '开镜时间(s)', value: ds.adsTime },
    { label: 'TTK(无甲)', value: ds.ttk.noArmor + 's' },
  ].map(c =>
    `<div class="weapon-modal__data-cell">
      <div class="weapon-modal__data-cell-label">${c.label}</div>
      <div class="weapon-modal__data-cell-value">${c.value}</div>
    </div>`
  ).join('');

  const attachmentKeys = ['muzzle', 'barrel', 'laser', 'optic', 'underbarrel', 'stock'];
  const attachmentLabels = {
    muzzle: '枪口',
    barrel: '枪管',
    laser: '激光',
    optic: '瞄准镜',
    underbarrel: '下挂',
    stock: '枪托',
  };
  const attachmentIcons = {
    muzzle: '🔧',
    barrel: '📏',
    laser: '🔦',
    optic: '👁️',
    underbarrel: '🔩',
    stock: '🪵',
  };

  const slotsHtml = attachmentKeys.map(key => {
    const options = w.attachments[key] || [];
    if (options.length === 0 || options[0] === '无') return '';
    return `
      <div class="attachment-slot">
        <div class="attachment-slot__label">
          <span class="attachment-slot__icon">${attachmentIcons[key] || '📌'}</span>
          ${attachmentLabels[key] || key}
        </div>
        <div class="attachment-slot__options">
          ${options.map(opt => `<span class="attachment-slot__option">${opt}</span>`).join('')}
        </div>
      </div>`;
  }).join('');

  const buildsHtml = (w.recommendedBuilds || []).map(build => {
    const styleCls = build.playstyle === 'aggressive' ? 'aggressive' : 'defensive';
    const styleLabel = build.playstyle === 'aggressive' ? '进攻型' : '防守型';
    const loadoutItems = Object.entries(build.loadout || {})
      .filter(([k, v]) => v && v !== '无')
      .map(([k, v]) => {
        const labelMap = { muzzle: '枪口', barrel: '枪管', laser: '激光', optic: '瞄具', underbarrel: '下挂', stock: '枪托' };
        return `<span class="build-card__loadout-item">${labelMap[k] || k}: ${v}</span>`;
      }).join('');
    return `
      <div class="build-card">
        <div class="build-card__header">
          <span class="build-card__name">${build.name}</span>
          <span class="build-card__style build-card__style--${styleCls}">${styleLabel}</span>
        </div>
        <p class="build-card__desc">${build.description}</p>
        <div class="build-card__loadout">${loadoutItems}</div>
      </div>`;
  }).join('');

  const tipsHtml = (w.tips || []).map(tip =>
    `<li>${tip}</li>`
  ).join('');

  const isFavorited = state.favorites.includes(w.id);

  dom.modalContent.innerHTML = `
    <button class="weapon-modal__close" id="weaponModalCloseInner" aria-label="关闭详情">&times;</button>

    <div class="weapon-modal__visual">
      <img class="weapon-modal__image" src="${w.image}" alt="${w.name}">
      <div class="weapon-modal__visual-meta">
        <div class="weapon-modal__visual-name">${w.name}</div>
        <div class="weapon-modal__visual-type">${w.typeName} · ${w.rarityName}</div>
      </div>
    </div>

    <div class="weapon-modal__details">
      <div class="weapon-modal__title-row">
        <div>
          <h2 class="weapon-modal__name modal__title" style="margin-bottom:2px;">${w.name}</h2>
          <span class="weapon-modal__name-en">${w.nameEn}</span>
        </div>
        <div class="weapon-modal__badges">
          <span class="tag tag--${rarityClass === 'epic' ? 'advanced' : rarityClass === 'rare' ? 'intermediate' : 'beginner'}">${w.rarityName}</span>
          <span class="tag">Lv.${w.unlockLevel}</span>
          <button class="btn btn--sm" id="modalFavBtn"
                  style="padding:4px 10px;font-size:11px;">
            ${isFavorited ? '★ 已收藏' : '☆ 收藏'}
          </button>
        </div>
      </div>

      <div class="weapon-modal__radar-section">
        <h4 class="weapon-modal__section-title">📊 六维属性雷达</h4>
        <div class="weapon-radar-container">
          <canvas id="detailRadarCanvas" width="280" height="280"></canvas>
        </div>
      </div>

      <div class="weapon-modal__attrs-list">${attrListHtml}</div>

      <div class="weapon-modal__data-table">
        <h4 class="weapon-modal__section-title">📋 详细数据</h4>
        <div class="weapon-modal__data-grid">${detailCellsHtml}</div>
      </div>

      <div class="weapon-modal__attachments">
        <h4 class="weapon-modal__section-title">🔧 可用配件槽位</h4>
        <div class="attachment-slots">${slotsHtml || '<p style="color:var(--color-text-muted);font-size:13px;">暂无配件信息</p>'}</div>
      </div>

      ${buildsHtml ? `
      <div class="weapon-modal__builds">
        <h4 class="weapon-modal__section-title">⚡ 推荐配装方案</h4>
        ${buildsHtml}
      </div>` : ''}

      ${tipsHtml ? `
      <div class="weapon-modal__tips">
        <h4 class="weapon-modal__section-title">💡 使用技巧</h4>
        <ul>${tipsHtml}</ul>
      </div>` : ''}

      <div class="weapon-modal__actions">
        <span class="weapon-modal__compare-hint">💡 在下方对比区可与其他武器进行属性对比</span>
        <button class="btn btn--primary btn--sm" id="modalAddCompareBtn" data-compare-add="${w.id}">
          + 加入对比
        </button>
      </div>
    </div>`;

  requestAnimationFrame(() => {
    drawRadarChart('detailRadarCanvas', [w]);

    const innerClose = document.getElementById('weaponModalCloseInner');
    if (innerClose) innerClose.addEventListener('click', closeWeaponModal);

    const favBtn = document.getElementById('modalFavBtn');
    if (favBtn) {
      favBtn.addEventListener('click', () => toggleFavorite(w.id));
    }

    const addCompareBtn = document.getElementById('modalAddCompareBtn');
    if (addCompareBtn) {
      addCompareBtn.addEventListener('click', () => addToCompare(w.id));
    }
  });
}

/* ===== 显示模态框 ===== */
function showModal() {
  if (dom.modalBackdrop) {
    dom.modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

/* ===== 关闭模态框 ===== */
function closeWeaponModal() {
  if (dom.modalBackdrop) {
    dom.modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* ===== 点击遮罩关闭 ===== */
function handleBackdropClick(e) {
  if (e.target === dom.modalBackdrop) {
    closeWeaponModal();
  }
}

/* ===== 键盘事件处理 ===== */
function handleKeydown(e) {
  if (e.key === 'Escape') {
    closeWeaponModal();
    if (dom.favoritesPanel?.classList.contains('open')) {
      toggleFavoritesPanel();
    }
  }
}

/* ==================== 武器对比功能 ==================== */

/* ===== 添加武器到对比槽 ===== */
function addToCompare(weaponId) {
  if (state.compareList.includes(weaponId)) return;
  if (state.compareList.length >= state.maxCompareSlots) {
    showToast(`最多同时对比${state.maxCompareSlots}把武器`, 'warning');
    return;
  }
  state.compareList.push(weaponId);
  renderCompareSlots();
  drawCompareRadar();
  closeWeaponModal();
}

/* ===== 从对比槽移除武器 ===== */
function removeFromCompare(index) {
  state.compareList.splice(index, 1);
  renderCompareSlots();
  drawCompareRadar();
}

/* ===== 清空对比 ===== */
function clearCompare() {
  state.compareList = [];
  renderCompareSlots();
  drawCompareRadar();
}

/* ===== 对比槽位点击 ===== */
function handleCompareSlotClick(slotIndex) {
  if (state.compareList[slotIndex]) return;

  const typeFilter = state.currentType !== 'all' ? state.currentType : null;
  let available = weaponsDatabase.filter(w => !state.compareList.includes(w.id));
  if (typeFilter) available = available.filter(w => w.type === typeFilter);

  if (available.length === 0) {
    showToast('没有可选武器了', 'warning');
    return;
  }

  state.compareList[slotIndex] = available[0].id;
  renderCompareSlots();
  drawCompareRadar();
}

/* ===== 渲染对比槽位 ===== */
function renderCompareSlots() {
  dom.compareSlots.forEach((slot, index) => {
    const weaponId = state.compareList[index];
    if (weaponId) {
      const w = getWeaponById(weaponId);
      if (!w) return;
      const s = w.stats;
      slot.classList.add('filled');
      slot.innerHTML = `
        <div class="compare-slot__weapon">
          <div class="compare-slot__weapon-header">
            <span class="compare-slot__weapon-name">${w.name}</span>
            <button class="compare-slot__remove" data-remove-compare="${index}" title="移除">×</button>
          </div>
          <img class="compare-slot__weapon-image" src="${w.image}" alt="${w.name}">
          <div class="compare-slot__weapon-type">${w.typeName}</div>
          <div class="compare-slot__weapon-stats">
            <div class="compare-slot__stat-row"><span class="compare-slot__stat-label">伤害</span><span class="compare-slot__stat-value">${s.damage}</span></div>
            <div class="compare-slot__stat-row"><span class="compare-slot__stat-label">射程</span><span class="compare-slot__stat-value">${s.range}</span></div>
            <div class="compare-slot__stat-row"><span class="compare-slot__stat-label">射速</span><span class="compare-slot__stat-value">${s.fireRate}</span></div>
            <div class="compare-slot__stat-row"><span class="compare-slot__stat-label">精准</span><span class="compare-slot__stat-value">${s.accuracy}</span></div>
            <div class="compare-slot__stat-row"><span class="compare-slot__stat-label">稳定</span><span class="compare-slot__stat-value">${s.stability}</span></div>
            <div class="compare-slot__stat-row"><span class="compare-slot__stat-label">机动</span><span class="compare-slot__stat-value">${s.mobility}</span></div>
          </div>
        </div>`;

      slot.querySelector('[data-remove-compare]').addEventListener('click', e => {
        e.stopPropagation();
        removeFromCompare(parseInt(e.target.dataset.removeCompare));
      });
    } else {
      slot.classList.remove('filled');
      slot.innerHTML = `
        <div class="compare-slot__placeholder">
          <div class="compare-slot__placeholder-icon">+</div>
          <div class="compare-slot__placeholder-text">槽位 ${index + 1}</div>
          <div class="compare-slot__placeholder-hint">点击选择武器</div>
        </div>`;
    }
  });
}

/* ===== 绘制对比雷达图 ===== */
function drawCompareRadar() {
  if (!dom.compareCanvas || !dom.compareRadarArea || !dom.compareEmpty) return;

  const weapons = state.compareList.map(id => getWeaponById(id)).filter(Boolean);

  if (weapons.length < 2) {
    dom.compareRadarArea.style.display = 'none';
    dom.compareEmpty.style.display = '';
    if (weapons.length === 0) {
      dom.compareEmpty.innerHTML = `
        <div class="compare-empty-state">
          <div class="compare-empty-state__icon">📊</div>
          <p class="compare-empty-state__text">选择2-3把武器开始对比</p>
          <p class="compare-empty-state__hint">点击上方空槽位或从武器详情页添加</p>
        </div>`;
    } else {
      dom.compareEmpty.innerHTML = `
        <div class="compare-empty-state">
          <div class="compare-empty-state__icon">⏳</div>
          <p class="compare-empty-state__text">还需再选择${2 - weapons.length}把武器</p>
          <p class="compare-empty-state__hint">至少需要2把武器才能生成对比图表</p>
        </div>`;
    }
    return;
  }

  dom.compareRadarArea.style.display = 'flex';
  dom.compareEmpty.style.display = 'none';

  const containerWidth = dom.compareRadarArea.clientWidth - 48;
  const size = Math.min(containerWidth, 500);
  dom.compareCanvas.width = size;
  dom.compareCanvas.height = size;

  drawRadarChart('compareRadarCanvas', weapons, true);
}

/* ==================== Canvas 雷达图绘制引擎 ==================== */

/**
 * 绘制六维雷达图
 * @param {string} canvasId - Canvas元素ID
 * @param {Array} weapons - 武器数据数组
 * @param {boolean} isMulti - 是否为多武器对比模式
 */
function drawRadarChart(canvasId, weapons, isMulti = false) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const W = canvas.width;
  const H = canvas.height;
  const cx = W / 2;
  const cy = H / 2;
  const radius = Math.min(cx, cy) * 0.72;
  const sides = 6;

  const statKeys = ['damage', 'range', 'fireRate', 'accuracy', 'stability', 'mobility'];
  const labels = ['伤害', '射程', '射速', '精准', '稳定', '机动'];

  ctx.clearRect(0, 0, W, H);

  const angleStep = (Math.PI * 2) / sides;
  const startAngle = -Math.PI / 2;

  for (let level = 5; level >= 1; level--) {
    const r = radius * (level / 5);
    ctx.beginPath();
    for (let i = 0; i <= sides; i++) {
      const angle = startAngle + i * angleStep;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = level === 5 ? 'rgba(0,255,65,0.25)' : 'rgba(0,255,65,0.08)';
    ctx.lineWidth = level === 5 ? 1.5 : 0.5;
    ctx.stroke();

    if (level % 1 === 0 && level < 5) {
      ctx.fillStyle = 'rgba(138,138,138,0.35)';
      ctx.font = '10px "Chakra Petch", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(level * 20 + '', cx + 4, cy - r + 4);
    }
  }

  for (let i = 0; i < sides; i++) {
    const angle = startAngle + i * angleStep;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;

    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(x, y);
    ctx.strokeStyle = 'rgba(0,255,65,0.12)';
    ctx.lineWidth = 1;
    ctx.stroke();

    const labelRadius = radius + 22;
    const lx = cx + Math.cos(angle) * labelRadius;
    const ly = cy + Math.sin(angle) * labelRadius;

    ctx.save();
    ctx.fillStyle = '#e0e0e0';
    ctx.font = 'bold 12px "Share Tech Mono", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(labels[i], lx, ly);
    ctx.restore();
  }

  const colors = [
    'rgba(0, 255, 65, 0.25)',
    'rgba(0, 191, 255, 0.25)',
    'rgba(255, 215, 0, 0.25)',
  ];
  const strokeColors = [
    '#00ff41',
    '#00bfff',
    '#ffd700',
  ];

  weapons.forEach((weapon, wIndex) => {
    const values = statKeys.map(key => weapon.stats[key]);
    const points = values.map((val, i) => {
      const angle = startAngle + i * angleStep;
      const r = radius * (val / 100);
      return {
        x: cx + Math.cos(angle) * r,
        y: cy + Math.sin(angle) * r,
      };
    });

    ctx.beginPath();
    points.forEach((pt, i) => {
      if (i === 0) ctx.moveTo(pt.x, pt.y);
      else ctx.lineTo(pt.x, pt.y);
    });
    ctx.closePath();

    ctx.fillStyle = colors[wIndex % colors.length];
    ctx.fill();

    ctx.strokeStyle = strokeColors[wIndex % strokeColors.length];
    ctx.lineWidth = isMulti ? 2 : 2.5;
    ctx.stroke();

    ctx.shadowColor = strokeColors[wIndex % strokeColors.length];
    ctx.shadowBlur = isMulti ? 8 : 12;
    ctx.stroke();
    ctx.shadowBlur = 0;

    points.forEach((pt, i) => {
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, isMulti ? 3.5 : 4.5, 0, Math.PI * 2);
      ctx.fillStyle = strokeColors[wIndex % strokeColors.length];
      ctx.fill();
    });
  });

  if (isMulti && weapons.length > 1) {
    const legendX = 12;
    let legendY = 16;
    weapons.forEach((w, i) => {
      ctx.fillStyle = strokeColors[i % strokeColors.length];
      ctx.fillRect(legendX, legendY - 6, 14, 3);
      ctx.fillStyle = '#c0c0c0';
      ctx.font = '11px "Share Tech Mono", monospace';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillText(w.name, legendX + 20, legendY - 3);
      legendY += 18;
    });
  }
}

/* ===== 收藏面板开关 ===== */
function toggleFavoritesPanel() {
  if (!dom.favoritesPanel) return;
  dom.favoritesPanel.classList.toggle('open');
}

/* ===== Toast提示 ===== */
function showToast(message, type = 'info') {
  const existing = document.getElementById('toastNotification');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'toastNotification';
  toast.style.cssText = `
    position: fixed; top: 80px; left: 50%; transform: translateX(-50%) translateY(-20px);
    padding: 12px 24px; border-radius: 6px; font-family: var(--font-body); font-size: 14px;
    z-index: 9999; opacity: 0; transition: all 0.3s ease;
    background: ${
      type === 'warning' ? 'rgba(255,215,0,0.15)' :
      type === 'error' ? 'rgba(255,51,51,0.15)' :
      'rgba(0,255,65,0.15)'
    };
    border: 1px solid ${
      type === 'warning' ? 'rgba(255,215,0,0.4)' :
      type === 'error' ? 'rgba(255,51,51,0.4)' :
      'rgba(0,255,65,0.4)'
    };
    color: ${
      type === 'warning' ? '#ffd700' :
      type === 'error' ? '#ff3333' :
      '#00ff41'
    }; box-shadow: 0 8px 32px rgba(0,0,0,0.4); backdrop-filter: blur(12px);
  `;
  toast.textContent = message;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
  });

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(-20px)';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

/* ===== 返回顶部按钮 ===== */
function initBackToTop() {
  if (!dom.backToTop) return;
  dom.backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function handleScroll() {
  if (!dom.backToTop) return;
  const visible = window.scrollY > 400;
  dom.backToTop.classList.toggle('visible', visible);
}

/* ===== 工具函数：防抖 ===== */
function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

/* ===== 工具函数：节流 ===== */
function throttle(fn, limit) {
  let inThrottle = false;
  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/* ===== 启动 ===== */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
