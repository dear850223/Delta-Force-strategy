const fs = require('fs');

const articles = [
  // 新手入门系列 (001-002)
  {id: '001', title: '三角洲行动完全入门指南 - S9赛季版', category: 'beginner', subcat: '#001 入门必读', desc: '从零开始掌握核心玩法，快速成为战场精英。涵盖基础操作、界面解读、模式介绍等全方位内容。', tags: ['#新手指南', '#S9赛季'], author: '战术顾问团队', rating: '4.9', views: '25.8K'},
  {id: '002', title: '零号大坝地图完全攻略 - S9赛季版', category: 'beginner', subcat: '#002 地图入门', desc: '地形结构、资源分布、撤离机制全方位解析。适合新手的第一个地图。', tags: ['#零号大坝', '#地图攻略'], author: '地图专家', rating: '4.8', views: '18.3K'},

  // 武器攻略系列 (003-012)
  {id: '003', title: 'K416突击步枪完全攻略', category: 'weapons', subcat: '#003 T0级武器', desc: 'S9赛季T0级武器，全能首选详细解析。核心配件推荐与改装方案。', tags: ['#K416', '#突击步枪'], author: '武器专家', rating: '4.9', views: '22.1K'},
  {id: '004', title: 'M4A1突击步枪新手指南', category: 'weapons', subcat: '#004 新手神器', desc: '综合性能均衡，低后坐力易上手。凭借灵活改装性成为新手入门神器。', tags: ['#M4A1', '#新手推荐'], author: '武器专家', rating: '4.8', views: '19.5K'},
  {id: '005', title: 'MP7冲锋枪近战无敌指南', category: 'weapons', subcat: '#005 近战无敌', desc: '950RPM顶尖射速，近战秒杀神器。TTK时间缩短至252ms。', tags: ['#MP7', '#冲锋枪'], author: '武器专家', rating: '4.7', views: '17.2K'},
  {id: '006', title: 'AK12突击步枪改装方案', category: 'weapons', subcat: '#006 高伤害', desc: '高伤害突击步枪代表，适合近距离刚枪场景。满配推荐与控枪技巧。', tags: ['#AK12', '#高伤害'], author: '武器专家', rating: '4.6', views: '15.8K'},
  {id: '007', title: 'AWM狙击步枪使用技巧', category: 'weapons', subcat: '#007 狙击利器', desc: '一枪必杀的远程压制利器。胸部以上一枪死，超高伤害射程恐怖。', tags: ['#AWM', '#狙击步枪'], author: '武器专家', rating: '4.9', views: '23.4K'},
  {id: '008', title: 'M249轻机枪阵地防守', category: 'weapons', subcat: '#008 持续火力', desc: '超高的甲伤和肉伤，持续火力输出的重机枪战术。', tags: ['#M249', '#轻机枪'], author: '武器专家', rating: '4.5', views: '14.6K'},
  {id: '009', title: 'Vector冲锋枪突脸攻略', category: 'weapons', subcat: '#009 贴脸专用', desc: '极高射速近战贴脸终极武器。室内贴脸无需开镜腰射即可。', tags: ['#Vector', '#冲锋枪'], author: '武器专家', rating: '4.7', views: '16.9K'},
  {id: '010', title: 'M24狙击步枪中距离压制', category: 'weapons', subcat: '#010 性价比之选', desc: '性价比极高的狙击选择，伤害稳定且获取容易。新手狙击手首选。', tags: ['#M24', '#狙击步枪'], author: '武器专家', rating: '4.6', views: '13.2K'},
  {id: '011', title: 'P90个人防卫武器详解', category: 'weapons', subcat: '#011 独特PDW', desc: '50发大容量弹匣的独特优势，可持续输出时间长。', tags: ['#P90', '#PDW'], author: '武器专家', rating: '4.5', views: '12.7K'},
  {id: '012', title: 'SCAR-H突击步枪进阶', category: 'weapons', subcat: '#012 大口径', desc: '大口径高伤害选择，两枪可打掉同级头盔敌人。全距离适用。', tags: ['#SCAR-H', '#突击步枪'], author: '武器专家', rating: '4.6', views: '14.1K'},

  // 地图战术系列 (013-022)
  {id: '013', title: '长弓溪谷狙击战场攻略', category: 'maps', subcat: '#013 狙击天堂', desc: '面积最大游戏时间最长的地图，22个出生点。狙击手的乐园。', tags: ['#长弓溪谷', '#狙击地图'], author: '地图专家', rating: '4.8', views: '21.3K'},
  {id: '014', title: '航天基地立体作战指南', category: 'maps', subcat: '#014 高风险高收益', desc: '战术强度最高的地图，集室内室外高层地下于一体。', tags: ['#航天基地', '#立体作战'], author: '地图专家', rating: '4.9', views: '28.6K'},
  {id: '015', title: '巴克什巷战地图详解', category: 'maps', subcat: '#015 城镇巷战', desc: '以城镇建筑群为核心的地图，物资密度极高。', tags: ['#巴克什', '#城镇巷战'], author: '地图专家', rating: '4.7', views: '19.8K'},
  {id: '016', title: '潮汐监狱高难度挑战', category: 'maps', subcat: '#016 高准入高回报', desc: '准入价值最高的地图，拥有全游戏最稀有的红装海洋之泪。', tags: ['#潮汐监狱', '#稀有物品'], author: '地图专家', rating: '4.8', views: '24.5K'},
  {id: '017', title: '零号大坝撤离点全解析', category: 'maps', subcat: '#017 撤离体系', desc: '全游戏最丰富的撤离选择：固定撤离、拉闸撤离、付费撤离、秘密撤离。', tags: ['#零号大坝', '#撤离机制'], author: '地图专家', rating: '4.7', views: '18.9K'},
  {id: '018', title: '长弓溪谷资源点分布', category: 'maps', subcat: '#018 资源分布', desc: '雷达站约40个固定物资点但信号屏蔽；钻石皇后酒店常年有人架枪。', tags: ['#长弓溪谷', '#资源分布'], author: '地图专家', rating: '4.6', views: '16.4K'},
  {id: '019', title: '航天基地水下机制利用', category: 'maps', subcat: '#019 新机制', desc: 'S9赛季2.0版本重做新增全域可游的水下区域，共设8个固定上岸点。', tags: ['#航天基地', '#水下机制'], author: '地图专家', rating: '4.8', views: '26.2K'},
  {id: '020', title: '巴克什钥匙房位置大全', category: 'maps', subcat: '#020 钥匙房', desc: '拥有全游戏最多的钥匙房：S级点位如巴别塔和皇家博物馆集中产出顶级道具。', tags: ['#巴克什', '#钥匙房'], author: '地图专家', rating: '4.7', views: '20.1K'},
  {id: '021', title: '潮汐监狱红装获取路线', category: 'maps', subcat: '#021 稀有物品', desc: 'S级点位集中在核心区典狱长室、办公区及电梯井钥匙房，有概率刷出顶级道具。', tags: ['#潮汐监狱', '#红装获取'], author: '地图专家', rating: '4.9', views: '25.8K'},
  {id: '022', title: '五大地图对比与选择建议', category: 'maps', subcat: '#022 地图选择', desc: '零号大坝适合新手启蒙；长弓溪谷适合狙击手；航天基地适合战斗狂人。', tags: ['#地图对比', '#选择建议'], author: '地图专家', rating: '4.8', views: '22.4K'},

  // 干员攻略系列 (023-037)
  {id: '023', title: '红狼干员完全攻略', category: 'operators', subcat: '#023 突击T0', desc: '版本突击天花板，动力外骨骼提升移速与射速，击杀回血续战。跑刀玩法最优选择。', tags: ['#红狼', '#突击兵'], author: '干员专家', rating: '4.9', views: '32.1K'},
  {id: '024', title: '威龙干员爆发突破指南', category: 'operators', subcat: '#024 短距爆发', desc: '侧重短距爆发，喷气背包快速冲刺转移，虎蹲炮击倒集群敌人。', tags: ['#威龙', '#爆发突破'], author: '干员专家', rating: '4.8', views: '28.5K'},
  {id: '025', title: '回响干员信息压制攻略', category: 'operators', subcat: '#025 新干员S9', desc: 'S9新干员回响为侦察T0，四颗干扰道具封锁敌方视野与沟通，声纹感知监听敌人落点。', tags: ['#回响', '#侦察兵', '#S9新干员'], author: '干员专家', rating: '4.9', views: '35.2K'},
  {id: '026', title: '骇爪干员侦查技巧', category: 'operators', subcat: '#026 探点专家', desc: '擅长远程侦察和区域控制，飞刀可标记敌人位置。虽然S9被削弱但近距离协同依然有效。', tags: ['#骇爪', '#侦查'], author: '干员专家', rating: '4.6', views: '19.7K'},
  {id: '027', title: '蜂医干员团队续航指南', category: 'operators', subcat: '#027 治疗核心', desc: '激素枪可远程多目标治疗，蜂巢烟雾弹转化为治疗烟，团战容错率高。', tags: ['#蜂医', '#支援兵'], author: '干员专家', rating: '4.8', views: '26.3K'},
  {id: '028', title: '蛊干员毒雾控制战术', category: 'operators', subcat: '#028 群体干扰', desc: '致盲毒雾冷却缩短至50秒，新增听力压制效果，群体干扰能力质变。', tags: ['#蛊', '#支援兵'], author: '干员专家', rating: '4.7', views: '21.8K'},
  {id: '029', title: '牧羊人干员控场防守', category: 'operators', subcat: '#029 室内霸主', desc: '加强后声波陷阱销毁距离增至100米，大范围控场能力拉满，大招期间近乎无敌。', tags: ['#牧羊人', '#工程兵'], author: '干员专家', rating: '4.8', views: '24.6K'},
  {id: '030', title: '深蓝干员开团承伤攻略', category: 'operators', subcat: '#030 组排核心', desc: '防爆盾可扛伤，钩爪突进能快速开团，大招切枪提升输出，是组排开团核心。', tags: ['#深蓝', '#工程兵'], author: '干员专家', rating: '4.7', views: '22.1K'},
  {id: '031', title: '露娜干员全能探点指南', category: 'operators', subcat: '#031 全能侦察', desc: '探测箭矢可快速定位敌情，电击箭矢封锁路线，适配各类探点任务。', tags: ['#露娜', '#侦察兵'], author: '干员专家', rating: '4.6', views: '18.4K'},
  {id: '032', title: '银翼干员无人机追踪', category: 'operators', subcat: '#032 视觉追踪', desc: '猎鹰无人机现在可以看到远处的脚印，追人防绕后排点一目了然，S9强势崛起。', tags: ['#银翼', '#侦察兵'], author: '干员专家', rating: '4.8', views: '27.9K'},
  {id: '033', title: '疾风干员快速突袭', category: 'operators', subcat: '#033 高机动性', desc: '高机动性突击选择，适合快速转点和侧翼突袭。利用高移速优势打乱敌方阵型。', tags: ['#疾风', '#突击兵'], author: '干员专家', rating: '4.5', views: '16.2K'},
  {id: '034', title: '无名干员暗夜偷袭', category: 'operators', subcat: '#034 隐身刺客', desc: '可进入隐身状态持续8秒移动速度提升，适合绕后偷袭出其不意发起攻击。', tags: ['#无名', '#突击兵'], author: '干员专家', rating: '4.6', views: '17.5K'},
  {id: '035', title: '赛伊德三兄弟信息报告', category: 'operators', subcat: '#035 区域联防', desc: 'S9赛季被削弱，信息报告距离从全图骤降至200米。需要更精确的部署位置。', tags: ['#赛伊德', '#侦察兵'], author: '干员专家', rating: '4.3', views: '14.8K'},
  {id: '036', title: '蝶干员空中支援指南', category: 'operators', subcat: '#036 空中治疗', desc: '可在空中为队友提供治疗支援机动性强，适合在复杂地形中快速响应队友需求。', tags: ['#蝶', '#支援兵'], author: '干员专家', rating: '4.5', views: '15.3K'},
  {id: '037', title: '佐娅干员防御工事', category: 'operators', subcat: '#037 阵地构建', desc: '擅长构建防御工事和阵地可部署掩体和障碍物，适合防守模式和据点争夺战。', tags: ['#佐娅', '#工程兵'], author: '干员专家', rating: '4.4', views: '13.9K'},

  // 进阶技巧系列 (038-052)
  {id: '038', title: '身法微操完全教程', category: 'advanced', subcat: '#038 身法教学', desc: '核心身法：秒蹲摆头连动规避70%爆头线、滑铲接腰射利用无敌帧、晃身Peek减少暴露时间。', tags: ['#身法', '#微操'], author: '资深导师', rating: '4.9', views: '29.4K'},
  {id: '039', title: '控枪与瞄准进阶指南', category: 'advanced', subcat: '#039 控枪指南', desc: '双切取消后摇快速切换武器、中心预瞄法移动时对准敌人可能出现的位置、压枪轨迹修正。', tags: ['#控枪', '#瞄准'], author: '资深导师', rating: '4.8', views: '25.7K'},
  {id: '040', title: '预瞄习惯养成训练', category: 'advanced', subcat: '#040 预瞄训练', desc: '永远将准星放在敌人可能出现的位置，开镜后准星直接锁定目标。练习方法与合格标准详解。', tags: ['#预瞄', '#训练方法'], author: '资深导师', rating: '4.7', views: '22.3K'},
  {id: '041', title: '投掷物精准运用', category: 'advanced', subcat: '#041 投掷物', desc: '烟雾弹制造烟墙隔断视野，闪光弹近距离攻坚致盲，手雷逼出掩体后敌人或封锁路口。', tags: ['#投掷物', '#战术运用'], author: '资深导师', rating: '4.6', views: '19.8K'},
  {id: '042', title: '听声辨位完全指南', category: 'advanced', subcat: '#042 声音定位', desc: '脚步声换弹声呼吸声装备摩擦声都是重要信息。70%的新手阵亡源于移动时的脚步声被捕捉。', tags: ['#声音', '#听音辨位'], author: '资深导师', rating: '4.8', views: '27.1K'},
  {id: '043', title: '经济系统深度解析', category: 'advanced', subcat: '#043 经济管理', desc: '哈夫币是游戏核心货币合理管理物资价值。高价值物品：大红门禁卡曼德尔砖安全箱必护贵重物资。', tags: ['#经济', '#资源管理'], author: '资深导师', rating: '4.7', views: '21.5K'},
  {id: '044', title: '安全箱物资管理', category: 'advanced', subcat: '#044 安全箱策略', desc: '搜到大红门禁卡等贵重物品立即存入安全箱。这是新手积累资源的关键杜绝一夜回到解放前。', tags: ['#安全箱', '#物资保护'], author: '资深导师', rating: '4.6', views: '18.9K'},
  {id: '045', title: '灵敏度设置科学方法', category: 'advanced', subcat: '#045 灵敏度', desc: '镜头灵敏度50-60、开火灵敏度40-50、瞄准灵敏度45左右。在训练场试调至最优设置。', tags: ['#灵敏度', '#设置优化'], author: '资深导师', rating: '4.7', views: '20.4K'},
  {id: '046', title: '快捷键优化配置', category: 'advanced', subcat: '#046 快捷键', desc: 'Alt+左键一秒拾取比手动快3倍；Alt+D+鼠标点击快速丢弃低价值物品；滚轮切换倍率提升效率3倍。', tags: ['#快捷键', '#效率提升'], author: '资深导师', rating: '4.5', views: '17.2K'},
  {id: '047', title: '心理博弈与老六应对', category: 'advanced', subcat: '#047 心理战', desc: '面对蹲点阴人的老六：控场占优时可上前缴掉对方主武器；若对方携带顶配物资则果断清除。', tags: ['#心理博弈', '#反制策略'], author: '资深导师', rating: '4.6', views: '19.5K'},
  {id: '048', title: '团队沟通与配合', category: 'advanced', subcat: '#048 团队沟通', desc: '高效语音协同是制胜关键。报点要准确简洁：方位+距离+敌人数量+装备等级。避免无效信息干扰。', tags: ['#团队沟通', '#协同配合'], author: '资深导师', rating: '4.8', views: '23.7K'},
  {id: '049', title: '跑刀玩法完全指南', category: 'advanced', subcat: '#049 跑刀攻略', desc: '低成本高收益作战方式。推荐干员：红狼搭配MP5冲锋枪。核心思路：快速搜刮基础装备→劝架收割→立即撤离。', tags: ['#跑刀', '#低成本玩法'], author: '资深导师', rating: '4.7', views: '21.3K'},
  {id: '050', title: '全装刚枪阵容搭配', category: 'advanced', subcat: '#050 全装刚枪', desc: '高装备值打法需要强力阵容支撑。推荐：威龙（突击）+回响（侦察）+蛊（支援）+深蓝（工程），室内爆发极强。', tags: ['#全装刚枪', '#阵容搭配'], author: '资深导师', rating: '4.8', views: '25.9K'},
  {id: '051', title: '撤离点判断与选择', category: 'advanced', subcat: '#051 撤离策略', desc: '根据物资价值和剩余时间选择撤离点。特殊撤离点存活率79.3%，固定撤离点仅22.1%。提前规划多条撤离路线。', tags: ['#撤离策略', '#生存保障'], author: '资深导师', rating: '4.7', views: '20.8K'},
  {id: '052', title: '载具使用与战术应用', category: 'advanced', subcat: '#052 载具战术', desc: '长弓溪谷地图大载具是必备工具。可用于快速转移、火力压制、撤离逃生。注意车辆噪音会暴露位置。', tags: ['#载具', '#战术应用'], author: '资深导师', rating: '4.6', views: '18.6K'},

  // 赛季更新系列 (053-062)
  {id: '053', title: 'S9赛季全面更新解析', category: 'season', subcat: '#053 S9总览', desc: 'S9"回声"赛季带来革命性变革：新干员回响加入、干员平衡性大幅调整、地图机制革新、撤离体系重构。', tags: ['#S9赛季', '#版本更新'], author: '版本分析师', rating: '4.9', views: '38.2K'},
  {id: '054', title: 'S9武器平衡性调整', category: 'season', subcat: '#054 武器调整', desc: 'K416、AR-57、AKM成为版本三强。官方调整12把武器属性遵循稳定性优先、伤害次之、适配场景原则。', tags: ['#武器平衡', '#版本强势'], author: '版本分析师', rating: '4.8', views: '32.5K'},
  {id: '055', title: 'S9干员强度重新洗牌', category: 'season', subcat: '#055 干员梯度', desc: 'T0级：红狼、威龙、回响、骇爪、蜂医、蛊、牧羊人。T1级：疾风、露娜、银翼、蝶、佐娅、深蓝、比特。赛伊德降至T2。', tags: ['#干员梯度', '#强度排行'], author: '版本分析师', rating: '4.9', views: '35.8K'},
  {id: '056', title: '新干员回响技能详解', category: 'season', subcat: '#056 新干员', desc: '被动技能声纹感知增幅扩大声音收集范围；主动技能次声波干扰器5米半径干扰场持续6秒；专属装备回声探测器。', tags: ['#回响', '#技能详解'], author: '版本分析师', rating: '4.9', views: '41.3K'},
  {id: '057', title: 'S9地图机制革新', category: 'season', subcat: '#057 地图更新', desc: '环境交互升级：可破坏墙体、可移动掩体、升降装置。信号屏蔽机制：高价值区域无法标记查看队友位置。', tags: ['#地图机制', '#环境交互'], author: '版本分析师', rating: '4.8', views: '29.7K'},
  {id: '058', title: 'S9撤离体系重构', category: 'season', subcat: '#058 撤离系统', desc: '四大类型：固定撤离（绿标）、拉闸撤离（蓝标）、特殊撤离（白标）、秘密撤离（灰标）。选择直接决定成败。', tags: ['#撤离系统', '#机制重构'], author: '版本分析师', rating: '4.7', views: '27.4K'},
  {id: '059', title: 'S8到S9过渡指南', category: 'season', subcat: '#059 版本过渡', desc: '老玩家需适应：赛伊德全图透视消失、骇爪飞刀效果减半、银翼脚印追踪增强、牧羊人陷阱范围扩大。', tags: ['#版本过渡', '#适应指南'], author: '版本分析师', rating: '4.6', views: '24.1K'},
  {id: '060', title: 'S9经济系统变化', category: 'season', subcat: '#060 经济调整', desc: '部分物价调整收益结构变化。高价值物品获取难度略有提升但整体经济循环更加健康合理。', tags: ['#经济系统', '#物价变化'], author: '版本分析师', rating: '4.5', views: '21.8K'},
  {id: '061', title: 'S9新增内容体验报告', category: 'season', subcat: '#061 新内容实测', desc: '水下机制为战术提供新维度；动态事件增加不确定性；AI势力强化提升挑战难度。整体体验更加丰富立体。', tags: ['#体验报告', '#实测分析'], author: '版本分析师', rating: '4.7', views: '26.5K'},
  {id: '062', title: '版本强势阵容推荐', category: 'season', subcat: '#062 强势阵容', desc: '攻坚流：红狼+回响+蜂医+牧羊人。快攻流：威龙+骇爪+蛊+深蓝。均衡流：红狼+露娜+蜂医+任意工程。', tags: ['#阵容推荐', '#版本强势'], author: '版本分析师', rating: '4.8', views: '31.2K'},

  // PVE模式系列 (063-067)
  {id: '063', title: '黑鹰坠落战役完全攻略', category: 'pve', subcat: '#063 PVE通关', desc: '剧情驱动的合作战役模式玩家组队完成各种任务目标。推荐阵容：均衡配置确保输出治疗控场兼备。', tags: ['#黑鹰坠落', '#合作战役'], author: 'PVE专家', rating: '4.7', views: '22.5K'},
  {id: '064', title: 'BOSS击杀：德穆兰攻略', category: 'pve', subcat: '#064 BOSS攻略', desc: '德穆兰是精英敌人拥有强大火力。攻略要点：利用掩体规避伤害集中火力攻击弱点注意阶段转换机制。', tags: ['#BOSS攻略', '#德穆兰'], author: 'PVE专家', rating: '4.8', views: '25.3K'},
  {id: '065', title: 'BOSS击杀：雷斯攻略', category: 'pve', subcat: '#065 BOSS攻略', desc: '雷斯是强力BOSS战斗策略性强。团队分工明确：坦克拉仇恨输出打伤害治疗保续航。', tags: ['#BOSS攻略', '#雷斯'], author: 'PVE专家', rating: '4.9', views: '28.7K'},
  {id: '066', title: 'BOSS击杀：黑鹰直升机', category: 'pve', subcat: '#066 终极BOSS', desc: '黑鹰直升机是终极BOSS挑战需要充分利用地形和载具。多阶段战斗每个阶段有不同应对策略。', tags: ['#终极BOSS', '#黑鹰直升机'], author: 'PVE专家', rating: '4.9', views: '35.2K'},
  {id: '067', title: 'PVE模式最佳阵容', category: 'pve', subcat: '#067 PVE阵容', desc: '推荐配置：1坦克+2输出+1治疗。干员选择注重技能互补确保持续作战能力和容错率。', tags: ['#PVE阵容', '#最佳配置'], author: 'PVE专家', rating: '4.8', views: '24.6K'},

  // 团队配合系列 (068-077)
  {id: '068', title: '3人小队完美配合', category: 'teamwork', subcat: '#068 三人小队', desc: '野排组队协作技巧：明确分工（突击/侦察/支援）、保持沟通、互相掩护。协同胜率比单走高60%以上。', tags: ['#三人小队', '#野排配合'], author: '团队教练', rating: '4.8', views: '26.4K'},
  {id: '069', title: '双排默契配合指南', category: 'teamwork', subcat: '#069 双人配合', desc: '2人小队战术体系：一人探点一人架枪或一人吸引火力一人绕后。默契配合可弥补人数劣势。', tags: ['#双人配合', '#双排战术'], author: '团队教练', rating: '4.7', views: '23.1K'},
  {id: '070', title: '突击位职责与打法', category: 'teamwork', subcat: '#070 突击职责', desc: '前线突破手的使命：开辟进攻路线、吸引敌方火力、创造击杀机会。需要高机动性和爆发力。', tags: ['#突击位', '#职责分工'], author: '团队教练', rating: '4.6', views: '20.8K'},
  {id: '071', title: '侦察位信息传递', category: 'teamwork', subcat: '#071 侦察职责', desc: '如何有效报点：方位+距离+敌人数量+装备等级+移动方向。信息质量直接影响团队决策效率。', tags: ['#侦察位', '#报点技巧'], author: '团队教练', rating: '4.8', views: '25.9K'},
  {id: '072', title: '支援位时机把握', category: 'teamwork', subcat: '#072 支援职责', desc: '治疗的正确时机：队友血量低于50%时介入交火前预防性治疗撤离时保障全员状态。', tags: ['#支援位', '#治疗时机'], author: '团队教练', rating: '4.7', views: '22.4K'},
  {id: '073', title: '工程位阵地构建', category: 'teamwork', subcat: '#073 工程职责', desc: '陷阱布置与防守：转角阴影处通道两侧是最佳位置。多层布置形成封锁线限制敌方推进。', tags: ['#工程位', '#陷阱布置'], author: '团队教练', rating: '4.6', views: '19.7K'},
  {id: '074', title: '攻坚流阵容实战', category: 'teamwork', subcat: '#074 攻坚阵容', desc: '10秒突破卡点阵型：威龙C4炸开掩体→虎蹲炮击倒→红狼突进收割→蜂医续航免疫。机密/绝密模式首选。', tags: ['#攻坚流', '#实战案例'], author: '团队教练', rating: '4.9', views: '30.5K'},
  {id: '075', title: '快攻流阵容运作', category: 'teamwork', subcat: '#075 快攻阵容', desc: '室内快速清房组合：威龙先手爆发→疾风跟进补枪→蛊毒雾封路→蝶空中支援。全程压缩对手反应空间。', tags: ['#快攻流', '#清房战术'], author: '团队教练', rating: '4.8', views: '27.8K'},
  {id: '076', title: '防守流阵容折磨对手', category: 'teamwork', subcat: '#076 防守阵容', desc: '阵地消耗战打法：深蓝举盾承伤→比特蜘蛛陷阱→蝶全程续航。三人抱团卡位固守角落反复击退进攻。', tags: ['#防守流', '#阵地消耗'], author: '团队教练', rating: '4.7', views: '24.3K'},
  {id: '077', title: '拉扯流远程消耗', category: 'teamwork', subcat: '#077 拉扯阵容', desc: '信息差远程打击：露娜侦察箭标记→银翼无人机追踪→蜂医后方保障。全队分散站位只打远程消耗。', tags: ['#拉扯流', '#远程消耗'], author: '团队教练', rating: '4.6', views: '21.6K'},

  // 新手进阶系列 (078-087)
  {id: '078', title: '从萌新到中级的跨越', category: 'growth', subcat: '#078 成长路径', desc: '第一个月的成长路径：第1周熟悉基础操作→第2-3周练习控枪身法→第1个月精通一张地图→第2个月尝试不同干员组合。', tags: ['#成长路径', '#新手进阶'], author: '成长导师', rating: '4.8', views: '28.9K'},
  {id: '079', title: '常见错误100例纠正', category: 'growth', subcat: '#079 错误纠正', desc: '最常见错误：落地硬刚、背包堆满、单走作战、忽视声音管理、贪图物资不撤离。每个错误都有对应的正确做法。', tags: ['#常见错误', '#纠正方法'], author: '成长导师', rating: '4.7', views: '25.4K'},
  {id: '080', title: '训练场高效练习法', category: 'growth', subcat: '#080 训练方法', desc: '固定靶练习控枪→移动靶练习预瞄→实战模拟练身法。每天30分钟训练场1个月可见显著提升。', tags: ['#训练场', '#高效练习'], author: '成长导师', rating: '4.8', views: '23.7K'},
  {id: '081', title: '第一把枪的选择', category: 'growth', subcat: '#081 本命武器', desc: '本命武器寻找指南：尝试多种武器类型找到手感最好的那一款。建议从M4A1或K416开始稳定性高易上手。', tags: ['#本命武器', '#武器选择'], author: '成长导师', rating: '4.7', views: '22.1K'},
  {id: '082', title: '第一次成功撤离', category: 'growth', subcat: '#082 撤离体验', desc: '完整搜刮撤离流程：选落点→快速搜刮→获取装备→规划路线→安全撤离。第一次成功撤离的成就感无与伦比。', tags: ['#首次撤离', '#成就感'], author: '成长导师', rating: '4.6', views: '20.5K'},
  {id: '083', title: '面对高手不慌张', category: 'growth', subcat: '#083 心态调整', desc: '心态调整与应对：不要畏惧高手每次交战都是学习机会。分析失败原因总结经验教训持续改进。', tags: ['#心态调整', '#面对高手'], author: '成长导师', rating: '4.7', views: '21.8K'},
  {id: '084', title: '装备成型速度提升', category: 'growth', subcat: '#084 装备获取', desc: '快速获取高级装备：选择高资源地图掌握搜刮优先级学会劝架战术合理利用跑刀玩法。', tags: ['#装备成型', '#快速获取'], author: '成长导师', rating: '4.6', views: '19.9K'},
  {id: '085', title: '避免常见诈骗陷阱', category: 'growth', subcat: '#085 安全须知', desc: '账号交易安全须知：通过合规渠道交易避免私下转账核实对方身份保留交易证据。', tags: ['#账号安全', '#防骗指南'], author: '成长导师', rating: '4.5', views: '18.3K'},
  {id: '086', title: '游戏术语完全解释', category: 'growth', subcat: '#086 术语速查', desc: '专业词汇速查手册：TTK（击杀时间）、DPS（每秒伤害）、CQB（近距离作战）、拉闸（激活撤离点）等。', tags: ['#术语解释', '#词汇表'], author: '成长导师', rating: '4.6', views: '20.7K'},
  {id: '087', title: '社区资源利用指南', category: 'growth', subcat: '#087 学习资源', desc: '攻略视频论坛推荐：B站抖音NGA论坛等平台有大量优质内容。关注官方公告获取最新资讯。', tags: ['#社区资源', '#学习渠道'], author: '成长导师', rating: '4.7', views: '22.4K'},

  // 高端局系列 (088-097)
  {id: '088', title: '高端局意识培养', category: 'pro', subcat: '#088 意识培养', desc: '职业选手的思维模式：信息收集→局势判断→决策执行→结果复盘。意识比枪法更重要。', tags: ['#高端意识', '#职业思维'], author: '顶级玩家', rating: '4.9', views: '35.6K'},
  {id: '089', title: '1v多反打技巧', category: 'pro', subcat: '#089 以少胜多', desc: '以少胜多的战斗艺术：利用掩体逐个击破投掷物创造机会地形优势最大化心理博弈出其不意。', tags: ['#1v多', '#反打技巧'], author: '顶级玩家', rating: '4.9', views: '38.2K'},
  {id: '090', title: '读预瞄与反预瞄', category: 'pro', subcat: '#090 心理博弈', desc: '心理博弈的高级形式：预判敌人预瞄位置主动改变常规站位制造假象诱导敌人反制敌方预瞄。', tags: ['#预瞄对抗', '#心理博弈'], author: '顶级玩家', rating: '4.8', views: '32.4K'},
  {id: '091', title: '极限距离对枪', category: 'pro', subcat: '#091 远距离战斗', desc: '超远距离命中技巧：选择合适武器（狙击步枪）利用倍镜优势考虑弹道下坠预判敌人移动轨迹。', tags: ['#远距离', '#精准射击'], author: '顶级玩家', rating: '4.8', views: '29.7K'},
  {id: '092', title: '快节奏决策训练', category: 'pro', subcat: '#092 快速决策', desc: '0.5秒内做出正确判断：通过大量实战积累经验形成肌肉记忆减少犹豫时间相信直觉。', tags: ['#快速决策', '#反应训练'], author: '顶级玩家', rating: '4.7', views: '27.3K'},
  {id: '093', title: '职业选手操作拆解', category: 'pro', subcat: '#093 职业技巧', desc: '学习顶尖玩家的细节：观看比赛录像分析操作逻辑模仿关键动作结合自身特点优化。', tags: ['#职业技巧', '#操作分析'], author: '顶级玩家', rating: '4.8', views: '31.5K'},
  {id: '094', title: '录像分析与自我提升', category: 'pro', subcat: '#094 自我提升', desc: '通过回放找问题：记录每局录像定期回顾分析找出失误原因制定改进计划跟踪进步情况。', tags: ['#录像分析', '#自我提升'], author: '顶级玩家', rating: '4.7', views: '26.8K'},
  {id: '095', title: '排位赛上分秘籍', category: 'pro', subcat: '#095 上分方法', desc: '稳定上分的方法论：选择合适阵容保持良好心态专注自身表现持续学习改进避免连败影响。', tags: ['#排位赛', '#上分秘籍'], author: '顶级玩家', rating: '4.8', views: '34.2K'},
  {id: '096', title: '车队组建与管理', category: 'pro', subcat: '#096 固定队伍', desc: '固定队伍运营技巧：找到默契队友明确分工职责建立沟通机制定期训练磨合共同成长进步。', tags: ['#车队组建', '#固定队伍'], author: '顶级玩家', rating: '4.7', views: '28.9K'},
  {id: '097', title: '比赛观战学习要点', category: 'pro', subcat: '#097 观赛学习', desc: '从比赛中汲取经验：关注职业选手决策学习阵容搭配理解战术思路观察细节处理启发创新思维。', tags: ['#观赛学习', '#比赛分析'], author: '顶级玩家', rating: '4.6', views: '25.4K'},

  // 特别专题 (098-100)
  {id: '098', title: '三角洲行动vs其他FPS对比', category: 'special', subcat: '#098 游戏对比', desc: '与塔科夫CODCSGO等对比：三角洲行动的独特优势在于跨端互通深度定制拟真战场。各游戏定位不同。', tags: ['#游戏对比', '#FPS对比'], author: '行业分析师', rating: '4.7', views: '29.6K'},
  {id: '099', title: '游戏未来发展预测', category: 'special', subcat: '#099 版本展望', desc: 'S10及后续版本展望：可能新增地图干员武器载具。持续优化平衡性丰富游戏内容生态。', tags: ['#未来发展', '#版本展望'], author: '行业分析师', rating: '4.6', views: '26.3K'},
  {id: '100', title: '成为顶级玩家的100个习惯', category: 'special', subcat: '#100 习惯养成', desc: '全方位提升checklist：涵盖技术意识心态学习健康等多个维度。每个习惯都是通往顶尖的阶梯。', tags: ['#习惯养成', '#顶级之路'], author: '顶级玩家', rating: '4.9', views: '42.8K'}
];

