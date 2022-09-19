//=============================================================================
// MOG_SceneSkill.js
//=============================================================================

/*:
 * @plugindesc (v1.1)[v1.7]  面板 - 全自定义技能界面
 * @author Moghunter （Drill_up翻译+优化）
 * 
 * @Drill_LE_param "角色头像-%d"
 * @Drill_LE_parentKey "---角色头像%d至%d---"
 * @Drill_LE_var "Moghunter.menu_Skill_face_list_length"
 * 
 * @Drill_LE_param "框头像-%d"
 * @Drill_LE_parentKey "---框头像%d至%d---"
 * @Drill_LE_var "Moghunter.menu_Skill_as_face_list_length"
 * 
 *
 * @param ----杂项----
 * @desc
 *
 * @param 资源-整体布局
 * @parent ----杂项----
 * @desc 整体布局图片资源。
 * @default 技能界面-整体布局
 * @require 1
 * @dir img/Menu__skill/
 * @type file
 *
 * @param 平移-帮助信息 X
 * @parent ----杂项----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * 道具详细描述说明的文本位置。
 * @default 0
 *
 * @param 平移-帮助信息 Y
 * @parent ----杂项----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * 道具详细描述说明的文本位置。
 * @default 516
 *
 * @param ----技能窗口----
 * @desc
 *
 * @param 平移-技能窗口 X
 * @parent ----技能窗口----
 * @desc x轴方向平移，单位像素。0为贴在正中心。（正数右移，负数左移）
 * @default 0
 *
 * @param 平移-技能窗口 Y
 * @parent ----技能窗口----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 96
 *
 * @param 技能窗口左起点 X
 * @parent ----技能窗口----
 * @desc 玩家按右按键，窗口从左起点滑动到原本的位置，这里设置的是偏移的x轴值，单位像素。（可为负数）
 * @default -60
 *
 * @param 技能窗口左起点 Y
 * @parent ----技能窗口----
 * @desc 玩家按右按键，窗口从左起点滑动到原本的位置，这里设置的是偏移的y轴值，单位像素。（可为负数）
 * @default 0
 *
 * @param 技能窗口右起点 X
 * @parent ----技能窗口----
 * @desc 玩家按左按键，窗口从右起点滑动到原本的位置，这里设置的是偏移的x轴值，单位像素。（可为负数）
 * @default 60
 *
 * @param 技能窗口右起点 Y
 * @parent ----技能窗口----
 * @desc 玩家按左按键，窗口从右起点滑动到原本的位置，这里设置的是偏移的y轴值，单位像素。（可为负数）
 * @default 0
 *
 * @param 技能窗口移动时长
 * @parent ----技能窗口----
 * @type number
 * @min 1
 * @desc 从偏移的位置到原位置所需的时间，单位帧。（1秒60帧）
 * @default 20
 *
 * @param 是否使用技能窗口布局
 * @parent ----技能窗口----
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default true
 *
 * @param 资源-技能窗口
 * @parent 是否使用技能窗口布局
 * @desc 技能窗口的图片资源。
 * @default 技能界面-技能窗口
 * @require 1
 * @dir img/Menu__skill/
 * @type file
 *
 * @param 平移-技能窗口布局 X
 * @parent 是否使用技能窗口布局
 * @desc 修正图片的偏移用。以窗口的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 平移-技能窗口布局 Y
 * @parent 是否使用技能窗口布局
 * @desc 修正图片的偏移用。以窗口的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 技能窗口宽度
 * @parent ----技能窗口----
 * @type number
 * @min 50
 * @desc 窗口的高宽设置。注意，实际文本域的高宽要比该设置小一些，因为有内边距。具体去看看 "17.主菜单 > 窗口与布局.docx"。
 * @default 370
 *
 * @param 技能窗口高度
 * @parent ----技能窗口----
 * @type number
 * @min 50
 * @desc 窗口的高宽设置。注意，实际文本域的高宽要比该设置小一些，因为有内边距。具体去看看 "17.主菜单 > 窗口与布局.docx"。
 * @default 400
 *
 * @param 技能窗口字体大小
 * @parent ----技能窗口----
 * @type number
 * @min 1
 * @desc 技能窗口的字体大小。
 * @default 22
 *
 * @param 技能窗口列数
 * @parent ----技能窗口----
 * @type number
 * @min 1
 * @desc 技能窗口的列数。
 * @default 1
 *
 * @param ----技能类型窗口----
 * @desc
 *
 * @param 是否显示技能类型窗口
 * @parent ----技能类型窗口----
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示。如果你不想要技能类型窗口，可以直接去掉。（左右键可以直接切换类型）
 * @default true
 *
 * @param 平移-类型窗口 X
 * @parent ----技能类型窗口----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 0
 *
 * @param 平移-类型窗口 Y
 * @parent ----技能类型窗口----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 200
 *
 * @param 类型窗口起点 X
 * @parent ----技能类型窗口----
 * @desc 窗口从起点滑动到原本的位置，这里设置的是偏移的x轴值，单位像素。（可为负数）
 * @default -200
 *
 * @param 类型窗口起点 Y
 * @parent ----技能类型窗口----
 * @desc 窗口从起点滑动到原本的位置，这里设置的是偏移的y轴值，单位像素。（可为负数）
 * @default 0
 *
 * @param 类型窗口移动时长
 * @parent ----技能类型窗口----
 * @type number
 * @min 1
 * @desc 从偏移的位置到原位置所需的时间，单位帧。（1秒60帧）
 * @default 20
 *
 * @param 是否使用类型窗口布局
 * @parent ----技能类型窗口----
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default true
 *
 * @param 资源-类型窗口
 * @parent 是否使用类型窗口布局
 * @desc 类型窗口的图片资源。
 * @default 技能界面-类型窗口
 * @require 1
 * @dir img/Menu__skill/
 * @type file
 *
 * @param 平移-类型窗口布局 X
 * @parent 是否使用类型窗口布局
 * @desc 修正图片的偏移用。以窗口的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 平移-类型窗口布局 Y
 * @parent 是否使用类型窗口布局
 * @desc 修正图片的偏移用。以窗口的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 类型窗口宽度
 * @parent ----技能类型窗口----
 * @type number
 * @min 50
 * @desc 窗口的高宽设置。注意，实际文本域的高宽要比该设置小一些，因为有内边距。具体去看看 "17.主菜单 > 窗口与布局.docx"。
 * @default 210
 *
 * @param 类型窗口高度
 * @parent ----技能类型窗口----
 * @type number
 * @min 50
 * @desc 窗口的高宽设置。注意，实际文本域的高宽要比该设置小一些，因为有内边距。具体去看看 "17.主菜单 > 窗口与布局.docx"。
 * @default 190
 *
 * @param 类型窗口字体大小
 * @parent ----技能类型窗口----
 * @type number
 * @min 1
 * @desc 类型窗口的字体大小。
 * @default 22
 *
 * @param 类型窗口列数
 * @parent ----技能类型窗口----
 * @type number
 * @min 1
 * @desc 类型窗口的列数。
 * @default 1
 *
 * @param 类型窗口对齐方式
 * @parent ----技能类型窗口----
 * @type select
 * @option 左对齐
 * @value left
 * @option 居中
 * @value center
 * @option 右对齐
 * @value right
 * @desc 技能类型的对齐方式，left - 左对齐，center- 居中，right - 右对齐。
 * @default left
 *
 *
 * @param ----角色框----
 * @desc
 *
 * @param 资源-角色框
 * @parent ----角色框----
 * @desc 角色框的图片资源。
 * @default 技能界面-角色框
 * @require 1
 * @dir img/Menu__skill/
 * @type file
 *
 * @param 平移-角色框 X
 * @parent ----角色框----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 260
 *
 * @param 平移-角色框 Y
 * @parent ----角色框----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 0
 *
 * @param 平移-框头像 X
 * @parent ----角色框----
 * @desc 以框的位置为基准，x轴方向平移，单位像素。（可为负数）
 * @default 10
 *
 * @param 平移-框头像 Y
 * @parent ----角色框----
 * @desc 以框的位置为基准，y轴方向平移，单位像素。（可为负数）
 * @default 15
 *
 * @param 平移-角色框生命值 X
 * @parent ----角色框----
 * @desc 以框的位置为基准，x轴方向平移，单位像素。（可为负数）
 * @default 100
 *
 * @param 平移-角色框生命值 Y
 * @parent ----角色框----
 * @desc 以框的位置为基准，y轴方向平移，单位像素。（可为负数）
 * @default 10
 *
 * @param 平移-角色框魔法值 X
 * @parent ----角色框----
 * @desc 以框的位置为基准，x轴方向平移，单位像素。（可为负数）
 * @default 195
 *
 * @param 平移-角色框魔法值 Y
 * @parent ----角色框----
 * @desc 以框的位置为基准，y轴方向平移，单位像素。（可为负数）
 * @default 10
 *
 * @param 平移-角色框角色名 X
 * @parent ----角色框----
 * @desc 以框的位置为基准，x轴方向平移，单位像素。（可为负数）
 * @default 90
 *
 * @param 平移-角色框角色名 Y
 * @parent ----角色框----
 * @desc 以框的位置为基准，y轴方向平移，单位像素。（可为负数）
 * @default 50
 *
 * @param 角色框字体大小
 * @parent ----角色框----
 * @type number
 * @min 1
 * @desc 技能窗口的字体大小。
 * @default 22
 *
 * @param 资源-角色框生命条
 * @parent ----角色框----
 * @desc 角色框生命条的图片资源。
 * @default 技能界面-角色框生命条
 * @require 1
 * @dir img/Menu__skill/
 * @type file
 *
 * @param 平移-角色框生命条 X
 * @parent ----角色框----
 * @desc 以框的位置为基准，x轴方向平移，单位像素。（可为负数）
 * @default 88
 *
 * @param 平移-角色框生命条 Y
 * @parent ----角色框----
 * @desc 以框的位置为基准，y轴方向平移，单位像素。（可为负数）
 * @default 38
 *
 * @param 资源-角色框魔法条
 * @parent ----角色框----
 * @desc 角色框魔法条的图片资源。
 * @default 技能界面-角色框魔法条
 * @require 1
 * @dir img/Menu__skill/
 * @type file
 *
 * @param 平移-角色框魔法条 X
 * @parent ----角色框----
 * @desc 以框的位置为基准，x轴方向平移，单位像素。（可为负数）
 * @default 187
 *
 * @param 平移-角色框魔法条 Y
 * @parent ----角色框----
 * @desc 以框的位置为基准，y轴方向平移，单位像素。（可为负数）
 * @default 38
 *
 * @param 平移-角色框状态 X
 * @parent ----角色框----
 * @desc 以框的位置为基准，x轴方向平移，单位像素。（可为负数）
 * @default 214
 *
 * @param 平移-角色框状态 Y
 * @parent ----角色框----
 * @desc 以框的位置为基准，y轴方向平移，单位像素。（可为负数）
 * @default 51
 * 
 * @param ---框头像 1至20---
 * @parent ----角色框----
 * @default 
 *
 * @param 框头像-1
 * @parent ---框头像 1至20---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-2
 * @parent ---框头像 1至20---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-3
 * @parent ---框头像 1至20---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-4
 * @parent ---框头像 1至20---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-5
 * @parent ---框头像 1至20---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-6
 * @parent ---框头像 1至20---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-7
 * @parent ---框头像 1至20---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-8
 * @parent ---框头像 1至20---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-9
 * @parent ---框头像 1至20---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-10
 * @parent ---框头像 1至20---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-11
 * @parent ---框头像 1至20---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-12
 * @parent ---框头像 1至20---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-13
 * @parent ---框头像 1至20---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-14
 * @parent ---框头像 1至20---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-15
 * @parent ---框头像 1至20---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-16
 * @parent ---框头像 1至20---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-17
 * @parent ---框头像 1至20---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-18
 * @parent ---框头像 1至20---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-19
 * @parent ---框头像 1至20---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-20
 * @parent ---框头像 1至20---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 * 
 * @param ---框头像21至40---
 * @parent ----角色框----
 * @default 
 *
 * @param 框头像-21
 * @parent ---框头像21至40---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-22
 * @parent ---框头像21至40---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-23
 * @parent ---框头像21至40---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-24
 * @parent ---框头像21至40---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-25
 * @parent ---框头像21至40---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-26
 * @parent ---框头像21至40---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-27
 * @parent ---框头像21至40---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-28
 * @parent ---框头像21至40---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-29
 * @parent ---框头像21至40---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-30
 * @parent ---框头像21至40---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-31
 * @parent ---框头像21至40---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-32
 * @parent ---框头像21至40---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-33
 * @parent ---框头像21至40---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-34
 * @parent ---框头像21至40---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-35
 * @parent ---框头像21至40---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-36
 * @parent ---框头像21至40---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-37
 * @parent ---框头像21至40---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-38
 * @parent ---框头像21至40---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-39
 * @parent ---框头像21至40---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-40
 * @parent ---框头像21至40---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 * 
 * @param ---框头像41至60---
 * @parent ----角色框----
 * @default 
 *
 * @param 框头像-41
 * @parent ---框头像41至60---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-42
 * @parent ---框头像41至60---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-43
 * @parent ---框头像41至60---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-44
 * @parent ---框头像41至60---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-45
 * @parent ---框头像41至60---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-46
 * @parent ---框头像41至60---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-47
 * @parent ---框头像41至60---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-48
 * @parent ---框头像41至60---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-49
 * @parent ---框头像41至60---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-50
 * @parent ---框头像41至60---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-51
 * @parent ---框头像41至60---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-52
 * @parent ---框头像41至60---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-53
 * @parent ---框头像41至60---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-54
 * @parent ---框头像41至60---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-55
 * @parent ---框头像41至60---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-56
 * @parent ---框头像41至60---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-57
 * @parent ---框头像41至60---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-58
 * @parent ---框头像41至60---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-59
 * @parent ---框头像41至60---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 框头像-60
 * @parent ---框头像41至60---
 * @desc 框头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param ----选择框----
 * @desc
 *
 * @param ----角色面板----
 * @desc
 *
 * @param 平移-角色面板 X
 * @parent ----角色面板----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 600
 *
 * @param 平移-角色面板 Y
 * @parent ----角色面板----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 200
 *
 * @param 角色面板起点 X
 * @parent ----角色面板----
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的x轴值，单位像素。（可为负数）
 * @default 100
 *
 * @param 角色面板起点 Y
 * @parent ----角色面板----
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的y轴值，单位像素。（可为负数）
 * @default 0
 *
 * @param 角色面板移动时长
 * @parent ----角色面板----
 * @type number
 * @min 1
 * @desc 从偏移的位置到原位置所需的时间，单位帧。（1秒60帧）
 * @default 20
 *
 * @param 资源-角色面板
 * @parent ----角色面板----
 * @desc 角色面板的图片资源。
 * @default 技能界面-角色窗口
 * @require 1
 * @dir img/Menu__skill/
 * @type file
 *
 * @param 平移-角色面板布局 X
 * @parent ----角色面板----
 * @desc 修正图片的偏移用。以窗口的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 平移-角色面板布局 Y
 * @parent ----角色面板----
 * @desc 修正图片的偏移用。以窗口的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 角色面板字体大小
 * @parent ----角色面板----
 * @type number
 * @min 1
 * @desc 角色面板的字体大小。
 * @default 22
 *
 * @param 平移-角色状态 X
 * @parent ----角色面板----
 * @desc 以角色面板的点为基准，x轴方向平移，单位像素。（可为负数）
 * 注意这里是角色面板中的状态显示。
 * @default 23
 *
 * @param 平移-角色状态 Y
 * @parent ----角色面板----
 * @desc 以角色面板的点为基准，y轴方向平移，单位像素。（可为负数）
 * 注意这里是角色面板中的状态显示。
 * @default 15
 *
 * @param 平移-角色名 X
 * @parent ----角色面板----
 * @desc 以角色面板的点为基准，x轴方向平移，单位像素。（可为负数）
 * 注意这里是角色面板中的角色名显示。
 * @default 70
 *
 * @param 平移-角色名 Y
 * @parent ----角色面板----
 * @desc 以角色面板的点为基准，y轴方向平移，单位像素。（可为负数）
 * 注意这里是角色面板中的角色名显示。
 * @default 30
 *
 * @param 平移-角色能力值组 X
 * @parent ----角色面板----
 * @desc 以角色面板的点为基准，x轴方向平移，单位像素。（可为负数）
 * 能力值组是攻击、防御等数值，固定排布的组。
 * @default 0
 *
 * @param 平移-角色能力值组 Y
 * @parent ----角色面板----
 * @desc 以角色面板的点为基准，y轴方向平移，单位像素。（可为负数）
 * 能力值组是攻击、防御等数值，固定排布的组。
 * @default 0
 *
 * @param 角色能力值横向间距
 * @parent ----角色面板----
 * @type number
 * @min 1
 * @desc 角色能力值组的横向间距。
 * @default 90
 *
 * @param 角色能力值纵向间距
 * @parent ----角色面板----
 * @type number
 * @min 1
 * @desc 角色能力值组的纵向间距。
 * @default 33
 *
 * @param 平移-角色头像 X
 * @parent ----角色面板----
 * @desc 以角色面板的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default 90
 *
 * @param 平移-角色头像 Y
 * @parent ----角色面板----
 * @desc 以角色面板的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default -65
 * 
 * @param ---角色头像 1至20---
 * @parent ----角色面板----
 * @default 
 *
 * @param 角色头像-1
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-2
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-3
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-4
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-5
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-6
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-7
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-8
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-9
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-10
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-11
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-12
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-13
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-14
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-15
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-16
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-17
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-18
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-19
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-20
 * @parent ---角色头像 1至20---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 * 
 * @param ---角色头像21至40---
 * @parent ----角色面板----
 * @default 
 *
 * @param 角色头像-21
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-22
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-23
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-24
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-25
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-26
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-27
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-28
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-29
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-30
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-31
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-32
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-33
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-34
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-35
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-36
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-37
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-38
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-39
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-40
 * @parent ---角色头像21至40---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 * 
 * @param ---角色头像41至60---
 * @parent ----角色面板----
 * @default 
 *
 * @param 角色头像-41
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-42
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-43
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-44
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-45
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-46
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-47
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-48
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-49
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-50
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-51
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-52
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-53
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-54
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-55
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-56
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-57
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-58
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-59
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色头像-60
 * @parent ---角色头像41至60---
 * @desc 角色头像的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 资源-选择框
 * @parent ----选择框----
 * @desc 选择框的图片资源。
 * @default 技能界面-选择框
 * @require 1
 * @dir img/Menu__skill/
 * @type file
 *
 * @param 资源-界限箭头
 * @parent ----选择框----
 * @desc 界限箭头的图片资源。
 * @default 技能界面-界限箭头
 * @require 1
 * @dir img/Menu__skill/
 * @type file
 *
 * @param 资源-选择全部角色
 * @parent ----选择框----
 * @desc 选择全部角色的图片资源。
 * @default 技能界面-选择全部角色
 * @require 1
 * @dir img/Menu__skill/
 * @type file
 *
 * @param 平移-选择框-当前 X
 * @parent ----选择框----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 10
 *
 * @param 平移-选择框-当前 Y
 * @parent ----选择框----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 240
 *
 * @param 平移-选择框-隐藏 X
 * @parent ----选择框----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default -270
 *
 * @param 平移-选择框-隐藏 Y
 * @parent ----选择框----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 240
 *
 * @param 平移-选择框-上一个 X
 * @parent ----选择框----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default -10
 *
 * @param 平移-选择框-上一个 Y
 * @parent ----选择框----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 140
 *
 * @param 平移-选择框-下一个 X
 * @parent ----选择框----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default -10
 *
 * @param 平移-选择框-下一个 Y
 * @parent ----选择框----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 340
 *
 * @param 选择框字体大小
 * @parent ----选择框----
 * @type number
 * @min 1
 * @desc 选择框的字体大小。
 * @default 20
 *
 * @param 平移-选择框角色名 X
 * @parent ----选择框----
 * @desc 以框的位置为基准，x轴方向平移，单位像素。（可为负数）
 * @default 20
 *
 * @param 平移-选择框角色名 Y
 * @parent ----选择框----
 * @desc 以框的位置为基准，y轴方向平移，单位像素。（可为负数）
 * @default 40
 *
 * @param 资源-生命条
 * @parent ----选择框----
 * @desc 生命条的图片资源。
 * @default 技能界面-生命条
 * @require 1
 * @dir img/Menu__skill/
 * @type file
 *
 * @param 平移-生命条 X
 * @parent ----选择框----
 * @desc 以框的位置为基准，x轴方向平移，单位像素。（可为负数）
 * @default 16
 *
 * @param 平移-生命条 Y
 * @parent ----选择框----
 * @desc 以框的位置为基准，y轴方向平移，单位像素。（可为负数）
 * @default 30
 *
 * @param 平移-生命数值 X
 * @parent ----选择框----
 * @desc 以框的位置为基准，x轴方向平移，单位像素。（可为负数）
 * @default 20
 *
 * @param 平移-生命数值 Y
 * @parent ----选择框----
 * @desc 以框的位置为基准，y轴方向平移，单位像素。（可为负数）
 * @default 3
 *
 * @param 资源-魔法条
 * @parent ----选择框----
 * @desc 魔法条的图片资源。
 * @default 技能界面-魔法条
 * @require 1
 * @dir img/Menu__skill/
 * @type file
 *
 * @param 平移-魔法条 X
 * @parent ----选择框----
 * @desc 以框的位置为基准，x轴方向平移，单位像素。（可为负数）
 * @default 113
 *
 * @param 平移-魔法条 Y
 * @parent ----选择框----
 * @desc 以框的位置为基准，y轴方向平移，单位像素。（可为负数）
 * @default 30
 *
 * @param 平移-魔法数值 X
 * @parent ----选择框----
 * @desc 以框的位置为基准，x轴方向平移，单位像素。（可为负数）
 * @default 118
 *
 * @param 平移-魔法数值 Y
 * @parent ----选择框----
 * @desc 以框的位置为基准，y轴方向平移，单位像素。（可为负数）
 * @default 3
 *
 * @param 平移-选择框状态 X
 * @parent ----选择框----
 * @desc 以框的位置为基准，x轴方向平移，单位像素。（可为负数）
 * @default 165
 *
 * @param 平移-选择框状态 Y
 * @parent ----选择框----
 * @desc 以框的位置为基准，y轴方向平移，单位像素。（可为负数）
 * @default 30
 *
 * @help  
 * =============================================================================
 * +++ MOG - Scene Skill (v1.1) +++
 * By Moghunter 
 * https://mogplugins.wordpress.com/
 * =============================================================================
 * 可完全自己定义的技能界面设置。
 * 【现已支持插件关联资源的打包、加密】
 *
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.插件的作用域：菜单界面。
 *   可以设置技能面板(界面)的内容。
 * 2.该面板属于菜单面板，可以被菜单背景、菜单魔法圈等插件作用到。
 *   该面板关键字为：Scene_Skill
 *   更多关键字内容，见 "17.主菜单 > 菜单关键字.docx"。
 * 结构：
 *   (1.配置有六个部分，技能类型、技能窗口、角色框、角色面板、选择框、
 *      杂项数据。
 *   (2.技能面板可以通过按上一页(Q键)下一页(W键)直接切换当前角色。
 *   (3.道具界面和技能界面的 角色窗口 （选择治疗单位时出现的角色窗口）
 *      长的一模一样，但是实际上是两种不同的框。你可以设置不一样的样式。
 * 
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 资源路径：img/Menu__skill （Menu后面有两个下划线）
 * 资源路径：img/Menu__actorFaces （Menu后面有两个下划线）
 * 先确保项目img文件夹下是否有Menu__skill文件夹。
 * 先确保项目img文件夹下是否有Menu__actorFaces文件夹。
 * 要查看所有关联资源文件的插件，可以去看看"插件清单.xlsx"。
 * 如果没有，需要自己建立。需要配置资源文件：
 *
 * 资源-整体布局      (Menu__skill文件夹)
 * 资源-技能窗口      
 * 资源-类型窗口      
 * 资源-角色框        
 * 资源-角色框生命条  
 * 资源-角色框魔法条  
 *
 * 框头像-1   （Menu__actorFaces文件夹，头像1与编号为1的角色对应。）
 * 框头像-2
 * 框头像-3
 * ………
 * 
 * 资源-角色面板      (Menu__skill文件夹)
 * 资源-选择框        
 * 资源-界限箭头      
 * 资源-选择全部角色  
 * 资源-生命条        
 * 资源-魔法条        
 *
 * 角色头像-1 （Menu__actorFaces文件夹，头像1与编号为1的角色对应。）
 * 角色头像-2
 * 角色头像-3
 * ………
 * 
 * 1.框架资源都在Menu__skill文件夹中。
 * 2.角色图标、头像资源都在Menu__actorFaces文件夹中。
 *
 * -----------------------------------------------------------------------------
 * ----关于Drill_up优化：
 * [v1.1]
 * 使得该插件支持关联资源的打包、加密。
 * 部署时勾选去除无关文件，本插件中相关的文件不会被去除。
 * [v1.2]
 * 修改了选择框的排布与设置，使得插件能单独运行。
 * 大幅度修改了文件关联的位置。（因为要支持加密）
 * 大幅度添加了窗口相关控制变量。
 * 你如果不想要类型窗口，可以直接设置不显示。
 * 修复了qw切换角色时的错位问题。
 * [v1.3]
 * 添加了技能类型对齐方式。
 * [v1.4]
 * 优化了使用技能时，选择单位的动作，左键点击也能滚动选择。
 * [v1.5]
 * 修改了插件的分类。
 * [v1.6]
 * 修改了插件关联的资源文件夹。
 * [v1.7]
 * 添加了最大值编辑的支持。
 */

