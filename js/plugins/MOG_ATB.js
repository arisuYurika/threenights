//=============================================================================
// MOG_ATB.js
//=============================================================================

/*:
 * @plugindesc (v0.3 Beta)[v1.3]  战斗 - 即时战斗模式
 * @author Moghunter （Drill_up翻译+优化）
 *
 * @param 初始是否启用模式
 * @type boolean
 * @on 启用
 * @off 关闭
 * @desc true - 启用，false - 关闭
 * @default false
 *
 * @param 默认模式
 * @type select
 * @option 全暂停
 * @value 0
 * @option 半暂停
 * @value 1
 * @option 面板暂停
 * @value 2
 * @option 不暂停
 * @value 3
 * @desc 即时战斗的默认模式。0-全暂停，1-半暂停，2-面板暂停，3-不暂停。
 * @default 0
 *
 * @param 是否跳过遇敌消息
 * @type boolean
 * @on 跳过
 * @off 不跳过
 * @desc true - 跳过，false - 不跳过
 * @default false
 *
 * @param 回合最大值
 * @type number
 * @min 1000
 * @desc 根据角色或敌人的敏捷，最先达到上限的将获得一个回合攻击。这里为设置的上限。你也可以通过插件指令临时修改。
 * @default 4000
 *
 * @param 满回合音效
 * @desc 角色获得一个回合攻击时的音效。
 * @default Book1
 * @require 1
 * @dir audio/se/
 * @type file
 *
 * @param 一回合持续时间
 * @type number
 * @min 60
 * @desc 游戏中一个回合的时间，单位帧。（1秒60帧）过了这个时间，当前战斗回合+1。
 * @default 480
 *
 * @param 状态回合持续时间
 * @type number
 * @min 60
 * @desc 状态的一个回合的持续时间，单位帧。（1秒60帧）
 * @default 180
 *
 * @param 向左切换角色按键
 * @desc 两个角色都到达攻击回合点时，按q(pagedown)键可以切换到向左另一个角色来进攻。
 * @default pagedown
 *
 * @param 向右切换角色按键
 * @desc 两个角色都到达攻击回合点时，按w(pageup)键可以切换到向右另一个角色来进攻。
 * @default pageup
 *
 * @param 逃跑按键
 * @desc 角色准备逃跑的按键。
 * @default cancel
 *
 * @param 资源-逃跑框
 * @desc 逃跑框的图片资源。
 * @default ATB-逃跑框
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 平移-逃跑框 X
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 600
 *
 * @param 平移-逃跑框 Y
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 64
 *
 * @param 资源-逃跑条
 * @desc 逃跑条的图片资源。
 * @default ATB-逃跑条
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 平移-逃跑条 X
 * @desc 以框的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default 6
 *
 * @param 平移-逃跑条 Y
 * @desc 以框的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default 16
 *
 * @param 逃跑持续时间
 * @type number
 * @min 60
 * @desc 按住按键逃跑时，需要持续的时间，单位帧。（1秒60帧）
 * @default 180
 * 
 * @help  
 * =============================================================================
 * +++ MOG - Active Time Battle [ATB] (v0.1 Beta) +++
 * By Moghunter 
 * https://mogplugins.wordpress.com/
 * =============================================================================
 * 使得你可以设置即时战斗模式ATB（Active Time Battle）。
 * 你可以在两种模式之间通过插件指令自由切换。
 * ★★该插件修改了战斗内核，不建议作为主要战斗模式来使用★★
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 资源路径：img/Battle__atb （Battle后面有两个下划线）
 * 先确保项目img文件夹下是否有Battle__atb文件夹！
 * 要查看所有关联资源文件的插件，可以去看看"插件清单.xlsx"。
 * 如果没有，需要自己建立。需要配置资源文件：
 *
 * 资源-逃跑框
 * 资源-逃跑条
 *
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.插件的作用域：战斗界面。
 *   作用于战斗系统。
 * 2.使用ATB模式后，将会修改成以下设定：
 *   回合 - 一回合将会变成时间触发，即一段时间后，直接进入下一回合。
 *   施法 - 施法没有时间等待，直接造成伤害。（动画未播放完就造成伤害）
 *   速度补正 - 该属性变成施法延迟。30表示30帧后才能施法。（可以被打断）
 *
 *   Q,W键 - 两个角色都到达回合满值时，按q和w可以进行切换，选择谁先攻击。
 *   X键   - 按住可以逃跑。
 *
 * -----------------------------------------------------------------------------
 * ----插件影响
 * 建议升级下列的插件，版本过低会出现兼容性问题：
 *   (v4.0)MOG_BattleHud         战斗UI - 角色窗口
 *   (v1.2)MOG_BattleCommands    战斗UI - 技能类型面板
 *   (v1.7)MOG_BalloonActionName 技能 - 招式名气泡框
 * 以下插件会失去作用：
 *   MOG_ChainCommands     技能 - 按键连锁攻击
 *
 * -----------------------------------------------------------------------------
 * ----可选设定
 * 你可以通过插件指令来控制ATB的参数。
 * （注意，冒号两边都有一个空格。）
 * 
 * 插件指令（开启）：  atb_mode_on
 * 插件指令（关闭）：  atb_mode_off
 *
 * 插件指令（模式）：  atb_mode : A
 * 插件指令（最大值）：atb_max : B
 * 
 * 参数A：即时战斗模式
 *        0 - 全暂停
 *            轮到玩家，出现类型选择面板时，所有人暂停等待出招。
 *        1 - 半暂停
 *            轮到玩家，在选择技能和选择目标时，所有人暂停等待出招。
 *        2 - 面板暂停
 *            轮到玩家，只有选择技能时，所有人暂停等待出招。
 *        3 - 不暂停
 *            所有人都不暂停。
 * 参数B：回合最大值
 *        直接设置回合的最大值，注意设置之后是永久有效的。你需要设置回去。
 *
 * 示例：
 * 插件指令：atb_mode_on
 * 插件指令：atb_mode : 1
 * 插件指令：atb_max : 6000
 *
 * -----------------------------------------------------------------------------
 * ----关于Drill_up优化：
 * [v1.1]
 * 使得该插件支持关联资源的打包、加密。
 * 部署时勾选去除无关文件，本插件中相关的文件不会被去除。
 * [v1.2]
 * 使得你可以在原回合制模式之间进行相互切换。
 * 修复了ATB插件睡眠状态下施法卡死的bug。
 * [v1.3]
 * 修改了插件关联的资源文件夹。
 *
 */
 
 //
 //插件记录：
 //		代码复杂度 未知，覆写了很多战斗核心程序
 //
 //覆盖/半覆盖的方法：
 //		Game_Battler.prototype.isChanting
 //		Game_BattlerBase.prototype.canInput
 //		Game_Battler.prototype.onTurnEnd
 //		BattleManager.startInput
 //		BattleManager.updateTurnEnd
 //		BattleManager.getNextSubject
 //		BattleManager.isInputting
 //		BattleManager.startTurn
 //		Scene_Battle.prototype.updateBattleProcess
 //		Scene_Battle.prototype.selectNextCommand
 //		Window_ActorCommand.prototype.cursorPagedown
 //		Window_ActorCommand.prototype.cursorPageup
 //
 //		0.3版加了个$gameTemp._atbInTurn，用处不明。
 //		ATB对MOG_EmergeMotion敌人出现效果 进行了手动控制。
 //
 
