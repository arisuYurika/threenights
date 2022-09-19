//=============================================================================
// MOG_TreasurePopup.js
//=============================================================================
/*:
 * @plugindesc (v1.1)[v1.2]  地图UI - 道具浮动文字
 * @author Moghunter （Drill_up翻译）
 * 
 * @param 平移-浮动文字 X
 * @desc 以触发事件的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 平移-浮动文字 Y
 * @desc 以触发事件的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default -32
 *
 * @param 漂浮速度 X
 * @desc x轴方向的漂浮速度，正数向右，负数向左。
 * @default 0
 *
 * @param 漂浮速度 Y
 * @desc y轴方向的漂浮速度，正数向上，负数向下。
 * @default 1
 *
 * @param 漂浮延迟
 * @desc 出现漂浮文字后静止不动的时间，单位帧。（1秒60帧）延迟是会随物品出现的种数而叠加的。比如第4种物品是延迟*4后消失。
 * @default 15 
 *
 * @param 消失速度
 * @type number
 * @min 0
 * @desc 漂浮文字消失的速度，单位 透明度/帧。透明度255为完全不透明，0为完全透明。设置5表示51帧后完全消失。（1秒60帧）
 * @default 5
 *
 * @param 是否使用随机方向漂浮
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default false
 *
 * @param 漂浮文字大小
 * @type number
 * @min 1
 * @desc 漂浮文字的字体大小。
 * @default 16 
 *
 * @param 漂浮文字间隔
 * @type number
 * @min 1
 * @desc 不同物品之间的纵向间距，单位像素。
 * @default 20
 *
 * @param 物品图标比例
 * @desc 填1.0表示物品图标的原尺寸（24x24像素），
 * 填1.5表示图标大50%（36x36像素）。
 * @default 0.60
 *
 * @param 是否使用缩放效果
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * 物品消失的同时，逐渐放大。
 * @default false
 *
 * @param 金钱增减时是否显示
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true
 * 
 * @param 金钱图标编号
 * @type number
 * @min 0
 * @desc 需要指定金钱的图标编号，金钱的增减时将使用该编号对应的图标。
 * @default 163
 *
 * @param 失去物品是否显示
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示。地图将会显示 x-1 的失去物品情况。
 * @default true
 * 
 * @help  
 * =============================================================================
 * +++ MOG - Treasure Popup (v1.1) +++
 * By Moghunter 
 * https://mogplugins.wordpress.com/
 * =============================================================================
 * 获得/失去物品、增减金钱时会浮出提示的漂浮文字。
 * 
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.插件的作用域：地图界面。
 *   漂浮的文字在地图的ui层。
 * 2.该插件与MOG_TreasureHud.js 地图UI-道具浮动框 的功能是一样的。
 *   后者是在画面上显示框，该插件是根据地图在画面上显示文字。
 * 3.使用脚本函数获取/失去物品时，无法显示漂浮文字。
 *
 * -----------------------------------------------------------------------------
 * ----可选设定
 * 默认情况下提示框是开启的。可以通过插件指令进行关闭。
 *
 * 插件指令（显示）：show_treasure_popup
 * 插件指令（隐藏）：hide_treasure_popup
 * 
 * -----------------------------------------------------------------------------
 * ----关于drill_up优化
 * [v1.1]
 * 添加了失去物品时，显示漂浮文字的设置。 
 * [v1.2]
 * 修改了插件分类。
 */

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//插件记录：
//		插件只做了一个小改动，添加了Moghunter.trpopup_LostItemVisible设置。
//		（236行）
//

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_TreasurePopup = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_TreasurePopup');
    Moghunter.trpopup_X = Number(Moghunter.parameters['平移-浮动文字 X'] || 0);
	Moghunter.trpopup_Y = Number(Moghunter.parameters['平移-浮动文字 Y'] || 0);
    Moghunter.trpopup_SX = Number(Moghunter.parameters['漂浮速度 X'] || 0);
	Moghunter.trpopup_SY = Number(Moghunter.parameters['漂浮速度 Y'] || 1);
	Moghunter.trpopup_waitD = Number(Moghunter.parameters['漂浮延迟'] || 15);
	Moghunter.trpopup_fadeSpeed = Number(Moghunter.parameters['消失速度'] || 5);
	Moghunter.trpopup_Random = String(Moghunter.parameters['是否使用随机方向漂浮'] || "false");
	Moghunter.trpopup_IconScale = Number(Moghunter.parameters['物品图标比例'] || 0.60);
	Moghunter.trpopup_ItemSpace = Number(Moghunter.parameters['漂浮文字间隔'] || 20);
	Moghunter.trpopup_Zoom = String(Moghunter.parameters['是否使用缩放效果'] || "false");
	Moghunter.trpopup_GoldVisible = String(Moghunter.parameters['金钱增减时是否显示'] || "true");
    Moghunter.trpopup_goldIconIndex = Number(Moghunter.parameters['金钱图标编号'] || 163);
    Moghunter.trpopup_fontSize = Number(Moghunter.parameters['漂浮文字大小'] || 16);	
	Moghunter.trpopup_LostItemVisible = String(Moghunter.parameters['失去物品时是否显示'] || "true") == "true";
	
