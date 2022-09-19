//=============================================================================
// MOG_Footsteps.js
//=============================================================================
/*:
 * @plugindesc (v1.1)[v1.3]  地图 - 图块脚印
 * @author Moghunter （Drill_up翻译+优化）
 * 
 * @Drill_LE_param "脚印-%d"
 * @Drill_LE_parentKey "--脚印组%d至%d--"
 * @Drill_LE_var "null"
 * 
 *
 * @help  
 * =============================================================================
 * +++ MOG - Footsteps (v1.1) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * 使得你可以对路面造成简单的脚印效果或者水花效果。
 * 【现已支持插件关联资源的打包、加密】
 *
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.插件的作用域：地图界面。
 *   事件、玩家、跟随队员都有脚印效果。
 * 2.插件需要将指定 地形标志 或 图块R区域 设为触发地面，
 *   去看看 "10.互动 > 关于插件与图块R占用说明.xlsx"
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 资源路径：img/Map__footstep （Map后面有两个下划线）
 * 先确保项目img文件夹下是否有Map__footstep文件夹。
 * 要查看所有关联资源文件的插件，可以去看看"插件清单.xlsx"。
 * 使用鼠标指向标，需要配置资源文件：
 *
 * 资源-默认脚印
 * 资源-默认水花
 * 
 * -----------------------------------------------------------------------------
 * ----可选设定
 * 你可以设置开启关闭该插件的功能：
 *
 * 插件指令（开启功能）：enable_footsteps
 * 插件指令（关闭功能）：disable_footsteps
 *
 *
 * 你也可以在事件注释中添加以下关键字，手动设置脚印：
 * （注意，冒号左右都有一个空格）
 * 
 * 事件注释（改脚印）：footstep_sprite : A
 * 事件注释（关脚印）：disable_footstep
 *
 * 参数A：脚印对应的文件名
 *        不需要.png后缀，与脚印的文件名字相对应。
 *
 *
 * 如果你需要设置角色的脚印，需要在角色注释中添加：
 * （注意，冒号只后面有一个空格）
 *
 * 角色注释：Footstep Sprite: A
 *
 * 参数A：脚印对应的文件名
 *        不需要.png后缀，与脚印的文件名字相对应。
 *
 * -----------------------------------------------------------------------------
 * ----插件性能
 * 测试仪器：   4G 内存，Intel Core i5-2520M CPU 2.5GHz 处理器
 *              Intel(R) HD Graphics 3000 集显 的垃圾笔记本
 *              (笔记本的3dmark综合分：571，鲁大师综合分：48456)
 * 总时段：     20000.00ms左右
 * 对照表：     0.00ms  - 40.00ms （几乎无消耗）
 *              40.00ms - 80.00ms （低消耗）
 *              80.00ms - 120.00ms（中消耗）
 *              120.00ms以上      （高消耗）
 * 工作类型：   持续执行
 * 时间复杂度： o(n)*o(贴图处理)
 * 测试方法：   去各个管理层跑一圈，多次测试。
 * 测试结果：   200个事件的地图中，消耗为：【93.50ms】
 *              100个事件的地图中，消耗为：【77.86ms】
 *               50个事件的地图中，消耗为：【59.12ms】
 * 
 * 1.插件只在自己作用域下工作消耗性能，在其它作用域下是不工作的。
 *   测试结果并不是精确值，范围在给定值的10ms范围内波动。
 *   更多性能介绍，去看看 "0.性能测试报告 > 关于插件性能.docx"。
 * 2.插件消耗意外地不高也不低。可能大量事件存在时它们不一定都在移动，且
 *   很多事件都是原地站立。
 *
 * -----------------------------------------------------------------------------
 * ----关于Drill_up优化：
 * [v1.1]
 * 使得该插件支持关联资源的打包、加密。
 * 部署时勾选去除无关文件，本插件中相关的文件不会被去除。
 * [v1.2]
 * 修改了插件关联的资源文件夹。
 * [v1.3]
 * 添加了最大值编辑的支持。
 * 
 * 
 *
 * @param 图块标记-脚印
 * @desc 指定标记数字的图块将会留下脚印，可以设置多个。（1-7）
 * @type number[]
 * @min 1
 * @max 7
 * @default ["1"]
 *
 * @param 区域标记-脚印
 * @desc 指定标记的R区域将会留下脚印，可以设置多个。（1-255）
 * @type number[]
 * @min 1
 * @max 255
 * @default []
 *
 * @param 资源-默认脚印
 * @desc 默认脚印的图片资源。
 * @default 脚印-默认脚印
 * @require 1
 * @dir img/Map__footstep/
 * @type file
 *
 * @param 脚印持续时间
 * @type number
 * @min 1
 * @desc 脚印在地面的持续时间，单位帧。（1秒60帧）
 * @default 60
 *
 * @param 平移-脚印 X
 * @desc Definição X-Axis para ajustes.
 * @default 0
 *
 * @param 平移-脚印 Y
 * @desc Definição Y-Axis para ajustes.
 * @default 5
 *
 * @param 图块标记-水花
 * @desc 指定标记数字的图块将会有水花效果，可以设置多个。（1-7）
 * @type number[]
 * @min 1
 * @max 7
 * @default ["2"]
 *
 * @param 区域标记-水花
 * @desc 指定标记的R区域将会有水花效果，可以设置多个。（1-255）
 * @type number[]
 * @min 1
 * @max 255
 * @default []
 *
 * @param 资源-默认水花
 * @desc 默认水花的图片资源。
 * @default 脚印-默认水花
 * @require 1
 * @dir img/Map__footstep/
 * @type file
 *
 * @param 是否启用水花音效
 * @type boolean
 * @on 启用
 * @off 关闭
 * @desc true - 启用，false - 关闭
 * @default true
 *
 * @param 水花音效
 * @parent 是否启用水花音效
 * @desc 水花播放的音效。
 * @require 1
 * @dir audio/se/
 * @type file
 * @default Ice1
 *   
 * @param --脚印组 1至20--
 * @default 
 *
 * @param 脚印-1
 * @parent --脚印组 1至20--
 * @desc 脚印的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__footstep/
 * @type file
 *
 * @param 脚印-2
 * @parent --脚印组 1至20--
 * @desc 脚印的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__footstep/
 * @type file
 *
 * @param 脚印-3
 * @parent --脚印组 1至20--
 * @desc 脚印的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__footstep/
 * @type file
 *
 * @param 脚印-4
 * @parent --脚印组 1至20--
 * @desc 脚印的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__footstep/
 * @type file
 *
 * @param 脚印-5
 * @parent --脚印组 1至20--
 * @desc 脚印的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__footstep/
 * @type file
 *
 * @param 脚印-6
 * @parent --脚印组 1至20--
 * @desc 脚印的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__footstep/
 * @type file
 *
 * @param 脚印-7
 * @parent --脚印组 1至20--
 * @desc 脚印的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__footstep/
 * @type file
 *
 * @param 脚印-8
 * @parent --脚印组 1至20--
 * @desc 脚印的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__footstep/
 * @type file
 *
 * @param 脚印-9
 * @parent --脚印组 1至20--
 * @desc 脚印的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__footstep/
 * @type file
 *
 * @param 脚印-10
 * @parent --脚印组 1至20--
 * @desc 脚印的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__footstep/
 * @type file
 *
 * @param 脚印-11
 * @parent --脚印组 1至20--
 * @desc 脚印的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__footstep/
 * @type file
 *
 * @param 脚印-12
 * @parent --脚印组 1至20--
 * @desc 脚印的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__footstep/
 * @type file
 *
 * @param 脚印-13
 * @parent --脚印组 1至20--
 * @desc 脚印的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__footstep/
 * @type file
 *
 * @param 脚印-14
 * @parent --脚印组 1至20--
 * @desc 脚印的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__footstep/
 * @type file
 *
 * @param 脚印-15
 * @parent --脚印组 1至20--
 * @desc 脚印的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__footstep/
 * @type file
 *
 * @param 脚印-16
 * @parent --脚印组 1至20--
 * @desc 脚印的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__footstep/
 * @type file
 *
 * @param 脚印-17
 * @parent --脚印组 1至20--
 * @desc 脚印的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__footstep/
 * @type file
 *
 * @param 脚印-18
 * @parent --脚印组 1至20--
 * @desc 脚印的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__footstep/
 * @type file
 *
 * @param 脚印-19
 * @parent --脚印组 1至20--
 * @desc 脚印的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__footstep/
 * @type file
 *
 * @param 脚印-20
 * @parent --脚印组 1至20--
 * @desc 脚印的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__footstep/
 * @type file
 *
 * @param --脚印组21至40--
 * @default 
 *
 * @param 脚印-21
 * @parent --脚印组21至40--
 * @desc 脚印的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__footstep/
 * @type file
 *
 * @param 脚印-22
 * @parent --脚印组21至40--
 * @desc 脚印的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__footstep/
 * @type file
 *
 * @param 脚印-23
 * @parent --脚印组21至40--
 * @desc 脚印的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__footstep/
 * @type file
 *
 * @param 脚印-24
 * @parent --脚印组21至40--
 * @desc 脚印的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__footstep/
 * @type file
 *
 * @param 脚印-25
 * @parent --脚印组21至40--
 * @desc 脚印的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__footstep/
 * @type file
 *
 * @param 脚印-26
 * @parent --脚印组21至40--
 * @desc 脚印的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__footstep/
 * @type file
 *
 * @param 脚印-27
 * @parent --脚印组21至40--
 * @desc 脚印的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__footstep/
 * @type file
 *
 * @param 脚印-28
 * @parent --脚印组21至40--
 * @desc 脚印的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__footstep/
 * @type file
 *
 * @param 脚印-29
 * @parent --脚印组21至40--
 * @desc 脚印的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__footstep/
 * @type file
 *
 * @param 脚印-30
 * @parent --脚印组21至40--
 * @desc 脚印的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__footstep/
 * @type file
 *
 * @param 脚印-31
 * @parent --脚印组21至40--
 * @desc 脚印的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__footstep/
 * @type file
 *
 * @param 脚印-32
 * @parent --脚印组21至40--
 * @desc 脚印的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__footstep/
 * @type file
 *
 * @param 脚印-33
 * @parent --脚印组21至40--
 * @desc 脚印的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__footstep/
 * @type file
 *
 * @param 脚印-34
 * @parent --脚印组21至40--
 * @desc 脚印的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__footstep/
 * @type file
 *
 * @param 脚印-35
 * @parent --脚印组21至40--
 * @desc 脚印的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__footstep/
 * @type file
 *
 * @param 脚印-36
 * @parent --脚印组21至40--
 * @desc 脚印的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__footstep/
 * @type file
 *
 * @param 脚印-37
 * @parent --脚印组21至40--
 * @desc 脚印的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__footstep/
 * @type file
 *
 * @param 脚印-38
 * @parent --脚印组21至40--
 * @desc 脚印的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__footstep/
 * @type file
 *
 * @param 脚印-39
 * @parent --脚印组21至40--
 * @desc 脚印的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__footstep/
 * @type file
 *
 * @param 脚印-40
 * @parent --脚印组21至40--
 * @desc 脚印的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__footstep/
 * @type file
 * 
 */
 
