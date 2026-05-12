/**
 * 数据中心页面逻辑 - Data Center Controller
 * 功能：TTK排行榜 / 伤害计算器 / 弹道物理模拟器 / 版本对比 / Tab切换
 */

import weaponsDatabase from './data/weapons-data.js';

'use strict';

/* ===== 常量定义 ===== */
const GRAVITY = 9.8;
const AIR_DENSITY = 1.225;
const HP_TABLE = { 0: 100, 1: 100, 2: 150, 3: 200 };
const DISTANCE_TIERS = [0, 30, 60, 100];
const ARMOR_LABELS = { noArmor: '无甲', level1: '1级甲', level2: '2级甲', level3: '3级甲' };

const WEAPON_EMOJI_MAP = {
  m4a1: '🔫', ak47: '🔫', mp5: '💨', awm: '🔭',
  spas12: '💥', m1911: '🔫', m249: '🔥', p90: '💨'
};

/* ===== 状态管理 ===== */
const state = {
  activeTab: 'ttk',
  ttkArmorKey: 'noArmor',
  ttkHitZone: 'body',
  ttkSortField: 'ttk',
  ttkSortDir: 'asc',
  ballisticsAnimId: null,
  ballisticsTrailPoints: [],
};

/* ===== DOM引用缓存 ===== */
let dom = {};

/* ===== 版本对比数据（模拟） ===== */
const VERSION_DATA = {
  'v2.1': {
    overview: { buffed: 3, nerfed: 2, unchanged: 3, newWeapons: 0 },
    changes: [
      { weapon: 'M4A1突击步枪', stat: '基础伤害', oldVal: 75, newVal: 78, type: 'buff', impact: 'moderate' },
      { weapon: 'AK-47突击步枪', stat: '射速', oldVal: 65, newVal: 70, type: 'buff', impact: 'major' },
      { weapon: 'MP5冲锋枪', stat: '有效射程', oldVal: 40, newVal: 45, type: 'buff', impact: 'minor' },
      { weapon: 'AWM狙击步枪', stat: '弹容量', oldVal: 5, newVal: 5, type: 'neutral', impact: 'minor' },
      { weapon: 'SPAS-12霰弹枪', stat: '近战伤害', oldVal: 130, newVal: 120, type: 'nerf', impact: 'major' },
      { weapon: 'M1911手枪', stat: '换弹时间', oldVal: 1.8, newVal: 1.5, type: 'buff', impact: 'minor' },
      { weapon: 'M249轻机枪', stat: '机动性', oldVal: 40, newVal: 35, type: 'nerf', impact: 'moderate' },
      { weapon: 'P90个人防卫武器', stat: '精准度', oldVal: 76, newVal: 78, type: 'buff', impact: 'minor' },
    ],
    changelog: [
      { type: 'buff', title: 'AK-47 射速提升', desc: '射速从650RPM提升至700RPM，近战爆发力显著增强' },
      { type: 'nerf', title: 'SPAS-12 近战伤害下调', desc: '10米内单发伤害从130降至120，防止霰弹枪过度强势' },
      { type: 'buff', title: 'M4A1 基础伤害微调', desc: '基础伤害+3，提升中距离作战效率' },
      { type: 'nerf', title: 'M249 机动性削弱', desc: '移速降低5点，平衡其持续火力优势' },
      { type: 'buff', title: 'MP5 有效射程增加', desc: '有效射程从40m扩展至45m，增强中近距离压制能力' },
    ]
  },
  'v2.0': {
    overview: { buffed: 5, nerfed: 3, unchanged: 0, newWeapons: 2 },
    changes: [
      { weapon: 'AWM狙击步枪', stat: '躯干伤害', oldVal: 140, newVal: 150, type: 'buff', impact: 'major' },
      { weapon: 'P90个人防卫武器', stat: '新增武器', oldVal: '--', newVal: '--', type: 'new', impact: 'major' },
      { weapon: 'SPAS-12霰弹枪', stat: '新增武器', oldVal: '--', newVal: '--', type: 'new', impact: 'major' },
      { weapon: 'M4A1突击步枪', stat: '后坐力稳定性', oldVal: 62, newVal: 68, type: 'buff', impact: 'moderate' },
      { weapon: 'AK-47突击步枪', stat: '水平后坐力', oldVal: '高', newVal: '中高', type: 'buff', impact: 'moderate' },
      { weapon: 'M249轻机枪', stat: '换弹时间', oldVal: 6.5, newVal: 6.0, type: 'buff', impact: 'minor' },
      { weapon: 'MP5冲锋枪', stat: '腰射散布', oldVal: '低', newVal: '极低', type: 'nerf', impact: 'minor' },
      { weapon: 'M1911手枪', stat: '弹容量', oldVal: 8, newVal: 7, type: 'nerf', impact: 'minor' },
    ],
    changelog: [
      { type: 'new', title: '新增 P90 个人防卫武器', desc: '50发大弹容冲锋枪，高射速低后坐力的全能型武器' },
      { type: 'new', title: '新增 SPAS-12 霰弹枪', desc: '半自动泵动式霰弹枪，近战一击必杀的恐怖存在' },
      { type: 'buff', title: 'AWM 躯干伤害大幅提升', desc: '确保满级护甲下仍可一击必杀，巩固狙击之王地位' },
      { type: 'buff', title: '全平台 后坐力系统重做', desc: '重新平衡各武器后坐力模式，压枪手感更真实' },
    ]
  },
  'v1.5': {
    overview: { buffed: 4, nerfed: 4, unchanged: 0, newWeapons: 0 },
    changes: [
      { weapon: 'M4A1突击步枪', stat: '射程', oldVal: 58, newVal: 65, type: 'buff', impact: 'moderate' },
      { weapon: 'AK-47突击步枪', stat: '基础伤害', oldVal: 85, newVal: 88, type: 'buff', impact: 'moderate' },
      { weapon: 'MP5冲锋枪', stat: '机动性', oldVal: 85, newVal: 90, type: 'buff', impact: 'minor' },
      { weapon: 'AWM狙击步枪', stat: '开镜时间', oldVal: 0.50, newVal: 0.45, type: 'buff', impact: 'minor' },
      { weapon: 'M249轻机枪', stat: '精准度', oldVal: 58, newVal: 62, type: 'nerf', impact: 'minor' },
      { weapon: 'M1911手枪', stat: '基础伤害', oldVal: 62, newVal: 58, type: 'nerf', impact: 'moderate' },
      { weapon: 'M4A1突击步枪', stat: '弹容量', oldVal: 55, newVal: 60, type: 'buff', impact: 'minor' },
      { weapon: 'AK-47突击步枪', stat: '弹容量', oldVal: 50, newVal: 55, type: 'buff', impact: 'minor' },
    ],
    changelog: [
      { type: 'buff', title: 'M4A1 全方位加强', desc: '射程+7、弹容+5、稳定性+6，成为版本T0突击步枪' },
      { type: 'nerf', title: 'M1911 伤害回调', desc: '基础伤害从62降至58，避免副武器过于强势' },
      { type: 'buff', title: 'AK-47 伤害与弹容双增', desc: '单发伤害+3至88，弹容+5至55，持续作战更强' },
    ]
  }
};

