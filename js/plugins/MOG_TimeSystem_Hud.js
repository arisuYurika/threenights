//=============================================================================
// MOG_TimeSystem_Hud.js
//=============================================================================
/*:
 * @plugindesc (v1.7)[v1.4]  地图UI - 时间系统固定框
 * @author Moghunter （拾贝猫、Drill_up翻译+优化）
 *
 * @param 是否初始显示
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true 
 *
 * @param 资源-固定框
 * @desc 固定框的图片资源。
 * @default 时间系统框-框
 * @require 1
 * @dir img/Map__ui/
 * @type file
 *
 * @param 平移-固定框 X
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 633
 *
 * @param 平移-固定框 Y
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 0
 *
 * @param 最小透明度
 * @type number
 * @min 0
 * @desc 玩家在地图中进入被固定框挡住的区域时，框会变透明。
 * 0表示完全透明，255表示完全不透明
 * @default 60
 *
 * @param 字体大小
 * @type number
 * @min 1
 * @desc 时间框内显示的数字的字体大小。
 * @default 22
 *
 * @param 字体是否为斜体
 * @type boolean
 * @on 是
 * @off 否
 * @desc true - 是，false - 否
 * @default true 
 *
 * @param 是否显示指针
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true
 *
 * @param 资源-分针
 * @parent 是否显示指针
 * @desc 分针的图片资源。
 * @default 时间系统框-分针
 * @require 1
 * @dir img/Map__ui/
 * @type file
 *
 * @param 资源-时针
 * @parent 是否显示指针
 * @desc 时针的图片资源。
 * @default 时间系统框-时针
 * @require 1
 * @dir img/Map__ui/
 * @type file
 *
 * @param 平移-指针 X
 * @parent 是否显示指针
 * @desc 以固定框的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default 193
 *
 * @param 平移-指针 Y
 * @parent 是否显示指针
 * @desc 以固定框的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default 66 
 *
 * @param 分针是否无缝转动
 * @parent 是否显示指针
 * @type boolean
 * @on 无缝转动
 * @off 间隔转动
 * @desc true - 无缝转动，false - 间隔转动
 * @default true
 *
 * @param 时针是否无缝转动
 * @parent 是否显示指针
 * @type boolean
 * @on 无缝转动
 * @off 间隔转动
 * @desc true - 无缝转动，false - 间隔转动
 * @default true
 *
 * @param 是否显示计时器
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * 计时器是 00:00 方式表现的。
 * @default true
 *
 * @param 平移-计时器 X
 * @parent 是否显示计时器
 * @desc 以固定框的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default 134
 *
 * @param 平移-计时器 Y
 * @parent 是否显示计时器
 * @desc 以固定框的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default 126 
 *
 * @param 是否显示日期数值
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true
 *
 * @param 平移-日期数值 X
 * @parent 是否显示日期数值
 * @desc 以固定框的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default 70
 *
 * @param 平移-日期数值 Y
 * @parent 是否显示日期数值
 * @desc 以固定框的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default 2 
 *
 * @param 是否显示月份数值
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true
 *
 * @param 平移-月份数值 X
 * @parent 是否显示月份数值
 * @desc 以固定框的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default 30
 *
 * @param 平移-月份数值 Y
 * @parent 是否显示月份数值
 * @desc 以固定框的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default 2
 *
 * @param 是否显示年数值
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true
 *
 * @param 平移-年数值 X
 * @parent 是否显示年数值
 * @desc 以固定框的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default -17
 *
 * @param 平移-年数值 Y
 * @parent 是否显示年数值
 * @desc 以固定框的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default 2  
 *
 * @param 是否显示时间段图标
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * 用于表示 黎明、日出、日落 等时间段的图标。
 * @default true
 *
 * @param 资源-时间段图标
 * @parent 是否显示时间段图标
 * @desc 时间段的图片资源。
 * 用于表示 黎明、日出、日落 等时间段的图标。
 * @default 时间系统框-时间段图标
 * @require 1
 * @dir img/Map__ui/
 * @type file
 *
 * @param 平移-时间段图标 X
 * @parent 是否显示时间段图标
 * @desc 以固定框的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default 23
 *
 * @param 平移-时间段图标 Y
 * @parent 是否显示时间段图标
 * @desc 以固定框的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default 109
 *
 * @param 是否显示季节图标
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true
 *
 * @param 资源-季节图标
 * @parent 是否显示季节图标
 * @desc 表示季节的图片资源。
 * @default 时间系统框-季节图标
 * @require 1
 * @dir img/Map__ui/
 * @type file
 *
 * @param 平移-季节图标 X
 * @parent 是否显示季节图标
 * @desc 以固定框的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default 88
 *
 * @param 平移-季节图标 Y
 * @parent 是否显示季节图标
 * @desc 以固定框的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default 88
 *
 * @param 是否显示星期文字
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true
 *
 * @param 平移-星期文字 X
 * @parent 是否显示星期文字
 * @desc 以固定框的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default 40
 *
 * @param 平移-星期文字 Y
 * @parent 是否显示星期文字
 * @desc 以固定框的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default 44
 * 
 * @help  
 * =============================================================================
 * +++ MOG Time System Hud (v1.7) +++
 * By Moghunter 
 * https://mogplugins.wordpress.com/
 * =============================================================================
 * 将时间系统的时间以钟表框的形式展现出来。
 * 【现已支持插件关联资源的打包、加密】
 * ★★必须与MOG_TimeSystem时间系统插件配合使用，并放在其插件的后面★★
 *
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.插件的作用域：地图界面。
 *   在地图界面UI层建立一个时间窗口。
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 资源路径：img/Map__ui （Map后面有两个下划线）
 * 先确保项目img文件夹下是否有Map__ui文件夹。
 * 要查看所有关联资源文件的插件，可以去看看"插件清单.xlsx"。
 * 需要配置以下文件的图片资源：
 * 
 * 资源-固定框
 * 资源-分针
 * 资源-时针
 * 资源-时间段图标
 * 资源-季节图标
 *
 * 该插件只是将时间以钟表框的形式展现出来，只是一个框而已。
 * 
 * -----------------------------------------------------------------------------
 * ----可选设定
 * 你可以设置时间框是否显示。
 *
 * 插件指令（显示）：show_clock
 * 插件指令（隐藏）：hide_clock
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
 * [v1.4]
 * 添加了 分针和时针 的无缝移动功能。
 *        
 */
 
