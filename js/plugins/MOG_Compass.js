//=============================================================================
// MOG_Compass.js
//=============================================================================

/*:
 * @plugindesc (v1.6)[v1.3]  地图UI - 指南针
 * @author Moghunter （Drill_up翻译+优化）
 *
 * @param 是否自动透明
 * @type boolean
 * @on 透明
 * @off 不透明
 * @desc 如果玩家进入了被指南针挡住的区域，指南针会自动变透明。
 * true - 透明，false - 不透明
 * @default true
 *
 * @param 资源-指南针框
 * @desc 指南针框的图片资源。
 * @default 指南针-外框
 * @require 1
 * @dir img/Map__ui/
 * @type file
 *
 * @param 平移-指南针框 X
 * @desc x轴方向平移，单位像素。0表示贴在最左边。
 * @default 5
 *
 * @param 平移-指南针框 Y
 * @desc y轴方向平移，单位像素。0表示贴在最上面。
 * @default 5
 *
 * @param 资源-指针
 * @desc 指针的图片资源。
 * @default 指南针-指针
 * @require 1
 * @dir img/Map__ui/
 * @type file
 *
 * @param 平移-指针 X
 * @desc 以指南针框的位置为基准，x轴方向平移，单位像素。（可为负数）
 * @default 80
 *
 * @param 平移-指针 Y
 * @desc 以指南针框的位置为基准，y轴方向平移，单位像素。（可为负数）
 * @default 79
 *
 * @param 目标事件名是否显示
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true
 *
 * @param 字体大小
 * @type number
 * @min 1
 * @desc 目标事件名的字体大小。
 * @default 18
 *
 * @param 平移-目标事件名 X
 * @desc 以指南针框的位置为基准，x轴方向平移，单位像素。（可为负数）
 * @default 25
 *
 * @param 平移-目标事件名 Y
 * @desc 以指南针框的位置为基准，y轴方向平移，单位像素。（可为负数）
 * @default 155
 *
 * @param 是否显示目标距离
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true
 *
 * @param 资源-目标距离数值
 * @desc 目标距离数值的图片资源。
 * @default 指南针-目标距离数值
 * @require 1
 * @dir img/Map__ui/
 * @type file
 *
 * @param 平移-目标距离 X
 * @desc 以指南针框的位置为基准，x轴方向平移，单位像素。（可为负数）
 * @default 80
 *
 * @param 平移-目标距离 Y
 * @desc 以指南针框的位置为基准，y轴方向平移，单位像素。（可为负数）
 * @default 70
 *
 * @help  
 * =============================================================================
 * +++ MOG - Compass (v1.6) +++
 * By Moghunter 
 * https://mogplugins.wordpress.com/
 * =============================================================================
 * 能够显示一个指向目标事件的指南针。
 * 【现已支持插件关联资源的打包、加密】
 *
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.插件的作用域：地图界面。
 *   添加在地图的ui层。
 * 2.指南针一个地图只能指向一个目标。没有目标，这指针不显示。
 * 3.指向的目标可以是宝藏、boss、或者任务目标。
 *   如果目标不再含有注释关键字（进入其他事件页），则指南针消失。
 *
 * -----------------------------------------------------------------------------
 * ----激活条件
 * 事件中，添加注释，在注释中填入以下指令：
 *
 * 事件注释：<Destination>
 *
 * 或者通过插件指令，指定某个事件是目标（藏宝点）：
 *
 * 插件指令：compass_event_id : EVENT_ID
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 资源路径：img/Map__ui （Map后面有两个下划线）
 * 先确保项目img文件夹下是否有Map__ui文件夹。
 * 要查看所有关联资源文件的插件，可以去看看"插件清单.xlsx"。
 * 需要配置资源文件：
 *
 * 资源-指南针框
 * 资源-指针
 * 资源-目标距离数值
 *
 * -----------------------------------------------------------------------------
 * ----可选设定：
 * 你可以手动设置指南针固定框启用或者隐藏。
 *
 * 插件指令（隐藏）：hide_compass
 * 插件指令（启用）：show_compass
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
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_Compass = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_Compass');
	Moghunter.compass_x = Number(Moghunter.parameters['平移-指南针框 X'] || 5);
    Moghunter.compass_y = Number(Moghunter.parameters['平移-指南针框 Y'] || 5);
	Moghunter.compass_arrow_x = Number(Moghunter.parameters['平移-指针 X'] || 80);
    Moghunter.compass_arrow_y = Number(Moghunter.parameters['平移-指针 Y'] || 79);
	Moghunter.compass_name_visible = String(Moghunter.parameters['目标事件名是否显示'] || "true");
	Moghunter.compass_name_x = Number(Moghunter.parameters['平移-目标事件名 X'] || 25);
    Moghunter.compass_name_y = Number(Moghunter.parameters['平移-目标事件名 Y'] || 155);
	Moghunter.compass_font_size = Number(Moghunter.parameters['字体大小'] || 18);
	Moghunter.compass_steps_visible = String(Moghunter.parameters['是否显示目标距离'] || "true");
	Moghunter.compass_steps_x = Number(Moghunter.parameters['平移-目标距离 X'] || 80);
    Moghunter.compass_steps_y = Number(Moghunter.parameters['平移-目标距离 Y'] || 70);
    Moghunter.compass_smartFade = String(Moghunter.parameters['是否自动透明'] || "true");	
	
	Moghunter.src_Compass_A = String(Moghunter.parameters['资源-指南针框']);
	Moghunter.src_Compass_B = String(Moghunter.parameters['资源-指针']);
	Moghunter.src_Compass_C = String(Moghunter.parameters['资源-目标距离数值']);
	
//=============================================================================
// ** 资源文件夹
//=============================================================================
ImageManager.load_MapUi = function(filename) {
    return this.loadBitmap('img/Map__ui/', filename, 0, true);
};
	
//=============================================================================
// ** Game System
//=============================================================================

//==============================
// * Initialize
//==============================
var _alias_mog_compass_gsys_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	_alias_mog_compass_gsys_initialize.call(this);
	this._compass_event_id = 0;
	this._compass_visible = true;
	this._compass_ahud_smartFade = String(Moghunter.compass_smartFade) === "true" ? true : false;
};

//=============================================================================
// ** Game_Interpreter
//=============================================================================	

//==============================
// * PluginCommand
//==============================
var _alias_mog_compass_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_alias_mog_compass_pluginCommand.call(this,command, args)
	if (command === "show_compass")  {$gameSystem._compass_visible = true;};
	if (command === "hide_compass")  {$gameSystem._compass_visible = false;};
	if (command === "compass_event_id")  {$gameSystem._compass_event_id = Number(args[1]);
	$gameMap.events().forEach(function(event) {
		if (event.eventId() === ($gameSystem._compass_event_id)) {event._compass_destination = true}
		else {event._compass_destination = false}
    }, this);	
	};
	return true;
};

//=============================================================================
// ** Game Map
//=============================================================================

//==============================
// * Compass Destination
//==============================
Game_Map.prototype.compass_destination = function() {
	 return this._events[$gameSystem._compass_event_id];
};

//=============================================================================
// ** Game Event
//=============================================================================
var _alias_mog_gevent_initMembers = Game_Event.prototype.initMembers;
Game_Event.prototype.initMembers = function() {
    _alias_mog_gevent_initMembers.call(this);
	this._compass_destination = false;
};

//==============================
// * Setup Page
//==============================
var _alias_mog_compass_gevent_setupPage = Game_Event.prototype.setupPage;
Game_Event.prototype.setupPage = function() {
	_alias_mog_compass_gevent_setupPage.call(this);
	var dest = false;
	if (!this._erased && this.page()) {
	this.list().forEach(function(l) {
	   if ((l.code === 108 && l.parameters[0] == "<Destination>") || this._compass_destination) {
				$gameSystem._compass_event_id = this.eventId(); dest = true;
	   };
	}, this);
	};
	if (!dest && $gameSystem._compass_event_id == this.eventId()) {$gameSystem._compass_event_id = 0};
};

//=============================================================================
// ** Game Character Base 
//=============================================================================

//==============================
// * screen YC
//==============================
Game_CharacterBase.prototype.screenYC = function() {
    var th = $gameMap.tileHeight();
    return Math.round(this.scrolledY() * th + th - this.jumpHeight());
};

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

//=============================================================================
// ** Scene Map
//=============================================================================

//==============================
// ** create Spriteset
//==============================
var _mog_compass_sMap_createSpriteset = Scene_Map.prototype.createSpriteset;
Scene_Map.prototype.createSpriteset = function() {
	_mog_compass_sMap_createSpriteset.call(this);
	if (!this._hudField) {this.createHudField()};
	this.createCompass();
	this.sortMz();
};

//==============================
// ** create Compass
//==============================
Scene_Map.prototype.createCompass = function() {
    this._compassHud = new CompassHud();
	this._compassHud.mz = 120;
	this._hudField.addChild(this._compassHud);
};

//=============================================================================
// * Hit Counter Sprites
//=============================================================================
function CompassHud() {
    this.initialize.apply(this, arguments);
};

CompassHud.prototype = Object.create(Sprite.prototype);
CompassHud.prototype.constructor = CompassHud;

//==============================
// * Initialize
//==============================
CompassHud.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);	
    this.setup();
	this.createSprites()
};

//==============================
// * Setup
//==============================
CompassHud.prototype.setup = function() {
 	$gameSystem._compass_event_id = 0;
	this._sprite_compass_ref = 10;
	this._sprite_compass_size = [-1,-1,-1,-1];   
};

//==============================
// * create Sprites
//==============================
CompassHud.prototype.createSprites = function() {
    this.createLayout();
	this.createPointer();
	this.createDestinationName();
	this.createStepCounter();
	this.check_destination_events();
};

//==============================
// * create Layout
//==============================
CompassHud.prototype.createLayout = function() {
    this._sprite_compass_layout = new Sprite(ImageManager.load_MapUi(Moghunter.src_Compass_A));
	this._sprite_compass_layout.x = Moghunter.compass_x;
	this._sprite_compass_layout.y = Moghunter.compass_y;
	this._sprite_compass_layout.opacity = 0;
	this.addChild(this._sprite_compass_layout);  
};

//==============================
// * create Pointer
//==============================
CompassHud.prototype.createPointer = function() {
    this._sprite_compass = new Sprite(ImageManager.load_MapUi(Moghunter.src_Compass_B));
	this._sprite_compass.anchor.x = 0.5;
	this._sprite_compass.anchor.y = 0.5;
	this._sprite_compass.x = Moghunter.compass_x + Moghunter.compass_arrow_x;
	this._sprite_compass.y = Moghunter.compass_y + Moghunter.compass_arrow_y;
	this._sprite_compass.opacity = 0;
	this.addChild(this._sprite_compass);
};

//==============================
// * create Destination Name
//==============================
CompassHud.prototype.createDestinationName = function() {
	this._sprite_compass_name = new Sprite(new Bitmap(120,32));
	this._sprite_compass_name.x = Moghunter.compass_x + Moghunter.compass_name_x + 60;
	this._sprite_compass_name.y = Moghunter.compass_y + Moghunter.compass_name_y + 16; 
	this._sprite_compass_name.anchor.x = 0.5;
	this._sprite_compass_name.anchor.y = 0.5;
	this._sprite_compass_name.bitmap.fontSize = Number(Moghunter.compass_font_size);
	this._sprite_compass_name.opacity = 0;		
	if (String(Moghunter.compass_name_visible) === "true") {this.addChild(this._sprite_compass_name)};
};


//==============================
// * create Step Counter
//==============================
CompassHud.prototype.createStepCounter = function() {
	this._sprite_compass_number = [];
	this._cpd_steps = [0,0];
	for (var i = 0; i < 4; i++) {
		this._sprite_compass_number[i] = new Sprite(ImageManager.load_MapUi(Moghunter.src_Compass_C));
		this._sprite_compass_number[i].x = Moghunter.compass_x + Moghunter.compass_steps_x;
		this._sprite_compass_number[i].y = Moghunter.compass_y + Moghunter.compass_steps_y;
		this._sprite_compass_number[i].visible = false;
		if (String(Moghunter.compass_steps_visible) === "true") {
			this.addChild(this._sprite_compass_number[i])
		};
	}; 
};

//==============================
// * Refresh Steps Number
//==============================	
CompassHud.prototype.refresh_steps_number = function(value) {
	if (this._cpd_steps[0] === 0) {return;};
	if (value > 9999) {value = 9999};
	numbers = Math.abs(value).toString().split("");  
	for (var i = 0; i < this._sprite_compass_number.length; i++) {
		 this._sprite_compass_number[i].visible = false;
		 if (i > numbers.length) {return};
		 var n = Number(numbers[i]);
		 this._sprite_compass_number[i].setFrame(n * this._cpd_steps[0] , 0, this._cpd_steps[0] , this._cpd_steps[1]);
		 this._sprite_compass_number[i].visible = true;	   
		 var nx = -(this._cpd_steps[0]  * i) + ((this._cpd_steps[0] / 2)  * numbers.length);
		 this._sprite_compass_number[i].x = Moghunter.compass_x + Moghunter.compass_steps_x - nx;
	};
};
	
//==============================
// * Check Destination Events
//==============================	
CompassHud.prototype.check_destination_events = function() {
	$gameMap.events().forEach(function(event) {
		if (!event._erased && event.page()) {
		event.list().forEach(function(l) {
			if ((l.code === 108 && l.parameters[0] == "<Destination>") || event._compass_destination) {
			    $gameSystem._compass_event_id = event.eventId();
				var event_name = event.event().name;
				this._sprite_compass_name.bitmap.clear();
				this._sprite_compass_name.bitmap.drawText(String(event_name),0,0,120,32,'center');
				if ($gameSystem._compass_visible) {
					this._sprite_compass.opacity = 255;
					this._sprite_compass_layout.opacity = 255;
					this._sprite_compass_name.opacity = 255;
					for (var i = 0; i < this._sprite_compass_number.length; i++) {
						this._sprite_compass_number[i].opacity = 255;
					};
			    };
			};
	    }, this);
		};
    }, this);
	this._compass_event_id = $gameSystem._compass_event_id;
};

//==============================
// * Refresh Compass
//==============================
CompassHud.prototype.refresh_compass = function() {
	this._compass_event_id = $gameSystem._compass_event_id;
	this._sprite_compass.opacity = 0;
    this._sprite_compass_layout.opacity = 0;
	this._sprite_compass_name.opacity = 0;
	for (var i = 0; i < this._sprite_compass_number.length; i++) {
		this._sprite_compass_number[i].opacity = 0;
	};	
	this._sprite_compass_ref = 10;	
	var event = $gameMap.events()[$gameSystem._compass_event_id - 1];
	this._sprite_compass_name.bitmap.clear();
	if (!event) {return};
	event_name = event.event().name;
	this._sprite_compass_name.bitmap.drawText(String(event_name),0,0,120,32,'center');
};

//==============================
// * Update Combo Sprites
//==============================
CompassHud.prototype.update = function() {	
   Sprite.prototype.update.call(this);	
	if (this._compass_event_id != $gameSystem._compass_event_id) {this.refresh_compass()};  
    this._sprite_compass_layout.opacity = this._sprite_compass.opacity;
    this._sprite_compass_name.opacity = this._sprite_compass.opacity;	
	for (var i = 0; i < this._sprite_compass_number.length; i++) {
	     this._sprite_compass_number[i].opacity = this._sprite_compass.opacity;
	};	
	if (this._sprite_compass_size[0] == -1 && this._sprite_compass_layout.bitmap.isReady()) {
		this.set_compass_data()
	};	
	if (!this.compass_visible()) {
		this._sprite_compass.opacity -= 5
		return;
	} else {
         if (this.need_fade_sprite_compass()) {
			if ($gameMessage.isBusy()) {
		        this.opacity -= 10;
		    } else {		 
				if (this._sprite_compass.opacity > 90) {	
					this._sprite_compass.opacity -= 10;
					if (this._sprite_compass.opacity < 90) {this._sprite_compass.opacity = 90};
				};
		    };
	     } else {
			 this._sprite_compass.opacity += 10
		 };
	};	
	this._sprite_compass_ref += 1;
    if (this._sprite_compass_ref > 4) {this.update_compass_direction();};   
};

//==============================
// * Update Compass Direction
//==============================
CompassHud.prototype.update_compass_direction = function() {
	this._sprite_compass_ref = 0;
	var dx = $gameMap.compass_destination().screenX();
	var dy = $gameMap.compass_destination().screenYC();
	var cx = $gamePlayer.screenX();
	var cy = $gamePlayer.screenYC();
	var axy = [cx - dx,cy - dy];	
    var angle = Math.atan2(axy[0],axy[1]);
	this._sprite_compass.rotation = -angle;
	var dist = (Math.abs(axy[0]) + Math.abs(axy[1]));
	var dist_2 = Math.floor(dist / 48);
	this.refresh_steps_number(dist_2);
};

//==============================
// * Set Compass Data
//==============================
CompassHud.prototype.set_compass_data = function() {
  this._sprite_compass_size[0] = Moghunter.compass_x - ($gameMap.tileWidth() / 2);
  this._sprite_compass_size[1] = Moghunter.compass_y - $gameMap.tileHeight();
  this._sprite_compass_size[2] = Moghunter.compass_x + this._sprite_compass_layout.bitmap.width - $gameMap.tileWidth();
  this._sprite_compass_size[3] = Moghunter.compass_y + this._sprite_compass_layout.bitmap.height;
  this._cpd_steps[0] = this._sprite_compass_number[0].bitmap.width / 10;
  this._cpd_steps[1] = this._sprite_compass_number[0].bitmap.height;
};

//==============================
// * Need Fade Sprite Compass
//==============================
CompassHud.prototype.need_fade_sprite_compass = function() {
	if (!$gameSystem._compass_ahud_smartFade) {return false};
	if ($gamePlayer.screen_realX() < this._sprite_compass_size[0]) {return false};
	if ($gamePlayer.screen_realX() > this._sprite_compass_size[2]) {return false};
	if ($gamePlayer.screen_realY() < this._sprite_compass_size[1]) {return false};
	if ($gamePlayer.screen_realY() > this._sprite_compass_size[3]) {return false};
	if (this._sprite_compass.opacity < 90) {return false} 
	return true;
};

//==============================
// * Compass Visible
//==============================
CompassHud.prototype.compass_visible = function() {
	if (!$gameMap.compass_destination()) {return false};
	if ($gameMap.compass_destination()._erased) {return false};	
	if (!$gameSystem._compass_visible) {return false};
	if (SceneManager.isSceneChanging()) {return false};
	return true;
};
