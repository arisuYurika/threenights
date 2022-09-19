//=============================================================================
// Yanfly Engine Plugins - Core Engine
// YEP_CoreEngine.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_CoreEngine = true;

var Yanfly = Yanfly || {};
Yanfly.Core = Yanfly.Core || {};
Yanfly.Core.version = 1.31;

//=============================================================================
/*:
 * @plugindesc v1.31 [v1.0]  系统 - 引擎核心
 * @author Yanfly Engine Plugins （drill_up翻译）
 *
 * @param ---屏幕---
 * @default
 *
 * @param 屏幕宽度
 * @parent ---屏幕---
 * @type number
 * @min 0
 * @desc 游戏屏幕窗口的宽度，默认816。
 * @default 816
 *
 * @param 屏幕高度
 * @parent ---屏幕---
 * @type number
 * @min 0
 * @desc 游戏屏幕窗口的高度，默认624。
 * @default 624
 *
 * @param 屏幕重置-战斗背景
 * @parent ---屏幕---
 * @type boolean
 * @on 重置
 * @off 不重置
 * @desc 重置后屏幕的分辨率将被锁定。根据屏幕的高宽来拓宽，而不是缩放。（注意，该选项与mog动态战斗背景相冲突，建议选择 不重置。）
 * @default false
 *
 * @param 屏幕重置-标题
 * @parent ---屏幕---
 * @type boolean
 * @on 重置
 * @off 不重置
 * @desc 重置后屏幕的分辨率将被锁定。根据屏幕的高宽来拓宽，而不是缩放。
 * @default true
 *
 * @param 屏幕重置-游戏结束
 * @parent ---屏幕---
 * @type boolean
 * @on 重置
 * @off 不重置
 * @desc 重置后屏幕的分辨率将被锁定。根据屏幕的高宽来拓宽，而不是缩放。
 * @default true
 *
 * @param 控制台
 * @parent ---屏幕---
 * @type boolean
 * @on 打开
 * @off 关闭
 * @desc 测试或调试时，可以通过控制台查看消息。
 * 打开 - true，关闭 - false
 * @default false
 *
 * @param 是否重置角色战斗位置
 * @parent ---屏幕---
 * @type boolean
 * @on 重置
 * @off 不重置
 * @desc 重置 - true，不重置 - false
 * @default true
 *
 * @param 游戏字体加载延时
 * @parent ---屏幕---
 * @type number
 * @min 0
 * @desc 如果你用超过10M字体,(手机端)加载可能要较长时间,这里设置最大加载时间,单位毫秒,2000毫秒=2秒,0为无限时间。
 * @default 0
 *
 * @param 是否锁定实际比例
 * @parent ---屏幕---
 * @type boolean
 * @on 锁定
 * @off 不锁定
 * @desc 默认不锁定，当你拉伸游戏窗口时，画面会根据固定比值来缩放。
 * @default false
 *
 * @param 是否自动释放缓存
 * @parent ---屏幕---
 * @type boolean
 * @on 开启
 * @off 关闭
 * @desc 在菜单、地图、战斗之间切换时，自动清除游戏的缓存对象。
 * @default true
 *
 * @param ---金钱---
 * @desc
 *
 * @param 金钱最大值
 * @parent ---金钱---
 * @type number
 * @min 1
 * @desc 玩家携带的金钱的最大值。
 *（程序允许最大值 9007199254740992，16位）
 * @default 99999999
 *
 * @param 金钱字体大小
 * @parent ---金钱---
 * @type number
 * @min 1
 * @desc 金钱的字体大小。默认28。
 * @default 20
 *
 * @param 金钱图标
 * @parent ---金钱---
 * @type number
 * @min 0
 * @desc 显示金钱的图标的编号，0为没有图标。
 * @default 163
 *
 * @param 金钱超出消息
 * @parent ---金钱---
 * @desc 当金钱数字太长，导致窗口显示不了，会使用该用语来表示金钱数值。
 * @default 数不尽
 *
 * @param ---物品---
 * @desc
 *
 * @param 物品最大值
 * @parent ---物品---
 * @type number
 * @min 1
 * @desc 玩家携带的物品的最大值。
 *（程序允许最大值 9007199254740992，16位）
 * @default 9999
 *
 * @param 物品字体大小
 * @parent ---物品---
 * @type number
 * @min 1
 * @desc 物品的字体大小。默认28。
 * @default 20
 *
 * @param ---能力值---
 * @default
 *
 * @param 角色等级最大值
 * @parent ---能力值---
 * @type number
 * @min 1
 * @desc 角色的最大等级。
 *（程序允许最大值 9007199254740992，16位）
 * @default 99
 *
 * @param 角色生命最大值
 * @parent ---能力值---
 * @type number
 * @min 1
 * @desc 角色的最大生命上限。
 *（程序允许最大值 9007199254740992，16位）
 * @default 9999
 *
 * @param 角色魔法最大值
 * @parent ---能力值---
 * @type number
 * @min 0
 * @desc 角色的最大魔法上限。
 *（程序允许最大值 9007199254740992，16位）
 * @default 9999
 *
 * @param 角色属性最大值
 * @parent ---能力值---
 * @type number
 * @min 1
 * @desc 角色的六个属性(攻击、防御等)的最大上限。
 *（程序允许最大值 9007199254740992，16位）
 * @default 999
 *
 * @param 敌人生命最大值
 * @parent ---能力值---
 * @type number
 * @min 1
 * @desc 敌人的最大生命上限。
 *（程序允许最大值 9007199254740992，16位）
 * @default 999999
 *
 * @param 敌人魔法最大值
 * @parent ---能力值---
 * @type number
 * @min 0
 * @desc 敌人的最大魔法上限。
 *（程序允许最大值 9007199254740992，16位）
 * @default 9999
 *
 * @param 敌人属性最大值
 * @parent ---能力值---
 * @type number
 * @min 1
 * @desc 敌人的六个属性(攻击、防御等)的最大上限。
 *（程序允许最大值 9007199254740992，16位）
 * Default: 999
 * @default 999
 *
 * @param ---战斗---
 * @desc
 *
 * @param 动画速度
 * @parent ---战斗---
 * @type number
 * @min 1
 * @desc 动画播放的帧间隔，默认4，帧间隔越大，动画越慢。
 * @default 4
 *
 * @param 是否闪烁选中目标
 * @parent ---战斗---
 * @type boolean
 * @on 闪烁
 * @off 不闪烁
 * @desc 选中一个敌人时，敌人将会闪烁白底。
 * @default false
 *
 * @param 遇敌动画是否显示角色
 * @parent ---战斗---
 * @type boolean
 * @on 显示
 * @off 隐藏
 * @desc 角色遇敌后，角色行走图将保持显示在遇敌黑边中。
 * @default false
 *
 * @param 战斗结束是否显示角色
 * @parent ---战斗---
 * @type boolean
 * @on 显示
 * @off 隐藏
 * @desc 角色战斗结束后，(sv)角色行走图将保持显示在战斗结束界面。
 * @default false
 *
 * @param ---地图优化---
 * @desc
 *
 * @param 角色生命变化时是否刷新
 * @parent ---地图优化---
 * @type boolean
 * @on 刷新
 * @off 不刷新
 * @desc 角色生命值变化时，角色行走图将刷新一次。
 * @default true
 *
 * @param 角色魔法变化时是否刷新
 * @parent ---地图优化---
 * @type boolean
 * @on 刷新
 * @off 不刷新
 * @desc 角色魔法值变化时，角色行走图将刷新一次。
 * @default true
 *
 * @param 角色怒气变化时是否刷新
 * @parent ---地图优化---
 * @type boolean
 * @on 刷新
 * @off 不刷新
 * @desc 角色怒气值变化时，角色行走图将刷新一次。
 * @default false
 *
 * @param ---字体---
 * @desc
 *
 * @param 中文模式的字体
 * @parent ---字体---
 * @desc 如果你的设置为中文模式,将用该字体。默认设置:SimHei,Heiti TC,sans-serif。（rmmv都为默认模式,中文模式需要另调）
 * @default SimHei, Heiti TC, sans-serif
 *
 * @param 日韩模式的字体
 * @parent ---字体---
 * @desc 如果你的设置为日韩模式,将用该字体。默认设置:Dotum,AppleGothic,sans-serif。（rmmv都为默认模式,日韩模式需要另调）
 * @default Dotum, AppleGothic, sans-serif
 *
 * @param 默认模式的字体
 * @parent ---字体---
 * @desc 默认模式使用的字体，默认设置:GameFont。
 * @default GameFont, Verdana, Arial, Courier New
 *
 * @param 默认字体大小
 * @parent ---字体---
 * @type number
 * @min 1
 * @desc 所有菜单、界面默认最初的字体大小，默认: 28。
 * @default 28
 *
 * @param 默认对齐方式
 * @parent ---字体---
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc 所有选项命令窗口默认最初的对齐方式。left-左对齐，center-居中，right-右对齐。
 * @default left
 *
 * @param ---窗口---
 * @default
 *
 * @param 是否使用数字逗号分割
 * @parent ---窗口---
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc 窗口中，数字逗号将分割超长数字，比如 11,223,423。
 * @default true
 *
 * @param 默认行高
 * @parent ---窗口---
 * @type number
 * @min 0
 * @desc 所有窗口默认最初的行高，单位像素，默认: 36。
 * @default 36
 *
 * @param 默认图标大小
 * @parent ---窗口---
 * @type number
 * @min 0
 * @desc 所有窗口默认最初的图标大小，单位像素，默认: 32。
 * @default 32
 *
 * @param 默认图标高度
 * @parent ---窗口---
 * @type number
 * @min 0
 * @desc 所有窗口默认最初的图标高度，单位像素，默认: 32。
 * @default 32
 *
 * @param 默认脸图宽度
 * @parent ---窗口---
 * @type number
 * @min 0
 * @desc 所有窗口默认最初的脸图宽度，单位像素，默认: 144。
 * @default 144
 *
 * @param 默认脸图高度
 * @parent ---窗口---
 * @type number
 * @min 0
 * @desc 所有窗口默认最初的脸图高度，单位像素，默认: 144。
 * @default 144
 *
 * @param 默认窗口内边距
 * @parent ---窗口---
 * @type number
 * @min 0
 * @desc 所有窗口默认最初的窗口内边距，单位像素，默认: 18。
 * @default 18
 *
 * @param 默认文本内边距
 * @parent ---窗口---
 * @type number
 * @min 0
 * @desc 所有窗口默认最初的文本内边距，单位像素，默认: 6。
 * @default 6
 *
 * @param 默认窗口透明度
 * @parent ---窗口---
 * @type number
 * @min 0
 * @desc 所有窗口默认最初的窗口透明度，单位像素，默认: 192。
 * @default 192
 *
 * @param YEP条是否描边
 * @parent ---窗口---
 * @type boolean
 * @on 描边
 * @off 不描边
 * @desc YEP插件中所有条（生命条、魔法条等）将会描边。
 * @default true
 *
 * @param 默认YEP条行高
 * @parent ---窗口---
 * @type number
 * @min 0
 * @desc YEP插件中所有条（生命条、魔法条等）的行高，默认6。
 * @default 18
 *
 * @param 是否绘制YEP怒气条
 * @parent ---窗口---
 * @type boolean
 * @on 绘制
 * @off 不绘制
 * @desc 主菜单将会在魔法条下绘制YEP怒气条。（mog全自定义主菜单直接覆盖该功能。）
 * @default true
 *
 * @param ---窗口颜色---
 * @default
 *
 * @param 颜色-普通文本
 * @parent ---窗口颜色---
 * @type number
 * @min 0
 * @max 31
 * @desc 窗口中普通文本的颜色。默认: 0。
 * @default 0
 *
 * @param 颜色-系统文本
 * @parent ---窗口颜色---
 * @type number
 * @min 0
 * @max 31
 * @desc 窗口中系统文本的颜色。默认: 16。
 * @default 16
 *
 * @param 颜色-角色垂死
 * @parent ---窗口颜色---
 * @type number
 * @min 0
 * @max 31
 * @desc 角色生命值处于即将死亡状态的文本颜色。默认: 17。
 * @default 17
 *
 * @param 颜色-角色死亡
 * @parent ---窗口颜色---
 * @type number
 * @min 0
 * @max 31
 * @desc 角色生命值处于死亡状态的文本颜色。默认: 18。
 * @default 18
 *
 * @param 颜色-YEP条背景色
 * @parent ---窗口颜色---
 * @type number
 * @min 0
 * @max 31
 * @desc 窗口、菜单中YEP条的背景色。默认: 19。
 * @default 19
 *
 * @param 颜色-生命条左
 * @parent ---窗口颜色---
 * @type number
 * @min 0
 * @max 31
 * @desc 菜单中生命条左侧颜色。默认: 20。
 * @default 20
 *
 * @param 颜色-生命条右
 * @parent ---窗口颜色---
 * @type number
 * @min 0
 * @max 31
 * @desc 菜单中生命条右侧颜色。默认: 21。
 * @default 21
 *
 * @param 颜色-魔法条左
 * @parent ---窗口颜色---
 * @type number
 * @min 0
 * @max 31
 * @desc 菜单中魔法条左侧颜色。默认: 22。
 * @default 22
 *
 * @param 颜色-魔法条右
 * @parent ---窗口颜色---
 * @type number
 * @min 0
 * @max 31
 * @desc 菜单中魔法条右侧颜色。默认: 23。
 * @default 23
 *
 * @param 颜色-魔法消耗
 * @parent ---窗口颜色---
 * @type number
 * @min 0
 * @max 31
 * @desc 窗口中魔法消耗的文本颜色。默认: 23。
 * @default 23
 *
 * @param 颜色-强化
 * @parent ---窗口颜色---
 * @type number
 * @min 0
 * @max 31
 * @desc 窗口中强化的文本颜色。默认: 24。
 * @default 24
 *
 * @param 颜色-弱化
 * @parent ---窗口颜色---
 * @type number
 * @min 0
 * @max 31
 * @desc 窗口中弱化的文本颜色。默认: 25。
 * @default 25
 *
 * @param 颜色-怒气条左
 * @parent ---窗口颜色---
 * @type number
 * @min 0
 * @max 31
 * @desc 菜单中怒气条左侧的文本颜色。默认: 28。
 * @default 28
 *
 * @param 颜色-怒气条右
 * @parent ---窗口颜色---
 * @type number
 * @min 0
 * @max 31
 * @desc 菜单中怒气条右侧的文本颜色。默认: 29。
 * @default 29
 *
 * @param 颜色-怒气消耗
 * @parent ---窗口颜色---
 * @type number
 * @min 0
 * @max 31
 * @desc 窗口中怒气消耗的文本颜色。默认: 29。
 * @default 29
 *
 * @help
 * ============================================================================
 *   插件介绍
 * ============================================================================
 * Yanfly Engine Plugins - YEP核心引擎是一款基础的插件，它具有巴拉巴拉……
 * 的功能。
 * （英文写了许多官方性的无用的话，此处我全部省略。）
 * ★★尽量放在最靠上的位置★★
 *
 * ============================================================================
 *   设定注意事项
 * ============================================================================
 * 1.插件的作用域：地图界面、战斗界面、菜单界面。
 *   作用于许多地方，分布广泛，主要改进rmmv的基础结构。
 * 2.因为插件修改最基础的内容，最好将插件放在最靠上的位置。
 *
 * ============================================================================
 *   可选设定 - 物品
 * ============================================================================
 *
 * 插件指令（获得金钱）：GainGold 1234567890
 * 插件指令（失去金钱）：LoseGold 9876543210
 *
 * 物品注释（设置价格）：<Price: 999999>
 * 武器注释（设置价格）：<Price: 999999>
 * 防具注释（设置价格）：<Price: 999999>
 *
 * 物品注释（设置上限）：<Max Item: 99999>
 * 武器注释（设置上限）：<Max Item: 99999>
 * 防具注释（设置上限）：<Max Item: 99999>
 *
 * ============================================================================
 *   可选设定 - 能力值
 * ============================================================================
 *
 * 角色注释（初始等级）：<Initial Level: 200>
 * 角色注释（最大等级）：<Initial Level: 888>
 *
 * 技能注释（等级需求）：<Learn at Level: 200>
 *   职业中设置了在N级学习的技能，那个技能添加了上面的注释，
 *   将会改变为200级学习到。
 *
 * 武器/防具注释（加生命）：<hp: +100>
 * 武器/防具注释（加魔法）：<mp: +100>
 * 武器/防具注释（加攻击）：<atk: +100>
 * 武器/防具注释（加防御）：<def: +100>
 * 武器/防具注释（加魔攻）：<mat: +100>
 * 武器/防具注释（加魔防）：<mdf: +100>
 * 武器/防具注释（加敏捷）：<agi: +100>
 * 武器/防具注释（加幸运）：<luk: +100>
 * 武器/防具注释（减生命）：<hp: -100>
 * 武器/防具注释（减魔法）：<mp: -100>
 * 武器/防具注释（减攻击）：<atk: -100>
 * 武器/防具注释（减防御）：<def: -100>
 * 武器/防具注释（减魔攻）：<mat: -100>
 * 武器/防具注释（减魔防）：<mdf: -100>
 * 武器/防具注释（减敏捷）：<agi: -100>
 * 武器/防具注释（减幸运）：<luk: -100>
 *   武器和防具中可以有多个注释，它们的效果会叠加在一起。
 *
 * 敌人注释（设置生命）：<hp: 999999999>
 * 敌人注释（设置魔法）：<mp: 999999999>
 * 敌人注释（设置攻击）：<atk: 99999999>
 * 敌人注释（设置防御）：<def: 99999999>
 * 敌人注释（设置魔攻）：<mat: 99999999>
 * 敌人注释（设置魔防）：<mdf: 99999999>
 * 敌人注释（设置敏捷）：<agi: 99999999>
 * 敌人注释（设置幸运）：<luk: 99999999>
 *
 * 敌人注释（设置掉钱）：<Gold: 888888>
 * 敌人注释（设置经验）：<exp: 888888>
 *
 * ============================================================================
 *   脚本调用安全性说明
 * ============================================================================
 *
 * 其它插件很可能覆盖了该插件的某些部分，可能会引起冲突而造成该插件报错。
 * 经过优化这里已经避免了大部分的报错。
 *
 * 但是，如果你在浏览器中测试游戏，产生的错误仍然会在控制台上显示。
 * （YEP表示报错也不影响运行，但是报错的锅不归他）
 *
 * ============================================================================
 * ----插件性能
 * ============================================================================
 * 工作类型：   持续执行、单次执行
 * 时间复杂度： 无法确定
 * 测试方法：   无
 * 测试结果：   无
 * 
 * 1.由于该插件为底层引擎，分布广泛，不属于任何独立模块，所以无法给定准确
 *   的性能值。
 * 
 * ============================================================================
 *   Bug修复说明
 * ============================================================================
 * This plugin fixes a few bugs found present within RPG Maker MV. Of them are
 * the following:
 *
 * Animation Overlay
 *   When a skill/item that targets multiple enemies at once using a fullscreen
 *   animation, it will overlay multiple times causing the image to look
 *   distorted by a series of overlayed effects. The plugin fixes this issue by
 *   having only one animation played over the group instead of every one.
 *
 * Audio Volume Stacking
 *   Sometimes when multiple sound effects are played in the same frame with
 *   the exact settings (usually due to animaitons), the volume stacks upon
 *   each other, causing them to not play the intended volume for the effect.
 *   This plugin fixes this issue by preventing sound effects of the same exact
     settings from playing during the same frame, allowing only the first to
     go through without stacking the volume higher.
 *
 * Event Movement Speed
 *   The movement speed of events are slightly slower than what they should be
 *   due a small error in the source code. The plugin fixes this issue and they
 *   move at the properly speed.
 *
 * Event Movement Queue
 *   If an event were to move through an event command, changing a condition
 *   that would set the event to change to a different page would cause that
 *   event's move route to halt in its tracks. The plugin fixes this issue and
 *   the event's move route will finish.
 *
 * Event Colliding
 *   Events cannot move over other events with a Below Player setting. This
 *   makes it difficult for certain types of puzzles or events to exist. This
 *   plugin fixes this issue by making the collision check only apply to events
 *   of "Same as Characters" priority. Any event that's above or below the
 *   characters will no longer collide with other events.
 *
 * Screen Tearing
 *   When moving slowly, the tiles on the screen tear. While it's not
 *   noticeable on all systems, slower computers will definitely show it. The
 *   plugin will fix this issue and synch the tiles to keep up to pace with
 *   the screen's camera movement properly.
 *
 * Sprite Distortion
 *   Because of JavaScript's strange mathematical behavior, sometimes values
 *   with decimal places cause spritesheets to end up looking distorted. The
 *   plugin will get rid of the decimal places and have sprite sheets take out
 *   frames properly by using integer values only.
 *
 * ============================================================================
 *   版本更新日志
 * ============================================================================
 * Version 1.31:
 * - Added Fallen Angel Olivia's full error message display to the Core Engine
 * (with her permission of course).
 * - Bug fixed regarding blend modes and bush depth making sprites not blend
 * properly in-game.
 * - Tab key no longer requires you to press it twice before triggering Tab-key
 * related inputs.
 *
 * Version 1.30:
 * - Bug fixed for audio Sound Effect stacking.
 * - Optimization update.
 *
 * Version 1.29:
 * - Bypass the isDevToolsOpen() error when bad code is inserted into a script
 * call or custom Lunatic Mode code segment due to updating to MV 1.6.1.
 *
 * Version 1.28:
 * - Upon pressing F5 to reload your game, this will close the DevTools Debug
 * Console if it is opened before reloading. This is because reloading with it
 * closed ends up reloading the game faster.
 * - New plugin parameters added: Refresh Update HP, MP, and TP
 *   - Option to choose to do a full actor refresh upon changing HP, MP, or TP
 *   - This is to reduce overall map lagging.
 *
 * Version 1.27:
 * - Updated for RPG Maker MV version 1.6.0:
 *   - Fixing script call checks made with switches and self switches under
 *   conditional branches due to how ES6 handles === differently.
 *
 * Version 1.26:
 * - Updated for RPG Maker MV version 1.6.0:
 *   - Removal of the destructive code in Scene_Item.update function.
 *   - Open Console parameter now occurs after the map's been loaded or after
 *   the battle has started. This is because after the 1.6.0 changes, loading
 *   the console before anything else will lock up other aspects of RPG Maker
 *   from loading properly.
 *
 * Version 1.25:
 * - Updated for RPG Maker MV version 1.5.0.
 * - Updated Scale Title and Scale GameOver to work with 1.5.0.
 *
 * Version 1.24:
 * - Screen jittering prevention is now prevented for RPG Maker MV 1.3.4 and
 * above since Pixi4 handles that now.
 *
 * Version 1.23:
 * - For RPG Maker MV version 1.3.2 and above, the 'Scale Battlebacks' plugin
 * parameter will now recreate the battleback sprites in a different format.
 * This is because battleback scaling with Tiling Sprites is just too volatile.
 * Battleback sprites are now just regular sprites instead of tiling sprites.
 * This may or may not cause plugin incompatibilities with other plugins that
 * alter battlebacks.
 * - For RPG Maker MV version 1.3.4, Game_Actor.meetsUsableItemConditions is
 * now updated to return a check back to the original Game_BattlerBase version
 * to maintain compatibility with other plugins.
 *
 * Version 1.22:
 * - Added 'Show Events Transition' plugin parameter. Enabling this will make
 * events on the map no longer hide themselves while entering battle during the
 * transition.
 * - Added 'Show Events Snapshot' plugin parameter. Enabling this will keep
 * events shown as a part of the battle snapshot when entering battle.
 * - Irregular code in damage formulas, script calls, conditional branches, and
 * variable events will no longer crash the game. Instead, it will force open
 * the console window to display the error only during Test Play.
 *
 * Version 1.21:
 * - Fixed a bug with scaling battlebacks not working properly for Front View.
 * - Optimization update to keep garbage collection across all scenes.
 *
 * Version 1.20:
 * - Altered increasing resolution function.
 * - Added 'Update Real Scale' plugin parameter. This is best left alone for
 * now and to be used if a later update meshes with rendered scaling.
 * - Added memory clear functionality for versions under 1.3.2 to free up more
 * memory upon leaving the map scene.
 * - Added 'Collection Clear' plugin parameter. This option, if left on, will
 * clear the attached children to Scene_Map and Scene_Battle upon switching to
 * a different scene. This will potentially free up memory from various objects
 * added to those scenes from other plugins (depending on how they're added)
 * and serve as a means of reducing memory bloat.
 *
 * Version 1.19:
 * - Updated for RPG Maker MV version 1.3.2.
 * - Fixed 'LearnSkill' function for actors to not be bypassed if a piece of
 * equipment has temporarily added a skill.
 *
 * Version 1.18:
 * - Fixed a bug with scaling battlebacks not working properly for Front View.
 *
 * Version 1.17:
 * - Updated for RPG Maker MV version 1.3.0.
 *
 * Version 1.16:
 * - Fixed a bug with RPG Maker MV's inherent 'drawTextEx' function. By default
 * it calculates the text height and then resets the font settings before
 * drawing the text, which makes the text height inconsistent if it were to
 * match the calculated height settings.
 *
 * Version 1.15:
 * - Window's are now set to have only widths and heights of whole numbers. No
 * longer is it possible for them to have decimal values. This is to reduce any
 * and all clipping issues caused by non-whole numbers.
 *
 * Version 1.14:
 * - Optimization update for RPG Maker MV itself by replacing more memory
 * intensive loops in commonly used functions with more efficient loops.
 *
 * Version 1.13:
 * - Updated for RPG Maker MV version 1.1.0.
 *
 * Version 1.12:
 * - Fixed a bug with a notetag: <Learn at Level: x>. Now, the notetag works
 * with both <Learn at Level: x> and <Learn Level: x>
 *
 * Version 1.11:
 * - Made fixes to the MV Source Code where FaceWidth was using a hard-coded
 * 144 value regardless of what was changed for the Face Width parameter.
 * - Fixed a notetag that wasn't working with the enemy EXP values.
 * - Updated battler repositioning to no longer clash when entering-exiting the
 * scene with Row Formation.
 *
 * Version 1.10:
 * - Removed an MV bugfix that was applied through MV's newes tupdate.
 *
 * Version 1.09:
 * - Changed minimum display width for status drawing to accomodate Party
 * Formation defaults.
 *
 * Version 1.08:
 * - Fixed a bug within the MV Source with changing classes and maintaining
 * levels, even though the feature to maintain the levels has been removed.
 *
 * Version 1.07:
 * - Fixed an issue with the gauges drawing outlines thicker than normal at odd
 * intervals when windows are scaled irregularly.
 *
 * Version 1.06:
 * - Removed event frequency bug fix since it's now included in the source.
 *
 * Version 1.05:
 * - Added 'Scale Game Over' parameter to plugin settings.
 *
 * Version 1.04:
 * - Reworked math for calculating scaled battleback locations.
 * - Fixed a bug where if the party failed to escape from battle, states that
 * would be removed by battle still get removed. *Fixed by Emjenoeg*
 *
 * Version 1.03:
 * - Fixed a strange bug that made scaled battlebacks shift after one battle.
 *
 * Version 1.02:
 * - Fixed a bug that made screen fading on mobile devices work incorrectly.
 * - Added 'Scale Battlebacks' and 'Scale Title' parameters.
 *
 * Version 1.01:
 * - Fixed a bug that where if button sprites had different anchors, they would
 * not be properly clickable. *Fixed by Zalerinian*
 *
 * Version 1.00:
 * - Finished plugin!
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_CoreEngine');
Yanfly.Param = Yanfly.Param || {};
Yanfly.Icon = Yanfly.Icon || {};

Yanfly.Param.ScreenWidth  = Number(Yanfly.Parameters['屏幕宽度'] || 816);
Yanfly.Param.ScreenHeight = Number(Yanfly.Parameters['屏幕高度'] || 624);
Yanfly.Param.ScaleBattleback = String(Yanfly.Parameters['屏幕重置-战斗背景']);
Yanfly.Param.ScaleBattleback = eval(Yanfly.Param.ScaleBattleback);
Yanfly.Param.ScaleTitle = eval(String(Yanfly.Parameters['屏幕重置-标题']));
Yanfly.Param.ScaleGameOver = eval(String(Yanfly.Parameters['屏幕重置-游戏结束']));
Yanfly.Param.OpenConsole = String(Yanfly.Parameters['控制台']);
Yanfly.Param.OpenConsole = eval(Yanfly.Param.OpenConsole);
Yanfly.Param.ReposBattlers = String(Yanfly.Parameters['是否重置角色战斗位置']);
Yanfly.Param.ReposBattlers = eval(Yanfly.Param.ReposBattlers);
Yanfly.Param.GameFontTimer = Number(Yanfly.Parameters['游戏字体加载延时']);
Yanfly.Param.UpdateRealScale = String(Yanfly.Parameters['是否锁定实际比例']);
Yanfly.Param.UpdateRealScale = eval(Yanfly.Param.UpdateRealScale);
Yanfly.Param.CollectionClear = String(Yanfly.Parameters['是否自动释放缓存']);
Yanfly.Param.CollectionClear = eval(Yanfly.Param.CollectionClear);

Yanfly.Param.MaxGold = String(Yanfly.Parameters['金钱最大值']);
Yanfly.Param.GoldFontSize = Number(Yanfly.Parameters['金钱字体大小']);
Yanfly.Icon.Gold = Number(Yanfly.Parameters['金钱图标']);
Yanfly.Param.GoldOverlap = String(Yanfly.Parameters['金钱超出消息']);

Yanfly.Param.MaxItem = Number(Yanfly.Parameters['物品最大值']);
Yanfly.Param.ItemQuantitySize = Number(Yanfly.Parameters['物品字体大小']);

Yanfly.Param.MaxLevel = Number(Yanfly.Parameters['角色等级最大值']);
Yanfly.Param.EnemyMaxHp = Number(Yanfly.Parameters['敌人生命最大值']);
Yanfly.Param.EnemyMaxMp = Number(Yanfly.Parameters['敌人魔法最大值']);
Yanfly.Param.EnemyParam = Number(Yanfly.Parameters['敌人属性最大值']);
Yanfly.Param.ActorMaxHp = Number(Yanfly.Parameters['角色生命最大值']);
Yanfly.Param.ActorMaxMp = Number(Yanfly.Parameters['角色魔法最大值']);
Yanfly.Param.ActorParam = Number(Yanfly.Parameters['角色属性最大值']);

Yanfly.Param.AnimationRate = Number(Yanfly.Parameters['动画速度']);
Yanfly.Param.FlashTarget = eval(String(Yanfly.Parameters['是否闪烁选中目标']));
Yanfly.Param.ShowEvTrans = String(Yanfly.Parameters['遇敌动画是否显示角色']);
Yanfly.Param.ShowEvTrans = eval(Yanfly.Param.ShowEvTrans);
Yanfly.Param.ShowEvSnap = String(Yanfly.Parameters['战斗结束是否显示角色']);
Yanfly.Param.ShowEvSnap = eval(Yanfly.Param.ShowEvSnap);

Yanfly.Param.RefreshUpdateHp = String(Yanfly.Parameters['角色生命变化时是否刷新']);
Yanfly.Param.RefreshUpdateHp = eval(Yanfly.Param.RefreshUpdateHp);
Yanfly.Param.RefreshUpdateMp = String(Yanfly.Parameters['角色魔法变化时是否刷新']);
Yanfly.Param.RefreshUpdateMp = eval(Yanfly.Param.RefreshUpdateMp);
Yanfly.Param.RefreshUpdateTp = String(Yanfly.Parameters['角色怒气变化时是否刷新']);
Yanfly.Param.RefreshUpdateTp = eval(Yanfly.Param.RefreshUpdateTp);

Yanfly.Param.ChineseFont = String(Yanfly.Parameters['中文模式的字体']);
Yanfly.Param.KoreanFont = String(Yanfly.Parameters['日韩模式的字体']);
Yanfly.Param.DefaultFont = String(Yanfly.Parameters['默认模式的字体']);
Yanfly.Param.FontSize = Number(Yanfly.Parameters['默认字体大小']);
Yanfly.Param.TextAlign = String(Yanfly.Parameters['默认对齐方式']);

Yanfly.Param.DigitGroup = eval(String(Yanfly.Parameters['是否使用数字逗号分割']));
Yanfly.Param.LineHeight = Number(Yanfly.Parameters['默认行高']);
Yanfly.Param.IconWidth = Number(Yanfly.Parameters['默认图标大小'] || 32);;
Yanfly.Param.IconHeight = Number(Yanfly.Parameters['默认图标高度'] || 32);;
Yanfly.Param.FaceWidth = Number(Yanfly.Parameters['默认脸图宽度'] || 144);
Yanfly.Param.FaceHeight = Number(Yanfly.Parameters['默认脸图高度'] || 144);
Yanfly.Param.WindowPadding = Number(Yanfly.Parameters['默认窗口内边距']);
Yanfly.Param.TextPadding = Number(Yanfly.Parameters['默认文本内边距']);
Yanfly.Param.WindowOpacity = Number(Yanfly.Parameters['默认窗口透明度']);
Yanfly.Param.GaugeOutline = eval(String(Yanfly.Parameters['YEP条是否描边']));
Yanfly.Param.GaugeHeight = Number(Yanfly.Parameters['默认YEP条行高']);
Yanfly.Param.MenuTpGauge = eval(String(Yanfly.Parameters['是否绘制YEP怒气条']));

Yanfly.Param.ColorNormal = Number(Yanfly.Parameters['颜色-普通文本']);
Yanfly.Param.ColorSystem = Number(Yanfly.Parameters['颜色-系统文本']);
Yanfly.Param.ColorCrisis = Number(Yanfly.Parameters['颜色-角色垂死']);
Yanfly.Param.ColorDeath = Number(Yanfly.Parameters['颜色-角色死亡']);
Yanfly.Param.ColorGaugeBack = Number(Yanfly.Parameters['颜色-YEP条背景色']);
Yanfly.Param.ColorHpGauge1 = Number(Yanfly.Parameters['颜色-生命条左']);
Yanfly.Param.ColorHpGauge2 = Number(Yanfly.Parameters['颜色-生命条右']);
Yanfly.Param.ColorMpGauge1 = Number(Yanfly.Parameters['颜色-魔法条左']);
Yanfly.Param.ColorMpGauge2 = Number(Yanfly.Parameters['颜色-魔法条右']);
Yanfly.Param.ColorMpCost = Number(Yanfly.Parameters['颜色-魔法消耗']);
Yanfly.Param.ColorPowerUp = Number(Yanfly.Parameters['颜色-强化']);
Yanfly.Param.ColorPowerDown = Number(Yanfly.Parameters['颜色-弱化']);
Yanfly.Param.ColorTpGauge1 = Number(Yanfly.Parameters['颜色-怒气条左']);
Yanfly.Param.ColorTpGauge2 = Number(Yanfly.Parameters['颜色-怒气条右']);
Yanfly.Param.ColorTpCost = Number(Yanfly.Parameters['颜色-怒气消耗']);

//=============================================================================
// Bitmap
//=============================================================================

Yanfly.Core.Bitmap_initialize = Bitmap.prototype.initialize;
Bitmap.prototype.initialize = function(width, height) {
  Yanfly.Core.Bitmap_initialize.call(this, width, height);
  this.fontFace = Yanfly.Param.DefaultFont;
};

Yanfly.Core.Bitmap_blt = Bitmap.prototype.blt;
Bitmap.prototype.blt = function(source, sx, sy, sw, sh, dx, dy, dw, dh) {
    sx = Math.floor(sx);
    sy = Math.floor(sy);
    sw = Math.floor(sw);
    sh = Math.floor(sh);
    dx = Math.floor(dx);
    dy = Math.floor(dy);
    dw = Math.floor(dw);
    dh = Math.floor(dh);
    Yanfly.Core.Bitmap_blt.call(this, source, sx, sy, sw, sh, dx, dy, dw, dh);
};

Yanfly.Core.Bitmap_fillRect = Bitmap.prototype.fillRect;
Bitmap.prototype.fillRect = function(x, y, w, h, c) {
    x = Math.floor(x);
    y = Math.floor(y);
    w = Math.floor(w);
    h = Math.floor(h);
    Yanfly.Core.Bitmap_fillRect.call(this, x, y, w, h, c);
};

Yanfly.Core.Bitmap_gradientFillRect = Bitmap.prototype.gradientFillRect;
Bitmap.prototype.gradientFillRect = function(x, y, w, h, c1, c2, ve) {
    Yanfly.Core.Bitmap_gradientFillRect.call(this, x, y, w, h, c1, c2, ve);
};

Yanfly.Core.Bitmap_drawCircle = Bitmap.prototype.drawCircle;
Bitmap.prototype.drawCircle = function(x, y, r, c) {
    x = Math.floor(x);
    y = Math.floor(y);
    Yanfly.Core.Bitmap_drawCircle.call(this, x, y, r, c);
};

Yanfly.Core.Bitmap_drawText = Bitmap.prototype.drawText;
Bitmap.prototype.drawText = function(text, x, y, mW, l, align) {
    x = Math.floor(x);
    y = Math.floor(y);
    if (mW < 0) mW = 0;
    mW = Math.floor(mW);
    l = Math.floor(l);
    Yanfly.Core.Bitmap_drawText.call(this, text, x, y, mW, l, align);
};

//=============================================================================
// Graphics
//=============================================================================

if (Yanfly.Param.UpdateRealScale) {

Graphics._updateRealScale = function() {
  if (this._stretchEnabled) {
    var h = window.innerWidth / this._width;
    var v = window.innerHeight / this._height;
    this._realScale = Math.min(h, v);
    if (this._realScale >= 3) this._realScale = 3;
    else if (this._realScale >= 2) this._realScale = 2;
    else if (this._realScale >= 1.5) this._realScale = 1.5;
    else if (this._realScale >= 1) this._realScale = 1;
    else this._realScale = 0.5;
  } else {
    this._realScale = this._scale;
  }
};

}; // Yanfly.Param.UpdateRealScale

Graphics.printFullError = function(name, message, stack) {
  stack = this.processErrorStackMessage(stack);
  if (this._errorPrinter) {
    this._errorPrinter.innerHTML =
      this._makeFullErrorHtml(name, message, stack);
  }
  this._applyCanvasFilter();
  this._clearUpperCanvas();
};

Graphics._makeFullErrorHtml = function(name, message, stack) {
  var text = '';
  for (var i = 2; i < stack.length; ++i) {
    text += '<font color=white>' + stack[i] + '</font><br>';
  }
  return ('<font color="yellow"><b>' + stack[0] + '</b></font><br>' +
    '<font color="yellow"><b>' + stack[1] + '</b></font><br>' + text);
};

Graphics.processErrorStackMessage = function(stack)  {
  var data = stack.split(/(?:\r\n|\r|\n)/);
  data.unshift('Game has encountered a bug. Please report it.<br>');
  for (var i = 1; i < data.length; ++i) {
    data[i] = data[i].replace(/[\(](.*[\/])/, '(');
  }
  data.push('<br><font color="yellow"><b>Press F5 to restart the game.' +
    '</b></font><br>');
  return data;
};

Yanfly.Core.Graphics_updateErrorPrinter = Graphics._updateErrorPrinter;
Graphics._updateErrorPrinter = function() {
  Yanfly.Core.Graphics_updateErrorPrinter.call(this);
  this._errorPrinter.height = this._height * 0.5;
  this._errorPrinter.style.textAlign = 'left';
  this._centerElement(this._errorPrinter);
};

SceneManager.catchException = function(e) {
  if (e instanceof Error) {
    Graphics.printFullError(e.name, e.message, e.stack);
    console.error(e.stack);
  } else {
    Graphics.printError('UnknownError', e);
  }
  AudioManager.stopAll();
  this.stop();
};

//=============================================================================
// Input
//=============================================================================

Yanfly.Core.Input_shouldPreventDefault = Input._shouldPreventDefault;
Input._shouldPreventDefault = function(keyCode) {
  if (keyCode === 9) return true;
  return Yanfly.Core.Input_shouldPreventDefault.call(this, keyCode);
};

//=============================================================================
// Sprite
//=============================================================================

Yanfly.Core.Sprite_updateTransform = Sprite.prototype.updateTransform;
Sprite.prototype.updateTransform = function() {
  Yanfly.Core.Sprite_updateTransform.call(this);
  this.worldTransform.tx = Math.floor(this.worldTransform.tx);
  this.worldTransform.ty = Math.floor(this.worldTransform.ty);
};

//=============================================================================
// ScreenSprite
//=============================================================================

Yanfly.Core.ScreenSprite_initialize = ScreenSprite.prototype.initialize;
ScreenSprite.prototype.initialize = function() {
  Yanfly.Core.ScreenSprite_initialize.call(this);
  if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= '1.3.0') return;
  this.scale.x = Graphics.boxWidth * 10;
  this.scale.y = Graphics.boxHeight * 10;
  this.anchor.x = 0.5;
  this.anchor.y = 0.5;
  this.x = 0;
  this.y = 0;
};

//=============================================================================
// Window
//=============================================================================

Yanfly.Core.Window_refreshAllParts = Window.prototype._refreshAllParts;
Window.prototype._refreshAllParts = function() {
  this._roundWhUp();
  Yanfly.Core.Window_refreshAllParts.call(this);
};

Window.prototype._roundWhUp = function() {
  this._width = Math.ceil(this._width);
  this._height = Math.ceil(this._height);
};

//=============================================================================
// DataManager
//=============================================================================

Yanfly.Core.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!Yanfly.Core.DataManager_isDatabaseLoaded.call(this)) return false;
  if (!Yanfly._loaded_YEP_CoreEngine) {
    this.processCORENotetags1($dataItems);
    this.processCORENotetags1($dataWeapons);
    this.processCORENotetags1($dataArmors);
    this.processCORENotetags2($dataEnemies);
    this.processCORENotetags3($dataActors);
    this.processCORENotetags4($dataClasses);
    Yanfly._loaded_YEP_CoreEngine = true;
  }
  return true;
};

DataManager.processCORENotetags1 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.maxItem = Yanfly.Param.MaxItem;

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<(?:PRICE):[ ](\d+)>/i)) {
        obj.price = parseInt(RegExp.$1);
      } else if (line.match(/<(?:MAX ITEM):[ ](\d+)>/i)) {
        obj.maxItem = Math.max(1, parseInt(RegExp.$1));
      } else if (line.match(/<(.*):[ ]([\+\-]\d+)>/i)) {
        var stat = String(RegExp.$1).toUpperCase();
        var value = parseInt(RegExp.$2);
        switch (stat) {
          case 'HP':
          case 'MAXHP':
          case 'MAX HP':
            obj.params[0] = value;
            break;
          case 'MP':
          case 'MAXMP':
          case 'MAX MP':
          case 'SP':
          case 'MAXSP':
          case 'MAX SP':
            obj.params[1] = value;
            break;
          case 'ATK':
          case 'STR':
            obj.params[2] = value;
            break;
          case 'DEF':
            obj.params[3] = value;
            break;
          case 'MAT':
          case 'INT' || 'SPI':
            obj.params[4] = value;
            break;
          case 'MDF':
          case 'RES':
            obj.params[5] = value;
            break;
          case 'AGI':
          case 'SPD':
            obj.params[6] = value;
            break;
          case 'LUK':
            obj.params[7] = value;
            break;
          case 'EXP':
          case 'XP':
            obj.exp = value;
            break;
        }
      }
    }
  }
};

DataManager.processCORENotetags2 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<(?:GOLD):[ ](\d+)>/i)) {
        obj.gold = parseInt(RegExp.$1);
      } else if (line.match(/<(.*):[ ](\d+)>/i)) {
        var stat = String(RegExp.$1).toUpperCase();
        var value = parseInt(RegExp.$2);
        switch (stat) {
          case 'HP':
          case 'MAXHP':
          case 'MAX HP':
            obj.params[0] = value;
            break;
          case 'MP':
          case 'MAXMP':
          case 'MAX MP':
          case 'SP':
          case 'MAXSP':
          case 'MAX SP':
            obj.params[1] = value;
            break;
          case 'ATK':
          case 'STR':
            obj.params[2] = value;
            break;
          case 'DEF':
            obj.params[3] = value;
            break;
          case 'MAT':
          case 'INT':
          case 'SPI':
            obj.params[4] = value;
            break;
          case 'MDF':
          case 'RES':
            obj.params[5] = value;
            break;
          case 'AGI':
          case 'SPD':
            obj.params[6] = value;
            break;
          case 'LUK':
            obj.params[7] = value;
            break;
          case 'EXP':
          case 'XP':
            obj.exp = value;
            break;
        }
      }
    }
  }
};

DataManager.processCORENotetags3 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.maxLevel = Yanfly.Param.MaxLevel;

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<(?:MAX LEVEL):[ ](\d+)>/i)) {
        obj.maxLevel = parseInt(RegExp.$1);
        if (obj.maxLevel < 1) obj.maxLevel = 1;
      } else if (line.match(/<(?:INITIAL LEVEL):[ ](\d+)>/i)) {
        obj.initialLevel = parseInt(RegExp.$1);
        if (obj.initialLevel < 1) obj.initialLevel = 1;
      }
    }
  }
};

DataManager.processCORENotetags4 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.learnings.forEach(function(learning) {
      if (learning.note.match(/<(?:LEARN LEVEL|LEARN AT LEVEL):[ ](\d+)>/i)) {
        learning.level = parseInt(RegExp.$1);
        if (learning.level < 1) obj.maxLevel = 1;
      }
    }, this);
  }
};

//=============================================================================
// AudioManager Stacking Volume Bug Fix
//=============================================================================

Yanfly.Core.AudioManager_playSe = AudioManager.playSe;
AudioManager.playSe = function(se) {
    this._frameSe = this._frameSe || [];
    if (this.uniqueCheckSe(se)) {
      Yanfly.Core.AudioManager_playSe.call(this, se);
      this._frameSe.push(se);
    }
};

AudioManager.uniqueCheckSe = function(se1) {
    if (this._frameSe.contains(se1)) return false;
    return true;
};

AudioManager.clearUniqueCheckSe = function() {
    this._frameSe = [];
};

Yanfly.Core.SceneManager_updateInputData = SceneManager.updateInputData;
SceneManager.updateInputData = function() {
    Yanfly.Core.SceneManager_updateInputData.call(this);
    AudioManager.clearUniqueCheckSe();
};

//=============================================================================
// SceneManager
//=============================================================================

SceneManager._screenWidth  = Yanfly.Param.ScreenWidth;
SceneManager._screenHeight = Yanfly.Param.ScreenHeight;
SceneManager._boxWidth     = Yanfly.Param.ScreenWidth;
SceneManager._boxHeight    = Yanfly.Param.ScreenHeight

Yanfly.Core.SceneManager_run = SceneManager.run;
SceneManager.run = function(sceneClass) {
  Yanfly.Core.SceneManager_run.call(this, sceneClass);
  Yanfly.updateResolution();
  if (!Utils.isNwjs()) return;
  if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= "1.6.0") return;
  if (Yanfly.Param.OpenConsole) Yanfly.openConsole();
};

Yanfly.updateResolution = function() {
  var resizeWidth = Yanfly.Param.ScreenWidth - window.innerWidth;
  var resizeHeight = Yanfly.Param.ScreenHeight - window.innerHeight;
  if (!Imported.ScreenResolution) {
    window.moveBy(-1 * resizeWidth / 2, -1 * resizeHeight / 2);
    window.resizeBy(resizeWidth, resizeHeight);
  }
};

Yanfly.openConsole = function() {
  Yanfly._openedConsole = true;
  if (Utils.isNwjs() && Utils.isOptionValid('test')) {
    var _debugWindow = require('nw.gui').Window.get().showDevTools();
    if (_debugWindow) _debugWindow.moveTo(0, 0);
    window.focus();
  }
};

Yanfly.Core.SceneManager_onKeyDown = SceneManager.onKeyDown;
SceneManager.onKeyDown = function(event) {
  if (!event.ctrlKey && !event.altKey && event.keyCode === 116) {
    if (Utils.isNwjs() && Utils.isOptionValid('test')) {
      var win = require('nw.gui').Window.get();
      win.closeDevTools();
    }
  }
  Yanfly.Core.SceneManager_onKeyDown.call(this, event);
};

if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= "1.6.0") {

Yanfly.openConsole = function() {
  Yanfly._openedConsole = true;
  if (!Yanfly.Param.OpenConsole) return;
  if (Utils.isNwjs() && Utils.isOptionValid('test')) {
    var win = require('nw.gui').Window.get();
    win.showDevTools();
    setTimeout(this.focusWindow.bind(this, win), 500);
  }
};

Yanfly.focusWindow = function(win) {
  win.focus();
};

Yanfly.Core.Scene_Map_update = Scene_Map.prototype.update;
Scene_Map.prototype.update = function() {
  Yanfly.Core.Scene_Map_update.call(this);
  if (!Yanfly._openedConsole) Yanfly.openConsole();
};

Yanfly.Core.Scene_Battle_update = Scene_Battle.prototype.update;
Scene_Battle.prototype.update = function() {
  Yanfly.Core.Scene_Battle_update.call(this);
  if (!Yanfly._openedConsole) Yanfly.openConsole();
};

}; // 1.6.0

//=============================================================================
// BattleManager
//=============================================================================

Yanfly.Core.BattleManager_displayStartMessages =
    BattleManager.displayStartMessages;
BattleManager.displayStartMessages = function() {
  Yanfly.Core.BattleManager_displayStartMessages.call(this);
  $gameTroop.members().forEach(function(enemy) {
      enemy.recoverAll();
  });
};

BattleManager.processEscape = function() {
  $gameParty.performEscape();
  SoundManager.playEscape();
  var success = this._preemptive ? true : (Math.random() < this._escapeRatio);
  if (success) {
      $gameParty.removeBattleStates();
      this.displayEscapeSuccessMessage();
      this._escaped = true;
      this.processAbort();
  } else {
      this.displayEscapeFailureMessage();
      this._escapeRatio += 0.1;
      $gameParty.clearActions();
      this.startTurn();
  }
  return success;
};

//=============================================================================
// Game_BattlerBase
//=============================================================================

Game_BattlerBase.prototype.paramMax = function(paramId) {
    if (paramId === 0) {
        return Yanfly.Param.EnemyMaxHp;
    } else if (paramId === 1) {
        return Yanfly.Param.EnemyMaxMp;
    } else {
        return Yanfly.Param.EnemyParam;
    }
};

Yanfly.Core.Game_BattlerBase_refresh = Game_BattlerBase.prototype.refresh;

Game_BattlerBase.prototype.mapRegenUpdateCheck = function(type) {
  if ($gameParty.inBattle()) return true;
  if (type === 'hp') {
    return Yanfly.Param.RefreshUpdateHp;
  } else if (type === 'mp') {
    return Yanfly.Param.RefreshUpdateMp;
  } else if (type === 'tp') {
    return Yanfly.Param.RefreshUpdateTp;
  }
};

Game_BattlerBase.prototype.setHp = function(hp) {
  if (this._hp === hp) return;
  this._hp = hp;
  if (this.mapRegenUpdateCheck('hp')) {
    this.refresh();
  } else {
    Yanfly.Core.Game_BattlerBase_refresh.call(this);
  }
};

Game_BattlerBase.prototype.setMp = function(mp) {
  if (this._mp === mp) return;
  this._mp = mp;
  if (this.mapRegenUpdateCheck('mp')) {
    this.refresh();
  } else {
    Yanfly.Core.Game_BattlerBase_refresh.call(this);
  }
};

Game_BattlerBase.prototype.setTp = function(tp) {
  if (this._tp === tp) return;
  this._tp = tp;
  if (this.mapRegenUpdateCheck('tp')) {
    this.refresh();
  } else {
    Yanfly.Core.Game_BattlerBase_refresh.call(this);
  }
};

//=============================================================================
// Game_Battler
//=============================================================================

Game_Battler.prototype.onTurnEnd = function() {
  this.clearResult();
  this.regenerateAll();
  this.updateStateTurns();
  this.updateBuffTurns();
  this.removeStatesAuto(2);
};

//=============================================================================
// Game_Actor
//=============================================================================

Yanfly.Core.Game_Actor_isMaxLevel = Game_Actor.prototype.isMaxLevel;
Game_Actor.prototype.isMaxLevel = function() {
    if (this.maxLevel() === 0) return false;
    return Yanfly.Core.Game_Actor_isMaxLevel.call(this);
};

Game_Actor.prototype.paramMax = function(paramId) {
  if (paramId === 0) {
      return Yanfly.Param.ActorMaxHp;
  } else if (paramId === 1) {
      return Yanfly.Param.ActorMaxMp;
  } else {
      return Yanfly.Param.ActorParam;
  }
};

Yanfly.Core.Game_Actor_paramBase = Game_Actor.prototype.paramBase;
Game_Actor.prototype.paramBase = function(paramId) {
    if (this.level > 99) {
      var i = this.currentClass().params[paramId][99];
      var j = this.currentClass().params[paramId][98];
      i += (i - j) * (this.level - 99);
      return i;
    }
    return Yanfly.Core.Game_Actor_paramBase.call(this, paramId);
};

Game_Actor.prototype.changeClass = function(classId, keepExp) {
    if (keepExp) {
        this._exp[classId] = this._exp[this._classId];
    }
    this._classId = classId;
    this.changeExp(this._exp[this._classId] || 0, false);
    this.refresh();
};

Game_Actor.prototype.learnSkill = function(skillId) {
    if (!this._skills.contains(skillId)) {
        this._skills.push(skillId);
        this._skills.sort(function(a, b) {
            return a - b;
        });
    }
};

if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= '1.3.4') {

Game_Actor.prototype.meetsUsableItemConditions = function(item) {
  if($gameParty.inBattle() && !BattleManager.canEscape() &&
  this.testEscape(item)){
    return false;
  }
  return Game_BattlerBase.prototype.meetsUsableItemConditions.call(this, item);
};

}; // Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= '1.3.4'

//=============================================================================
// Game_Party
//=============================================================================

Game_Party.prototype.maxGold = function() {
    return eval(Yanfly.Param.MaxGold);
};

Game_Party.prototype.maxItems = function(item) {
    if (!item) return 1;
    return item.maxItem;
};

Game_Party.prototype.onPlayerWalk = function() {
    var group = this.members();
    var length = group.length;
    for (var i = 0; i < length; ++i) {
      var actor = group[i];
      if (actor) actor.onPlayerWalk();
    }
};

//=============================================================================
// Game_Map
//=============================================================================

Yanfly.isPreventScreenJittering = function() {
  if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= '1.3.4') return false;
  return true;
};

if (Yanfly.isPreventScreenJittering()) {

Game_Map.prototype.displayX = function() {
    return parseFloat(Math.floor(this._displayX *
      this.tileWidth())) / this.tileWidth();
};

Game_Map.prototype.displayY = function() {
    return parseFloat(Math.floor(this._displayY *
      this.tileHeight())) / this.tileHeight();
};

}; // Yanfly.isPreventScreenJittering

Game_Map.prototype.adjustX = function(x) {
    if (this.isLoopHorizontal() && x < this.displayX() -
            (this.width() - this.screenTileX()) / 2) {
        return x - this.displayX() + $dataMap.width;
    } else {
        return x - this.displayX();
    }
};

Game_Map.prototype.adjustY = function(y) {
    if (this.isLoopVertical() && y < this.displayY() -
            (this.height() - this.screenTileY()) / 2) {
        return y - this.displayY() + $dataMap.height;
    } else {
        return y - this.displayY();
    }
};

//==============================
// * 物体 - 事件帧刷新 优化（核心漏洞修复）
//
//			说明：	空事件关闭update。
//==============================
Game_Map.prototype.updateEvents = function() {
    var group = this.events();
    var length = group.length;
    for (var i = 0; i < length; ++i) {
      var ev = group[i];
      if (ev) ev.update();
    }
    var group = this._commonEvents;
    var length = group.length;
    for (var i = 0; i < length; ++i) {
      var ev = group[i];
      if (ev) ev.update();
    }
};

Game_Map.prototype.updateVehicles = function() {
    var group = this._vehicles;
    var length = group.length;
    for (var i = 0; i < length; ++i) {
      var vehicle = group[i];
      if (vehicle) vehicle.update();
    }
};

//=============================================================================
// ** 物体
//=============================================================================
//==============================
// * 物体 - 移动路线初始优化（核心漏洞修复）
//
//			说明：	在执行setMoveRoute时，初始化原移动路线。（此操作防止_originalMoveRoute为空 报错。）
//==============================
Game_Character.prototype.queueMoveRoute = function(moveRoute) {
    this._originalMoveRoute = moveRoute;
    this._originalMoveRouteIndex = 0;
};
Yanfly.Core.Game_Event_setMoveRoute = Game_Event.prototype.setMoveRoute;
Game_Character.prototype.setMoveRoute = function(moveRoute) {
    if (!this._moveRouteForcing) {
        Yanfly.Core.Game_Event_setMoveRoute.call(this, moveRoute);
    } else {
        this.queueMoveRoute(moveRoute);
    }
};
//==============================
// * 物体 - 阻塞设置
//
//			说明：	此设置强制 只有中层的事件 才能相互碰撞阻塞。（注意此坑）
//==============================
Game_Event.prototype.isCollidedWithEvents = function(x, y) {
  var events = $gameMap.eventsXyNt(x, y).filter(function(ev) {
    return ev.isNormalPriority();
  });
  if (events.length <= 0) return false;
  return this.isNormalPriority();
};

//（已被移动路线核心替代）
//Yanfly.Core.Game_Character_processMoveCommand =
//  Game_Character.prototype.processMoveCommand;
//Game_Character.prototype.processMoveCommand = function(command) {
//  var gc = Game_Character;
//  var params = command.parameters;
//  switch (command.code) {
//  case gc.ROUTE_SCRIPT:
//    try {
//      eval(params[0]);
//    } catch (e) {
//      Yanfly.Util.displayError(e, params[0], 'MOVE ROUTE SCRIPT ERROR');
//    }
//    return;
//    break;
//  }
//  return Yanfly.Core.Game_Character_processMoveCommand.call(this, command);
//};


//=============================================================================
// Game_Screen
//=============================================================================

Game_Screen.prototype.updatePictures = function() {
    var group = this._pictures;
    var length = group.length;
    for (var i = 0; i < length; ++i) {
      var picture = group[i];
      if (picture) picture.update();
    }
};

//=============================================================================
// Game_Action
//=============================================================================

Yanfly.Core.Game_Action_testItemEffect = Game_Action.prototype.testItemEffect;
Game_Action.prototype.testItemEffect = function(target, effect) {
    switch (effect.code) {
    case Game_Action.EFFECT_LEARN_SKILL:
      return target.isActor() && !target._skills.contains(effect.dataId);
    default:
      return Yanfly.Core.Game_Action_testItemEffect.call(this, target, effect);
    }
};

Game_Action.prototype.evalDamageFormula = function(target) {
  var item = this.item();
  var a = this.subject();
  var b = target;
  var v = $gameVariables._data;
  var sign = ([3, 4].contains(item.damage.type) ? -1 : 1);
  try {
    var value = Math.max(eval(item.damage.formula), 0) * sign;
    if (isNaN(value)) value = 0;
    return value;
  } catch (e) {
    Yanfly.Util.displayError(e, item.damage.formula, 'DAMAGE FORMULA ERROR');
    return 0;
  }
};

//=============================================================================
// Game_Interpreter
//=============================================================================

// Conditional Branch
Yanfly.Core.Game_Interpreter_command111 =
  Game_Interpreter.prototype.command111;
Game_Interpreter.prototype.command111 = function() {
  var result = false;
  switch (this._params[0]) {
  case 0: // Switch
    if (this._params[2] === 0) {
      result = $gameSwitches.value(this._params[1]);
    } else {
      result = !$gameSwitches.value(this._params[1]);
    }
    this._branch[this._indent] = result;
    if (this._branch[this._indent] === false) this.skipBranch();
    return true
    break;
  case 2: // Self Switch
    if (this._eventId > 0) {
      var key = [this._mapId, this._eventId, this._params[1]];
      if (this._params[2] === 0) {
        result = $gameSelfSwitches.value(key);
      } else {
        result = !$gameSelfSwitches.value(key);
      }
    }
    this._branch[this._indent] = result;
    if (this._branch[this._indent] === false) this.skipBranch();
    return true
    break;
  case 12:  // Script
    var code = this._params[1];
    try {
      result = !!eval(code);
    } catch (e) {
      result = false;
      Yanfly.Util.displayError(e, code, 'CONDITIONAL BRANCH SCRIPT ERROR');
    }
    this._branch[this._indent] = result;
    if (this._branch[this._indent] === false) this.skipBranch();
    return true
    break;
  }
  return Yanfly.Core.Game_Interpreter_command111.call(this);
};

// Control Variables
Yanfly.Core.Game_Interpreter_command122 =
  Game_Interpreter.prototype.command122;
Game_Interpreter.prototype.command122 = function() {
  switch (this._params[3]) {
  case 4:  // Script
    var value = 0;
    var code = this._params[4];
    try {
      value = eval(code);
    } catch (e) {
      Yanfly.Util.displayError(e, code, 'CONTROL VARIABLE SCRIPT ERROR');
    }
    for (var i = this._params[0]; i <= this._params[1]; i++) {
      this.operateVariable(i, this._params[2], value);
    }
    return true;
    break;
  }
  return Yanfly.Core.Game_Interpreter_command122.call(this);
};

// Script
Game_Interpreter.prototype.command355 = function() {
  var script = this.currentCommand().parameters[0] + '\n';
  while (this.nextEventCode() === 655) {
    this._index++;
    script += this.currentCommand().parameters[0] + '\n';
  }
  try {
    eval(script);
  } catch (e) {
    Yanfly.Util.displayError(e, script, 'SCRIPT CALL ERROR');
  }
  return true;
};

Yanfly.Core.Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    Yanfly.Core.Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'GainGold') {
        $gameParty.gainGold(parseInt(args[0]));
    }
    if (command === 'LoseGold') {
        $gameParty.loseGold(parseInt(args[0]));
    }
};

//=============================================================================
// Scene_Base
//=============================================================================

Scene_Base.prototype.clearChildren = function() {
  while (this.children.length > 0) {
    this.removeChild(this.children[0]);
  }
};

if (Yanfly.Param.CollectionClear) {

Yanfly.Core.Scene_Base_terminate = Scene_Base.prototype.terminate;
Scene_Base.prototype.terminate = function() {
  Yanfly.Core.Scene_Base_terminate.call(this);
  if (this._bypassFirstClear) return;
  this.clearChildren();
};

Yanfly.Core.Scene_Title_terminate = Scene_Title.prototype.terminate;
Scene_Title.prototype.terminate = function() {
  this._bypassFirstClear = true;
  Yanfly.Core.Scene_Title_terminate.call(this);
  this.clearChildren();
};

Yanfly.Core.Scene_Map_terminate = Scene_Map.prototype.terminate;
Scene_Map.prototype.terminate = function() {
  this._bypassFirstClear = true;
  Yanfly.Core.Scene_Map_terminate.call(this);
  this.clearChildren();
};

Yanfly.Core.Scene_Battle_terminate = Scene_Battle.prototype.terminate;
Scene_Battle.prototype.terminate = function() {
  this._bypassFirstClear = true;
  Yanfly.Core.Scene_Battle_terminate.call(this);
  this.clearChildren();
};

Yanfly.Core.Scene_Options_terminate = Scene_Options.prototype.terminate;
Scene_Options.prototype.terminate = function() {
  this._bypassFirstClear = true;
  Yanfly.Core.Scene_Options_terminate.call(this);
  this.clearChildren();
};

Yanfly.Core.Scene_Load_terminate = Scene_Load.prototype.terminate;
Scene_Load.prototype.terminate = function() {
  this._bypassFirstClear = true;
  Yanfly.Core.Scene_Load_terminate.call(this);
  this.clearChildren();
};

Yanfly.Core.Scene_Gameover_terminate = Scene_Gameover.prototype.terminate;
Scene_Gameover.prototype.terminate = function() {
  this._bypassFirstClear = true;
  Yanfly.Core.Scene_Gameover_terminate.call(this);
  this.clearChildren();
};

}; // Yanfly.Param.CollectionClear

//=============================================================================
// Scene_Boot
//=============================================================================

Scene_Boot.prototype.isGameFontLoaded = function() {
  if (Graphics.isFontLoaded('GameFont')) {
    return true;
  } else if (Yanfly.Param.GameFontTimer <= 0) {
    return false;
  } else {
    var elapsed = Date.now() - this._startDate;
    if (elapsed >= Yanfly.Param.GameFontTimer) {
      throw new Error('Failed to load GameFont');
    } else {
      return false;
    }
  }
};

//=============================================================================
// Scene_Item
//=============================================================================

if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= "1.6.0") {

Scene_Item.prototype.update = function() {
  Scene_ItemBase.prototype.update.call(this);
};

}; // Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= "1.6.0"

//=============================================================================
// Scene_Title
//=============================================================================

Yanfly.Core.Scene_Title_start = Scene_Title.prototype.start;
Scene_Title.prototype.start = function() {
  Yanfly.Core.Scene_Title_start.call(this);
  if (Yanfly.Param.ScaleTitle) this.rescaleTitle();
};

Scene_Title.prototype.rescaleTitle = function() {
  this.rescaleTitleSprite(this._backSprite1);
  this.rescaleTitleSprite(this._backSprite2);
};

Scene_Title.prototype.rescaleTitleSprite = function(sprite) {
  if (sprite.bitmap.width <= 0 || sprite.bitmap <= 0) {
    return setTimeout(this.rescaleTitleSprite.bind(this, sprite), 5);
  }
  var width = Graphics.boxWidth;
  var height = Graphics.boxHeight;
  var ratioX = width / sprite.bitmap.width;
  var ratioY = height / sprite.bitmap.height;
  if (ratioX > 1.0) sprite.scale.x = ratioX;
  if (ratioY > 1.0) sprite.scale.y = ratioY;
  this.centerSprite(sprite);
};

//=============================================================================
// Scene_Map
//=============================================================================

if (Yanfly.Param.ShowEvTrans) {

Scene_Map.prototype.startEncounterEffect = function() {
  this._encounterEffectDuration = this.encounterEffectSpeed();
};

}; // Yanfly.Param.ShowEvTrans

Yanfly.Core.Scene_Map_snapForBattleBackground =
  Scene_Map.prototype.snapForBattleBackground;
Scene_Map.prototype.snapForBattleBackground = function() {
  if (!Yanfly.Param.ShowEvSnap) this._spriteset.hideCharacters();
  Yanfly.Core.Scene_Map_snapForBattleBackground.call(this);
  if (Yanfly.Param.ShowEvTrans) this._spriteset.showCharacters();
};

//=============================================================================
// Scene_Gameover
//=============================================================================

Yanfly.Core.Scene_Gameover_start = Scene_Gameover.prototype.start;
Scene_Gameover.prototype.start = function() {
    Yanfly.Core.Scene_Gameover_start.call(this);
    if (Yanfly.Param.ScaleGameOver) this.rescaleBackground();
};

Scene_Gameover.prototype.rescaleBackground = function() {
    this.rescaleImageSprite(this._backSprite);
};

Scene_Gameover.prototype.rescaleImageSprite = function(sprite) {
    if (sprite.bitmap.width <= 0 || sprite.bitmap <= 0) {
      return setTimeout(this.rescaleImageSprite.bind(this, sprite), 5);
    }
    var width = Graphics.boxWidth;
    var height = Graphics.boxHeight;
    var ratioX = width / sprite.bitmap.width;
    var ratioY = height / sprite.bitmap.height;
    if (ratioX > 1.0) sprite.scale.x = ratioX;
    if (ratioY > 1.0) sprite.scale.y = ratioY;
    this.centerSprite(sprite);
};

Scene_Gameover.prototype.centerSprite = function(sprite) {
    sprite.x = Graphics.width / 2;
    sprite.y = Graphics.height / 2;
    sprite.anchor.x = 0.5;
    sprite.anchor.y = 0.5;
};

//=============================================================================
// Sprite_Animation
//=============================================================================

Sprite_Animation.prototype.setupRate = function() {
  this._rate = Yanfly.Param.AnimationRate;
};

//=============================================================================
// Sprite_Battler
//=============================================================================

if (!Yanfly.Param.FlashTarget) {

Yanfly.Core.Sprite_Battler_updateSelectionEffect =
    Sprite_Battler.prototype.updateSelectionEffect;
Sprite_Battler.prototype.updateSelectionEffect = function() {
    if (this._battler.isActor()) {
      Yanfly.Core.Sprite_Battler_updateSelectionEffect.call(this);
    } else {
      if (this._battler.isSelected()) this.startEffect('whiten');
    }
};

}; // Yanfly.Param.FlashTarget

//=============================================================================
// Sprite_Actor
//=============================================================================

if (Yanfly.Param.ReposBattlers) {
  Yanfly.Core.Sprite_Actor_setActorHome = Sprite_Actor.prototype.setActorHome;
  Sprite_Actor.prototype.setActorHome = function(index) {
      Yanfly.Core.Sprite_Actor_setActorHome.call(this, index);
      this._homeX += Graphics.boxWidth - 816;
      this._homeY += Graphics.boxHeight - 624;
  };
};

Sprite_Actor.prototype.retreat = function() {
    this.startMove(1200, 0, 120);
};

//=============================================================================
// Sprite_Enemy
//=============================================================================

if (Yanfly.Param.ReposBattlers) {

Yanfly.Core.Sprite_Enemy_setBattler = Sprite_Enemy.prototype.setBattler;
Sprite_Enemy.prototype.setBattler = function(battler) {
    Yanfly.Core.Sprite_Enemy_setBattler.call(this, battler);
    if (!this._enemy._alteredScreenY) {
      this._homeY += Math.floor((Graphics.boxHeight - 624) / 2);
      this._enemy._screenY = this._homeY;
      this._enemy._alteredScreenY = true;
    }
    if ($gameSystem.isSideView()) return;
    if (!this._enemy._alteredScreenX) {
      this._homeX += (Graphics.boxWidth - 816) / 2;
      this._enemy._screenX = this._homeX;
      this._enemy._alteredScreenX = true;
    }
};

}; // Yanfly.Param.ReposBattlers

//=============================================================================
// Sprite_StateIcon
//=============================================================================

Sprite_StateIcon._iconWidth  = Yanfly.Param.IconWidth;
Sprite_StateIcon._iconHeight = Yanfly.Param.IconHeight;

//=============================================================================
// Sprite_Button
//=============================================================================

Sprite_Button.prototype.isButtonTouched = function() {
    var x = this.canvasToLocalX(TouchInput.x) + (this.anchor.x * this.width);
    var y = this.canvasToLocalY(TouchInput.y) + (this.anchor.y * this.height);
    return x >= 0 && y >= 0 && x < this.width && y < this.height;
};

//=============================================================================
// Sprite_Battleback
//=============================================================================

function Sprite_Battleback() {
    this.initialize.apply(this, arguments);
}

Sprite_Battleback.prototype = Object.create(Sprite.prototype);
Sprite_Battleback.prototype.constructor = Sprite_Battleback;

Sprite_Battleback.prototype.initialize = function(bitmapName, type) {
  Sprite.prototype.initialize.call(this);
  this._bitmapName = bitmapName;
  this._battlebackType = type;
  this.createBitmap();
};

Sprite_Battleback.prototype.createBitmap = function() {
  if (this._bitmapName === '') {
    this.bitmap = new Bitmap(Graphics.boxWidth, Graphics.boxHeight);
  } else {
    if (this._battlebackType === 1) {
      this.bitmap = ImageManager.loadBattleback1(this._bitmapName);
    } else {
      this.bitmap = ImageManager.loadBattleback2(this._bitmapName);
    }
    this.scaleSprite();
  }
};

Sprite_Battleback.prototype.scaleSprite = function() {
  if (this.bitmap.width <= 0) return setTimeout(this.scaleSprite.bind(this), 5);
  var width = Graphics.boxWidth;
  var height = Graphics.boxHeight;
  if (this.bitmap.width < width) {
    this.scale.x = width / this.bitmap.width;
  }
  if (this.bitmap.height < height) {
    this.scale.y = height / this.bitmap.height;
  }
  this.anchor.x = 0.5;
  this.x = Graphics.boxWidth / 2;
  if ($gameSystem.isSideView()) {
    this.anchor.y = 1;
    this.y = Graphics.boxHeight;
  } else {
    this.anchor.y = 0.5;
    this.y = Graphics.boxHeight / 2;
  }
};

//=============================================================================
// Sprite_Character
//=============================================================================

Yanfly.Core.Sprite_Character_updateHalfBodySprites =
  Sprite_Character.prototype.updateHalfBodySprites;
Sprite_Character.prototype.updateHalfBodySprites = function() {
  Yanfly.Core.Sprite_Character_updateHalfBodySprites.call(this);
  if (this._bushDepth > 0) {
    this._upperBody.blendMode = this.blendMode;
    this._lowerBody.blendMode = this.blendMode;
  }
};

//=============================================================================
// Spriteset_Map
//=============================================================================

Spriteset_Map.prototype.hideCharacters = function() {
  for (var i = 0; i < this._characterSprites.length; i++) {
    var sprite = this._characterSprites[i];
    if (!sprite.isTile()) sprite.hide();
  }
};

Spriteset_Map.prototype.showCharacters = function() {
  for (var i = 0; i < this._characterSprites.length; i++) {
    var sprite = this._characterSprites[i];
    if (!sprite.isTile()) sprite.show();
  }
};

//=============================================================================
// Spriteset_Battle
//=============================================================================

if (Yanfly.Param.ScaleBattleback) {

if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= '1.3.2') {

// Rewriting the battlebacks
Spriteset_Battle.prototype.createBattleback = function() {
  this._back1Sprite = new Sprite_Battleback(this.battleback1Name(), 1);
  this._back2Sprite = new Sprite_Battleback(this.battleback2Name(), 2);
  this._battleField.addChild(this._back1Sprite);
  this._battleField.addChild(this._back2Sprite);
};

// No more updateBattleback
Spriteset_Battle.prototype.updateBattleback = function() {
};

} else { // Version 1.3.0 and below
  
Yanfly.Core.Spriteset_Battle_locateBattleback =
    Spriteset_Battle.prototype.locateBattleback;
Spriteset_Battle.prototype.locateBattleback = function() {
  var sprite1 = this._back1Sprite;
  var sprite2 = this._back2Sprite;
  if (sprite1.bitmap.width <= 0) return;
  if (sprite2.bitmap.width <= 0) return;
  if (this._rescaledBattlebackSprite) return;
  this._rescaledBattlebackSprite = true;
  Yanfly.Core.Spriteset_Battle_locateBattleback.call(this);
  var height = this._battleField.height;
  sprite1.origin.y = sprite1.x + sprite1.bitmap.height - height;
  sprite2.origin.y = sprite1.y + sprite2.bitmap.height - height;
  this.rescaleBattlebacks();
};

Spriteset_Battle.prototype.rescaleBattlebacks = function() {
  this.rescaleBattlebackSprite(this._back1Sprite);
  this.rescaleBattlebackSprite(this._back2Sprite);
};

Spriteset_Battle.prototype.rescaleBattlebackSprite = function(sprite) {
  if (sprite.bitmap.width <= 0 || sprite.bitmap <= 0) return;
  var width = Graphics.boxWidth;
  var height = Graphics.boxHeight;
  var ratioX = width / sprite.bitmap.width;
  var ratioY = height / sprite.bitmap.height;
  if (ratioX > 1.0) {
    sprite.scale.x = ratioX;
    sprite.anchor.x = 0.5;
    sprite.x = width / 2;
  }
  if (ratioY > 1.0) {
    sprite.scale.y = ratioY;
    sprite.origin.y = 0;
    sprite.y = 0;
  }
};

} // Version 1.3.0 and below

} // Yanfly.Param.ScaleBattleback

//=============================================================================
// Window_Base
//=============================================================================

Window_Base._iconWidth   = Yanfly.Param.IconWidth;
Window_Base._iconHeight  = Yanfly.Param.IconHeight;
Window_Base._faceWidth   = Yanfly.Param.FaceWidth;
Window_Base._faceHeight  = Yanfly.Param.FaceHeight;

Window_Base.prototype.lineHeight = function() {
  return Yanfly.Param.LineHeight;
};

Window_Base.prototype.drawTextEx = function(text, x, y) {
  if (text) {
    this.resetFontSettings();
    var textState = { index: 0, x: x, y: y, left: x };
    textState.text = this.convertEscapeCharacters(text);
    textState.height = this.calcTextHeight(textState, false);
    while (textState.index < textState.text.length) {
      this.processCharacter(textState);
    }
    return textState.x - x;
  } else {
    return 0;
  }
};

Window_Base.prototype.textWidthEx = function(text) {
    return this.drawTextEx(text, 0, this.contents.height + this.lineHeight());
};

Window_Base.prototype.standardFontFace = function() {
    if ($gameSystem.isChinese()) {
    return Yanfly.Param.ChineseFont;
    } else if ($gameSystem.isKorean()) {
    return Yanfly.Param.KoreanFont;
    } else {
    return Yanfly.Param.DefaultFont;
    }
};

Window_Base.prototype.standardFontSize = function() {
    return Yanfly.Param.FontSize;
};

Window_Base.prototype.standardPadding = function() {
    return Yanfly.Param.WindowPadding;
};

Window_Base.prototype.textPadding = function() {
    return Yanfly.Param.TextPadding;
};

Window_Base.prototype.standardBackOpacity = function() {
    return Yanfly.Param.WindowOpacity;
};

Window_Base.prototype.normalColor = function() {
  return this.textColor(Yanfly.Param.ColorNormal);
};
Window_Base.prototype.systemColor = function() {
    return this.textColor(Yanfly.Param.ColorSystem);
};

Window_Base.prototype.crisisColor = function() {
    return this.textColor(Yanfly.Param.ColorCrisis);
};

Window_Base.prototype.deathColor = function() {
    return this.textColor(Yanfly.Param.ColorDeath);
};

Window_Base.prototype.gaugeBackColor = function() {
    return this.textColor(Yanfly.Param.ColorGaugeBack);
};

Window_Base.prototype.hpGaugeColor1 = function() {
    return this.textColor(Yanfly.Param.ColorHpGauge1);
};

Window_Base.prototype.hpGaugeColor2 = function() {
    return this.textColor(Yanfly.Param.ColorHpGauge2);
};

Window_Base.prototype.mpGaugeColor1 = function() {
    return this.textColor(Yanfly.Param.ColorMpGauge1);
};

Window_Base.prototype.mpGaugeColor2 = function() {
    return this.textColor(Yanfly.Param.ColorMpGauge2);
};

Window_Base.prototype.mpCostColor = function() {
    return this.textColor(Yanfly.Param.ColorMpCost);
};

Window_Base.prototype.powerUpColor = function() {
    return this.textColor(Yanfly.Param.ColorPowerUp);
};

Window_Base.prototype.powerDownColor = function() {
    return this.textColor(Yanfly.Param.ColorPowerDown);
};

Window_Base.prototype.tpGaugeColor1 = function() {
    return this.textColor(Yanfly.Param.ColorTpGauge1);
};

Window_Base.prototype.tpGaugeColor2 = function() {
    return this.textColor(Yanfly.Param.ColorTpGauge2);
};

Window_Base.prototype.tpCostColor = function() {
    return this.textColor(Yanfly.Param.ColorTpCost);
};

Window_Base.prototype.drawGauge = function(dx, dy, dw, rate, color1, color2) {
  var color3 = this.gaugeBackColor();
  var fillW = Math.floor(dw * rate).clamp(0, dw);
  var gaugeH = this.gaugeHeight();
  var gaugeY = dy + this.lineHeight() - gaugeH - 2;
  if (Yanfly.Param.GaugeOutline) {
    color3.paintOpacity = this.translucentOpacity();
    this.contents.fillRect(dx, gaugeY - 1, dw, gaugeH, color3);
    fillW = Math.max(fillW - 2, 0);
    gaugeH -= 2;
    dx += 1;
  } else {
    var fillW = Math.floor(dw * rate);
    var gaugeY = dy + this.lineHeight() - gaugeH - 2;
    this.contents.fillRect(dx, gaugeY, dw, gaugeH, color3);
  }
  this.contents.gradientFillRect(dx, gaugeY, fillW, gaugeH, color1, color2);
};

Window_Base.prototype.gaugeHeight = function() {
    return Yanfly.Param.GaugeHeight;
};

Window_Base.prototype.drawActorLevel = function(actor, x, y) {
    this.changeTextColor(this.systemColor());
    var dw1 = this.textWidth(TextManager.levelA);
    this.drawText(TextManager.levelA, x, y, dw1);
    this.resetTextColor();
    var level = Yanfly.Util.toGroup(actor.level);
    var dw2 = this.textWidth(Yanfly.Util.toGroup(actor.maxLevel()));
    this.drawText(level, x + dw1, y, dw2, 'right');
};

Window_Base.prototype.drawCurrentAndMax = function(current, max, x, y,
                                                   width, color1, color2) {
    var labelWidth = this.textWidth('HP');
    var valueWidth = this.textWidth(Yanfly.Util.toGroup(max));
    var slashWidth = this.textWidth('/');
    var x1 = x + width - valueWidth;
    var x2 = x1 - slashWidth;
    var x3 = x2 - valueWidth;
    if (x3 >= x + labelWidth) {
        this.changeTextColor(color1);
        this.drawText(Yanfly.Util.toGroup(current), x3, y, valueWidth,
          'right');
        this.changeTextColor(color2);
        this.drawText('/', x2, y, slashWidth, 'right');
        this.drawText(Yanfly.Util.toGroup(max), x1, y, valueWidth, 'right');
    } else {
        this.changeTextColor(color1);
        this.drawText(Yanfly.Util.toGroup(current), x1, y, valueWidth,
          'right');
    }
};

Window_Base.prototype.drawActorTp = function(actor, x, y, width) {
    width = width || 96;
    var color1 = this.tpGaugeColor1();
    var color2 = this.tpGaugeColor2();
    this.drawGauge(x, y, width, actor.tpRate(), color1, color2);
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.tpA, x, y, 44);
    this.changeTextColor(this.tpColor(actor));
    this.drawText(Yanfly.Util.toGroup(actor.tp), x + width - 64, y, 64,
      'right');
};

Window_Base.prototype.drawActorSimpleStatus = function(actor, x, y, width) {
    var lineHeight = this.lineHeight();
    var xpad = Window_Base._faceWidth + (2 * Yanfly.Param.TextPadding);
    var x2 = x + xpad;
    var width2 = Math.max(180, width - xpad - this.textPadding());
    this.drawActorName(actor, x, y);
    this.drawActorLevel(actor, x, y + lineHeight * 1);
    this.drawActorIcons(actor, x, y + lineHeight * 2);
    this.drawActorClass(actor, x2, y, width2);
    this.drawActorHp(actor, x2, y + lineHeight * 1, width2);
    this.drawActorMp(actor, x2, y + lineHeight * 2, width2);
    if (Yanfly.Param.MenuTpGauge) {
      this.drawActorTp(actor, x2, y + lineHeight * 3, width2);
    }
};

Window_Base.prototype.drawCurrencyValue = function(value, unit, wx, wy, ww) {
    this.resetTextColor();
    this.contents.fontSize = Yanfly.Param.GoldFontSize;
    if (this.usingGoldIcon(unit)) {
      var cx = Window_Base._iconWidth;
    } else {
      var cx = this.textWidth(unit);
    }
    var text = Yanfly.Util.toGroup(value);
    if (this.textWidth(text) > ww - cx) {
      text = Yanfly.Param.GoldOverlap;
    }
    this.drawText(text, wx, wy, ww - cx - 4, 'right');
    if (this.usingGoldIcon(unit)) {
      this.drawIcon(Yanfly.Icon.Gold, wx + ww - Window_Base._iconWidth, wy + 2);
    } else {
      this.changeTextColor(this.systemColor());
      this.drawText(unit, wx, wy, ww, 'right');
    }
    this.resetFontSettings();
};

Window_Base.prototype.usingGoldIcon = function(unit) {
    if (unit !== TextManager.currencyUnit) return false;
    return Yanfly.Icon.Gold > 0;
};

//=============================================================================
// Window_Command
//=============================================================================

Window_Command.prototype.itemTextAlign = function() {
    return Yanfly.Param.TextAlign;
};

//=============================================================================
// Window_MenuStatus
//=============================================================================

Window_MenuStatus.prototype.drawItemImage = function(index) {
    var actor = $gameParty.members()[index];
    var rect = this.itemRect(index);
    this.changePaintOpacity(actor.isBattleMember());
    var fw = Window_Base._faceWidth;
    this.drawActorFace(actor, rect.x + 1, rect.y + 1, fw, rect.height - 2);
    this.changePaintOpacity(true);
};

Window_MenuStatus.prototype.drawItemStatus = function(index) {
    var actor = $gameParty.members()[index];
    var rect = this.itemRect(index);
    var xpad = Yanfly.Param.WindowPadding + Window_Base._faceWidth;
    var x = rect.x + xpad;
    if (!Yanfly.Param.MenuTpGauge) {
      var y = Math.floor(rect.y + rect.height / 2 - this.lineHeight() * 1.5);
    } else {
      var y = Math.floor(rect.y);
    }
    var width = rect.width - x - this.textPadding();
    this.drawActorSimpleStatus(actor, x, y, width);
};

//=============================================================================
// Window_ItemList
//=============================================================================

Window_ItemList.prototype.numberWidth = function() {
    return this.textWidth('\u00d70,000');
};

Window_ItemList.prototype.drawItemNumber = function(item, x, y, width) {
    if (!this.needsNumber()) return;
    var numItems = Yanfly.Util.toGroup($gameParty.numItems(item));
    this.contents.fontSize = Yanfly.Param.ItemQuantitySize;
    this.drawText('\u00d7' + numItems, x, y, width, 'right');
    this.resetFontSettings();
};

//=============================================================================
// Window_SkillStatus
//=============================================================================

Window_SkillStatus.prototype.refresh = function() {
    this.contents.clear();
    if (this._actor) {
        var w = this.width - this.padding * 2;
        var h = this.height - this.padding * 2;
        if (!Yanfly.Param.MenuTpGauge) {
          var y = h / 2 - this.lineHeight() * 1.5;
        } else {
          var y = 0;
        }
        var xpad = Yanfly.Param.WindowPadding + Window_Base._faceWidth;
        var width = w - xpad - this.textPadding();
        this.drawActorFace(this._actor, 0, 0, Window_Base._faceWidth, h);
        this.drawActorSimpleStatus(this._actor, xpad, y, width);
    }
};

Window_SkillList.prototype.drawSkillCost = function(skill, x, y, width) {
    if (this._actor.skillTpCost(skill) > 0) {
        this.changeTextColor(this.tpCostColor());
        var skillcost = Yanfly.Util.toGroup(this._actor.skillTpCost(skill));
        this.drawText(skillcost, x, y, width, 'right');
    } else if (this._actor.skillMpCost(skill) > 0) {
        this.changeTextColor(this.mpCostColor());
        var skillcost = Yanfly.Util.toGroup(this._actor.skillMpCost(skill));
        this.drawText(skillcost, x, y, width, 'right');
    }
};

//=============================================================================
// Window_EquipStatus
//=============================================================================

Window_EquipStatus.prototype.drawCurrentParam = function(x, y, paramId) {
    this.resetTextColor();
    var actorparam = Yanfly.Util.toGroup(this._actor.param(paramId));
    this.drawText(actorparam, x, y, 48, 'right');
};

Window_EquipStatus.prototype.drawNewParam = function(x, y, paramId) {
    var newValue = this._tempActor.param(paramId);
    var diffvalue = newValue - this._actor.param(paramId);
    var actorparam = Yanfly.Util.toGroup(newValue);
    this.changeTextColor(this.paramchangeTextColor(diffvalue));
    this.drawText(actorparam, x, y, 48, 'right');
};

//=============================================================================
// Window_SkillType
//=============================================================================

Window_SkillType.prototype.makeCommandList = function() {
    if (this._actor) {
        var skillTypes = this._actor.addedSkillTypes();
        skillTypes.sort(function(a, b){return a-b});
        skillTypes.forEach(function(stypeId) {
            var name = $dataSystem.skillTypes[stypeId];
            this.addCommand(name, 'skill', true, stypeId);
        }, this);
    }
};

//=============================================================================
// Window_ActorCommand
//=============================================================================

Window_ActorCommand.prototype.addSkillCommands = function() {
    var skillTypes = this._actor.addedSkillTypes();
    skillTypes.sort(function(a, b){return a-b});
    skillTypes.forEach(function(stypeId) {
        var name = $dataSystem.skillTypes[stypeId];
        this.addCommand(name, 'skill', true, stypeId);
    }, this);
};

//=============================================================================
// Window_Status
//=============================================================================

Window_Status.prototype.drawParameters = function(x, y) {
    var lineHeight = this.lineHeight();
    for (var i = 0; i < 6; i++) {
      var paramId = i + 2;
      var y2 = y + lineHeight * i;
      this.changeTextColor(this.systemColor());
      this.drawText(TextManager.param(paramId), x, y2, 160);
      this.resetTextColor();
      var actorParam = Yanfly.Util.toGroup(this._actor.param(paramId));
      var dw = this.textWidth(Yanfly.Util.toGroup(this._actor.paramMax(i + 2)));
      this.drawText(actorParam, x + 160, y2, dw, 'right');
    }
};

Window_Status.prototype.drawExpInfo = function(x, y) {
    var lineHeight = this.lineHeight();
    var expTotal = TextManager.expTotal.format(TextManager.exp);
    var expNext = TextManager.expNext.format(TextManager.level);
    var value1 = this._actor.currentExp();
    var value2 = this._actor.nextRequiredExp();
    if (this._actor.isMaxLevel()) {
        value1 = '-------';
        value2 = '-------';
    } else {
      value1 = Yanfly.Util.toGroup(value1);
      value2 = Yanfly.Util.toGroup(value2);
    }
    this.changeTextColor(this.systemColor());
    this.drawText(expTotal, x, y + lineHeight * 0, 270);
    this.drawText(expNext, x, y + lineHeight * 2, 270);
    this.resetTextColor();
    this.drawText(value1, x, y + lineHeight * 1, 270, 'right');
    this.drawText(value2, x, y + lineHeight * 3, 270, 'right');
};

//=============================================================================
// Window_ShopBuy
//=============================================================================

Window_ShopBuy.prototype.drawItem = function(index) {
    var item = this._data[index];
    var rect = this.itemRect(index);
    rect.width -= this.textPadding();
    this.changePaintOpacity(this.isEnabled(item));
    this.drawItemName(item, rect.x, rect.y, rect.width);
    this.contents.fontSize = Yanfly.Param.GoldFontSize;
    var itemPrice = Yanfly.Util.toGroup(this.price(item));
    this.drawText(itemPrice, rect.x, rect.y, rect.width, 'right');
    this.changePaintOpacity(true);
    this.resetFontSettings();
};

//=============================================================================
// Window_ShopNumber
//=============================================================================

Window_ShopNumber.prototype.drawNumber = function() {
    var x = this.cursorX();
    var y = this.itemY();
    var width = this.cursorWidth() - this.textPadding();
    this.resetTextColor();
    var itemNumber = Yanfly.Util.toGroup(this._number);
    this.drawText(itemNumber, x, y, width, 'right');
};

//=============================================================================
// Window_NameEdit
//=============================================================================

Window_NameEdit.prototype.faceWidth = function() {
    return Window_Base._faceWidth;
};

//=============================================================================
// Window_BattleStatus
//=============================================================================

Window_BattleStatus.prototype.gaugeAreaWidth = function() {
    return this.width / 2 + this.standardPadding();
};

Window_BattleStatus.prototype.drawBasicArea = function(rect, actor) {
    var minIconArea = Window_Base._iconWidth * 2;
    var nameLength = this.textWidth('0') * 16 + 6;
    var iconWidth = Math.max(rect.width - nameLength, minIconArea);
    var nameWidth = rect.width - iconWidth;
    this.drawActorName(actor, rect.x + 0, rect.y, nameWidth);
    this.drawActorIcons(actor, rect.x + nameWidth, rect.y, iconWidth);
};

Window_BattleStatus.prototype.drawGaugeAreaWithTp = function(rect, actor) {
    var totalArea = this.gaugeAreaWidth() - 30;
    var hpW = Math.floor(parseInt(totalArea * 108 / 300));
    var otW = Math.floor(parseInt(totalArea * 96 / 300));
    this.drawActorHp(actor, rect.x + 0, rect.y, hpW);
    this.drawActorMp(actor, rect.x + hpW + 15, rect.y, otW);
    this.drawActorTp(actor, rect.x + hpW + otW + 30, rect.y, otW);
};

Window_BattleStatus.prototype.drawGaugeAreaWithoutTp = function(rect, actor) {
    var totalArea = this.gaugeAreaWidth() - 15;
    var hpW = Math.floor(parseInt(totalArea * 201 / 315));
    var otW = Math.floor(parseInt(totalArea * 114 / 315));
    this.drawActorHp(actor, rect.x + 0, rect.y, hpW);
    this.drawActorMp(actor, rect.x + hpW + 15,  rect.y, otW);
};

//=============================================================================
// Window_BattleLog
//=============================================================================

Window_BattleLog.prototype.showNormalAnimation = function(targets,
animationId, mirror) {
    var animation = $dataAnimations[animationId];
    if (animation) {
      if (animation.position === 3) {
        targets.forEach(function(target) {
            target.startAnimation(animationId, mirror, 0);
        });
      } else {
          var delay = this.animationBaseDelay();
          var nextDelay = this.animationNextDelay();
          targets.forEach(function(target) {
              target.startAnimation(animationId, mirror, delay);
              delay += nextDelay;
          });
      }
    }
};

//=============================================================================
// New Function
//=============================================================================

Yanfly.Util = Yanfly.Util || {};

if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= '1.5.0') {

Yanfly.Util.toGroup = function(inVal) {
  if (typeof inVal === 'string') return inVal;
  if (!Yanfly.Param.DigitGroup) return inVal;
  return inVal.toLocaleString('en');
  return inVal.replace(/(^|[^\w.])(\d{4,})/g, function($0, $1, $2) {
    return $1 + $2.replace(/\d(?=(?:\d\d\d)+(?!\d))/g, "$&,");
  });
};

} else {

Yanfly.Util.toGroup = function(inVal) {
  if (typeof inVal !== 'string') { inVal = String(inVal); }
  if (!Yanfly.Param.DigitGroup) return inVal;
  return inVal.toLocaleString('en');
  return inVal.replace(/(^|[^\w.])(\d{4,})/g, function($0, $1, $2) {
    return $1 + $2.replace(/\d(?=(?:\d\d\d)+(?!\d))/g, "$&,");
  });
};

} // Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= '1.5.0'



Yanfly.Util.displayError = function(e, code, message) {
  console.log(message);
  console.log(code || 'NON-EXISTENT');
  console.error(e);
  if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= "1.6.0") return;
  if (Utils.isNwjs() && Utils.isOptionValid('test')) {
    if (!require('nw.gui').Window.get().isDevToolsOpen()) {
      require('nw.gui').Window.get().showDevTools();
    }
  }
};

//=============================================================================
// End of File
//=============================================================================