//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_TimeSystem_Hud = true;
　　var Moghunter = Moghunter || {}; 

    // MAIN
  　Moghunter.parameters = PluginManager.parameters('MOG_TimeSystem_Hud');
	Moghunter.timehud_X = Number(Moghunter.parameters['平移-固定框 X'] || 633); 
    Moghunter.timehud_Y = Number(Moghunter.parameters['平移-固定框 Y'] || 0); 
	Moghunter.timehud_fade_limit = Number(Moghunter.parameters['最小透明度'] || 60);
	Moghunter.timehud_point_visible = String(Moghunter.parameters['是否显示指针'] || "true");
    Moghunter.timehud_point_x = Number(Moghunter.parameters['平移-指针 X'] || 123);
    Moghunter.timehud_point_y = Number(Moghunter.parameters['平移-指针 Y'] || 66);
	Moghunter.timehud_point_min_seamless = String(Moghunter.parameters['分针是否无缝转动'] || "true") == "true";
	Moghunter.timehud_point_hour_seamless = String(Moghunter.parameters['时针是否无缝转动'] || "true") == "true";
	Moghunter.timehud_fontSize = Number(Moghunter.parameters['字体大小'] || 22);
	Moghunter.timehud_fontItalic = String(Moghunter.parameters['字体是否为斜体'] || "true");
	Moghunter.timehud_day_visible = String(Moghunter.parameters['是否显示日期数值'] || "true");
	Moghunter.timehud_day_x = Number(Moghunter.parameters['平移-日期数值 X'] || 130);
	Moghunter.timehud_day_y = Number(Moghunter.parameters['平移-日期数值 Y'] || 120);
	Moghunter.timehud_month_visible = String(Moghunter.parameters['是否显示月份数值'] || "true");
	Moghunter.timehud_month_x = Number(Moghunter.parameters['平移-月份数值 X'] || 70);
	Moghunter.timehud_month_y = Number(Moghunter.parameters['平移-月份数值 Y'] || 129);
	Moghunter.timehud_year_visible = String(Moghunter.parameters['是否显示年数值'] || "true");
	Moghunter.timehud_year_x = Number(Moghunter.parameters['平移-年数值 X'] || 20);
	Moghunter.timehud_year_y = Number(Moghunter.parameters['平移-年数值 Y'] || 60);	
	Moghunter.timehud_phase_visible = String(Moghunter.parameters['是否显示时间段图标'] || "true");
	Moghunter.timehud_phase_x = Number(Moghunter.parameters['平移-时间段图标 X'] || 160);
	Moghunter.timehud_phase_y = Number(Moghunter.parameters['平移-时间段图标 Y'] || -2);	
	Moghunter.timehud_season_visible = String(Moghunter.parameters['是否显示季节图标'] || "true");
	Moghunter.timehud_season_x = Number(Moghunter.parameters['平移-季节图标 X'] || 53);
	Moghunter.timehud_season_y = Number(Moghunter.parameters['平移-季节图标 Y'] || 100);
	Moghunter.timehud_dayweek_visible = String(Moghunter.parameters['是否显示星期文字'] || "true");
	Moghunter.timehud_dayweek_x = Number(Moghunter.parameters['平移-星期文字 X'] || 85);
	Moghunter.timehud_dayweek_y = Number(Moghunter.parameters['平移-星期文字 Y'] || 165);		
	Moghunter.timehud_timer_visible = String(Moghunter.parameters['是否显示计时器'] || "false");
	Moghunter.timehud_timer_x = Number(Moghunter.parameters['平移-计时器 X'] || 63);
	Moghunter.timehud_timer_y = Number(Moghunter.parameters['平移-计时器 Y'] || 66);			
	Moghunter.timehud_hudvisible = String(Moghunter.parameters['是否初始显示'] || "true");	

	Moghunter.src_TimeHud_A = String(Moghunter.parameters['资源-固定框']);
	Moghunter.src_TimeHud_B = String(Moghunter.parameters['资源-分针']);
	Moghunter.src_TimeHud_C = String(Moghunter.parameters['资源-时针']);
	Moghunter.src_TimeHud_D = String(Moghunter.parameters['资源-时间段图标']);
	Moghunter.src_TimeHud_E = String(Moghunter.parameters['资源-季节图标']);
	
