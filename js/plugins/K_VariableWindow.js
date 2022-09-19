//=============================================================================
// K_VariableWindow.js
//=============================================================================

/*:
 * @plugindesc ツクールフェスのイベントコマンド「変数を画面に表示」を実装します。
 * @author ルルの教会 (https://nine-yusha.com/)
 *
 * @help

 プラグインコマンド
   VariableWindow show 1  # 変数１の値を画面に表示します。
   VariableWindow close   # 表示した変数を画面から消去します。

 利用規約:
   ・著作権表記は必要ございません。
   ・利用するにあたり報告の必要は特にございません。
   ・商用・非商用問いません。
   ・R18作品にも使用制限はありません。
   ・ゲームに合わせて自由に改変していただいて問題ございません。
   ・プラグイン素材としての再配布（改変後含む）は禁止させていただきます。

 ライセンスについての詳細は下記をご確認ください。
 https://nine-yusha.com/plugin/

 作者: ルルの教会
 作成日: 2020/10/13
*/

(function() {

    var parameters = PluginManager.parameters('K_VariableWindow');

	var Scene_map_start = Scene_Map.prototype.start;
	Scene_Map.prototype.start = function() {
		Scene_map_start.call(this);
	    this._variableInfoWindow = new Window_VariableInfo();
        this.addWindow(this._variableInfoWindow);
    };

    var _Scene_Map_update = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function() {
        _Scene_Map_update.call(this);
        this._variableInfoWindow.setText();
    };

    // Game_Systemに変数を追加 (セーブ時に保存させるため)
    Game_System.prototype.clearVariableWindowFlag = function() {
        this._VariableWindowFlag = false;
        this._VariableWindowId = 1;
    };

    //-----------------------------------------------------------------------------
	// PluginCommand
    //

    var _Game_Interpreter_pluginCommand =
            Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        if (command === 'VariableWindow') {
            switch (args[0]) {
            case 'show':
                if (!$gameSystem._VariableWindowFlag) {
                    $gameSystem.clearVariableWindowFlag();
                }
                $gameSystem._VariableWindowId = args[1];
                $gameSystem._VariableWindowFlag = true;
                break;
            case 'close':
                if (!$gameSystem._VariableWindowFlag) {
                    $gameSystem.clearVariableWindowFlag();
                }
                $gameSystem._VariableWindowFlag = false;
                break;
            }
        }
    };

    //-----------------------------------------------------------------------------
	// Window_VariableInfo
	//

	function Window_VariableInfo() {
	    this.initialize.apply(this, arguments);
    }

    Window_VariableInfo.prototype = Object.create(Window_Base.prototype);
    Window_VariableInfo.prototype.constructor = Window_VariableInfo;

    Window_VariableInfo.prototype.initialize = function() {
	    var width = 400;
        var height = this.fittingHeight(1);
	    Window_Base.prototype.initialize.call(this, Graphics.boxWidth - width, 0, width, height);
    };

    Window_VariableInfo.prototype.setText = function(text) {
	    this._text = text;
	    this.refresh();
    };

    Window_VariableInfo.prototype.clear = function() {
	    this.setText('');
    };

    Window_VariableInfo.prototype.refresh = function() {
        var variableId = $gameSystem._VariableWindowId;
        this.contents.clear();
        this.changeTextColor(this.systemColor());
        this.drawText($dataSystem.variables[variableId], this.textPadding(), 0, 250);
        this.resetTextColor();
        this.drawText($gameVariables.value(variableId), 258, 0, 100, 'right');
        // 表示・非表示状態判定
        if ($gameSystem._VariableWindowFlag) {
            this.show();
        } else {
            this.hide();
        }
	};

})();
