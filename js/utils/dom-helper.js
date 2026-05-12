/**
 * DOM操作工具函数库
 * 提供常用的DOM查询、创建、修改等操作的封装
 */

const DOMHelper = {
  /**
   * 选择单个元素
   * @param {string} selector - CSS选择器
   * @param {Element} context - 上下文元素（可选）
   * @returns {Element|null}
   */
  $(selector, context = document) {
    return context.querySelector(selector);
  },

  /**
   * 选择所有匹配元素
   * @param {string} selector - CSS选择器
   * @param {Element} context - 上下文元素（可选）
   * @returns {NodeList}
   */
  $$(selector, context = document) {
    return context.querySelectorAll(selector);
  },

  /**
   * 创建DOM元素
   * @param {string} tag - 标签名
   * @param {Object} attrs - 属性对象（可选）
   * @param {string|Element|Array} children - 子内容（可选）
   * @returns {Element}
   */
  create(tag, attrs = {}, children = null) {
    const el = document.createElement(tag);

    // 设置属性
    Object.entries(attrs).forEach(([key, value]) => {
      if (key === 'className') {
        el.className = value;
      } else if (key === 'style' && typeof value === 'object') {
        Object.assign(el.style, value);
      } else if (key.startsWith('on') && typeof value === 'function') {
        const eventName = key.slice(2).toLowerCase();
        el.addEventListener(eventName, value);
      } else if (key === 'dataset') {
        Object.entries(value).forEach(([dataKey, dataValue]) => {
          el.dataset[dataKey] = dataValue;
        });
      } else {
        el.setAttribute(key, value);
      }
    });

    // 添加子内容
    if (children !== null) {
      if (typeof children === 'string') {
        el.innerHTML = children;
      } else if (children instanceof Element) {
        el.appendChild(children);
      } else if (Array.isArray(children)) {
        children.forEach(child => {
          if (typeof child === 'string') {
            el.appendChild(document.createTextNode(child));
          } else if (child instanceof Element) {
            el.appendChild(child);
          }
        });
      }
    }

    return el;
  },

  /**
   * 添加事件监听（支持事件委托）
   * @param {Element} parent - 父元素
   * @param {string} eventType - 事件类型
   * @param {string} selector - 子元素选择器（可选，用于委托）
   * @param {Function} handler - 事件处理函数
   */
  on(parent, eventType, selector, handler) {
    if (typeof selector === 'function') {
      // 无委托模式
      parent.addEventListener(eventType, selector);
    } else {
      // 委托模式
      parent.addEventListener(eventType, (e) => {
        const target = e.target.closest(selector);
        if (target && parent.contains(target)) {
          handler.call(target, e);
        }
      });
    }
  },

  /**
   * 显示元素
   * @param {Element} el - 目标元素
   */
  show(el) {
    if (el) {
      el.style.display = '';
      el.classList.remove('hidden');
    }
  },

  /**
   * 隐藏元素
   * @param {Element} el - 目标元素
   */
  hide(el) {
    if (el) {
      el.style.display = 'none';
      el.classList.add('hidden');
    }
  },

  /**
   * 切换元素显示/隐藏
   * @param {Element} el - 目标元素
   */
  toggle(el) {
    if (el) {
      if (el.classList.contains('hidden')) {
        this.show(el);
      } else {
        this.hide(el);
      }
    }
  },

  /**
   * 切换CSS类名
   * @param {Element} el - 目标元素
   * @param {string} className - 类名
   * @param {boolean} force - 强制添加/移除（可选）
   */
  toggleClass(el, className, force) {
    if (el) {
      el.classList.toggle(className, force);
    }
  },

  /**
   * 添加CSS类名
   * @param {Element} el - 目标元素
   * @param {...string} classNames - 类名列表
   */
  addClass(el, ...classNames) {
    if (el) {
      el.classList.add(...classNames);
    }
  },

  /**
   * 移除CSS类名
   * @param {Element} el - 目标元素
   * @param {...string} classNames - 类名列表
   */
  removeClass(el, ...classNames) {
    if (el) {
      el.classList.remove(...classNames);
    }
  }

};