if (Imported.MOG_TimeSystem) {
	
//=============================================================================
// ** 资源文件夹
//=============================================================================
ImageManager.load_MapUi = function(filename) {
    return this.loadBitmap('img/Map__ui/', filename, 0, true);
};

//==============================
// * Setup Time System
//==============================
var _mog_tmSysmhud_setup_time_system = Game_System.prototype.setup_time_system;
Game_System.prototype.setup_time_system = function() {	
    _mog_tmSysmhud_setup_time_system.call(this);
	this._time_window_visible = String(Moghunter.timehud_hudvisible) === "true" ? true : false;
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
	
//=============================================================================
// ** Scene Map
//=============================================================================

//==============================
// ** create Spriteset
//==============================
var _mog_TimeSystemHud_sMap_createSpriteset = Scene_Map.prototype.createSpriteset;
Scene_Map.prototype.createSpriteset = function() {
	_mog_TimeSystemHud_sMap_createSpriteset.call(this);
	if (!this._hudField) {this.createHudField()};
	this.createTimeSystemHud();
	this.sortMz();
};
	
//==============================
// ** create Time System Hud
//==============================
Scene_Map.prototype.createTimeSystemHud = function() {
    this.sprite_time_engine = new SpriteTimeEngine();
	this.sprite_time_engine.mz = 120;
	this._hudField.addChild(this.sprite_time_engine);	
};	

//=============================================================================
// * Sprite Time Engine
//=============================================================================
function SpriteTimeEngine() {
    this.initialize.apply(this, arguments);
};

SpriteTimeEngine.prototype = Object.create(Sprite.prototype);
SpriteTimeEngine.prototype.constructor = SpriteTimeEngine;

//==============================
// * Initialize
//==============================
SpriteTimeEngine.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);
	this._maxSecond = 60 / (Math.PI * 2);
	this._maxMin = $gameSystem._min_max / (Math.PI * 2);
	this._maxHour = $gameSystem._hour_max / (Math.PI * 4);
	this._hud_size = [-1,-1,-1,-1];
	this.loadImages();
    this.create_sprites();
};

