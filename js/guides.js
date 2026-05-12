/**
 * 攻略文库页面主逻辑
 * 功能：搜索、筛选、排序、视图切换、详情展示、收藏、目录导航
 */

import { guidesDatabase, getAllGuides, getGuideById } from './data/guides-data.js';

class GuidesPage {
  constructor() {
    this.allGuides = [];
    this.filteredGuides = [];
    this.currentView = 'grid';
    this.currentCategory = 'all';
    this.currentDifficulty = 'all';
    this.currentMode = 'all';
    this.currentSort = 'latest';
    this.searchQuery = '';
    this.favorites = this.loadFavorites();
    this.currentGuideId = null;
    this.debounceTimer = null;

    this.init();
  }

  init() {
    this.cacheDOM();
    this.bindEvents();
    this.loadData();
    this.renderTagsCloud();
    this.applyFiltersAndRender();
  }

  cacheDOM() {
    this.elements = {
      searchInput: document.getElementById('guideSearchInput'),
      searchClear: document.getElementById('guideSearchClear'),
      categoryFilter: document.getElementById('categoryFilter'),
      difficultyFilter: document.getElementById('difficultyFilter'),
      modeFilter: document.getElementById('modeFilter'),
      sortSelect: document.getElementById('guideSortSelect'),
      gridBtn: document.getElementById('viewGridBtn'),
      listBtn: document.getElementById('viewListBtn'),
      guidesGrid: document.getElementById('guidesGrid'),
      resultBar: document.getElementById('guidesResultBar'),
      resultCount: document.getElementById('guidesResultCount'),
      resultClear: document.getElementById('guidesResultClear'),
      emptyState: document.getElementById('guidesEmpty'),
      tagsCloud: document.getElementById('tagsCloud'),
      detailBackdrop: document.getElementById('guideDetailBackdrop'),
      detailContainer: document.getElementById('guideDetailContainer'),
      detailClose: document.getElementById('guideDetailClose')
    };
  }

  bindEvents() {
    if (this.elements.searchInput) {
      this.elements.searchInput.addEventListener('input', (e) => {
        this.handleSearch(e.target.value);
      });
    }

    if (this.elements.searchClear) {
      this.elements.searchClear.addEventListener('click', () => {
        this.clearSearch();
      });
    }

    if (this.elements.categoryFilter) {
      this.elements.categoryFilter.addEventListener('change', (e) => {
        this.currentCategory = e.target.value;
        this.applyFiltersAndRender();
      });
    }

    if (this.elements.difficultyFilter) {
      this.elements.difficultyFilter.addEventListener('change', (e) => {
        this.currentDifficulty = e.target.value;
        this.applyFiltersAndRender();
      });
    }

    if (this.elements.modeFilter) {
      this.elements.modeFilter.addEventListener('change', (e) => {
        this.currentMode = e.target.value;
        this.applyFiltersAndRender();
      });
    }

    if (this.elements.sortSelect) {
      this.elements.sortSelect.addEventListener('change', (e) => {
        this.currentSort = e.target.value;
        this.applyFiltersAndRender();
      });
    }

    if (this.elements.gridBtn) {
      this.elements.gridBtn.addEventListener('click', () => {
        this.setViewMode('grid');
      });
    }

    if (this.elements.listBtn) {
      this.elements.listBtn.addEventListener('click', () => {
        this.setViewMode('list');
      });
    }

    if (this.elements.resultClear) {
      this.elements.resultClear.addEventListener('click', () => {
        this.resetAllFilters();
      });
    }

    if (this.elements.detailClose) {
      this.elements.detailClose.addEventListener('click', () => {
        this.closeDetail();
      });
    }

    if (this.elements.detailBackdrop) {
      this.elements.detailBackdrop.addEventListener('click', (e) => {
        if (e.target === this.elements.detailBackdrop) {
          this.closeDetail();
        }
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isDetailOpen()) {
        this.closeDetail();
      }
    });
  }

  loadData() {
    this.allGuides = getAllGuides();
  }