//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_ATB = true;
　　var Moghunter = Moghunter || {}; 
	Moghunter.drill_change_battle_mode = 1;

  　Moghunter.parameters = PluginManager.parameters('MOG_ATB');
    Moghunter.atb_use = String(Moghunter.parameters['初始是否启用模式'] || "false") === "true";
    Moghunter.atb_Mode = Number(Moghunter.parameters['默认模式'] || 1);
    Moghunter.atb_MaxValue = Number(Moghunter.parameters['回合最大值'] || 4000);
	Moghunter.atb_TurnDuration = Number(Moghunter.parameters['一回合持续时间'] || 480);
	Moghunter.atb_StatesDuration = Number(Moghunter.parameters['状态回合持续时间'] || 180);
	Moghunter.atb_EscapeDuration = Number(Moghunter.parameters['逃跑持续时间'] || 180);
	Moghunter.atb_SkipEmerge = String(Moghunter.parameters['是否跳过遇敌消息'] || 'true');
	
    Moghunter.atb_EscapeGaugeX = Number(Moghunter.parameters['平移-逃跑框 X'] || 600); 
    Moghunter.atb_EscapeGaugeY = Number(Moghunter.parameters['平移-逃跑框 Y'] || 64); 
    Moghunter.atb_EscapeGaugeX2 = Number(Moghunter.parameters['平移-逃跑条 X'] || 6); 
    Moghunter.atb_EscapeGaugeY2 = Number(Moghunter.parameters['平移-逃跑条 Y'] || 16); 
    Moghunter.atb_EscapeButton = String(Moghunter.parameters['逃跑按键'] || 'cancel');	
    Moghunter.atb_FullSE = String(Moghunter.parameters['满回合音效'] || 'Book1'); 
    Moghunter.atb_NextActorLeft = String(Moghunter.parameters['向左切换角色按键'] || 'pagedown'); 
    Moghunter.atb_NextActorRight = String(Moghunter.parameters['向右切换角色按键'] || 'pageup');
	
	Moghunter.src_atb_escape_A = String(Moghunter.parameters['资源-逃跑框']);
	Moghunter.src_atb_escape_B = String(Moghunter.parameters['资源-逃跑条']);
	
	if( !Moghunter.atb_use ){ 
		Moghunter.drill_change_battle_mode = 0; 
		Imported.MOG_ATB = false;
	}
	 
//=============================================================================
// ** Game Temp
//=============================================================================

//==============================
// * Initialize
//==============================
var _mog_atb_gtemp_initialize = Game_Temp.prototype.initialize;
Game_Temp.prototype.initialize = function() {
	_mog_atb_gtemp_initialize.call(this);
	this._atbForceHideWindows = false;
	this._atbEscape = [0,1,false];
	this._atbWinData = [false,false,false];
	this._atbWaitTemp = [0,0,0];
	this._atbneedRefWind = false;
	this._atbBattleEnd = false;
	this._atbInTurn = false;
	this._battleEnd = false;
};

//=============================================================================
// ** Game System
//=============================================================================

//==============================
// * Initialize
//==============================
var _mog_atb_gsys_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	_mog_atb_gsys_initialize.call(this);
	this._atbEventPhase = [0,0,0,false,false];
	this._atbEventPhase[1] = Math.max(Moghunter.atb_TurnDuration,120);
	this._atbEspcapeDuration = Math.max(Moghunter.atb_EscapeDuration,60);
	this._atbMode = [Moghunter.atb_Mode,false];
};

//==============================
// * Play Sound MX
//==============================
SoundManager.playSoundMX = function(fileName){
   var se = {};
   se.name = fileName;
   se.pitch = 100;
   se.volume = 100;
   AudioManager.playSe(se);
};  

//=============================================================================
// ** Game_Interpreter
//=============================================================================	

//==============================
// * PluginCommand
//==============================
var _mog_atb_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_mog_atb_pluginCommand.call(this,command, args);
	this.setATBParInt(command, args);
	return true;
};

//==============================
// * set ATB ParInt
//==============================
Game_Interpreter.prototype.setATBParInt = function(command, args) {
	if (command === "atb_mode" && args[1])  {
		var mode = Math.min(Math.max(Number(args[1]),0),3);
		$gameSystem._atbMode[0] = mode;	
	};
	if (command === "atb_max" && args[1])  {
		var v = Math.min(Number(args[1]),100);
		Moghunter.atb_MaxValue = v;	
	};
	if (command === "atb_mode_on")  {
		Moghunter.drill_change_battle_mode = 1;
　　	Imported.MOG_ATB = true;
	};
	if (command === "atb_mode_off")  {
		Moghunter.drill_change_battle_mode = 0;
　　	Imported.MOG_ATB = false;
	};
};

//=============================================================================
// ** Game Battler Base
//=============================================================================

//==============================
// * Init Members
//==============================
var _mog_atb_gbbase_initMembers = Game_BattlerBase.prototype.initMembers;
Game_BattlerBase.prototype.initMembers = function() {
	_mog_atb_gbbase_initMembers.call(this);
	this.initATBSetup();
};

//==============================
// * Init ATB Setup
//==============================
Game_BattlerBase.prototype.initATBSetup = function() {
	this._atb = 0;
	this._max_atb = Math.max(Moghunter.atb_MaxValue,100);
	this._wait_atb = 0;
	this._cast_atb = [null,0,1];
	this._atbItem = null;
	this._inSelection = false;
	this._intTurn = false;	
	this._stateTime = Math.max(Moghunter.atb_StatesDuration,60);
	this._stateDuration = [];
	this._buffTime = Math.max(Moghunter.atb_StatesDuration,60);
	this._buffDuration = [0,0,0,0,0,0,0,0];
};

//==============================
// * ATB
//==============================
Game_BattlerBase.prototype.atb = function() {
    return this._atb;
};

//==============================
// * Max ATB
//==============================
Game_BattlerBase.prototype.maxAtb = function() {
    return this._max_atb;
};

//==============================
// * ATB Speed
//==============================
Game_BattlerBase.prototype.atbSpeed = function() {
	return this.agi;
};

//==============================
// * Die
//==============================
var _mog_atb_gbbase_die = Game_BattlerBase.prototype.die;
Game_BattlerBase.prototype.die = function() {
    _mog_atb_gbbase_die.call(this);
	if( Moghunter.drill_change_battle_mode == 1 ){
		if ($gameParty.inBattle()) {
			if (this.needForceClearSelection()){
				this.refreshCommandSelectionATB(); 
			};
			$gameTemp._atbneedRefWind = true;
			this.clearATB();
		};
	}
};

//==============================
// * Need Force Clear Selection
//==============================
Game_BattlerBase.prototype.needForceClearSelection = function() {
   if (!BattleManager._atbBattlerInput) {return false};
   if (BattleManager._atbBattlerInput[0] != this) {return false};
   if (this.isRestricted()) {return true};
   if (this.isDead()) {return true}
   return false;
};

//==============================
// * Refresh
//==============================
var _mog_atb_gBat_refresh = Game_Battler.prototype.refresh;
Game_Battler.prototype.refresh = function() {
    _mog_atb_gBat_refresh.call(this);
	if( Moghunter.drill_change_battle_mode == 1 ){
		if (this.needForceClearSelection()){
			this.refreshCommandSelectionATB(); 
		};
	}
};

//==============================
// * refresh Command Selection ATB
//==============================
Game_BattlerBase.prototype.refreshCommandSelectionATB = function() {
	BattleManager.selectionComAtbClear()
	BattleManager._atbBattlerInput = [null,false];
	$gameTemp._atbForceHideWindows = true;	
};

//==============================
// * clear ATB
//==============================
Game_BattlerBase.prototype.clearATB = function() {
    this._atb = 0;
	this._wait_atb = 0;
	this._intTurn = false
	this._atbItem = null;
	this.clearActions()
	this.clearCast();
};