//
//插件记录：
//	该技能面板用到了道具界面相似定义的:
//		PartyWindowData
//		ActorDataWindow
//	为了能单独运行，这里换成了skill另外命名。
//	（mog就从没考虑过插件单独运行的情况嘛…多定义几个类又不要钱……）
//
 
//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_SceneSkill = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_SceneSkill');
  
	Moghunter.scSkill_HelpWindowX = Number(Moghunter.parameters['平移-帮助信息 X'] || 0);
	Moghunter.scSkill_HelpWindowY = Number(Moghunter.parameters['平移-帮助信息 Y'] || 516);	
  
	Moghunter.scSkill_ItemWindowX = Number(Moghunter.parameters['平移-技能窗口 X'] || 0);
	Moghunter.scSkill_ItemWindowY = Number(Moghunter.parameters['平移-技能窗口 Y'] || 126);  
	Moghunter.scSkill_ItemWindow_L_slideX = Number(Moghunter.parameters['技能窗口左起点 X'] || -60);
	Moghunter.scSkill_ItemWindow_L_slideY = Number(Moghunter.parameters['技能窗口左起点 Y'] || 0);  
	Moghunter.scSkill_ItemWindow_R_slideX = Number(Moghunter.parameters['技能窗口右起点 X'] || 60);
	Moghunter.scSkill_ItemWindow_R_slideY = Number(Moghunter.parameters['技能窗口右起点 Y'] || 0);  
	Moghunter.scSkill_ItemWindow_slideTime = Number(Moghunter.parameters['技能窗口移动时长'] || 20);  
	Moghunter.scSkill_Wlayout_visible = String(Moghunter.parameters['是否使用技能窗口布局'] || "true") === "true";
	Moghunter.scSkill_WlayoutX = Number(Moghunter.parameters['平移-技能窗口布局 X'] || -33);
	Moghunter.scSkill_WlayoutY = Number(Moghunter.parameters['平移-技能窗口布局 Y'] || -56);	
	Moghunter.scSkill_ItemWindowWidth = Number(Moghunter.parameters['技能窗口宽度'] || 370);
	Moghunter.scSkill_ItemWindowHeight = Number(Moghunter.parameters['技能窗口高度'] || 400);
	Moghunter.scSkill_ItemWindow_fontsize = Number(Moghunter.parameters['技能窗口字体大小'] || 22);
	Moghunter.scSkill_ItemWindow_col = Number(Moghunter.parameters['技能窗口列数'] || 1);
	
	Moghunter.scSkill_TypeWindow_visible = String(Moghunter.parameters['是否显示技能类型窗口'] || "true") === "true";
	Moghunter.scSkill_TypeWindowX = Number(Moghunter.parameters['平移-类型窗口 X'] || 0);
	Moghunter.scSkill_TypeWindowY = Number(Moghunter.parameters['平移-类型窗口 Y'] || 200);  	
	Moghunter.scSkill_TypeWindow_slideX = Number(Moghunter.parameters['类型窗口起点 X'] || -200);
	Moghunter.scSkill_TypeWindow_slideY = Number(Moghunter.parameters['类型窗口起点 Y'] || 0);  	
	Moghunter.scSkill_TypeWindow_slideTime = Number(Moghunter.parameters['类型窗口移动时长'] || 20);  
	Moghunter.scSkill_Tlayout_visible = String(Moghunter.parameters['是否使用类型窗口布局'] || "true") === "true";
	Moghunter.scSkill_TlayoutX = Number(Moghunter.parameters['平移-类型窗口布局 X'] || 0);
	Moghunter.scSkill_TlayoutY = Number(Moghunter.parameters['平移-类型窗口布局 Y'] || -10);	
	Moghunter.scSkill_TypeWindowWidth = Number(Moghunter.parameters['类型窗口宽度'] || 210);
	Moghunter.scSkill_TypeWindowHeight = Number(Moghunter.parameters['类型窗口高度'] || 180);
	Moghunter.scSkill_TypeWindow_fontsize = Number(Moghunter.parameters['类型窗口字体大小'] || 22);
	Moghunter.scSkill_TypeWindow_col = Number(Moghunter.parameters['类型窗口列数'] || 1);
    Moghunter.scSkill_TypeWindow_align  = String(Moghunter.parameters['类型窗口对齐方式'] || "left");	
						
    Moghunter.scSkill_AS_X = Number(Moghunter.parameters['平移-角色框 X'] || 260);					
	Moghunter.scSkill_AS_Y = Number(Moghunter.parameters['平移-角色框 Y'] || 0);					
    Moghunter.scSkill_AS_FaceX = Number(Moghunter.parameters['平移-框头像 X'] || 10);					
	Moghunter.scSkill_AS_FaceY = Number(Moghunter.parameters['平移-框头像 Y'] || 15);
	Moghunter.scSkill_AS_hp_X = Number(Moghunter.parameters['平移-角色框生命值 X'] || 100);		
	Moghunter.scSkill_AS_hp_Y = Number(Moghunter.parameters['平移-角色框生命值 Y'] || 10);	
	Moghunter.scSkill_AS_mp_X = Number(Moghunter.parameters['平移-角色框魔法值 X'] || 195);		
	Moghunter.scSkill_AS_mp_Y = Number(Moghunter.parameters['平移-角色框魔法值 Y'] || 10);	
	Moghunter.scSkill_AS_name_X = Number(Moghunter.parameters['平移-角色框角色名 X'] || 90);		
	Moghunter.scSkill_AS_name_Y = Number(Moghunter.parameters['平移-角色框角色名 Y'] || 50);	
	Moghunter.scSkill_AS_ParFontSize = Number(Moghunter.parameters['角色框字体大小'] || 22);	 	
	Moghunter.scSkill_AS_MeterHPX = Number(Moghunter.parameters['平移-角色框生命条 X'] || 88);		
	Moghunter.scSkill_AS_MeterHPY = Number(Moghunter.parameters['平移-角色框生命条 Y'] || 38);	
	Moghunter.scSkill_AS_MeterMPX = Number(Moghunter.parameters['平移-角色框魔法条 X'] || 187);		
	Moghunter.scSkill_AS_MeterMPY = Number(Moghunter.parameters['平移-角色框魔法条 Y'] || 38);	
	Moghunter.scSkill_AS_StatesX = Number(Moghunter.parameters['平移-角色框状态 X'] || 214);		
	Moghunter.scSkill_AS_StatesY = Number(Moghunter.parameters['平移-角色框状态 Y'] || 51);	
	
	Moghunter.scSkill_ActorWinX = Number(Moghunter.parameters['平移-角色面板 X'] || 600);
	Moghunter.scSkill_ActorWinY = Number(Moghunter.parameters['平移-角色面板 Y'] || 200);
	Moghunter.scSkill_ActorWin_sildeX = Number(Moghunter.parameters['角色面板起点 X'] || 100);
	Moghunter.scSkill_ActorWin_sildeY = Number(Moghunter.parameters['角色面板起点 Y'] || 0); 			
	Moghunter.scSkill_ActorWin_sildeTime = Number(Moghunter.parameters['角色面板移动时长'] || 30);
	Moghunter.scSkill_ActorWinlayout_X = Number(Moghunter.parameters['平移-角色面板布局 X'] || 0);
	Moghunter.scSkill_ActorWinlayout_Y = Number(Moghunter.parameters['平移-角色面板布局 Y'] || 0);
	Moghunter.scSkill_ActorParFontSize = Number(Moghunter.parameters['角色面板字体大小'] || 20);
	           
    Moghunter.scSkill_ActorFaceX = Number(Moghunter.parameters['平移-角色头像 X'] || 90); 
    Moghunter.scSkill_ActorFaceY = Number(Moghunter.parameters['平移-角色头像 Y'] || -65);
    Moghunter.scSkill_ActorStatesX = Number(Moghunter.parameters['平移-角色状态 X'] || 23); 
    Moghunter.scSkill_ActorStatesY = Number(Moghunter.parameters['平移-角色状态 Y'] || 15);
    Moghunter.scSkill_ActorParX = Number(Moghunter.parameters['平移-角色能力值组 X'] || 0); 
    Moghunter.scSkill_ActorParY = Number(Moghunter.parameters['平移-角色能力值组 Y'] || 0);
    Moghunter.scSkill_ActorPar_hor = Number(Moghunter.parameters['角色能力值横向间距'] || 90);
    Moghunter.scSkill_ActorPar_ver = Number(Moghunter.parameters['角色能力值纵向间距'] || 33);
    Moghunter.scSkill_Actor_NameX = Number(Moghunter.parameters['平移-角色名 X'] || 70); 
    Moghunter.scSkill_Actor_NameY = Number(Moghunter.parameters['平移-角色名 Y'] || 30);		
	
    Moghunter.scSkill_PartyX = Number(Moghunter.parameters['平移-选择框-当前 X'] || 10); 
    Moghunter.scSkill_PartyY = Number(Moghunter.parameters['平移-选择框-当前 Y'] || 240);
    Moghunter.scSkill_PartyX_hide = Number(Moghunter.parameters['平移-选择框-隐藏 X'] || 270); 
    Moghunter.scSkill_PartyY_hide = Number(Moghunter.parameters['平移-选择框-隐藏 Y'] || 240);
    Moghunter.scSkill_PartyX_last = Number(Moghunter.parameters['平移-选择框-上一个 X'] || -10); 
    Moghunter.scSkill_PartyY_last = Number(Moghunter.parameters['平移-选择框-上一个 Y'] || 140);
    Moghunter.scSkill_PartyX_next = Number(Moghunter.parameters['平移-选择框-下一个 X'] || -10); 
    Moghunter.scSkill_PartyY_next = Number(Moghunter.parameters['平移-选择框-下一个 Y'] || 340);
	Moghunter.scSkill_PartyFontSize = Number(Moghunter.parameters['选择框字体大小'] || 20); 
    Moghunter.scSkill_PartyNameX = Number(Moghunter.parameters['平移-选择框角色名 X'] || 20); 
    Moghunter.scSkill_PartyNameY = Number(Moghunter.parameters['平移-选择框角色名 Y'] || 40);	
    Moghunter.scSkill_PartyHPNumberX = Number(Moghunter.parameters['平移-生命数值 X'] || 20); 
    Moghunter.scSkill_PartyHPNumberY = Number(Moghunter.parameters['平移-生命数值 Y'] || 3);	
    Moghunter.scSkill_PartyMPNumberX = Number(Moghunter.parameters['平移-魔法数值 X'] || 118); 
    Moghunter.scSkill_PartyMPNumberY = Number(Moghunter.parameters['平移-魔法数值 Y'] || 3);		
    Moghunter.scSkill_PartyHPMeterX = Number(Moghunter.parameters['平移-生命条 X'] || 16); 
    Moghunter.scSkill_PartyHPMeterY = Number(Moghunter.parameters['平移-生命条 Y'] || 30);	
    Moghunter.scSkill_PartyMPMeterX = Number(Moghunter.parameters['平移-魔法条 X'] || 113); 
    Moghunter.scSkill_PartyMPMeterY = Number(Moghunter.parameters['平移-魔法条 Y'] || 30);	
    Moghunter.scSkill_PartyStatusX = Number(Moghunter.parameters['平移-选择框状态 X'] || 165); 
    Moghunter.scSkill_PartyStatusY = Number(Moghunter.parameters['平移-选择框状态 Y'] || 39);	
	
	Moghunter.src_Skill_menu_Layout = String(Moghunter.parameters['资源-整体布局']);
	Moghunter.src_Skill_menu_board = String(Moghunter.parameters['资源-技能窗口']);
	Moghunter.src_Skill_menu_type_board = String(Moghunter.parameters['资源-类型窗口']);
	Moghunter.src_Skill_as_layout = String(Moghunter.parameters['资源-角色框']);
	Moghunter.src_Skill_as_hp_meter = String(Moghunter.parameters['资源-角色框生命条']);
	Moghunter.src_Skill_as_mp_meter = String(Moghunter.parameters['资源-角色框魔法条']);
	Moghunter.src_Skill_actor_Layout = String(Moghunter.parameters['资源-角色面板']);
	Moghunter.src_Skill_select_Layout = String(Moghunter.parameters['资源-选择框']);
	Moghunter.src_Skill_select_arrow = String(Moghunter.parameters['资源-界限箭头']);
	Moghunter.src_Skill_select_all = String(Moghunter.parameters['资源-选择全部角色']);
	Moghunter.src_Skill_select_hpmeter = String(Moghunter.parameters['资源-生命条']);
	Moghunter.src_Skill_select_mpmeter = String(Moghunter.parameters['资源-魔法条']);
	
	Moghunter.menu_Skill_face_list_length = 60;
	Moghunter.menu_Skill_face_list = {};
	for (var i = 1; i <= Moghunter.menu_Skill_face_list_length ; i++ ) {
		Moghunter.menu_Skill_face_list[i] = Moghunter.parameters['角色头像-' + String(i) ];
	};
	Moghunter.menu_Skill_as_face_list_length = 60;
	Moghunter.menu_Skill_as_face_list = {};
	for (var i = 1; i <= Moghunter.menu_Skill_as_face_list_length ; i++ ) {
		Moghunter.menu_Skill_as_face_list[i] = Moghunter.parameters['框头像-' + String(i) ];
	};
	
