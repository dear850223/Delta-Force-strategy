/**
 * 战术地图页面主逻辑 - Maps Page Script
 * 负责地图选择器、图层控制、工具栏交互等
 */

document.addEventListener('DOMContentLoaded', () => {
  // 初始化地图选择器
  initMapSelector();
  
  // 初始化地图引擎
  const mapEngine = new MapEngine('mapViewer');
  window.mapEngine = mapEngine; // 暴露给全局以便调试
  
  // 初始化工具栏
  initToolbar(mapEngine);
  
  // 初始化图层控制
  initLayerPanel(mapEngine);
  
  // 初始化详情面板关闭按钮
  initDetailPanel();
  
  // 初始化返回顶部按钮
  initBackToTop();
});

/**
 * 初始化地图选择器
 */
function initMapSelector() {
  const grid = document.getElementById('mapGrid');
  if (!grid) return;

  try {
    const maps = getAllMaps();
    
    // 地图图标映射
    const mapIcons = {
      'longa_valley': '🏔️',
      'desert_fortress': '🏜️',
      'arctic_base': '❄️',
      'urban_downtown': '🏙️'
    };

    grid.innerHTML = maps.map(map => `
      <div class="map-card" data-map-id="${map.id}" tabindex="0" role="button"
           aria-label="查看${map.name}战术地图">
        <div class="map-card__preview">
          ${mapIcons[map.id] || '🗺️'}
        </div>
        <div class="map-card__info">
          <h3 class="map-card__name">${map.name}</h3>
          <p class="map-card__name-en">${map.nameEn}</p>
          <div class="map-card__modes">
            ${map.modeSupport.map(mode => 
              `<span class="map-card__mode-tag">${map.modeNames[mode]}</span>`
            ).join('')}
          </div>
        </div>
      </div>
    `).join('');

    // 绑定点击事件
    grid.querySelectorAll('.map-card').forEach(card => {
      card.addEventListener('click', () => selectMap(card.dataset.mapId));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectMap(card.dataset.mapId);
        }
      });
    });

    // 默认选中第一张地图
    if (maps.length > 0) {
      selectMap(maps[0].id);
    }

  } catch (error) {
    console.error('加载地图数据失败:', error);
    grid.innerHTML = '<p style="color: var(--color-text-muted); padding: 2rem; grid-column: 1 / -1;">地图数据加载中...</p>';
  }
}

/**
 * 选择并加载地图
 */
function selectMap(mapId) {
  const mapData = getMapById(mapId);
  if (!mapData) return;

  // 更新卡片选中状态
  document.querySelectorAll('.map-card').forEach(card => {
    card.classList.toggle('active', card.dataset.mapId === mapId);
  });

  // 显示地图查看器
  const viewer = document.getElementById('mapViewer');
  if (viewer) {
    viewer.classList.add('active');
  }

  // 加载地图到引擎
  if (window.mapEngine) {
    window.mapEngine.loadMap(mapData);
  }

  // 更新概览信息卡
  updateOverviewCard(mapData);
}

/**
 * 更新地图概览信息卡
 */
function updateOverviewCard(mapData) {
  const card = document.getElementById('mapOverviewCard');
  if (!card || !mapData) return;

  card.hidden = false;

  // 基本信息
  document.getElementById('overviewTitle').textContent = mapData.name;
  
  // 标签
  const tagsContainer = document.getElementById('overviewTags');
  tagsContainer.innerHTML = map.modeSupport.map(mode => 
    `<span class="tag tag--beginner">${mapData.modeNames[mode]}</span>`
  ).join('');
  
  // 描述
  document.getElementById('overviewDesc').textContent = mapData.description;
  
  // 统计数据
  document.getElementById('overviewMaxPlayers').textContent = `${mapData.maxPlayers}v${mapData.maxPlayers}`;
  document.getElementById('overviewSize').textContent = mapData.metadata?.mapSize || '未知';
  document.getElementById('overviewPoints').textContent = mapData.pointsOfInterest.length;
  document.getElementById('overviewRoutes').textContent = mapData.tacticalRoutes.length;
  
  // 通用建议
  const tipsList = document.getElementById('overviewTipsList');
  tipsList.innerHTML = '';
  if (mapData.generalTips && mapData.generalTips.length > 0) {
    mapData.generalTips.forEach(tip => {
      const li = document.createElement('li');
      li.textContent = tip;
      tipsList.appendChild(li);
    });
  }
  
  // 推荐武器
  const weaponsContainer = document.getElementById('overviewWeapons');
  weaponsContainer.innerHTML = '';
  if (mapData.weaponRecommendations) {
    Object.entries(mapData.weaponRecommendations).forEach(([category, weapons]) => {
      weapons.forEach(weaponName => {
        const tag = document.createElement('a');
        tag.className = 'map-overview-card__weapon-tag';
        tag.href = `weapons.html`;
        tag.textContent = weaponName;
        weaponsContainer.appendChild(tag);
      });
    });
  }

  // 滚动到信息卡位置
  setTimeout(() => {
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 300);
}

/**
 * 初始化工具栏
 */
function initToolbar(engine) {
  // 放大按钮
  const zoomInBtn = document.getElementById('zoomIn');
  if (zoomInBtn) {
    zoomInBtn.addEventListener('click', () => engine.zoomIn());
  }

  // 缩小按钮
  const zoomOutBtn = document.getElementById('zoomOut');
  if (zoomOutBtn) {
    zoomOutBtn.addEventListener('click', () => engine.zoomOut());
  }

  // 重置视图按钮
  const resetBtn = document.getElementById('resetView');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => engine.resetView());
  }

  // 网格切换按钮
  const toggleGridBtn = document.getElementById('toggleGrid');
  if (toggleGridBtn) {
    toggleGridBtn.addEventListener('click', function() {
      this.classList.toggle('map-toolbar__btn--active');
      engine.toggleGrid(this.classList.contains('map-toolbar__btn--active'));
    });
  }
}

/**
 * 初始化图层控制面板
 */
function initLayerPanel(engine) {
  const panel = document.getElementById('layerPanel');
  if (!panel) return;

  // 移动端：添加切换按钮
  if (window.innerWidth <= 768) {
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'btn';
    toggleBtn.id = 'layerToggle';
    toggleBtn.textContent = '📋 图层控制';
    toggleBtn.style.cssText = 'position: absolute; right: 10px; bottom: 10px; z-index: 60;';
    
    const container = document.querySelector('.map-container');
    if (container) {
      container.appendChild(toggleBtn);
    }
    
    toggleBtn.addEventListener('click', () => {
      panel.classList.toggle('open');
    });
  }

  // 绑定复选框事件
  panel.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const layerName = this.dataset.layer;
      engine.toggleLayer(layerName);
      
      // 同步网格按钮状态
      if (layerName === 'grid') {
        const gridBtn = document.getElementById('toggleGrid');
        if (gridBtn) {
          gridBtn.classList.toggle('map-toolbar__btn--active', this.checked);
        }
      }
    });
  });
}

/**
 * 初始化详情面板关闭功能
 */
function initDetailPanel() {
  const closeBtn = document.getElementById('closeDetail');
  const panel = document.getElementById('pointDetailPanel');

  if (closeBtn && panel) {
    closeBtn.addEventListener('click', () => {
      panel.hidden = true;
    });

    // ESC键关闭
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !panel.hidden) {
        panel.hidden = true;
      }
    });
  }
}

/**
 * 返回顶部按钮
 */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (window.scrollY > 400) {
          btn.classList.add('visible');
        } else {
          btn.classList.remove('visible');
        }
        ticking = false;
      });
      ticking = true;
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
