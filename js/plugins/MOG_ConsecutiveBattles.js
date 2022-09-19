//=============================================================================
// MOG_ConsecutiveBattles.js
//=============================================================================

/*:
 * @plugindesc (v1.1)[v1.3]  战斗 - 车轮战
 * @author Moghunter (Drill_up翻译+优化）
 *
 * @param 资源-波数框
 * @desc 波数框的图片资源。
 * @default 车轮战-波数框
 * @require 1
 * @dir img/Battle__ui/
 * @type file
 *
 * @param 平移-波数框 X
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 630
 * 
 * @param 平移-波数框 Y
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 0
 * 
 * @param 平移-波数值 X
 * @desc 以波数框的位置为基准。x轴方向平移，单位像素。（可为负数）
 * @default 65
 * 
 * @param 平移-波数值 Y
 * @desc 以波数框的位置为基准。y轴方向平移，单位像素。（可为负数）
 * @default 3
 * 
 * @param 波数字体大小
 * @type number
 * @min 1
 * @desc 波数的字体大小。
 * @default 20
 * 
 * @param 波数是否为斜体
 * @type boolean
 * @on 是
 * @off 否
 * @desc true - 是，false - 否。
 * @default false
 *
 * @param 资源-当前波
 * @desc 显示当前波的图片资源。
 * @default 车轮战-当前波
 * @require 1
 * @dir img/Battle__ui/
 * @type file
 * 
 * @param 平移-当前波 X
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 220
 *
 * @param 平移-当前波 Y
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 240
 * 
 * @param 当前波持续时间
 * @type number
 * @min 1
 * @desc 当前波淡入淡出的持续时间。
 * @default 60
 *
 * @param 平移-当前波数值 X
 * @desc 以当前波的位置为基准。x轴方向平移，单位像素。（可为负数）
 * @default 10
 *
 * @param 平移-当前波数值 Y
 * @desc 以当前波的位置为基准。y轴方向平移，单位像素。（可为负数）
 * @default 10
 * 
 * @param 当前波字体大小
 * @type number
 * @min 1
 * @desc 当前波的字体大小。
 * @default 28
 * 
 * @param 当前波是否为斜体
 * @type boolean
 * @on 是
 * @off 否
 * @desc true - 是，false - 否。
 * @default true
 *
 * @help  
 * =============================================================================
 * +++ MOG - Consecutive Battles (v1.1) +++
 * By Moghunter 
 * https://mogplugins.wordpress.com/
 * =============================================================================
 * 在战斗中，连续遇到数波的敌人，击败所有敌人进入下一波。
 * 【现已支持插件关联资源的打包、加密】
 * ★★必须放在 mog战斗结果 插件的后面★★
 *
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.插件的作用域：战斗界面。
 *   作用于战斗系统。
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 资源路径：img/Battle__ui （Battle后面有两个下划线）
 * 先确保项目img文件夹下是否有Battle__ui文件夹。
 * 要查看所有关联资源文件的插件，可以去看看"插件清单.xlsx"。
 * 需要配置资源文件：
 *
 * 资源-波数框
 * 资源-当前波
 *
 * -----------------------------------------------------------------------------
 * ----激活条件
 * 要使得一场战斗变为车轮战，在触发第一波战斗前，使用插件指令：
 *
 * 插件指令：consecutive_battles : X,X,X,X,X,X......
 *
 * 参数X：敌群id
 *        敌群的编号，按顺序依次为：第二波,第三波……
 * 
 * -----------------------------------------------------------------------------
 * ----关于Drill_up优化：
 * [v1.1]
 * 使得该插件支持关联资源的打包、加密。
 * 部署时勾选去除无关文件，本插件中相关的文件不会被去除。
 * [v1.2]
 * 修改了插件关联的资源文件夹。
 * [v1.3]
 * 修复了车轮战的敌人图形会盖在战斗肖像的上面的bug。
 */
 //
 //（mog对于图层都是乱画，战斗肖像每次都被盖在下面，经过修正，总算是对齐了）
 //
 //

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================

  　var Imported = Imported || {};
