//=============================================================================
// MOG_CharSelect.js
//=============================================================================

/*:
 * @plugindesc (v1.1)[v1.5]  面板 - 角色选择界面
 * @author Moghunter （Drill_up、拾贝猫翻译+优化）
 * 
 * @Drill_LE_param "待选角色-%d"
 * @Drill_LE_parentKey ""
 * @Drill_LE_var "Moghunter.charSel_char_list_length"
 * 
 *
 * @param 资源-整体布局
 * @desc 整体布局图片资源。
 * @default 角色选择-整体布局
 * @require 1
 * @dir img/Menu__charselect/
 * @type file
 *
 * @param 资源-静态背景
 * @desc 选择界面的静态背景图片资源。角色选择界面与菜单背景没有交互，背景在这里设置。
 * @default 角色选择-静态背景
 * @require 1
 * @dir img/Menu__charselect/
 * @type file
 *
 * @param ----待选角色----
 * @desc
 *
 * @param 平移-待选角色 X
 * @parent ----待选角色----
 * @desc x轴方向平移，单位像素。0为贴在正中心。（可为负数）
 * @default 30
 *
 * @param 平移-待选角色 Y
 * @parent ----待选角色----
 * @desc y轴方向平移，单位像素。0为贴在正中心。（可为负数）
 * @default 0
 *
 * @param 待选角色环半径
 * @parent ----待选角色----
 * @type number
 * @min 1
 * @desc 待选角色头像围绕成的环半径大小。
 * @default 200
 *
 * @param 平移-角色前视图 X
 * @parent ----待选角色----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 140
 *	
 * @param 平移-角色前视图 Y
 * @parent ----待选角色----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 330
 *
 * @param 角色前视图起点 X
 * @parent ----待选角色----
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的x轴值，单位像素。（可为负数）
 * @default -100
 *	
 * @param 角色前视图起点 Y
 * @parent ----待选角色----
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的y轴值，单位像素。（可为负数）
 * @default 0
 *	
 * @param 角色前视图移动时长
 * @parent ----待选角色----
 * @type number
 * @min 1
 * @desc 从偏移的位置到原位置所需的时间，单位帧。（1秒60帧）
 * @default 20
 *	
 * @param 平移-选中角色名 X
 * @parent ----待选角色----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 20
 *	
 * @param 平移-选中角色名 Y
 * @parent ----待选角色----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 525
 *	
 * @param 平移-选中角色属性 X
 * @parent ----待选角色----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 270
 *	
 * @param 平移-选中角色属性 Y
 * @parent ----待选角色----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 200
 *	
 * @param 选中角色属性横向间距
 * @parent ----待选角色----
 * @type number
 * @min 1
 * @desc 选中角色属性的横向间距。
 * @default 120
 *	
 * @param 选中角色属性纵向间距
 * @parent ----待选角色----
 * @type number
 * @min 1
 * @desc 选中角色属性的纵向间距。
 * @default 45
 *	
 * @param 选中角色属性字体大小
 * @parent ----待选角色----
 * @type number
 * @min 1
 * @desc 选中角色属性字体大小。
 * @default 22
 *
 * @param ==待选角色组==
 * @parent ----待选角色----
 * @desc
 *
 * @param 待选角色-1
 * @parent ==待选角色组==
 * @type struct<SelectableChar>
 * @desc 待选角色的详细配置信息。
 * @default 
 *
 * @param 待选角色-2
 * @parent ==待选角色组==
 * @type struct<SelectableChar>
 * @desc 待选角色的详细配置信息。
 * @default 
 *
 * @param 待选角色-3
 * @parent ==待选角色组==
 * @type struct<SelectableChar>
 * @desc 待选角色的详细配置信息。
 * @default 
 *
 * @param 待选角色-4
 * @parent ==待选角色组==
 * @type struct<SelectableChar>
 * @desc 待选角色的详细配置信息。
 * @default 
 *
 * @param 待选角色-5
 * @parent ==待选角色组==
 * @type struct<SelectableChar>
 * @desc 待选角色的详细配置信息。
 * @default 
 *
 * @param 待选角色-6
 * @parent ==待选角色组==
 * @type struct<SelectableChar>
 * @desc 待选角色的详细配置信息。
 * @default 
 *
 * @param 待选角色-7
 * @parent ==待选角色组==
 * @type struct<SelectableChar>
 * @desc 待选角色的详细配置信息。
 * @default 
 *
 * @param 待选角色-8
 * @parent ==待选角色组==
 * @type struct<SelectableChar>
 * @desc 待选角色的详细配置信息。
 * @default 
 *
 * @param 待选角色-9
 * @parent ==待选角色组==
 * @type struct<SelectableChar>
 * @desc 待选角色的详细配置信息。
 * @default 
 *
 * @param 待选角色-10
 * @parent ==待选角色组==
 * @type struct<SelectableChar>
 * @desc 待选角色的详细配置信息。
 * @default 
 *
 * @param 待选角色-11
 * @parent ==待选角色组==
 * @type struct<SelectableChar>
 * @desc 待选角色的详细配置信息。
 * @default 
 *
 * @param 待选角色-12
 * @parent ==待选角色组==
 * @type struct<SelectableChar>
 * @desc 待选角色的详细配置信息。
 * @default 
 *
 * @param 待选角色-13
 * @parent ==待选角色组==
 * @type struct<SelectableChar>
 * @desc 待选角色的详细配置信息。
 * @default 
 *
 * @param 待选角色-14
 * @parent ==待选角色组==
 * @type struct<SelectableChar>
 * @desc 待选角色的详细配置信息。
 * @default 
 *
 * @param 待选角色-15
 * @parent ==待选角色组==
 * @type struct<SelectableChar>
 * @desc 待选角色的详细配置信息。
 * @default 
 *
 * @param 待选角色-16
 * @parent ==待选角色组==
 * @type struct<SelectableChar>
 * @desc 待选角色的详细配置信息。
 * @default 
 *
 * @param 待选角色-17
 * @parent ==待选角色组==
 * @type struct<SelectableChar>
 * @desc 待选角色的详细配置信息。
 * @default 
 *
 * @param 待选角色-18
 * @parent ==待选角色组==
 * @type struct<SelectableChar>
 * @desc 待选角色的详细配置信息。
 * @default 
 *
 * @param 待选角色-19
 * @parent ==待选角色组==
 * @type struct<SelectableChar>
 * @desc 待选角色的详细配置信息。
 * @default 
 *
 * @param 待选角色-20
 * @parent ==待选角色组==
 * @type struct<SelectableChar>
 * @desc 待选角色的详细配置信息。
 * @default 
 *
 * @param 待选角色-21
 * @parent ==待选角色组==
 * @type struct<SelectableChar>
 * @desc 待选角色的详细配置信息。
 * @default 
 *
 * @param 待选角色-22
 * @parent ==待选角色组==
 * @type struct<SelectableChar>
 * @desc 待选角色的详细配置信息。
 * @default 
 *
 * @param 待选角色-23
 * @parent ==待选角色组==
 * @type struct<SelectableChar>
 * @desc 待选角色的详细配置信息。
 * @default 
 *
 * @param 待选角色-24
 * @parent ==待选角色组==
 * @type struct<SelectableChar>
 * @desc 待选角色的详细配置信息。
 * @default 
 *
 * @param 待选角色-25
 * @parent ==待选角色组==
 * @type struct<SelectableChar>
 * @desc 待选角色的详细配置信息。
 * @default 
 *
 * @param 待选角色-26
 * @parent ==待选角色组==
 * @type struct<SelectableChar>
 * @desc 待选角色的详细配置信息。
 * @default 
 *
 * @param 待选角色-27
 * @parent ==待选角色组==
 * @type struct<SelectableChar>
 * @desc 待选角色的详细配置信息。
 * @default 
 *
 * @param 待选角色-28
 * @parent ==待选角色组==
 * @type struct<SelectableChar>
 * @desc 待选角色的详细配置信息。
 * @default 
 *
 * @param 待选角色-29
 * @parent ==待选角色组==
 * @type struct<SelectableChar>
 * @desc 待选角色的详细配置信息。
 * @default 
 *
 * @param 待选角色-30
 * @parent ==待选角色组==
 * @type struct<SelectableChar>
 * @desc 待选角色的详细配置信息。
 * @default 
 *
 * @param ----已选角色----
 * @desc
 *
 * @param 队伍规模
 * @parent ----已选角色----
 * @type number
 * @min 1
 * @desc 选择角色的数量，达到数量将结束界面选择。
 * @default 4
 *
 * @param 平移-已选角色 X
 * @parent ----已选角色----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 690
 *
 * @param 平移-已选角色 Y
 * @parent ----已选角色----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 150
 *
 * @param 已选角色间距
 * @parent ----已选角色----
 * @desc 已选角色之间的纵向间隔。
 * @default 90
 *	 
 * @param 资源-选择指针
 * @parent ----已选角色----
 * @desc 选择指针的图片资源。
 * @default 角色选择-选择指针
 * @require 1
 * @dir img/Menu__charselect/
 * @type file
 *
 * @param 平移-选择指针 X
 * @parent ----已选角色----
 * @desc 以当前选择的角色的位置为基准，x轴方向平移，单位像素。（可为负数）
 * @default 0
 *	
 * @param 平移-选择指针 Y
 * @parent ----已选角色----
 * @desc 以当前选择的角色的位置为基准，y轴方向平移，单位像素。（可为负数）
 * @default 0
 *	
 * @param 选择指针旋转速度
 * @parent ----已选角色----
 * @desc 正数逆时针，负数顺时针，单位 弧度/帧。(1秒60帧)
 * 6.28表示一圈，设置0.01表示大概10秒转一圈，设置0则不旋转。
 * @default 0.02
 *	 
 * @help  
 * =============================================================================
 * +++ MOG - Character Select (v1.1) +++
 * By Moghunter 
 * https://mogplugins.wordpress.com/
 * =============================================================================
 * 角色选择面板可以在任何时候打开，但是打开后，角色队伍会被重组。
 * 【现已支持插件关联资源的打包、加密】
 *
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.插件的作用域：菜单界面。
 *   属于自定义的面板。
 * 2.你可以设置任意个待选角色。
 *      
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 资源路径：img/Menu__charselect （Map后面有两个下划线）
 * 先确保项目img文件夹下是否有Menu__charselect文件夹。
 * 要查看所有关联资源文件的插件，可以去看看"插件清单.xlsx"。
 * 如果没有，需要自己建立。需要配置资源文件：
 *
 * 资源-整体布局 
 * 资源-静态背景 
 * 资源-选择指针 
 *
 * 待选角色-1 资源-待选头像   
 * 待选角色-1 资源-选中头像   
 * 待选角色-1 资源-角色前视图 
 *
 * 待选角色-2 资源-待选头像  
 * 待选角色-2 资源-选中头像   
 * 待选角色-2 资源-角色前视图 
 *
 * 待选角色-3 资源-待选头像 
 * ……
 *
 * 1.所有资源都在Menu__charselect文件夹下。
 * 2.角色选择界面有自带的静态背景，所以不支持菜单背景插件。
 *
 * -----------------------------------------------------------------------------
 * ----激活条件 - 打开面板
 * 打开角色选择面板，使用插件指令打开：
 *
 * 插件指令：character_select
 *
 * -----------------------------------------------------------------------------
 * ----激活条件 - 定制选择的角色
 * 默认显示全部待选角色。如果你要定制，使用下面的插件指令:
 * （注意，冒号左右有一个空格。）
 *
 * 插件指令：character_select : A
 *
 * 参数A： 待选角色组
 *         配置的待选角色id组，用","逗号隔开，可以设置多个。
 *         比如1,2,4表示配置的待选角色1、2、4将显示在界面上。
 *         （注意不是角色的编号，是配置的待选角色的编号）
 *
 * 示例：
 * 插件指令：character_select : 1,2,3
 * 插件指令：character_select : 4,5
 *
 * -----------------------------------------------------------------------------
 * ----关于Drill_up优化：
 * [v1.1]
 * 使得该插件支持关联资源的打包、加密。
 * 部署时勾选去除无关文件，本插件中相关的文件不会被去除。
 * [v1.2]
 * 使得你可以定制一些指定的角色组合。
 * [v1.3]
 * 修改了插件分类。
 * [v1.4]
 * 修改了插件关联的资源文件夹。
 * [v1.5]
 * 添加了最大值编辑的支持。
 * 
 */
