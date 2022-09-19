//=================================================================================================
// QTE.js
//=================================================================================================
/*:
 * @plugindesc QTE <MV>
 * @author 芯☆淡茹水
 * @help
 *
 * 〓 说明 〓
 * 
 *     ※注意 ： 该插件设置项未设置任何按键时，将不能启动 QTE ※
 * 
 * 1， 事件调用 QTE ，插件命令 => StartQTE sec keys
 *     sec : QTE时间(秒 ，支持小数)
 *     keys：该次QTE的按键(详见 按键参数的编写)
 * 
 *     事件调用 QTE 结束后，会在 QTE_Manager 储存该次QTE的结果。
 *     结果共 3 种（0：成功； 1：按键错误失败； 2：时间结束）
 *     用事件判断QTE是否成功   => 事件 - 条件 - 脚本: QTE_Manager.result() === 0;
 *     用事件判断QTE是否失败   => 事件 - 条件 - 脚本: QTE_Manager.result() === 1;
 *     用事件判断QTE是否时间到 => 事件 - 条件 - 脚本: QTE_Manager.result() === 2;
 *     快捷判断QTE结果 =>
 *     条件 - 脚本: QTE_Manager.result() === 0;
 *         成功
 *     否则
 *         失败
 *     结束
 * 
 *     成功时获取当前QTE所用的时间 => QTE_Manager.timeSpent();
 *     获取的值为 秒数 ，保留一位小数。
 *     只有在QTE成功时才产生这个值，其他情况下这个值都是 0 。
 * 
 * 2,  QTE 显示的标题文本设置 => 事件 - 脚本：QTE_Manager.setTitleText(text); 
 *     text :文字文本，请用半角引号 '' 或 "" 括起来。
 *     设置文本请在 开始QTE 的插件命令之前设置。
 *     该次QTE结束时，文本将会被清除.
 * 
 * 3， 物品/技能QTE效果
 * 
 *     该插件编写了 4 种 QTE 效果，分别是 闪避， 防御， 暴击和再次攻击。
 *     需要QTE的物品或技能，备注以下 3 项：
 *     A: QTE 时间 => 备注：<QTE_Sec:s>  (s 秒数)
 *     B：QTE 按键(详见 按键参数的编写)
 *     C：QTE 效果 => 备注：<QTE_Effect:e>  (e 效果)
 *        四种效果分别为：
 *        evade  =>  100% 闪避    (只适用于敌人使用的技能，角色进行QTE闪避)
 *        guard  =>  100% 防御    (只适用于敌人使用的技能，角色进行QTE防御)
 *        cri    =>  100% 暴击    (只适用于角色使用的技能)
 *        again  =>  再次攻击     (只适用于角色使用的技能，如果不能满足这个技能再次使用的条件，将不会出现QTE)
 *     例：备注技能为 100% 防御 效果 => <QTE_Effect:guard>
 * 
 * 
 * 〓 按键参数的编写 〓
 *     
 *     QTE 按键参数有 2 种， 按键个数 和 按键队列，实际运用时选择其中一种就行了。
 *     1，按键个数，只是一个数值，表示该次QTE有多少个按键。
 *        具体的按键将会在该插件设置项设置的所有按键里随机。
 *        插件命令时直接写数字，
 *        技能备注时，备注：<QTE_Num:n>  (n 个数)
 * 
 *     2, 按键队列，表示依次序的一组按键。
 *        编写格式为：key1,key2,key3...   (key1 ~ keyn  该插件设置项设置的对应按键名称)
 *        插件命令时直接依照上面格式写，
 *        技能备注时，备注：<QTE_Keys:key1,key2,key3...>
 * 
 *     3，若需要设置 小键盘方向键 按键，请依照规定格式命名，以便脚本自动判断来绘制箭头。
 *        小键盘 左键  => 命名：LEFT
 *        小键盘 右键  => 命名：RIGHT
 *        小键盘 上键  => 命名：UP
 *        小键盘 下键  => 命名：DOWN
 * 
 * 
 * 
 * @param ignoreErrors
 * @type boolean
 * @text 是否忽略按键按错
 * @desc 该状态开启时，按错按键将不会判断QTE失败。
 * @default false
 * 
 * @param anm0
 * @type number
 * @text QTE 按键点击时播放的动画ID
 * @desc QTE 按键点击时播放的动画ID。
 * @default 14
 * 
 * @param anm1
 * @type number
 * @text QTE 成功时播放的动画ID
 * @desc QTE 成功时播放的动画ID。
 * @default 40
 * 
 * @param anm2
 * @type number
 * @text QTE 失败时播放的动画ID
 * @desc QTE 失败时播放的动画ID。
 * @default 56
 * 
 * @param anm3
 * @type number
 * @text QTE 时间到时播放的动画ID
 * @desc QTE 时间到时播放的动画ID。
 * @default 58
 * 
 * @param ------------------------------------
 * 
 * @param key1
 * @text QTE 按键1设置
 * @type struct<Key>
 * @default 
 * 
 * @param key2
 * @text QTE 按键2设置
 * @type struct<Key>
 * @default
 * 
 * @param key3
 * @text QTE 按键3设置
 * @type struct<Key>
 * @default
 * 
 * @param key4
 * @text QTE 按键4设置
 * @type struct<Key>
 * @default
 * 
 * @param key5
 * @text QTE 按键5设置
 * @type struct<Key>
 * @default
 * 
 * @param key6
 * @text QTE 按键6设置
 * @type struct<Key>
 * @default
 * 
 * @param key7
 * @text QTE 按键7设置
 * @type struct<Key>
 * @default
 * 
 * @param key8
 * @text QTE 按键8设置
 * @type struct<Key>
 * @default
 * 
 * @param key9
 * @text QTE 按键9设置
 * @type struct<Key>
 * @default
 * 
 * @param key10
 * @text QTE 按键10设置
 * @type struct<Key>
 * @default
 * 
 * @param key11
 * @text QTE 按键11设置
 * @type struct<Key>
 * @default
 * 
 * @param key12
 * @text QTE 按键12设置
 * @type struct<Key>
 * @default
 * 
 * @param key13
 * @text QTE 按键13设置
 * @type struct<Key>
 * @default
 * 
 * @param key14
 * @text QTE 按键14设置
 * @type struct<Key>
 * @default
 * 
 * @param key15
 * @text QTE 按键15设置
 * @type struct<Key>
 * @default
 * 
 * @param key16
 * @text QTE 按键16设置
 * @type struct<Key>
 * @default
 * 
 * @param key17
 * @text QTE 按键17设置
 * @type struct<Key>
 * @default
 * 
 * @param key18
 * @text QTE 按键18设置
 * @type struct<Key>
 * @default
 * 
 * @param key19
 * @text QTE 按键19设置
 * @type struct<Key>
 * @default
 * 
 * @param key20
 * @text QTE 按键20设置
 * @type struct<Key>
 * @default
 * 
 */
