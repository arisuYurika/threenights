//==================================================
//  ZPM_LanguageCore.js
//==================================================

/*:
 * @plugindesc [v1.3]        系统 - 多语言核心
 * @author ZPM
 * @help
 * ==================================================
 * 使用注意事项:
 * ==================================================
 * 
 * 语言设置接口为:
 * 
 * LanguageManager.setLanguage(???);
 * 
 * ???      -       0-N
 * 
 * 设置完成后需要刷新场景.
 * 
 * 功能说明:
 * 
 * 本插件通过将文本内容以特定符号分割,实现多语言的效果.
 * 
 * 如有使用YEP_MessageCore插件,请将本插件排后面.
 * 
 * 重要说明:
 * 
 * 简体中文A<)(>EnglishB<)(>日本語C
 * 
 * 其中<)(>为分割符,ABC分别对应三种语言版本的文字内容.
 * 
 * 分割符可自定义.
 * 
 * 本插件默认的语言排序为:
 * 
 * 简体中文,English,日本語,繁体中文,한국어,русский язык
 * 
 * 可通过参数设置修改排序方式.
 * 
 * 排序将影响语种的判定规则.
 * 
 * 语种的多少可以自行决定,要几种就选几种.
 * 
 * 排序后应与文本内容格式对应.
 * 
 * --------------------------------------------------
 * 
 * ==================================================
 * 插件指令:
 * ==================================================
 * 
 * --------------------------------------------------
 * 
 * >多语言功能渗透强度[空格]数值
 * 
 * >setlanguagehacklevel[space]number
 * 
 * 功能说明:设置功能渗透强度等级,数值应为大于0的
 * 正整数,该设置为全局存储变量.
 * 
 * 
 * ==================================================
 * 
 * ==================================================
 * 
 * v1.0         插件完成            2020/06/13
 * 
 * v1.1         结构重写            2021/11/11
 * 
 * v1.2         追加功能渗透强度     2021/11/13
 * 
 * 追加新的插件指令:
 * >多语言功能渗透强度
 * >setlanguagehacklevel
 * 
 * v1.3         修改部分代码        2021/11/21
 * 
 * 移除command111事件判定的兼容
 * 将不支持分支条件中的角色人名判定多语言化
 * 如需使用该功能,需设置对应语言的名称进行判定
 * 
 * ==================================================
 * 
 * @param HackLevel
 * @text 功能渗透强度
 * @type select
 * @option Level 1 功能基本辐射官方编辑器所有内容.
 * @value 1
 * @option Level 2 追加代码库层级支持,能兼容大部分插件.
 * @value 2
 * @option Level 3 追加底层代码(Bitmap)支持,能兼容所有非自写文本绘制代码的插件.
 * @value 3
 * @desc 不同等级之间的区别主要是兼容性和性能消耗,等级越高兼容越强,消耗也越大.修改后请删除全局存储数据.
 * @default 1
 * 
 *  
 * @param TitleLanguageWindow
 * @text 标题菜单选项添加
 * @type boolean
 * @on true
 * @off false
 * @default false
 * @desc 是否在标题菜单添加语言选项栏.
 * 
 * @param MenuLanguageWindow
 * @text 主菜单选项添加
 * @type boolean
 * @on true
 * @off false
 * @default false
 * @desc 是否在主菜单添加语言选项栏.
 * 
 * @param ExtractKey
 * @text 多语言分割关键字
 * @type string
 * @default <)(>
 * @desc 多语种分割符，尽量选择非常用符号组合.
 * 
 * @param IDOrder
 * @text 语种选项排序
 * @type number[]
 * @default ["1","2","3"]
 * @desc 原始排序:["简体中文","English","日本語","繁体中文","한국어","русский язык"]
 * 
 */
//==================================================
//
//      临时全局变量    ZPM.xxx
//		临时局部变量    this._ZPM_xxx
//		存储数据变量    无
//		全局存储变量    ZPM.Global_LanguageCore_LanguageID
//      覆盖重写方法    Game_Actor.prototype.setName
//                      Game_Actor.prototype.nickname
//                      Game_Actor.prototype.profile
//
//==================================================

//==================================================
//**    参数获取    **
//==================================================

var Imported = Imported || {};
Imported.ZPM_LanguageCore = true;
//ZPM为插件参数专用对象
var ZPM = ZPM || {};
ZPM.LanguageCore = {};

//_ZPM为继承函数专用对象
var _ZPM = _ZPM || {};
_ZPM.LanguageCore = {};

ZPM.LanguageCore.parameters = PluginManager.parameters('ZPM_LanguageCore');

ZPM.LanguageCore.HackLevel = Number(ZPM.LanguageCore.parameters['HackLevel'] || 1);
ZPM.LanguageCore.TitleLanguageWindow = String(ZPM.LanguageCore.parameters['TitleLanguageWindow'] || 'false') === 'true';
ZPM.LanguageCore.MenuLanguageWindow = String(ZPM.LanguageCore.parameters['MenuLanguageWindow'] || 'false') === 'true';
ZPM.LanguageCore.ExtractKey = String(ZPM.LanguageCore.parameters['ExtractKey'] || '<)(>');
ZPM.LanguageCore.IDOrder = JSON.parse(ZPM.LanguageCore.parameters['IDOrder'] || '[]');
//==================================================
//**    插件指令    **
//==================================================