//=============================================================================
// ** Game System
//=============================================================================

//==============================
// * Initialize
//==============================
var _mog_treapopup_Gsys_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    _mog_treapopup_Gsys_initialize.call(this);
	this._trspupData = [];
	this._trspupSprData = null;
	this._trspupVisible = true;
	this._trspupMapID = 0;
};	

//=============================================================================
// ** Scene Map
//=============================================================================

//==============================
// * Terminate
//==============================
var _mog_treapopup_scMap_terminate = Scene_Map.prototype.terminate;
Scene_Map.prototype.terminate = function() {
    _mog_treapopup_scMap_terminate.call(this);
	if (this._spriteset) {this._spriteset.recordTreasureData()};
};

//=============================================================================
// ** Game Interpreter
//=============================================================================

//==============================
// * Command 125
//==============================
var _mog_treaPopUP_gint_command125 = Game_Interpreter.prototype.command125;
Game_Interpreter.prototype.command125 = function() {
	_mog_treaPopUP_gint_command125.call(this);
	if ((Moghunter.trpopup_GoldVisible) === "true") { 
         this.checkTreasurePopup(3);
	};
	return true;	
};

//==============================
// * Command 126
//==============================
var _mog_treaPopUP_gint_command126 = Game_Interpreter.prototype.command126;
Game_Interpreter.prototype.command126 = function() {
    _mog_treaPopUP_gint_command126.call(this);
    this.checkTreasurePopup(0);
	return true;	
};

//==============================
// * command 127
//==============================
var _mog_treaPopUP_gint_command127 = Game_Interpreter.prototype.command127;
Game_Interpreter.prototype.command127 = function() {
	_mog_treaPopUP_gint_command127.call(this);
    this.checkTreasurePopup(1);
	return true;
};

//==============================
// * command 128
//==============================
var _mog_treaPopUP_gint_command128 = Game_Interpreter.prototype.command128;
Game_Interpreter.prototype.command128 = function() {
	_mog_treaPopUP_gint_command128.call(this);
    this.checkTreasurePopup(2);
	return true;
};

//==============================
// * command 128
//==============================
Game_Interpreter.prototype.checkTreasurePopup = function(type) {
	if ($gameSystem._trspupVisible) {
		if (type > 2) {
		   var amount = this.operateValue(this._params[0], this._params[1], this._params[2]);
		} else {
		   var amount = this.operateValue(this._params[1], this._params[2], this._params[3]);
		};
   	    if (amount > 0 && SceneManager._scene.constructor.name === "Scene_Map") {
			for (i = 0; i < $gameMap.events().length; i++){
				var eve = $gameMap.events()[i];
				if (eve && (this._eventId === eve._eventId)) {
					var x = eve.screenX();
					var y = eve.screenY();
					$gameSystem._trspupData.push([this.trPopupType(type),amount,x,y]);
				};
			};
	   };
	   if( Moghunter.trpopup_LostItemVisible ){
			if (amount < 0 && SceneManager._scene.constructor.name === "Scene_Map") {
				for (i = 0; i < $gameMap.events().length; i++){
					var eve = $gameMap.events()[i];
					if (eve && (this._eventId === eve._eventId)) {
						var x = eve.screenX();
						var y = eve.screenY();
						$gameSystem._trspupData.push([this.trPopupType(type),amount,x,y]);
					};
				};
			};
	   }
	};
};

