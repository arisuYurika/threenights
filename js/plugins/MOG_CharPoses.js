//=============================================================================
// MOG_CharPoses.js
//=============================================================================

/*:
 * @plugindesc (v2.1)[v1.3]  行走图 - 角色姿势
 * @author Moghunter （Drill_up翻译+优化）
 * 
 * @Drill_LE_param "角色站立-%d"
 * @Drill_LE_parentKey "---角色站立组%d至%d---"
 * @Drill_LE_var "Moghunter.charPoses_stand_list_length"
 * 
 * @Drill_LE_param "角色奔跑-%d"
 * @Drill_LE_parentKey "---角色奔跑组%d至%d---"
 * @Drill_LE_var "Moghunter.charPoses_run_list_length"
 * 
 * @Drill_LE_param "角色跳跃-%d"
 * @Drill_LE_parentKey "---角色跳跃组%d至%d---"
 * @Drill_LE_var "Moghunter.charPoses_jump_list_length"
 * 
 *
 * @param 跟随角色是否开启姿势
 * @type boolean
 * @on 开启
 * @off 关闭
 * @desc true - 开启，false - 关闭
 * @default true
 *
 * @param 是否开启奔跑姿势
 * @type boolean
 * @on 开启
 * @off 关闭
 * @desc true - 开启，false - 关闭
 * @default true
 *
 * @param 是否开启跳跃姿势
 * @type boolean
 * @on 开启
 * @off 关闭
 * @desc true - 开启，false - 关闭
 * @default true
 *
 * @param 是否开启站立姿势
 * @type boolean
 * @on 开启
 * @off 关闭
 * @desc true - 开启，false - 关闭
 * @default true
 *
 * @param 站立姿势触发时长
 * @type number
 * @min 1
 * @desc 角色不做任何操作时，等待一段时间后触发站立姿势，单位帧。（1秒60帧）
 * @default 60
 *
 * @param ---角色站立组 1至20---
 * @default 
 *
 * @param 角色站立-1
 * @parent ---角色站立组 1至20---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-2
 * @parent ---角色站立组 1至20---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-3
 * @parent ---角色站立组 1至20---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-4
 * @parent ---角色站立组 1至20---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-5
 * @parent ---角色站立组 1至20---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-6
 * @parent ---角色站立组 1至20---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-7
 * @parent ---角色站立组 1至20---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-8
 * @parent ---角色站立组 1至20---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-9
 * @parent ---角色站立组 1至20---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-10
 * @parent ---角色站立组 1至20---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-11
 * @parent ---角色站立组 1至20---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-12
 * @parent ---角色站立组 1至20---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-13
 * @parent ---角色站立组 1至20---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-14
 * @parent ---角色站立组 1至20---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-15
 * @parent ---角色站立组 1至20---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-16
 * @parent ---角色站立组 1至20---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-17
 * @parent ---角色站立组 1至20---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-18
 * @parent ---角色站立组 1至20---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-19
 * @parent ---角色站立组 1至20---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-20
 * @parent ---角色站立组 1至20---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param ---角色站立组21至40---
 * @default 
 *
 * @param 角色站立-21
 * @parent ---角色站立组21至40---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-22
 * @parent ---角色站立组21至40---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-23
 * @parent ---角色站立组21至40---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-24
 * @parent ---角色站立组21至40---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-25
 * @parent ---角色站立组21至40---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-26
 * @parent ---角色站立组21至40---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-27
 * @parent ---角色站立组21至40---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-28
 * @parent ---角色站立组21至40---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-29
 * @parent ---角色站立组21至40---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-30
 * @parent ---角色站立组21至40---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-31
 * @parent ---角色站立组21至40---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-32
 * @parent ---角色站立组21至40---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-33
 * @parent ---角色站立组21至40---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-34
 * @parent ---角色站立组21至40---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-35
 * @parent ---角色站立组21至40---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-36
 * @parent ---角色站立组21至40---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-37
 * @parent ---角色站立组21至40---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-38
 * @parent ---角色站立组21至40---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-39
 * @parent ---角色站立组21至40---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-40
 * @parent ---角色站立组21至40---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param ---角色站立组41至60---
 * @default 
 *
 * @param 角色站立-41
 * @parent ---角色站立组41至60---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-42
 * @parent ---角色站立组41至60---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-43
 * @parent ---角色站立组41至60---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-44
 * @parent ---角色站立组41至60---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-45
 * @parent ---角色站立组41至60---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-46
 * @parent ---角色站立组41至60---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-47
 * @parent ---角色站立组41至60---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-48
 * @parent ---角色站立组41至60---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-49
 * @parent ---角色站立组41至60---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-50
 * @parent ---角色站立组41至60---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-51
 * @parent ---角色站立组41至60---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-52
 * @parent ---角色站立组41至60---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-53
 * @parent ---角色站立组41至60---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-54
 * @parent ---角色站立组41至60---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-55
 * @parent ---角色站立组41至60---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-56
 * @parent ---角色站立组41至60---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-57
 * @parent ---角色站立组41至60---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-58
 * @parent ---角色站立组41至60---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-59
 * @parent ---角色站立组41至60---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色站立-60
 * @parent ---角色站立组41至60---
 * @desc 角色站立姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param ---角色奔跑组 1至20---
 * @default 
 *
 * @param 角色奔跑-1
 * @parent ---角色奔跑组 1至20---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-2
 * @parent ---角色奔跑组 1至20---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-3
 * @parent ---角色奔跑组 1至20---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-4
 * @parent ---角色奔跑组 1至20---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-5
 * @parent ---角色奔跑组 1至20---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-6
 * @parent ---角色奔跑组 1至20---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-7
 * @parent ---角色奔跑组 1至20---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-8
 * @parent ---角色奔跑组 1至20---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-9
 * @parent ---角色奔跑组 1至20---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-10
 * @parent ---角色奔跑组 1至20---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-11
 * @parent ---角色奔跑组 1至20---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-12
 * @parent ---角色奔跑组 1至20---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-13
 * @parent ---角色奔跑组 1至20---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-14
 * @parent ---角色奔跑组 1至20---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-15
 * @parent ---角色奔跑组 1至20---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-16
 * @parent ---角色奔跑组 1至20---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-17
 * @parent ---角色奔跑组 1至20---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-18
 * @parent ---角色奔跑组 1至20---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-19
 * @parent ---角色奔跑组 1至20---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-20
 * @parent ---角色奔跑组 1至20---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param ---角色奔跑组21至40---
 * @default 
 *
 * @param 角色奔跑-21
 * @parent ---角色奔跑组21至40---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-22
 * @parent ---角色奔跑组21至40---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-23
 * @parent ---角色奔跑组21至40---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-24
 * @parent ---角色奔跑组21至40---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-25
 * @parent ---角色奔跑组21至40---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-26
 * @parent ---角色奔跑组21至40---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-27
 * @parent ---角色奔跑组21至40---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-28
 * @parent ---角色奔跑组21至40---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-29
 * @parent ---角色奔跑组21至40---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-30
 * @parent ---角色奔跑组21至40---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-31
 * @parent ---角色奔跑组21至40---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-32
 * @parent ---角色奔跑组21至40---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-33
 * @parent ---角色奔跑组21至40---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-34
 * @parent ---角色奔跑组21至40---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-35
 * @parent ---角色奔跑组21至40---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-36
 * @parent ---角色奔跑组21至40---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-37
 * @parent ---角色奔跑组21至40---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-38
 * @parent ---角色奔跑组21至40---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-39
 * @parent ---角色奔跑组21至40---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-40
 * @parent ---角色奔跑组21至40---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param ---角色奔跑组41至60---
 * @default 
 *
 * @param 角色奔跑-41
 * @parent ---角色奔跑组41至60---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-42
 * @parent ---角色奔跑组41至60---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-43
 * @parent ---角色奔跑组41至60---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-44
 * @parent ---角色奔跑组41至60---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-45
 * @parent ---角色奔跑组41至60---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-46
 * @parent ---角色奔跑组41至60---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-47
 * @parent ---角色奔跑组41至60---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-48
 * @parent ---角色奔跑组41至60---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-49
 * @parent ---角色奔跑组41至60---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-50
 * @parent ---角色奔跑组41至60---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-51
 * @parent ---角色奔跑组41至60---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-52
 * @parent ---角色奔跑组41至60---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-53
 * @parent ---角色奔跑组41至60---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-54
 * @parent ---角色奔跑组41至60---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-55
 * @parent ---角色奔跑组41至60---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-56
 * @parent ---角色奔跑组41至60---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-57
 * @parent ---角色奔跑组41至60---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-58
 * @parent ---角色奔跑组41至60---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-59
 * @parent ---角色奔跑组41至60---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色奔跑-60
 * @parent ---角色奔跑组41至60---
 * @desc 角色奔跑姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param ---角色跳跃组 1至20---
 * @default 
 *
 * @param 角色跳跃-1
 * @parent ---角色跳跃组 1至20---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-2
 * @parent ---角色跳跃组 1至20---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-3
 * @parent ---角色跳跃组 1至20---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-4
 * @parent ---角色跳跃组 1至20---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-5
 * @parent ---角色跳跃组 1至20---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-6
 * @parent ---角色跳跃组 1至20---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-7
 * @parent ---角色跳跃组 1至20---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-8
 * @parent ---角色跳跃组 1至20---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-9
 * @parent ---角色跳跃组 1至20---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-10
 * @parent ---角色跳跃组 1至20---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-11
 * @parent ---角色跳跃组 1至20---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-12
 * @parent ---角色跳跃组 1至20---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-13
 * @parent ---角色跳跃组 1至20---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-14
 * @parent ---角色跳跃组 1至20---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-15
 * @parent ---角色跳跃组 1至20---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-16
 * @parent ---角色跳跃组 1至20---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-17
 * @parent ---角色跳跃组 1至20---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-18
 * @parent ---角色跳跃组 1至20---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-19
 * @parent ---角色跳跃组 1至20---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-20
 * @parent ---角色跳跃组 1至20---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param ---角色跳跃组21至40---
 * @default 
 *
 * @param 角色跳跃-21
 * @parent ---角色跳跃组21至40---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-22
 * @parent ---角色跳跃组21至40---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-23
 * @parent ---角色跳跃组21至40---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-24
 * @parent ---角色跳跃组21至40---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-25
 * @parent ---角色跳跃组21至40---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-26
 * @parent ---角色跳跃组21至40---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-27
 * @parent ---角色跳跃组21至40---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-28
 * @parent ---角色跳跃组21至40---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-29
 * @parent ---角色跳跃组21至40---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-30
 * @parent ---角色跳跃组21至40---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-31
 * @parent ---角色跳跃组21至40---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-32
 * @parent ---角色跳跃组21至40---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-33
 * @parent ---角色跳跃组21至40---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-34
 * @parent ---角色跳跃组21至40---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-35
 * @parent ---角色跳跃组21至40---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-36
 * @parent ---角色跳跃组21至40---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-37
 * @parent ---角色跳跃组21至40---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-38
 * @parent ---角色跳跃组21至40---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-39
 * @parent ---角色跳跃组21至40---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-40
 * @parent ---角色跳跃组21至40---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param ---角色跳跃组41至60---
 * @default 
 *
 * @param 角色跳跃-41
 * @parent ---角色跳跃组41至60---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-42
 * @parent ---角色跳跃组41至60---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-43
 * @parent ---角色跳跃组41至60---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-44
 * @parent ---角色跳跃组41至60---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-45
 * @parent ---角色跳跃组41至60---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-46
 * @parent ---角色跳跃组41至60---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-47
 * @parent ---角色跳跃组41至60---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-48
 * @parent ---角色跳跃组41至60---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-49
 * @parent ---角色跳跃组41至60---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-50
 * @parent ---角色跳跃组41至60---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-51
 * @parent ---角色跳跃组41至60---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-52
 * @parent ---角色跳跃组41至60---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-53
 * @parent ---角色跳跃组41至60---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-54
 * @parent ---角色跳跃组41至60---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-55
 * @parent ---角色跳跃组41至60---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-56
 * @parent ---角色跳跃组41至60---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-57
 * @parent ---角色跳跃组41至60---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-58
 * @parent ---角色跳跃组41至60---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-59
 * @parent ---角色跳跃组41至60---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param 角色跳跃-60
 * @parent ---角色跳跃组41至60---
 * @desc 角色跳跃姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @help  
 * =============================================================================
 * +++ MOG - Character Poses (v2.1) +++
 * By Moghunter 
 * https://mogplugins.wordpress.com/
 * =============================================================================
 * 角色在地图中，能播放跳跃、奔跑、站立状态下的动作。
 *
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.插件的作用域：地图界面。
 *   只对玩家有效。
 * 
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 资源路径：img/characters
 * 要查看所有关联资源文件的插件，可以去看看"插件清单.xlsx"。
 * 这里需要在角色组中手动配置：（img/characters文件夹）
 *
 *  角色站立-1（数字1对应角色配置中编号为1的角色）
 *  角色站立-2
 *  角色站立-3
 *  ……
 *  角色奔跑-1
 *  角色奔跑-2
 *  角色奔跑-3
 *  ……
 *  角色跳跃-1
 *  角色跳跃-2
 *  角色跳跃-3
 *  ……
 *
 * 注意，如果设置了角色站立，最好配置成静态的动作，
 * 因为默认的站立动作是行走动作。
 *
 * -----------------------------------------------------------------------------
 * ----关于Drill_up优化：
 * [v1.1]
 * 使得该插件支持关联资源的打包、加密。
 * 部署时勾选去除无关文件，本插件中相关的文件不会被去除。
 * [v1.2]
 * 修改了插件分类。
 * [v1.3]
 * 添加了最大值编辑的支持。
 *
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_CharPoses = true;
　　var Moghunter = Moghunter || {}; 

    Moghunter.parameters = PluginManager.parameters('MOG_CharPoses');
	Moghunter.charPoses_MFrames = String(Moghunter.parameters['Multi frames'] || 'true');
	Moghunter.charPoses_Player = String(Moghunter.parameters['Poses for Player'] || 'true');
	Moghunter.charPoses_Followers = String(Moghunter.parameters['跟随角色是否开启姿势'] || 'true');
	Moghunter.charPoses_DashPose = String(Moghunter.parameters['是否开启奔跑姿势'] || 'true');
	Moghunter.charPoses_JumpPose = String(Moghunter.parameters['是否开启跳跃姿势'] || 'true');
    Moghunter.charPoses_IdlePose = String(Moghunter.parameters['是否开启站立姿势'] || 'true');
    Moghunter.charPoses_IdlePoseTime = Number(Moghunter.parameters['站立姿势触发时长'] || 60);
	
	Moghunter.charPoses_stand_list_length = 60;
	Moghunter.charPoses_stand_list = {};
	for (var i = 1; i <= Moghunter.charPoses_stand_list_length ; i++ ) {
		Moghunter.charPoses_stand_list[i] = Moghunter.parameters['角色站立-' + String(i) ];
	};
	Moghunter.charPoses_run_list_length = 60;
	Moghunter.charPoses_run_list = {};
	for (var i = 1; i <= Moghunter.charPoses_run_list_length ; i++ ) {
		Moghunter.charPoses_run_list[i] = Moghunter.parameters['角色奔跑-' + String(i) ];
	};
	Moghunter.charPoses_jump_list_length = 60;
	Moghunter.charPoses_jump_list = {};
	for (var i = 1; i <= Moghunter.charPoses_jump_list_length ; i++ ) {
		Moghunter.charPoses_jump_list[i] = Moghunter.parameters['角色跳跃-' + String(i) ];
	};
	
//=============================================================================
// ** Game_Temp
//=============================================================================

//==============================
// * Initialize
//==============================
var _mog_charPoses_temp_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	_mog_charPoses_temp_initialize.call(this);
	this._chaPosesEVRunning = false;
};

//=============================================================================
// ** Game_System
//=============================================================================

//==============================
// * Initialize
//==============================
var _mog_charPoses_sys_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	_mog_charPoses_sys_initialize.call(this);
	this._chaPoses = [true,true];
	//this._chaMPoses = String(Moghunter.charPoses_MFrames) === 'true' ? true : false;
};

//=============================================================================
// ** Game_Interpreter
//=============================================================================	

//==============================
// * PluginCommand
//==============================
var _mog_charPose_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_mog_charPose_pluginCommand.call(this,command, args)
	if (command === "enable_charposes")  {
		$gameSystem._chaPoses[0] = true;
	} else if(command === "disable_charposes")  {
		$gameSystem._chaPoses[0] = false;
	};
	return true;
};

//=============================================================================
// ** Scene Map
//=============================================================================

//==============================
// * update
//==============================
var _mog_charPose_scMap_update = Scene_Map.prototype.update;
Scene_Map.prototype.update = function() {
	_mog_charPose_scMap_update.call(this);
    $gameTemp._chaPosesEVRunning = $gameMap.isEventRunning();
};

//=============================================================================
// ** Game Battler
//=============================================================================

//==============================
// * initMembers
//==============================
var _mog_charPoses_gbat_initMembers = Game_Battler.prototype.initMembers;
Game_Battler.prototype.initMembers = function() {
	_mog_charPoses_gbat_initMembers.call(this);
	this.setRealCharName();
};

//==============================
// * Set Real Char Name
//==============================
Game_Battler.prototype.setRealCharName = function() {
	if (!this._characterName) {this._characterName = ''};
	if (!this._characterIndex) {this._characterIndex = 0};
    this._originalName = {};
	this._originalName.name = this._characterName;
	this._originalName.index = this._characterIndex;
	this._originalName.refresh = false;
};

//=============================================================================
// ** Game Party
//=============================================================================

//==============================
// * add Actor
//==============================
var _mog_charPoses_gparty_addActor = Game_Party.prototype.addActor;
Game_Party.prototype.addActor = function(actorId) {
	var ref = false;
	if (!this._actors.contains(actorId)) {ref = true};
	_mog_charPoses_gparty_addActor.call(this,actorId);
	if (ref) {
		for (var i = 0; i < this.members().length; i++) {
			actor = this.members()[i];
			if (actor._actorId === actorId) {
				actor.setRealCharName();
				actor._originalName.refresh = true;
			};
		};
    };
};

//==============================
// * remove Actor
//==============================
var _mog_charPoses_gparty_removeActor = Game_Party.prototype.removeActor;
Game_Party.prototype.removeActor = function(actorId) {
    if (this._actors.contains(actorId)) {
 		for (var i = 0; i < this.members().length; i++) {
			actor = this.members()[i];
			if (actor._actorId === actorId && actor._originalName.name != "") {
			    actor._characterName = actor._originalName.name;
			};
		};       
    };
	_mog_charPoses_gparty_removeActor.call(this,actorId);
};



//=============================================================================
// ** Game Actor
//=============================================================================

//==============================
// * set Character Image
//==============================
var _mog_charPose_etCharacterImage = Game_Actor.prototype.setCharacterImage;
Game_Actor.prototype.setCharacterImage = function(characterName, characterIndex) {
    _mog_charPose_etCharacterImage.call(this,characterName, characterIndex);
    this.setRealCharName();
};

//=============================================================================
// ** Window Base
//=============================================================================

//==============================
// * draw Character
//==============================
var _mog_charPoses_drawCharacter = Window_Base.prototype.drawCharacter;
Window_Base.prototype.drawCharacter = function(characterName, characterIndex, x, y) {
	var frames = characterName.match(/(F(\d+\.*\d*))/i)
    if (frames) {this.drawCharacterPoses(characterName, characterIndex, x, y,frames[2]);return};
	_mog_charPoses_drawCharacter.call(this,characterName, characterIndex, x, y);
};

//==============================
// * draw Character Poses
//==============================
Window_Base.prototype.drawCharacterPoses = function(characterName, characterIndex, x, y,frames) {
    var bitmap = ImageManager.loadCharacter(characterName);
    var big = ImageManager.isBigCharacter(characterName);
    var pw = bitmap.width / (big ? Number(frames) : 12);
    var ph = bitmap.height / (big ? 4 : 8);
    var n = characterIndex;
    var sx = (n % 4 * 3) * pw;
    var sy = (Math.floor(n / 4) * 4) * ph;
    this.contents.blt(bitmap, sx, sy, pw, ph, x - pw / 2, y - ph);
};

//=============================================================================
// ** Game Character
//=============================================================================

//==============================
// * Initialize Members
//==============================
var _mog_charPoses_gchar_initMembers = Game_Character.prototype.initMembers;
Game_Character.prototype.initMembers = function() {
	_mog_charPoses_gchar_initMembers.call(this);
	this.clearCharacterFrames();
    this.refreshPoses();
};

//==============================
// * clear Character Frames
//==============================
Game_Character.prototype.clearCharacterFrames = function() {
	this._frames = {};
	this._frames.enabled = false;
	this._frames.x = 0;
	this._frames.y = 0;
	this._frames.max = 3;
	this._frames.speed = 0;	
	this._frames.refresh = false;
};


//==============================
// * refresh Poses
//==============================
Game_Character.prototype.refreshPoses = function() {
	this.initCharPoses();
	this.setRealCharName();
	if (this.battler()) {
		this.battler()._originalName.refresh = false
	    if (this._followers) { 
		    this._poses.enabled = String(Moghunter.charPoses_Player) === 'true' ? true : false;
		} else if (this._memberIndex != null) {
	        this._poses.enabled = String(Moghunter.charPoses_Followers) === 'true' ? true : false;
		};
	};
};

//=============================================================================
// ** Game Player
//=============================================================================

//==============================
// * init Members
//==============================
var _mog_charPoses_gplayer_initMembers = Game_Player.prototype.initMembers;
Game_Player.prototype.initMembers = function() {
	_mog_charPoses_gplayer_initMembers.call(this);
	this._poses.enabled = String(Moghunter.charPoses_Player) === 'true' ? true : false;
};

//==============================
// * Battler
//==============================	
Game_Player.prototype.battler = function() {
	if (this._user) {return this._user.battler}
    return $gameParty.leader();
};

//=============================================================================
// ** Game Follower
//=============================================================================

//==============================
// * initMembers
//==============================
var _mog_charPoses_gfollower_initMembers = Game_Follower.prototype.initMembers;
Game_Follower.prototype.initMembers = function() {
	_mog_charPoses_gfollower_initMembers.call(this);
	this._poses.enabled = String(Moghunter.charPoses_Followers) === 'true' ? true : false;
};

//==============================
// * Battler
//==============================	
Game_Follower.prototype.battler = function() {
	if (this._user) {return this._user.battler}
    return $gameParty.battleMembers()[this._memberIndex];
};

//=============================================================================
// ** Game Event
//=============================================================================

//==============================
// * init Members
//==============================
var _mog_charPoses_gevent_initMembers = Game_Event.prototype.initMembers;
Game_Event.prototype.initMembers = function() {
	_mog_charPoses_gevent_initMembers.call(this);
	this._poses.dash = [false,0];
	this._poses.jump = [false,0];	
	this._poses.idle = [false,60,60,false,null];
};

//=============================================================================
// ** Game Character Base
//=============================================================================

//==============================
// * Init Char Poses
//==============================	
Game_CharacterBase.prototype.initCharPoses = function() {
	this._poses = {};
	this._poses.enabled = false;
	this._poses.refresh = false;
	this._poses.pose = '';
	this._poses.normal = false;
	this._poses.loop = false;
	this._poses.duration = 0;
	this._poses.interpreter = false;
	this._poses.actionMode = [false,false];
	var enable = String(Moghunter.charPoses_DashPose) === 'true' ? true : false;
	this._poses.dash = [enable,0];
	var enable = String(Moghunter.charPoses_JumpPose) === 'true' ? true : false;
	this._poses.jump = [enable,0];	
	var enable = String(Moghunter.charPoses_IdlePose) === 'true' ? true : false;
	var itime = Number(Moghunter.charPoses_IdlePoseTime)
	this._poses.idle = [enable,itime,itime,false,null];
};

//==============================
// * Pose
//==============================	
Game_CharacterBase.prototype.pose = function() {
    return this._poses.pose
};

//==============================
// * Pose
//==============================	
Game_CharacterBase.prototype.battlerPoses = function() {
	if (this._tool) {return this.battler()};
    return false;
};

//==============================
// * battler
//==============================	
Game_CharacterBase.prototype.battler = function() {
    return null;
};

//==============================
// * Is Dashing Pose
//==============================	
Game_CharacterBase.prototype.isDashingPose = function() {
	if (!this._poses.dash[0]) {return false};
	if (this._memberIndex) {return this.isDashingPoseFollower()};
	if (!this.isMoving()) {return false};
    return this.isDashing();
};

//==============================
// * set Dashing Pose
//==============================	
Game_CharacterBase.prototype.setDashPose = function() {
	this._poses.dash[1] = 3;
	this._poses.idle[1] = this._poses.idle[2];
	if (this.isDiagonalDashPose()) {
	    return this.setDiagonalDashPose();
	} else {
		if( !Moghunter.charPoses_run_list[this.getActorId()]
		|| Moghunter.charPoses_run_list[this.getActorId()] == "" ){
			return this._originalName.name;
		}
		return Moghunter.charPoses_run_list[this.getActorId()];
	};
};

//==============================
// * Is Dashing Pose Follower
//==============================	
Game_CharacterBase.prototype.isDashingPoseFollower = function() {
	if (this._tool && $gameSystem.isChronoMode()) {return false};
    return $gamePlayer._poses.dash[1] > 0 ? true : false;
};

//==============================
// * Is Jumping Pose
//==============================
Game_CharacterBase.prototype.isJumpingPose = function() {
	if (!this._poses.jump[0]) {return false};
    return this.isJumping();
};

//==============================
// * Set Jump Pose
//==============================
Game_CharacterBase.prototype.setJumpPose = function() {
	this._poses.idle[1] = this._poses.idle[2];
	if (this.isDiagonalJumpPose()) {
	    return this.setDiagonalJumpPose(); 
	} else {
		if( !Moghunter.charPoses_jump_list[this.getActorId()]
		|| Moghunter.charPoses_jump_list[this.getActorId()] == "" ){
			return this._originalName.name;
		}
	    return Moghunter.charPoses_jump_list[this.getActorId()];
	};
};

//==============================
// * Is Idle Pose
//==============================
Game_CharacterBase.prototype.isIdlePose = function() {
	if (Imported.MOG_ChronoEngine && $gamePlayer && $gamePlayer.battler())	 { 
	    if ($gameSystem.isChronoMode()) {return false};
	    if ($gamePlayer.isActing() || $gamePlayer.isKnockbacking()) {
			this._poses.idle[1] = this._poses.idle[2];
		    return false
		};
	};
	if (!this._poses.idle[0]) {return false};
	if (this._poses.idle[1] > 0) {return false};
	if (this.isMoving()) {return false};
	if (this.isJumping()) {return false};
	if (Imported.MOG_PickupThrow  && $gamePlayer._pickup.enabled) {return false};
    return true;
};

//==============================
// * Set Idle Pose
//==============================
Game_CharacterBase.prototype.setIdlePose = function() {
	this._poses.idle[3] = true;
	if (this._poses.idle[4] === null) {this._poses.idle[4] = this._stepAnime};
	this._stepAnime = true;
	if (this.isDiagonalIdlePose()) {
	   return this.setDiagonalIdlePose();
	} else {
		if( !Moghunter.charPoses_stand_list[this.getActorId()]
		|| Moghunter.charPoses_stand_list[this.getActorId()] == "" ){
			return this._originalName.name;
		}
	   return Moghunter.charPoses_stand_list[this.getActorId()];
	};
};

//==============================
// * Is Faint Pose
//==============================
Game_CharacterBase.prototype.isFaintPose  = function() {
	 return false;
};

//==============================
// * set Faint Pose
//==============================
Game_CharacterBase.prototype.setFaintPose = function() {
	 return "";
};

//==============================
// * Is Knockback Pose
//==============================
Game_CharacterBase.prototype.isKnockbackPose  = function() {
	 if (this.battlerPoses()) {return this.isKnockbacking()};
	 return false;
};

//==============================
// * set Knockback Pose
//==============================
Game_CharacterBase.prototype.setKnockbackPose = function() {
	 if (this.battlerPoses()) {
		 this._poses.idle[1] = this._poses.idle[2];
	     return this._originalName.name + "_damage";
	 };
	 return "";
};

//==============================
// * Is Action Pose
//==============================
Game_CharacterBase.prototype.isActionPose  = function() {
	 if (this.battlerPoses()) {return this.isActing()};
	 return false;
};

//==============================
// * Set Action Pose
//==============================
Game_CharacterBase.prototype.setActionPose = function() {
	 if (this.battlerPoses()) {
		this._poses.idle[1] = this._poses.idle[2];
		this._stepAnime = true;
		this._poses.actionMode[0] = true;
	    return this._originalName.name + this.battler()._ras.poseSuffix;
     };
	 return "";
};

//==============================
// * Is Victory Pose
//==============================
Game_CharacterBase.prototype.isVictoryPose  = function() {
	 if (this.battlerPoses()) {return $gameSystem._chronoMode.phase === 5 && $gameTemp._chrono.victory[2] < 2};
	 return false;
};

//==============================
// * Set Victory Pose
//==============================
Game_CharacterBase.prototype.setVictoryPose = function() {
	 if (this.battlerPoses()) {
		this._poses.idle[1] = this._poses.idle[2];
		this._stepAnime = true;
	    return this._originalName.name + "_victory";
     };
	 return "";
};

//==============================
// * Is Casting Pose
//==============================
Game_CharacterBase.prototype.isCastingPose  = function() {
	 if (this.battlerPoses()) {return this.isCasting()};
	 return false;
};

//==============================
// * Set Casting Pose
//==============================
Game_CharacterBase.prototype.setCastingPose = function() {
	 if (this.battlerPoses()) {
		this._poses.idle[1] = this._poses.idle[2];
		this._stepAnime = true;
	    return this._originalName.name + "_casting";
     };
	 return "";
};

//==============================
// * Is Attacking Pose
//==============================
Game_CharacterBase.prototype.isAttackingPose  = function() {
	 if (this.battlerPoses()) {return this.isAttacking()};
	 return false;
};

//==============================
// * Set Attacking Pose
//==============================
Game_CharacterBase.prototype.setAttackingPose = function() {
	 if (this.battlerPoses()) {
		this._poses.idle[1] = this._poses.idle[2];
		this._stepAnime = true;
	    return this._originalName.name + "_attacking";
     };
	 return "";
};

//==============================
// * is Diagonal Idle Default Pose
//==============================
Game_CharacterBase.prototype.isDiagonalDefaultPose = function() {
	 return false;
};

//==============================
// * Set Diagonal Idle Default Pose
//==============================
Game_CharacterBase.prototype.setDiagonalDefaultPose = function() {
	 return "";
};

//==============================
// * is Diagonal Idle Pose
//==============================
Game_CharacterBase.prototype.isDiagonalIdlePose = function() {
	 return false;
};

//==============================
// * Set Diagonal Idle Pose
//==============================
Game_CharacterBase.prototype.setDiagonalIdlePose = function() {
	 return "";
};

//==============================
// * is Diagonal Dash Pose
//==============================
Game_CharacterBase.prototype.isDiagonalDashPose = function() {
	 return false;
};

//==============================
// * Set Diagonal Dash Pose
//==============================
Game_CharacterBase.prototype.setDiagonalDashPose = function() {
	 return "";
};

//==============================
// * is Diagonal Jump Pose
//==============================
Game_CharacterBase.prototype.isDiagonalJumpPose = function() {
	 return false;
};

//==============================
// * Set Diagonal Jump Pose
//==============================
Game_CharacterBase.prototype.setDiagonalJumpPose = function() {
	 return "";
};

//==============================
// * is Push Pull Pose
//==============================
Game_CharacterBase.prototype.isPushPullPose = function() {
	 return false;
};

//==============================
// * Set Push Pull Pose
//==============================
Game_CharacterBase.prototype.setPushPullPose = function() {
	 return "";
};

//==============================
// * is PickUP Pose
//==============================
Game_CharacterBase.prototype.isPickUPPose  = function() {
	 if (!Imported.MOG_PickupThrow) {return false};
	 if (!this._pickup.enabled){return false};
	 return true;
};

//==============================
// * Set Pick UP Pose
//==============================
Game_CharacterBase.prototype.setPickUPPose = function() {
	 this._poses.idle[1] = this._poses.idle[2];
	 if (this.isDiagonalPickUPPose()) {
	   return this.setDiagonalPickUPPose()
	 } else {
		if( !Moghunter.pick_list[this.getActorId()]
		|| Moghunter.pick_list[this.getActorId()] == "" ){
			return this._originalName.name;
		}
		return Moghunter.pick_list[this.getActorId()];
	 };
};

//==============================
// * is Diagonal PickUP Pose
//==============================
Game_CharacterBase.prototype.isDiagonalPickUPPose = function() {
	 return false;
};

//==============================
// * Set Diagonal PickUP Pose
//==============================
Game_CharacterBase.prototype.setDiagonalPickUPPose = function() {
	 return "";
};

//==============================
// * is Guard Pose
//==============================
Game_CharacterBase.prototype.isGuardPose = function() {
	if (this.battlerPoses()) {return this.isGuarding()};
	return false;
};

//==============================
// * Set Guard Pose
//==============================
Game_CharacterBase.prototype.setGuardingPose = function() {
	 if (this.battler()) {
	     return this._originalName.name + this.battler()._ras.guard.poseSuffix;
	 };
	 return "";
};

//==============================
// * Set Pose
//==============================
Game_CharacterBase.prototype.setPose = function() {
	 this._poses.idle[3] = false;
	 if (this.isFaintPose()) {
		 return this.setFaintPose();
     } else if (this.isKnockbackPose()) { 
	     return this.setKnockbackPose();
     } else if (this.isGuardPose()) { 
	     return this.setGuardingPose();		 
	 } else if (this.isActionPose()) {
		 return this.setActionPose();
	 } else if (this.isVictoryPose()) {
		 return this.setVictoryPose();	
	 } else if (this.isCastingPose()) {
		 return this.setCastingPose();	
	 } else if (this.isAttackingPose()) {
		 return this.setAttackingPose();			 	 	 
     } else if (this.isPickUPPose()) {
         return this.setPickUPPose();
     } else if (this.isPushPullPose()) {
         return this.setPushPullPose();	 
	 } else if (this.isDashingPose()) {
		 return this.setDashPose();
	 } else if (this.isJumpingPose()) {
         return this.setJumpPose();
	 } else if (this.isIdlePose()) {
	     return this.setIdlePose();	 
	 };
	 if (this.isDiagonalDefaultPose()) {
		 return this.setDiagonalDefaultPose();
	 } else {
         return this._originalName.name;
     };
};

//==============================
// * Set Image
//==============================	
var _mog_charPoses_gcharbase_setImage = Game_CharacterBase.prototype.setImage;
Game_CharacterBase.prototype.setImage = function(characterName, characterIndex) {
	_mog_charPoses_gcharbase_setImage.call(this,characterName, characterIndex);
	this.setRealCharName();
	this.setCharacterFrames();
};

//==============================
// * get Real Name
//==============================	
Game_CharacterBase.prototype.getRealName = function(name) {
	   var strings = name.toString().split("");
	   var realName = "";  
	   for (var i = 0; i < strings.length ; i++) {
		   if (strings[i] === '(') {break}
		   realName += strings[i];
	   };
	   return String(realName)
};	
	
//==============================
// * Set Character Frames
//==============================
Game_Character.prototype.setCharacterFrames = function() {
	this.clearCharacterFrames();
	var frames = this._characterName.match(/(\(F(\d+\.*\d*))/i)
	if (frames) {
	   this._frames.enabled = true;
	   this._frames.index = 0;
	   this._frames.max = Number(frames[2]);
	}
	var ex = this._characterName.match(/(X(\d+\.*\d*))/i)
	if (ex) {this._frames.x = Number(ex[2])};
	var ey = this._characterName.match(/(Y(\d+\.*\d*))/i)
	if (ey) {this._frames.y = Number(ey[2])};
	var sp = this._characterName.match(/(S(\d+\.*\d*))/i)
	if (sp) {this._frames.speed = Number(sp[2])};
	if (this._frames.enabled) {this._pattern = 0};
	this._pattern = this._frames.enabled ? 0 : 1;
};
	
	
//==============================
// * Set Real Char Name
//==============================
Game_Character.prototype.setRealCharName = function() {
	if (!this._poses) {return};
	if (!this._characterName) {this._characterName = ''};
	if (!this._characterIndex) {this._characterIndex = 0};
    this._originalName = {};
	this._originalName.name = this._characterName;
	this._originalName.index = this._characterIndex;
	if (this._originalName.name === '') {this._poses.enabled = false};
	if (this._poses.enabled && this._characterName != '') {this.preCachePoses()};
};	

//==============================
// * Pre Cache Poses
//==============================
Game_Character.prototype.preCachePoses = function() {
	if (!this._originalName) {return};
	if (this._originalName.name == '') {return};
	var _cachePoses = [];
    if (this._poses.dash[0]) {
		//_cachePoses[0] = ImageManager.loadCharacter(this._originalName.name + "_dash")
		if( Moghunter.charPoses_run_list[this.getActorId()]
		|| Moghunter.charPoses_run_list[this.getActorId()] != "" ){
			_cachePoses[0] = ImageManager.loadCharacter( Moghunter.charPoses_run_list[this.getActorId()] );
		}else{
			_cachePoses[0] = ImageManager.loadCharacter(this._originalName.name);
		}
	};
	if (this._poses.jump[0]) {
		//_cachePoses[1] = ImageManager.loadCharacter(this._originalName.name + "_jump")
		if( Moghunter.charPoses_jump_list[this.getActorId()]
		|| Moghunter.charPoses_jump_list[this.getActorId()] != "" ){
			_cachePoses[1] = ImageManager.loadCharacter( Moghunter.charPoses_jump_list[this.getActorId()] );
		}else{
			_cachePoses[1] = ImageManager.loadCharacter(this._originalName.name);
		}
	};
	if (this._poses.idle[0]) {
		//_cachePoses[2] = ImageManager.loadCharacter(this._originalName.name + "_idle")
		if( Moghunter.charPoses_stand_list[this.getActorId()]
		|| Moghunter.charPoses_stand_list[this.getActorId()] != "" ){
			_cachePoses[2] = ImageManager.loadCharacter(Moghunter.charPoses_stand_list[this.getActorId()]);
		}else{
			_cachePoses[1] = ImageManager.loadCharacter(this._originalName.name);
		}
	};
	if (Imported.MOG_PickupThrow && !this._eventId) {
		if( Moghunter.pick_list[this.getActorId()]
		|| Moghunter.pick_list[this.getActorId()] != "" ){
			_cachePoses[3] = ImageManager.loadCharacter(Moghunter.pick_list[this.getActorId()]);
		};
	};
};

//==============================
// * Need Update Poses
//==============================
Game_CharacterBase.prototype.needUpdatePoses = function() {
	 if ($gameSystem._chaPoses && !$gameSystem._chaPoses[0]) {return false};
	 if (!this._poses) {return false};
	 if (!this._poses.enabled) {return false};
	 if (Imported.MOG_ChronoEngine && $gameSystem.isChronoMode()) {
	     if ($gameMap.isEventRunning()) {return false};
	 };
	 if (!this._originalName) {return false};
	 if (!this._originalName.name) {return false};
	 if (this._originalName.name == '') {return false};
     return true;
};

//==============================
// * Update
//==============================
var _mog_charPoses_gcharbase_update = Game_CharacterBase.prototype.update;
Game_CharacterBase.prototype.update = function() {
	_mog_charPoses_gcharbase_update.call(this);
	if (this.needRefreshPoses()) {this.refreshPoses()};
	if (this.needUpdatePoses()) {this.updatePoses()};
	if (this.needRefreshPosesInterpreter()) {this.refreshPosesInterpreter()}
};

//==============================
// * need Refresh Poses
//==============================
Game_CharacterBase.prototype.needRefreshPoses = function() {
	if (this.battler() && this.battler()._originalName.refresh) {return true};
	return false;
};

//==============================
// * Need Refresh Poses Interp
//==============================
Game_CharacterBase.prototype.needRefreshPosesInterpreter = function() {
	 if (!this._poses) {return false};
	 if (this._poses.interpreter != $gameTemp._chaPosesEVRunning) {return true};
	 if ($gameSystem._chaPoses[0] != $gameSystem._chaPoses[1]) {return true};
	 return false;
};

//==============================
// * Refresh Poses Interpreter
//==============================
Game_CharacterBase.prototype.refreshPosesInterpreter = function() {
	 this._poses.interpreter = $gameTemp._chaPosesEVRunning;
	 $gameSystem._chaPoses[1] = $gameSystem._chaPoses[0];
	 if (this.needSetOriginalName()) {
	     this._characterName = this._originalName.name;
     };
	 this._poses.dash[1] = 0;
	 this._poses.idle[1] = this._poses.idle[2];
	 if (this._poses.idle[4] != null) {
		 this._stepAnime = this._poses.idle[4];
		 this._poses.idle[4] = null;
     };
};

//==============================
// * Need Set Original Name
//==============================
Game_CharacterBase.prototype.needSetOriginalName = function() {
     if (this._characterName === this._originalName.name) {return false};
	 if (this._characterName === Moghunter.charPoses_run_list[this.getActorId()]) {return true};
	 if (this._characterName === Moghunter.charPoses_jump_list[this.getActorId()]) {return true};
	 if (this._characterName === Moghunter.charPoses_stand_list[this.getActorId()]) {return true};
	 return false;
};

//==============================
// * getActorId	标记当前对象为玩家
//==============================
Game_CharacterBase.prototype.getActorId = function() {
    if ( this.constructor.name == "Game_Follower" ) {
		 return $gameParty._actors[this._memberIndex];
	};
    if ( this.constructor.name == "Game_Player" ) {
		 return $gameParty._actors[0];
	};
	return 0;
};

//==============================
// * Refresh New Pose
//==============================
Game_CharacterBase.prototype.refreshNewPose = function() {
	 if (!this._poses.idle[3]) {
		 this._poses.idle[1] = this._poses.idle[2];
		 if (this._poses.idle[4] != null) {
			 this._stepAnime = this._poses.idle[4];
			 this._poses.idle[4] = null;
		 };		 
	 };
	 this._frames.refresh = true; 
};

//==============================
// * Update Set Pose
//==============================
Game_CharacterBase.prototype.updateSetPose = function() {
	if (this.isMoving()) {this._poses.idle[1] = this._poses.idle[2]};
	this._poses.actionMode[0] = false;
	if (this._poses.dash[1] > 0) {
		if (this.isDashingPose()) {this._poses.dash[1] = 3};		
		this._poses.dash[1]--;
		return
	};
	if (this._poses.idle[1] > 0) {this._poses.idle[1]--};
	var charName = this._characterName;
    this._characterName = this.setPose();
	if (this._poses.actionMode[0] != this._poses.actionMode[1]) {this.refreshActionMode()};
	if (charName != this._characterName) {this.refreshNewPose()};
};

//==============================
// * Refresh Action Mode
//==============================
Game_CharacterBase.prototype.refreshActionMode = function() {
	if (this._poses.actionMode[1] && !this._poses.actionMode[0]) {
		this._stepAnime = false;
	};
    this._poses.actionMode[1] = this._poses.actionMode[0];
};

//==============================
// * Update Poses
//==============================
Game_CharacterBase.prototype.updatePoses = function() {
    this.updateSetPose();
};

//==============================
// * is Original Pattern
//==============================
Game_CharacterBase.prototype.isOriginalPattern = function() {
	var orgPattern = this._frames.enabled ? 0 : 1;
    return this.pattern() === orgPattern;
};

//==============================
// * Pattern
//==============================
Game_CharacterBase.prototype.pattern = function() {
	var pattern = this._frames.enabled ? [this._frames.max,0] : [3,1];
    return this._pattern < pattern[0] ? this._pattern : pattern[1];
};

//==============================
// * reset Pattern
//==============================
Game_CharacterBase.prototype.resetPattern = function() {
	var initPattern = this._frames.enabled ? 0 : 1;
    this.setPattern(initPattern);
};

//==============================
// * update Pattern Poses
//==============================
Game_CharacterBase.prototype.maxPattern = function() {
	var maxPattern = this._frames.enabled ? this._frames.max: 4;
    return maxPattern;
};

//==============================
// * update Animation Count
//==============================
var _mog_charPose_charBase_updateAnimationCount = Game_CharacterBase.prototype.updateAnimationCount;
Game_CharacterBase.prototype.updateAnimationCount = function() {
	_mog_charPose_charBase_updateAnimationCount.call(this);
    this._animationCount += this._frames.speed;
};

//=============================================================================
// ** Sprite Character
//=============================================================================

//==============================
// * Init Members
//==============================
var _mog_charPoses_sprChar_initMembers = Sprite_Character.prototype.initMembers;
Sprite_Character.prototype.initMembers = function() {
	_mog_charPoses_sprChar_initMembers.call(this);
	this.bitmap = new Bitmap(16,16);
	this._bitmapCharName = null;
	this._cacheSprite = new Sprite();
	this._cacheSprite.visible = false;
	this._cacheSprite.opacity = 0;
	this.addChild(this._cacheSprite);
};

//==============================
// * Set Character
//==============================
var _mog_charPose_SprtChar_setCharacter = Sprite_Character.prototype.setCharacter;
Sprite_Character.prototype.setCharacter = function(character) {
    _mog_charPose_SprtChar_setCharacter.call(this,character);
	if (this.needCachePoses()) {
		this._character.preCachePoses()
	};
};

//==============================
// * need Cache Poses
//==============================
Sprite_Character.prototype.needCachePoses = function() {
	if (!this._character) {return false};
	if (!this._character._poses) {return false};
	if (!this._character._poses.enabled) {return false};
	return true;
};

//==============================
// * char Image Changed
//==============================
Sprite_Character.prototype.isCharImageChanged = function() {
	if (!this._character) {return false};
	if (this._character.tileId() > 0) {return false};
	if (this._character._user) {
		if (this._character._user.treasure[0]) {return false};
	};
	if (this._bitmapCharName !== this._character.characterName()) {return true};
	return false;
};

//==============================
// * set Bitmap Cache
//==============================
Sprite_Character.prototype.setBitmapCache = function() {
	 this._bitmapCharName = this._character.characterName();
	 if (!this._character.characterName()) {
		 this._cacheSprite.bitmap = null;
	 } else {
	     this._cacheSprite.bitmap = ImageManager.loadCharacter(this._bitmapCharName);
	 };
};

//==============================
// * update Bitmap
//==============================
var _mog_charPoses_sprChar_updateBitmap = Sprite_Character.prototype.updateBitmap;
Sprite_Character.prototype.updateBitmap = function() {
 	if (this.isCharImageChanged()) {this.setBitmapCache()};
	if (this._cacheSprite.bitmap && !this._cacheSprite.bitmap.isReady()) {
		return;
	} else {
		this._cacheSprite.bitmap = null;
	};
	_mog_charPoses_sprChar_updateBitmap.call(this);
	if (this._character._frames.refresh) {this._character.setCharacterFrames()};
};

//==============================
// * character Block X
//==============================
Sprite_Character.prototype.characterBlockX = function() {
    if (this._isBigCharacter) {
        return 0;
    } else {
        var index = this._character.characterIndex();
        return index % 4 * this._character._frames.max;
    }
};

//==============================
// * pattern Width
//==============================
Sprite_Character.prototype.patternWidth = function() {
    if (this._tileId > 0) {
        return $gameMap.tileWidth();
    } else if (this._isBigCharacter) {
        return this.bitmap.width / this._character._frames.max;
    } else {
        return this.bitmap.width / 12;
    }
};

//==============================
// * update Position
//==============================
var _mog_charPoses_updatePosition = Sprite_Character.prototype.updatePosition;
Sprite_Character.prototype.updatePosition = function() {
	_mog_charPoses_updatePosition.call(this);
	this.updateCharPosesPosition();
};

//==============================
// *update Char Poses Position
//==============================
Sprite_Character.prototype.updateCharPosesPosition = function() {
	if (this._character.direction() === 4 || this._character.direction() === 6) {	
		var ex = this._character.direction() === 6 ? this._character._frames.x : -this._character._frames.x;
    } else {
		var ex = 0;
	};
	var ey = this._character._frames.y;	
    this.x += ex;
    this.y += ey;	
};

//=============================================================================
// ** Sprite Animation
//=============================================================================

//==============================
// * update 
//==============================
var _mogCharPoses_SprAnime_update = Sprite_Animation.prototype.update;
Sprite_Animation.prototype.update = function() {
	_mogCharPoses_SprAnime_update.call(this);
	if (this._target && this._target._character) {this.updateCharPosesPositionAnimation(this._target._character)}
};

//==============================
// * update Char Poses Animation
//==============================
Sprite_Animation.prototype.updateCharPosesPositionAnimation = function(character) {
	if (character.direction() === 4 || character.direction() === 6) {	
		var ex = character.direction() === 6 ? -character._frames.x : character._frames.x;
    } else {
		var ex = 0;
	};
	var ey = -character._frames.y;	
    this.x += ex;
    this.y += ey;
};