/* ===== 初始化入口 ===== */
function init() {
  cacheDom();
  initTabs();
  initTTK();
  initCalculator();
  initBallistics();
  initVersionCompare();
  initBackToTop();
  bindGlobalEvents();
}

/* ===== 缓存DOM引用 ===== */
function cacheDom() {
  dom = {
    tabs: document.querySelectorAll('.data-tab'),
    panels: document.querySelectorAll('.data-panel'),
    /* TTK */
    armorFilterBtns: document.getElementById('armorFilterBtns'),
    hitZoneSelect: document.getElementById('hitZoneSelect'),
    ttkTableBody: document.getElementById('ttkTableBody'),
    ttkTable: document.getElementById('ttkTable'),
    ttkSummaryGrid: document.getElementById('ttkSummaryGrid'),
    /* 计算器 */
    calcWeaponSelect: document.getElementById('calcWeaponSelect'),
    calcDistanceSlider: document.getElementById('calcDistanceSlider'),
    calcDistanceValue: document.getElementById('calcDistanceValue'),
    calcArmorSelect: document.getElementById('calcArmorSelect'),
    calcHitZoneSelect: document.getElementById('calcHitZoneSelect'),
    calcRunBtn: document.getElementById('calcRunBtn'),
    calcDamageResult: document.getElementById('calcDamageResult'),
    calcShotsResult: document.getElementById('calcShotsResult'),
    calcTtkResult: document.getElementById('calcTtkResult'),
    calcFlightTime: document.getElementById('calcFlightTime'),
    calcDecayCanvas: document.getElementById('calcDecayCanvas'),
    calcBarsContainer: document.getElementById('calcBarsContainer'),
    calcFormulaContent: document.getElementById('calcFormulaContent'),
    /* 弹道 */
    ballisticsCanvas: document.getElementById('ballisticsCanvas'),
    velocitySlider: document.getElementById('velocitySlider'),
    velocityValue: document.getElementById('velocityValue'),
    angleSlider: document.getElementById('angleSlider'),
    angleValue: document.getElementById('angleValue'),
    massSlider: document.getElementById('massSlider'),
    massValue: document.getElementById('massValue'),
    dragSlider: document.getElementById('dragSlider'),
    dragValue: document.getElementById('dragValue'),
    windSlider: document.getElementById('windSlider'),
    windValue: document.getElementById('windValue'),
    ballisticsFireBtn: document.getElementById('ballisticsFireBtn'),
    ballisticsResetBtn: document.getElementById('ballisticsResetBtn'),
    ballisticsAnimateBtn: document.getElementById('ballisticsAnimateBtn'),
    physicsDataPanel: document.getElementById('physicsDataPanel'),
    physRange: document.getElementById('physRange'),
    physMaxH: document.getElementById('physMaxH'),
    physTime: document.getElementById('physTime'),
    physImpactV: document.getElementById('physImpactV'),
    physEnergyLoss: document.getElementById('physEnergyLoss'),
    physDrift: document.getElementById('physDrift'),
    ballisticsOverlayInfo: document.getElementById('ballisticsOverlayInfo'),
    /* 版本对比 */
    versionSelectorBtns: document.getElementById('versionSelectorBtns'),
    versionOverviewGrid: document.getElementById('versionOverviewGrid'),
    versionTableBody: document.getElementById('versionTableBody'),
    changelogList: document.getElementById('changelogList'),
    /* 返回顶部 */
    backToTop: document.getElementById('backToTop'),
  };
}

/* ==================== Tab切换逻辑 ==================== */
function initTabs() {
  dom.tabs.forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab));
  });
}

function switchTab(tabId) {
  state.activeTab = tabId;
  dom.tabs.forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tabId);
    t.setAttribute('aria-selected', t.dataset.tab === tabId);
  });
  dom.panels.forEach(p => {
    p.classList.toggle('active', p.id === 'panel-' + tabId);
  });
  if (tabId === 'ballistics') {
    requestAnimationFrame(() => resizeBallisticsCanvas());
  }
  if (tabId === 'calculator') {
    requestAnimationFrame(() => runCalculator());
  }
}

