//=============================================================================
// MOG_ChainCommands.js
//=============================================================================

/*:
 * @plugindesc (v1.3)[v1.3]  技能 - 按键连锁攻击
 * @author Moghunter （Drill_up翻译+优化）
 *
 * @param 资源-连锁框
 * @desc 连锁框的图片资源。
 * @default 连锁攻击-连锁框
 * @require 1
 * @dir img/Battle__ui/
 * @type file
 *
 * @param 平移-连锁框 X
 * @desc 以攻击的目标为基准，x轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 平移-连锁框 Y
 * @desc 以攻击的目标为基准，y轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 资源-按键
 * @desc 按键的图片资源。
 * @default 连锁攻击-按键
 * @require 1
 * @dir img/Battle__ui/
 * @type file
 *
 * @param 平移-按键 X
 * @desc 以连锁框为基准，x轴方向平移，单位像素。（可为负数）
 * @default 16
 *
 * @param 平移-按键 Y
 * @desc 以连锁框为基准，y轴方向平移，单位像素。（可为负数）
 * @default -32
 *
 * @param 资源-时间条
 * @desc 时间条的图片资源。
 * @default 连锁攻击-时间条
 * @require 1
 * @dir img/Battle__ui/
 * @type file
 *
 * @param 平移-时间条 X
 * @desc 以连锁框为基准，x轴方向平移，单位像素。（可为负数）
 * @default 17
 *
 * @param 平移-时间条 Y
 * @desc 以连锁框为基准，y轴方向平移，单位像素。（可为负数）
 * @default 1  
 *
 * @param 平移-下一技能名 X
 * @desc 以连锁框为基准，x轴方向平移，单位像素。（可为负数）
 * @default 15
 *
 * @param 平移-下一技能名 Y
 * @desc 以连锁框为基准，y轴方向平移，单位像素。（可为负数）
 * @default 18 
 *  
 * @param 音效-按键正确
 * @desc 按对键时播放的音效。
 * @require 1
 * @dir audio/se/
 * @type file
 * @default Cursor1
 *  
 * @param 音效-按键错误
 * @desc 按键错误时播放的音效。
 * @require 1
 * @dir audio/se/
 * @type file
 * @default Buzzer1
 *  
 * @param 音效-按键完成
 * @desc 完成按键，开始释放技能时播放的音效。
 * @require 1
 * @dir audio/se/
 * @type file
 * @default Item3
 *
 * @help  
 * =============================================================================
 * +++ MOG - Chain Commands (v1.3) +++
 * By Moghunter 
 * https://mogplugins.wordpress.com/
 * =============================================================================
 * 玩家释放配置了连锁的技能时，会弹出按键，若玩家瞬时间完成按键，
 * 则发动一轮新技能攻击。（类似于二段技）
 * 【现已支持插件关联资源的打包、加密】
 *
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.插件的作用域：战斗界面。
 *   作用于当前发动的技能。
 * 2.该插件无法在ATB战斗模式下起效。
 * 3.多次的连锁技能会覆盖角色的行动次数。
 *   假设角色的行动次数有两次（设置行动次数+100%时），如果成功
 *   释放了二段技，系统会将这个二段技视作为第二次的行动，从而
 *   无法实现第二次行动技能释放。
 * 
 * -----------------------------------------------------------------------------
 * ----激活条件
 * 含有连锁的技能，在其技能注释中，必须含有下面的关键字设置：
 * （注意，第1个冒号后面有一个空格，后面的冒号左右都没有空格。）
 *
 * Chain Action: A:B:C
 *
 * 参数A：下一技能编号
 *        如果按键完成，将执行编号对应的技能的释放。
 * 参数B：按键参数
 *        如果为单个数字，则为规定时间内随机出现的按键数量。
 *        如果是B1,2,3,4，则是指定了特定的按键。
 *          0 - 右  1 - 左  2 - 下
 *          3 - 上  4 - Z   5 - X
 *        逗号分隔按键，可以设置任意个按键。（只有一个"B"前缀）
 * 参数C：按键时间
 *        指定按键的持续时间，单位帧。（1秒60帧）
 *
 * 示例：
 * Chain Action: 10:5:60
 * （完成了含这个注释的技能，将出现5连锁按键，若完成，将释放编号为10的技能。）
 * Chain Action: 10:B1,1,1,2:60
 * （该设置将固定为，左左左下，规定时间内完成按键即可释放下个技能。）
 * （如果注释的技能就是编号的技能，指向了自己，则会无限循环下去。）
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 资源路径：img/Battle__ui （Battle后面有两个下划线）
 * 先确保项目img文件夹下是否有Battle__ui文件夹。
 * 要查看所有关联资源文件的插件，可以去看看"插件清单.xlsx"。
 * 使用招式名浮动框，需要配置资源文件：
 *
 * 资源-连锁框
 * 资源-按键
 * 资源-时间条
 *
 * -----------------------------------------------------------------------------
 * ----关于Drill_up优化：
 * [v1.1]
 * 使得该插件支持关联资源的打包、加密。
 * 部署时勾选去除无关文件，本插件中相关的文件不会被去除。
 * [v1.2]
 * 使得连锁按键可以被控制为设定的按键。
 * [v1.3]
 * 修改了插件关联的资源文件夹。
 *
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_ChainCommands = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_ChainCommands');
	Moghunter.chainCom_x = Number(Moghunter.parameters['平移-连锁框 X'] || 0);
	Moghunter.chainCom_y = Number(Moghunter.parameters['平移-连锁框 Y'] || 0);
	Moghunter.chainCom_Key_x = Number(Moghunter.parameters['平移-按键 X'] || 16);
	Moghunter.chainCom_Key_y = Number(Moghunter.parameters['平移-按键 Y'] || -32);
	Moghunter.chainCom_Meter_x = Number(Moghunter.parameters['平移-时间条 X'] || 17);
	Moghunter.chainCom_Meter_y = Number(Moghunter.parameters['平移-时间条 Y'] || 1);
	Moghunter.chainCom_Name_x = Number(Moghunter.parameters['平移-下一技能名 X'] || 15);
	Moghunter.chainCom_Name_y = Number(Moghunter.parameters['平移-下一技能名 Y'] || 18);
	
	Moghunter.src_Chain_A = String(Moghunter.parameters['资源-连锁框']);
	Moghunter.src_Chain_B = String(Moghunter.parameters['资源-按键']);
	Moghunter.src_Chain_C = String(Moghunter.parameters['资源-时间条']);
	Moghunter.se_Chain_A = String(Moghunter.parameters['音效-按键完成']);
	Moghunter.se_Chain_B = String(Moghunter.parameters['音效-按键正确']);
	Moghunter.se_Chain_C = String(Moghunter.parameters['音效-按键错误']);
	
//=============================================================================
// ** 资源文件夹
//=============================================================================
ImageManager.load_BattleUi = function(filename) {
    return this.loadBitmap('img/Battle__ui/', filename, 0, true);
};

//=============================================================================
// ** Game Temp
//=============================================================================

//==============================
// * Initialize
//==============================
var _alias_mog_bchain_gtemp_initialize = Game_Temp.prototype.initialize;
Game_Temp.prototype.initialize = function() {
	_alias_mog_bchain_gtemp_initialize.call(this);
	this._bchainTemp = false;
	this.clearBchain();
};

//==============================
// * Clear Bchain
//==============================
Game_Temp.prototype.clearBchain = function() { 
    this._bchainData = [false,null,null,null,null,0,0,null,false,false,false,false];
};

//=============================================================================
// ** Game Action
//=============================================================================

//==============================
// * applyItemUserEffect
//==============================
var _mog_bchain_gaction_applyItemUserEffect = Game_Action.prototype.applyItemUserEffect;
Game_Action.prototype.applyItemUserEffect = function(target) {
	$gameTemp._bchainData[11] = true;
	_mog_bchain_gaction_applyItemUserEffect.call(this,target)
};

//=============================================================================
// ** Battle Manager
//=============================================================================

//==============================
// * Start Action
//==============================
var _mog_bchain_bmngr_startAction = BattleManager.startAction;
BattleManager.startAction = function() {
	 $gameTemp.clearBchain();
	 if (this.canCheckChainCommands()) {this.checkChainAction()};
	_mog_bchain_bmngr_startAction.call(this);
};

//==============================
// * Can Check Chain Commands
//==============================
BattleManager.canCheckChainCommands = function() {
	if (this._subject.isEnemy()) {return false};
    if (!this._subject.currentAction()) {return false};
	if (!this._subject.currentAction().item()) {return false};
	return true;
};

//==============================
// * Check Chain Action
//==============================
BattleManager.checkChainAction = function() {	
	var item = this._subject.currentAction().item();
	var item_notes = item.note.split(/[\r\n]+/);
    item_notes.forEach(function(note) {
         var note_data = note.split(': ')
		 if (note_data[0].toLowerCase() == "chain action"){			 
			 var par = note_data[1].split(':');
			 var action = $dataSkills[Number(par[0])];
			 var times = 1;
			 var keys = [];
			 if( par[1][0] == "B" ){
				keys = par[1].slice(1).split(',');
				times = keys.length;
			 }else{
				times = Math.min(Math.max(Number(par[1]),1),999);
			 }
			 var duration = Math.min(Math.max(Number(par[2]),10),999);			 
			 if (action) {
			    $gameTemp._bchainData[1] = action;
				$gameTemp._bchainData[6] = times;
				$gameTemp._bchainData[7] = duration;
				$gameTemp._bchainData["keys"] = keys;
			 };
         };
	},this);
};

//==============================
// * Invoke Action
//==============================
var _mog_bchain_bmngr_invokeAction = BattleManager.invokeAction;
BattleManager.invokeAction = function(subject, target) {
    if ($gameTemp._bchainData[1]) {BattleManager.setBchainPosition(subject, target)};
	_mog_bchain_bmngr_invokeAction.call(this,subject, target);	
};

//==============================
// * set Bchain Position
//==============================
BattleManager.setBchainPosition = function(subject, target) {
	if (this._subject.isActor()) {
		$gameTemp._bchainData[8] = target;
		if ($gameTemp._bchainData[1].scope === 1 || 
		    $gameTemp._bchainData[1].scope === 7 ||
			$gameTemp._bchainData[1].scope === 9) {
			$gameTemp._bchainData[4] = target;
		} else {
	        if ($gameSystem.isSideView()) {
			    $gameTemp._bchainData[4] = this._subject; 
			} else {
				$gameTemp._bchainData[2] = Graphics.boxWidth / 2;
				$gameTemp._bchainData[3] = Graphics.boxHeight / 2;		
			};	
		};
	};
};	
	
//==============================
// * End Action
//==============================
var _mog_bchain_bmngr_endAction = BattleManager.endAction;
BattleManager.endAction = function() {
	if (BattleManager.canUseChainAction()) {
		$gameTemp._bchainData[0] = true;
		$gameTemp._bchainTemp = true;
		if ($gameTemp._bchainData[9]) {this.executeChainAction()};
		return;
	  };
	 _mog_bchain_bmngr_endAction.call(this);
	 $gameTemp.clearBchain();
	 $gameTemp._bchainTemp = false;
};

//==============================
// * can Use Chain Action
//==============================
BattleManager.canUseChainAction = function() {
	if (!$gameTemp._bchainData[1]) {return false};
	if (!$gameTemp._bchainData[11]) {return false};
	if (!this._subject) {return false};
	if (!this._subject.canInput()) {return false};
	if (this._subject.isDead()) {return false};
	if ($gameParty.isAllDead()) {return false};
	if ($gameTroop.isAllDead()) {return false};
	if (!this._subject.canUse($gameTemp._bchainData[1])) {return false};
	if ($gameTemp._bchainData[1].scope === 1 || 
		 $gameTemp._bchainData[1].scope === 7 ||
		 $gameTemp._bchainData[1].scope === 9) {
	     if (!$gameTemp._bchainData[8]) {return false};
		 if ($gameTemp._bchainData[8].isDead()) {return false};
    }
	return true;
};

//==============================
// * execute Chain Action
//==============================
BattleManager.executeChainAction = function() {
	if ($gameTemp._bchainData[10]) {
	    this._subject.forceAction($gameTemp._bchainData[1].id, -2);		
		$gameTemp.clearBchain();
	    BattleManager.processTurn();
	} else {
		$gameTemp.clearBchain();
	};
};

//=============================================================================
// ** Sprite Battler
//=============================================================================

//==============================
// * update Main
//==============================
var _mog_bchain_sprbattler_updateMain = Sprite_Battler.prototype.updateMain;
Sprite_Battler.prototype.updateMain = function() {
	_mog_bchain_sprbattler_updateMain.call(this);
	if (this.needUpdateBchainPosition()) {this.updateBchainPosition()};
};

//==============================
// * need Update Bchain Pos
//==============================
Sprite_Battler.prototype.needUpdateBchainPosition = function() {
   if (!$gameTemp._bchainData[4]) {return false};
   if ($gameTemp._bchainData[4] != this._battler) {return false};
   return true;	
};

//==============================
// * update B Chain Position
//==============================
Sprite_Battler.prototype.updateBchainPosition = function() {
	$gameTemp._bchainData[2] = this.x;
	$gameTemp._bchainData[3] = this.y;
	if (this._mainSprite) {
        $gameTemp._bchainData[3] -= this._mainSprite.height;
	} else if (this._bitmap) {	
	    $gameTemp._bchainData[3] -= this._bitmap.height / 2;
	};
};

//=============================================================================
// ** Spriteset Battle
//=============================================================================

//==============================
// * create Upper Layer
//==============================
var _mog_bchain_sprset_createUpperLayer = Spriteset_Battle.prototype.createUpperLayer;
Spriteset_Battle.prototype.createUpperLayer = function() {
	_mog_bchain_sprset_createUpperLayer.call(this);
    this.createBchain();	
};

//==============================
// * create B Chain 
//==============================
Spriteset_Battle.prototype.createBchain = function() {
    this._bchain = new BattleChainSprite();
	this._bchain.z = 25;
	this.addChild(this._bchain);
};

//==============================
// * Update
//==============================
var _mog_bchain_sprtbat_update = Spriteset_Battle.prototype.update;
Spriteset_Battle.prototype.update = function() {
    _mog_bchain_sprtbat_update.call(this)
	if (this._bchain && Imported.MOG_BattleCamera) {
	   this._bchain.x = this._battleField.x;
	   this._bchain.y = this._battleField.y;
	};
};

if (Imported.MOG_BattleCamera) {
	//==============================
	// * Update Focus
	//==============================
	var _mog_bchaincom_sprbat_updateFocus = Spriteset_Battle.prototype.updateFocus;
	Spriteset_Battle.prototype.updateFocus = function() {
		if ($gameTemp._bchainTemp) {$gameTemp._bcam_user[2] = 0};
		_mog_bchaincom_sprbat_updateFocus.call(this);
	};
};

//=============================================================================
// * Battle Chain Sprite
//=============================================================================
function BattleChainSprite() {
    this.initialize.apply(this, arguments);
};

BattleChainSprite.prototype = Object.create(Sprite.prototype);
BattleChainSprite.prototype.constructor = BattleChainSprite;

//==============================
// * Initialize
//==============================
BattleChainSprite.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);	
	this.z = 25;
	this._data = [-1,-1,false];
	this._keyIndex = 0;
	this._duration = 0;
    this.loadImages();
	this.createLayout();
	this.createMeter();	
	this.createKeys();
	this.createName();
};

//==============================
// * Load Images
//==============================
BattleChainSprite.prototype.loadImages = function() {
	this._keysImg = ImageManager.load_BattleUi(Moghunter.src_Chain_B); 
	this._layoutImg = ImageManager.load_BattleUi(Moghunter.src_Chain_A);
	this._meterImg = ImageManager.load_BattleUi(Moghunter.src_Chain_C);
};

//==============================
// * getData
//==============================
BattleChainSprite.prototype.getData = function() {	
    this._data[0] = Math.floor(this._keysImg.width / 6);
	this._data[1] = this._keysImg.height;
};

//==============================
// * create Layout
//==============================
BattleChainSprite.prototype.createLayout = function() {	
	this._layout = new Sprite(this._layoutImg);
	this._layout.opacity = 0;
	this._layout.anchor.x = 0.5;
	this._layout.anchor.y = 0.5;
	this.addChild(this._layout);
};

//==============================
// * create Name
//==============================
BattleChainSprite.prototype.createName = function() {
	this._name = new Sprite(new Bitmap(100,32));
	this._name.opacity = 0;
	this._name.anchor.x = 0.5;
	this._name.anchor.y = 0.5;
	this._name.bitmap.fontSize = 20;
	this.addChild(this._name);
};

//==============================
// * create Keys
//==============================
BattleChainSprite.prototype.createKeys = function() {
	this._keys = new Sprite(this._keysImg);
	this._keys.opacity = 0;
	this._keys.anchor.x = 0.5;
	this._keys.anchor.y = 0.5;	
	this.addChild(this._keys);
};

//==============================
// * create Meter
//==============================
BattleChainSprite.prototype.createMeter = function() {
	this._meter = new Sprite(this._meterImg);
	this._meter.opacity = 0;
	this._meter.anchor.x = 0;
	this._meter.anchor.y = 0.5;	
	this.addChild(this._meter);	
};

//==============================
// * Need Refresh
//==============================
BattleChainSprite.prototype.needRefresh = function() {
	if ($gameTemp._bchainData[0] == this._data[2]) {return false};
	if (!this.item()) {return false};
	if (!this.posX()) {return false};
	return true;
};

//==============================
// * Item
//==============================
BattleChainSprite.prototype.item = function() {
   return $gameTemp._bchainData[1];
};

//==============================
// * posX
//==============================
BattleChainSprite.prototype.posX = function() {
   return $gameTemp._bchainData[2] + Moghunter.chainCom_x;
};

//==============================
// * posY
//==============================
BattleChainSprite.prototype.posY = function() {
   return $gameTemp._bchainData[3] + Moghunter.chainCom_y;
};

//==============================
// * Times
//==============================
BattleChainSprite.prototype.times = function() {
   return $gameTemp._bchainData[6];
};

//==============================
// * Duration
//==============================
BattleChainSprite.prototype.duration = function() {
   return $gameTemp._bchainData[7];
};

//==============================
// * Refresh
//==============================
BattleChainSprite.prototype.refresh = function() {	
 	this._data[2] = $gameTemp._bchainData[0];
	this._duration = this.duration();
	this._layout.opacity = 255;
	this._keys.opacity = 255;
	this._keys.scale.x = 2.0;
	this._keys.scale.y = 2.0;
	this._meter.opacity = 255;
	this._name.opacity = 255;
	this._name.bitmap.clear();
	this._name.bitmap.drawText(this.item().name,0,0,100,32,"center");
	this._keys.setFrame(this._data[0] * this._keyIndex,0,this._data[0],this._data[1]);
};

//==============================
// * need Update Action
//==============================
BattleChainSprite.prototype.needUpdateAction = function() {
	if (!this.item()) {return false};
	if (!this.posX()) {return false};
	if (this._layout.opacity == 0) {return false};
	return true; 
};

//==============================
// * Update Action
//==============================
BattleChainSprite.prototype.updateAction = function() {
     this.updatePosition();
	 this.updateCommands();
	 if (this._duration > 0) {this.updateTime()};
};

//==============================
// * Update Action
//==============================
BattleChainSprite.prototype.updateTime = function() {
      this._duration --
      this.updateMeter();
	  if (this._duration <= 0) {this.setWrong();}; 
};

//==============================
// * Update Meter
//==============================
BattleChainSprite.prototype.updateMeter = function() {
	  var rate = this._duration * this._meterImg.width / this.duration();
	  this._meter.setFrame(0,0,rate,this._meterImg.height)
};

//==============================
// * Update Action
//==============================
BattleChainSprite.prototype.check_key = function(value) {
    if (value == this._keyIndex) {		
	    this.nextKey();
	} else {
        this.setWrong();
	};
};

//==============================
// * set Wrong
//==============================
BattleChainSprite.prototype.setWrong = function(value) {
	//SoundManager.playBuzzer();
	var se = {};
    se.name = Moghunter.se_Chain_C;
    se.pitch = 100;
    se.volume = 100;
    AudioManager.playSe(se);
	this.clearCommands();
};

//==============================
// * Next Key
//==============================
BattleChainSprite.prototype.nextKey = function(value) {
	if (this.times() <= 0) {this.enableAction();return};	
	//SoundManager.playCursor();
	var se = {};
    se.name = Moghunter.se_Chain_B;
    se.pitch = 100;
    se.volume = 100;
    AudioManager.playSe(se);
	var key_len = $gameTemp._bchainData["keys"].length;
	if( key_len == 0){
		this._keyIndex = Math.randomInt(6);
	}else{
		this._keyIndex = $gameTemp._bchainData["keys"][ key_len - $gameTemp._bchainData[6]];
	}
	$gameTemp._bchainData[6] -= 1;
	this.refresh();
};

//==============================
// * enable Action
//==============================
BattleChainSprite.prototype.enableAction = function(value) {
	//SoundManager.playUseSkill();
	var se = {};
    se.name = Moghunter.se_Chain_A;
    se.pitch = 100;
    se.volume = 100;
    AudioManager.playSe(se);
	$gameTemp._bchainData[10] = true;
	this.clearCommands();
};

//==============================
// * Set Wrong
//==============================
BattleChainSprite.prototype.clearCommands = function() {
	this._layout.opacity = 0;
	this._keys.opacity = 0;
	this._meter.opacity = 0;
	this._name.opacity = 0;	
	this._duration = 0;
	this._data[2] = false;
	$gameTemp._bchainData[9] = true;
};

//==============================
// * Update Commands
//==============================
BattleChainSprite.prototype.updateCommands = function() {
	if (Input.isTriggered("right")) {this.check_key(0)}
	else if (Input.isTriggered("left")) {this.check_key(1)}
	else if (Input.isTriggered("down")) {this.check_key(2)}
	else if (Input.isTriggered("up")) {this.check_key(3)}
	else if (Input.isTriggered("ok")) {this.check_key(4)}
	else if (Input.isTriggered("cancel")) {this.check_key(5)}	;
};

//==============================
// * Update Position
//==============================
BattleChainSprite.prototype.updatePosition = function() {
	this._layout.x = this.posX();
	this._layout.y = this.posY();
	this._keys.x = this.posX() + Moghunter.chainCom_Key_x;
	this._keys.y = this.posY() + Moghunter.chainCom_Key_y;	
	this._meter.x = this.posX() - (this._meterImg.width / 2) + Moghunter.chainCom_Meter_x;
	this._meter.y = this.posY() + Moghunter.chainCom_Meter_y; 		
    this._name.x = this.posX() + Moghunter.chainCom_Name_x; 
    this._name.y = this.posY() + Moghunter.chainCom_Name_y; 
};

//==============================
// * Update
//==============================
BattleChainSprite.prototype.update = function() {
    Sprite.prototype.update.call(this);	
	if (this._data[0] === -1) {
	   if (this._keysImg.isReady() && this._meterImg.isReady()) {this.getData()};
	   return;
    };
	if (this.needRefresh()) {this.nextKey()};
	if (this.needUpdateAction()) {this.updateAction()};
	if (this._keys.scale.x > 1.00) {this._keys.scale.x -= 0.1};
	this._keys.scale.y = this._keys.scale.x
};