//
//		工作类型		持续执行
//		时间复杂度		o(n)*o(贴图处理)
//		性能测试因素	华容道设计
//		性能测试消耗	87.86ms ~ 59.12ms
//		最坏情况		所有事件都在走动，且出现脚印
//		备注			每次测试都能看见这个插件的消耗，但是事件多的时候消耗又高不起来。
 //
 //插件记录：
 //		单位和路面的相互关系是非常深的话题。是一个超大坑。
 //		单位对路面造成的物理破坏，称为痕迹。（脚印属于痕迹）
 //		路面因单位存在产生的效果，称为涟漪。（水花属于涟漪）
 //		许多3A大作里面，
 //		有许多特别的痕迹，比如 重物拖动的痕迹、机械履带的痕迹等。
 //		也有许多特别的涟漪，比如 踩在水中的波纹、走在沙地雪地的灰尘等。
 //		除了这些配置，还有运动产生的音效、脚步声的节奏等其他复杂的结构。
 //		（当然，大多游戏都是直接把这些效果画在地面上，省事。）
 //
 //		其实之前一直想推翻写脚印插件，但是考虑到情况太多，所以就放弃了。
 //
 //		mog的脚印设置比较硬性，分成了只有 水花 和 脚印 两种类型。并且只有水花有声音。
 //		（原来想把水花功能去掉，把脚印类型优化，与图块声音 做成配合的插件。）
 //		（后来结构实在太复杂，估计连设计者自己都不满意那么复杂的配置，所以中止优化。）
 //		setPosition（作了小幅度优化）
 //

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_Footsteps = true;
　　var Moghunter = Moghunter || {}; 
  　Moghunter.parameters = PluginManager.parameters('MOG_Footsteps');  
	
	
    Moghunter.footStepD = Number(Moghunter.parameters['脚印持续时间'] || 60);
    Moghunter.footStepX = Number(Moghunter.parameters['平移-脚印 X'] || 0);
    Moghunter.footStepY = Number(Moghunter.parameters['平移-脚印 Y'] || 0);
	Moghunter.footStepName1 = String(Moghunter.parameters['资源-默认脚印'] || "");	
	if( Moghunter.parameters['图块标记-脚印'] != "" ){//parse对空值转换会报错
		Moghunter.footStepsTerrainTagID = (JSON.parse( Moghunter.parameters['图块标记-脚印'])).map(function(n){ return Number(n) });;
	}else{
		Moghunter.footStepsTerrainTagID = ([]).map(function(n){ return Number(n) }); ;
	}
	if( Moghunter.parameters['区域标记-脚印'] != "" ){
		Moghunter.footStepsAreaID = (JSON.parse( Moghunter.parameters['区域标记-脚印'])).map(function(n){ return Number(n) });;
	}else{
		Moghunter.footStepsAreaID = ([]).map(function(n){ return Number(n) }); ;
	}
	
	Moghunter.footStepName2 = String(Moghunter.parameters['资源-默认水花'] || "");	
	if( Moghunter.parameters['图块标记-水花'] != "" ){//parse对空值转换会报错
		Moghunter.waterSplashTerrainTagID = (JSON.parse( Moghunter.parameters['图块标记-水花'])).map(function(n){ return Number(n) });;
	}else{
		Moghunter.waterSplashTerrainTagID = ([]).map(function(n){ return Number(n) }); ;
	}
	if( Moghunter.parameters['区域标记-水花'] != "" ){
		Moghunter.waterSplashAreaID = (JSON.parse( Moghunter.parameters['区域标记-水花'])).map(function(n){ return Number(n) });;
	}else{
		Moghunter.waterSplashAreaID = ([]).map(function(n){ return Number(n) }); ;
	}
	Moghunter.waterSplashSE = String(Moghunter.parameters['是否启用水花音效'] || "false");
	Moghunter.waterSplashSEFile = String(Moghunter.parameters['水花音效'] || "Ice1");
	
	