/* ==================== TTK排行榜模块 ==================== */
function initTTK() {
  if (dom.armorFilterBtns) {
    dom.armorFilterBtns.querySelectorAll('.ttk-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        dom.armorFilterBtns.querySelectorAll('.ttk-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.ttkArmorKey = btn.dataset.armor;
        renderTTKTable();
        renderTTKSummary();
      });
    });
  }
  if (dom.hitZoneSelect) {
    dom.hitZoneSelect.addEventListener('change', (e) => {
      state.ttkHitZone = e.target.value;
      renderTTKTable();
      renderTTKSummary();
    });
  }
  if (dom.ttkTable) {
    dom.ttkTable.querySelectorAll('th[data-sort]').forEach(th => {
      th.addEventListener('click', () => handleTTKSort(th));
    });
  }
  renderTTKTable();
  renderTTKSummary();
}

function handleTTKSort(th) {
  const field = th.dataset.sort;
  if (state.ttkSortField === field) {
    state.ttkSortDir = state.ttkSortDir === 'asc' ? 'desc' : 'asc';
  } else {
    state.ttkSortField = field;
    state.ttkSortDir = field === 'ttk' || field === 'shots' ? 'asc' : 'desc';
  }
  dom.ttkTable.querySelectorAll('th').forEach(h => {
    h.classList.remove('sort-asc', 'sort-desc');
    if (h.dataset.sort) {
      const arrows = h.querySelector('.sort-arrows');
      if (arrows) arrows.style.display = '';
    }
  });
  th.classList.add(state.ttkSortDir === 'asc' ? 'sort-asc' : 'sort-desc');
  renderTTKTable();
}

function computeTTKData(weapon, armorKey, hitZone) {
  const ds = weapon.detailedStats;
  const baseDmg = ds.bodyDamage[0];
  let mult = hitZone === 'head' ? ds.headMultiplier : hitZone === 'leg' ? ds.legMultiplier : 1;

  const hp = HP_TABLE[{ noArmor: 0, level1: 1, level2: 2, level3: 3 }[armorKey] || 0] || 100;
  const dmgPerShot = Math.round(baseDmg * mult);
  const shots = Math.ceil(hp / dmgPerShot);

  const fireRateMap = { 20: 120, 35: 240, 65: 650, 70: 700, 80: 800, 85: 850, 92: 900, 95: 950 };
  const rpm = fireRateMap[weapon.stats.fireRate] || 700;
  const interval = 60 / rpm;
  const ttk = ((shots - 1) * interval).toFixed(2);

  return { dmgPerShot, shots, ttk: parseFloat(ttk), rpm, baseDmg, hp };
}

function renderTTKTable() {
  const data = weaponsDatabase.map(w => ({
    ...w,
    _ttkData: computeTTKData(w, state.ttkArmorKey, state.ttkHitZone)
  }));

  data.sort((a, b) => {
    let va, vb;
    switch (state.ttkSortField) {
      case 'rank': va = a._ttkData.ttk; vb = b._ttkData.ttk; break;
      case 'name': va = a.name; vb = b.name; break;
      case 'type': va = a.typeName; vb = b.typeName; break;
      case 'damage': va = a._ttkData.baseDmg; vb = b._ttkData.baseDmg; break;
      case 'ttk': va = a._ttkData.ttk; vb = b._ttkData.ttk; break;
      case 'shots': va = a._ttkData.shots; vb = b._ttkData.shots; break;
      case 'velocity': va = a.detailedStats.bulletVelocity; vb = b.detailedStats.bulletVelocity; break;
      default: va = a._ttkData.ttk; vb = b._ttkData.ttk;
    }
    if (typeof va === 'string') return state.ttkSortDir === 'asc' ? va.localeCompare(vb) : vb.localeCompare(va);
    return state.ttkSortDir === 'asc' ? va - vb : vb - va;
  });

  let html = '';
  data.forEach((w, i) => {
    const d = w._ttkData;
    const rankClass = i === 0 ? 'ttk-rank--1' : i === 1 ? 'ttk-rank--2' : i === 2 ? 'ttk-rank--3' : 'ttk-rank--default';
    const ttClass = d.ttk <= 0.3 ? 'ttk-value--fast' : d.ttk <= 0.8 ? 'ttk-value--medium' : 'ttk-value--slow';
    const shotBadge = d.shots === 1 ? 'ttk-shots-badge--1' : d.shots <= 3 ? 'ttk-shots-badge--2-3' : 'ttk-shots-badge--4plus';

    html += `<tr>
      <td class="text-center"><span class="ttk-rank ${rankClass}">${i + 1}</span></td>
      <td>
        <div class="ttk-name-cell">
          <span class="ttk-name-cell__emoji">${WEAPON_EMOJI_MAP[w.id] || '🔫'}</span>
          <span class="ttk-name-cell__name">${w.name}</span>
          <span class="ttk-name-cell__type">${w.typeName}</span>
        </div>
      </td>
      <td>${w.typeName}</td>
      <td><span class="ttk-value">${d.baseDmg}</span></td>
      <td><span class="ttk-value ${ttClass}">${d.ttk === 0 ? 'OSK' : d.ttk + 's'}</span></td>
      <td><span class="ttk-shots-badge ${shotBadge}">${d.shots === 0 ? 'OSK' : d.shots + '发'}</span></td>
      <td>${w.detailedStats.bulletVelocity}</td>
    </tr>`;
  });

  dom.ttkTableBody.innerHTML = html;
}

