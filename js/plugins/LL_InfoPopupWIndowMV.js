//=============================================================================
// RPGツクールMV - LL_InfoPopupWIndowMV.js v1.1.1
//-----------------------------------------------------------------------------
// ルルの教会 (Lulu's Church)
// https://nine-yusha.com/
//
// URL below for license details.
// https://nine-yusha.com/plugin/
//=============================================================================

/*:
 * @target MV
 * @plugindesc ポップアップでインフォメッセージを表示します。
 * @author ルルの教会
 * @url https://nine-yusha.com/plugin-infowindow/
 *
 * @help LL_InfoPopupWIndowMV.js
 *
 * ポップアップでインフォメッセージを表示します。
 * アイテム入手メッセージや、各種イベントメッセージなどに使えます。
 * ウィンドウを表示するにはプラグインコマンドを実行してください。
 *
 * プラグインコマンド:
 *   LL_InfoPopupWIndowMV showWindow [表示内容] [表示時間] [X座標] [Y座標] [背景]
 *     表示内容: 各種制御文字が使用可能、複数行表示は不可。
 *     表示時間: ウィンドウの表示時間 (1/60秒、-1を入力すると継続表示)
 *     X・Y座標: autoと入力すると中央に自動で表示。
 *     背景:     0=ウィンドウ、1=暗くする、2=透明
 *
 *   LL_InfoPopupWIndowMV hideWindow
 *     表示中のインフォメッセージを消去します。
 *
 *   【例】
 *   LL_InfoPopupWIndowMV showWindow ここにメッセージ内容を入力 180 0 60 0
 *   LL_InfoPopupWIndowMV showWindow ここにメッセージ内容を入力 180 auto auto 0
 *
 * 利用規約:
 *   ・著作権表記は必要ございません。
 *   ・利用するにあたり報告の必要は特にございません。
 *   ・商用・非商用問いません。
 *   ・R18作品にも使用制限はありません。
 *   ・ゲームに合わせて自由に改変していただいて問題ございません。
 *   ・プラグイン素材としての再配布（改変後含む）は禁止させていただきます。
 *
 * 作者: ルルの教会
 * 作成日: 2022/3/6
 */

