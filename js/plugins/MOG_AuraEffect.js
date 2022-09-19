//=============================================================================
// MOG_AuraEffect.js
//=============================================================================

/*:
 * @plugindesc (v2.1)[v1.4]  单位 - 光环效果 + 粒子效果
 * @author Moghunter （Drill_up翻译+优化）
 * 
 * @Drill_LE_param "光环-%d"
 * @Drill_LE_parentKey "--光环组%d至%d--"
 * @Drill_LE_var "null"
 * 
 * @Drill_LE_param "粒子-%d"
 * @Drill_LE_parentKey "--粒子组%d至%d--"
 * @Drill_LE_var "null"
 *
 *
 * @param --光环组 1至20--
 * @default 
 *
 * @param 光环-1
 * @parent --光环组 1至20--
 * @desc 光环的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 光环-2
 * @parent --光环组 1至20--
 * @desc 光环的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 光环-3
 * @parent --光环组 1至20--
 * @desc 光环的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 光环-4
 * @parent --光环组 1至20--
 * @desc 光环的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 光环-5
 * @parent --光环组 1至20--
 * @desc 光环的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 光环-6
 * @parent --光环组 1至20--
 * @desc 光环的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 光环-7
 * @parent --光环组 1至20--
 * @desc 光环的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 光环-8
 * @parent --光环组 1至20--
 * @desc 光环的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 光环-9
 * @parent --光环组 1至20--
 * @desc 光环的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 光环-10
 * @parent --光环组 1至20--
 * @desc 光环的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 光环-11
 * @parent --光环组 1至20--
 * @desc 光环的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 光环-12
 * @parent --光环组 1至20--
 * @desc 光环的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 光环-13
 * @parent --光环组 1至20--
 * @desc 光环的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 光环-14
 * @parent --光环组 1至20--
 * @desc 光环的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 光环-15
 * @parent --光环组 1至20--
 * @desc 光环的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 光环-16
 * @parent --光环组 1至20--
 * @desc 光环的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 光环-17
 * @parent --光环组 1至20--
 * @desc 光环的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 光环-18
 * @parent --光环组 1至20--
 * @desc 光环的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 光环-19
 * @parent --光环组 1至20--
 * @desc 光环的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 光环-20
 * @parent --光环组 1至20--
 * @desc 光环的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param --光环组21至40--
 * @default 
 *
 * @param 光环-21
 * @parent --光环组21至40--
 * @desc 光环的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 光环-22
 * @parent --光环组21至40--
 * @desc 光环的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 光环-23
 * @parent --光环组21至40--
 * @desc 光环的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 光环-24
 * @parent --光环组21至40--
 * @desc 光环的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 光环-25
 * @parent --光环组21至40--
 * @desc 光环的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 光环-26
 * @parent --光环组21至40--
 * @desc 光环的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 光环-27
 * @parent --光环组21至40--
 * @desc 光环的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 光环-28
 * @parent --光环组21至40--
 * @desc 光环的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 光环-29
 * @parent --光环组21至40--
 * @desc 光环的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 光环-30
 * @parent --光环组21至40--
 * @desc 光环的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 光环-31
 * @parent --光环组21至40--
 * @desc 光环的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 光环-32
 * @parent --光环组21至40--
 * @desc 光环的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 光环-33
 * @parent --光环组21至40--
 * @desc 光环的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 光环-34
 * @parent --光环组21至40--
 * @desc 光环的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 光环-35
 * @parent --光环组21至40--
 * @desc 光环的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 光环-36
 * @parent --光环组21至40--
 * @desc 光环的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 光环-37
 * @parent --光环组21至40--
 * @desc 光环的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 光环-38
 * @parent --光环组21至40--
 * @desc 光环的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 光环-39
 * @parent --光环组21至40--
 * @desc 光环的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 光环-40
 * @parent --光环组21至40--
 * @desc 光环的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 * 
 *
 * @param --粒子组 1至20--
 * @default 
 *
 * @param 粒子-1
 * @parent --粒子组 1至20--
 * @desc 粒子的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 粒子-2
 * @parent --粒子组 1至20--
 * @desc 粒子的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 粒子-3
 * @parent --粒子组 1至20--
 * @desc 粒子的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 粒子-4
 * @parent --粒子组 1至20--
 * @desc 粒子的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 粒子-5
 * @parent --粒子组 1至20--
 * @desc 粒子的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 粒子-6
 * @parent --粒子组 1至20--
 * @desc 粒子的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 粒子-7
 * @parent --粒子组 1至20--
 * @desc 粒子的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 粒子-8
 * @parent --粒子组 1至20--
 * @desc 粒子的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 粒子-9
 * @parent --粒子组 1至20--
 * @desc 粒子的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 粒子-10
 * @parent --粒子组 1至20--
 * @desc 粒子的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 粒子-11
 * @parent --粒子组 1至20--
 * @desc 粒子的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 粒子-12
 * @parent --粒子组 1至20--
 * @desc 粒子的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 粒子-13
 * @parent --粒子组 1至20--
 * @desc 粒子的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 粒子-14
 * @parent --粒子组 1至20--
 * @desc 粒子的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 粒子-15
 * @parent --粒子组 1至20--
 * @desc 粒子的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 粒子-16
 * @parent --粒子组 1至20--
 * @desc 粒子的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 粒子-17
 * @parent --粒子组 1至20--
 * @desc 粒子的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 粒子-18
 * @parent --粒子组 1至20--
 * @desc 粒子的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 粒子-19
 * @parent --粒子组 1至20--
 * @desc 粒子的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 粒子-20
 * @parent --粒子组 1至20--
 * @desc 粒子的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param --粒子组21至40--
 * @default 
 *
 * @param 粒子-21
 * @parent --粒子组21至40--
 * @desc 粒子的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 粒子-22
 * @parent --粒子组21至40--
 * @desc 粒子的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 粒子-23
 * @parent --粒子组21至40--
 * @desc 粒子的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 粒子-24
 * @parent --粒子组21至40--
 * @desc 粒子的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 粒子-25
 * @parent --粒子组21至40--
 * @desc 粒子的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 粒子-26
 * @parent --粒子组21至40--
 * @desc 粒子的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 粒子-27
 * @parent --粒子组21至40--
 * @desc 粒子的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 粒子-28
 * @parent --粒子组21至40--
 * @desc 粒子的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 粒子-29
 * @parent --粒子组21至40--
 * @desc 粒子的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 粒子-30
 * @parent --粒子组21至40--
 * @desc 粒子的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 粒子-31
 * @parent --粒子组21至40--
 * @desc 粒子的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 粒子-32
 * @parent --粒子组21至40--
 * @desc 粒子的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 粒子-33
 * @parent --粒子组21至40--
 * @desc 粒子的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 粒子-34
 * @parent --粒子组21至40--
 * @desc 粒子的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 粒子-35
 * @parent --粒子组21至40--
 * @desc 粒子的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 粒子-36
 * @parent --粒子组21至40--
 * @desc 粒子的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 粒子-37
 * @parent --粒子组21至40--
 * @desc 粒子的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 粒子-38
 * @parent --粒子组21至40--
 * @desc 粒子的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 粒子-39
 * @parent --粒子组21至40--
 * @desc 粒子的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @param 粒子-40
 * @parent --粒子组21至40--
 * @desc 粒子的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__auraEffect/
 * @type file
 *
 * @help  
 * =============================================================================
 * +++ MOG - Aura Effects (v2.1) +++
 * By Moghunter 
 * https://mogplugins.wordpress.com/
 * =============================================================================
 * 在敌人背后添加一个光环的特效。每个敌人的光环特效最多只能设置一个。
 * 或者在敌人周围添加一个粒子的特效。每个敌人的粒子特效最多只能设置一个。
 * 【现已支持插件关联资源的打包、加密】
 * 
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.插件的作用域：战斗界面。
 *   只作用于敌人。
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 资源路径：img/Battle__auraEffect （Battle后面有两个下划线）
 * 先确保项目img文件夹下是否有Battle__auraEffect文件夹！
 * 要查看所有关联资源文件的插件，可以去看看"插件清单.xlsx"。
 * 配置没有固定顺序，可以随机配置在组中。
 * 但是关键字设置要与配置的文件名相互匹配！
 * 
 * -----------------------------------------------------------------------------
 * ----激活条件 - 光环效果
 * 含有光环特效的敌人，在其注释中，必须含有下面的关键字设置：
 * （注意：Effect:后面有一个空格字符，A:B:C:D:E中间的参数不能包含空格！）
 *
 * Aura Effect: A:B:C:D:E
 *
 * 参数A：渐变类型
 *        0 - 没有渐变  1 - 渐变扩散显现，然后消失，再显现，如此循环
 * 参数B：光环资源文件
 *        填入bak_database，不需要.png后缀，读取到的资源会进行逆时针旋转。
 *        （若填入battler，则以敌人自身为背景，进行大小透明缩放。）
 * 参数C：透明度
 *        0至255内的数字，0 - 完全透明，255 - 完全不透明
 * 参数D：混合模式
 *        pixi的渲染混合模式。0-普通,1-叠加。其他更详细相关介绍，去看看"0.基本定义 > 混合模式.docx"。
 * 参数E：是否旋转
 *        true - 逆时针旋转  false - 不旋转
 *        （若参数B为battler，该参数设置没有效果。）
 *
 * 示例：
 * Aura Effect: 0:bak_database:150:0:true
 * Aura Effect: 1:bak_database:255:0:false
 * Aura Effect: 0:battler:150:0:true
 * （每个敌人的光环特效最多只能设置一个。）
 *
 * -----------------------------------------------------------------------------
 * ----激活条件 - 粒子效果
 * 含有粒子特效的敌人，在其注释中，必须含有下面的关键字设置：
 * （注意：Effect:后面有一个空格字符，A:B:C:D:E中间的参数不能包含空格！）
 *
 * Particle Effect: A:B:C:D:E
 *
 * 参数A：粒子数量
 *        最多出现的粒子数量。
 * 参数B：粒子资源文件
 *        填入par_spot，不需要.png后缀。
 * 参数C：混合模式
 *        pixi的渲染混合模式。0-普通,1-叠加。其他更详细相关介绍，去看看"0.基本定义 > 混合模式.docx"。
 * 参数D：速度-X轴方向
 *        正数为向左飘，负数为向右飘。
 * 参数E：速度-Y轴方向
 *        正数为向上飘，负数为向下飘。
 *
 * 示例：
 * Particle Effect: 12:par_spot:1:0:1
 * Particle Effect: 20:par_spot:1:-2:1
 * （每个敌人的粒子特效最多只能设置一个。）
 * 
 * -----------------------------------------------------------------------------
 * ----关于Drill_up优化：
 * [v1.1]
 * 使得该插件支持关联资源的打包、加密。
 * 部署时勾选去除无关文件，本插件中相关的文件不会被去除。
 * [v1.2]
 * 修改了插件的分类。
 * [v1.3]
 * 修改了插件关联的资源文件夹。
 * [v1.4]
 * 添加了最大值编辑的支持。
 *
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_AuraEffect = true;
　　var Moghunter = Moghunter || {}; 


//=============================================================================
// ** 资源文件夹
//=============================================================================
ImageManager.load_BattleAuraEffect = function(filename) {
    return this.loadBitmap('img/Battle__auraEffect/', filename, 0, true);
};

//=============================================================================
// ** Game Battler
//=============================================================================
//==============================
// ** iniMembers
//==============================
var _alias_mog_aura_gbattler_initMembers = Game_Battler.prototype.initMembers;
Game_Battler.prototype.initMembers = function() {
	_alias_mog_aura_gbattler_initMembers.call(this);
	this.needRefreshAura = false;
};

//=============================================================================
// ** Game Enemy
//=============================================================================

//==============================
// * Transform
//==============================
var _alias_mog_aura_transform = Game_Enemy.prototype.transform
Game_Enemy.prototype.transform = function(enemyId) {
    _alias_mog_aura_transform.call(this,enemyId) 
	this.needRefreshAura = true;	
};


//==============================
// * Notetags
//==============================
Game_Battler.prototype.notetags = function() {
	if (this.isEnemy()) {return this.enemy().note.split(/[\r\n]+/)};
	if (this.isActor()) {return this.actor().note.split(/[\r\n]+/)};
};

//=============================================================================
// ** Spriteset_Battle
//=============================================================================

//==============================
// * remove Aura Sprites
//==============================
Spriteset_Battle.prototype.removeAuraSprites = function() {
   for (var i = 0; i < this._aura_plane.length; i++) {
	    this._battleField.removeChild(this._aura_plane[i]);
   };
   for (var i = 0; i < this._aura_plane_b.length; i++) {
	    this._battleField.removeChild(this._aura_plane_b[i]);
   };   
};

//==============================
// * Create Aura Field A
//==============================
Spriteset_Battle.prototype.createAuraFieldA = function() {
	this._aura_plane = [];
	this._aura_plane_b = [];
	for (var i = 0; i < $gameTroop.members().length; i++) {
		this._aura_plane[i] = new Aura_PlaneA(),
		this._battleField.addChild(this._aura_plane[i]);
		this._aura_plane[i].z = 0.5;
	};
};

//==============================
// * Create Aura Field B
//==============================
Spriteset_Battle.prototype.createAuraFieldB = function() {
	for (var i = 0; i < $gameTroop.members().length; i++) {
		this._aura_plane_b[i] = new Aura_PlaneB(),
		this._battleField.addChild(this._aura_plane_b[i]);
		this._aura_plane_b[i].z = 2;
	};
};

//==============================
// * Add Aura Sprites
//==============================
Spriteset_Battle.prototype.addAuraSprites = function() {
	for (var i = 0; i < this._enemySprites.length; i++) {
		 this._enemySprites[i].add_aura_plane(this._aura_plane[i],0);
		 this._enemySprites[i].add_aura_plane(this._aura_plane_b[i],1);
	};
};

//==============================
// * Initialize
//==============================
var _alias_mog_aura_effect_spriteseBattle_createEnemies = Spriteset_Battle.prototype.createEnemies;
Spriteset_Battle.prototype.createEnemies = function() {
	if (this._aura_plane) {this.removeAuraSprites()};
    this.createAuraFieldA();
	_alias_mog_aura_effect_spriteseBattle_createEnemies.call(this);
	this.createAuraFieldB();
    this.addAuraSprites();
};

//=============================================================================
// ** Sprite Enemy
//=============================================================================

//==============================
// * Add Aura Plane
//==============================
Sprite_Enemy.prototype.add_aura_plane = function(auraplane,type) {
      if (type == 0) {this.aura_plane = auraplane;}
	  else {this.aura_plane_b = auraplane;};
};

//==============================
// * Update Main
//==============================
var _alias_mog_auraeffect_updateMain = Sprite_Battler.prototype.updateMain
Sprite_Battler.prototype.updateMain = function() {
	_alias_mog_auraeffect_updateMain.call(this);
	if (this.aura_plane) {this.aura_plane.update_aura(this)}
	if (this.aura_plane_b) {this.aura_plane_b.update_aura(this)}
};

//=============================================================================
// * Aura_PlaneA
//=============================================================================
function Aura_PlaneA() {
    this.initialize.apply(this, arguments);
};

Aura_PlaneA.prototype = Object.create(Sprite.prototype);
Aura_PlaneA.prototype.constructor = Aura_PlaneA;

//==============================
// * Initialize
//==============================
Aura_PlaneA.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);	
    this.aura_clear();
}

//==============================
// * Aura Clear
//==============================
Aura_PlaneA.prototype.aura_clear = function() {
	this.opacity = 0;
	this.visible = false;
	this.aura_effect = [-1,"battler",255,1,true];
	this._aura_data = [false,0,0,0,0];
};

//==============================
// * Load File
//==============================
Aura_PlaneA.prototype.loadFiles = function(sprite) {	
    sprite._battler.notetags().forEach(function(note) {
         var note_data = note.split(': ')
		 if (note_data[0].toLowerCase() == "aura effect"){
			 var par = note_data[1].split(':');
		     this.aura_effect[0] = Number(par[0]);
		     this.aura_effect[1] = String(par[1]);
		     this.aura_effect[2] = Number(par[2]);
			 this.aura_effect[3] = Number(par[3]);
			 if (String(par[4]) === "true") {this.aura_effect[4] = true}
			 else {this.aura_effect[4] = false};
	}
	},this);	
	this._aura_data = [true,false,0,0,0,0,0];
	if (this.aura_effect[0] < 0) {return};
	if (this.aura_effect[1] !== "battler") {
		var file_name = String(this.aura_effect[1]);
		this.bitmap = ImageManager.load_BattleAuraEffect(file_name, 0);
		//if ($gameSystem.isSideView()) {
		//	this.bitmap = ImageManager.loadSvEnemy(file_name, 0);
		//} else {
		//	this.bitmap = ImageManager.loadEnemy(file_name, 0);
		//}
    }
	else {
		this.bitmap = sprite.bitmap;
	};	
	if (sprite._battler.isAlive()) {this.visible = true;};
	this._SprBat = this.aura_effect[1] === "battler" ? true : false;
};

//==============================
// * Set Data
//==============================
Aura_PlaneA.prototype.set_data = function(sprite) {
    this._aura_data = [true,true,sprite.bitmap.width,sprite.bitmap.height / 2,0,0];
	this.anchor.x = 0.5;
	this.anchor.y = 0.5;
	this.blendMode = Number(this.aura_effect[3]);
	if (this.aura_effect[4]) {this.rotation = Math.random(360)};
	var rz = (Math.random() * 0.18).toFixed(2)
	this.scale.x = 1.00 + Number(rz);
	this.scale.y = 1.00 + Number(rz);	
	this.initial_check_time = 0;
};

//==============================
// * Update
//==============================
Aura_PlaneA.prototype.update_aura = function(sprite) {
	if (sprite._battler && sprite._battler.needRefreshAura) {this.aura_clear()};	
    if (this.initial_check_time < 2) {this.initial_check_time += 1; return};
	if (!this._aura_data[0]) {this.loadFiles(sprite)};
	if (this.aura_effect[0] < 0) {return};
	if (!this.bitmap.isReady()) {return;};
	if (!this._aura_data[1]) {this.set_data(sprite)};
	this.x = sprite.x;
	this.y = sprite.y - this._aura_data[3]
	if (this._SprBat) {this.rotation = sprite.rotation};
	if (sprite._battler.isDead()) {this.opacity -= 5}
	else {
	  if(this.aura_effect[0] == 0) {this.update_zoom_effect_a();}
	  else {this.update_zoom_effect_b()};
	  if (this.aura_effect[4]) {this.rotation += 0.04;};
	};
	this.visible = this.isVisible(sprite._battler)
};

//==============================
// * is Visible
//==============================
Aura_PlaneA.prototype.isVisible = function(battler) {
	if (battler.isHidden()) {return false};
	if (Imported.MOG_EmergeMotion && battler._emerge[0]) {return false};
	return true;
};

//==============================
// * Update Zoom Effect A
//==============================
Aura_PlaneA.prototype.update_zoom_effect_a = function() {
	this.opacity = this.aura_effect[2]
    this._aura_data[4] += 1
	if (this._aura_data[4] < 60) {this.scale.x += 0.003; 
	   if(this.scale.x > 1.18) {this._aura_data[4] = 60;this.scale.x = 1.18};}
	else if (this._aura_data[4] < 120){this.scale.x -= 0.003;
	   if(this.scale.x < 1.00) {this._aura_data[4] = 120; this.scale.x = 1.00};}
    else {this._aura_data[4] = 0;this.scale.x = 1.00};
	this.scale.y = this.scale.x;
};

//==============================
// * Update Zoom Effect B
//==============================
Aura_PlaneA.prototype.update_zoom_effect_b = function() {	
    this._aura_data[4] += 1
	this.scale.x += 0.003; 	
	if (this._aura_data[4] < 100) {this.opacity += 5}
	else {this.opacity -= 5;
       if (this.opacity <= 0) {
		   this._aura_data[4] = 0;this.scale.x = 1.1;};
	}
	this.scale.y = this.scale.x;	
};

//=============================================================================
// * Aura_PlaneB
//=============================================================================
function Aura_PlaneB() {
    this.initialize.apply(this, arguments);
};

Aura_PlaneB.prototype = Object.create(Sprite.prototype);
Aura_PlaneB.prototype.constructor = Aura_PlaneB;

//==============================
// * Initialize
//==============================
Aura_PlaneB.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);	
    this.particles_clear(); 
};

//==============================
// * Particles Clear
//==============================
Aura_PlaneB.prototype.particles_clear = function() {	
	if (this._particles_sprites) {
	for (i = 0; i < this._particles_sprites.length; i++){
		this.removeChild(this._particles_sprites[i])
	};
	};
	this.opacity = 255;
	this.visible = true;
	this.initial_check_time = 0
	this.aura_effect = [-1,"battler",255,1,true];
	this._aura_data = [false,0,0,0,0];
	this._particles_sprites = [];
	this._particles_data = [];
};

//==============================
// * Load File
//==============================
Aura_PlaneB.prototype.loadFiles = function(sprite) {	
    sprite._battler.notetags().forEach(function(note) {
         note_data = note.split(': ')
		 if (note_data[0].toLowerCase() == "particle effect"){
			 par = note_data[1].split(':');
		     this.aura_effect[0] = Number(par[0]);
		     this.aura_effect[1] = String(par[1]);
		     this.aura_effect[2] = Number(par[2]);
			 this.aura_effect[3] = Number(par[3]);
			 this.aura_effect[4] = Number(par[4]);
	}
	},this);	
	this._aura_data = [true,false,0,0,0,0,0];
	if (this.aura_effect[2] > 1) {this.aura_effect[2] = 1};
	if (this.aura_effect[0] < 0) {return};

	if (sprite._battler.isAlive()) {this.visible = true;};
		this._par_img = ImageManager.load_BattleAuraEffect(String(this.aura_effect[1]), 0);
		//if ($gameSystem.isSideView()) {
		//	this._par_img = ImageManager.loadSvEnemy(String(this.aura_effect[1]), 0);
		//} else {
		//	this._par_img = ImageManager.loadEnemy(String(this.aura_effect[1]), 0);
		//}	
	for (i = 0; i < this.aura_effect[0] + 1; i++){
		 this._particles_sprites[i] = new Sprite(this._par_img);
		 this.addChild(this._particles_sprites[i]);
	};
};

//==============================
// * Set Data
//==============================
Aura_PlaneB.prototype.set_data = function(sprite) {
    this._aura_data = [true,true,sprite.bitmap.width,sprite.bitmap.height / 2,0,0];
	this.anchor.x = 0.5;
	this.anchor.y = 0.5;
	for (i = 0; i < this._particles_sprites.length; i++){
       this._particles_sprites[i].blendMode = Number(this.aura_effect[2]);	
       this.reset_particle(i,sprite,true);
	};	
};

//==============================
// * Reset Particle
//==============================
Aura_PlaneB.prototype.reset_particle = function(i,sprite,initial) {
	this._particles_data[i] = [0,0,0,0];
    this._particles_data[i][0] = Math.floor(Math.random() * 20) + 20;
	this._particles_data[i][1] = Math.floor(Math.random() * this.aura_effect[3]);
	this._particles_data[i][2] = Math.floor(Math.random() * this.aura_effect[4]);
	if (this.aura_effect[3] !== 0 && this._particles_data[i][1] == 0) {this._particles_data[i][1] += this.aura_effect[3];};
	if (this.aura_effect[4] !== 0 && this._particles_data[i][2] == 0) {this._particles_data[i][2] += this.aura_effect[4];};
	this._particles_sprites[i].rotation = Math.random(360);		
	var rz = (Math.random() * 0.5).toFixed(2);
	this._particles_sprites[i].opacity = 255;
	this._particles_sprites[i].scale.x = 0.50 + Number(rz);
	this._particles_sprites[i].scale.y = 0.50 + Number(rz);
	var rx = Math.floor(Math.random() * this._aura_data[2]) - (this._aura_data[2] / 2);
	var ry = Math.floor(Math.random() * this._aura_data[3]) - (this._aura_data[3]);
	this._particles_sprites[i].x = sprite.x + Number(rx);
	this._particles_sprites[i].y = sprite.y + Number(ry);
	if (initial) {this._particles_sprites[i].opacity = Math.floor(Math.random() * 125) + 125;
	   this._particles_data[i][0] = Math.floor(Math.random() * 120) + 1;
	};
};

//==============================
// * Update
//==============================
Aura_PlaneB.prototype.update_aura = function(sprite) {	
	if (sprite._battler && sprite._battler.needRefreshAura) {
		sprite._battler.needRefreshAura = false;this.particles_clear()
	};
    if (this.initial_check_time < 2) {this.initial_check_time += 1; return};
	if (!this._aura_data[0]) {this.loadFiles(sprite)};
	if (this.aura_effect[0] < 0) {return};
	if (!this._particles_sprites[0].bitmap.isReady()) {return;};
	if (!this._aura_data[1]) {this.set_data(sprite)};
	for (i = 0; i < this._particles_sprites.length; i++){
     	if (sprite._battler.isDead()) {this.opacity -= 5}
	      else {	
		 if (this._particles_data[i][0] > 0) {this._particles_data[i][0] -= 1}
		 else {this._particles_sprites[i].opacity -= 5}
		 this._particles_sprites[i].x -= this._particles_data[i][1];
		 this._particles_sprites[i].y -= this._particles_data[i][2];
		 if (this.need_reset(this._particles_sprites[i])) {this.reset_particle(i,sprite,false)};
	};
	};
	this.visible = this.isVisible(sprite._battler)
};

//==============================
// * is Visible
//==============================
Aura_PlaneB.prototype.isVisible = function(battler) {
	if (battler.isHidden()) {return false};
	if (Imported.MOG_EmergeMotion && battler._emerge[0]) {return false};
	return true;
};

//==============================
// * Need Reset
//==============================
Aura_PlaneB.prototype.need_reset = function(particle) {	
    if (particle.opacity == 0) {return true};
	return false;
};