　　Imported.MOG_ConsecutiveBattles = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_ConsecutiveBattles');
    Moghunter.consBat_SpriteWave = String(Moghunter.parameters['是否显示波数(该设置不能为false)'] || 'true');
	Moghunter.consBat_SpriteWaveX = Number(Moghunter.parameters['平移-波数框 X'] || 630);
	Moghunter.consBat_SpriteWaveY = Number(Moghunter.parameters['平移-波数框 Y'] || 0);
	Moghunter.consBat_SpriteWaveNumberX = Number(Moghunter.parameters['平移-波数值 X'] || 65);
	Moghunter.consBat_SpriteWaveNumberY = Number(Moghunter.parameters['平移-波数值 Y'] || 3);
	Moghunter.consBat_SpriteWaveNumberFontSize = Number(Moghunter.parameters['波数字体大小'] || 20);
	Moghunter.consBat_SpriteWaveNumberFontItalic = String(Moghunter.parameters['波数是否为斜体'] || 'false');
	
	Moghunter.consBat_SpriteTurn = String(Moghunter.parameters['是否显示当前波(该设置不能为false)'] || 'true');
    Moghunter.consBat_SpriteTurnX = Number(Moghunter.parameters['平移-当前波 X'] || 220);
	Moghunter.consBat_SpriteTurnY = Number(Moghunter.parameters['平移-当前波 Y'] || 240);
	Moghunter.consBat_SpriteTurnNumberX = Number(Moghunter.parameters['平移-当前波数值 X'] || 10);
	Moghunter.consBat_SpriteTurnNumberY = Number(Moghunter.parameters['平移-当前波数值 Y'] || 10);
    Moghunter.consBat_SpriteTurnNumberFontSize = Number(Moghunter.parameters['当前波字体大小'] || 34);
	Moghunter.consBat_SpriteTurnNumberFontItalic = String(Moghunter.parameters['当前波是否为斜体'] || 'true');
	Moghunter.consBat_SpriteTurnDuration = Number(Moghunter.parameters['当前波持续时间'] || 60);
	
	Moghunter.src_consBat_waveA = String(Moghunter.parameters['资源-波数框']);
	Moghunter.src_consBat_waveB = String(Moghunter.parameters['资源-当前波']);
	
//=============================================================================
// ** 资源文件夹
//=============================================================================
ImageManager.load_BattleUi = function(filename) {
    return this.loadBitmap('img/Battle__ui/', filename, 0, true);
};

//=============================================================================
// ** Game System
//=============================================================================

//==============================
// * initialize
//==============================
var _mog_consBat_gSys_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	_mog_consBat_gSys_initialize.call(this);
    this._consBat = {};
	this._consBat.enable = true;
	this._consBat.prepareSprite = false;
	this._consBat.index = 0;
	this._consBat.battles = [];
	this._consBat.rewards = [];
	this._consBatime = 0;
	this._consBaPhase = [false,false];
	this._consBaVisible = true;
	this._consBaTurnVisible = String(Moghunter.consBat_SpriteTurn) == "true" ? true : false;
	this._consBatWait = 0;
};

//==============================
// * clear ConsBat
//==============================
Game_System.prototype.clearConsBat = function() {
	this._consBat.enable = false;
	this._consBat.prepareSprite = false;
	this._consBat.index = 0;
	this._consBat.battles = [];
	this._consBat.rewards = [];
	this._consBatime = 0;
};

//=============================================================================
// ** Game_Interpreter
//=============================================================================	

//==============================
// * PluginCommand
//==============================
var _mog_cosBat_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_mog_cosBat_pluginCommand.call(this,command, args)
    this.setConsBattes(command, args);
	return true;
};

