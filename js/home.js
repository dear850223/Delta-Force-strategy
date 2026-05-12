/**
 * 首页交互逻辑 - Home Page Script
 * 负责粒子动画、数据渲染、滚动效果等
 */

document.addEventListener('DOMContentLoaded', () => {
  // 初始化各模块
  initHeroParticles();
  initCounterAnimation();
  renderLatestGuides();
  renderTopWeapons();
  initBackToTop();
});

/**
 * Hero区域粒子背景效果
 */
function initHeroParticles() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;

  // 设置画布尺寸
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener('resize', resize);

  // 粒子类
  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.5;
      this.speedY = (Math.random() - 0.5) * 0.5;
      this.opacity = Math.random() * 0.5 + 0.2;
      this.fadeSpeed = Math.random() * 0.005 + 0.002;
      this.fadingOut = Math.random() > 0.5;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      // 边界检测
      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

      // 透明度渐变（呼吸效果）
      if (this.fadingOut) {
        this.opacity -= this.fadeSpeed;
        if (this.opacity <= 0.1) {
          this.fadingOut = false;
        }
      } else {
        this.opacity += this.fadeSpeed;
        if (this.opacity >= 0.7) {
          this.fadingOut = true;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 255, 65, ${this.opacity})`;
      ctx.fill();

      // 发光效果
      if (this.size > 1.5) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 65, ${this.opacity * 0.15})`;
        ctx.fill();
      }
    }
  }

  // 初始化粒子
  const particleCount = Math.min(80, Math.floor(canvas.width * canvas.height / 15000));
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  // 绘制连线
  function drawLines() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          const opacity = (1 - distance / 120) * 0.15;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 255, 65, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  // 动画循环
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawLines();

    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });

    animationId = requestAnimationFrame(animate);
  }

  animate();

  // 页面不可见时暂停动画以节省性能
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animationId);
    } else {
      animate();
    }
  });
}

/**
 * 数字计数动画
 */
function initCounterAnimation() {
  const counters = document.querySelectorAll('[data-count]');
  
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.dataset.count);
        animateCounter(counter, target);
        observer.unobserve(counter);
      }
    });
  }, observerOptions);

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
  let current = 0;
  const increment = target / 60; // 60帧完成动画
  const duration = 1500; // 1.5秒
  const stepTime = duration / 60;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current);
  }, stepTime);
}

/**
 * 渲染最新攻略列表
 */
function renderLatestGuides() {
  const container = document.getElementById('guidesScroll');
  if (!container) return;

  try {
    const guides = getRecentGuides(6); // 显示最近6篇

    // 根据难度设置颜色
    const difficultyColors = {
      beginner: '#00ff41',
      intermediate: '#ffd700',
      advanced: '#ff8c00',
      expert: '#ff3333'
    };

    container.innerHTML = guides.map(guide => `
      <a href="guides.html#${guide.id}" class="guide-card" style="--guide-color: ${difficultyColors[guide.difficulty]}">
        ${isRecentGuide(guide.metadata.lastUpdated) ? '<span class="guide-card__new-badge">NEW</span>' : ''}
        <div class="guide-card__header">
          <div class="guide-card__tags">
            <span class="tag tag--${guide.difficulty}">${guide.difficultyName}</span>
            <span class="tag">${guide.categoryName}</span>
          </div>
          <h3 class="guide-card__title">${guide.title}</h3>
        </div>
        <div class="guide-card__body">
          <p class="guide-card__excerpt">${guide.subtitle}</p>
          <div class="guide-card__meta">
            <span class="guide-card__author">
              <span class="guide-card__author-avatar">${guide.author.avatar}</span>
              ${guide.author.name}
            </span>
            <span>⏱️ ${guide.readTime}分钟</span>
          </div>
        </div>
      </a>
    `).join('');
  } catch (error) {
    console.error('加载攻略数据失败:', error);
    container.innerHTML = '<p style="color: var(--color-text-muted); padding: 2rem;">攻略数据加载中...</p>';
  }
}

/**
 * 判断是否为近期更新的攻略（30天内）
 */
function isRecentGuide(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffDays = (now - date) / (1000 * 60 * 60 * 24);
  return diffDays <= 30;
}

/**
 * 渲染热门武器排行
 */
function renderTopWeapons() {
  const container = document.getElementById('weaponsRanking');
  if (!container) return;

  try {
    const weapons = getTopWeapons(8); // TOP8

    container.innerHTML = weapons.map((weapon, index) => {
      const scorePercent = weapon.overallScore;
      const positionClass = index === 0 ? 'weapon-rank__position--1' :
                           index === 1 ? 'weapon-rank__position--2' :
                           index === 2 ? 'weapon-rank__position--3' : '';

      return `
        <div class="weapon-rank-item" style="animation-delay: ${index * 0.1}s">
          <div class="weapon-rank__position ${positionClass}">#${index + 1}</div>
          <div class="weapon-rank__info">
            <span class="weapon-rank__name">${weapon.name}</span>
            <span class="weapon-rank__type">${weapon.typeName}</span>
          </div>
          <div class="weapon-rank__bar-wrapper">
            <div class="weapon-rank__bar-label">${scorePercent.toFixed(1)}分</div>
            <div class="weapon-rank__bar">
              <div class="weapon-rank__bar-fill" style="width: 0%" data-width="${scorePercent}%"></div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // 使用IntersectionObserver触发条形图动画
    setTimeout(() => {
      const bars = container.querySelectorAll('.weapon-rank__bar-fill');
      bars.forEach(bar => {
        bar.style.width = bar.dataset.width;
      });
    }, 500);

  } catch (error) {
    console.error('加载武器数据失败:', error);
    container.innerHTML = '<p style="color: var(--color-text-muted); padding: 2rem;">武器数据加载中...</p>';
  }
}

/**
 * 返回顶部按钮功能
 */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  // 监听滚动，显示/隐藏按钮
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

  // 点击返回顶部
  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * 平滑滚动到锚点（兼容性处理）
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.length > 1) { // 排除空锚点
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  });
});