function renderTTKSummary() {
  const allTTK = weaponsDatabase.map(w => computeTTKData(w, state.ttkArmorKey, state.ttkHitZone)).filter(d => d.ttk > 0);
  if (!allTTK.length) {
    dom.ttkSummaryGrid.innerHTML = '<div class="ttk-summary-card ttk-summary-card--best"><div class="ttk-summary-card__label">当前条件</div><div class="ttk-summary-card__value">一击必杀</div><div class="ttk-summary-card__sub">部分武器可OSK</div></div>';
    return;
  }
  const best = Math.min(...allTTK.map(d => d.ttk));
  const worst = Math.max(...allTTK.map(d => d.ttk));
  const avg = (allTTK.reduce((s, d) => s + d.ttk, 0) / allTTK.length).toFixed(2);
  const oskCount = weaponsDatabase.filter(w => computeTTKData(w, state.ttkArmorKey, state.ttkHitZone).ttk === 0).length;

  dom.ttkSummaryGrid.innerHTML = `
    <div class="ttk-summary-card ttk-summary-card--best">
      <div class="ttk-summary-card__label">最快TTK</div>
      <div class="ttk-summary-card__value">${best}s</div>
      <div class="ttk-summary-card__sub">(${ARMOR_LABELS[state.ttkArmorKey]} · ${state.ttkHitZone === 'head' ? '爆头' : '躯干'})</div>
    </div>
    <div class="ttk-summary-card ttk-summary-card--worst">
      <div class="ttk-summary-card__label">最慢TTK</div>
      <div class="ttk-summary-card__value">${worst}s</div>
      <div class="ttk-summary-card__sub">需要更多火力输出</div>
    </div>
    <div class="ttk-summary-card ttk-summary-card--avg">
      <div class="ttk-summary-card__label">平均TTK</div>
      <div class="ttk-summary-card__value">${avg}s</div>
      <div class="ttk-summary-card__sub">基于${weaponsDatabase.length}把武器</div>
    </div>
    <div class="ttk-summary-card ttk-summary-card--info">
      <div class="ttk-summary-card__label">一击必杀</div>
      <div class="ttk-summary-card__value">${oskCount}把</div>
      <div class="ttk-summary-card__sub">武器数量统计</div>
    </div>`;
}

/* ==================== 伤害计算器模块 ==================== */
function initCalculator() {
  weaponsDatabase.forEach(w => {
    const opt = document.createElement('option');
    opt.value = w.id;
    opt.textContent = `${w.name} (${w.typeName})`;
    dom.calcWeaponSelect.appendChild(opt);
  });

  dom.calcDistanceSlider.addEventListener('input', (e) => {
    dom.calcDistanceValue.textContent = e.target.value + 'm';
  });

  dom.calcRunBtn.addEventListener('click', () => runCalculator());
  runCalculator();
}

function getDamageAtDistance(weapon, distance) {
  const dmgs = weapon.detailedStats.bodyDamage;
  if (distance <= DISTANCE_TIERS[1]) return dmgs[0];
  if (distance <= DISTANCE_TIERS[2]) {
    const t = (distance - DISTANCE_TIERS[1]) / (DISTANCE_TIERS[2] - DISTANCE_TIERS[1]);
    return Math.round(dmgs[0] + (dmgs[1] - dmgs[0]) * t);
  }
  if (distance <= DISTANCE_TIERS[3]) {
    const t = (distance - DISTANCE_TIERS[2]) / (DISTANCE_TIERS[3] - DISTANCE_TIERS[2]);
    return Math.round(dmgs[1] + (dmgs[2] - dmgs[1]) * t);
  }
  const t = Math.min(1, (distance - DISTANCE_TIERS[3]) / 50);
  return Math.round(dmgs[2] + (dmgs[3] - dmgs[2]) * t);
}

function runCalculator() {
  const weaponId = dom.calcWeaponSelect.value;
  const distance = parseInt(dom.calcDistanceSlider.value);
  const armorLevel = parseInt(dom.calcArmorSelect.value);
  const hitZone = dom.calcHitZoneSelect.value;

  const weapon = weaponsDatabase.find(w => w.id === weaponId);
  if (!weapon) return;

  const ds = weapon.detailedStats;
  const rawDmg = getDamageAtDistance(weapon, distance);
  const mult = hitZone === 'head' ? ds.headMultiplier : hitZone === 'leg' ? ds.legMultiplier : 1;
  const finalDmg = Math.max(1, Math.round(rawDmg * mult));

  const hp = HP_TABLE[armorLevel] || 100;
  const shotsNeeded = Math.ceil(hp / finalDmg);

  const fireRateMap = { 20: 120, 35: 240, 65: 650, 70: 700, 80: 800, 85: 850, 92: 900, 95: 950 };
  const rpm = fireRateMap[weapon.stats.fireRate] || 700;
  const interval = 60 / rpm;
  const ttkVal = shotsNeeded > 0 ? ((shotsNeeded - 1) * interval).toFixed(2) : '0.00';
  const flightTime = distance > 0 ? (distance / ds.bulletVelocity).toFixed(3) : '0.000';

  dom.calcDamageResult.textContent = finalDmg;
  dom.calcShotsResult.textContent = shotsNeeded + ' 发';
  dom.calcTtkResult.textContent = ttkVal + 's';
  dom.calcFlightTime.textContent = flightTime + 's';

  drawDecayChart(weapon);
  renderCalcBars(weapon, distance, hitZone);
  renderFormulaInfo(weapon, distance, armorLevel, hitZone, finalDmg, shotsNeeded, ttkVal);
}

