//=============================================================================
// MOG_ComboCounter.js
//=============================================================================

/*:
 * @plugindesc (v1.7)[v1.4]  战斗UI - 伤害统计浮动框
 * @author Moghunter （Drill_up翻译+优化）
 *
 * @param 我方是否显示伤害统计
 * @type boolean
 * @on 显示
 * @off 关闭
 * @desc true - 显示，false - 关闭。
 * @default true
 *
 * @param 平移-我方统计框 X
 * @parent 我方是否显示伤害统计
 * @desc x轴方向平移，单位像素。0为贴最左边。
 * @default 0
 *
 * @param 平移-我方统计框 Y
 * @parent 我方是否显示伤害统计
 * @desc y轴方向平移，单位像素。0为贴最上面。
 * @default 280
 * 
 * @param 敌方是否显示伤害统计
 * @type boolean
 * @on 显示
 * @off 关闭
 * @desc true - 显示，false - 关闭。
 * @default true
 *
 * @param 平移-敌方统计框 X
 * @parent 敌方是否显示伤害统计
 * @desc x轴方向平移，单位像素。0为贴最左边。
 * @default 0
 *
 * @param 平移-敌方统计框 Y
 * @parent 敌方是否显示伤害统计
 * @desc y轴方向平移，单位像素。0为贴最上面。
 * @default 70
 * 
 * @param 反击是否打断连击统计
 * @type boolean
 * @on 打断
 * @off 不打断
 * @desc true - 打断，false - 不打断。
 * @default true
 * 
 * @param 是否启用震动效果
 * @type boolean
 * @on 显示
 * @off 关闭
 * @desc true - 显示，false - 关闭。
 * @default true
 *
 * @param 缩放效果大小
 * @desc 连击出现时的缩放大小，随后恢复正常大小。1.00为正常大小。
 * @default 3.00
 * 
 *
 * @param 资源-连击图
 * @desc 表示连击的图片资源。
 * @default 伤害统计框-连击
 * @require 1
 * @dir img/Battle__ui/
 * @type file
 *
 * @param 资源-总伤害图
 * @desc 表示总伤害的图片资源。
 * @default 伤害统计框-总伤害
 * @require 1
 * @dir img/Battle__ui/
 * @type file
 *
 * @param 资源-连击数字
 * @desc 表示连击数字的图片资源。
 * @default 伤害统计框-连击数字
 * @require 1
 * @dir img/Battle__ui/
 * @type file
 *
 * @param 资源-总伤害数字
 * @desc 表示总伤害数字的图片资源。
 * @default 伤害统计框-总伤害数字
 * @require 1
 * @dir img/Battle__ui/
 * @type file
 *
 * @param 平移-连击图 X
 * @desc x轴方向平移，单位像素。0为贴最左边。
 * @default 118
 *
 * @param 平移-连击图 Y
 * @desc y轴方向平移，单位像素。0为贴最上面。
 * @default 134
 *
 * @param 平移-总伤害图 X
 * @desc x轴方向平移，单位像素。0为贴最左边。
 * @default 40
 *
 * @param 平移-总伤害图 Y
 * @desc y轴方向平移，单位像素。0为贴最上面。
 * @default 100
 *
 * @param 平移-连击数字 X
 * @desc x轴方向平移，单位像素。0为贴最左边。
 * @default 115
 *
 * @param 平移-连击数字 Y
 * @desc y轴方向平移，单位像素。0为贴最上面。
 * @default 145
 *
 * @param 平移-总伤害数字 X
 * @desc x轴方向平移，单位像素。0为贴最左边。
 * @default 150
 *
 * @param 平移-总伤害数字 Y
 * @desc y轴方向平移，单位像素。0为贴最上面。
 * @default 103 
 *
 * @help  
 * =============================================================================
 * +++ MOG - Combo Counter (v1.7) +++
 * By Moghunter 
 * https://mogplugins.wordpress.com/
 * =============================================================================
 * 浮动记录短时间内造成的连击以及统计伤害总量。
 * 【现已支持插件关联资源的打包、加密】
 *
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.插件的作用域：战斗界面。
 *   放置在战斗的ui层。
 * 2.记录分为 敌人阵营的连击 和 我方阵营的连击。
 *
 * -----------------------------------------------------------------------------
 * ----插件扩展
 * 插件能单独使用。
 * 作用于：
 *   - Drill_BattleTotal 战斗UI-单次战斗统计信息
 *     给目标提供统计支持，可以使目标插件统计 玩家最大连击数 和 玩家最大连击伤害 。
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 资源路径：img/Battle__ui （Battle后面有两个下划线）
 * 先确保项目img文件夹下是否有Battle__ui文件夹。
 * 要查看所有关联资源文件的插件，可以去看看"插件清单.xlsx"。
 * 使用统计浮动框，需要配置资源文件：
 *
 * 资源-连击图
 * 资源-总伤害图
 * 资源-连击数字
 * 资源-总伤害数字
 *
 * （这四个图片的位置互不相干，你可以任意设置它们的位置）
 * （浮动框的图片不一定必须与示例的大小一致，插件只要确定连击、总计、
 * 数字的位置就能自动显示出来）
 *
 * -----------------------------------------------------------------------------
 * ----关于Drill_up优化：
 * [v1.1]
 * 使得该插件支持关联资源的打包、加密。
 * 部署时勾选去除无关文件，本插件中相关的文件不会被去除。
 * [v1.2]
 * mog插件升级，统计分为了敌人阵营和我方阵营。
 * [v1.3]
 * 修改了插件的分类。
 * [v1.4]
 * 修改了插件关联的资源文件夹。
 * 
 */

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//插件记录：
//		只改了变量名和导入文件。
//		（导入文件统一在 HitCounterSprites.prototype.loadImages 方法里面。）
//
//

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_ComboCounter = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_ComboCounter');
    Moghunter.combo_allies = String(Moghunter.parameters['我方是否显示伤害统计'] || 'true');
    Moghunter.combo_enemies = String(Moghunter.parameters['敌方是否显示伤害统计'] || 'true');
	Moghunter.combo_cancel = String(Moghunter.parameters['反击是否打断连击统计'] || 'true');
	Moghunter.combo_shakeEffect = String(Moghunter.parameters['是否启用震动效果'] || 'true');
	Moghunter.combo_zoomEffect = Number(Moghunter.parameters['缩放效果大小'] || 3);
    Moghunter.combo_posX1 = Number(Moghunter.parameters['平移-我方统计框 X'] || 0);
    Moghunter.combo_posY1 = Number(Moghunter.parameters['平移-我方统计框 Y'] || 280);	
    Moghunter.combo_posX2 = Number(Moghunter.parameters['平移-敌方统计框 X'] || 0);
    Moghunter.combo_posY2 = Number(Moghunter.parameters['平移-敌方统计框 Y'] || 70);	
    Moghunter.combo_hit_layout_x = Number(Moghunter.parameters['平移-连击图 X'] || 118);
    Moghunter.combo_hit_layout_y = Number(Moghunter.parameters['平移-连击图 Y'] || 124);
    Moghunter.combo_dmg_layout_x = Number(Moghunter.parameters['平移-总伤害图 X'] || 10);
    Moghunter.combo_dmg_layout_y = Number(Moghunter.parameters['平移-总伤害图 Y'] || 90);
    Moghunter.combo_hit_number_x = Number(Moghunter.parameters['平移-连击数字 X'] || 115);
    Moghunter.combo_hit_number_y = Number(Moghunter.parameters['平移-连击数字 Y'] || 135);	
    Moghunter.combo_dmg_number_x = Number(Moghunter.parameters['平移-总伤害数字 X'] || 150);
    Moghunter.combo_dmg_number_y = Number(Moghunter.parameters['平移-总伤害数字 Y'] || 93);
    Moghunter.src_Combo_A = String(Moghunter.parameters['资源-连击图']);
    Moghunter.src_Combo_B = String(Moghunter.parameters['资源-总伤害图']);
    Moghunter.src_Combo_D = String(Moghunter.parameters['资源-连击数字']);
    Moghunter.src_Combo_C = String(Moghunter.parameters['资源-总伤害数字']);


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
var _mog_hitCounter_TempInitialize = Game_Temp.prototype.initialize;
Game_Temp.prototype.initialize = function() {
	_mog_hitCounter_TempInitialize.call(this);
	this.combo_data = [];
	this.combo_data[0] = [false,0,0,false,false];
	this.combo_data[1] = [false,0,0,false,false];
	this.combo_cancel = String(Moghunter.combo_cancel) == "true" ? true : false;
};