//==============================
// * set ConsBattes
//==============================
Game_Interpreter.prototype.setConsBattes = function(command, args) {
	if (command === "consecutive_battles")  {
		if (args[1]) {
			$gameSystem.clearConsBat();
			$gameSystem._consBat.enable = true;
			var battles = args[1].split(/,/)
			for (var i = 0; i < battles.length; i++) {
				var troopId = Number(battles[i]);
				if ($dataTroops[troopId]) {
					$gameSystem._consBat.battles.push(troopId);
				};
			};
			if ($gameSystem._consBat.battles.length === 0) {
				$gameSystem.clearConsBat();
			};
		};
	} else if (command === "hide_wave_number")  {
		     $gameSystem._consBaVisible = false;
	} else if (command === "show_wave_number")  {	 
		     $gameSystem._consBaVisible = true; 
	} else if (command === "hide_phase_animation")  {
		     $gameSystem._consBaTurnVisible = false;
	} else if (command === "show_phase_animation")  {	 
		     $gameSystem._consBaTurnVisible = true; 			 
    };
};

//=============================================================================
// ** Spriteset Battle
//=============================================================================

//==============================
// * create Enemies
//==============================
var _mog_consBat_sprtBat_createEnemies = Spriteset_Battle.prototype.createEnemies;
Spriteset_Battle.prototype.createEnemies = function() {
	_mog_consBat_sprtBat_createEnemies.call(this);
	this.createConBatField();
};

//==============================
// * create ConBat Field
//==============================
Spriteset_Battle.prototype.createConBatField = function() {
	if( this._conBatField  != undefined ){ return; }
	this._conBatField = new Sprite();
	this._battleField.addChild(this._conBatField);
	if (this._enemySprites && this._enemySprites[0]) {
		this._conBatField.z = this._enemySprites[0].z ? this._enemySprites[0] : 0;
	} else {
		this._conBatField.z = 0
	};
};

//==============================
// * update
//==============================
var _mog_consBat_sprtBat_update = Spriteset_Battle.prototype.update;
Spriteset_Battle.prototype.update = function() {
    _mog_consBat_sprtBat_update.call(this);
	
	if ($gameSystem._consBatWait > 0) {$gameSystem._consBatWait--};
	if ($gameSystem._consBat.prepareSprite && $gameSystem._consBatWait === 0) {
	    this.prepareConBatSprites()
	};
};

//==============================
// * prepare ConBat Sprites
//==============================
Spriteset_Battle.prototype.prepareConBatSprites = function() {
   $gameSystem._consBat.prepareSprite = false;
   this.prepareComBatBefore();
   this.removeEnemiesConBat();
   this.createEnemies();
   this.prepareComBatAfter();
   BattleManager.startBattle();
   if ($gameSystem._consBat.index >= $gameSystem._consBat.battles.length) {
	   $gameSystem._consBat.enable = false;
   }; 
};

//==============================
// * prepare Com Bat Before
//==============================
Spriteset_Battle.prototype.prepareComBatBefore = function() {
   if (Imported.MOG_BattleCameraFrontal) {$gameTemp.clearCamTemp()};
   /*if (Imported.MOG_BattlerMotion) {
       this.removeBMotionShadow();
       this.createBMotionShadow();
   };*/	
};

//==============================
// * prepare Com Bat After
//==============================
Spriteset_Battle.prototype.prepareComBatAfter = function() {
    if (Imported.MOG_HPGauge) {
        this.removeHPSprites();
        this.createHPSprites();
    };
    /*if (Imported.MOG_BattlerMotion) {
		for (var i = 0; i < this._enemySprites.length; i++) {
			var sprtEnemy = this._enemySprites[i];
			sprtEnemy.setIndexEm(i);
		};		
		this.addBMotionShadow();
	};*/
	if (Imported.MOG_BattleCursor) {
	    $gameTemp._needRefreshBattleCursor = true;
	};
	if ($gameSystem._consBaTurnVisible) {
    	$gameSystem._consBaPhase = [true,true];
	}; 
	if ($gameTemp._battleEnd != null) {
		$gameTemp._battleEnd = false;
	};
	if (Imported.MOG_ATB) {
    	$gameSystem._atbEventPhase = [0,0,0,false,false];
    	$gameSystem._atbEventPhase[3] = BattleManager.updateEventMain();
	};
};

//==============================
// * remove Enemies ConBat
//==============================
Spriteset_Battle.prototype.removeEnemiesConBat = function() {
   for (var i = 0; i < this._enemySprites.length; i++) {
	    this._battleField.removeChild(this._enemySprites[i]);
		this._conBatField.removeChild(this._enemySprites[i]);
   };   
};