//==============================
// * Tr popup Type
//==============================
Game_Interpreter.prototype.trPopupType = function(type) {
	if (type === 0) {return $dataItems[this._params[0]]};
	if (type === 1) {return $dataWeapons[this._params[0]]};
	if (type === 2) {return $dataArmors[this._params[0]]};
	return null;
};

//==============================
// * PluginCommand
//==============================
var _alias_mog_theaPopUP_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_alias_mog_theaPopUP_pluginCommand.call(this,command, args);
	if (command === "show_treasure_popup")  {$gameSystem._trspupVisible = true};
	if (command === "hide_treasure_popup")  {$gameSystem._trspupVisible = false};
	return true;
};

//=============================================================================
// ** SpriteSet Base
//=============================================================================

//==============================
// ** create Hud Field
//==============================
Spriteset_Base.prototype.createHudField = function() {
	this._hudField = new Sprite();
	this._hudField.z = 10;
	this.addChild(this._hudField);
};

//==============================
// ** sort MZ
//==============================
Spriteset_Base.prototype.sortMz = function() {
   this._hudField.children.sort(function(a, b){return a.mz-b.mz});
};

//=============================================================================
// ** Spriteset Map
//=============================================================================

//==============================
// ** create Lower Layer
//==============================
var _mog_TrePopup_sprMap_createLowerLayer = Spriteset_Map.prototype.createLowerLayer;
Spriteset_Map.prototype.createLowerLayer = function() {
    _mog_TrePopup_sprMap_createLowerLayer.call(this);
	if (!this._hudField) {this.createHudField()};
};

//==============================
// * create Upper Layer
//==============================
var _mog_treapopup_sprmap_createUpperLayer = Spriteset_Map.prototype.createUpperLayer;
Spriteset_Map.prototype.createUpperLayer = function() {
    _mog_treapopup_sprmap_createUpperLayer.call(this);
	this.createTreasureField();
	if ($gameSystem._trspupSprData && $gameSystem._trspupMapID === $gameMap._mapId) {
		this.loadTreasureIcons()
	} else {
		$gameSystem._trspupData = [];
		$gameSystem._trspupSprData = null;		
	};
	$gameSystem._trspupMapID = $gameMap._mapId;
};

//==============================
// * record Treasure Data
//==============================
Spriteset_Map.prototype.recordTreasureData = function() {
     if (!this._treasureIcons || this._treasureIcons.length === 0) {return};
	 $gameSystem._trspupSprData = [];
	 for (i = 0; i < this._treasureIcons.length; i++){
		 $gameSystem._trspupSprData[i] = {};
		 $gameSystem._trspupSprData[i]._item = this._treasureIcons[i]._item;
		 $gameSystem._trspupSprData[i]._amount = this._treasureIcons[i]._amount;
		 $gameSystem._trspupSprData[i].x = this._treasureIcons[i].x;
		 $gameSystem._trspupSprData[i].y = this._treasureIcons[i].y;
		 $gameSystem._trspupSprData[i].opacity = this._treasureIcons[i].opacity;
		 $gameSystem._trspupSprData[i].scale = this._treasureIcons[i].scale.x;
		 $gameSystem._trspupSprData[i]._sx = this._treasureIcons[i]._sx;
		 $gameSystem._trspupSprData[i]._sy = this._treasureIcons[i]._sy;
		 $gameSystem._trspupSprData[i]._cx = this._treasureIcons[i]._cx;
		 $gameSystem._trspupSprData[i]._cy = this._treasureIcons[i]._cy;
		 $gameSystem._trspupSprData[i]._wait = this._treasureIcons[i]._wait;		 
	 };
};

//==============================
// * create Treasure Field
//==============================
Spriteset_Map.prototype.createTreasureField = function() {
	this._treasureIcons = [];
    this._treasureField = new Sprite();
	this._treasureField.mz = 110;
	this.addChild(this._treasureField);
	this.sortMz();
};