//=============================================================================
// ** Game System
//=============================================================================

//==============================
// * Initialize
//==============================
var _mog_hitCounter_SysInitialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	_mog_hitCounter_SysInitialize.call(this);
    this.clearComboSpriteData();	
};


//==============================
// * clear Combo Sprite Data
//==============================
Game_System.prototype.clearComboSpriteData = function() {
	this._comboSpriteA = [];
	this._comboSpriteB = [];
    this._comboSpriteN1 = [];
	this._comboSpriteN2 = [];
	for (var i = 0; i < 2; i++) {	
		this._comboSpriteA[i] = {};
		this._comboSpriteB[i] = {};
		this._comboSpriteN1[i] = [];
		this._comboSpriteN2[i] = [];
	};
};

//=============================================================================
// ** Game Action
//=============================================================================

//==============================
// * Apply
//==============================
var _alias_mog_combocounter_apply = Game_Action.prototype.apply
Game_Action.prototype.apply = function(target) {
	_alias_mog_combocounter_apply.call(this,target);
	if (this.subject().isActor() && target.isEnemy() && !target.result().isHit()) {
		$gameTemp.combo_data[0][3] = true;
	} else if (this.subject().isEnemy() && target.isActor() && !target.result().isHit()) {
		$gameTemp.combo_data[1][3] = true;
	};
};

