//=============================================================================
// MOG_BalloonActionName.js
//=============================================================================

/*:
 * @plugindesc (v1.7)[v1.2]  技能 - 招式名气泡框
 * @author Moghunter （Drill_up翻译+优化）
 *
 * @param 资源-气泡框
 * @desc 气泡框的图片资源。气泡框会分成上中下三个部分，上为气泡的尖角，中为用于拉伸的宽度区域，下为边缘。
 * @default 招式名气泡框
 * @require 1
 * @dir img/Battle__ui/
 * @type file
 *
 * @param 是否等待气泡框显示
 * @type boolean
 * @on 等待
 * @off 不等待
 * @desc true - 等待，false - 不等待。等待气泡框显示招式名消失后，才进行出招。
 * @default true
 *
 * @param 持续时间
 * @desc 气泡框的持续时间，单位帧。（1秒60帧）
 * @default 60
 * 
 * @param 平移-气泡框 X
 * @desc x轴方向平移，单位像素。（可为负数）
 * @default -10
 * 
 * @param 平移-气泡框 Y
 * @desc y轴方向平移，单位像素。（可为负数）
 * @default 0
 * 
 * @param 平移-招式名 X
 * @desc 以气泡框的位置为基准，x轴方向平移，单位像素。（可为负数）
 * @default 0
 * 
 * @param 平移-招式名 Y
 * @desc 以气泡框的位置为基准，y轴方向平移，单位像素。（可为负数）
 * @default 0 
 *
 * @help  BalloonActionName
 * =============================================================================
 * +++ MOG - Balloon Action Name (v1.7) +++
 * By Moghunter 
 * https://mogplugins.wordpress.com/
 * =============================================================================
 * 释放技能，会弹出气泡框以显示招式名。
 * 在SV模式下，角色位置弹出气泡。一般模式则在头像下弹出。
 * 【现已支持插件关联资源的打包、加密】
 *
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.插件的作用域：战斗界面。
 *   在VS模式中，角色发招式会显示气泡。
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 资源路径：img/Battle__ui （Battle后面有两个下划线）
 * 先确保项目img文件夹下是否有Battle__ui文件夹！
 * 要查看所有关联资源文件的插件，可以去看看"插件清单.xlsx"。
 * 使用招式名气泡框，需要配置资源文件：
 * 
 * 资源-气泡框
 *
 * 气泡框会分成上中下三个部分，上为气泡的尖角，中为用于拉伸的宽度区
 * 域，下为边缘。
 *      
 * -----------------------------------------------------------------------------
 * ----可选设定
 * 如果你想某些技能不弹出气泡框，可以在技能注释下面关键字：
 * 
 * Disable Balloon Name
 *
 * -----------------------------------------------------------------------------
 * ----关于Drill_up优化：
 * [v1.1]
 * 使得该插件支持关联资源的打包、加密。
 * 部署时勾选去除无关文件，本插件中相关的文件不会被去除。
 * [v1.2]
 * 修改了插件关联的资源文件夹。
 * 
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================

　　var Imported = Imported || {};
　　Imported.MOG_BalloonActionName = true;
　　var Moghunter = Moghunter || {}; 	
	Moghunter.parameters = PluginManager.parameters('MOG_BalloonActionName');
	Moghunter._sagaNameDuration = Number(Moghunter.parameters['持续时间'] || 60);
	Moghunter._sagaNameX = Number(Moghunter.parameters['平移-气泡框 X'] || -10);
    Moghunter._sagaNameY = Number(Moghunter.parameters['平移-气泡框 Y'] || 0);
	Moghunter._sagaNameNameX = Number(Moghunter.parameters['平移-招式名 X'] || 0);
    Moghunter._sagaNameNameY = Number(Moghunter.parameters['平移-招式名 Y'] || 0);
    Moghunter._sagaNameWait = String(Moghunter.parameters['是否等待气泡框显示'] || "false");
	   Moghunter.src_blob = String(Moghunter.parameters['资源-气泡框']);
	
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
var _alias_mog_saganame_initialize = Game_Temp.prototype.initialize
Game_Temp.prototype.initialize = function() {
	_alias_mog_saganame_initialize.call(this);
	this._sagaNameRunning = [false,false];
	this._sagaNameRunning[0] = Moghunter._sagaNameWait === "true" ? true : false;
};

//==============================
// * is Balloon NameRunning 
//==============================
Game_Temp.prototype.isBalloonNameRunning = function() {
	if (!$gameTemp._sagaNameRunning[0]) {return false};
	if ($gameTemp._sagaNameRunning[1]) {return true};
	return false;
};

//=============================================================================
// ** Game Battler
//=============================================================================

//==============================
// ** Init Members
//==============================
var _mog_saganame_gbat_initMembers = Game_Battler.prototype.initMembers;
Game_Battler.prototype.initMembers = function() {
	_mog_saganame_gbat_initMembers.call(this);
	this._actionNameData = [false,false,false,null];
};

//=============================================================================
// ** Battle Manager
//=============================================================================

//==============================
// ** process Turn
//==============================
var _mog_sagaName_bmng_startAction = BattleManager.startAction;
BattleManager.startAction = function() {
	if (this._subject.isActor()) {this.setActionName();};
	_mog_sagaName_bmng_startAction.call(this);
};

//==============================
// * set Action Name
//==============================
BattleManager.setActionName = function() {
	this._subject._actionNameData[0] = true;
    if (!this._subject.currentAction() || !this._subject.currentAction().item()) {return};
	var item = this._subject.currentAction().item();
	var notes = item.note.split(/[\r\n]+/);
	var enableName = true;
    notes.forEach(function(note) {
    if (note == "Disable Balloon Name" ) {enableName = false};
	},this);		
	if (enableName) {
		this._subject._actionNameData = [true,true,true,item];
	};
};

//==============================
// * End Turn
//==============================
var _mog_sagaName_bmngr_endAction  = BattleManager.endAction;
BattleManager.endAction = function() {
	_mog_sagaName_bmngr_endAction.call(this);
	if (this._subject) {this._subject._actionNameData = [false,false,false,null]};
};

//=============================================================================
// ** Sprite Actor
//=============================================================================

//==============================
// * CreateLowerLayer
//==============================
var _mog_balloonAct_createUpperLayer = Spriteset_Battle.prototype.createUpperLayer
Spriteset_Battle.prototype.createUpperLayer = function() {
	_mog_balloonAct_createUpperLayer.call(this);	
	this.createBalloonName();
};

//==============================
// * create Balloon Name
//==============================
Spriteset_Battle.prototype.createBalloonName = function() {
	this._balloonField = new Sprite();
	this.addChild(this._balloonField);
	this._balloonName = [];
	for (var i = 0; i < this._actorSprites.length; i++) {
	     this._balloonName[i] = new SpriteBalloonName(this._actorSprites[i]);
		 this._balloonField.addChild(this._balloonName[i]);
	};
};

//==============================
// * Update
//==============================
var _mog_ballonAct_sprBat_update = Spriteset_Battle.prototype.update;
Spriteset_Battle.prototype.update = function() {
	_mog_ballonAct_sprBat_update .call(this);
	if (Imported.MOG_BattleCamera && this._balloonField) {this.updateBalloonField()};
};

//==============================
// * Update Balloon Field
//==============================
Spriteset_Battle.prototype.updateBalloonField = function() {
    this._balloonField.x = this._battleField.x
	this._balloonField.y = this._battleField.y
};

//=============================================================================
// * Sprite Balloon Name
//=============================================================================
function SpriteBalloonName() {
    this.initialize.apply(this, arguments);
};

SpriteBalloonName.prototype = Object.create(Sprite.prototype);
SpriteBalloonName.prototype.constructor = SpriteBalloonName;

//==============================
// * Initialize
//==============================
SpriteBalloonName.prototype.initialize = function(sprite) {
    Sprite.prototype.initialize.call(this);	
	this._sprite = sprite;
	this.z = 20;
	this._duration = [false,0];
	this._cwh = [-1,-1];
    this.createBalloon();
    this.createName();
};

//==============================
// * create Balloon
//==============================
SpriteBalloonName.prototype.createBalloon = function() {
    this._balloonNameImg = ImageManager.load_BattleUi(Moghunter.src_blob);
	this._balloon = [];
    for (var i = 0; i < 4; i++) {
		this._balloon[i] = new Sprite(this._balloonNameImg);
		this._balloon[i].anchor.x = 0.5;
		this._balloon[i].opacity = 0;
		this._balloon[i].z = 20;
		this.addChild(this._balloon[i]);
	};
};

//==============================
// * create Name
//==============================
SpriteBalloonName.prototype.createName = function() {
	this._name = new Sprite(new Bitmap(120,32));
	this._name.bitmap.fontSize = 20;
	this._name.anchor.x = 0.5;
	this._name.opacity = 0;
	this._name.z = 21;
	this.addChild(this._name);
};

//==============================
// * Battler
//==============================
SpriteBalloonName.prototype.battler = function() {
    return this._sprite._battler;
};

//==============================
// * Need Refresh
//==============================
SpriteBalloonName.prototype.needRefresh = function() {
  return this.battler()._actionNameData[2];
};

//==============================
// * get Sprite Data
//==============================
SpriteBalloonName.prototype.getSpriteData = function() {
    this._cwh[0] = this._balloonNameImg.width;
	this._cwh[1] = Math.floor(this._balloonNameImg.height / 3);
	this._cwh[2] = Moghunter._sagaNameX;
	this._cwh[3] = -((this._cwh[1] * 2) + 36) + Moghunter._sagaNameY;
	this._name.x = Moghunter._sagaNameX + Moghunter._sagaNameNameX;
	this._name.y = this._cwh[3] + Moghunter._sagaNameNameY;
};

//==============================
// * Refresh Name
//==============================
SpriteBalloonName.prototype.refreshName = function() {
	$gameTemp._sagaNameRunning[1] = true;
	this._sprite._battler._actionNameData[2] = false;
	this._duration = [true,Moghunter._sagaNameDuration];
	var text = this._sprite._battler._actionNameData[3].name;
    this.refreshBalloonSprites(text);
    this.refreshActionName(text);
};

//==============================
// * Refresh Action Name
//==============================
SpriteBalloonName.prototype.refreshActionName = function(text) {
	this._name.opacity = 255;
    this._name.bitmap.clear();
	this._name.bitmap.drawText(text,0,0,120,32,'center');
};

//==============================
// * Refresh Balloon Sprites
//==============================
SpriteBalloonName.prototype.refreshBalloonSprites = function(text) {
	var textsize = Math.floor((text.length * 7) + this._cwh[0]);
	var wsize = Math.min(Math.max(textsize,48),120);
	var wposX = Math.floor((wsize / 2) + (this._cwh[0] / 2));
    for (var i = 0; i < this._balloon.length; i++) {
		 this._balloon[i].x = this._cwh[2];
		 this._balloon[i].y = this._cwh[3];
		 this._balloon[i].opacity = 255;
		 if (i === 0) {
			 this._balloon[i].setFrame(0,0,this._cwh[0],this._cwh[1]);
			 this._balloon[i].x += (this._cwh[0] / 4);
			 this._balloon[i].y += this._cwh[1];			 
		 } else if (i === 1) {
		     this._balloon[i].setFrame(0,this._cwh[1],this._cwh[0],this._cwh[1]);
			 this._balloon[i].scale.x = wsize / this._cwh[0];
		 } else if (i === 2) {
			 this._balloon[i].setFrame(0,this._cwh[1] * 2,this._cwh[0],this._cwh[1]);
		     this._balloon[i].x -= wposX;
		 } else if (i === 3) {	 
		     this._balloon[i].setFrame(0,this._cwh[1] * 2,this._cwh[0],this._cwh[1]);
			 this._balloon[i].x += wposX;
			 this._balloon[i].scale.x = -1;
		 };
	};
};
//==============================
// * Update Sprites
//==============================
SpriteBalloonName.prototype.updateSprites = function() {
   if (this._duration[1] > 0) {this._duration[1] --
   } else {this._name.opacity = 0;
		  this._duration = [false,0];
		  this._sprite._battler._actionNameData = [true,false,false,null];
		  $gameTemp._sagaNameRunning[1] = false;
   };
   for (var i = 0; i < this._balloon.length; i++) {
       this._balloon[i].opacity = this._name.opacity;
   };   
   this.x = this._sprite.x;
   this.y = this._sprite.y;
};

//==============================
// * Update
//==============================
SpriteBalloonName.prototype.update = function() {
 Sprite.prototype.update.call(this);
	if (this._cwh[0] === -1) {
		if (this._balloonNameImg.isReady()) {this.getSpriteData()};
	    return;
	};
	if (!this.battler()) {return};
    if (this.needRefresh()) {this.refreshName()};
	if (this._duration[0]) {this.updateSprites()};
};

if (Imported.MOG_BattleCamera ) { 
//==============================
// * Update Focus
//==============================
var _mog_saganame_sprbat_updateFocus = Spriteset_Battle.prototype.updateFocus;
Spriteset_Battle.prototype.updateFocus = function() {	
	if ($gameTemp._sagaNameRunning[1]) {$gameTemp._bcam_user[2] = 2};
	_mog_saganame_sprbat_updateFocus.call(this);
};
};

//=============================================================================
// * Scene Battle
//=============================================================================

//==============================
// * Update 
//==============================
var _mog_sagaName_sbat_update = Scene_Battle.prototype.update;
Scene_Battle.prototype.update = function() {	
	if (!Imported.MOG_ATB) {
		if ($gameTemp.isBalloonNameRunning()) {
			this._spriteset.update();
			this.updateBalloonName();
			return
		};
	};
	_mog_sagaName_sbat_update.call(this);
};

//==============================
// * Update Balloon Name
//==============================
Scene_Battle.prototype.updateBalloonName = function() {
	if (Imported.MOG_BattleHud) {
	for (var i = 0; i < this._battle_hud.length; i++) {
		this._battle_hud[i].update()
	};			
	}
};