//=============================================================================
// ** 资源文件夹
//=============================================================================
ImageManager.load_MapFootstep = function(filename) {
    return this.loadBitmap('img/Map__footstep/', filename, 0, true);
};
	
//=============================================================================
// ** Game System
//=============================================================================
//==============================
// * Initialize
//==============================
var _mog_footStep_Gsys_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    _mog_footStep_Gsys_initialize.call(this);
	this._footStepSpriteData = [];
	this._footStepMapID = 0;
	this._footStepVisible = true;
};	

//=============================================================================
// ** Game Interpreter
//=============================================================================

//==============================
// * PluginCommand
//==============================
var _mog_footStep_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_mog_footStep_pluginCommand.call(this,command, args);
	if (command === "disable_footsteps")  {$gameSystem._footStepVisible = false};
	if (command === "enable_footsteps")  {$gameSystem._footStepVisible = true};
	return true;
};

//=============================================================================
// ** Sound Manager
//=============================================================================

//==============================
// * Play Step SE
//==============================
SoundManager.playStepSE = function(fileName){
   var se = {};
   se.name = fileName;
   se.pitch = 100;
   se.volume = 100;
   AudioManager.playSe(se);
}; 

//=============================================================================
// ** Game Battler
//=============================================================================

//==============================
// * Notetags
//==============================
Game_Battler.prototype.notetags = function() {
	if (this.isEnemy()) {return this.enemy().note.split(/[\r\n]+/)};
	if (this.isActor()) {return this.actor().note.split(/[\r\n]+/)};
};