//==============================
// * clear Cast
//==============================
Game_BattlerBase.prototype.clearCast = function() {
    this._cast_atb = [null,0,1];
};

//==============================
// * is Max ATB
//==============================
Game_BattlerBase.prototype.isMaxAtb = function() {
    return this.atb() >= this.maxAtb();
};

//*******************************
// * is Chanting  *(Overwritten)*
//*******************************
var _mog_atb_isChanting = Game_Battler.prototype.isChanting;
Game_Battler.prototype.isChanting = function() {
	if( Moghunter.drill_change_battle_mode == 1 ){
		if (this._cast_atb[1] > 0) {return true};
	}else{
		return _mog_atb_isChanting.call(this);
	}
};

//==============================
// * is Casting
//==============================
Game_BattlerBase.prototype.isCasting = function() {
    return this._cast_atb[0];
};

//==============================
// * update Count Atb
//==============================
Game_BattlerBase.prototype.updateCountAtb = function() {
	this._atb += this.atbSpeed();
};

//*******************************
// * Can Input    *(Overwritten)*
//*******************************
var _mog_atb_canInput = Game_BattlerBase.prototype.canInput
Game_BattlerBase.prototype.canInput = function() {
	if( Moghunter.drill_change_battle_mode == 1 ){
		if (!this.isAppeared()) {return false};
		if (this.isRestricted()) {return false};
		if (this.isAutoBattle()) {return false};
		if (!this.isMaxAtb()) {return false};
		if (this.isCasting()) {return false};
		if (this._intTurn) {return false};
		if (this._atbItem) {return false};
		return true;
	}else{
		return _mog_atb_canInput.call(this);
	}
};

//==============================
// * Can Move Atb
//==============================
Game_BattlerBase.prototype.canMoveAtb = function() {
	if (!this.isAppeared()) {return false};
	if ($gameSystem._atbEventPhase[3]) {return false};
	if (Imported.MOG_BattleCameraFrontal && $gameSystem._atbMode[0] < 3) {
	    if ($gameTemp._bcam.atbwaitFocus && $gameTemp._bcam.sMov) {return false};
	};
	return true;
};

//==============================
// * Can Fill ATB
//==============================
Game_BattlerBase.prototype.canFillATB = function() {
	if (this.restriction() >= 4) {return false};
	if (this._wait_atb > 0) {return false};
	return true;
};

//*******************************
// * On End Turn  *(Overwritten)*
//*******************************
var _mog_atb_onTurnEnd = Game_Battler.prototype.onTurnEnd;
Game_Battler.prototype.onTurnEnd = function() {
	if( Moghunter.drill_change_battle_mode == 1 ){
		this.clearResult();
	}else{
		_mog_atb_onTurnEnd.call(this);
	}
};

//==============================
// * clear States
//==============================
var _mog_atb_gbatbase_clearStates = Game_BattlerBase.prototype.clearStates;
Game_BattlerBase.prototype.clearStates = function() {
	_mog_atb_gbatbase_clearStates.call(this);
	this._stateDuration = [];
};

//==============================
// * Reset States Counts
//==============================
var _mog_atb_gbatbase_resetStateCounts = Game_BattlerBase.prototype.resetStateCounts;
Game_BattlerBase.prototype.resetStateCounts = function(stateId) {
    _mog_atb_gbatbase_resetStateCounts.call(this,stateId);
	if( Moghunter.drill_change_battle_mode == 1 ){
		if (!this._stateDuration[stateId]) {
			this._stateDuration[stateId] = this._stateTime
		};
		if (this._stateDuration[stateId] < 60) {
			this._stateDuration[stateId] = this._stateTime;
		};
	}
};

//==============================
// * erase State
//==============================
var _mog_atb_gbatbase_eraseState = Game_BattlerBase.prototype.eraseState;
Game_BattlerBase.prototype.eraseState = function(stateId) {
	_mog_atb_gbatbase_eraseState.call(this,stateId);
	if( Moghunter.drill_change_battle_mode == 1 ){
		delete this._stateDuration[stateId];
	}
};

//==============================
// * update State Turns ATB
//==============================
Game_BattlerBase.prototype.updateStateTurns_ATB = function() {
    this._states.forEach(function(stateId) {
		 if (this._stateDuration[stateId] == null) {
			  this._stateDuration[stateId] = 0
		 }
		 this._stateDuration[stateId]--;
		 if (this._stateDuration[stateId] <= 0) {
			 this._stateDuration[stateId] = this._stateTime;
		 	 if (this._stateTurns[stateId] > 0) {
				 this._stateTurns[stateId]--;
			 };
			 this.executeStatesEffect_ATB(stateId);		 
		 };
	}, this);	
};

//==============================
// * executeStatesEffect_ATB
//==============================
Game_BattlerBase.prototype.executeStatesEffect_ATB = function(stateId) {
	this.regenerateAll();
	this.startDamagePopup();
	if (this._stateTurns[stateId] === 0) {this.eraseState(stateId)};
};

//==============================
// * remove Guard State
//==============================
Game_BattlerBase.prototype.removeGuardState = function(stateId) {
    this.states().forEach(function(state) {
		    for (var i = 0; i < state.traits.length; i++) {
				 var effect = state.traits[i]
				 if (effect.dataId === 1) {
					 this.eraseState(state.id)
				 };
			};
    }, this);
};

//==============================
// * clear Buffs
//==============================
var _mog_atb_gBatbase_clearBuffs = Game_BattlerBase.prototype.clearBuffs;
Game_BattlerBase.prototype.clearBuffs = function() {
	_mog_atb_gBatbase_clearBuffs.call(this);
	this._buffDuration = [0,0,0,0,0,0,0,0];
};

//==============================
// * erase Buff
//==============================
var _mog_atb_gBatbase_eraseBuff = Game_BattlerBase.prototype.eraseBuff;
Game_BattlerBase.prototype.eraseBuff = function(paramId) {
	_mog_atb_gBatbase_eraseBuff.call(this,paramId)
	this._buffDuration[paramId] = 0;
};

//==============================
// * update Buff Turn ATB
//==============================
Game_BattlerBase.prototype.updateBuffTurns_ATB = function() {
    for (var i = 0; i < this._buffTurns.length; i++) {
		if (this._buffDuration[i] == null) {
			 this._buffDuration[i] = 0
		};
		this._buffDuration[i]--;
		if (this._buffDuration[i]  <= 0) {
		    this._buffDuration[i] = this._buffTime;
			if (this._buffTurns[i] > 0) {
				this._buffTurns[i]--;
				this.executeBuffEffect_ATB(i)
			};
		};
    };
};

//==============================
// * executeBuffEffect_ATB
//==============================
Game_BattlerBase.prototype.executeBuffEffect_ATB = function(buffId) {
    if (this._buffTurns[buffId] === 0) {this.removeBuff(buffId)};
};

//=============================================================================
// ** Game Battler
//=============================================================================

//==============================
// * perform Action End
//==============================
var _mog_atb_gBat_performActionEnd = Game_Battler.prototype.performActionEnd;
Game_Battler.prototype.performActionEnd = function() {
	_mog_atb_gBat_performActionEnd.call(this);
	if( Moghunter.drill_change_battle_mode == 1 ){
		this.setActionState('undecided');
	}
};

//=============================================================================
//=============================================================================
// ** Battle Manager
//=============================================================================
//=============================================================================

//==============================
// * init Members
//==============================
var _mog_atb_btmngr_initMembers = BattleManager.initMembers;
BattleManager.initMembers = function() {
     _mog_atb_btmngr_initMembers.call(this);
	this.setupATB();
};