var _ZPM_LanguageCore_Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function (command, args) {
    _ZPM_LanguageCore_Game_Interpreter_pluginCommand.call(this, command, args);
    if ((command.toLowerCase() === '>多语言功能渗透强度') || (command.toLowerCase() === '>setlanguagehacklevel')) {
        if (!!args[0]) {
            var num = parseInt(args[0]);
            if (num > 0) {
                ZPM.LanguageCore.HackLevel = num;
                ZPM.Global_LanguageCore_HackLevel = num;
                DataManager.forceSaveGlobalInfo();
            };
        };
    };
};

//==================================================
//**    LanguageManager    **
//**    静态类 包含了语种使用的各种方法    **
//==================================================

function LanguageManager() {
    throw new Error('This is a static class');
};
var $dataLanguage = {};
var $dataClassesBackup = null;
var $dataSkillsBackup = null;
var $dataItemsBackup = null;
var $dataWeaponsBackup = null;
var $dataArmorsBackup = null;
var $dataEnemiesBackup = null;
var $dataTroopsBackup = null;
var $dataStatesBackup = null;
var $dataAnimationsBackup = null;
var $dataSystemBackup = null;

$dataLanguage.language = ["简体中文", "English", "日本語", "繁体中文", "한국어", "русский язык"];
$dataLanguage.fullscreen = ["全屏切换", "Full Screen", "フルスクリーン", "全屏切换", "전체 화면", "полный экран"]
$dataLanguage.SOScreenAlwaysOnTopOn = ["置顶 : 已启用", "AlwaysOnTop : ON", "トップ : オン", "置頂 : 已啟用", "韩语", "俄语"];
$dataLanguage.SOScreenAlwaysOnTopOff = ["置顶 : 已禁用", "AlwaysOnTop : OFF", "トップ : オフ", "置頂 : 已禁用", "韩语", "俄语"];
$dataLanguage.SOCommandName = ["显示设置", "Display settings", "画面の設定", "顯示設置", "화면 설정", "Настройка кадра"];
$dataLanguage.resolutionratio = ["分辨率", "Resolution Ratio", "解像度", "分辨率", "해상도", "разрешающая способность"];
$dataLanguage.currect = ["(目前)", "(At Present)", "(現在)", "(現在)", "(현재)", "(сейчас)"];


LanguageManager._languageId = 1;

Object.defineProperty(LanguageManager, 'languageId', {
    get: function () {
        return this._languageId;
    },
    set: function (value) {
        value = parseInt(value);
        if (value > 0) {
            this._languageId = value;
        } else {
            this._languageId = 1;
        };
    },
    configurable: true
});

LanguageManager.basic = function (basicId) {
    return $dataSystem.terms.basic[basicId] || '';
};

LanguageManager.param = function (paramId) {
    return $dataSystem.terms.params[paramId] || '';
};

LanguageManager.command = function (commandId) {
    return $dataSystem.terms.commands[commandId] || '';
};

LanguageManager.message = function (messageId) {
    return $dataSystem.terms.messages[messageId] || '';
};

LanguageManager.getter = function (method, param) {
    return this.extractWords(this[method](param));
};

LanguageManager.extractWords = function (word) {
    var words = String(word).split(ZPM.LanguageCore.ExtractKey);
    //空字符通过split获得的是第一元素为空字符的数组,因此不可以使用绝对等于判定是否为空字符
    if (words == '') {
        return '';
    };
    var _wl = words.length;
    var _lid = LanguageManager.languageId;
    if (_wl >= _lid) {
        return words[_lid - 1];
    } else {
        return words[0];
    };
};

Object.defineProperty(TextManager, 'currencyUnit', {
    get: function () {
        return LanguageManager.extractWords($dataSystem.currencyUnit);
    },
    configurable: true
});

