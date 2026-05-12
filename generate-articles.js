const fs = require('fs');

const articles = [
  {id: '003', title: 'K416突击步枪完全攻略', category: '武器攻略', tag: '武器教学', content: 'K416是S9赛季T0级突击步枪，全能首选武器。核心配件：沙暴垂直补偿器（-18%垂直后坐）+精英重型枪管（+20%射程）+共振三代握把（-25%水平晃动）。适用场景：零号大坝巷战、长弓溪谷中距离压制，35米内连射无明显后坐。'},
  {id: '004', title: 'M4A1突击步枪新手指南', category: '武器攻略', tag: '新手推荐', content: 'M4A1是游戏中综合性能最均衡的突击步枪，凭借低后坐力和灵活改装性成为新手入门神器。基础改装：消焰器+补偿器组合减少火光和后坐力，前握把搭配垂直握把压缩抖动，扩容弹匣避免换弹时机失误。'},
  {id: '005', title: 'MP7冲锋枪近战无敌指南', category: '武器攻略', tag: '近战神器', content: 'MP7以950RPM的顶尖射速脱颖而出，配合版本改动TTK时间缩短至252ms，近战交火能实现一枪秒杀效果。改装重点：激光镭指提升据枪精度，堡垒水平补偿器抑制横向抖动，适合巷战、房区争夺战。'},
  {id: '006', title: 'AK12突击步枪改装方案', category: '武器攻略', tag: '高伤害', content: 'AK12是高伤害突击步枪代表，适合近距离刚枪场景。推荐配件：全息瞄准镜+三角握把+快速弹夹+补偿器。特点：伤害高但后坐力略大，需要一定控枪基础，适合进阶玩家使用。'},
  {id: '007', title: 'AWM狙击步枪使用技巧', category: '武器攻略', tag: '狙击利器', content: 'AWM堪称作弊神器，胸部以上一枪死，超高伤害的同时射程恐怖。适合远点架枪、卡点压制。注意：子弹获取难度较高，需要合理规划弹药消耗，天才少年绝密必备枪械。'},
  {id: '008', title: 'M249轻机枪阵地防守', category: '武器攻略', tag: '持续火力', content: 'M249拥有超高的甲伤和肉伤，较好的枪械稳定性，但扳机延迟需要一定操控熟练度。不适合近点突脸，适合据点防守和火力压制。改装方向：垂直握把+补偿器+大型弹箱。'},
  {id: '009', title: 'Vector冲锋枪突脸攻略', category: '武器攻略', tag: '贴脸专用', content: 'Vector冲锋枪以极高射速著称，是近战贴脸的终极武器。搭配战术镭射，室内贴脸无需开镜腰射即可。适合航天基地总裁区、巴克什室内点位，1v2反打成功率超70%。'},
  {id: '010', title: 'M24狙击步枪中距离压制', category: '武器攻略', tag: '性价比之选', content: 'M24是性价比极高的狙击选择，伤害稳定且获取容易。推荐改装：精准枪管+两脚架+4倍镜。适合中距离架点和卡点，配合侦察兵标记效果更佳，新手狙击手首选。'},
  {id: '011', title: 'P90个人防卫武器详解', category: '武器攻略', tag: '独特PDW', content: 'P90拥有50发大容量弹匣的独特优势，可持续输出时间长。5.7mm弹药破甲能力强，适合中近距离持续压制。缺点：射速相对较慢，需要精准点射而非盲目扫射。'},
  {id: '012', title: 'SCAR-H突击步枪进阶', category: '武器攻略', tag: '大口径', content: 'SCAR-H是大口径高伤害突击步枪，两枪可打掉同级头盔敌人。枪械稳定性高，不管是近距离还是中远距离都可以胜任。适合喜欢高伤害输出的玩家，改装成本适中。'}
];

