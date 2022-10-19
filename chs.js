/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    ". This enemy force has an Army strength of": ".这支敌军的陆军实力为",
    "About": "关于",
    "Aircraft": "飞机",
    "Aircraft Plant": "飞机厂",
    "All income reduced": "所有收入减少",
    "Allied force": "盟军",
    "Armored Vehicle": "装甲车",
    "Army": "军队",
    "army forces and win $": "军队并赢得$",
    "Army increased by 0 per cycle": "军队每周期增加 0",
    "Attack nation": "攻击敌国",
    "Attacking now will require atleast": "现在进攻至少需要",
    "Attacking now will require 50 army forces and take 0 army to defend and generate $100 income": "现在进攻将需要50军队并采取0军队防守并产生 $100 的收入",
    "Attacking now will require 50 army forces, take 0 army to defend and generate $100 income": "现在进攻需要50个军队，带0个军队防守并产生 $100 的收入",
    "Attacking now will require atleast 2,500 army forces and win up to $200,000. This enemy force has an Army strength of 5,000": "现在进攻将需要至少 2,500 名军队并赢得高达 200,000 $的奖金。这支敌军的陆军兵力为 5,000",
    "Barrack": "营房",
    "Be careful when you take over territory, you need to have enough army income to sustain the losses of defending the territory": "占领领土要小心，你需要有足够的军队收入来承受保卫领土的损失",
    "Boot Camp": "新兵训练营",
    "Build": "建造",
    "Buildings": "建筑",
    "Buy barrack builder": "购买营房建设者",
    "Cash:": "现金：",
    "Changelog: version:": "变更日志：版本：",
    "Changes:": "变化：",
    "Cleaned up some code and fixed some bugs": "清理了一些代码并修复了一些错误",
    "Coming soon..": "敬请期待 ..",
    "Command School": "指挥学校",
    "Commanders": "指挥官",
    "Construct buildings to strengthen your army": "建造建筑物以加强你的军队",
    "Cycle speed upgrades: 0": "循环速度升级：0",
    "Discuss the game on Reddit!": "在 Reddit 上讨论游戏！",
    "Each": "每个",
    "Each barrack builder will construct 1 barrack every cycle (max 999999), but you can no longer buy barracks": "每个营房建造者将在每个周期建造 1 个营房（最多 999999），但您不能再购买营房",
    "Each cycle speed upgrade halves the time of a cycle": "每次循环速度提升，一个循环时间减半",
    "Each upgrade doubles the starting": "每次升级加倍起步",
    "Embassy": "大使馆",
    "Embassy bug fixes and army reduction": "大使馆错误修复和军队减少",
    "Enable detailed text for buildings and upgrades": "启用建筑物和升级的详细文本",
    "Enable max input amount, if you enter a number above current army strength for war": "启用最大输入量，如果您输入的数字高于当前军队的战争兵力",
    "Few more balance changes:": "更多的平衡变化：",
    "Fixed a bug that allowed income to go minus if spamming take over territory": "修复了一个错误，如果垃圾邮件占据了领土，则允许收入减少",
    "Fixed a bug where resetting or prestiging wouldn't work correctly": "修复了重置或声望无法正常工作的错误",
    "FOB": "FOB",
    "for $": "$",
    "Fund development of this game by buying me a coffee, thanks a lot!": "通过请我喝咖啡来资助这个游戏的发展，非常感谢！",
    "Generate Save String": "生成保存字符串",
    "Hangar Ship": "机库船",
    "Help": "帮助",
    "How to play": "怎么玩",
    "increases": "增加",
    "Join the discord server to discuss the game, give feedback or report bugs :)": "加入 discord 服务器讨论游戏，提供反馈或报告错误 :)",
    "Later in development there will be upgrades and buildings that are unreachable without prestige levels, for now it is just in for testing!": "后期开发中会有升级和建筑，如果没有声望等级就无法到达，现在它只是在测试中！",
    "Load from String": "从字符串加载",
    "Loses per cycle: 0": "每个周期的损失：0",
    "Lowered some early game costs": "降低了一些早期游戏成本",
    "Missile Silo": "导弹发射井",
    "Missiles": "导弹",
    "Naval Academy": "海军学院",
    "Navy SEAL": "海豹突击队",
    "Nuclear Missile Silo": "核导弹发射井",
    "Nuclear Missiles": "核导弹",
    "or 999 for buildings, it will automatically set buy amount to max affordable": "或建筑物为 999，它会自动将购买金额设置为最大负担得起",
    "Orbital Cannon": "轨道炮",
    "Owning more territory will also cause soldiers to die by protecting it, causing losses over time": "拥有更多的领土也会因为保护它而导致士兵死亡，随着时间的推移造成损失",
    "per war you have won": "你赢得的每场战争",
    "Prestige": "声望",
    "Prestige level: 0": "声望等级：0",
    "Prestige now!": "现在声望！",
    "Prestige points grant very powerful upgrades, allowing you to progres further and faster!": "声望点给予非常强大的升级，让你进步更快！",
    "Prestige points: 0": "声望点数：0",
    "Prestige! (Beta)": "声望！ （测试版）",
    "Production increased by 0 per": "产量每增加 0",
    "Raising your prestige level requires having": "提高你的声望水平需要有",
    "Recruit": "招募",
    "Reset Game": "重置游戏",
    "s create": " 创建",
    "s for your army": "为你的军队",
    "s on your new territorys": "在你的新领域",
    "s production": "生产",
    "s recruit": "新兵",
    "Shipyard": "船厂",
    "Shooting Range": "射击范围",
    "Sniper team": "狙击小队",
    "Soldier": "士兵",
    "Space Station": "空间站",
    "Squad": "队",
    "strength by": "实力 ",
    "Submarine": "潜艇",
    "Submarine Station": "潜艇站",
    "Take over new Territory": "接管新领土",
    "Tank": "坦克",
    "Tank Plant": "坦克厂",
    "Territory": "领土",
    "Territory: 1": "领土：1",
    "The basics of the game is to build Army strength with buildings.": "游戏的基础是用建筑物来建立军队的实力。",
    "The first version of prestige is here! More features will come soon!": "声望的第一个版本在这里！更多功能即将推出！",
    "The war feature is a random roll between the army you send and the army the enemy has, whoever rolls higher wins, if you roll higher you will lose army equal to his roll.": "战争特点是在你派出的军队和敌人的军队之间随机掷骰，掷得高的人获胜，如果你掷得高，你将失去与他的掷骰相等的军队。",
    "Updated all building price calculations": "更新了所有建筑价格计算",
    "Upgrade": "升级",
    "Upgrade Cycle Speed": "升级周期速度",
    "Upgrade for $": "升级 $",
    "Upgrade your": "升级你的",
    "upgrades": "升级",
    "Use your army to attack other nations, you risk losing the army you send.": "用你的军队攻击其他国家，你可能会失去你派遣的军队。",
    "Use your army to take over new Territory, this will cost army strength but more territory generates more income.": "用你的军队占领新的领土，这将消耗军队的实力，但更多的领土会产生更多的收入。",
    "Warfare": "战争",
    "wars won": "战争胜利",
    "Wars won: 0": "战争胜利：0",
    "Workshop": "作坊",
    "You can only build 1": "你只能建造 1",
    "You can prestige to reset the game, you get (1) prestige point for every time you prestige.": "您可以通过声望重置游戏，每次声望获得 (1) 声望点。",
    "You currently own 0": "您目前拥有 0",
    "You need to enable JavaScript to run this app.": "您需要启用 JavaScript 才能运行此应用程序。",
    "You then use this Army strength to go to war and earn money, or take over new territory to generate income.": "然后你利用这支军队的实力去打仗赚钱，或者占领新的领土来创造收入。",
    "Each Aircraft Plant increases army strength by 1800": "每个飞机厂增加军队实力 1800",
    "Each Barrack increases army strength by 1": "每个兵营增加 1 点军队实力",
    "Each Boot Camp increases army strength by 20": "每个新兵训练营增加 20 点军队实力",
    "Each Command School increases army strength by 500": "每个指挥学校增加军队实力 500",
    "Each FOB increases army strength by 300": "每个 FOB 增加军队实力 300",
    "Each Missile Silo increases army strength by 5000": "每个导弹发射井增加军队实力 5000",
    "Each Naval Academy increases army strength by 150": "每个海军学院增加 150 点军队实力",
    "Each Nuclear Missile Silo increases army strength by 10000": "每个核导弹发射井增加 10000 军队实力",
    "Each Shipyard increases army strength by 2500": "每个造船厂增加 2500 点军队实力",
    "Each Shooting Range increases army strength by 100": "每个射击场增加 100 点军队实力",
    "Each Space Station increases army strength by 50000": "每个空间站增加军力50000",
    "Each Submarine Station increases army strength by 3500": "每个潜艇站增加 3500 点兵力",
    "Each Tank Plant increases army strength by 1500": "每个坦克工厂增加军队实力 1500",
    "Each Workshop increases army strength by 800": "每个车间增加800军队实力",
    "Upgrade Barracks": "升级兵营",
    "You don't have enough army!": "你没有足够的军队！",
    "You must send more army!": "你必须派遣更多的军队！",
    "Upgrade Boot Camps": "升级新兵训练营",
    "Upgrade Shooting Ranges": "升级射击场",
    "You have no prestige points!": "你没有声望点！",
    "Upgrade Naval Academys": "升级海军学院",
    "Upgrade FOBs": "升级 FOBs",
    "Upgrade Command Schools": "升级指挥学校",
    "Upgrade Workshops": "升级车间",
    "Upgrade Tank Plants": "升级坦克厂",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "s": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Cash: $": "现金: $",
    "Cash made: $": "赚的钱: $",
    "Army strength: ": "军队实力：",
    "Barrack Builders: ": "营房建设者：",
    "Army lost: ": "军队损失：",
    "Army strength: ": "军队实力：",
    "Wars won: ": "战争胜利：",
    "Territory: ": "领土：",
    "Loses per cycle: ": "每个周期的损失：",
    "While offline you made $": "离线时，您赚了$",
    "While offline your army increased by ": "当你离线时你的军队增加了 ",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^\+ ([\d\.,]+)$/,
    /^\+ \$([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^You do not have enough army to take over this territory, you need atleast (.+) army strength$/, '你没有足够的军队来占领这片领土，你至少需要 $1 军队实力'],
    [/^Each Aircraft Plant increases army strength by (.+). You gain (.+) army strength per (.+)$/, '每个飞机厂增加 $1 点军队实力。每 $3 $获得 $2 点军队实力'],
    [/^Each Barrack increases army strength by (.+). You gain (.+) army strength per (.+)$/, '每个兵营增加 $1 点军队实力。每 $3 获得 $2 点军队实力'],
    [/^Each Boot Camp increases army strength by (.+). You gain (.+) army strength per (.+)$/, '每个新兵训练营都会增加 $1 点军队实力。每 $3 获得 $2 点军队实力'],
    [/^Each Command School increases army strength by (.+). You gain (.+) army strength per (.+)$/, '每个指挥学校增加 $1 军队实力。你获得 $2 军队实力每 $3'],
    [/^Each FOB increases army strength by (.+). You gain (.+) army strength per (.+)$/, '每个 FOB 增加 $1 军队实力。每 $3 $获得 $2 军队实力'],
    [/^Each Missile Silo increases army strength by (.+). You gain (.+) army strength per (.+)$/, '每个导弹发射井增加 $1 点军队实力。每 $3 $获得 $2 点军队实力'],
    [/^Each Naval Academy increases army strength by (.+). You gain (.+) army strength per (.+)$/, '每个海军学院增加 $1 点军队实力。你获得 $2 点军队实力每 $3'],
    [/^Each Nuclear Missile Silo increases army strength by (.+). You gain (.+) army strength per (.+)$/, '每个核导弹发射井增加 $1 军队实力。你获得 $2 军队实力每 $3'],
    [/^Each Shipyard increases army strength by (.+). You gain (.+) army strength per (.+)$/, '每个造船厂增加 $1 点军队实力。每 $3 获得 $2 点军队实力'],
    [/^Each Shooting Range increases army strength by (.+). You gain (.+) army strength per (.+)$/, '每个射击场增加 $1 点军队实力。每 $3 获得 $2 点军队实力'],
    [/^Each Space Station increases army strength by (.+). You gain (.+) army strength per (.+)$/, '每个空间站增加 $1 军队实力。你获得 $2 军队实力每 $3'],
    [/^Each Submarine Station increases army strength by (.+). You gain (.+) army strength per (.+)$/, '每个潜艇站增加 $1 军队实力。每 $3 获得 $2 点军队实力'],
    [/^Each Tank Plant increases army strength by (.+). You gain (.+) army strength per (.+)$/, '每个坦克工厂增加 $1 点军队实力。每 $3 $获得 $2 点军队实力'],
    [/^Each Workshop increases army strength by (.+). You gain (.+) army strength per (.+)$/, '每个车间增加 $1 军队实力。你获得 $2 军队实力 每 $3'],
    [/^Upgrading now will increase army strength by (.+) per (.+)$/, '现在升级将增加 $1 的军队实力，花费 $2'],
    [/^Your chance of winning with (.+) army vs (.+) army is (.+)$/, '您以 $1 军队 VS $2 敌方军队，获胜的几率为 $3'],
    [/^You do not have enough army income to defend this territory, construct more buildings, you need atleast (.+) army per cycle.$/, '你没有足够的军队收入来保卫这片领土，建造更多的建筑，你每个周期至少需要 $1 军队。'],
    [/^You do not have enough wars won to prestige yet! You need to win (.+) more$/, '你还没有赢得足够多的战争来赢得声望！ 你需要再赢 $1 场'],
    [/^Production increased by (.+) per Workshop$/, '每个 车间 的产量增加了 $1'],
    [/^Production increased by (.+) per Tank Plant$/, '每个 坦克厂 的产量增加了 $1'],
    [/^Production increased by (.+) per FOB$/, '每个 FOB 的产量增加了 $1'],
    [/^Production increased by (.+) per Command School$/, '每个 指挥学校 的产量增加了 $1'],
    [/^Production increased by (.+) per Boot Camp$/, '每个 新兵训练营 的产量增加了 $1'],
    [/^Production increased by (.+) per Shooting Range$/, '每个 射击场 的产量增加了 $1'],
    [/^Production increased by (.+) per Naval Academy$/, '每个 海军学院 的产量增加了 $1'],
    [/^You currently own (.+) Boot Camp upgrades$/, '您当前拥有 $1 新兵训练营升级'],
    [/^You currently own (.+) Boot Camps$/, '您当前拥有 $1 新兵训练营'],
    [/^You currently own (.+) Shooting Ranges$/, '您当前拥有 $1 射击场'],
    [/^You currently own (.+) Workshops$/, '您当前拥有 $1 车间'],
    [/^You currently own (.+) FOBs$/, '您当前拥有 $1 FOBs'],
    [/^You currently own (.+) Embassys$/, '您当前拥有 $1 大使馆'],
    [/^You currently own (.+) Command Schools$/, '您当前拥有 $1 指挥学校'],
    [/^You currently own (.+) Naval Academys$/, '您当前拥有 $1 海军学院'],
    [/^You currently own (.+) Tank Plants$/, '您当前拥有 $1 坦克厂'],
    [/^You currently own (.+) Shooting Range upgrades$/, '您当前拥有 $1 射击场 升级'],
    [/^You currently own (.+) Naval Academy upgrades$/, '您当前拥有 $1 海军学院 升级'],
    [/^You currently own (.+) Workshop upgrades$/, '您当前拥有 $1 车间 升级'],
    [/^You currently own (.+) Tank Plant upgrades$/, '您当前拥有 $1 坦克厂 升级'],
    [/^You currently own (.+) FOB upgrades$/, '您当前拥有 $1 海军学院 升级'],
    [/^You currently own (.+) Command School upgrades$/, '您当前拥有 $1 指挥学校 升级'],
    [/^Attacking now will require atleast (.+) army forces and win up to (.+). This enemy force has an Army strength of (.+)$/, '现在进攻将需要至少 $1 名士兵，并赢得高达 $2 的奖金。 这支敌军的陆军兵力为 $3'],
    [/^Attacking now will require (.+) army forces and take (.+) army to defend and generate (.+) income$/, '现在进攻需要 $1 人军队，需要 $2 人军队防守并产生 $3 的收入'],
    [/^You lost! All of your (.+) army died$/, '你输了！ 你的 $1 军队全部阵亡'],
    [/^You won! You earn (.+) but you lost (.+) army$/, '你赢了！ 你赚了 $1，但你损失了 $2 名士兵'],
    [/^Build (.+) for \$(.+)$/, '建造 $1 个需要 \$ $2'],
    [/^Upgrade for \$(.+)$/, '升级需要 \$ $1'],
    [/^Production increased by (.+) per Barrack$/, '每个兵营的产量提高了 $1'],
    [/^Army increased by (.+) per cycle$/, '军队每周期增加 $1 个'],
    [/^You currently own (.+) Barracks$/, '您目前拥有 $1 个兵营'],
    [/^You currently own (.+) Barrack upgrades$/, '您目前拥有 $1 个兵营升级'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);