//=============================================================================
// ** ImageManager
//=============================================================================

//==============================
// * Skill
//==============================
ImageManager.loadMenusskill = function(filename) {
    return this.loadBitmap('img/Menu__skill/', filename, 0, true);
};

ImageManager.loadMenusActorFace = function(filename) {
    return this.loadBitmap('img/Menu__actorFaces/', filename, 0, true);
};

//=============================================================================
// ** Scene Skill
//=============================================================================

//==============================
// * creaate
//==============================
var _mog_scnSkill_create = Scene_Skill.prototype.create;
Scene_Skill.prototype.create = function() {
    _mog_scnSkill_create.call(this);
	this.loadBitmaps();
	this._statusWindow.visible = false;
    this._helpWindow.opacity = 0;
	this._helpWindow.x = Moghunter.scSkill_HelpWindowX;
	this._helpWindow.y = Moghunter.scSkill_HelpWindowY;	
	
	this._skillTypeWindow.x = Moghunter.scSkill_TypeWindowX + Moghunter.scSkill_TypeWindow_slideX;
	this._skillTypeWindow.y = Moghunter.scSkill_TypeWindowY + Moghunter.scSkill_TypeWindow_slideY;
	this._skillTypeWindow.width	 = Moghunter.scSkill_TypeWindowWidth;
	this._skillTypeWindow.height = Moghunter.scSkill_TypeWindowHeight;
	this._skillTypeOrg = [Moghunter.scSkill_TypeWindowX,Moghunter.scSkill_TypeWindowY];
	this._skillTypeWindow.contentsOpacity = 0;
	this._skillTypeWindow._move = 0;
	this._skillTypeIndex = this._skillTypeWindow._index;
	this._wani = [-1,1,null];
};