//==============================
// * Game Action
//==============================
var _mog_comboCounterGaction_executeHpDamage = Game_Action.prototype.executeHpDamage;
Game_Action.prototype.executeHpDamage = function(target, value) {
	_mog_comboCounterGaction_executeHpDamage.call(this,target, value);
	if (value > 0) {
		if (Imported.MOG_ChronoEngine && $gameSystem.isChronoMode()) {
			$gameTemp.combo_data[0][0] = true;
			$gameTemp.combo_data[0][1] += 1;
			$gameTemp.combo_data[0][2] += value;		
		} else {
			if (this.subject().isActor() && target.isEnemy()) {
			    $gameTemp.combo_data[0][0] = true;
				$gameTemp.combo_data[0][1] += 1;
				$gameTemp.combo_data[0][2] += value;
				if ($gameTemp.combo_cancel) {
					$gameTemp.combo_data[1][3] = true;	
					$gameTemp.combo_data[1][4] = false;
				};
			}
			else if (this.subject().isEnemy() && target.isActor()) {
			    $gameTemp.combo_data[1][0] = true;
				$gameTemp.combo_data[1][1] += 1;
				$gameTemp.combo_data[1][2] += value;
				if ($gameTemp.combo_cancel) {				
					$gameTemp.combo_data[0][3] = true;	
					$gameTemp.combo_data[0][4] = false;
				};
			};
		};
	};
};		
	
//=============================================================================
// ** BattleManager
//=============================================================================

//==============================
// * Start Action
//==============================
var _mog_ccount_bmngr_startAction = BattleManager.startAction;
BattleManager.startAction = function() {
    $gameTemp.combo_data[0][4] = true;
	$gameTemp.combo_data[1][4] = true;
	_mog_ccount_bmngr_startAction.call(this);
};

//==============================
// * End Action
//==============================
var _mog_ccount_bmngr_endAction = BattleManager.endAction;
BattleManager.endAction = function() {
	_mog_ccount_bmngr_endAction.call(this);
	$gameTemp.combo_data[0][4] = false;
	$gameTemp.combo_data[1][4] = false;
};

//=============================================================================
// ** Scene Battle
//=============================================================================	

