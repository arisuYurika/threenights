//=============================================================================
// YEP_MessageCore.js
//=============================================================================
// Yanfly Engine Plugins - Message Core
// *Modifier: Mandarava (https://www.jianshu.com/u/a7454e40399d)
//=============================================================================

 /*:
 * 
 * @plugindesc v1.19 [v1.1]  对话框 - 消息核心
 * @author Yanfly Engine Plugins（Mandarava修改支持中文换行）（drill_up翻译）
 *
 * 
 * @help
 * ============================================================================
 *   插件介绍
 * ============================================================================
 * YEP消息核心在rmmv消息基础上添加了很多特殊字符，例如巴拉巴拉…功能。
 * （英文写了许多官方性的无用的话，此处省略。）
 *
 * ============================================================================
 *   插件扩展
 * ============================================================================
 * 该插件可以单独使用，也可以被插件扩展，或者作用于指定子插件。
 * 被扩展：
 *   - Drill_DialogFilter       对话框-滤镜效果
 *     通过该插件 姓名框 能产生滤镜效果，可以制作闪烁的姓名、模糊的姓名。
 * 可作用于：
 *   - Drill_DialogTextAlign    对话框-文本居中
 *     目标插件需要该核心才能设置居中与右对齐。
 * 
 * ============================================================================
 *   设定注意事项
 * ============================================================================
 * 1.插件的作用域：地图界面、战斗界面、菜单界面。
 *   作用于所有窗口文本的地方。
 * 2.了解更多窗口字符，可以去看看 "15.对话框 > 关于窗口字符.docx"。
 * 细节说明：
 *   (1.消息核心中的 字体参数 等设置，如果你没有把握，就不要去修改。
 *      这里设置的是所有消息窗口通用的字体。
 *      包括 对话框、战斗消息提示、帮助窗口 。
 *   (2.消息输入字符只在对话框中有效。
 *      指代字符 与 部分效果字符 在所有支持窗口字符的窗口有效。
 * 
 * ============================================================================
 *   rmmv默认特殊字符
 * ============================================================================
 *
 * 指代字符
 *   \V[n]       替换为第n个变量的值。（0002变量，输入2，不要多余0）
 *   \N[n]       替换为第n个角色的名字。
 *   \P[n]       替换为第n个队伍成员的名字。(1表示领队,2表示第一个跟随者)
 *   \G          替换为货币单位。（ 数据库>系统 中设置单位）
 *   \\          替换为'\'反斜杠字符本身。
 * 
 * 效果字符
 *   \C[n]       之后文字显示为第n个颜色(rmmv默认颜色0-31，可扩展高级颜色)
 *   \I[n]       绘制第n个图标。
 *   \{          将字体放大一级。
 *   \}          将字体缩小一级。
 * 
 * 消息输入字符
 *   \.          等待 15 帧，四分之一秒。
 *   \|          等待 60 帧，一秒。
 *   \!          等待按键输入。
 *   \>          立刻显示后面文字。（一行内）
 *   \<          取消立刻显示。
 *   \^          显示文本后不等待输入。
 * 
 * 效果字符（特殊）
 *   \$          打开金钱窗口。(对话中右上角出现一个金钱窗口,结束对话消失)
 *
 *
 * ============================================================================
 *   yep新的特殊字符
 * ============================================================================
 *
 * 指代字符
 *   \ac[n]      替换为第n个角色的职业名
 *   \an[n]      替换为第n个角色的昵称（小名）
 *   \pc[n]      替换为第n个队伍成员的职业名
 *   \pn[n]      替换为第n个队伍成员的昵称（小名）
 *   \nc[n]      替换为第n个职业的名字
 *   \ni[n]      替换为第n个物品的名字
 *   \nw[n]      替换为第n个武器的名字
 *   \na[n]      替换为第n个防具的名字
 *   \ns[n]      替换为第n个技能的名字
 *   \nt[n]      替换为第n个状态的名字
 *   \ii[x]      替换为第n个物品的名字 + 图标
 *   \iw[x]      替换为第n个武器的名字 + 图标
 *   \ia[x]      替换为第n个防具的名字 + 图标
 *   \is[x]      替换为第n个技能的名字 + 图标
 *   \it[x]      替换为第n个状态的名字 + 图标
 * 
 * 效果字符
 *   \fr         重设之后文字的字体为默认。
 *   \fn<xx>     指定之后的文字字体，xx为字体名称。
 *   \fs[n]      指定之后的文字字体大小为n。
 *   \fb         之后的文字字体加粗。（如果要还原，就加 \fr ）
 *   \fi         之后的文字字体倾斜。（如果要还原，就加 \fr ）
 *   \oc[n]      之后的文字边线为第n个颜色。(rmmv默认颜色0-31,不支持高级颜色)
 *   \ow[n]      之后的文字边线厚度为n像素。(标准为1像素)
 *
 * 效果字符（自动换行）
 *   <WordWrap>  开启自动换行（最好用插件指令去开启）
 *   <br>        开启自动换行时的 强制换行 字符。
 *
 * 效果字符（其它）
 *   \px[n]      断行，设置当前字符偏移的x值，单位像素。
 *   \py[n]      断行，设置当前字符偏移的y值，单位像素。
 *   \af[n]      该字符把对话框脸图 换成第n个角色脸图。    (只对话框有效)
 *   \pf[n]      该字符把对话框脸图 换成第n个队伍成员脸图。(只对话框有效)
 *
 * 消息输入字符
 *   \w[n]       等待 n 帧。
 * 
 * 姓名框
 *   \n<xx>      建立一个靠左的姓名框，xx为框内的文本信息。
 *   \nc<xx>     建立一个居中的姓名框，xx为框内的文本信息。
 *   \nr<xx>     建立一个靠右的姓名框，xx为框内的文本信息。
 *
 *
 * ============================================================================
 *   可选设定
 * ============================================================================
 * 你可以使用下列插件指令：（中文英文作用一样）
 *
 * 插件指令：MessageRows 6
 * 插件指令：>消息核心 : 设置对话框行数 : 6
 * 插件指令：>消息核心 : 还原默认对话框行数
 *
 * 1.默认消息高度为4行，修改后永久有效。要记得还原。
 * 2.可以放长文章，插件会自动把rmmv中后面行连接起来。
 * 3.如果要播放诗歌、长词，建议直接用 rmmv原生函数： 信息 > 显示滚动文字。
 * 
 * 插件指令：MessageWidth 400
 * 插件指令：>消息核心 : 设置对话框宽度 : 400
 * 插件指令：>消息核心 : 还原默认对话框宽度
 *
 * 1.默认消息宽度为主界面宽度（816），修改后永久有效。要记得还原。
 * 2.注意，修改宽度后，文字的显示量会变化，你需要考虑修改每行的文字，或者
 *   直接用自动换行。
 *
 * 插件指令：EnableWordWrap
 * 插件指令：DisableWordWrap
 * 插件指令：>消息核心 : 开启自动换行
 * 插件指令：>消息核心 : 关闭自动换行
 *
 * 1.设置自动换行后，消息中的换行符会全部 打散重组。
 *   如果你要在自动换行的基础上强制换行，需要使用字符 <br> 。
 * 2.需要注意的是，关闭自动换行后，字符 <br> 将作为正常字符显示。
 *
 * 插件指令：EnableFastForward
 * 插件指令：DisableFastForward
 * 插件指令：>消息核心 : 启用快进键设置
 * 插件指令：>消息核心 : 禁用快进键设置
 * 
 * 1.快进键可以帮助玩家跳过许多对话。插件指令设置永久有效。
 *
 * ============================================================================
 *   Bug修复说明
 * ============================================================================
 * [v1.1]
 * 添加了部分对话框插件的兼容。
 * [v1.0]
 * 完成插件翻译。
 * 
 * （自从上一次适配了1.50工程后，很久没更新了）
 * Version 1.19:
 * - Updated for RPG Maker MV version 1.5.0.
 *
 * Version 1.18:
 * - Added new plugin parameters: 'Font Name CH' and 'Font Name KR'.
 *
 * Version 1.17:
 * - Compatibility update with Message Macros for 'Name Box Auto Close' option.
 *
 * Version 1.16:
 * - Added 'Tight Wrap' plugin parameter as a word wrap option to make the
 * word wrap tighter when using faces.
 *
 * Version 1.15:
 * - Added a failsafe where if the name box window would be off the screen, it
 * will automatically reposition itself to under the main message window.
 *
 * Version 1.14:
 * - Added 'Name Box Close' plugin parameter. If this is enabled, the message
 * window will check for the Name Window speaker each time a follow up message
 * occurs. If the name in the currently Name Window matches the name in the
 * following Name Window, the message window will remain open. If it doesn't,
 * the Name Window will close and reopen to indicate a new speaker.
 *
 * Version 1.13:
 * - Added 'Maintain Font' plugin parameter under the Font category. This will
 * allow you to use text codes \fn<x> and \fs[x] to permanently change the font
 * of your messages until you use it again. \fr will reset them to the plugin's
 * default parameter settings.
 *
 * Version 1.12:
 * - 'Word Wrap Space' parameter no longer leaves a space at the beginning of
 * each message.
 *
 * Version 1.11:
 * - Added 'Font Outline' parameter for the plugin parameters. This adjusts the
 * font outline width used by default for only message fonts.
 *
 * Version 1.10:
 * - Updated the Message Row system for Extended Message Pack 1's Autosizing
 * feature to work with extended heights.
 *
 * Version 1.09:
 * - Replaced 'Fast Forward' parameter with the 'Fast Forward Key' parameter
 * and 'Enable Fast Forward' parameter. Two new Plugin Commands are added. They
 * are 'EnableFastForward' and 'DisableFastForward' for control over when fast
 * forwarding is allowed as to not cause timed cutscenes to desynch.
 *
 * Version 1.08:
 * - Fixed a bug regarding Input Number positioning when the Message Window's
 * position was middle.
 *
 * Version 1.07:
 * - Added 'Word Wrap Space' for word wrap users. This parameter will leave a
 * space behind for those who want a space left behind.
 *
 * Version 1.06:
 * - Fixed a bug that would cause masking problems with mobile devices.
 *
 * Version 1.05:
 * - Fixed a bug that would cause the namebox window to appear distorted.
 *
 * Version 1.04:
 * - Fixed a bug that captured too many text codes with the namebox window.
 * - Timed Name Window's closing speed with main window's closing speed.
 *
 * Verison 1.03:
 * - Fixed a bug with textcodes that messed up wordwrapping.
 * - Fixed a bug with font reset, italic, and bold textcodes.
 *
 * Version 1.02:
 * - Namebox Window's overlap feature that's in every MV window is now disabled
 * to allow for overlapping with main message window.
 * - Updated window positioning for Branch Choices, Number Input, and Item
 * Selection windows.
 *
 * Version 1.01:
 * - Added 'Description Wrap' into the parameters to allow for all item
 * descriptions to be automatically processed with word wrapping.
 *
 * Version 1.00:
 * - Finished plugin!
 *
 * 
 *
 * @param ---对话框---
 * @default
 *
 * @param 默认行数
 * @parent ---对话框---
 * @type number
 * @min 0
 * @desc 对话框显示默认的行数，可以通过插件指令修改对话框行数。（默认4行）
 * @default 4
 *
 * @param 默认宽度
 * @parent ---对话框---
 * @desc 对话框的默认宽度，输入数字，单位像素。
 * （输入 Graphics.boxWidth 表示与主窗口一样宽）
 * @default Graphics.boxWidth
 *
 * @param 含头像时文字间距
 * @parent ---对话框---
 * @desc 对话框中有头像时，文字x的偏移值。
 * （输入 Window_Base._faceWidth 表示头像宽度）
 * @default Window_Base._faceWidth + 24
 *
 * @param 初始是否启用快进键
 * @parent ---对话框---
 * @type boolean
 * @on 启用
 * @off 关闭
 * @desc 启用 - true，关闭 - false。
 * @default true
 *
 * @param 快进键
 * @parent ---对话框---
 * @type select
 * @option 基本键-加速键
 * @value shift
 * @option 基本键-上一页
 * @value pageup
 * @option 基本键-下一页
 * @value pagedown
 * @desc 按住快进键，可以快速跳过对话框中的非常多的文字信息。（键位修改可以去看看插件 互动-键盘手柄按键修改器）
 * @default pagedown
 *
 * @param 是否启用英文单词换行
 * @parent ---对话框---
 * @type boolean
 * @on 启用
 * @off 关闭
 * @desc 如果你在对话框中输入了超长的英文单词，如果空间不够，会自动挤到下一行。（中文无效）
 * @default false
 *
 * @param 是否启用帮助窗口单词换行
 * @parent ---对话框---
 * @type boolean
 * @on 启用
 * @off 关闭
 * @desc 作用于所有菜单的帮助窗口，如果输入超长英文单词，则换行。（中文无效）
 * @default false
 *
 * @param 是否把所有换行符变成空格
 * @parent ---对话框---
 * @type boolean
 * @on 启用
 * @off 关闭
 * @desc 默认把你输入的所有回车换行，变成空格。
 * @default false
 *
 * @param 含头像时是否缩小文字宽度
 * @parent ---对话框---
 * @type boolean
 * @on 启用
 * @off 关闭
 * @desc 含头像的时候，对话框中的文字宽度会缩小变紧凑一些。
 * @default false
 *
 * @param ---消息字体---
 * @default
 *
 * @param 默认模式的消息字体
 * @parent ---消息字体---
 * @desc 默认模式使用的字体，默认设置:GameFont。
 * @default GameFont
 *
 * @param 中文模式的消息字体
 * @parent ---消息字体---
 * @desc 如果你的设置为中文模式,将用该字体。默认设置:SimHei,Heiti TC,sans-serif。（rmmv都为默认模式,中文模式需要另调）
 * @default SimHei, Heiti TC, sans-serif
 *
 * @param 日韩模式的消息字体
 * @parent ---消息字体---
 * @desc 如果你的设置为日韩模式,将用该字体。默认设置:Dotum,AppleGothic,sans-serif。（rmmv都为默认模式,日韩模式需要另调）
 * @default Dotum, AppleGothic, sans-serif
 *
 * @param 默认消息字体大小
 * @parent ---消息字体---
 * @type number
 * @min 1
 * @desc 所有消息框、对话框的默认字体大小。
 * （默认：28）
 * @default 28
 *
 * @param 默认消息文字边厚度
 * @parent ---消息字体---
 * @type number
 * @min 0
 * @desc 所有消息框、对话框的默认文字边厚度。
 * （默认：4）
 * @default 4
 *
 * @param 是否保持特殊字符的改变
 * @parent ---消息字体---
 * @type boolean
 * @on 保持
 * @off 关闭
 * @desc 特殊字符修改了字体设置，将在下一个对话框中仍然有效。（不建议开启）
 * @default false
 *
 * @param ---姓名框---
 * @default
 *
 * @param 平移-姓名框 X
 * @parent ---姓名框---
 * @desc 以rmmv消息分配的位置点为中心，x轴方向偏移，单位像素。
 * @default -28
 *
 * @param 平移-姓名框 Y
 * @parent ---姓名框---
 * @desc 以rmmv消息分配的位置点为中心，y轴方向偏移，单位像素。
 * @default 0
 *
 * @param 姓名框内边距
 * @parent ---姓名框---
 * @desc 姓名框的内边距，控制文字到框左上角的距离。
 * （输入 this.standardPadding() 表示标准窗口的内边距）
 * @default this.standardPadding() * 4
 *
 * @param 姓名框文本颜色
 * @parent ---姓名框---
 * @type number
 * @min 0
 * @max 31
 * @desc 姓名框的文本的默认颜色。（如果要改高级颜色，建议修改 姓名框前缀 ）
 * @default 0
 *
 * @param 姓名框前缀
 * @parent ---姓名框---
 * @desc 所有姓名框默认出现的前缀，你可以在这里加效果字符，包括修改大小、文字边、颜色等。
 * @default \c[4]
 *
 * @param 是否关闭姓名框背景
 * @parent ---姓名框---
 * @type boolean
 * @on 关闭
 * @off 显示
 * @desc 关闭姓名框背景，将只显示姓名文本。
 * @default false
 *
 * @param 姓名框是否长期显示
 * @parent ---姓名框---
 * @type boolean
 * @on 长期显示
 * @off 关闭
 * @desc 当遇到显示姓名框的字符后，后面的对话，姓名框都不会关掉。
 * @default false
 * 
 */

