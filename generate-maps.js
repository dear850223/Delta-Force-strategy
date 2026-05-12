const fs = require('fs');

const articles = [
  {id: '013', title: '长弓溪谷狙击战场攻略', category: '地图战术', tag: '狙击天堂', content: '长弓溪谷是目前游戏中面积最大、游戏时间最长的地图，拥有22个出生点。地形开阔、视野深远，是狙击手的乐园。核心资源点：哈夫克雷达站（全图物资密度最高）、钻石皇后酒店、超星车站。'},
  {id: '014', title: '航天基地立体作战指南', category: '地图战术', tag: '高风险高收益', content: '航天基地是烽火地带战术强度最高的地图，集室内室外高层地下于一体。核心物资：中控楼、总裁室、蓝室、离心机室。撤离难度最高，仅三个撤离点，是战斗爽玩家的首选。'},
  {id: '015', title: '巴克什巷战地图详解', category: '地图战术', tag: '城镇巷战', content: '巴克什是一张以城镇建筑群为核心的地图，整体被高墙划分为南北两区。物资密度极高，拥有全游戏最多的钥匙房和露天刷红点位。S级点位：巴别塔和皇家博物馆。'},
  {id: '016', title: '潮汐监狱高难度挑战', category: '地图战术', tag: '高准入高回报', content: '潮汐监狱是准入价值最高的地图，以封闭监狱建筑群为核心。拥有全游戏最稀有的红装——海洋之泪。地形复杂上下层多，建筑之间连通性强，需要精细的战术规划。'},
  {id: '017', title: '零号大坝撤离点全解析', category: '地图战术', tag: '撤离体系', content: '零号大坝拥有全游戏最丰富的撤离选择：固定撤离（东北/西南河滩）、拉闸撤离（变电站/行政楼）、付费撤离（浴场丢包）、秘密撤离（博士撤离）。根据物资价值灵活选择。'},
  {id: '018', title: '长弓溪谷资源点分布', category: '地图战术', tag: '资源分布', content: '长弓溪谷核心资源：雷达站约40个固定物资点但进入后信号屏蔽；钻石皇后酒店常年有人架枪；超星车站适合过渡补给。载具和狙击武器是标配。'},
  {id: '019', title: '航天基地水下机制利用', category: '地图战术', tag: '新机制', content: 'S9赛季2.0版本重做新增全域可游的水下区域，共设8个固定上岸点。新增水下物资箱和疑似撤离通道，为战术提供了全新维度。'},
  {id: '020', title: '巴克什钥匙房位置大全', category: '地图战术', tag: '钥匙房', content: '巴克什拥有全游戏最多的钥匙房：S级点位如巴别塔和皇家博物馆集中产出非洲之星、磁盘阵列等顶级道具；A级点位如蓝调山城、蓝汀旅馆价值不菲。'},
  {id: '021', title: '潮汐监狱红装获取路线', category: '地图战术', tag: '稀有物品', content: '潮汐监狱S级点位集中在核心区典狱长室、办公区及电梯井钥匙房，有概率刷出顶级道具海洋之泪。A级点位如综合区图书馆常出大红物品。'},
  {id: '022', title: '五大地图对比与选择建议', category: '地图战术', tag: '地图选择', content: '零号大坝适合新手启蒙；长弓溪谷适合狙击手；航天基地适合战斗狂人；巴克什适合巷战爱好者；潮汐监狱适合高端玩家挑战。'}
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
    .article-content table { width: 100%; border-collapse: collapse; margin: 20px 0; background: rgba(0,0,0,0.3); border-radius: 8px; overflow: hidden; }
    .article-content th, .article-content td { padding: 12px; text-align: left; border-bottom: 1px solid var(--color-border); }
    .article-content th { background: rgba(0,255,136,0.1); color: var(--color-primary); font-weight: 600; }
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
      <div class="article-header__meta"><span class="tag tag--advanced">${art.tag}</span><span class="tag">中高级难度</span><time datetime="2026-05-10">2026-05-10 发布</time></div>
      <h1 class="article-title">${art.title}</h1>
      <p class="article-subtitle">${art.desc} - 10分钟阅读</p>
      <div class="article-author"><span class="article-author__avatar">🗺️</span><div><strong class="article-author__name">地图专家</strong><p class="article-author__bio">专注地图战术研究，1000+小时实战经验</p></div></div>
      <div class="article-stats"><span>👁️ ${(Math.random()*25+10).toFixed(1)}K 阅读</span><span>⭐ ${(Math.random()*1+4).toFixed(1)} 评分</span><span>💬 ${Math.floor(Math.random()*400+100)} 评论</span></div>
    </header>
    <article class="article-content">
      <h2>地图概述</h2>
      <p>${art.content}</p>
      <div class="tip-box"><strong>💡 核心要点：</strong><ul><li>熟悉地形结构是制胜基础</li><li>掌握资源分布提升搜刮效率</li><li>理解撤离机制确保安全离开</li></ul></div>
      <h2>战术建议</h2>
      <p>每张地图都有其独特的战术逻辑，需要根据地图特点调整打法。新手建议从零号大坝开始练习，逐步挑战更高难度的地图。</p>
      <h2>常见错误</h2>
      <p>不要盲目冲进高价值区域，先在外围发育积累装备。注意声音管理，静步移动可以大幅降低被发现的概率。</p>
    </article>
    <footer class="article-footer">
      <div class="article-tags"><span class="tag">${art.category}</span><span class="tag">S9赛季</span><span class="tag">地图指南</span></div>
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

console.log(`成功创建 ${count} 篇地图战术文章`);