//==============================
// * setup ATB
//==============================
BattleManager.setupATB = function() {
   this._atbBattler = null;
   this._atbBattlerInput = [null,false];
   $gameTemp._atbEscape = [0,$gameSystem._atbEspcapeDuration,false];
   $gameTemp._battleEnd = false;
   $gameTemp._atbBattleEnd = false;
   $gameTemp._atbWaitTemp = [0,40,0];
   $gameTemp._atbneedRefWind = false;
   $gameTemp._atbInTurn = false;
   $gameSystem._atbEventPhase[0] = 0;
   $gameSystem._atbEventPhase[3] = false;
};

//==============================
// * clear ATB Base
//==============================
BattleManager.clearATBBase = function() {
   $gameTemp._atbForceHideWindows = true;
   $gameTemp._atbEscape[0] = 0;
   this._atbBattler = null;
   this._atbBattlerInput = [null,false];
   this._actorIndex = -1;
   $gameSystem._atbEventPhase[0] = 0;
   $gameSystem._atbEventPhase[3] = false;   
};

//==============================
// * prepare Initial ATB Value
//==============================
BattleManager.prepareInitialATBValue = function() {
	for (var i = 0; i < $gameParty.members().length; i++) {
		 var battler =  $gameParty.members()[i];
		 battler.clearATB();
		 battler._wait_atb = 5;
		 var per = battler._max_atb * 30 / 100;
		 var value = Math.randomInt(per);
		 if (this._preemptive) {
		     value += (per * 2);
		 };
		 battler._atb = Math.floor(value);
	};
	for (var i = 0; i < $gameTroop.members().length; i++) {
		 var battler =  $gameTroop.members()[i];
         battler.clearATB();
		 battler._wait_atb = 5;	 
		 var per = battler._max_atb * 30 / 100;
		 var value = Math.randomInt(per);
         if (this._surprise) {
		     value += (per * 2);
		 };
		 battler._atb = Math.floor(value);
	};
   this.clearATBBase();
};

//==============================
// * clear ATB Value Party
//==============================
BattleManager.clearATBValueParty = function() {
	for (var i = 0; i < $gameParty.members().length; i++) {
		var battler = $gameParty.members()[i];
	    battler.clearATB();
		battler.setActionState('undecided')
	};
	if ($gameTemp._battleEnd || $gameSystem._atbBattleEnd) {
		for (var i = 0; i < $gameTroop.members().length; i++) {
			var battler = $gameTroop.members()[i];
			battler.clearATB();
		};
	};
    this.clearATBBase();
};

//==============================
// * need Update ATB Basic
//==============================
BattleManager.needUpdate_ATBBasic = function() {
    if (this._phase == 'action') {return false}; 
    if (this._phase == 'turn') {return false};
	if ($gameTemp._atbBattleEnd) {return false};
	if ($gameMessage.isBusy()) {return false};
	if ($gameTemp._battleEnd) {return false};
	if ($gameSystem._atbEventPhase[3]) {return false};
	if ($gameTemp._atbWaitTemp[0] > 0) {return false}
	if ($gameTemp._atbWaitTemp[1] > 0) {return false}
	if ($gameSystem._atbMode[1]) {return false};
    return true;
};

//==============================
// * need Update ATB
//==============================
BattleManager.needUpdate_ATB = function() {
    if (this._phase === 'action') {return false}; 
    if (this._phase === 'turn') {return false};
	if (BattleManager.isBusy()) {return false};
	if ($gameTemp._atbInTurn) {return false};
    return true;
};

//==============================
// * Update ATB
//==============================
BattleManager.update_ATB = function() {
	if (this.actor()) {this.updateCheckActorPar(this.actor())};
	this.allBattleMembers().forEach(function(battler) {
    		if (battler.canMoveAtb() && !battler.isDead()) {this.updateBattlers_ATB(battler)}; 
    }, this);
};

//==============================
// * need Force Clear Command
//==============================
BattleManager.needForceClearCommand = function(battler) {
	if (!battler) {return true};
	if (battler.restriction() > 0) {return true};
	if (battler._intTurn) {return true};
	if (!battler.isMaxAtb()) {return true};
	if (!battler.currentAction()) {return true};
	if (battler.isCasting()) {return true};
	return false;
};

//==============================
// * Update Check Actor Par
//==============================
BattleManager.updateCheckActorPar = function(battler) {
	if (this.needForceClearCommand(battler)) {
		if (battler) {
			battler._intTurn = false
			battler._atbItem = null;
			battler.clearActions()
			battler.clearCast();
		};
	    this.selectionComAtbClear();
	};
};

//==============================
// * Update Battlers ATB
//==============================
BattleManager.updateBattlers_ATB = function(battler) {
	if( battler.isCasting(battler) && battler.isRestricted() ){	//正在释放技能的人物，如果技能被打断，直接被清除
		battler.clearATB();
	}
	if (battler._wait_atb > 0) {battler._wait_atb--};
	if (battler.canFillATB()) {this.updateFill_ATB(battler)};
    this.updateStateBuffTurn_ATB(battler);
};

//==============================
// * Update State Buff Turn_ATB
//==============================
BattleManager.updateStateBuffTurn_ATB = function(battler) {
    battler.updateStateTurns_ATB();
	battler.updateBuffTurns_ATB();
};

//==============================
// * update par Correction
//==============================
BattleManager.updateParCorretionBattler_ATB = function(battler) {
    battler._intTurn = false;
	battler._atbItem = null;
};

//==============================
// * update Fill ATB
//==============================
BattleManager.updateFill_ATB = function(battler) {
    if (!battler.isMaxAtb()) {
    	battler.updateCountAtb();
		this.updateParCorretionBattler_ATB(battler)
		if (battler.isMaxAtb()) {this.executeATBFullEffect(battler)};
	} else {
        this.updateBattlerFull_ATB(battler);
    };
};

//==============================
// * executeATBFullEffect
//==============================
BattleManager.executeATBFullEffect = function(battler) {
	if (battler._atb > battler._max_atb) {battler._atb = battler._max_atb};
    if (battler.isActor()) {SoundManager.playSoundMX(Moghunter.atb_FullSE)};
	battler.removeGuardState();
};

//==============================
// * update Battler Full ATB
//==============================
BattleManager.updateBattlerFull_ATB = function(battler) {
    if (!this._atbBattler) {
	    if (battler.isCasting(battler)) {	//释放技能延迟
		   this.updateATBCast_ATB(battler);
    	} else {
		   this.prepareNextSubject_ATB(battler);
		};
	};
};

//==============================
// * update Battler Full ATB
//==============================
BattleManager.updateATBCast_ATB = function(battler) {
	 battler._cast_atb[1]++;
	 if (battler._cast_atb[1] >= battler._cast_atb[2]) {this.prepareNextSubjectCast_ATB(battler);};	//准备释放技能
};
 
//==============================
// * update Escape
//==============================
BattleManager.canEscape_ATB = function(active) {
	if (!active) {return false};
	if (!this._canEscape) {return false};
	if (!Input.isPressed(Moghunter.atb_EscapeButton)) {return false};
	return true;
};
 
//==============================
// * update Escape ATB
//==============================
BattleManager.updateEscape_ATB = function(active) {
	if ($gameTemp._atbEscape[2]) {return};
    if (this.canEscape_ATB(active)) {
		$gameTemp._atbEscape[0]++;
		if ($gameTemp._atbEscape[0] >= $gameTemp._atbEscape[1]) {
			$gameTemp._atbEscape[2] = true;
	     	$gameTemp._atbEscape[0] = $gameTemp._atbEscape[1];
            this.executeEscape_ATB();
	    };
	} else {
	   if ($gameTemp._atbEscape[0] > 0) {
		   $gameTemp._atbEscape[0] -= 2;
		   if ($gameTemp._atbEscape <= 0) {
			   $gameTemp._atbEscape[0] = 0;
		   };
	   };
	};
};