//=============================================================================
// ** 变量获取
//=============================================================================
	var Yanfly = Yanfly || {};
	Yanfly.Message = Yanfly.Message || {};
	Yanfly.Message.version = 1.19;
	
	var Imported = Imported || {};
	Imported.YEP_MessageCore = true;
	Yanfly.Parameters = PluginManager.parameters('YEP_MessageCore');
	Yanfly.Param = Yanfly.Param || {};
	
	Yanfly.Param.MSGDefaultRows = String(Yanfly.Parameters['默认行数'] || "4");
	Yanfly.Param.MSGDefaultWidth = String(Yanfly.Parameters['默认宽度'] || "Graphics.boxWidth");
	Yanfly.Param.MSGFaceIndent = String(Yanfly.Parameters['含头像时文字间距'] || "Window_Base._faceWidth + 24");
	Yanfly.Param.MSGFastForwardKey = String(Yanfly.Parameters['快进键'] || "pagedown");
	Yanfly.Param.MSGFFOn = eval(String(Yanfly.Parameters['初始是否启用快进键'] || "true"));
	Yanfly.Param.MSGWordWrap = String(Yanfly.Parameters['是否启用英文单词换行'] || "false");
	Yanfly.Param.MSGWordWrap = eval(Yanfly.Param.MSGWordWrap);
	Yanfly.Param.MSGDescWrap = String(Yanfly.Parameters['是否启用帮助窗口单词换行'] || "false");
	Yanfly.Param.MSGWrapSpace = eval(String(Yanfly.Parameters['是否把所有换行符变成空格'] || "false"));
	Yanfly.Param.MSGTightWrap = eval(String(Yanfly.Parameters['含头像时是否缩小文字宽度'] || "false"));
	
	Yanfly.Param.MSGFontName = String(Yanfly.Parameters['默认模式的消息字体'] || "GameFont");
	Yanfly.Param.MSGCNFontName = String(Yanfly.Parameters['中文模式的消息字体'] || "SimHei, Heiti TC, sans-serif");
	Yanfly.Param.MSGKRFontName = String(Yanfly.Parameters['日韩模式的消息字体'] || "Dotum, AppleGothic, sans-serif");
	Yanfly.Param.MSGFontSize = Number(Yanfly.Parameters['默认消息字体大小'] || 28);
	Yanfly.Param.MSGFontOutline = Number(Yanfly.Parameters['默认消息文字边厚度'] || 4);
	Yanfly.Param.MSGFontMaintain = eval(String(Yanfly.Parameters['是否保持特殊字符的改变'] || "false"));
	//Yanfly.Param.MSGFontSizeChange = String(Yanfly.Parameters['Font Size Change'] || "8");	//（此yep功能去掉）
	//Yanfly.Param.MSGFontChangeMax = String(Yanfly.Parameters['Font Changed Max'] || "96");
	//Yanfly.Param.MSGFontChangeMin = String(Yanfly.Parameters['Font Changed Min'] || "12");
	
	Yanfly.Param.MSGNameBoxBufferX = String(Yanfly.Parameters['平移-姓名框 X'] || "-28");
	Yanfly.Param.MSGNameBoxBufferY = String(Yanfly.Parameters['平移-姓名框 Y'] || "0");
	Yanfly.Param.MSGNameBoxPadding = String(Yanfly.Parameters['姓名框内边距'] || "this.standardPadding() * 4");
	Yanfly.Param.MSGNameBoxColor = Number(Yanfly.Parameters['姓名框文本颜色'] || 0);
	Yanfly.Param.MSGNameBoxClear = String(Yanfly.Parameters['是否关闭姓名框背景'] || "false");
	Yanfly.Param.MSGNameBoxText = String(Yanfly.Parameters['姓名框前缀'] || "\\c[4]");
	Yanfly.Param.MSGNameBoxClose = String(Yanfly.Parameters['姓名框是否长期显示'] || "false");
	Yanfly.Param.MSGNameBoxClose = eval(Yanfly.Param.MSGNameBoxClose);
	