/*~struct~SelectableChar:
 * 
 * @param 待选角色
 * @type actor
 * @desc 面板中可以选择的角色。
 * @default 1
 *
 * @param 资源-待选头像
 * @desc 角色头像的图片资源。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 资源-选中头像
 * @desc 角色头像的图片资源。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 资源-角色前视图
 * @desc 坐标介绍图的图片资源。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 *
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_CharSelect = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_CharSelect');

    Moghunter.charSel_FaceX = Number(Moghunter.parameters['平移-待选角色 X'] || 30);
    Moghunter.charSel_FaceY = Number(Moghunter.parameters['平移-待选角色 Y'] || 0);
	
    Moghunter.charSel_Face2X = Number(Moghunter.parameters['平移-已选角色 X'] || 690);
    Moghunter.charSel_Face2Y = Number(Moghunter.parameters['平移-已选角色 Y'] || 150);
    Moghunter.charSel_Face2S = Number(Moghunter.parameters['已选角色间距'] || 90);
	
	Moghunter.charSel_PictureX = Number(Moghunter.parameters['平移-角色前视图 X'] || 140);
	Moghunter.charSel_PictureY = Number(Moghunter.parameters['平移-角色前视图 Y'] || 330);
	Moghunter.charSel_Picture_slideX = Number(Moghunter.parameters['角色前视图起点 X'] || -100);
	Moghunter.charSel_Picture_slideY = Number(Moghunter.parameters['角色前视图起点 Y'] || 0);
	Moghunter.charSel_Picture_slideTime = Number(Moghunter.parameters['角色前视图移动时长'] || 20);
	
    Moghunter.charSel_CursorX = Number(Moghunter.parameters['平移-选择指针 X'] || 0);
	Moghunter.charSel_CursorY = Number(Moghunter.parameters['平移-选择指针 Y'] || 0);
	Moghunter.charSel_CursorR = Number(Moghunter.parameters['选择指针旋转速度'] || 0.02);
	Moghunter.charSel_NameX = Number(Moghunter.parameters['平移-选中角色名 X'] || 20);
	Moghunter.charSel_NameY = Number(Moghunter.parameters['平移-选中角色名 Y'] || 525);
	Moghunter.charSel_parX = Number(Moghunter.parameters['平移-选中角色属性 X'] || 270);
	Moghunter.charSel_parY = Number(Moghunter.parameters['平移-选中角色属性 Y'] || 200);
	Moghunter.charSel_par_hor = Number(Moghunter.parameters['选中角色属性横向间距'] || 120);
	Moghunter.charSel_par_ver = Number(Moghunter.parameters['选中角色属性纵向间距'] || 45);
	Moghunter.charSel_parFontSize = Number(Moghunter.parameters['选中角色属性字体大小'] || 22);
	
	Moghunter.charSel_rolRange = Number(Moghunter.parameters['待选角色环半径'] || 200);
	Moghunter.charSel_initPartySize = Number(Moghunter.parameters['队伍规模'] || 4);
	
	Moghunter.src_charSel_bak = String(Moghunter.parameters['资源-静态背景']);
	Moghunter.src_charSel_layout = String(Moghunter.parameters['资源-整体布局']);
	Moghunter.src_charSel_cursor = String(Moghunter.parameters['资源-选择指针']);
	
	Moghunter.charSel_char_list_length = 30;
	Moghunter.charSel_char_list = {};
	for (var i = 1; i <= Moghunter.charSel_char_list_length ; i++ ) {
		if( Moghunter.parameters['待选角色-' + String(i) ] != "" ){
			Moghunter.charSel_char_list[i] = JSON.parse( Moghunter.parameters['待选角色-'+ String(i) ] );
		}else{
			Moghunter.charSel_char_list[i] = [] ;
		}
	};
	Moghunter.charSel_char_customized_list = [];
	
//=============================================================================
// ** ImageManager
//=============================================================================

//==============================
// * Char Select
//==============================
ImageManager.loadACharSelect = function(filename) {
    return this.loadBitmap('img/Menu__charselect/', filename, 0, true);
};
ImageManager.loadMenusActorFace = function(filename) {
    return this.loadBitmap('img/Menu__actorFaces/', filename, 0, true);
};


//=============================================================================
// ** Game_Interpreter
//=============================================================================	

//==============================
// * PluginCommand
//==============================
var _alias_mog_charSelect_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_alias_mog_charSelect_pluginCommand.call(this,command, args)
	if (command === "character_select")  {
		if(args.length == 2){
			Moghunter.charSel_char_customized_list = args[1].split(",");
		}else{
			Moghunter.charSel_char_customized_list = [];
		}
		SceneManager.push(Scene_CharSelect)
	    //this.wait(10);
	};
	return true;
};

//=============================================================================
// ** Scene Character Select
//=============================================================================	
function Scene_CharSelect() {
    this.initialize.apply(this, arguments);
};

Scene_CharSelect.prototype = Object.create(Scene_MenuBase.prototype);
Scene_CharSelect.prototype.constructor = Scene_CharSelect;

//==============================
// * Initialize
//==============================
Scene_CharSelect.prototype.initialize = function() {
    Scene_Base.prototype.initialize.call(this);
	this._index = 0;
	this._ActorIndex = -1;
	this._party = [];
	this._partyIndex = 0;
	this._partySel = [];
	this._actors = [];
	this._pi = 2.0 * Math.PI;
	this._np = [0,0];
	this._rol_range = Moghunter.charSel_rolRange;
	this._phase = [0,0];
	this.loadFiles();
    this.createSprites();
};

//==============================
// * Load Files
//==============================
Scene_CharSelect.prototype.loadFiles = function() {
    this._faceBitmaps = [];
	this._faceBitmaps_S = [];
	this._pictureBitmaps = [];
	$gameParty._actors = [];
	for (var i = 1; i < $dataActors.length; i++) {$gameParty.addActor(i)};
	var membersTemp = $gameParty.members();	
	$gameParty._actors = [];
	for (var i = 0; i < membersTemp.length; i++) {
		 var actor = membersTemp[i];
		 for (var j = 1; j <= Moghunter.charSel_char_list_length; j++) {
			if ( Moghunter.charSel_char_customized_list.length != 0 ){
				var is_skip = true;
				for (var k = 0; k < Moghunter.charSel_char_customized_list.length; k++) {
					if( Number(Moghunter.charSel_char_customized_list[k]) == j){
						is_skip = false;
					}
				}
				if(is_skip){
					continue;
				}
			}
            if (actor._actorId == Moghunter.charSel_char_list[j]['待选角色']) {
				this._actors.push(actor)
				//var fileName = String("Actor_" + actor._actorId) 
				this._faceBitmaps.push(ImageManager.loadMenusActorFace(Moghunter.charSel_char_list[j]['资源-待选头像'] || ""));
				this._faceBitmaps_S.push(ImageManager.loadMenusActorFace(Moghunter.charSel_char_list[j]['资源-选中头像'] || ""));
				this._pictureBitmaps.push(ImageManager.loadMenusActorFace(Moghunter.charSel_char_list[j]['资源-角色前视图'] || ""));
			};
		 };	
	};
	this._maxPartySize = Math.min(Math.max(Moghunter.charSel_initPartySize,1),this._actors.length);
};
  
//==============================
// * max Actors
//==============================
Scene_CharSelect.prototype.maxActors = function() {
	return this._actors.length;
};
  
//==============================
// * Actor
//==============================
Scene_CharSelect.prototype.actor = function() {
	return this._actors[this._ActorIndex];
};  
  
//==============================
// * Next Index
//==============================
Scene_CharSelect.prototype.nextIndex = function(value) {
	if (this._phase[0] != 1) {return};
	SoundManager.playCursor();
    this._index += value;
	if (this._index >= this.maxActors()) {this._index = 0};
	if (this._index < 0) {this._index = this.maxActors() - 1};
};  
    
//==============================
// * update Commands
//==============================
Scene_CharSelect.prototype.updateCommands = function() {
	if (Input.isRepeated("right")) {this.nextIndex(-1)}
	else if (Input.isRepeated("left")) {this.nextIndex(1)}
	else if (Input.isRepeated("down")) {this.nextIndex(-1)}
	else if (Input.isRepeated("up")) {this.nextIndex(1)}
	else if (Input.isTriggered("ok")) {this.selectCharacter(true)}
	else if (Input.isTriggered("cancel") || TouchInput.isCancelled()) {this.cancelCharacter()};
	if (TouchInput.isTriggered()) {this.checkTouchOnFace()};
};

//==============================
// * check Touch On Face
//==============================
Scene_CharSelect.prototype.checkTouchOnFace = function() {
	for (i = 0; i < this._facesSprites.length; i++){
		 if (this.isOnFace(this._facesSprites[i])) {
			 this._index = i;
			 this.selectCharacter(false);
		 };		
	};
};

//==============================
// * On Picture Com
//==============================
Scene_CharSelect.prototype.isOnFace = function(sprite) {
	 var cw = sprite.bitmap.width / 2;
	 var ch = sprite.bitmap.height / 2;
	 if (TouchInput.x < sprite.x - cw) { return false};
	 if (TouchInput.x > sprite.x + cw) { return false};
	 if (TouchInput.y < sprite.y - ch) { return false};
	 if (TouchInput.y > sprite.y + ch) { return false};
	 return true;	 
};	
	
//==============================
// * updatePhase
//==============================
Scene_CharSelect.prototype.updatePhase = function() {
     if (this._phase[0] === 0) {
		 this._field.opacity += 3;
		 if (this._field.opacity >= 255) {this._phase[0] = 1}; 
	 } else {
		 this._field.opacity -=  2;
		 if (this._field.opacity <= 0) {this.executeEnd()};
	 };
};	
	
//==============================
// * create Sprites
//==============================
Scene_CharSelect.prototype.createSprites = function() {	
	this._field = new Sprite();
	this._field.opacity = 0;
	this.addChild(this._field);
	this.createBackgroundS();
	this.createPicture();
	this.createCursor();
	this.createFaces();
	this.createLayout();
	this.createName();
	this.createParameters();
	this.createMembers();
};	
	
//==============================
// * create Background S
//==============================
Scene_CharSelect.prototype.createBackgroundS = function() {
	this._background = new Sprite(ImageManager.loadACharSelect(Moghunter.src_charSel_bak));
	this._field.addChild(this._background);
	if (Imported.MOG_MenuParticles) {this.create_mparticles()};
};

//==============================
// * create Background
//==============================
Scene_CharSelect.prototype.createBackground = function() {
};


//==============================
// * create Layout
//==============================
Scene_CharSelect.prototype.createLayout = function() {
	this._layout = new Sprite(ImageManager.loadACharSelect(Moghunter.src_charSel_layout));
	this._field.addChild(this._layout);
};

//==============================
// * create Members
//==============================
Scene_CharSelect.prototype.createMembers = function() {
	 this._members = [];
     for (var i = 0; i < this._maxPartySize; i++) {
	      this._members[i] = new Sprite();
		  this._members[i].x = Moghunter.charSel_Face2X;
		  this._members[i].y = Moghunter.charSel_Face2Y + (Moghunter.charSel_Face2S * i);
		  this._field.addChild(this._members[i]);
	 };
};

//==============================
// * selectCharacter
//==============================
Scene_CharSelect.prototype.selectCharacter = function(next) {
	if (this._partyIndex >= this._maxPartySize) {return};
	var enable = true;
	for (var i = 0; i < this._partySel.length; i++) {
		if (this._partySel[i] === this._index) {enable = false};
	};
	if (enable) {this.addCharacter(next)
	} else { SoundManager.playBuzzer()
	};

};

//==============================
// * selectCharacter
//==============================
Scene_CharSelect.prototype.addCharacter = function(next) {
    SoundManager.playOk();
	this._partySel.push(this._index);
	this.refreshFaceOpacity();
    this.refreshMembers(this._partyIndex,this._index);
	this._partyIndex++;
	if (this._partyIndex >= this._maxPartySize) {this._phase[0] = 2};
};

//==============================
// * refresh Face Opacity
//==============================
Scene_CharSelect.prototype.refreshFaceOpacity = function() {
    for (var i = 0; i < this._facesSprites.length; i++) {
		var sel = true;
        for (var f = 0; f < this._partySel.length; f++) {
			if (this._partySel[f] === i) {sel = false};
		};
        if (sel) {
			this._facesSprites[i].opacity = 255;
		} else {
			this._facesSprites[i].opacity = 125;
		};
	};	
};

//==============================
// * cancel Character
//==============================
Scene_CharSelect.prototype.cancelCharacter = function() {
	if (this._partyIndex <= 0) {return};
    SoundManager.playCancel()	
	this._partyIndex--;
    this.clearMembers(this._partyIndex);
	this._partySel.pop();
	this.refreshFaceOpacity();
	if (this._partyIndex < 0) {this._partyIndex = 0};
};

//==============================
// * execute End
//==============================
Scene_CharSelect.prototype.executeEnd = function() {
	for (var i = 0; i < this._partySel.length; i++) {
		var actor = this._actors[this._partySel[i]];
		if (actor) {$gameParty.addActor(actor._actorId)};
	};
    SceneManager.pop();
};

//==============================
// * refresh Members
//==============================
Scene_CharSelect.prototype.refreshMembers = function(i,actor_id) {
	  this._members[i].bitmap = this._faceBitmaps_S[actor_id];
	  this._members[i].x = Moghunter.charSel_Face2X + 50;
	  this._members[i].opacity = 0;
};

//==============================
// * clear Members
//==============================
Scene_CharSelect.prototype.clearMembers = function(i) {
	  if (!this._members[i]) {return};
	  this._members[i].bitmap = null;
};

//==============================
// * updateMembers
//==============================
Scene_CharSelect.prototype.updateMembers = function(i) {
	for (var i = 0; i < this._members.length; i++) {
		 if (this._members[i].x > Moghunter.charSel_Face2X) {
			 this._members[i].x -= 5;
			 this._members[i].opacity += 25;
			 if (this._members[i].x <= Moghunter.charSel_Face2X) {
				 this._members[i].x = Moghunter.charSel_Face2X;
				 this._members[i].opacity = 255;
			 };			 
		 };
	};
};

//==============================
// * create Name
//==============================
Scene_CharSelect.prototype.createName = function() {
	this._name = new Sprite(new Bitmap(200,36));
	this._name.bitmap.fontItalic = true;
	this._field.addChild(this._name);
};

//==============================
// * refresh Name
//==============================
Scene_CharSelect.prototype.refreshName = function() {
     this._name.bitmap.clear();
     this._name.bitmap.drawText(this.actor().name(),0,0,190,32,"left");
};

//==============================
// * create Parameters
//==============================
Scene_CharSelect.prototype.createParameters = function() {
	this._parameters = new Sprite(new Bitmap(Graphics.boxWidth,Graphics.boxHeight));
	this._parameters.bitmap.fontSize = Moghunter.charSel_parFontSize;
	this._field.addChild(this._parameters);
};
//==============================
// * refresh Parameters
//==============================
Scene_CharSelect.prototype.refreshParameters = function() {
	this._parameters.bitmap.clear();
	var xr = Moghunter.charSel_parX;
	var yr = Moghunter.charSel_parY;
	this.drawPar(this.actor().currentClass().name,xr + Moghunter.charSel_par_hor,yr + 0);
	this.drawPar(this.actor().hp,xr + 0,yr + Moghunter.charSel_par_ver*1);
    this.drawPar(this.actor().mp,xr + Moghunter.charSel_par_hor,yr + Moghunter.charSel_par_ver*1);
	this.drawPar(this.actor().atk,xr + 0,yr + Moghunter.charSel_par_ver*2);
    this.drawPar(this.actor().def,xr + Moghunter.charSel_par_hor,yr + Moghunter.charSel_par_ver*2);
	this.drawPar(this.actor().mat,xr + 0,yr + Moghunter.charSel_par_ver*3);
    this.drawPar(this.actor().mdf,xr + Moghunter.charSel_par_hor,yr + Moghunter.charSel_par_ver*3);
	this.drawPar(this.actor().agi,xr + 0,yr + Moghunter.charSel_par_ver*4);
    this.drawPar(this.actor().luk,xr + Moghunter.charSel_par_hor,yr + Moghunter.charSel_par_ver*4);	
};

//==============================
// * refresh Parameters
//==============================
Scene_CharSelect.prototype.drawPar = function(par,x,y) {
	this._parameters.bitmap.drawText(String(par),x,y,150,32,"right");
};

//==============================
// * update Name
//==============================
Scene_CharSelect.prototype.updateName = function() {
     this._name.x = Moghunter.charSel_NameX;
	 this._name.y = Moghunter.charSel_NameY;
};

//==============================
// * create Cursor
//==============================
Scene_CharSelect.prototype.createCursor = function() {
	this._cursor = new Sprite(ImageManager.loadACharSelect(Moghunter.src_charSel_cursor));
	this._cursor.anchor.x = 0.5;
	this._cursor.anchor.y = 0.5;
	this._field.addChild(this._cursor);
};

//==============================
// * update Cursor
//==============================
Scene_CharSelect.prototype.updateCursor = function() {
	this._cursor.rotation += Moghunter.charSel_CursorR;
    this._cursor.x = this._facesSprites[this._index].x + Moghunter.charSel_CursorX;
	this._cursor.y = this._facesSprites[this._index].y + Moghunter.charSel_CursorY;
	if (this._phase[0] != 1) {
		this._cursor.opacity -= 10;
	} else {
		this._cursor.opacity += 10;
	};
};

//==============================
// * create Faces
//==============================
Scene_CharSelect.prototype.createFaces = function() {
     this._facesSprites = [];
	 for (var i = 0; i < this._faceBitmaps.length; i++) {
		  this._facesSprites[i] = new Sprite(this._faceBitmaps[i]);
	  	  this._facesSprites[i].x = (Graphics.boxWidth / 2) + Moghunter.charSel_FaceX;
		  this._facesSprites[i].y = (Graphics.boxHeight / 2) + Moghunter.charSel_FaceY;	  
		  this._facesSprites[i].anchor.x = 0.5;
		  this._facesSprites[i].anchor.y = 0.5;
		  this._field.addChild(this._facesSprites[i]);
	 };
};

//==============================
// * Update Face Pos
//==============================
Scene_CharSelect.prototype.updateFacePos = function(i) {
 	  var rol_index = 1 / this.maxActors();
      var now_p = rol_index * i;
      var r_p = this._pi * -now_p;
      this._np[0] = Math.floor(this._rol_range * Math.sin(r_p));
      this._np[1] = -Math.floor(this._rol_range * Math.cos(r_p));
};

//==============================
// * update Faces
//==============================
Scene_CharSelect.prototype.updateFaces = function() {
    for (var i = 0; i < this._facesSprites.length; i++) {
		this.updateFacePos(i);
		var px = this._np[0] + (Graphics.boxWidth / 2) + Moghunter.charSel_FaceX;
		var py = this._np[1] + (Graphics.boxHeight / 2) + Moghunter.charSel_FaceY;
		this._facesSprites[i].x = this.faceMoveTo(this._facesSprites[i].x,px);
		this._facesSprites[i].y = this.faceMoveTo(this._facesSprites[i].y,py);;
	};
};

//==============================
// * cursor Move toSVD
//==============================
Scene_CharSelect.prototype.faceMoveTo = function(value,real_value) {
	if (value == real_value) {return value};
	var dnspeed = 2 + (Math.abs(value - real_value) / 30);
	if (value > real_value) {value -= dnspeed;
	    if (value < real_value) {value = real_value};}
    else if (value < real_value) {value  += dnspeed;
    	if (value  > real_value) {value  = real_value};		
    };
	return Math.floor(value);
};

//==============================
// * create Picture
//==============================
Scene_CharSelect.prototype.createPicture = function() {
	this._picture = new Sprite();
	this._picture.anchor.x = 0.5;
	this._field.addChild(this._picture);
};

//==============================
// * refresh Picture
//==============================
Scene_CharSelect.prototype.refreshPicture = function() {
	this._picture.bitmap = this._pictureBitmaps[this._ActorIndex];
	this._picture.x = Moghunter.charSel_PictureX + Moghunter.charSel_Picture_slideX;
	this._picture.y = Moghunter.charSel_PictureY + Moghunter.charSel_Picture_slideY;
	this._picture.opacity = 0;
};

//==============================
// * update Picture
//==============================
Scene_CharSelect.prototype.updatePicture = function() {
	if (this._phase[0] === 0) {return};
	this._picture.x -= Moghunter.charSel_Picture_slideX/Moghunter.charSel_Picture_slideTime;
	this._picture.y -= Moghunter.charSel_Picture_slideY/Moghunter.charSel_Picture_slideTime;
	this._picture.opacity += 256/Moghunter.charSel_Picture_slideTime;
	if( this._picture.opacity >= 255 ){
		this._picture.x = Moghunter.charSel_PictureX;
		this._picture.y = Moghunter.charSel_PictureY;
		this._picture.opacity = 255;
	}
};

//==============================
// * refresh Index
//==============================
Scene_CharSelect.prototype.refreshIndex = function() {
	this._ActorIndex = this._index;
	this.refreshPicture();
	this.refreshName();
	this.refreshParameters();
};

//==============================
// * Update
//==============================
Scene_CharSelect.prototype.update = function() {
    Scene_MenuBase.prototype.update.call(this);
	if (this._phase[0] === 1) {
		this.updateCommands();
	} else {
		this.updatePhase();
	};
    this.updateFaces();
	this.updateCursor();
	this.updateName();
	this.updateMembers();
	if (this._picture && this._picture.bitmap)this.updatePicture();
	if (this._index != this._ActorIndex) {this.refreshIndex()};
};