var _mog_scSkill_Window_SkillType_update = Window_SkillType.prototype.update;
Window_SkillType.prototype.update = function() {
    _mog_scSkill_Window_SkillType_update.call(this);
	this.opacity = this.contentsOpacity;
};

Window_SkillType.prototype.maxCols = function() {
    return Moghunter.scSkill_TypeWindow_col;
};

Window_SkillType.prototype.standardFontSize = function() {
    return Moghunter.scSkill_TypeWindow_fontsize;
};
Window_SkillType.prototype.itemTextAlign = function() {
    return Moghunter.scSkill_TypeWindow_align;
};

//==============================
// * create Background
//==============================
var _mog_scSkill_createBackground = Scene_Skill.prototype.createBackground;
Scene_Skill.prototype.createBackground = function() {
	_mog_scSkill_createBackground.call(this);
	this._field = new Sprite();
	this.addChild(this._field);	
};

//==============================
// * create Item Window
//==============================
Scene_Skill.prototype.createItemWindow = function() {
	var ww = Moghunter.scSkill_ItemWindowWidth;
	var wh = Moghunter.scSkill_ItemWindowHeight;
	var wx = Moghunter.scSkill_ItemWindowX + ((Graphics.boxWidth / 2) - (ww / 2));
    var wy = Moghunter.scSkill_ItemWindowY;
    this._itemWindow = new Window_SkillListM(wx, wy, ww, wh);
    this._itemWindow.setHelpWindow(this._helpWindow);
    this._itemWindow.setHandler('ok',     this.onItemOk.bind(this));
    this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));
    this._skillTypeWindow.setSkillWindow(this._itemWindow);
    this.addWindow(this._itemWindow);
	this._itemPosOrg = [this._itemWindow.x,this._itemWindow.y];	
    this._itemWindow._move = 0;
    this._itemWindow.x += Moghunter.scSkill_ItemWindow_L_slideX;
    this._itemWindow.y += Moghunter.scSkill_ItemWindow_L_slideY;
};

//==============================
// * update Skill Type Window
//==============================
Scene_Skill.prototype.updateSkillTypeWindow = function() {
	if (SceneManager.isSceneChanging()) {return};
	  if (this._skillTypeWindow.active) {
			this._skillTypeWindow._move += 1;
			this._skillTypeWindow.x -= Moghunter.scSkill_TypeWindow_slideX/Moghunter.scSkill_TypeWindow_slideTime;
			this._skillTypeWindow.y -= Moghunter.scSkill_TypeWindow_slideY/Moghunter.scSkill_TypeWindow_slideTime;
			this._skillTypeWindow.contentsOpacity += 256/Moghunter.scSkill_TypeWindow_slideTime;
		  if (this._skillTypeWindow._move > Moghunter.scSkill_TypeWindow_slideTime) {
			this._skillTypeWindow._move = Moghunter.scSkill_TypeWindow_slideTime;
			this._skillTypeWindow.x = Moghunter.scSkill_TypeWindowX;
			this._skillTypeWindow.y = Moghunter.scSkill_TypeWindowY;
			this._skillTypeWindow.contentsOpacity += 256;
		  };
	  } else {
			this._skillTypeWindow._move -= 1;
			this._skillTypeWindow.x += Moghunter.scSkill_TypeWindow_slideX/Moghunter.scSkill_TypeWindow_slideTime;
			this._skillTypeWindow.y += Moghunter.scSkill_TypeWindow_slideY/Moghunter.scSkill_TypeWindow_slideTime;
			this._skillTypeWindow.contentsOpacity -= 256/Moghunter.scSkill_TypeWindow_slideTime;
		  if (this._skillTypeWindow._move <= 0) {
			this._skillTypeWindow._move = 0;
			this._skillTypeWindow.x = Moghunter.scSkill_TypeWindowX + Moghunter.scSkill_TypeWindow_slideX;
			this._skillTypeWindow.y = Moghunter.scSkill_TypeWindowY + Moghunter.scSkill_TypeWindow_slideY;
			this._skillTypeWindow.contentsOpacity = 0;
		  };	  
	  };
};

//==============================
// * loadBitmaps
//==============================
Scene_Skill.prototype.loadBitmaps = function() {
	this._layImg = (ImageManager.loadMenusskill(Moghunter.src_Skill_menu_Layout));
	this._layItemImg = (ImageManager.loadMenusskill(Moghunter.src_Skill_menu_board));
	this._layTypeImg = (ImageManager.loadMenusskill(Moghunter.src_Skill_menu_type_board));
	if(!Moghunter.scSkill_Wlayout_visible){
		this._layItemImg = "";
	}
	if( !Moghunter.scSkill_Tlayout_visible ){
		this._layTypeImg = "";
	}
};

//==============================
// * create Sprites
//==============================
Scene_Skill.prototype.createSprites = function() {
	this.createLayout();
	this.createItemLayout();
	this.createTypeLayout();
	this.createPartyData();
	this.createActorData();
};

//==============================
// * create Actor Data
//==============================
Scene_Skill.prototype.createActorData = function() {
	this._ActorStatusWindow = new ActorStatusSkill(this.actor());
	this._ActorStatusWindow.x = Moghunter.scSkill_AS_X;
	this._ActorStatusWindow.y = Moghunter.scSkill_AS_Y;
	this._ActorOrg = [this._ActorStatusWindow.x,this._ActorStatusWindow.y];
	this._ActorStatusWindow.y = this._ActorOrg[1] - 100;
	this._ActorStatusWindow.opacity = 0;
	this._field.addChild(this._ActorStatusWindow);
};

//==============================
// * update Actor Status Window
//==============================
Scene_Skill.prototype.updateActorStatusWindow = function() {
	if (this._ActorStatusWindow.y < this._ActorOrg[1]) {this._ActorStatusWindow.y += 5
	    if (this._ActorStatusWindow.y > this._ActorOrg[1]) {this._ActorStatusWindow.y = this._ActorOrg[1]};
	};
	this._ActorStatusWindow.opacity += 10;
};

//==============================
// * create Sprites
//==============================
Scene_Skill.prototype.createLayout = function() {
	this._layout = new Sprite(this._layImg);
	this._field.addChild(this._layout);
};

//==============================
// * create Item Layout
//==============================
Scene_Skill.prototype.createItemLayout = function() {
	this._layoutItem = new Sprite(this._layItemImg);
	this._layoutItem.opacity = 0;
	this._field.addChild(this._layoutItem);
};

//==============================
// * create Type Layout
//==============================
Scene_Skill.prototype.createTypeLayout = function() {
	this._layoutType = new Sprite(this._layTypeImg);
	this._layoutType.opacity = 0;
	this._field.addChild(this._layoutType);
};

//==============================
// * update Type Layout
//==============================
Scene_Skill.prototype.updateTypeLayout = function() {
	this._layoutType.x = this._skillTypeWindow.x + Moghunter.scSkill_TlayoutX;
	this._layoutType.y = this._skillTypeWindow.y + Moghunter.scSkill_TlayoutY;
	this._layoutType.opacity = this._skillTypeWindow.contentsOpacity;

};

//==============================
// * update Item Layout
//==============================
Scene_Skill.prototype.updateItemLayout = function() {
	this._layoutItem.x = this._itemWindow.x + Moghunter.scSkill_WlayoutX;
	this._layoutItem.y = this._itemWindow.y + Moghunter.scSkill_WlayoutY;
	this._layoutItem.opacity = this._itemWindow.contentsOpacity;

};

//==============================
// * update Default Window
//==============================
Scene_Skill.prototype.updateDefaultWindow = function() {
    this._helpWindow.opacity = 0;
	this._statusWindow.opacity = 0;
	if( Moghunter.scSkill_Tlayout_visible ){
		this._skillTypeWindow.opacity = 0;
	}
};

//==============================
// * refresh Type Index
//==============================
Scene_Skill.prototype.refreshTypeIndex = function() {
    this._skillTypeIndex = this._skillTypeWindow._index;
	this._wani = [1,1,null];
	this._itemWindow.contentsOpacity = 0;		//刷新类型使用右滑
	this._itemWindow.x = this._itemPosOrg[0]+Moghunter.scSkill_ItemWindow_R_slideX;
	this._itemWindow.y = this._itemPosOrg[1]+Moghunter.scSkill_ItemWindow_R_slideY;
	this._itemWindow._move = 0;
};