//=============================================================================
// ** 存储数据
//
//			说明：	> 这里提供了大量设置/获取函数，使用时注意调取函数。
//					> yep这种套一堆 初始化 写法非常糟糕，不要学。
//=============================================================================
//==============================
// * 存储数据 - 初始化
//==============================
Yanfly.Message.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    Yanfly.Message.Game_System_initialize.call(this);
    this.initMessageSystem();				//初始化 - 功能参数
    this.initMessageFontSettings();			//初始化 - 字体参数
};
//==============================
// * 初始化 - 功能参数
//==============================
Game_System.prototype.initMessageSystem = function() {
    this._wordWrap = Yanfly.Param.MSGWordWrap;				//自动换行
    this._fastForward = Yanfly.Param.MSGFFOn;				//加速对话
};
//==============================
// * 初始化 - 字体参数
//==============================
Game_System.prototype.initMessageFontSettings = function() {
    if ($dataSystem.locale.match(/^zh/)) {
      this._msgFontName = Yanfly.Param.MSGCNFontName;		//字体
    } else if ($dataSystem.locale.match(/^ko/)) {
      this._msgFontName = Yanfly.Param.MSGKRFontName;
    } else {
      this._msgFontName = Yanfly.Param.MSGFontName;
    }
    this._msgFontSize = Yanfly.Param.MSGFontSize;			//字体大小
    this._msgFontOutline = Yanfly.Param.MSGFontOutline;		//字体边厚度
};