//==============================
// * execute Escape ATB
//==============================
BattleManager.executeEscape_ATB = function() {
	this._escapeRatio = 100;
	this.processEscape();
	$gameTemp._battleEnd = true;
	$gameTemp._atbBattleEnd = true;
	this.selectionComAtbClear();
	this._escaped = true;
	this.clearATBValueParty();
};

//==============================
// * prepare Next Subject Cast
//==============================
BattleManager.prepareNextSubjectCast_ATB = function(battler) {
	var item = battler._cast_atb[0];
    if (battler.canUse(item)) {			//睡眠状态不能释放技能
        this._atbBattler = battler;
		this._atbBattler._atbItem = item;
	} else {
		battler.clearATB();
	};
};

//==============================
// * prepare Next Subject ATB
//==============================
BattleManager.prepareNextSubject_ATB = function(battler) {
    if (battler.isEnemy()) {
	    this.prepareActionEnemy(battler);
	} else {
		if (battler.isConfused()) {  //已选择技能
		    this.prepareConfusionActionActor(battler);
    	} else if (this.needPrepareSelection(battler)) {	//未选择技能	
			this.prepareCommandSelection(battler);
		} else {;
			if (battler._atbItem) {
				this._atbBattler = battler;
				battler._intTurn = true;
			} 
		};
	};
};

//==============================
// * prepare Confusion Action
//==============================
BattleManager.prepareConfusionActionActor = function(battler) {
	battler.clearActions()
    battler.makeActions();
	var action = battler.currentAction();
	if (action && action.item() && battler.canUse(action.item())) {
	    battler._atbItem = action.item()
        this._atbBattler = battler;
	} else {
		battler.clearATB();
	};
};

//==============================
// * need Prepare Action Actor
//==============================
BattleManager.needPrepareActionActor = function(action) {
	if (!action) {return false};
	if (!this._atbBattlerInput) {return false};
	if (!this._atbBattlerInput[0]) {return false};
	if (!this._atbBattlerInput[0].currentAction()) {return false};
	if (!this._atbBattlerInput[0].currentAction().item()) {return false};
	return true;
};

//==============================
// * selection Com Atb Cler
//==============================
BattleManager.selectionComAtbClear = function() {
   var action = BattleManager.inputtingAction();
   var actor = this.actor();
   var active = false
   if (this.needPrepareActionActor(action)) {
       this.prepareActionActor(this._atbBattlerInput[0]);
	   active = true;  
   };
   this._atbBattlerInput = [null,false];
   this._actorIndex = -1;
   if (actor) {
	   if (!this._atbBattler && active && !actor.isCasting()) {
		   this.updateBattlerFull_ATB(actor)
	   } else {
	       actor.setActionState('done');
	   };
    };
};

//*******************************
// * start Input  *(Overwritten)*
//*******************************
var _mog_atb_startInput = BattleManager.startInput;
BattleManager.startInput = function() {
	if( Moghunter.drill_change_battle_mode == 1 ){
		if (!this._atbBattler) {return};
		this._atbBattler._intTurn = true;
		this.startTurn();
	}else{
		return _mog_atb_startInput.call(this);
	}
};

//==============================
// * needPrepare Action Actor
//==============================
BattleManager.prepareActionActor = function(battler) {
	var action = battler.currentAction();
	if (action && action.item() && battler.canUse(action.item())) {
		var castTime = Math.abs(action.item().speed);
		//action：当前玩家选择的技能（未选择这里会一直卡着）
		if (castTime > 0 && battler.guardSkillId() != action.item().id) {
			battler._cast_atb = [action.item(),0,castTime];
			//battler._atbItem = null;
		} else {
			battler._atbItem = action.item();
			//battler._cast_atb = [null,0,1];
		};
	} else {
		battler.clearATB();
	};
};

//==============================
// * prepare Action Enemy
//==============================
BattleManager.prepareActionEnemy = function(battler) {
	battler.makeActions();
	var action = battler.currentAction();
	if (action && action.item() && battler.canUse(action.item())) {
	    battler._atbItem = action.item();
		var castTime = Math.abs(action.item().speed)
		if (castTime > 0 && battler.guardSkillId() != action.item().id) {
			battler._cast_atb = [action.item(),0,castTime];
			//battler._atbItem = null;
		} else {
			this._atbBattler = battler;
		};
	} else {
		battler.clearATB();
	};
};

//==============================
// * end Action
//==============================
var _mog_atb_bMngr_endAction = BattleManager.endAction;
BattleManager.endAction = function() {
    _mog_atb_bMngr_endAction.call(this);
	if( Moghunter.drill_change_battle_mode == 1 ){
		if (this._subject) { 
			this._subject.clearATB();
			this._subject._wait_atb = 5;
		};
		$gameTemp._atbInTurn = false;
	}
};

//*******************************
// * updateTurnEnd (Overwritten)*
//*******************************
var _mog_atb_updateTurnEnd = BattleManager.updateTurnEnd;
BattleManager.updateTurnEnd = function() {
	if( Moghunter.drill_change_battle_mode == 1 ){
		this._atbBattler = null;
		this._phase = 'start'
		$gameTemp._atbInTurn = false;
	}else{
		_mog_atb_updateTurnEnd.call(this);
	}
};

//*******************************
// * get Next Subject *(Overwritten)*
//*******************************
var _mog_atb_getNextSubject = BattleManager.getNextSubject;
BattleManager.getNextSubject = function() {
	if( Moghunter.drill_change_battle_mode == 1 ){
		for (;;) {
			var battler = this._actionBattlers.shift();
			if (!battler) {
				return null;
			}
			if (battler.isBattleMember() && battler.isAlive() && battler._intTurn) {
				return battler;
			};
		};
	}else{
		return _mog_atb_getNextSubject.call(this);
	}
};

//*******************************
// * is Inputting *(Overwritten)*
//*******************************
var _mog_atb_isInputting = BattleManager.isInputting;
BattleManager.isInputting = function() {
	if( Moghunter.drill_change_battle_mode == 1 ){
		return this._atbBattlerInput[0];
	}else{
		return _mog_atb_isInputting.call(this);
	}
};

//==============================
// * gget Available Actors
//==============================
BattleManager.getAvailableActors = function(index,value) {	
    var battler = null 	
	if (value > 0) {
		for (var i = index; i < $gameParty.battleMembers().length; i++) {
			var actor = $gameParty.battleMembers()[i];
			if (actor && actor.canInput() && this.actor() != actor) {
				battler = actor;
				break;
			};
		};
	} else if (value < 0) {
		for (var i = index; i >= 0; i--) {
			var actor = $gameParty.battleMembers()[i];
			if (actor && actor.canInput() && this.actor() != actor) {
				battler = actor;
				break;
			};
		};
	};
	return battler;
};

//==============================
// * change Actor Button
//==============================
BattleManager.changeActorButton_ATB = function(value) {
	var currentActor = this.actor();
	var battler = null;
	var index = this._actorIndex;
	var maxBatMembers = $gameParty.battleMembers().length
	index += value;
	if (index >= maxBatMembers) {
		index = 0;
	} else if (index < 0) {
		index = maxBatMembers - 1;
	};
	if (value > 0) {
	   battler = this.getAvailableActors(index,value);
	   if (!battler) {
		   battler = this.getAvailableActors(0,value); 
	   };
	} else if (value < 0) {	
	   battler = this.getAvailableActors(index,value);
	   if (!battler) {
		   battler = this.getAvailableActors(maxBatMembers - 1,value); 
	   };	
	};	
	if (battler) {
		currentActor.clearActions()
		SoundManager.playCursor();
		this.selectionComAtbClear()
		this.prepareCommandSelection(battler);
		currentActor.setActionState('undecided')
	};
};

