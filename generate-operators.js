const fs = require('fs');

const articles = [
  {id: '023', title: '红狼干员完全攻略', category: '干员攻略', tag: '突击T0', content: '红狼是版本突击天花板，动力外骨骼提升移速与射速，击杀回血续战。技能循环：滑铲突进→烟雾遮蔽→激活外骨骼→手炮覆盖→近战终结。跑刀玩法最优选择。'},
  {id: '024', title: '威龙干员爆发突破指南', category: '干员攻略', tag: '短距爆发', content: '威龙侧重短距爆发，喷气背包可快速冲刺转移，虎蹲炮能击倒集群敌人，磁吸C4用于破点封路。核心连招：冲刺贴脸→虎蹲炮控场→磁吸C4收割。'},
  {id: '025', title: '回响干员信息压制攻略', category: '干员攻略', tag: '新干员S9', content: 'S9新干员回响为侦察T0，四颗干扰道具可封锁敌方视野与沟通，声纹感知能监听敌人落点与埋伏，信息获取能力断层领先。'},
  {id: '026', title: '骇爪干员侦查技巧', category: '干员攻略', tag: '探点专家', content: '骇爪擅长远程侦察和区域控制，飞刀可标记敌人位置。虽然S9被削弱但近距离协同依然有效，适合调查类任务和建筑清理。'},
  {id: '027', title: '蜂医干员团队续航指南', category: '干员攻略', tag: '治疗核心', content: '蜂医激素枪可远程多目标治疗，蜂巢烟雾弹能转化为治疗烟，团战容错率高。跟团推进，队友交火时提前释放治疗烟。'},
  {id: '028', title: '蛊干员毒雾控制战术', category: '干员攻略', tag: '群体干扰', content: '蛊致盲毒雾冷却缩短至50秒，新增听力压制效果，群体干扰能力质变。优先投放在通道狭窄处、房间入口、撤离点。'},
  {id: '029', title: '牧羊人干员控场防守', category: '干员攻略', tag: '室内霸主', content: '牧羊人加强后声波陷阱销毁距离增至100米，大范围控场能力拉满，大招期间近乎无敌，是室内战霸主。陷阱布置选转角、阴影处。'},
  {id: '030', title: '深蓝干员开团承伤攻略', category: '干员攻略', tag: '组排核心', content: '深蓝防爆盾可扛伤，钩爪突进能快速开团，大招切枪提升输出，是组排开团核心。打法：钩爪突进→举盾扛伤→掩护队友→大招爆发。'},
  {id: '031', title: '露娜干员全能探点指南', category: '干员攻略', tag: '全能侦察', content: '露娜探测箭矢可快速定位敌情，电击箭矢封锁路线，适配各类探点任务。开局用探测箭排查周边，确认安全后带领队友推进。'},
  {id: '032', title: '银翼干员无人机追踪', category: '干员攻略', tag: '视觉追踪', content: '银翼猎鹰无人机现在可以看到远处的脚印，追人、防绕后、排点一目了然。S9强势崛起，信息获取能力大幅提升。'},
  {id: '033', title: '疾风干员快速突袭', category: '干员攻略', tag: '高机动性', content: '疾风是高机动性突击选择，适合快速转点和侧翼突袭。利用高移速优势打乱敌方阵型，配合队友形成以多打少。'},
  {id: '034', title: '无名干员暗夜偷袭', category: '干员攻略', tag: '隐身刺客', content: '无名可进入隐身状态持续8秒，移动速度提升，适合绕后偷袭。利用隐身接近敌人后方，出其不意发起攻击。'},
  {id: '035', title: '赛伊德三兄弟信息报告', category: '干员攻略', tag: '区域联防', content: 'S9赛季赛伊德三兄弟被削弱，信息报告距离从全图骤降至200米。需要更精确的部署位置，专注于关键区域侦察。'},
  {id: '036', title: '蝶干员空中支援指南', category: '干员攻略', tag: '空中治疗', content: '蝶可在空中为队友提供治疗支援，机动性强。适合在复杂地形中快速响应队友需求，提供及时的生命保障。'},
  {id: '037', title: '佐娅干员防御工事', category: '干员攻略', tag: '阵地构建', content: '佐娅擅长构建防御工事和阵地，可部署掩体和障碍物。适合防守模式和据点争夺战，为团队提供可靠的防护。'}
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
    .article-content ul, .article-content ol { margin-left: 30px; margin-bottom: 20px; }
    .article-content li { margin-bottom: 10px; }
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
      <div class="article-header__meta"><span class="tag tag--intermediate">${art.tag}</span><span class="tag">中高级难度</span><time datetime="2026-05-10">2026-05-10 发布</time></div>
      <h1 class="article-title">${art.title}</h1>
      <p class="article-subtitle">${art.desc} - 10分钟阅读</p>
      <div class="article-author"><span class="article-author__avatar">🎖️</span><div><strong class="article-author__name">干员专家</strong><p class="article-author__bio">专注干员研究与实战应用</p></div></div>
      <div class="article-stats"><span>👁️ ${(Math.random()*30+10).toFixed(1)}K 阅读</span><span>⭐ ${(Math.random()*1+4).toFixed(1)} 评分</span><span>💬 ${Math.floor(Math.random()*500+150)} 评论</span></div>
    </header>
    <article class="article-content">
      <h2>干员概述</h2>
      <p>${art.content}</p>
      <div class="tip-box"><strong>💡 核心优势：</strong><ul><li>S9赛季表现优秀，版本适应性强</li><li>技能组合灵活，可搭配多种战术</li><li>全模式通用，无明显短板</li></ul></div>
      <h2>技能详解</h2>
      <p>每个干员都有独特的主动技能和被动技能，合理运用可以最大化战斗效率。建议在训练场熟悉技能机制后再投入实战。</p>
      <h2>阵容搭配</h2>
      <p>根据队伍配置选择合适的干员，形成互补的战斗体系。突击、侦察、支援、工程四大兵种缺一不可。</p>
    </article>
    <footer class="article-footer">
      <div class="article-tags"><span class="tag">${art.category}</span><span class="tag">S9赛季</span><span class="tag">干员指南</span></div>
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

console.log(`成功创建 ${count} 篇干员攻略文章`);