//==============================
// * 特殊获取 - 对话框行数
//==============================
Game_System.prototype.messageRows = function() {
	if( $gameTemp._drill_yep_buffer_messageRows == null ){		//（同一帧中 多次调用时，使用同一个值，不要反复eval）
		var rows = eval(this._messageRows) || eval(Yanfly.Param.MSGDefaultRows);
		$gameTemp._drill_yep_buffer_messageRows = Math.max(1, Number(rows));
	}
    return $gameTemp._drill_yep_buffer_messageRows;
};
//==============================
// * 特殊获取 - 对话框宽度
//==============================
Game_System.prototype.messageWidth = function() {
	if( $gameTemp._drill_yep_buffer_messageWidth == null ){		//（同一帧中 多次调用时，使用同一个值，不要反复eval）
		$gameTemp._drill_yep_buffer_messageWidth = eval(this._messageWidth) || eval(Yanfly.Param.MSGDefaultWidth);
	}
	return $gameTemp._drill_yep_buffer_messageWidth;
};
//==============================
// * 特殊获取 - 场景帧刷新
//
//			说明：	这里用于防止 messageRows 和 messageWidth 被反复eval。
//==============================
var _drill_yep_updateScene = SceneManager.updateScene;
SceneManager.updateScene = function() {
	_drill_yep_updateScene.call( this );
    if( this._scene && $gameTemp ){
		$gameTemp._drill_yep_buffer_messageWidth = null;	//清除变量
		$gameTemp._drill_yep_buffer_messageRows = null;
	}
}

//==============================
// * 访问器 - 全局自动换行 - 获取
//==============================
Game_System.prototype.wordWrap = function() {
    if (this._wordWrap === undefined) this.initMessageSystem();		//（自动初始化）
    return this._wordWrap;
};
//==============================
// * 访问器 - 全局自动换行 - 设置
//==============================
Game_System.prototype.setWordWrap = function(state) {
    if (this._wordWrap === undefined) this.initMessageSystem();
    this._wordWrap = state;
};
//==============================
// * 访问器 - 加速对话 - 获取
//==============================
Game_System.prototype.isFastFowardEnabled = function() {
    if (this._fastForward === undefined) this.initMessageSystem();
    return this._fastForward;
};
//==============================
// * 访问器 - 加速对话 - 设置
//==============================
Game_System.prototype.setFastFoward = function(state) {
    if (this._fastForward === undefined) this.initMessageSystem();
    this._fastForward = state;
};
//==============================
// * 访问器 - 字体 - 获取
//==============================
Game_System.prototype.getMessageFontName = function() {
    if (this._msgFontName === undefined) this.initMessageFontSettings();
    return this._msgFontName;
};
//==============================
// * 访问器 - 字体 - 设置
//==============================
Game_System.prototype.setMessageFontName = function(value) {
    if (this._msgFontName === undefined) this.initMessageFontSettings();
    this._msgFontName = value;
};
//==============================
// * 访问器 - 字体大小 - 获取
//==============================
Game_System.prototype.getMessageFontSize = function() {
    if (this._msgFontSize === undefined) this.initMessageFontSettings();
    return this._msgFontSize;
};
//==============================
// * 访问器 - 字体大小 - 设置
//==============================
Game_System.prototype.setMessageFontSize = function(value) {
    if (this._msgFontSize === undefined) this.initMessageFontSettings();
    this._msgFontSize = value;
};
//==============================
// * 访问器 - 字体边厚度 - 获取
//==============================
Game_System.prototype.getMessageFontOutline = function() {
    if (this._msgFontOutline === undefined) this.initMessageFontSettings();
    return this._msgFontOutline;
};
//==============================
// * 访问器 - 字体边厚度 - 设置
//==============================
Game_System.prototype.setMessageFontOutline = function(value) {
    if (this._msgFontOutline === undefined) this.initMessageFontSettings();
    this._msgFontOutline = value;
};


//=============================================================================
// ** 插件指令
//=============================================================================
Yanfly.Message.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    Yanfly.Message.Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'MessageRows'){ $gameSystem._messageRows = args[0];}
    if (command === 'MessageWidth'){ $gameSystem._messageWidth = args[0];}
    if (command === 'EnableWordWrap'){ $gameSystem.setWordWrap(true);}
    if (command === 'DisableWordWrap'){ $gameSystem.setWordWrap(false);}
    if (command === 'EnableFastForward'){ $gameSystem.setFastFoward(true);}
    if (command === 'DisableFastForward'){ $gameSystem.setFastFoward(false);}
    if (command === '>消息核心' && args.length == 4 && args[1] == "设置对话框行数"){ $gameSystem._messageRows = args[3];}
    if (command === '>消息核心' && args.length == 4 && args[1] == "设置对话框宽度"){ $gameSystem._messageWidth = args[3];}
    if (command === '>消息核心' && args.length == 2 && args[1] == "还原默认对话框行数"){ $gameSystem._messageRows = Yanfly.Param.MSGDefaultRows;}
    if (command === '>消息核心' && args.length == 2 && args[1] == "还原默认对话框宽度"){ $gameSystem._messageWidth = Yanfly.Param.MSGDefaultWidth;}
    if (command === '>消息核心' && args.length == 2 && args[1] == "开启自动换行"){ $gameSystem.setWordWrap(true);}
    if (command === '>消息核心' && args.length == 2 && args[1] == "关闭自动换行"){ $gameSystem.setWordWrap(false);}
    if (command === '>消息核心' && args.length == 2 && args[1] == "启用快进键设置"){ $gameSystem.setFastFoward(true);}
    if (command === '>消息核心' && args.length == 2 && args[1] == "禁用快进键设置"){ $gameSystem.setFastFoward(false);}
};


//=============================================================================
// ** 字体加粗
//=============================================================================
//==============================
// * 字体加粗 - bitmap标记
//==============================
Yanfly.Message.Bitmap_initialize = Bitmap.prototype.initialize;
Bitmap.prototype.initialize = function(width, height) {
    Yanfly.Message.Bitmap_initialize.call(this, width, height);
    this.fontBold = false;
};
//==============================
// * 字体加粗 - 执行加粗
//==============================
Yanfly.Message.Bitmap_makeFontNameText = Bitmap.prototype._makeFontNameText;
Bitmap.prototype._makeFontNameText = function() {
    if (this.fontBold) return 'Bold ' + this.fontSize + 'px ' + this.fontFace;
    return Yanfly.Message.Bitmap_makeFontNameText.call(this);
};



//=============================================================================
// Game_Interpreter
//=============================================================================
Game_Interpreter.prototype.command101 = function() {
    if (!$gameMessage.isBusy()) {
      $gameMessage.setFaceImage(this._params[0], this._params[1]);
      $gameMessage.setBackground(this._params[2]);
      $gameMessage.setPositionType(this._params[3]);
      while (this.isContinueMessageString()) {
        this._index++;
        if (this._list[this._index].code === 401) {
          $gameMessage.addText(this.currentCommand().parameters[0]);
        }
        if ($gameMessage._texts.length >= $gameSystem.messageRows()) break;
      }
      switch (this.nextEventCode()) {
      case 102:
        this._index++;
        this.setupChoices(this.currentCommand().parameters);
        break;
      case 103:
        this._index++;
        this.setupNumInput(this.currentCommand().parameters);
        break;
      case 104:
        this._index++;
        this.setupItemChoice(this.currentCommand().parameters);
        break;
      }
      this._index++;
      this.setWaitMode('message');
    }
    return false;
};