Object.defineProperties(TextManager, {
    level: { get: function () { return LanguageManager.getter('basic', 0) } },
    levelA: { get: function () { return LanguageManager.getter('basic', 1) } },
    hp: { get: function () { return LanguageManager.getter('basic', 2) } },
    hpA: { get: function () { return LanguageManager.getter('basic', 3) } },
    mp: { get: function () { return LanguageManager.getter('basic', 4) } },
    mpA: { get: function () { return LanguageManager.getter('basic', 5) } },
    tp: { get: function () { return LanguageManager.getter('basic', 6) } },
    tpA: { get: function () { return LanguageManager.getter('basic', 7) } },
    exp: { get: function () { return LanguageManager.getter('basic', 8) } },
    expA: { get: function () { return LanguageManager.getter('basic', 9) } },
    fight: { get: function () { return LanguageManager.getter('command', 0) } },
    escape: { get: function () { return LanguageManager.getter('command', 1) } },
    attack: { get: function () { return LanguageManager.getter('command', 2) } },
    guard: { get: function () { return LanguageManager.getter('command', 3) } },
    item: { get: function () { return LanguageManager.getter('command', 4) } },
    skill: { get: function () { return LanguageManager.getter('command', 5) } },
    equip: { get: function () { return LanguageManager.getter('command', 6) } },
    status: { get: function () { return LanguageManager.getter('command', 7) } },
    formation: { get: function () { return LanguageManager.getter('command', 8) } },
    save: { get: function () { return LanguageManager.getter('command', 9) } },
    gameEnd: { get: function () { return LanguageManager.getter('command', 10) } },
    options: { get: function () { return LanguageManager.getter('command', 11) } },
    weapon: { get: function () { return LanguageManager.getter('command', 12) } },
    armor: { get: function () { return LanguageManager.getter('command', 13) } },
    keyItem: { get: function () { return LanguageManager.getter('command', 14) } },
    equip2: { get: function () { return LanguageManager.getter('command', 15) } },
    optimize: { get: function () { return LanguageManager.getter('command', 16) } },
    clear: { get: function () { return LanguageManager.getter('command', 17) } },
    newGame: { get: function () { return LanguageManager.getter('command', 18) } },
    continue_: { get: function () { return LanguageManager.getter('command', 19) } },
    toTitle: { get: function () { return LanguageManager.getter('command', 21) } },
    cancel: { get: function () { return LanguageManager.getter('command', 22) } },
    buy: { get: function () { return LanguageManager.getter('command', 24) } },
    sell: { get: function () { return LanguageManager.getter('command', 25) } },
    alwaysDash: { get: function () { return LanguageManager.getter('message', 'alwaysDash') } },
    commandRemember: { get: function () { return LanguageManager.getter('message', 'commandRemember') } },
    bgmVolume: { get: function () { return LanguageManager.getter('message', 'bgmVolume') } },
    bgsVolume: { get: function () { return LanguageManager.getter('message', 'bgsVolume') } },
    meVolume: { get: function () { return LanguageManager.getter('message', 'meVolume') } },
    seVolume: { get: function () { return LanguageManager.getter('message', 'seVolume') } },
    possession: { get: function () { return LanguageManager.getter('message', 'possession') } },
    expTotal: { get: function () { return LanguageManager.getter('message', 'expTotal') } },
    expNext: { get: function () { return LanguageManager.getter('message', 'expNext') } },
    saveMessage: { get: function () { return LanguageManager.getter('message', 'saveMessage') } },
    loadMessage: { get: function () { return LanguageManager.getter('message', 'loadMessage') } },
    file: { get: function () { return LanguageManager.getter('message', 'file') } },
    partyName: { get: function () { return LanguageManager.getter('message', 'partyName') } },
    emerge: { get: function () { return LanguageManager.getter('message', 'emerge') } },
    preemptive: { get: function () { return LanguageManager.getter('message', 'preemptive') } },
    surprise: { get: function () { return LanguageManager.getter('message', 'surprise') } },
    escapeStart: { get: function () { return LanguageManager.getter('message', 'escapeStart') } },
    escapeFailure: { get: function () { return LanguageManager.getter('message', 'escapeFailure') } },
    victory: { get: function () { return LanguageManager.getter('message', 'victory') } },
    defeat: { get: function () { return LanguageManager.getter('message', 'defeat') } },
    obtainExp: { get: function () { return LanguageManager.getter('message', 'obtainExp') } },
    obtainGold: { get: function () { return LanguageManager.getter('message', 'obtainGold') } },
    obtainItem: { get: function () { return LanguageManager.getter('message', 'obtainItem') } },
    levelUp: { get: function () { return LanguageManager.getter('message', 'levelUp') } },
    obtainSkill: { get: function () { return LanguageManager.getter('message', 'obtainSkill') } },
    useItem: { get: function () { return LanguageManager.getter('message', 'useItem') } },
    criticalToEnemy: { get: function () { return LanguageManager.getter('message', 'criticalToEnemy') } },
    criticalToActor: { get: function () { return LanguageManager.getter('message', 'criticalToActor') } },
    actorDamage: { get: function () { return LanguageManager.getter('message', 'actorDamage') } },
    actorRecovery: { get: function () { return LanguageManager.getter('message', 'actorRecovery') } },
    actorGain: { get: function () { return LanguageManager.getter('message', 'actorGain') } },
    actorLoss: { get: function () { return LanguageManager.getter('message', 'actorLoss') } },
    actorDrain: { get: function () { return LanguageManager.getter('message', 'actorDrain') } },
    actorNoDamage: { get: function () { return LanguageManager.getter('message', 'actorNoDamage') } },
    actorNoHit: { get: function () { return LanguageManager.getter('message', 'actorNoHit') } },
    enemyDamage: { get: function () { return LanguageManager.getter('message', 'enemyDamage') } },
    enemyRecovery: { get: function () { return LanguageManager.getter('message', 'enemyRecovery') } },
    enemyGain: { get: function () { return LanguageManager.getter('message', 'enemyGain') } },
    enemyLoss: { get: function () { return LanguageManager.getter('message', 'enemyLoss') } },
    enemyDrain: { get: function () { return LanguageManager.getter('message', 'enemyDrain') } },
    enemyNoDamage: { get: function () { return LanguageManager.getter('message', 'enemyNoDamage') } },
    enemyNoHit: { get: function () { return LanguageManager.getter('message', 'enemyNoHit') } },
    evasion: { get: function () { return LanguageManager.getter('message', 'evasion') } },
    magicEvasion: { get: function () { return LanguageManager.getter('message', 'magicEvasion') } },
    magicReflection: { get: function () { return LanguageManager.getter('message', 'magicReflection') } },
    counterAttack: { get: function () { return LanguageManager.getter('message', 'counterAttack') } },
    substitute: { get: function () { return LanguageManager.getter('message', 'substitute') } },
    buffAdd: { get: function () { return LanguageManager.getter('message', 'buffAdd') } },
    debuffAdd: { get: function () { return LanguageManager.getter('message', 'debuffAdd') } },
    buffRemove: { get: function () { return LanguageManager.getter('message', 'buffRemove') } },
    actionFailure: { get: function () { return LanguageManager.getter('message', 'actionFailure') } },

    language: { get: function () { return $dataLanguage.language[ZPM.LanguageCore.IDOrder[LanguageManager.languageId - 1] - 1] } },
    fullscreen: { get: function () { return $dataLanguage.fullscreen[ZPM.LanguageCore.IDOrder[LanguageManager.languageId - 1] - 1] } },
    SOScreenAlwaysOnTopOn: { get: function () { return $dataLanguage.SOScreenAlwaysOnTopOn[ZPM.LanguageCore.IDOrder[LanguageManager.languageId - 1] - 1] } },
    SOScreenAlwaysOnTopOff: { get: function () { return $dataLanguage.SOScreenAlwaysOnTopOff[ZPM.LanguageCore.IDOrder[LanguageManager.languageId - 1] - 1] } },
    SOCommandName: { get: function () { return $dataLanguage.SOCommandName[ZPM.LanguageCore.IDOrder[LanguageManager.languageId - 1] - 1] } },
    resolutionratio: { get: function () { return $dataLanguage.resolutionratio[ZPM.LanguageCore.IDOrder[LanguageManager.languageId - 1] - 1] } },
    currect: { get: function () { return $dataLanguage.currect[ZPM.LanguageCore.IDOrder[LanguageManager.languageId - 1] - 1] } }
});