//==============================
// * Load Images
//==============================
SpriteTimeEngine.prototype.loadImages = function() {
    Sprite.prototype.initialize.call(this);
    this._layout_img = ImageManager.load_MapUi(Moghunter.src_TimeHud_A);
	this._pont1_img = ImageManager.load_MapUi(Moghunter.src_TimeHud_B);
	this._pont2_img = ImageManager.load_MapUi(Moghunter.src_TimeHud_C);
	if (Moghunter.timehud_phase_visible === "true") {this._phase_img = ImageManager.load_MapUi(Moghunter.src_TimeHud_D)};
	if (Moghunter.timehud_season_visible === "true") {this._season_img = ImageManager.load_MapUi(Moghunter.src_TimeHud_E)};
};

//==============================
// * Refresh Data
//==============================
SpriteTimeEngine.prototype.refresh_data = function() {
     this._hud_size[0] = Moghunter.timehud_X - ($gameMap.tileWidth() / 2);
     this._hud_size[1] = Moghunter.timehud_Y - ($gameMap.tileHeight() / 2);
     this._hud_size[2] = Moghunter.timehud_X + this._layout_img.width - $gameMap.tileWidth();
     this._hud_size[3] = Moghunter.timehud_Y + this._layout_img.height;	 
};

//==============================
// * Create Sprites
//==============================
SpriteTimeEngine.prototype.create_sprites = function() {
	this._pos_x = Moghunter.timehud_X;
	this._pos_y = Moghunter.timehud_Y;
	this.create_layout();
	this.create_point();
	this.create_timer();
	this.create_day();
	this.create_month();
	this.create_year();
	this.create_dayweek();
	this.create_phase();
	this.create_season();
};

//==============================
// * Create Layout
//==============================
SpriteTimeEngine.prototype.create_layout = function() {
     this._layout = new Sprite(this._layout_img);
	 this._layout.x = this._pos_x;
	 this._layout.y = this._pos_y;
	 this.addChild(this._layout);
};

//==============================
// * Create Layout
//==============================
SpriteTimeEngine.prototype.create_point = function() {
	 if (Moghunter.timehud_point_visible !== "true") {return};
     this._point1 = new Sprite(this._pont1_img);
	 this._point1.x = this._pos_x + Moghunter.timehud_point_x;
	 this._point1.y = this._pos_y + Moghunter.timehud_point_y;
	 this._point1.anchor.x = 0.5;
	 this._point1.scale.y = -1;
	 this.addChild(this._point1);
     this._point2 = new Sprite(this._pont2_img);
	 this._point2.x = this._point1.x;
	 this._point2.y = this._point1.y;
	 this._point2.anchor.x = 0.5;
	 this._point2.scale.y = -1;
	 this.addChild(this._point2);	 
};