//==============================
// * update Commands
//==============================
Scene_Skill.prototype.updateCommands = function() {
	if (this._wani[0] != 0) {return};
    if (this._itemWindow.active) {
		 //物品多于2列时需要作出判断（两种情况：index移不动了、index加到了下一行或者上一行）【世界地图用_oldindex，这里用_index，原因不明…】
		if (Input.isTriggered('right') ) {
			if( this._itemWindow.maxCols()>1 ){
				var cur_pos = this._itemWindow._index % this._itemWindow.maxCols();
				if( this._list_oldindex == this._itemWindow._index 
				 || cur_pos == 0 ){
				     this._wani = [1,0,null]; SoundManager.playCursor();
				}
			}else{
				this._wani = [1,0,null]; SoundManager.playCursor();
			}
		};
		if (Input.isTriggered('left')) {
			if( this._itemWindow.maxCols()>1 ){
				var cur_pos = this._itemWindow._index % this._itemWindow.maxCols();
				if( this._list_oldindex == this._itemWindow._index 
				 || cur_pos == this._itemWindow.maxCols()-1 ){
					 this._wani = [-1,0,null]; SoundManager.playCursor();
				  }
			}else{
				this._wani = [-1,0,null]; SoundManager.playCursor();
			}
		};
		this._list_oldindex = this._itemWindow._index;
	} else {
		 if (this._skillTypeIndex != this._skillTypeWindow._index) {this.refreshTypeIndex()};
	};
};

//==============================
// * addCatIndex
//==============================
Scene_Skill.prototype.addCatIndex = function(value) {
      this._skillTypeWindow._index += value;
	 if (this._skillTypeWindow._index >= this._skillTypeWindow.maxItems()) {this._skillTypeWindow._index = 0};
	 if (this._skillTypeWindow._index < 0) {this._skillTypeWindow._index = this._skillTypeWindow.maxItems() - 1};
	 if (this._wani[2] != null) { this._skillTypeWindow._index = this._wani[2]}
	 this._skillTypeWindow.update();
	 this._itemWindow.select(0);
	 this._list_oldindex = 0;
	 this._itemWindow.updateHelp();
	 this._skillTypeWindow.contentsOpacity = 0;
	if( Moghunter.scSkill_Tlayout_visible ){
		this._skillTypeWindow.opacity = 0;
	}
};

//==============================
// * addCatIndex
//==============================
Scene_Skill.prototype.updateItemWindow = function() {
    if (this._wani[0] != 0) {
		if (this._wani[0] === 1){
			this.waniSlideRight();
		} else {
			this.waniSlideLeft();
		};
	};
	if (this._wani[0] === 0) {
	    if (this._itemWindow.active) {
            this._itemWindow.contentsOpacity += 15;
    	} else {
		    if (this._itemWindow.contentsOpacity > 160) {
				this._itemWindow.contentsOpacity -= 15;
			};
	    };
	};
};

//==============================
// * wani Slide Right（向右滑，按左键）
//==============================
Scene_Skill.prototype.waniSlideRight = function() {
	if (this._wani[1] === 0 ) {
	    this._itemWindow.x += Moghunter.scSkill_ItemWindow_L_slideX/Moghunter.scSkill_ItemWindow_slideTime;
	    this._itemWindow.y += Moghunter.scSkill_ItemWindow_L_slideY/Moghunter.scSkill_ItemWindow_slideTime;
		this._itemWindow.contentsOpacity -= 256/Moghunter.scSkill_ItemWindow_slideTime;
		this._itemWindow._move -= 1;
		if(!Moghunter.scSkill_Wlayout_visible){
			this._itemWindow.opacity -= 256/Moghunter.scSkill_ItemWindow_slideTime;
		}
		if (this._itemWindow._move <= 0) {
			this._wani[1] = 1;
			this._itemWindow.x = this._itemPosOrg[0] + Moghunter.scSkill_ItemWindow_R_slideX;
			this._itemWindow.y = this._itemPosOrg[1] + Moghunter.scSkill_ItemWindow_R_slideY;
			this._itemWindow._move = 0;
			this.addCatIndex(this._wani[0])
		};
	} else {
	    this._itemWindow.x -= Moghunter.scSkill_ItemWindow_R_slideX/Moghunter.scSkill_ItemWindow_slideTime;
	    this._itemWindow.y -= Moghunter.scSkill_ItemWindow_R_slideY/Moghunter.scSkill_ItemWindow_slideTime;
		this._itemWindow.contentsOpacity += 256/Moghunter.scSkill_ItemWindow_slideTime;
		this._itemWindow._move += 1;
		if(!Moghunter.scSkill_Wlayout_visible){
			this._itemWindow.opacity += 256/Moghunter.scSkill_ItemWindow_slideTime;
		}
		if (this._itemWindow._move >= Moghunter.scSkill_ItemWindow_slideTime) {
			this._itemWindow.x = this._itemPosOrg[0];
			this._itemWindow.y = this._itemPosOrg[1];
			this._itemWindow.contentsOpacity = 255;
			this._itemWindow._move = Moghunter.scSkill_ItemWindow_slideTime;
			this._wani = [0,0,null];
		};
		
		if (this._skillTypeWindow.active && this._itemWindow.contentsOpacity > 160) {this._itemWindow.contentsOpacity = 160}
	};
};

//==============================
// * wani Slide Left（向左滑，按右键）
//==============================
Scene_Skill.prototype.waniSlideLeft = function() {
	if (this._wani[1] === 0 ) {
	   this._itemWindow.x += Moghunter.scSkill_ItemWindow_R_slideX/Moghunter.scSkill_ItemWindow_slideTime;
	    this._itemWindow.y += Moghunter.scSkill_ItemWindow_R_slideY/Moghunter.scSkill_ItemWindow_slideTime;
		this._itemWindow.contentsOpacity -= 256/Moghunter.scSkill_ItemWindow_slideTime;
		this._itemWindow._move -= 1;
		if(!Moghunter.scSkill_Wlayout_visible){
			this._itemWindow.opacity -= 256/Moghunter.scSkill_ItemWindow_slideTime;
		}
		if (this._itemWindow._move <= 0) {
			this._wani[1] = 1;
			this._itemWindow.x = this._itemPosOrg[0] + Moghunter.scSkill_ItemWindow_L_slideX;
			this._itemWindow.y = this._itemPosOrg[1] + Moghunter.scSkill_ItemWindow_L_slideY;
			this._itemWindow._move = 0;
			this.addCatIndex(this._wani[0])
		};
	} else {
	    this._itemWindow.x -= Moghunter.scSkill_ItemWindow_L_slideX/Moghunter.scSkill_ItemWindow_slideTime;
	    this._itemWindow.y -= Moghunter.scSkill_ItemWindow_L_slideY/Moghunter.scSkill_ItemWindow_slideTime;
		this._itemWindow.contentsOpacity += 256/Moghunter.scSkill_ItemWindow_slideTime;
		this._itemWindow._move += 1;
		if(!Moghunter.scSkill_Wlayout_visible){
			this._itemWindow.opacity += 256/Moghunter.scSkill_ItemWindow_slideTime;
		}
		if (this._itemWindow._move >= Moghunter.scSkill_ItemWindow_slideTime) {
			this._itemWindow.x = this._itemPosOrg[0];
			this._itemWindow.y = this._itemPosOrg[1];
			this._itemWindow.contentsOpacity = 255;
			this._itemWindow._move = Moghunter.scSkill_ItemWindow_slideTime;
            this._wani = [0,0,null];
		};
	};
};

//==============================
// * checkTouchOn Sprites
//==============================
Scene_Skill.prototype.checkTouchOnSprites = function() {
    if (this._actorWindow.active) {
	  	 var touch = false;
	     for (var i = 0; i < this._partyWindow.length; i++) {
		       if (this.isOnSprite2(this._partyWindow[i])) {this.setTouchParty(i);touch = true};
		 };
		 if (!this._actorWindow._cursorAll) {
			for (var i = 0; i < this._partyArrow.length; i++) {
				if (this.isOnSprite( this._partyArrow[i])) {this.setTouchArrow(i);touch = true};
			};
		 };
		 if (!touch) {
			 if (this.isOnSprite3(this._itemWindow)) {this.setTouchCancelPartyWindow()};
		 };
	 } else if (this._skillTypeWindow.active) {
		    if (this.isOnSprite3(this._itemWindow)) {this.setTouchOnWindow()};
	 } else if (this._itemWindow.active && !this.isOnSprite3(this._itemWindow)) {		
			 this._itemWindow.active = false;
		     this._skillTypeWindow.active = true;
	 };
};

//==============================
// * setTouchCancelPartyWindow
//==============================
Scene_Skill.prototype.setTouchCancelPartyWindow = function() {
	  this._itemWindow.active = true;
	  this._actorWindow.active = false;
	  this._actorWindow._cursorAll = false;
};

//==============================
// * Set Touch On Window
//==============================
Scene_Skill.prototype.setTouchOnWindow = function() {
	  this._skillTypeWindow.active = false;
	  this._itemWindow.active = true;
	  this._itemWindow.select(0);
};


//==============================
// * Set Touch Party
//==============================
Scene_Skill.prototype.setTouchParty = function(index) {
	var pIndex = this._actorWindow._index
	if( pIndex != index ){
		SoundManager.playCursor();
		this._actorWindow._index = index;
	}else{
		this._actorWindow.processOk();
	}
	//var pIndex = this._actorWindow._index
    //this._actorWindow._index = index;
	//this._actorWindow.processOk();
    //this._actorWindow._index = pIndex;
};

//==============================
// * Set Touch Arrow
//==============================
Scene_Skill.prototype.setTouchArrow = function(index) {
   if (index === 0) {
	    this.addIndexActorWindow(1);  
   } else {
	   this.addIndexActorWindow(-1);
   };
};

//==============================
// * Set Touch Type
//==============================
Scene_Skill.prototype.setTouchType = function(index) {
   this._wani = [1,0,index];
    SoundManager.playCursor();
};

//==============================
// * add Index Actor Window
//==============================
Scene_Skill.prototype.addIndexActorWindow = function(value) {
    this._actorWindow._index += value;
	if (this._actorWindow._index >= $gameParty.members().length) {this._actorWindow._index = 0};
	if (this._actorWindow._index < 0) {this._actorWindow._index = $gameParty.members().length - 1};
	SoundManager.playCursor();
};

//==============================
// * on Sprite
//==============================
Scene_Skill.prototype.isOnSprite = function(sprite) {
	 var cw = sprite.bitmap.width / 2;
	 var ch = sprite.bitmap.height / 2;
	 if (sprite.visible === false) {return false};
	 if (sprite.opacity === 0) {return false};
	 if (TouchInput.x < sprite.x - cw) {return false};
	 if (TouchInput.x > sprite.x + cw) {return false};
	 if (TouchInput.y < sprite.y - ch) {return false};
	 if (TouchInput.y > sprite.y + ch) {return false};
	 return true;	
};

//==============================
// * on Sprite
//==============================
Scene_Skill.prototype.isOnSprite2 = function(sprite) {
	 var cw = sprite.bitmap.width;
	 var ch = sprite.bitmap.height;
	 if (sprite.visible === false) {return false};
	 if (sprite.opacity === 0) {return false};
	 if (TouchInput.x < sprite.x ) {return false};
	 if (TouchInput.x > sprite.x + cw) {return false};
	 if (TouchInput.y < sprite.y ) {return false};
	 if (TouchInput.y > sprite.y + ch) {return false};
	 return true;	
};

//==============================
// * on Sprite
//==============================
Scene_Skill.prototype.isOnSprite3 = function(sprite) {
	 var cw = sprite.width;
	 var ch = sprite.height;
	 if (sprite.visible === false) {return false};
	 if (sprite.contentsOpacity === 0) {return false};
	 if (TouchInput.x < sprite.x ) {return false};
	 if (TouchInput.x > sprite.x + cw) {return false};
	 if (TouchInput.y < sprite.y ) {return false};
	 if (TouchInput.y > sprite.y + ch) {return false};
	 return true;	
};

//==============================
// * update Touch Screen
//==============================
Scene_Skill.prototype.updateTouchScreen = function() {
    if (TouchInput.isTriggered()) {this.checkTouchOnSprites()};
};


//==============================
// * update Actor Status
//==============================
Scene_Skill.prototype.updateActorStatus = function() {
	if (this._actorStatusIndex != this._actorWindow._index) {this.refreshStatusActor()};
	this._actorWindow.visible = false;
	this._actorWindow.x = -this._actorWindow.width;
	if (this._actorDataWindow) {this.updateActorSkillDataWindow()};
};