LanguageManager.setLanguage = function (index) {
    index = parseInt(index);
    index = index > 0 ? index : 1;
    if (this.languageId == index) {
        return;
    };
    this.languageId = index;
    ZPM.Global_LanguageCore_LanguageID = this.languageId;
    DataManager.forceSaveGlobalInfo();
    this.recoverDataBase();
    this.extractDataBase();
    this.refreshActors();
};

LanguageManager.refreshActors = function () {
    if ($gameActors != null) {
        $gameActors._data.forEach(function (actor) {
            if (actor == null || actor == undefined) {
                return;
            };
            actor._name = LanguageManager.extractWords(actor._nameBackup);
        });
    };
};

var _ZPM_LanguageCore_Scene_Boot_start = Scene_Boot.prototype.start;
Scene_Boot.prototype.start = function () {
    LanguageManager.backupDataBase();
    LanguageManager.extractDataBase();
    _ZPM_LanguageCore_Scene_Boot_start.call(this);
};

LanguageManager.backupDataBase = function () {
    $dataSystemBackup = JSON.parse(JSON.stringify($dataSystem));
    $dataClassesBackup = JSON.parse(JSON.stringify($dataClasses));
    $dataSkillsBackup = JSON.parse(JSON.stringify($dataSkills));
    $dataItemsBackup = JSON.parse(JSON.stringify($dataItems));
    $dataWeaponsBackup = JSON.parse(JSON.stringify($dataWeapons));
    $dataArmorsBackup = JSON.parse(JSON.stringify($dataArmors));
    $dataEnemiesBackup = JSON.parse(JSON.stringify($dataEnemies));
    $dataTroopsBackup = JSON.parse(JSON.stringify($dataTroops));
    $dataStatesBackup = JSON.parse(JSON.stringify($dataStates));
    $dataAnimationsBackup = JSON.parse(JSON.stringify($dataAnimations));
};

LanguageManager.recoverDataBase = function () {
    $dataSystem = JSON.parse(JSON.stringify($dataSystemBackup));
    $dataClasses = JSON.parse(JSON.stringify($dataClassesBackup));
    $dataSkills = JSON.parse(JSON.stringify($dataSkillsBackup));
    $dataItems = JSON.parse(JSON.stringify($dataItemsBackup));
    $dataWeapons = JSON.parse(JSON.stringify($dataWeaponsBackup));
    $dataArmors = JSON.parse(JSON.stringify($dataArmorsBackup));
    $dataEnemies = JSON.parse(JSON.stringify($dataEnemiesBackup));
    $dataTroops = JSON.parse(JSON.stringify($dataTroopsBackup));
    $dataStates = JSON.parse(JSON.stringify($dataStatesBackup));
    $dataAnimations = JSON.parse(JSON.stringify($dataAnimationsBackup));
};

LanguageManager.extractDataBase = function () {
    this.extractSystemData();
    this.extractClassesData();
    this.extractSkillsData();
    this.extractItemsData();
    this.extractWeaponsData();
    this.extractArmorsData();
    this.extractEnemiesData();
    this.extractTroopsData();
    this.extractStatesData();
    this.extractAnimationsData();
};

LanguageManager.extractSystemData = function () {
    if ($dataSystem != null) {
        $dataSystem.gameTitle = LanguageManager.extractWords($dataSystem.gameTitle);
        document.title = $dataSystem.gameTitle;
        $dataSystem.armorTypes.forEach(function (value, index, array) {
            array[index] = LanguageManager.extractWords(value);
        });
        $dataSystem.elements.forEach(function (value, index, array) {
            array[index] = LanguageManager.extractWords(value);
        });
        $dataSystem.equipTypes.forEach(function (value, index, array) {
            array[index] = LanguageManager.extractWords(value);
        });
        $dataSystem.skillTypes.forEach(function (value, index, array) {
            array[index] = LanguageManager.extractWords(value);
        });
        $dataSystem.weaponTypes.forEach(function (value, index, array) {
            array[index] = LanguageManager.extractWords(value);
        });
    };
};

LanguageManager.extractClassesData = function () {
    if ($dataClasses != null) {
        $dataClasses.forEach(function (obj) {
            if (obj) {
                obj.name = LanguageManager.extractWords(obj.name);
            };
        });
    };
};

LanguageManager.extractSkillsData = function () {
    if ($dataSkills != null) {
        $dataSkills.forEach(function (obj) {
            if (obj) {
                obj.name = LanguageManager.extractWords(obj.name);
                obj.description = LanguageManager.extractWords(obj.description);
                obj.message1 = LanguageManager.extractWords(obj.message1);
                obj.message2 = LanguageManager.extractWords(obj.message2);
            };
        });
    };
};

LanguageManager.extractItemsData = function () {
    if ($dataItems != null) {
        $dataItems.forEach(function (obj) {
            if (obj) {
                obj.name = LanguageManager.extractWords(obj.name);
                obj.description = LanguageManager.extractWords(obj.description);
            };
        });
    };
};

