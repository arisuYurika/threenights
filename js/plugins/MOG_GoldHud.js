//=============================================================================
// MOG_GoldHud.js
//=============================================================================

/*:
 * @plugindesc (v1.6)[v1.4]  地图UI - 金钱固定框
 * @author Moghunter（Drill_up翻译+优化）
 * 
 * @Drill_LE_param "备用框-%d"
 * @Drill_LE_parentKey ""
 * @Drill_LE_var "Moghunter.ghud_src_list_length"
 * 
 *
 * @param 初始显示
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示。
 * @default true 
 *
 * @param 资源-固定框
 * @desc 金钱外框的图片资源。
 * @default 金钱固定框-框
 * @require 1
 * @dir img/Map__ui/
 * @type file
 *
 * @param 资源-金钱数值
 * @desc 金钱数值的图片资源。
 * @default 金钱固定框-数值
 * @require 1
 * @dir img/Map__ui/
 * @type file
 *
 * @param 平移-固定框 X
 * @desc x轴方向平移，单位像素。0为贴最左边。
 * @default 555
 *
 * @param 平移-固定框 Y
 * @desc y轴方向平移，单位像素。0为贴最上面。
 * @default 560
 *
 * @param 平移-金钱数值 X
 * @desc 以固定框为基准，x轴方向平移，单位像素。（可为负数）
 * @default 240
 *
 * @param 平移-金钱数值 Y
 * @desc 以固定框为基准，y轴方向平移，单位像素。（可为负数）
 * @default 24
 *
 * @param 最小透明度
 * @type number
 * @min 0
 * @desc 玩家在地图中进入被固定框挡住的区域时，框会变透明。
 * 0表示完全透明，255表示完全不透明
 * @default 60
 *
 * @param 金钱数值最大显示位
 * @type number
 * @min 1
 * @max 16
 * @desc 注意,这里是只显示位数,不负责破限。填12表示最大显示12位数。
 * 如果你使用了金钱破限脚本，请及时修正你想要显示的最大位数。
 * @default 8
 *
 *
 * @param ---备用框集---
 * @desc 
 * 
 * @param 备用框-1
 * @parent ---备用框集---
 * @type struct<MogGoldHud>
 * @desc 通过插件指令可将当前金钱框替换成备用的框。
 * @default 
 *
 * @param 备用框-2
 * @parent ---备用框集---
 * @type struct<MogGoldHud>
 * @desc 通过插件指令可将当前金钱框替换成备用的框。
 * @default 
 *
 * @param 备用框-3
 * @parent ---备用框集---
 * @type struct<MogGoldHud>
 * @desc 通过插件指令可将当前金钱框替换成备用的框。
 * @default 
 *
 * @param 备用框-4
 * @parent ---备用框集---
 * @type struct<MogGoldHud>
 * @desc 通过插件指令可将当前金钱框替换成备用的框。
 * @default 
 *
 * @param 备用框-5
 * @parent ---备用框集---
 * @type struct<MogGoldHud>
 * @desc 通过插件指令可将当前金钱框替换成备用的框。
 * @default 
 *
 * @help  
 * =============================================================================
 * +++ MOG Gold Hud (v1.6) +++
 * By Moghunter 
 * https://mogplugins.wordpress.com/
 * =============================================================================
 * 显示金币数值的固定框。固定框是长期显示的ui窗口，与浮动框不同。
 * 【现已支持插件关联资源的打包、加密】
 *
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.插件的作用域：地图界面。
 *   添加在地图的ui层。
 * 2.切换备用框的插件指令执行后瞬间生效，并且永久有效。
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 资源路径：img/Map__ui （Map后面有两个下划线）
 * 先确保项目img文件夹下是否有Map__ui文件夹。
 * 要查看所有关联资源文件的插件，可以去看看"插件清单.xlsx"。
 * 使用金币显示框，需要配置资源文件：
 *
 * 资源-固定框
 * 资源-金钱数值
 *
 * -----------------------------------------------------------------------------
 * ----可选设定
 * 金币显示框可以通过插件指令进行关闭，或者切换资源框。
 *
 * 插件指令：>金钱固定框 : 显示
 * 插件指令：>金钱固定框 : 隐藏
 * 
 * 插件指令：>金钱固定框 : 还原默认框
 * 插件指令：>金钱固定框 : 设置为备用框 : 1
 *
 * 1."设置为备用框"后的数字，表示设置的编号，设置后图片资源会被切换。
 *   "还原默认框"表示换回最初配置的框。
 * 
 * -----------------------------------------------------------------------------
 * ----关于Drill_up优化：
 * [v1.1]
 * 使得该插件支持关联资源的打包、加密。
 * 部署时勾选去除无关文件，本插件中相关的文件不会被去除。
 * 添加了金钱数值最大显示位选项。
 * [v1.2]
 * 修改了插件分类。
 * [v1.3]
 * 修改了插件关联的资源文件夹。并添加了备用框替换的功能。
 * [v1.4]
 * 添加了最大值编辑的支持。
 */