function drawDecayChart(weapon) {
  const canvas = dom.calcDecayCanvas;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width = canvas.parentElement.clientWidth - 48;
  const H = canvas.height = 200;
  const pad = { left: 45, right: 20, top: 20, bottom: 35 };

  ctx.clearRect(0, 0, W, H);

  const dmgs = weapon.detailedStats.bodyDamage;
  const maxDmg = Math.max(...dmgs) + 10;
  const plotW = W - pad.left - pad.right;
  const plotH = H - pad.top - pad.bottom;

  ctx.strokeStyle = 'rgba(0,255,65,0.15)';
  ctx.lineWidth = 1;
  for (let i = 0; i <= 5; i++) {
    const y = pad.top + (plotH / 5) * i;
    ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(W - pad.right, y); ctx.stroke();
  }
  for (let i = 0; i <= 5; i++) {
    const x = pad.left + (plotW / 5) * i;
    ctx.beginPath(); ctx.moveTo(x, pad.top); ctx.lineTo(x, H - pad.bottom); ctx.stroke();
  }

  ctx.fillStyle = '#555';
  ctx.font = '10px "Chakra Petch", monospace';
  ctx.textAlign = 'right';
  for (let i = 0; i <= 5; i++) {
    const val = Math.round(maxDmg - (maxDmg / 5) * i);
    ctx.fillText(val.toString(), pad.left - 6, pad.top + (plotH / 5) * i + 3);
  }
  ctx.textAlign = 'center';
  [0, 30, 60, 100, 150].forEach((v, i) => {
    ctx.fillText(v + 'm', pad.left + (plotW / 4) * i, H - 8);
  });

  ctx.beginPath();
  ctx.strokeStyle = '#00ff41';
  ctx.lineWidth = 2.5;
  ctx.shadowColor = 'rgba(0,255,65,0.5)';
  ctx.shadowBlur = 8;

  const pts = [];
  for (let d = 0; d <= 150; d += 2) {
    const dmg = getDamageAtDistance(weapon, d);
    const x = pad.left + (d / 150) * plotW;
    const y = pad.top + plotH - (dmg / maxDmg) * plotH;
    pts.push({ x, y });
    if (d === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.stroke();
  ctx.shadowBlur = 0;

  const currentDist = parseInt(dom.calcDistanceSlider.value);
  const currentDmg = getDamageAtDistance(weapon, currentDist);
  const cx = pad.left + (currentDist / 150) * plotW;
  const cy = pad.top + plotH - (currentDmg / maxDmg) * plotH;

  ctx.fillStyle = '#00ff41';
  ctx.beginPath(); ctx.arc(cx, cy, 6, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#fff'; ctx.font = 'bold 11px "Chakra Petch", monospace';
  ctx.fillText(`${currentDmg}`, cx + 10, cy - 8);
}

function renderCalcBars(weapon, distance, hitZone) {
  const ds = weapon.detailedStats;
  const mult = hitZone === 'head' ? ds.headMultiplier : hitZone === 'leg' ? ds.legMultiplier : 1;
  const armorKeys = ['noArmor', 'level1', 'level2', 'level3'];
  const labels = ['无护甲', '1级甲', '2级甲', '3级甲'];
  const cssCls = ['noArmor', 'level1', 'level2', 'level3'];
  const maxHP = 200;

  let html = '';
  armorKeys.forEach((key, i) => {
    const hpIdx = { noArmor: 0, level1: 1, level2: 2, level3: 3 }[key];
    const hp = HP_TABLE[hpIdx] || 100;
    const dmg = Math.round(getDamageAtDistance(weapon, distance) * mult);
    const shots = Math.ceil(hp / dmg);
    const pct = Math.min(100, (dmg / maxHP) * 100);
    const fireRateMap = { 20: 120, 35: 240, 65: 650, 70: 700, 80: 800, 85: 850, 92: 900, 95: 950 };
    const rpm = fireRateMap[weapon.stats.fireRate] || 700;
    const ttk = ((shots - 1) * 60 / rpm).toFixed(2);

    html += `<div class="calc-bar-row">
      <span class="calc-bar-label">${labels[i]}</span>
      <div class="calc-bar-track">
        <div class="calc-bar-fill calc-bar-fill--${cssCls[i]}" style="width:${pct}%">${dmg} | ${shots}发 | ${ttk}s</div>
      </div>
    </div>`;
  });
  dom.calcBarsContainer.innerHTML = html;
}

function renderFormulaInfo(weapon, dist, armorLevel, hitZone, finalDmg, shots, ttk) {
  const ds = weapon.detailedStats;
  const zoneLabel = { body: '躯干(x1.0)', head: `头部(x${ds.headMultiplier})`, leg: `腿部(x${ds.legMultiplier})` }[hitZone];
  const rawDmg = getDamageAtDistance(weapon, dist);
  dom.calcFormulaContent.innerHTML = `
    <div class="formula-line">实际伤害 = 基础伤害 × 距离衰减 × 部位倍率</div>
    <div class="formula-line formula-line--sub">= ${ds.bodyDamage[0]} × ${(rawDmg / ds.bodyDamage[0]).toFixed(3)} × ${{ body: 1.0, head: ds.headMultiplier, leg: ds.legMultiplier }[hitZone]} ≈ <strong style="color:#00ff41">${finalDmg}</strong></div>
    <div class="formula-line">击杀发数 = ⌈目标HP ÷ 单发伤害⌉ = ⌈${HP_TABLE[armorLevel]} ÷ ${finalDmg}⌉ = <strong style="color:#ffd700">${shots}</strong> 发</div>
    <div class="formula-line formula-line--sub">TTK = (发数 - 1) × 发射间隔 = ${shots - 1} × ${(60 / ({ 20: 120, 35: 240, 65: 650, 70: 700, 80: 800, 85: 850, 92: 900, 95: 950 }[weapon.stats.fireRate] || 700) / 1000).toFixed(3)}s = <strong style="color:#00ff41">${ttk}s</strong></div>
    <div class="formula-line formula-line--sub">命中部位：${zoneLabel} | 目标距离：${dist}m | 护甲等级：${armorLevel}级</div>`;
}

/* ==================== 弹道物理引擎模块 ==================== */
function initBallistics() {
  resizeBallisticsCanvas();

  ['velocitySlider', 'angleSlider', 'massSlider', 'dragSlider', 'windSlider'].forEach(key => {
    const slider = dom[key];
    if (!slider) return;
    slider.addEventListener('input', (e) => {
      updateSliderDisplay(key, e.target.value);
    });
  });

  dom.ballisticsFireBtn.addEventListener('click', () => fireProjectile(false));
  dom.ballisticsResetBtn.addEventListener('click', resetBallistics);
  dom.ballisticsAnimateBtn.addEventListener('click', () => fireProjectile(true));

  window.addEventListener('resize', debounce(resizeBallisticsCanvas, 200));
  drawBallisticsGrid();
}

function resizeBallisticsCanvas() {
  const canvas = dom.ballisticsCanvas;
  if (!canvas) return;
  const wrap = canvas.parentElement;
  canvas.width = wrap.clientWidth;
  canvas.height = wrap.clientHeight || 520;
  if (state.ballisticsTrailPoints.length > 0) {
    redrawTrajectory();
  } else {
    drawBallisticsGrid();
  }
}

function updateSliderDisplay(key, val) {
  const map = {
    velocitySlider: () => { dom.velocityValue.textContent = val + ' m/s'; },
    angleSlider: () => { dom.angleValue.textContent = val + '°'; },
    massSlider: () => { dom.massValue.textContent = parseFloat(val).toFixed(1) + ' g'; },
    dragSlider: () => { dom.dragValue.textContent = parseFloat(val).toFixed(2); },
    windSlider: () => { dom.windValue.textContent = val + ' m/s'; },
  };
  if (map[key]) map[key]();
}

function drawBallisticsGrid() {
  const canvas = dom.ballisticsCanvas;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width;
  const H = canvas.height;

  ctx.fillStyle = '#080f0c';
  ctx.fillRect(0, 0, W, H);

  ctx.strokeStyle = 'rgba(0,255,65,0.06)';
  ctx.lineWidth = 1;
  const gridSize = 40;
  for (let x = 0; x <= W; x += gridSize) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
  }
  for (let y = 0; y <= H; y += gridSize) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
  }

  ctx.strokeStyle = 'rgba(0,255,65,0.12)';
  ctx.lineWidth = 1;
  for (let x = 0; x <= W; x += gridSize * 4) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
  }
  for (let y = 0; y <= H; y += gridSize * 4) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
  }

  ctx.fillStyle = 'rgba(0,255,65,0.25)';
  ctx.font = '10px "Chakra Petch", monospace';
  ctx.textAlign = 'left';
  ctx.fillText('ORIGIN (0,0)', 10, H - 10);

  drawCannon(ctx, W, H);
}