//=============================================================================
// ** Game Actor
//=============================================================================

//==============================
// * iniMembers
//==============================
var _mog_footstep_gact_initMembers = Game_Actor.prototype.initMembers;
Game_Actor.prototype.initMembers = function() {
	_mog_footstep_gact_initMembers.call(this);
	this._charfootstepName = String(Moghunter.footStepName1);
};

//==============================
// * setup
//==============================
var _mog_footstep_gact_setup = Game_Actor.prototype.setup;
Game_Actor.prototype.setup = function(actorId) {
	_mog_footstep_gact_setup.call(this,actorId);
	this.setFootStepName();
};

//==============================
// * set Foot Step Name
//==============================
Game_Actor.prototype.setFootStepName = function() {
    this.notetags().forEach(function(note) {
         var note_data = note.split(': ')
		 if (note_data[0].toLowerCase() == "footstep sprite"){
		     var par = note_data[1].split(':');
			 this._charfootstepName = String(par[0]);
		 };
	},this);
};


//=============================================================================
// ** Game Player
//=============================================================================

//==============================
// * Refresh
//==============================
var _mog_footstep_gplayer_refresh = Game_Player.prototype.refresh;
Game_Player.prototype.refresh = function() {
	_mog_footstep_gplayer_refresh.call(this);
	var actor = $gameParty.leader();
	if (actor) {this._footSteps[3] = actor._charfootstepName};
};

