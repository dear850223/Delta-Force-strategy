/**
 * 武器数据库 - Weapons Database
 * 三角洲行动游戏全武器数据
 */

const weaponsDatabase = [
  {
    id: "m4a1",
    name: "M4A1突击步枪",
    nameEn: "M4A1 Assault Rifle",
    type: "assaultRifle",
    typeName: "突击步枪",
    rarity: "common",
    rarityName: "普通",
    unlockLevel: 1,
    image: "https://aka.doubaocdn.com/s/vZAl1wOGXd",
    
    stats: {
      damage: 78,
      range: 65,
      fireRate: 85,
      accuracy: 72,
      stability: 68,
      mobility: 75,
      magSize: 60
    },
    
    detailedStats: {
      bodyDamage: [38, 33, 28, 26],
      headMultiplier: 1.8,
      legMultiplier: 0.9,
      bulletVelocity: 780,
      reloadTime: 2.4,
      adsTime: 0.25,
      ttk: { noArmor: 0.64, level1: 0.80, level2: 0.96, level3: 1.12 }
    },
    
    attachments: {
      muzzle: ["补偿器", "消焰器", "消音器"],
      barrel: ["长枪管", "重型枪管", "轻型枪管"],
      laser: ["激光瞄准器", "战术激光"],
      optic: ["红点", "全息", "ACOG 4x", "狙击镜 8x"],
      underbarrel: ["垂直握把", "三角握把", "倾斜握把"],
      stock: ["战术枪托", "轻型枪托"]
    },
    
    recommendedBuilds: [
      {
        name: "中近距离作战",
        description: "适合室内CQC和中等距离交战，平衡性极佳",
        loadout: { muzzle: "补偿器", barrel: "长枪管", laser: "无", optic: "红点", underbarrel: "垂直握把", stock: "战术枪托" },
        playstyle: "aggressive"
      },
      {
        name: "远距离精确射击",
        description: "适合开阔地带和中远距离作战，牺牲机动性换取精准度",
        loadout: { muzzle: "消音器", barrel: "重型枪管", laser: "无", optic: "ACOG 4x", underbarrel: "三角握把", stock: "轻型枪托" },
        playstyle: "defensive"
      }
    ],
    
    skins: [
      { id: "default", name: "默认涂装", isDefault: true },
      { id: "tactical", name: "战术黑", isRare: false },
      { id: "gold", name: "黄金荣耀", isRare: true }
    ],
    
    tips: [
      "新手最友好的突击步枪，后坐力可控",
      "推荐搭配垂直握把以进一步降低后坐力",
      "中近距离3-4发击杀效率极高",
      "换弹时间较长，注意提前换弹时机"
    ],
    
    metadata: {
      lastUpdated: "2026-04-15",
      version: "2.1.0",
      source: "official"
    }
  },
  
  {
    id: "ak47",
    name: "AK-47突击步枪",
    nameEn: "AK-47 Assault Rifle",
    type: "assaultRifle",
    typeName: "突击步枪",
    rarity: "common",
    rarityName: "普通",
    unlockLevel: 1,
    image: "https://aka.doubaocdn.com/s/jn1U1wOGXd",
    
    stats: {
      damage: 88,
      range: 60,
      fireRate: 70,
      accuracy: 65,
      stability: 55,
      mobility: 70,
      magSize: 55
    },
    
    detailedStats: {
      bodyDamage: [42, 38, 35, 31],
      headMultiplier: 2.0,
      legMultiplier: 0.95,
      bulletVelocity: 715,
      reloadTime: 2.8,
      adsTime: 0.29,
      ttk: { noArmor: 0.57, level1: 0.71, level2: 0.86, level3: 1.00 }
    },
    
    attachments: {
      muzzle: ["补偿器", "消焰器", "消音器"],
      barrel: ["长枪管", "重型枪管", "稳定枪管"],
      laser: ["激光瞄准器", "战术激光"],
      optic: ["红点", "全息", "ACOG 4x", "狙击镜 8x"],
      underbarrel: ["垂直握把", "三角握把", "倾斜握把"],
      stock: ["战术枪托", "轻型枪托"]
    },
    
    recommendedBuilds: [
      {
        name: "高伤害压制",
        description: "最大化单发伤害，适合掩体后点射",
        loadout: { muzzle: "补偿器", barrel: "重型枪管", laser: "无", optic: "红点或无", underbarrel: "垂直握把", stock: "战术枪托" },
        playstyle: "defensive"
      }
    ],
    
    skins: [
      { id: "default", name: "经典木托", isDefault: true },
      { id: "gold", name: "黄金AK", isRare: true }
    ],
    
    tips: [
      "单发伤害最高的突击步枪之一",
      "后坐力较大，建议使用点射模式",
      "近战爆发力极强，配合冲锋战术效果佳",
      "熟练掌握压枪技巧后可胜任各种距离作战"
    ],
    
    metadata: {
      lastUpdated: "2026-04-15",
      version: "2.1.0",
      source: "official"
    }
  },

  {
    id: "mp5",
    name: "MP5冲锋枪",
    nameEn: "MP5 Submachine Gun",
    type: "smg",
    typeName: "冲锋枪",
    rarity: "common",
    rarityName: "普通",
    unlockLevel: 1,
    image: "https://aka.doubaocdn.com/s/DPg31wOGXd",
    
    stats: {
      damage: 65,
      range: 45,
      fireRate: 95,
      accuracy: 75,
      stability: 82,
      mobility: 90,
      magSize: 70
    },
    
    detailedStats: {
      bodyDamage: [28, 25, 22, 18],
      headMultiplier: 1.7,
      legMultiplier: 0.9,
      bulletVelocity: 400,
      reloadTime: 1.8,
      adsTime: 0.20,
      ttk: { noArmor: 0.63, level1: 0.79, level2: 0.95, level3: 1.11 }
    },
    
    attachments: {
      muzzle: ["补偿器", "消音器"],
      barrel: ["长枪管", "轻型枪管"],
      laser: ["激光瞄准器"],
      optic: ["红点", "全息"],
      underbarrel: ["垂直握把", "三角握把"],
      stock: ["战术枪托", "轻型枪托"]
    },
    
    recommendedBuilds: [
      {
        name: "室内突袭",
        description: "极致的近距离战斗力，适合CQC场景",
        loadout: { muzzle: "补偿器", barrel: "长枪管", laser: "激光瞄准器", optic: "红点", underbarrel: "垂直握把", stock: "轻型枪托" },
        playstyle: "aggressive"
      }
    ],
    
    skins: [
      { id: "default", name: "标准型", isDefault: true },
      { id: "navy", name: "海军型", isRare: false }
    ],
    
    tips: [
      "射速最快的冲锋枪之一，近距离无敌",
      "后坐力极低，新手也能轻松控制",
      "有效射程较短，避免远距离交战",
      "高机动性适合快速转点和侧翼包抄"
    ],
    
    metadata: {
      lastUpdated: "2026-04-15",
      version: "2.1.0",
      source: "official"
    }
  },

  {
    id: "awm",
    name: "AWM狙击步枪",
    nameEn: "AWM Sniper Rifle",
    type: "sniper",
    typeName: "狙击枪",
    rarity: "epic",
    rarityName: "史诗",
    unlockLevel: 25,
    image: "https://aka.doubaocdn.com/s/SMxP1wOGXd",
    
    stats: {
      damage: 99,
      range: 95,
      fireRate: 20,
      accuracy: 92,
      stability: 60,
      mobility: 40,
      magSize: 30
    },
    
    detailedStats: {
      bodyDamage: [150, 145, 140, 135],
      headMultiplier: 2.5,
      legMultiplier: 1.0,
      bulletVelocity: 940,
      reloadTime: 4.2,
      adsTime: 0.45,
      ttk: { noArmor: 0.0, level1: 0.0, level2: 0.0, level3: 0.0 } // 一枪必杀
    },
    
    attachments: {
      muzzle: ["消音器", "制退器"],
      barrel: ["加长枪管"],
      laser: ["激光瞄准器"],
      optic: ["狙击镜 8x", "热成像 12x"],
      underbarrel: ["两脚架", "三角握把"],
      stock: ["精密枪托"]
    },
    
    recommendedBuilds: [
      {
        name: "远程猎杀",
        description: "超远距离一击必杀，适合架点防守",
        loadout: { muzzle: "制退器", barrel: "加长枪管", laser: "无", optic: "热成像 12x", underbarrel: "两脚架", stock: "精密枪托" },
        playstyle: "defensive"
      }
    ],
    
    skins: [
      { id: "default", name: "沙漠迷彩", isDefault: true },
      { id: "gold", name: "黄金猎人", isRare: true }
    ],
    
    tips: [
      "唯一能一枪秒杀满级护甲敌人的武器",
      "弹容量极少（5发），必须确保命中率",
      "开镜时间长，提前预瞄敌人可能出现的位置",
      "配备两脚架后稳定性大幅提升"
    ],
    
    metadata: {
      lastUpdated: "2026-04-25",
      version: "2.1.0",
      source: "official"
    }
  },

  {
    id: "spas12",
    name: "SPAS-12霰弹枪",
    nameEn: "SPAS-12 Shotgun",
    type: "shotgun",
    typeName: "霰弹枪",
    rarity: "rare",
    rarityName: "稀有",
    unlockLevel: 15,
    image: "https://aka.doubaocdn.com/s/Kwew1wOGXd",
    
    stats: {
      damage: 90,
      range: 18,
      fireRate: 35,
      accuracy: 45,
      stability: 65,
      mobility: 70,
      magSize: 45
    },
    
    detailedStats: {
      bodyDamage: [100, 65, 40, 22],
      headMultiplier: 1.4,
      legMultiplier: 0.7,
      bulletVelocity: 360,
      reloadTime: 3.0,
      adsTime: 0.32,
      ttk: { noArmor: 0.0, level1: 0.0, level2: 0.40, level3: 0.40 }
    },
    
    attachments: {
      muzzle: ["收束器", "扩散器"],
      barrel: ["短枪管", "长枪管"],
      laser: ["激光瞄准器"],
      optic: ["红点", "全息"],
      underbarrel: ["垂直握把"],
      stock: ["战术枪托"]
    },
    
    recommendedBuilds: [
      {
        name: "破门突击",
        description: "极致的近距离爆发力，一发入魂",
        loadout: { muzzle: "收束器", barrel: "短枪管", laser: "激光瞄准器", optic: "红点", underbarrel: "垂直握把", stock: "战术枪托" },
        playstyle: "aggressive"
      }
    ],
    
    skins: [
      { id: "default", name: "军规绿", isDefault: true },
      { id: "urban", name: "城市灰", isRare: false }
    ],
    
    tips: [
      "近战之王，10米内几乎必定一枪倒地",
      "有效射程极短，超过15米伤害急剧下降",
      "弹匣供弹，换弹速度比逐发装填快",
      "适合室内地图和狭窄通道作战"
    ],
    
    metadata: {
      lastUpdated: "2026-05-04",
      version: "2.2.0",
      source: "official"
    }
  },

  {
    id: "m1911",
    name: "M1911手枪",
    nameEn: "M1911 Pistol",
    type: "pistol",
    typeName: "手枪",
    rarity: "common",
    rarityName: "普通",
    unlockLevel: 1,
    image: "https://aka.doubaocdn.com/s/WX5i1wOGXd",
    
    stats: {
      damage: 58,
      range: 35,
      fireRate: 65,
      accuracy: 78,
      stability: 75,
      mobility: 95,
      magSize: 45
    },
    
    detailedStats: {
      bodyDamage: [32, 28, 24, 20],
      headMultiplier: 2.2,
      legMultiplier: 0.85,
      bulletVelocity: 290,
      reloadTime: 1.5,
      adsTime: 0.18,
      ttk: { noArmor: 0.92, level1: 1.15, level2: 1.38, level3: 1.61 }
    },
    
    attachments: {
      muzzle: ["补偿器", "消音器"],
      barrel: ["长枪管"],
      laser: ["激光瞄准器", "战术激光"],
      optic: ["无"],
      underbarrel: ["无"],
      stock: ["无"]
    },
    
    recommendedBuilds: [
      {
        name: "备用自卫",
        description: "主武器弹药耗尽时的可靠后备",
        loadout: { muzzle: "补偿器", barrel: "长枪管", laser: "激光瞄准器", optic: "无", underbarrel: "无", stock: "无" },
        playstyle: "defensive"
      }
    ],
    
    skins: [
      { id: "default", name: "经典款", isDefault: true },
      { id: "gold", name: "黄金版", isRare: true }
    ],
    
    tips: [
      "作为副武器表现优秀，爆头伤害可观",
      "高精准度使得中距离也有一定威胁",
      "换弹速度快，适合紧急情况",
      "搭配激光瞄准器可大幅提升腰射精度"
    ],
    
    metadata: {
      lastUpdated: "2026-03-28",
      version: "2.0.0",
      source: "official"
    }
  },

  {
    id: "m249",
    name: "M249轻机枪",
    nameEn: "M249 Light Machine Gun",
    type: "lmg",
    typeName: "机枪",
    rarity: "epic",
    rarityName: "史诗",
    unlockLevel: 30,
    image: "https://aka.doubaocdn.com/s/Bi631wOGXd",
    
    stats: {
      damage: 75,
      range: 70,
      fireRate: 80,
      accuracy: 62,
      stability: 48,
      mobility: 35,
      magSize: 95
    },
    
    detailedStats: {
      bodyDamage: [36, 32, 29, 26],
      headMultiplier: 1.7,
      legMultiplier: 0.9,
      bulletVelocity: 850,
      reloadTime: 6.0,
      adsTime: 0.38,
      ttk: { noArmor: 0.67, level1: 0.83, level2: 1.00, level3: 1.17 }
    },
    
    attachments: {
      muzzle: ["补偿器", "制退器"],
      barrel: ["长枪管", "重型枪管"],
      laser: ["激光瞄准器"],
      optic: ["红点", "全息", "ACOG 4x"],
      underbarrel: ["两脚架", "垂直握把"],
      stock: ["重型枪托"]
    },
    
    recommendedBuilds: [
      {
        name: "火力压制",
        description: "持续输出能力最强，适合阵地防守",
        loadout: { muzzle: "制退器", barrel: "重型枪管", laser: "无", optic: "ACOG 4x", underbarrel: "两脚架", stock: "重型枪托" },
        playstyle: "defensive"
      }
    ],
    
    skins: [
      { id: "default", name: "军用绿", isDefault: true },
      { id: "desert", name: "沙漠风暴", isRare: false }
    ],
    
    tips: [
      "100发大弹箱提供极强的持续火力",
      "部署两脚架后稳定性大幅提升",
      "机动性较差，不适合快速移动作战",
      "适合防守固定点位或压制敌方走位"
    ],
    
    metadata: {
      lastUpdated: "2026-04-25",
      version: "2.1.0",
      source: "official"
    }
  },

  {
    id: "p90",
    name: "P90个人防卫武器",
    nameEn: "PDW P90",
    type: "smg",
    typeName: "冲锋枪",
    rarity: "rare",
    rarityName: "稀有",
    unlockLevel: 20,
    image: "https://aka.doubaocdn.com/s/P5Ld1wOGXd",
    
    stats: {
      damage: 62,
      range: 55,
      fireRate: 92,
      accuracy: 78,
      stability: 76,
      mobility: 85,
      magSize: 85
    },
    
    detailedStats: {
      bodyDamage: [26, 24, 21, 18],
      headMultiplier: 1.75,
      legMultiplier: 0.9,
      bulletVelocity: 720,
      reloadTime: 2.2,
      adsTime: 0.22,
      ttk: { noArmor: 0.65, level1: 0.81, level2: 0.98, level3: 1.14 }
    },
    
    attachments: {
      muzzle: ["补偿器", "消音器"],
      barrel: ["长枪管"],
      laser: ["激光瞄准器"],
      optic: ["红点", "全息", "ACOG 4x"],
      underbarrel: ["垂直握把"],
      stock: ["内置枪托"]
    },
    
    recommendedBuilds: [
      {
        name: "全能战士",
        description: "高弹容+高射速+低后坐力的完美结合",
        loadout: { muzzle: "补偿器", barrel: "长枪管", laser: "激光瞄准器", optic: "红点", underbarrel: "垂直握把", stock: "内置枪托" },
        playstyle: "aggressive"
      }
    ],
    
    skins: [
      { id: "default", name: "标准白", isDefault: true },
      { id: "tactical", name: "战术黑", isRare: false }
    ],
    
    tips: [
      "50发超大弹容，几乎不需要换弹",
      "独特的5.7mm子弹穿透力较强",
      "后坐力模式特殊：水平后坐力大于垂直",
      "新手友好度极高的全能型武器"
    ],
    
    metadata: {
      lastUpdated: "2026-04-18",
      version: "2.1.0",
      source: "official"
    }
  },

  {
    id: "scarh",
    name: "SCAR-H战斗步枪",
    nameEn: "SCAR-H Battle Rifle",
    type: "assaultRifle",
    typeName: "突击步枪",
    rarity: "epic",
    rarityName: "史诗",
    unlockLevel: 35,
    image: "https://aka.doubaocdn.com/s/wpRt1wOGXd",
    
    stats: {
      damage: 85,
      range: 75,
      fireRate: 60,
      accuracy: 80,
      stability: 62,
      mobility: 60,
      magSize: 50
    },
    
    detailedStats: {
      bodyDamage: [40, 36, 33, 30],
      headMultiplier: 1.9,
      legMultiplier: 0.9,
      bulletVelocity: 820,
      reloadTime: 2.6,
      adsTime: 0.28,
      ttk: { noArmor: 0.60, level1: 0.75, level2: 0.90, level3: 1.05 }
    },
    
    attachments: {
      muzzle: ["补偿器", "消焰器", "消音器"],
      barrel: ["长枪管", "重型枪管"],
      laser: ["激光瞄准器", "战术激光"],
      optic: ["红点", "全息", "ACOG 4x", "狙击镜 8x"],
      underbarrel: ["垂直握把", "三角握把", "两脚架"],
      stock: ["战术枪托", "精密枪托"]
    },
    
    recommendedBuilds: [
      {
        name: "中距离精确射手",
        description: "利用高精度和伤害在中距离压制敌人",
        loadout: { muzzle: "补偿器", barrel: "长枪管", laser: "无", optic: "ACOG 4x", underbarrel: "两脚架", stock: "精密枪托" },
        playstyle: "defensive"
      },
      {
        name: "近战重火力",
        description: "牺牲射程换取近战爆发力",
        loadout: { muzzle: "消焰器", barrel: "无", laser: "战术激光", optic: "红点", underbarrel: "垂直握把", stock: "战术枪托" },
        playstyle: "aggressive"
      }
    ],
    
    skins: [
      { id: "default", name: "沙漠迷彩", isDefault: true },
      { id: "black", name: "暗夜行动", isRare: false },
      { id: "gold", name: "黄金战将", isRare: true }
    ],
    
    tips: [
      "高伤害+高精度，中距离表现极为出色",
      "射速较慢，需要精确瞄准而非泼水",
      "后坐力偏大但节奏稳定，容易形成肌肉记忆",
      "推荐搭配ACOG进行中远距离精确射击"
    ],
    
    metadata: {
      lastUpdated: "2026-05-05",
      version: "2.2.0",
      source: "official"
    }
  },

  {
    id: "vector",
    name: "Vector冲锋枪",
    nameEn: "Vector SMG",
    type: "smg",
    typeName: "冲锋枪",
    rarity: "rare",
    rarityName: "稀有",
    unlockLevel: 22,
    image: "https://aka.doubaocdn.com/s/XXVz1wOGXd",
    
    stats: {
      damage: 60,
      range: 40,
      fireRate: 98,
      accuracy: 80,
      stability: 78,
      mobility: 92,
      magSize: 65
    },
    
    detailedStats: {
      bodyDamage: [26, 23, 20, 16],
      headMultiplier: 1.65,
      legMultiplier: 0.85,
      bulletVelocity: 380,
      reloadTime: 1.9,
      adsTime: 0.19,
      ttk: { noArmor: 0.55, level1: 0.69, level2: 0.83, level3: 0.97 }
    },
    
    attachments: {
      muzzle: ["补偿器", "消音器"],
      barrel: ["长枪管", "轻型枪管"],
      laser: ["激光瞄准器"],
      optic: ["红点", "全息"],
      underbarrel: ["垂直握把"],
      stock: ["战术枪托", "轻型枪托"]
    },
    
    recommendedBuilds: [
      {
        name: "近战闪电",
        description: "极致射速+低后坐力，室内无敌",
        loadout: { muzzle: "补偿器", barrel: "长枪管", laser: "激光瞄准器", optic: "红点", underbarrel: "垂直握把", stock: "轻型枪托" },
        playstyle: "aggressive"
      }
    ],
    
    skins: [
      { id: "default", name: "暗影黑", isDefault: true },
      { id: "crimson", name: "深红风暴", isRare: true }
    ],
    
    tips: [
      "全游戏最高射速，近战TTK极短",
      "弹匣消耗极快，注意弹药管理",
      "后坐力模式独特：垂直后坐力极低，水平偏移需注意",
      "搭配激光瞄准器腰射精度极高"
    ],
    
    metadata: {
      lastUpdated: "2026-05-02",
      version: "2.2.0",
      source: "official"
    }
  },

  {
    id: "m24",
    name: "M24狙击步枪",
    nameEn: "M24 Sniper Rifle",
    type: "sniper",
    typeName: "狙击枪",
    rarity: "rare",
    rarityName: "稀有",
    unlockLevel: 18,
    image: "https://aka.doubaocdn.com/s/PwkV1wOGXd",
    
    stats: {
      damage: 92,
      range: 95,
      fireRate: 30,
      accuracy: 92,
      stability: 65,
      mobility: 48,
      magSize: 35
    },
    
    detailedStats: {
      bodyDamage: [120, 115, 110, 105],
      headMultiplier: 2.3,
      legMultiplier: 0.95,
      bulletVelocity: 880,
      reloadTime: 3.5,
      adsTime: 0.38,
      ttk: { noArmor: 0.0, level1: 0.0, level2: 0.0, level3: 0.0 }
    },
    
    attachments: {
      muzzle: ["消音器", "制退器"],
      barrel: ["加长枪管"],
      laser: ["激光瞄准器"],
      optic: ["狙击镜 8x", "ACOG 4x", "热成像 12x"],
      underbarrel: ["两脚架", "三角握把"],
      stock: ["精密枪托"]
    },
    
    recommendedBuilds: [
      {
        name: "灵活狙击手",
        description: "比AWM更快的操作速度，适合机动狙击",
        loadout: { muzzle: "消音器", barrel: "加长枪管", laser: "无", optic: "狙击镜 8x", underbarrel: "三角握把", stock: "精密枪托" },
        playstyle: "defensive"
      }
    ],
    
    skins: [
      { id: "default", name: "林地迷彩", isDefault: true },
      { id: "arctic", name: "极地白", isRare: false }
    ],
    
    tips: [
      "AWM的轻量化替代品，开镜和换弹更快",
      "对2级甲以下敌人可一枪击杀身体",
      "3级甲需要命中头部才能一枪击杀",
      "适合需要频繁换位的机动狙击风格"
    ],
    
    metadata: {
      lastUpdated: "2026-05-03",
      version: "2.2.0",
      source: "official"
    }
  },

  {
    id: "deagle",
    name: "沙漠之鹰手枪",
    nameEn: "Desert Eagle Pistol",
    type: "pistol",
    typeName: "手枪",
    rarity: "epic",
    rarityName: "史诗",
    unlockLevel: 28,
    image: "https://aka.doubaocdn.com/s/AX8U1wOGXd",
    
    stats: {
      damage: 82,
      range: 45,
      fireRate: 40,
      accuracy: 72,
      stability: 50,
      mobility: 90,
      magSize: 35
    },
    
    detailedStats: {
      bodyDamage: [55, 48, 42, 36],
      headMultiplier: 2.4,
      legMultiplier: 0.9,
      bulletVelocity: 420,
      reloadTime: 2.0,
      adsTime: 0.22,
      ttk: { noArmor: 0.50, level1: 0.67, level2: 0.83, level3: 1.00 }
    },
    
    attachments: {
      muzzle: ["补偿器", "制退器"],
      barrel: ["长枪管"],
      laser: ["激光瞄准器"],
      optic: ["红点"],
      underbarrel: ["无"],
      stock: ["无"]
    },
    
    recommendedBuilds: [
      {
        name: "手炮配置",
        description: "最大化单发伤害，副武器中的王者",
        loadout: { muzzle: "制退器", barrel: "长枪管", laser: "激光瞄准器", optic: "红点", underbarrel: "无", stock: "无" },
        playstyle: "aggressive"
      }
    ],
    
    skins: [
      { id: "default", name: "银色经典", isDefault: true },
      { id: "gold", name: "黄金沙鹰", isRare: true },
      { id: "tiger", name: "虎纹限定", isRare: true }
    ],
    
    tips: [
      "手枪中最高伤害，爆头可秒杀无甲敌人",
      "后坐力极大，每发之间需要重新瞄准",
      "7发弹匣，珍惜每一发子弹",
      "适合作为狙击手的近战自卫武器"
    ],
    
    metadata: {
      lastUpdated: "2026-05-06",
      version: "2.2.0",
      source: "official"
    }
  },

  {
    id: "m1014",
    name: "M1014半自动霰弹枪",
    nameEn: "M1014 Semi-Auto Shotgun",
    type: "shotgun",
    typeName: "霰弹枪",
    rarity: "rare",
    rarityName: "稀有",
    unlockLevel: 20,
    image: "https://aka.doubaocdn.com/s/7kiJ1wOGXd",
    
    stats: {
      damage: 90,
      range: 18,
      fireRate: 50,
      accuracy: 45,
      stability: 65,
      mobility: 70,
      magSize: 45
    },
    
    detailedStats: {
      bodyDamage: [100, 65, 40, 22],
      headMultiplier: 1.4,
      legMultiplier: 0.7,
      bulletVelocity: 360,
      reloadTime: 3.0,
      adsTime: 0.32,
      ttk: { noArmor: 0.0, level1: 0.0, level2: 0.40, level3: 0.40 }
    },
    
    attachments: {
      muzzle: ["收束器", "扩散器"],
      barrel: ["短枪管", "长枪管"],
      laser: ["激光瞄准器"],
      optic: ["红点", "全息"],
      underbarrel: ["垂直握把"],
      stock: ["战术枪托"]
    },
    
    recommendedBuilds: [
      {
        name: "连喷压制",
        description: "半自动连射提供持续火力，容错率更高",
        loadout: { muzzle: "收束器", barrel: "长枪管", laser: "激光瞄准器", optic: "红点", underbarrel: "垂直握把", stock: "战术枪托" },
        playstyle: "aggressive"
      }
    ],
    
    skins: [
      { id: "default", name: "军规绿", isDefault: true },
      { id: "urban", name: "城市灰", isRare: false }
    ],
    
    tips: [
      "半自动射击，容错率比SPAS-12更高",
      "弹匣供弹，换弹速度比逐发装填快",
      "有效射程略短于SPAS-12，更偏向室内",
      "连续射击时注意控制散布"
    ],
    
    metadata: {
      lastUpdated: "2026-05-04",
      version: "2.2.0",
      source: "official"
    }
  },

  {
    id: "rpg7",
    name: "RPG-7火箭筒",
    nameEn: "RPG-7 Rocket Launcher",
    type: "launcher",
    typeName: "发射器",
    rarity: "epic",
    rarityName: "史诗",
    unlockLevel: 40,
    image: "https://aka.doubaocdn.com/s/hbT51wOGXd",
    
    stats: {
      damage: 100,
      range: 80,
      fireRate: 10,
      accuracy: 60,
      stability: 40,
      mobility: 25,
      magSize: 20
    },
    
    detailedStats: {
      bodyDamage: [500, 500, 500, 500],
      headMultiplier: 1.0,
      legMultiplier: 1.0,
      bulletVelocity: 120,
      reloadTime: 5.5,
      adsTime: 0.55,
      ttk: { noArmor: 0.0, level1: 0.0, level2: 0.0, level3: 0.0 }
    },
    
    attachments: {
      muzzle: ["无"],
      barrel: ["无"],
      laser: ["无"],
      optic: ["铁瞄", "反射瞄具"],
      underbarrel: ["无"],
      stock: ["无"]
    },
    
    recommendedBuilds: [
      {
        name: "反载具配置",
        description: "专门用于摧毁敌方载具的重型武器",
        loadout: { muzzle: "无", barrel: "无", laser: "无", optic: "铁瞄", underbarrel: "无", stock: "无" },
        playstyle: "defensive"
      }
    ],
    
    skins: [
      { id: "default", name: "军绿色", isDefault: true },
      { id: "gold", name: "金色传说", isRare: true }
    ],
    
    tips: [
      "对载具造成巨额伤害，反载具首选武器",
      "弹道速度慢，需要预判移动目标",
      "爆炸范围大，对步兵也有极强杀伤力",
      "仅携带2发弹药，务必确保命中率",
      "装填时间极长，选择安全位置换弹"
    ],
    
    metadata: {
      lastUpdated: "2026-05-08",
      version: "2.2.0",
      source: "official"
    }
  }
];

/**
 * 按类型获取武器列表
 * @param {string} type - 武器类型
 * @returns {Array}
 */
function getWeaponsByType(type) {
  if (!type || type === 'all') return weaponsDatabase;
  return weaponsDatabase.filter(w => w.type === type);
}

/**
 * 根据ID获取单个武器
 * @param {string} id - 武器ID
 * @returns {Object|null}
 */
function getWeaponById(id) {
  return weaponsDatabase.find(w => w.id === id) || null;
}

/**
 * 获取热门武器排行（按综合评分）
 * @param {number} limit - 返回数量限制
 * @returns {Array}
 */
function getTopWeapons(limit = 10) {
  return [...weaponsDatabase]
    .map(weapon => ({
      ...weapon,
      overallScore: (
        weapon.stats.damage * 0.25 +
        weapon.stats.range * 0.15 +
        weapon.stats.fireRate * 0.2 +
        weapon.stats.accuracy * 0.1 +
        weapon.stats.stability * 0.15 +
        weapon.stats.mobility * 0.1 +
        weapon.stats.magSize * 0.05
      )
    }))
    .sort((a, b) => b.overallScore - a.overallScore)
    .slice(0, limit);
}