//==============================
// * create Enemies ConBat（将敌人贴图获取后，重贴到_conBatField下）
//==============================
var _mog_consBat_sprtBat_createEnemies2 = Spriteset_Battle.prototype.createEnemies;
Spriteset_Battle.prototype.createEnemies = function() {
	_mog_consBat_sprtBat_createEnemies2.call(this);
	if( this._conBatField == undefined ){ return; }
			
	for( var i=0; i < this._enemySprites.length; i++ ){
		var e_sprite = this._enemySprites[i];
		if( e_sprite && e_sprite instanceof Sprite_Enemy ){
			this._conBatField.addChild( e_sprite );
		}
	}
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
// ** Scene Battle
//=============================================================================
var _mog_conBat_scBat_start = Scene_Battle.prototype.start;
Scene_Battle.prototype.start = function() {
	_mog_conBat_scBat_start.call(this);
	if ($gameSystem._consBaTurnVisible && $gameSystem._consBat.battles.length > 0) {
	    $gameSystem._consBaPhase = [true,true];
	};
};
//==============================
// * create Spriteset
//==============================
var _mog_conBat_createSpriteset = Scene_Battle.prototype.createSpriteset;
Scene_Battle.prototype.createSpriteset = function() {
	_mog_conBat_createSpriteset.call(this);
	if (!this._hudField) {this.createHudField()};
};

//==============================
// * create Display Objects
//==============================
var _mog_consBat_sbat_createDisplayObjects = Scene_Battle.prototype.createDisplayObjects;
Scene_Battle.prototype.createDisplayObjects = function() {
	_mog_consBat_sbat_createDisplayObjects.call(this);
	var wsprite = String(Moghunter.consBat_SpriteWave) == "true" ? true : false;
    if (wsprite) {
	    this.createWaveNSprite();
	    this.sortMz();
	};
};

//==============================
// * create Wave NSprite
//==============================
Scene_Battle.prototype.createWaveNSprite = function() {
    this._waveNCursor = new WaveNumber();
	this._waveNCursor.mz = 115;
	this._hudField.addChild(this._waveNCursor);
};

//==============================
// * need skip Battle Process CB
//==============================
Scene_Battle.prototype.needSkipBattleProcessCB = function() {
	if ($gameSystem._consBatime > 0) {return true};
	if ($gameSystem._consBaPhase[0]) {return true};
    return false;
};

//==============================
// * update Battle Process
//==============================
var _mog_consBat_sBat_updateBattleProcess = Scene_Battle.prototype.updateBattleProcess;
Scene_Battle.prototype.updateBattleProcess = function() {
	if (this.needSkipBattleProcessCB()) {
		$gameSystem._consBatime--;
		return;
	};
	_mog_consBat_sBat_updateBattleProcess.call(this);
};

//=============================================================================
// ** Battle Manager
//=============================================================================

//==============================
// * is Cons Battle
//==============================
BattleManager.isConsBattle = function() {
   if (!$gameSystem._consBat.enable) {return false};
   var troopID = $gameSystem._consBat.battles[$gameSystem._consBat.index]
   if (!$dataTroops[troopID]) {return false};
   return true;
};

//==============================
// * conBat
//==============================
BattleManager.prototype.conBat = function(switches) {
	if (!switches || switches.length === 0) {return}
	var swt = Math.randomInt(switches.length);
	var eswt = switches[swt]
    for (var i = 0; i < switches.length; i++) {
	     sch = Number(switches[i]);
		 if (sch === eswt) {
			 $gameSwitches.setValue(sch, true);
		 } else {
			 $gameSwitches.setValue(sch, false);
		 };
	};
};

//==============================
// * process Victory
//==============================
var _mog_conscBat_BatMngr_processVictory = BattleManager.processVictory;
BattleManager.processVictory = function() {
	if (this.isConsBattle()) {
	    this.prepareConBat();
		return	
	};
	this.getDataRewardsCB();
	_mog_conscBat_BatMngr_processVictory.call(this);
};

//==============================
// * prepare Con Bat
//==============================
BattleManager.prepareConBat = function() {
    this.getDataRewardsCB();
	this._phase = 'init';
	var troopID = $gameSystem._consBat.battles[$gameSystem._consBat.index]
    this._actorIndex = -1;
    this._actionForcedBattler = null;
    this._actionBattlers = [];
    this._subject = null;
    this._action = null;
    this._targets = [];	
    $gameTroop.setup(troopID);
    $gameScreen.onBattleStart();
    this.makeEscapeRatio();		
	$gameSystem._consBat.prepareSprite = true;
	$gameSystem._consBat.index++;
	$gameSystem._consBatime = 60;
	$gameSystem._consBatWait = 60;
	if ($gameTemp._battleEnd) {$gameTemp._battleEnd = false};   
	if (Imported.MOG_BossHP) {$gameTemp._forceCreateBossHud = true};
	if (Imported.MOG_ATB) {
		$gameTemp._refreshATBGauge = true;
		BattleManager.selectionComAtbClear();
		BattleManager.prepareInitialATBValue();
		$gameSystem._atbEventPhase = [0,0,0,false,false];
	};
};

//==============================
// * get Data Rewards CB
//==============================
BattleManager.getDataRewardsCB = function() {
	var index = $gameSystem._consBat.index
	$gameSystem._consBat.rewards[index] = {};
    $gameSystem._consBat.rewards[index].gold = $gameTroop.goldTotal();
    $gameSystem._consBat.rewards[index].exp = $gameTroop.expTotal();
    $gameSystem._consBat.rewards[index].items = $gameTroop.makeDropItems();
};

//==============================
// * make Rewards CB
//==============================
BattleManager.makeRewardsCB = function() {
    this._rewards = {};
	this._rewards.gold = 0;
	this._rewards.exp = 0;
	this._rewards.items = [];
	for (var i = 0; i < $gameSystem._consBat.rewards.length; i++) {
		var rwd = $gameSystem._consBat.rewards[i];
		this._rewards.gold += rwd.gold;
		this._rewards.exp += rwd.exp;
		for (var e = 0; e < rwd.items.length; e++) {
			 this._rewards.items.push(rwd.items[e]);
		};
	};
	$gameSystem._consBat.battles = [];
};

//==============================
// * make Rewards
//==============================
var _mog_cBat_BatMngr_makeRewards = BattleManager.makeRewards;
BattleManager.makeRewards = function() {
	if ($gameSystem._consBat.rewards.length > 0) {
		this.makeRewardsCB();
		return;
	};
	if ($gameTemp._battleEnd != null) {
		$gameTemp._battleEnd = true;
	};	
	_mog_cBat_BatMngr_makeRewards.call(this);
};

//==============================
// * end Battle
//==============================
var _mog_cBat_BatMngr_endBattle = BattleManager.endBattle;
BattleManager.endBattle = function(result) {
	$gameSystem.clearConsBat();
	_mog_cBat_BatMngr_endBattle.call(this,result);	
};

//==============================
// * display Start Messages
//==============================
var _mog_cBat_BatMngr_displayStartMessages = BattleManager.displayStartMessages;
BattleManager.displayStartMessages = function() {
	if ($gameSystem._consBat.index > 0) {return};
	_mog_cBat_BatMngr_displayStartMessages.call(this);
};

//=============================================================================
// * WaveNumber
//=============================================================================
function WaveNumber() {
    this.initialize.apply(this, arguments);
};

WaveNumber.prototype = Object.create(Sprite.prototype);
WaveNumber.prototype.constructor = WaveNumber;

//==============================
// * Initialize
//==============================
WaveNumber.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);	
	this.setup();
	this.createSprites();
};