//==============================
// * Terminate
//==============================
var _mog_ccount_sbattle_terminate = Scene_Battle.prototype.terminate;
Scene_Battle.prototype.terminate = function() {
    _mog_ccount_sbattle_terminate.call(this);
    $gameTemp.combo_data[0] = [false,0,0,false,false];
    $gameTemp.combo_data[1] = [false,0,0,false,false];
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
// ** create Combo Counter
//==============================
Scene_Base.prototype.createComboCounter = function() {
	this._hitCounterSprite = []
	for (var i = 0; i < 2 ; i++) {
		this._hitCounterSprite[i] = new HitCounterSprites(i);
		this._hitCounterSprite[i].mz = 140;
		this._hudField.addChild(this._hitCounterSprite[i]);
	};
};

//=============================================================================
// ** Scene Battle
//=============================================================================

//==============================
// ** create Spriteset
//==============================
var _mog_comboCounter_sbattle_createSpriteset = Scene_Battle.prototype.createSpriteset;
Scene_Battle.prototype.createSpriteset = function() {
	_mog_comboCounter_sbattle_createSpriteset.call(this);
	if (!this._hudField) {this.createHudField()};
    this.createComboCounter();
	this.sortMz();	
};

//=============================================================================
// ** Scene Map
//=============================================================================

//==============================
// ** create Spriteset
//==============================
var _mog_comboHud_sMap_createSpriteset = Scene_Map.prototype.createSpriteset;
Scene_Map.prototype.createSpriteset = function() {
	_mog_comboHud_sMap_createSpriteset.call(this);
	if (!this._hudField) {this.createHudField()};
	if (Imported.MOG_ChronoEngine) {this.createComboCounter()};
	this.sortMz();
};

//==============================
// * Terminate
//==============================
var _mog_ccount_smap_terminate = Scene_Map.prototype.terminate;
Scene_Map.prototype.terminate = function() {
    _mog_ccount_smap_terminate.call(this);
	if (this._hitCounterSprite) {
		this._hitCounterSprite.recordComboSpriteData()
	};
};

//=============================================================================
// * Hit Counter Sprites
//=============================================================================
function HitCounterSprites() {
    this.initialize.apply(this, arguments);
};

HitCounterSprites.prototype = Object.create(Sprite.prototype);
HitCounterSprites.prototype.constructor = HitCounterSprites;

//==============================
// * Initialize
//==============================
HitCounterSprites.prototype.initialize = function(type) {
    Sprite.prototype.initialize.call(this);	
    this.setup(type);
	this.loadImages();
    this.createLayout();
	if ($gameSystem._comboSpriteN1[this._type].length > 0 && $gameTemp.combo_data[this._type][1] > 0) {
		this.loadComboSpriteData()
	};
};

//==============================
// * Setup
//==============================
HitCounterSprites.prototype.setup = function(type) {
	this._type = type
	this._shakeEffect = String(Moghunter.combo_shakeEffect) == "true" ? true : false;
	this._shakeData = [0,0,0];
	this.combo_sprite_data = [0,[],[],0,0];
    this.combo_sprite_n1 = [];
	this.combo_sprite_n2 = [];
	this.setupPosition();
};

//==============================
// * Setup Position
//==============================
HitCounterSprites.prototype.setupPosition = function() {
    if (this._type == 0) {
        this.x = Moghunter.combo_posX1;
	    this.y = Moghunter.combo_posY1; 		
	    this.visible = String(Moghunter.combo_allies) == "true" ? true : false;
	} else {
	    this.visible = String(Moghunter.combo_enemies) == "true" ? true : false;
        this.x = Moghunter.combo_posX2;
	    this.y = Moghunter.combo_posY2; 			
	};
	this._org = [this.x,this.y];
};


//==============================
// * Load Images
//==============================
HitCounterSprites.prototype.loadImages = function() {
   this._layImg1 = ImageManager.load_BattleUi(Moghunter.src_Combo_A);
   this._layImg2 = ImageManager.load_BattleUi(Moghunter.src_Combo_B);
   this._numberImg1 = ImageManager.load_BattleUi(Moghunter.src_Combo_C);
   this._numberImg2 = ImageManager.load_BattleUi(Moghunter.src_Combo_D);	     
};

//==============================
// * Create Layout
//==============================
HitCounterSprites.prototype.createLayout = function() {
    this.combo_sprite_a = new Sprite(this._layImg1);
	this.combo_sprite_a.x = Moghunter.combo_hit_layout_x;
	this.combo_sprite_a.y = Moghunter.combo_hit_layout_y;
	this.combo_sprite_a.org = [this.combo_sprite_a.x,this.combo_sprite_a.y];
    this.combo_sprite_a.opacity = 0;
	this.combo_sprite_b = new Sprite(this._layImg2);
	this.combo_sprite_b.x = Moghunter.combo_dmg_layout_x;
	this.combo_sprite_b.y = Moghunter.combo_dmg_layout_y;
	this.combo_sprite_b.org = [this.combo_sprite_b.x,this.combo_sprite_b.y];
	this.combo_sprite_b.opacity = 0;
	this.addChild(this.combo_sprite_a);
	this.addChild(this.combo_sprite_b);
};

//==============================
// * Update Combo Sprites
//==============================
HitCounterSprites.prototype.update = function() {	
   Sprite.prototype.update.call(this);	
   if ($gameTemp.combo_data[this._type][0]) {this.refresh_combo_sprite()};
   this.updateOpacity();
   this.updateLayout();
   this.updateNumber1();
   this.updateNumber2();
   this.updatePosition();
   if (this.needUpdateDuration()) {this.updateDuration()};
};

//==============================
// * Update position
//==============================
HitCounterSprites.prototype.updatePosition = function() {
   if (this._shakeData[0] > 0) {this.updateShake()};
   this.x = this._org[0] + this._shakeData[2];
   this.y = this._org[1];
};

//==============================
// * Update Shake
//==============================
HitCounterSprites.prototype.updateShake = function() {
   this._shakeData[1]++
   if (this._shakeData[1] < 1) {return};
   this._shakeData[0]--;
   this._shakeData[1] = 0;
   this._shakeData[2] = Math.randomInt(6) - 3 
   if (this._shakeData[0] <= 0) {this._shakeData = [0,0,0]};
};

//==============================
// * Update Opacity
//==============================
HitCounterSprites.prototype.updateOpacity = function() {	
   if (this.combo_sprite_data[0] <= 0 && this.combo_sprite_a.opacity > 0) {
      this.combo_sprite_a.opacity -= 10;
	  this.combo_sprite_b.opacity -= 10;
	  this.combo_sprite_data[3] += 1;
   };   
};

//==============================
// * Update Layout
//==============================
HitCounterSprites.prototype.updateLayout = function() {	
   this.combo_sprite_a.x = this.combo_sprite_data[3] + this.combo_sprite_a.org[0];
   this.combo_sprite_a.y = this.combo_sprite_a.org[1];
   this.combo_sprite_b.x = this.combo_sprite_data[3] + this.combo_sprite_b.org[0];
   this.combo_sprite_b.y = this.combo_sprite_b.org[1];
};

//==============================
// * Update Number 1
//==============================
HitCounterSprites.prototype.updateNumber1 = function() {	
   for (var i = 0; i < this.combo_sprite_n1.length; i++) {
	   this.combo_sprite_n1[i].x = this.combo_sprite_data[3] + this.combo_sprite_data[1][i]  + this.combo_sprite_n1[i].org[0];
	   this.combo_sprite_n1[i].y = this.combo_sprite_n1[i].org[1];
	   if (this.combo_sprite_n1[i].scale.x > 1.00) {
		   this.combo_sprite_n1[i].scale.x -= 0.1;
	   this.combo_sprite_n1[i].scale.y = this.combo_sprite_n1[i].scale.x};
	   if (this.combo_sprite_data[0] <= 0) { this.combo_sprite_n1[i].opacity -= 10};
   };
};

//==============================
// * Update Number 2
//==============================
HitCounterSprites.prototype.updateNumber2 = function() {	
   for (var i = 0; i < this.combo_sprite_n2.length; i++) {
	   this.combo_sprite_n2[i].x = this.combo_sprite_data[3] + this.combo_sprite_data[2][i]  + this.combo_sprite_n2[i].org[0];
	   this.combo_sprite_n2[i].y = this.combo_sprite_n2[i].org[1];
	   if (this.combo_sprite_data[0] <= 0) { this.combo_sprite_n2[i].opacity -= 10};
   };
};

//==============================
// * Need Update Duration
//==============================
HitCounterSprites.prototype.needUpdateDuration = function() {	
   if (this.combo_sprite_data[0] <= 0) {return false};
   if (Imported.MOG_ChronoEngine && $gameSystem._chronoMode.inTurn) {
	   return false
   };   
   return true
};

//==============================
// * Update Duration
//==============================
HitCounterSprites.prototype.updateDuration = function() {	
   if (!$gameTemp.combo_data[this._type][4]) {this.combo_sprite_data[0] -= 1};
   if ($gameTemp.combo_data[this._type][3]) {this.combo_sprite_data[0] = 0};
   if (this.combo_sprite_data[0] == 0) {
	   $gameTemp.combo_data[this._type] = [false,0,0,false,false];
	   $gameSystem.clearComboSpriteData();
   };
};


//==============================
// * Load Combo Sprite Data
//==============================
HitCounterSprites.prototype.loadComboSpriteData = function() {	
	this.combo_sprite_a.opacity = $gameSystem._comboSpriteA[this._type].opacity;
	this.combo_sprite_a.x = $gameSystem._comboSpriteA[this._type].x;
	this.combo_sprite_a.y = $gameSystem._comboSpriteA[this._type].y;
	this.combo_sprite_data[0] = $gameSystem._comboSpriteA[this._type].time;
	
	this.combo_sprite_b.opacity = $gameSystem._comboSpriteB[this._type].opacity;
	this.combo_sprite_b.x = $gameSystem._comboSpriteB[this._type].x;
	this.combo_sprite_b.y = $gameSystem._comboSpriteB[this._type].y;
	this.refresh_combo_hit();
    this.refresh_combo_damage();
	
	
    for (var i = 0; i < this.combo_sprite_n1.length; i++) {
		 var sprite = this.combo_sprite_n1[i];
		 var data = $gameSystem._comboSpriteN1[this._type][i];
		 if (data) {
 		    sprite.x = data.x;
		    sprite.y = data.y = sprite.y;
		    sprite.opacity = data.opacity;
		    sprite.scale.x = data.scale;
			sprite.scale.y = data.scale;
		 }
    };	
	
    for (var i = 0; i < this.combo_sprite_n2.length; i++) {
		 var sprite = this.combo_sprite_n2[i];
		 var data = $gameSystem._comboSpriteN2[this._type][i];
		 if (data) {
 		    sprite.x = data.x;
		    sprite.y = data.y = sprite.y;
		    sprite.opacity = data.opacity;
		    sprite.scale.x = data.scale;
			sprite.scale.y = data.scale;
		 }
    };	
	$gameSystem.clearComboSpriteData();
};

//==============================
// * Record Combo Sprite Data
//==============================
HitCounterSprites.prototype.recordComboSpriteData = function() {	
    $gameSystem.clearComboSpriteData();
	
	$gameSystem._comboSpriteA[this._type].opacity = this.combo_sprite_a.opacity;
	$gameSystem._comboSpriteA[this._type].x = this.combo_sprite_a.x;
	$gameSystem._comboSpriteA[this._type].y = this.combo_sprite_a.y;
	$gameSystem._comboSpriteA[this._type].time = this.combo_sprite_data[0];
	
	$gameSystem._comboSpriteB[this._type].opacity = this.combo_sprite_a.opacity;
	$gameSystem._comboSpriteB[this._type].x = this.combo_sprite_a.x;
	$gameSystem._comboSpriteB[this._type].y = this.combo_sprite_a.y;
	
    for (var i = 0; i < this.combo_sprite_n1.length; i++) {
		 var sprite = this.combo_sprite_n1[i];
	     $gameSystem._comboSpriteN1[this._type][i] = {};
		 $gameSystem._comboSpriteN1[this._type][i].x = sprite.x;
		 $gameSystem._comboSpriteN1[this._type][i].y = sprite.y;
		 $gameSystem._comboSpriteN1[this._type][i].opacity = sprite.opacity;
		 $gameSystem._comboSpriteN1[this._type][i].scale = sprite.scale.x;
    };
  
     for (var i = 0; i < this.combo_sprite_n2.length; i++) {
		 var sprite = this.combo_sprite_n2[i];
	     $gameSystem._comboSpriteN2[this._type][i] = {};
		 $gameSystem._comboSpriteN2[this._type][i].x = sprite.x;
		 $gameSystem._comboSpriteN2[this._type][i].y = sprite.y;
		 $gameSystem._comboSpriteN2[this._type][i].opacity = sprite.opacity;
		 $gameSystem._comboSpriteN2[this._type][i].scale = sprite.scale.x;
    }; 

};

//==============================
// * Refresh Combo Sprite
//==============================
HitCounterSprites.prototype.refresh_combo_sprite = function() {
	if (!this._numberImg1.isReady()) {return};
	$gameTemp.combo_data[this._type][0] = false;
	$gameTemp.combo_data[this._type][3] = false;
	this.combo_sprite_data[0] = 90;
    this.combo_sprite_a.opacity = 255;
    this.combo_sprite_b.opacity = 255;
	this.combo_sprite_data[3] = 0;	
	if (this._shakeEffect) {this._shakeData[0] = 30};
	this.refresh_combo_hit();
	this.refresh_combo_damage();
	$gameSystem.clearComboSpriteData();
};

//==============================
// * Refresh Combo Hit
//==============================
HitCounterSprites.prototype.refresh_combo_hit = function() {
	var w = this._numberImg1.width / 10;
	var h = this._numberImg1.height;
	var dmg_number = Math.abs($gameTemp.combo_data[this._type][1]).toString().split("");
	for (var i = 0; i <  this.combo_sprite_n1.length; i++) {this.removeChild(this.combo_sprite_n1[i]);};
    for (var i = 0; i <  dmg_number.length; i++) {
		var n = Number(dmg_number[i]);
		     this.combo_sprite_n1[i] = new Sprite(this._numberImg1);
			 this.combo_sprite_n1[i].setFrame(n * w, 0, w, h);
		     this.combo_sprite_data[1][i] = (i * w) - (dmg_number.length *  (w));
			 this.combo_sprite_n1[i].anchor.x = 0.5;
			 this.combo_sprite_n1[i].anchor.y = 0.5;
		     this.combo_sprite_n1[i].scale.x = Moghunter.combo_zoomEffect;
			 this.combo_sprite_n1[i].scale.y = Moghunter.combo_zoomEffect;	
			 this.combo_sprite_n1[i].x = Moghunter.combo_hit_number_x;
			 this.combo_sprite_n1[i].y = Moghunter.combo_hit_number_y;
			 this.combo_sprite_n1[i].org = [this.combo_sprite_n1[i].x,this.combo_sprite_n1[i].y];		 
		     this.addChild(this.combo_sprite_n1[i]);
	};
};

//==============================
// * Refresh Combo Damage
//==============================
HitCounterSprites.prototype.refresh_combo_damage = function() {
	var w = this._numberImg2.width / 10;
	var h = this._numberImg2.height;
	var dmg_number =  Math.abs($gameTemp.combo_data[this._type][2]).toString().split("");
	for (var i = 0; i <  this.combo_sprite_n2.length; i++) {this.removeChild(this.combo_sprite_n2[i]);};
    for (var i = 0; i <  dmg_number.length; i++) {
		var n = Number(dmg_number[i]);
		     this.combo_sprite_n2[i] = new Sprite(this._numberImg2);
			 this.combo_sprite_n2[i].setFrame(n * w, 0, w, h);
			 this.combo_sprite_n2[i].x = Moghunter.combo_dmg_number_x;
			 this.combo_sprite_n2[i].y = Moghunter.combo_dmg_number_y;
			 this.combo_sprite_n2[i].org = [this.combo_sprite_n2[i].x,this.combo_sprite_n2[i].y];
			 this.combo_sprite_data[2][i] = i * w;
		     this.addChild(this.combo_sprite_n2[i]);
	};
};