/*~struct~MogGoldHud:
 * 
 * @param 标签
 * @desc 只用于方便区分查看的标签，不作用在插件中。
 * @default --新的备用设置--
 *
 * @param 资源-固定框
 * @desc 金钱外框的备用图片资源。
 * @default 金钱固定框-框
 * @require 1
 * @dir img/Map__ui/
 * @type file
 *
 * @param 资源-金钱数值
 * @desc 金钱数值的备用图片资源。
 * @default 金钱固定框-数值
 * @require 1
 * @dir img/Map__ui/
 * @type file
 *
 */

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//插件记录：
//		添加了资源切换功能，可以看看变量：
//			Moghunter.ghud_src_list
//			$gameSystem._ghud_layout
//			$gameSystem._ghud_number
//			（资源切换改动比较多，不过结构并不复杂）

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_GoldHud = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_GoldHud');
   
    // HUD POSITION
	Moghunter.ghud_pos_x = Number(Moghunter.parameters['平移-固定框 X'] || 555);
	Moghunter.ghud_pos_y = Number(Moghunter.parameters['平移-固定框 Y'] || 560);
	Moghunter.ghud_number_pos_x = Number(Moghunter.parameters['平移-金钱数值 X'] || 240);
	Moghunter.ghud_number_pos_y = Number(Moghunter.parameters['平移-金钱数值 Y'] || 24);
	Moghunter.ghud_fade_limit = Number(Moghunter.parameters['最小透明度'] || 60);
	Moghunter.ghud_hudvisible = String(Moghunter.parameters['初始显示'] || "true");
	Moghunter.Gold_A = String(Moghunter.parameters['资源-固定框']);
	Moghunter.Gold_B = String(Moghunter.parameters['资源-金钱数值']);
    Moghunter.Gold_display = Number(Moghunter.parameters['金钱数值最大显示位'] || 8);		
	
	Moghunter.ghud_src_list = [];
	Moghunter.ghud_src_list_length = 5;
	
	for (var i = 0; i < Moghunter.ghud_src_list_length; i++) {
		if( Moghunter.parameters['备用框-' + String(i+1) ] != "" ){
			Moghunter.ghud_src_list[i] = JSON.parse(Moghunter.parameters['备用框-' + String(i+1) ]);
			
			Moghunter.ghud_src_list[i]['src_layout'] = String(Moghunter.ghud_src_list[i]["资源-固定框"]);
			Moghunter.ghud_src_list[i]['src_number'] = String(Moghunter.ghud_src_list[i]["资源-金钱数值"]);
		}else{
			Moghunter.ghud_src_list[i] = [];
		}
	}
	
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
var _alias_mog_ghud_sys_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	_alias_mog_ghud_sys_initialize.call(this);
	this._ghud_visible = String(Moghunter.ghud_hudvisible) === "true" ? true : false;
	this._ghud_layout = Moghunter.Gold_A;
	this._ghud_number = Moghunter.Gold_B;
};

//=============================================================================
// ** Game_Interpreter
//=============================================================================	