LanguageManager.extractWeaponsData = function () {
    if ($dataWeapons != null) {
        $dataWeapons.forEach(function (obj) {
            if (obj) {
                obj.name = LanguageManager.extractWords(obj.name);
                obj.description = LanguageManager.extractWords(obj.description);
            };
        });
    };
};

LanguageManager.extractArmorsData = function () {
    if ($dataArmors != null) {
        $dataArmors.forEach(function (obj) {
            if (obj) {
                obj.name = LanguageManager.extractWords(obj.name);
                obj.description = LanguageManager.extractWords(obj.description);
            };
        });
    };
};

LanguageManager.extractEnemiesData = function () {
    if ($dataEnemies != null) {
        $dataEnemies.forEach(function (obj) {
            if (obj) {
                obj.name = LanguageManager.extractWords(obj.name);
            };
        });
    };
};

LanguageManager.extractTroopsData = function () {
    if ($dataTroops != null) {
        $dataTroops.forEach(function (obj) {
            if (obj) {
                obj.name = LanguageManager.extractWords(obj.name);
            };
        });
    };
};

LanguageManager.extractStatesData = function () {
    if ($dataStates != null) {
        $dataStates.forEach(function (obj) {
            if (obj) {
                obj.name = LanguageManager.extractWords(obj.name);
                obj.message1 = LanguageManager.extractWords(obj.message1);
                obj.message2 = LanguageManager.extractWords(obj.message2);
                obj.message3 = LanguageManager.extractWords(obj.message3);
                obj.message4 = LanguageManager.extractWords(obj.message4);
            };
        });
    };
};

LanguageManager.extractAnimationsData = function () {
    if ($dataAnimations != null) {
        $dataAnimations.forEach(function (obj) {
            if (obj) {
                obj.name = LanguageManager.extractWords(obj.name);
            };
        });
    };
};

//==================================================
//**    全局读取    **
//==================================================

if (!_ZPM_Global) {
    var _ZPM_Global = DataManager.loadGlobalInfo();
};

if (!ZPM.Global_LanguageCore_HackLevel) {
    if (_ZPM_Global && _ZPM_Global[0] && _ZPM_Global[0]["_Global_LanguageCore_HackLevel"]) {
        ZPM.Global_LanguageCore_HackLevel = _ZPM_Global[0]["_Global_LanguageCore_HackLevel"];
    } else {
        ZPM.Global_LanguageCore_HackLevel = ZPM.LanguageCore.HackLevel;
    };
};

if (!ZPM.Global_LanguageCore_LanguageID) {
    if (_ZPM_Global && _ZPM_Global[0] && _ZPM_Global[0]["_Global_LanguageCore_LanguageID"]) {
        ZPM.Global_LanguageCore_LanguageID = _ZPM_Global[0]["_Global_LanguageCore_LanguageID"];
    } else {
        ZPM.Global_LanguageCore_LanguageID = 0;
    };
};

ZPM.LanguageCore.HackLevel = ZPM.Global_LanguageCore_HackLevel;
LanguageManager.languageId = ZPM.Global_LanguageCore_LanguageID;
//==================================================
//**    全局存储    **
//==================================================

var _ZPM_LanguageCore_saveGlobal = DataManager.saveGlobalInfo;
DataManager.saveGlobalInfo = function (info) {
    if (!info[0]) {
        info[0] = [];
    };
    info[0]["_Global_LanguageCore_HackLevel"] = ZPM.Global_LanguageCore_HackLevel;
    info[0]["_Global_LanguageCore_LanguageID"] = ZPM.Global_LanguageCore_LanguageID;
    _ZPM_LanguageCore_saveGlobal.call(this, info);
};

if (!DataManager.forceSaveGlobalInfo) {
    DataManager.forceSaveGlobalInfo = function () {
        var globalInfo = this.loadGlobalInfo() || [];
        globalInfo[0] = this.makeSavefileInfo();
        this.saveGlobalInfo(globalInfo);
    };
};

//==================================================
//**    刷新用空场景类    **
//==================================================
if (!Scene_EmptyForRefresh) {
    function Scene_EmptyForRefresh() {
        this.initialize.apply(this, arguments);
    }

    Scene_EmptyForRefresh.prototype = Object.create(Scene_Base.prototype);
    Scene_EmptyForRefresh.prototype.constructor = Scene_EmptyForRefresh;

    Scene_EmptyForRefresh.prototype.initialize = function () {
        Scene_Base.prototype.initialize.call(this);
    };

    Scene_EmptyForRefresh.prototype.create = function () {
    };

    Scene_EmptyForRefresh.prototype.update = function () {
        SceneManager.pop();
    };
};

//==================================================
//**    语言选择窗口类    **
//==================================================

function Window_LanguageSelect() {
    this.initialize.apply(this, arguments);
};

Window_LanguageSelect.prototype = Object.create(Window_Command.prototype);
Window_LanguageSelect.prototype.constructor = Window_LanguageSelect;

Window_LanguageSelect.prototype.initialize = function (x, y) {
    this.clearCommandList();
    this.makeCommandList();
    x = x || 0;
    y = y || 0;
    width = this.windowWidth();
    height = this.windowHeight();
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this.refresh();
    this.select(LanguageManager.languageId - 1);
};

Window_LanguageSelect.prototype.makeCommandList = function () {
    this.addLanguageCommands();
};

Window_LanguageSelect.prototype.getLanguageTable = function () {
    return ZPM.LanguageCore.IDOrder;
};

