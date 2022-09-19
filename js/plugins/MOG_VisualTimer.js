//=============================================================================
// MOG_VisualTimer.js
//=============================================================================

/*:
 * @plugindesc (v1.1)[v1.3]  UI - 时间计时器
 * @author Moghunter （Drill_up翻译+优化）
 *
 * @param 资源-计时器框
 * @desc 计时器框的图片资源。
 * @default 计时器-外框
 * @require 1
 * @dir img/Special__visualTimer/
 * @type file
 *
 * @param 平移-计时器框 X
 * @desc x轴方向平移，单位像素。0为贴最左边。
 * @default 310
 *
 * @param 平移-计时器框 Y
 * @desc y轴方向平移，单位像素。0为贴最上面。
 * @default 64
 *
 * @param 是否自动透明
 * @type boolean
 * @on 透明
 * @off 不透明
 * @desc true - 透明，false - 不透明。
 * 玩家在地图中进入被计时器挡住的区域时，框会变透明。
 * @default true
 *
 * @param 最小透明度
 * @type number
 * @min 0
 * @desc 玩家在地图中进入被计时器挡住的区域时，框会变透明。
 * 0表示完全透明，255表示完全不透明。
 * @default 90
 *
 * @param 是否显示时间数字
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示。
 * @default true
 *
 * @param 资源-时间数字
 * @parent 是否显示时间数字
 * @desc 时间数字的图片资源。
 * @default 计时器-数值
 * @require 1
 * @dir img/Special__visualTimer/
 * @type file
 *
 * @param 平移-秒钟数字 X
 * @parent 是否显示时间数字
 * @desc 以计时器框为基准，x轴方向平移，单位像素。（可为负数）
 * @default 132
 *
 * @param 平移-秒钟数字 Y
 * @parent 是否显示时间数字
 * @desc 以计时器框为基准，y轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 平移-分钟数字 X
 * @parent 是否显示时间数字
 * @desc 以计时器框为基准，x轴方向平移，单位像素。（可为负数）
 * @default 82
 *
 * @param 平移-分钟数字 Y
 * @parent 是否显示时间数字
 * @desc 以计时器框为基准，y轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 角度-时间数字
 * @parent 是否显示时间数字
 * @desc 时间数字的角度。单位度。
 * @default 0
 *
 * @param 是否显示时间条
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示。
 * @default true
 *
 * @param 资源-时间条
 * @parent 是否显示时间条
 * @desc 时间条的图片资源。
 * @default 计时器-时间条
 * @require 1
 * @dir img/Special__visualTimer/
 * @type file
 *
 * @param 平移-时间条 X
 * @parent 是否显示时间条
 * @desc 以计时器框为基准，x轴方向平移，单位像素。（可为负数）
 * @default 11
 *
 * @param 平移-时间条 Y
 * @parent 是否显示时间条
 * @desc 以计时器框为基准，y轴方向平移，单位像素。（可为负数）
 * @default 34
 *
 * @param 角度-时间条
 * @parent 是否显示时间条
 * @desc 时间数字的角度。单位度。
 * @default 0
 * 
 * @help  
 * =============================================================================
 * +++ MOG - Visual Timer (1.1) +++
 * By Moghunter 
 * https://mogplugins.wordpress.com/
 * =============================================================================
 * 事件函数中有计时器的设置。插件用于美化时间计时器。
 * 【现已支持插件关联资源的打包、加密】
 * 
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.插件的作用域：地图界面、战斗界面
 *   rmmv自带的计时器在两个界面都能作用，高于图片层，低于UI层。
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 资源路径：img/Special__visualTimer （Special后面有两个下划线）
 * 先确保项目img文件夹下是否有Special__visualTimer文件夹。
 * 要查看所有关联资源文件的插件，可以去看看"插件清单.xlsx"。
 * 使用时间计时器，需要配置资源文件：
 *
 * 资源-计时器框
 * 资源-时间数字
 * 资源-时间条
 *
 * -----------------------------------------------------------------------------
 * ----可选设定
 * 你可以通过插件指令设置计时器的位置。
 *
 * 插件指令：visual_timer : X : Y
 *
 * 参数XY表示在地图上的坐标。注意冒号两边有空格。
 * 
 * -----------------------------------------------------------------------------
 * ----关于Drill_up优化：
 * [v1.1]
 * 使得该插件支持关联资源的打包、加密。
 * 部署时勾选去除无关文件，本插件中相关的文件不会被去除。
 * [v1.2]
 * 修改了插件分类。
 * [v1.3]
 * 修改了插件关联的资源文件夹。
 *
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_VisualTimer = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_VisualTimer');
	
    Moghunter.timerGauge_X = Number(Moghunter.parameters['平移-计时器框 X'] || 310);
	Moghunter.timerGauge_Y = Number(Moghunter.parameters['平移-计时器框 Y'] || 64); 	
	Moghunter.timerGauge_Number = String(Moghunter.parameters['是否显示时间数字'] || 'true');
    Moghunter.timerGauge_secX = Number(Moghunter.parameters['平移-秒钟数字 X'] || 132);
	Moghunter.timerGauge_secY = Number(Moghunter.parameters['平移-秒钟数字 Y'] || 0);
	Moghunter.timerGauge_minX = Number(Moghunter.parameters['平移-分钟数字 X'] || 82);
	Moghunter.timerGauge_minY = Number(Moghunter.parameters['平移-分钟数字 Y'] || 0);
	Moghunter.timerGauge_NumberAngle = Number(Moghunter.parameters['角度-时间数字'] || 0);	
	Moghunter.timerGauge_Gauge = String(Moghunter.parameters['是否显示时间条'] || 'true');	
	Moghunter.timerGauge_gaugeX = Number(Moghunter.parameters['平移-时间条 X'] || 11);
	Moghunter.timerGauge_gaugeY = Number(Moghunter.parameters['平移-时间条 Y'] || 34);
	Moghunter.timerGauge_GaugeAngle = Number(Moghunter.parameters['角度-时间条'] || 0);
    Moghunter.timerGauge_AutoFade = String(Moghunter.parameters['是否自动透明'] || 'true');
    Moghunter.timerGauge_FadeMax = Number(Moghunter.parameters['最小透明度'] || 90);
	
	Moghunter.Timer_Layout = String(Moghunter.parameters['资源-计时器框']);
	Moghunter.Timer_Number = String(Moghunter.parameters['资源-时间数字']);
	Moghunter.Timer_Gauge = String(Moghunter.parameters['资源-时间条']);
		
//=============================================================================
// ** 资源文件夹
//=============================================================================
ImageManager.load_SpecialVisualTimer = function(filename) {
    return this.loadBitmap('img/Special__visualTimer/', filename, 0, true);
};

//=============================================================================
// ** Game_Interpreter
//=============================================================================	
//==============================
// * PluginCommand
//==============================
var _mog_timerGauge_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _mog_timerGauge_pluginCommand.call(this,command, args);
    this.timerGaugePluginCommand(command, args);
	return true;
};
	
//==============================
// * Timer Gauge Plugin Command
//==============================
Game_Interpreter.prototype.timerGaugePluginCommand = function(command, args) {
    if (command === "visual_timer")  {
		var x =  args[1] ? Number(args[1]) : 0;
		var y =  args[3] ? Number(args[3]) : 0;
		$gameSystem._timerGauge.x = x;
		$gameSystem._timerGauge.y = y;
	};
};	

//=============================================================================
// ** Game System
//=============================================================================	

//==============================
// * initialize
//==============================
var _mog_timerGauge_gsys_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	_mog_timerGauge_gsys_initialize.call(this);
	this._timerGauge = {};
	this._timerGauge.enabled = true;
	this._timerGauge.x = Moghunter.timerGauge_X;
	this._timerGauge.y = Moghunter.timerGauge_Y
	this._timerGauge.numberVisible = String(Moghunter.timerGauge_Number) === 'true' ? true : false;
	this._timerGauge.gaugeVisible = String(Moghunter.timerGauge_Gauge) === 'true' ? true : false;
	this._timerGauge.autoFade = String(Moghunter.timerGauge_AutoFade) === 'true' ? true : false;
	this._timerGauge.fadeMax = Moghunter.timerGauge_FadeMax;
};

//=============================================================================
// ** Game Timer
//=============================================================================	

//==============================
// * initialize
//==============================
var _mog_timerGauge_gtimer_initialize = Game_Timer.prototype.initialize;
Game_Timer.prototype.initialize = function() {
    _mog_timerGauge_gtimer_initialize.call(this);
	this._framesMax = 0;
	this._needRefresh = false;
	this._refreshTime = 0;
};

//==============================
// * Start
//==============================
var _mog_timerGauge_gtimer_start = Game_Timer.prototype.start;
Game_Timer.prototype.start = function(count) {
	_mog_timerGauge_gtimer_start.call(this,count)
    this._framesMax = this._frames;
	this._needRefresh = true;
	this._refreshTime = 0;
};

//=============================================================================
// ** Game Character Base 
//=============================================================================

//==============================
// * Screen RealX
//==============================
Game_CharacterBase.prototype.screen_realX = function() {
    return this.scrolledX() * $gameMap.tileWidth()
};

//==============================
// * Screen RealY
//==============================
Game_CharacterBase.prototype.screen_realY = function() {
    return this.scrolledY() * $gameMap.tileHeight()
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
// * create Timer Gauge
//==============================
Scene_Base.prototype.createTimerGauge = function() {
    this._timerGauge = new TimerGauge();
	this._timerGauge.mz = 130;
	this.addChild(this._timerGauge);
};

//=============================================================================
// ** Scene Battle
//=============================================================================

//==============================
// ** create Spriteset
//==============================
var _mog_visualTimer_sbattle_createSpriteset = Scene_Battle.prototype.createSpriteset;
Scene_Battle.prototype.createSpriteset = function() {
	_mog_visualTimer_sbattle_createSpriteset.call(this);
	if (!this._hudField) {this.createHudField()};
    this.createTimerGauge();
	this.sortMz();	
};

//=============================================================================
// ** Scene Map
//=============================================================================

//==============================
// ** create Spriteset
//==============================
var _mog_visualTimer_sMap_createSpriteset = Scene_Map.prototype.createSpriteset;
Scene_Map.prototype.createSpriteset = function() {
	_mog_visualTimer_sMap_createSpriteset.call(this);
	if (!this._hudField) {this.createHudField()};
    this.createTimerGauge();
	this.sortMz();	
};

//=============================================================================
// ** Spriteset Base
//=============================================================================

//==============================
// * create Timer
//==============================
var _mog_timerGauge_sprtBase_createTimer = Spriteset_Base.prototype.createTimer;
Spriteset_Base.prototype.createTimer = function() {return
    if ($gameSystem._timerGauge.enabled) {return};
    _mog_timerGauge_sprtBase_createTimer.call(this);
};

//=============================================================================
// ** Timer Gauge
//=============================================================================

function TimerGauge() {
    this.initialize.apply(this, arguments);
}

TimerGauge.prototype = Object.create(Sprite.prototype);
TimerGauge.prototype.constructor = TimerGauge;

//==============================
// * Initialize
//==============================
TimerGauge.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);
	this._testMode = DataManager.isBattleTest();
	this.visible = false;
	this._needRefresh = false;
    this._seconds = 0;	
	this._dataImg1 = [null,null,-1,-1];
	this._dataImg2 = [-1,-1];
	this._dataImg3 = [-1,-1];
	this.loadBitmap();
    this.createSprites();
    this.update();
	if (this.data().autoFade && !this.isHudVisible()) {this.opacity = this.data().fadeMax};
};

//==============================
// * Data
//==============================
TimerGauge.prototype.data = function() {
     return $gameSystem._timerGauge;
};

//==============================
// * load Bitmap
//==============================
TimerGauge.prototype.loadBitmap = function() {
    this._layoutImg = ImageManager.load_SpecialVisualTimer(Moghunter.Timer_Layout);
	this._numberImg = this.data().numberVisible ? ImageManager.load_SpecialVisualTimer(Moghunter.Timer_Number) : new Bitmap(16,16);
	this._gaugeImg = this.data().gaugeVisible ? ImageManager.load_SpecialVisualTimer(Moghunter.Timer_Gauge) : new Bitmap(16,16);
};

//==============================
// * get Data
//==============================
TimerGauge.prototype.getData = function() {
    this._dataImg1[0] = ($gameMap.tileWidth() / 2);
	this._dataImg1[1] = $gameMap.tileHeight();
    this._dataImg1[2] = this._layoutImg.width - $gameMap.tileWidth() + 5;
	this._dataImg1[3] = this._layoutImg.height;	
    this._dataImg2[0] = this._numberImg.width / 10;
	this._dataImg2[1] = this._numberImg.height;
    this._dataImg3[0] = this._gaugeImg.width;
	this._dataImg3[1] = this._gaugeImg.height;
	this.refreshTimer();
	this.update();
};

//==============================
// * create Sprites
//==============================
TimerGauge.prototype.createSprites = function() {
    this.createLayout();
	if (this.data().numberVisible) {this.createNumber()};
	if (this.data().gaugeVisible) {this.createGauge()};
};


//==============================
// * create Layout
//==============================
TimerGauge.prototype.createLayout = function() {
     this._layout = new Sprite(this._layoutImg);
	 this.addChild(this._layout);
};

//==============================
// * create Number
//==============================
TimerGauge.prototype.createNumber = function() {
	 this._fieldNumber = new Sprite();
	 this._fieldNumber.rotation = Moghunter.timerGauge_NumberAngle * Math.PI / 180;
	 this.addChild(this._fieldNumber);
	 this._numbers = [];
	 for (var i = 0; i < 4; i++) {
	      this._numbers[i] = new Sprite(this._numberImg);
		  this._fieldNumber.addChild(this._numbers[i]);
	 };
};

//==============================
// * Seconds
//==============================
TimerGauge.prototype.seconds = function() {
	var v = Math.floor(this._seconds % 60);
    if (Math.floor($gameTimer._frames) > 0) {v += 1}
	return v;
};

//==============================
// * minutes
//==============================
TimerGauge.prototype.minutes = function() {
	return Math.floor(this._seconds / 60);
};	

//==============================
// * refresh  Timer
//==============================
TimerGauge.prototype.refreshTimer = function() {
	 var oldSec = this._seconds;
     this._seconds = $gameTimer.seconds();
	 if (this._numbers) {
	     for (var i = 0; i < this._numbers.length; i++) {
	          this.refreshNumber(this._numbers[i],i);
	     };
	 };
};

//==============================
// * refresh Number
//==============================
TimerGauge.prototype.refreshNumber = function(sprite,index) {
	var cw = this._dataImg2[0];
	var ch = this._dataImg2[1];
	if (index > 1) {
		var x = (cw * (index - 2)) + Moghunter.timerGauge_minX;
		var y = Moghunter.timerGauge_minY;
		var n = Math.abs(this.minutes()).toString().split("");
		var value = n < 10 ? (index === 2 ? n[1] : n[0]) : (index === 2 ? n[0] : n[1]);
	} else {
		var x = (cw * index) + Moghunter.timerGauge_secX;;
		var y = Moghunter.timerGauge_secY;
		var n = Math.abs(this.seconds()).toString().split("");
		var value = n < 10 ? (index === 0 ? n[1] : n[0]) : (index === 0 ? n[0] : n[1]);
	};
	var valueReal = value ? value : 0;	
	var v = valueReal * cw;
    sprite.setFrame(v,0,cw,ch);
	sprite.x = x;
	sprite.y = y;
};

//==============================
// * create Gauge
//==============================
TimerGauge.prototype.createGauge = function() {
	this._fieldGauge = new Sprite();
	this._fieldGauge.rotation = Moghunter.timerGauge_GaugeAngle * Math.PI / 180;
	this.addChild(this._fieldGauge);	
    this._gauge = new Sprite(this._gaugeImg);
	this._gauge.x = Moghunter.timerGauge_gaugeX;
	this._gauge.y = Moghunter.timerGauge_gaugeY;
	this._fieldGauge.addChild(this._gauge);
};

//==============================
// * update Gauge
//==============================
TimerGauge.prototype.updateGauge = function() {
	var cw = this._dataImg3[0];
	var ch = this._dataImg3[1];
    var meter_rate = Math.floor(cw * $gameTimer._frames / $gameTimer._framesMax);
	this._gauge.setFrame(0,0, meter_rate, ch);
};

//==============================
// * Update Position
//==============================
TimerGauge.prototype.updatePosition = function() {
    this.visible = $gameTimer.isWorking();
	this.x = this.data().x;
	this.y = this.data().y;
};

//==============================
// * Is Hud Visible
//==============================
TimerGauge.prototype.isHudVisible = function() {
	if (this._testMode) {return true};
	if ($gamePlayer.screen_realX() < this.x - this._dataImg1[0]) {return true};
	if ($gamePlayer.screen_realX() > this.x + this._dataImg1[2]) {return true};
	if ($gamePlayer.screen_realY() < this.y - this._dataImg1[1]) {return true};
	if ($gamePlayer.screen_realY() > this.y + this._dataImg1[3]) {return true};
	if (this.opacity < this.data().fadeMax) {return true};
	return false;
};
   
//==============================
// * Update Auto Fade
//==============================
TimerGauge.prototype.updateAutoFade = function() {
	if (this.isHudVisible()) {
		this.opacity += 10}	 
	else {
		if (this.opacity > this.data().fadeMax) {	
			this.opacity -= 10;
			if (this.opacity < this.data().fadeMax) {this.opacity = this.data().fadeMax};
		};
	};
};

//==============================
// * Update Visible
//==============================
TimerGauge.prototype.updateVisible = function() {
    this.visible = $gameTimer.isWorking();
	if (this.data().autoFade) {this.updateAutoFade()};
};

//==============================
// * Update Sprites
//==============================
TimerGauge.prototype.updateSprites = function() {
	if (this._seconds != $gameTimer.seconds() ) {this.refreshTimer()};
	if ($gameTimer._frames === 0 && $gameTimer._needRefresh) {
		$gameTimer._needRefresh = false;
		this.refreshTimer()
	}
	if ($gameTimer._refreshTime > 0) {
		$gameTimer._refreshTime--;
		if ($gameTimer._refreshTime === 0) {this.refreshTimer()};
	};
	if (this._gauge) {this.updateGauge()};
    this.updatePosition();
	this.updateVisible();
};

//==============================
// * update
//==============================
TimerGauge.prototype.update = function() {
    Sprite.prototype.update.call(this);
	if (this._dataImg1[0] != null) {
		this.updateSprites()
	} else {
	    if (this._numberImg.isReady() && this._layoutImg.isReady()) {this.getData()};	
	};
};