//==============================
// * Setup 
//==============================
WaveNumber.prototype.setup = function() {
	this._waveIndex = this.data().index;
	this._mwaveIndex = this.data().battles.length;	
	this._showTurn = $gameSystem._consBaTurnVisible;
	this.opacity = 0;

};

//==============================
// * create Sprites
//==============================
WaveNumber.prototype.createSprites = function() {
     this.createLayout();
	 this.createNumber();
	 if (this._showTurn) {
		 this.createTurnLayout();
		 this.createTurnNumber();
	 };
};

//==============================
// * create Layout
//==============================
WaveNumber.prototype.createLayout = function() {
     this._layout = new Sprite(ImageManager.load_BattleUi(Moghunter.src_consBat_waveA));
     this._layout.x = Moghunter.consBat_SpriteWaveX;
	 this._layout.y = Moghunter.consBat_SpriteWaveY;	 
	 this.addChild(this._layout);
};

//==============================
// * Data
//==============================
WaveNumber.prototype.data = function() {
	 return $gameSystem._consBat;
};

//==============================
// * create Number
//==============================
WaveNumber.prototype.createNumber = function() {
     this._number = new Sprite(new Bitmap(160,48));
	 this._number.bitmap.fontSize = Moghunter.consBat_SpriteWaveNumberFontSize;
     this._number.bitmap.fontItalic = String(Moghunter.consBat_SpriteWaveNumberFontItalic) === "true" ? true : false;
	 this._number.x = this._layout.x + Moghunter.consBat_SpriteWaveNumberX;
	 this._number.y = this._layout.y + Moghunter.consBat_SpriteWaveNumberY;
	 this.addChild(this._number)
	 this.refreshWaveNumber();
};