//==============================
// * create Upper Layer
//==============================
var _mog_treapopup_sprmap_update = Spriteset_Map.prototype.update;
Spriteset_Map.prototype.update = function() {
    _mog_treapopup_sprmap_update.call(this);
	if (this._treasureField) {this.updateTreasureIcons()};
};

//==============================
// * load Treasure Icons
//==============================
Spriteset_Map.prototype.loadTreasureIcons = function() {
	for (i = 0; i < $gameSystem._trspupSprData.length; i++){
         this._treasureIcons.push(new TreasureIcons(null,$gameSystem._trspupSprData[i],i,$gameSystem._trspupSprData.length));
	     this._treasureField.addChild(this._treasureIcons[i]);
	};
	$gameSystem._trspupSprData = null;
};

//==============================
// * refresh Treasure Icons
//==============================
Spriteset_Map.prototype.refreshTreasureIcons = function() {
	for (i = 0; i < $gameSystem._trspupData.length; i++){
        this._treasureIcons.push(new TreasureIcons($gameSystem._trspupData[i],null,i,$gameSystem._trspupData.length));
		this._treasureField.addChild(this._treasureIcons[this._treasureIcons.length - 1])
	};
	$gameSystem._trspupData = [];
};

//==============================
// * need Refresh Treasure Icons
//==============================
Spriteset_Map.prototype.needRefreshTreasureIcons = function() {
	if ($gameSystem._trspupData.length > 0) {return true};
    return false;
};

//==============================
// * create Treasure Icons
//==============================
Spriteset_Map.prototype.updateTreasureIcons = function() {
     if (this.needRefreshTreasureIcons()) {this.refreshTreasureIcons()};
	 for (i = 0; i < this._treasureIcons.length; i++){
		  if (this._treasureIcons[i].opacity === 0 && this._treasureIcons[i]._wait[1] <= 0) {
			  this._treasureField.removeChild(this._treasureField[i]);
			  this._treasureIcons.splice(i, 1);
		  };
	 };
};

//=============================================================================
// * Treasure Icons
//=============================================================================
function TreasureIcons() {
    this.initialize.apply(this, arguments);
};

TreasureIcons.prototype = Object.create(Sprite.prototype);
TreasureIcons.prototype.constructor = TreasureIcons;

//==============================
// * Initialize
//==============================
TreasureIcons.prototype.initialize = function(data,dataOld,fx,fmax) {
    Sprite.prototype.initialize.call(this);	
    this._fadeSpeed = Math.min(Math.max(Moghunter.trpopup_fadeSpeed,1),100);
	this._waitR = Math.min(Math.max(Moghunter.trpopup_waitD,1),999);
	this._zoomAn = String(Moghunter.trpopup_Zoom) === "true" ? true : false;
	this._fx = fx;
	this._fmax = fmax * this.waitD();
    this.createName();
	this.createIcon();
    if (dataOld) {
	   this.setupOld(dataOld);
	} else {
	   this.setupNew(data);
    }
	this.refreshIcon();
	this.refreshName();
	this.x = -this.screenX() + this._cx;
	this.y = -this.screenY() + this._cy;	
};

//==============================
// * SetupOld
//==============================
TreasureIcons.prototype.setupOld = function(data) {
	this._item = data._item;
	this._amount = data._amount;
	this.x = data.x;
	this.y = data.y;
	this.scale.x = data.scale;
	this.scale.y = data.scale;
	this.opacity = data.opacity;
	this._sx = data._sx;
	this._sy = data._sy;
	this._cx = data._cx;
	this._cy = data._cy;	
	this._wait = data._wait;
};	


//==============================
// * wait D
//==============================
TreasureIcons.prototype.waitD = function() {
	return this._waitR;
};

