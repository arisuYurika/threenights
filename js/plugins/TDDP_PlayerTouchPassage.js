//=============================================================================
// TDDP_PlayerTouchPassage.js
// Version: 1.0.1
//=============================================================================
var Imported = Imported || {};
Imported.TDDP_PlayerTouchPassage = "1.0.1";
//=============================================================================
/*:
 * @plugindesc (v1.01)[v1.0] 物体 - 鼠标寻路不停止
 *
 * @author Tor Damian Design / Galenmereth
 *
 * @help
 * =============================================================================
 * +++ TDDP_PlayerTouchPassage (v1.01) +++
 * By Tor Damian Design / Galenmereth （正版rmmv自带的插件）
 * http://mvplugins.tordamian.com/?p=388
 * =============================================================================
 * 鼠标单击某一个地方，如果中途触发了某个事件，
 * 角色就会停下来。这个插件可以使得角色不停走动。
 * （比如一路捡钱，不停止走动。）
 * 如果遇到对话框或者阻止角色移动的事件，角色还是会停止走动的。
 *
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.插件的作用域：地图界面。
 * 2.插件 ON 则直接生效。
 * 
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Terms & Conditions
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * This plugin is free for both non-commercial and commercial use. Please see
 * http://mvplugins.tordamian.com/terms-of-use for the full terms of use.
 */

/*:ja
 * @plugindesc マウスもしくはタッチインプットの使用時、
 * イベントタッチ後にもプレイヤーキャラクターが歩き続けます。
 *
 * @author Tor Damian Design / Galenmereth
 *
 * @help =~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~
 * Information
 * =~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~
 * アップデートと簡易使用方法については、
 * こちらのプラグインのサイトを参照してください。
 * http://mvplugins.tordamian.com/?p=388
 * このサイトでは、オフラインで使用するためのPDFをダウンロードすることができます。
 * またいつでも最新版の確認を行なうことができます。
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Terms & Conditions
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * このプラグインは、商用利用・非商用利用どちらにもフリーで公開されています。
 * 使用方法の全文についてはこちらのサイトを確認してください。
 * http://mvplugins.tordamian.com/terms-of-use 
 */
(function() {
    /**
    * MODIFIED
    */
    Game_Player.prototype.canMove = function() {
        if ($gameMessage.isBusy()) {
            return false;
        }
        // If Yanfly Region Events is enabled, enable check
        if (Imported.YEP_RegionEvents) {
            if ($gameMap.isEventRunning() && $gameMap.moveAfterCommonEvent()) {
              return true;
            }
        }
        // Added logic to check if running event should be blocking
        if ($gameMap.isEventRunning() && this.eventIsBlocking()) {
            return false;
        }
        if (this.isMoveRouteForcing() || this.areFollowersGathering()) {
            return false;
        }
        if (this._vehicleGettingOn || this._vehicleGettingOff) {
            return false;
        }
        if (this.isInVehicle() && !this.vehicle().canMove()) {
            return false;
        }
        return true;
    };
    /**
    * NEW check if event should be blocking mouse movement
    */
    Game_Player.prototype.eventIsBlocking = function() {
        interpreter = $gameMap._interpreter;
        if (!interpreter._list) return false;
        id = interpreter.eventId();
        event = $gameMap.event(id);
        // Return unless event
        if (!event) return false;
        // Event must be player touch or event touch to not block
        if (event._trigger < 1 || event._trigger > 2) {
            return true;
        }
        // Event must be below character or through to not block
        if (!event.isThrough() && event._priorityType > 0) {
            return true; // It should block
        }
        // Let's  check what event calls are in this active event
        return interpreter._list.some(function(event_call) {
            return [
                201, // Transfer Player
                205, // Move Route
                230, // Wait
                232, // Move Picture
                261, // Play Movie
                301, // Battle Processing
            ].indexOf(event_call.code) >= 0
        });
    };
})();