//==============================
// * Refresh Wave Number
//==============================
WaveNumber.prototype.refreshWaveNumber = function() {
	 this._waveIndex = this.data().index;
	 this._mwaveIndex = this.data().battles.length;	
	 if (this._mwaveIndex === 0) {return};
	 this._number.bitmap.clear();	 
	 var wave =  this._waveIndex + 1;
	 var mwave = this._mwaveIndex + 1;
	 var text = String(wave + "/" + mwave)
	 this._number.bitmap.drawText(text,0,0,this._number.width - 5,this._number.height - 5,"center");
};

//==============================
// * need Refresh Wave Number
//==============================
WaveNumber.prototype.needRefreshWaveNumber = function() {
    if (this._waveIndex != this.data().index) {return true};
	if (this._mwaveIndex != this.data().battles.length) {return true};
    return false;
};

//==============================
// * create Turn Layout
//==============================
WaveNumber.prototype.createTurnLayout = function() {
    this._layoutTurn = new Sprite(ImageManager.load_BattleUi(Moghunter.src_consBat_waveB ));
	this._layoutTurn.x = Moghunter.consBat_SpriteTurnX;
	this._layoutTurn.y = Moghunter.consBat_SpriteTurnY;
	this._layoutTurn.org = [-1,-1];
	this._layoutTurn.visible = false;
	this._layoutTurn.anchor.x = 0.5;
	this._layoutTurn.anchor.y = 0.5;
	this._layoutTurnPhase = [0,60];
	this.addChild(this._layoutTurn);   
};

//==============================
// * create Turn Number
//==============================
WaveNumber.prototype.createTurnNumber = function() {
   this._numberTurn = new Sprite(new Bitmap(300,48));
   this._numberTurn.bitmap.fontSize = Moghunter.consBat_SpriteTurnNumberFontSize;
   this._numberTurn.bitmap.fontItalic = String(Moghunter.consBat_SpriteTurnNumberFontItalic) === "true" ? true : false;
   this._numberTurn.x = Moghunter.consBat_SpriteTurnNumberX;
   this._numberTurn.y = Moghunter.consBat_SpriteTurnNumberY;
   this._numberTurn.org = [this._numberTurn.x,this._numberTurn.y];
   this._numberTurn.anchor.x = 0.5;
   this._numberTurn.anchor.y = 0.5;
   this.addChild(this._numberTurn);
   this.refreshNumberTurn();
};

//==============================
// * refresh Number Turn
//==============================
WaveNumber.prototype.refreshNumberTurn = function() {
 	 this._numberTurn.bitmap.clear();	
	 var waveWord = String(Moghunter.consBat_SpriteWaveWord) 
	 var wave =  this._waveIndex + 1;
	 var mwave = this._mwaveIndex + 1;
	 var text = String(wave + "/" + mwave)
	 this._numberTurn.bitmap.drawText(text,0,0,this._numberTurn.width - 5,this._numberTurn.height - 5,"center");

};