Window_LanguageSelect.prototype.addLanguageCommands = function () {
    var table = this.getLanguageTable();
    var id = 0;
    for (var i = 0; i < table.length; i++) {
        id = parseInt(table[i]);
        this.addCommand($dataLanguage.language[id - 1], 'language' + i);
    };
    this.addCommand(TextManager.cancel, 'cancel');
};

Window_LanguageSelect.prototype.processOk = function () {
    if (this.isCurrentItemEnabled()) {
        var index = this.index();
        var symbol = this.commandSymbol(index);
        if (this.isLanguageSymbol(symbol)) {
            this.setLanguage(index + 1);
        } else if (symbol == 'cancel') {
            if (this.isCancelEnabled()) {
                this.callHandler('cancel');
            };
        };
        this.playOkSound();
    } else {
        this.playBuzzerSound();
    };
};

Window_LanguageSelect.prototype.setLanguage = function (index) {
    LanguageManager.setLanguage(index);
    SceneManager.push(Scene_EmptyForRefresh);
};

Window_LanguageSelect.prototype.splitSymbol = function (symbol) {
    var arr = symbol.trim().split('language');
    return arr[0];
};

Window_LanguageSelect.prototype.isLanguageSymbol = function (symbol) {
    return symbol.contains('language');
};

Window_LanguageSelect.prototype.windowWidth = function () {
    return 240;
};

Window_LanguageSelect.prototype.windowHeight = function () {
    return Math.min(this.fittingHeight(this.numVisibleRows()), (Graphics.boxHeight - 64));
};

Window_LanguageSelect.prototype.maxCols = function () {
    return 1;
};

Window_LanguageSelect.prototype.itemTextAlign = function () {
    return 'center';
};

Window_LanguageSelect.prototype.refresh = function () {
    Window_Command.prototype.refresh.call(this);
    this.width = this.windowWidth();
    this.height = this.windowHeight();
};

//==================================================
//**    主菜单添加    **
//==================================================

var _ZPM_LanguageCore_Window_MenuCommand_addOriginalCommands = Window_MenuCommand.prototype.addOriginalCommands
Window_MenuCommand.prototype.addOriginalCommands = function () {
    _ZPM_LanguageCore_Window_MenuCommand_addOriginalCommands.call(this);
    if (ZPM.LanguageCore.MenuLanguageWindow) {
        this.addCommand(TextManager.language, 'LanguageSelectWindow');
    };
};

var _ZPM_LanguageCore_Scene_Menu_create = Scene_Menu.prototype.create;
Scene_Menu.prototype.create = function () {
    _ZPM_LanguageCore_Scene_Menu_create.call(this);
    if (ZPM.LanguageCore.MenuLanguageWindow) {
        this.createLanguageSelectWindow();
    };
};

Scene_Menu.prototype.createLanguageSelectWindow = function () {
    this._ZPM_languageSelectWindow = new Window_LanguageSelect();
    this._ZPM_languageSelectWindow.setHandler('cancel', this.onLanguageSelectWindowCancel.bind(this));
    this.addChild(this._ZPM_languageSelectWindow);
    this._ZPM_languageSelectWindow.x = (Graphics.width - this._ZPM_languageSelectWindow.width) / 2;
    this._ZPM_languageSelectWindow.y = (Graphics.height - this._ZPM_languageSelectWindow.height) / 2;
    this._ZPM_languageSelectWindow.hide();
    this._ZPM_languageSelectWindow.close();
};

Scene_Menu.prototype.onLanguageSelectWindowCancel = function () {
    this._ZPM_languageSelectWindow.close();
    this._ZPM_languageSelectWindow.deactivate();
    this._commandWindow.activate();
};

var _ZPM_LanguageCore_Scene_Menu_createCommandWindow = Scene_Menu.prototype.createCommandWindow;
Scene_Menu.prototype.createCommandWindow = function () {
    _ZPM_LanguageCore_Scene_Menu_createCommandWindow.call(this);
    if (ZPM.LanguageCore.MenuLanguageWindow) {
        this._commandWindow.setHandler('LanguageSelectWindow', this.onLanguageSelectWindowOn.bind(this));
    };
};

Scene_Menu.prototype.onLanguageSelectWindowOn = function () {
    this._commandWindow.deactivate();
    this._ZPM_languageSelectWindow.refresh();
    this._ZPM_languageSelectWindow.show();
    this._ZPM_languageSelectWindow.open();
    this._ZPM_languageSelectWindow.x = (Graphics.width - this._ZPM_languageSelectWindow.width) / 2;
    this._ZPM_languageSelectWindow.y = (Graphics.height - this._ZPM_languageSelectWindow.height) / 2;
    this._ZPM_languageSelectWindow.activate();
    this._ZPM_languageSelectWindow.refresh();
};

//==================================================
//**    标题菜单添加    **
//==================================================

var _ZPM_LanguageCore_Scene_Title_createCommandWindow = Scene_Title.prototype.createCommandWindow;
Scene_Title.prototype.createCommandWindow = function () {
    _ZPM_LanguageCore_Scene_Title_createCommandWindow.call(this);
    if (ZPM.LanguageCore.TitleLanguageWindow) {
        this.createLanguageTitleWindow();
    };
};

Scene_Title.prototype.createLanguageTitleWindow = function () {
    this._ZPM_languageSelectWindow = new Window_LanguageSelect();
    this._ZPM_languageSelectWindow.setHandler('cancel', this.onLanguageSelectWindowCancel.bind(this));
    this._commandWindow.setHandler('LanguageSelectWindow', this.onLanguageSelectWindowOn.bind(this));
    this.addChild(this._ZPM_languageSelectWindow);
    this._ZPM_languageSelectWindow.x = (Graphics.width - this._ZPM_languageSelectWindow.width) / 2;
    this._ZPM_languageSelectWindow.y = (Graphics.height - this._ZPM_languageSelectWindow.height) / 2;
    this._ZPM_languageSelectWindow.hide();
    this._ZPM_languageSelectWindow.close();
};

