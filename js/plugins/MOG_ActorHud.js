//=============================================================================
// MOG_ActorHud.js
//=============================================================================

/*:
 * @plugindesc (v1.9)[v1.6]  地图UI - 玩家信息固定框
 * @author Moghunter （Drill_up翻译+优化）
 * 
 * @Drill_LE_param "角色头像-%d"
 * @Drill_LE_parentKey "---角色头像%d至%d---"
 * @Drill_LE_var "Moghunter.ahudFace_list_length"
 * 
 * 
 * @param 是否初始显示
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc 进入游戏时是否初始显示整个固定框。
 * true - 显示，false - 不显示
 * @default true
 *
 * @param 资源-固定框
 * @desc 固定框的图片资源。
 * @default 玩家固定框-外框
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 平移-整个固定框 X
 * @desc x轴方向平移，单位像素。0为贴最左边。
 * @default 0
 *
 * @param 平移-整个固定框 Y
 * @desc y轴方向平移，单位像素。0为贴最上面。
 * @default 440
 *
 * @param 最小透明度
 * @type number
 * @min 0
 * @desc 玩家在地图中进入被固定框挡住的区域时，框会变透明。
 * 0表示完全透明，255表示完全不透明
 * @default 60
 *
 * @param ------头像------
 * @default  
 *
 * @param 是否显示头像
 * @parent ------头像------
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true
 *
 * @param 平移-头像 X
 * @parent ------头像------
 * @desc 以框的位置为基准，x轴方向平移，单位像素。
 * @default 55
 *
 * @param 平移-头像 Y
 * @parent ------头像------
 * @desc 以框的位置为基准，y轴方向平移，单位像素。
 * @default 100
 *
 * @param 受伤是否震动头像
 * @parent ------头像------
 * @type boolean
 * @on 震动
 * @off 不震动
 * @desc true - 震动，false - 不震动
 * @default true
 *
 * @param 头像是否使用缩放效果
 * @parent ------头像------
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default true
 *
 * @param 受伤头像动画帧
 * @parent ------头像------
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc 若开启，则头像将被分成5份，如果受伤震动，则会播放后面4份的图片，形成角色疼痛的动画。
 * @default false
 *
 * @param 头像的优先权
 * @parent ------头像------
 * @type select
 * @option 头像在框后面
 * @value 0
 * @option 头像在框前面
 * @value 1
 * @desc 0 - 头像在框后面， 1- 头像在框前面
 * @default 1
 *
 * @param ------角色名------
 * @default
 *
 * @param 是否显示角色名
 * @parent ------角色名------
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true
 *
 * @param 平移-角色名 X
 * @parent ------角色名------
 * @desc 以框的位置为基准，x轴方向平移，单位像素。
 * @default 5
 *
 * @param 平移-角色名 Y
 * @parent ------角色名------
 * @desc 以框的位置为基准，y轴方向平移，单位像素。
 * @default 20 
 *
 * @param 角色名字体大小
 * @parent ------角色名------
 * @type number
 * @min 1
 * @desc 角色名的字体大小。
 * @default 20
 *
 * @param 角色名字体粗细
 * @parent ------角色名------
 * @type number
 * @min 1
 * @desc 角色名的字体粗细。
 * @default 4
 *
 * @param 角色名字体是否为斜体
 * @parent ------角色名------
 * @type boolean
 * @on 是
 * @off 否
 * @desc true - 是，false - 否
 * @default false
 *
 * @param ------生命------
 * @default 
 *
 * @param 是否显示生命条
 * @parent ------生命------
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true   
 *
 * @param 资源-生命条
 * @parent 是否显示生命条
 * @desc 生命条的图片资源。
 * @default 玩家固定框-生命条
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 平移-生命条 X
 * @parent 是否显示生命条
 * @desc 以框的位置为基准，x轴方向平移，单位像素。
 * @default 143
 *
 * @param 平移-生命条 Y
 * @parent 是否显示生命条
 * @desc 以框的位置为基准，x轴方向平移，单位像素。
 * @default 85
 *
 * @param 角度-生命条
 * @parent 是否显示生命条
 * @desc 以生命条的位置为基准，逆时针旋转。单位度。
 * @default 0 
 *
 * @param 生命条是否流动
 * @parent 是否显示生命条
 * @type boolean
 * @on 流动
 * @off 不流动
 * @desc 生命条从左往右流动。修改时注意资源图片的宽度。
 * true - 流动，false - 不流动
 * @default true
 *
 * @param 是否显示生命数值
 * @parent ------生命------
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true   
 *
 * @param 资源-生命数值
 * @parent 是否显示生命数值
 * @desc 生命数值的图片资源。
 * @default 玩家固定框-生命数值
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 生命数值最大显示位
 * @parent 是否显示生命数值
 * @type number
 * @min 1
 * @max 16
 * @desc 注意,这里是只显示位数,不负责破限。填12表示最大显示12位数。
 * 如果你使用了生命破限脚本，请及时修正你想要显示的最大位数。
 * @default 6
 *
 * @param 平移-生命数值 X
 * @parent 是否显示生命数值
 * @desc 以框的位置为基准，x轴方向平移，单位像素。
 * @default 270
 *
 * @param 平移-生命数值 Y
 * @parent 是否显示生命数值
 * @desc 以框的位置为基准，y轴方向平移，单位像素。
 * @default 70
 *
 * @param 生命数值文本对齐方式
 * @parent 是否显示生命数值
 * @type select
 * @option 左对齐
 * @value 0
 * @option 居中
 * @value 1
 * @option 右对齐
 * @value 2
 * @desc 0 - 左对齐，1- 居中，2 - 右对齐
 * @default 0
 * 
 * @param 是否显示最大生命数值
 * @parent ------生命------
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default false
 *
 * @param 平移-最大生命数值 X
 * @parent 是否显示最大生命数值
 * @desc 以框的位置为基准，x轴方向平移，单位像素。
 * @default 185
 *
 * @param 平移-最大生命数值 Y
 * @parent 是否显示最大生命数值
 * @desc 以框的位置为基准，y轴方向平移，单位像素。
 * @default 40
 *
 * @param 是否显示生命图标
 * @parent ------生命------
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default false
 *
 * @param 资源-生命图标
 * @parent 是否显示生命图标
 * @desc 生命图标的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 是否使用半血模式
 * @parent 是否显示生命图标
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * 使用则生命图标会根据生命值出现一半图标的情况。
 * @default false
 *
 * @param 生命图标值跨度
 * @parent 是否显示生命图标
 * @type number
 * @min 1
 * @desc 每个图标代表的生命量。
 * @default 1
 *
 * @param 生命图标种类最大数量
 * @parent 是否显示生命图标
 * @type number
 * @min 2
 * @desc 设置7，将会把图标资源切成7份，来表示不同阶级的血量。
 * 至少2种图标，第1种表示空血图标。
 * @default 7
 *
 * @param 生命图标列数
 * @parent 是否显示生命图标
 * @type number
 * @min 1
 * @desc 生命图标横向排布的列数。
 * @default 20
 *
 * @param 生命图标行数
 * @parent 是否显示生命图标
 * @type number
 * @min 1
 * @desc 生命图标纵向排布的行数。
 * @default 1
 *
 * @param 平移-生命图标 X
 * @parent 是否显示生命图标
 * @desc 以框的位置为基准，x轴方向平移，单位像素。
 * @default 50
 *
 * @param 平移-生命图标 Y
 * @parent 是否显示生命图标
 * @desc 以框的位置为基准，y轴方向平移，单位像素。
 * @default 20
 *
 * @param 生命图标间距 X
 * @parent 是否显示生命图标
 * @desc 图标x轴方向的间距，单位像素。（可为负数）
 * @default 0
 *
 * @param 生命图标间距 Y
 * @parent 是否显示生命图标
 * @desc 图标y轴方向的间距，单位像素。（可为负数）
 * @default 0
 *
 * @param 生命图标是否使用缩放效果
 * @parent 是否显示生命图标
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default true
 *
 * @param ------魔法------
 * @default  
 *
 * @param 是否显示魔法条
 * @parent ------魔法------
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true   
 *
 * @param 资源-魔法条
 * @parent 是否显示魔法条
 * @desc 魔法条的图片资源。
 * @default 玩家固定框-魔法条
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 平移-魔法条 X
 * @parent 是否显示魔法条
 * @desc 以框的位置为基准，x轴方向平移，单位像素。
 * @default 160
 *
 * @param 平移-魔法条 Y
 * @parent 是否显示魔法条
 * @desc 以框的位置为基准，y轴方向平移，单位像素。
 * @default 115
 *
 * @param 角度-魔法条
 * @parent 是否显示魔法条
 * @desc 以魔法条的位置为基准，逆时针旋转。
 * @default 0
 *
 * @param 魔法条是否流动
 * @parent 是否显示魔法条
 * @on 流动
 * @off 不流动
 * @desc 魔法条从左往右流动。修改时注意资源图片的宽度。
 * true - 流动，false - 不流动
 * @default true
 *
 * @param 是否显示魔法数值
 * @parent ------魔法------
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true
 *
 * @param 资源-魔法数值
 * @parent 是否显示魔法数值
 * @desc 魔法数值的图片资源。
 * @default 玩家固定框-魔法数值
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 魔法数值最大显示位
 * @parent 是否显示魔法数值
 * @type number
 * @min 1
 * @max 16
 * @desc 注意,这里是只显示位数,不负责破限。填12表示最大显示12位数。
 * 如果你使用了魔法破限脚本，请及时修正你想要显示的最大位数。
 * @default 6
 *
 * @param 平移-魔法数值 X
 * @parent 是否显示魔法数值
 * @desc 以框的位置为基准，x轴方向平移，单位像素。
 * @default 287
 *
 * @param 平移-魔法数值 Y
 * @parent 是否显示魔法数值
 * @desc 以框的位置为基准，y轴方向平移，单位像素。
 * @default 100
 *
 * @param 魔法数值文本对齐方式
 * @parent 是否显示魔法数值
 * @type select
 * @option 左对齐
 * @value 0
 * @option 居中
 * @value 1
 * @option 右对齐
 * @value 2
 * @desc 0 - 左对齐，1- 居中，2 - 右对齐
 * @default 0
 *
 * @param 是否显示最大魔法数值
 * @parent ------魔法------
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default false
 *
 * @param 平移-最大魔法数值 X
 * @parent 是否显示最大魔法数值
 * @desc 以框的位置为基准，x轴方向平移，单位像素。
 * @default 196
 *
 * @param 平移-最大魔法数值 Y
 * @parent 是否显示最大魔法数值
 * @desc 以框的位置为基准，y轴方向平移，单位像素。
 * @default 78
 *
 * @param 是否显示魔法图标
 * @parent ------魔法------
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default false
 *
 * @param 资源-魔法图标
 * @parent 是否显示魔法图标
 * @desc 魔法图标的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 是否使用半魔模式
 * @parent 是否显示魔法图标
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * 使用则魔法图标会根据魔法值出现一半图标的情况。
 * @default false
 *
 * @param 魔法图标值跨度
 * @parent 是否显示魔法图标
 * @type number
 * @min 1
 * @desc 每个图标代表的魔法量。
 * @default 1
 *
 * @param 魔法图标种类最大数量
 * @parent 是否显示魔法图标
 * @type number
 * @min 2
 * @desc 设置7，将会把图标资源切成7份，来表示不同阶级的魔法值。
 * 至少2种图标，第1种表示空魔图标。
 * @default 7
 *
 * @param 魔法图标列数
 * @parent 是否显示魔法图标
 * @type number
 * @min 1
 * @desc 魔法图标横向排布的列数。
 * @default 20
 *
 * @param 魔法图标行数
 * @parent 是否显示魔法图标
 * @type number
 * @min 1
 * @desc 魔法图标纵向排布的行数。
 * @default 1
 *
 * @param 平移-魔法图标 X
 * @parent 是否显示魔法图标
 * @desc 以框的位置为基准，x轴方向平移，单位像素。
 * @default 50
 *
 * @param 平移-魔法图标 Y
 * @parent 是否显示魔法图标
 * @desc 以框的位置为基准，y轴方向平移，单位像素。
 * @default 20
 *
 * @param 魔法图标间距 X
 * @parent 是否显示魔法图标
 * @desc 图标x轴方向的间距，单位像素。（可为负数）
 * @default 0
 *
 * @param 魔法图标间距 Y
 * @parent 是否显示魔法图标
 * @desc 图标y轴方向的间距，单位像素。（可为负数）
 * @default 0
 *
 * @param 魔法图标是否使用缩放效果
 * @parent 是否显示魔法图标
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default true
 *
 * @param ------怒气------
 * @default  
 *
 * @param 是否显示怒气条
 * @parent ------怒气------
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true   
 *
 * @param 资源-怒气条
 * @parent 是否显示怒气条
 * @desc 怒气条的图片资源。
 * @default 玩家固定框-怒气条
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 平移-怒气条 X
 * @parent 是否显示怒气条
 * @desc 以框的位置为基准，x轴方向平移，单位像素。
 * @default 143
 *
 * @param 平移-怒气条 Y
 * @parent 是否显示怒气条
 * @desc 以框的位置为基准，y轴方向平移，单位像素。
 * @default 145
 *
 * @param 角度-怒气条
 * @parent 是否显示怒气条
 * @desc 以怒气条的位置为基准，逆时针旋转。
 * @default 0
 *
 * @param 怒气条是否流动
 * @parent 是否显示怒气条
 * @type boolean
 * @on 流动
 * @off 不流动
 * @desc 怒气条从左往右流动。修改时注意资源图片的宽度。
 * true - 流动，false - 不流动
 * @default true
 *
 * @param 是否显示怒气数值
 * @parent ------怒气------
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true   
 *
 * @param 怒气数值最大显示位
 * @parent 是否显示怒气数值
 * @type number
 * @min 1
 * @max 16
 * @desc 注意,这里是只显示位数,不负责破限。填12表示最大显示12位数。
 * 如果你使用了怒气破限脚本，请及时修正你想要显示的最大位数。
 * @default 3
 *
 * @param 资源-怒气数值
 * @parent 是否显示怒气数值
 * @desc 怒气数值的图片资源。
 * @default 玩家固定框-怒气数值
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 平移-怒气数值 X
 * @parent 是否显示怒气数值
 * @desc 以框的位置为基准，x轴方向平移，单位像素。
 * @default 270
 *
 * @param 平移-怒气数值 Y
 * @parent 是否显示怒气数值
 * @desc 以框的位置为基准，y轴方向平移，单位像素。
 * @default 130
 *
 * @param 怒气数值文本对齐方式
 * @parent 是否显示怒气数值
 * @type select
 * @option 左对齐
 * @value 0
 * @option 居中
 * @value 1
 * @option 右对齐
 * @value 2
 * @desc 0 - 左对齐，1- 居中，2 - 右对齐
 * @default 0
 *
 * @param 是否显示最大怒气数值
 * @parent ------怒气------
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default false
 *
 * @param 平移-最大怒气数值 X
 * @parent 是否显示最大怒气数值
 * @desc 以框的位置为基准，x轴方向平移，单位像素。
 * @default 185
 *
 * @param 平移-最大怒气数值 Y
 * @parent 是否显示最大怒气数值
 * @desc 以框的位置为基准，y轴方向平移，单位像素。
 * @default 116
 *
 * @param 是否显示怒气图标
 * @parent ------怒气------
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default false
 *
 * @param 资源-怒气图标
 * @parent 是否显示怒气图标
 * @desc 怒气图标的图片资源。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 是否使用半怒模式
 * @parent 是否显示怒气图标
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * 使用则怒气图标会根据怒气值出现一半图标的情况。
 * @default false
 *
 * @param 怒气图标值跨度
 * @parent 是否显示怒气图标
 * @type number
 * @min 1
 * @desc 每个图标代表的怒气量。
 * @default 1
 *
 * @param 怒气图标种类最大数量
 * @parent 是否显示怒气图标
 * @type number
 * @min 1
 * @desc 设置7，将会把图标资源切成7份，来表示不同阶级的怒气值。
 * 至少2种图标，第1种表示空怒图标。
 * @default 7
 *
 * @param 怒气图标列数
 * @parent 是否显示怒气图标
 * @type number
 * @min 1
 * @desc 怒气图标横向排布的列数。
 * @default 10
 *
 * @param 怒气图标行数
 * @parent 是否显示怒气图标
 * @type number
 * @min 1
 * @desc 怒气图标纵向排布的行数。
 * @default 1
 *
 * @param 平移-怒气图标 X
 * @parent 是否显示怒气图标
 * @desc 以框的位置为基准，x轴方向平移，单位像素。
 * @default 50
 *
 * @param 平移-怒气图标 Y
 * @parent 是否显示怒气图标
 * @desc 以框的位置为基准，y轴方向平移，单位像素。
 * @default 20
 *
 * @param 怒气图标间距 X
 * @parent 是否显示怒气图标
 * @desc 图标x轴方向的间距，单位像素。（可为负数）
 * @default 0
 *
 * @param 怒气图标间距 Y
 * @parent 是否显示怒气图标
 * @desc 图标y轴方向的间距，单位像素。（可为负数）
 * @default 0
 *
 * @param 怒气图标是否使用缩放效果
 * @parent 是否显示怒气图标
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default true
 *
 * @param ------经验------
 * @default  
 *
 * @param 是否显示经验条
 * @parent ------经验------
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true   
 *
 * @param 资源-经验条
 * @parent ------经验------
 * @desc 经验条的图片资源。
 * @default 玩家固定框-经验条
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 平移-经验条 X
 * @parent ------经验------
 * @desc 以框的位置为基准，x轴方向平移，单位像素。
 * @default 127
 *
 * @param 平移-经验条 Y
 * @parent ------经验------
 * @desc 以框的位置为基准，y轴方向平移，单位像素。
 * @default 173
 *
 * @param 角度-经验条
 * @parent ------经验------
 * @desc 以经验条的位置为基准，逆时针旋转。
 * @default 0
 *
 * @param 是否显示等级数值
 * @parent ------经验------
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true   
 *
 * @param 资源-等级数值
 * @parent ------经验------
 * @desc 等级数值的图片资源。
 * @default 玩家固定框-等级数值
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 等级数值最大显示位
 * @parent 是否显示等级数值
 * @type number
 * @min 1
 * @max 16
 * @desc 注意,这里是只显示位数,不负责破限。填12表示最大显示12位数。
 * 如果你使用了等级破限脚本，请及时修正你想要显示的最大位数。
 * @default 4
 *
 * @param 平移-等级数值 X
 * @parent 是否显示等级数值
 * @desc 以框的位置为基准，x轴方向平移，单位像素。
 * @default 65
 *
 * @param 平移-等级数值 Y
 * @parent 是否显示等级数值
 * @desc 以框的位置为基准，y轴方向平移，单位像素。
 * @default 153
 *
 * @param 等级数值文本对齐方式
 * @parent 是否显示等级数值
 * @type select
 * @option 左对齐
 * @value 0
 * @option 居中
 * @value 1
 * @option 右对齐
 * @value 2
 * @desc 0 - 左对齐，1- 居中，2 - 右对齐
 * @default 1
 *
 * @param ------状态------
 * @default 
 *
 * @param 是否显示状态
 * @parent ------状态------
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true   
 *
 * @param 平移-状态 X
 * @parent ------状态------
 * @desc 以框的位置为基准，x轴方向平移，单位像素。
 * @default 5
 *
 * @param 平移-状态 Y
 * @parent ------状态------
 * @desc 以框的位置为基准，y轴方向平移，单位像素。
 * @default 64
 *
 *
 * @param ---------------------------
 * @default 
 * 
 * @param ---角色头像 1至20---
 * @default 
 *
 * @param 角色头像-1
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-2
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-3
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-4
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-5
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-6
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-7
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-8
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-9
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-10
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-11
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-12
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-13
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-14
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-15
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-16
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-17
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-18
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-19
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-20
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 * 
 * @param ---角色头像21至40---
 * @default 
 *
 * @param 角色头像-21
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-22
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-23
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-24
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-25
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-26
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-27
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-28
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-29
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-30
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-31
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-32
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-33
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-34
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-35
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-36
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-37
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-38
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-39
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-40
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 * 
 * @param ---角色头像41至60---
 * @default 
 *
 * @param 角色头像-41
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-42
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-43
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-44
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-45
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-46
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-47
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-48
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-49
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-50
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-51
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-52
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-53
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-54
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-55
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-56
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-57
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-58
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-59
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @param 角色头像-60
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Map__ui_actorhud/
 * @type file
 *
 * @help  
 * =============================================================================
 * +++ MOG Actor Hud (v1.9) +++
 * By Moghunter 
 * https://mogplugins.wordpress.com/
 * =============================================================================
 * 显示玩家信息的固定框。固定框是长期显示的ui窗口，与浮动框不同。
 * 【现已支持插件关联资源的打包、加密】
 *
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.插件的作用域：地图界面。
 *   添加在地图的ui层。
 *
 * -----------------------------------------------------------------------------
 * ----素材规则
 * 不流动生命条的长度是资源图片长度。
 * 流动生命条的长度是资源图片长度的三分之一。
 * 如果开启了生命条流动，那么生命条的图片会分成3等份，第1份和第3份要
 * 一模一样，第2份是第1份和第3份的过渡。（其它条与生命条一样）
 * 
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 资源路径：img/Map__ui_actorhud （Map后面有两个下划线）
 * 先确保项目img文件夹下是否有Map__ui_actorhud文件夹。
 * 要查看所有关联资源文件的插件，可以去看看"插件清单.xlsx"。
 * 如果没有，需要自己建立。需要配置资源文件：
 *
 * 资源-固定框
 * 资源-生命条
 * 资源-生命图标
 * 资源-生命数值
 * 资源-魔法条
 * 资源-魔法图标
 * 资源-魔法数值
 * 资源-怒气条
 * 资源-怒气图标
 * 资源-怒气数值
 * 资源-经验条
 * 资源-等级数值
 *
 *
 * 角色头像-1   （角色头像1与编号为1的角色对应。）
 * 角色头像-2
 * 角色头像-3
 * ………
 *
 * -----------------------------------------------------------------------------
 * ----关于生命图标
 * 生命图标只能显示有限个数的生命值，如果超出，将以满生命值的形式显示。
 * 能表示的生命上限 ： 跨度 * 种类 * 行 * 列 * 是否半血
 * 其中：种类设置为2，实际值会减去1，因为第1种表示空血。
 *       使用半血模式，一个图标将容纳2个生命。所以值为2。
 * 例如，
 * 设置：（跨度1）*（种类2）*（10行）*（2列）*（不半血）= 1*1*10*2*1
 * 该设置将最大显示20的生命上限和当前生命值情况。
 * 个位数的生命一般用于操作性比较强的游戏，或者解谜。
 * 设置：（跨度5）*（种类7）*（15行）*（1列）*（半血）= 5*6*15*1*2
 * 该设置将最大显示900的生命上限和当前生命值情况。
 * 生命值每5点填满一个槽。如果是半血模式，则每5点填半个槽，每10点填满一个槽。
 *
 * 魔法图标和怒气图标和此原理一样。
 *
 * -----------------------------------------------------------------------------
 * ----可选设定
 * 玩家信息固定框可以通过插件指令进行关闭。
 *
 * 插件指令（显示）：show_actor_hud
 * 插件指令（隐藏）：hide_actor_hud
 *
 * -----------------------------------------------------------------------------
 * ----关于Drill_up优化：
 * [v1.1]
 * 使得该插件支持关联资源的打包、加密。
 * 部署时勾选去除无关文件，本插件中相关的文件不会被去除。
 * [v1.2]
 * 添加了生命数值最大显示位选项。
 * 添加了魔法数值最大显示位选项。
 * 添加了生命、魔法、怒气数值跨度的选项。
 * 修复了多行多列生命值显示的bug。
 * [v1.3]
 * 把其它值都添加了最大显示位选项。
 * [v1.4]
 * 修改了插件分类。
 * [v1.5]
 * 修改了插件关联的资源文件夹。
 * [v1.6]
 * 添加了最大值编辑的支持。
 *
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_ActorHud = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_ActorHud');
   
    // HUD POSITION
	Moghunter.ahud_pos_x = Number(Moghunter.parameters['平移-整个固定框 X'] || 0);
	Moghunter.ahud_pos_y = Number(Moghunter.parameters['平移-整个固定框 Y'] || 440);
	Moghunter.ahud_fade_limit = Number(Moghunter.parameters['最小透明度'] || 60);
	
	// FACE POSITION
	Moghunter.ahud_face_visible = String(Moghunter.parameters['是否显示头像'] || true);
	Moghunter.ahud_face_shake = String(Moghunter.parameters['受伤是否震动头像'] || true);
	Moghunter.ahud_face_zoom = String(Moghunter.parameters['头像是否使用缩放效果'] || true);
	Moghunter.ahud_face_animated = String(Moghunter.parameters['头像动画帧'] || false);
	Moghunter.ahud_face_pos_x = Number(Moghunter.parameters['平移-头像 X'] || 55);
	Moghunter.ahud_face_pos_y = Number(Moghunter.parameters['平移-头像 Y'] || 100);
	Moghunter.ahud_face_priority = Number(Moghunter.parameters['头像的优先权'] || 1);
	
	// NAME POSITION
	Moghunter.ahud_name_visible = String(Moghunter.parameters['是否显示角色名'] || true);
	Moghunter.ahud_name_font_size = Number(Moghunter.parameters['角色名字体大小'] || 20);
	Moghunter.ahud_name_font_bold_size = Number(Moghunter.parameters['角色名字体粗细'] || 4);
	Moghunter.ahud_name_font_italic = String(Moghunter.parameters['角色名字体是否为斜体'] || false);	
	Moghunter.ahud_name_pos_x = Number(Moghunter.parameters['平移-角色名 X'] || 5);
	Moghunter.ahud_name_pos_y = Number(Moghunter.parameters['平移-角色名 Y'] || 20);	
		
	// HP ICON POSITION
	Moghunter.ahud_hp_icon_visible = String(Moghunter.parameters['是否显示生命图标'] || 'false');
	Moghunter.ahud_hp_icon_halfMode = String(Moghunter.parameters['是否使用半血模式'] || 'false');	
	Moghunter.ahud_hp_icon_colorMax = Number(Moghunter.parameters['生命图标种类最大数量'] || 7);	 
	Moghunter.ahud_hp_icon_rows = Number(Moghunter.parameters['生命图标列数'] || 20);
	Moghunter.ahud_hp_icon_cols = Number(Moghunter.parameters['生命图标行数'] || 1);	
	Moghunter.ahud_hp_icon_pos_x = Number(Moghunter.parameters['平移-生命图标 X'] || 50);
	Moghunter.ahud_hp_icon_pos_y = Number(Moghunter.parameters['平移-生命图标 Y'] || 20);	
	Moghunter.ahud_hp_icon_space_x = Number(Moghunter.parameters['生命图标间距 X'] || 0);
	Moghunter.ahud_hp_icon_space_y = Number(Moghunter.parameters['生命图标间距 Y'] || 0);	
	Moghunter.ahud_hp_icon_zoomAnime = String(Moghunter.parameters['生命图标是否使用缩放效果'] || 'true');	
	
	// MP ICON POSITION
	Moghunter.ahud_mp_icon_visible = String(Moghunter.parameters['是否显示魔法图标'] || 'false');
	Moghunter.ahud_mp_icon_halfMode = String(Moghunter.parameters['是否使用半魔模式'] || 'false');	
	Moghunter.ahud_mp_icon_colorMax = Number(Moghunter.parameters['魔法图标种类最大数量'] || 7);	 
	Moghunter.ahud_mp_icon_rows = Number(Moghunter.parameters['魔法图标列数'] || 20);
	Moghunter.ahud_mp_icon_cols = Number(Moghunter.parameters['魔法图标行数'] || 1);	
	Moghunter.ahud_mp_icon_pos_x = Number(Moghunter.parameters['平移-魔法图标 X'] || 67);
	Moghunter.ahud_mp_icon_pos_y = Number(Moghunter.parameters['平移-魔法图标 Y'] || 55);	
	Moghunter.ahud_mp_icon_space_x = Number(Moghunter.parameters['魔法图标间距 X'] || 0);
	Moghunter.ahud_mp_icon_space_y = Number(Moghunter.parameters['魔法图标间距 Y'] || 0);	
	Moghunter.ahud_mp_icon_zoomAnime = String(Moghunter.parameters['魔法图标是否使用缩放效果'] || 'true');	

	// TP ICON POSITION
	Moghunter.ahud_tp_icon_visible = String(Moghunter.parameters['是否显示怒气图标'] || 'false');
	Moghunter.ahud_tp_icon_halfMode = String(Moghunter.parameters['是否使用半怒模式'] || 'false');	
	Moghunter.ahud_tp_icon_colorMax = Number(Moghunter.parameters['怒气图标种类最大数量'] || 2);	 
	Moghunter.ahud_tp_icon_rows = Number(Moghunter.parameters['怒气图标列数'] || 10);
	Moghunter.ahud_tp_icon_cols = Number(Moghunter.parameters['怒气图标行数'] || 2);	
	Moghunter.ahud_tp_icon_pos_x = Number(Moghunter.parameters['平移-怒气图标 X'] || 143);
	Moghunter.ahud_tp_icon_pos_y = Number(Moghunter.parameters['平移-怒气图标 Y'] || 50);	
	Moghunter.ahud_tp_icon_space_x = Number(Moghunter.parameters['怒气图标间距 X'] || 0);
	Moghunter.ahud_tp_icon_space_y = Number(Moghunter.parameters['怒气图标间距 Y'] || 0);	
	Moghunter.ahud_tp_icon_zoomAnime = String(Moghunter.parameters['怒气图标是否使用缩放效果'] || 'true');
	
	// HP METER POSITION
	Moghunter.ahud_hp_meter_visible = String(Moghunter.parameters['是否显示生命条'] || true);
	Moghunter.ahud_hp_meter_pos_x = Number(Moghunter.parameters['平移-生命条 X'] || 143);
	Moghunter.ahud_hp_meter_pos_y = Number(Moghunter.parameters['平移-生命条 Y'] || 85);
	Moghunter.ahud_hp_meter_rotation = Number(Moghunter.parameters['角度-生命条'] || 0);
	Moghunter.ahud_hp_meter_flow = String(Moghunter.parameters['生命条是否流动'] || true);
	
	// HP NUMBER POSITION
	Moghunter.ahud_hp_number_visible  = String(Moghunter.parameters['是否显示生命数值'] || true);
	Moghunter.ahud_hp_number_align  = Number(Moghunter.parameters['生命数值文本对齐方式'] || 0);
	Moghunter.ahud_hp_number_pos_x  = Number(Moghunter.parameters['平移-生命数值 X'] || 270);
	Moghunter.ahud_hp_number_pos_y  = Number(Moghunter.parameters['平移-生命数值 Y'] || 70);
	Moghunter.ahud_maxhp_number_visible  = String(Moghunter.parameters['是否显示最大生命数值'] || false);
	Moghunter.ahud_maxhp_number_pos_x  = Number(Moghunter.parameters['平移-最大生命数值 X'] || 185);
	Moghunter.ahud_maxhp_number_pos_y  = Number(Moghunter.parameters['平移-最大生命数值 Y'] || 40);	

	// MP METER POSITION
	Moghunter.ahud_mp_meter_visible = String(Moghunter.parameters['是否显示魔法条'] || true);
	Moghunter.ahud_mp_meter_pos_x = Number(Moghunter.parameters['平移-魔法条 X'] || 160);
	Moghunter.ahud_mp_meter_pos_y = Number(Moghunter.parameters['平移-魔法条 Y'] || 115);	
	Moghunter.ahud_mp_meter_rotation = Number(Moghunter.parameters['角度-魔法条'] || 0);
	Moghunter.ahud_mp_meter_flow = String(Moghunter.parameters['魔法条是否流动'] || true);
	
	// MP NUMBER POSITION
	Moghunter.ahud_mp_number_visible  = String(Moghunter.parameters['是否显示魔法数值'] || true);
	Moghunter.ahud_mp_number_align  = Number(Moghunter.parameters['魔法数值文本对齐方式'] || 0);
	Moghunter.ahud_mp_number_pos_x  = Number(Moghunter.parameters['平移-魔法数值 X'] || 287);
	Moghunter.ahud_mp_number_pos_y  = Number(Moghunter.parameters['平移-魔法数值 Y'] || 100);
	Moghunter.ahud_maxmp_number_visible  = String(Moghunter.parameters['是否显示最大魔法数值'] || false);
	Moghunter.ahud_maxmp_number_pos_x  = Number(Moghunter.parameters['平移-最大魔法数值 X'] || 196);
	Moghunter.ahud_maxmp_number_pos_y  = Number(Moghunter.parameters['平移-最大魔法数值 Y'] || 78);	

	// TP METER POSITION
	Moghunter.ahud_tp_meter_visible = String(Moghunter.parameters['是否显示怒气条'] || true);
	Moghunter.ahud_tp_meter_pos_x = Number(Moghunter.parameters['平移-怒气条 X'] || 143);
	Moghunter.ahud_tp_meter_pos_y = Number(Moghunter.parameters['平移-怒气条 Y'] || 145);	
	Moghunter.ahud_tp_meter_rotation = Number(Moghunter.parameters['角度-怒气条'] || 0);
	Moghunter.ahud_tp_meter_flow = String(Moghunter.parameters['怒气条是否流动'] || false);
	
	// TP NUMBER POSITION
	Moghunter.ahud_tp_number_visible  = String(Moghunter.parameters['是否显示怒气数值'] || true);
	Moghunter.ahud_tp_number_align  = Number(Moghunter.parameters['怒气数值文本对齐方式'] || 0);
	Moghunter.ahud_tp_number_pos_x  = Number(Moghunter.parameters['平移-怒气数值 X'] || 270);
	Moghunter.ahud_tp_number_pos_y  = Number(Moghunter.parameters['平移-怒气数值 Y'] || 130);
	Moghunter.ahud_maxtp_number_visible  = String(Moghunter.parameters['是否显示最大怒气数值'] || false);
	Moghunter.ahud_maxtp_number_pos_x  = Number(Moghunter.parameters['平移-最大怒气数值 X'] || 185);
	Moghunter.ahud_maxtp_number_pos_y  = Number(Moghunter.parameters['平移-最大怒气数值 Y'] || 116);	

    // EXP METER POSITION
	Moghunter.ahud_exp_meter_visible = String(Moghunter.parameters['是否显示经验条'] || true);
	Moghunter.ahud_exp_meter_pos_x = Number(Moghunter.parameters['平移-经验条 X'] || 127);
	Moghunter.ahud_exp_meter_pos_y = Number(Moghunter.parameters['平移-经验条 Y'] || 173);	
	Moghunter.ahud_exp_meter_rotation = Number(Moghunter.parameters['角度-经验条'] || 0);
	
	
	// Level NUMBER POSITION
	Moghunter.ahud_level_number_visible  = String(Moghunter.parameters['是否显示等级数值'] || true);
	Moghunter.ahud_level_number_pos_x  = Number(Moghunter.parameters['平移-等级数值 X'] || 65);
	Moghunter.ahud_level_number_pos_y  = Number(Moghunter.parameters['平移-等级数值 Y'] || 153);
	Moghunter.ahud_level_number_align  = Number(Moghunter.parameters['等级数值文本对齐方式'] || 1);

	// STATES POSITION
	Moghunter.ahud_states_visible = String(Moghunter.parameters['是否显示状态'] || true);
	Moghunter.ahud_states_pos_x = Number(Moghunter.parameters['平移-状态 X'] || 5);
	Moghunter.ahud_states_pos_y = Number(Moghunter.parameters['平移-状态 Y'] || 64);	
	
    Moghunter.ahud_max_hp_limit = Number(Moghunter.parameters['生命数值最大显示位'] || 6);
    Moghunter.ahud_max_mp_limit = Number(Moghunter.parameters['魔法数值最大显示位'] || 6);
    Moghunter.ahud_max_tp_limit = Number(Moghunter.parameters['怒气数值最大显示位'] || 3);
    Moghunter.ahud_max_lv_limit = Number(Moghunter.parameters['等级数值最大显示位'] || 4);
    Moghunter.ahud_hp_over = Number(Moghunter.parameters['生命图标值跨度'] || 1);
    Moghunter.ahud_mp_over = Number(Moghunter.parameters['魔法图标值跨度'] || 1);
    Moghunter.ahud_tp_over = Number(Moghunter.parameters['怒气图标值跨度'] || 1);

    Moghunter.ahud_hudvisible = String(Moghunter.parameters['是否初始显示'] || "false");	
    Moghunter.ahud_smartFade = String(Moghunter.parameters['Smart Fade'] || "true");	
	Moghunter.ahud_autoFade = String(Moghunter.parameters['Auto Fade'] || "true");	

	Moghunter.src_ah_Layout = String(Moghunter.parameters['资源-固定框']);
	Moghunter.src_ah_HP_Meter = String(Moghunter.parameters['资源-生命条']);
	Moghunter.src_ah_HP_Icon = String(Moghunter.parameters['资源-生命图标']);
	Moghunter.src_ah_HP_Number = String(Moghunter.parameters['资源-生命数值']);
	Moghunter.src_ah_MP_Meter = String(Moghunter.parameters['资源-魔法条']);
	Moghunter.src_ah_MP_Icon = String(Moghunter.parameters['资源-魔法图标']);
	Moghunter.src_ah_MP_Number = String(Moghunter.parameters['资源-魔法数值']);
	Moghunter.src_ah_TP_Meter = String(Moghunter.parameters['资源-怒气条']);
	Moghunter.src_ah_TP_Icon = String(Moghunter.parameters['资源-怒气图标']);
	Moghunter.src_ah_TP_Number = String(Moghunter.parameters['资源-怒气数值']);
	Moghunter.src_ah_EXP_Meter = String(Moghunter.parameters['资源-经验条']);
	Moghunter.src_ah_LV_Number = String(Moghunter.parameters['资源-等级数值']);
	
	Moghunter.ahudFace_list_length = 60;
	Moghunter.ahudFace_list = {};
	for (var i = 1; i <= Moghunter.ahudFace_list_length ; i++ ) {
		Moghunter.ahudFace_list[i] = Moghunter.parameters['角色头像-' + String(i) ];
	};
	
//=============================================================================
// ** ImageManager
//=============================================================================

//==============================
// * BHud
//==============================
ImageManager.loadAHud = function(filename) {
    return this.loadBitmap('img/Map__ui_actorhud/', filename, 0, true);
};			

//=============================================================================
// ** Game_System
//=============================================================================

//==============================
// * Initialize
//==============================
var _alias_mog_ahud_sys_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	_alias_mog_ahud_sys_initialize.call(this);
	this._ahud_position = [0,0];
	this._ahud_visible = String(Moghunter.ahud_hudvisible) === "true" ? true : false;
	this._ahud_smartFade = String(Moghunter.ahud_smartFade) === "true" ? true : false;
	this._ahud_autoFade = String(Moghunter.ahud_autoFade) === "true" ? true : false;
	this._ahud_opacity = 0;
};

//=============================================================================
// ** Game BattlerBase
//=============================================================================

//==============================
// * Initialize
//==============================
var _alias_mog_ahud_gbat_initMembers = Game_BattlerBase.prototype.initMembers
Game_BattlerBase.prototype.initMembers = function() {
	_alias_mog_ahud_gbat_initMembers.call(this);
	this._ahud_face_data = [0,0,0,0];
};

//=============================================================================
// ** Game Actor
//=============================================================================

//==============================
// * Current EXP R
//==============================
Game_Actor.prototype.current_exp_r = function() {
    return this.nextLevelExp() - this.nextRequiredExp() - this.expForLevel(this._level);
};

//==============================
// * Next Level EXP R
//==============================
Game_Actor.prototype.nextLevelExp_r = function() {
    return this.expForLevel(this._level + 1) - this.expForLevel(this._level) ;
};

//=============================================================================
// ** Game Character Base 
//=============================================================================

//==============================
// * Screen RealX
//==============================
Game_CharacterBase.prototype.screen_realX = function() {
    return this.scrolledX() * $gameMap.tileWidth();
};

//==============================
// * Screen RealY
//==============================
Game_CharacterBase.prototype.screen_realY = function() {
    return this.scrolledY() * $gameMap.tileHeight();
};

//=============================================================================
// ** Game_Interpreter
//=============================================================================	

//==============================
// * PluginCommand
//==============================
var _alias_mog_actorhud_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_alias_mog_actorhud_pluginCommand.call(this,command, args)
	if (command === "show_actor_hud")  { $gameSystem._ahud_visible = true};
	if (command === "hide_actor_hud")  { $gameSystem._ahud_visible = false;};
	return true;
};

//=============================================================================
// ** Scene Base
//=============================================================================

//==============================
// ** create Hud Field
//==============================

Scene_Base.prototype.createHudField = function() {
	this._hudField = new Sprite();
	this._hudField.z = 10;
	this.addChild(this._hudField);
};

//==============================
// ** sort MZ
//==============================
Scene_Base.prototype.sortMz = function() {
   this._hudField.children.sort(function(a, b){return a.mz-b.mz});
};

//=============================================================================
// ** Scene Map
//=============================================================================

//==============================
// ** create Spriteset
//==============================
var _mog_actorHud_sMap_createSpriteset = Scene_Map.prototype.createSpriteset;
Scene_Map.prototype.createSpriteset = function() {
	_mog_actorHud_sMap_createSpriteset.call(this);
	if (!this._hudField) {this.createHudField()};
	this.createActorHud();
	this.sortMz();
};

//==============================
// * Create Actor Hud
//==============================
Scene_Map.prototype.createActorHud = function() {
	this._actorHud = new Actor_Hud();
	this._actorHud.mz = 101;
	this._hudField.addChild(this._actorHud);	
};

//=============================================================================
// * Actor_Hud
//=============================================================================
function Actor_Hud() {
    this.initialize.apply(this, arguments);
};

Actor_Hud.prototype = Object.create(Sprite.prototype);
Actor_Hud.prototype.constructor = Actor_Hud;

//==============================
// * Initialize
//==============================
Actor_Hud.prototype.initialize = function(hud_id) {

    Sprite.prototype.initialize.call(this);
	this.visible = false;	
    this._data_initial_ref = [0,true];
	this._hud_id = hud_id;
	this._hud_size = [-1,-1,-1,-1];
    this.base_parameter_clear();
    this.load_img();
	if (!$gameSystem._ahud_visible) {this.opacity = 0};
	this.update();
};

//==============================
// * Load Img
//==============================
Actor_Hud.prototype.load_img = function() {
	this._layout_img = ImageManager.loadAHud(Moghunter.src_ah_Layout);
	this._state_img = ImageManager.loadSystem("IconSet");
	if (String(Moghunter.ahud_hp_meter_visible) == "true") {this._hp_meter_img = ImageManager.loadAHud(Moghunter.src_ah_HP_Meter);};
	if (String(Moghunter.ahud_hp_icon_visible) == "true") {this._hp_icon_img = ImageManager.loadAHud(Moghunter.src_ah_HP_Icon)};
	if (String(Moghunter.ahud_mp_meter_visible) == "true") {this._mp_meter_img = ImageManager.loadAHud(Moghunter.src_ah_MP_Meter);};
	if (String(Moghunter.ahud_mp_icon_visible) == "true") {this._mp_icon_img = ImageManager.loadAHud(Moghunter.src_ah_MP_Icon)};
	if (String(Moghunter.ahud_tp_meter_visible) == "true") {this._tp_meter_img = ImageManager.loadAHud(Moghunter.src_ah_TP_Meter);};
	if (String(Moghunter.ahud_tp_icon_visible) == "true") {this._tp_icon_img = ImageManager.loadAHud(Moghunter.src_ah_TP_Icon)};	
	if (String(Moghunter.ahud_exp_meter_visible) == "true") {this._exp_meter_img = ImageManager.loadAHud(Moghunter.src_ah_EXP_Meter);};
	if (String(Moghunter.ahud_hp_number_visible) == "true") {this._hp_number_img = ImageManager.loadAHud(Moghunter.src_ah_HP_Number);};
	if (String(Moghunter.ahud_mp_number_visible) == "true") {this._mp_number_img = ImageManager.loadAHud(Moghunter.src_ah_MP_Number);};
	if (String(Moghunter.ahud_tp_number_visible) == "true") {this._tp_number_img = ImageManager.loadAHud(Moghunter.src_ah_TP_Number);};
	if (String(Moghunter.ahud_level_number_visible) == "true") {this._level_number_img = ImageManager.loadAHud(Moghunter.src_ah_LV_Number);};
	if (String(Moghunter.ahud_maxhp_number_visible) == "true") {this._maxhp_number_img = ImageManager.loadAHud(Moghunter.src_ah_HP_Number);};
	if (String(Moghunter.ahud_maxmp_number_visible) == "true") {this._maxmp_number_img = ImageManager.loadAHud(Moghunter.src_ah_MP_Number);};
	if (String(Moghunter.ahud_maxtp_number_visible) == "true") {this._maxtp_number_img = ImageManager.loadAHud(Moghunter.src_ah_TP_Number);};	
};

//==============================
// * Base Parameter Clear
//==============================
Actor_Hud.prototype.base_parameter_clear = function() {
 	 this._hp_old = [-1,-1];
	 this._maxhp_old = [-1,-1];
	 this._hp_old_ani = [-1,-1];
	 this._hp_flow = [false,0,0,0];
     this._mp_old = [-1,-1];
	 this._maxmp_old = [-1,-1];
	 this._mp_old_ani = [-1,-1];
	 this._mp_flow = [false,0,0,0];
	 this._tp_old = [-1,-1];
	 this._maxtp_old = [-1,-1];
	 this._tp_old_ani = -1;
	 this._tp_flow = [false,0,0,0];
	 this._exp_old = [-1,-1];
	 this._exp_flow = [false,0,0,0];	
	 this._hp_number_old = -1;
	 this._mp_number_old = -1;
	 this._hp_number_old = -1;	 
	 this._hp_icon_old = [-1,-1];
	 this._mp_icon_old = [-1,-1];
	 this._tp_icon_old = [-1,-1];
	 this._hp_img_data = [0,0,0];
	 this._mp_img_data = [0,0,0];
	 this._tp_img_data = [0,0,0];
	 this._states_old = [];
	 this._states_data = [0,0,0];
	 this._active = false;
	 this._hud_size = [0,0];
};

//==============================
// * Need Refresh Bhud
//==============================
Actor_Hud.prototype.need_refreh_bhud = function() {
	if (this._data_initial_ref[1]) {return true};
	if (this._battler != $gameParty.members()[0]) {return true};
	return false;
};

//==============================
// * Refresh Bhud
//==============================
Actor_Hud.prototype.refresh_bhud = function() {
	 this._data_initial_ref[1] = false;
	 this._battler = $gameParty.members()[0];

	 this._hud_size = [0,0];
	 this.base_parameter_clear();
	 this.create_base_sprites();
};

//==============================
// * Refresh Position
//==============================
Actor_Hud.prototype.refresh_position = function() {
	 this.set_hud_position();	 
	 this.visible = true;     
	 this.create_sprites();
 	 this._layout.x = this._pos_x;
	 this._layout.y = this._pos_y;
	 if (this._face) {
     	 this._face.x = this._pos_x + Moghunter.ahud_face_pos_x;
 	     this._face.y = this._pos_y + Moghunter.ahud_face_pos_y;
		 this._battler._face_pos = [this._face.x,this._face.y]; 
     };
};

//==============================
// * Set Hud Position
//==============================
Actor_Hud.prototype.set_hud_position = function() {
     this._hud_size[0] = Moghunter.ahud_pos_x - ($gameMap.tileWidth() / 2);
     this._hud_size[1] = Moghunter.ahud_pos_y - ($gameMap.tileHeight() / 2);
     this._hud_size[2] = Moghunter.ahud_pos_x + this._layout.bitmap.width - $gameMap.tileWidth();
     this._hud_size[3] = Moghunter.ahud_pos_y + this._layout.bitmap.height;	 
	 this._pos_x = Moghunter.ahud_pos_x;
	 this._pos_y = Moghunter.ahud_pos_y;
};

//==============================
// * Update
//==============================
Actor_Hud.prototype.update = function() {
    Sprite.prototype.update.call(this);	

	if (this.need_refreh_bhud()) {this.refresh_bhud()};
    if (!this._battler) {this.visible = false;return};
	if (!this._layout_img.isReady()) {return};
	if (this._hud_size[0] === 0) {this.refresh_position();return};
	this.update_sprites();
};

//==============================
// * Create Base Sprites
//==============================
Actor_Hud.prototype.create_base_sprites = function() {
	if (Number(Moghunter.ahud_face_priority) === 0) {
   	    this.create_face();
	    this.create_layout();}
	else {
		this.create_layout();
   	    this.create_face();	    		
    };
};

//==============================
// * Create Sprites
//==============================
Actor_Hud.prototype.create_sprites = function() {
	this.create_hp_meter();
	this.create_mp_meter();
    this.create_tp_meter();
	this.create_hp_icon();
	this.create_mp_icon();
    this.create_tp_icon();
	this.create_exp_meter();
	this.create_hp_number();	
	this.create_maxhp_number();
	this.create_mp_number();	
    this.create_maxmp_number();
 	this.create_tp_number();
	this.create_level_number();
	this.create_maxtp_number();
    this.create_states();	
	this.create_name();
};

//==============================
// * Update Sprites
//==============================
Actor_Hud.prototype.update_sprites = function() {	
	this.update_visible();
	this.update_face();	
    this.update_hp();
	this.update_mp();
    this.update_tp();
    this.update_states();
	this.update_exp();
};

//==============================
// * Need Hide
//==============================
Actor_Hud.prototype.needHide = function(start) {
	if (Imported.MOG_ChronoEngine && $gameSystem.isChronoMode()) {return true};
    if (!this._battler) {return true};	
	if (!$gameSystem._ahud_visible) {return true};
	if (!$gameSystem._ahud_autoFade) {return false};
	if ($gameMessage.isBusy()) {return true};
	return false
};

//==============================
// * Update visible
//==============================
Actor_Hud.prototype.update_visible = function() {
	 this.visible = true;
     if (this.needHide(false)) {
		 this.opacity -= 15;
	 } else {		 	
		if (this.needFade()) {
			if (this.opacity > Moghunter.ahud_fade_limit) {
				this.opacity -= 10;
				if (this.opacity < Moghunter.ahud_fade_limit) {this.opacity = Moghunter.ahud_fade_limit};
			 };
		} else {
				 this.opacity += 10;
		};		
	 };
	 $gameSystem._ahud_opacity = this.opacity;
};

//==============================
// * Need Fade
//==============================
Actor_Hud.prototype.needFade = function() {
    if (this._hud_size[0] === -1) {return false};
	if (!this._battler) {return false};
	if (!$gameSystem._ahud_smartFade) {return false};
	if ($gamePlayer.screen_realX() < this._hud_size[0]) {return false};
	if ($gamePlayer.screen_realX() > this._hud_size[2]) {return false};
	if ($gamePlayer.screen_realY() < this._hud_size[1]) {return false};
	if ($gamePlayer.screen_realY() > this._hud_size[3]) {return false};	

    return true;
};


//==============================
// * Update Dif
//==============================
Actor_Hud.prototype.update_dif = function(value,real_value,speed) {
	if (value == real_value) {return value};
	var dnspeed = 1 + (Math.abs(value - real_value) / speed);
	if (value > real_value) {value -= dnspeed;
	    if (value < real_value) {value = real_value};}
    else if (value < real_value) {value  += dnspeed;
    	if (value  > real_value) {value  = real_value};		
    };
	return Math.floor(value);
};

//==============================
// * Refresh Meter
//==============================
Actor_Hud.prototype.refresh_meter = function(sprite,value,value_max,type,div) {
	var ch = sprite.bitmap.height / div;
    var meter_rate = sprite.bitmap.width * value / value_max;
	sprite.setFrame(0,type * ch, meter_rate, ch);
};

//==============================
// * Refresh Flow
//==============================
Actor_Hud.prototype.refresh_meter_flow = function(sprite,value,value_max,type,flow) {
	var cw = sprite.bitmap.width / 3;
	var ch = sprite.bitmap.height / 2;
    var meter_rate = cw * value / value_max;
	sprite.setFrame(flow,type * ch, meter_rate, ch);
};

//==============================
// * Refresh Number
//==============================
Actor_Hud.prototype.refresh_number = function(sprites,value,img_data,x,center) {
    numbers = Math.abs(value).toString().split("");  
   	for (var i = 0; i < sprites.length ; i++) {sprites[i].visible = false;
	   if (i > numbers.length) {return};
	   var n = Number(numbers[i]);
	   sprites[i].setFrame(n * img_data[2], 0, img_data[2], img_data[1]);
	   sprites[i].visible = true;

	   var nx = -(img_data[2] * i) + (img_data[2] * numbers.length);

	   if (sprites.align === 1) {
	      var xi = (img_data[2] * numbers.length) / 2;		   
		   sprites[i].x = x + xi - nx;
       } else if (sprites.align === 2) {
	       var xi = img_data[2] * numbers.length;		   

		   sprites[i].x = x + xi - nx;
   	   } else {
		   sprites[i].x = x - nx;
	   }; 
    };
};

//==============================
// * Need Refresh Parameter
//==============================
Actor_Hud.prototype.need_refresh_parameter = function(parameter) {
  switch (parameter) {
  	case 0:
         if (this._hp_old[0] != this._battler.hp) {return true};
		 if (this._hp_old[1] != this._battler.mhp) {return true};
         break;
  	case 1:
         if (this._mp_old[0] != this._battler.mp) {return true};
		 if (this._mp_old[1] != this._battler.mmp) {return true};
         break;			
  	case 2:
         if (this._tp_old[0] != this._battler.tp) {return true};		 
		 if (this._tp_old[1] != this._battler.maxTp()) {return true};
         break;	
  	case 3:
         if (this._exp_old != this._battler.currentExp()) {return true};
         break;			 				
  };
  return false;
};

//==============================
// * Create Layout
//==============================
Actor_Hud.prototype.create_layout = function() {
	this.removeChild(this._layout);
	if (!this._battler) {return};
	this._layout = new Sprite(this._layout_img);
	this.addChild(this._layout);
};
	
//==============================
// * Create Face
//==============================
Actor_Hud.prototype.create_face = function() {
	if (String(Moghunter.ahud_face_visible) != "true") {return};
	this.removeChild(this._face);
	if (!this._battler) {return};	
	this._face = new Sprite(ImageManager.loadAHud(Moghunter.ahudFace_list[this._battler._actorId]));
	this._face.anchor.x = 0.5;
	this._face.anchor.y = 0.5;
	this._face_data = [0,0,false,false,false,-1];
	if (String(Moghunter.ahud_face_shake) === "true") {this._face_data[2] = true}
	if (String(Moghunter.ahud_face_animated) === "true") {this._face_data[4] = true}
	this._battler._ahud_face_data = [0,0,0,0]
	this.addChild(this._face);
};

//==============================
// * Update Face
//==============================
Actor_Hud.prototype.update_face = function() {
	if (!this._face) {return};
	if (!this._face.bitmap.isReady()) {return};
	if (this._face_data[4] && this._face_data[5] != this._battler._ahud_face_data[2]) {this.refresh_face();};
    this.update_face_animation();
    this.update_face_shake();
    this.update_face_zoom();
};

//==============================
// * Refresh Face
//==============================
Actor_Hud.prototype.refresh_face = function() {
	this._face_data[5] = this._battler._ahud_face_data[2];
	var cw = this._face.bitmap.width / 5;
	var ch = this._face.bitmap.height;
	this._face.setFrame(cw * this._face_data[5], 0, cw, ch);
};

//==============================
// * Update Face Animation
//==============================
Actor_Hud.prototype.update_face_animation = function() {
	if (this._battler._ahud_face_data[3] > 0) {this._battler._ahud_face_data[3] -= 1;
	    if (this._battler._ahud_face_data[3] === 0) {
			if (this._battler.isDead()) {this._battler._ahud_face_data[2] = 4}
			else if (this._battler.hp <= 30 * this._battler.mhp / 100) {this._battler._ahud_face_data[2] = 3}
			else {this._battler._ahud_face_data[2] = 0};
			};
	};
};

//==============================
// * Update Face Zoom
//==============================
Actor_Hud.prototype.update_face_zoom = function() {
	if (this._battler._ahud_face_data[1] > 0) {this._battler._ahud_face_data[1] -= 1;
	    if (this._battler._ahud_face_data[1] == 0) {this._face.scale.x = 1.00}
		else if (this._battler._ahud_face_data[1] < 20) {this._face.scale.x -= 0.01;
		         if (this._face.scale.x < 1.00) {this._face.scale.x = 1.00;};	
	    }
		else if (this._battler._ahud_face_data[1] < 40){this._face.scale.x += 0.01;
		         if (this._face.scale.x > 1.25) {this._face.scale.x = 1.25;};
	    };
	    this._face.scale.y = this._face.scale.x;
	};
};

//==============================
// * Update Face Shake
//==============================
Actor_Hud.prototype.update_face_shake = function() {
	this._face.x = this._pos_x + Moghunter.ahud_face_pos_x;
	if (this._face_data[2] && this._battler._ahud_face_data[0] > 0) {this._battler._ahud_face_data[0] -= 1;
	    this._face.x = this._pos_x + Moghunter.ahud_face_pos_x + ((Math.random() * 12) - 6);
	};
};

//==============================
// * Create Name
//==============================
Actor_Hud.prototype.create_name = function() {
	if (String(Moghunter.ahud_name_visible) != "true") {return};
	this.removeChild(this._name);
	if (!this._battler) {return};	
	this._name = new Sprite(new Bitmap(300,48));
	this._name.x = this._pos_x + Moghunter.ahud_name_pos_x;
	this._name.y = this._pos_y + Moghunter.ahud_name_pos_y;
	this._name.bitmap.fontSize = Number(Moghunter.ahud_name_font_size);
	if (String(Moghunter.ahud_name_font_italic) === "true") {this._name.bitmap.fontItalic = true};
    this._name.bitmap.outlineWidth = Number(Moghunter.ahud_name_font_bold_size);
	this.addChild(this._name);	
	this.refresh_name();
};

//==============================
// * Refresh Name
//==============================
Actor_Hud.prototype.refresh_name = function() {
	this._name.bitmap.clear();
	this._name.bitmap.drawText(this._battler._name, 0, 0, this._name.bitmap.width, this._name.bitmap.height,0);	
};

//==============================
// * Create HP Meter
//==============================
Actor_Hud.prototype.create_hp_meter = function() {
	if (String(Moghunter.ahud_hp_meter_visible) != "true") {return};
	this.removeChild(this._hp_meter_blue);
	this.removeChild(this._hp_meter_red);
	if (!this._battler) {return};
	this._hp_meter_red = new Sprite(this._hp_meter_img);
	this._hp_meter_red.x = this._pos_x + Moghunter.ahud_hp_meter_pos_x;
	this._hp_meter_red.y = this._pos_y + Moghunter.ahud_hp_meter_pos_y;
	this._hp_meter_red.rotation = Moghunter.ahud_hp_meter_rotation * Math.PI / 180;
	this._hp_meter_red.setFrame(0,0,0,0);
	this.addChild(this._hp_meter_red);		
	this._hp_meter_blue = new Sprite(this._hp_meter_img);
	this._hp_meter_blue.x = this._hp_meter_red.x;
	this._hp_meter_blue.y = this._hp_meter_red.y;
	this._hp_meter_blue.rotation = this._hp_meter_red.rotation * Math.PI / 180;
	this._hp_meter_blue.setFrame(0,0,0,0);
	this.addChild(this._hp_meter_blue);
	this._hp_old_ani[0] = this._battler.hp - 1;
	if (String(Moghunter.ahud_hp_meter_flow) === "true") {this._hp_flow[0] = true;
	    this._hp_flow[2] = this._hp_meter_img.width / 3;
		this._hp_flow[3] = this._hp_flow[2] * 2;
		this._hp_flow[1] = Math.floor(Math.random() * this._hp_flow[2]);
	};
};

//==============================
// * Create HP icon
//==============================
Actor_Hud.prototype.create_hp_icon = function() {
   if (String(Moghunter.ahud_hp_icon_visible) != "true") {return};
	if (this._hp_icons) {
	    for (var i = 0; i < this._hp_icons.length; i++) {
			this.removeChild(this._hp_icons[i]);
	    };
	    for (var i = 0; i < this._hp_iconsB.length; i++) {
			this.removeChild(this._hp_iconsB[i]);
	    };
	};	
	if (!this._battler) {return};	
	var n_icons = Moghunter.ahud_hp_icon_rows * Moghunter.ahud_hp_icon_cols;
	this._hp_icons = [];
	this._hp_icons.iconMode = String(Moghunter.ahud_hp_icon_halfMode) == "true" ? true : false;
	this._hp_iconsB = [];
	this._hp_iconsB.iconMode = this._hp_icons.iconMode;
	this._hp_IconZoomAnime = String(Moghunter.ahud_hp_icon_zoomAnime) == "true" ? true : false;
	var colors = Math.max(Moghunter.ahud_hp_icon_colorMax, 2)
	var cw = this._hp_icon_img.width / colors;
	var ch = this._hp_icon_img.height / 2;
	for (var i = 0; i < n_icons; i++) {
		 this._hp_iconsB[i] = new Sprite(this._hp_icon_img);
		 this._hp_iconsB[i].colorMax = colors;
		 this._hp_iconsB[i].anchor.x = 0.5;
		 this._hp_iconsB[i].anchor.y = 0.5;
		 this._hp_iconsB[i].rows = Moghunter.ahud_hp_icon_rows;
		 this._hp_iconsB[i].cols = Moghunter.ahud_hp_icon_cols;
		 this._hp_iconsB[i].org = [this._pos_x + Moghunter.ahud_hp_icon_pos_x - cw,this._pos_y + Moghunter.ahud_hp_icon_pos_y - ch];
		 this._hp_iconsB[i].spc = [Moghunter.ahud_hp_icon_space_x,Moghunter.ahud_hp_icon_space_y];
		 this._hp_iconsB[i].zoomA = this._hp_IconZoomAnime;
		 this._hp_iconsB[i].zoomData = [0,0,0,1.00];
		 this._hp_iconsB[i].visible = false;
		 this._hp_iconsB[i].enabled = false;
		 this.addChild(this._hp_iconsB[i]);
	};		
	for (var i = 0; i < n_icons; i++) {
		 this._hp_icons[i] = new Sprite(this._hp_icon_img);
		 this._hp_icons[i].colorMax = Math.max(Moghunter.ahud_hp_icon_colorMax, 2);
		 this._hp_icons[i].anchor.x = 0.5;
		 this._hp_icons[i].anchor.y = 0.5;		 
		 this._hp_icons[i].rows = Moghunter.ahud_hp_icon_rows;
		 this._hp_icons[i].cols = Moghunter.ahud_hp_icon_cols;
		 this._hp_icons[i].org = [this._pos_x + Moghunter.ahud_hp_icon_pos_x - cw,this._pos_y + Moghunter.ahud_hp_icon_pos_y - ch];
		 this._hp_icons[i].spc = [Moghunter.ahud_hp_icon_space_x,Moghunter.ahud_hp_icon_space_y];
		 this._hp_icons[i].zoomA = this._hp_IconZoomAnime;
		 this._hp_icons[i].zoomData = [0,0,0,1.00];	 
		 this._hp_icons[i].visible = false;
		 this._hp_icons[i].enabled = false;
		 this.addChild(this._hp_icons[i]);
	};
};

//==============================
// * Create MP icon
//==============================
Actor_Hud.prototype.create_mp_icon = function() {
   if (String(Moghunter.ahud_mp_icon_visible) != "true") {return};
	if (this._mp_icons) {
	    for (var i = 0; i < this._mp_icons.length; i++) {
			this.removeChild(this._mp_icons[i]);
	    };
	    for (var i = 0; i < this._mp_iconsB.length; i++) {
			this.removeChild(this._mp_iconsB[i]);
	    };
	};	
	if (!this._battler) {return};	
	var n_icons = Moghunter.ahud_mp_icon_rows * Moghunter.ahud_mp_icon_cols;
	this._mp_icons = [];
	this._mp_icons.iconMode = String(Moghunter.ahud_mp_icon_halfMode) == "true" ? true : false;
	this._mp_iconsB = [];
	this._mp_iconsB.iconMode = 0;
	this._mp_IconZoomAnime = String(Moghunter.ahud_mp_icon_zoomAnime) == "true" ? true : false
	var colors = Math.max(Moghunter.ahud_mp_icon_colorMax, 2);
	var cw = this._mp_icon_img.width / colors;
	var ch = this._mp_icon_img.height / 2;
	for (var i = 0; i < n_icons; i++) {
		 this._mp_iconsB[i] = new Sprite(this._mp_icon_img);
		 this._mp_iconsB[i].colorMax = colors;
		 this._mp_iconsB[i].anchor.x = 0.5;
		 this._mp_iconsB[i].anchor.y = 0.5;
		 this._mp_iconsB[i].rows = Moghunter.ahud_mp_icon_rows;
		 this._mp_iconsB[i].cols = Moghunter.ahud_mp_icon_cols;
		 this._mp_iconsB[i].org = [this._pos_x + Moghunter.ahud_mp_icon_pos_x - cw,this._pos_y + Moghunter.ahud_mp_icon_pos_y - ch];
		 this._mp_iconsB[i].spc = [Moghunter.ahud_mp_icon_space_x,Moghunter.ahud_mp_icon_space_y];
		 this._mp_iconsB[i].zoomA = this._mp_IconZoomAnime;
		 this._mp_iconsB[i].zoomData = [0,0,0,1.00];
		 this._mp_iconsB[i].visible = false;
		 this._mp_iconsB[i].enabled = false;
		 this.addChild(this._mp_iconsB[i]);
	};		
	for (var i = 0; i < n_icons; i++) {
		 this._mp_icons[i] = new Sprite(this._mp_icon_img);
		 this._mp_icons[i].colorMax = Math.max(Moghunter.ahud_mp_icon_colorMax, 2);
		 this._mp_icons[i].anchor.x = 0.5;
		 this._mp_icons[i].anchor.y = 0.5;		 
		 this._mp_icons[i].rows = Moghunter.ahud_mp_icon_rows;
		 this._mp_icons[i].cols = Moghunter.ahud_mp_icon_cols;
		 this._mp_icons[i].org = [this._pos_x + Moghunter.ahud_mp_icon_pos_x - cw,this._pos_y + Moghunter.ahud_mp_icon_pos_y - ch];
		 this._mp_icons[i].spc = [Moghunter.ahud_mp_icon_space_x,Moghunter.ahud_mp_icon_space_y];
		 this._mp_icons[i].zoomA = this._mp_IconZoomAnime;
		 this._mp_icons[i].zoomData = [0,0,0,1.00];	 
		 this._mp_icons[i].visible = false;
		 this._mp_icons[i].enabled = false;
		 this.addChild(this._mp_icons[i]);
	};	
};

//==============================
// * Create TP icon
//==============================
Actor_Hud.prototype.create_tp_icon = function() {
   if (String(Moghunter.ahud_tp_icon_visible) != "true") {return};
	if (this._tp_icons) {
	    for (var i = 0; i < this._tp_icons.length; i++) {
			this.removeChild(this._tp_icons[i]);
	    };
	    for (var i = 0; i < this._tp_iconsB.length; i++) {
			this.removeChild(this._tp_iconsB[i]);
	    };
	};	
	if (!this._battler) {return};	
	var n_icons = Moghunter.ahud_tp_icon_rows * Moghunter.ahud_tp_icon_cols;
	this._tp_icons = [];
	this._tp_icons.iconMode = String(Moghunter.ahud_tp_icon_halfMode) == "true" ? true : false;
	this._tp_iconsB = [];
	this._tp_iconsB.iconMode = this._tp_icons.iconMode;
	this._tp_IconZoomAnime = String(Moghunter.ahud_tp_icon_zoomAnime) == "true" ? true : false;
	var colors = Math.max(Moghunter.ahud_tp_icon_colorMax, 2);
	var cw = this._tp_icon_img.width / colors;
	var ch = this._tp_icon_img.height / 2;
	for (var i = 0; i < n_icons; i++) {
		 this._tp_iconsB[i] = new Sprite(this._tp_icon_img);
		 this._tp_iconsB[i].colorMax = colors;
		 this._tp_iconsB[i].anchor.x = 0.5;
		 this._tp_iconsB[i].anchor.y = 0.5;
		 this._tp_iconsB[i].rows = Moghunter.ahud_tp_icon_rows;
		 this._tp_iconsB[i].cols = Moghunter.ahud_tp_icon_cols;
		 this._tp_iconsB[i].org = [this._pos_x + Moghunter.ahud_tp_icon_pos_x - cw,this._pos_y + Moghunter.ahud_tp_icon_pos_y - ch];
		 this._tp_iconsB[i].spc = [Moghunter.ahud_tp_icon_space_x,Moghunter.ahud_tp_icon_space_y];
		 this._tp_iconsB[i].zoomA = this._tp_IconZoomAnime;
		 this._tp_iconsB[i].zoomData = [0,0,0,1.00];
		 this._tp_iconsB[i].visible = false;
		 this._tp_iconsB[i].enabled = false;
		 this.addChild(this._tp_iconsB[i]);
	};		
	for (var i = 0; i < n_icons; i++) {
		 this._tp_icons[i] = new Sprite(this._tp_icon_img);
		 this._tp_icons[i].colorMax = Math.max(Moghunter.ahud_tp_icon_colorMax, 2);
		 this._tp_icons[i].anchor.x = 0.5;
		 this._tp_icons[i].anchor.y = 0.5;		 
		 this._tp_icons[i].rows = Moghunter.ahud_tp_icon_rows;
		 this._tp_icons[i].cols = Moghunter.ahud_tp_icon_cols;
		 this._tp_icons[i].org = [this._pos_x + Moghunter.ahud_tp_icon_pos_x - cw,this._pos_y + Moghunter.ahud_tp_icon_pos_y - ch];
		 this._tp_icons[i].spc = [Moghunter.ahud_tp_icon_space_x,Moghunter.ahud_tp_icon_space_y];
		 this._tp_icons[i].zoomA = this._tp_IconZoomAnime;
		 this._tp_icons[i].zoomData = [0,0,0,1.00];	 
		 this._tp_icons[i].visible = false;
		 this._tp_icons[i].enabled = false;
		 this.addChild(this._tp_icons[i]);
	};		
};


//==============================
// * setFrameIcon
//==============================
Actor_Hud.prototype.setFrameIcon = function(icon,image,i,hp,cw,ch) {	
	var sX = cw + 2 + icon.spc[0];
	var sY = ch + 2 + icon.spc[1];
	var lX = sX * icon.rows;
	var lines = Math.floor(i / icon.rows);
	icon.scale.y = icon.scale.x;
	icon.setFrame(hp,0,cw,ch);
	icon.x = icon.org[0] + (sX * i) - (lX * lines);
	icon.y = icon.org[1] + (sY * lines);
};

//==============================
// * is Icon Visible
//==============================
Actor_Hud.prototype.isIconVisible = function(i,mode,par,par_max,realvalue,isMaxValue,colorIndex,colorIndex2,realvalue2,icon,maxvalue) {	
    icon.opacity = 255;
	icon.blendMode = 0;
	if (mode === 0) {
	    if (i >= par_max) {return false};
		return true; 
	};
	if (par === 0) {return false};
	if (par > maxvalue) {
		icon.opacity = 155;
		icon.blendMode = 1;
		return true;
	};
    if (isMaxValue) {return true};
	if (colorIndex > 0 && colorIndex2 >= colorIndex) {
	    icon.opacity = i >= realvalue ? 0 : 255;
		icon.blendMode = i >= realvalue ? 1 : 0;
		if (colorIndex2 > colorIndex) {return true};
		if (i >= realvalue2) {return false};
    } else {
	  if (i >= realvalue) {return false};
    };
    return true;
};

//==============================
// * set Color Index
//==============================
Actor_Hud.prototype.setColorIndex = function(i,mode,par,par_max,realvalue,isMaxValue,colorIndex,colorMax,maxvalue) {	
     if (par === 0) {return 0};
	 if (colorIndex >= colorMax || par > maxvalue) {return colorMax - 1}
     if (mode === 0) {return colorIndex};
	 if (mode === 1) {
		 if (realvalue === 0) {return colorIndex};
		 return colorIndex + 1;
	 };
     return 0;
};

//==============================
// * is Icon Enabled
//==============================
Actor_Hud.prototype.isIconEnabled = function(i,mode,par,par_max,realvalue,iconMax,colorIndex,colorMax,maxvalue) {	
     if (mode === 0) {return false};
	 if (par === 0) {return false};
	 if (colorIndex >= colorMax || par > maxvalue) {return true}
	 if (realvalue != 0 && i === (realvalue - 1)) {return true};
	 if (realvalue === 0 && i === (iconMax - 1)) {return true};
     return false
};

//==============================
// * refresh Icons
//==============================
Actor_Hud.prototype.refresh_icons = function(sprites,image,par,par_max,mode) {	
    if (sprites.iconMode) {
		this.refreshIconHalfMode(sprites,image,par,par_max,mode);
	} else {
		this.refreshIconNormalMode(sprites,image,par,par_max,mode);
	};
};

//==============================
// * refresh Icon Normal Mode
//==============================
Actor_Hud.prototype.refreshIconNormalMode = function(sprites,image,par,par_max,mode) {	
    for (var i = 0; i < sprites.length; i++) {
	   var icon = sprites[i];
       var cw = image.width / icon.colorMax;
	   var ch = image.height;	   
	   var iconMax = icon.rows * icon.cols;
	   var colorIndex = Math.floor(par / iconMax);
	   var colorMax = icon.colorMax;
	   var avaliableValue = Math.floor(colorIndex * iconMax)
	   var realvalue = par - avaliableValue;
	   var isMaxValue = par === avaliableValue ? true : false;
	   var colorIndex2 = Math.floor(par_max / iconMax);
	   var avaliableValue2 = Math.floor(colorIndex2 * iconMax)
	   var realvalue2 = par_max - avaliableValue2;
	   var maxvalue = iconMax * (colorMax - 1);
	   var hp = cw * this.setColorIndex(i,mode,par,par_max,realvalue,isMaxValue,colorIndex,colorMax,maxvalue);
       icon.visible = this.isIconVisible(i,mode,par,par_max,realvalue,isMaxValue,colorIndex,colorIndex2,realvalue2,icon,maxvalue);
	   icon.enable = this.isIconEnabled(i,mode,par,par_max,realvalue,iconMax,colorIndex,colorMax,maxvalue);
	   icon.scale.x = 1.00;
	   icon.zoomData = [0,0,0,icon.scale.x]; 
	   this.setFrameIcon(icon,image,i,hp,cw,ch);
	};
};

//==============================
// * refresh Icon Half Mode
//==============================
Actor_Hud.prototype.refreshIconHalfMode = function(sprites,image,par,par_max,mode) {	
    var halfpar = Math.floor(par / 2);
	var parOdd1 = par%2;
	var parOdd2 = parOdd1 == 0 ? true : false;
	var prepar = par;
	par = sprites.iconMode ? (halfpar + parOdd1) : par;
	var prepar2 = par;
	var halfmaxpar = Math.floor(par_max / 2);
	var parmaxOdd1 = par_max%2;
	var parmaxOdd2 = parmaxOdd1 == 0 ? true : false;
	var preparmax = par_max;
	par_max = sprites.iconMode ? (halfmaxpar + parmaxOdd1) : par_max;
	var preparmax2 = par_max;	
	if (mode === 1 && par > sprites.length) {

			var mx_g = Math.floor(par / sprites.length);
			var mx_l = sprites.length * mx_g;
			var par = par - mx_l;
			if (par === 0) {par = sprites.length};
	};
	for (var i = 0; i < sprites.length; i++) {
		var icon = sprites[i];
		icon.visible = false;
		icon.opacity = 255;
		icon.enable = (prepar2 > 0 && i === (prepar2 - 1) && mode === 1) ? true : false;
		var cw = image.width / icon.colorMax;
		var ch = image.height;
		if (par > 0 && icon.colorMax > 2) {
			var lines  = Math.floor((prepar - 1) / sprites.length) + 1;
			if (lines >= icon.colorMax - 1) {
				var hp = (icon.colorMax - 1) * cw;
				if (mode === 1) {icon.opacity = 0};
			} else {
              if (mode === 0 && lines > 0) {lines--};
			  var hp = lines * cw;	
			};
		} else {
			if (mode === 1 && prepar2 > sprites.length) {
				par = prepar;
				icon.enable = false;
			};		
		    var hp = mode === 1 ? cw : 0;
		};
		var sX = cw + 2 + icon.spc[0];
		var sY = ch + 2 + icon.spc[1];
		var lX = sX * icon.rows;
		var lines = Math.floor(i / icon.rows);
		if (sprites.iconMode) {
			if (mode === 0) {
				icon.scale.x = 1.00;
				if (par_max <= sprites.length && i == par_max - 1) {
					icon.scale.x = !parmaxOdd2 ? 0.5 : 1.00;
				};
			} else  {
				if (prepar2 - 1 === i) {
					icon.scale.x = parOdd2 ? 1.00 : 0.50;
				} else {
					icon.scale.x = 1.00;
				};		
			};
		} else {
			icon.scale.x = 1.00;
		};
		icon.scale.y = icon.scale.x;
		icon.zoomData = [0,0,0,icon.scale.x]; 
		icon.visible = true
		if (par_max < sprites.length && i > (par_max - 1)) {icon.visible = false};
	 	if (mode === 1) {
			icon.visible = i > prepar2 - 1 ? false : true
		};
		icon.setFrame(hp,0,cw,ch);
		icon.x = icon.org[0] + (sX * i) - (lX * lines);
		icon.y = icon.org[1] + (sY * lines);
	};
};

//==============================
// * update Icon Zoom Anime
//==============================
Actor_Hud.prototype.updateIconZoomAnime = function(sprites) {
	for (var i = 0; i < sprites.length; i++) {
		 var icon = sprites[i];
		 if (icon.enable) {
			 icon.zoomData[1]++;
			 if (icon.zoomData[1] > 2) {
			     icon.zoomData[1] = 0;
				 icon.zoomData[2]++;
			     if (icon.zoomData[2] < 15) {
			         icon.zoomData[0] += 0.02;
				 } else if (icon.zoomData[2] < 30) {
					 icon.zoomData[0] -= 0.02;
				 } else {
					 icon.zoomData[0] = 0;
				     icon.zoomData[2] = 0;
				 };
			     icon.scale.x = icon.zoomData[3] + icon.zoomData[0];
			     icon.scale.y = icon.scale.x;
			 };
		 };
	};
};

//==============================
// * Create HP Number
//==============================
Actor_Hud.prototype.create_hp_number = function() {
	if (String(Moghunter.ahud_hp_number_visible) != "true") {return};
	if (this._hp_number) {for (var i = 0; i < this._hp_number.length; i++) {this.removeChild(this._hp_number[i]);}};
	if (!this._battler) {return};
	this._hp_number = [];
	this._hp_number.align = Number(Moghunter.ahud_hp_number_align);
	this._hp_img_data = [this._hp_number_img.width,this._hp_number_img.height,
	                      this._hp_number_img.width / 10, this._hp_number_img.height / 2,
						  this._pos_x + Moghunter.ahud_hp_number_pos_x,
						  this._pos_y + Moghunter.ahud_hp_number_pos_y,
						  ];
	for (var i = 0; i < Moghunter.ahud_max_hp_limit; i++) {
	   this._hp_number[i] = new Sprite(this._hp_number_img);
	   this._hp_number[i].visible = false;
	   this._hp_number[i].x = this._hp_img_data[4];
	   this._hp_number[i].y = this._hp_img_data[5];
	   this.addChild(this._hp_number[i]);
	};	
	this._hp_number_old = this._battler.hp;	
	this.refresh_number(this._hp_number,this._hp_number_old,this._hp_img_data,this._hp_img_data[4],0);	
};

//==============================
// * Create maxHP Number
//==============================
Actor_Hud.prototype.create_maxhp_number = function() {
	if (String(Moghunter.ahud_maxhp_number_visible) != "true") {return};
	if (this._maxhp_number) {for (var i = 0; i < this._maxhp_number.length; i++) {this.removeChild(this._maxhp_number[i]);}};
	if (!this._battler) {return};	
	this._maxhp_number = [];
	this._maxhp_number.align = Number(Moghunter.ahud_hp_number_align);
	this._maxhp_img_data = [this._maxhp_number_img.width,this._maxhp_number_img.height,
	                      this._maxhp_number_img.width / 10, this._maxhp_number_img.height / 2,
						  this._pos_x + Moghunter.ahud_maxhp_number_pos_x,
						  this._pos_y + Moghunter.ahud_maxhp_number_pos_y,
						  ];
	for (var i = 0; i < Moghunter.ahud_max_hp_limit; i++) {
	   this._maxhp_number[i] = new Sprite(this._maxhp_number_img);
	   this._maxhp_number[i].visible = false;
	   this._maxhp_number[i].x = this._maxhp_img_data[4];
	   this._maxhp_number[i].y = this._maxhp_img_data[5];
	   this.addChild(this._maxhp_number[i]);
	};		
	this._maxhp_number_old = this._battler.mhp;	
	this.refresh_number(this._maxhp_number,this._maxhp_number_old,this._maxhp_img_data,this._maxhp_img_data[4],0);	
};

//==============================
// * Update HP
//==============================
Actor_Hud.prototype.update_hp = function() {
	if (this._hp_meter_blue) {
		this._hp_meter_blue.opacity += 15;
		this._hp_meter_red.opacity += 15;
		if(this._hp_flow[0]) {
		   if (this._hp_old[1] != this._battler.mhp) {
		       this._hp_old = [this._battler.hp,this._battler.mhp];
			   this.refresh_meter_flow(this._hp_meter_red,this._battler.hp,this._battler.mhp,1,this._hp_flow[1]);
		   };					
		   this.refresh_meter_flow(this._hp_meter_blue,this._battler.hp,this._battler.mhp,0,this._hp_flow[1]);
	   	   var dif_meter = this.update_dif(this._hp_old_ani[0],this._battler.hp,160)
		   if (this._hp_old_ani[0] != dif_meter) {this._hp_old_ani[0] = dif_meter;
	       this.refresh_meter_flow(this._hp_meter_red,this._hp_old_ani[0],this._battler.mhp,1,this._hp_flow[1]);
		   };
		   this._hp_flow[1] += 2;
		   if (this._hp_flow[1] > this._hp_flow[3]) {this._hp_flow[1] = 0};		   
   	    }
		else {
		   if (this.need_refresh_parameter(0)) {
				this.refresh_meter(this._hp_meter_blue,this._battler.hp,this._battler.mhp,0,2,0);
				this._hp_old = [this._battler.hp,this._battler.mhp];
			};
			var dif_meter = this.update_dif(this._hp_old_ani[0],this._battler.hp,160)
			if (this._hp_old_ani[0] != dif_meter) {this._hp_old_ani[0] = dif_meter;
			this.refresh_meter(this._hp_meter_red,this._hp_old_ani[0],this._battler.mhp,1,2,0);};		
	    };
    };
	if (this._hp_number) {
		var dif_number = this.update_dif(this._hp_number_old,this._battler.hp,30)
		if (this._hp_number_old != dif_number) {this._hp_number_old = dif_number;
		this.refresh_number(this._hp_number,this._hp_number_old,this._hp_img_data,this._hp_img_data[4],0);};
	};
    if (this._maxhp_number) {
		if (this._maxhp_number_old != this._battler.mhp) {this._maxhp_number_old = this._battler.mhp;
		this.refresh_number(this._maxhp_number,this._maxhp_number_old,this._maxhp_img_data,this._maxhp_img_data[4],0);};
	};
	if (this._hp_icons) {
		var a_hp = Math.floor( this._battler.hp/Moghunter.ahud_hp_over + 0.5 );
		var a_mhp = Math.floor( this._battler.mhp/Moghunter.ahud_hp_over + 0.5 );
		if (this._hp_icon_old[0] != a_hp || this._hp_icon_old[1] != a_mhp) {
		    this._hp_icon_old[0] = a_hp;
			this._hp_icon_old[1] = a_mhp;
			this.refresh_icons(this._hp_iconsB,this._hp_icon_img, a_hp, a_mhp,0);
	        this.refresh_icons(this._hp_icons,this._hp_icon_img, a_hp, a_mhp,1);
		};
		if (this._hp_IconZoomAnime) {this.updateIconZoomAnime(this._hp_icons)};
    };
};

//==============================
// * Create MP Meter
//==============================
Actor_Hud.prototype.create_mp_meter = function() {
	if (String(Moghunter.ahud_mp_meter_visible) != "true") {return};
	this.removeChild(this._mp_meter_blue);
	this.removeChild(this._mp_meter_red);
	if (!this._battler) {return};
	this._mp_meter_red = new Sprite(this._mp_meter_img);
	this._mp_meter_red.x = this._pos_x + Moghunter.ahud_mp_meter_pos_x;
	this._mp_meter_red.y = this._pos_y + Moghunter.ahud_mp_meter_pos_y;
	this._mp_meter_red.rotation = Moghunter.ahud_mp_meter_rotation * Math.PI / 180;
	this._mp_meter_red.setFrame(0,0,0,0);
	this.addChild(this._mp_meter_red);		
	this._mp_meter_blue = new Sprite(this._mp_meter_img);
	this._mp_meter_blue.x = this._mp_meter_red.x;
	this._mp_meter_blue.y = this._mp_meter_red.y;
	this._mp_meter_blue.rotation = this._mp_meter_red.rotation * Math.PI / 180;
	this._mp_meter_blue.setFrame(0,0,0,0);
	this.addChild(this._mp_meter_blue);
	this._mp_old_ani[0] = this._battler.mp - 1;
	if (String(Moghunter.ahud_mp_meter_flow) === "true") {this._mp_flow[0] = true;
	    this._mp_flow[2] = this._mp_meter_img.width / 3;
		this._mp_flow[3] = this._mp_flow[2] * 2;
		this._mp_flow[1] = Math.floor(Math.random() * this._mp_flow[2]);
	};
};

//==============================
// * Create MP Number
//==============================
Actor_Hud.prototype.create_mp_number = function() {
	if (String(Moghunter.ahud_mp_number_visible) != "true") {return};
	if (this._mp_number) {for (var i = 0; i < this._mp_number.length; i++) {this.removeChild(this._mp_number[i]);}};
	if (!this._battler) {return};
	this._mp_number = [];
	this._mp_number.align = Number(Moghunter.ahud_mp_number_align);
	this._mp_img_data = [this._mp_number_img.width,this._mp_number_img.height,
	                      this._mp_number_img.width / 10, this._mp_number_img.height / 2,
						  this._pos_x + Moghunter.ahud_mp_number_pos_x,
						  this._pos_y + Moghunter.ahud_mp_number_pos_y,
						  ];
	for (var i = 0; i < Moghunter.ahud_max_mp_limit; i++) {
	   this._mp_number[i] = new Sprite(this._mp_number_img);
	   this._mp_number[i].visible = false;
	   this._mp_number[i].x = this._mp_img_data[4];
	   this._mp_number[i].y = this._mp_img_data[5] ;
	   this.addChild(this._mp_number[i]);
	};	
	this._mp_number_old = this._battler.mp;
	this.refresh_number(this._mp_number,this._mp_number_old,this._mp_img_data,this._mp_img_data[4],0);	
};

//==============================
// * Create MaxMP Number
//==============================
Actor_Hud.prototype.create_maxmp_number = function() {
	if (String(Moghunter.ahud_maxmp_number_visible) != "true") {return};
	if (this._maxmp_number) {for (var i = 0; i < this._maxmp_number.length; i++) {this.removeChild(this._maxmp_number[i]);}};
	if (!this._battler) {return};
	this._maxmp_number = [];
	this._maxmp_number.align = Number(Moghunter.ahud_mp_number_align);
	this._maxmp_img_data = [this._maxmp_number_img.width,this._maxmp_number_img.height,
	                      this._maxmp_number_img.width / 10, this._maxmp_number_img.height / 2,
						  this._pos_x + Moghunter.ahud_maxmp_number_pos_x,
						  this._pos_y + Moghunter.ahud_maxmp_number_pos_y,
						  ];
	for (var i = 0; i < Moghunter.ahud_max_mp_limit; i++) {
	   this._maxmp_number[i] = new Sprite(this._maxmp_number_img);
	   this._maxmp_number[i].visible = false;
	   this._maxmp_number[i].x = this._maxmp_img_data[4];
	   this._maxmp_number[i].y = this._maxmp_img_data[5] ;
	   this.addChild(this._maxmp_number[i]);
	};	
	this._maxmp_number_old = this._battler.mmp;	
	this.refresh_number(this._maxmp_number,this._maxmp_number_old,this._maxmp_img_data,this._maxmp_img_data[4],0);	
};

//==============================
// * Update MP
//==============================
Actor_Hud.prototype.update_mp = function() {
	if (this._mp_meter_blue) {
     	this._mp_meter_blue.opacity += 15;
	    this._mp_meter_red.opacity += 15;			
		if(this._mp_flow[0]) {
		   if (this._mp_old[1] != this._battler.mmp) {
		       this._mp_old = [this._battler.mp,this._battler.mmp];
			   this.refresh_meter_flow(this._mp_meter_red,this._battler.mp,this._battler.mmp,1,this._mp_flow[1]);
		   };			
		   this.refresh_meter_flow(this._mp_meter_blue,this._battler.mp,this._battler.mmp,0,this._mp_flow[1]);
	   	   var dif_meter = this.update_dif(this._mp_old_ani[0],this._battler.mp,160);
		   if (this._mp_old_ani[0] != dif_meter) {this._mp_old_ani[0] = dif_meter;
	       this.refresh_meter_flow(this._mp_meter_red,this._mp_old_ani[0],this._battler.mmp,1,this._mp_flow[1]);
		   };
		   this._mp_flow[1] += 2;
		   if (this._mp_flow[1] > this._mp_flow[3]) {this._mp_flow[1] = 0};		   
   	    }
		else {		
			if (this.need_refresh_parameter(1)) {
				this.refresh_meter(this._mp_meter_blue,this._battler.mp,this._battler.mmp,0,2,0);
				this._mp_old = [this._battler.mp,this._battler.mmp];
			};
			var dif_meter = this.update_dif(this._mp_old_ani[0],this._battler.mp,160)
			if (this._mp_old_ani[0] != dif_meter) {this._mp_old_ani[0] = dif_meter;
			this.refresh_meter(this._mp_meter_red,this._mp_old_ani[0],this._battler.mmp,1,2,0);};
		};
    };
	if (this._mp_number) {
		var dif_number = this.update_dif(this._mp_number_old,this._battler.mp,30)
		if (this._mp_number_old != dif_number) {this._mp_number_old = dif_number;
		this.refresh_number(this._mp_number,this._mp_number_old,this._mp_img_data,this._mp_img_data[4],0);};
	};
	if (this._maxmp_number) {
		if (this._maxmp_number_old != this._battler.mmp) {this._maxmp_number_old = this._battler.mmp;
		this.refresh_number(this._maxmp_number,this._maxmp_number_old,this._maxmp_img_data,this._maxmp_img_data[4],0);};


	};
	if (this._mp_icons) {
		var a_mp = Math.floor( this._battler.mp/Moghunter.ahud_mp_over + 0.5 );
		var a_mmp = Math.floor( this._battler.mmp/Moghunter.ahud_mp_over + 0.5 );
		if (this._mp_icon_old[0] != a_mp || this._mp_icon_old[1] != a_mmp) {
		    this._mp_icon_old[0] = a_mp;
			this._mp_icon_old[1] = a_mmp;
			this.refresh_icons(this._mp_iconsB,this._mp_icon_img, a_mp, a_mmp,0);
	        this.refresh_icons(this._mp_icons,this._mp_icon_img, a_mp, a_mmp,1);
		};
		if (this._mp_IconZoomAnime) {this.updateIconZoomAnime(this._mp_icons)};
    };	
};

//==============================
// * Create TP Meter
//==============================
Actor_Hud.prototype.create_tp_meter = function() {
	if (String(Moghunter.ahud_tp_meter_visible) != "true") {return};
	this.removeChild(this._tp_meter_blue);
	this.removeChild(this._tp_meter_red);
	if (!this._battler) {return};
	this._tp_meter_red = new Sprite(this._tp_meter_img);
	this._tp_meter_red.x = this._pos_x + Moghunter.ahud_tp_meter_pos_x;
	this._tp_meter_red.y = this._pos_y + Moghunter.ahud_tp_meter_pos_y;
	this._tp_meter_red.rotation = Moghunter.ahud_tp_meter_rotation * Math.PI / 180;
	this._tp_meter_red.setFrame(0,0,0,0);
	this.addChild(this._tp_meter_red);		
	this._tp_meter_blue = new Sprite(this._tp_meter_img);
	this._tp_meter_blue.x = this._tp_meter_red.x;
	this._tp_meter_blue.y = this._tp_meter_red.y;
	this._tp_meter_blue.rotation = this._tp_meter_red.rotation * Math.PI / 180;
	this._tp_meter_blue.setFrame(0,0,0,0);
	this.addChild(this._tp_meter_blue);
	this._tp_old_ani[0] = this._battler.tp - 1;
	if (String(Moghunter.ahud_tp_meter_flow) === "true") {this._tp_flow[0] = true;
	    this._tp_flow[2] = this._tp_meter_img.width / 3;
		this._tp_flow[3] = this._tp_flow[2] * 2;
		this._tp_flow[1] = Math.floor(Math.random() * this._tp_flow[2]);
	};
};

//==============================
// * Create TP Number
//==============================
Actor_Hud.prototype.create_tp_number = function() {
	if (String(Moghunter.ahud_tp_number_visible) != "true") {return};
	if (this._tp_number) {for (var i = 0; i < this._tp_number.length; i++) {this.removeChild(this._tp_number[i]);}};
	if (!this._battler) {return};
	this._tp_number = [];
	this._tp_number.align = Number(Moghunter.ahud_tp_number_align);
	this._tp_img_data = [this._tp_number_img.width,this._tp_number_img.height,
	                      this._tp_number_img.width / 10, this._tp_number_img.height / 2,
						  this._pos_x + Moghunter.ahud_tp_number_pos_x,
						  this._pos_y + Moghunter.ahud_tp_number_pos_y,
						  ];
	for (var i = 0; i < Moghunter.ahud_max_tp_limit; i++) {
	   this._tp_number[i] = new Sprite(this._tp_number_img);
	   this._tp_number[i].visible = false;
	   this._tp_number[i].x = this._tp_img_data[4];
	   this._tp_number[i].y = this._tp_img_data[5] ;
	   this.addChild(this._tp_number[i]);
	};	
	this._tp_number_old = this._battler.tp;
	this.refresh_number(this._tp_number,this._tp_number_old,this._tp_img_data,this._tp_img_data[4],0);	
};

//==============================
// * Create MaxTP Number
//==============================
Actor_Hud.prototype.create_maxtp_number = function() {
	if (String(Moghunter.ahud_maxtp_number_visible) != "true") {return};
	if (this._maxtp_number) {for (var i = 0; i < this._maxtp_number.length; i++) {this.removeChild(this._maxtp_number[i]);}};
	if (!this._battler) {return};
	this._maxtp_number = [];
	this._maxtp_number.align = Number(Moghunter.ahud_tp_number_align);
	this._maxtp_img_data = [this._maxtp_number_img.width,this._maxtp_number_img.height,
	                      this._maxtp_number_img.width / 10, this._maxtp_number_img.height / 2,
						  this._pos_x + Moghunter.ahud_maxtp_number_pos_x,
						  this._pos_y + Moghunter.ahud_maxtp_number_pos_y,
						  ];
	for (var i = 0; i < Moghunter.ahud_max_tp_limit; i++) {
	   this._maxtp_number[i] = new Sprite(this._maxtp_number_img);
	   this._maxtp_number[i].visible = false;
	   this._maxtp_number[i].x = this._maxtp_img_data[4];
	   this._maxtp_number[i].y = this._maxtp_img_data[5] ;
	   this.addChild(this._maxtp_number[i]);
	};	
	this._maxtp_number_old = 100;
	this.refresh_number(this._maxtp_number,this._maxtp_number_old,this._maxtp_img_data,this._maxtp_img_data[4],0);	
};

//==============================
// * Update TP
//==============================
Actor_Hud.prototype.update_tp = function() {
	if (this._tp_meter_blue) {
		this._tp_meter_blue.opacity += 15;
		this._tp_meter_red.opacity += 15;
		if(this._tp_flow[0]) {
		   if (this._tp_old[1] != this._battler.maxTp()) {
		       this._tp_old = [this._battler.tp,this._battler.maxTp()];
			   this.refresh_meter_flow(this._tp_meter_red,this._battler.tp,this._battler.maxTp(),1,this._tp_flow[1]);
		   };				
		   this.refresh_meter_flow(this._tp_meter_blue,this._battler.tp,this._battler.maxTp(),0,this._tp_flow[1]);
	   	   var dif_meter = this.update_dif(this._tp_old_ani[0],this._battler.tp,160)
		   if (this._tp_old_ani[0] != dif_meter) {this._tp_old_ani[0] = dif_meter;
	       this.refresh_meter_flow(this._tp_meter_red,this._tp_old_ani[0],this._battler.maxTp(),1,this._tp_flow[1]);
		   };
		   this._tp_flow[1] += 2;
		   if (this._tp_flow[1] > this._tp_flow[3]) {this._tp_flow[1] = 0};		   
   	    }
		else {	
			if (this.need_refresh_parameter(2)) {
				this.refresh_meter(this._tp_meter_blue,this._battler.tp,this._battler.maxTp(),0,2,0);
				this._tp_old = [this._battler.tp,this._battler.maxTp()];
			};
			var dif_meter = this.update_dif(this._tp_old_ani[0],this._battler.tp,160)
			if (this._tp_old_ani[0] != dif_meter) {this._tp_old_ani[0] = dif_meter;
			this.refresh_meter(this._tp_meter_red,this._tp_old_ani[0],this._battler.maxTp(),1,2,0);};
	};
    };
	if (this._tp_number) {
		var dif_number = this.update_dif(this._tp_number_old,this._battler.tp,30)
		if (this._tp_number_old != dif_number) {this._tp_number_old = dif_number;
		this.refresh_number(this._tp_number,this._tp_number_old,this._tp_img_data,this._tp_img_data[4],0);};
	};
	if (this._tp_icons) {
		var a_tp = Math.floor( this._battler.tp/Moghunter.ahud_tp_over + 0.5 );
		var a_mtp = Math.floor( this._battler.mtp/Moghunter.ahud_tp_over + 0.5 );
		if (this._tp_icon_old[0] != a_tp || this._tp_icon_old[1] != a_mtp) {
		    this._tp_icon_old[0] = a_tp;
			this._tp_icon_old[1] = a_mtp;
			this.refresh_icons(this._tp_iconsB,this._tp_icon_img, a_tp, a_mtp,0);
	        this.refresh_icons(this._tp_icons,this._tp_icon_img, a_tp, a_mtp,1);
		};
		if (this._tp_IconZoomAnime) {this.updateIconZoomAnime(this._tp_icons)};
    };	
};


//==============================
// * Create Exp Meter
//==============================
Actor_Hud.prototype.create_exp_meter = function() {	
if (String(Moghunter.ahud_exp_meter_visible) != "true") {return};
	this.removeChild(this._exp_meter);
	if (!this._battler) {return};
	this._exp_meter = new Sprite(this._exp_meter_img);
	this._exp_meter.x = this._pos_x + Moghunter.ahud_exp_meter_pos_x;
	this._exp_meter.y = this._pos_y + Moghunter.ahud_exp_meter_pos_y;
	this._exp_meter.rotation = this._exp_meter.rotation * Math.PI / 180;

	this.addChild(this._exp_meter);
	if (String(Moghunter.ahud_exp_meter_flow) === "true") {this._exp_flow[0] = true;
	    this._exp_flow[2] = this._exp_meter_img.width / 3;
		this._exp_flow[3] = this._exp_flow[2] * 2;
		this._exp_flow[1] = Math.floor(Math.random() * this._exp_flow[2]);

	};
	this._exp_meter.setFrame(0,0,0,0);
};

//==============================
// * Create Level Number
//==============================
Actor_Hud.prototype.create_level_number = function() {
	if (String(Moghunter.ahud_level_number_visible) != "true") {return};
	if (this._level_number) {for (var i = 0; i < this._level_number.length; i++) {this.removeChild(this._level_number[i]);}};
	if (!this._battler) {return};
	this._level_number = [];
	this._level_number.align = Number(Moghunter.ahud_level_number_align);
	this._level_img_data = [this._level_number_img.width,this._level_number_img.height,
	                      this._level_number_img.width / 10, this._level_number_img.height / 2,
						  this._pos_x + Moghunter.ahud_level_number_pos_x,
						  this._pos_y + Moghunter.ahud_level_number_pos_y,
						  ];
	for (var i = 0; i < Moghunter.ahud_max_lv_limit; i++) {
	   this._level_number[i] = new Sprite(this._level_number_img);
	   this._level_number[i].visible = false;
	   this._level_number[i].x = this._level_img_data[4];
	   this._level_number[i].y = this._level_img_data[5];
	   this.addChild(this._level_number[i]);
	};	
	this._level_number_old = this._battler.level;
	this.refresh_number(this._level_number,this._level_number_old,this._level_img_data,this._level_img_data[4],1);	
};

//==============================
// * Update Exp
//==============================
Actor_Hud.prototype.update_exp = function() {
	if (this._exp_meter) {
		this._exp_meter.opacity += 15; 
		if (this.need_refresh_parameter(3)) {
			if (this._battler.isMaxLevel()) {
			    this.refresh_meter(this._exp_meter,1,1,0,1,1);
		    } else {
     			this.refresh_meter(this._exp_meter,this._battler.current_exp_r(),this._battler.nextLevelExp_r(),0,1,1);
			};
			this._exp_old = this._battler.currentExp();
		};
    };
	if (this._level_number) {
		var dif_number = this.update_dif(this._level_number_old,this._battler.level,30)
		if (this._level_number_old != dif_number) {this._level_number_old = dif_number;
		    if (this._hp_old_ani) {this._hp_old_ani[0] = 0};
			if (this._mp_old_ani) {this._mp_old_ani[0] = 0};
			if (this._tp_old_ani) {this._tp_old_ani[0] = 0};
		    this.refresh_number(this._level_number,this._level_number_old,this._level_img_data,this._level_img_data[4],1);};
	};
};

//==============================
// * Create States
//==============================
Actor_Hud.prototype.create_states = function() {
	if (String(Moghunter.ahud_states_visible) != "true") {return};
	this.removeChild(this._state_icon);
	if (!this._battler) {return};
	this._states_data = [0,0,0];
	this._state_icon = new Sprite(this._state_img);
	this._state_icon.x = this._pos_x + Moghunter.ahud_states_pos_x;
	this._state_icon.y = this._pos_y + Moghunter.ahud_states_pos_y;
	this._state_icon.visible = false;
	this.addChild(this._state_icon);
	this.refresh_states();	
};

//==============================
// * Refresh States
//==============================
Actor_Hud.prototype.refresh_states = function() {
	this._states_data[0] = 0;
	this._states_data[2] = 0;
	this._state_icon.visible = false;
	if (this._battler.allIcons().length == 0) {this._states_data[1] = 0;return};
       if (this._battler.allIcons()[this._states_data[1]]) {	
		this._states_data[0] = this._battler.allIcons()[this._states_data[1]];
		this._state_icon.visible = true;
		var sx = this._states_data[0] % 16 * 32;
		var sy = Math.floor(this._states_data[0] / 16) * 32;
		this._state_icon.setFrame(sx, sy, 32, 32);
		this._battler.need_refresh_bhud_states = false;	
	
	   };
	this._states_data[1] += 1;
	if (this._states_data[1] >= this._battler.allIcons().length) {

		this._states_data[1] = 0
	};
};

//==============================
// * Update States
//==============================
Actor_Hud.prototype.update_states = function() {
	if (!this._state_icon) {return};
	this._states_data[2] += 1;
	if (this.need_refresh_states()) {this.refresh_states();};
};

//==============================
// * Need Refresh States
//==============================
Actor_Hud.prototype.need_refresh_states = function() {
	if (this._battler.need_refresh_bhud_states) {return true};
	if (this._states_data[2] > 60) {return true};
	return false;
};