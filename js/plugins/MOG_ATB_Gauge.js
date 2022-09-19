//=============================================================================
// MOG_ATB_Gauge.js
//=============================================================================

/*:
 * @plugindesc (v1.0)[v1.3]  战斗 - 即时战斗固定框
 * @author Moghunter （Drill_up翻译+优化）
 * 
 * @Drill_LE_param "角色图标-%d"
 * @Drill_LE_parentKey "---角色图标%d至%d---"
 * @Drill_LE_var "Moghunter.src_atb_actor_icon_list_length"
 * 
 * @Drill_LE_param "敌人图标-%d"
 * @Drill_LE_parentKey "---敌人图标%d至%d---"
 * @Drill_LE_var "Moghunter.src_atb_enemy_icon_list_length"
 * 
 *
 * @param 资源-固定框
 * @desc 固定框的图片资源。
 * @default ATB-固定框
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 * 
 * @param 平移-固定框 X
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 740
 *
 * @param 平移-固定框 Y
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 45
 *
 * @param 固定框角度
 * @type number
 * @min 0
 * @desc 固定框朝向角度，单位度。角度0朝下，角度90朝左。角度将会改变整个固定框。
 * @default 0
 *
 * @param 固定框长度
 * @type number
 * @min 20
 * @desc 固定框的长度。长度和图片的高宽无关，是用于设置敌人和角色图标移动的长度。
 * @default 320
 *
 * @param 敌人图标偏移量
 * @desc 以固定框角度朝向下为例（角度0），正数向右偏移，负数向左偏移，单位像素。
 * @default 16
 *
 * @param 角色图标偏移量
 * @desc 以固定框角度朝向下为例（角度0），正数向右偏移，负数向左偏移，单位像素。
 * @default -16
 *
 * @param 平移-施法点 X
 * @desc 以固定框角度朝向下为例（角度0），x轴方向平移，单位像素。（可为负数）
 * @default -3
 *
 * @param 平移-施法点 Y
 * @desc 以固定框角度朝向下为例（角度0），y轴方向平移，单位像素。（可为负数）
 * @default 30
 *
 * @param 是否显示技能图标
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示，战斗会显示敌人准备释放的技能的图标。
 * @default true
 * 
 * @param 技能图标缩放比例
 * @desc 填1.0表示物品图标的原尺寸（24x24像素），填1.5表示图标大50%（36x36像素）。
 * @default 0.6
 *
 * @param 平移-技能图标 X
 * @desc 以敌人图标为基准，x轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 平移-技能图标 Y
 * @desc 以敌人图标为基准，y轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 资源-角色默认图标
 * @desc 如果角色图标为空，则使用默认图标。
 * @default ATB-角色默认图标
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 资源-敌人默认图标
 * @desc 如果敌人图标为空，则使用默认图标。
 * @default ATB-敌人默认图标
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param ----角色图标----
 * @default 
 *
 * @param ---角色图标 1至20---
 * @parent ----角色图标----
 * @default 
 *
 * @param 角色图标-1
 * @parent ---角色图标 1至20---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-2
 * @parent ---角色图标 1至20---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-3
 * @parent ---角色图标 1至20---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-4
 * @parent ---角色图标 1至20---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-5
 * @parent ---角色图标 1至20---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-6
 * @parent ---角色图标 1至20---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-7
 * @parent ---角色图标 1至20---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-8
 * @parent ---角色图标 1至20---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-9
 * @parent ---角色图标 1至20---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-10
 * @parent ---角色图标 1至20---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-11
 * @parent ---角色图标 1至20---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-12
 * @parent ---角色图标 1至20---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-13
 * @parent ---角色图标 1至20---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-14
 * @parent ---角色图标 1至20---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-15
 * @parent ---角色图标 1至20---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-16
 * @parent ---角色图标 1至20---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-17
 * @parent ---角色图标 1至20---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-18
 * @parent ---角色图标 1至20---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-19
 * @parent ---角色图标 1至20---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-20
 * @parent ---角色图标 1至20---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 * 
 * @param ---角色图标21至40---
 * @parent ----角色图标----
 * @default 
 *
 * @param 角色图标-21
 * @parent ---角色图标21至40---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-22
 * @parent ---角色图标21至40---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-23
 * @parent ---角色图标21至40---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-24
 * @parent ---角色图标21至40---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-25
 * @parent ---角色图标21至40---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-26
 * @parent ---角色图标21至40---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-27
 * @parent ---角色图标21至40---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-28
 * @parent ---角色图标21至40---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-29
 * @parent ---角色图标21至40---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-30
 * @parent ---角色图标21至40---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-31
 * @parent ---角色图标21至40---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-32
 * @parent ---角色图标21至40---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-33
 * @parent ---角色图标21至40---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-34
 * @parent ---角色图标21至40---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-35
 * @parent ---角色图标21至40---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-36
 * @parent ---角色图标21至40---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-37
 * @parent ---角色图标21至40---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-38
 * @parent ---角色图标21至40---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-39
 * @parent ---角色图标21至40---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-40
 * @parent ---角色图标21至40---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 * 
 * @param ---角色图标41至60---
 * @parent ----角色图标----
 * @default 
 *
 * @param 角色图标-41
 * @parent ---角色图标41至60---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-42
 * @parent ---角色图标41至60---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-43
 * @parent ---角色图标41至60---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-44
 * @parent ---角色图标41至60---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-45
 * @parent ---角色图标41至60---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-46
 * @parent ---角色图标41至60---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-47
 * @parent ---角色图标41至60---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-48
 * @parent ---角色图标41至60---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-49
 * @parent ---角色图标41至60---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-50
 * @parent ---角色图标41至60---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-51
 * @parent ---角色图标41至60---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-52
 * @parent ---角色图标41至60---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-53
 * @parent ---角色图标41至60---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-54
 * @parent ---角色图标41至60---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-55
 * @parent ---角色图标41至60---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-56
 * @parent ---角色图标41至60---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-57
 * @parent ---角色图标41至60---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-58
 * @parent ---角色图标41至60---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-59
 * @parent ---角色图标41至60---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 角色图标-60
 * @parent ---角色图标41至60---
 * @desc 角色图标的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param ----敌人图标----
 * @default 
 *
 * @param ---敌人图标 1至20---
 * @parent ----敌人图标----
 * @default 
 *
 * @param 敌人图标-1
 * @parent ---敌人图标 1至20---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-2
 * @parent ---敌人图标 1至20---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-3
 * @parent ---敌人图标 1至20---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-4
 * @parent ---敌人图标 1至20---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-5
 * @parent ---敌人图标 1至20---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-6
 * @parent ---敌人图标 1至20---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-7
 * @parent ---敌人图标 1至20---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-8
 * @parent ---敌人图标 1至20---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-9
 * @parent ---敌人图标 1至20---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-10
 * @parent ---敌人图标 1至20---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-11
 * @parent ---敌人图标 1至20---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-12
 * @parent ---敌人图标 1至20---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-13
 * @parent ---敌人图标 1至20---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-14
 * @parent ---敌人图标 1至20---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-15
 * @parent ---敌人图标 1至20---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-16
 * @parent ---敌人图标 1至20---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-17
 * @parent ---敌人图标 1至20---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-18
 * @parent ---敌人图标 1至20---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-19
 * @parent ---敌人图标 1至20---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-20
 * @parent ---敌人图标 1至20---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 * 
 * @param ---敌人图标21至40---
 * @parent ----敌人图标----
 * @default 
 *
 * @param 敌人图标-21
 * @parent ---敌人图标21至40---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-22
 * @parent ---敌人图标21至40---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-23
 * @parent ---敌人图标21至40---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-24
 * @parent ---敌人图标21至40---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-25
 * @parent ---敌人图标21至40---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-26
 * @parent ---敌人图标21至40---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-27
 * @parent ---敌人图标21至40---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-28
 * @parent ---敌人图标21至40---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-29
 * @parent ---敌人图标21至40---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-30
 * @parent ---敌人图标21至40---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-31
 * @parent ---敌人图标21至40---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-32
 * @parent ---敌人图标21至40---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-33
 * @parent ---敌人图标21至40---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-34
 * @parent ---敌人图标21至40---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-35
 * @parent ---敌人图标21至40---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-36
 * @parent ---敌人图标21至40---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-37
 * @parent ---敌人图标21至40---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-38
 * @parent ---敌人图标21至40---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-39
 * @parent ---敌人图标21至40---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-40
 * @parent ---敌人图标21至40---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 * 
 * @param ---敌人图标41至60---
 * @parent ----敌人图标----
 * @default 
 *
 * @param 敌人图标-41
 * @parent ---敌人图标41至60---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-42
 * @parent ---敌人图标41至60---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-43
 * @parent ---敌人图标41至60---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-44
 * @parent ---敌人图标41至60---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-45
 * @parent ---敌人图标41至60---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-46
 * @parent ---敌人图标41至60---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-47
 * @parent ---敌人图标41至60---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-48
 * @parent ---敌人图标41至60---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-49
 * @parent ---敌人图标41至60---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-50
 * @parent ---敌人图标41至60---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-51
 * @parent ---敌人图标41至60---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-52
 * @parent ---敌人图标41至60---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-53
 * @parent ---敌人图标41至60---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-54
 * @parent ---敌人图标41至60---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-55
 * @parent ---敌人图标41至60---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-56
 * @parent ---敌人图标41至60---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-57
 * @parent ---敌人图标41至60---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-58
 * @parent ---敌人图标41至60---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-59
 * @parent ---敌人图标41至60---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-60
 * @parent ---敌人图标41至60---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 * 
 * @param ---敌人图标61至80---
 * @parent ----敌人图标----
 * @default 
 *
 * @param 敌人图标-61
 * @parent ---敌人图标61至80---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-62
 * @parent ---敌人图标61至80---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-63
 * @parent ---敌人图标61至80---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-64
 * @parent ---敌人图标61至80---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-65
 * @parent ---敌人图标61至80---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-66
 * @parent ---敌人图标61至80---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-67
 * @parent ---敌人图标61至80---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-68
 * @parent ---敌人图标61至80---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-69
 * @parent ---敌人图标61至80---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-70
 * @parent ---敌人图标61至80---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-71
 * @parent ---敌人图标61至80---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-72
 * @parent ---敌人图标61至80---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-73
 * @parent ---敌人图标61至80---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-74
 * @parent ---敌人图标61至80---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-75
 * @parent ---敌人图标61至80---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-76
 * @parent ---敌人图标61至80---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-77
 * @parent ---敌人图标61至80---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-78
 * @parent ---敌人图标61至80---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-79
 * @parent ---敌人图标61至80---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-80
 * @parent ---敌人图标61至80---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 * 
 * @param ---敌人图标81至100---
 * @parent ----敌人图标----
 * @default 
 *
 * @param 敌人图标-81
 * @parent ---敌人图标81至100---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-82
 * @parent ---敌人图标81至100---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-83
 * @parent ---敌人图标81至100---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-84
 * @parent ---敌人图标81至100---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-85
 * @parent ---敌人图标81至100---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-86
 * @parent ---敌人图标81至100---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-87
 * @parent ---敌人图标81至100---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-88
 * @parent ---敌人图标81至100---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-89
 * @parent ---敌人图标81至100---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-90
 * @parent ---敌人图标81至100---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-91
 * @parent ---敌人图标81至100---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-92
 * @parent ---敌人图标81至100---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-93
 * @parent ---敌人图标81至100---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-94
 * @parent ---敌人图标81至100---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-95
 * @parent ---敌人图标81至100---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-96
 * @parent ---敌人图标81至100---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-97
 * @parent ---敌人图标81至100---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-98
 * @parent ---敌人图标81至100---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-99
 * @parent ---敌人图标81至100---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-100
 * @parent ---敌人图标81至100---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param ---敌人图标101至120---
 * @parent ----敌人图标----
 * @default 
 *
 * @param 敌人图标-101
 * @parent ---敌人图标101至120---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-102
 * @parent ---敌人图标101至120---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-103
 * @parent ---敌人图标101至120---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-104
 * @parent ---敌人图标101至120---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-105
 * @parent ---敌人图标101至120---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-106
 * @parent ---敌人图标101至120---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-107
 * @parent ---敌人图标101至120---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-108
 * @parent ---敌人图标101至120---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-109
 * @parent ---敌人图标101至120---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-110
 * @parent ---敌人图标101至120---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-111
 * @parent ---敌人图标101至120---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-112
 * @parent ---敌人图标101至120---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-113
 * @parent ---敌人图标101至120---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-114
 * @parent ---敌人图标101至120---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-115
 * @parent ---敌人图标101至120---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-116
 * @parent ---敌人图标101至120---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-117
 * @parent ---敌人图标101至120---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-118
 * @parent ---敌人图标101至120---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-119
 * @parent ---敌人图标101至120---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-120
 * @parent ---敌人图标101至120---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 * 
 * @param ---敌人图标121至140---
 * @parent ----敌人图标----
 * @default 
 *
 * @param 敌人图标-121
 * @parent ---敌人图标121至140---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-122
 * @parent ---敌人图标121至140---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-123
 * @parent ---敌人图标121至140---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-124
 * @parent ---敌人图标121至140---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-125
 * @parent ---敌人图标121至140---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-126
 * @parent ---敌人图标121至140---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-127
 * @parent ---敌人图标121至140---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-128
 * @parent ---敌人图标121至140---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-129
 * @parent ---敌人图标121至140---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-130
 * @parent ---敌人图标121至140---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-131
 * @parent ---敌人图标121至140---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-132
 * @parent ---敌人图标121至140---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-133
 * @parent ---敌人图标121至140---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-134
 * @parent ---敌人图标121至140---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-135
 * @parent ---敌人图标121至140---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-136
 * @parent ---敌人图标121至140---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-137
 * @parent ---敌人图标121至140---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-138
 * @parent ---敌人图标121至140---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-139
 * @parent ---敌人图标121至140---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-140
 * @parent ---敌人图标121至140---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 * 
 * @param ---敌人图标141至160---
 * @parent ----敌人图标----
 * @default 
 *
 * @param 敌人图标-141
 * @parent ---敌人图标141至160---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-142
 * @parent ---敌人图标141至160---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-143
 * @parent ---敌人图标141至160---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-144
 * @parent ---敌人图标141至160---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-145
 * @parent ---敌人图标141至160---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-146
 * @parent ---敌人图标141至160---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-147
 * @parent ---敌人图标141至160---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-148
 * @parent ---敌人图标141至160---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-149
 * @parent ---敌人图标141至160---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-150
 * @parent ---敌人图标141至160---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-151
 * @parent ---敌人图标141至160---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-152
 * @parent ---敌人图标141至160---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-153
 * @parent ---敌人图标141至160---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-154
 * @parent ---敌人图标141至160---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-155
 * @parent ---敌人图标141至160---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-156
 * @parent ---敌人图标141至160---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-157
 * @parent ---敌人图标141至160---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-158
 * @parent ---敌人图标141至160---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-159
 * @parent ---敌人图标141至160---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-160
 * @parent ---敌人图标141至160---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 * 
 * @param ---敌人图标161至180---
 * @parent ----敌人图标----
 * @default 
 *
 * @param 敌人图标-161
 * @parent ---敌人图标161至180---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-162
 * @parent ---敌人图标161至180---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-163
 * @parent ---敌人图标161至180---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-164
 * @parent ---敌人图标161至180---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-165
 * @parent ---敌人图标161至180---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-166
 * @parent ---敌人图标161至180---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-167
 * @parent ---敌人图标161至180---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-168
 * @parent ---敌人图标161至180---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-169
 * @parent ---敌人图标161至180---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-170
 * @parent ---敌人图标161至180---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-171
 * @parent ---敌人图标161至180---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-172
 * @parent ---敌人图标161至180---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-173
 * @parent ---敌人图标161至180---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-174
 * @parent ---敌人图标161至180---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-175
 * @parent ---敌人图标161至180---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-176
 * @parent ---敌人图标161至180---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-177
 * @parent ---敌人图标161至180---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-178
 * @parent ---敌人图标161至180---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-179
 * @parent ---敌人图标161至180---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-180
 * @parent ---敌人图标161至180---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 * 
 * @param ---敌人图标181至200---
 * @parent ----敌人图标----
 * @default 
 *
 * @param 敌人图标-181
 * @parent ---敌人图标181至200---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-182
 * @parent ---敌人图标181至200---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-183
 * @parent ---敌人图标181至200---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-184
 * @parent ---敌人图标181至200---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-185
 * @parent ---敌人图标181至200---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-186
 * @parent ---敌人图标181至200---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-187
 * @parent ---敌人图标181至200---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-188
 * @parent ---敌人图标181至200---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-189
 * @parent ---敌人图标181至200---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-190
 * @parent ---敌人图标181至200---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-191
 * @parent ---敌人图标181至200---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-192
 * @parent ---敌人图标181至200---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-193
 * @parent ---敌人图标181至200---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-194
 * @parent ---敌人图标181至200---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-195
 * @parent ---敌人图标181至200---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-196
 * @parent ---敌人图标181至200---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-197
 * @parent ---敌人图标181至200---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-198
 * @parent ---敌人图标181至200---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-199
 * @parent ---敌人图标181至200---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @param 敌人图标-200
 * @parent ---敌人图标181至200---
 * @desc 敌人图标的图片资源。与敌人编号对应。
 * @default 
 * @require 1
 * @dir img/Battle__atb/
 * @type file
 *
 * @help  
 * =============================================================================
 * +++ MOG - ATB Gauge (v1.0) +++
 * By Moghunter 
 * https://mogplugins.wordpress.com/
 * =============================================================================
 * 将即时战斗模式的进度形式以图片框的形式展现出来。
 * 【现已支持插件关联资源的打包、加密】
 * ★★必须与MOG_ATB即时战斗模式插件配合使用，并放在其插件的后面★★
 *
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.插件的作用域：战斗界面。
 *   放置在战斗的ui层。
 * 
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 资源路径：img/Battle__atb （Battle后面有两个下划线）
 * 先确保项目img文件夹下是否有Battle__atb文件夹！
 * 要查看所有关联资源文件的插件，可以去看看"插件清单.xlsx"。
 * 如果没有，需要自己建立。需要配置资源文件：
 *
 * 资源-固定框
 * 资源-角色默认图标
 * 资源-敌人默认图标
 *
 * 角色图标-1 （编号与角色编号对应）
 * 角色图标-2
 * 角色图标-3
 * ……
 *
 * 敌人图标-1 （编号与敌人编号对应）
 * 敌人图标-2
 * 敌人图标-3
 * ……
 *
 * -----------------------------------------------------------------------------
 * ----关于Drill_up优化：
 * [v1.1]
 * 使得该插件支持关联资源的打包、加密。
 * 部署时勾选去除无关文件，本插件中相关的文件不会被去除。
 * [v1.2]
 * 修改了插件关联的资源文件夹。
 * [v1.3]
 * 添加了最大值编辑的支持。
 *
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_ATB_Gauge = true;
　　var Moghunter = Moghunter || {}; 	

	Moghunter.parameters = PluginManager.parameters('MOG_ATB_Gauge');
	Moghunter.atbIconAngle = Number(Moghunter.parameters['固定框角度'] || 0);
	Moghunter.atbIcon_GaugeX = Number(Moghunter.parameters['平移-固定框 X'] || 740);
	Moghunter.atbIcon_GaugeY = Number(Moghunter.parameters['平移-固定框 Y'] || 45); 
	Moghunter.atbIcon_enemyX = Number(Moghunter.parameters['敌人图标偏移量'] || 16);
	Moghunter.atbIcon_actorX = Number(Moghunter.parameters['角色图标偏移量'] || -16);
	Moghunter.atbIcon_inTurnX = Number(Moghunter.parameters['平移-施法点 X'] || -3);
	Moghunter.atbIcon_inTurnY = Number(Moghunter.parameters['平移-施法点 Y'] || 30);	
    Moghunter.atbIcon_GaugeSize = Number(Moghunter.parameters['固定框长度'] || 160);
	Moghunter.atbIcon_SkillVisible = String(Moghunter.parameters['是否显示技能图标'] || 'true');
    Moghunter.atbIcon_SkillScale = Number(Moghunter.parameters['技能图标缩放比例'] || 0.6);
	Moghunter.atbIcon_SkillX = Number(Moghunter.parameters['平移-技能图标 X'] || 0);
	Moghunter.atbIcon_SkillY = Number(Moghunter.parameters['平移-技能图标 Y'] || 0);
	
	Moghunter.src_atb_Gauge = String(Moghunter.parameters['资源-固定框']);
	Moghunter.src_atb_actor_default = String(Moghunter.parameters['资源-角色默认图标']);
	Moghunter.src_atb_enemy_default = String(Moghunter.parameters['资源-敌人默认图标']);
	
	Moghunter.src_atb_actor_icon_list_length = 60;
	Moghunter.src_atb_actor_icon_list = {};
	for (var i = 1; i <= Moghunter.src_atb_actor_icon_list_length ; i++ ) {
		Moghunter.src_atb_actor_icon_list[i] = String(Moghunter.parameters['角色图标-' + String(i) ]);
	};
	
	Moghunter.src_atb_enemy_icon_list_length = 200;
	Moghunter.src_atb_enemy_icon_list = {};
	for (var i = 1; i <= Moghunter.src_atb_enemy_icon_list_length ; i++ ) {
		Moghunter.src_atb_enemy_icon_list[i] = String(Moghunter.parameters['敌人图标-' + String(i) ]);
	};
	
//==============================
// * load ATB Icon
//==============================
ImageManager.loadATBIcon = function(filename) {
	return this.loadBitmap('img/Battle__atb/', filename, 0, true);
};	

//=============================================================================
// ** Game Temp
//=============================================================================

//==============================
// * Initialize
//==============================
var _mog_atb_gTemp_initialize = Game_Temp.prototype.initialize
Game_Temp.prototype.initialize = function() {
	_mog_atb_gTemp_initialize.call(this);
	this._refreshATBGauge = false;;
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
// ** Scene Battle
//=============================================================================

//==============================
// ** create Spriteset
//==============================
var _mog_atbGauge_sbattle_createSpriteset = Scene_Battle.prototype.createSpriteset;
Scene_Battle.prototype.createSpriteset = function() {
	_mog_atbGauge_sbattle_createSpriteset.call(this);
	if( Imported.MOG_ATB ){
		if (!this._hudField) {this.createHudField()};
		this.createATBGauge();
		this.sortMz();	
	}
};

//==============================
// ** create ATB Gauge
//==============================
Scene_Battle.prototype.createATBGauge = function() {
	this._atbGauge = new ATB_Gauge()
    this._atbGauge.mz = 125;
	this._hudField.addChild(this._atbGauge);
};

//==============================
// ** remove ATB Gauge
//==============================
Scene_Battle.prototype.removeATBGauge = function() {
	if (!this._atbGauge) {return};
	this._hudField.removeChild(this._atbGauge);
};

//==============================
// ** refresh ATB Gauge
//==============================
Scene_Battle.prototype.refreshATBGauge = function() {
	 $gameTemp._refreshATBGauge = false;
	 this.removeATBGauge();
	 this.createATBGauge();
};

//==============================
// ** Update
//==============================
var _mog_atbGauge_Sbat_update = Scene_Battle.prototype.update;
Scene_Battle.prototype.update = function() {
	_mog_atbGauge_Sbat_update.call(this);
	if( Imported.MOG_ATB ){
		if ($gameTemp._refreshATBGauge) {this.refreshATBGauge()};
	}
};

//=============================================================================
// ** Spriteset Map
//=============================================================================

//=============================================================================
// ** ATB Icon Gauge
//=============================================================================
function ATB_Gauge() {
    this.initialize.apply(this, arguments);
};

ATB_Gauge.prototype = Object.create(Sprite.prototype);
ATB_Gauge.prototype.constructor = ATB_Gauge;

//==============================
// * Initialize
//==============================
ATB_Gauge.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);
	this._angle = Moghunter.atbIconAngle * Math.PI / 180;
	this.rotation = this._angle;	
	this._iconImg = ImageManager.loadSystem("IconSet");
	this._skillIcon = String(Moghunter.atbIcon_SkillVisible) == "true" ? true : false;
	this.refreshBattlers();
	this.createLayout();
	this.createIcons();
};

//==============================
// * refresh Battlers
//==============================
ATB_Gauge.prototype.refreshBattlers = function() {
	this._battlers = [];
	for (var i = 0; i < $gameParty.battleMembers().length; i++) {
		 var battler = $gameParty.battleMembers()[i];
		 this._battlers.push(battler);
	};		
	for (var i = 0; i < $gameTroop.members().length; i++) {
		 var battler = $gameTroop.members()[i];
		 this._battlers.push(battler);
	};
};

//==============================
// * battlers
//==============================
ATB_Gauge.prototype.battlers = function() {
    if (this._battlers) {return this._battlers};
	return [];
};

//==============================
// * At
//==============================
ATB_Gauge.prototype.atb = function(battler) {
	if (Imported.MOG_ATB) {return battler.atb()};
	return -1;	
}

//==============================
// * Maxatb
//==============================
ATB_Gauge.prototype.maxatb = function(battler) {
    if (Imported.MOG_ATB) {return battler.maxAtb()};
    return 1;	
};

//==============================
// * Cast AT
//==============================
ATB_Gauge.prototype.cast_at = function(battler) {
    if (Imported.MOG_ATB) {return battler._cast_atb[1]};
	return 0;	
};

//==============================
// * Cast Max AT
//==============================
ATB_Gauge.prototype.cast_max_at = function(battler) {
    if (Imported.MOG_ATB) {return battler._cast_atb[2]};
    return 1;	
};

//==============================
// * Is Casting
//==============================
ATB_Gauge.prototype.is_casting = function(battler) {
    if (!battler) {return false};
    if (Imported.MOG_ATB) {return battler.isCasting()};
    return false;	
};

//==============================
// * Is Max Atb
//==============================
ATB_Gauge.prototype.inTurn = function(battler) {
	 if (!battler.isMaxAtb()) {return false};
     if (!battler._intTurn) {return false}
	 return true;
};

//==============================
// * Is Max Atb
//==============================
ATB_Gauge.prototype.is_max_at = function(battler) {
	return this.atb(battler) >= this.maxatb(battler);
};

//==============================
// * Is Max Cast
//==============================
ATB_Gauge.prototype.is_max_cast = function(battler) {
	return this.cast_at(battler) >= this.cast_max_at(battler);
};

//==============================
// * Item
//==============================
ATB_Gauge.prototype.item = function(battler) {
	if (!battler) {return null};
	return battler._cast_atb[0];
	return null
};

//==============================
// * Create Layout
//==============================
ATB_Gauge.prototype.createLayout = function() {
	this.x = Moghunter.atbIcon_GaugeX;
	this.y = Moghunter.atbIcon_GaugeY;	
    this._layout = new Sprite(ImageManager.loadATBIcon(Moghunter.src_atb_Gauge));
	this._layout.anchor.x = 0.5;
	this.addChild(this._layout);
};

//==============================
// * Create Icons
//==============================
ATB_Gauge.prototype.createIcons = function() {
	this._iconField = new Sprite();
	this.addChild(this._iconField);
    this._icons = [];
	this._skillIcons = [];
	for (var i = 0; i < this.battlers().length; i++) {
		 var battler = this.battlers()[i];
		 var name = "";
		 if (battler.isActor()) {
			 name = Moghunter.src_atb_actor_icon_list[battler._actorId];
			 if( name == "" ){
				 name = Moghunter.src_atb_actor_default;
			 }
		 } else {
			 name = Moghunter.src_atb_enemy_icon_list[battler._enemyId];
			 if( name == "" ){
				 name = Moghunter.src_atb_enemy_default;
			 }
		 };
		 this._icons[i] = new Sprite(ImageManager.loadATBIcon(name));
		 this._icons[i].battler = battler;
		 this._icons[i].anchor.x = 0.5;
		 this._icons[i].anchor.y = 0.5;
		 this._icons[i].opacity = 0
		 this._icons[i].nx = 0;
		 this._icons[i].ny = 0;
		 this._icons[i].rotation = -this._angle
		 this._iconField.addChild(this._icons[i]);
		 if (this._skillIcon) {this.createSkillIcon(i,this._icons[i])};
	};	
};

//==============================
// * Index
//==============================
ATB_Gauge.prototype.createSkillIcon = function(i,sprite) {
	this._skillIcons[i] = new Sprite();
	this._skillIcons[i].item = null;
	this._skillIcons[i].org = [Moghunter.atbIcon_SkillX,Moghunter.atbIcon_SkillY];
	this._skillIcons[i].scale.x = Moghunter.atbIcon_SkillScale;
	this._skillIcons[i].scale.y = Moghunter.atbIcon_SkillScale;
	this._skillIcons[i].rotation = this._icons[i].rotation;
	sprite.addChild(this._skillIcons[i]);
};

//==============================
// * Height EX
//==============================
ATB_Gauge.prototype.heightEX = function(battler,type) {
	return 1;
};

//==============================
// * update Icon
//==============================
ATB_Gauge.prototype.updateIcon = function(sprite,index) {
     var battler = sprite.battler;	 
	 if (battler.isDead()) {
		 sprite.opacity -= 15;
	 } else {
		 sprite.opacity += 15;
		 if (this.is_casting(battler)) {
			 var h = Moghunter.atbIcon_GaugeSize * this.cast_at(battler) / this.cast_max_at(battler);
			 var h2 = this.heightEX(battler,1);
		 } else {
			 var h = Moghunter.atbIcon_GaugeSize * this.atb(battler) / this.maxatb(battler);
			 var h2 = this.heightEX(battler,0);
		 };
		 if (this.inTurn(battler)) {
			 sprite.nx = Moghunter.atbIcon_inTurnX;
	         sprite.ny = Moghunter.atbIcon_inTurnY;		
		 } else {
			 sprite.nx = battler.isActor() ? Moghunter.atbIcon_actorX : Moghunter.atbIcon_enemyX;
	         sprite.ny = this._layout.height - h + h2;	 
		 };
	 };
	 sprite.x = this.mvto(sprite.x,sprite.nx);
	 sprite.y = this.mvto(sprite.y,sprite.ny);
     if (this._skillIcon) {this.updateSkillIcon(this._skillIcons[index],sprite,battler)};
};

//==============================
// * updateSkillIcon
//==============================
ATB_Gauge.prototype.updateSkillIcon = function(spriteskill,spriteicon,battler) {
	spriteskill.x = spriteskill.org[0];
	spriteskill.y = spriteskill.org[1];
	spriteskill.opacity = spriteicon.opacity;
	spriteskill.visible = spriteicon.visible;
	if (spriteskill.item != this.item(battler)) {this.refreshIconSkill(spriteskill,battler)};
};

//==============================
// * refresh Icon Skill
//==============================
ATB_Gauge.prototype.refreshIconSkill = function(spriteskill,battler) {
	spriteskill.item = this.item(battler);
	if (spriteskill.item) {
		var iconIndex = spriteskill.item.iconIndex;		
		var pw = Window_Base._iconWidth;
		var ph = Window_Base._iconHeight;
		var sx = iconIndex % 16 * pw;
		var sy = Math.floor(iconIndex / 16) * ph;
		spriteskill.bitmap = this._iconImg;
        spriteskill.setFrame(sx, sy, pw, ph);
	} else {
	    spriteskill.bitmap = null;
	};	
	spriteskill.visible = spriteskill.item != null ? true : false;
};

//==============================
// * mv to
//==============================
ATB_Gauge.prototype.mvto = function(value,real_value) {
	if (value == real_value) {return value};
	var dnspeed = 5 + (Math.abs(value - real_value) / 10);
	if (value > real_value) {value -= dnspeed;
	    if (value < real_value) {value = real_value};}
    else if (value < real_value) {value  += dnspeed;
    	if (value  > real_value) {value  = real_value};		
    };
	return Math.floor(value);
};

//==============================
// * need Fade
//==============================
ATB_Gauge.prototype.needFade = function() {
	if ($gameMessage.isBusy()) {return true};
	if ($gameTemp._battleEnd) {return true};
	if ($gameTemp._atbBattleEnd) {return true};
	return false;
};

//==============================
// * Update Visible
//==============================
ATB_Gauge.prototype.updateVisible = function() {
    if (this.needFade()) {
		this.opacity -= 10;
	} else {
		this.opacity += 10;
	};
};


//==============================
// * update Sort Y
//==============================
ATB_Gauge.prototype.updateSortY = function() {
     this._iconField.children.sort(function(b, a){return a.y-b.y})
};

//==============================
// * update
//==============================
ATB_Gauge.prototype.update = function() {
    Sprite.prototype.update.call(this);
	this.updateVisible();
	this.updateSortY();
    for (var i = 0; i < this._icons.length; i++) {
		 this.updateIcon(this._icons[i],i);
	};
};