Game_Interpreter.prototype.isContinueMessageString = function() {
    if (this.nextEventCode() === 101 && $gameSystem.messageRows() > 4) {
      return true;
    } else {
      return this.nextEventCode() === 401;
    }
};

//=============================================================================
// ** 窗口基类
//=============================================================================
//==============================
// * 窗口基类 - 重置字体
//==============================
Yanfly.Message.Window_Base_resetFontSettings = Window_Base.prototype.resetFontSettings;
Window_Base.prototype.resetFontSettings = function() {
    Yanfly.Message.Window_Base_resetFontSettings.call(this);
    this.contents.fontBold = false;										//标记 - 加粗
    this.contents.fontItalic = false;									//标记 - 斜体
    this.contents.outlineColor = 'rgba(0, 0, 0, 0.5)';					//标记 - 外框色
    this.contents.outlineWidth = $gameSystem.getMessageFontOutline();	//标记 - 外框厚度
};
//==============================
// * 窗口基类 - 获取Ex文本的宽度
//==============================
Window_Base.prototype.textWidthEx = function( text ){
    return this.drawTextEx(text, 0, this.contents.height + this.lineHeight());
};

//==============================
// * 绘制 - 扩展文本 - 指代字符转换
//==============================
Yanfly.Message.Window_Base_convertEscapeCharacters = Window_Base.prototype.convertEscapeCharacters;
Window_Base.prototype.convertEscapeCharacters = function(text) {
    text = this.setWordWrap(text);
    text = Yanfly.Message.Window_Base_convertEscapeCharacters.call(this, text);
    text = this.convertExtraEscapeCharacters(text);
    return text;
};
//==============================
// * 绘制 - 扩展文本 - 自动换行开关
//==============================
Window_Base.prototype.setWordWrap = function(text) {
    this._wordWrap = false;
    if (text.match(/<(?:WordWrap)>/i)) {
      this._wordWrap = true;
      text = text.replace(/<(?:WordWrap)>/gi, '');
    }
    if (this._wordWrap) {
      var replace = Yanfly.Param.MSGWrapSpace ? ' ' : '';
      text = text.replace(/[\n\r]+/g, replace);
    }
    if (this._wordWrap) {
      text = text.replace(/<(?:BR|line break)>/gi, '\n');
    } else {
      text = text.replace(/<(?:BR|line break)>/gi, '');
    }
    return text;
};
//==============================
// * 绘制 - 扩展文本 - YEP指代字符转换
//==============================
Window_Base.prototype.convertExtraEscapeCharacters = function(text) {
    // Font Codes
    text = text.replace(/\x1bFR/gi, '\x1bMSGCORE[0]');
    text = text.replace(/\x1bFB/gi, '\x1bMSGCORE[1]');
    text = text.replace(/\x1bFI/gi, '\x1bMSGCORE[2]');
    // \AC[n]
    text = text.replace(/\x1bAC\[(\d+)\]/gi, function() {
        return this.actorClassName(parseInt(arguments[1]));
    }.bind(this));
    // \AN[n]
    text = text.replace(/\x1bAN\[(\d+)\]/gi, function() {
        return this.actorNickname(parseInt(arguments[1]));
    }.bind(this));
    // \PC[n]
    text = text.replace(/\x1bPC\[(\d+)\]/gi, function() {
        return this.partyClassName(parseInt(arguments[1]));
    }.bind(this));
    // \PN[n]
    text = text.replace(/\x1bPN\[(\d+)\]/gi, function() {
        return this.partyNickname(parseInt(arguments[1]));
    }.bind(this));
    // \NC[n]
    text = text.replace(/\x1bNC\[(\d+)\]/gi, function() {
        return $dataClasses[parseInt(arguments[1])].name;
    }.bind(this));
    // \NI[n]
    text = text.replace(/\x1bNI\[(\d+)\]/gi, function() {
        return $dataItems[parseInt(arguments[1])].name;
    }.bind(this));
    // \NW[n]
    text = text.replace(/\x1bNW\[(\d+)\]/gi, function() {
        return $dataWeapons[parseInt(arguments[1])].name;
    }.bind(this));
    // \NA[n]
    text = text.replace(/\x1bNA\[(\d+)\]/gi, function() {
        return $dataArmors[parseInt(arguments[1])].name;
    }.bind(this));
    // \NE[n]
    text = text.replace(/\x1bNE\[(\d+)\]/gi, function() {
        return $dataEnemies[parseInt(arguments[1])].name;
    }.bind(this));
    // \NS[n]
    text = text.replace(/\x1bNS\[(\d+)\]/gi, function() {
        return $dataSkills[parseInt(arguments[1])].name;
    }.bind(this));
    // \NT[n]
    text = text.replace(/\x1bNT\[(\d+)\]/gi, function() {
        return $dataStates[parseInt(arguments[1])].name;
    }.bind(this));
    // \II[n]
    text = text.replace(/\x1bII\[(\d+)\]/gi, function() {
        return this.escapeIconItem(arguments[1], $dataItems);
    }.bind(this));
    // \IW[n]
    text = text.replace(/\x1bIW\[(\d+)\]/gi, function() {
        return this.escapeIconItem(arguments[1], $dataWeapons);
    }.bind(this));
    // \IA[n]
    text = text.replace(/\x1bIA\[(\d+)\]/gi, function() {
        return this.escapeIconItem(arguments[1], $dataArmors);
    }.bind(this));
    // \IS[n]
    text = text.replace(/\x1bIS\[(\d+)\]/gi, function() {
        return this.escapeIconItem(arguments[1], $dataSkills);
    }.bind(this));
    // \IT[n]
    text = text.replace(/\x1bIT\[(\d+)\]/gi, function() {
        return this.escapeIconItem(arguments[1], $dataStates);
    }.bind(this));
    // Finish
    return text;
};

Window_Base.prototype.actorClassName = function(n) {
    var actor = n >= 1 ? $gameActors.actor(n) : null;
    return actor ? actor.currentClass().name : '';
};

Window_Base.prototype.actorNickname = function(n) {
    var actor = n >= 1 ? $gameActors.actor(n) : null;
    return actor ? actor.nickname() : '';
};

Window_Base.prototype.partyClassName = function(n) {
    var actor = n >= 1 ? $gameParty.members()[n - 1] : null;
    return actor ? actor.currentClass().name : '';
};

Window_Base.prototype.partyNickname = function(n) {
    var actor = n >= 1 ? $gameParty.members()[n - 1] : null;
    return actor ? actor.nickname() : '';
};

Window_Base.prototype.escapeIconItem = function(n, database) {
    return '\x1bI[' + database[n].iconIndex + ']' + database[n].name;
};

Window_Base.prototype.obtainEscapeString = function(textState) {
    var arr = /^\<(.*?)\>/.exec(textState.text.slice(textState.index));
    if (arr) {
        textState.index += arr[0].length;
        return String(arr[0].slice(1, arr[0].length - 1));
    } else {
        return '';
    }
};