  handleSearch(query) {
    this.searchQuery = query.trim();

    const searchWrapper = this.elements.searchInput?.closest('.guides-search');
    if (searchWrapper) {
      if (this.searchQuery) {
        searchWrapper.classList.add('has-value');
      } else {
        searchWrapper.classList.remove('has-value');
      }
    }

    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      this.applyFiltersAndRender();
    }, 300);
  }

  clearSearch() {
    if (this.elements.searchInput) {
      this.elements.searchInput.value = '';
    }
    this.searchQuery = '';

    const searchWrapper = this.elements.searchInput?.closest('.guides-search');
    if (searchWrapper) {
      searchWrapper.classList.remove('has-value');
    }

    this.applyFiltersAndRender();
  }

  applyFiltersAndRender() {
    let result = [...this.allGuides];

    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      result = result.filter(guide =>
        guide.title.toLowerCase().includes(query) ||
        guide.subtitle.toLowerCase().includes(query) ||
        guide.metadata.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    if (this.currentCategory && this.currentCategory !== 'all') {
      result = result.filter(guide => guide.category === this.currentCategory);
    }

    if (this.currentDifficulty && this.currentDifficulty !== 'all') {
      result = result.filter(guide => guide.difficulty === this.currentDifficulty);
    }

    if (this.currentMode && this.currentMode !== 'all') {
      result = result.filter(guide => guide.gameMode === this.currentMode || guide.gameMode === 'all');
    }

    result = this.applySorting(result);

    this.filteredGuides = result;
    this.renderGuides();
    this.updateResultBar();
    this.updateTagsActiveState();
  }

  applySorting(guides) {
    switch (this.currentSort) {
      case 'latest':
        return guides.sort((a, b) =>
          new Date(b.metadata.lastUpdated) - new Date(a.metadata.lastUpdated)
        );
      case 'popular':
        return guides.sort((a, b) => b.metadata.views - a.metadata.views);
      case 'likes':
        return guides.sort((a, b) => b.metadata.likes - a.metadata.likes);
      case 'readTime':
        return guides.sort((a, b) => a.readTime - b.readTime);
      default:
        return guides;
    }
  }

  renderGuides() {
    if (!this.elements.guidesGrid) return;

    if (this.filteredGuides.length === 0) {
      this.elements.guidesGrid.innerHTML = '';
      if (this.elements.emptyState) {
        this.elements.emptyState.style.display = 'block';
      }
      return;
    }

    if (this.elements.emptyState) {
      this.elements.emptyState.style.display = 'none';
    }

    this.elements.guidesGrid.innerHTML = this.filteredGuides
      .map(guide => this.createGuideCardHTML(guide))
      .join('');

    this.bindCardEvents();
  }

  createGuideCardHTML(guide) {
    const isFavorited = this.favorites.includes(guide.id);

    return `
      <article class="guide-card" data-id="${guide.id}" data-difficulty="${guide.difficulty}">
        <div class="guide-card__header">
          <div class="guide-card__category">
            <span class="guide-card__category-icon">${this.getCategoryIcon(guide.category)}</span>
            <span>${guide.categoryName}</span>
            <span class="tag tag--${guide.difficulty}">${guide.difficultyName}</span>
          </div>
          <h3 class="guide-card__title">${guide.title}</h3>
          <p class="guide-card__subtitle">${guide.subtitle}</p>
        </div>

        <div class="guide-card__body">
          <div class="guide-card__tags">
            ${guide.metadata.tags.slice(0, 4).map(tag =>
              `<span class="tag">${tag}</span>`
            ).join('')}
          </div>
        </div>

        <div class="guide-card__footer">
          <div class="guide-card__meta">
            <span class="guide-card__meta-item read-time-badge">
              <span class="read-time-badge__icon">⏱️</span>
              ${guide.readTime}分钟
            </span>
            <span class="guide-card__meta-item">
              <span class="guide-card__meta-icon">👁️</span>
              ${this.formatNumber(guide.metadata.views)}
            </span>
            <span class="guide-card__meta-item">
              <span class="guide-card__meta-icon">👍</span>
              ${this.formatNumber(guide.metadata.likes)}
            </span>
          </div>
          <div class="guide-card__actions">
            <button class="guide-card__favorite-btn ${isFavorited ? 'favorited' : ''}"
                    data-guide-id="${guide.id}"
                    aria-label="${isFavorited ? '取消收藏' : '添加收藏'}"
                    title="${isFavorited ? '取消收藏' : '添加收藏'}">
              ${isFavorited ? '★' : '☆'}
            </button>
          </div>
        </div>
      </article>
    `;
  }

  bindCardEvents() {
    document.querySelectorAll('.guide-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.guide-card__favorite-btn')) {
          e.stopPropagation();
          this.toggleFavorite(e.target.closest('.guide-card__favorite-btn').dataset.guideId);
          return;
        }
        const guideId = card.dataset.id;
        this.openDetail(guideId);
      });
    });

    document.querySelectorAll('.related-guide-card').forEach(card => {
      card.addEventListener('click', () => {
        const guideId = card.dataset.guideId;
        this.openDetail(guideId);
      });
    });
  }

  getCategoryIcon(category) {
    const icons = {
      basics: '📚',
      tactics: '🎯',
      weapons: '🔫',
      modes: '🚩'
    };
    return icons[category] || '📖';
  }

  setViewMode(mode) {
    this.currentView = mode;

    if (this.elements.gridBtn && this.elements.listBtn) {
      this.elements.gridBtn.classList.toggle('active', mode === 'grid');
      this.elements.listBtn.classList.toggle('active', mode === 'list');
    }

    if (this.elements.guidesGrid) {
      this.elements.guidesGrid.classList.toggle('list-view', mode === 'list');
    }
  }

  updateResultBar() {
    if (!this.elements.resultBar) return;

    const hasActiveFilters =
      this.searchQuery ||
      this.currentCategory !== 'all' ||
      this.currentDifficulty !== 'all' ||
      this.currentMode !== 'all';

    if (hasActiveFilters) {
      this.elements.resultBar.style.display = 'flex';
      if (this.elements.resultCount) {
        this.elements.resultCount.textContent = this.filteredGuides.length;
      }
    } else {
      this.elements.resultBar.style.display = 'none';
    }
  }

  resetAllFilters() {
    this.searchQuery = '';
    this.currentCategory = 'all';
    this.currentDifficulty = 'all';
    this.currentMode = 'all';
    this.currentSort = 'latest';

    if (this.elements.searchInput) {
      this.elements.searchInput.value = '';
      const searchWrapper = this.elements.searchInput.closest('.guides-search');
      if (searchWrapper) searchWrapper.classList.remove('has-value');
    }
    if (this.elements.categoryFilter) this.elements.categoryFilter.value = 'all';
    if (this.elements.difficultyFilter) this.elements.difficultyFilter.value = 'all';
    if (this.elements.modeFilter) this.elements.modeFilter.value = 'all';
    if (this.elements.sortSelect) this.elements.sortSelect.value = 'latest';

    this.applyFiltersAndRender();
  }

  renderTagsCloud() {
    if (!this.elements.tagsCloud) return;

    const categories = [
      { id: 'all', name: '全部攻略', icon: '📖' },
      { id: 'basics', name: '基础教学', icon: '📚' },
      { id: 'tactics', name: '战术进阶', icon: '🎯' },
      { id: 'weapons', name: '武器攻略', icon: '🔫' },
      { id: 'modes', name: '模式攻略', icon: '🚩' }
    ];

    this.elements.tagsCloud.innerHTML = categories.map(cat => {
      const count = cat.id === 'all'
        ? this.allGuides.length
        : this.allGuides.filter(g => g.category === cat.id).length;

      return `
        <button class="guides-tag-btn ${cat.id === this.currentCategory ? 'active' : ''}"
                data-category="${cat.id}">
          ${cat.icon} ${cat.name}
          <span class="tag-count">(${count})</span>
        </button>
      `;
    }).join('');

    this.elements.tagsCloud.querySelectorAll('.guides-tag-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.currentCategory = btn.dataset.category;
        if (this.elements.categoryFilter) {
          this.elements.categoryFilter.value = this.currentCategory;
        }
        this.updateTagsActiveState();
        this.applyFiltersAndRender();
      });
    });
  }

  updateTagsActiveState() {
    if (!this.elements.tagsCloud) return;

    this.elements.tagsCloud.querySelectorAll('.guides-tag-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.category === this.currentCategory);
    });
  }

  openDetail(guideId) {
    const guide = getGuideById(guideId);
    if (!guide) return;

    this.currentGuideId = guideId;

    if (this.elements.detailContainer) {
      this.elements.detailContainer.innerHTML = this.createDetailHTML(guide);
    }

    if (this.elements.detailBackdrop) {
      this.elements.detailBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    setTimeout(() => {
      this.setupTOCNavigation();
      this.bindRelatedGuidesEvents();
    }, 100);
  }

  closeDetail() {
    if (this.elements.detailBackdrop) {
      this.elements.detailBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }

    this.currentGuideId = null;
  }

  isDetailOpen() {
    return this.elements.detailBackdrop?.classList.contains('active');
  }

  createDetailHTML(guide) {
    const isFavorited = this.favorites.includes(guide.id);

    return `
      <div class="guide-detail">
        <button class="guide-detail__close" aria-label="关闭详情">&times;</button>

        <header class="guide-detail__header">
          <div class="guide-detail__badge-group">
            <span class="tag tag--${guide.difficulty}">${guide.difficultyName}</span>
            <span class="tag">${guide.categoryName}</span>
            <span class="read-time-badge">
              <span class="read-time-badge__icon">⏱️</span>
              阅读约 ${guide.readTime} 分钟
            </span>
          </div>

          <h1 class="guide-detail__title">${guide.title}</h1>
          <p class="guide-detail__subtitle">${guide.subtitle}</p>

          <div class="guide-detail__meta-row">
            <span>👁️ ${this.formatNumber(guide.metadata.views)} 次浏览</span>
            <span>👍 ${this.formatNumber(guide.metadata.likes)} 个赞</span>
            <span>📅 更新于 ${guide.metadata.lastUpdated}</span>
            <span>v${guide.metadata.version}</span>
          </div>

          <div class="guide-detail__author">
            <div class="guide-detail__author-avatar">${guide.author.avatar}</div>
            <div class="guide-detail__author-info">
              <span class="guide-detail__author-name">${guide.author.name}</span>
              <span class="guide-detail__author-role">${guide.author.role}</span>
              <span class="guide-detail__author-bio">${guide.author.bio}</span>
            </div>
            <button class="guide-card__favorite-btn ${isFavorited ? 'favorited' : ''}"
                    data-guide-id="${guide.id}"
                    style="margin-left: auto;">
              ${isFavorited ? '★ 已收藏' : '☆ 收藏'}
            </button>
          </div>
        </header>

        <div class="guide-detail__body">
          <nav class="guide-detail__toc" id="guideTOC">
            <h3 class="guide-detail__toc-title">📑 目录导航</h3>
            <ul class="guide-detail__toc-list">
              ${guide.toc.map(item => `
                <li class="guide-detail__toc-item">
                  <a href="#section-${item.id}" class="guide-detail__toc-link ${item.level > 2 ? 'level-3' : ''}">
                    ${item.title}
                  </a>
                </li>
              `).join('')}
            </ul>
          </nav>

          <main class="guide-detail__content">
            <div class="guide-markdown" id="guideContent">
              ${this.renderMarkdown(guide.content)}
            </div>

            <div class="related-guides" id="relatedGuides">
              <h2 class="related-guides__title">📚 相关推荐</h2>
              <div class="related-guides__grid" id="relatedGuidesGrid">
                ${this.getRelatedGuidesHTML(guide)}
              </div>
            </div>
          </main>
        </div>
      </div>
    `;
  }

  renderMarkdown(content) {
    let html = content;

    html = html.replace(/^### (.*$)/gm, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gm, '<h2 id="section-$1">$1</h2>');
    html = html.replace(/^#### (.*$)/gm, '<h4>$1</h4>');

    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

    html = html.replace(/^> (.*$)/gm, '<blockquote><p>$1</p></blockquote>');

    html = html.replace(/^- (.*$)/gm, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>\n?)+/g, (match) => `<ul>${match}</ul>`);

    html = html.replace(/^\d+\. (.*$)/gm, '<li>$1</li>');

    html = html.replace(/^```[\s\S]*?```/gm, (match) => {
      const code = match.replace(/```\w*\n?/g, '').replace(/```$/g, '');
      return `<pre><code>${code}</code></pre>`;
    });

    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

    html = html.replace(/^\| .*/gm, (row) => {
      const cells = row.split('|').filter(cell => cell.trim());
      if (cells.every(cell => /^[-:\s]+$/.test(cell))) {
        return '';
      }
      const tag = row.startsWith('| ') ? 'th' : 'td';
      return `<tr>${cells.map(cell => `<${tag}>${cell.trim()}</${tag}>`).join('')}</tr>`;
    });

    html = html.replace(/(<tr>.*<\/tr>\n?)+/g, (match) => {
      const rows = match.split('</tr>').filter(r => r.includes('<tr'));
      if (rows.length > 0) {
        const firstRow = rows[0];
        const theadTag = firstRow.includes('<th>') ? '<thead>' + firstRow + '</thead>' : '';
        const tbodyRows = rows.filter(r => !r.includes('<th>')).join('');
        const tbodyTag = tbodyRows ? '<tbody>' + tbodyRows + '</tbody>' : '';
        return `<table>${theadTag}${tbodyTag}</table>`;
      }
      return match;
    });

    html = html.replace(/^---$/gm, '<hr>');

    html = html.replace(/\n\n+/g, '</p><p>');
    html = html.replace(/^(?!<)(?!$)(?!<\/)(?!<h)(?!<ul)(!<ol)(!<bl)(!<ta)(!<pr)(!<b)(!<hr)(.*)$/gm, '<p>$1</p>');

    html = html.replace(/<p><(h[234]|ul|ol|blockquote|table|pre|hr)/g, '<$1');
    html = html.replace(/(<\/(h[234]|ul|ol|blockquote|table|pre|hr)>)<\/p>/g, '$1');

    html = html.replace(/<p>\s*<\/p>/g, '');

    html = html.replace(/\n/g, '');

    return html;
  }

  setupTOCNavigation() {
    const tocLinks = document.querySelectorAll('.guide-detail__toc-link');
    const contentSections = document.querySelectorAll('.guide-markdown h2, .guide-markdown h3');

    if (tocLinks.length === 0) return;

    tocLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 20;
          const contentContainer = document.querySelector('.guide-detail__content');
          if (contentContainer) {
            contentContainer.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
        }

        tocLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      });
    });

    const contentContainer = document.querySelector('.guide-detail__content');
    if (contentContainer) {
      contentContainer.addEventListener('scroll', () => {
        let currentSection = '';

        contentSections.forEach(section => {
          const sectionTop = section.offsetTop;
          const containerScrollTop = contentContainer.scrollTop;

          if (containerScrollTop >= sectionTop - 60) {
            currentSection = section.getAttribute('id') || '';
          }
        });

        tocLinks.forEach(link => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${currentSection}`
          );
        });
      });
    }
  }

  getRelatedGuidesHTML(currentGuide) {
    const relatedIds = currentGuide.relatedGuides || [];
    const relatedGuides = relatedIds
      .map(id => getGuideById(id))
      .filter(g => g && g.id !== currentGuide.id)
      .slice(0, 3);

    if (relatedGuides.length === 0) {
      const others = this.allGuides
        .filter(g => g.id !== currentGuide.id)
        .slice(0, 3);
      return others.map(g => `
        <div class="related-guide-card" data-guide-id="${g.id}">
          <div class="related-guide-card__title">${g.title}</div>
          <div class="related-guide-card__desc">${g.subtitle}</div>
        </div>
      `).join('');
    }

    return relatedGuides.map(g => `
      <div class="related-guide-card" data-guide-id="${g.id}">
        <div class="related-guide-card__title">${g.title}</div>
        <div class="related-guide-card__desc">${g.subtitle}</div>
      </div>
    `).join('');
  }

  bindRelatedGuidesEvents() {
    document.querySelectorAll('.related-guide-card').forEach(card => {
      card.addEventListener('click', () => {
        const guideId = card.dataset.guideId;
        this.openDetail(guideId);
      });
    });

    document.querySelectorAll('.guide-detail .guide-card__favorite-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleFavorite(btn.dataset.guideId);
        const guide = getGuideById(this.currentGuideId);
        if (guide) {
          if (this.elements.detailContainer) {
            this.elements.detailContainer.innerHTML = this.createDetailHTML(guide);
          }
          setTimeout(() => {
            this.setupTOCNavigation();
            this.bindRelatedGuidesEvents();
          }, 100);
        }
      });
    });

    const closeBtn = document.querySelector('.guide-detail__close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        this.closeDetail();
      });
    }
  }

  toggleFavorite(guideId) {
    const index = this.favorites.indexOf(guideId);

    if (index > -1) {
      this.favorites.splice(index, 1);
    } else {
      this.favorites.push(guideId);
    }

    this.saveFavorites();
    this.updateFavoriteButtons(guideId);
  }

  loadFavorites() {
    try {
      const saved = localStorage.getItem('deltaForce_guides_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.warn('无法读取收藏数据:', e);
      return [];
    }
  }

  saveFavorites() {
    try {
      localStorage.setItem(
        'deltaForce_guides_favorites',
        JSON.stringify(this.favorites)
      );
    } catch (e) {
      console.warn('无法保存收藏数据:', e);
    }
  }

  updateFavoriteButtons(guideId) {
    const isFavorited = this.favorites.includes(guideId);

    document.querySelectorAll(`.guide-card__favorite-btn[data-guide-id="${guideId}"]`).forEach(btn => {
      btn.classList.toggle('favorited', isFavorited);
      btn.innerHTML = isFavorited ? '★' : '☆';
      btn.setAttribute('aria-label', isFavorited ? '取消收藏' : '添加收藏');
      btn.setAttribute('title', isFavorited ? '取消收藏' : '添加收藏');
    });
  }

  formatNumber(num) {
    if (num >= 10000) {
      return (num / 10000).toFixed(1) + '万';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.guidesPage = new GuidesPage();
});
