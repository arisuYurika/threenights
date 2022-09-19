//=============================================================================
// MOG_TreasureHud.js
//=============================================================================

/*:
 * @plugindesc (v1.3)[v1.4]  地图UI - 道具浮动框
 * @author Moghunter （Drill_up翻译+优化）
 *
 * @param 资源-浮动框
 * @desc 道具浮动框的图片资源。
 * @default 道具浮动框
 * @require 1
 * @dir img/Map__ui/
 * @type file
 *
 * @param 平移-浮动框 X
 * @desc x轴方向平移，单位像素。0为贴最左边。
 * @default 555
 *
 * @param 平移-浮动框 Y
 * @desc y轴方向平移，单位像素。0为贴最上面。
 * @default 370
 *
 * @param 平移-物品名 X
 * @desc 以浮动框为基准，x轴方向平移，单位像素。
 * @default 78
 *
 * @param 平移-物品名 Y
 * @desc 以浮动框为基准，y轴方向平移，单位像素。
 * @default 24
 *
 * @param 平移-图标 X
 * @desc 以浮动框为基准，x轴方向平移，单位像素。
 * @default 42
 *
 * @param 平移-图标 Y
 * @desc 以浮动框为基准，y轴方向平移，单位像素。
 * @default 24  
 *
 * @param 持续时间
 * @desc 浮动框的持续时间。90表示90帧后浮动框消失。
 * （1秒60帧）
 * @default 90
 *
 * @param 金钱图标编号
 * @type number
 * @min 0
 * @desc 需要指定金钱的图标编号，金钱的增减时将使用该编号对应的图标。
 * @default 163
 *
 * @param 字体大小
 * @type number
 * @min 1
 * @desc 浮动框的字体大小。
 * @default 20
 *
 * @param 失去物品是否显示
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示。地图将会显示 x-1 的失去物品情况。
 * @default true
 *
 * @param 使用脚本函数时是否显示
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示。如果你用到了脚本，比如$gameParty.gainItem($dataItems[36], 2);也会显示浮动框。
 * @default true
 *
 * @param 资源-备用浮动框
 * @desc 道具浮动框的备用图片资源。
 * @default []
 * @require 1
 * @dir img/Map__ui/
 * @type file[]
 *	 
 * @help  
 * =============================================================================
 * +++ MOG Treasure Hud (v1.3) +++
 * By Moghunter 
 * https://mogplugins.wordpress.com/
 * =============================================================================
 * 获得/失去物品、增减金钱时会浮动出提示框。
 * 如果一次性获得多个物品，那么将弹出最后一个物品的信息。
 * 【现已支持插件关联资源的打包、加密】
 *
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.插件的作用域：地图界面。
 *   添加在地图的ui层。
 * 2.该插件与MOG_TreasurePopup.js 地图-道具浮动文字 的功能相似。
 * 3.切换备用框的插件指令执行后瞬间生效，并且永久有效。
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 资源路径：img/Map__ui （Map后面有两个下划线）
 * 先确保项目img文件夹下是否有Map__ui文件夹。
 * 要查看所有关联资源文件的插件，可以去看看"插件清单.xlsx"。
 * 使用金币显示框，需要配置资源文件：
 *
 * 资源-浮动框
 *
 * -----------------------------------------------------------------------------
 * ----可选设定
 * 默认情况下提示框是开启的。可以通过插件指令进行关闭，还可以切换样式。
 *
 * 插件指令：>道具浮动框 : 启用
 * 插件指令：>道具浮动框 : 关闭
 * 
 * 插件指令：>道具浮动框 : 还原默认框
 * 插件指令：>道具浮动框 : 设置为备用框 : 1
 *
 * 1."设置为备用框"后的数字，表示设置的编号，设置后图片资源会被切换。
 *   "还原默认框"表示换回最初配置的框。
 *
 * -----------------------------------------------------------------------------
 * ----关于Drill_up优化：
 * [v1.1]
 * 使得该插件支持关联资源的打包、加密。
 * 部署时勾选去除无关文件，本插件中相关的文件不会被去除。
 * [v1.2]
 * 添加了失去物品时、使用脚本时显示浮动框的设置。
 * [v1.3]
 * 修改了插件分类。
 * [v1.4]
 * 修改了插件关联的资源文件夹。并添加了备用框替换的功能。
 */

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//插件记录：
//		给插件做了一些改动，查看下面相关的变量：
//			Moghunter.thud_LostItemVisible
//			Moghunter.thud_scriptVisible
//		添加了资源切换功能，可以看看变量：
//			Moghunter.src_image_list
//			$gameSystem._thud_layout
//			（资源切换改动比较多，不过结构并不复杂）

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_TreasureHud = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_TreasureHud');   
    Moghunter.thud_pos_x = Number(Moghunter.parameters['平移-浮动框 X'] || 555);
	Moghunter.thud_pos_y = Number(Moghunter.parameters['平移-浮动框 Y'] || 500);
	Moghunter.thud_text_x = Number(Moghunter.parameters['平移-物品名 X'] || 78);
	Moghunter.thud_text_y = Number(Moghunter.parameters['平移-物品名 Y'] || 22);
	Moghunter.thud_icon_x = Number(Moghunter.parameters['平移-图标 X'] || 42);
	Moghunter.thud_icon_y = Number(Moghunter.parameters['平移-图标 Y'] || 22);	
	Moghunter.thud_duration = Number(Moghunter.parameters['持续时间'] || 90);
	Moghunter.thud_gold_index = Number(Moghunter.parameters['金钱图标编号'] || 163);
	Moghunter.thud_fontsize = Number(Moghunter.parameters['字体大小'] || 20);
	Moghunter.thud_LostItemVisible = String(Moghunter.parameters['失去物品是否显示'] || "true") == "true";
	Moghunter.thud_scriptVisible = String(Moghunter.parameters['使用脚本函数时是否显示'] || "true") == "true";
	
    Moghunter.src_image = String(Moghunter.parameters['资源-浮动框']);
    Moghunter.src_image_list = JSON.parse(Moghunter.parameters['资源-备用浮动框'] || []);
	 
