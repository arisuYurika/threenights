//=============================================================================
// RPGツクールMV - LL_GalgeChoiceWindowMV.js v1.0.3
//-----------------------------------------------------------------------------
// ルルの教会 (Lulu's Church)
// https://nine-yusha.com/
//
// URL below for license details.
// https://nine-yusha.com/plugin/
//=============================================================================

/*:
 * @target MV
 * @plugindesc ノベルゲーム風選択肢ウィンドウプラグイン
 * @author ルルの教会
 * @url https://nine-yusha.com/plugin-galgechoicewindow/
 *
 * @help LL_GalgeChoiceWindowMV.js
 *
 * ノベルゲーム風の選択肢ウィンドウを表示します。
 * 独自のウィンドウ画像、ボタン画像を設定することもできます。
 * (画像はimg/systemフォルダに配置してください)
 *
 * プラグインコマンド(必須):
 *   ↓選択肢をセットします。(カンマで区切り半角スペースを入れずに続けて入力)
 *   LL_GalgeChoiceWindowMV setChoices [選択肢1,選択肢2...]
 *   ↓選択肢を表示します。(キャンセル許可: 0=>禁止、1=>許可)
 *   LL_GalgeChoiceWindowMV showChoice [結果変数ID] [キャンセル許可] [初期位置]
 *   (初期位置を「0」にすると、選択なしになります)
 *
 * プラグインコマンド(オプション、showChoiceの前に設置してください):
 *   ↓質問メッセージをセットします。
 *   LL_GalgeChoiceWindowMV setMessageText [質問メッセージ]
 *   ↓選択肢を列数を変更します。 (初期値: 1)
 *   LL_GalgeChoiceWindowMV setMaxCols 1
 *   ↓ウィンドウの幅を変更します。 (初期値: 480)
 *   LL_GalgeChoiceWindowMV setWindowWidth 480
 *   ↓独自のウィンドウ画像をセットします。
 *   LL_GalgeChoiceWindowMV setBackgroundImage [画像名]
 *   ↓独自のボタン画像をセットします。 (X座標・Y座標初期値: 0)
 *   LL_GalgeChoiceWindowMV setBtnImage [画像名] [選択時の画像名] [X座標] [Y座標]
 *   ↓選択肢高さを変更します。画像が重なる場合は調整してください (初期値: 0)
 *   LL_GalgeChoiceWindowMV setItemHeight 0
 *   ↓背景の明るさを変更します。 (0～255、初期値: 128)
 *   LL_GalgeChoiceWindowMV setBackgroundOpacity 128
 *
 * 【プラグインコマンドの入力例】
 *   LL_GalgeChoiceWindowMV setMessageText この先へ進みますか？
 *   LL_GalgeChoiceWindowMV setChoices はい,いいえ
 *   LL_GalgeChoiceWindowMV showChoice 1 1 1
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
 * 作成日: 2021/8/26
 *
 * @param imageDeleteGuardList
 * @text 使用画像リスト
 * @desc 選択肢で使用するウィンドウ・ボタン画像を登録します。
 * ここに登録しておくことで未使用素材削除から除外されます。
 * @default []
 * @type struct<imageDeleteGuardList>[]
 */

/*~struct~imageDeleteGuardList:
 *
 * @param imageName
 * @text 画像ファイル名
 * @desc 未使用素材から除外する画像ファイルを選択します。
 * @dir img/system
 * @type file
 * @require 1
 */

