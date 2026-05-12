/**
 * 地图数据库 - Maps Database
 * 三角洲行动游戏全地图战术数据
 */

const mapsDatabase = [
  {
    id: "longa_valley",
    name: "长弓溪谷",
    nameEn: "Longa Valley",
    modeSupport: ["tdm", "domination", "searchDestroy", "hq"],
    modeNames: {
      tdm: "团队死斗",
      domination: "占领模式",
      searchDestroy: "搜查摧毁",
      hq: "总部攻防"
    },
    maxPlayers: 32,
    dimensions: { width: 1200, height: 1200 },
    
    assets: {
      overview: "maps/longa-valley-overview.svg",
      thumbnail: "maps/longa-valley-thumb.webp"
    },
    
    description: "位于山谷地带的中型地图，融合了开阔田野、密集建筑区和河流通道，适合多种战术风格。",
    
    pointsOfInterest: [
      {
        id: "alpha_spawn",
        name: "Alpha出生点",
        type: "spawn",
        typeName: "出生点",
        position: { x: 12, y: 18 },
        team: "alpha",
        description: "Alpha队初始出生区域，靠近西侧山谷入口",
        tips: ["附近有载具刷新点", "开局可快速占据高地", "易被敌方狙击手监视"],
        icon: "🏁"
      },
      {
        id: "bravo_spawn",
        name: "Bravo出生点",
        type: "spawn",
        typeName: "出生点",
        position: { x: 88, y: 82 },
        team: "bravo",
        description: "Bravo队初始出生区域，东侧工业区附近",
        tips: ["工业建筑提供良好掩护", "多条进攻路线可选", "注意中央桥梁控制权"],
        icon: "🏁"
      },
      {
        id: "center_building",
        name: "中央指挥楼",
        type: "objective",
        typeName: "战略要点",
        position: { x: 50, y: 48 },
        importance: "high",
        importanceName: "极高",
        team: "neutral",
        description: "地图中心的三层建筑，控制后可辐射四周所有关键区域",
        features: ["三层结构", "多个窗户射击位", "屋顶可上", "地下室通道"],
        recommendedLoadout: ["突击步枪", "破片手雷", "防暴盾牌"],
        tactics: ["优先占领制高点", "防守时利用窗户交叉火力", "进攻时可从多方向同时突入"],
        icon: "🏢"
      },
      {
        id: "river_crossing",
        name: "溪谷大桥",
        type: "objective",
        typeName: "交通要道",
        position: { x: 50, y: 65 },
        importance: "high",
        importanceName: "极高",
        team: "neutral",
        description: "连接东西两岸的唯一桥梁，兵家必争之地",
        features: ["混凝土结构提供掩体", "桥下可通过（涉水）", "两侧有瞭望塔"],
        recommendedLoadout: ["狙击枪", "轻机枪", "反载具地雷"],
        tactics: ["控制桥头的两个碉堡", "埋设地雷封锁桥面", "狙击手架设于两侧高地"],
        icon: "🌉"
      },
      {
        id: "sniper_nest_west",
        name: "西侧山脊",
        type: "sniper",
        typeName: "狙击点",
        position: { x: 22, y: 15 },
        coverLevel: "medium",
        coverLevelName: "中等",
        sightlines: ["中央指挥楼", "溪谷大桥", "Alpha出生点出口"],
        riskLevel: "medium",
        riskLevelName: "中等",
        description: "西侧高地的岩石区域，视野开阔但暴露风险适中",
        tips: ["建议配备消音器", "使用热成像瞄具效果更佳", "准备撤退路线"],
        icon: "🎯"
      },
      {
        id: "sniper_nest_east",
        name: "东侧水塔",
        type: "sniper",
        typeName: "狙击点",
        position: { x: 85, y: 25 },
        coverLevel: "low",
        coverLevelName: "较低",
        sightlines: ["中央指挥楼屋顶", "溪谷大桥东端", "东部工业区"],
        riskLevel: "high",
        riskLevelName: "较高",
        description: "废弃水塔顶部，绝佳视野但几乎无掩体",
        tips: ["高风险高回报点位", "必须确保队友掩护", "建议快打快撤不要久留"],
        icon: "🎯"
      },
      {
        id: "loot_zone_north",
        name: "北部军火库",
        type: "loot",
        typeName: "物资点",
        position: { x: 48, y: 15 },
        lootTier: "high",
        lootTierName: "高级",
        description: "地图北部的高级装备刷新点",
        items: ["装甲板", "高级瞄准镜", "杀伤性手雷", "医疗包"],
        respawnTime: "120秒",
        icon: "📦"
      },
      {
        id: "industrial_complex",
        name: "东部工业区",
        type: "cover",
        typeName: "掩体区",
        position: { x: 82, y: 70 },
        density: "high",
        densityName: "密集",
        description: "由多个仓库和厂房组成的CQC战斗区域",
        features: ["室内近战为主", "多层立体结构", "多处伏击点"],
        recommendedWeapons: ["冲锋枪", "霰弹枪", "手枪"],
        icon: "🏭"
      },
      {
        id: "western_fields",
        name: "西部平原",
        type: "cover",
        typeName: "掩体区",
        position: { x: 20, y: 55 },
        density: "low",
        densityName: "稀疏",
        description: "开阔的田野区域，仅有少量树木和石墙作为掩体",
        features: ["适合中远距离交战", "载具机动区域", "易受狙击威胁"],
        recommendedWeapons: ["突击步枪", "狙击枪", "轻机枪"],
        icon: "🌾"
      }
    ],
    
    tacticalRoutes: [
      {
        id: "rush_alpha_center",
        name: "Alpha中路快速突进",
        team: "alpha",
        waypoints: [
          { x: 12, y: 18, action: "从出生点出发" },
          { x: 25, y: 30, action: "利用西侧岩石掩体推进" },
          { x: 38, y: 40, action: "到达河岸，观察敌情" },
          { x: 45, y: 46, action: "从西南角接近指挥楼" }
        ],
        estimatedTime: "45秒",
        difficulty: "medium",
        difficultyName: "中等",
        requiredTeamwork: true,
        description: "最直接的进攻路线，需要队友配合压制敌方狙击手"
      },
      {
        id: "flank_alpha_river",
        name: "Alpha侧翼河道渗透",
        team: "alpha",
        waypoints: [
          { x: 12, y: 18, action: "出发" },
          { x: 18, y: 40, action: "沿西岸南下" },
          { x: 35, y: 65, action: "在桥下游涉水过河" },
          { x: 55, y: 75, action: "从东南方向包抄工业区" }
        ],
        estimatedTime: "60秒",
        difficulty: "hard",
        difficultyName: "困难",
        requiredTeamwork: false,
        description: "迂回路线，适合单人或小分队执行侧翼偷袭"
      },
      {
        id: "defend_bravo_bridge",
        name: "Bravo桥头防御阵型",
        team: "bravo",
        waypoints: [
          { x: 88, y: 82, action: "从出生点出发" },
          { x: 75, y: 72, action: "快速占领桥头东侧碉堡" },
          { x: 62, y: 68, action: "部署轻机枪于桥面压制" },
          { x: 58, y: 65, action: "狙击手上水塔架设" }
        ],
        estimatedTime: "40秒",
        difficulty: "easy",
        difficultyName: "简单",
        requiredTeamwork: true,
        description: "标准防御阵型，利用地形优势阻止敌方渡河"
      }
    ],
    
    generalTips: [
      "⚡ 开局首要目标是控制中央指挥楼或溪谷大桥二选一",
      "🎯 西侧山脊是最佳狙击位置，但竞争激烈",
      "💥 工业区是近距离混战区，推荐使用全自动武器",
      "🚗 载具主要用于快速转点和运送重武器",
      "🌙 夜晚模式下，热成像瞄具有显著优势",
      "💣 桥梁和指挥楼入口是地雷的最佳埋设点"
    ],
    
    weaponRecommendations: {
      assaultRifle: ["M4A1", "AK-47"],
      sniper: ["AWM"],
      smg: ["MP5", "P90"],
      shotgun: ["SPAS-12"],
      support: ["M249"]
    },
    
    metadata: {
      lastUpdated: "2026-05-01",
      version: "2.1.0",
      popularity: 95,
      mapSize: "中型"
    }
  },

  {
    id: "desert_fortress",
    name: "沙漠要塞",
    nameEn: "Desert Fortress",
    modeSupport: ["tdm", "domination", "searchDestroy"],
    modeNames: {
      tdm: "团队死斗",
      domination: "占领模式",
      searchDestroy: "搜查摧毁"
    },
    maxPlayers: 24,
    dimensions: { width: 900, height: 900 },
    
    assets: {
      overview: "maps/desert-fortress-overview.svg",
      thumbnail: "maps/desert-fortress-thumb.webp"
    },
    
    description: "中东沙漠地区的古代要塞遗址，以沙色建筑、狭窄巷道和制高点塔楼为特色。",
    
    pointsOfInterest: [
      {
        id: "main_tower",
        name: "主塔楼",
        type: "objective",
        typeName: "战略要点",
        position: { x: 50, y: 35 },
        importance: "high",
        importanceName: "极高",
        team: "neutral",
        description: "地图最高点，360度无死角视野",
        features: ["螺旋楼梯上升", "顶部平台宽敞", "有多处射击孔"],
        recommendedLoadout: ["狙击枪", "轻机枪"],
        icon: "🗼"
      },
      {
        id: "underground_tunnel",
        name: "地下隧道系统",
        type: "cover",
        typeName: "隐蔽通道",
        position: { x: 50, y: 60 },
        description: "连接要塞各区域的地下通道网络",
        features: ["多个出入口", "光线昏暗", "适合伏击"],
        recommendedWeapons: ["霰弹枪", "冲锋枪"],
        icon: "🕳️"
      },
      {
        id: "courtyard",
        name: "中央庭院",
        type: "objective",
        typeName: "交战热点",
        position: { x: 50, y: 50 },
        importance: "high",
        importanceName: "极高",
        team: "neutral",
        description: "要塞的核心开放区域，四周被建筑包围",
        icon: "⚔️"
      }
    ],
    
    tacticalRoutes: [
      {
        id: "tower_assault",
        name: "塔楼突击路线",
        team: null,
        waypoints: [
          { x: 30, y: 50, action: "从西侧营房出发" },
          { x: 42, y: 42, action: "沿外墙接近塔基" },
          { x: 48, y: 38, action: "清除底层守敌后登塔" }
        ],
        estimatedTime: "50秒",
        difficulty: "hard",
        difficultyName: "困难"
      }
    ],
    
    generalTips: [
      "🌡️ 沙漠环境影响视线，建议携带清晰度高的瞄具",
      "🗼 控制主塔楼等于控制半个地图",
      "🕳️ 地下隧道是出其不意的利器",
      "☀️ 注意利用阴影进行隐蔽"
    ],
    
    metadata: {
      lastUpdated: "2026-04-20",
      version: "2.0.0",
      popularity: 88,
      mapSize: "中小型"
    }
  },

  {
    id: "arctic_base",
    name: "北极基地",
    nameEn: "Arctic Research Base",
    modeSupport: ["tdm", "hq", "searchDestroy"],
    modeNames: {
      tdm: "团队死斗",
      hq: "总部攻防",
      searchDestroy: "搜查摧毁"
    },
    maxPlayers: 28,
    dimensions: { width: 1000, height: 1100 },
    
    assets: {
      overview: "maps/arctic-base-overview.svg",
      thumbnail: "maps/arctic-base-thumb.webp"
    },
    
    description: "极地科考站改建的军事基地，冰雪覆盖的户外区域与温暖的室内实验室形成对比。",
    
    pointsOfInterest: [
      {
        id: "research_lab",
        name: "主研究实验室",
        type: "objective",
        typeName: "战略要点",
        position: { x: 52, y: 45 },
        importance: "critical",
        importanceName: "关键",
        team: "neutral",
        description: "HQ模式的主要目标点，室内CQC战场",
        icon: "🔬"
      },
      {
        id: "radar_tower",
        name: "雷达塔",
        type: "sniper",
        typeName: "狙击点",
        position: { x: 15, y: 25 },
        description: "西北角的废弃雷达塔，良好的观察位置",
        icon: "📡"
      },
      {
        id: "ice_caves",
        name: "冰洞系统",
        type: "cover",
        typeName: "隐蔽通道",
        position: { x: 80, y: 75 },
        description: "天然形成的冰洞网络，可绕过主要防线",
        icon: "🧊"
      }
    ],
    
    generalTips: [
      "❄️ 室内外温差大，进出建筑物时注意白雾影响视线",
      "🔬 实验室内部空间狭窄，冲锋枪和霰弹枪优势明显",
      "🧊 冰洞是秘密武器，但容易迷路",
      "👣 雪地上会留下脚印，暴露移动轨迹"
    ],
    
    metadata: {
      lastUpdated: "2026-04-28",
      version: "2.1.0",
      popularity: 82,
      mapSize: "中型"
    }
  },

  {
    id: "urban_downtown",
    name: "都市中心",
    nameEn: "Downtown Metro",
    modeSupport: ["tdm", "domination", "hq", "searchDestroy"],
    modeNames: {
      tdm: "团队死斗",
      domination: "占领模式",
      hq: "总部攻防",
      searchDestroy: "搜查摧毁"
    },
    maxPlayers: 32,
    dimensions: { width: 1300, height: 1200 },
    
    assets: {
      overview: "maps/urban-downtown-overview.svg",
      thumbnail: "maps/urban-downtown-thumb.webp"
    },
    
    description: "现代大城市的中心商务区，摩天大楼、地铁站和街道构成复杂的立体战场。",
    
    pointsOfInterest: [
      {
        id: "skyscraper_rooftop",
        name: "天台大厦顶层",
        type: "sniper",
        typeName: "狙击点/空降点",
        position: { x: 70, y: 20 },
        description: "最高建筑的屋顶，可俯瞰整个地图或作为空降起始点",
        icon: "🏙️"
      },
      {
        id: "metro_station",
        name: "中央地铁站",
        type: "objective",
        typeName: "交通枢纽",
        position: { x: 50, y: 55 },
        importance: "high",
        importanceName: "极高",
        description: "连接地图各区域的地下交通枢纽，必争之地",
        icon: "🚇"
      },
      {
        id: "financial_district",
        name: "金融区街道",
        type: "cover",
        typeName: "巷战区域",
        position: { x: 35, y: 60 },
        description: "高楼林立的狭窄街道，典型的城市巷战环境",
        icon: "🏢"
      }
    ],
    
    generalTips: [
      "🏙️ 垂直作战是这个地图的特色，善用高空优势",
      "🚇 地铁站是转点的最快路径，但也最容易遭遇敌人",
      "🪟 窗户既是射击位也是危险来源",
      "🚗 街道上的车辆可以爆炸，注意利用"
    ],
    
    metadata: {
      lastUpdated: "2026-05-05",
      version: "2.2.0",
      popularity: 98,
      mapSize: "大型"
    }
  },

  {
    id: "jungle_camp",
    name: "丛林营地",
    nameEn: "Jungle Camp",
    modeSupport: ["tdm", "domination", "hq"],
    modeNames: {
      tdm: "团队死斗",
      domination: "占领模式",
      hq: "总部攻防"
    },
    maxPlayers: 24,
    dimensions: { width: 1000, height: 1000 },
    
    assets: {
      overview: "maps/jungle-camp-overview.svg",
      thumbnail: "maps/jungle-camp-thumb.webp"
    },
    
    description: "热带雨林深处的游击队训练营地，茂密植被、溪流和木制建筑构成独特的丛林战场。",
    
    pointsOfInterest: [
      {
        id: "command_hut",
        name: "指挥木屋",
        type: "objective",
        typeName: "战略要点",
        position: { x: 48, y: 45 },
        importance: "high",
        importanceName: "极高",
        team: "neutral",
        description: "营地中央的两层木屋，视野覆盖大部分营地",
        features: ["木制结构可被穿透", "二楼窗户提供良好视野", "底层有地下通道入口"],
        recommendedLoadout: ["突击步枪", "霰弹枪"],
        icon: "🛖"
      },
      {
        id: "river_crossing_jungle",
        name: "丛林溪流",
        type: "objective",
        typeName: "交通要道",
        position: { x: 50, y: 70 },
        importance: "medium",
        importanceName: "中等",
        team: "neutral",
        description: "横穿营地的浅溪，涉水通过时会发出明显水声",
        features: ["涉水减速30%", "水声暴露位置", "两岸有茂密植被掩护"],
        icon: "🌊"
      },
      {
        id: "watchtower_north",
        name: "北瞭望塔",
        type: "sniper",
        typeName: "狙击点",
        position: { x: 50, y: 15 },
        coverLevel: "low",
        coverLevelName: "较低",
        sightlines: ["指挥木屋", "训练场", "溪流北岸"],
        riskLevel: "high",
        riskLevelName: "较高",
        description: "营地北侧的竹制瞭望塔，视野极佳但极易被集火",
        icon: "🔭"
      },
      {
        id: "training_ground",
        name: "训练场",
        type: "cover",
        typeName: "交战区域",
        position: { x: 25, y: 55 },
        density: "medium",
        densityName: "中等",
        description: "开阔的训练场地，散布着障碍物和掩体",
        features: ["轮胎堆掩体", "绳索障碍", "沙袋工事"],
        recommendedWeapons: ["突击步枪", "轻机枪"],
        icon: "🎯"
      },
      {
        id: "underground_bunker",
        name: "地下掩体",
        type: "cover",
        typeName: "隐蔽通道",
        position: { x: 70, y: 50 },
        density: "high",
        densityName: "密集",
        description: "连接指挥木屋和东侧营房的地下通道",
        features: ["光线昏暗", "狭窄通道", "多个出入口"],
        recommendedWeapons: ["霰弹枪", "冲锋枪"],
        icon: "🕳️"
      },
      {
        id: "supply_depot",
        name: "物资仓库",
        type: "loot",
        typeName: "物资点",
        position: { x: 80, y: 30 },
        lootTier: "medium",
        lootTierName: "中级",
        description: "存放弹药和医疗物资的仓库",
        items: ["弹药箱", "医疗包", "手雷", "防弹衣"],
        respawnTime: "90秒",
        icon: "📦"
      }
    ],
    
    tacticalRoutes: [
      {
        id: "jungle_flank_left",
        name: "左侧丛林渗透",
        team: null,
        waypoints: [
          { x: 10, y: 30, action: "从西侧丛林边缘出发" },
          { x: 25, y: 40, action: "利用茂密植被隐蔽前进" },
          { x: 35, y: 48, action: "接近指挥木屋西侧" }
        ],
        estimatedTime: "40秒",
        difficulty: "medium",
        difficultyName: "中等",
        description: "利用丛林植被掩护，从侧翼接近营地核心"
      },
      {
        id: "river_rush",
        name: "溪流快速突进",
        team: null,
        waypoints: [
          { x: 50, y: 90, action: "从南侧出发" },
          { x: 50, y: 75, action: "沿溪流快速推进" },
          { x: 48, y: 55, action: "到达指挥木屋南侧" }
        ],
        estimatedTime: "30秒",
        difficulty: "easy",
        difficultyName: "简单",
        description: "最快的进攻路线，但水声会暴露行踪"
      }
    ],
    
    generalTips: [
      "🌿 茂密植被提供天然隐蔽，但也阻挡视线",
      "💧 涉水会发出声音，谨慎选择渡河时机",
      "🛖 木制建筑可被穿透，不要依赖木墙作为掩体",
      "🐍 注意丛林中的伏击点，敌人可能藏在任何角落",
      "🌧️ 热带阵雨会周期性降低能见度"
    ],
    
    weaponRecommendations: {
      assaultRifle: ["M4A1", "SCAR-H"],
      sniper: ["M24"],
      smg: ["Vector", "MP5"],
      shotgun: ["M1014", "SPAS-12"],
      support: ["M249"]
    },
    
    metadata: {
      lastUpdated: "2026-05-06",
      version: "2.2.0",
      popularity: 85,
      mapSize: "中型"
    }
  },

  {
    id: "port_terminal",
    name: "港口码头",
    nameEn: "Port Terminal",
    modeSupport: ["tdm", "domination", "searchDestroy", "hq"],
    modeNames: {
      tdm: "团队死斗",
      domination: "占领模式",
      searchDestroy: "搜查摧毁",
      hq: "总部攻防"
    },
    maxPlayers: 32,
    dimensions: { width: 1400, height: 1100 },
    
    assets: {
      overview: "maps/port-terminal-overview.svg",
      thumbnail: "maps/port-terminal-thumb.webp"
    },
    
    description: "大型国际货运港口，集装箱迷宫、巨型起重机、仓库和停泊的货轮构成复杂的立体战场。",
    
    pointsOfInterest: [
      {
        id: "container_maze",
        name: "集装箱迷宫",
        type: "cover",
        typeName: "CQC区域",
        position: { x: 40, y: 50 },
        density: "high",
        densityName: "极高",
        description: "由数百个集装箱堆叠而成的迷宫区域，近距离战斗的天堂",
        features: ["多层堆叠（可攀爬）", "无数转角", "集装箱可被穿透"],
        recommendedWeapons: ["冲锋枪", "霰弹枪", "手枪"],
        icon: "📦"
      },
      {
        id: "crane_platform",
        name: "巨型起重机",
        type: "sniper",
        typeName: "狙击点/制高点",
        position: { x: 55, y: 20 },
        coverLevel: "low",
        coverLevelName: "较低",
        sightlines: ["集装箱区", "码头前沿", "仓库区"],
        riskLevel: "high",
        riskLevelName: "较高",
        description: "港口最高的结构，提供无与伦比的视野",
        features: ["可通过梯子攀爬", "操作室提供有限掩护", "可俯瞰80%地图"],
        icon: "🏗️"
      },
      {
        id: "cargo_ship",
        name: "停泊货轮",
        type: "objective",
        typeName: "战略要点",
        position: { x: 85, y: 60 },
        importance: "high",
        importanceName: "极高",
        team: "neutral",
        description: "停靠在码头的大型货轮，多层甲板提供立体作战空间",
        features: ["三层甲板", "船舱内部通道", "船桥制高点"],
        recommendedLoadout: ["突击步枪", "霰弹枪"],
        icon: "🚢"
      },
      {
        id: "warehouse_district",
        name: "仓库区",
        type: "cover",
        typeName: "室内战区",
        position: { x: 20, y: 65 },
        density: "medium",
        densityName: "中等",
        description: "多个大型仓库组成的室内战斗区域",
        features: ["高架货架提供垂直空间", "叉车等可移动掩体", "多个卷帘门入口"],
        recommendedWeapons: ["突击步枪", "轻机枪"],
        icon: "🏭"
      },
      {
        id: "dock_office",
        name: "码头办公室",
        type: "objective",
        typeName: "HQ刷新点",
        position: { x: 50, y: 75 },
        importance: "medium",
        importanceName: "中等",
        team: "neutral",
        description: "码头管理办公楼，HQ模式常见刷新点",
        features: ["两层结构", "面向码头的窗户", "屋顶可上"],
        icon: "🏢"
      },
      {
        id: "fuel_depot",
        name: "燃料储存区",
        type: "loot",
        typeName: "危险物资点",
        position: { x: 70, y: 35 },
        lootTier: "high",
        lootTierName: "高级",
        description: "储存燃料的危险区域，射击油罐会引发爆炸",
        items: ["高级护甲", "火箭筒弹药", "C4炸药"],
        respawnTime: "150秒",
        icon: "⛽"
      }
    ],
    
    tacticalRoutes: [
      {
        id: "container_flank",
        name: "集装箱区渗透",
        team: null,
        waypoints: [
          { x: 25, y: 40, action: "从西侧入口进入集装箱区" },
          { x: 35, y: 48, action: "利用集装箱间隙推进" },
          { x: 48, y: 55, action: "到达集装箱区东侧出口" }
        ],
        estimatedTime: "35秒",
        difficulty: "medium",
        difficultyName: "中等",
        description: "利用集装箱迷宫进行隐蔽渗透"
      },
      {
        id: "ship_assault",
        name: "货轮突击",
        team: null,
        waypoints: [
          { x: 90, y: 70, action: "从码头南侧接近货轮" },
          { x: 85, y: 63, action: "通过舷梯登上甲板" },
          { x: 82, y: 55, action: "逐层清理船舱" }
        ],
        estimatedTime: "50秒",
        difficulty: "hard",
        difficultyName: "困难",
        description: "攻占货轮需要逐层清理，配合闪光弹效果更佳"
      }
    ],
    
    generalTips: [
      "📦 集装箱区是CQC天堂，冲锋枪和霰弹枪优势巨大",
      "🏗️ 起重机是最佳狙击位置，但也是最危险的",
      "🚢 控制货轮等于控制半个码头区域",
      "⛽ 燃料区可被引爆，利用环境击杀敌人",
      "🌊 码头边缘可以下水游泳绕后",
      "🔊 金属地面脚步声传播更远，注意隐蔽"
    ],
    
    weaponRecommendations: {
      assaultRifle: ["M4A1", "AK-47", "SCAR-H"],
      sniper: ["AWM", "M24"],
      smg: ["Vector", "MP5", "P90"],
      shotgun: ["SPAS-12", "M1014"],
      support: ["M249"]
    },
    
    metadata: {
      lastUpdated: "2026-05-07",
      version: "2.2.0",
      popularity: 92,
      mapSize: "大型"
    }
  }
];

/**
 * 根据ID获取地图
 * @param {string} id - 地图ID
 * @returns {Object|null}
 */
export function getMapById(id) {
  return mapsDatabase.find(m => m.id === id) || null;
}

/**
 * 获取所有地图列表
 * @returns {Array}
 */
export function getAllMaps() {
  return mapsDatabase;
}

/**
 * 按支持的模式筛选地图
 * @param {string} mode - 游戏模式
 * @returns {Array}
 */
export function getMapsByMode(mode) {
  if (!mode || mode === 'all') return mapsDatabase;
  return mapsDatabase.filter(m => m.modeSupport.includes(mode));
}

export default mapsDatabase;
