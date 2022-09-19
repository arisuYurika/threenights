/*:
 * @plugindesc
 * v1.00 - 为事件的“显示文字”动作添加音效。
 *
 * @help
 * 功能描述
 *     本插件可以为事件的“显示文字”动作添加音效，让一些特定音效随文字一起出现。
 * 使用方式
 *     直接启用插件即可为文字添加音效。
 *     你可以通过在事件中调用本系统提供的自定义脚本来修改音效的属性。（这些修改会永久生效，直到你下一次修改它们）
 * 自定义脚本
 *     set_text_sound_name("sound_name") # (字符串)将文字显示时播放的音效文件设置为sound_name（不含后缀名），音效存于audio/se目录下，你可以将"sound_name"改为null或""来关闭音效。
 *     set_text_sound_interval(interval) # (整数)  设置为每interval个字播放一次音效
 *     set_text_sound_volume(volume)     # (整数)  设置文字音效的音量
 *     set_text_sound_pitch(pitch)       # (整数)  设置文字音效的音调
 *     set_text_sound_pan(pan)           # (整数)  设置文字音效的偏移
 * 脚本使用示例
 *     set_text_sound_name("bell3")      # 设置文字显示时播放的音效为bell3
 *     set_text_sound_interval(3)        # 设置文字每出现3个时播放1次音效
 *     set_text_sound_volume(100)        # 设置文字音效的音量为100
 *     set_text_sound_pitch(100)         # 设置文字音效的音调为100
 *     set_text_sound_pan(0)             # 设置文字音效的偏移为0
 * 功能特性
 *     无论文字音效间隔是多少，对话内容的第一个文字永远会发声。
 * 更新日志
 *     v1.00 2015-11-4 23:26:12
 *         发布。
 *
 * @param Text Sound Interval
 * @desc 每多少个字播放一次音效，默认7
 * @default 7
 *
 * @param Text Sound Name
 * @desc 文字音效的文件名，默认Cursor1
 * @default Cursor1
 *
 * @param Text Sound Volume
 * @desc 文字音效的音量，默认100
 * @default 100
 *
 * @param Text Sound Pitch
 * @desc 文字音效的音调，默认100
 * @default 100
 *
 * @param Text Sound Pan
 * @desc 文字音效的偏移，默认0
 * @default 0
 */

(function() {

    //===========================================
    // 插件参数
    //===========================================

        var parameters = PluginManager.parameters('MessageTextSound');

        var text_current_frame      = 0;                                                        // 当前的字数间隔计数
        var text_se_interval        = (parseInt(parameters['Text Sound Interval']) || 7);       // 音效间隔，默认7
        var text_se_object          = new Object();
        text_se_object.name         = String(parameters['Text Sound Name']       || "Cursor1"); // 音效文件名，默认为"audio/se/Cursor1"
        text_se_object.volume       = (parseInt(parameters['Text Sound Volume']) || 100);       // 音效音量，默认100
        text_se_object.pitch        = (parseInt(parameters['Text Sound Pitch'])  || 100);       // 音效音调，默认100
        text_se_object.pan          = (parseInt(parameters['Text Sound Pan'])    || 0);         // 音效偏移，默认0

    //===========================================
    // 插件主体逻辑
    //===========================================

        //-------------------------------------------
        // 每当显示一个文字（包括转义符）时，播放音效
        // 植入在updateShowFast而非在processCharacter是因为processCharacter会被其他类似的文字显示类调用
        //-------------------------------------------

        var _Window_Message_updateShowFast = Window_Message.prototype.updateShowFast;
        Window_Message.prototype.updateShowFast = function() {
            // 回调原函数
            _Window_Message_updateShowFast.call(this);

            // 当音效功能处于开启，并且对话不处于“快速显示”状态时进行计数
            if (!this._showFast && text_se_object.name != null && text_se_object.name != "") {
                // 当前文字计数到达了发声阈，则播放声音，并重置计数
                if (text_current_frame >= text_se_interval) {
                    text_current_frame = 1;
                    AudioManager.playSe(text_se_object);
                // 当前计数没到达发声阈，递增计数
                } else {
                    text_current_frame = text_current_frame + 1;
                }
            }
        };

        //-------------------------------------------
        // 消息框进入新的消息页时的处理
        //-------------------------------------------

        var _Window_Message_newPage = Window_Message.prototype.newPage;
        Window_Message.prototype.newPage = function(textState) {
            // 自带：重置跳过本次后续音效的标记
            _Window_Message_newPage.call(this, textState);
            // 重置文字计数到发声阈值，用于在第一个字时发音
            text_current_frame = text_se_interval;
        };

    //===========================================
    // 添加插件提供的自定义脚本
    //===========================================

        // 设置音效文件名
        set_text_sound_name = function (text) {
            if (text == "" || text == null) { text_se_object.name = null; }
            else                            { text_se_object.name = text; }
        }

        // 设置音效播放间隔（每多少个文字播放一次音效）
        set_text_sound_interval = function (interval) { text_se_interval = interval; }

        // 设置音效的音量属性
        set_text_sound_volume = function (volume) { text_se_object.volume = volume; }

        // 设置音效的音调属性
        set_text_sound_pitch = function (pitch) { text_se_object.pitch = pitch; }

        // 设置音效的偏移属性
        set_text_sound_pan = function (pan) { text_se_object.pan = pan; }

})();