//=============================================================================
// ** Game Follower
//=============================================================================

//==============================
// * Refresh
//==============================
var _mog_footstep_gfollower_refresh = Game_Follower.prototype.refresh;
Game_Follower.prototype.refresh = function() {
	_mog_footstep_gfollower_refresh.call(this);
	if (this.actor()) {this._footSteps[3] = this.actor()._charfootstepName};
};

//=============================================================================
// ** Game Event
//=============================================================================

//==============================
// * Setup Page
//==============================
var _mog_footStep_gevent_setupPage = Game_Event.prototype.setupPage;
Game_Event.prototype.setupPage = function() {
	_mog_footStep_gevent_setupPage.call(this);
    this.checkFootStep();
};

//==============================
// * Check Foot Sptep
//==============================
Game_Event.prototype.checkFootStep = function() {
	if (!this._erased && this.page()) {this.list().forEach(function(l) {
	       if (l.code === 108) {
			   var comment = l.parameters[0].split(': ')
			   if (comment[0].toLowerCase() == "footstep_sprite "){
                  this._footSteps[3] = String(comment[1]);
			   } else if (comment[0].toLowerCase() == "disable_footstep"){
                  this._footSteps[8] = false;				  
			   };
			};
	}, this);};
};

//=============================================================================
// ** Scene Map
//=============================================================================

//==============================
// * Terminate
//==============================
var _mog_footstep_scMap_terminate = Scene_Map.prototype.terminate;
Scene_Map.prototype.terminate = function() {
    _mog_footstep_scMap_terminate.call(this);
	if (this._spriteset) {this._spriteset.recordFootStepData()};
};

//=============================================================================
// ** Spriteset Map
//=============================================================================

//==============================
// * record Foot Step Data
//==============================
Spriteset_Map.prototype.recordFootStepData = function() {
     if (!this._footSteps) {return};
	 for (var i = 0; i < this._footSteps.length; i++) {
		  this._footSteps[i].recordData();
	 };
};

//==============================
// * create Characters
//==============================
var _mog_footsteps_sprmap_createCharacters = Spriteset_Map.prototype.createCharacters;
Spriteset_Map.prototype.createCharacters = function() {
	_mog_footsteps_sprmap_createCharacters.call(this);
	this.createFootstepsSprites();
};

//==============================
// * create Footsteps Sprites
//==============================
Spriteset_Map.prototype.createFootstepsSprites = function() {
	if ($gameSystem._footStepMapID != $gameMap._mapId) {$gameSystem._footStepSpriteData = []};
	this._footSteps = [];
	for (var i = 0; i < this._characterSprites.length; i++) {
	     this._footSteps[i] = new FootStepsSprites(this._characterSprites[i],i);
	     this._tilemap.addChild(this._footSteps[i]);
	};
	$gameSystem._footStepMapID = $gameMap._mapId;
	$gameSystem._footStepSpriteData = [];
};

//=============================================================================
// ** Game CharacterBase
//=============================================================================

//==============================
// * create Characters
//==============================
var _mog_footstep_gchar_initMembers = Game_CharacterBase.prototype.initMembers;
Game_CharacterBase.prototype.initMembers = function() {
	_mog_footstep_gchar_initMembers.call(this);
	this._footSteps = [false,0,0,String(Moghunter.footStepName1),0,0,0,1,true,1.00];
	/*
		_footSteps[0] 是否创建
		_footSteps[1] 角色位置X
		_footSteps[2] 角色位置Y
		_footSteps[3] 默认脚印资源
		_footSteps[4] 脚印位置X
		_footSteps[5] 脚印位置Y
		_footSteps[6] 是否为水花（弃用）
		_footSteps[7] 脚印显示延迟
		_footSteps[8] 是否显示
		_footSteps[9] 水花缩放比例（弃用）
	*/
};

