//=============================================================================
// MOG_CollapseEffects.js
//=============================================================================

/*:
 * @plugindesc (v1.6)[v1.1]  单位 - 敌人死亡动画效果
 * @author Moghunter （Drill_up翻译）
 *
 * @param 默认死亡效果
 * @desc 这里除了注释中参数，还有-1可表示没有动画效果，-2表示随机。（注释不能设置-1,-2）
 * @default -1
 *
 * @param 粉碎方向
 * @type select
 * @option 左
 * @value Left
 * @option 右
 * @value Right
 * @desc 死亡效果为0类型时，粉碎飘散的方向。
 * @default Left
 *
 * @help  
 * =============================================================================
 * +++ MOG - Collapse Effects (v1.6) +++
 * By Moghunter 
 * https://mogplugins.wordpress.com/
 * =============================================================================
 * 你可以设置敌人死亡的动画效果。
 * （如果你设计的敌人是萌妹萝莉，那么请不要使用该插件的粉碎、切片效果）
 * 
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.插件的作用域：战斗界面。
 *   只作用于敌人。
 * 2.播放动画效果时，整个战斗是等待状态，会拖慢战斗时间。
 * 
 * -----------------------------------------------------------------------------
 * ----激活条件 - 敌人粉碎
 * 你可以单独设置死亡效果，在敌人注释中含有下面的关键字设置：
 * 你也可以在技能注释中写关键字，使得技能目标死亡变成指定效果。
 * （注意，冒号后面有一个空格）
 *
 * Collapse Effect: A
 *
 * 参数A：死亡类型
 *        0 - 粉碎（按设置的粉碎方向）
 *        1 - 向上粉碎
 *        2 - 横条切片两边飘散
 *        3 - 横条切片
 *        4 - 水平拉伸消失
 *        5 - 垂直拉伸消失
 *        6 - 先水平后垂直拉伸消失
 *        7 - 大幅度旋转拉伸消失
 *        8 - 水平切成两半
 *        9 - 垂直切成两半
 *        10- 石化
 *
 * -----------------------------------------------------------------------------
 * ----激活条件 - 敌人动画
 * 你可以单独设置死亡时动画，在敌人注释中含有下面的关键字设置：
 * 你也可以在技能注释中写关键字，使得技能目标死亡变成指定效果。
 * （注意，冒号后面有一个空格）
 *
 * Collapse Animation: B
 *
 * 参数B：动画id
 *        死亡时会播放的指定id的动画。
 *
 * -----------------------------------------------------------------------------
 * ----关于Drill_up优化：
 * [v1.1]
 * 修改了插件分类。
 *
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_CollapseEffects = true;
　　var Moghunter = Moghunter || {}; 

    Moghunter.parameters = PluginManager.parameters('MOG_CollapseEffects');
	Moghunter.collShatterDirection = String(Moghunter.parameters['粉碎方向'] || "Left");
    Moghunter.collDefaultCollapse = Number(Moghunter.parameters['默认死亡效果'] || 0);

//=============================================================================
// ** Game Battler
//=============================================================================

//==============================
// * initMembers
//==============================
var _mog_cefc_gbat_initMembers = Game_Battler.prototype.initMembers;
Game_Battler.prototype.initMembers = function() {
    _mog_cefc_gbat_initMembers.call(this);
	this._collpaseData = [-1,-1];
};
	
//==============================
// * Notetags
//==============================
Game_Battler.prototype.notetags = function() {
	if (this.isEnemy()) {return this.enemy().note.split(/[\r\n]+/)};
	if (this.isActor()) {return this.actor().note.split(/[\r\n]+/)};
};	
	
//==============================
// * Perform Collapse
//==============================
var _mog_colefct_gbattler_performCollapse = Game_Battler.prototype.performCollapse;
Game_Battler.prototype.performCollapse = function() {
	_mog_colefct_gbattler_performCollapse.call(this);
	if (this.isEnemy()) {this.checkCollapseEffect()};
};
	
//==============================
// * Check Collapse Effect
//==============================
Game_Battler.prototype.checkCollapseEffect = function() {
	if (this._collpaseData[0] == -1) {this.setDefaultCollapse()};
	if (this._collpaseData[1] > 0) {this.startAnimation(this._collpaseData[1], false, 0)};
};	
	
//==============================
// * set Default Collapse
//==============================
Game_Battler.prototype.setDefaultCollapse = function() {
   var coltype = Math.min(Math.max(Number(Moghunter.collDefaultCollapse),-2),10);
   if (coltype === -1) {
	   this.performCollapseSoundMG();
	   return;
   };
   if (coltype === -2) {
	   this._collpaseData[0] = Math.randomInt(7);	  
   } else {
	   this._collpaseData[0] = coltype;
   };
};	
	
//==============================
// * perform Collapse Sound
//==============================
Game_Battler.prototype.performCollapseSoundMG = function() {
    switch (this.collapseType()) {
    case 0:
        SoundManager.playEnemyCollapse();
        break;
    case 1:
        SoundManager.playBossCollapse1();
        break;
    };
};
	
//==============================
// * Load Collapse Notetags
//==============================
Game_Battler.prototype.loadCollapseNotetags = function() {
    this.notetags().forEach(function(note) {
         var note_data = note.split(': ')
		 if (note_data[0].toLowerCase() == "collapse effect"){
			 var par = note_data[1].split(':');
			 var effect = Math.min(Math.max(Number(par[0]),0),10);
		     this._collpaseData[0]  = effect;
		 } else if (note_data[0].toLowerCase() == "collapse animation"){
			 var par = note_data[1].split(':');
			 var animation_id = Math.min(Math.max(Number(par[0]),0),2000);
		     this._collpaseData[1] = animation_id;			 
		 };
	},this);
};		
	
//=============================================================================
// ** Game Enemy
//=============================================================================

//==============================
// * Setup
//==============================
var _mog_coleft_genmy_setup = Game_Enemy.prototype.setup;
Game_Enemy.prototype.setup = function(enemyId, x, y) {
	_mog_coleft_genmy_setup.call(this,enemyId, x, y);
    this.loadCollapseNotetags();
};	

//==============================
// * perform Collapse *Overwrite
//==============================
Game_Enemy.prototype.performCollapse = function() {
    Game_Battler.prototype.performCollapse.call(this);
    switch (this.collapseType()) {
    case 0:
        this.requestEffect('collapse');
        break;
    case 1:
        this.requestEffect('bossCollapse');
        break;
    case 2:
        this.requestEffect('instantCollapse');
        break;
    }
};

//=============================================================================
// ** Game Action
//=============================================================================

//==============================
// * Apply
//==============================
var _alias_mog_colefct_gaction_apply = Game_Action.prototype.apply;
Game_Action.prototype.apply = function(target) {
	 _alias_mog_colefct_gaction_apply.call(this,target);
	 if (target.isDead() && this._item) {
        if (target.isEnemy()) {this.setCollapseEffect(target)};
	 };
};	
	
//==============================
// * Set Collapse Effect
//==============================
Game_Action.prototype.setCollapseEffect = function(target) {
    if (!this._item || !this._item.object()) {return};
	var item_notes = this._item.object().note.split(/[\r\n]+/);
    item_notes.forEach(function(note) {
         var note_data = note.split(': ')
		 if (note_data[0].toLowerCase() == "collapse effect"){
			 var par = note_data[1].split(':');
			 var effect = Math.min(Math.max(Number(par[0]),0),10);
		     target._collpaseData[0]  = effect;
		 } else if (note_data[0].toLowerCase() == "collapse animation"){
			 var par = note_data[1].split(':');
			 var animation_id = Math.min(Math.max(Number(par[0]),0),2000);
		     target._collpaseData[1] = animation_id;			 
		 };
	},this);
};	
	
//=============================================================================
// ** Sprite Enemy
//=============================================================================

//==============================
// * set Battler
//==============================
var _mog_colefct_sprEnemy_setBattler = Sprite_Enemy.prototype.setBattler;
Sprite_Enemy.prototype.setBattler = function(battler) {
    _mog_colefct_sprEnemy_setBattler.call(this,battler)
	if (this.isEnemyP()) {this._colpsBitmap = this.bitmap};
};	
	
//==============================
// * Update
//==============================
var _mog_cefc_sprtenemy_update = Sprite_Enemy.prototype.update;
Sprite_Enemy.prototype.update = function() {
	_mog_cefc_sprtenemy_update.call(this);
	if (this._spriteCol != null) {this.setFrame(0,0,0,0)};
};

//==============================
// * update Collapse
//==============================
var _mog_cefc_sprtenmy_updateCollapse = Sprite_Enemy.prototype.updateCollapse;
Sprite_Enemy.prototype.updateCollapse = function() {
	if (this._battler._collpaseData[0] != -1) {this.updateCollapseEffects(); return}
	_mog_cefc_sprtenmy_updateCollapse.call(this)
};

//=============================================================================
// ** Sprite Battler
//=============================================================================

//==============================
// * init Members
//==============================
var _mog_sprtBat_initMembers = Sprite_Battler.prototype.initMembers;
Sprite_Battler.prototype.initMembers = function() {
    _mog_sprtBat_initMembers.call(this);
    this._collEffectWait = 0;
};


//==============================
// * is Enemy P
//==============================
Sprite_Battler.prototype.isEnemyP = function() {
   if (!this._battler) {return false};
   if (!Imported.MOG_EnemyPoses) {return false};
   if (!this._battler.isBPose()) {return false};
   return true;
};

//==============================
// * collapse Type
//==============================
Sprite_Battler.prototype.collapseType = function() {
   return this._battler._collpaseData[0];
};

//==============================
// * Record Pre Collapse
//==============================
Sprite_Battler.prototype.recordPreCollapse = function() {
     this._collData = [0,this.width,this.height,this.rotation,this.scale.x,this.scale.y];
};

//==============================
// * load Pre Collapse
//==============================
Sprite_Battler.prototype.loadPreCollapse = function() {
	 this.rotation = this._collData[3];
	 this.scale.x = this._collData[4];
	 this.scale.y = this._collData[5];	 
	 this.setFrame(0,0,this._collData[1],this._collData[2]);	 
};

//==============================
// * remove Collapse Effects
//==============================
Sprite_Battler.prototype.removeCollapseEffects = function() {
	 this._effectDuration = 0;
	 this.filters = null;
	 if (this._spriteCol) {
		 for (var i = 0; i < this._spriteCol.length; i++) {
			  this.removeChild(this._spriteCol[i]);
			  this._spriteCol[i] = null;
		 };		 
	 };	 
	 this.loadPreCollapse();
	 this.revertToNormal();
	 this.opacity = 0;
     this._collData = null;
	 this._spriteCol = null;
	 this._collapseMode = false;
};

//==============================
// * setup Collapse Effects
//==============================
Sprite_Battler.prototype.setupCollapseEffect = function() {
	 if (Imported.MOG_BattlerMotion && this._battler) {this._battler.clearBdamage(0)};
	 if (this.collapseType() < 4 || this.collapseType() > 7) {
        if (this._colpsBitmap) {this.bitmap = this._colpsBitmap;};
	 } else { 
	    this._collapseMode = true;
	 };
	 this._effectDuration = 400;
	 this._collEffectWait = 1;
	 if (Imported.MOG_FlashDamage) {
         this._collEffectWait = $gameTemp._flashDamage ? 22 : 1;
	 };
	 this.recordPreCollapse();	 
	 if (this.collapseType() <= 1) {this.setupColShatterPoint();
	 } else if (this.collapseType() === 2 || this.collapseType() === 3) {
		 this.setupColShatterLine();
	 } else if (this.collapseType() === 4 || this.collapseType() === 5 ||
	             this.collapseType() === 6 || this.collapseType() === 7) {
		 this.setupColFadeZoom();			 		 
	 } else if (this.collapseType() === 8) {
		 this.setupColSliceHorz();	
	 } else if (this.collapseType() === 9) {
		 this.setupColSliceVert();
	 } else if (this.collapseType() === 10) {
		 this.setupColStone();			  	 
	 };
};

//==============================
// * setColSpritePar
//==============================
Sprite_Battler.prototype.setColSpritePar = function(sprite) {	 
	 sprite.anchor.x = this.anchor.x;
	 sprite.anchor.y = this.anchor.y;
	 sprite.width = this.width;
	 sprite.height = this.height;
	 sprite.scale.x = 1.00;
	 sprite.scale.y = 1.00;
	 sprite.rotation = this.rotation;
};	 

//==============================
// * setup Coll Shatter Point
//==============================
Sprite_Battler.prototype.setupColShatterPoint = function() {	 
	 this._spriteCol = [];
	 this._shatterDCol = String(Moghunter.collShatterDirection) == "Left" ? 0 : 1;
	 var w = this.isEnemyP() ? this.bitmap.width / 4 : this.width;
	 var fz = 32;
	 var x2 = this.isEnemyP() ?  w * 3 : 0;
	 var frag_size = Math.floor((this.height + w) / 40);
	 var xi = Math.floor(-w / 2) + Math.floor(frag_size / 2);
     var yi = Math.floor(-this.height + frag_size);
     var f = 0
	 for (var i = 0; i >= 0; i++) {
		 this._spriteCol[i] = new Sprite(this.bitmap);
		 this.setColSpritePar(this._spriteCol[i]);
		 this._spriteCol[i].sx = (Math.random() * 0.5) + 1
		 this._spriteCol[i].op = (Math.random() * 2) + 2.5;
		 var x = Math.floor(i % fz) * frag_size
		 var y = Math.floor(i / fz) * frag_size;
		 this._spriteCol[i].x = xi + x;
		 this._spriteCol[i].y = yi + y;
		 this._spriteCol[i].setFrame(x + x2,y,frag_size,frag_size);
		 this.addChild(this._spriteCol[i]);
		 if (this._spriteCol[i].y > 0) {break};	 
	 };
};

//==============================
// * update Collapse Shatter Point
//==============================
Sprite_Battler.prototype.updateCollapseShatterPoint= function() {	
	var coldone = true;
	for (var i = 0; i < this._spriteCol.length; i++) {
		if (this.collapseType() === 0) {
			if (this._shatterDCol === 0) {
				this._spriteCol[i].x -= this._spriteCol[i].sx; 
			} else {
				this._spriteCol[i].x += this._spriteCol[i].sx;
			};
		};
		this._spriteCol[i].y -= this._spriteCol[i].sx;
		this._spriteCol[i].opacity -= this._spriteCol[i].op;
        if (this._spriteCol[i].opacity > 0) {coldone = false};
	};
	if (coldone) {this.removeCollapseEffects()};
};

//==============================
// * setup Coll Shatter Line
//==============================
Sprite_Battler.prototype.setupColShatterLine = function() {	 
	 var w = this.isEnemyP() ? this.bitmap.width / 4 : this.width;
	 var fz = 32;
	 var x2 = this.isEnemyP() ?  w * 3 : 0;
	 this._spriteCol = [];
	 var frag_size = 6;
	 var xi = Math.floor(-w / 2) + Math.floor(frag_size / 2);
     var yi = Math.floor(-this.height + frag_size)
	 for (var i = 0; i >= 0; i++) {
		 this._spriteCol[i] = new Sprite(this.bitmap);
		 this.setColSpritePar(this._spriteCol[i]);
		 this._spriteCol[i].sx = (Math.random() * 0.5) + 1 - (i * 0.01);
		 this._spriteCol[i].op = (Math.random() * 2) + 2.5;
		 var y = Math.floor(i * frag_size);
		 this._spriteCol[i].y = yi + y;
		 this._spriteCol[i].setFrame(x2,y,this.width,frag_size);
		 this.addChild(this._spriteCol[i]);
		 if (this._spriteCol[i].y > 0) {break};
	 };
};

//==============================
// * update Collapse Shatter Line
//==============================
Sprite_Battler.prototype.updateCollapseShatterLine= function() {	
	var coldone = true;
	var d = this.collapseType() === 2 ? 0 : null;
	for (var i = 0; i < this._spriteCol.length; i++) {
	    if (d != null) {
		   d = d === 0 ? 1 : 0;   
		   if (d === 0) {this._spriteCol[i].x -= this._spriteCol[i].sx;
		   } else {this._spriteCol[i].x += this._spriteCol[i].sx;
		   };
		};
		this._spriteCol[i].y -= this._spriteCol[i].sx 
		this._spriteCol[i].opacity -= this._spriteCol[i].op
        if (this._spriteCol[i].opacity > 0) {coldone = false};
	};
	if (coldone) {this.removeCollapseEffects()};
};

//==============================
// * setup Col Slice Horz
//==============================
Sprite_Battler.prototype.setupColSliceHorz = function() {
 	 var w = this.isEnemyP() ? this.bitmap.width / 4 : this.width;
	 var fz = 32;
	 var x2 = this.isEnemyP() ?  w * 3 : 0;	
	 this._spriteCol = [];
	 var frag_size = Math.floor(this.height / 2);
     var yi = Math.floor(-this.height + frag_size)
	 for (var i = 0; i < 2; i++) {
		 this._spriteCol[i] = new Sprite(this.bitmap);
		 this.setColSpritePar(this._spriteCol[i]);
		 var y = Math.floor(i * frag_size);
		 this._spriteCol[i].y = yi + y;
		 this._spriteCol[i].setFrame(x2,y,w,frag_size);
		 this.addChild(this._spriteCol[i]);
		 this._spriteCol[i].sx = Math.floor(frag_size / 2);
		 this._spriteCol[i].sp = (this._spriteCol[i].sx / 40) + 0.01;
	 };
};

//==============================
// * update Collapse Slice Horz
//==============================
Sprite_Battler.prototype.updateCollapseSliceHorz = function() {
	 var coldone = false;
     if (this._spriteCol[0].x >= this._spriteCol[0].sx) {
		  this._spriteCol[0].opacity -= 5;
		  this._spriteCol[1].opacity -= 5;
		  if (this._spriteCol[0].opacity <= 0) {coldone = true;};
	 } else {
          this._spriteCol[0].x += this._spriteCol[0].sp;
	      this._spriteCol[1].x -= this._spriteCol[1].sp;			 
	 };
	 if (coldone) {this.removeCollapseEffects()};
};

//==============================
// * setup Col Slice Vert
//==============================
Sprite_Battler.prototype.setupColSliceVert = function() {	
 	 var w = this.isEnemyP() ? this.bitmap.width / 4 : this.width;
	 var fz = 32;
	 var x2 = this.isEnemyP() ?  w * 3 : 0;
	 this._spriteCol = [];
	 var frag_size = Math.floor(w / 2);
	 var xi = Math.floor(-w / 2) + Math.floor(frag_size / 2);
	 for (var i = 0; i < 2; i++) {
		 this._spriteCol[i] = new Sprite(this.bitmap);
		 this.setColSpritePar(this._spriteCol[i]);
		 var x = Math.floor(i * frag_size);
		 this._spriteCol[i].x = xi + x;
		 this._spriteCol[i].setFrame(x + x2,0,frag_size,this.height);
		 this.addChild(this._spriteCol[i]);
		 this._spriteCol[i].sx = Math.floor(frag_size / 2);
		 this._spriteCol[i].sp = (this._spriteCol[i].sx / 40) + 0.01;
	 };
};

//==============================
// * update Collapse Slice Vert
//==============================
Sprite_Battler.prototype.updateCollapseSliceVert = function() {
	 var coldone = false;
     if (this._spriteCol[0].y >= this._spriteCol[0].sx) {
		  this._spriteCol[0].opacity -= 5;
		  this._spriteCol[1].opacity -= 5;
		  if (this._spriteCol[0].opacity <= 0) {coldone = true;};
	 } else {
          this._spriteCol[0].y += this._spriteCol[0].sp;
	      this._spriteCol[1].y -= this._spriteCol[1].sp;			 
	 };
	 if (coldone) {this.removeCollapseEffects()};
};

//==============================
// * setup Col Fade Zoom
//==============================
Sprite_Battler.prototype.setupColFadeZoom = function() {	 
     this._animeDuration = 0;
};

//==============================
// * update Col Fade Zoom
//==============================
Sprite_Battler.prototype.updateColFadeZoom = function() {
	this._animeDuration ++;
	if (this.collapseType() === 4) {
		this.updateColFazeZoom1(); 
	} else if (this.collapseType() === 5) {
	    this.updateColFazeZoom2();
	} else if (this.collapseType() === 6) {
	    this.updateColFazeZoom3();		
	} else {
	   this.updateColFazeZoom4();
	};
	if (this.scale.x < 0) {this.scale.x = 0};
	if (this.scale.y < 0) {this.scale.y = 0};
	if (this.opacity === 0) {this.removeCollapseEffects()};
};

//==============================
// * update Col Fade Zoom1
//==============================
Sprite_Battler.prototype.updateColFazeZoom1 = function() {
	this.scale.x += 0.03;
	this.scale.y -= 0.01;
	this.opacity -= 3;
};

//==============================
// * update Col Fade Zoom2
//==============================
Sprite_Battler.prototype.updateColFazeZoom2 = function() {
	this.scale.x -= 0.01;
	this.scale.y += 0.03;
	this.opacity -= 3;
};

//==============================
// * update Col Fade Zoom3
//==============================
Sprite_Battler.prototype.updateColFazeZoom3 = function() {
	if (this._animeDuration < 30) {
		this.scale.x += 0.08;
		this.scale.y -= 0.04;
	} else if (this._animeDuration < 120) {
		this.scale.x -= 0.09;
		this.scale.y += 0.15;
		this.opacity -= 5;
	};
};

//==============================
// * update Col Fade Zoom4
//==============================
Sprite_Battler.prototype.updateColFazeZoom4 = function() {
	this.scale.x -= 0.01;
	this.scale.y += 0.04;
	this.rotation -= 0.1;
	this.opacity -= 2;
};

//==============================
// * setup Col  Stone
//==============================
Sprite_Battler.prototype.setupColStone = function() {
     this._effectDuration = 30;
	 if (Utils.RPGMAKER_VERSION >= "1.3.2") {
	   var filter = new PIXI.filters.ColorMatrixFilter()
	   filter.blackAndWhite(true);		
	 } else {
	   var filter = new PIXI.GrayFilter();
	 };
	 this.filters = [filter];
};

//==============================
// * update Collapse Stone
//==============================
Sprite_Battler.prototype.updateCollapseStone = function() {	   
};

//==============================
// * update Collapse Effects
//==============================
Sprite_Battler.prototype.updateCollapseEffects = function() {
	if (!this._collData) {this.setupCollapseEffect()};
    if (this._collEffectWait > 0) {
		this._collEffectWait--
		if (this._collEffectWait == 0) {this._battler.performCollapseSoundMG()}
	    return;
	};	
	if (this.collapseType() <= 1) {
	    this.updateCollapseShatterPoint();
	} else if (this.collapseType() === 2  || this.collapseType() === 3) {
		this.updateCollapseShatterLine();
	} else if (this.collapseType() === 4 || this.collapseType() === 5 ||
	            this.collapseType() === 6 || this.collapseType() === 7) {
		this.updateColFadeZoom();				 		
	} else if (this.collapseType() === 8) {
		this.updateCollapseSliceHorz();	
	} else if (this.collapseType() === 9) {
		this.updateCollapseSliceVert();	
	} else if (this.collapseType() === 10) {
		this.updateCollapseStone();	
	};
};