//=============================================================================
// ** 资源文件夹
//=============================================================================
ImageManager.load_MapUi = function(filename) {
    return this.loadBitmap('img/Map__ui/', filename, 0, true);
};

//=============================================================================
// ** Game_System
//=============================================================================
//==============================
// * Initialize
//==============================
var _alias_mog_thud_sys_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	_alias_mog_thud_sys_initialize.call(this);
	this._thud_visible = true;
	this._thud_int = false;	
	this._thud_layout = Moghunter.src_image;
};

//=============================================================================
// ** Game_Temp
//=============================================================================

//==============================
// * Initialize
//==============================
var _alias_mog_thud_temp_initialize = Game_Temp.prototype.initialize;
Game_Temp.prototype.initialize = function() {
	_alias_mog_thud_temp_initialize.call(this);
	this._thud_sprite = [false,0,0];
	this._thud_data = [false,null,0];	
};

//=============================================================================
// ** Game_Interpreter
//=============================================================================

//==============================
// * Command125
//==============================
var _alias_mog_thud_command125 = Game_Interpreter.prototype.command125;
Game_Interpreter.prototype.command125 = function() {
	$gameTemp._thud_int = true;
    _alias_mog_thud_command125.call(this);
    return true;
};

//==============================
// * Command126
//==============================
var _alias_mog_thud_command126 = Game_Interpreter.prototype.command126;
Game_Interpreter.prototype.command126 = function() {
	$gameTemp._thud_int = true;
    _alias_mog_thud_command126.call(this);
    return true;
};

//==============================
// * Command127
//==============================
var _alias_mog_thud_command127 = Game_Interpreter.prototype.command127;
Game_Interpreter.prototype.command127 = function() {
	$gameTemp._thud_int = true;
    _alias_mog_thud_command127.call(this);
    return true;
};

//==============================
// * Command128
//==============================
var _alias_mog_thud_command128 = Game_Interpreter.prototype.command128;
Game_Interpreter.prototype.command128 = function() {
	$gameTemp._thud_int = true;
    _alias_mog_thud_command128.call(this);
    return true;
};


//=============================================================================
// ** Game_Party
//=============================================================================