(function() {
    "use strict";
    var pluginName = "LL_GalgeChoiceWindowMV";

    var parameters = PluginManager.parameters(pluginName);

    // Padding
    var gcwWindowPadding = 32;
    // キャンセル許可時のタッチUI戻るボタンの表示
    var gcwCancelButtonEnabled = false;
    // フェードイン効果フレーム
    var gcwFadeInFrame = 32;

    // 設定保存用変数定義
    var messageTextLists = [];
    var choiceLists = [];
    var maxCols = 1;
    var variableNumber = 0;
    var cancelType = true;
    var iniPosition = 1;
    var gcwWindowWidth = 480;
    var backgroundImage = "";
    var gcwButtonImage = "";
    var gcwButtonFocusImage = "";
    var gcwButtonAdjustX = 0;
    var gcwButtonAdjustY = 0;
    var gcwItemHeightAdjust = 0;
    var backgroundBitmapOpacity = 128;


    //-----------------------------------------------------------------------------
	// PluginCommand (for MV)
    //

    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        if (command === pluginName) {
            switch (args[0]) {
				case "setChoices":  // 選択肢の定義
                    var choices = args[1].split(',');
                    choiceLists = [];
                    if (choices) {
                        choices.forEach(function(elm) {
                            choiceLists.push(String(elm));
                        });
                    }
                    return;
                case "setMessageText":  // 質問メッセージの定義
                    var messageText = String(args[1] || "");
                    messageTextLists = [];
                    if (messageText) {
                        messageTextLists.push(String(args[1] || ""));
                    }
                    return;
                case "setMaxCols":  // 列数の定義
                    maxCols = Number(args[1] || 1);
                    return;
                case "setWindowWidth":  // ウィンドウ幅の定義
                    gcwWindowWidth = Number(args[1] || 480);
                    return;
                case "setBackgroundImage":  // ウィンドウ画像の定義
                    backgroundImage = String(args[1] || "");
                    return;
                case "setBtnImage":  // ボタン画像の定義
                    gcwButtonImage = String(args[1] || "");
                    gcwButtonFocusImage = String(args[2] || "");
                    gcwButtonAdjustX = Number(args[3] || 0);
                    gcwButtonAdjustY = Number(args[4] || 0);
                    return;
                case "setItemHeight":  // 選択肢高さの定義
                    gcwItemHeightAdjust = Number(args[1] || 480);
                    return;
                case "setBackgroundOpacity":  // 背景明るさの定義
                    backgroundBitmapOpacity = Number(args[1] || 128);
                    return;
                case "showChoice":  // 選択肢の表示
                    variableNumber = Number(args[1] || 0);
                    cancelType = Number(args[2] || 1) === 1 ? true : false;
                    iniPosition = Number(args[3] || 1);
                    // 選択肢が空の場合、終了
                    if (choiceLists.length == 0) {
                        console.log(pluginName + ": 有効な選択肢が存在しなかったため、コマンドがスキップされました");
                        return;
                    }
                    SceneManager.push(Scene_GalgeChoice);
                    return;
            }
        }
	};


    //-----------------------------------------------------------------------------
    // Scene_GalgeChoice
    //
    // ギャルゲ風選択肢を表示する独自のシーンを定義します。

    function Scene_GalgeChoice() {
        this.initialize.apply(this, arguments);
    }

    Scene_GalgeChoice.prototype = Object.create(Scene_MenuBase.prototype);
    Scene_GalgeChoice.prototype.constructor = Scene_GalgeChoice;

    Scene_GalgeChoice.prototype.initialize = function() {
        Scene_MenuBase.prototype.initialize.call(this);
    };

    Scene_GalgeChoice.prototype.create = function() {
        Scene_MenuBase.prototype.create.call(this);
        this.createChoiceWindow();
    };

    Scene_GalgeChoice.prototype.start = function() {
        Scene_MenuBase.prototype.start.call(this);
    };

    Scene_GalgeChoice.prototype.createChoiceWindow = function() {
        this._choiceWindow = new Window_GalgeChoiceList();
        this._choiceWindow.setHandler("ok", this.popScene.bind(this));
        this._choiceWindow.setHandler("cancel", this.popScene.bind(this));
        this.addWindow(this._choiceWindow);
    };

    Scene_GalgeChoice.prototype.createButtons = function() {
        //
    };

    Scene_GalgeChoice.prototype.createBackground = function() {
        this._backgroundFilter = new PIXI.filters.BlurFilter();
        this._backgroundSprite = new Sprite();
        this._backgroundSprite.bitmap = SceneManager.backgroundBitmap();
        // this._backgroundSprite.filters = [this._backgroundFilter];
        this.addChild(this._backgroundSprite);
        this.setBackgroundOpacity(backgroundBitmapOpacity);
    };

    Scene_GalgeChoice.prototype.onInputOk = function() {
        this.popScene();
    };


    //-----------------------------------------------------------------------------
    // Window_GalgeChoiceList
    //
    // ギャルゲ風選択肢ウィンドウを定義します。

    function Window_GalgeChoiceList() {
        this.initialize.apply(this, arguments);
    }

    Window_GalgeChoiceList.prototype = Object.create(Window_Command.prototype);
    Window_GalgeChoiceList.prototype.constructor = Window_GalgeChoiceList;

    Window_GalgeChoiceList.prototype.initialize = function() {
        var wh = this.calcWindowHeight();
        var ww = gcwWindowWidth;
        var wx = (Graphics.boxWidth - ww) / 2;
        var wy = (Graphics.boxHeight - wh) / 2;
        Window_Command.prototype.initialize.call(this, wx, wy);
        this.openness = 0;
        // ウィンドウ画像
        this._bgSprite = null;
        // フォーカスアニメーション判定
        this._originalCursorSpriteFade = true;
        // 押しっぱなし判定
        this._pressedOkRelease = false;
        this.start();
    };

    Window_GalgeChoiceList.prototype.start = function() {
        this.open();
        this.setQuestionText();
        this.setSymbol();
        this.createOriginalBackground();
    };

    Window_GalgeChoiceList.prototype.calcWindowHeight = function() {
        // ウィンドウの高さを計算
        var itemCols = Math.ceil(choiceLists.length / maxCols);
        var height = this.lineHeight() * messageTextLists.length;
        if (messageTextLists.length > 0) height += gcwWindowPadding;
        height += (this.itemHeight()) * itemCols;
        height += gcwWindowPadding * 2;  // padding
        return height;
    };

    Window_GalgeChoiceList.prototype.createOriginalBackground = function() {
        if (backgroundImage != "") {
            this._bgSprite = new Sprite();
            this._bgSprite.bitmap = ImageManager.loadSystem(backgroundImage);
            this._bgSprite.bitmap.addLoadListener(function() {
                this._bgSprite.x = this.width / 2 - this._bgSprite.width / 2;
                this._bgSprite.y = this.height / 2 - this._bgSprite.height / 2;
            }.bind(this));
            this._bgSprite.opacity = 0;
            this.addChildToBack(this._bgSprite);
            // ウィンドウ枠を消去
            this.opacity = 0;
        }
    };

    Window_GalgeChoiceList.prototype.drawAllItems = function() {
        this.createOriginalCursor();
        this.createOriginalButton();

        var topIndex = this.topIndex();
        for (var i = 0; i < this.maxPageItems(); i++) {
            var index = topIndex + i;
            if (index < this.maxItems()) {
                this.drawItemBackground(index);
                this.drawItem(index);
            }
        }
    };

    Window_GalgeChoiceList.prototype.drawItemBackground = function(index) {
        var rect = this.itemRect(index);
        this.drawBackgroundRect(rect);
    };

    Window_GalgeChoiceList.prototype.createOriginalCursor = function() {
        if (gcwButtonFocusImage != "") {
            this._originalCursorSprite = null;
            this._originalCursorSprite = new Sprite();
            this._originalCursorSprite.bitmap = ImageManager.loadSystem(gcwButtonFocusImage);
            this._originalCursorSprite.opacity = 128;
            this._originalCursorSprite.visible = true;
            this.addChildToBack(this._originalCursorSprite);
        }
    };

    Window_GalgeChoiceList.prototype.createOriginalButton = function() {
        if (gcwButtonImage != "") {
            this._originalButtonSprite = null;
            this._originalButtonSprite = new Sprite();
            this._originalButtonSprite.visible = false;
            this.addChildToBack(this._originalButtonSprite);
        }
    };

    Window_GalgeChoiceList.prototype.drawBackgroundRect = function(rect) {
        var x = rect.x;
        var y = rect.y;
        var w = rect.width;
        var h = rect.height;
        if (gcwButtonImage != "") {
            var originalButtonSprite = new Sprite();
            originalButtonSprite.bitmap = ImageManager.loadSystem(gcwButtonImage);
            originalButtonSprite.x = x + gcwButtonAdjustX + gcwWindowPadding;
            originalButtonSprite.y = y + gcwButtonAdjustY + gcwWindowPadding;
            this._originalButtonSprite.addChild(originalButtonSprite);
        }
    };

    Window_GalgeChoiceList.prototype.refreshCursor = function() {
        if (this._cursorAll) {
            this.refreshCursorForAll();
        } else if (this.index() >= 0) {
            var rect = this.itemRect(this.index());
            if (gcwButtonFocusImage != "") {
                if (this._originalCursorSprite) {
                    this._originalCursorSprite.x = rect.x + gcwButtonAdjustX + gcwWindowPadding;
                    this._originalCursorSprite.y = rect.y + gcwButtonAdjustY + gcwWindowPadding;
                }
            } else {
                this.setCursorRect(rect.x, rect.y, rect.width, rect.height);
            }
        } else {
            this.setCursorRect(0, 0, 0, 0);
        }
    };

    // for MV
    Window_GalgeChoiceList.prototype.updateCursor = function() {
        if (this._cursorAll) {
            var allRowsHeight = this.maxRows() * this.itemHeight();
            this.setCursorRect(0, 0, this.contents.width, allRowsHeight);
            this.setTopRow(0);
        } else if (this.isCursorVisible()) {
            var rect = this.itemRect(this.index());
            if (gcwButtonFocusImage != "") {
                if (this._originalCursorSprite) {
                    this._originalCursorSprite.x = rect.x + gcwButtonAdjustX + gcwWindowPadding;
                    this._originalCursorSprite.y = rect.y + gcwButtonAdjustY + gcwWindowPadding;
                }
            } else {
                this.setCursorRect(rect.x, rect.y, rect.width, rect.height);
            }
        } else {
            this.setCursorRect(0, 0, 0, 0);
        }
    };

    Window_GalgeChoiceList.prototype.update = function() {
        Window_Command.prototype.update.call(this);
        this.updateOriginalButton();
        this.updateOriginalCursorButton();
        if (this._bgSprite) this._bgSprite.opacity = this.openness;

        // 押しっぱなし判定
        if (this.isOpen()) {
            if (!Input.isPressed("ok")) {
                this._pressedOkRelease = true;
            }
        }
    };

    Window_GalgeChoiceList.prototype.updateOriginalButton = function() {
        if (this._originalButtonSprite) {
            if (this.isOpen()) {
                this._originalButtonSprite.visible = true;
            } else {
                this._originalButtonSprite.visible = false;
            }
        }
    };

    Window_GalgeChoiceList.prototype.updateOriginalCursorButton = function() {
        if (this._originalCursorSprite) {
            if (this.isOpen() && this._index > -1) {
                this._originalCursorSprite.visible = true;
                if (this._originalCursorSprite.opacity >= 255) this._originalCursorSpriteFade = false;
                if (this._originalCursorSprite.opacity <= 128) this._originalCursorSpriteFade = true;
                this._originalCursorSprite.opacity += this._originalCursorSpriteFade ? 6 : -6;
            } else {
                this._originalCursorSprite.visible = false;
            }
        }
    };

    Window_GalgeChoiceList.prototype.updateOpen = function() {
        if (this._opening) {
            this.openness += gcwFadeInFrame;
            if (this.isOpen()) {
                this._opening = false;
            }
        }
    };

    Window_GalgeChoiceList.prototype.maxCols = function() {
        return maxCols;
    };

    Window_GalgeChoiceList.prototype.setQuestionText = function() {
        messageTextLists.forEach(function(text, index) {
            this.drawText(this.convertEscapeCharacters(text), 0, this.lineHeight() * index, this.width - this.padding * 2, "center");
        }, this);
    };

    Window_GalgeChoiceList.prototype.makeCommandList = function() {
        choiceLists.forEach(function(elm, index) {
            this.addCommand(String(elm), index + 1);
        }, this);
    };

    Window_GalgeChoiceList.prototype.processOk = function() {
        if (this._pressedOkRelease) {
            $gameVariables.setValue(variableNumber, this.currentSymbol());
            Window_Command.prototype.processOk.call(this);
        }
    };

    Window_GalgeChoiceList.prototype.processCancel = function() {
        if (!cancelType) return;
        $gameVariables.setValue(variableNumber, -1);
        Window_Command.prototype.processCancel.call(this);
    };

    Window_GalgeChoiceList.prototype.updatePadding = function() {
        this.padding = gcwWindowPadding;
    };

    Window_GalgeChoiceList.prototype.itemRect = function(index) {
        var margin = this.lineHeight() * messageTextLists.length;
        if (messageTextLists.length > 0) margin += gcwWindowPadding;

        var rect = new Rectangle();
        var maxCols = this.maxCols();
        rect.width = this.itemWidth();
        rect.height = this.itemHeight();
        rect.x = index % maxCols * (rect.width + this.spacing()) - this._scrollX;
        rect.y = Math.floor(index / maxCols) * rect.height - this._scrollY + margin;
        return rect;
    };

    Window_GalgeChoiceList.prototype.setSymbol = function() {
        if (iniPosition > 0) {
            this.selectSymbol(iniPosition);
        } else {
            this.deselect();
        }
    };

    Window_GalgeChoiceList.prototype.itemHeight = function() {
        return Window_Selectable.prototype.itemHeight.call(this) + gcwItemHeightAdjust;
    };

    Window_GalgeChoiceList.prototype.drawItem = function(index) {
        var rect = this.itemRectForText(index);
        var align = this.itemTextAlign();
        this.resetTextColor();
        this.changePaintOpacity(this.isCommandEnabled(index));
        this.drawText(this.convertEscapeCharacters(this.commandName(index)), rect.x, rect.y + (gcwItemHeightAdjust / 2), rect.width, align);
    };


    // for MV
    Window_GalgeChoiceList.prototype.windowWidth = function() {
        return gcwWindowWidth;
    };

    Window_GalgeChoiceList.prototype.windowHeight = function() {
        return this.calcWindowHeight();
    };

    Window_GalgeChoiceList.prototype.itemTextAlign = function() {
        return "center";
    };
})();