//==============================
// * update Actor Data Window
//==============================
Scene_Skill.prototype.updateActorSkillDataWindow = function() {
	if (this._actorWindow.active) {
	    var nx = Moghunter.scSkill_ActorWinX;
	    var ny = Moghunter.scSkill_ActorWinY;
		 this._actorDataWindow.opacity += 256/Moghunter.scSkill_ActorWin_sildeTime;
		 if(this._actorDataWindow.opacity >= 255){
			this._actorDataWindow.opacity = 255;
		}
    } else { 
	    var nx = Moghunter.scSkill_ActorWinX + Moghunter.scSkill_ActorWin_sildeX;
	    var ny = Moghunter.scSkill_ActorWinY + Moghunter.scSkill_ActorWin_sildeY;	
		this._actorDataWindow.opacity -= 256/Moghunter.scSkill_ActorWin_sildeTime;
		if(this._actorDataWindow.opacity <= 0){
			this._actorDataWindow.opacity = 0;
		}
    };
    this._actorDataWindow.x = this.commandMoveTo(this._actorDataWindow.x,nx,Moghunter.scSkill_ActorWin_sildeTime);
	this._actorDataWindow.y = this.commandMoveTo(this._actorDataWindow.y,ny,Moghunter.scSkill_ActorWin_sildeTime);
	this.updatePartyWindow();
};

//==============================
// * Command Move To
//==============================
Scene_Skill.prototype.commandMoveTo = function(value,real_value,speed) {
	if (value == real_value) {return value};
	var dnspeed = 3 + (Math.abs(value - real_value) / speed);
	if (value > real_value) {value -= dnspeed;
	    if (value < real_value) {value = real_value};}
    else if (value < real_value) {value  += dnspeed;
    	if (value  > real_value) {value  = real_value};		
    };
	return Math.floor(value);
};	

//==============================
// * refresh Status Actor
//==============================
Scene_Skill.prototype.refreshStatusActor = function() {
	this._actorStatusIndex = this._actorWindow._index;
	this._actorStatus = $gameParty.members()[this._actorWindow._index];
	if (this._actorStatus && !this._actorDataWindow) {this.createActorSkillDataWindow()
	} else {
	   if (this._actorStatus) {
		   this._actorDataWindow.setActor(this._actorStatus)
	       this._actorDataWindow.x = Moghunter.scSkill_ActorWinX + Moghunter.scSkill_ActorWin_sildeX;
		   this._actorDataWindow.y = Moghunter.scSkill_ActorWinY + Moghunter.scSkill_ActorWin_sildeY;	
		   this._actorDataWindow.opacity = 0;
	  };	
	};
};

//==============================
// * create Actor Data Window
//==============================
Scene_Skill.prototype.createActorSkillDataWindow = function() {
	this._actorDataWindow = new ActorSkillDataWindow();
	this._actorDataWindow.x = Moghunter.scSkill_ActorWinX + Moghunter.scSkill_ActorWin_sildeX;
	this._actorDataWindow.y = Moghunter.scSkill_ActorWinY + Moghunter.scSkill_ActorWin_sildeY;	
	this._actorDataWindow.opacity = 0;
	this._actorDataWindow.setActor(this._actorStatus);
	this.addChild(this._actorDataWindow);
};

//==============================
// * create Party Data
//==============================
Scene_Skill.prototype.createPartyData = function() {
    this._partyWindow = [];
	this._partyPos = [];
	this._partyAni = [];
	this._partyPos[0] = [Moghunter.scSkill_PartyX,Moghunter.scSkill_PartyY];
	this._partyPos[1] = [Moghunter.scSkill_PartyX_hide,Moghunter.scSkill_PartyY_hide];
	this._partyPos[2] = [Moghunter.scSkill_PartyX_last,Moghunter.scSkill_PartyY_last];
	this._partyPos[3] = [Moghunter.scSkill_PartyX_next,Moghunter.scSkill_PartyY_next];
	for (var i = 0; i < $gameParty.members().length; i++) {
		this._partyWindow[i] = new PartySkillWindowData($gameParty.members()[i]);
		this._partyWindow[i].opacity = 0;
		this._partyAni[i] = [0,0];
		this.addChild(this._partyWindow[i]);
	};
	this.createPartyArrow();
	this.createAllMembersScope();
};

//==============================
// * refresh Part Data
//==============================
Scene_Skill.prototype.refreshPartyData = function() {
	for (var i = 0; i < this._partyWindow.length; i++) {
		this._partyWindow[i].refresh();
	};
	this._actorDataWindow.refresh();
	this._ActorStatusWindow.refresh();
};

//==============================
// * start
//==============================
var _Scene_Skill_start = Scene_Skill.prototype.start;
Scene_Skill.prototype.start = function() {
    _Scene_Skill_start.call(this);
	if( !Moghunter.scSkill_TypeWindow_visible ){
		this._skillTypeWindow.deactivate();
		this._skillTypeWindow.hide();
		this._itemWindow.setStypeId(this._skillTypeWindow.currentExt());
		this._itemWindow.setHandler('cancel', this.popScene.bind(this));
		this._itemWindow.setHandler('pagedown', this.nextActor.bind(this));
		this._itemWindow.setHandler('pageup', this.previousActor.bind(this));
		this._itemWindow.activate();
		this._itemWindow.selectLast();
	}
};
//==============================
// * On Actor Change （角色切换）
//==============================
var _mog_scskillM_onActorChange = Scene_Skill.prototype.onActorChange;
Scene_Skill.prototype.onActorChange = function() {
	_mog_scskillM_onActorChange.call(this);
	if( !Moghunter.scSkill_TypeWindow_visible ){
		this._skillTypeWindow.deactivate();
		this._itemWindow.activate();
		return;
	}
	this._ActorStatusWindow._actor = this.actor();
	this._ActorStatusWindow.refresh();
	//this._ActorStatusWindow.y = this._ActorOrg[0] - 100;//角色框
	this._ActorStatusWindow.opacity = 0;
	this._skillTypeWindow.x = this._skillTypeOrg[0] + Moghunter.scSkill_TypeWindow_slideX;
	this._skillTypeWindow.y = this._skillTypeOrg[1] + Moghunter.scSkill_TypeWindow_slideY;
	this._wani = [1,1,null];
	this._itemWindow.contentsOpacity = 0;
	this._itemWindow.x = this._itemPosOrg[0] + Moghunter.scSkill_ItemWindow_R_slideX;
	this._itemWindow.y = this._itemPosOrg[1] + Moghunter.scSkill_ItemWindow_R_slideY;
	this._itemWindow._move = 0;
};


//==============================
// * update Party Window
//==============================
Scene_Skill.prototype.updatePartyWindow = function() {
	 for (var i = 0; i < this._partyWindow.length; i++) {
		 if (this._actorWindow.active) {
			 var c = this._actorWindow._index;
			 var n = this._actorWindow._index + 1;
			 var p = this._actorWindow._index - 1;
			 if (n >= $gameParty.members().length) {n = 0};
			 if (p < 0) {p = $gameParty.members().length - 1};
			 if (i === c) {
		         var nx = this._partyPos[0][0];
			     var ny = this._partyPos[0][1];
				 this._partyWindow[i].opacity += 25;
				 this.updateSlidePartyWin(i);	
			 } else {
				 this._partyAni[i] = [0,0];
				 if (p === i) {
					 var nx = this._partyPos[2][0];
					 var ny = this._partyPos[2][1];
				 } else if (n === i) {
					 var nx = this._partyPos[3][0];
					 var ny = this._partyPos[3][1];					 
				 } else {
					 var nx = this._partyPos[1][0];
					 var ny = this._partyPos[1][1];				 
				 };
				 if (this._partyWindow[i].opacity > 160) {
					 this._partyWindow[i].opacity -= 15;
					 if (this._partyWindow[i].opacity < 160) {
						 this._partyWindow[i].opacity = 160;
					 };
			     } else if (this._partyWindow[i].opacity < 160) {
					 this._partyWindow[i].opacity += 15;
					 if (this._partyWindow[i].opacity > 160) {
						 this._partyWindow[i].opacity = 160;
					 };					 
				 };
			 };
		 } else {
		     var nx = this._partyPos[1][0];
			 var ny = this._partyPos[1][1];
			 this._partyAni[i] = [0,0];
			 this._partyWindow[i].opacity -= 25;
		 };
		 nx += this._partyAni[i][0];
		 this._partyWindow[i].x = this.commandMoveTo(this._partyWindow[i].x,nx,20);
		 this._partyWindow[i].y = this.commandMoveTo(this._partyWindow[i].y,ny,20);
	 };
	 this.updatePartyArrow();
     this.updateAllMembersSprite();
};

//==============================
// * update Slide Party Win
//==============================
Scene_Skill.prototype.updateSlidePartyWin = function(i) {
	this._partyAni[i][1]++;
	if (this._partyAni[i][1] < 30) {
		this._partyAni[i][0] += 0.2;
	} else if (this._partyAni[i][1] < 60) {
	    this._partyAni[i][0] -= 0.2;
	} else {
		this._partyAni[i] = [0,0];
	};
};

//==============================
// * update Party Arrow
//==============================
Scene_Skill.prototype.updatePartyArrow = function() {
	for (var i = 0; i < this._partyArrow.length; i++) {
		 if (this._actorWindow.active) {
			 this.updateSlidePartyArrow();
			 var cw = this._partyWindow[0].width / 2;
			 var ch = this._partyWindow[0].height;
		     if (i === 0) {
				 var nx = this._partyPos[2][0] + cw;
				 var ny = this._partyPos[2][1] - this._partyArrow[i].height;	
				  ny += this._partyArrowAni[0];				 
			 } else {
				 var nx = this._partyPos[3][0] + cw;
				 var ny = this._partyPos[3][1] + ch + this._partyArrow[i].height;	
				  ny += -this._partyArrowAni[0];
			 };
			 this._partyArrow[i].opacity += 15;
	     } else {
		     var nx = this._partyPos[1][0];
			 var ny = this._partyPos[1][1];
			 this._partyArrow[i].opacity -= 15;		
	     };
		 this._partyArrow[i].x = this.commandMoveTo(this._partyArrow[i].x,nx,20);
		 this._partyArrow[i].y = this.commandMoveTo(this._partyArrow[i].y,ny,20);			 
	};
};

//==============================
// * update Slide Party Arrow
//==============================
Scene_Skill.prototype.updateSlidePartyArrow = function() {
	this._partyArrowAni[1]++;
	if (this._partyArrowAni[1] < 50) {
		this._partyArrowAni[0] += 0.14;
	} else if (this._partyArrowAni[1] < 100) {
	    this._partyArrowAni[0] -= 0.14;
	} else {
		this._partyArrowAni = [0,0];
	};
};

//==============================
// * create Party Arrow
//==============================
Scene_Skill.prototype.createPartyArrow = function() {
	this._partyArrow = [];
	this._partyArrowAni = [0,0];
	for (var i = 0; i < 2; i++) {
        this._partyArrow[i] = new Sprite(ImageManager.loadMenusskill(Moghunter.src_Skill_select_arrow));
		this._partyArrow[i].anchor.x = 0.5;
		this._partyArrow[i].anchor.y = 0.5;
		if ($gameParty.members().length < 4) {this._partyArrow[i].visible = false};
		if (i === 1) {this._partyArrow[i].scale.y = -1.00};
		this._partyArrow[i].opacity = 0;
		this.addChild(this._partyArrow[i]);
	};	
};

//==============================
// * create All Members Scope
//==============================
Scene_Skill.prototype.createAllMembersScope = function() {
     this._almSprite = new Sprite(ImageManager.loadMenusskill(Moghunter.src_Skill_select_all));
	 this._almSprite.anchor.x = 0.5;
	 this._almSprite.anchor.y = 0.5;
	 this._almSprite.visible = false;
     this.addChild(this._almSprite);
};

//==============================
// * updateAllMembers Sprite
//==============================
Scene_Skill.prototype.updateAllMembersSprite = function() {
	 this._almSprite.x = this._partyPos[0][0] + (this._partyWindow[0].width / 2);
	 this._almSprite.y = this._partyPos[0][1] + (this._partyWindow[0].height / 2);
	 this._almSprite.visible = this._actorWindow._cursorAll;
};

//==============================
// * on Actor Cancel
//==============================
var _mog_scSkill_onActorCancel = Scene_Skill.prototype.onActorCancel;
Scene_Skill.prototype.onActorCancel = function() {
    _mog_scSkill_onActorCancel.call(this);
	this._actorWindow._cursorAll = false;
};