//==============================
// * Set Position
//==============================
var _mog_footsteps_gcharbase_setPosition = Game_CharacterBase.prototype.setPosition;
Game_CharacterBase.prototype.setPosition = function(x, y) {
    _mog_footsteps_gcharbase_setPosition.call(this,x,y);
	if(!this._footSteps){this._footSteps = [] };
   this._footSteps[0] = false;
   this._footSteps[4] = x;
   this._footSteps[5] = y;
   this._footSteps[1] = x;
   this._footSteps[2] = y;	
};

//==============================
// * Update
//==============================
var _mog_footstep_gchar_update = Game_CharacterBase.prototype.update;
Game_CharacterBase.prototype.update = function() {
	_mog_footstep_gchar_update.call(this);
	this.updateFootSteps();
};

//==============================
// * Update Foot Steps
//==============================
Game_CharacterBase.prototype.updateFootSteps = function() {
	if (this.needCreateFootSteps()) {this.prepareFootSteps()
	} else {
	   this._footSteps[4] = this._x;
	   this._footSteps[5] = this._y;
	   this._footSteps[1] = this._x;
	   this._footSteps[2] = this._y;		
	};
};

//==============================
// * prepare Foot Steps
//==============================
Game_CharacterBase.prototype.prepareFootSteps = function() {
	var terrainTag = $gameMap.terrainTag(this._footSteps[1],this._footSteps[2]);
	var regionId = $gameMap.regionId(this._footSteps[1],this._footSteps[2]);

	if ( Moghunter.footStepsTerrainTagID.contains(terrainTag) ||
		Moghunter.footStepsAreaID.contains(regionId) 
	) {
		this._footSteps[0] = true;
		this._footSteps[4] = this._footSteps[1];	//角色离开后产生脚印
		this._footSteps[5] = this._footSteps[2];	  
		this._footSteps[6] = 0;
		this._footSteps[7] = 1;
		this._footSteps[9] = 1.00; 
		if (this._type && this.isBoat()) {this._footSteps[0] = false};
	}else if( Moghunter.waterSplashTerrainTagID.contains(terrainTag) ||
		Moghunter.waterSplashAreaID.contains(regionId) 
	){
	   this._footSteps[0] = true;
	   this._footSteps[4] = this._x;
	   this._footSteps[5] = this._y;		   
	   this._footSteps[6] = 1;
	   var d = 120 - (this.realMoveSpeed() * 27);
	   this._footSteps[7] = Math.min(Math.max(d,10),200); 
	   var z = 0.20 + (this.realMoveSpeed() * 0.15);
	   this._footSteps[9] = Math.min(Math.max(z,0.10),1.00); 	      
   };
	this._footSteps[1] = this._x;
	this._footSteps[2] = this._y; 
};

//==============================
// * Need Create Foot Steps
//==============================
Game_CharacterBase.prototype.needCreateFootSteps = function() {
	if (!this._footSteps[8]) {return false};
	if (this._vehicleGettingOn) {return false};
	if (this._vehicleGettingOff) {return false};
	if (this._opacity === 0) {return false};
	if (this._transparent) {return false};
	if (this._visible === false) {return false};
	if (this._characterName === '') {return false};
	if (this._footSteps[1] != this._x) {return true};
	if (this._footSteps[2] != this._y) {return true};
	return false;
};

//==============================
// * scrollexX Step
//==============================
Game_CharacterBase.prototype.scrolledXStep = function() {
    return $gameMap.adjustX(this._footSteps[4]);
};

//==============================
// * scrollexY Step
//==============================
Game_CharacterBase.prototype.scrolledYStep = function() {
    return $gameMap.adjustY(this._footSteps[5]);
};

//==============================
// * screen X Step
//==============================
Game_CharacterBase.prototype.screenXStep = function() {
    var tw = $gameMap.tileWidth();
    return Math.round(this.scrolledXStep() * tw + tw / 2);
};

//==============================
// * screen Y Step
//==============================
Game_CharacterBase.prototype.screenYStep = function() {
    var th = $gameMap.tileHeight();
    return Math.round(this.scrolledYStep() * th + th -
                      this.shiftY() - this.jumpHeight());
};

//=============================================================================
// ** Game Vehicle
//=============================================================================

//==============================
// * Initialize
//==============================
var _mog_footStep_gveh_initialize = Game_Vehicle.prototype.initialize;
Game_Vehicle.prototype.initialize = function(type) {
    _mog_footStep_gveh_initialize.call(this,type);
	if (!this.isBoat()) {this._footSteps[8] = false};
};

