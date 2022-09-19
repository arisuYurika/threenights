//=================================================================================================
// Map_Fog.js
//=================================================================================================
/*:
 * @target MZ
 * @plugindesc 地图黑雾遮罩 + 视野限制
 * @author 芯☆淡茹水
 * @help
 *
 * 〓 说明 〓
 * 1， 不需要黑雾的地图，在地图备注里写： <NoFog>
 * 
 * 2,  不受视野限制的地图，在地图备注里写： <NoViewLimit>
 * 
 * 3,  受角色视野限制的事件，在事件备注里写： <ViewLimit>
 * 
 * 4,  该插件的黑雾遮罩功能不支持 循环地图 ！
 * 
 * 5， MV插件命令：
 * 
 *     <A> 消除某张地图的黑雾 => DissipateFog mapId
 *         mapId :地图ID（缺省不写时，默认为 当前地图）。
 * 
 *     <B> 打开某个地图某坐标视野 => OpenFogView x y mapId
 *         x : 地图 X 坐标。
 *         y : 地图 Y 坐标。
 *         mapId :地图ID（缺省不写时，默认为 当前地图）。
 * 
 *     <C> 更改角色视野半径 => ChangePlayerView n
 *         n :视野半径（地图格子数）。
 * 
 *     <D> 解除某张地图视野限制 => UnlockViewLimit mapId
 *         mapId :地图ID（缺省不写时，默认为 当前地图）。
 * 
 *     <E> 地图全开（消除地图黑雾 + 解除地图视野限制） => FullyOpenMap
 *         mapId :地图ID（缺省不写时，默认为 当前地图）。
 * 
 * 
 * 
 * @param view
 * @type number
 * @text 视野半径
 * @desc 角色初始视野半径(地图格子数)。
 * @default 4
 * 
 * @param width
 * @type number
 * @text 渐变宽度
 * @desc 黑雾边缘渐变宽度(像素)。
 * @default 30
 * 
 * @param opacity
 * @type number
 * @text 视野限制图层的不透明度
 * @desc 视野限制图层的不透明度(0 ~ 255)。
 * @default 160
 * 
 * 
 * @param ========================
 * @default ======================
 * 
 * @command DissipateMapFog
 * @text 黑雾消散
 * @desc 消散某个地图的黑雾。
 * 
 * @arg mapId
 * @type number
 * @default
 * @text 消散黑雾的地图ID
 * @desc 缺省不写时，默认为 当前地图 。
 * 
 * 
 * @command DispelMapFog
 * @text 打开视野
 * @desc 打开当前地图某坐标点的视野。
 * 
 * @arg mapId
 * @type number
 * @default
 * @text 地图ID
 * @desc 开视野的地图ID, 缺省不写时，默认为 当前地图 。
 * 
 * @arg x
 * @type number
 * @default 0
 * @text X 坐标
 * @desc 地图坐标点 X 。
 * 
 * @arg y
 * @type number
 * @default 0
 * @text Y 坐标
 * @desc 地图坐标点 Y 。
 * 
 * 
 * @command UnlockViewLimit
 * @text 解除视野限制
 * @desc 解除视野限制。
 * 
 * @arg mapId
 * @type number
 * @default
 * @text 地图ID
 * @desc 解除视野限制的地图ID, 缺省不写时，默认为 当前地图 。
 * 
 * 
 * @command FullyOpenMap
 * @text 地图全开
 * @desc 消除地图黑雾 + 解除地图视野限制。
 * 
 * @arg mapId
 * @type number
 * @default
 * @text 地图ID
 * @desc 地图全开的地图ID, 缺省不写时，默认为 当前地图 。
 * 
 * 
 * @command ChangePlayerView
 * @text 更改角色视野
 * @desc 更改角色视野。
 * 
 * @arg view
 * @type number
 * @default 4
 * @text 视野半径
 * @desc 角色视野半径(地图格子数)。
 * 
 * 
 */