//==============================
// * Create Timer
//==============================
SpriteTimeEngine.prototype.create_timer = function() {
	 if (Moghunter.timehud_timer_visible !== "true") {return};
	 this._timer_old = $gameSystem.minute();
     this._timer = new Sprite(new Bitmap(120,32));
	 this._timer.x = this._pos_x + Moghunter.timehud_timer_x;
	 this._timer.y = this._pos_y + Moghunter.timehud_timer_y;
	 this._timer.bitmap.fontSize = Moghunter.timehud_fontSize;
	 if (Moghunter.timehud_fontItalic === "true") {this._timer.bitmap.fontItalic = true};
	 this.addChild(this._timer);
	 this.refresh_timer()
};

//==============================
// * Refresh Timer
//==============================
SpriteTimeEngine.prototype.refresh_timer = function() {
	this._timer_old = $gameSystem.minute();
	this._timer.bitmap.clear();
    var text = $gameSystem.hour().padZero(2) + ":" +  $gameSystem.minute().padZero(2)	 
    this._timer.bitmap.drawText(text,0,0,120,32,"center")
};

//==============================
// * Create Day
//==============================
SpriteTimeEngine.prototype.create_day = function() {
	 if (Moghunter.timehud_day_visible !== "true") {return};
	 this._day_old = $gameSystem.day();
     this._day = new Sprite(new Bitmap(60,32));
	 this._day.x = this._pos_x + Moghunter.timehud_day_x;
	 this._day.y = this._pos_y + Moghunter.timehud_day_y;
	 this._day.bitmap.fontSize = Moghunter.timehud_fontSize;
	 if (Moghunter.timehud_fontItalic === "true") {this._day.bitmap.fontItalic = true};
	 this.addChild(this._day);
	 this.refresh_day()
};

//==============================
// * Refresh Day
//==============================
SpriteTimeEngine.prototype.refresh_day = function() {
	this._day_old = $gameSystem.day();
	this._day.bitmap.clear();
	this._day.bitmap.drawText(this._day_old,0,0,60,32,"center")
};

//==============================
// * Create Month
//==============================
SpriteTimeEngine.prototype.create_month = function() {
	 if (Moghunter.timehud_month_visible !== "true") {return};
	 this._month_old = $gameSystem.month();
     this._month = new Sprite(new Bitmap(60,32));
	 this._month.x = this._pos_x + Moghunter.timehud_month_x;
	 this._month.y = this._pos_y + Moghunter.timehud_month_y;
	 this._month.bitmap.fontSize = Moghunter.timehud_fontSize;
	 if (Moghunter.timehud_fontItalic === "true") {this._month.bitmap.fontItalic = true};
	 this.addChild(this._month);
	 this.refresh_month()
};

//==============================
// * Refresh Month
//==============================
SpriteTimeEngine.prototype.refresh_month = function() {
	this._month_old = $gameSystem.month();
	this._month.bitmap.clear();
	this._month.bitmap.drawText(this._month_old,0,0,60,32,"center")
};

//==============================
// * Create Year
//==============================
SpriteTimeEngine.prototype.create_year = function() {
	 if (Moghunter.timehud_year_visible !== "true") {return};
	 this._year_old = $gameSystem.year();
     this._year = new Sprite(new Bitmap(60,32));
	 this._year.x = this._pos_x + Moghunter.timehud_year_x;
	 this._year.y = this._pos_y + Moghunter.timehud_year_y;
	 this._year.bitmap.fontSize = Moghunter.timehud_fontSize;
	 if (Moghunter.timehud_fontItalic === "true") {this._year.bitmap.fontItalic = true};
	 this.addChild(this._year);
	 this.refresh_year()
};

//==============================
// * Refresh Year
//==============================
SpriteTimeEngine.prototype.refresh_year = function() {
	this._year_old = $gameSystem.year();
	this._year.bitmap.clear();
	this._year.bitmap.drawText(this._year_old,0,0,60,32,"center")
};

