/**
 * 地图交互引擎 - Map Engine Module
 * 实现拖拽、缩放、点位渲染、图层控制等核心功能
 */

class MapEngine {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.viewport = null;
    this.baseEl = null;
    this.markersLayer = null;
    this.routesLayer = null;
    
    // 状态
    this.currentMap = null;
    this.scale = 1;
    this.minScale = 0.5;
    this.maxScale = 3;
    this.position = { x: 0, y: 0 };
    this.isDragging = false;
    this.dragStart = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    
    // 图层状态
    this.activeLayers = new Set(['spawn', 'objective', 'sniper', 'loot', 'cover', 'routes']);
    this.showGrid = false;
    
    if (this.container) {
      this.init();
    }
  }

  init() {
    this.viewport = this.container.querySelector('.map-viewport');
    this.baseEl = this.container.querySelector('.map-base');
    this.markersLayer = this.container.querySelector('.map-markers-layer');
    this.routesLayer = this.container.querySelector('.map-routes-layer');
    
    if (this.viewport) {
      this.bindEvents();
      this.animateEntrance();
    }
  }

  /**
   * 加载地图数据
   */
  loadMap(mapData) {
    this.currentMap = mapData;
    
    // 重置视图
    this.resetView();
    
    // 渲染底图
    this.renderBaseMap();
    
    // 渲染点位
    this.renderMarkers();
    
    // 渲染路线
    this.renderRoutes();
    
    // 显示加载完成状态
    setTimeout(() => {
      this.viewport.classList.add('loaded');
    }, 100);
  }

  /**
   * 渲染SVG底图（程序化生成示意地图）
   */
  renderBaseMap() {
    if (!this.currentMap || !this.baseEl) return;

    const mapId = this.currentMap.id;
    const mapName = this.currentMap.name;
    
    // 根据不同地图生成不同的SVG形状
    let svgContent = '';
    
    switch (mapId) {
      case 'longa_valley':
        svgContent = this.generateLongaValleySVG();
        break;
      case 'desert_fortress':
        svgContent = this.generateDesertFortressSVG();
        break;
      case 'arctic_base':
        svgContent = this.generateArcticBaseSVG();
        break;
      case 'urban_downtown':
        svgContent = this.generateUrbanDowntownSVG();
        break;
      default:
        svgContent = this.generateDefaultMapSVG();
    }

    this.baseEl.innerHTML = `
      <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" 
           style="width: 100%; height: auto; max-width: 700px;">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,255,65,0.1)" stroke-width="0.5"/>
          </pattern>
        </defs>
        
        <!-- 背景 -->
        <rect width="800" height="600" fill="#0a0f0d" stroke="#00ff41" stroke-width="2"/>
        
        ${svgContent}
        
        <!-- 地图名称水印 -->
        <text x="400" y="580" text-anchor="middle" 
              font-family="'Share Tech Mono', monospace" 
              font-size="14" fill="rgba(0,255,65,0.3)" 
              letter-spacing="8">
          ${mapName.toUpperCase()} // TACTICAL MAP v2.1
        </text>
      </svg>
    `;
  }

  generateLongaValleySVG() {
    return `
      <!-- 长弓溪谷 - 河谷地形 -->
      
      <!-- 西侧高地 -->
      <polygon points="50,150 200,120 220,250 80,280" 
               fill="rgba(26,47,35,0.6)" stroke="rgba(0,255,65,0.4)" stroke-width="1.5"/>
      <text x="130" y="210" text-anchor="middle" font-size="11" fill="rgba(0,255,65,0.5)" 
            font-family="'Share Tech Mono'">西侧山脊</text>
      
      <!-- 中央区域 -->
      <rect x="300" y="240" width="200" height="160" rx="10"
            fill="rgba(26,47,35,0.4)" stroke="rgba(0,255,65,0.3)" stroke-width="1.5"
            stroke-dasharray="5,3"/>
      <rect x="340" y="270" width="120" height="90" rx="5"
            fill="rgba(0,255,65,0.08)" stroke="rgba(0,255,65,0.5)" stroke-width="2"/>
      <text x="400" y="320" text-anchor="middle" font-size="12" fill="rgba(0,255,65,0.7)"
            font-family="'Orbitron'" font-weight="bold">中央指挥楼</text>
      
      <!-- 河流 -->
      <path d="M 0 380 Q 200 360 400 390 T 800 370" 
            fill="none" stroke="rgba(0,191,255,0.4)" stroke-width="12" opacity="0.6"/>
      <path d="M 0 380 Q 200 360 400 390 T 800 370" 
            fill="none" stroke="rgba(0,191,255,0.6)" stroke-width="3"/>
      
      <!-- 桥梁 -->
      <rect x="365" y="375" width="70" height="25" rx="3"
            fill="rgba(255,215,0,0.15)" stroke="rgba(255,215,0,0.6)" stroke-width="2"/>
      <text x="400" y="392" text-anchor="middle" font-size="9" fill="rgba(255,215,0,0.8)">溪谷大桥</text>
      
      <!-- 东部工业区 -->
      <g transform="translate(580, 350)">
        <rect x="0" y="0" width="150" height="180" rx="5"
              fill="rgba(26,47,35,0.5)" stroke="rgba(0,255,65,0.3)" stroke-width="1.5"/>
        <rect x="20" y="20" width="45" height="60" fill="rgba(0,255,65,0.05)" stroke="rgba(0,255,65,0.3)"/>
        <rect x="85" y="30" width="50" height="70" fill="rgba(0,255,65,0.05)" stroke="rgba(0,255,65,0.3)"/>
        <rect x="30" y="100" width="90" height="60" fill="rgba(0,255,65,0.05)" stroke="rgba(0,255,65,0.3)"/>
        <text x="75" y="165" text-anchor="middle" font-size="11" fill="rgba(0,255,65,0.5)">东部工业区</text>
      </g>
      
      <!-- 北部军火库 -->
      <circle cx="400" cy="140" r="35" 
              fill="rgba(0,191,255,0.1)" stroke="rgba(0,191,255,0.5)" stroke-width="2" stroke-dasharray="4,2"/>
      <text x="400" y="145" text-anchor="middle" font-size="10" fill="rgba(0,191,255,0.7)">北部军火库</text>
      
      <!-- 西部平原 -->
      <ellipse cx="150" cy="420" rx="100" ry="70" 
               fill="rgba(0,255,65,0.03)" stroke="rgba(0,255,65,0.2)" stroke-dasharray="3,3"/>
      <text x="150" y="430" text-anchor="middle" font-size="10" fill="rgba(0,255,65,0.4)">西部平原</text>
      
      <!-- 出生点标记区域 -->
      <ellipse cx="100" cy="170" rx="40" ry="30" 
               fill="rgba(0,255,65,0.08)" stroke="rgba(0,255,65,0.4)" stroke-width="1.5"/>
      <text x="100" y="175" text-anchor="middle" font-size="9" fill="rgba(0,255,65,0.6)">ALPHA</text>
      
      <ellipse cx="700" cy="450" rx="40" ry="30" 
               fill="rgba(255,51,51,0.08)" stroke="rgba(255,51,51,0.4)" stroke-width="1.5"/>
      <text x="700" y="455" text-anchor="middle" font-size="9" fill="rgba(255,51,51,0.6)">BRAVO</text>
    `;
  }

  generateDesertFortressSVG() {
    return `
      <!-- 沙漠要塞 -->
      <rect x="250" y="150" width="300" height="300" rx="15"
            fill="rgba(139,119,61,0.15)" stroke="rgba(255,215,0,0.4)" stroke-width="2"/>
      
      <!-- 主塔楼 -->
      <rect x="360" y="180" width="80" height="120" 
            fill="rgba(139,119,61,0.25)" stroke="rgba(255,215,0,0.6)" stroke-width="2"/>
      <polygon points="360,180 400,140 440,180" 
               fill="rgba(139,119,61,0.3)" stroke="rgba(255,215,0,0.6)" stroke-width="1.5"/>
      <text x="400" y="245" text-anchor="middle" font-size="11" fill="rgba(255,215,0,0.8)"
            font-family="'Orbitron'">主塔楼</text>
      
      <!-- 城墙 -->
      <rect x="230" y="200" width="30" height="200" fill="rgba(139,119,61,0.2)" stroke="rgba(255,215,0,0.3)"/>
      <rect x="540" y="200" width="30" height="200" fill="rgba(139,119,61,0.2)" stroke="rgba(255,215,0,0.3)"/>
      <rect x="280" y="430" width="240" height="25" fill="rgba(139,119,61,0.2)" stroke="rgba(255,215,0,0.3)"/>
      
      <!-- 庭院 -->
      <rect x="280" y="310" width="240" height="110" rx="5"
            fill="rgba(255,215,0,0.05)" stroke="rgba(255,215,0,0.3)" stroke-dasharray="4,2"/>
      <text x="400" y="370" text-anchor="middle" font-size="11" fill="rgba(255,215,0,0.5)">中央庭院</text>
      
      <!-- 地下隧道入口标记 -->
      <ellipse cx="330" cy="400" rx="25" ry="15" 
               fill="rgba(0,191,255,0.1)" stroke="rgba(0,191,255,0.5)" stroke-dasharray="3,2"/>
      <text x="330" y="404" text-anchor="middle" font-size="8" fill="rgba(0,191,255,0.7)">隧道</text>
      
      <!-- 沙地外围 -->
      <text x="400" y="520" text-anchor="middle" font-size="12" fill="rgba(255,215,0,0.3)">
        ⚠️ DESERT FORTRESS ZONE
      </text>
    `;
  }

  generateArcticBaseSVG() {
    return `
      <!-- 北极基地 -->
      
      <!-- 冰雪地面效果 -->
      <rect x="100" y="100" width="600" height="400" rx="20"
            fill="rgba(200,230,255,0.03)" stroke="rgba(0,191,255,0.3)" stroke-width="2"/>
      
      <!-- 主研究实验室 -->
      <rect x="320" y="250" width="160" height="120" rx="8"
            fill="rgba(0,191,255,0.08)" stroke="rgba(0,191,255,0.5)" stroke-width="2"/>
      <text x="400" y="315" text-anchor="middle" font-size="11" fill="rgba(0,191,255,0.8)"
            font-family="'Orbitron'">主研究实验室</text>
      
      <!-- 雷达塔 -->
      <line x1="150" y1="200" x2="150" y2="120" stroke="rgba(0,191,255,0.5)" stroke-width="4"/>
      <circle cx="150" cy="115" r="18" 
              fill="rgba(0,191,255,0.15)" stroke="rgba(0,191,255,0.6)" stroke-width="2"/>
      <line x1="135" y1="115" x2="165" y2="115" stroke="rgba(0,191,255,0.6)" stroke-width="2"/>
      <line x1="150" y1="100" x2="150" y2="130" stroke="rgba(0,191,255,0.6)" stroke-width="2"/>
      <text x="150" y="155" text-anchor="middle" font-size="9" fill="rgba(0,191,255,0.6)">雷达塔</text>
      
      <!-- 冰洞系统 -->
      <ellipse cx="650" cy="420" rx="60" ry="40" 
               fill="rgba(150,200,255,0.1)" stroke="rgba(150,200,255,0.5)" stroke-width="2" stroke-dasharray="5,3"/>
      <text x="650" y="425" text-anchor="middle" font-size="10" fill="rgba(150,200,255,0.7)">冰洞入口</text>
      
      <!-- 连接通道 -->
      <path d="M 235 310 L 320 310" stroke="rgba(0,191,255,0.3)" stroke-width="3" stroke-dasharray="6,3"/>
      <path d="M 480 310 L 590 390" stroke="rgba(0,191,255,0.3)" stroke-width="3" stroke-dasharray="6,3"/>
      
      <!-- 温度标注装饰 -->
      <text x="400" y="550" text-anchor="middle" font-size="11" fill="rgba(150,200,255,0.4)">
        ❄️ ARCTIC RESEARCH BASE // TEMP: -28°C
      </text>
    `;
  }

  generateUrbanDowntownSVG() {
    return `
      <!-- 都市中心 -->
      
      <!-- 街道网格 -->
      <g stroke="rgba(0,255,65,0.15)" stroke-width="8">
        <line x1="0" y1="300" x2="800" y2="300"/>
        <line x1="400" y1="0" x2="400" y2="600"/>
        <line x1="200" y1="0" x2="200" y2="600"/>
        <line x1="600" y1="0" x2="600" y2="600"/>
        <line x1="0" y1="150" x2="800" y2="150"/>
        <line x1="0" y1="450" x2="800" y2="450"/>
      </g>
      
      <!-- 天台大厦 -->
      <g transform="translate(530, 80)">
        <rect x="0" y="0" width="100" height="140" fill="rgba(0,255,65,0.06)" stroke="rgba(0,255,65,0.5)" stroke-width="2"/>
        <rect x="15" y="-30" width="70" height="35" fill="rgba(0,255,65,0.08)" stroke="rgba(0,255,65,0.5)" stroke-width="1.5"/>
        <text x="50" y="75" text-anchor="middle" font-size="9" fill="rgba(0,255,65,0.7)">天台大厦</text>
      </g>
      
      <!-- 中央地铁站 -->
      <ellipse cx="400" cy="300" rx="60" ry="45" 
               fill="rgba(0,191,255,0.1)" stroke="rgba(0,191,255,0.6)" stroke-width="2.5"/>
      <text x="400" y="305" text-anchor="middle" font-size="11" fill="rgba(0,191,255,0.8)"
            font-family="'Orbitron'">地铁站</text>
      
      <!-- 金融区建筑群 -->
      <g transform="translate(100, 180)">
        <rect x="0" y="0" width="70" height="100" fill="rgba(0,255,65,0.04)" stroke="rgba(0,255,65,0.3)"/>
        <rect x="85" y="20" width="55" height="90" fill="rgba(0,255,65,0.04)" stroke="rgba(0,255,65,0.3)"/>
        <rect x="20" y="115" width="100" height="70" fill="rgba(0,255,65,0.04)" stroke="rgba(0,255,65,0.3)"/>
        <text x="62" y="175" text-anchor="middle" font-size="10" fill="rgba(0,255,65,0.5)">金融区</text>
      </g>
      
      <!-- 车辆标记 -->
      <g fill="rgba(255,215,0,0.3)" stroke="rgba(255,215,0,0.5)" stroke-width="1">
        <rect x="320" y="275" width="25" height="12" rx="2"/>
        <rect x="460" y="315" width="25" height="12" rx="2"/>
        <rect x="250" y="430" width="25" height="12" rx="2"/>
      </g>
      
      <text x="400" y="570" text-anchor="middle" font-size="11" fill="rgba(0,255,65,0.3">
        🏙️ DOWNTOWN METRO // POPULATION: HIGH RISK AREA
      </text>
    `;
  }

  generateDefaultMapSVG() {
    return `
      <rect x="200" y="150" width="400" height="300" rx="10"
            fill="rgba(26,47,35,0.3)" stroke="rgba(0,255,65,0.4)" stroke-width="2"/>
      <text x="400" y="310" text-anchor="middle" font-size="16" fill="rgba(0,255,65,0.5)">
        TACTICAL MAP AREA
      </text>
    `;
  }

  /**
   * 渲染点位标记
   */
  renderMarkers() {
    if (!this.currentMap || !this.markersLayer) return;

    this.markersLayer.innerHTML = '';
    
    this.currentMap.pointsOfInterest.forEach(point => {
      if (!this.activeLayers.has(point.type)) return;

      const marker = document.createElement('div');
      marker.className = `marker marker--${point.type}`;
      marker.style.left = `${point.position.x}%`;
      marker.style.top = `${point.position.y}%`;
      marker.dataset.pointId = point.id;
      marker.setAttribute('role', 'button');
      marker.setAttribute('aria-label', `${point.name} - ${point.typeName}`);
      marker.tabIndex = 0;

      marker.innerHTML = `
        <div class="marker__icon-wrapper">
          <span>${point.icon || '📍'}</span>
        </div>
        <span class="marker__label">${point.name}</span>
      `;

      // 点击事件
      marker.addEventListener('click', (e) => {
        e.stopPropagation();
        this.showPointDetail(point);
      });

      // 键盘支持
      marker.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.showPointDetail(point);
        }
      });

      // 悬停提示
      marker.addEventListener('mouseenter', (e) => {
        this.showTooltip(e, point);
      });

      marker.addEventListener('mouseleave', () => {
        this.hideTooltip();
      });

      this.markersLayer.appendChild(marker);
    });
  }

  /**
   * 渲染战术路线
   */
  renderRoutes() {
    if (!this.currentMap || !this.routesLayer) return;

    this.routesLayer.innerHTML = '';

    if (!this.activeLayers.has('routes')) return;

    this.currentMap.tacticalRoutes.forEach(route => {
      if (route.waypoints.length < 2) return;

      // 创建路径字符串
      let pathD = '';
      route.waypoints.forEach((wp, index) => {
        const x = (wp.x / 100) * 800; // SVG坐标系转换
        const y = (wp.y / 100) * 600;
        if (index === 0) {
          pathD += `M ${x} ${y}`;
        } else {
          pathD += ` L ${x} ${y}`;
        }
      });

      // 路径元素
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', pathD);
      path.setAttribute('class', 'route-path');
      path.dataset.routeId = route.id;

      // 路径标签
      const midIndex = Math.floor(route.waypoints.length / 2);
      const midPoint = route.waypoints[midIndex];
      if (midPoint) {
        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        label.setAttribute('x', (midPoint.x / 100) * 800);
        label.setAttribute('y', (midPoint.y / 100) * 600 - 10);
        label.setAttribute('class', 'route-waypoint-label');
        label.setAttribute('text-anchor', 'middle');
        label.textContent = route.name;
        this.routesLayer.appendChild(label);
      }

      // 路径点
      route.waypoints.forEach((wp, index) => {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', (wp.x / 100) * 800);
        circle.setAttribute('cy', (wp.y / 100) * 600);
        circle.setAttribute('class', 'route-waypoint');
        this.routesLayer.appendChild(circle);

        // 路径点动作标签
        if (wp.action && index > 0) {
          const actionLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          actionLabel.setAttribute('x', (wp.x / 100) * 800 + 12);
          actionLabel.setAttribute('y', (wp.y / 100) * 600 + 4);
          actionLabel.setAttribute('class', 'route-waypoint-label');
          actionLabel.style.fontSize = '8px';
          actionLabel.textContent = wp.action.length > 15 ? wp.action.substring(0, 15) + '...' : wp.action;
          this.routesLayer.appendChild(actionLabel);
        }
      });

      this.routesLayer.appendChild(path);
    });
  }

  /**
   * 绑定事件
   */
  bindEvents() {
    // 拖拽事件
    this.viewport.addEventListener('mousedown', (e) => this.startDrag(e));
    window.addEventListener('mousemove', (e) => this.onDrag(e));
    window.addEventListener('mouseup', () => this.endDrag());

    // 触摸事件支持
    this.viewport.addEventListener('touchstart', (e) => this.startDrag(e.touches[0]), { passive: false });
    this.viewport.addEventListener('touchmove', (e) => {
      e.preventDefault();
      this.onDrag(e.touches[0]);
    }, { passive: false });
    this.viewport.addEventListener('touchend', () => this.endDrag());

    // 缩放事件（鼠标滚轮）
    this.viewport.addEventListener('wheel', (e) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.1 : 0.1;
      this.zoom(delta, e.offsetX, e.offsetY);
    }, { passive: false });

    // 移动端双指缩放
    let lastTouchDistance = 0;
    this.viewport.addEventListener('touchstart', (e) => {
      if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        lastTouchDistance = Math.sqrt(dx * dx + dy * dy);
      }
    }, { passive: true });

    this.viewport.addEventListener('touchmove', (e) => {
      if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const delta = (distance - lastTouchDistance) * 0.005;
        lastTouchDistance = distance;
        this.zoom(delta, this.viewport.offsetWidth / 2, this.viewport.offsetHeight / 2);
      }
    }, { passive: true });

    // 点击空白处关闭详情面板
    this.viewport.addEventListener('click', (e) => {
      if (e.target === this.viewport || e.target.closest('.map-base')) {
        this.hidePointDetail();
      }
    });

    // 更新坐标显示
    this.viewport.addEventListener('mousemove', (e) => {
      this.updateCoordsDisplay(e);
    });
  }

  startDrag(e) {
    if (e.target.closest('.marker')) return; // 不拦截点位点击
    
    this.isDragging = true;
    this.dragStart = { x: e.clientX - this.position.x, y: e.clientY - this.position.y };
    this.viewport.style.cursor = 'grabbing';
  }

  onDrag(e) {
    if (!this.isDragging) return;

    this.position.x = e.clientX - this.dragStart.x;
    this.position.y = e.clientY - this.dragStart.y;

    this.applyTransform();
  }

  endDrag() {
    this.isDragging = false;
    if (this.viewport) {
      this.viewport.style.cursor = 'grab';
    }
  }

  /**
   * 缩放功能
   */
  zoom(delta, focusX, focusY) {
    const oldScale = this.scale;
    this.scale = Math.max(this.minScale, Math.min(this.maxScale, this.scale + delta));

    if (oldScale !== this.scale) {
      // 以焦点为中心缩放
      if (focusX !== undefined && focusY !== undefined) {
        const scaleRatio = this.scale / oldScale;
        this.position.x = focusX - (focusX - this.position.x) * scaleRatio;
        this.position.y = focusY - (focusY - this.position.y) * scaleRatio;
      }

      this.applyTransform();
      this.updateScaleDisplay();
    }
  }

  zoomIn() {
    this.zoom(0.2, this.viewport.offsetWidth / 2, this.viewport.offsetHeight / 2);
  }

  zoomOut() {
    this.zoom(-0.2, this.viewport.offsetWidth / 2, this.viewport.offsetHeight / 2);
  }

  resetView() {
    this.scale = 1;
    this.position = { x: 0, y: 0 };
    this.applyTransform();
    this.updateScaleDisplay();
  }

  applyTransform() {
    const transform = `translate(${this.position.x}px, ${this.position.y}px) scale(${this.scale})`;
    
    if (this.baseEl) {
      this.baseEl.style.transform = transform;
    }
    if (this.markersLayer) {
      this.markersLayer.style.transform = transform;
    }
    if (this.routesLayer) {
      this.routesLayer.style.transform = `${transform} translateZ(0)`;
    }
  }

  /**
   * 图层控制
   */
  toggleLayer(layerName) {
    if (this.activeLayers.has(layerName)) {
      this.activeLayers.delete(layerName);
    } else {
      this.activeLayers.add(layerName);
    }
    
    // 重新渲染受影响的层
    if (['spawn', 'objective', 'sniper', 'loot', 'cover'].includes(layerName)) {
      this.renderMarkers();
    }
    if (layerName === 'routes') {
      this.renderRoutes();
    }
  }

  toggleGrid(show) {
    this.showGrid = show;
    if (this.viewport) {
      this.viewport.classList.toggle('show-grid', show);
    }
  }

  /**
   * 点位详情显示
   */
  showPointDetail(point) {
    const panel = document.getElementById('pointDetailPanel');
    if (!panel) return;

    // 填充数据
    document.getElementById('detailIcon').textContent = point.icon || '📍';
    document.getElementById('detailName').textContent = point.name;
    
    const typeTag = document.getElementById('detailType');
    typeTag.textContent = point.typeName;
    typeTag.className = `tag tag--${point.importance === 'high' ? 'advanced' : 
                           point.importance === 'critical' ? 'expert' : 'beginner'}`;
    
    document.getElementById('detailDesc').textContent = point.description || '';

    // 统计信息
    const statsContainer = document.getElementById('detailStats');
    statsContainer.innerHTML = '';
    
    if (point.importance) {
      statsContainer.innerHTML += `
        <div class="point-detail-panel__stat">
          <span class="point-detail-panel__stat-value">${point.importanceName}</span>
          <span class="point-detail-panel__stat-label">重要程度</span>
        </div>`;
    }
    
    if (point.coverLevel) {
      statsContainer.innerHTML += `
        <div class="point-detail-panel__stat">
          <span class="point-detail-panel__stat-value">${point.coverLevelName}</span>
          <span class="point-detail-panel__stat-label">掩体等级</span>
        </div>`;
    }
    
    if (point.riskLevel) {
      statsContainer.innerHTML += `
        <div class="point-detail-panel__stat">
          <span class="point-detail-panel__stat-value">${point.riskLevelName}</span>
          <span class="point-detail-panel__stat-label">暴露风险</span>
        </div>`;
    }

    // 战术提示
    const tipsList = document.getElementById('tipsList');
    tipsList.innerHTML = '';
    if (point.tips && point.tips.length > 0) {
      point.tips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = tip;
        tipsList.appendChild(li);
      });
    } else if (point.tactics) {
      point.tactics.forEach(tactic => {
        const li = document.createElement('li');
        li.textContent = tactic;
        tipsList.appendChild(li);
      });
    }

    // 坐标
    document.getElementById('detailCoord').textContent = 
      `坐标: X: ${point.position.x}, Y: ${point.position.y}`;

    // 显示面板
    panel.hidden = false;
  }

  hidePointDetail() {
    const panel = document.getElementById('pointDetailPanel');
    if (panel) {
      panel.hidden = true;
    }
  }

  /**
   * 工具提示框
   */
  showTooltip(e, point) {
    const tooltip = document.getElementById('mapTooltip');
    if (!tooltip) return;

    tooltip.querySelector('.map-tooltip__title').textContent = point.name;
    tooltip.querySelector('.map-tooltip__desc').textContent = 
      point.description ? point.description.substring(0, 100) + (point.description.length > 100 ? '...' : '') : '';

    // 定位
    const rect = this.viewport.getBoundingClientRect();
    let x = e.clientX - rect.left + 15;
    let y = e.clientY - rect.top + 15;

    // 边界检测
    const tooltipRect = tooltip.getBoundingClientRect();
    if (x + 280 > rect.width) x = e.clientX - rect.left - 290;
    if (y + 150 > rect.height) y = e.clientY - rect.top - 160;

    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;
    tooltip.classList.add('visible');
    tooltip.setAttribute('aria-hidden', 'false');
  }

  hideTooltip() {
    const tooltip = document.getElementById('mapTooltip');
    if (tooltip) {
      tooltip.classList.remove('visible');
      tooltip.setAttribute('aria-hidden', 'true');
    }
  }

  /**
   * 更新坐标显示
   */
  updateCoordsDisplay(e) {
    const coordsDisplay = document.getElementById('coordsDisplay');
    if (coordsDisplay && this.viewport) {
      const rect = this.viewport.getBoundingClientRect();
      const x = Math.round(((e.clientX - rect.left) / rect.width) * 100);
      const y = Math.round(((e.clientY - rect.top) / rect.height) * 100);
      coordsDisplay.textContent = `X: ${Math.max(0, Math.min(100, x))}% Y: ${Math.max(0, Math.min(100, y))}%`;
    }
  }

  updateScaleDisplay() {
    const scaleDisplay = document.getElementById('scaleDisplay');
    if (scaleDisplay) {
      scaleDisplay.textContent = `${Math.round(this.scale * 100)}%`;
    }
  }

  /**
   * 入场动画
   */
  animateEntrance() {
    if (this.viewport) {
      this.viewport.style.opacity = '0';
      this.viewport.style.transform = 'scale(0.95)';
      
      requestAnimationFrame(() => {
        setTimeout(() => {
          this.viewport.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
          this.viewport.style.opacity = '1';
          this.viewport.style.transform = 'scale(1)';
        }, 100);
      });
    }
  }
}

// 导出供其他模块使用
window.MapEngine = MapEngine;
