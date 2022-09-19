//=============================================================================
// RPGツクールMZ - LL_SprashScreenMV.js v1.1.0
//-----------------------------------------------------------------------------
// ルルの教会 (Lulu's Church)
// https://nine-yusha.com/
//
// URL below for license details.
// https://nine-yusha.com/plugin/
//=============================================================================

/*:
 * @target MV
 * @plugindesc スプラッシュスクリーンを表示します。
 * @author ルルの教会
 * @url https://nine-yusha.com/plugin/
 *
 * @help LL_SprashScreenMV.js
 *
 * スプラッシュスクリーンを表示します。
 * スプラッシュスクリーンは複数設定することが可能です。
 * 決定キー、クリックでスキップさせることもできます。
 * ジングルMEを再生することも可能です。
 * (v1.1.0: ジングルMEを画像毎に設定できるようになりました)
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
 * 作成日: 2022/4/10
 *
 * @param splashImages
 * @text 画像リスト
 * @desc スプラッシュスクリーンとして表示する画像リストです。
 * 上から順番に表示されます。
 * @default []
 * @type struct<splashImages>[]
 *
 * @param skipEnabled
 * @text スキップ許可
 * @desc 決定キー、クリックでスキップを許可するか設定します。
 * @type boolean
 * @default true
 *
 * @param debugDisabled
 * @text テストプレイ時は非表示
 * @desc テストプレイ時は非表示にするか設定します。
 * @type boolean
 * @default false
 *
 * @param jingleSettings
 * @text ジングルの設定
 * @desc ※この項目は使用しません
 *
 * @param meName
 * @text ME
 * @desc 再生する音声ファイルを選択してください。
 * @dir audio/me
 * @type file
 * @require 1
 * @parent jingleSettings
 *
 * @param meVolume
 * @text MEの音量
 * @desc MEの音量(0～100%)です。 (初期値: 90%)
 * @default 90
 * @max 100
 * @min 0
 * @type number
 * @parent jingleSettings
 *
 * @param mePitch
 * @text MEのピッチ
 * @desc MEのピッチ(50～150%)です。 (初期値: 100%)
 * @default 100
 * @max 150
 * @min 50
 * @type number
 * @parent jingleSettings
 *
 * @param mePan
 * @text MEの位相
 * @desc MEの位相(-100～100)です。 (初期値: 0)
 * @default 0
 * @max 100
 * @min -100
 * @type number
 * @parent jingleSettings
 */

/*~struct~splashImages:
 *
 * @param imageName
 * @text 画像ファイル名
 * @desc 表示する画像ファイルを選択してください。
 * @dir img/system
 * @type file
 * @require 1
 *
 * @param fadeTime
 * @text フェード時間
 * @desc フェードイン・フェードアウトの効果時間です。
 * @default 60
 * @min 0
 * @max 999
 * @type number
 *
 * @param waitTime
 * @text 表示時間
 * @desc フェードイン後の表示時間です。
 * @default 60
 * @min 0
 * @max 999
 * @type number
 *
 * @param jingleSettings
 * @text ジングルの設定
 * @desc ※この項目は使用しません
 *
 * @param meName
 * @text ME
 * @desc 再生する音声ファイルを選択してください。
 * @dir audio/me
 * @type file
 * @require 1
 * @parent jingleSettings
 *
 * @param meVolume
 * @text MEの音量
 * @desc MEの音量(0～100%)です。 (初期値: 90%)
 * @default 90
 * @max 100
 * @min 0
 * @type number
 * @parent jingleSettings
 *
 * @param mePitch
 * @text MEのピッチ
 * @desc MEのピッチ(50～150%)です。 (初期値: 100%)
 * @default 100
 * @max 150
 * @min 50
 * @type number
 * @parent jingleSettings
 *
 * @param mePan
 * @text MEの位相
 * @desc MEの位相(-100～100)です。 (初期値: 0)
 * @default 0
 * @max 100
 * @min -100
 * @type number
 * @parent jingleSettings
 *
 * @param meTiming
 * @text 再生タイミング
 * @desc MEを再生するタイミングを選択します。
 * @type select
 * @default before
 * @option フェードイン前
 * @value before
 * @option フェードイン後
 * @value after
 * @parent jingleSettings
 */


