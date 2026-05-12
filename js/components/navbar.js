/**
 * 导航栏组件 - Navbar Component
 * 功能：固定顶部导航，响应式菜单，滚动效果
 */

class Navbar {
  constructor() {
    this.navbar = document.querySelector('.navbar');
    this.toggle = document.querySelector('.navbar__toggle');
    this.menu = document.querySelector('.navbar__menu');
    this.links = document.querySelectorAll('.navbar__link');
    this.isMenuOpen = false;
    this.lastScrollY = 0;

    if (this.navbar) {
      this.init();
    }
  }

  init() {
    this.bindEvents();
    this.setActiveLink();
    this.handleScroll();
  }

  bindEvents() {
    // 滚动事件监听
    window.addEventListener('scroll', () => this.handleScroll(), { passive: true });

    // 移动端菜单切换
    if (this.toggle) {
      this.toggle.addEventListener('click', () => this.toggleMenu());
    }

    // 点击导航链接关闭移动端菜单
    this.links.forEach(link => {
      link.addEventListener('click', () => {
        if (this.isMenuOpen) {
          this.closeMenu();
        }
      });
    });

    // 点击页面其他区域关闭菜单
    document.addEventListener('click', (e) => {
      if (this.isMenuOpen &&
          !this.navbar.contains(e.target)) {
        this.closeMenu();
      }
    });

    // ESC键关闭菜单
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isMenuOpen) {
        this.closeMenu();
      }
    });
  }

  handleScroll() {
    const currentScrollY = window.scrollY;

    // 添加/移除滚动样式类
    if (currentScrollY > 50) {
      this.navbar.classList.add('scrolled');
    } else {
      this.navbar.classList.remove('scrolled');
    }

    // 隐藏/显示导航栏（向下滚动隐藏，向上滚动显示）
    if (currentScrollY > this.lastScrollY && currentScrollY > 200) {
      this.navbar.style.transform = 'translateY(-100%)';
    } else {
      this.navbar.style.transform = 'translateY(0)';
    }

    this.lastScrollY = currentScrollY;
  }

  toggleMenu() {
    this.isMenuOpen ? this.closeMenu() : this.openMenu();
  }

  openMenu() {
    this.isMenuOpen = true;
    this.menu.classList.add('open');
    this.toggle.classList.add('active');

    // 动画效果：汉堡菜单变X
    const bars = this.toggle.querySelectorAll('.navbar__toggle-bar');
    bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    bars[1].style.opacity = '0';
    bars[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';

    // 禁止背景滚动
    document.body.style.overflow = 'hidden';
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.menu.classList.remove('open');
    this.toggle.classList.remove('active');

    // 恢复汉堡菜单图标
    const bars = this.toggle.querySelectorAll('.navbar__toggle-bar');
    bars[0].style.transform = 'none';
    bars[1].style.opacity = '1';
    bars[2].style.transform = 'none';

    // 恢复背景滚动
    document.body.style.overflow = '';
  }

  setActiveLink() {
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';

    this.links.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage ||
          (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }
}

// 初始化导航栏
document.addEventListener('DOMContentLoaded', () => {
  new Navbar();
});
