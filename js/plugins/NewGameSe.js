/*=============================================================================
 NewGameSe.js
----------------------------------------------------------------------------
 (C)2018 Triacontane
 This software is released under the MIT License.
 http://opensource.org/licenses/mit-license.php
----------------------------------------------------------------------------
 Version
 1.1.0 2018/11/23 ニューゲーム以外でも専用効果音が演奏できるよう修正
 1.0.0 2018/08/03 初版
----------------------------------------------------------------------------
 [Blog]   : https://triacontane.blogspot.jp/
 [Twitter]: https://twitter.com/triacontane/
 [GitHub] : https://github.com/triacontane/
=============================================================================*/

/*:
 * @plugindesc 新游戏选项音效插件
 * @author triacontane 汉化:硕明云书
 *
 * @param soundEffect
 * @text 音效
 * @desc 选择新游戏时的音效信息。
 * @default
 * @type struct<AudioSe>
 *
 * @param includeContinue
 * @text 包括继续
 * @desc 即使选择了继续或选项，也会播放特殊的声音效果。
 * @default false
 * @type boolean
 *
 * @help NewGameSe.js
 * 特殊音效仅在选择新游戏时播放。
 *
 * 此插件没有插件命令。
 *
 * 服务条款：
 * 未经作者许可可修改转载，使用形式（商业、18禁止使用等）
 * 没有限制。
 * 这个插件已经是你的了。
 */
/*:ja
 * @plugindesc ニューゲーム専用効果音プラグイン
 * @author トリアコンタン
 *
 * @param soundEffect
 * @text 効果音
 * @desc ニューゲーム選択時の効果音情報です。
 * @default
 * @type struct<AudioSe>
 *
 * @param includeContinue
 * @text コンティニューも含む
 * @desc コンティニュー、オプション選択時も専用効果音を演奏します。
 * @default false
 * @type boolean
 *
 * @help NewGameSe.js
 * 特殊音效仅在选择新游戏时播放。
 *
 * 此插件没有插件命令。
 *
 * 服务条款：
 * 未经作者许可可修改转载，使用形式（商业、18禁止使用等）
 * 没有限制。
 * 这个插件已经是你的了。
 */

/*~struct~AudioSe:
 * @param name
 * @desc ファイル名称です。
 * @default
 * @require 1
 * @dir audio/se/
 * @type file
 *
 * @param volume
 * @desc ボリュームです。
 * @default 90
 * @type number
 * @min 0
 * @max 100
 *
 * @param pitch
 * @desc ピッチです。
 * @default 100
 * @type number
 * @min 50
 * @max 150
 *
 * @param pan
 * @desc 左右バランスです。
 * @default 0
 * @type number
 * @min -100
 * @max 100
 */

(function() {
    'use strict';

    /**
     * Create plugin parameter. param[paramName] ex. param.commandPrefix
     * @param pluginName plugin name(EncounterSwitchConditions)
     * @returns {Object} Created parameter
     */
    var createPluginParameter = function(pluginName) {
        var paramReplacer = function(key, value) {
            if (value === 'null') {
                return value;
            }
            if (value[0] === '"' && value[value.length - 1] === '"') {
                return value;
            }
            try {
                return JSON.parse(value);
            } catch (e) {
                return value;
            }
        };
        var parameter     = JSON.parse(JSON.stringify(PluginManager.parameters(pluginName), paramReplacer));
        PluginManager.setParameters(pluginName, parameter);
        return parameter;
    };

    var param = createPluginParameter('NewGameSe');

    var _Window_TitleCommand_playOkSound = Window_TitleCommand.prototype.playOkSound;
    Window_TitleCommand.prototype.playOkSound = function() {
        if (param.soundEffect && this.isNeedTitleSound()) {
            AudioManager.playStaticSe(param.soundEffect);
        } else {
            _Window_TitleCommand_playOkSound.apply(this, arguments);
        }
    };

    Window_TitleCommand.prototype.isNeedTitleSound = function() {
        return this.currentSymbol() === 'newGame' || param.includeContinue
    };
})();