//=============================================================================
// ** FootStepsSprites
//=============================================================================
function FootStepsSprites() {
    this.initialize.apply(this, arguments);
};
FootStepsSprites.prototype = Object.create(Sprite.prototype);
FootStepsSprites.prototype.constructor = FootStepsSprites;

//==============================
// * Initialize
//==============================
FootStepsSprites.prototype.initialize = function(sprite,id) {
    Sprite.prototype.initialize.call(this);
	this._id = id;
	this.z = 0;
    this._sprite = sprite;
	this._character = this._sprite._character;
	this._footsprites = [];
	this._splashSE = String(Moghunter.waterSplashSE) === "true" ? true : false; 
	if ($gameSystem._footStepSpriteData[this._id]) {this.reloadSprites()};
	this._visible = true;
};

//==============================
// * Reload Sprites
//==============================
FootStepsSprites.prototype.reloadSprites = function() {
    var data = $gameSystem._footStepSpriteData[this._id];
	for (i = 0; i < data.length; i++){
	     this._footsprites[i] = new Sprite(ImageManager.load_MapFootstep(data[i]._name));
		 this._footsprites[i].anchor.x = 0.5;
		 this._footsprites[i].anchor.y = 0.5;
		 this._footsprites[i]._name = data[i]._name;
		 this._footsprites[i].opacity = data[i].opacity;
	     this._footsprites[i]._rx = data[i]._rx;
		 this._footsprites[i]._ry = data[i]._ry;
		 this._footsprites[i]._duration = data[i]._duration; 
		 this._footsprites[i]._dir = data[i]._dir;
		 this._footsprites[i]._mode = data[i]._mode;
		 this._footsprites[i].scale.x = data[i].scaleX;
		 this._footsprites[i].scale.y = data[i].scaleY;
		 this._footsprites[i]._wait = data[i]._wait;
		 this._footsprites[i].visible = data[i].visible;
		 this._footsprites[i]._wait = data[i]._wait;
    	 this.setDirection(this._footsprites[i]);
		 this.updatePosition(this._footsprites[i]);
		 this.addChild(this._footsprites[i]);
	};
};

//==============================
// * Foot Step NAme
//==============================
FootStepsSprites.prototype.footStepName = function() {
     return String(this._character._footSteps[3]);
};

//==============================
// * Foot Step NAme
//==============================
FootStepsSprites.prototype.waterSplashName = function() {
	return String(Moghunter.footStepName2);
};

//==============================
// * Update Duration
//==============================
FootStepsSprites.prototype.playSplashSound = function() {
  SoundManager.playStepSE(String(Moghunter.waterSplashSEFile)); 
};

//==============================
// * Record Data
//==============================
FootStepsSprites.prototype.recordData = function() {
     if (!this._footsprites) {return};
	 $gameSystem._footStepSpriteData[this._id] = [];
	 for (i = 0; i < this._footsprites.length; i++){
    	  var sprite = this._footsprites[i];
		  $gameSystem._footStepSpriteData[this._id][i] = {};
		  $gameSystem._footStepSpriteData[this._id][i]._name = sprite._name;
		  $gameSystem._footStepSpriteData[this._id][i].opacity = sprite.opacity;
		  $gameSystem._footStepSpriteData[this._id][i]._rx = sprite._rx;
		  $gameSystem._footStepSpriteData[this._id][i]._ry = sprite._ry;
		  $gameSystem._footStepSpriteData[this._id][i]._duration = sprite._duration;
		  $gameSystem._footStepSpriteData[this._id][i]._dir = sprite._dir;
		  $gameSystem._footStepSpriteData[this._id][i]._mode = sprite._mode; 
		  $gameSystem._footStepSpriteData[this._id][i].scaleX = sprite.scale.x; 
		  $gameSystem._footStepSpriteData[this._id][i].scaleY = sprite.scale.y; 
          $gameSystem._footStepSpriteData[this._id][i]._wait = sprite._wait; 
		  $gameSystem._footStepSpriteData[this._id][i].visible = sprite.visible;			  
	 };
};