Scene_Title.prototype.onLanguageSelectWindowCancel = function () {
    this._ZPM_languageSelectWindow.deactivate();
    this._ZPM_languageSelectWindow.close();
    this._commandWindow.activate();
};

Scene_Title.prototype.onLanguageSelectWindowOn = function () {
    this._commandWindow.deactivate();
    this._ZPM_languageSelectWindow.refresh();
    this._ZPM_languageSelectWindow.show();
    this._ZPM_languageSelectWindow.open();
    this._ZPM_languageSelectWindow.x = (Graphics.width - this._ZPM_languageSelectWindow.width) / 2;
    this._ZPM_languageSelectWindow.y = (Graphics.height - this._ZPM_languageSelectWindow.height) / 2;
    this._ZPM_languageSelectWindow.activate();
    this._ZPM_languageSelectWindow.refresh();
};

var _ZPM_LanguageCore_Window_TitleCommand_makeCommandList = Window_TitleCommand.prototype.makeCommandList;
Window_TitleCommand.prototype.makeCommandList = function () {
    _ZPM_LanguageCore_Window_TitleCommand_makeCommandList.call(this);
    if (ZPM.LanguageCore.TitleLanguageWindow) {
        this.addCommand(TextManager.language, 'LanguageSelectWindow');
    };
};

//==================================================
//**    MV兼容    **
//==================================================

var _ZPM_LanguageCore_Window_Command_addCommand = Window_Command.prototype.addCommand;
Window_Command.prototype.addCommand = function (name, symbol, enabled, ext) {
    var _name = LanguageManager.extractWords(name);
    _ZPM_LanguageCore_Window_Command_addCommand.call(this, _name, symbol, enabled, ext);
};

var _ZPM_LanguageCore_Game_Actor_initMembers = Game_Actor.prototype.initMembers;
Game_Actor.prototype.initMembers = function () {
    _ZPM_LanguageCore_Game_Actor_initMembers.call(this);
    this._nameBackup = '';
};

var _ZPM_LanguageCore_Game_Actor_setup = Game_Actor.prototype.setup;
Game_Actor.prototype.setup = function (actorId) {
    this._nameBackup = $dataActors[actorId].name;
    _ZPM_LanguageCore_Game_Actor_setup.call(this, actorId);
    this._name = LanguageManager.extractWords(this._nameBackup);
};

Game_Actor.prototype.setName = function (name) {
    this._name = name;
    this._nameBackup = name;
};

Game_Actor.prototype.nickname = function () {
    return LanguageManager.extractWords(this._nickname);
};

Game_Actor.prototype.profile = function () {
    return LanguageManager.extractWords(this._profile);
};

var _ZPM_LanguageCore_Game_Message_add = Game_Message.prototype.add;
Game_Message.prototype.add = function (text) {
    var _text = LanguageManager.extractWords(text);
    _ZPM_LanguageCore_Game_Message_add.call(this, _text);
};

var _ZPM_LanguageCore_Window_Base_drawText = Window_Base.prototype.drawText;
Window_Base.prototype.drawText = function (text, x, y, maxWidth, align) {
    if (ZPM.LanguageCore.HackLevel > 1) {
        text = LanguageManager.extractWords(text);
    };
    _ZPM_LanguageCore_Window_Base_drawText.call(this, text, x, y, maxWidth, align);
};

var _ZPM_LanguageCore_Window_Base_drawTextEx = Window_Base.prototype.drawTextEx;
Window_Base.prototype.drawTextEx = function (text, x, y) {
    if (ZPM.LanguageCore.HackLevel > 1) {
        text = LanguageManager.extractWords(text);
    };
    return _ZPM_LanguageCore_Window_Base_drawTextEx.call(this, text, x, y);
};

var _ZPM_LanguageCore_Bitmap_drawText = Bitmap.prototype.drawText;
Bitmap.prototype.drawText = function (text, x, y, maxWidth, lineHeight, align) {
    if (text !== undefined) {
        if (ZPM.LanguageCore.HackLevel > 2) {
            text = LanguageManager.extractWords(text);
        };
    };
    _ZPM_LanguageCore_Bitmap_drawText.call(this,text, x, y, maxWidth, lineHeight, align);
};

//==================================================
//**    插件兼容    **
//==================================================

//自动换行
if (Imported.YEP_MessageCore) {
    Game_Message.prototype.addText = function (text) {
        var _text = text;
        if ($gameSystem.wordWrap()) {
            _text = '<WordWrap>' + LanguageManager.extractWords(text);
        };
        this.add(_text);
    };
};