//==============================
// * Create Phase
//==============================
SpriteTimeEngine.prototype.create_phase = function() {
	 if (Moghunter.timehud_phase_visible !== "true") {return};
     this._phase = new Sprite(this._phase_img);
	 this.addChild(this._phase);
	 this._phase.x = this._pos_x + Moghunter.timehud_phase_x;
	 this._phase.y = this._pos_y + Moghunter.timehud_phase_y;
	 this._phase.visible = false;
	 this._phase_data = [-1,-1,-1]
};

//==============================
// * Get Phase Data
//==============================
SpriteTimeEngine.prototype.getPhaseData = function() {
     this._phase_data[0] = this._phase_img.width / 6;
	 this._phase_data[1] = this._phase_img.height;	 
};

//==============================
// * Refresh Phase
//==============================
SpriteTimeEngine.prototype.refresh_phase = function() {
    this._phase_data[2] = $gameSystem.day_phase()
	this._phase.visible = true;
	this._phase.setFrame(this._phase_data[0] * this._phase_data[2],0,this._phase_data[0],this._phase_data[1]);
	this._phase.opacity = 0;
};

//==============================
// * Create Season
//==============================
SpriteTimeEngine.prototype.create_season = function() {
	 if (Moghunter.timehud_season_visible !== "true") {return};
     this._season = new Sprite(this._season_img);
	 this.addChild(this._season);
	 this._season.x = this._pos_x + Moghunter.timehud_season_x;
	 this._season.y = this._pos_y + Moghunter.timehud_season_y;
	 this._season.visible = false;
	 this._season_data = [-1,-1,-1]
};

//==============================
// * Get Season Data
//==============================
SpriteTimeEngine.prototype.getSeasonData = function() {
     this._season_data[0] = this._season_img.width / $gameSystem._season_max;
	 this._season_data[1] = this._season_img.height;	 
};

//==============================
// * Refresh Season
//==============================
SpriteTimeEngine.prototype.refresh_season = function() {
    this._season_data[2] = $gameSystem.season()
	this._season.visible = true;
	this._season.setFrame(this._season_data[0] * (this._season_data[2] - 1),0,this._season_data[0],this._season_data[1]);
	this._season.opacity = 0;
};

//==============================
// * Create DayWeek
//==============================
SpriteTimeEngine.prototype.create_dayweek = function() {
	 if (Moghunter.timehud_dayweek_visible !== "true") {return};
	 this._dayweek_old = $gameSystem.day_week();
     this._dayweek = new Sprite(new Bitmap(90,32));
	 this._dayweek.x = this._pos_x + Moghunter.timehud_dayweek_x;
	 this._dayweek.y = this._pos_y + Moghunter.timehud_dayweek_y;
	 this._dayweek.bitmap.fontSize = Moghunter.timehud_fontSize;
	 if (Moghunter.timehud_fontItalic === "true") {this._dayweek.bitmap.fontItalic = true};
	 this.addChild(this._dayweek);
	 this.refresh_dayweek()
};

//==============================
// * Refresh DayWeek
//==============================
SpriteTimeEngine.prototype.refresh_dayweek = function() {
	this._dayweek_old = $gameSystem.day_week();
	this._dayweek.bitmap.clear();
	this._dayweek.bitmap.drawText($gameSystem.day_week_name(),0,0,90,32,"center")
};

//==============================
// * Second
//==============================
SpriteTimeEngine.prototype.second = function() {
    return $gameSystem.second() / this._maxSecond;
};

//==============================
// * Min
//==============================
SpriteTimeEngine.prototype.min = function() {
    return $gameSystem.minute() / this._maxMin;
};

//==============================
// * hour
//==============================
SpriteTimeEngine.prototype.hour = function() {
    return $gameSystem.hour() / this._maxHour;
};

//==============================
// * Update
//==============================
SpriteTimeEngine.prototype.update = function() {
    Sprite.prototype.update.call(this);	
	if (this._hud_size[0] === -1 && this._layout_img.isReady()) {this.refresh_data()};
	if (this._hud_size[0] === -1) {return};
	this.update_visible();
    if (this._point1) {this.update_point()};
	if (this._timer) {this.update_timer()};	
	if (this._day) {this.update_day()};
	if (this._dayweek) {this.update_dayweek()};
	if (this._month) {this.update_month()};
	if (this._year) {this.update_year()};
	if (this._phase) {this.update_phase()};
	if (this._season) {this.update_season()};	
};