//==============================
// * Gain Item
//==============================
var _alias_mog_thud_gparty_gainItem = Game_Party.prototype.gainItem;
Game_Party.prototype.gainItem = function(item, amount, includeEquip) {
	if( SceneManager._scene.constructor.name === "Scene_Map" && Moghunter.thud_scriptVisible ){	 $gameTemp._thud_int = true; } //地图必然显示
	_alias_mog_thud_gparty_gainItem.call(this,item, amount, includeEquip);
	if ($gameSystem._thud_visible && !this.inBattle() && $gameTemp._thud_int ) {
		if( Moghunter.thud_LostItemVisible ){
			$gameTemp._thud_data = [true,item,amount];
		}else if( amount > 0){
			$gameTemp._thud_data = [true,item,amount];
		}
	};
    $gameTemp._thud_int = false;
};

//==============================
// * Gain Gold
//==============================
var _alias_mog_thud_gainGold = Game_Party.prototype.gainGold;
Game_Party.prototype.gainGold = function(amount) {
	if( SceneManager._scene.constructor.name === "Scene_Map" && Moghunter.thud_scriptVisible ){	 $gameTemp._thud_int = true; } //地图必然显示
	_alias_mog_thud_gainGold.call(this,amount);
	if ($gameSystem._thud_visible && !this.inBattle() && $gameTemp._thud_int ) { 
		if( Moghunter.thud_LostItemVisible ){
			$gameTemp._thud_data = [true,"gold",amount];
		}else if( amount > 0){
			$gameTemp._thud_data = [true,"gold",amount];
		}
	};
    $gameTemp._thud_int = false;
};

//=============================================================================
// ** Game_Interpreter
//=============================================================================	

//==============================
// * PluginCommand
//==============================
var _alias_mog_thud_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_alias_mog_thud_pluginCommand.call(this,command, args);
	if (command === "show_treasure_hud")  { $gameSystem._thud_visible = true};
	if (command === "hide_treasure_hud")  { $gameSystem._thud_visible = false};
	if (command === ">道具浮动框")  {
		if(args.length === 2){
			var type = String(args[1]);
			if( type == "显示" || type == "启用" ){ $gameSystem._thud_visible = true; }
			if( type == "隐藏" || type == "关闭" ){ $gameSystem._thud_visible = false; }
			if( type == "还原默认框" ){ 
				$gameSystem._thud_layout = Moghunter.src_image;
			}
		}
		if(args.length === 4){
			var type = String(args[1]);
			var temp1 = Number(args[3]);
			if( type == "设置为备用框" ){
				$gameSystem._thud_layout = Moghunter.src_image_list[temp1-1];
			}
		}
	};
	return true;
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
var _mog_treHud_sMap_createSpriteset = Scene_Map.prototype.createSpriteset;
Scene_Map.prototype.createSpriteset = function() {
	_mog_treHud_sMap_createSpriteset.call(this);
	if (!this._hudField) {this.createHudField()};
	this.createtreasureHud();
	this.sortMz();
};

//==============================
// ** create Treasure Hud
//==============================
Scene_Map.prototype.createtreasureHud = function() {
	this._treasure_hud = new Treasure_Hud();
	this._treasure_hud.mz = 120;
	this._hudField.addChild(this._treasure_hud);
};

//=============================================================================
// * Treasure_Hud
//=============================================================================
function Treasure_Hud() {
    this.initialize.apply(this, arguments);
};

Treasure_Hud.prototype = Object.create(Sprite.prototype);
Treasure_Hud.prototype.constructor = Treasure_Hud;

//==============================
// * Initialize
//==============================
Treasure_Hud.prototype.initialize = function() {	
    Sprite.prototype.initialize.call(this);	
    this._pos_x = Moghunter.thud_pos_x;
	this._pos_y = Moghunter.thud_pos_y;	
	this._hud_layout_name = "";
    this.load_img();
	this.create_sprites();
	this.opacity = $gameTemp._thud_sprite[1];
	this.refresh();
};

//==============================
// * Load Img
//==============================
Treasure_Hud.prototype.load_img = function() {
	this._layout_img = ImageManager.load_MapUi( $gameSystem._thud_layout );
	this._icon_img = ImageManager.loadSystem("IconSet");
};