//==============================
// * 绘制 - 逐一绘制 - 效果字符功能
//==============================
Yanfly.Message.Window_Base_processEscapeCharacter = Window_Base.prototype.processEscapeCharacter;
Window_Base.prototype.processEscapeCharacter = function(code, textState) {
  switch (code) {
  case 'MSGCORE':
    var id = this.obtainEscapeParam(textState);
    if (id === 0) {
      $gameSystem.initMessageFontSettings();
      this.resetFontSettings();
    }
    if (id === 1) this.contents.fontBold = !this.contents.fontBold;
    if (id === 2) this.contents.fontItalic = !this.contents.fontItalic;
    break;
  case 'FS':
    var size = this.obtainEscapeParam(textState);
    this.contents.fontSize = size;
    if (Yanfly.Param.MSGFontMaintain) $gameSystem.setMessageFontSize(size);
    break;
  case 'FN':
    var name = this.obtainEscapeString(textState);
    this.contents.fontFace = name;
    if (Yanfly.Param.MSGFontMaintain) $gameSystem.setMessageFontName(name);
    break;
  case 'OC':
    var id = this.obtainEscapeParam(textState);
    this.contents.outlineColor = this.textColor(id);
    break;
  case 'OW':
    this.contents.outlineWidth = this.obtainEscapeParam(textState);
    break;
  case 'PX':
  
	// > 不准套娃
	if( $gameTemp._drill_COWA_bitmap_isCalculating == true ){ return; }
    
	var px = this.obtainEscapeParam(textState);
	textState.x += px;
	
	//（居中/右对齐 宽度修正）
	if( this._drill_COWA_drawingOption ){
		this._drill_COWA_drawingOption['width'] -= px;
	}
    break;
  case 'PY':
  
	// > 不准套娃
	if( $gameTemp._drill_COWA_bitmap_isCalculating == true ){ return; }
	
    textState.y += this.obtainEscapeParam(textState);
    break;
  default:
    Yanfly.Message.Window_Base_processEscapeCharacter.call(this,
     code, textState);
    break;
  }
};
//==============================
// * 绘制 - 效果字符 - 字体放大（覆写）
//
//			说明：	此yep功能去掉。
//==============================
//Window_Base.prototype.makeFontBigger = function() {
//    var size = this.contents.fontSize + eval(Yanfly.Param.MSGFontSizeChange);
//    this.contents.fontSize = Math.min(size, Yanfly.Param.MSGFontChangeMax);
//};
//==============================
// * 绘制 - 效果字符 - 字体缩小（覆写）
//
//			说明：	此yep功能去掉。
//==============================
//Window_Base.prototype.makeFontSmaller = function() {
//    var size = this.contents.fontSize - eval(Yanfly.Param.MSGFontSizeChange);
//    this.contents.fontSize = Math.max(size, Yanfly.Param.MSGFontChangeMin);
//};


Yanfly.Message.Window_Base_processNormalCharacter = Window_Base.prototype.processNormalCharacter;
Window_Base.prototype.processNormalCharacter = function(textState) {
    if (this.checkWordWrap(textState)){
        textState.index-=1;
        return this.processNewLine(textState);
    }
    Yanfly.Message.Window_Base_processNormalCharacter.call(this, textState);
};

Window_Base.prototype.checkWordWrap = function(textState) {
    if (!textState) return false;
    if (!this._wordWrap) return false;
    var nextSpace = textState.index + 1;
    var nextBreak = textState.text.indexOf('\n', textState.index + 1);
    if (nextSpace < 0) nextSpace = textState.text.length + 1;
    if (nextBreak > 0) nextSpace = Math.min(nextSpace, nextBreak);
    var word = textState.text.substring(textState.index, nextSpace);
    var size = this.textWidthExCheck(word);
    return (size + textState.x > this.wordwrapWidth());
};

Window_Base.prototype.wordwrapWidth = function(){
  return this.contents.width;
};

Window_Base.prototype.saveCurrentWindowSettings = function(){
    this._saveFontFace = this.contents.fontFace;
    this._saveFontSize = this.contents.fontSize;
    this._savetextColor = this.contents.textColor;
    this._saveFontBold = this.contents.fontBold;
    this._saveFontItalic = this.contents.fontItalic;
    this._saveOutlineColor = this.contents.outlineColor;
    this._saveOutlineWidth = this.contents.outlineWidth;
};

Window_Base.prototype.restoreCurrentWindowSettings = function(){
    this.contents.fontFace = this._saveFontFace;
    this.contents.fontSize = this._saveFontSize;
    this.contents.textColor = this._savetextColor;
    this.contents.fontBold = this._saveFontBold;
    this.contents.fontItalic = this._saveFontItalic;
    this.contents.outlineColor = this._saveOutlineColor;
    this.contents.outlineWidth = this._saveOutlineWidth;
};

Window_Base.prototype.clearCurrentWindowSettings = function(){
    this._saveFontFace = undefined;
    this._saveFontSize = undefined;
    this._savetextColor = undefined;
    this._saveFontBold = undefined;
    this._saveFontItalic = undefined;
    this._saveOutlineColor = undefined;
    this._saveOutlineWidth = undefined;
};

Window_Base.prototype.textWidthExCheck = function(text) {
    var setting = this._wordWrap;
    this._wordWrap = false;
    this.saveCurrentWindowSettings();
    this._checkWordWrapMode = true;
    var value = this.drawTextEx(text, 0, this.contents.height);
    this._checkWordWrapMode = false;
    this.restoreCurrentWindowSettings();
    this.clearCurrentWindowSettings();
    this._wordWrap = setting;
    return value;
};

//=============================================================================
// Window_Help
//=============================================================================

Yanfly.Message.Window_Help_setItem = Window_Help.prototype.setItem;
Window_Help.prototype.setItem = function(item) {
    if (eval(Yanfly.Param.MSGDescWrap)) {
      this.setText(item ? '<WordWrap>' + item.description : '');
    } else {
      Yanfly.Message.Window_Help_setItem.call(this, item);
    }
};

//=============================================================================
// Window_ChoiceList
//=============================================================================

Window_ChoiceList.prototype.standardFontFace = function() {
    return $gameSystem.getMessageFontName();
};

Window_ChoiceList.prototype.standardFontSize = function() {
    return $gameSystem.getMessageFontSize();
};

Yanfly.Message.Window_ChoiceList_updatePlacement = Window_ChoiceList.prototype.updatePlacement;
Window_ChoiceList.prototype.updatePlacement = function() {
    Yanfly.Message.Window_ChoiceList_updatePlacement.call(this);
    var messagePosType = $gameMessage.positionType();
    if (messagePosType === 0) {
      this.y = this._messageWindow.height;
    } else if (messagePosType === 2) {
      this.y = Graphics.boxHeight - this._messageWindow.height - this.height;
    }
};

//=============================================================================
// Window_NumberInput
//=============================================================================

Yanfly.Message.Window_NumberInput_updatePlacement = Window_NumberInput.prototype.updatePlacement;
Window_NumberInput.prototype.updatePlacement = function() {
    Yanfly.Message.Window_NumberInput_updatePlacement.call(this);
    var messageY = this._messageWindow.y;
    var messagePosType = $gameMessage.positionType();
    if (messagePosType === 0) {
      this.y = this._messageWindow.height;
    } else if (messagePosType === 1) {
      if (messageY >= Graphics.boxHeight / 2) {
          this.y = messageY - this.height;
      } else {
          this.y = messageY + this._messageWindow.height;
      }
    } else if (messagePosType === 2) {
      this.y = Graphics.boxHeight - this._messageWindow.height - this.height;
    }
};

//=============================================================================
// Window_EventItem
//=============================================================================