let html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="三角洲行动攻略文章库 - 收录100篇深度攻略文章，涵盖新手指南、武器攻略、地图战术、干员攻略、进阶技巧等">
  <title>攻略文章库 | DELTA FORCE TACTICAL GUIDE</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Share+Tech+Mono&family=Chakra+Petch:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="css/articles.css">
  <style>
    .article-card { transition: transform 0.2s, box-shadow 0.2s; }
    .article-card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,255,65,0.15); }
    .article-card__header { display: flex; gap: 10px; margin-bottom: 12px; flex-wrap: wrap; }
    .article-card__category { padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; background: linear-gradient(135deg, rgba(0,255,65,0.2), rgba(0,212,255,0.2)); color: #00ff41; border: 1px solid rgba(0,255,65,0.3); }
    .article-card__subcategory { padding: 4px 12px; border-radius: 20px; font-size: 12px; background: rgba(255,255,255,0.05); color: var(--color-text-muted); }
    .article-card__title { margin: 0 0 10px 0; font-size: 18px; line-height: 1.4; }
    .article-card__title a { color: var(--color-text); text-decoration: none; transition: color 0.2s; }
    .article-card__title a:hover { color: var(--color-primary); }
    .article-card__summary { color: var(--color-text-muted); font-size: 14px; line-height: 1.6; margin-bottom: 12px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
    .article-card__tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 12px; }
    .article-card__tag { font-size: 11px; padding: 3px 8px; background: rgba(0,212,255,0.1); color: #00d4ff; border-radius: 4px; }
    .article-card__meta { display: flex; flex-wrap: wrap; gap: 15px; font-size: 13px; color: var(--color-text-muted); }
    .articles-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px; margin-top: 30px; }
    @media (max-width: 768px) { .articles-grid { grid-template-columns: 1fr; } }
    .category-filter { display: flex; flex-wrap: wrap; gap: 10px; margin: 30px 0; justify-content: center; }
    .filter-btn { padding: 10px 20px; border-radius: 25px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; border: 2px solid transparent; background: rgba(255,255,255,0.05); color: var(--color-text-muted); }
    .filter-btn:hover, .filter-btn.active { background: linear-gradient(135deg, rgba(0,255,136,0.2), rgba(0,200,255,0.2)); color: var(--color-primary); border-color: var(--color-accent); }
    .search-container { max-width: 600px; margin: 30px auto; position: relative; }
    .search-input { width: 100%; padding: 15px 50px 15px 25px; border: 2px solid var(--color-border); border-radius: 30px; background: rgba(0,0,0,0.3); color: var(--color-text); font-size: 16px; outline: none; transition: all 0.3s ease; }
    .search-input:focus { border-color: var(--color-accent); box-shadow: 0 0 20px rgba(0,255,136,0.2); }
    .search-icon { position: absolute; right: 20px; top: 50%; transform: translateY(-50%); color: var(--color-text-muted); }
  </style>
</head>
<body>
  <nav class="navbar" role="navigation" aria-label="主导航">
    <div class="container navbar__container">
      <a href="index.html" class="navbar__logo"><svg class="navbar__logo-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg><span>DELTA FORCE</span></a>
      <ul class="navbar__menu" id="navMenu">
        <li><a href="index.html" class="navbar__link">首页</a></li>
        <li><a href="maps.html" class="navbar__link">战术地图</a></li>
        <li><a href="articles.html" class="navbar__link active">攻略文章</a></li>
      </ul>
      <button class="navbar__toggle" id="navToggle" aria-label="打开菜单" aria-expanded="false"><span class="navbar__toggle-bar"></span><span class="navbar__toggle-bar"></span><span class="navbar__toggle-bar"></span></button>
    </div>
  </nav>

  <header class="articles-hero">
    <div class="container">
      <div class="articles-hero__content">
        <h1 class="articles-hero__title"><span class="articles-hero__icon">📰</span> 攻略文章库</h1>
        <p class="articles-hero__subtitle">深度战术攻略文章合集 &middot; S9赛季完整版 &middot; 100篇精品内容</p>
        <div class="articles-hero__stats">
          <div class="articles-hero__stat"><span class="articles-hero__stat-value">100</span><span class="articles-hero__stat-label">篇文章</span></div>
          <div class="articles-hero__stat"><span class="articles-hero__stat-value">11</span><span class="articles-hero__stat-label">个分类</span></div>
          <div class="articles-hero__stat"><span class="articles-hero__stat-value">S9</span><span class="articles-hero__stat-label">赛季版本</span></div>
        </div>
      </div>
    </div>
  </header>

  <main class="section">
    <div class="container">
      <div class="search-container">
        <input type="text" class="search-input" placeholder="搜索文章标题、关键词..." id="searchInput">
        <span class="search-icon">🔍</span>
      </div>

      <div class="category-filter">
        <button class="filter-btn active" data-category="all">全部 (100)</button>
        <button class="filter-btn" data-category="beginner">新手入门 (2)</button>
        <button class="filter-btn" data-category="weapons">武器攻略 (10)</button>
        <button class="filter-btn" data-category="maps">地图战术 (10)</button>
        <button class="filter-btn" data-category="operators">干员攻略 (15)</button>
        <button class="filter-btn" data-category="advanced">进阶技巧 (15)</button>
        <button class="filter-btn" data-category="season">赛季更新 (10)</button>
        <button class="filter-btn" data-category="pve">PVE模式 (5)</button>
        <button class="filter-btn" data-category="teamwork">团队配合 (10)</button>
        <button class="filter-btn" data-category="growth">新手进阶 (10)</button>
        <button class="filter-btn" data-category="pro">高端局 (10)</button>
        <button class="filter-btn" data-category="special">特别专题 (3)</button>
      </div>

      <div class="articles-grid" id="articlesGrid">
`;

articles.forEach(art => {
  html += `
        <article class="article-card" data-category="${art.category}">
          <div class="article-card__header"><span class="article-card__category">${art.category === 'beginner' ? '新手入门' : art.category === 'weapons' ? '武器攻略' : art.category === 'maps' ? '地图战术' : art.category === 'operators' ? '干员攻略' : art.category === 'advanced' ? '进阶技巧' : art.category === 'season' ? '赛季更新' : art.category === 'pve' ? 'PVE模式' : art.category === 'teamwork' ? '团队配合' : art.category === 'growth' ? '新手进阶' : art.category === 'pro' ? '高端局' : '特别专题'}</span><span class="article-card__subcategory">${art.subcat}</span></div>
          <h3 class="article-card__title"><a href="guides/article-${art.id}.html">${art.title}</a></h3>
          <p class="article-card__summary">${art.desc}</p>
          <div class="article-card__tags">${art.tags.map(tag => `<span class="article-card__tag">${tag}</span>`).join('')}</div>
          <div class="article-card__meta"><span>📰 ${art.author}</span><span>⭐ ${art.rating}分</span><span>👁️ ${art.views}阅读</span></div>
        </article>`;
});

html += `
      </div>
    </div>
  </main>

  <footer class="footer">
    <div class="container">
      <p>&copy; 2026 DELTA FORCE TACTICAL GUIDE. All rights reserved.</p>
    </div>
  </footer>
</body>
</html>`;

fs.writeFileSync('./articles.html', html);
console.log('✅ 成功生成 articles.html 索引页面！');
console.log(`📊 包含 ${articles.length} 篇文章链接`);
console.log('');
console.log('文章分类统计:');
console.log('- 新手入门: 2篇');
console.log('- 武器攻略: 10篇');
console.log('- 地图战术: 10篇');
console.log('- 干员攻略: 15篇');
console.log('- 进阶技巧: 15篇');
console.log('- 赛季更新: 10篇');
console.log('- PVE模式: 5篇');
console.log('- 团队配合: 10篇');
console.log('- 新手进阶: 10篇');
console.log('- 高端局: 10篇');
console.log('- 特别专题: 3篇');
console.log('');
console.log('总计: 100篇文章 ✅');