//==============================
// * Create Layout
//==============================
Treasure_Hud.prototype.create_layout = function() {
	this._layout = new Sprite(this._layout_img);
	this._layout.x = this._pos_x;
	this._layout.y = this._pos_y;
	this.addChild(this._layout);
};

//==============================
// * Create Text
//==============================
Treasure_Hud.prototype.create_text = function() {
	this._text = new Sprite(new Bitmap(160,32));
	this._text.x = this._pos_x + Moghunter.thud_text_x;
	this._text.y = this._pos_y + Moghunter.thud_text_y;
	this._text.bitmap.fontSize = Moghunter.thud_fontsize;
	this.addChild(this._text);
};

//==============================
// * Create Icon
//==============================
Treasure_Hud.prototype.create_icon = function() {
	this._icon = new Sprite(this._icon_img);
	this._icon.x = this._pos_x + Moghunter.thud_icon_x;
	this._icon.y = this._pos_y + Moghunter.thud_icon_y;
	this.addChild(this._icon);
};

//==============================
// * Create Sprites
//==============================
Treasure_Hud.prototype.create_sprites = function() {
  	 this.create_layout();
	 this.create_icon();
     this.create_text();	 
};

//==============================
// * Item
//==============================
Treasure_Hud.prototype.item = function() {
     return $gameTemp._thud_data[1];
};

//==============================
// * Number
//==============================
Treasure_Hud.prototype.number = function() {
     return $gameTemp._thud_data[2];
};

//==============================
// * Name
//==============================
Treasure_Hud.prototype.name = function() {
	 if (this.item() === "gold") {return ""};
     return "x " + $gameTemp._thud_data[1].name;
};

//==============================
// * Refresh Init
//==============================
Treasure_Hud.prototype.refresh_init = function() {
  $gameTemp._thud_data[0] = false;
  $gameTemp._thud_sprite = [true,0,0];
  this.x = -50;
  this.opacity = 0;
};

//==============================
// * Refresh
//==============================
Treasure_Hud.prototype.refresh = function() {
	if ($gameTemp._thud_data[0]) {this.refresh_init()};	
	if (!this.item()) {return};
    this.refresh_icon();
	this.refresh_name();
};

//==============================
// * Refresh Icon
//==============================
Treasure_Hud.prototype.refresh_icon = function() { 
    if (this.item() === "gold") {var iconIndex = Moghunter.thud_gold_index;
    } else {var iconIndex = this.item().iconIndex};
    var sx = iconIndex % 16 * 32;
    var sy = Math.floor(iconIndex / 16) * 32;
    this._icon.setFrame(sx, sy, 32, 32);
};

//==============================
// * Refresh Name
//==============================
Treasure_Hud.prototype.refresh_name = function() {
    this._text.bitmap.clear();
	var text = String(this.number() + " " + this.name());
	this._text.bitmap.drawText(text,0,0,160,32,"left");
};

//==============================
// * Update visible
//==============================
Treasure_Hud.prototype.update_position = function() {
	$gameTemp._thud_sprite[1] += 1;
    if ($gameTemp._thud_sprite[1] < 20) {
		this.opacity += 13;	this.x += 2.5;
	} else if ($gameTemp._thud_sprite[1] < 20 + Moghunter.thud_duration) {
		this.x = 0;	this.opacity = 255;
	} else { 
	    this.opacity -= 13;	this.x += 2.5;
		if (this.opacity === 0) {$gameTemp._thud_sprite[0] = false};
	};
};

//==============================
// * Update
//==============================
Treasure_Hud.prototype.update = function() {	
    Sprite.prototype.update.call(this);	
	if ($gameTemp._thud_sprite[0]) {
		this.update_position();
	} else {
		this.opacity = 0
	};
	if ($gameTemp._thud_data[0]) {
		this.refresh();
	};
	this.mog_thud_updateFrame();
};

//==============================
// * 切换备用框
//==============================
Treasure_Hud.prototype.mog_thud_updateFrame = function() {	
	if( this._hud_layout_name == $gameSystem._thud_layout ){ return; }
	this.load_img();
	this._layout.bitmap = this._layout_img;
}