Yanfly.Message.Window_EventItem_updatePlacement = Window_EventItem.prototype.updatePlacement;
Window_EventItem.prototype.updatePlacement = function() {
    Yanfly.Message.Window_EventItem_updatePlacement.call(this);
    var messagePosType = $gameMessage.positionType();
    if (messagePosType === 0) {
      this.y = Graphics.boxHeight - this.height;
    } else if (messagePosType === 2) {
      this.y = 0;
    }
};

//=============================================================================
// Window_ScrollText
//=============================================================================

Window_ScrollText.prototype.standardFontFace = function() {
    return $gameSystem.getMessageFontName();
};

Window_ScrollText.prototype.standardFontSize = function() {
    return $gameSystem.getMessageFontSize();
};

//=============================================================================
// ** 姓名框【Window_NameBox】
//=============================================================================
Yanfly.DisableWebGLMask = false;

function Window_NameBox() {
    this.initialize.apply(this, arguments);
}

Window_NameBox.prototype = Object.create(Window_Base.prototype);
Window_NameBox.prototype.constructor = Window_NameBox;

Window_NameBox.prototype.initialize = function(parentWindow) {
    this._parentWindow = parentWindow;
    Window_Base.prototype.initialize.call(this, 0, 0, 240, this.windowHeight());
    this._text = '';
    this._lastNameText = '';
    this._openness = 0;
    this._closeCounter = 0;
    this.deactivate();
    if (eval(Yanfly.Param.MSGNameBoxClear)) {
      this.backOpacity = 0;
      this.opacity = 0;
    }
    this.hide();
};

Window_NameBox.prototype.windowWidth = function() {
    this.resetFontSettings();
    var dw = this.textWidthEx(this._text);
    dw += this.padding * 2;
    var width = dw + eval(Yanfly.Param.MSGNameBoxPadding)
    return Math.ceil(width);
};

Window_NameBox.prototype.textWidthEx = function(text) {
    return this.drawTextEx(text, 0, this.contents.height);
};

Window_NameBox.prototype.calcNormalCharacter = function(textState) {
    return this.textWidth(textState.text[textState.index++]);
};

Window_NameBox.prototype.windowHeight = function() {
    return this.fittingHeight(1);
};

Window_NameBox.prototype.standardFontFace = function() {
    return $gameSystem.getMessageFontName();
};

Window_NameBox.prototype.standardFontSize = function() {
    return $gameSystem.getMessageFontSize();
};

Window_NameBox.prototype.update = function() {
    Window_Base.prototype.update.call(this);
    if (this.active) return;
    if (this.isClosed()) return;
    if (this.isClosing()) return;
    if (this._closeCounter-- > 0) return;
    if (this._parentWindow.isClosing()) {
      this._openness = this._parentWindow.openness;
    }
    this.close();
};

Window_NameBox.prototype.refresh = function(text, position) {
    this.show();
    this._lastNameText = text;
    this._text = Yanfly.Param.MSGNameBoxText + text;
    this._position = position;
    this.width = this.windowWidth();
    this.createContents();
    this.contents.clear();
    this.resetFontSettings();
    this.changeTextColor(this.textColor(Yanfly.Param.MSGNameBoxColor));
    var padding = eval(Yanfly.Param.MSGNameBoxPadding) / 2;
    this.drawTextEx(this._text, padding, 0, this.contents.width);
    this._parentWindow.adjustWindowSettings();
    this._parentWindow.updatePlacement();
    this.adjustPositionX();
    this.adjustPositionY();
    this.open();
    this.activate();
    this._closeCounter = 4;
    return '';
};

Window_NameBox.prototype.adjustPositionX = function() {
    if (this._position === 1) {
      this.x = this._parentWindow.x;
      this.x += eval(Yanfly.Param.MSGNameBoxBufferX);
    } else if (this._position === 2) {
      this.x = this._parentWindow.x;
      this.x += this._parentWindow.width * 3 / 10;
      this.x -= this.width / 2;
    } else if (this._position === 3) {
      this.x = this._parentWindow.x;
      this.x += this._parentWindow.width / 2;
      this.x -= this.width / 2;
    } else if (this._position === 4) {
      this.x = this._parentWindow.x;
      this.x += this._parentWindow.width * 7 / 10;
      this.x -= this.width / 2;
    } else {
      this.x = this._parentWindow.x + this._parentWindow.width;
      this.x -= this.width;
      this.x -= eval(Yanfly.Param.MSGNameBoxBufferX);
    }
    this.x = this.x.clamp(0, Graphics.boxWidth - this.width);
};

Window_NameBox.prototype.adjustPositionY = function() {
    if ($gameMessage.positionType() === 0) {
      this.y = this._parentWindow.y + this._parentWindow.height;
      this.y -= eval(Yanfly.Param.MSGNameBoxBufferY);
    } else {
      this.y = this._parentWindow.y;
      this.y -= this.height;
      this.y += eval(Yanfly.Param.MSGNameBoxBufferY);
    }
    if (this.y < 0) {
      this.y = this._parentWindow.y + this._parentWindow.height;
      this.y -= eval(Yanfly.Param.MSGNameBoxBufferY);
    }
};


//=============================================================================
// Game_Message
//=============================================================================
Game_Message.prototype.addText = function(text) {
    if( $gameSystem.wordWrap() ){ text = '<WordWrap>' + text; }		//开启全局自动换行时，每列自动添加 换行字符
    this.add(text);
};

//=============================================================================
// Window_Message
//=============================================================================
Yanfly.Message.Window_Message_createSubWindows = Window_Message.prototype.createSubWindows;
Window_Message.prototype.createSubWindows = function() {
    Yanfly.Message.Window_Message_createSubWindows.call(this);
    this._nameWindow = new Window_NameBox(this);
    Yanfly.nameWindow = this._nameWindow;
    var scene = SceneManager._scene;
    scene.addChild(this._nameWindow);
};

Window_Message.prototype.numVisibleRows = function() {
    return $gameSystem.messageRows();
};

Window_Message.prototype.windowWidth = function() {
    return $gameSystem.messageWidth();
};

Window_Message.prototype.wordwrapWidth = function(){
  if (Yanfly.Param.MSGTightWrap && $gameMessage.faceName() !== '') {
    return this.contents.width - this.newLineX();
  }
  return Window_Base.prototype.wordwrapWidth.call(this);
};

Window_Message.prototype.adjustWindowSettings = function() {
    this.width = this.windowWidth();
    this.height = Math.min(this.windowHeight(), Graphics.boxHeight);
    if (Math.abs(Graphics.boxHeight - this.height) < this.lineHeight()) {
      this.height = Graphics.boxHeight;
    }
    this.createContents();
    this.x = (Graphics.boxWidth - this.width) / 2;
};

Yanfly.Message.Window_Message_startMessage = Window_Message.prototype.startMessage;
Window_Message.prototype.startMessage = function() {
    this._nameWindow.deactivate();
    Yanfly.Message.Window_Message_startMessage.call(this);
};

Yanfly.Message.Window_Message_terminateMessage = Window_Message.prototype.terminateMessage;
Window_Message.prototype.terminateMessage = function() {
    this._nameWindow.deactivate();
    Yanfly.Message.Window_Message_terminateMessage.call(this);
};

Yanfly.Message.Window_Message_newPage = Window_Message.prototype.newPage;
Window_Message.prototype.newPage = function(textState) {
    this.adjustWindowSettings();
    Yanfly.Message.Window_Message_newPage.call(this, textState);
};