//==============================
// * Create Foot Steps
//==============================
FootStepsSprites.prototype.createFootSteps = function() {
	this._character._footSteps[0] = false;
	if (this._character._footSteps[6] === 0) {
	    var name = this.footStepName();
	} else {
		var name = this.waterSplashName();
	};
    this._footsprites.push(new Sprite(ImageManager.load_MapFootstep(name)));
	var id = this._footsprites.length - 1;	
	this._footsprites[id]._name = name;
	this._footsprites[id]._rx = this._character.screenXStep() - this.screenX() + Moghunter.footStepX;
	this._footsprites[id]._ry = this._character.screenYStep() - this.screenY() + Moghunter.footStepY;
	if (this._character._footSteps[6] === 1) {
		var yf = 10 - (this._character._footSteps[9] * 5.0);
		var yf2 = Math.min(Math.max(yf,0),10);
		this._footsprites[id]._ry += yf2;
	};
	this._footsprites[id].anchor.x = 0.5;
	this._footsprites[id].anchor.y = 0.5;
	this._footsprites[id].scale.x = this._character._footSteps[9];
	this._footsprites[id].scale.y = this._character._footSteps[9];
	var d = this._character._footSteps[6] === 0 ? Moghunter.footStepD : 30;
	this._footsprites[id]._duration = Math.min(Math.max(d,1),999);
	this._footsprites[id]._dir = this._character.direction();
	this._footsprites[id]._mode = this._character._footSteps[6];
	this._footsprites[id]._wait = this._character._footSteps[7];
	this._footsprites[id].visible = false;
	this.setDirection(this._footsprites[id]);
	this.addChild(this._footsprites[id]);
};

//==============================
// * set Direction
//==============================
FootStepsSprites.prototype.setDirection = function(sprite) {
	if (sprite._mode != 0) {return};
	if (sprite._dir === 4) {
		sprite.rotation = 1.57;
	} else if (sprite._dir === 6) {
		sprite.rotation = -1.57;
	} else if (sprite._dir === 8) {
		sprite.rotation = 3.14;
	} else {
		sprite.rotation = 0;
	};
};

//==============================
// * screen Y
//==============================
FootStepsSprites.prototype.screenX = function() {
	return -($gameMap.displayX() * $gameMap.tileWidth());
};

//==============================
// * screen Y
//==============================
FootStepsSprites.prototype.screenY = function() {
	return -($gameMap.displayY() * $gameMap.tileHeight());
};

//==============================
// * Update Splash
//==============================
FootStepsSprites.prototype.updateSplash = function(sprite) {
	sprite.scale.x += 0.02;
	sprite.scale.y += 0.01;
    sprite.opacity -= 7;
};

//==============================
// * Update Position
//==============================
FootStepsSprites.prototype.updatePosition = function(sprite) {
	sprite.x = this.screenX() + sprite._rx;
	sprite.y = this.screenY() + sprite._ry - sprite.bitmap.height / 2 ;
};

//==============================
// * Update Duration
//==============================
FootStepsSprites.prototype.updateDuration = function(i) {
    if (this._footsprites[i].opacity > 0) {this._footsprites[i].opacity -= 2; return};
	this.removeChild(this._footsprites[i]);
	this._footsprites.splice(i, 1);
};

//==============================
// * Update Initial
//==============================
FootStepsSprites.prototype.updateInitial = function(i) {
	this._footsprites[i]._wait--;
	if (this._footsprites[i]._wait === 0) {
	    this._footsprites[i].visible = true;
		if (this._splashSE && this._footsprites[i]._mode === 1) {this.playSplashSound()};
	};
};

//==============================
// * Update Sprites
//==============================
FootStepsSprites.prototype.updateSprites = function(i) {
	 this.updatePosition(this._footsprites[i]);
	 if (!this._visible) {
		 this._footsprites[i].opacity -= 10;
	     this._footsprites[i]._duration = 0;
		 this.updateDuration(i);
		 return; 
	 };		 
	 if (this._footsprites[i]._wait > 0) {
		 this.updateInitial(i);
 	 } else {
		 if (this._footsprites[i]._mode === 1) {this.updateSplash(this._footsprites[i])};
		 if (this._footsprites[i]._duration > 0) {
			 this._footsprites[i]._duration--; 
		 } else {
			 this.updateDuration(i);
		 };
     };
};

//==============================
// * Update
//==============================
FootStepsSprites.prototype.update = function() {
    Sprite.prototype.update.call(this);
	this._visible = !$gameSystem._footStepVisible ? false : this._sprite.visible;
	if (this._character._footSteps[0]) {this.createFootSteps()};
	if (!this._footsprites) {return};
    for (i = 0; i < this._footsprites.length; i++){
        this.updateSprites(i);
	};
};