//==============================
// * prepare Command Selection
//==============================
BattleManager.setActorIndexATB = function(battler) {
	for (var i = 0; i < $gameParty.members().length; i++) {
		 var actor = $gameParty.members()[i];
         if (battler === actor) {return i};
 	};			
	return -1;
};

//==============================
// * prepare Command Selection
//==============================
BattleManager.prepareCommandSelection = function(battler) {
	battler.clearActions()
	this._atbBattlerInput = [battler,false];
	this._actorIndex = this.setActorIndexATB(battler);
	battler.makeActions();
	battler._atbItem = null;
	battler.setActionState('inputting');
};

//==============================
// * need Prepare Selection
//==============================
BattleManager.needPrepareSelection = function(battler) {
	if (this._atbBattlerInput[0]) {return false};
	if (!battler.canInput()) {return false};
	if (battler._atbItem) {return false};
	if (battler._intTurn) {return false};
	return true
};

//==============================
// * end Battle
//==============================
var _mog_atb_btmngr_endBattle = BattleManager.endBattle;
BattleManager.endBattle = function(result) {
	if( Moghunter.drill_change_battle_mode == 1 ){
		$gameTemp._atbForceHideWindows = true;
		this.clearATBValueParty();
	}
	_mog_atb_btmngr_endBattle.call(this,result); 
};

//==============================
// * can Use Item ATB
//==============================
BattleManager.canUseItemATB = function() {
	if (!this._atbBattler._atbItem) {return false};	
	if (!this._atbBattler.canUse(this._atbBattler._atbItem)) {return false};
	return true;
};

//*******************************
// * start Turn   *(Overwritten)*
//*******************************
var _mog_atb_startTurn = BattleManager.startTurn;
BattleManager.startTurn = function() {
	if( Moghunter.drill_change_battle_mode == 1 ){

	   $gameTemp._atbInTurn = false;
	   if (!this._atbBattler) {return};	
	   if (!this.canUseItemATB()) {
		   this._atbBattler.clearATB();
		   this._atbBattler = null;
		   this._phase = 'start'
		   return;
	   };
	   this._phase = 'turn';
       $gameTemp._atbInTurn = true;
	   this._actionBattlers = [this._atbBattler]
	   if (this._atbBattler.isActor()) {this._atbBattler.requestMotionRefresh()};
	   this._atbBattler.requestMotionRefresh()
	   this._logWindow.startTurn();
	}else{
		return _mog_atb_startTurn.call(this);
	}
};

//==============================
// * can Event Turn ATB
//==============================
BattleManager.canUpdateEventTurnATB = function() {
	if ($gameSystem._atbEventPhase[3]) {return false};
    return true;
};

//==============================
// * Update Event Turn ATB
//==============================
BattleManager.updateEventTurnATB = function() {
    $gameSystem._atbEventPhase[0]++;
	if ($gameSystem._atbEventPhase[0] >= $gameSystem._atbEventPhase[1]) {
		$gameSystem._atbEventPhase[0] = 0;
		this.refreshEventPhase_ATB()
	};
};

//==============================
// * can Event Phase
//==============================
BattleManager.canUpdateEventPhase = function() {
	if ($gameTemp._battleEnd) {return false};
    return $gameSystem._atbEventPhase[3];
}; 

//==============================
// * Update Event Phase
//==============================
BattleManager.updateEventPhase = function() {
	var active = $gameSystem._atbEventPhase[3];
    if (this.isActionForced()) {
        this.processForcedAction();
        $gameSystem._atbEventPhase[3] = true;
    } else {
        $gameSystem._atbEventPhase[3] = this.updateEventMain();
    };	
	if (active != $gameSystem._atbEventPhase[3]) {
		$gameTemp._atbWinData[1] = true;
		$gameTemp._atbWaitTemp[0] = 10;
	};
}; 

//==============================
// * refresh Event Phase ATB
//==============================
BattleManager.refreshEventPhase_ATB = function() {
	$gameTroop.increaseTurn();
    $gameSystem._atbEventPhase[3] = this.updateEventMain();
	$gameTemp._atbWinData[0] = $gameSystem._atbEventPhase[3];
};

//==============================
// * display Start Messages
//==============================
var _mog_atb_BatMngr_displayStartMessages = BattleManager.displayStartMessages;
BattleManager.displayStartMessages = function() {
	if( Moghunter.drill_change_battle_mode == 1 ){
		if (String(Moghunter.atb_SkipEmerge) == 'true') {return};
	}
	return _mog_atb_BatMngr_displayStartMessages.call(this);
};

//==============================
// * processVictory
//==============================
var _mog_atbSprt_processVictory = BattleManager.processVictory;
BattleManager.processVictory = function() {
	if( Moghunter.drill_change_battle_mode == 1 ){
		$gameTemp._battleEnd = true;
	}
    _mog_atbSprt_processVictory.call(this);	 
};

//==============================
// * processAbort
//==============================
var _mog_atbSprt_processAbort = BattleManager.processAbort;
BattleManager.processAbort = function() {
	if( Moghunter.drill_change_battle_mode == 1 ){
		$gameTemp._battleEnd = true;
	}
	_mog_atbSprt_processAbort.call(this);	 
};

//==============================
// * processDefeat
//==============================
var _mog_atbSprt_processDefeat = BattleManager.processDefeat;
BattleManager.processDefeat = function() {
	if( Moghunter.drill_change_battle_mode == 1 ){
		$gameTemp._battleEnd = true;
	}
	_mog_atbSprt_processDefeat.call(this);	 
};

//=============================================================================
//=============================================================================
// ** Scene Battle
//=============================================================================
//=============================================================================

//==============================
// * Start
//==============================
var _mog_atb_sBat_start = Scene_Battle.prototype.start;
Scene_Battle.prototype.start = function() {
	_mog_atb_sBat_start.call(this);
	if( Moghunter.drill_change_battle_mode == 1 ){
		BattleManager.prepareInitialATBValue();
		$gameSystem._atbEventPhase[3] = BattleManager.updateEventMain();
	}
};

//*******************************
// * Update Battle Process  *(Overwritten)*
//*******************************
var _mog_atb_updateBattleProcess = Scene_Battle.prototype.updateBattleProcess;
Scene_Battle.prototype.updateBattleProcess = function() {
	if( Moghunter.drill_change_battle_mode == 1 ){
		
		if (Imported.MOG_EmergeMotion && $gameTemp.needSkipBattleProcessEM()) {
			$gameTemp._emerging[1]--;
			if ($gameTemp._emergingInt > 0) {$gameTemp._emergingInt--};
			return;
		};	
		this.updateCommandsATB();
		if (!BattleManager.isAborting() || BattleManager.isBattleEnd()) {
			if (BattleManager.canUpdateEventPhase()) {BattleManager.updateEventPhase()};
			if (BattleManager.needUpdate_ATBBasic()) {
				if (BattleManager.canUpdateEventTurnATB()) {BattleManager.updateEventTurnATB()};
				BattleManager.update_ATB();
				if ($gameSystem._atbMode[0] > 0 && !$gameTemp._atbInTurn) {
					BattleManager.updateEscape_ATB(this._actorCommandWindow.active);
				};
			};
			if ($gameSystem._atbMode[0] === 0) {
				BattleManager.updateEscape_ATB(this._actorCommandWindow.active);
			};
			BattleManager.update();
			if (this.canStartCommandSelection()) {
				BattleManager._atbBattlerInput[1] = true
				this.changeInputWindow()
			};
		};
		if (Imported.MOG_BalloonActionName) {this.updateBalloonName()};
	}else{
		_mog_atb_updateBattleProcess.call(this);
	}
};