function drawCannon(ctx, W, H) {
  const cx = 60, cy = H - 40;
  ctx.save();
  ctx.translate(cx, cy);

  const angleDeg = parseFloat(dom.angleSlider?.value || 15);
  const rad = angleDeg * Math.PI / 180;

  ctx.fillStyle = '#1a3a28';
  ctx.strokeStyle = '#00ff41';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(0, 0, 18, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.strokeStyle = '#00cc33';
  ctx.lineWidth = 6;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(Math.cos(rad) * 35, -Math.sin(rad) * 35);
  ctx.stroke();

  ctx.fillStyle = '#00ff41';
  ctx.beginPath();
  ctx.arc(Math.cos(rad) * 35, -Math.sin(rad) * 35, 5, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

function simulateTrajectory() {
  const v0 = parseFloat(dom.velocitySlider?.value || 780);
  const angleDeg = parseFloat(dom.angleSlider?.value || 15);
  const massG = parseFloat(dom.massSlider?.value || 8);
  const cd = parseFloat(dom.dragSlider?.value || 0.30);
  const windSpeed = parseFloat(dom.windSlider?.value || 0);

  const theta = angleDeg * Math.PI / 180;
  const vx0 = v0 * Math.cos(theta);
  const vy0 = v0 * Math.sin(theta);
  const mass = massG / 1000;
  const area = Math.pow(massG / 800, 0.5) * 0.00007;

  const dt = 0.002;
  const maxTime = 60;
  const points = [];
  let x = 0, y = 0, vx = vx0, vy = vy0, t = 0;

  while (t < maxTime && y >= 0) {
    points.push({ x, y, t, vx: Math.sqrt(vx * vx + vy * vy) });

    const speed = Math.sqrt(vx * vx + vy * vy);
    const fd = 0.5 * cd * AIR_DENSITY * area * speed * speed;
    const ax = (-fd * (vx / speed)) / mass;
    const ay = -GRAVITY + (-fd * (vy / speed)) / mass;

    vx += ax * dt;
    vy += ay * dt;
    x += vx * dt + 0.5 * ax * dt * dt;
    y += vy * dt + 0.5 * ay * dt * dt;
    t += dt;
  }

  const lastPt = points[points.length - 1] || { x: 0, y: 0, t: 0, vx: 0 };
  const impactVx = lastPt.vx || v0 * 0.6;
  const initialKE = 0.5 * mass * v0 * v0;
  const finalKE = 0.5 * mass * impactVx * impactVx;
  const energyLoss = initialKE > 0 ? ((initialKE - finalKE) / initialKE * 100) : 0;

  let driftX = 0;
  if (Math.abs(windSpeed) > 0.01) {
    points.forEach(p => {
      const driftAccel = 0.5 * 0.47 * AIR_DENSITY * 0.01 * windSpeed * Math.abs(windSpeed) / mass;
      driftX += 0.5 * driftAccel * dt * dt;
    });
  }

  return {
    points,
    impactPos: { x: lastPt.x, y: 0 },
    flightTime: lastPt.t,
    maxHeight: Math.max(...points.map(p => p.y)),
    range: lastPt.x,
    impactVelocity: impactVx,
    energyLoss: energyLoss.toFixed(1),
    drift: driftX.toFixed(2),
    v0, theta
  };
}

function worldToCanvas(canvas, pt, simData) {
  const W = canvas.width;
  const H = canvas.height;
  const margin = { left: 60, right: 40, top: 40, bottom: 50 };
  const plotW = W - margin.left - margin.right;
  const plotH = H - margin.top - margin.bottom;

  const maxX = Math.max(simData.range * 1.1, 100);
  const maxY = Math.max(simData.maxHeight * 1.3, 50);

  return {
    x: margin.left + (pt.x / maxX) * plotW,
    y: H - margin.bottom - (pt.y / maxY) * plotH
  };
}

function drawTrajectory(simData, animate = false, progress = 1) {
  const canvas = dom.ballisticsCanvas;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width;
  const H = canvas.height;

  drawBallisticsGrid();

  const pts = simData.points;
  if (!pts.length) return;

  const totalPts = pts.length;
  const drawCount = animate ? Math.floor(totalPts * progress) : totalPts;

  ctx.beginPath();
  ctx.strokeStyle = '#00ff41';
  ctx.lineWidth = 2;
  ctx.shadowColor = 'rgba(0,255,65,0.6)';
  ctx.shadowBlur = 10;

  let started = false;
  for (let i = 0; i < drawCount; i++) {
    const cp = worldToCanvas(canvas, pts[i], simData);
    if (!started) { ctx.moveTo(cp.x, cp.y); started = true; }
    else ctx.lineTo(cp.x, cp.y);
  }
  ctx.stroke();
  ctx.shadowBlur = 0;

  if (drawCount > 10) {
    const grad = ctx.createLinearGradient(0, 0, W, 0);
    grad.addColorStop(0, 'rgba(0,255,65,0.05)');
    grad.addColorStop(1, 'rgba(0,255,65,0.15)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    const startCP = worldToCanvas(canvas, pts[0], simData);
    ctx.moveTo(startCP.x, H - 50);
    for (let i = 0; i < drawCount; i++) {
      const cp = worldToCanvas(canvas, pts[i], simData);
      ctx.lineTo(cp.x, cp.y);
    }
    const endCP = worldToCanvas(canvas, pts[Math.min(drawCount - 1, pts.length - 1)], simData);
    ctx.lineTo(endCP.x, H - 50);
    ctx.closePath();
    ctx.fill();
  }

  if (!animate || progress >= 1) {
    const impactCP = worldToCanvas(canvas, simData.impactPos, simData);

    ctx.fillStyle = 'rgba(255,50,50,0.8)';
    ctx.beginPath();
    ctx.arc(impactCP.x, impactCP.y, 8, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = 'rgba(255,50,50,0.4)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(impactCP.x, impactCP.y, 14, 0, Math.PI * 2);
    ctx.stroke();

    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = 'rgba(255,215,0,0.4)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(impactCP.x, impactCP.y);
    ctx.lineTo(impactCP.x, H - 50);
    ctx.stroke();
    ctx.setLineDash([]);

    const apexIdx = pts.reduce((maxI, p, i, arr) => p.y > arr[maxI].y ? i : maxI, 0);
    const apexCP = worldToCanvas(canvas, pts[apexIdx], simData);
    ctx.fillStyle = '#ffd700';
    ctx.beginPath();
    ctx.arc(apexCP.x, apexCP.y, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = 'rgba(0,255,65,0.8)';
    ctx.font = 'bold 11px "Chakra Petch", monospace';
    ctx.fillText(`IMPACT`, impactCP.x + 14, impactCP.y - 4);
    ctx.fillText(`APEX`, apexCP.x + 8, apexCP.y - 8);
  }

  if (animate && progress < 1) {
    const curIdx = Math.min(drawCount - 1, pts.length - 1);
    if (curIdx >= 0) {
      const curCP = worldToCanvas(canvas, pts[curIdx], simData);
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(curCP.x, curCP.y, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = 'rgba(0,255,65,0.6)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(curCP.x, curCP.y, 8, 0, Math.PI * 2);
      ctx.stroke();
    }
  }
}

function redrawTrajectory() {
  if (state.ballisticsTrailPoints.length > 0) {
    drawTrajectory(state.ballisticsTrailPoints[state.ballisticsTrailPoints.length - 1], false);
  }
}

function fireProjectile(animate) {
  if (state.ballisticsAnimId) {
    cancelAnimationFrame(state.ballisticsAnimId);
    state.ballisticsAnimId = null;
  }

  const simData = simulateTrajectory();
  state.ballisticsTrailPoints.push(simData);

  if (animate) {
    let startTime = null;
    const duration = 2000;

    function animFrame(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      drawTrajectory(simData, true, eased);

      if (progress < 1) {
        state.ballisticsAnimId = requestAnimationFrame(animFrame);
      } else {
        state.ballisticsAnimId = null;
        updatePhysicsDisplay(simData);
      }
    }
    state.ballisticsAnimId = requestAnimationFrame(animFrame);
  } else {
    drawTrajectory(simData, false);
    updatePhysicsDisplay(simData);
  }
}

function updatePhysicsDisplay(simData) {
  dom.physRange.textContent = simData.range >= 1000 ? (simData.range / 1000).toFixed(2) + ' km' : simData.range.toFixed(1) + ' m';
  dom.physMaxH.textContent = simData.maxHeight.toFixed(1) + ' m';
  dom.physTime.textContent = simData.flightTime.toFixed(2) + ' s';
  dom.physImpactV.textContent = simData.impactVelocity.toFixed(0) + ' m/s';
  dom.physEnergyLoss.textContent = simData.energyLoss + '%';
  dom.physDrift.textContent = simData.drift + ' m';
}

function resetBallistics() {
  if (state.ballisticsAnimId) {
    cancelAnimationFrame(state.ballisticsAnimId);
    state.ballisticsAnimId = null;
  }
  state.ballisticsTrailPoints = [];
  dom.velocitySlider.value = 780;
  dom.angleSlider.value = 15;
  dom.massSlider.value = 8;
  dom.dragSlider.value = 0.30;
  dom.windSlider.value = 0;
  updateSliderDisplay('velocitySlider', 780);
  updateSliderDisplay('angleSlider', 15);
  updateSliderDisplay('massSlider', 8);
  updateSliderDisplay('dragSlider', 0.30);
  updateSliderDisplay('windSlider', 0);
  dom.physRange.textContent = '-- m';
  dom.physMaxH.textContent = '-- m';
  dom.physTime.textContent = '-- s';
  dom.physImpactV.textContent = '-- m/s';
  dom.physEnergyLoss.textContent = '-- %';
  dom.physDrift.textContent = '-- m';
  drawBallisticsGrid();
}

/* ==================== 版本对比模块 ==================== */
function initVersionCompare() {
  if (dom.versionSelectorBtns) {
    dom.versionSelectorBtns.querySelectorAll('.version-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        dom.versionSelectorBtns.querySelectorAll('.version-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderVersionData(btn.dataset.version);
      });
    });
  }
  renderVersionData('v2.1');
}

function renderVersionData(versionKey) {
  const data = VERSION_DATA[versionKey];
  if (!data) return;

  const ov = data.overview;
  dom.versionOverviewGrid.innerHTML = `
    <div class="version-overview-card">
      <div class="version-overview-card__icon">📈</div>
      <div class="version-overview-card__value version-overview-card__value--buff">+${ov.buffed}</div>
      <div class="version-overview-card__label">增强项</div>
    </div>
    <div class="version-overview-card">
      <div class="version-overview-card__icon">📉</div>
      <div class="version-overview-card__value version-overview-card__value--nerf">-${ov.nerfed}</div>
      <div class="version-overview-card__label">削弱项</div>
    </div>
    <div class="version-overview-card">
      <div class="version-overview-card__icon">➖</div>
      <div class="version-overview-card__value version-overview-card__value--neutral">${ov.unchanged}</div>
      <div class="version-overview-card__label">无变化</div>
    </div>
    <div class="version-overview-card">
      <div class="version-overview-card__icon">✨</div>
      <div class="version-overview-card__value version-overview-card__value--buff">+${ov.newWeapons}</div>
      <div class="version-overview-card__label">新增武器</div>
    </div>`;

  let tableHtml = '';
  data.changes.forEach(c => {
    const diff = c.type === 'new' ? '--' : (c.newVal - c.oldVal);
    const diffStr = c.type === 'new' ? 'NEW' : (diff > 0 ? `+${diff}` : diff.toString());
    const tagClass = c.type === 'buff' ? 'change-tag--buff' : c.type === 'nerf' ? 'change-tag--nerf' : c.type === 'new' ? 'change-tag--new' : 'change-tag--neutral';
    const tagIcon = c.type === 'buff' ? '↑' : c.type === 'nerf' ? '↓' : c.type === 'new' ? '★' : '-';
    const tagLabel = c.type === 'buff' ? '增强' : c.type === 'nerf' ? '削弱' : c.type === 'new' ? '新增' : '无变化';
    const impactClass = `impact-badge--${c.impact}`;
    const impactLabel = c.impact === 'major' ? '重大' : c.impact === 'moderate' ? '中等' : '轻微';

    tableHtml += `<tr>
      <td><strong>${c.weapon}</strong></td>
      <td>${c.stat}</td>
      <td class="version-th-old">${c.oldVal}</td>
      <td><strong style="color:${c.type === 'nerf' ? '#ff3333' : c.type === 'buff' ? '#00ff41' : '#888'}">${c.newVal}</strong></td>
      <td style="color:${diff > 0 ? '#00ff41' : diff < 0 ? '#ff3333' : '#888'};font-weight:700">${diffStr}</td>
      <td><span class="change-tag ${tagClass}">${tagIcon} ${tagLabel}</span></td>
      <td><span class="impact-badge ${impactClass}">${impactLabel}</span></td>
    </tr>`;
  });
  dom.versionTableBody.innerHTML = tableHtml;

  let logHtml = '';
  data.changelog.forEach(item => {
    logHtml += `<div class="changelog-item changelog-item--${item.type}">
      <div class="changelog-item__marker">${item.type === 'buff' ? '↑' : item.type === 'nerf' ? '↓' : '★'}</div>
      <div class="changelog-item__content">
        <div class="changelog-item__title">${item.title}</div>
        <div class="changelog-item__desc">${item.desc}</div>
      </div>
    </div>`;
  });
  dom.changelogList.innerHTML = logHtml;
}

/* ==================== 返回顶部按钮 ==================== */
function initBackToTop() {
  if (!dom.backToTop) return;
  window.addEventListener('scroll', () => {
    dom.backToTop.classList.toggle('visible', window.scrollY > 300);
  }, { passive: true });
  dom.backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==================== 全局事件绑定 ==================== */
function bindGlobalEvents() {
  document.querySelectorAll('[data-goto-tab]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const tabId = link.dataset.gotoTab;
      switchTab(tabId);
    });
  });
}

/* ===== 工具函数 ===== */
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

/* ===== 启动 ===== */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