//==============================
// * SetupNew
//==============================
TreasureIcons.prototype.setupNew = function(data) {
	this._item = data[0];
	this._amount = data[1];
	var name = this._item ? this._item.name + " x " + this._amount : this._amount;
	var wd = this._name.bitmap.measureTextWidth(name);
	this._cx = data[2] - ((Window_Base._iconWidth + 12 + wd) / 2) + Moghunter.trpopup_X + this.screenX() ;
	this._cy = data[3] - Window_Base._iconHeight + Moghunter.trpopup_Y + this.screenY();
	this._cy -= (this._fx * Moghunter.trpopup_ItemSpace);
	var iw = this._fx * this.waitD();
	var iw2 = this.waitD() + (this._fmax - iw);
	this._wait = [15,iw2];
	this.opacity = 0;
	if (String(Moghunter.trpopup_Random) === "true") {
		var d = Math.randomInt(2);
		var sx = (Math.random() * this.sxi() + this.sxi());
		this._sx = d === 0 ? sx : -sx
		this._sy = -(Math.random() + this.syi());
	} else {
		this._sx = this.sxi()
		this._sy = -this.syi();		
	};
};	

//==============================
// * sxi
//==============================
TreasureIcons.prototype.sxi = function() {
	return Moghunter.trpopup_SX;
};

//==============================
// * syi
//==============================
TreasureIcons.prototype.syi = function() {
	return Moghunter.trpopup_SY;
};

//==============================
// * createIcon
//==============================
TreasureIcons.prototype.createIcon = function() {
	this._iconImg = ImageManager.loadSystem("IconSet");
    this._icon = new Sprite(this._iconImg);
	this._icon.scale.x = Math.min(Math.max(Moghunter.trpopup_IconScale,0.10),3.00);;
	this._icon.scale.y = this._icon.scale.x;
	this._icon.anchor.x = 0.5;
	this._icon.anchor.y = 0.5;
	this._icon.x = Window_Base._iconWidth / 2;
	this._icon.y = Window_Base._iconHeight / 2;
	this.addChild(this._icon);
};

//==============================
// * refresh Icon
//==============================
TreasureIcons.prototype.refreshIcon = function() {
	var w = Window_Base._iconWidth;
	var h = Window_Base._iconHeight;
	var iconindex = this._item ? this._item.iconIndex : Moghunter.trpopup_goldIconIndex;
	var sx = iconindex % 16 * w;
	var sy = Math.floor(iconindex / 16) * h;
    this._icon.setFrame(sx,sy,w,h);	
};

//==============================
// * create Name
//==============================
TreasureIcons.prototype.createName = function() {
	this._name = new Sprite(new Bitmap(150,32));
	this._name.x = Window_Base._iconWidth + 4;
	this._name.bitmap.fontSize = Moghunter.trpopup_fontSize;
	this.addChild(this._name);
};

//==============================
// * refresh Name
//==============================
TreasureIcons.prototype.refreshName = function() {
	this._name.bitmap.clear();
	var name = this._item ? this._item.name + " x " + this._amount : this._amount;
	this._name.bitmap.drawText(name,0,0,145,32);
};

//==============================
// * screen Y
//==============================
TreasureIcons.prototype.screenX = function() {
	return $gameMap.displayX() * $gameMap.tileWidth();
};

//==============================
// * screen Y
//==============================
TreasureIcons.prototype.screenY = function() {
	return $gameMap.displayY() * $gameMap.tileHeight();
};

//==============================
// * Update Position
//==============================
TreasureIcons.prototype.updatePosition = function() {
	this.x = -this.screenX() + this._cx;
	this.y = -this.screenY() + this._cy;
};

//==============================
// * Update Movement
//==============================
TreasureIcons.prototype.updateMovement = function() {
	this._cx += this._sx;
	this._cy += this._sy;
};

//==============================
// * Update Other
//==============================
TreasureIcons.prototype.updateOther = function() {
    this.opacity -= this._fadeSpeed; 
	if (this._zoomAn) {
	    this.scale.x += 0.01;
	    this.scale.y = this.scale.x
	};
};

//==============================
// * Update
//==============================
TreasureIcons.prototype.update = function() {
    Sprite.prototype.update.call(this);	 
	if (this._wait[0] > 0) {this._wait[0]--;
		this.opacity += 17; 
		this.updatePosition();
		if (this._wait[1] <= 0) {this.opacity += 255;this._wait[0] = 0};
	    return
	};
	if (this._wait[1] > 0) {
		this._wait[1]--;
		this.updatePosition();
	    return
	};
	this.updateMovement();
    this.updateOther();
	this.updatePosition();
};