Window_Message.prototype.standardFontFace = function() {
    return $gameSystem.getMessageFontName();
};

Window_Message.prototype.standardFontSize = function() {
    return $gameSystem.getMessageFontSize();
};

Window_Message.prototype.newLineX = function() {
    if ($gameMessage.faceName() === '') {
      return 0;
    } else {
      return eval(Yanfly.Param.MSGFaceIndent);
    }
};

Window_Message.prototype.isFastForward = function() {
    if (!$gameSystem.isFastFowardEnabled()) return false;
    return Input.isPressed(Yanfly.Param.MSGFastForwardKey);
};

Yanfly.Message.Window_Message_updateInput = Window_Message.prototype.updateInput;
Window_Message.prototype.updateInput = function() {
    if (this.pause && this.isFastForward()) {
      if (!this._textState) {
        this.pause = false;
        this.terminateMessage();
      }
    }
    return Yanfly.Message.Window_Message_updateInput.call(this);
};

Yanfly.Message.Window_Message_updateShowFast = Window_Message.prototype.updateShowFast;
Window_Message.prototype.updateShowFast = function() {
    if (this.isFastForward()) this._showFast = true;
    Yanfly.Message.Window_Message_updateShowFast.call(this);
};

Yanfly.Message.Window_Message_updateWait = Window_Message.prototype.updateWait;
Window_Message.prototype.updateWait = function() {
    if (this.isFastForward()) return false;
    return Yanfly.Message.Window_Message_updateWait.call(this);
};

Yanfly.Message.Window_Message_startWait = Window_Message.prototype.startWait;
Window_Message.prototype.startWait = function(count) {
    if (this._checkWordWrapMode) return;
    Yanfly.Message.Window_Message_startWait.call(this, count);
    if (this.isFastForward()) this._waitCount = 0;
};

Yanfly.Message.Window_Message_startPause = Window_Message.prototype.startPause;
Window_Message.prototype.startPause = function() {
    if (this._checkWordWrapMode) return;
    Yanfly.Message.Window_Message_startPause.call(this);
};

Window_Message.prototype.convertEscapeCharacters = function(text) {
    text = Window_Base.prototype.convertEscapeCharacters.call(this, text);
    text = this.convertNameBox(text);
    text = this.convertMessageCharacters(text);
    return text;
};

Window_Message.prototype.convertNameBox = function(text) {
    text = text.replace(/\x1bN\<(.*?)\>/gi, function() {
        return Yanfly.nameWindow.refresh(arguments[1], 1);
    }, this);
    text = text.replace(/\x1bN1\<(.*?)\>/gi, function() {
        return Yanfly.nameWindow.refresh(arguments[1], 1);
    }, this);
    text = text.replace(/\x1bN2\<(.*?)\>/gi, function() {
        return Yanfly.nameWindow.refresh(arguments[1], 2);
    }, this);
    text = text.replace(/\x1bN3\<(.*?)\>/gi, function() {
        return Yanfly.nameWindow.refresh(arguments[1], 3);
    }, this);
    text = text.replace(/\x1bNC\<(.*?)\>/gi, function() {
        return Yanfly.nameWindow.refresh(arguments[1], 3);
    }, this);
    text = text.replace(/\x1bN4\<(.*?)\>/gi, function() {
        return Yanfly.nameWindow.refresh(arguments[1], 4);
    }, this);
    text = text.replace(/\x1bN5\<(.*?)\>/gi, function() {
        return Yanfly.nameWindow.refresh(arguments[1], 5);
    }, this);
    text = text.replace(/\x1bNR\<(.*?)\>/gi, function() {
        return Yanfly.nameWindow.refresh(arguments[1], 5);
    }, this);
    return text;
};

Window_Message.prototype.convertMessageCharacters = function(text) {
    text = text.replace(/\x1bAF\[(\d+)\]/gi, function() {
        var i = parseInt(arguments[1]);
        return this.convertActorFace($gameActors.actor(i));
    }.bind(this));
    text = text.replace(/\x1bPF\[(\d+)\]/gi, function() {
        var i = parseInt(arguments[1]);
        return this.convertActorFace($gameParty.members()[i - 1]);
    }.bind(this));
    return text;
};

Window_Message.prototype.convertActorFace = function(actor) {
    $gameMessage.setFaceImage(actor.faceName(), actor.faceIndex());
    return '';
};

Yanfly.Message.Window_Message_processEscapeCharacter = Window_Message.prototype.processEscapeCharacter;
Window_Message.prototype.processEscapeCharacter = function(code, textState) {
    switch (code) {
    case '!':
      if (!this.isFastForward()) this.startPause();
      break;
    case 'W':
      this.startWait(this.obtainEscapeParam(textState));
    default:
      Yanfly.Message.Window_Message_processEscapeCharacter.call(this,
        code, textState);
      break;
    }
};

//==============================
// * 兼容 - MSGNameBoxClose插件
//==============================
if( Yanfly.Param.MSGNameBoxClose ){

	Yanfly.Message.Window_Message_doesContinue = Window_Message.prototype.doesContinue;
	Window_Message.prototype.doesContinue = function() {
	  var value = Yanfly.Message.Window_Message_doesContinue.call(this);
	  if (!value) return false;
	  if (this.hasDifferentNameBoxText()) {
		return false;
	  }
	  return true;
	};

	Window_Message.prototype.hasDifferentNameBoxText = function() {
	  var texts = $gameMessage._texts;
	  var length = texts.length;
	  var open = this._nameWindow.isOpen();
	  for (var i = 0; i < length; ++i) {
		var text = texts[i];
		if (text.length <= 0) continue;
		if (Yanfly.MsgMacro) {
		  text = this.convertMacroText(text);
		  text = text.replace(/\x1b/gi, '\\');
		}
		if (text.match(/\\(?:N|N1|N2|N3|N4|N5|NC|NR)<(.*)>/i)) {
		  var name = String(RegExp.$1);
		} else if (text.match(/\\(?:ND|ND1|ND2|ND3|ND4|ND5|NDC|NDR)<(.*)>/i)) {
		  var name = String(RegExp.$1);
		} else if (text.match(/\\(?:NT|NT1|NT2|NT3|NT4|NT5|NTC|NTR)<(.*)>/i)) {
		  var name = String(RegExp.$1);
		}
		if (name) {
		  name = name.replace(/\\V\[(\d+)\]/gi, function() {
			return $gameVariables.value(parseInt(arguments[1]));
		  }.bind(this));
		  name = name.replace(/\\V\[(\d+)\]/gi, function() {
			return $gameVariables.value(parseInt(arguments[1]));
		  }.bind(this));
		  name = name.replace(/\\N\[(\d+)\]/gi, function() {
			return this.actorName(parseInt(arguments[1]));
		  }.bind(this));
		  name = name.replace(/\\P\[(\d+)\]/gi, function() {
			return this.partyMemberName(parseInt(arguments[1]));
		  }.bind(this));
		  name = name.replace(/\\/gi, '\x1b');
		}
		if (name && !open) return true;
		if (name && name !== this._nameWindow._lastNameText) {
		  return true;
		}
	  }
	  if (open && !name) return true;
	  return false;
	};

} // Yanfly.Param.MSGNameBoxClose

//=============================================================================
// End of File
//=============================================================================