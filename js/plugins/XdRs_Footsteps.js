//=================================================================================================
// Footsteps.js
//=================================================================================================
/*:
 * @target MZ
 * @plugindesc 脚步声 <MV + MZ>
 * @author 芯☆淡茹水
 * @help
 *
 * 〓 说明 〓
 * 
 * 1，该插件以铺设不同的 区域ID 来播放该 区域ID 设置的脚步声。
 * 2，同一种地面（区域ID）的脚步声有两声（左/右脚声音有细微的差别）
 *    当然你也可以两个设置成相同的声音，或者只设置一个声音。
 * 
 * 
 * @param stepPattern1
 * @type number
 * @text 第一声脚步声样式序号
 * @desc 第一声脚步在行走图第几个动作样式时响起？（从 0 开始，第一个行走图动作样式序号是 0）
 * @default 0
 * 
 * @param stepPattern2
 * @type number
 * @text 第二声脚步声样式序号
 * @desc 第二声脚步在行走图第几个动作样式时响起？（从 0 开始，第一个行走图动作样式序号是 0）
 * @default 2
 * 
 * 
 * @param region1
 * @text 区域脚步声设置
 * @type struct<step>
 * @default 
 * 
 * @param region2
 * @text 区域脚步声设置
 * @type struct<step>
 * @default 
 * 
 * @param region3
 * @text 区域脚步声设置
 * @type struct<step>
 * @default 
 * 
 * @param region4
 * @text 区域脚步声设置
 * @type struct<step>
 * @default 
 * 
 * @param region5
 * @text 区域脚步声设置
 * @type struct<step>
 * @default 
 * 
 * @param region6
 * @text 区域脚步声设置
 * @type struct<step>
 * @default 
 * 
 * @param region7
 * @text 区域脚步声设置
 * @type struct<step>
 * @default 
 * 
 * @param region8
 * @text 区域脚步声设置
 * @type struct<step>
 * @default 
 * 
 * @param region9
 * @text 区域脚步声设置
 * @type struct<step>
 * @default
 * 
 * @param region10
 * @text 区域脚步声设置
 * @type struct<step>
 * @default 
 * 
 */
/* ---------------------------------------------------------------------------
 * struct<step>
 * ---------------------------------------------------------------------------
*/
 /*~struct~step: 
 *
 * @param regionId
 * @type number
 * @text 区域ID
 * @desc 区域ID。
 * @default 0
 * 
 * @param se1
 * @text 第一声脚步声SE文件名
 * @desc 第一声脚步声SE文件名。
 * @default
 * 
 * @param se2
 * @text 第二声脚步声SE文件名
 * @desc 第二声脚步声SE文件名。
 * @default
*/
//=================================================================================================
;var XdRsData = XdRsData || {};
XdRsData.footsteps = XdRsData.footsteps || {};
XdRsData.footsteps.parameters = PluginManager.parameters('XdRs_Footsteps');
//=================================================================================================
XdRsData.footsteps.setup = function() {
    this._data = {};
    for (var i=1;i<=10;++i) {
        if (this.parameters['region'+i]) {
            var struct = JSON.parse(this.parameters['region'+i]);
            var regionId = parseInt(struct.regionId);
            if (regionId > 0) {
                this._data[regionId] = [struct.se1, struct.se2];
            }
        }
    }
};
XdRsData.footsteps.stepType = function(pattern) {
    if (parseInt(this.parameters['stepPattern1']) === pattern) return 1;
    if (parseInt(this.parameters['stepPattern2']) === pattern) return 2;
    return 0;
};
XdRsData.footsteps.display = function(regionId, pattern) {
    var type = this.stepType(pattern);
    if (this._data && !!this._data[regionId] && type > 0) {
        var seName = this._data[regionId][type-1];
        var vol = ConfigManager.seVolume;
        if (!!seName && !!vol) {
            AudioManager.playSe({"name":seName,"volume":vol,"pitch":100,"pan":0}); 
        } 
    }
};
//=================================================================================================
XdRsData.footsteps.SceneManager_initialize = SceneManager.initialize;
SceneManager.initialize = function() {
    XdRsData.footsteps.setup();
    XdRsData.footsteps.SceneManager_initialize.call(this);
};
//=================================================================================================
XdRsData.footsteps.Game_Player_updatePattern = Game_Player.prototype.updatePattern;
Game_Player.prototype.updatePattern = function() {
    var tmp = this._pattern;
    XdRsData.footsteps.Game_Player_updatePattern.call(this);
    if (this.isMoving() && tmp !== this._pattern) {
        XdRsData.footsteps.display($gameMap.regionId(this._x, this._y), this._pattern);
    }
};
//=================================================================================================
// end
//=================================================================================================