//==============================
// * update
//==============================
var _mog_atb_sBat_update = Scene_Battle.prototype.update;
Scene_Battle.prototype.update = function() {
	_mog_atb_sBat_update.call(this);
	if( Moghunter.drill_change_battle_mode == 1 ){
		this.updateAtbScBat();
	}
};
	
//==============================
// * update Atb Sc Bat
//==============================
Scene_Battle.prototype.updateAtbScBat = function() {
    if ($gameTemp._atbForceHideWindows) {this.forceHideWindows()};	
	if ($gameTemp._atbWinData[0]) {this.forceHideWindowsTemp()};
	if ($gameTemp._atbWinData[1]) {this.loadWindowAtbData()};
	if ($gameTemp._atbneedRefWind) {this.forceRefreshWindowATB()};
	if ($gameTemp._atbWaitTemp[0] > 0) {$gameTemp._atbWaitTemp[0]--};
	if ($gameTemp._atbWaitTemp[1] > 0) {$gameTemp._atbWaitTemp[1]--};
	$gameSystem._atbMode[1] = !this.canUpdateAtbMode();
	if (this._actorCommandWindow.isClosed() && this._actorCommandWindow.active && BattleManager.actor()) {
		this._actorCommandWindow.open();
	};
};

//==============================
// * force Refresh WindowATB
//==============================
Scene_Battle.prototype.forceRefreshWindowATB = function() {
	$gameTemp._atbneedRefWind = false;
    if (this._enemyWindow.active) {
		if (this._enemyWindow.enemy().isDead()) {
			this._enemyWindow.refresh()
			this._enemyWindow.select(0);
			if (!this._enemyWindow.enemy()) {
				this.onEnemyCancel();
			};
		};
	};
};

//==============================
// * can Update Atb Mode
//==============================
Scene_Battle.prototype.canUpdateAtbMode = function() {
	if ($gameSystem._atbMode[0] === 0) {
	    if (this._partyCommandWindow.active) {return false};
		if (this._actorCommandWindow.active) {return false};
	    if (this._actorWindow.active) {return false};
		if (this._enemyWindow.active) {return false};
		if (this._skillWindow.active) {return false};
		if (this._itemWindow.active) {return false};
	} else if ($gameSystem._atbMode[0] === 1) {
	    if (this._actorWindow.active) {return false};
		if (this._enemyWindow.active) {return false};
		if (this._skillWindow.active) {return false};
		if (this._itemWindow.active) {return false};
	} else if ($gameSystem._atbMode[0] === 2) {
		if (this._skillWindow.active) {return false};
		if (this._itemWindow.active) {return false};				
	};
	return true;
};

//==============================
// * forceHideWindowsTemp
//==============================
Scene_Battle.prototype.forceHideWindowsTemp = function() {
	$gameTemp._atbWinData[0] = false;
    this.saveWindowAtbData();
	this.disableAllWindowATB();
};

//==============================
// * create Display Objects
//==============================
var _mog_atb_sBat_createDisplayObjects = Scene_Battle.prototype.createDisplayObjects;
Scene_Battle.prototype.createDisplayObjects = function() {
	_mog_atb_sBat_createDisplayObjects.call(this);
	if( Moghunter.drill_change_battle_mode == 1 ){
		this.saveWindowAtbData();
	}
};

//==============================
// * load Window Atb Data
//==============================
Scene_Battle.prototype.disableAllWindowATB = function() {
	this._partyCommandWindow.visible = false;
	this._partyCommandWindow.active = false;	
	this._actorCommandWindow.visible = false;
	this._actorCommandWindow.active = false;	
	this._actorWindow.visible = false;
	this._actorWindow.active = false;
	this._enemyWindow.visible = false;
	this._enemyWindow.active = false;
	this._skillWindow.visible = false;
	this._skillWindow.active = false; 
	this._itemWindow.visible = false;
	this._itemWindow.active = false;
};

//==============================
// * save Window Atb Data
//==============================
Scene_Battle.prototype.saveWindowAtbData = function() {
	$gameTemp._atbWinData[0] = false;
    this._partyCommandWindowData = {};
	this._partyCommandWindowData.visible = this._partyCommandWindow.visible;
	this._partyCommandWindowData.active = this._partyCommandWindow.active;
	
    this._actorCommandWindowData = {};
	this._actorCommandWindowData.visible = this._actorCommandWindow.visible;
	this._actorCommandWindowData.active = this._actorCommandWindow.active;	
	
    this._actorWindowData = {};
	this._actorWindowData.visible = this._actorWindow.visible;
	this._actorWindowData.active = this._actorWindow.active;

	this._enemyWindowData = {};
	this._enemyWindowData.visible = this._enemyWindow.visible;
	this._enemyWindowData.active = this._enemyWindow.active;

	this._skillWindowData = {};
	this._skillWindowData.visible = this._skillWindow.visible;
	this._skillWindowData.active = this._skillWindow.active;
   
    this._itemWindowData = {};
	this._itemWindowData.visible = this._itemWindow.visible;
	this._itemWindowData.active = this._itemWindow.active;
};

//==============================
// * load Window Atb Data
//==============================
Scene_Battle.prototype.loadWindowAtbData = function() {
	$gameTemp._atbWinData[1] = false;
	if (!this._actorWindowData) {return};
	this._partyCommandWindow.visible = this._partyCommandWindowData.visible;
	this._partyCommandWindow.active = this._partyCommandWindowData.active;
	
	this._actorCommandWindow.visible = this._actorCommandWindowData.visible;
	this._actorCommandWindow.active = this._actorCommandWindowData.active;	
	if (this._actorCommandWindow.active) {
        this._actorCommandWindow.open();
	};
	this._actorWindow.visible = this._actorWindowData.visible;
	this._actorWindow.active = this._actorWindowData.active;

	this._enemyWindow.visible = this._enemyWindowData.visible;
	this._enemyWindow.active = this._enemyWindowData.active;
	
	this._skillWindow.visible = this._skillWindowData.visible;
	this._skillWindow.active = this._skillWindowData.active;
   
	this._itemWindow.visible = this._itemWindowData.visible;
	this._itemWindow.active = this._itemWindowData.active;
};

//==============================
// * force Hide Windows
//==============================
Scene_Battle.prototype.forceHideWindows = function() {
    $gameTemp._atbForceHideWindows = false;
    this._partyCommandWindow.close();
	this._partyCommandWindow.active = false;
    this._actorCommandWindow.close();
    this._actorCommandWindow.active = false;
	this._actorWindow.hide();
	this._actorWindow.active = false;
	this._enemyWindow.hide();
	this._enemyWindow.active = false;
    this._skillWindow.hide();
	this._skillWindow.active = false;
    this._itemWindow.hide();
	this._itemWindow.active = false;
};

//==============================
// * can Start Command Selection
//==============================
Scene_Battle.prototype.canStartCommandSelection = function() {
	if (!BattleManager._atbBattlerInput[0]) {return false};
	if (BattleManager._atbBattlerInput[1]) {return false};
	return true;
};