(function() {
    "use strict";
    var pluginName = "LL_InfoPopupWIndowMV";
    var parameters = PluginManager.parameters(pluginName);

    //-----------------------------------------------------------------------------
	// PluginCommand (for MV)
    //

    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        if (command === pluginName) {
            switch (args[0]) {
				case "showWindow":
                    var x = args[3] === "auto" ? "auto" : Number(args[3] || 0);
                    var y = args[4] === "auto" ? "auto" : Number(args[4] || 60);

                    exInfoWindowText = String(args[1] || "");
                    exInfoWindowShowCount = Number(args[2] || 180);
                    exInfoWindowPosition = {"x": x, "y": y};
                    exInfoWindowSe = {"name": "", "volume": 90, "pitch": 100, "pan": 0};
                    exInfoWindowBackground = Number(args[5] || 0);
                    exInfoWindowShow = true;
                    break;
                case "hideWindow":
                    exInfoWindowHide = true;
                    break;
            }
        }
	};

    // ウィンドウの表示状態保持用
    var exInfoWindowText = "";
    var exInfoWindowShowCount = 180;
    var exInfoWindowPosition = {};
    var exInfoWindowSe = {};
    var exInfoWindowBackground = 0;
    var exInfoWindowShow = false;
    let exInfoWindowHide = false;

    //-----------------------------------------------------------------------------
    // Scene_Map
    //

    var _Scene_Map_stop = Scene_Map.prototype.stop;
    Scene_Map.prototype.stop = function() {
        this._exInfoWindow.close();
        _Scene_Map_stop.apply(this, arguments);
    };

    var _Scene_Map_terminate = Scene_Map.prototype.terminate;
    Scene_Map.prototype.terminate = function() {
        _Scene_Map_terminate.apply(this, arguments);
        if (!SceneManager.isNextScene(Scene_Battle)) {
            this._exInfoWindow.hide();
        }
    };

    var _Scene_Map_createAllWindows = Scene_Map.prototype.createAllWindows;
    Scene_Map.prototype.createAllWindows = function() {
        _Scene_Map_createAllWindows.apply(this, arguments);
        this.createExInfoWindow();
    };

    Scene_Map.prototype.createExInfoWindow = function() {
        this._exInfoWindow = new Window_ExInfoWindow();
        this.addWindow(this._exInfoWindow);
    };

    var _Scene_Map_callMenu = Scene_Map.prototype.callMenu;
    Scene_Map.prototype.callMenu = function() {
        _Scene_Map_callMenu.apply(this, arguments);
        this._exInfoWindow.hide();
    };

    //-----------------------------------------------------------------------------
    // Scene_Battle
    //

    var _Scene_Battle_stop = Scene_Battle.prototype.stop;
    Scene_Battle.prototype.stop = function() {
        this._exInfoWindow.close();
        _Scene_Battle_stop.apply(this, arguments);
    };

    var _Scene_Battle_terminate = Scene_Battle.prototype.terminate;
    Scene_Battle.prototype.terminate = function() {
        _Scene_Battle_terminate.apply(this, arguments);
        this._exInfoWindow.hide();
    };

    var _Scene_Battle_createAllWindows = Scene_Battle.prototype.createAllWindows;
    Scene_Battle.prototype.createAllWindows = function() {
        _Scene_Battle_createAllWindows.apply(this, arguments);
        this.createExInfoWindow();
    };

    Scene_Battle.prototype.createExInfoWindow = function() {
        this._exInfoWindow = new Window_ExInfoWindow();
        this.addWindow(this._exInfoWindow);
    };

    //-----------------------------------------------------------------------------
    // Window_ExInfoWindow
    //
    // インフォメッセージを表示するウィンドウです。

    function Window_ExInfoWindow() {
        this.initialize.apply(this, arguments);
    }

    Window_ExInfoWindow.prototype = Object.create(Window_Base.prototype);
    Window_ExInfoWindow.prototype.constructor = Window_ExInfoWindow;

    Window_ExInfoWindow.prototype.initialize = function() {
        Window_Base.prototype.initialize.call(this, new Rectangle());
        this.openness = 0;
        this._showCount = 0;
    };

    Window_ExInfoWindow.prototype.start = function() {
        this._showCount = exInfoWindowShowCount;
        this.playSe();
        this.updatePlacement();
        this.updateBackground();
        this.createContents();
        this.refresh();
    };

    Window_ExInfoWindow.prototype.playSe = function() {
        if (exInfoWindowSe.name) AudioManager.playSe(exInfoWindowSe);
    };

    Window_ExInfoWindow.prototype.update = function() {
        Window_Base.prototype.update.call(this);
        // ウィンドウ表示判定
        if (exInfoWindowShow) {
            this.start();
            exInfoWindowShow = false;
        }
        // ウィンドウ消去判定
        if (exInfoWindowHide) {
            this.close();
            exInfoWindowHide = false;
        }
        if (this._showCount !== 0) {
            this.updateFadeIn();
            if (this._showCount > 0) {
                this._showCount--;
            }
        } else {
            this.updateFadeOut();
        }
    };

    Window_ExInfoWindow.prototype.updateFadeIn = function() {
        this.openness += 32;
    };

    Window_ExInfoWindow.prototype.updateFadeOut = function() {
        this.openness -= 32;
    };

    Window_ExInfoWindow.prototype.close = function() {
        this._showCount = 0;
    };

    Window_ExInfoWindow.prototype.updatePlacement = function() {
        this.width = this.windowWidth();
        this.height = this.windowHeight();

        if (exInfoWindowPosition.x === "auto") {
            this.x = (Graphics.boxWidth - this.windowWidth()) / 2;
        } else {
            this.x = exInfoWindowPosition.x;
        }
        if (exInfoWindowPosition.y === "auto") {
            this.y = (Graphics.boxHeight - this.windowHeight()) / 2;
        } else {
            this.y = exInfoWindowPosition.y;
        }
    };

    Window_ExInfoWindow.prototype.updateBackground = function() {
        this.setBackgroundType(exInfoWindowBackground);
    };

    Window_ExInfoWindow.prototype.windowWidth = function() {
        if (exInfoWindowText) {
            var textWidth = this.textWidthEx(exInfoWindowText);
            var padding = this.padding;
            var width = Math.ceil(textWidth) + padding * 2;
            return Math.min(width, Graphics.boxWidth);
        } else {
            return 0;
        }
    };

    Window_ExInfoWindow.prototype.windowHeight = function() {
        return this.fittingHeight(1);
    };

    Window_ExInfoWindow.prototype.refresh = function() {
        this.contents.clear();
        this.drawTextEx(exInfoWindowText, 0, 0, this.innerWidth);
    };

    // for MV
    Window_ExInfoWindow.prototype.textWidthEx = function(text) {
        return this.drawTextEx(text, 0, this.contents.height);
    };
})();