//==============================
// * refresh Actor WD
//==============================
Scene_Skill.prototype.refreshActorWD = function() {
	 $gameTemp._refreshScActorWd = false;
	for (var i = 0; i < this._partyWindow.length; i++) {
		this._partyWindow[i].refresh();
	};
	if(this._actorDataWindow){
		this._actorDataWindow.refresh();
	}
	if(this._ActorStatusWindow){
		this._ActorStatusWindow.refresh();
	}
};	

//==============================
// * process OK
//==============================
var _mog_scSkill_wmact_useItem = Scene_Skill.prototype.useItem;
Scene_Skill.prototype.useItem = function() {
    _mog_scSkill_wmact_useItem.call(this);
	this.refreshActorWD()
};

//==============================
// * update
//==============================
var _mog_scnSkill_update = Scene_Skill.prototype.update;
Scene_Skill.prototype.update = function() {
    _mog_scnSkill_update.call(this);
	this.updateDefaultWindow();
	if (!this._layout) {
		if (this._layImg.isReady()) {this.createSprites()};
		return
	};
	this.updateItemWindow();
	this.updateCommands();
	this.updateTouchScreen();
	if (this._skillTypeWindow) {this.updateSkillTypeWindow()};
	if (this._ActorStatusWindow) {this.updateActorStatusWindow()};
	if (this._actorWindow) {this.updateActorStatus()};
	if (this._layoutItem) {this.updateItemLayout()};
	if (this._layoutType) {this.updateTypeLayout()};
};

//=============================================================================
// * Window Skill List M
//=============================================================================
function Window_SkillListM() {
    this.initialize.apply(this, arguments);
}

Window_SkillListM.prototype = Object.create(Window_Selectable.prototype);
Window_SkillListM.prototype.constructor = Window_SkillListM;

//==============================
// * Initialize
//==============================
Window_SkillListM.prototype.initialize = function(x, y, width, height) {
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this._actor = null;
    this._stypeId = 0;
    this._data = [];
};

//==============================
// * set Actor
//==============================
Window_SkillListM.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.refresh();
        this.resetScroll();
    }
};

//==============================
// * setStypeID
//==============================
Window_SkillListM.prototype.setStypeId = function(stypeId) {
    if (this._stypeId !== stypeId) {
        this._stypeId = stypeId;
        this.refresh();
        this.resetScroll();
    };
};

//==============================
// * max Cols
//==============================
Window_SkillListM.prototype.maxCols = function() {
    return Moghunter.scSkill_ItemWindow_col;
};

//==============================
// * spacing
//==============================
Window_SkillListM.prototype.spacing = function() {
    return 8;
};

//==============================
// * maxItems
//==============================
Window_SkillListM.prototype.maxItems = function() {
    return this._data ? this._data.length : 1;
};

//==============================
// * Item
//==============================
Window_SkillListM.prototype.item = function() {
    return this._data && this.index() >= 0 ? this._data[this.index()] : null;
};

//==============================
// * Is Current Item Enabled
//==============================
Window_SkillListM.prototype.isCurrentItemEnabled = function() {
    return this.isEnabled(this._data[this.index()]);
};

//==============================
// * Includes
//==============================
Window_SkillListM.prototype.includes = function(item) {
    return item && item.stypeId === this._stypeId;
};

//==============================
// * Is Item Enabled
//==============================
Window_SkillListM.prototype.isEnabled = function(item) {
    return this._actor && this._actor.canUse(item);
};

//==============================
// * make Item List
//==============================
Window_SkillListM.prototype.makeItemList = function() {
    if (this._actor) {
        this._data = this._actor.skills().filter(function(item) {
            return this.includes(item);
        }, this);
    } else {
        this._data = [];
    }
};

//==============================
// * Select Last
//==============================
Window_SkillListM.prototype.selectLast = function() {
    var skill;
    if ($gameParty.inBattle()) {
        skill = this._actor.lastBattleSkill();
    } else {
        skill = this._actor.lastMenuSkill();
    }
    var index = this._data.indexOf(skill);
    this.select(index >= 0 ? index : 0);
};

//==============================
// * Draw Item
//==============================
Window_SkillListM.prototype.drawItem = function(index) {
	this.contents.fontSize = Moghunter.scSkill_ItemWindow_fontsize;
    var skill = this._data[index];
    if (skill) {
        var costWidth = this.costWidth();
        var rect = this.itemRect(index);
        rect.width -= this.textPadding();
        this.changePaintOpacity(this.isEnabled(skill));
        this.drawItemName(skill, rect.x, rect.y, rect.width - costWidth);
        this.drawSkillCost(skill, rect.x, rect.y, rect.width);
        this.changePaintOpacity(1);
    }
};

//==============================
// * cost Width
//==============================
Window_SkillListM.prototype.costWidth = function() {
    return this.textWidth('000');
};

//==============================
// * draw Skill Cost
//==============================
Window_SkillListM.prototype.drawSkillCost = function(skill, x, y, width) {
    if (this._actor.skillTpCost(skill) > 0) {
        this.changeTextColor(this.tpCostColor());
        this.drawText(this._actor.skillTpCost(skill), x, y, width, 'right');
    } else if (this._actor.skillMpCost(skill) > 0) {
        this.changeTextColor(this.mpCostColor());
        this.drawText(this._actor.skillMpCost(skill), x, y, width, 'right');
    }
};

//==============================
// * update Help
//==============================
Window_SkillListM.prototype.updateHelp = function() {
    this.setHelpWindowItem(this.item());
};

//==============================
// * Refresh
//==============================
Window_SkillListM.prototype.refresh = function() {
    this.makeItemList();
    this.createContents();
    this.drawAllItems();
};

//==============================
// * update
//==============================
var _mog_WindowSkillListM_update = Window_SkillListM.prototype.update;
Window_SkillListM.prototype.update = function() {
	if(!Moghunter.scSkill_Wlayout_visible){
		this.opacity = this.contentsOpacity;
	}else{
		this.opacity = 0;
	}
	if (this.contentsOpacity != 255) {return};
    _mog_WindowSkillListM_update.call(this);
	//this.opacity = 0;
	if(!Moghunter.scSkill_Wlayout_visible){
		this.opacity = this.contentsOpacity;
	}else{
		this.opacity = 0;
	}
};


//=============================================================================
// * Party Window Data
//=============================================================================
function PartySkillWindowData() {
    this.initialize.apply(this, arguments);
};

PartySkillWindowData.prototype = Object.create(Sprite.prototype);
PartySkillWindowData.prototype.constructor = PartySkillWindowData;

//==============================
// * Initialize
//==============================
PartySkillWindowData.prototype.initialize = function(actor) {
    Sprite.prototype.initialize.call(this);	
	this.loadBitmaps();
    this._actor = actor;
};

//==============================
// * Refresh
//==============================
PartySkillWindowData.prototype.loadBitmaps = function() {
    this._layImg = ImageManager.loadMenusskill(Moghunter.src_Skill_select_Layout);
	this._hpMeterImg = ImageManager.loadMenusskill(Moghunter.src_Skill_select_hpmeter);
	this._mpMeterImg = ImageManager.loadMenusskill(Moghunter.src_Skill_select_mpmeter);
};

//==============================
// * create Sprites
//==============================
PartySkillWindowData.prototype.createSprites = function() {
	this.bitmap = this._layImg;
	this.createPar();
	this.createHPMeter();
	this.createMPMeter();
	this.createStates();
	this.refresh()
};

//==============================
// * Refresh
//==============================
PartySkillWindowData.prototype.refresh = function() {
    this.refreshPar();
	this.refreshHPMeter();
	this.refreshMPMeter();
	this.refresh_states();
};

//==============================
// * createPar
//==============================
PartySkillWindowData.prototype.createPar = function() {
    this._par = new Sprite(new Bitmap(320,160));
	this._par.bitmap.fontSize = Moghunter.scSkill_PartyFontSize;
	this.addChild(this._par);
};

//==============================
// * refresh Par
//==============================
PartySkillWindowData.prototype.refreshPar = function() {
     this._par.bitmap.clear();
	 this._par.bitmap.drawText(this._actor.hp,Moghunter.scSkill_PartyHPNumberX,Moghunter.scSkill_PartyHPNumberY,80,32,"right"); 
	 this._par.bitmap.drawText(this._actor.mp,Moghunter.scSkill_PartyMPNumberX,Moghunter.scSkill_PartyMPNumberY,80,32,"right"); 
	 this._par.bitmap.drawText(this._actor.name(),Moghunter.scSkill_PartyNameX,Moghunter.scSkill_PartyNameY,120,32,"left");
};

//==============================
// * createHP Meter
//==============================
PartySkillWindowData.prototype.createHPMeter = function() {
    this._hpMeter = new Sprite(this._hpMeterImg);
	this._hpMeter.x = Moghunter.scSkill_PartyHPMeterX;
	this._hpMeter.y = Moghunter.scSkill_PartyHPMeterY;
	this.addChild(this._hpMeter);
};

//==============================
// * refreshHP Meter
//==============================
PartySkillWindowData.prototype.refreshHPMeter = function() {
	var cw = this._hpMeterImg.width;
	var ch = this._hpMeterImg.height;
	var wid = cw * this._actor.hp / this._actor.mhp;
	this._hpMeter.setFrame(0,0,wid,cw);
};

//==============================
// * createHP Meter
//==============================
PartySkillWindowData.prototype.createMPMeter = function() {
    this._mpMeter = new Sprite(this._mpMeterImg);
	this._mpMeter.x = Moghunter.scSkill_PartyMPMeterX;
	this._mpMeter.y = Moghunter.scSkill_PartyMPMeterY;
	this.addChild(this._mpMeter);
};

//==============================
// * refreshMP Meter
//==============================
PartySkillWindowData.prototype.refreshMPMeter = function() {
	var cw = this._mpMeterImg.width;
	var ch = this._mpMeterImg.height;
	var wid = cw * this._actor.mp / this._actor.mmp;
	this._mpMeter.setFrame(0,0,wid,cw);
};


//==============================
// * Create States
//==============================
PartySkillWindowData.prototype.createStates = function() {
	this._states_data = [0,0,0];
	this._state_icon = new Sprite(ImageManager.loadSystem("IconSet"));
	this._state_icon.x = Moghunter.scSkill_PartyStatusX;
	this._state_icon.y = Moghunter.scSkill_PartyStatusY;
	this._state_icon.visible = false;
	this.addChild(this._state_icon);
	this.refresh_states();	
};
	
//==============================
// * Create States
//==============================
PartySkillWindowData.prototype.refresh_states = function() {
	this._states_data[0] = 0;
	this._states_data[2] = 0;
	this._state_icon.visible = false;
	if (this._actor.allIcons().length == 0) {this._states_data[1] = 0;return};
       if (this._actor.allIcons()[this._states_data[1]]) {	
		this._states_data[0] = this._actor.allIcons()[this._states_data[1]];
		this._state_icon.visible = true;
		var sx = this._states_data[0] % 16 * 32;
		var sy = Math.floor(this._states_data[0] / 16) * 32;
		this._state_icon.setFrame(sx, sy, 32, 32);
	   };
	this._states_data[1] += 1;
	if (this._states_data[1] >= this._actor.allIcons().length) {
		this._states_data[1] = 0
	};
};

//==============================
// * Update States
//==============================
PartySkillWindowData.prototype.update_states = function() {
	this._states_data[2] += 1;
	if (this.need_refresh_states()) {this.refresh_states();};
};	
	
//==============================
// * Need Refresh States
//==============================
PartySkillWindowData.prototype.need_refresh_states = function() {
	if (this._states_data[2] > 60) {return true};
	return false;
};	


//==============================
// * Update
//==============================
PartySkillWindowData.prototype.update = function() {
    Sprite.prototype.update.call(this);	
    if (!this._par && this._layImg.isReady()) {this.createSprites()};
	if (this._state_icon) {this.update_states()};
};


//=============================================================================
// * Actor Data Window
//=============================================================================
function ActorSkillDataWindow() {
    this.initialize.apply(this, arguments);
};

ActorSkillDataWindow.prototype = Object.create(Sprite.prototype)//角色面板不是窗口，而是一个容器！
ActorSkillDataWindow.prototype.constructor = ActorSkillDataWindow;

//==============================
// * Initialize
//==============================
ActorSkillDataWindow.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);	
    this._actor = null;
};

