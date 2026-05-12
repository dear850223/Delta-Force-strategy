/**
 * 三角洲行动 - 游民星空攻略文章数据库
 * 来源: https://www.gamersky.com/z/sjztzbd/
 * 共收录 100+ 篇攻略文章
 */

const articlesDatabase = [
  {
    id: "art-001",
    title: "危险行动新手开荒攻略 人机局怎么搜",
    category: "beginner",
    categoryName: "新手指南",
    subCategory: "烽火地带",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-1822233.html",
    author: "Always聪聪",
    date: "2024-09-26",
    tags: ["新手", "开荒", "人机局", "搜刮"],
    summary: "危险行动人机局搜刮路线详解，帮助新手快速上手游戏。",
    content: `<h2>危险行动新手开荒攻略</h2>
<p>《三角洲行动》中危险行动的人机局应该怎么搜呢？本文为大家带来危险行动新手开荒攻略，帮助大家快速上手。</p>
<h3>人机局特点</h3>
<p>人机局是新手熟悉地图和机制的最佳方式。在人机局中，敌人的AI行为模式相对固定，玩家可以利用这一点来练习搜刮路线和战斗技巧。</p>
<h3>推荐搜刮路线</h3>
<p>建议新手从地图边缘开始，逐步向中心区域推进。优先搜索武器箱和医疗物资，确保有足够的装备应对遭遇战。</p>
<h3>注意事项</h3>
<ul><li>注意时间限制，合理规划搜刮时间</li><li>留意撤离点位置，提前规划撤离路线</li><li>人机局虽然简单，但也要保持警惕</li></ul>`
  },
  {
    id: "art-002",
    title: "开荒武器推荐",
    category: "beginner",
    categoryName: "新手指南",
    subCategory: "武器推荐",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-1822278.html",
    author: "沙皇StaFenGrad",
    date: "2024-09-26",
    tags: ["新手", "武器", "推荐", "开荒"],
    summary: "公测开荒期最好用的武器推荐，帮助新手快速选择适合的枪械。",
    content: `<h2>开荒武器推荐</h2>
<p>《三角洲行动》已经开启了公测，在开荒期哪些武器好用呢？本文为大家带来开荒武器推荐。</p>
<h3>突击步枪</h3>
<p>M4A1是最均衡的选择，后坐力可控，适合各种距离作战。AK-47伤害高但后坐力大，适合有FPS基础的玩家。</p>
<h3>冲锋枪</h3>
<p>MP5射速快、后坐力低，是近战利器。P90弹容量大，容错率高。</p>
<h3>狙击枪</h3>
<p>AWM是首选狙击枪，伤害高、精度好。新手可以先从M24开始练习。</p>`
  },
  {
    id: "art-003",
    title: "烽火地带枪械数据整理 枪械射速、秒伤数据一览表",
    category: "data",
    categoryName: "数据研究",
    subCategory: "枪械数据",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-1821972.html",
    author: "十八年树人",
    date: "2024-09-26",
    tags: ["数据", "枪械", "射速", "秒伤", "TTK"],
    summary: "烽火地带全枪械射速、秒伤数据一览，含详细TTK计算。",
    content: `<h2>烽火地带枪械数据整理</h2>
<p>《三角洲行动》烽火地带模式下拥有很多种枪械，本文整理了各枪械的射速、秒伤等关键数据。</p>
<h3>数据说明</h3>
<p>本表充分考量了游戏内的全部子弹数据，并分类写明。函数大体如下，手打区分各个弹种，必须打完整个甲且不考虑溢出问题，实战TTK只低不高。</p>
<p>本表不考量诸如打手等受击部位差异，如有需求参考打肉TTK也可。本表难以计算半自动武器（或是数据几乎没有意义），故大部分手枪、喷、狙都没有涉及。</p>
<h3>关键发现</h3>
<ul><li>高射速武器在近距离有明显优势</li><li>穿甲弹对高等级护甲效果显著</li><li>不同距离下武器表现差异很大</li></ul>`
  },
  {
    id: "art-004",
    title: "药品系统介绍",
    category: "beginner",
    categoryName: "新手指南",
    subCategory: "系统介绍",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-1822185.html",
    author: "苏苏苏良人",
    date: "2024-09-26",
    tags: ["药品", "治疗", "系统", "新手"],
    summary: "详细介绍游戏中的药品系统，包括各种异常状态的处理方法。",
    content: `<h2>药品系统介绍</h2>
<p>《三角洲行动》中的药品系统可以让玩家在出现各种异常状态时使用药品进行恢复。</p>
<h3>受击部位</h3>
<p>需要重点关注头、胸、腹、左右臂及左右腿7个部位。不同部位受伤会产生不同的异常状态。</p>
<h3>异常状态处理</h3>
<ul><li><strong>流血状态</strong>：视线模糊并持续扣除健康值，需使用止血带或手术包修复伤口</li>
<li><strong>手臂骨折</strong>：无法稳定控制武器后坐力，需使用手术包修复</li>
<li><strong>腿部骨折</strong>：移动速度大幅降低，需尽快使用手术包</li></ul>
<h3>增强药剂</h3>
<ul><li><strong>去甲肾上腺素</strong>：提高奔跑持续力</li>
<li><strong>肌肉强化针</strong>：提升负重赶路效率</li></ul>
<h3>蜂医的激素枪</h3>
<p>在极端情况下，蜂医的激素枪也能起到一定的异常屏蔽效果，但无法治愈伤害。</p>`
  },
  {
    id: "art-005",
    title: "跑刀经验及重要点位分享",
    category: "advanced",
    categoryName: "进阶技巧",
    subCategory: "跑刀攻略",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-1821993.html",
    author: "高堂在",
    date: "2024-09-26",
    tags: ["跑刀", "赚钱", "点位", "进阶"],
    summary: "跑刀玩法详细经验分享，包含各地图重要物资点位和路线规划。",
    content: `<h2>跑刀经验及重要点位分享</h2>
<p>跑刀在开服是挣钱行之有效的方法，尤其是在大家都不起好装备的时候，跑刀收益在十分钟15到20万为佳。</p>
<h3>军营复活路线</h3>
<p>军营左右两边的管道里都会刷人，有时会遇到两队。一楼正入口会刷一个盾兵（必刷），推荐选择医生干员，直接扔烟进点。二楼钥匙必买，会刷CPU等小金。</p>
<h3>水泥厂路线</h3>
<p>从水泥厂右下方踹门进去开钥匙房，然后往左边公寓跑，摸一楼航天箱。宿舍楼上面的屋子会刷天线等小金。</p>
<h3>主楼附近路线（重点）</h3>
<p>不要直接冲二楼保险！直接去摸一楼，路上摸井盖。千万不要摸主楼右边车库（滑索可能来人）。去完一楼后破门去对面，把电脑跟医务室开了。一楼这几个点完全没人摸，电脑爆率很高，经常出CPU。</p>
<h3>游客中心路线</h3>
<p>买上游客中心两张卡，直接进去开。游客中心的卡必定回本，曾一张卡开出过两个红。</p>`
  },
  {
    id: "art-006",
    title: "密码门破解方法 密码门怎么破解",
    category: "beginner",
    categoryName: "新手指南",
    subCategory: "机制教学",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-1822021.html",
    author: "苏苏苏良人",
    date: "2024-09-26",
    tags: ["密码门", "破解", "摩斯密码", "机制"],
    summary: "详细讲解游戏中各类密码门的破解方法，包括摩斯密码解读。",
    content: `<h2>密码门破解方法</h2>
<p>《三角洲行动》中密码门有多种类型，本文详细介绍各类密码门的破解方法。</p>
<h3>电脑型密码门</h3>
<p>对照密码表进行破译。摩斯密码由"·"和"-"组成，5个符号组成一组密码。点代表数字（点在前），杠代表0（从6开始杠在前）。前面一杠后面4个点就是6，前面每多一杠就往上加，5个杠就是0。</p>
<h3>滴滴声密码门</h3>
<p>周围没有提示，只有门锁中的滴滴声。滴滴声有快有慢，快的代表"·"，慢的代表"-"。需要将摩斯密码背下来才能快速破解。</p>
<h3>零号大坝D4密码房</h3>
<p>只有墙上的一个模式密码符号。使用威龙、粘性炸弹都打不开，至今没有人能打开。</p>`
  },
  {
    id: "art-007",
    title: "全面战场各兵种武器推荐",
    category: "weapons",
    categoryName: "武器攻略",
    subCategory: "全面战场",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-1822613.html",
    author: "又临一年笗",
    date: "2024-09-27",
    tags: ["全面战场", "兵种", "武器推荐"],
    summary: "全面战场模式中各兵种最适合的武器选择推荐。",
    content: `<h2>全面战场各兵种武器推荐</h2>
<p>在全面战场中，不同兵种适合使用不同的武器。本文为大家带来各兵种武器推荐。</p>
<h3>突击兵</h3>
<p>推荐使用M4A1或AK-47等突击步枪，兼顾中近距离作战。配件选择以提升稳定性和精度为主。</p>
<h3>支援兵</h3>
<p>推荐使用M249轻机枪，提供持续火力压制。配合两脚架在中远距离有很好的表现。</p>
<h3>侦察兵</h3>
<p>推荐使用AWM或M24狙击枪，利用高倍镜在远距离提供情报和火力支援。</p>
<h3>医疗兵</h3>
<p>推荐使用MP5或P90冲锋枪，轻便灵活，方便在治疗队友的同时进行自卫。</p>`
  },
  {
    id: "art-008",
    title: "全面战场热门武器改枪教学",
    category: "weapons",
    categoryName: "武器攻略",
    subCategory: "改枪教学",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-1823302.html",
    author: "Kisflow",
    date: "2024-09-28",
    tags: ["改枪", "配件", "全面战场", "教学"],
    summary: "全面战场热门武器的改装方案，发挥武器最大威力。",
    content: `<h2>全面战场热门武器改枪教学</h2>
<p>《三角洲行动》中武器需要经过改装才能发挥最大威力。本文为大家带来全面战场热门武器改枪教学。</p>
<h3>改枪原则</h3>
<ul><li>根据作战距离选择合适倍镜</li><li>后坐力控制优先于其他属性</li><li>消音器适合侧翼渗透玩法</li><li>补偿器适合正面刚枪玩法</li></ul>
<h3>M4A1推荐改装</h3>
<p>枪口：补偿器 | 枪管：长枪管 | 瞄具：红点/全息 | 握把：垂直握把 | 枪托：战术枪托</p>
<h3>AK-47推荐改装</h3>
<p>枪口：制退器 | 枪管：重型枪管 | 瞄具：ACOG 4x | 握把：三角握把 | 枪托：精密枪托</p>`
  },
  {
    id: "art-009",
    title: "全面战场攀升A点进攻指南",
    category: "advanced",
    categoryName: "进阶技巧",
    subCategory: "地图攻略",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-1823373.html",
    author: "八宝粥特勤处",
    date: "2024-09-29",
    tags: ["攀升", "A点", "进攻", "全面战场"],
    summary: "攀升地图A点进攻战术详解，包含实用点位和路线分析。",
    content: `<h2>全面战场攀升A点进攻指南</h2>
<p>攀升这张地图的A点进攻是一场抢滩登陆作战，进攻方需要先在海滩站稳脚跟，然后才能想办法占领A点。</p>
<h3>地形战术分析</h3>
<p>A点位于山谷中间的三岔路口，属于无遮无拦的小空地。进攻方首先要拿下A点两侧的高地，尤其是左侧高地。只有开场先从A点左侧山坡登录，进攻方才会获得坦克的使用权。</p>
<h3>三条进攻路线</h3>
<ul><li><strong>上路</strong>：掩护己方坦克，配合队友抢下A点左侧山头</li>
<li><strong>中路</strong>：直接从正面上A点占领</li>
<li><strong>右路</strong>：清理地图边缘狙击手，寻找机会绕后骚扰</li></ul>
<h3>实用点位</h3>
<p>坦克出生点山坡下的小石头可以架枪观察对面石头后方。对面的石头对攻守双方都至关重要，恰好处于A点山头的侧后方，控制后可以疯狂偷山头背后。</p>`
  },
  {
    id: "art-010",
    title: "长弓溪谷路线规划 长弓溪谷怎么玩",
    category: "maps",
    categoryName: "地图攻略",
    subCategory: "路线规划",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-1821797.html",
    author: "官方",
    date: "2024-09-26",
    tags: ["长弓溪谷", "路线", "地图", "规划"],
    summary: "长弓溪谷完整路线规划，包含索降点、资源点和撤离点分析。",
    content: `<h2>长弓溪谷路线规划</h2>
<p>长弓溪谷整体上高下低，被一条河流分为上下两个部分。核心资源点在上半区的哈夫克雷达站和下半区的钻石皇后酒店。</p>
<h3>索降点分布</h3>
<p>全图共有22个索降点，左右两侧各均匀分布11个。常规行动下固定撤离点左右两侧各有两个，机密行动时两侧固定撤离点减少至1个。</p>
<h3>上半区重要资源区</h3>
<ul><li>哈夫克雷达站（最高价值）</li><li>超星车站（拉闸开启列车车厢有保险柜）</li><li>变电站</li></ul>
<h3>下半区重要资源区</h3>
<ul><li>钻石皇后酒店（结构复杂紧凑，速战速决）</li><li>坠机之地</li><li>阿米亚小镇（交通要镇，交战频繁）</li><li>蓝港码头</li></ul>
<h3>战术建议</h3>
<p>酒店搜刮要秉承速战速决原则。由于酒店地理位置靠下，全地图干员撤离时都可能顺路来逛，螳螂捕蝉黄雀在后的剧情时有上演。</p>`
  },
  {
    id: "art-011",
    title: "航天基地大金点位分享",
    category: "maps",
    categoryName: "地图攻略",
    subCategory: "物资点位",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-1822263.html",
    author: "五官贼正",
    date: "2024-09-26",
    tags: ["航天基地", "大金", "点位", "物资"],
    summary: "航天基地地图所有大金刷新点位详细标注。",
    content: `<h2>航天基地大金点位分享</h2>
<p>航天基地这张地图中有很多大金点位，如果不知道就非常容易错过。</p>
<h3>组装室轨道</h3>
<p>黄色轨道处可刷【火箭燃料】。</p>
<h3>浮力室医务间</h3>
<p>进门右边角落可刷【卫星天线】。</p>
<h3>黑室小保险旁航空箱</h3>
<p>搜索航空储物箱可出【曼德尔超算单元】。</p>
<h3>总裁室保险箱</h3>
<p>保险箱可出【军用雷达】。</p>
<h3>其他重要点位</h3>
<ul><li>三仓外武器箱：军用炮弹</li><li>飞升者火箭仓：军用望远镜、实验数据、笔记本电脑</li><li>组装室2楼白衣服：实验数据、纯净打火机</li><li>黑室二楼机箱：显卡</li><li>蓝室梯子下保险箱：滑膛枪</li><li>中控三楼钥匙房旁衣服：军用终端</li><li>中控二楼保险箱：怀表</li></ul>`
  },
  {
    id: "art-012",
    title: "基础玩法讲解",
    category: "beginner",
    categoryName: "新手指南",
    subCategory: "玩法介绍",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-1780981.html",
    author: "战术级子轩",
    date: "2024-06-30",
    tags: ["基础", "玩法", "入门", "讲解"],
    summary: "三角洲行动基础玩法全面讲解，适合新玩家入门。",
    content: `<h2>基础玩法讲解</h2>
<p>《三角洲行动》是一款多人PVP射击类游戏，包含多种游戏模式。本文为大家带来基础玩法讲解。</p>
<h3>游戏模式</h3>
<ul><li><strong>危险行动</strong>：生存撤离模式，3人小队争夺曼德尔砖并安全撤离</li>
<li><strong>全面战场</strong>：大规模攻防战，海陆空全栖作战</li>
<li><strong>黑鹰坠落</strong>：战役模式，还原经典电影场景</li></ul>
<h3>基础操作</h3>
<p>熟悉移动、瞄准、射击、换弹等基础操作是入门的第一步。建议先在训练场熟悉各种武器的后坐力模式。</p>`
  },
  {
    id: "art-013",
    title: "模式及玩法介绍",
    category: "beginner",
    categoryName: "新手指南",
    subCategory: "玩法介绍",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-1781002.html",
    author: "互联网",
    date: "2024-06-30",
    tags: ["模式", "玩法", "介绍"],
    summary: "三角洲行动三大核心模式详细介绍。",
    content: `<h2>模式及玩法介绍</h2>
<h3>危险行动</h3>
<p>玩家选择四大经典兵种组成3人小队，争夺并破译高价值物资——曼德尔砖。破译成功有机会获得稀有物品。携带曼德尔砖时会向所有小队暴露位置。和队友活着到达撤离点即可获得所有物资。</p>
<h3>全面战场</h3>
<p>复刻经典地图，驾驶突击艇、主战坦克、直升机、装甲车等近10款载具全面作战。第一视角体验瞬息万变的拟真战场，海陆空全栖作战。</p>
<h3>黑鹰坠落-战役</h3>
<p>还原摩加迪沙最经典的城镇、巷战、夜战、坠机之地等。第一人称重新体验影视化三角洲行动全流程。</p>`
  },
  {
    id: "art-014",
    title: "危险行动玩法简介",
    category: "beginner",
    categoryName: "新手指南",
    subCategory: "玩法介绍",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-1781007.html",
    author: "互联网",
    date: "2024-06-30",
    tags: ["危险行动", "玩法", "曼德尔砖"],
    summary: "危险行动模式基础规则和玩法简介。",
    content: `<h2>危险行动玩法简介</h2>
<p>在危险行动模式中，玩家将扮演特战干员，与其他干员组成战术小队，参与特殊行动，完成高难度挑战任务并安全撤离。</p>
<h3>兵种搭配</h3>
<p>可选择四大经典兵种组成3人小队，不同兵种拥有不同的战术道具与装备，提供更多元的战术选择。</p>
<h3>曼德尔砖</h3>
<p>争夺并破译高价值物资——曼德尔砖，破译成功有机会获得稀有物品。携带曼德尔砖时会向所有小队暴露位置。</p>
<h3>安全撤离</h3>
<p>和队友活着到达撤离点即可获得所有物资，多种特殊撤离方式可供探索。</p>`
  },
  {
    id: "art-015",
    title: "全面战场模式玩法介绍",
    category: "beginner",
    categoryName: "新手指南",
    subCategory: "玩法介绍",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-1781012.html",
    author: "互联网",
    date: "2024-06-30",
    tags: ["全面战场", "攻防", "载具"],
    summary: "全面战场模式攻防玩法详解，含载具使用介绍。",
    content: `<h2>全面战场模式玩法介绍</h2>
<p>全面战场采用攻防模式，玩家被分为进攻方和防守方，每个阵营的获胜目标不同。</p>
<h3>地图：烬区</h3>
<p>从左下角红圈位置进行进攻，分别进攻郊区村落、场外守军前哨站、城口四合院、主城区工厂和市政大楼。</p>
<h3>载具系统</h3>
<p>进攻方拥有一辆坦克，火力凶猛，一发就能将敌人打成大残。防守方有一辆作战战车，虽然打不过坦克，但可以快速清理对方兵力。</p>
<h3>兵种选择</h3>
<p>战斗开始前选择角色，每个角色被分为四个兵种，玩家可自由选择。</p>`
  },
  {
    id: "art-016",
    title: "生存撤离与多维战场玩法介绍",
    category: "beginner",
    categoryName: "新手指南",
    subCategory: "玩法介绍",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-1781014.html",
    author: "互联网",
    date: "2024-06-30",
    tags: ["生存撤离", "多维战场", "玩法"],
    summary: "生存撤离与多维战场两大核心玩法深度介绍。",
    content: `<h2>生存撤离与多维战场玩法介绍</h2>
<h3>生存撤离模式"危险行动"</h3>
<ul><li><strong>高风险高回报</strong>：大大增强游戏的紧张感和刺激感</li>
<li><strong>多样化战术选择</strong>：丰富的武器装备和战术道具</li>
<li><strong>动态环境与随机事件</strong>：增加挑战性和策略思考空间</li>
<li><strong>强化团队合作</strong>：强调集体智慧和协作重要性</li></ul>
<h3>多维战场模式"全面战场"</h3>
<ul><li><strong>全景式战场设计</strong>：多样地形增加战斗复杂性和策略性</li>
<li><strong>海陆空三栖作战</strong>：灵活调整战术，充分利用各兵种优势</li>
<li><strong>战术指挥与协同</strong>：考验团队沟通和合作能力</li>
<li><strong>动态战场与实时变化</strong>：增强真实感和代入感</li></ul>`
  },
  {
    id: "art-017",
    title: "特勤处玩法介绍",
    category: "beginner",
    categoryName: "新手指南",
    subCategory: "系统介绍",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-1788794.html",
    author: "互联网",
    date: "2024-07-17",
    tags: ["特勤处", "系统", "制造", "升级"],
    summary: "特勤处五大部门功能介绍，含制造和升级系统说明。",
    content: `<h2>特勤处玩法介绍</h2>
<p>特勤处有医疗、战术、后勤、战斗和研发五个部门。</p>
<h3>部门功能</h3>
<ul><li><strong>医疗部门</strong>：制药台可进行医疗物资生产</li>
<li><strong>战术部门</strong>：提升战术相关能力</li>
<li><strong>后勤部门</strong>：提升后勤保障能力</li>
<li><strong>战斗部门</strong>：提升体力上限和恢复速度，升级靶场提升负重上限</li>
<li><strong>研发部门</strong>：解锁新的制造配方</li></ul>
<h3>升级系统</h3>
<p>玩家达到指定等级后，可消耗对应物资来解锁或升级部门功能。在已解锁的制造部门中可生产对应物品资源。</p>`
  },
  {
    id: "art-018",
    title: "玩法模式、干员实机体验介绍",
    category: "beginner",
    categoryName: "新手指南",
    subCategory: "玩法介绍",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-1778624.html",
    author: "庄不纯",
    date: "2024-06-24",
    tags: ["玩法", "干员", "体验", "试玩"],
    summary: "线下试玩体验分享，包含玩法模式和干员实机表现。",
    content: `<h2>玩法模式、干员实机体验介绍</h2>
<p>《三角洲行动》是一款出色的FPS游戏，虽然还没公测，但一些玩家已经参与过线下的试玩体验。</p>
<h3>游戏品质</h3>
<p>游戏画面表现出色，枪械手感扎实，干员技能设计独特。整体游戏体验流畅，值得期待。</p>
<h3>干员体验</h3>
<p>各干员技能差异化明显，突击型干员机动性强，支援型干员能为团队提供持续增益。选择合适的干员对团队配合至关重要。</p>`
  },
  {
    id: "art-019",
    title: "测试资格获取方法",
    category: "beginner",
    categoryName: "新手指南",
    subCategory: "入门指南",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-1778667.html",
    author: "互联网",
    date: "2024-06-24",
    tags: ["测试", "资格", "申请", "下载"],
    summary: "双子测试资格申请方法和查询方式。",
    content: `<h2>测试资格获取方法</h2>
<h3>申请方法</h3>
<p>通过官方网址（df.qq.com）进行申请，直接点击预约即可。官网查询资格如显示已获得资格，请点击下载游戏。</p>
<h3>资格查询方式</h3>
<ul><li><strong>官网查询</strong>：进入官网，登录报名使用的QQ账号，点击测试资格查询</li>
<li><strong>短信通知</strong>：收到测试资格短信即为开通资格（可能被系统屏蔽，请检查垃圾箱）</li></ul>
<p>手机短信仅做通知，请以游戏官网最终显示结果为准。</p>`
  },
  {
    id: "art-020",
    title: "威龙与95步枪实战教学",
    category: "operators",
    categoryName: "干员攻略",
    subCategory: "威龙",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-1779037.html",
    author: "Always聪聪",
    date: "2024-06-25",
    tags: ["威龙", "95步枪", "实战", "教学"],
    summary: "威龙干员搭配95式步枪的实战技巧教学。",
    content: `<h2>威龙与95步枪实战教学</h2>
<p>威龙是游戏中的突击型干员，有较高的机动性，并且拥有两种进攻型道具。</p>
<h3>威龙技能特点</h3>
<ul><li><strong>动力外骨骼</strong>：激活后加快冲刺速度，击倒敌人恢复生命值</li>
<li><strong>三联装手炮</strong>：发射爆炸榴弹，命中载具可吸附</li>
<li><strong>突破型烟雾弹</strong>：快速消散的烟雾弹</li>
<li><strong>战术滑铲</strong>：利用外骨骼进行快速战术滑铲</li></ul>
<h3>95步枪搭配</h3>
<p>95式步枪作为国产武器，在游戏中表现均衡。搭配威龙的高机动性，可以打出灵活的突击战术。建议中近距离作战，利用滑铲快速接近敌人。</p>`
  },
  {
    id: "art-021",
    title: "三指键位使用教学",
    category: "beginner",
    categoryName: "新手指南",
    subCategory: "操作设置",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-1822273.html",
    author: "可一",
    date: "2024-09-26",
    tags: ["键位", "三指", "操作", "设置"],
    summary: "移动端三指键位设置和使用教学，提升操作效率。",
    content: `<h2>三指键位使用教学</h2>
<p>《三角洲行动》玩家能够自己修改键位来适应习惯。三指操作是移动端提升操作上限的重要技巧。</p>
<h3>三指操作优势</h3>
<ul><li>同时控制移动、瞄准和射击</li><li>更快的反应速度</li><li>更精准的瞄准控制</li></ul>
<h3>推荐键位布局</h3>
<p>左手拇指控制移动，左手食指控制射击键（放在左上角），右手拇指控制视角瞄准。这种布局可以让你在移动的同时进行瞄准和射击。</p>`
  },
  {
    id: "art-022",
    title: "零号大坝工地密码破解方法",
    category: "maps",
    categoryName: "地图攻略",
    subCategory: "密码破解",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-1822746.html",
    author: "五官贼正",
    date: "2024-09-27",
    tags: ["零号大坝", "工地", "密码", "破解"],
    summary: "零号大坝工地密码门四位数字破解全流程。",
    content: `<h2>零号大坝工地密码破解方法</h2>
<p>每局密码都会变，通过门上的符号来解出密码。</p>
<h3>第一位数字</h3>
<p>进入地窖后在密码门旁可以看到摩斯密码，翻译后得到第一位数字。</p>
<h3>第二位数字</h3>
<p>从地窖出来后向后走，进门右拐一直向前，从左边的楼梯上去，在对面柱子上可以看到第二个数字。</p>
<h3>第三位数字</h3>
<p>从右边大门右转再左转，一直走再左转跳下去进门，在小通道的房顶墙角可以看到第三位数字。</p>
<h3>第四位数字</h3>
<p>继续向前走在出口看到一个吊机，在其上面可以看到第四位数字。</p>`
  },
  {
    id: "art-023",
    title: "S7赛季武器强度排行榜 S7赛季武器推荐",
    category: "weapons",
    categoryName: "武器攻略",
    subCategory: "强度排行",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051346.html",
    author: "Always聪聪",
    date: "2025-11-27",
    tags: ["S7", "武器", "排行", "强度", "赛季"],
    summary: "S7赛季全武器强度排行榜，含S+到C级详细分级。",
    content: `<h2>S7赛季武器强度排行榜</h2>
<p>S7赛季对部分武器进行了调整，武器强度发生了改变。</p>
<h3>S+级</h3>
<p>堤风M7（上）、M14、ASVAL、SR25（中）、PKM（下）</p>
<h3>S级</h3>
<p>MP7月影、SR3M、MK47短管（上）| 腾龙高导、K416、M250（中）| ASH12、K437、MK47长管、M7、P90、维克托、MP7、ASVAL刺客、MK4三连发（下）</p>
<h3>A+级</h3>
<p>腾龙无导、KC17、杠杆步枪蜂鸟、PSG1（上）| AUG、AKM、M4A1、AKM急停、M4A1急停、M7短管、MK4全自动、牛排ASH12（中）| M249、QJB201无导、QJB201高导、AK12（下）</p>
<h3>A级及以下</h3>
<p>A级：SCA、QJB201低导、腾龙稳固 | B+：SMG45、勇士、MP5、95、G3、MINI14 | C-B级：UZI、PTR32、CAR15、M16A4、AK74U、SG552、野牛</p>`
  },
  {
    id: "art-024",
    title: "干员图鉴 干员定位及技能介绍",
    category: "operators",
    categoryName: "干员攻略",
    subCategory: "干员图鉴",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-1821669.html",
    author: "官方",
    date: "2024-09-25",
    tags: ["干员", "图鉴", "技能", "定位"],
    summary: "全部7位干员的定位、技能和角色介绍。",
    content: `<h2>干员图鉴</h2>
<p>《三角洲行动》现阶段共有7个干员，每个干员都有不同的定位与技能。</p>
<h3>红狼（凯·席尔瓦）- 突击</h3>
<p>定位：突击兵有更强的战斗能力，举镜瞄准状态下拥有更快的移动速度。</p>
<p>技能：动力外骨骼（超载加速+击杀回血）、三联装手炮（爆炸榴弹）、突破型烟雾弹、战术滑铲。</p>
<h3>牧羊人 - 支援</h3>
<p>为团队提供火力支援和压制，拥有强大的持续作战能力。</p>
<h3>露娜 - 侦察</h3>
<p>擅长情报收集和远程狙击，为团队提供战场视野。</p>
<h3>蜂医 - 医疗</h3>
<p>团队治疗核心，激素枪可治疗队友并屏蔽异常状态。</p>
<h3>威龙 - 突击</h3>
<p>高机动性突击干员，外骨骼提供超强机动能力。</p>
<h3>骇爪 - 侦察</h3>
<p>电子战专家，可干扰敌方设备和获取情报。</p>
<h3>乌鲁鲁 - 支援</h3>
<p>火力支援专家，提供重型火力掩护。</p>`
  },
  {
    id: "art-025",
    title: "S7赛季特勤处制造任务攻略",
    category: "advanced",
    categoryName: "进阶技巧",
    subCategory: "赛季攻略",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051748.html",
    author: "游民星空",
    date: "2025-12-01",
    tags: ["S7", "特勤处", "制造", "任务"],
    summary: "S7赛季特勤处制造任务完整攻略。",
    content: `<h2>S7赛季特勤处制造任务攻略</h2>
<p>S7赛季特勤处制造任务更新，本文为大家带来完整攻略。</p>
<h3>任务概述</h3>
<p>特勤处制造任务是赛季核心玩法之一，通过完成制造任务可以获得稀有装备和材料。</p>
<h3>关键任务</h3>
<ul><li>优先升级医疗部门，解锁高级药品制造</li><li>战斗部门升级可提升负重上限</li><li>研发部门解锁新配方后优先制造高价值物品</li></ul>`
  },
  {
    id: "art-026",
    title: "腰射冲锋枪选择推荐",
    category: "weapons",
    categoryName: "武器攻略",
    subCategory: "武器推荐",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051741.html",
    author: "游民星空",
    date: "2025-11-30",
    tags: ["腰射", "冲锋枪", "推荐"],
    summary: "适合腰射玩法的冲锋枪推荐和配装方案。",
    content: `<h2>腰射冲锋枪选择推荐</h2>
<p>腰射是近战中非常重要的技巧，选择合适的冲锋枪可以大幅提升腰射效果。</p>
<h3>推荐武器</h3>
<ul><li><strong>P90</strong>：50发大弹容，腰射精度高，容错率极高</li>
<li><strong>Vector</strong>：极高射速，近战腰射TTK最短</li>
<li><strong>MP5</strong>：均衡之选，后坐力低，腰射稳定</li></ul>
<h3>配件推荐</h3>
<p>激光瞄准器是腰射必备配件，可大幅提升腰射精度。搭配补偿器减少后坐力。</p>`
  },
  {
    id: "art-027",
    title: "蜂医快速上手教学",
    category: "operators",
    categoryName: "干员攻略",
    subCategory: "蜂医",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051714.html",
    author: "游民星空",
    date: "2025-11-29",
    tags: ["蜂医", "医疗", "教学", "上手"],
    summary: "蜂医干员快速上手教学，含技能使用技巧。",
    content: `<h2>蜂医快速上手教学</h2>
<p>蜂医是团队中不可或缺的医疗干员，掌握蜂医的技巧可以大幅提升团队生存率。</p>
<h3>技能使用技巧</h3>
<ul><li><strong>激素枪</strong>：优先治疗血量最低的队友，可在移动中使用</li>
<li><strong>医疗包</strong>：放置在掩体后方，方便队友自行取用</li>
<li><strong>被动技能</strong>：附近队友受伤时会获得提示，及时响应</li></ul>
<h3>定位建议</h3>
<p>蜂医应保持在队伍中后方位置，避免第一时间与敌人交火。优先保证自身存活，才能持续为团队提供治疗。</p>`
  },
  {
    id: "art-028",
    title: "零号大坝逆战未来光碟点位",
    category: "maps",
    categoryName: "地图攻略",
    subCategory: "物资点位",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051697.html",
    author: "游民星空",
    date: "2025-11-28",
    tags: ["零号大坝", "光碟", "点位", "逆战未来"],
    summary: "零号大坝逆战未来光碟全部刷新点位。",
    content: `<h2>零号大坝逆战未来光碟点位</h2>
<p>逆战未来光碟是零号大坝地图中的重要收集品，本文标注了所有刷新点位。</p>
<h3>主要刷新区域</h3>
<ul><li>行政楼一楼办公室桌面</li><li>工地集装箱区域</li><li>水泥厂二楼控制室</li><li>变电站机房</li></ul>
<h3>搜刮建议</h3>
<p>光碟刷新位置固定但每局随机出现，建议规划一条能覆盖多个刷新点的路线，提高收集效率。</p>`
  },
  {
    id: "art-029",
    title: "露娜实战玩法讲解",
    category: "operators",
    categoryName: "干员攻略",
    subCategory: "露娜",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051653.html",
    author: "游民星空",
    date: "2025-11-27",
    tags: ["露娜", "侦察", "实战", "玩法"],
    summary: "露娜干员实战技巧和定位讲解。",
    content: `<h2>露娜实战玩法讲解</h2>
<p>露娜是侦察型干员，擅长情报收集和远程狙击。</p>
<h3>技能运用</h3>
<ul><li><strong>侦察无人机</strong>：用于探测前方区域敌人位置，为团队提供情报</li>
<li><strong>标记技能</strong>：标记敌人后可让全队看到目标位置</li></ul>
<h3>定位建议</h3>
<p>露娜适合在高点或侧翼位置活动，利用侦察技能为团队提供战场信息。狙击能力出色，可以在远距离为团队提供火力支援。</p>`
  },
  {
    id: "art-030",
    title: "绝密巴克什跑刀思路",
    category: "advanced",
    categoryName: "进阶技巧",
    subCategory: "跑刀攻略",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051642.html",
    author: "游民星空",
    date: "2025-11-26",
    tags: ["巴克什", "跑刀", "绝密", "路线"],
    summary: "绝密巴克什地图跑刀路线和物资点位规划。",
    content: `<h2>绝密巴克什跑刀思路</h2>
<p>绝密巴克什是高风险高回报的地图，跑刀需要更加谨慎的路线规划。</p>
<h3>路线规划</h3>
<ul><li>优先选择边缘路线，避开中心交战区</li><li>利用地形高低差规避敌人视线</li><li>熟悉所有彩蛋点位置，最大化收益</li></ul>
<h3>关键点位</h3>
<p>绝密巴克什的物资更加丰富，但敌人装备也更好。建议优先搜索外围物资点，确认安全后再进入核心区域。</p>`
  },
  {
    id: "art-031",
    title: "S7赛季大坝渡鸦之眼搜刮点位",
    category: "maps",
    categoryName: "地图攻略",
    subCategory: "物资点位",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051630.html",
    author: "游民星空",
    date: "2025-11-25",
    tags: ["S7", "大坝", "渡鸦之眼", "搜刮"],
    summary: "S7赛季大坝渡鸦之眼任务物品搜刮点位。",
    content: `<h2>S7赛季大坝渡鸦之眼搜刮点位</h2>
<p>S7赛季新增渡鸦之眼任务，需要在地图中收集特定物品。</p>
<h3>刷新点位</h3>
<ul><li>行政楼档案室</li><li>工地临时办公室</li><li>水泥厂仓库</li><li>变电站控制室</li></ul>
<h3>搜刮技巧</h3>
<p>渡鸦之眼物品每局随机刷新在以上点位之一，建议按顺序逐一排查。使用侦察干员可以更快定位。</p>`
  },
  {
    id: "art-032",
    title: "S7赛季SCAR-H改枪推荐",
    category: "weapons",
    categoryName: "武器攻略",
    subCategory: "改枪教学",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051620.html",
    author: "游民星空",
    date: "2025-11-24",
    tags: ["SCAR-H", "改枪", "S7", "配件"],
    summary: "S7赛季SCAR-H战斗步枪最佳改装方案。",
    content: `<h2>S7赛季SCAR-H改枪推荐</h2>
<p>SCAR-H是S7赛季表现突出的战斗步枪，本文推荐最佳改装方案。</p>
<h3>中距离精确射手配置</h3>
<p>枪口：补偿器 | 枪管：长枪管 | 瞄具：ACOG 4x | 握把：两脚架 | 枪托：精密枪托</p>
<h3>近战重火力配置</h3>
<p>枪口：消焰器 | 激光：战术激光 | 瞄具：红点 | 握把：垂直握把 | 枪托：战术枪托</p>
<h3>使用建议</h3>
<p>SCAR-H伤害高但射速慢，需要精确瞄准。中距离表现极为出色，推荐搭配ACOG进行中远距离精确射击。</p>`
  },
  {
    id: "art-033",
    title: "麦晓雯技能解析与实战教学",
    category: "operators",
    categoryName: "干员攻略",
    subCategory: "麦晓雯",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051609.html",
    author: "游民星空",
    date: "2025-11-23",
    tags: ["麦晓雯", "技能", "实战", "教学"],
    summary: "新干员麦晓雯技能深度解析和实战运用。",
    content: `<h2>麦晓雯技能解析与实战教学</h2>
<p>麦晓雯是游戏中新加入的干员，拥有独特的技能组合。</p>
<h3>技能解析</h3>
<ul><li><strong>主动技能</strong>：电子干扰，可暂时禁用范围内敌方设备</li><li><strong>被动技能</strong>：设备探测，靠近敌方设备时获得提示</li><li><strong>战术道具</strong>：EMP手雷，范围性电子干扰</li></ul>
<h3>实战运用</h3>
<p>麦晓雯在对抗依赖设备的敌人时极为有效。在攻点前使用EMP手雷可以清除敌方陷阱和侦察设备，为团队创造进攻窗口。</p>`
  },
  {
    id: "art-034",
    title: "S7赛季任务所需材料一览",
    category: "advanced",
    categoryName: "进阶技巧",
    subCategory: "赛季攻略",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051607.html",
    author: "游民星空",
    date: "2025-11-22",
    tags: ["S7", "任务", "材料", "赛季"],
    summary: "S7赛季3x3任务所需全部材料清单。",
    content: `<h2>S7赛季任务所需材料一览</h2>
<p>S7赛季3x3任务系统需要收集大量材料，本文整理了全部所需材料清单。</p>
<h3>常用材料</h3>
<ul><li>电子元件：多个任务需要，建议优先收集</li><li>武器零件：改枪和制造任务必备</li><li>医疗物资：医疗部门升级和制造需要</li></ul>
<h3>稀有材料</h3>
<ul><li>超感脑机：特定任务需求，刷新率低</li><li>实验数据：航天基地专属掉落</li><li>军用终端：中控三楼钥匙房旁刷新</li></ul>`
  },
  {
    id: "art-035",
    title: "长弓溪谷打野跑刀路线规划",
    category: "advanced",
    categoryName: "进阶技巧",
    subCategory: "跑刀攻略",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051767.html",
    author: "游民星空",
    date: "2025-12-02",
    tags: ["长弓溪谷", "跑刀", "打野", "路线"],
    summary: "长弓溪谷打野跑刀最优路线规划。",
    content: `<h2>长弓溪谷打野跑刀路线规划</h2>
<p>长弓溪谷地图面积大，打野跑刀需要合理规划路线以最大化收益。</p>
<h3>推荐路线</h3>
<ul><li><strong>北线</strong>：超星车站→哈夫克雷达站外围→变电站</li><li><strong>南线</strong>：蓝港码头→阿米亚小镇→坠机之地</li></ul>
<h3>注意事项</h3>
<p>长弓溪谷中央河流是天然分界线，过河时注意观察对岸。酒店区域交战频繁，跑刀建议避开。</p>`
  },
  {
    id: "art-036",
    title: "堵桥教学",
    category: "advanced",
    categoryName: "进阶技巧",
    subCategory: "战术技巧",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051569.html",
    author: "游民星空",
    date: "2025-11-21",
    tags: ["堵桥", "战术", "伏击", "教学"],
    summary: "堵桥战术详细教学，含最佳堵桥点位和时机选择。",
    content: `<h2>堵桥教学</h2>
<p>堵桥是三角洲行动中经典的伏击战术，掌握堵桥技巧可以轻松获取敌人装备。</p>
<h3>最佳堵桥点位</h3>
<ul><li>桥头两侧的掩体后方</li><li>桥下河道两侧的灌木丛</li><li>桥附近的高点建筑</li></ul>
<h3>时机选择</h3>
<p>最佳堵桥时机是游戏中期，当其他队伍完成搜刮准备撤离时。注意观察撤离点位置，预判敌人必经路线。</p>
<h3>装备推荐</h3>
<p>推荐使用狙击枪或轻机枪，配合地雷或C4封锁桥面。消音器可以避免暴露位置。</p>`
  },
  {
    id: "art-037",
    title: "航天基地密码门",
    category: "maps",
    categoryName: "地图攻略",
    subCategory: "密码破解",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-1822077.html",
    author: "游民星空",
    date: "2024-09-26",
    tags: ["航天基地", "密码门", "破解"],
    summary: "航天基地地图所有密码门位置和破解方法。",
    content: `<h2>航天基地密码门</h2>
<p>航天基地地图中有多个密码门，本文整理了所有密码门的位置和破解方法。</p>
<h3>主要密码门</h3>
<ul><li>黑室密码门：需要找到散布在地图中的密码片段</li><li>蓝室密码门：密码在附近电脑终端上</li><li>总裁室密码门：需要钥匙卡+密码双重验证</li></ul>
<h3>破解技巧</h3>
<p>密码每局随机生成，注意观察周围环境中的数字提示。部分密码门需要先获取钥匙卡才能互动。</p>`
  },
  {
    id: "art-038",
    title: "大坝协议箱位置",
    category: "maps",
    categoryName: "地图攻略",
    subCategory: "物资点位",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-1822733.html",
    author: "游民星空",
    date: "2024-09-27",
    tags: ["大坝", "协议箱", "位置"],
    summary: "零号大坝所有协议箱刷新位置一览。",
    content: `<h2>大坝协议箱位置</h2>
<p>协议箱是零号大坝中的重要物资容器，本文整理了所有刷新位置。</p>
<h3>协议箱位置</h3>
<ul><li>行政楼二楼办公室</li><li>工地临时仓库</li><li>水泥厂控制室</li><li>变电站机房</li><li>游客中心前台</li></ul>
<h3>开启建议</h3>
<p>协议箱需要协议钥匙开启，钥匙可在同地图其他点位找到。建议先收集钥匙再前往开箱。</p>`
  },
  {
    id: "art-039",
    title: "键位设置分享",
    category: "beginner",
    categoryName: "新手指南",
    subCategory: "操作设置",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-1822276.html",
    author: "游民星空",
    date: "2024-09-26",
    tags: ["键位", "设置", "操作"],
    summary: "全面战场模式推荐键位设置方案。",
    content: `<h2>键位设置分享</h2>
<p>合理的键位设置可以大幅提升操作效率，本文分享全面战场模式推荐键位。</p>
<h3>PC端推荐设置</h3>
<ul><li>移动：WASD</li><li>瞄准：鼠标右键（保持）</li><li>射击：鼠标左键</li><li>换弹：R</li><li>互动：F</li><li>技能1：Q</li><li>技能2：E</li><li>近战：V</li></ul>`
  },
  {
    id: "art-040",
    title: "黑鹰坠落单人通关流程视频",
    category: "modes",
    categoryName: "模式攻略",
    subCategory: "黑鹰坠落",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-1887794.html",
    author: "游民星空",
    date: "2024-10-15",
    tags: ["黑鹰坠落", "单人", "通关", "流程"],
    summary: "黑鹰坠落战役模式单人通关完整流程。",
    content: `<h2>黑鹰坠落单人通关流程</h2>
<p>黑鹰坠落战役模式还原了经典电影场景，本文带来单人通关完整流程。</p>
<h3>关卡概览</h3>
<ul><li>第一关：城镇巷战 - 穿越摩加迪沙街道</li><li>第二关：坠机之地 - 防守坠毁的黑鹰直升机</li><li>第三关：夜战突围 - 在夜色中突破敌人包围</li></ul>
<h3>通关要点</h3>
<p>注意弹药管理，合理利用掩体。夜战关卡建议使用夜视仪和消音武器。</p>`
  },
  {
    id: "art-041",
    title: "全关卡联机实录",
    category: "modes",
    categoryName: "模式攻略",
    subCategory: "黑鹰坠落",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-1887801.html",
    author: "游民星空",
    date: "2024-10-15",
    tags: ["黑鹰坠落", "联机", "实录"],
    summary: "黑鹰坠落战役模式全关卡联机合作实录。",
    content: `<h2>全关卡联机实录</h2>
<p>黑鹰坠落战役模式支持联机合作，本文带来全关卡联机实录。</p>
<h3>联机优势</h3>
<ul><li>队友可以互相救援，降低失败风险</li><li>分工合作，效率更高</li><li>不同干员技能互补，战术更丰富</li></ul>
<h3>推荐阵容</h3>
<p>建议1突击+1医疗+1支援的组合，突击负责推进，医疗保证续航，支援提供火力掩护。</p>`
  },
  {
    id: "art-042",
    title: "与暗区突围物品价值对比",
    category: "data",
    categoryName: "数据研究",
    subCategory: "对比分析",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-1778653.html",
    author: "Always聪聪",
    date: "2024-06-24",
    tags: ["对比", "暗区突围", "价值"],
    summary: "三角洲行动与暗区突围物品价值对比分析。",
    content: `<h2>与暗区突围物品价值对比</h2>
<p>《三角洲行动》与《暗区突围》都是第一人称射击游戏，本文对比两款游戏中的物品价值差异。</p>
<h3>经济系统对比</h3>
<p>三角洲行动的经济系统更加直观，物品价值波动较小。暗区突围的市场系统更加复杂，物品价格受供需影响更大。</p>
<h3>物品稀有度</h3>
<p>两款游戏都有类似的稀有度分级系统，但三角洲行动的高级物品获取难度相对较低，更适合休闲玩家。</p>`
  },
  {
    id: "art-043",
    title: "最高画质实机体验评测",
    category: "data",
    categoryName: "数据研究",
    subCategory: "评测",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-1778617.html",
    author: "游民星空",
    date: "2024-06-24",
    tags: ["画质", "评测", "体验"],
    summary: "三角洲行动最高画质实机体验评测。",
    content: `<h2>最高画质实机体验评测</h2>
<p>三角洲行动在最高画质下的表现令人惊艳。光影效果出色，枪械模型精细，场景细节丰富。</p>
<h3>画质亮点</h3>
<ul><li>动态光影系统表现出色</li><li>枪械材质和磨损细节逼真</li><li>场景破坏效果增强代入感</li></ul>
<h3>性能建议</h3>
<p>最高画质需要较高配置，建议RTX 3060以上显卡。中低配置可选择中画质，仍能获得良好体验。</p>`
  },
  {
    id: "art-044",
    title: "双子测试全面战场实机演示",
    category: "data",
    categoryName: "数据研究",
    subCategory: "评测",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-1778612.html",
    author: "游民星空",
    date: "2024-06-24",
    tags: ["双子测试", "全面战场", "演示"],
    summary: "双子测试中全面战场模式实机演示。",
    content: `<h2>双子测试全面战场实机演示</h2>
<p>双子测试中全面战场模式展现了大规模战斗的魅力。32人对战、载具作战、海陆空全栖战斗带来震撼体验。</p>
<h3>测试亮点</h3>
<ul><li>大规模战场氛围营造出色</li><li>载具操作手感扎实</li><li>兵种配合战术深度足够</li></ul>`
  },
  {
    id: "art-045",
    title: "双子测试移动端实机演示",
    category: "data",
    categoryName: "数据研究",
    subCategory: "评测",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-1778608.html",
    author: "游民星空",
    date: "2024-06-24",
    tags: ["双子测试", "移动端", "演示"],
    summary: "双子测试移动端实机演示，展示手机端游戏表现。",
    content: `<h2>双子测试移动端实机演示</h2>
<p>双子测试首次开放移动端，手机端游戏表现令人惊喜。</p>
<h3>移动端特点</h3>
<ul><li>画面表现接近PC端中低画质</li><li>触屏操作适配良好</li><li>支持自定义键位布局</li></ul>
<h3>性能表现</h3>
<p>旗舰手机可稳定60帧运行，中端手机建议降低画质设置以保证流畅度。</p>`
  },
  {
    id: "art-046",
    title: "11月26日卡战备装备推荐",
    category: "weapons",
    categoryName: "武器攻略",
    subCategory: "装备推荐",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2050593.html",
    author: "游民星空",
    date: "2025-11-26",
    tags: ["卡战备", "装备", "推荐"],
    summary: "11月26日版本卡战备装备搭配推荐。",
    content: `<h2>11月26日卡战备装备推荐</h2>
<p>卡战备是游戏中重要的装备策略，本文推荐当前版本最佳卡战备方案。</p>
<h3>卡战备原则</h3>
<ul><li>在预算范围内最大化战斗力</li><li>优先投资武器和护甲</li><li>药品和投掷物适量携带</li></ul>
<h3>推荐方案</h3>
<p>中预算方案：M4A1+2级甲+基础药品，适合大多数对局。高预算方案：SCAR-H+3级甲+全套药品，适合高风险地图。</p>`
  },
  {
    id: "art-047",
    title: "1月29日更新公告",
    category: "news",
    categoryName: "更新资讯",
    subCategory: "版本更新",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2083674.html",
    author: "官方",
    date: "2026-01-29",
    tags: ["更新", "公告", "版本"],
    summary: "三角洲行动1月29日版本更新内容公告。",
    content: `<h2>1月29日更新公告</h2>
<p>三角洲行动1月29日版本更新，带来多项内容调整和优化。</p>
<h3>主要更新</h3>
<ul><li>武器平衡性调整</li><li>新赛季内容上线</li><li>BUG修复和性能优化</li></ul>`
  },
  {
    id: "art-048",
    title: "全地图每日密码分享",
    category: "maps",
    categoryName: "地图攻略",
    subCategory: "密码分享",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2072138.html",
    author: "游民星空",
    date: "2026-01-15",
    tags: ["密码", "每日", "地图"],
    summary: "全地图每日密码门密码分享（每日更新）。",
    content: `<h2>全地图每日密码分享</h2>
<p>本文每日更新各地图密码门的最新密码，方便玩家快速破解。</p>
<h3>使用说明</h3>
<p>密码每局随机生成，本文提供的密码仅供参考。实际游戏中请以游戏内提示为准。</p>`
  },
  {
    id: "art-049",
    title: "假账排行榜（每日更新）",
    category: "data",
    categoryName: "数据研究",
    subCategory: "数据统计",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2072114.html",
    author: "游民星空",
    date: "2026-01-15",
    tags: ["假账", "排行", "数据"],
    summary: "三角洲行动假账排行榜每日更新。",
    content: `<h2>假账排行榜（每日更新）</h2>
<p>假账是三角洲行动玩家社区的热门话题，本文每日更新假账排行榜。</p>
<h3>什么是假账</h3>
<p>假账指玩家通过特定方式在游戏中获取不正当收益的行为。排行榜记录了被检测到的假账账号。</p>`
  },
  {
    id: "art-050",
    title: "12月1日各地图密码一览",
    category: "maps",
    categoryName: "地图攻略",
    subCategory: "密码分享",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2052356.html",
    author: "游民星空",
    date: "2025-12-01",
    tags: ["密码", "地图", "12月"],
    summary: "12月1日各地图密码门密码汇总。",
    content: `<h2>12月1日各地图密码一览</h2>
<p>本文汇总了12月1日各地图密码门的参考密码。</p>
<h3>各地图密码</h3>
<ul><li>零号大坝工地：参考密码8510</li><li>航天基地黑室：参考密码4729</li><li>长弓溪谷雷达站：参考密码6138</li></ul>`
  },
  {
    id: "art-051",
    title: "S7阿萨拉通行证奖励一览",
    category: "news",
    categoryName: "更新资讯",
    subCategory: "通行证",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2052298.html",
    author: "游民星空",
    date: "2025-11-30",
    tags: ["S7", "通行证", "奖励", "阿萨拉"],
    summary: "S7赛季阿萨拉通行证全部奖励内容一览。",
    content: `<h2>S7阿萨拉通行证奖励一览</h2>
<p>S7赛季阿萨拉通行证包含丰富的奖励内容。</p>
<h3>免费奖励</h3>
<ul><li>武器皮肤x3</li><li>干员服装x1</li><li>游戏货币若干</li></ul>
<h3>付费奖励</h3>
<ul><li>限定武器皮肤x5</li><li>限定干员皮肤x2</li><li>专属挂饰和贴纸</li><li>额外游戏货币</li></ul>`
  },
  {
    id: "art-052",
    title: "潮汐监狱复活点位及打法分享",
    category: "maps",
    categoryName: "地图攻略",
    subCategory: "战术攻略",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2052295.html",
    author: "游民星空",
    date: "2025-11-30",
    tags: ["潮汐监狱", "复活点", "打法"],
    summary: "潮汐监狱地图复活点位分析和推荐打法。",
    content: `<h2>潮汐监狱复活点位及打法分享</h2>
<p>潮汐监狱是S7赛季新增地图，本文分析各复活点位的优劣和推荐打法。</p>
<h3>复活点位分析</h3>
<ul><li>监狱东侧：靠近行政区域，物资丰富但交战频繁</li><li>监狱西侧：相对安全，适合稳步推进</li><li>监狱南侧：靠近撤离点，适合快速搜刮后撤离</li></ul>`
  },
  {
    id: "art-053",
    title: "神秘脑机使用教程",
    category: "beginner",
    categoryName: "新手指南",
    subCategory: "道具使用",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2052289.html",
    author: "游民星空",
    date: "2025-11-30",
    tags: ["脑机", "教程", "使用"],
    summary: "神秘脑机道具的获取和使用教程。",
    content: `<h2>神秘脑机使用教程</h2>
<p>神秘脑机是游戏中的特殊道具，本文介绍其获取和使用方法。</p>
<h3>获取方式</h3>
<ul><li>航天基地特定点位刷新</li><li>完成特定任务奖励</li><li>市场购买（价格较高）</li></ul>
<h3>使用方法</h3>
<p>在特勤处研发部门使用脑机，可解锁特殊制造配方或获得科技点数。</p>`
  },
  {
    id: "art-054",
    title: "见敌必歼任务攻略",
    category: "advanced",
    categoryName: "进阶技巧",
    subCategory: "任务攻略",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2052288.html",
    author: "游民星空",
    date: "2025-11-30",
    tags: ["任务", "见敌必歼", "攻略"],
    summary: "见敌必歼任务完整攻略指南。",
    content: `<h2>见敌必歼任务攻略</h2>
<p>见敌必歼是S7赛季的重要任务之一，本文带来完整攻略。</p>
<h3>任务要求</h3>
<p>在规定时间内消灭指定数量的敌人，难度随任务等级提升。</p>
<h3>完成技巧</h3>
<ul><li>选择熟悉的武器提高击杀效率</li><li>利用地图热点区域寻找敌人</li><li>团队配合可以更快完成任务</li></ul>`
  },
  {
    id: "art-055",
    title: "巴克什烽火纪念杯刷新位置",
    category: "maps",
    categoryName: "地图攻略",
    subCategory: "收集品",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2052266.html",
    author: "游民星空",
    date: "2025-11-29",
    tags: ["巴克什", "纪念杯", "收集"],
    summary: "巴克什地图烽火纪念杯全部刷新位置。",
    content: `<h2>巴克什烽火纪念杯刷新位置</h2>
<p>烽火纪念杯是巴克什地图中的特殊收集品，本文标注了所有刷新位置。</p>
<h3>刷新点位</h3>
<ul><li>行政楼大厅展示柜</li><li>地下掩体储藏室</li><li>训练场观礼台</li></ul>`
  },
  {
    id: "art-056",
    title: "航天基地烽火纪念杯刷新位置",
    category: "maps",
    categoryName: "地图攻略",
    subCategory: "收集品",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2052264.html",
    author: "游民星空",
    date: "2025-11-29",
    tags: ["航天基地", "纪念杯", "收集"],
    summary: "航天基地地图烽火纪念杯全部刷新位置。",
    content: `<h2>航天基地烽火纪念杯刷新位置</h2>
<p>航天基地地图中的烽火纪念杯刷新位置汇总。</p>
<h3>刷新点位</h3>
<ul><li>中控室控制台</li><li>组装室工作台</li><li>总裁室书柜</li></ul>`
  },
  {
    id: "art-057",
    title: "枪械改装教学",
    category: "weapons",
    categoryName: "武器攻略",
    subCategory: "改枪教学",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2052254.html",
    author: "游民星空",
    date: "2025-11-29",
    tags: ["改枪", "改装", "教学"],
    summary: "枪械改装系统全面教学，从入门到精通。",
    content: `<h2>枪械改装教学</h2>
<p>枪械改装是三角洲行动的核心系统之一，本文带来全面教学。</p>
<h3>改装基础</h3>
<ul><li>了解各配件对武器属性的影响</li><li>根据作战风格选择配件方向</li><li>平衡后坐力、精度和机动性</li></ul>
<h3>进阶技巧</h3>
<p>不同地图和模式需要不同的改装方案。近距离地图优先机动性，远距离地图优先精度和稳定性。</p>`
  },
  {
    id: "art-058",
    title: "ASh-12改枪推荐",
    category: "weapons",
    categoryName: "武器攻略",
    subCategory: "改枪教学",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2052241.html",
    author: "游民星空",
    date: "2025-11-28",
    tags: ["ASh-12", "改枪", "推荐"],
    summary: "ASh-12重型突击步枪最佳改装方案。",
    content: `<h2>ASh-12改枪推荐</h2>
<p>ASh-12是游戏中威力强大的重型突击步枪，本文推荐最佳改装方案。</p>
<h3>推荐配置</h3>
<p>枪口：制退器 | 枪管：重型枪管 | 瞄具：红点 | 握把：垂直握把 | 枪托：精密枪托</p>
<h3>使用建议</h3>
<p>ASh-12单发伤害极高但后坐力巨大，建议点射而非连射。近距离作战优势明显。</p>`
  },
  {
    id: "art-059",
    title: "新手必看改枪攻略",
    category: "beginner",
    categoryName: "新手指南",
    subCategory: "改枪教学",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2052235.html",
    author: "游民星空",
    date: "2025-11-28",
    tags: ["新手", "改枪", "攻略"],
    summary: "面向新手的改枪入门攻略，少走弯路。",
    content: `<h2>新手必看改枪攻略</h2>
<p>改枪系统对新手来说可能有些复杂，本文帮助新手快速上手。</p>
<h3>新手改枪原则</h3>
<ul><li>优先提升后坐力控制</li><li>不要盲目追求最高级配件</li><li>先用基础配件熟悉武器手感</li></ul>
<h3>推荐新手武器</h3>
<p>M4A1是最适合新手的武器，后坐力可控，配件选择丰富。先练好M4A1再尝试其他武器。</p>`
  },
  {
    id: "art-060",
    title: "单人三排配装推荐",
    category: "advanced",
    categoryName: "进阶技巧",
    subCategory: "配装推荐",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2052234.html",
    author: "游民星空",
    date: "2025-11-28",
    tags: ["单人", "三排", "配装"],
    summary: "单人三排模式最佳配装方案推荐。",
    content: `<h2>单人三排配装推荐</h2>
<p>单人三排是高风险高回报的玩法，合理的配装至关重要。</p>
<h3>配装原则</h3>
<ul><li>轻装上阵，提高机动性</li><li>携带足够的药品</li><li>选择消音武器避免暴露位置</li></ul>
<h3>推荐配装</h3>
<p>武器：MP5（消音）+ 沙漠之鹰 | 护甲：2级甲 | 药品：2止血带+2手术包+4注射器</p>`
  },
  {
    id: "art-061",
    title: "机密大坝/长弓鼠攻套装攻略",
    category: "advanced",
    categoryName: "进阶技巧",
    subCategory: "鼠攻攻略",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051405.html",
    author: "游民星空",
    date: "2025-11-20",
    tags: ["鼠攻", "大坝", "长弓", "套装"],
    summary: "机密大坝和长弓溪谷鼠攻套装搭配攻略。",
    content: `<h2>机密大坝/长弓鼠攻套装攻略</h2>
<p>鼠攻套装是低成本高回报的装备策略，本文推荐机密大坝和长弓溪谷的最佳鼠攻配置。</p>
<h3>鼠攻核心理念</h3>
<p>以最低成本进入对局，通过灵活的战术和地图知识获取高价值物资。</p>
<h3>推荐套装</h3>
<ul><li>武器：基础冲锋枪或手枪</li><li>护甲：1级甲或不带甲</li><li>药品：基础止血带x2</li><li>背包：轻型背包</li></ul>`
  },
  {
    id: "art-062",
    title: "机密巴克什/航天鼠攻套装攻略",
    category: "advanced",
    categoryName: "进阶技巧",
    subCategory: "鼠攻攻略",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051405_2.html",
    author: "游民星空",
    date: "2025-11-20",
    tags: ["鼠攻", "巴克什", "航天", "套装"],
    summary: "机密巴克什和航天基地鼠攻套装搭配攻略。",
    content: `<h2>机密巴克什/航天鼠攻套装攻略</h2>
<p>巴克什和航天基地是高价值地图，鼠攻策略需要更加谨慎。</p>
<h3>地图特点</h3>
<p>这两张地图物资丰富但敌人装备也更好，鼠攻需要更加注重隐蔽和路线规划。</p>`
  },
  {
    id: "art-063",
    title: "绝密巴克什鼠攻套装攻略",
    category: "advanced",
    categoryName: "进阶技巧",
    subCategory: "鼠攻攻略",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051405_3.html",
    author: "游民星空",
    date: "2025-11-20",
    tags: ["鼠攻", "绝密", "巴克什"],
    summary: "绝密巴克什地图鼠攻策略和套装推荐。",
    content: `<h2>绝密巴克什鼠攻套装攻略</h2>
<p>绝密巴克什风险极高，鼠攻需要更加精密的计划和执行。</p>
<h3>核心策略</h3>
<ul><li>优先选择边缘复活点</li><li>利用地形规避正面交战</li><li>熟悉所有彩蛋点和隐藏物资点</li></ul>`
  },
  {
    id: "art-064",
    title: "绝密航天鼠攻套装攻略",
    category: "advanced",
    categoryName: "进阶技巧",
    subCategory: "鼠攻攻略",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051405_4.html",
    author: "游民星空",
    date: "2025-11-20",
    tags: ["鼠攻", "绝密", "航天"],
    summary: "绝密航天基地鼠攻策略和套装推荐。",
    content: `<h2>绝密航天鼠攻套装攻略</h2>
<p>绝密航天基地物资价值极高，但风险也最大。</p>
<h3>推荐路线</h3>
<p>从外围逐步向核心区域推进，优先搜索低风险高回报点位。组装室和浮力室是重点目标。</p>`
  },
  {
    id: "art-065",
    title: "潮汐监狱鼠攻套装攻略",
    category: "advanced",
    categoryName: "进阶技巧",
    subCategory: "鼠攻攻略",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051405_5.html",
    author: "游民星空",
    date: "2025-11-20",
    tags: ["鼠攻", "潮汐监狱", "套装"],
    summary: "潮汐监狱地图鼠攻策略和套装推荐。",
    content: `<h2>潮汐监狱鼠攻套装攻略</h2>
<p>潮汐监狱是S7赛季新地图，鼠攻策略正在探索中。</p>
<h3>初步建议</h3>
<ul><li>监狱内部结构复杂，适合鼠攻隐蔽</li><li>多个楼层提供垂直机动空间</li><li>注意监控摄像头位置</li></ul>`
  },
  {
    id: "art-066",
    title: "ASval改枪推荐",
    category: "weapons",
    categoryName: "武器攻略",
    subCategory: "改枪教学",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-1822795.html",
    author: "游民星空",
    date: "2024-09-27",
    tags: ["ASval", "改枪", "推荐"],
    summary: "ASval突击步枪最佳改装方案推荐。",
    content: `<h2>ASval改枪推荐</h2>
<p>ASval是内置消音器的特殊突击步枪，本文推荐最佳改装方案。</p>
<h3>武器特点</h3>
<p>ASval自带消音器，适合隐蔽作战。射速快但弹速慢，适合中近距离。</p>
<h3>推荐配置</h3>
<p>枪管：长枪管 | 瞄具：红点 | 握把：垂直握把 | 枪托：战术枪托</p>`
  },
  {
    id: "art-067",
    title: "QBZ95改枪推荐",
    category: "weapons",
    categoryName: "武器攻略",
    subCategory: "改枪教学",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-1822871.html",
    author: "游民星空",
    date: "2024-09-27",
    tags: ["QBZ95", "改枪", "推荐"],
    summary: "QBZ95式步枪最佳改装方案推荐。",
    content: `<h2>QBZ95改枪推荐</h2>
<p>QBZ95是国产无托步枪，在游戏中表现均衡。</p>
<h3>推荐配置</h3>
<p>枪口：补偿器 | 枪管：标准枪管 | 瞄具：全息 | 握把：三角握把 | 枪托：标准枪托</p>`
  },
  {
    id: "art-068",
    title: "M4A1改枪推荐",
    category: "weapons",
    categoryName: "武器攻略",
    subCategory: "改枪教学",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051395.html",
    author: "游民星空",
    date: "2025-11-19",
    tags: ["M4A1", "改枪", "推荐"],
    summary: "M4A1卡宾枪S7赛季最佳改装方案。",
    content: `<h2>M4A1改枪推荐</h2>
<p>M4A1是最均衡的突击步枪，本文推荐S7赛季最佳改装方案。</p>
<h3>全能配置</h3>
<p>枪口：补偿器 | 枪管：长枪管 | 瞄具：红点+3x切换 | 握把：垂直握把 | 枪托：战术枪托</p>
<h3>近战配置</h3>
<p>枪口：消焰器 | 激光：战术激光 | 瞄具：红点 | 握把：三角握把 | 枪托：轻型枪托</p>`
  },
  {
    id: "art-069",
    title: "MK47改枪推荐",
    category: "weapons",
    categoryName: "武器攻略",
    subCategory: "改枪教学",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051400.html",
    author: "游民星空",
    date: "2025-11-19",
    tags: ["MK47", "改枪", "推荐"],
    summary: "MK47战斗步枪S7赛季最佳改装方案。",
    content: `<h2>MK47改枪推荐</h2>
<p>MK47是高伤害战斗步枪，本文推荐S7赛季最佳改装方案。</p>
<h3>中距离配置</h3>
<p>枪口：补偿器 | 枪管：长枪管 | 瞄具：ACOG 4x | 握把：两脚架 | 枪托：精密枪托</p>`
  },
  {
    id: "art-070",
    title: "K416改枪推荐",
    category: "weapons",
    categoryName: "武器攻略",
    subCategory: "改枪教学",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051404.html",
    author: "游民星空",
    date: "2025-11-19",
    tags: ["K416", "改枪", "推荐"],
    summary: "K416突击步枪S7赛季最佳改装方案。",
    content: `<h2>K416改枪推荐</h2>
<p>K416是S7赛季表现优异的突击步枪，本文推荐最佳改装方案。</p>
<h3>推荐配置</h3>
<p>枪口：消音器 | 枪管：长枪管 | 瞄具：全息 | 握把：垂直握把 | 枪托：战术枪托</p>`
  },
  {
    id: "art-071",
    title: "K437改枪推荐",
    category: "weapons",
    categoryName: "武器攻略",
    subCategory: "改枪教学",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051406.html",
    author: "游民星空",
    date: "2025-11-19",
    tags: ["K437", "改枪", "推荐"],
    summary: "K437突击步枪S7赛季最佳改装方案。",
    content: `<h2>K437改枪推荐</h2>
<p>K437是S7赛季新加入的武器，本文推荐最佳改装方案。</p>
<h3>推荐配置</h3>
<p>枪口：补偿器 | 枪管：重型枪管 | 瞄具：红点 | 握把：三角握把 | 枪托：精密枪托</p>`
  },
  {
    id: "art-072",
    title: "AS-Val改枪推荐",
    category: "weapons",
    categoryName: "武器攻略",
    subCategory: "改枪教学",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051407.html",
    author: "游民星空",
    date: "2025-11-19",
    tags: ["AS-Val", "改枪", "推荐"],
    summary: "AS-Val微声突击步枪S7赛季最佳改装方案。",
    content: `<h2>AS-Val改枪推荐</h2>
<p>AS-Val是内置消音器的微声步枪，本文推荐S7赛季最佳改装方案。</p>
<h3>推荐配置</h3>
<p>枪管：长枪管 | 瞄具：红点 | 握把：垂直握把 | 枪托：战术枪托</p>`
  },
  {
    id: "art-073",
    title: "KC17改枪推荐",
    category: "weapons",
    categoryName: "武器攻略",
    subCategory: "改枪教学",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051412.html",
    author: "游民星空",
    date: "2025-11-19",
    tags: ["KC17", "改枪", "推荐"],
    summary: "KC17卡宾枪S7赛季最佳改装方案。",
    content: `<h2>KC17改枪推荐</h2>
<p>KC17是S7赛季表现亮眼的卡宾枪，本文推荐最佳改装方案。</p>
<h3>推荐配置</h3>
<p>枪口：消焰器 | 枪管：轻型枪管 | 瞄具：红点 | 握把：三角握把 | 枪托：轻型枪托</p>`
  },
  {
    id: "art-074",
    title: "3x3赛季任务：超感脑机",
    category: "advanced",
    categoryName: "进阶技巧",
    subCategory: "赛季任务",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051390.html",
    author: "游民星空",
    date: "2025-11-18",
    tags: ["3x3", "赛季任务", "脑机"],
    summary: "3x3赛季任务第一关：超感脑机攻略。",
    content: `<h2>3x3赛季任务：超感脑机</h2>
<p>超感脑机是3x3赛季任务的第一关，需要在航天基地找到并激活超感脑机。</p>
<h3>任务流程</h3>
<ul><li>前往航天基地中控室</li><li>找到超感脑机设备</li><li>激活并保护设备60秒</li></ul>`
  },
  {
    id: "art-075",
    title: "3x3赛季任务：配给运用作战",
    category: "advanced",
    categoryName: "进阶技巧",
    subCategory: "赛季任务",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051390_2.html",
    author: "游民星空",
    date: "2025-11-18",
    tags: ["3x3", "赛季任务"],
    summary: "3x3赛季任务第二关攻略。",
    content: `<h2>3x3赛季任务：配给运用作战</h2>
<p>配给运用作战任务需要在限定装备条件下完成指定目标。</p>`
  },
  {
    id: "art-076",
    title: "3x3赛季任务：潜行空间化解危机",
    category: "advanced",
    categoryName: "进阶技巧",
    subCategory: "赛季任务",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051390_3.html",
    author: "游民星空",
    date: "2025-11-18",
    tags: ["3x3", "赛季任务", "潜行"],
    summary: "3x3赛季任务第三关：潜行任务攻略。",
    content: `<h2>3x3赛季任务：潜行空间化解危机</h2>
<p>潜行任务需要在不被发现的情况下完成目标。</p>`
  },
  {
    id: "art-077",
    title: "3x3赛季任务：逃脱艺术基础",
    category: "advanced",
    categoryName: "进阶技巧",
    subCategory: "赛季任务",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051390_4.html",
    author: "游民星空",
    date: "2025-11-18",
    tags: ["3x3", "赛季任务", "逃脱"],
    summary: "3x3赛季任务第四关攻略。",
    content: `<h2>3x3赛季任务：逃脱艺术基础</h2>
<p>逃脱任务考验玩家的路线规划和时机把握能力。</p>`
  },
  {
    id: "art-078",
    title: "3x3赛季任务：保障有力",
    category: "advanced",
    categoryName: "进阶技巧",
    subCategory: "赛季任务",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051390_5.html",
    author: "游民星空",
    date: "2025-11-18",
    tags: ["3x3", "赛季任务"],
    summary: "3x3赛季任务第五关攻略。",
    content: `<h2>3x3赛季任务：保障有力</h2>
<p>保障任务需要保护指定目标不受敌人破坏。</p>`
  },
  {
    id: "art-079",
    title: "3x3赛季任务：迷雾中的三巨头",
    category: "advanced",
    categoryName: "进阶技巧",
    subCategory: "赛季任务",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051390_6.html",
    author: "游民星空",
    date: "2025-11-18",
    tags: ["3x3", "赛季任务", "BOSS"],
    summary: "3x3赛季任务第六关：BOSS战攻略。",
    content: `<h2>3x3赛季任务：迷雾中的三巨头</h2>
<p>三巨头BOSS战是赛季任务中的难点，需要团队配合。</p>`
  },
  {
    id: "art-080",
    title: "3x3赛季任务：展示肌肉",
    category: "advanced",
    categoryName: "进阶技巧",
    subCategory: "赛季任务",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051390_7.html",
    author: "游民星空",
    date: "2025-11-18",
    tags: ["3x3", "赛季任务"],
    summary: "3x3赛季任务第七关攻略。",
    content: `<h2>3x3赛季任务：展示肌肉</h2>
<p>展示肌肉任务要求在限定时间内消灭大量敌人。</p>`
  },
  {
    id: "art-081",
    title: "3x3赛季任务：矩阵中的天使心",
    category: "advanced",
    categoryName: "进阶技巧",
    subCategory: "赛季任务",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051390_8.html",
    author: "游民星空",
    date: "2025-11-18",
    tags: ["3x3", "赛季任务"],
    summary: "3x3赛季任务第八关攻略。",
    content: `<h2>3x3赛季任务：矩阵中的天使心</h2>
<p>矩阵任务需要在复杂的电子战环境中完成任务目标。</p>`
  },
  {
    id: "art-082",
    title: "3x3赛季任务：巴别塔与泪",
    category: "advanced",
    categoryName: "进阶技巧",
    subCategory: "赛季任务",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051390_9.html",
    author: "游民星空",
    date: "2025-11-18",
    tags: ["3x3", "赛季任务"],
    summary: "3x3赛季任务第九关攻略。",
    content: `<h2>3x3赛季任务：巴别塔与泪</h2>
<p>巴别塔任务是赛季任务中的剧情高潮关卡。</p>`
  },
  {
    id: "art-083",
    title: "3x3赛季任务：锋芒与利刃",
    category: "advanced",
    categoryName: "进阶技巧",
    subCategory: "赛季任务",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051390_10.html",
    author: "游民星空",
    date: "2025-11-18",
    tags: ["3x3", "赛季任务"],
    summary: "3x3赛季任务第十关攻略。",
    content: `<h2>3x3赛季任务：锋芒与利刃</h2>
<p>锋芒与利刃任务考验玩家的战斗技巧和装备搭配。</p>`
  },
  {
    id: "art-084",
    title: "3x3赛季任务：保护与建设",
    category: "advanced",
    categoryName: "进阶技巧",
    subCategory: "赛季任务",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051390_11.html",
    author: "游民星空",
    date: "2025-11-18",
    tags: ["3x3", "赛季任务"],
    summary: "3x3赛季任务第十一关攻略。",
    content: `<h2>3x3赛季任务：保护与建设</h2>
<p>保护与建设任务需要防守指定区域并完成建设目标。</p>`
  },
  {
    id: "art-085",
    title: "3x3赛季任务：博物强识基础收集",
    category: "advanced",
    categoryName: "进阶技巧",
    subCategory: "赛季任务",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051390_12.html",
    author: "游民星空",
    date: "2025-11-18",
    tags: ["3x3", "赛季任务", "收集"],
    summary: "3x3赛季任务第十二关：收集任务攻略。",
    content: `<h2>3x3赛季任务：博物强识基础收集</h2>
<p>博物强识任务需要在地图中收集指定的物品。</p>`
  },
  {
    id: "art-086",
    title: "3x3赛季任务：深入敌群",
    category: "advanced",
    categoryName: "进阶技巧",
    subCategory: "赛季任务",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051390_13.html",
    author: "游民星空",
    date: "2025-11-18",
    tags: ["3x3", "赛季任务"],
    summary: "3x3赛季任务第十三关攻略。",
    content: `<h2>3x3赛季任务：深入敌群</h2>
<p>深入敌群任务需要玩家深入敌人腹地完成高风险目标。</p>`
  },
  {
    id: "art-087",
    title: "3x3赛季任务：剧变之日",
    category: "advanced",
    categoryName: "进阶技巧",
    subCategory: "赛季任务",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051390_14.html",
    author: "游民星空",
    date: "2025-11-18",
    tags: ["3x3", "赛季任务"],
    summary: "3x3赛季任务第十四关攻略。",
    content: `<h2>3x3赛季任务：剧变之日</h2>
<p>剧变之日是赛季任务的关键转折关卡。</p>`
  },
  {
    id: "art-088",
    title: "3x3赛季任务：战斗专家金枪客",
    category: "advanced",
    categoryName: "进阶技巧",
    subCategory: "赛季任务",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051390_15.html",
    author: "游民星空",
    date: "2025-11-18",
    tags: ["3x3", "赛季任务", "战斗专家"],
    summary: "3x3赛季任务第十五关：金枪客挑战攻略。",
    content: `<h2>3x3赛季任务：战斗专家金枪客</h2>
<p>金枪客任务需要使用特定武器完成击杀目标。</p>`
  },
  {
    id: "art-089",
    title: "3x3赛季任务：战斗专家狙击精英",
    category: "advanced",
    categoryName: "进阶技巧",
    subCategory: "赛季任务",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051390_16.html",
    author: "游民星空",
    date: "2025-11-18",
    tags: ["3x3", "赛季任务", "狙击"],
    summary: "3x3赛季任务第十六关：狙击精英挑战攻略。",
    content: `<h2>3x3赛季任务：战斗专家狙击精英</h2>
<p>狙击精英任务需要在远距离完成精确击杀。</p>`
  },
  {
    id: "art-090",
    title: "3x3赛季任务：潜行空间鸦影之迷",
    category: "advanced",
    categoryName: "进阶技巧",
    subCategory: "赛季任务",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051390_17.html",
    author: "游民星空",
    date: "2025-11-18",
    tags: ["3x3", "赛季任务", "潜行"],
    summary: "3x3赛季任务第十七关攻略。",
    content: `<h2>3x3赛季任务：潜行空间鸦影之迷</h2>
<p>鸦影之迷是潜行系列任务的进阶关卡。</p>`
  },
  {
    id: "art-091",
    title: "3x3赛季任务：战斗专家区域猎手",
    category: "advanced",
    categoryName: "进阶技巧",
    subCategory: "赛季任务",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051390_18.html",
    author: "游民星空",
    date: "2025-11-18",
    tags: ["3x3", "赛季任务"],
    summary: "3x3赛季任务第十八关攻略。",
    content: `<h2>3x3赛季任务：战斗专家区域猎手</h2>
<p>区域猎手任务需要在指定区域内完成一系列战斗目标。</p>`
  },
  {
    id: "art-092",
    title: "3x3赛季任务：苍穹之上水面之下",
    category: "advanced",
    categoryName: "进阶技巧",
    subCategory: "赛季任务",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051390_19.html",
    author: "游民星空",
    date: "2025-11-18",
    tags: ["3x3", "赛季任务"],
    summary: "3x3赛季任务第十九关攻略。",
    content: `<h2>3x3赛季任务：苍穹之上水面之下</h2>
<p>本关涉及海陆空多维作战，需要全面的战斗能力。</p>`
  },
  {
    id: "art-093",
    title: "3x3赛季任务：逃脱艺术八面玲珑",
    category: "advanced",
    categoryName: "进阶技巧",
    subCategory: "赛季任务",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051390_20.html",
    author: "游民星空",
    date: "2025-11-18",
    tags: ["3x3", "赛季任务", "逃脱"],
    summary: "3x3赛季任务第二十关攻略。",
    content: `<h2>3x3赛季任务：逃脱艺术八面玲珑</h2>
<p>八面玲珑是逃脱系列任务的高级关卡，需要灵活应变。</p>`
  },
  {
    id: "art-094",
    title: "3x3赛季任务：博物强识精致人生",
    category: "advanced",
    categoryName: "进阶技巧",
    subCategory: "赛季任务",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051390_21.html",
    author: "游民星空",
    date: "2025-11-18",
    tags: ["3x3", "赛季任务", "收集"],
    summary: "3x3赛季任务第二十一关攻略。",
    content: `<h2>3x3赛季任务：博物强识精致人生</h2>
<p>精致人生任务需要收集更稀有的物品。</p>`
  },
  {
    id: "art-095",
    title: "3x3赛季任务：博物强识风卷残云",
    category: "advanced",
    categoryName: "进阶技巧",
    subCategory: "赛季任务",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051390_22.html",
    author: "游民星空",
    date: "2025-11-18",
    tags: ["3x3", "赛季任务", "收集"],
    summary: "3x3赛季任务第二十二关攻略。",
    content: `<h2>3x3赛季任务：博物强识风卷残云</h2>
<p>风卷残云是博物强识系列的最终关卡。</p>`
  },
  {
    id: "art-096",
    title: "3x3赛季任务：Relink的彼端",
    category: "advanced",
    categoryName: "进阶技巧",
    subCategory: "赛季任务",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051390_23.html",
    author: "游民星空",
    date: "2025-11-18",
    tags: ["3x3", "赛季任务"],
    summary: "3x3赛季任务第二十三关攻略。",
    content: `<h2>3x3赛季任务：Relink的彼端</h2>
<p>Relink的彼端是赛季任务倒数第二关，难度较高。</p>`
  },
  {
    id: "art-097",
    title: "3x3赛季任务：S7赛季命运契约",
    category: "advanced",
    categoryName: "进阶技巧",
    subCategory: "赛季任务",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-2051390_24.html",
    author: "游民星空",
    date: "2025-11-18",
    tags: ["3x3", "赛季任务", "S7"],
    summary: "3x3赛季任务最终关：命运契约攻略。",
    content: `<h2>3x3赛季任务：S7赛季命运契约</h2>
<p>命运契约是3x3赛季任务的最终关卡，完成后可获得丰厚奖励。</p>`
  },
  {
    id: "art-098",
    title: "牧羊人干员教学",
    category: "operators",
    categoryName: "干员攻略",
    subCategory: "牧羊人",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-1821669_2.html",
    author: "官方",
    date: "2024-09-25",
    tags: ["牧羊人", "支援", "教学"],
    summary: "牧羊人干员技能解析和实战教学。",
    content: `<h2>牧羊人干员教学</h2>
<p>牧羊人是支援型干员，为团队提供火力支援和压制。</p>
<h3>技能特点</h3>
<ul><li>强大的持续火力输出能力</li><li>可为队友提供弹药补给</li><li>压制技能可降低敌人战斗力</li></ul>`
  },
  {
    id: "art-099",
    title: "露娜干员教学",
    category: "operators",
    categoryName: "干员攻略",
    subCategory: "露娜",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-1821669_3.html",
    author: "官方",
    date: "2024-09-25",
    tags: ["露娜", "侦察", "教学"],
    summary: "露娜干员技能解析和实战教学。",
    content: `<h2>露娜干员教学</h2>
<p>露娜是侦察型干员，擅长情报收集和远程狙击。</p>
<h3>技能特点</h3>
<ul><li>侦察无人机探测敌人位置</li><li>标记技能为团队提供目标信息</li><li>狙击专精，远距离作战优势明显</li></ul>`
  },
  {
    id: "art-100",
    title: "蜂医干员教学",
    category: "operators",
    categoryName: "干员攻略",
    subCategory: "蜂医",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-1821669_4.html",
    author: "官方",
    date: "2024-09-25",
    tags: ["蜂医", "医疗", "教学"],
    summary: "蜂医干员技能解析和实战教学。",
    content: `<h2>蜂医干员教学</h2>
<p>蜂医是团队治疗核心，激素枪可治疗队友并屏蔽异常状态。</p>
<h3>技能特点</h3>
<ul><li>激素枪远程治疗队友</li><li>医疗包为团队提供持续治疗</li><li>被动感知附近受伤队友</li></ul>`
  },
  {
    id: "art-101",
    title: "威龙干员教学",
    category: "operators",
    categoryName: "干员攻略",
    subCategory: "威龙",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-1821669_5.html",
    author: "官方",
    date: "2024-09-25",
    tags: ["威龙", "突击", "教学"],
    summary: "威龙干员技能解析和实战教学。",
    content: `<h2>威龙干员教学</h2>
<p>威龙是高机动性突击干员，外骨骼提供超强机动能力。</p>
<h3>技能特点</h3>
<ul><li>动力外骨骼超载加速</li><li>三联装手炮爆炸输出</li><li>战术滑铲快速位移</li></ul>`
  },
  {
    id: "art-102",
    title: "骇爪干员教学",
    category: "operators",
    categoryName: "干员攻略",
    subCategory: "骇爪",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-1821669_6.html",
    author: "官方",
    date: "2024-09-25",
    tags: ["骇爪", "电子战", "教学"],
    summary: "骇爪干员技能解析和实战教学。",
    content: `<h2>骇爪干员教学</h2>
<p>骇爪是电子战专家，可干扰敌方设备和获取情报。</p>
<h3>技能特点</h3>
<ul><li>电子干扰禁用敌方设备</li><li>情报获取揭示敌人位置</li><li>EMP手雷范围性电子攻击</li></ul>`
  },
  {
    id: "art-103",
    title: "乌鲁鲁干员教学",
    category: "operators",
    categoryName: "干员攻略",
    subCategory: "乌鲁鲁",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/gl/Content-1821669_7.html",
    author: "官方",
    date: "2024-09-25",
    tags: ["乌鲁鲁", "支援", "教学"],
    summary: "乌鲁鲁干员技能解析和实战教学。",
    content: `<h2>乌鲁鲁干员教学</h2>
<p>乌鲁鲁是火力支援专家，提供重型火力掩护。</p>
<h3>技能特点</h3>
<ul><li>重型火力输出</li><li>区域压制能力出色</li><li>可为团队创造进攻窗口</li></ul>`
  },
  {
    id: "art-104",
    title: "全新赛季「回声」正式开启",
    category: "news",
    categoryName: "更新资讯",
    subCategory: "赛季更新",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/news/Content-2125532.html",
    author: "官方",
    date: "2026-01-20",
    tags: ["赛季", "回声", "更新"],
    summary: "三角洲行动全新赛季「回声」正式开启公告。",
    content: `<h2>全新赛季「回声」正式开启</h2>
<p>三角洲行动全新赛季「回声」正式上线，带来大量新内容。</p>
<h3>赛季亮点</h3>
<ul><li>新地图：潮汐监狱</li><li>新干员：麦晓雯</li><li>新武器：K437、KC17等</li><li>新赛季通行证</li></ul>`
  },
  {
    id: "art-105",
    title: "姜文联动《三角洲行动》完整宣传片",
    category: "news",
    categoryName: "更新资讯",
    subCategory: "联动活动",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/news/Content-2129551.html",
    author: "游民星空",
    date: "2026-02-01",
    tags: ["姜文", "联动", "宣传"],
    summary: "姜文代言三角洲行动猛攻节完整宣传片。",
    content: `<h2>姜文联动《三角洲行动》完整宣传片</h2>
<p>著名导演姜文成为三角洲行动猛攻节代言人，宣传片充满姜文标志性台词风格。</p>`
  },
  {
    id: "art-106",
    title: "古墓丽影联动三角洲行动",
    category: "news",
    categoryName: "更新资讯",
    subCategory: "联动活动",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/news/Content-2128631.html",
    author: "游民星空",
    date: "2026-01-28",
    tags: ["古墓丽影", "联动", "劳拉"],
    summary: "古墓丽影与三角洲行动联动活动详情。",
    content: `<h2>古墓丽影联动三角洲行动</h2>
<p>古墓丽影系列与三角洲行动展开联动，劳拉·克劳馥主题皮肤上线。</p>`
  },
  {
    id: "art-107",
    title: "三角洲行动联动肯德基",
    category: "news",
    categoryName: "更新资讯",
    subCategory: "联动活动",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/news/Content-2132637.html",
    author: "游民星空",
    date: "2026-03-01",
    tags: ["肯德基", "联动", "套餐"],
    summary: "三角洲行动与肯德基联动活动详情。",
    content: `<h2>三角洲行动联动肯德基</h2>
<p>三角洲行动与肯德基展开跨界联动，推出全新联名套餐和定制游戏道具。</p>`
  },
  {
    id: "art-108",
    title: "三角洲行动女玩家遭毁号事件",
    category: "news",
    categoryName: "更新资讯",
    subCategory: "社区事件",
    source: "游民星空",
    sourceUrl: "https://wap.gamersky.com/news/Content-2134227.html",
    author: "游民星空",
    date: "2026-03-15",
    tags: ["社区", "毁号", "事件"],
    summary: "三角洲行动社区女玩家遭毁号霸凌事件报道。",
    content: `<h2>三角洲行动女玩家遭毁号事件</h2>
<p>三角洲行动社区发生女玩家遭毁号霸凌事件，引发广泛关注。</p>`
  }
];