//==============================
// * PluginCommand
//==============================
var _alias_mog_goldhud_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_alias_mog_goldhud_pluginCommand.call(this,command, args)
	if (command === "show_gold_hud")  { $gameSystem._ghud_visible = true};
	if (command === "hide_gold_hud")  { $gameSystem._ghud_visible = false};
	if (command === ">金钱固定框")  {
		if(args.length === 2){
			var type = String(args[1]);
			if( type == "显示" || type == "启用" ){ $gameSystem._ghud_visible = true; }
			if( type == "隐藏" || type == "关闭" ){ $gameSystem._ghud_visible = false; }
			if( type == "还原默认框" ){ 
				$gameSystem._ghud_layout = Moghunter.Gold_A;
				$gameSystem._ghud_number = Moghunter.Gold_B;
			}
		}
		if(args.length === 4){
			var type = String(args[1]);
			var temp1 = Number(args[3]);
			if( type == "设置为备用框" ){
				$gameSystem._ghud_layout = Moghunter.ghud_src_list[temp1-1]['src_layout'];
				$gameSystem._ghud_number = Moghunter.ghud_src_list[temp1-1]['src_number'];
			}
		}
	};
	return true;
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
var _mog_goldHud_sMap_createSpriteset = Scene_Map.prototype.createSpriteset;
Scene_Map.prototype.createSpriteset = function() {
	_mog_goldHud_sMap_createSpriteset.call(this);
	if (!this._hudField) {this.createHudField()};
	this.createGoldHud();
	this.sortMz();
};

//==============================
// ** create Gold Hud
//==============================
Scene_Map.prototype.createGoldHud = function() {
 	this._gold_hud = new Gold_Hud();
	this._gold_hud.mz = 120;
	this._hudField.addChild(this._gold_hud);
};

//=============================================================================
// * Actor_Hud
//=============================================================================
function Gold_Hud() {
    this.initialize.apply(this, arguments);
};

Gold_Hud.prototype = Object.create(Sprite.prototype);
Gold_Hud.prototype.constructor = Gold_Hud;

//==============================
// * Initialize
//==============================
Gold_Hud.prototype.initialize = function() {	
    Sprite.prototype.initialize.call(this);	
	this._hud_size = [-1,-1,-1,-1];
	this._hud_layout_name = "";
	this._hud_number_name = "";
    this.load_img();
	this.opacity = 255;
};

//==============================
// * Load Img
//==============================
Gold_Hud.prototype.load_img = function() {
	this._hud_layout_name = $gameSystem._ghud_layout;
	this._hud_number_name = $gameSystem._ghud_number;
	this._layout_img = ImageManager.load_MapUi(this._hud_layout_name);
	this._number_img = ImageManager.load_MapUi(this._hud_number_name);
};

//==============================
// * Create Layout
//==============================
Gold_Hud.prototype.create_layout = function() {
	this._layout = new Sprite(this._layout_img);
	this._layout.x = this._pos_x;
	this._layout.y = this._pos_y;
	this.addChild(this._layout);
};
	
//==============================
// * Refresh Data
//==============================
Gold_Hud.prototype.refresh_data = function() {
     this._hud_size[0] = Moghunter.ghud_pos_x - ($gameMap.tileWidth() / 2);
     this._hud_size[1] = Moghunter.ghud_pos_y - $gameMap.tileHeight();
     this._hud_size[2] = Moghunter.ghud_pos_x + this._layout_img.width - $gameMap.tileWidth();
     this._hud_size[3] = Moghunter.ghud_pos_y + this._layout_img.height;	 
	 this._pos_x = Moghunter.ghud_pos_x;
	 this._pos_y = Moghunter.ghud_pos_y;
  	 this.create_layout();
     this.create_number();	 
};

//==============================
// * Create Number
//==============================
Gold_Hud.prototype.create_number = function() {
	this._number = [];
	this._number_img_data = [this._number_img.width,this._number_img.height,
	                      this._number_img.width / 10, this._number_img.height / 2,
						  this._pos_x + Moghunter.ghud_number_pos_x,
						  this._pos_y + Moghunter.ghud_number_pos_y,
						  ];
	for (var i = 0; i < Moghunter.Gold_display; i++) {
	   this._number[i] = new Sprite(this._number_img);
	   this._number[i].visible = false;
	   this._number[i].x = this._number_img_data[4];
	   this._number[i].y = this._number_img_data[5];
	   this.addChild(this._number[i]);
	};	
	this._number_old = $gameParty.gold();	
	this.refresh_number(this._number,this._number_old,this._number_img_data,this._number_img_data[4],0);	
};