//==============================
// * Update visible
//==============================
SpriteTimeEngine.prototype.update_visible = function() {
	if (Imported.MOG_ChronoEngine && $gameSystem.isChronoMode()) {
		this.opacity -= 20;
		return;
	};	
	this.visible = $gameSystem._time_window_visible;
	if (this.is_hud_visible()) {this.opacity += 10}	 
	else {
		if ($gameMessage.isBusy()) {
		        this.opacity -= 10;
		} else {		
			if (this.opacity > Moghunter.timehud_fade_limit) {	
				this.opacity -= 10;
				if (this.opacity < Moghunter.timehud_fade_limit) {this.opacity = Moghunter.timehud_fade_limit};
			};
		};
	};
};

//==============================
// * Is Hud Visible
//==============================
SpriteTimeEngine.prototype.is_hud_visible = function() {
	if ($gameMessage.isBusy()) {return false};
	if (!$gameSystem._time_window_visible) {return false};
	if ($gamePlayer.screen_realX() < this._hud_size[0]) {return true};
	if ($gamePlayer.screen_realX() > this._hud_size[2]) {return true};
	if ($gamePlayer.screen_realY() < this._hud_size[1]) {return true};
	if ($gamePlayer.screen_realY() > this._hud_size[3]) {return true};
	if (this.opacity < Moghunter.timehud_fade_limit) {return true};
	return false;
};

//==============================
// * Update Point
//==============================
SpriteTimeEngine.prototype.update_point = function() {
	if( Moghunter.timehud_point_min_seamless ){
		this._point1.rotation = this.min() + this.second() / 60;
	}else{
		this._point1.rotation = this.min();
	}
	if( Moghunter.timehud_point_hour_seamless ){
		this._point2.rotation = this.hour() + this.min() / 12 ;
	}else{
		this._point2.rotation = this.hour();
	}
};

//==============================
// * Update Day
//==============================
SpriteTimeEngine.prototype.update_day = function() {
    if (this._day_old != $gameSystem.day()) {this.refresh_day()};
};

//==============================
// * Update Timer
//==============================
SpriteTimeEngine.prototype.update_timer = function() {
    if (this._timer_old != $gameSystem.minute()) {this.refresh_timer()};
};

//==============================
// * Update DayWeek
//==============================
SpriteTimeEngine.prototype.update_dayweek = function() {
    if (this._dayweek_old != $gameSystem.day_week()) {this.refresh_dayweek()};
};

//==============================
// * Update Month
//==============================
SpriteTimeEngine.prototype.update_month = function() {
    if (this._month_old != $gameSystem.month()) {this.refresh_month()};
};

//==============================
// * Update Year
//==============================
SpriteTimeEngine.prototype.update_year = function() {
    if (this._year_old != $gameSystem.year()) {this.refresh_year()};
};

//==============================
// * Update Phase
//==============================
SpriteTimeEngine.prototype.update_phase = function() {
    if (this._phase_data[0] === -1 && this._phase_img.isReady()) {this.getPhaseData()};
	if (this._phase_data[0] === -1) {return};
	if (this._phase_data[2] != $gameSystem.day_phase()) {this.refresh_phase()};
	this._phase.opacity += 10;
};

//==============================
// * Update Season
//==============================
SpriteTimeEngine.prototype.update_season = function() {
    if (this._season_data[0] === -1 && this._season_img.isReady()) {this.getSeasonData()};
	if (this._season_data[0] === -1) {return};
	if (this._season_data[2] != $gameSystem.season()) {this.refresh_season()};
	this._season.opacity += 10;
};

//==============================
// * create Time Status
//==============================
Scene_Map.prototype.createTimeStatus = function() {
};


};