/* ---------------------------------------------------------------------------
 * struct<Key>
 * ---------------------------------------------------------------------------
*/
 /*~struct~Key: 
 *
 * @param KeyName
 * @text 按键名
 * @type text
 * @desc 按键的名称(开始QTE时的按键 或 QTE技能备注的按键 就是这个)。
 * @default 
 * 
 * @param KeyValue
 * @text 键值
 * @type number
 * @desc 这个按键的十进制值（不知道的百度：按键键值）。
 * @default 0
*/
//=================================================================================================
;var XdRsData = XdRsData || {};
XdRsData.qte = XdRsData.qte || {};
XdRsData.qte.parameters = PluginManager.parameters('XdRs_QTE');
//=================================================================================================
XdRsData.qte.getAnmId = function(index) {
    return +this.parameters['anm'+index] || 0;
};
XdRsData.qte.isQteEffective = function(subject) {
    const isActor = subject.isActor();
    const action = subject.currentAction();
    const item = action.item();
    if (!this.isQteItem(item)) return false;
    if (!isActor && !action.isForOpponent()) return false;
    const effect = this.qteItemEffect(item);
    if (['again', 'cri'].contains(effect)) {
        if (!isActor) return false;
        if (effect === 'again') {
            return !action._isAgain && this.canPayDoubleCost(subject, item);
        }
        return true;
    }
    return !isActor;
};
XdRsData.qte.canPayDoubleCost = function(subject, item) {
    if (DataManager.isItem(item)) return $gameParty.numItems(item) >= 2;
    const mp = subject.skillMpCost(item) * 2;
    const tp = subject.skillTpCost(item) * 2;
    return subject.mp >= mp && subject.tp >= tp;
};
XdRsData.qte.isQteItem = function(item) {
    return this.qteItemSec(item) > 0 && this.qteItemKeys(item);
};
XdRsData.qte.qteItemSec = function(item) {
    if (!item || !item.note) return 0;
    return item.note.match(/<QTE_Sec:(\d+)>/) ? parseInt(RegExp.$1) : 0;
};
XdRsData.qte.qteItemKeys = function(item) {
    if (!item || !item.note) return null;
    if (item.note.match(/<QTE_Num:(\d+)>/)) {
        return Math.max(1, parseInt(RegExp.$1));
    }
    if (item.note.match(/<QTE_Keys:(\S+)>/)) {
        return RegExp.$1.split(',');
    }
    return null;
};
XdRsData.qte.qteItemEffect = function(item) {
    if (!this.isQteItem(item)) return null;
    return item.note.match(/<QTE_Effect:(\S+)>/) ? RegExp.$1 : 'evade';
};
//=================================================================================================
Bitmap.setRoundRectPath = function(context, width, height, radius) {
    context.beginPath(0); 
    context.arc(width - radius, height - radius, radius, 0, Math.PI / 2); 
    context.lineTo(radius, height);
    context.arc(radius, height - radius, radius, Math.PI / 2, Math.PI); 
    context.lineTo(0, radius);  
    context.arc(radius, radius, radius, Math.PI, Math.PI * 3 / 2);  
    context.lineTo(width - radius, 0); 
    context.arc(width - radius, radius, radius, Math.PI * 3 / 2, Math.PI * 2);  
    context.lineTo(width, height - radius);
    context.closePath();
};
Bitmap.prototype.fillRoundRect = function(x, y, width, height, radius, lineWidth, strokeColor, fillColor) {         
    if (2 * radius > width || 2 * radius > height) return;
    var context = this._context;
    context.save();
    context.translate(x, y); 
    Bitmap.setRoundRectPath(context, width, height, radius);
    context.lineWidth = lineWidth || 2;
    context.strokeStyle = strokeColor || 'black';
    if (fillColor) {
        context.fillStyle = fillColor;
        context.fill();
    }
    context.stroke();
    context.restore();
    this._baseTexture.update();
};
Bitmap.prototype.drawArrow = function(ox, oy, x1, y1, x2, y2, mx, my, color1, color2) {
    const context = this._context;
    context.save();  
    context.beginPath();  
    context.moveTo(ox, oy);   
    context.lineTo(x1, y1); 
    context.lineTo(mx, my); 
    context.lineTo(x2, y2); 
    context.lineTo(ox, oy);  
    if (color2) {
        context.strokeStyle = color2;
        context.lineWidth = 2; 
        context.stroke(); 
    }
    if (color1) {
        context.fillStyle = color1;
        context.fill(); 
    }
    context.restore();
    this._baseTexture.update();
};
//=================================================================================================
function QTE_Manager() {
    throw new Error("This is a static class");
}
QTE_Manager.setup = function() {
    document.addEventListener('keydown', this.onInputKeyDown.bind(this));
    this._isIgnoreError = !!eval(XdRsData.qte.parameters['ignoreErrors']);
    this._listeners = {};
    this.setupAllKeys();
    this.clearResult();
    this.clear();
};
QTE_Manager.setupAllKeys = function() {
    this._keysData = {};
    for (var i=1;i<50;++i) {
        if (!XdRsData.qte.parameters['key'+i]) continue;
        var data = JSON.parse(XdRsData.qte.parameters['key'+i]);
        if (data.KeyName && data.KeyValue) {
            this._keysData[data.KeyName] = parseInt(data.KeyValue);
        }
    }
};
QTE_Manager.clear = function() {
    this._runing = false;
    this._beReady = false;
    this._isFinished = false;
    this._index = -1;
    this._duration = 0;
    this._waitCount = 0;
    this._maxDuration = 1;
    this._titleText = '';
    this._keysQueue = [];
    this._tempListeners = {};
};
QTE_Manager.isRuning = function() {
    return this._runing || this._waitCount > 0;
};
QTE_Manager.index = function() {
    return this._index;
};
QTE_Manager.result = function() {
    return this._result;
};
QTE_Manager.timeSpent = function() {
    return this._timeSpent;
};
QTE_Manager.clearResult = function() {
    this._result = 3;
    this._timeSpent = 0;
};
QTE_Manager.keysQueue = function() {
    return this._keysQueue;
};
QTE_Manager.titleText = function() {
    return this._titleText;
};
QTE_Manager.setTitleText = function(text) {
    this._titleText = text;
};
QTE_Manager.wait = function(count) {
    this._waitCount = count;
};
QTE_Manager.addListener = function(sym, fun) {
    this._listeners[sym] = this._listeners[sym] || [];
    this._listeners[sym].push(fun);
};
QTE_Manager.addTempListener = function(sym, fun) {
    this._tempListeners[sym] = this._tempListeners[sym] || [];
    this._tempListeners[sym].push(fun);
};
QTE_Manager.callListener = function(sym) {
    if (this._listeners[sym]) {
        this._listeners[sym].forEach(function(fun){fun();});
    }
    if (this._tempListeners[sym]) {
        this._tempListeners[sym].forEach(function(fun){fun();});
    }
};
QTE_Manager.durationRate = function() {
    return this._duration / this._maxDuration;
};
QTE_Manager.durationText = function() {
    const n = Math.floor(this._duration / 60);
    return '' + Math.floor(n/60) + ':' + (n%60).padZero(2);
};
QTE_Manager.checkSettingsKeys = function() {
    if (Object.keys(this._keysData).length === 0) {
        throw new Error('用于QTE的按键未设置，请至少设置一个按键！');
    }
};
QTE_Manager.singleOutKeys = function(keys) {
    const num = parseInt(keys);
    const temp = Object.keys(this._keysData);
    if (typeof num === 'number' && !isNaN(num)) {
        const arr = [];
        while(arr.length < num) {
            arr.push(temp[Math.randomInt(temp.length)]);
        }
        return arr;
    }
    if (Array.isArray(keys)) {
        return keys.filter(function(k){return temp.contains(k);});
    }
    return [];
};
QTE_Manager.isValidParameters = function(sec, keys) {
    return sec > 0 && keys.length > 0;
};
QTE_Manager.start = function(sec, keys) {
    this.checkSettingsKeys();
    keys = this.singleOutKeys(keys);
    if (!this.isValidParameters(sec, keys)) {
        this.clear();
        return false;
    }
    this._maxDuration = Math.round(sec * 60);
    this._duration = this._maxDuration;
    this._keysQueue = keys;
    this._runing = true;
    this.callListener('start');
    this.clearResult();
    this.wait(60);
    return true;
};
QTE_Manager.finish = function(result) {
    this._result = result;
    this._isFinished = true;
    if (result === 0) {
        const sec = this._maxDuration - this._duration;
        this._timeSpent = (sec / 60).toFixed(1);
    }
    this.callListener('finish');
};
QTE_Manager.exit = function() {
    this.callListener('exit');
    this.clear();
};
QTE_Manager.prepareNextKey = function() {
    this._index++;
    this._beReady = true;
    this.wait(5);
    this.callListener('prepare');
    if (this._index >= this._keysQueue.length) {
        this.finish(0);
    }
};
QTE_Manager.onInputKeyDown = function(event) {
    if (!this._runing || this._waitCount > 0 || !this._beReady) return;
    const keyName = this._keysQueue[this._index];
    if (keyName) {
        const KeyValue = this._keysData[keyName];
        if (event.keyCode === KeyValue) {
            this.callListener('onClick');
            this._beReady = false;
        } else {
            !this._isIgnoreError && this.finish(1);
        }
    }
};
QTE_Manager.update = function() {
    this.updateWait();
    if (this.isRuning() && !this._isFinished) {
        this.updateDuration();
        this.updateQueue();
    }
};
QTE_Manager.updateWait = function() {
    if (this._waitCount > 0) this._waitCount--;
};
QTE_Manager.updateDuration = function() {
    if (this._waitCount === 0) {
        if (this._duration > 0) {
            this._duration--;
            this.callListener('duration');
        } else this.finish(2);
    }
};
QTE_Manager.updateQueue = function() {
    if (this._waitCount === 0) {
        !this._beReady && this.prepareNextKey();
    }
};
//==============================================================================================================
XdRsData.qte.SceneManager_initialize = SceneManager.initialize;
SceneManager.initialize = function() {
    this.setupQteManager();
    XdRsData.qte.SceneManager_initialize.call(this);
};
SceneManager.setupQteManager = function() {
    QTE_Manager.setup();
    QTE_Manager.addListener('start', this.onQteStart.bind(this));
    QTE_Manager.addListener('exit',  this.onQteExit.bind(this));
};
SceneManager.onQteStart = function() {
    this._scene && this._scene.createQTEsprite();
};
SceneManager.onQteExit = function() {
    this._scene && this._scene.removeQTEsprite();
};
XdRsData.qte.SceneManager_updateMain = SceneManager.updateMain;
SceneManager.updateMain = function() {
    XdRsData.qte.SceneManager_updateMain.call(this);
    QTE_Manager.update();
};
//==============================================================================================================
XdRsData.qte.BattleManager_isBusy = BattleManager.isBusy;
BattleManager.isBusy = function() {
    return QTE_Manager.isRuning() || XdRsData.qte.BattleManager_isBusy.call(this);
};
XdRsData.qte.BattleManager_startAction = BattleManager.startAction;
BattleManager.startAction = function() {
    this.prepareQTE();
    XdRsData.qte.BattleManager_startAction.call(this);
};
BattleManager.prepareQTE = function() {
    if (XdRsData.qte.isQteEffective(this._subject)) {
        this._logWindow.setWaitMode('qte');
        const item = this._subject.currentAction().item();
        const word = DataManager.isItem(item) ? '使用' : '施放';
        const sec  = XdRsData.qte.qteItemSec(item);
        const keys = XdRsData.qte.qteItemKeys(item);
        QTE_Manager.setTitleText(this._subject.name()+' 准备'+word+' '+item.name);
        QTE_Manager.addTempListener('finish', this.onQteFinish.bind(this));
        QTE_Manager.start(sec, keys);
    }
};
BattleManager.onQteFinish = function() {
    if (this._action && QTE_Manager.result() === 0) {
        const effect = XdRsData.qte.qteItemEffect(this._action.item());
        effect && this._action.setQteEffect(effect);
    }
};
//==============================================================================================================
Game_Action.prototype.qteEffect = function(sym) {
    return this._qteEffect && this._qteEffect[sym];
};
Game_Action.prototype.setQteEffect = function(sym) {
    if (sym === 'again') {
        this.subject().isActor() && this.subject().unshiftAction(this);
    } else {
        this._qteEffect = this._qteEffect || {};
        this._qteEffect[sym] = true;
    }
};
XdRsData.qte.Game_Action_itemHit = Game_Action.prototype.itemHit;
Game_Action.prototype.itemHit = function(target) {
    if (this.qteEffect('evade')) return 0;
    return XdRsData.qte.Game_Action_itemHit.call(this, target);
};
XdRsData.qte.Game_Action_itemCri = Game_Action.prototype.itemCri;
Game_Action.prototype.itemCri = function(target) {
    if (this.qteEffect('cri')) return 1;
    return XdRsData.qte.Game_Action_itemCri.call(this, target);
};
XdRsData.qte.Game_Action_applyGuard = Game_Action.prototype.applyGuard;
Game_Action.prototype.applyGuard = function(damage, target) {
    if (this.qteEffect('guard') && damage > 0) return damage / 2;
    return XdRsData.qte.Game_Action_applyGuard.call(this, damage, target);
};
//==============================================================================================================
Game_Actor.prototype.unshiftAction = function(action) {
    if (action) {
        const copyAction = JsonEx.makeDeepCopy(action);
        copyAction._isAgain = true;
        this._actions.unshift(copyAction);
    }
};
//==============================================================================================================
XdRsData.qte.Game_Interpreter_updateWait = Game_Interpreter.prototype.updateWait;
Game_Interpreter.prototype.updateWait = function() {
    return QTE_Manager.isRuning() || XdRsData.qte.Game_Interpreter_updateWait.call(this);
};
XdRsData.qte.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    XdRsData.qte.Game_Interpreter_pluginCommand.call(this, command, args);
    command === 'StartQTE' && this.prepareStartQte(args);
};
Game_Interpreter.prototype.prepareStartQte = function(args) {
    var sec = parseInt(args[0]);
    var keys = parseInt(args[1]);
    if (isNaN(keys)) keys = args[1].split(',');
    QTE_Manager.start(sec, keys);
};
//==============================================================================================================
function Sprite_QTE_Button() {
    this.initialize.apply(this, arguments);
}
Sprite_QTE_Button.prototype = Object.create(Sprite_Base.prototype);
Sprite_QTE_Button.prototype.constructor = Sprite_QTE_Button;
Sprite_QTE_Button.prototype.initialize = function(keyName) {
    Sprite_Base.prototype.initialize.call(this);
    this.bitmap = new Bitmap(68, 42); 
    this.anchor = new Point(0.5, 0.5);
    this._moveCount = 0;
    this.drawButton(keyName);
};
Sprite_QTE_Button.prototype.drawButton = function(keyName) {
    const result = ['UP','DOWN','LEFT','RIGHT'].contains(keyName);
    const color = result ? 'rgb(200, 200, 200)' : 'rgb(0,120,120)';
    this.bitmap.fillRoundRect(3, 3, 62, 36, 8, 4, 'rgba(0,0,0,0.5)', color);
    this.bitmap.fillRoundRect(2, 2, 63, 34, 8, 2, 'rgba(0,0,0,0.5)', color);
    if (!result) {
        this.bitmap.fontSize = 28;
        this.bitmap.drawText(keyName, 0, 0, 68, 36, 'center');
    } else {
        const color1 = 'rgb(255,0,255)', color2 = 'black';
        if (keyName === 'UP')    this.bitmap.drawArrow(34, 5, 44, 30, 24, 30, 34, 24, color1, color2);
        if (keyName === 'DOWN')  this.bitmap.drawArrow(34, 32, 44, 8, 24, 8, 34, 14,  color1, color2);
        if (keyName === 'LEFT')  this.bitmap.drawArrow(20, 18, 44, 8, 44, 28, 38, 18, color1, color2);
        if (keyName === 'RIGHT') this.bitmap.drawArrow(46, 18, 22, 8, 22, 28, 26, 18, color1, color2);
    }
};
Sprite_QTE_Button.prototype.moveRight = function() {
    this._moveCount = 5;
};
Sprite_QTE_Button.prototype.update = function() {
    Sprite_Base.prototype.update.call(this);
    if (this._moveCount > 0) {
        this.x += 16;
        this._moveCount--;
    }
};
//==============================================================================================================
function Sprite_QTE_Arrow() {
    this.initialize.apply(this, arguments);
}
Sprite_QTE_Arrow.prototype = Object.create(Sprite.prototype);
Sprite_QTE_Arrow.prototype.constructor = Sprite_QTE_Arrow;
Sprite_QTE_Arrow.prototype.initialize = function(type) {
    Sprite.prototype.initialize.call(this);
    this.anchor = new Point(0.5, 0.5);
    this.bitmap = new Bitmap(32, 32); 
    this._actionCount = 0;
    this._type = type;
    if (this._type === 0) this.bitmap.drawArrow(16, 32, 30, 0, 2, 0, 16, 4, 'white');
    if (this._type === 1) this.bitmap.drawArrow(16, 0, 30, 32, 2, 32, 16, 28, 'white');
    this.move(0, this._type * 100 - 24);
};
Sprite_QTE_Arrow.prototype.update = function() {
    Sprite.prototype.update.call(this);
    this._actionCount = (this._actionCount+1) % 60;
    var my = this._type ? -0.1 : 0.1;
    this.y += this._actionCount < 30 ? my : -my;
};
//==============================================================================================================
function Sprite_QTE() {
    this.initialize.apply(this, arguments);
}
Sprite_QTE.prototype = Object.create(Sprite_Base.prototype);
Sprite_QTE.prototype.constructor = Sprite_QTE;
Sprite_QTE.prototype.initialize = function() {
    Sprite_Base.prototype.initialize.call(this);
    this.bitmap = new Bitmap(Graphics.width, 240); 
    this.move(Graphics.width / 2, Graphics.height / 2 - 20);
    this.anchor = new Point(0.5, 0.5);
    this._isFinish = false;
    this.setupListeners();
    this.createParts();
    this.drawBackground();
    this.drawTitle();
    this.refreshTime();
};
Sprite_QTE.prototype.setupListeners = function() {
    QTE_Manager.addTempListener('prepare',  this.moveButtons.bind(this));
    QTE_Manager.addTempListener('onClick',  this.onClickButton.bind(this));
    QTE_Manager.addTempListener('duration', this.refreshTime.bind(this));
    QTE_Manager.addTempListener('finish',   this.onFinish.bind(this));
};
Sprite_QTE.prototype.createParts = function() {
    this._arrows = [];
    this._buttons = [];
    for (var i=0;i<2;++i) {
        this._arrows[i] = new Sprite_QTE_Arrow(i);
        this.addChild(this._arrows[i]);
    }
    const arr = QTE_Manager.keysQueue();
    for (var i=0;i<arr.length;++i) {
        this._buttons[i] = new Sprite_QTE_Button(arr[i]);
        this._buttons[i].move((i + 1) * -80, 27);
        this.addChild(this._buttons[i]);
    }
};
Sprite_QTE.prototype.isBusy = function() {
    if (this.isAnimationPlaying()) return true;
    return this._buttons.some(function(b){return b.isAnimationPlaying();});
};
Sprite_QTE.prototype.drawBackground = function() {
    const color = 'rgb(120,0,120)';
    this.bitmap.gradientFillRect(0, 96, this.width, 52, color, 'rgba(0,0,0,0)', true);
    this.bitmap.gradientFillRect(0, 144, this.width, 52, 'rgba(0,0,0,0)',color, true);
    this.bitmap.fillRoundRect(this.width / 2 - 35, 124, 70, 44, 5, 3, 'red');
};
Sprite_QTE.prototype.drawTitle = function() {
    const text = QTE_Manager.titleText();
    if (text) {
        this.bitmap.fontSize = 32;
        const tw = this.bitmap.measureTextWidth(text) + 32;
        const x = (this.width - tw) / 2;
        this.bitmap.fillRoundRect(x, 10, tw, 56, 5, 3, 'red', 'black');
        this.bitmap.drawText(text, 0, 10, this.width, 56, 'center');
    }
};
Sprite_QTE.prototype.refreshTime = function() {
    this.bitmap.clearRect(0, 196, this.width, 44);
    const cw = this.width * 2 / 3;
    const cx = (this.width - cw) / 2;
    const color = 'rgb(0,160,0)';
    const rw = (cw-2) * QTE_Manager.durationRate();
    this.bitmap.fontSize = 26;
    this.bitmap.textColor = color;
    this.bitmap.drawText('Time：', cx-86, 200, 126, 32);
    this.bitmap.fillRoundRect(cx, 210, cw, 16, 8, 2, 'black');
    this.bitmap.fillRoundRect(cx+1, 211, rw, 14, 7, 2,  'rgba(0,0,0,0)', color);
};
Sprite_QTE.prototype.moveButtons = function() {
    this._buttons.forEach(b => b.moveRight());
};
Sprite_QTE.prototype.onClickButton = function() {
    const button = this._buttons[QTE_Manager.index()];
    const id = XdRsData.qte.getAnmId(0);
    button && button.startAnimation($dataAnimations[id], false, 0);
};
Sprite_QTE.prototype.onFinish = function() {
    this._isFinish = true;
    const anmId = XdRsData.qte.getAnmId(QTE_Manager.result()+1);
    this.startAnimation($dataAnimations[anmId], false, 0);
};
Sprite_QTE.prototype.update = function() {
    Sprite_Base.prototype.update.call(this);
    if (this._isFinish) {
        !this.isBusy() && QTE_Manager.exit();
    }
};
//==============================================================================================================
XdRsData.qte.Window_BattleLog_updateWaitMode = Window_BattleLog.prototype.updateWaitMode;
Window_BattleLog.prototype.updateWaitMode = function() {
    if (this._waitMode === 'qte') {
        if (QTE_Manager.isRuning()) return true;
        else this._waitMode = '';
    }
    return XdRsData.qte.Window_BattleLog_updateWaitMode.call(this);
};
//==============================================================================================================
Scene_Base.prototype.createQTEsprite = function() {
    this.removeQTEsprite();
    this._QTEsprite = new Sprite_QTE();
    this.addChild(this._QTEsprite);
};
Scene_Base.prototype.removeQTEsprite = function() {
    if (this._QTEsprite) {
        this.removeChild(this._QTEsprite);
        this._QTEsprite = null;
    }
};
//==============================================================================================================
// end
//==============================================================================================================