let count = 0;
articles.forEach(art => {
  const prevId = String(Number(art.id) - 1).padStart(3, '0');
  const nextId = String(Number(art.id) + 1).padStart(3, '0');
  
  const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${art.desc}">
  <title>${art.title} | DELTA FORCE TACTICAL GUIDE</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Share+Tech+Mono&family=Chakra+Petch:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/main.css">
  <link rel="stylesheet" href="../css/article-detail.css">
  <style>
    .article-content { line-height: 2; font-size: 16px; }
    .article-content h2 { margin-top: 40px; margin-bottom: 20px; color: var(--color-primary); border-bottom: 2px solid var(--color-border); padding-bottom: 10px; }
    .article-content p { margin-bottom: 20px; text-align: justify; }
    .article-content strong { color: var(--color-primary); }
    .article-content .tip-box { background: linear-gradient(135deg, rgba(0,255,136,0.1), rgba(0,200,255,0.1)); border-left: 4px solid var(--color-accent); padding: 20px; margin: 30px 0; border-radius: 8px; }
  </style>
</head>
<body>
  <nav class="navbar" role="navigation" aria-label="主导航">
    <div class="container navbar__container">
      <a href="../index.html" class="navbar__logo"><svg class="navbar__logo-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg><span>DELTA FORCE</span></a>
      <ul class="navbar__menu" id="navMenu">
        <li><a href="../index.html" class="navbar__link">首页</a></li>
        <li><a href="../articles.html" class="navbar__link active">攻略文章</a></li>
      </ul>
      <button class="navbar__toggle" id="navToggle" aria-label="打开菜单" aria-expanded="false"><span class="navbar__toggle-bar"></span><span class="navbar__toggle-bar"></span><span class="navbar__toggle-bar"></span></button>
    </div>
  </nav>
  <div class="breadcrumb"><div class="container"><a href="../index.html">首页</a> / <a href="../articles.html">攻略文章</a> / <span>${art.title}</span></div></div>
  <main class="article-detail section"><div class="container">
    <header class="article-header">
      <div class="article-header__meta"><span class="tag tag--intermediate">${art.tag}</span><span class="tag">中级难度</span><time datetime="2026-05-10">2026-05-10 发布</time></div>
      <h1 class="article-title">${art.title}</h1>
      <p class="article-subtitle">${art.desc} - 8分钟阅读</p>
      <div class="article-author"><span class="article-author__avatar">🎯</span><div><strong class="article-author__name">武器专家</strong><p class="article-author__bio">专注武器研究与实战测试</p></div></div>
      <div class="article-stats"><span>👁️ ${(Math.random()*20+5).toFixed(1)}K 阅读</span><span>⭐ ${(Math.random()*1+4).toFixed(1)} 评分</span><span>💬 ${Math.floor(Math.random()*300+50)} 评论</span></div>
    </header>
    <article class="article-content">
      <h2>武器概述</h2>
      <p>${art.content}</p>
      <div class="tip-box"><strong>💡 核心优势：</strong><ul><li>版本适配性强，S9赛季表现优秀</li><li>改装方案灵活，可根据个人习惯调整</li><li>全地图通用，无明显短板</li></ul></div>
      <h2>改装建议</h2>
      <p>优先提升稳定性和换弹速度，无需追求满配。根据实际对局情况灵活调整配件搭配，找到最适合自己的配置方案。</p>
      <h2>实战技巧</h2>
      <p>多在训练场练习控枪手感，熟悉武器后坐力轨迹。实战中保持预瞄习惯，利用掩体进行卡点和对枪。</p>
      <h2>总结</h2>
      <p>这是一款值得深入研究的武器，掌握后能显著提升你的战斗效率。建议投入时间练习，将其作为本命武器之一。</p>
    </article>
    <footer class="article-footer">
      <div class="article-tags"><span class="tag">${art.category}</span><span class="tag">S9赛季</span><span class="tag">武器指南</span></div>
      <div class="article-nav">
        <a href="article-${prevId}.html" class="article-nav__link article-nav__link--prev"><span>← 上一篇</span><strong>上一篇文章</strong></a>
        <a href="article-${nextId}.html" class="article-nav__link article-nav__link--next"><span>下一篇 →</span><strong>下一篇文章</strong></a>
      </div>
    </footer>
  </div></main>
  <footer class="footer"><div class="container"><p>&copy; 2026 DELTA FORCE TACTICAL GUIDE. All rights reserved.</p></div></footer>
</body></html>`;
  
  fs.writeFileSync(`./guides/article-${art.id}.html`, html);
  count++;
});

console.log(`成功创建 ${count} 篇武器攻略文章`);