//==============================
// * Update Dif
//==============================
Gold_Hud.prototype.update_dif = function(value,real_value,speed) {
	if (value == real_value) {return value};
	var dnspeed = 1 + (Math.abs(value - real_value) / speed);
	if (value > real_value) {value -= dnspeed;
	    if (value < real_value) {value = real_value};}
    else if (value < real_value) {value  += dnspeed;
    	if (value  > real_value) {value  = real_value};		
    };
	return Math.floor(value);
};

//==============================
// * Refresh Number
//==============================
Gold_Hud.prototype.refresh_number = function(sprites,value,img_data,x,center) {
    numbers = Math.abs(value).toString().split("");  
   	for (var i = 0; i < sprites.length ; i++) {sprites[i].visible = false;
	   if (i > numbers.length) {return};
	   var n = Number(numbers[i]);
	   sprites[i].setFrame(n * img_data[2], 0, img_data[2], img_data[1]);
	   sprites[i].visible = true;
	   if (center === 0) {
     	   var nx = -(img_data[2] * i) + (img_data[2] * numbers.length);
	   } else {
		   var nx = -(img_data[2] * i) + ((img_data[2] / 2) * numbers.length);
	   };
	   sprites[i].x = x - nx;
    };	
};

//==============================
// * Update Number
//==============================
Gold_Hud.prototype.update_number = function() {
	 var dif_number = this.update_dif(this._number_old,$gameParty.gold(),10)
	 if (this._number_old != dif_number) {this._number_old = dif_number;
	 this.refresh_number(this._number,this._number_old,this._number_img_data,this._number_img_data[4],0);};
};

//==============================
// * Update visible
//==============================
Gold_Hud.prototype.update_visible = function() {
	if (Imported.MOG_ChronoEngine && $gameSystem.isChronoMode()) {
		this.opacity -= 20;
		return;
	};	
	this.visible = $gameSystem._ghud_visible;
	if (this.is_hud_visible()) {this.opacity += 10}	 
	else {
		if ($gameMessage.isBusy()) {
		    this.opacity -= 10;		
	    } else {
			if (this.opacity > Moghunter.ghud_fade_limit) {	
				this.opacity -= 10;
				if (this.opacity < Moghunter.ghud_fade_limit) {this.opacity = Moghunter.ghud_fade_limit};
			};
	    };
	};
};

//==============================
// * Is Hud Visible
//==============================
Gold_Hud.prototype.is_hud_visible = function() {
	if ($gameMessage.isBusy()) {return false};
	if (!$gameSystem._ghud_visible) {return false};
	if ($gamePlayer.screen_realX() < this._hud_size[0]) {return true};
	if ($gamePlayer.screen_realX() > this._hud_size[2]) {return true};
	if ($gamePlayer.screen_realY() < this._hud_size[1]) {return true};
	if ($gamePlayer.screen_realY() > this._hud_size[3]) {return true};
	if (this.opacity < Moghunter.ghud_fade_limit) {return true};
	return false;
};

//==============================
// * Update
//==============================
Gold_Hud.prototype.update = function() {	
    Sprite.prototype.update.call(this);	
	if (this._hud_size[0] === -1 && this._layout_img.isReady()) {this.refresh_data()};
	if (this._hud_size[0] === -1) {return};
	this.update_visible();
	this.update_number();
	this.mog_ghud_updateFrame();
};

//==============================
// * 切换备用框
//==============================
Gold_Hud.prototype.mog_ghud_updateFrame = function() {	
	if( this._hud_layout_name == $gameSystem._ghud_layout 
	 && this._hud_number_name == $gameSystem._ghud_number ){ return; }
	this.load_img();
	this._layout.bitmap = this._layout_img;
	for (var i = 0; i < Moghunter.Gold_display; i++) {
	   this._number[i].bitmap = this._number_img;
	};	
}