//YEP任务插件
if (Imported.YEP_QuestJournal) {
    Window_QuestData.prototype.drawQuestData = function () {
        Window_QuestData._questDataFmt =
            JSON.parse(Yanfly.Param.QuestDataWindow['Quest Data Format'] || "");
        var questData = $dataQuests[this._questId];
        if (!questData) return;
        var fmt = Window_QuestData._questDataFmt;
        fmt = String(fmt).split('\n');
        fmt.forEach(function (value, index, array) {
            array[index] = LanguageManager.extractWords(value);
        });
        fmt = fmt.join('\n');
        var wordwrap = fmt.match(/<(?:WordWrap)>/i);
        var title = LanguageManager.extractWords(questData.name);
        title = title.replace(/\\I\[(\d+)\]/gi, '').trim();
        title = title.replace(/\\C\[(\d+)\]/gi, '').trim();
        var difficulty = LanguageManager.extractWords(questData.difficulty);
        var from =LanguageManager.extractWords(questData.from);
        var location = LanguageManager.extractWords(questData.location);
        var description = LanguageManager.extractWords(this.getQuestDescription());
        var objectives = this.getQuestObjectives(wordwrap);
        var rewards = this.getQuestRewards(wordwrap);
        var subtext = LanguageManager.extractWords(this.getQuestSubtext());
        var text = fmt.format(title, difficulty, from, location, description,
            objectives, rewards, subtext);
        var textState = { index: 0 };
        textState.originalText = text;
        textState.text = this.convertEscapeCharacters(text);
        this.resetFontSettings();

        /** 通过绘制文本计算高度,刷新contents对象再此绘制文本 */
        this.createContents();
        this._allTextHeight = this.drawQuestTextEx(text, 0, 0);
        this.createContents();
        this.drawQuestTextEx(text, 0, 0);
    };

    Window_QuestData.prototype.drawQuestTextEx = function (text, x, y) {
        if (text) {
            var textState = { index: 0, x: x, y: y, left: x };
            textState.text = this.convertEscapeCharacters(text);
            textState.height = this.calcTextHeight(textState, false);
            this.resetFontSettings();
            while (textState.index < textState.text.length) {
                this.processCharacter(textState);
            }
            return textState.y - y + this.lineHeight();
        } else {
            return 0;
        };
    };

    Window_QuestData.prototype.getQuestObjectives = function (wordwrap) {
        var questData = $dataQuests[this._questId];
        var lineData = questData.objectives;
        var visibleObjectives = $gameSystem.getQuestObjectives(this._questId);
        var length = visibleObjectives.length;
        var text = '';
        for (var i = 0; i < length; ++i) {
            if (i > 0) text += wordwrap ? '<br>' : '\n';
            var objectiveId = visibleObjectives[i];
            var key = $gameSystem.getQuestObjectiveStatus(this._questId, objectiveId);
            var fmt = this.settings(key);
            fmt = String(fmt).split('\n');
            fmt.forEach(function (value, index, array) {
                array[index] = LanguageManager.extractWords(value);
            });
            fmt = fmt.join('\n');
            text += LanguageManager.extractWords(fmt.format(JSON.parse(lineData[objectiveId])));
        }
        return text;
    };

    Window_QuestData.prototype.getQuestRewards = function (wordwrap) {
        var questData = $dataQuests[this._questId];
        var lineData = questData.rewards;
        var visibleRewards = $gameSystem.getQuestRewards(this._questId);
        var length = visibleRewards.length;
        var text = '';
        for (var i = 0; i < length; ++i) {
            if (i > 0) text += wordwrap ? '<br>' : '\n';
            var rewardId = visibleRewards[i];
            var key = $gameSystem.getQuestRewardStatus(this._questId, rewardId);
            var fmt = this.settings(key);
            fmt = String(fmt).split('\n');
            fmt.forEach(function (value, index, array) {
                array[index] = LanguageManager.extractWords(value);
            });
            fmt = fmt.join('\n');
            text += LanguageManager.extractWords(fmt.format(JSON.parse(lineData[rewardId])));
        }
        return text;
    };
};

//YEP物品分类
if (Imported.YEP_X_ItemCategories) {
    Window_ItemList.prototype.includes = function (item) {
        switch (this._category) {
            case 'AllItems':
                return DataManager.isItem(item);
                break;
            case 'item':
                return DataManager.isItem(item) && item.itypeId === 1;
                break;
            case 'RegularItems':
                return DataManager.isItem(item) && item.itypeId === 1;
                break;
            case 'keyItem':
                return DataManager.isItem(item) && item.itypeId === 2;
                break;
            case 'HiddenItemA':
                return DataManager.isItem(item) && item.itypeId === 3;
                break;
            case 'HiddenItemB':
                return DataManager.isItem(item) && item.itypeId === 4;
                break;
            case 'Consumable':
                return DataManager.isItem(item) && item.consumable;
                break;
            case 'Nonconsumable':
                return DataManager.isItem(item) && !item.consumable;
                break;
            case 'AlwaysUsable':
                return DataManager.isItem(item) && [0].contains(item.occasion);
                break;
            case 'BattleUsable':
                return DataManager.isItem(item) && [0, 1].contains(item.occasion);
                break;
            case 'FieldUsable':
                return DataManager.isItem(item) && [0, 2].contains(item.occasion);
                break;
            case 'NeverUsable':
                return DataManager.isItem(item) && [3].contains(item.occasion);
                break;
            case 'weapon':
                return DataManager.isWeapon(item);
                break;
            case 'WType':
                return DataManager.isWeapon(item) && item.wtypeId === this._ext;
                break;
            case 'armor':
                return DataManager.isArmor(item);
                break;
            case 'AType':
                return DataManager.isArmor(item) && item.atypeId === this._ext;
                break;
            case 'EType':
                return item && item.etypeId === this._ext;
                break;
            case 'Category':
                if (item) {
                    var words = String(this._ext).split(ZPM.LanguageCore.ExtractKey);
                    if (words == '') {
                        return false;
                    };
                    return words.some(function (category) {
                        return item.itemCategory.contains(category);
                    }, this);
                };
                return false;
            default:
                return false;
        };
    };
};

//MOG动态漂浮文字
if (Imported.MOG_AnimatedText) {
    InfoText.prototype.text = function() {
        return LanguageManager.extractWords(this.data()[6]);
    };
};