//==============================
// * update Commands ATB
//==============================
Scene_Battle.prototype.updateCommandsATB = function() {
    if (this._actorCommandWindow.active) {
		if (Input.isTriggered(Moghunter.atb_NextActorLeft)) {
			BattleManager.changeActorButton_ATB(1);
		} else if (Input.isTriggered(Moghunter.atb_NextActorRight)) {
			BattleManager.changeActorButton_ATB(-1);
		};
	};
};

//*******************************
// * Select Next Command  *(Overwritten)*
//*******************************
var _mog_atb_selectNextCommand = Scene_Battle.prototype.selectNextCommand;
Scene_Battle.prototype.selectNextCommand = function() {
	if( Moghunter.drill_change_battle_mode == 1 ){
		BattleManager.selectionComAtbClear();
		this.endCommandSelection();
	}else{
		_mog_atb_selectNextCommand.call(this);
	}
};

//==============================
// * create Actor Command Window
//==============================
var _mog_atb_createActorCommandWindow = Scene_Battle.prototype.createActorCommandWindow;
Scene_Battle.prototype.createActorCommandWindow = function() {
	_mog_atb_createActorCommandWindow.call(this)
	if( Moghunter.drill_change_battle_mode == 1 ){
		this._actorCommandWindow.setHandler('cancel', null);
	}
};

//=============================================================================
//=============================================================================
// ** SPRITES
//=============================================================================
//=============================================================================


//==============================
// * load ATB Icon
//==============================
ImageManager.loadATBIcon = function(filename) {
	return this.loadBitmap('img/Battle__atb/', filename, 0, true);
};	

//=============================================================================
// ** Window Battle Actor
//=============================================================================

//==============================
// * Update
//==============================
var _mog_atb_wBatActor_update = Window_BattleActor.prototype.update;
Window_BattleActor.prototype.update = function() {
	if( Moghunter.drill_change_battle_mode == 1 ){
		if (!BattleManager.actor()) {return};
	}
	return _mog_atb_wBatActor_update.call(this);
};

//=============================================================================
// ** Window Battle Enemy
//=============================================================================

//==============================
// * Update
//==============================
var _mog_atb_wBatEnemy_update = Window_BattleEnemy.prototype.update;
Window_BattleEnemy.prototype.update = function() {
	if( Moghunter.drill_change_battle_mode == 1 ){
		if (!BattleManager.actor()) {return};
	}
	return _mog_atb_wBatEnemy_update.call(this);
};

//=============================================================================
// ** Window Actor Command
//=============================================================================

//==============================
// * Update
//==============================
var _mog_atb_wActCom_processOk = Window_ActorCommand.prototype.processOk;
Window_ActorCommand.prototype.processOk = function() {
	if( Moghunter.drill_change_battle_mode == 1 ){
		if (!BattleManager.actor()) {return};
		if ($gameTroop.isAllDead()) {return};
	}
	return _mog_atb_wActCom_processOk.call(this);
};

//*******************************
// * cursor Page Down  *(Overwritten)*
//*******************************
var _mog_atb_cursorPagedown = Window_ActorCommand.prototype.cursorPagedown;
Window_ActorCommand.prototype.cursorPagedown = function() {
	if( Moghunter.drill_change_battle_mode == 1 ){
		
	}else{
		return _mog_atb_cursorPagedown.call(this);
	}
};

//*******************************
// * cursor Page UP  *(Overwritten)*
//*******************************
var _mog_atb_cursorPageup = Window_ActorCommand.prototype.cursorPageup;
Window_ActorCommand.prototype.cursorPageup = function() {
	if( Moghunter.drill_change_battle_mode == 1 ){
		
	}else{
		return _mog_atb_cursorPageup.call(this);
	}
};

//=============================================================================
// ** Sprite Actor
//=============================================================================

//==============================
// * is Moving
//==============================
Sprite_Actor.prototype.isMoving = function() {
	if (this._actor && !this._actor._intTurn) {return false};
    return this._movementDuration > 0;
};

//=============================================================================
// ** Scene Base
//=============================================================================

//==============================
// ** create Hud Field
//==============================
Scene_Base.prototype.createHudField = function() {
	this._hudField = new Sprite();
	this._hudField.z = 10;
	this.addChild(this._hudField);
};

//==============================
// ** sort MZ
//==============================
Scene_Base.prototype.sortMz = function() {
   this._hudField.children.sort(function(a, b){return a.mz-b.mz});
};


//==============================
// * Create Escape Gauge ATB
//==============================
Scene_Base.prototype.createEscapeGaugeATB = function() {	
    this._escapeGaugeATB = new EscapeGaugeATB();
	this._escapeGaugeATB.mz = 140;
	this._hudField.addChild(this._escapeGaugeATB);
};

//=============================================================================
// ** Scene Battle
//=============================================================================

//==============================
// ** create Spriteset
//==============================
var _mog_atbEscapeGauge_sbattle_createSpriteset = Scene_Battle.prototype.createSpriteset;
Scene_Battle.prototype.createSpriteset = function() {
	_mog_atbEscapeGauge_sbattle_createSpriteset.call(this);
	if( Moghunter.drill_change_battle_mode == 1 ){
		if (!this._hudField) {this.createHudField()};
		this.createEscapeGaugeATB();
		this.sortMz();
	}	
};

//=============================================================================
// ** EscapeGaugeATB
//=============================================================================	
function EscapeGaugeATB() {
    this.initialize.apply(this, arguments);
}

EscapeGaugeATB.prototype = Object.create(Sprite.prototype);
EscapeGaugeATB.prototype.constructor = EscapeGaugeATB;

//==============================
// * Initialize
//==============================
EscapeGaugeATB.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);	
	this.setup();
    this.createSprites();
};

//==============================
// * Setup
//==============================
EscapeGaugeATB.prototype.setup = function() {
   this.opacity = 0;
   this.x = Moghunter.atb_EscapeGaugeX;
   this.y = Moghunter.atb_EscapeGaugeY;
};

//==============================
// * create Sprites
//==============================
EscapeGaugeATB.prototype.createSprites = function() {
    this.createLayout();
	this.createGauge();
};

//==============================
// * create Layout
//==============================
EscapeGaugeATB.prototype.createLayout = function() {
    this._layout = new Sprite(ImageManager.loadATBIcon(Moghunter.src_atb_escape_A));
	this.addChild(this._layout);
};

//==============================
// * create Gauge
//==============================
EscapeGaugeATB.prototype.createGauge = function() {
    this._gauge = new Sprite(ImageManager.loadATBIcon(Moghunter.src_atb_escape_B));
	this._gauge.x = Moghunter.atb_EscapeGaugeX2;
	this._gauge.y = Moghunter.atb_EscapeGaugeY2;
	this.addChild(this._gauge);  
};

//==============================
// * Update Gauge
//==============================
EscapeGaugeATB.prototype.updateGauge = function() {
    var cw = this._gauge.bitmap.width;
	var ch = this._gauge.height;
	var rg = cw * $gameTemp._atbEscape[0] / $gameTemp._atbEscape[1];
	this._gauge.setFrame(0,0,rg,ch);
};

//==============================
// * need Fade
//==============================
EscapeGaugeATB.prototype.needFade = function() {
	if ($gameTemp._atbEscape[0] <= 0) {return true};
	if ($gameMessage.isBusy()) {return true};
	if ($gameTemp._battleEnd) {return true};
	return false;
};

//==============================
// * Update Visible
//==============================
EscapeGaugeATB.prototype.updateVisible = function() {
    if (this.needFade()) {
		this.opacity -= 10;
	} else {
		this.opacity += 10;
	};
};

//==============================
// * Update
//==============================
EscapeGaugeATB.prototype.update = function() {
    Sprite.prototype.update.call(this);	
	this.updateVisible();
    this.updateGauge();
};