//=================================================================================================
;((isMZ) => {
//=================================================================================================
const pluginName = 'XdRs_MapFog';
const parameters = PluginManager.parameters(pluginName);
//=================================================================================================
if (isMZ) {
    PluginManager.registerCommand(pluginName, 'DissipateMapFog', args => {
        $gameSystem.dissipateMapFog(parseInt(args.mapId));
    });
    PluginManager.registerCommand(pluginName, 'DispelMapFog', args => {
        $gameTemp.requestDispelMapFog(parseInt(args.mapId), parseInt(args.x), parseInt(args.y));
    });
    PluginManager.registerCommand(pluginName, 'UnlockViewLimit', args => {
        $gameSystem.unlockMapViewLimit(parseInt(args.mapId));
    });
    PluginManager.registerCommand(pluginName, 'FullyOpenMap', args => {
        $gameSystem.fullyOpenMap(parseInt(args.mapId));
    });
    PluginManager.registerCommand(pluginName, 'ChangePlayerView', args => {
        $gamePlayer.changeFogViewRadius(parseInt(args.view));
    });
} else {
    const XR_Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        XR_Game_Interpreter_pluginCommand.call(this, command, args);
        command === 'FullyOpenMap' && $gameSystem.fullyOpenMap(parseInt(args[0]));
        command === 'DissipateFog' && $gameSystem.dissipateMapFog(parseInt(args[0]));
        command === 'UnlockViewLimit' && $gameSystem.unlockMapViewLimit(parseInt(args[0]));
        command === 'ChangePlayerView' && $gamePlayer.changeFogViewRadius(parseInt(args[0]));
        command === 'OpenFogView'  && $gameTemp.requestDispelMapFog(parseInt(args[2]), parseInt(args[0]), parseInt(args[1]));
    };
}
//=================================================================================================
Bitmap.prototype.reverseDrawCircle = function(x, y, r1, r2) {
    const context = this._context;
    context.globalCompositeOperation = 'lighten';
    const rg = context.createRadialGradient(x, y, r2, x, y, r1);
	rg.addColorStop(0, 'rgba(255,255,255,255)');
	rg.addColorStop(1, 'rgba(0,0,0,255)');
	context.fillStyle = rg;
    context.fillRect(x - r1, y - r1, r1 * 2, r1 * 2);
    context.restore();
    this._baseTexture.update();
};
//=================================================================================================
// 预留小地图获取地图黑雾精灵。
SceneManager.getMapFogSprite = function() {
    if (this._scene && this._scene.constructor === Scene_Map) {
        return this._scene._spriteset.mapFogSprite();
    }
    return null;
};
//=================================================================================================
Game_Temp.prototype.dispelMapFogPoint = function() {
    return this._dispelMapFogPoint;
};
Game_Temp.prototype.clearDispelMapFogPoint = function() {
    this._dispelMapFogPoint = null;
};
Game_Temp.prototype.requestDispelMapFog = function(mapId, x, y) {
    mapId = mapId || $gameMap.mapId();
    if (!$gameSystem.isMapFogDissipated(mapId)) {
        $gameSystem.onMapPointPass(mapId, x, y);
        if (mapId === $gameMap.mapId()) {
            this._dispelMapFogPoint = new Point(x, y);
        }
    }
};
//=================================================================================================
const XR_Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    XR_Game_System_initialize.call(this);
    this._passedMapData = {};
    this._fogDissipatedMaps = [];
    this._unlockedViewLimitMaps = [];
};
Game_System.prototype.dissipateMapFog = function(mapId) {
    mapId = mapId || $gameMap.mapId();
    if (!this.isMapFogDissipated(mapId)) {
        this._fogDissipatedMaps.push(mapId);
        delete this._passedMapData[mapId];
    }
};
Game_System.prototype.isMapFogDissipated = function(mapId) {
    return this._fogDissipatedMaps.contains(mapId);
};
Game_System.prototype.mapPassedPoints = function(mapId) {
    return this._passedMapData[mapId] || [];
};
Game_System.prototype.onMapPointPass = function(mapId, x, y) {
    const point = ''+x+'_'+y;
    this._passedMapData[mapId] = this.mapPassedPoints(mapId);
    if (!this._passedMapData[mapId].contains(point)) {
        this._passedMapData[mapId].push(point);
    }
};
Game_System.prototype.isMapViewLimitUnlocked = function(mapId) {
    return this._unlockedViewLimitMaps.contains(mapId);
};
Game_System.prototype.unlockMapViewLimit = function(mapId) {
    mapId = mapId || $gameMap.mapId();
    if (!this.isMapViewLimitUnlocked(mapId)) {
        this._unlockedViewLimitMaps.push(mapId);
    }
};
Game_System.prototype.fullyOpenMap = function(mapId) {
    this.dissipateMapFog(mapId);
    this.unlockMapViewLimit(mapId);
};
//=================================================================================================
const XR_Game_Map_setup = Game_Map.prototype.setup;
Game_Map.prototype.setup = function(mapId) {
    XR_Game_Map_setup.call(this, mapId);
    this._needFog = !(/<NoFog>/.test($dataMap.note));
    this._isViewLimit = !(/<NoViewLimit>/.test($dataMap.note));
};
Game_Map.prototype.hasFog = function() {
    return this._needFog && !$gameSystem.isMapFogDissipated(this._mapId);
};
Game_Map.prototype.isViewLimit = function() {
    return this._isViewLimit && !$gameSystem.isMapViewLimitUnlocked(this._mapId);
};
//=================================================================================================
Game_CharacterBase.prototype.isViewLimit = function() {
    return false;
};
Game_CharacterBase.prototype.isInPlayerView = function() {
    if (this.isViewLimit()) {
        const r = $gamePlayer.fogViewRadius();
        const dx = $gamePlayer.screenX() - this.screenX();
        const dy = $gamePlayer.screenY() - this.screenY();
        return (Math.pow(dx, 2) + Math.pow(dy, 2)) <= Math.pow(r, 2);
    }
    return true;
};
const XR_Game_CharacterBase_isTransparent = Game_CharacterBase.prototype.isTransparent;
Game_CharacterBase.prototype.isTransparent = function() {
    return !this.isInPlayerView() || XR_Game_CharacterBase_isTransparent.call(this);
};
//=================================================================================================
const XR_Game_Player_initMembers = Game_Player.prototype.initMembers;
Game_Player.prototype.initMembers = function() {
    XR_Game_Player_initMembers.call(this);
    this.changeFogViewRadius(parseInt(parameters['view']));
};
Game_Player.prototype.fogViewRadius = function() {
    return (this._fogViewRadius + 0.5) * $gameMap.tileHeight();
};
Game_Player.prototype.changeFogViewRadius = function(radius) {
    radius = radius || 4;
    this._fogViewRadius = Math.max(1, radius);
};
Game_Player.prototype.mapFogX = function() {
    return (this._realX + 0.5) * $gameMap.tileWidth();
};
Game_Player.prototype.mapFogY = function() {
    return (this._realY + 0.5) * $gameMap.tileHeight();
};
//=================================================================================================
Game_Event.prototype.isViewLimit = function() {
    return $gameMap.isViewLimit() && !!this.event().meta.ViewLimit;
};
//=================================================================================================
function Sprite_MapFog() {
    this.initialize(...arguments);
}
Sprite_MapFog.prototype = Object.create(Sprite.prototype);
Sprite_MapFog.prototype.constructor = Sprite_MapFog;
Sprite_MapFog.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);
    this.blendMode = 2;
    this.createBitmap();
    this.setupMapPassed();
};
Sprite_MapFog.prototype.createBitmap = function() {
    const w = $gameMap.width() * $gameMap.tileWidth();
    const h = $gameMap.height() * $gameMap.tileHeight();
    this.bitmap = new Bitmap(w, h);
    this.bitmap.fillAll('rgb(0,0,0)');
};
Sprite_MapFog.prototype.setupMapPassed = function() {
    const arr = $gameSystem.mapPassedPoints($gameMap.mapId());
    for (let sym of arr) {
        const tmp = sym.split('_');
        const x = (parseInt(tmp[0]) + 0.5) * $gameMap.tileWidth();
        const y = (parseInt(tmp[1]) + 0.5) * $gameMap.tileHeight();
        this.dispel(x, y);
    }
};
Sprite_MapFog.prototype.dispel = function(x, y) {
    const r = $gamePlayer.fogViewRadius();
    const width = parseInt(parameters['width']) || 1;
    this.bitmap.reverseDrawCircle(x, y, r, r - width);
};
Sprite_MapFog.prototype.isPlayerMoved = function() {
    return this._dataX !== $gamePlayer.mapFogX() ||
           this._dataY !== $gamePlayer.mapFogY();
};
Sprite_MapFog.prototype.isPlayerCodChanged = function() {
    return this._codX !== $gamePlayer.x ||
           this._codY !== $gamePlayer.y ||
           this._codMap !== $gameMap.mapId();
};
Sprite_MapFog.prototype.recordMapPassed = function() {
    this._codX = $gamePlayer.x;
    this._codY = $gamePlayer.y;
    this._codMap = $gameMap.mapId();
    $gameSystem.onMapPointPass(this._codMap, this._codX, this._codY);
};
Sprite_MapFog.prototype.update = function() {
    Sprite.prototype.update.call(this);
    this.updateVisibility();
    if (this.visible) {
        this.updatePlayerMove();
        this.updateTempRequest();
        this.updatePosition();
    }
};
Sprite_MapFog.prototype.updateVisibility = function() {
    this.visible = $gameMap.hasFog();
};
Sprite_MapFog.prototype.updatePlayerMove = function() {
    if (this.isPlayerMoved()) {
        this._dataX = $gamePlayer.mapFogX();
        this._dataY = $gamePlayer.mapFogY();
        this.dispel(this._dataX, this._dataY);
    }
    if (this.isPlayerCodChanged()) {
        this.recordMapPassed();
    }
};
Sprite_MapFog.prototype.updateTempRequest = function() {
    if ($gameTemp.dispelMapFogPoint()) {
        const point = $gameTemp.dispelMapFogPoint();
        const x = (point.x + 0.5) * $gameMap.tileWidth();
        const y = (point.y + 0.5) * $gameMap.tileHeight();
        $gameTemp.clearDispelMapFogPoint();
        this.dispel(x, y);
    }
};
Sprite_MapFog.prototype.updatePosition = function() {
    this.x = -($gameMap.displayX() * $gameMap.tileWidth());
    this.y = -($gameMap.displayY() * $gameMap.tileHeight());
};
//=================================================================================================
function Sprite_PlayerView() {
    this.initialize(...arguments);
}
Sprite_PlayerView.prototype = Object.create(Sprite.prototype);
Sprite_PlayerView.prototype.constructor = Sprite_PlayerView;
Sprite_PlayerView.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);
    this.opacity = parseInt(parameters['opacity']) || 160;
    this.anchor = new Point(0.5, 0.5);
    this.blendMode = 2;
    this.refreshBitmap();
};
Sprite_PlayerView.prototype.refreshBitmap = function() {
    if (this.bitmap && this.bitmap.destroy) this.bitmap.destroy();
    const x = Graphics.width, y = Graphics.height;
    const width = parseInt(parameters['width']) || 1;
    this._view = $gamePlayer.fogViewRadius();
    this.bitmap = new Bitmap(x * 2, y * 2);
    this.bitmap.fillAll('rgb(0,0,0)');
    this.bitmap.reverseDrawCircle(x, y, this._view, this._view - width);
};
Sprite_PlayerView.prototype.update = function() {
    Sprite.prototype.update.call(this);
    this.updateVisibility();
    if (this.visible) {
        this.updatePlayerView();
        this.updatePosition();
    }
};
Sprite_PlayerView.prototype.updateVisibility = function() {
    this.visible = $gameMap.isViewLimit();
};
Sprite_PlayerView.prototype.updatePlayerView = function() {
    if (this._view !== $gamePlayer.fogViewRadius()) {
        this.refreshBitmap();
    }
};
Sprite_PlayerView.prototype.updatePosition = function() {
    this.x = $gamePlayer.screenX();
    this.y = $gamePlayer.screenY() - $gameMap.tileHeight() / 2;
};
//=================================================================================================
const XR_Spriteset_Map_createUpperLayer = Spriteset_Map.prototype.createUpperLayer;
Spriteset_Map.prototype.createUpperLayer = function() {
    if ($gameMap.isViewLimit()) {
        this._playerViewSprite = new Sprite_PlayerView();
        this.addChild(this._playerViewSprite);
    }
    if ($gameMap.hasFog()) {
        this._mapFogSprite = new Sprite_MapFog();
        this.addChild(this._mapFogSprite);
    }
    XR_Spriteset_Map_createUpperLayer.call(this);
};
Spriteset_Map.prototype.mapFogSprite = function() {
    return this._mapFogSprite;
};
//=================================================================================================
})(Utils.RPGMAKER_NAME === 'MZ');
//=================================================================================================
// end
//=================================================================================================