//==============================
// * need Fade
//==============================
WaveNumber.prototype.needFade = function() {
	if ($gameMessage.isBusy()) {return true};
	if (this._mwaveIndex === 0) {return true};
	if (!$gameSystem._consBaVisible) {return true};
	return false;
};

//==============================
// * Update Visible
//==============================
WaveNumber.prototype.updateVisible = function() {
	if (this.needFade()) {
	    this.opacity -= 10;
	} else {
    	this.opacity += 10;
	};
};

//==============================
// * get Data
//==============================
WaveNumber.prototype.getData = function() {
	this._layoutTurn.org[0] = this._layoutTurn.x + (this._layoutTurn.width / 2) ;
	this._layoutTurn.org[1] = this._layoutTurn.y + (this._layoutTurn.height / 2);
};

//==============================
// * needRefreshTurnNumber
//==============================
WaveNumber.prototype.needRefreshTurnNumber = function() {
	if (!$gameSystem._consBaPhase[0]) {return false};
	if (!$gameSystem._consBaPhase[1]) {return false};
	return true;
};

//==============================
// * refresh Turn Number
//==============================
WaveNumber.prototype.refreshTurnNumber = function() {
	$gameSystem._consBaPhase[1] = false;
	this.opacity = 255
 	this._layoutTurn.x = this._layoutTurn.org[0] - 60;
	this._layoutTurn.y = this._layoutTurn.org[1];
	this._layoutTurn.opacity = 0;
	this._layoutTurn.visible = true;
	this._layoutTurnPhase = [0,60];
	this.refreshNumberTurn();
};

//==============================
// * update Slide
//==============================
WaveNumber.prototype.updateSlide = function() {
	if (this._layoutTurnPhase[0] === 0) {
		if (this._layoutTurn.x < this._layoutTurn.org[0]) {
			this._layoutTurn.x += 1
			this._layoutTurn.opacity += 5;
			if (this._layoutTurn.x >= this._layoutTurn.org[0]) {
				this._layoutTurn.x = this._layoutTurn.org[0];
				this._layoutTurn.opacity = 255;
				this._layoutTurnPhase = [1,Moghunter.consBat_SpriteTurnDuration];
			};
		};
	} else if (this._layoutTurnPhase[0] === 1) {
		this._layoutTurnPhase[1]--;
		if (this._layoutTurnPhase[1] <= 0) {
			this._layoutTurnPhase[0] = 2
		};
	} else if (this._layoutTurnPhase[0] === 2) {
			this._layoutTurn.x += 1;
			this._layoutTurn.opacity -= 5;
			if (this._layoutTurn.opacity <= 0) {
				this._layoutTurnPhase[0] = 3;
				this._layoutTurn.visible = false;
				$gameSystem._consBaPhase[0] = false;
			};
	};
};

//==============================
// * update Turn Sprites
//==============================
WaveNumber.prototype.updateTurnSprites = function() {
	if (this._layoutTurn.org[0] === -1) {
	    if (this._layoutTurn.bitmap.isReady()) {
			this.getData();
		};
	    return;
	};
	if (this.opacity === 0) {return};
	if (this.needRefreshTurnNumber()) {this.refreshTurnNumber()};
    this.updateSlide();
	this._numberTurn.x = this._layoutTurn.x + this._numberTurn.org[0];
	this._numberTurn.y = this._layoutTurn.y + this._numberTurn.org[1];
	this._numberTurn.opacity = this._layoutTurn.opacity;
	this._numberTurn.visible = this._layoutTurn.visible;
};

//==============================
// * Update
//==============================
WaveNumber.prototype.update = function() {
    Sprite.prototype.update.call(this);	
	this.updateVisible();	
    if (this.needRefreshWaveNumber()) {this.refreshWaveNumber()};
	if (this._layoutTurn) {this.updateTurnSprites()};
};