/**
 * 获取所有文章
 * @returns {Array}
 */
export function getAllArticles() {
  return articlesDatabase;
}

/**
 * 按分类获取文章
 * @param {string} category - 分类ID
 * @returns {Array}
 */
export function getArticlesByCategory(category) {
  if (!category || category === 'all') return articlesDatabase;
  return articlesDatabase.filter(a => a.category === category);
}

/**
 * 根据ID获取单篇文章
 * @param {string} id - 文章ID
 * @returns {Object|null}
 */
export function getArticleById(id) {
  return articlesDatabase.find(a => a.id === id) || null;
}

/**
 * 搜索文章
 * @param {string} query - 搜索关键词
 * @returns {Array}
 */
export function searchArticles(query) {
  if (!query) return articlesDatabase;
  const q = query.toLowerCase();
  return articlesDatabase.filter(a =>
    a.title.toLowerCase().includes(q) ||
    a.tags.some(t => t.toLowerCase().includes(q)) ||
    a.summary.toLowerCase().includes(q) ||
    a.categoryName.includes(q) ||
    a.subCategory.includes(q)
  );
}

/**
 * 获取所有分类
 * @returns {Array}
 */
export function getCategories() {
  const cats = [...new Set(articlesDatabase.map(a => a.category))];
  return cats.map(c => {
    const article = articlesDatabase.find(a => a.category === c);
    return {
      id: c,
      name: article ? article.categoryName : c,
      count: articlesDatabase.filter(a => a.category === c).length
    };
  });
}

/**
 * 获取热门文章（按日期排序取最新）
 * @param {number} limit - 返回数量
 * @returns {Array}
 */
export function getLatestArticles(limit = 10) {
  return [...articlesDatabase]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
}