//==============================
// * setActor
//==============================
ActorSkillDataWindow.prototype.setActor = function(actor) {
     this._actor = actor;
	 if (!this._layout) {this.createSprites()};
	 this.refresh();
};

//==============================
// * create Sprites
//==============================
ActorSkillDataWindow.prototype.createSprites = function() {
     this.createLayout();
	 this.createStates();
	 this.createFaces();
	 this.createParameters();
};

//==============================
// * Refresh
//==============================
ActorSkillDataWindow.prototype.refresh = function() {
     this.refreshParameters();
	 this.refresh_states();	
	 this.refreshFaces();
};

//==============================
// * create Layout
//==============================
ActorSkillDataWindow.prototype.createLayout = function() {
     this._layout = new Sprite(ImageManager.loadMenusskill(Moghunter.src_Skill_actor_Layout));
	 this._layout.x = Moghunter.scSkill_ActorWinlayout_X;
	 this._layout.y = Moghunter.scSkill_ActorWinlayout_Y;
	 this.addChild(this._layout);
};

//==============================
// * create Parameters
//==============================
ActorSkillDataWindow.prototype.createParameters = function() {
     this._par = new Sprite(new Bitmap(Graphics.boxWidth,Graphics.boxHeight));
	 this._par.bitmap.fontSize = Moghunter.scSkill_ActorParFontSize;
	 this._par.x = Moghunter.scSkill_ActorParX;
	 this._par.y = Moghunter.scSkill_ActorParY;
	 this.addChild(this._par);
};

//==============================
// * refresh Parameters
//==============================
ActorSkillDataWindow.prototype.refreshParameters = function() {
     this._par.bitmap.clear();
	 this._par.bitmap.drawText(this._actor.hp,
	 -60,Moghunter.scSkill_ActorPar_ver*2,
	 160,32,"right");
	 this._par.bitmap.drawText(this._actor.mhp,
	 -60+Moghunter.scSkill_ActorPar_hor,Moghunter.scSkill_ActorPar_ver*2,
	 160,32,"right");
	 this._par.bitmap.drawText(this._actor.mp,
	 -60,Moghunter.scSkill_ActorPar_ver*3,
	 160,32,"right");
	 this._par.bitmap.drawText(this._actor.mmp,
	 -60+Moghunter.scSkill_ActorPar_hor,Moghunter.scSkill_ActorPar_ver*3,
	 160,32,"right");	 
	 this._par.bitmap.drawText(this._actor.atk,
	 -60,Moghunter.scSkill_ActorPar_ver*4,
	 160,32,"right"); 
	 this._par.bitmap.drawText(this._actor.def,
	 -60+Moghunter.scSkill_ActorPar_hor,Moghunter.scSkill_ActorPar_ver*4,
	 160,32,"right"); 
	 this._par.bitmap.drawText(this._actor.mat,
	 -60,Moghunter.scSkill_ActorPar_ver*5,
	 160,32,"right"); 
	 this._par.bitmap.drawText(this._actor.mdf,
	 -60+Moghunter.scSkill_ActorPar_hor,Moghunter.scSkill_ActorPar_ver*5,
	 160,32,"right");
	 this._par.bitmap.drawText(this._actor.agi,
	 -60,Moghunter.scSkill_ActorPar_ver*6,
	 160,32,"right"); 
	 this._par.bitmap.drawText(this._actor.luk,
	 -60+Moghunter.scSkill_ActorPar_hor,Moghunter.scSkill_ActorPar_ver*6,
	 160,32,"right");	
	 this._par.bitmap.drawText(this._actor.name(),
	  Moghunter.scSkill_Actor_NameX, Moghunter.scSkill_Actor_NameY,
	 160,32,"left");	 
};

//==============================
// * Create States
//==============================
ActorSkillDataWindow.prototype.createStates = function() {
	this._states_data = [0,0,0];
	this._state_icon = new Sprite(ImageManager.loadSystem("IconSet"));
	this._state_icon.x = Moghunter.scSkill_ActorStatesX;
	this._state_icon.y = Moghunter.scSkill_ActorStatesY;
	this._state_icon.visible = false;
	this.addChild(this._state_icon);
	this.refresh_states();	
};
	
//==============================
// * Create States
//==============================
ActorSkillDataWindow.prototype.refresh_states = function() {
	this._states_data[0] = 0;
	this._states_data[2] = 0;
	this._state_icon.visible = false;
	if (this._actor.allIcons().length == 0) {this._states_data[1] = 0;return};
       if (this._actor.allIcons()[this._states_data[1]]) {	
		this._states_data[0] = this._actor.allIcons()[this._states_data[1]];
		this._state_icon.visible = true;
		var sx = this._states_data[0] % 16 * 32;
		var sy = Math.floor(this._states_data[0] / 16) * 32;
		this._state_icon.setFrame(sx, sy, 32, 32);
	   };
	this._states_data[1] += 1;
	if (this._states_data[1] >= this._actor.allIcons().length) {
		this._states_data[1] = 0
	};
};

//==============================
// * Update States
//==============================
ActorSkillDataWindow.prototype.update_states = function() {
	this._states_data[2] += 1;
	if (this.need_refresh_states()) {this.refresh_states();};
};	
	
//==============================
// * Need Refresh States
//==============================
ActorSkillDataWindow.prototype.need_refresh_states = function() {
	if (this._states_data[2] > 60) {return true};
	return false;
};	

//==============================
// * create Faces
//==============================
ActorSkillDataWindow.prototype.createFaces = function() {
     this._faces = new Sprite();
	 this._faces.x = Moghunter.scSkill_ActorFaceX;
	 this._faces.y = Moghunter.scSkill_ActorFaceY;
	 this.addChild(this._faces);
};

//==============================
// * refresh Faces
//==============================
ActorSkillDataWindow.prototype.refreshFaces = function() {
     this._faces.bitmap = ImageManager.loadMenusActorFace(Moghunter.menu_Skill_face_list[this._actor._actorId])
};

//==============================
// * update
//==============================
ActorSkillDataWindow.prototype.update = function() {
    Sprite.prototype.update.call(this);	
	if (!this._actor) {return};
    this.update_states();
};


//=============================================================================
// * Party Window Data
//=============================================================================
function ActorStatusSkill() {
    this.initialize.apply(this, arguments);
};

ActorStatusSkill.prototype = Object.create(Sprite.prototype);
ActorStatusSkill.prototype.constructor = ActorStatusSkill;

//==============================
// * Initialize
//==============================
ActorStatusSkill.prototype.initialize = function(actor) {
    Sprite.prototype.initialize.call(this);	
	this.loadBitmaps();
    this._actor = actor;	
};

//==============================
// * Refresh
//==============================
ActorStatusSkill.prototype.loadBitmaps = function() {
    this._layImg = ImageManager.loadMenusskill(Moghunter.src_Skill_as_layout);
	this._hpMeterImg = ImageManager.loadMenusskill(Moghunter.src_Skill_as_hp_meter);
	this._mpMeterImg = ImageManager.loadMenusskill(Moghunter.src_Skill_as_mp_meter);
};

//==============================
// * create Sprites
//==============================
ActorStatusSkill.prototype.createSprites = function() {
	this.bitmap = this._layImg;
 	this.createPar();
	this.createHPMeter();
	this.createMPMeter();
	this.createStates();
	this.createFace();
	this.refresh()
};

//==============================
// * Refresh
//==============================
ActorStatusSkill.prototype.refresh = function() {
    this.refreshPar();
	this.refreshHPMeter();
	this.refreshMPMeter();
	this.refresh_states();
	this.refreshFace();
};

//==============================
// * Refresh Face
//==============================
ActorStatusSkill.prototype.refreshFace = function() {
     this._face.bitmap = ImageManager.loadMenusActorFace(Moghunter.menu_Skill_as_face_list[this._actor._actorId]);
};

//==============================
// * create Face
//==============================
ActorStatusSkill.prototype.createFace = function() {
     this._face = new Sprite();
	 this._face.x = Moghunter.scSkill_AS_FaceX;
	 this._face.y = Moghunter.scSkill_AS_FaceY;
	 this.addChild(this._face);
};

//==============================
// * create Parameters
//==============================
ActorStatusSkill.prototype.createPar = function() {
     this._par = new Sprite(new Bitmap(Graphics.boxWidth,Graphics.boxHeight));
	 this._par.bitmap.fontSize = Moghunter.scSkill_AS_ParFontSize;
	 this._par.x = 0;
	 this._par.y = 0;
	 this.addChild(this._par);
};

//==============================
// * refresh Par
//==============================
ActorStatusSkill.prototype.refreshPar = function() {
     this._par.bitmap.clear();
	 this._par.bitmap.drawText(this._actor.hp,
	 Moghunter.scSkill_AS_hp_X,
	 Moghunter.scSkill_AS_hp_Y,80,32,"right"); 
	 this._par.bitmap.drawText(this._actor.mp,
	 Moghunter.scSkill_AS_mp_X,
	 Moghunter.scSkill_AS_mp_Y,80,32,"right"); 
	 this._par.bitmap.drawText(this._actor.name(),
	 Moghunter.scSkill_AS_name_X,
	 Moghunter.scSkill_AS_name_Y,120,32,"left");
};

//==============================
// * createHP Meter
//==============================
ActorStatusSkill.prototype.createHPMeter = function() {
    this._hpMeter = new Sprite(this._hpMeterImg);
	this._hpMeter.x = Moghunter.scSkill_AS_MeterHPX;
	this._hpMeter.y = Moghunter.scSkill_AS_MeterHPY;
	this.addChild(this._hpMeter);
};

//==============================
// * refreshHP Meter
//==============================
ActorStatusSkill.prototype.refreshHPMeter = function() {
	var cw = this._hpMeterImg.width;
	var ch = this._hpMeterImg.height;
	var wid = cw * this._actor.hp / this._actor.mhp;
	this._hpMeter.setFrame(0,0,wid,cw);
};

//==============================
// * createHP Meter
//==============================
ActorStatusSkill.prototype.createMPMeter = function() {
    this._mpMeter = new Sprite(this._mpMeterImg);
	this._mpMeter.x = Moghunter.scSkill_AS_MeterMPX;
	this._mpMeter.y = Moghunter.scSkill_AS_MeterMPY;
	this.addChild(this._mpMeter);
};

//==============================
// * refreshMP Meter
//==============================
ActorStatusSkill.prototype.refreshMPMeter = function() {
	var cw = this._mpMeterImg.width;
	var ch = this._mpMeterImg.height;
	var wid = cw * this._actor.mp / this._actor.mmp;
	this._mpMeter.setFrame(0,0,wid,cw);
};

//==============================
// * Create States
//==============================
ActorStatusSkill.prototype.createStates = function() {
	this._states_data = [0,0,0];
	this._state_icon = new Sprite(ImageManager.loadSystem("IconSet"));
	this._state_icon.x = Moghunter.scSkill_AS_StatesX;
	this._state_icon.y = Moghunter.scSkill_AS_StatesY;
	this._state_icon.visible = false;
	this.addChild(this._state_icon);
	this.refresh_states();	
};
	
//==============================
// * Create States
//==============================
ActorStatusSkill.prototype.refresh_states = function() {
	this._states_data[0] = 0;
	this._states_data[2] = 0;
	this._state_icon.visible = false;
	if (this._actor.allIcons().length == 0) {this._states_data[1] = 0;return};
       if (this._actor.allIcons()[this._states_data[1]]) {	
		this._states_data[0] = this._actor.allIcons()[this._states_data[1]];
		this._state_icon.visible = true;
		var sx = this._states_data[0] % 16 * 32;
		var sy = Math.floor(this._states_data[0] / 16) * 32;
		this._state_icon.setFrame(sx, sy, 32, 32);
	   };
	this._states_data[1] += 1;
	if (this._states_data[1] >= this._actor.allIcons().length) {
		this._states_data[1] = 0
	};
};

//==============================
// * Update States
//==============================
ActorStatusSkill.prototype.update_states = function() {
	this._states_data[2] += 1;
	if (this.need_refresh_states()) {this.refresh_states();};
};	
	
//==============================
// * Need Refresh States
//==============================
ActorStatusSkill.prototype.need_refresh_states = function() {
	if (this._states_data[2] > 60) {return true};
	return false;
};		
	
//==============================
// * Update
//==============================
ActorStatusSkill.prototype.update = function() {
    Sprite.prototype.update.call(this);	
    if (!this._par && this._layImg.isReady()) {this.createSprites()};
	if (this._state_icon) {this.update_states()};
};