(function() {
    "use strict";
    var pluginName = "LL_SprashScreenMV";

    var parameters = PluginManager.parameters(pluginName);
    var paramJsonParse = function(key, value) {
		try {
			return JSON.parse(value);
		} catch(e) {
			return value;
		}
	};

    var skipEnabled = eval(parameters["skipEnabled"] || "true");
    var debugDisabled = eval(parameters["debugDisabled"] || "false");
    // ME
    var meName = String(parameters["meName"] || "");
    var meVolume = Number(parameters["meVolume"] || 90);
    var mePitch = Number(parameters["mePitch"] || 100);
    var mePan = Number(parameters["mePan"] || 0);
    // 画像リスト
    var splashImages = String(parameters["splashImages"] || "[]");
    var splashImageLists = JSON.parse(JSON.stringify(splashImages, paramJsonParse));

    var _Scene_Boot_loadSystemImages = Scene_Boot.prototype.loadSystemImages;
    Scene_Boot.prototype.loadSystemImages = function() {
        _Scene_Boot_loadSystemImages.call(this);
        // スプラッシュ画像を読み込み
        splashImageLists.forEach(function(item) {
	        ImageManager.loadSystem(item.imageName);
		});
    };

    var _Scene_Boot_startNormalGame = Scene_Boot.prototype.startNormalGame;
    Scene_Boot.prototype.startNormalGame = function() {
        if (!DataManager.isBattleTest() && !DataManager.isEventTest() && splashImageLists.length > 0) {
            if (!Utils.isOptionValid('test') || !debugDisabled) {
                this.checkPlayerLocation();
                DataManager.setupNewGame();
                SceneManager.goto(Scene_SplashScreen);
                return;
            }
        }

        _Scene_Boot_startNormalGame.apply(this, arguments);
    };

    // for MV
    var _Scene_Boot_start = Scene_Boot.prototype.start;
    Scene_Boot.prototype.start = function() {
        if (!DataManager.isBattleTest() && !DataManager.isEventTest() && splashImageLists.length > 0) {
            if (!Utils.isOptionValid('test') || !debugDisabled) {
                this.checkPlayerLocation();
                DataManager.setupNewGame();
                SceneManager.goto(Scene_SplashScreen);
                return;
            }
        }

        _Scene_Boot_start.apply(this, arguments);
    };

    //-----------------------------------------------------------------------------
    // Scene_SplashScreen
    //
    // スプラッシュスクリーンを表示する独自のシーンを追加定義します。

    function Scene_SplashScreen() {
        this.initialize.apply(this, arguments);
    }

    Scene_SplashScreen.prototype = Object.create(Scene_Base.prototype);
    Scene_SplashScreen.prototype.constructor = Scene_SplashScreen;

    Scene_SplashScreen.prototype.initialize = function() {
        Scene_Base.prototype.initialize.call(this);
        SceneManager.clearStack();
        this._originalSplash = null;
        this._splashIndex = 0;
        this._fadeTime = 60;
        this._waitTime = 0;
        this._fadeOpacity = 255;
        this._jingleMe = null;
    };

    Scene_SplashScreen.prototype.create = function() {
        Scene_Base.prototype.create.call(this);
    };

    Scene_SplashScreen.prototype.start = function() {
        Scene_Base.prototype.start.call(this);
        this.playMeJingle();
    };

    Scene_SplashScreen.prototype.update = function() {
        Scene_Base.prototype.update.call(this);

        this._fadeOpacity = this._fadeSprite ? this._fadeSprite.opacity : 255;

        // 画像切り替え
        if (this._waitTime == 0) {
            if (this._fadeOpacity == 0) {
                this.startFadeOut(this._fadeTime, false);
            } else if (this._fadeOpacity == 255) {
                this.setSplashImage();
                // 終了判定
                if (!this._originalSplash) {
                    this.gotoNextScene();
                    return;
                }
                this.adjustSpriteImage();
                this.startFadeIn(this._fadeTime, false);
            }

        }
        // ジングルME (v1.1.0)
        if (this._jingleMe) {
            if (this._jingleMe.timing === "after") {
                if (this._fadeOpacity == 0 && this._waitTime > 0) {
                    this.playMeJingleEvery(this._jingleMe);
                }
            } else {
                this.playMeJingleEvery(this._jingleMe);
            }
        }
        // スキップ判定
        if (skipEnabled) {
            if (Input.isTriggered("ok") || TouchInput.isTriggered()) {
                this._waitTime = 0;
                this.startFadeOut(1, false);
            }
        }
        // ウェイト判定
        if (this._fadeOpacity == 0 && this._waitTime > 0) {
            this._waitTime--;
        }
    };

    Scene_SplashScreen.prototype.setSplashImage = function() {
        var splashImage = splashImageLists[this._splashIndex];
        this._originalSplash = null;
        if (splashImage) {
            this._originalSplash = new Sprite(
                ImageManager.loadSystem(splashImage.imageName)
            );
            this.addChild(this._originalSplash);
            this._fadeTime = splashImage.fadeTime;
            this._waitTime = splashImage.waitTime;
            // インデックスを更新
            this._splashIndex++;

            // ジングルME (v1.1.0)
            this._jingleMe = {
                name: splashImage.meName,
                volume: splashImage.meVolume,
                pitch: splashImage.mePitch,
                pan: splashImage.mePan,
                timing: splashImage.meTiming
            };
        }
    };

    Scene_SplashScreen.prototype.adjustSpriteImage = function() {
        this.centerSprite(this._originalSplash);
    };

    Scene_SplashScreen.prototype.playMeJingle = function() {
        if (!meName) return;
        AudioManager.playMe({
            "name": meName,
            "volume": meVolume,
            "pitch": mePitch,
            "pan": mePan
        });
    };

    Scene_SplashScreen.prototype.playMeJingleEvery = function(me) {
        if (!me.name) return;
        AudioManager.playMe({
            "name": me.name,
            "volume": me.volume,
            "pitch": me.pitch,
            "pan": me.pan
        });
        this._jingleMe = null;
    };

    Scene_SplashScreen.prototype.gotoNextScene = function() {
        AudioManager.stopMe();
        SceneManager.goto(Scene_Title);
    };

    // for MV
    Scene_SplashScreen.prototype.centerSprite = function(sprite) {
        sprite.x = Graphics.width / 2;
        sprite.y = Graphics.height / 2;
        sprite.anchor.x = 0.5;
        sprite.anchor.y = 0.5;
    };

    Scene_SplashScreen.prototype.startFadeIn = function(duration, white) {
        this._fadeSprite = null;
        Scene_Base.prototype.startFadeIn.call(this, duration, white);
    };
})();
