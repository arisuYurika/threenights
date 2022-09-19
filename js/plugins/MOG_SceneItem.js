//=============================================================================
// MOG_SceneItem.js
//=============================================================================

/*:
 * @plugindesc (v1.1)[v1.8]  面板 - 全自定义道具界面
 * @author Moghunter  （Drill_up翻译+优化）
 * 
 * @Drill_LE_param "角色头像-%d"
 * @Drill_LE_parentKey "---角色头像%d至%d---"
 * @Drill_LE_var "Moghunter.menu_item_face_list_length"
 * 
 *
 * @param ----杂项----
 * @desc
 *
 * @param 资源-整体布局
 * @parent ----杂项----
 * @desc 整体布局图片资源。
 * @default 道具界面-布局
 * @require 1
 * @dir img/Menu__item/
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
 * @param ----物品类型----
 * @desc
 *
 * @param 资源-道具选项
 * @parent ----物品类型----
 * @desc 道具选项的图片资源。
 * @default 道具界面-道具选项
 * @require 1
 * @dir img/Menu__item/
 * @type file
 *
 * @param 平移-道具选项 X
 * @parent ----物品类型----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 280
 *
 * @param 平移-道具选项 Y
 * @parent ----物品类型----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 50
 *
 * @param 资源-武器选项
 * @parent ----物品类型----
 * @desc 武器选项的图片资源。
 * @default 道具界面-武器选项
 * @require 1
 * @dir img/Menu__item/
 * @type file
 *
 * @param 平移-武器选项 X
 * @parent ----物品类型----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 420
 *
 * @param 平移-武器选项 Y
 * @parent ----物品类型----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 50
 *
 * @param 资源-防具选项
 * @parent ----物品类型----
 * @desc 防具选项的图片资源。
 * @default 道具界面-防具选项
 * @require 1
 * @dir img/Menu__item/
 * @type file
 *
 * @param 平移-防具选项 X
 * @parent ----物品类型----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 560
 *
 * @param 平移-防具选项 Y
 * @parent ----物品类型----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 50
 *
 * @param 资源-关键道具选项
 * @parent ----物品类型----
 * @desc 关键道具选项的图片资源。
 * @default 道具界面-关键道具选项
 * @require 1
 * @dir img/Menu__item/
 * @type file
 *
 * @param 平移-关键道具选项 X
 * @parent ----物品类型----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 700
 *
 * @param 平移-关键道具选项 Y
 * @parent ----物品类型----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 50
 *
 * @param 是否使用缩放效果
 * @parent ----物品类型----
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用，选中的类型按钮会来回缩放。
 * @default false
 *
 * @param 是否使用闪烁效果
 * @parent ----物品类型----
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用，选中的类型按钮会来回闪烁。
 * @default false
 *
 * @param 浮动偏移量
 * @parent ----物品类型----
 * @type number
 * @min 1
 * @desc 使用左右或者上下浮动时，浮动偏移的位置量，单位像素。
 * @default 8
 *
 * @param 是否使用左右浮动
 * @parent ----物品类型----
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用，选中的类型按钮会左右浮动。
 * @default false
 *
 * @param 是否使用上下浮动
 * @parent ----物品类型----
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用，选中的类型按钮会上下浮动。
 * @default true
 *
 *
 * @param ----物品窗口----
 * @desc
 *
 * @param 平移-物品窗口 X
 * @parent ----物品窗口----
 * @desc x轴方向平移，单位像素。0为贴在正中心。（正数右移，负数左移）
 * @default 0
 *
 * @param 平移-物品窗口 Y
 * @parent ----物品窗口----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 96
 *
 * @param 物品窗口左起点 X
 * @parent ----物品窗口----
 * @desc 玩家按右按键，窗口从左起点滑动到原本的位置，这里设置的是偏移的x轴值，单位像素。（可为负数）
 * @default -60
 *
 * @param 物品窗口左起点 Y
 * @parent ----物品窗口----
 * @desc 玩家按右按键，窗口从左起点滑动到原本的位置，这里设置的是偏移的y轴值，单位像素。（可为负数）
 * @default 0
 *
 * @param 物品窗口右起点 X
 * @parent ----物品窗口----
 * @desc 玩家按左按键，窗口从右起点滑动到原本的位置，这里设置的是偏移的x轴值，单位像素。（可为负数）
 * @default 60
 *
 * @param 物品窗口右起点 Y
 * @parent ----物品窗口----
 * @desc 玩家按左按键，窗口从右起点滑动到原本的位置，这里设置的是偏移的y轴值，单位像素。（可为负数）
 * @default 0
 *
 * @param 物品窗口移动时长
 * @parent ----物品窗口----
 * @type number
 * @min 1
 * @desc 从偏移的位置到原位置所需的时间，单位帧。（1秒60帧）
 * @default 30
 *
 * @param 是否使用物品窗口布局
 * @parent ----物品窗口----
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default true
 *
 * @param 资源-物品窗口
 * @parent 是否使用物品窗口布局
 * @desc 物品窗口的图片资源。
 * @default 道具界面-物品窗口
 * @require 1
 * @dir img/Menu__item/
 * @type file
 *
 * @param 平移-物品窗口布局 X
 * @parent 是否使用物品窗口布局
 * @desc 修正图片的偏移用。以窗口的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 平移-物品窗口布局 Y
 * @parent 是否使用物品窗口布局
 * @desc 修正图片的偏移用。以窗口的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 物品窗口宽度
 * @parent ----物品窗口----
 * @type number
 * @min 50
 * @desc 窗口的高宽设置。注意，实际文本域的高宽要比该设置小一些，因为有内边距。具体去看看 "17.主菜单 > 窗口与布局.docx"。
 * @default 370
 *
 * @param 物品窗口高度
 * @parent ----物品窗口----
 * @type number
 * @min 50
 * @desc 窗口的高宽设置。注意，实际文本域的高宽要比该设置小一些，因为有内边距。具体去看看 "17.主菜单 > 窗口与布局.docx"。
 * @default 400
 *
 * @param 物品窗口字体大小
 * @parent ----物品窗口----
 * @type number
 * @min 1
 * @desc 物品窗口的字体大小。
 * @default 22
 *
 * @param 物品窗口列数
 * @parent ----物品窗口----
 * @type number
 * @min 1
 * @desc 物品窗口的列数。如果设置了多列，插件将根据情况自动切换物品类型或者物品列。
 * @default 1
 *
 * @param ----选择框----
 * @desc
 *
 * @param ----角色窗口----
 * @desc
 *
 * @param 平移-角色窗口 X
 * @parent ----角色窗口----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 600
 *
 * @param 平移-角色窗口 Y
 * @parent ----角色窗口----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 200
 *
 * @param 角色窗口起点 X
 * @parent ----角色窗口----
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的x轴值，单位像素。（可为负数）
 * @default 100
 *
 * @param 角色窗口起点 Y
 * @parent ----角色窗口----
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的y轴值，单位像素。（可为负数）
 * @default 0
 *
 * @param 角色窗口移动时长
 * @parent ----角色窗口----
 * @type number
 * @min 1
 * @desc 从偏移的位置到原位置所需的时间，单位帧。（1秒60帧）
 * @default 20
 *
 * @param 资源-角色窗口
 * @parent ----角色窗口----
 * @desc 角色窗口的图片资源。
 * @default 道具界面-角色窗口
 * @require 1
 * @dir img/Menu__item/
 * @type file
 *
 * @param 平移-角色窗口布局 X
 * @parent ----角色窗口----
 * @desc 修正图片的偏移用。以窗口的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 平移-角色窗口布局 Y
 * @parent ----角色窗口----
 * @desc 修正图片的偏移用。以窗口的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 角色窗口字体大小
 * @parent ----角色窗口----
 * @type number
 * @min 1
 * @desc 角色窗口的字体大小。
 * @default 22
 *
 * @param 平移-角色状态 X
 * @parent ----角色窗口----
 * @desc 以角色窗口的点为基准，x轴方向平移，单位像素。（可为负数）
 * 注意这里是角色窗口中的状态显示。
 * @default 23
 *
 * @param 平移-角色状态 Y
 * @parent ----角色窗口----
 * @desc 以角色窗口的点为基准，y轴方向平移，单位像素。（可为负数）
 * 注意这里是角色窗口中的状态显示。
 * @default 15
 *
 * @param 平移-角色名 X
 * @parent ----角色窗口----
 * @desc 以角色窗口的点为基准，x轴方向平移，单位像素。（可为负数）
 * 注意这里是角色窗口中的角色名显示。
 * @default 70
 *
 * @param 平移-角色名 Y
 * @parent ----角色窗口----
 * @desc 以角色窗口的点为基准，y轴方向平移，单位像素。（可为负数）
 * 注意这里是角色窗口中的角色名显示。
 * @default 30
 *
 * @param 平移-角色能力值组 X
 * @parent ----角色窗口----
 * @desc 以角色窗口的点为基准，x轴方向平移，单位像素。（可为负数）
 * 能力值组是攻击、防御等数值，固定排布的组。
 * @default 0
 *
 * @param 平移-角色能力值组 Y
 * @parent ----角色窗口----
 * @desc 以角色窗口的点为基准，y轴方向平移，单位像素。（可为负数）
 * 能力值组是攻击、防御等数值，固定排布的组。
 * @default 0
 *
 * @param 角色能力值横向间距
 * @parent ----角色窗口----
 * @type number
 * @min 1
 * @desc 角色能力值组的横向间距。
 * @default 90
 *
 * @param 角色能力值纵向间距
 * @parent ----角色窗口----
 * @type number
 * @min 1
 * @desc 角色能力值组的纵向间距。
 * @default 33
 *
 * @param 平移-角色头像 X
 * @parent ----角色窗口----
 * @desc 以角色窗口的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default 90
 *
 * @param 平移-角色头像 Y
 * @parent ----角色窗口----
 * @desc 以角色窗口的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default -65
 * 
 * @param ---角色头像 1至20---
 * @parent ----角色窗口----
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
 * @parent ----角色窗口----
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
 * @parent ----角色窗口----
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
 * @default 道具界面-选择框
 * @require 1
 * @dir img/Menu__item/
 * @type file
 *
 * @param 资源-界限箭头
 * @parent ----选择框----
 * @desc 界限箭头的图片资源。
 * @default 道具界面-界限箭头
 * @require 1
 * @dir img/Menu__item/
 * @type file
 *
 * @param 资源-选择全部角色
 * @parent ----选择框----
 * @desc 选择全部角色的图片资源。
 * @default 道具界面-选择全部角色
 * @require 1
 * @dir img/Menu__item/
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
 * @param 平移-框角色名 X
 * @parent ----选择框----
 * @desc 以框的位置为基准，x轴方向平移，单位像素。（可为负数）
 * @default 20
 *
 * @param 平移-框角色名 Y
 * @parent ----选择框----
 * @desc 以框的位置为基准，y轴方向平移，单位像素。（可为负数）
 * @default 40
 *
 * @param 资源-生命条
 * @parent ----选择框----
 * @desc 生命条的图片资源。
 * @default 道具界面-生命条
 * @require 1
 * @dir img/Menu__item/
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
 * @default 道具界面-魔法条
 * @require 1
 * @dir img/Menu__item/
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
 * @param 平移-框角色状态 X
 * @parent ----选择框----
 * @desc 以框的位置为基准，x轴方向平移，单位像素。（可为负数）
 * @default 165
 *
 * @param 平移-框角色状态 Y
 * @parent ----选择框----
 * @desc 以框的位置为基准，y轴方向平移，单位像素。（可为负数）
 * @default 30
 * 
 * @help  
 * =============================================================================
 * +++ MOG - Scene Item (v1.1) +++
 * By Moghunter 
 * https://mogplugins.wordpress.com/
 * =============================================================================
 * 可完全自己定义的道具界面设置。
 * 【现已支持插件关联资源的打包、加密】
 * 
 * -----------------------------------------------------------------------------
 * ----插件扩展
 * 插件可以单独使用，对道具界面做美化。
 * 被扩展：
 *   - Drill_ItemCategory 控件-物品类型
 *     通过该插件，可以扩展更多物品类型以及设置类型按钮。
 *
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.插件的作用域：菜单界面。
 *   可以设置物品面板(界面)的内容。
 * 2.该面板属于菜单面板，可以被菜单背景、菜单魔法圈等插件作用到。
 *   该面板关键字为：Scene_Item
 *   更多关键字内容，见 "17.主菜单 > 菜单关键字.docx"。
 * 结构：
 *   (1.配置有五个部分，物品类型、物品窗口、角色窗口、选择框、杂项数据。
 *   (2.道具界面和技能界面的 角色窗口 （选择治疗单位时出现的角色窗口）
 *      长的一模一样，但是实际上是两种不同的框。你可以设置不一样的样式。
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 资源路径：img/Menu__item （Menu后面有两个下划线）
 * 资源路径：img/Menu__actorFaces （Menu后面有两个下划线）
 * 先确保项目img文件夹下是否有Menu__item文件夹。
 * 先确保项目img文件夹下是否有Menu__actorFaces文件夹。
 * 要查看所有关联资源文件的插件，可以去看看"插件清单.xlsx"。
 * 如果没有，需要自己建立。需要配置资源文件：
 *
 * 资源-整体布局      (Menu__item文件夹)
 * 资源-物品窗口      
 * 资源-道具选项      
 * 资源-武器选项      
 * 资源-防具选项      
 * 资源-关键道具选项  
 * 
 * 资源-角色窗口     
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
 * 1.框架资源都在Menu__item文件夹中。
 * 2.角色图标、头像资源都在Menu__actorFaces文件夹中。
 *
 * -----------------------------------------------------------------------------
 * ----关于Drill_up优化：
 * [v1.1]
 * 使得该插件支持关联资源的打包、加密。
 * 部署时勾选去除无关文件，本插件中相关的文件不会被去除。
 * [v1.2]
 * 修改了选择框的排布与设置。
 * 大幅度修改了文件关联的位置。（因为要支持加密）
 * 大幅度添加了窗口相关控制变量。
 * [v1.3]
 * 添加了类型按钮的 缩放、闪烁、浮动 效果设置。
 * [v1.4]
 * 修复了插件单独使用时出现的问题。
 * [v1.5]
 * 优化了使用技能时，选择单位的动作，左键点击也能滚动选择。
 * [v1.6]
 * 修改了插件的分类。
 * [v1.7]
 * 修改了插件关联的资源文件夹。
 * [v1.8]
 * 添加了最大值编辑的支持。
 *
 */

 //
 //插件记录：
 //		代码复杂度★★★
 //		这里的角色窗口不是窗口，而是容器。
 //		这里的位置计算比较绕。
 //		注意，Drill_ItemCategory物品类型 对部分方法进行了覆写
 //
 
//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_SceneItem = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_SceneItem');
  
	Moghunter.scItem_ItemWindowWidth = Number(Moghunter.parameters['物品窗口宽度'] || 370);
	Moghunter.scItem_ItemWindowHeight = Number(Moghunter.parameters['物品窗口高度'] || 400);
	Moghunter.scItem_ItemWindowX = Number(Moghunter.parameters['平移-物品窗口 X'] || 0);
	Moghunter.scItem_ItemWindowY = Number(Moghunter.parameters['平移-物品窗口 Y'] || 96);
	Moghunter.scItem_ItemWindow_L_slideX = Number(Moghunter.parameters['物品窗口左起点 X'] || -60);
	Moghunter.scItem_ItemWindow_L_slideY = Number(Moghunter.parameters['物品窗口左起点 Y'] || 0);
	Moghunter.scItem_ItemWindow_R_slideX = Number(Moghunter.parameters['物品窗口右起点 X'] || 60);
	Moghunter.scItem_ItemWindow_R_slideY = Number(Moghunter.parameters['物品窗口右起点 Y'] || 0);
	Moghunter.scItem_ItemWindow_slideTime = Number(Moghunter.parameters['物品窗口移动时长'] || 10);
	Moghunter.scItem_Wlayout_visible = String(Moghunter.parameters['是否使用物品窗口布局'] || "true") === "true";
	Moghunter.scItem_WlayoutX = Number(Moghunter.parameters['平移-物品窗口布局 X'] || 0);
	Moghunter.scItem_WlayoutY = Number(Moghunter.parameters['平移-物品窗口布局 Y'] || 0);  
	Moghunter.scItem_ItemWindow_fontsize = Number(Moghunter.parameters['物品窗口字体大小'] || 22);
	Moghunter.scItem_ItemWindow_col = Number(Moghunter.parameters['物品窗口列数'] || 1);
	Moghunter.scItem_HelpWindowX = Number(Moghunter.parameters['平移-帮助信息 X'] || 0);
	Moghunter.scItem_HelpWindowY = Number(Moghunter.parameters['平移-帮助信息 Y'] || 516);
	
	Moghunter.scItem_Com1_X = Number(Moghunter.parameters['平移-道具选项 X'] || 280);
	Moghunter.scItem_Com1_Y = Number(Moghunter.parameters['平移-道具选项 Y'] || 50);  
	Moghunter.scItem_Com2_X = Number(Moghunter.parameters['平移-武器选项 X'] || 420);
	Moghunter.scItem_Com2_Y = Number(Moghunter.parameters['平移-武器选项 Y'] || 50);  			
	Moghunter.scItem_Com3_X = Number(Moghunter.parameters['平移-防具选项 X'] || 560);
	Moghunter.scItem_Com3_Y = Number(Moghunter.parameters['平移-防具选项 Y'] || 50);  
	Moghunter.scItem_Com4_X = Number(Moghunter.parameters['平移-关键道具选项 X'] || 700);
	Moghunter.scItem_Com4_Y = Number(Moghunter.parameters['平移-关键道具选项 Y'] || 50); 
	Moghunter.scItem_Com_zoom = String(Moghunter.parameters['是否使用缩放效果'] || "false") === "true";	
	Moghunter.scItem_Com_flash = String(Moghunter.parameters['是否使用闪烁效果'] || "false") === "true";	
	Moghunter.scItem_Com_float_val = Number(Moghunter.parameters['浮动偏移量'] || 8);
	Moghunter.scItem_Com_float_lr = String(Moghunter.parameters['是否使用左右浮动'] || "false") === "true";	
	Moghunter.scItem_Com_float_ud = String(Moghunter.parameters['是否使用上下浮动'] || "true") === "true";	
						
	Moghunter.scItem_ActorWinX = Number(Moghunter.parameters['平移-角色窗口 X'] || 600);
	Moghunter.scItem_ActorWinY = Number(Moghunter.parameters['平移-角色窗口 Y'] || 200);
	Moghunter.scItem_ActorWin_sildeX = Number(Moghunter.parameters['角色窗口起点 X'] || 100);
	Moghunter.scItem_ActorWin_sildeY = Number(Moghunter.parameters['角色窗口起点 Y'] || 0); 			
	Moghunter.scItem_ActorWin_sildeTime = Number(Moghunter.parameters['角色窗口移动时长'] || 30);
	Moghunter.scItem_ActorWinlayout_X = Number(Moghunter.parameters['平移-角色窗口布局 X'] || 0);
	Moghunter.scItem_ActorWinlayout_Y = Number(Moghunter.parameters['平移-角色窗口布局 Y'] || 0);
	Moghunter.scItem_ActorParFontSize = Number(Moghunter.parameters['角色窗口字体大小'] || 20);
	
    Moghunter.scItem_ActorFaceX = Number(Moghunter.parameters['平移-角色头像 X'] || 90); 
    Moghunter.scItem_ActorFaceY = Number(Moghunter.parameters['平移-角色头像 Y'] || -65);
    Moghunter.scItem_ActorStatesX = Number(Moghunter.parameters['平移-角色状态 X'] || 23); 
    Moghunter.scItem_ActorStatesY = Number(Moghunter.parameters['平移-角色状态 Y'] || 15);
    Moghunter.scItem_ActorParX = Number(Moghunter.parameters['平移-角色能力值组 X'] || 0); 
    Moghunter.scItem_ActorParY = Number(Moghunter.parameters['平移-角色能力值组 Y'] || 0);
    Moghunter.scItem_ActorPar_hor = Number(Moghunter.parameters['角色能力值横向间距'] || 90);
    Moghunter.scItem_ActorPar_ver = Number(Moghunter.parameters['角色能力值纵向间距'] || 33);
    Moghunter.scItem_Actor_NameX = Number(Moghunter.parameters['平移-角色名 X'] || 70); 
    Moghunter.scItem_Actor_NameY = Number(Moghunter.parameters['平移-角色名 Y'] || 30);	
	
    Moghunter.scItem_PartyX = Number(Moghunter.parameters['平移-选择框-当前 X'] || 10); 
    Moghunter.scItem_PartyY = Number(Moghunter.parameters['平移-选择框-当前 Y'] || 240);
    Moghunter.scItem_PartyX_hide = Number(Moghunter.parameters['平移-选择框-隐藏 X'] || 270); 
    Moghunter.scItem_PartyY_hide = Number(Moghunter.parameters['平移-选择框-隐藏 Y'] || 240);
    Moghunter.scItem_PartyX_last = Number(Moghunter.parameters['平移-选择框-上一个 X'] || -10); 
    Moghunter.scItem_PartyY_last = Number(Moghunter.parameters['平移-选择框-上一个 Y'] || 140);
    Moghunter.scItem_PartyX_next = Number(Moghunter.parameters['平移-选择框-下一个 X'] || -10); 
    Moghunter.scItem_PartyY_next = Number(Moghunter.parameters['平移-选择框-下一个 Y'] || 340);
	Moghunter.scItem_PartyFontSize = Number(Moghunter.parameters['选择框字体大小'] || 20); 
    Moghunter.scItem_PartyNameX = Number(Moghunter.parameters['平移-框角色名 X'] || 20); 
    Moghunter.scItem_PartyNameY = Number(Moghunter.parameters['平移-框角色名 Y'] || 40);	
    Moghunter.scItem_PartyHPNumberX = Number(Moghunter.parameters['平移-生命数值 X'] || 20); 
    Moghunter.scItem_PartyHPNumberY = Number(Moghunter.parameters['平移-生命数值 Y'] || 3);	
    Moghunter.scItem_PartyMPNumberX = Number(Moghunter.parameters['平移-魔法数值 X'] || 118); 
    Moghunter.scItem_PartyMPNumberY = Number(Moghunter.parameters['平移-魔法数值 Y'] || 3);		
    Moghunter.scItem_PartyHPMeterX = Number(Moghunter.parameters['平移-生命条 X'] || 16); 
    Moghunter.scItem_PartyHPMeterY = Number(Moghunter.parameters['平移-生命条 Y'] || 30);	
    Moghunter.scItem_PartyMPMeterX = Number(Moghunter.parameters['平移-魔法条 X'] || 113); 
    Moghunter.scItem_PartyMPMeterY = Number(Moghunter.parameters['平移-魔法条 Y'] || 30);	
    Moghunter.scItem_PartyStatusX = Number(Moghunter.parameters['平移-框角色状态 X'] || 165); 
    Moghunter.scItem_PartyStatusY = Number(Moghunter.parameters['平移-框角色状态 Y'] || 39);	
	
	Moghunter.src_item_menu_Layout = String(Moghunter.parameters['资源-整体布局']);
	Moghunter.src_item_menu_board = String(Moghunter.parameters['资源-物品窗口']);
	Moghunter.src_item_menu_com_1 = String(Moghunter.parameters['资源-道具选项']);
	Moghunter.src_item_menu_com_2 = String(Moghunter.parameters['资源-武器选项']);
	Moghunter.src_item_menu_com_3 = String(Moghunter.parameters['资源-防具选项']);
	Moghunter.src_item_menu_com_4 = String(Moghunter.parameters['资源-关键道具选项']);
	Moghunter.src_item_actor_Layout = String(Moghunter.parameters['资源-角色窗口']);
	Moghunter.src_item_select_Layout = String(Moghunter.parameters['资源-选择框']);
	Moghunter.src_item_select_arrow = String(Moghunter.parameters['资源-界限箭头']);
	Moghunter.src_item_select_all = String(Moghunter.parameters['资源-选择全部角色']);
	Moghunter.src_item_select_hpmeter = String(Moghunter.parameters['资源-生命条']);
	Moghunter.src_item_select_mpmeter = String(Moghunter.parameters['资源-魔法条']);
	
	Moghunter.menu_item_face_list_length = 60;
	Moghunter.menu_item_face_list = {};
	for (var i = 1; i <= Moghunter.menu_item_face_list_length ; i++ ) {
		Moghunter.menu_item_face_list[i] = Moghunter.parameters['角色头像-' + String(i) ];
	};
	
//=============================================================================
// ** ImageManager
//=============================================================================

//==============================
// * Item
//==============================
ImageManager.loadMenusitem = function(filename) {
    return this.loadBitmap('img/Menu__item/', filename, 0, true);
};

ImageManager.loadMenusActorFace = function(filename) {
    return this.loadBitmap('img/Menu__actorFaces/', filename, 0, true);
};

//=============================================================================
// ** Scene Item
//=============================================================================

//==============================
// * creaate
//==============================
var _mog_scnItem_create = Scene_Item.prototype.create;
Scene_Item.prototype.create = function() {
    _mog_scnItem_create.call(this);
	this.loadBitmaps();
    this._helpWindow.opacity = 0;
	this._helpWindow.x = Moghunter.scItem_HelpWindowX;
	this._helpWindow.y = Moghunter.scItem_HelpWindowY;
    this._categoryWindow.visible = false;
	this._categoryWindow.active = false;
    this._itemWindow.active = true;
	this._itemWindow.setCategory('item');
	this._itemWindow.select(0);
	this._itemWindow.contentsOpacity = 0;
	this._itemWindow.x = this._itemPosOrg[0] + Moghunter.scItem_ItemWindow_L_slideX;
	this._itemWindow.y = this._itemPosOrg[1] + Moghunter.scItem_ItemWindow_L_slideY;
	this._actorStatusIndex = this._actorWindow._index;
	this._actorStatus = $gameParty.members()[this._actorWindow._index];
	this._wani = [-1,1,null];
};

//==============================
// * create Background
//==============================
var _mog_scItem_createBackground = Scene_Item.prototype.createBackground;
Scene_Item.prototype.createBackground = function() {
	_mog_scItem_createBackground.call(this);
	this._field = new Sprite();
	this.addChild(this._field);	
}

//==============================
// * loadBitmaps
//==============================
Scene_Item.prototype.loadBitmaps = function() {
	this._layImg = (ImageManager.loadMenusitem(Moghunter.src_item_menu_Layout));
	this._layItemImg = (ImageManager.loadMenusitem(Moghunter.src_item_menu_board));
	this._comImg = [];
	this._comImg[0] = ImageManager.loadMenusitem(Moghunter.src_item_menu_com_1);
	this._comImg[1] = ImageManager.loadMenusitem(Moghunter.src_item_menu_com_2);
	this._comImg[2] = ImageManager.loadMenusitem(Moghunter.src_item_menu_com_3);
	this._comImg[3] = ImageManager.loadMenusitem(Moghunter.src_item_menu_com_4);

};

//==============================
// * create Sprites
//==============================
Scene_Item.prototype.createSprites = function() {
	this.createLayout();
	this.createItemLayout();
	this.createButtons();
	this.createPartyData();
};

//==============================
// * create Sprites
//==============================
Scene_Item.prototype.createLayout = function() {
	this._layout = new Sprite(this._layImg);
	this._field.addChild(this._layout);
};

//==============================
// * create Item Layout
//==============================
Scene_Item.prototype.createItemLayout = function() {
	this._layoutItem = new Sprite(this._layItemImg);
	if(!Moghunter.scItem_Wlayout_visible){
		this._layoutItem = new Sprite("");
	}
	this._layoutItem.opacity = 0;
	this._field.addChild(this._layoutItem);
};

//==============================
// * create Buttons
//==============================
Scene_Item.prototype.createButtons = function() {
    this._buttons = [];
	this._buttonsAni = [];
    for (var i = 0; i < 4; i++) {
		 this._buttonsAni[i] = 0;
		 this._buttons[i] = new Sprite(this._comImg[i]);
		 this._buttons[i].anchor.x = 0.5;
		 this._buttons[i].anchor.y = 0.5;
		if (i === 0) {
			 this._buttons[i].x = Moghunter.scItem_Com1_X;
			 this._buttons[i].y = Moghunter.scItem_Com1_Y;
		 } else if (i === 1) {
			 this._buttons[i].x = Moghunter.scItem_Com2_X;
			 this._buttons[i].y = Moghunter.scItem_Com2_Y;
		 } else if (i === 2) {
			 this._buttons[i].x = Moghunter.scItem_Com3_X;
			 this._buttons[i].y = Moghunter.scItem_Com3_Y;
		 } else if (i === 3) {
			 this._buttons[i].x = Moghunter.scItem_Com4_X;
			 this._buttons[i].y = Moghunter.scItem_Com4_Y;
		 };
		 this._buttons[i]._org_x = this._buttons[i].x;
		 this._buttons[i]._org_y = this._buttons[i].y;
		 this._field.addChild(this._buttons[i]);
	};
};
  
//==============================
// * update Buttons
//==============================
Scene_Item.prototype.updateButtons = function() {
	for (var i = 0; i < this._buttons.length; i++) {
		if (this._categoryWindow._index === i && !this._actorWindow.active) {//按钮激活状态
			if ( Moghunter.scItem_Com_zoom ) {//按钮缩放
				if (this._buttonsAni[i] === 0) {
					this._buttons[i].scale.x += 0.010;
					if (this._buttons[i].scale.x >= 1.30) {
						 this._buttons[i].scale.x = 1.30;
						 this._buttonsAni[i] = 1; 
					};
				} else  {
					this._buttons[i].scale.x -= 0.010;
					if (this._buttons[i].scale.x <= 1.00) {
						 this._buttons[i].scale.x = 1.00;
						 this._buttonsAni[i] = 0; 
					};				 
				};	
			}
			if ( Moghunter.scItem_Com_flash ) {//按钮闪烁
				if (this._buttonsAni[i] === 0) {
					this._buttons[i].opacity += 8;
					if (this._buttons[i].opacity >= 255) {
						 this._buttons[i].opacity = 255;
						 this._buttonsAni[i] = 1; 
					};
				} else  {
					this._buttons[i].opacity -= 8;
					if (this._buttons[i].opacity <= 100) {
						 this._buttons[i].opacity = 100;
						 this._buttonsAni[i] = 0; 
					};				 
				};	
			}else{
				this._buttons[i].opacity += 20;		 
			}
			if ( Moghunter.scItem_Com_float_lr ) {//按钮左右浮动
				if (this._buttonsAni[i] === 0) {
					this._buttons[i].x += Moghunter.scItem_Com_float_val / 12;
					if (this._buttons[i].x >= this._buttons[i]._org_x + Moghunter.scItem_Com_float_val ) {
						 this._buttons[i].x = this._buttons[i]._org_x + Moghunter.scItem_Com_float_val;
						 this._buttonsAni[i] = 1; 
					};
				} else  {
					this._buttons[i].x -= Moghunter.scItem_Com_float_val / 12;
					if (this._buttons[i].x <= this._buttons[i]._org_x - Moghunter.scItem_Com_float_val ) {
						 this._buttons[i].x = this._buttons[i]._org_x - Moghunter.scItem_Com_float_val;
						 this._buttonsAni[i] = 0; 
					}; 
				};	
			}
			if ( Moghunter.scItem_Com_float_ud ) {//按钮上下浮动
				if (this._buttonsAni[i] === 0) {
					this._buttons[i].y += Moghunter.scItem_Com_float_val / 12;
					if (this._buttons[i].y >= this._buttons[i]._org_y + Moghunter.scItem_Com_float_val ) {
						 this._buttons[i].y = this._buttons[i]._org_y + Moghunter.scItem_Com_float_val;
						 this._buttonsAni[i] = 1; 
					};
				} else  {
					this._buttons[i].y -= Moghunter.scItem_Com_float_val / 12;
					if (this._buttons[i].y <= this._buttons[i]._org_y - Moghunter.scItem_Com_float_val ) {
						 this._buttons[i].y = this._buttons[i]._org_y - Moghunter.scItem_Com_float_val;
						 this._buttonsAni[i] = 0; 
					}; 
				};	
			}
		} else {	//回到按钮未激活状态
		    this._buttonsAni[i] = 0
			if (this._buttons[i].scale.x >= 1.00) {
				this._buttons[i].scale.x -= 0.010;
				if (this._buttons[i].scale.x <= 1.00) {
					 this._buttons[i].scale.x = 1.00;
				};	
			};	
			if (this._buttons[i].opacity > 180) {
				this._buttons[i].opacity -= 15; 
				if(this._buttons[i].opacity <= 180){
					this._buttons[i].opacity = 180; 
				}
			}else if(this._buttons[i].opacity < 180){
				this._buttons[i].opacity += 15; 
				if(this._buttons[i].opacity >= 180){
					this._buttons[i].opacity = 180; 
				}
			}
			 this._buttons[i].x = this._buttons[i]._org_x;
			 this._buttons[i].y = this._buttons[i]._org_y;
		};
		
		this._buttons[i].scale.y = this._buttons[i].scale.x;
	};
};

 
//==============================
// * update Item Layout
//==============================
Scene_Item.prototype.updateItemLayout = function() {
	this._layoutItem.x = this._itemWindow.x + Moghunter.scItem_WlayoutX;
	this._layoutItem.y = this._itemWindow.y + Moghunter.scItem_WlayoutY;
	this._layoutItem.opacity = this._itemWindow.contentsOpacity;

};

//==============================
// * create Item Window
//==============================
Scene_Item.prototype.createItemWindow = function() {
	var ww = Moghunter.scItem_ItemWindowWidth;
	var wh = Moghunter.scItem_ItemWindowHeight;
	var wx = Moghunter.scItem_ItemWindowX + ((Graphics.boxWidth / 2) - (ww / 2));
    var wy = Moghunter.scItem_ItemWindowY;
    this._itemWindow = new Window_ItemListM(wx, wy, ww, wh);
    this._itemWindow.setHelpWindow(this._helpWindow);
    this._itemWindow.setHandler('ok',     this.onItemOk.bind(this));
    this._itemWindow.setHandler('cancel', this.popScene.bind(this));
    this.addWindow(this._itemWindow);
    this._categoryWindow.setItemWindow(this._itemWindow);
	this._itemPosOrg = [this._itemWindow.x,this._itemWindow.y];
	this._itemWindow.contentsOpacity = 0;
	this._itemWindow.opacity = 0;
};

//==============================
// * update Default Window
//==============================
Scene_Item.prototype.updateDefaultWindow = function() {
    this._helpWindow.opacity = 0;
	this._categoryWindow.opacity = 0;
	this._categoryWindow.x =  -this._categoryWindow.width;
};

//==============================
// * update Commands
//==============================
Scene_Item.prototype.updateCommands = function() {
    if (this._itemWindow.active && this._wani[0] === 0) {
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
	};
};

//==============================
// * addCatIndex
//==============================
Scene_Item.prototype.addCatIndex = function(value) {
     this._categoryWindow._index += value;
	 if (this._categoryWindow._index > 3) {this._categoryWindow._index = 0};
	 if (this._categoryWindow._index < 0) {this._categoryWindow._index = 3};
	 if (this._wani[2] != null) {this._categoryWindow._index = this._wani[2]}
	 this._categoryWindow.update();
	 this._itemWindow.select(0);
	 this._list_oldindex = 0;
	 this._itemWindow.updateHelp();
};

//==============================
// * addCatIndex
//==============================
Scene_Item.prototype.updateItemWindow = function() {
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
Scene_Item.prototype.waniSlideRight = function() {
	if (this._wani[1] === 0 ) {
	    this._itemWindow.x += Moghunter.scItem_ItemWindow_L_slideX/Moghunter.scItem_ItemWindow_slideTime;
	    this._itemWindow.y += Moghunter.scItem_ItemWindow_L_slideY/Moghunter.scItem_ItemWindow_slideTime;
		this._itemWindow.contentsOpacity -= 256/Moghunter.scItem_ItemWindow_slideTime;
		if(!Moghunter.scItem_Wlayout_visible){
			this._itemWindow.opacity -= 256/Moghunter.scItem_ItemWindow_slideTime;
		}
		if (this._itemWindow.contentsOpacity <= 0) {
			this._wani[1] = 1;
			this._itemWindow.x = this._itemPosOrg[0] + Moghunter.scItem_ItemWindow_R_slideX;
			this._itemWindow.y = this._itemPosOrg[1] + Moghunter.scItem_ItemWindow_R_slideY;
			this.addCatIndex(this._wani[0])
		};
	} else {
	    this._itemWindow.x -= Moghunter.scItem_ItemWindow_R_slideX/Moghunter.scItem_ItemWindow_slideTime;
	    this._itemWindow.y -= Moghunter.scItem_ItemWindow_R_slideY/Moghunter.scItem_ItemWindow_slideTime;
		this._itemWindow.contentsOpacity += 256/Moghunter.scItem_ItemWindow_slideTime;
		if(!Moghunter.scItem_Wlayout_visible){
			this._itemWindow.opacity += 256/Moghunter.scItem_ItemWindow_slideTime;
		}
		if (this._itemWindow.contentsOpacity >= 255) {
			this._itemWindow.x = this._itemPosOrg[0];
			this._itemWindow.y = this._itemPosOrg[1];
			this._itemWindow.contentsOpacity = 255;
			this._wani = [0,0,null];
		};
	};
};

//==============================
// * wani Slide Left（向左滑，按右键）
//==============================
Scene_Item.prototype.waniSlideLeft = function() {
	if (this._wani[1] === 0 ) {
	    this._itemWindow.x += Moghunter.scItem_ItemWindow_R_slideX/Moghunter.scItem_ItemWindow_slideTime;
	    this._itemWindow.y += Moghunter.scItem_ItemWindow_R_slideY/Moghunter.scItem_ItemWindow_slideTime;
		this._itemWindow.contentsOpacity -= 256/Moghunter.scItem_ItemWindow_slideTime;
		if(!Moghunter.scItem_Wlayout_visible){
			this._itemWindow.opacity -= 256/Moghunter.scItem_ItemWindow_slideTime;
		}
		if (this._itemWindow.contentsOpacity <= 0) {
			this._wani[1] = 1;
			this._itemWindow.x = this._itemPosOrg[0] + Moghunter.scItem_ItemWindow_L_slideX;
			this._itemWindow.y = this._itemPosOrg[1] + Moghunter.scItem_ItemWindow_L_slideY;
			this.addCatIndex(this._wani[0])
		};
	} else {
	    this._itemWindow.x -= Moghunter.scItem_ItemWindow_L_slideX/Moghunter.scItem_ItemWindow_slideTime;
	    this._itemWindow.y -= Moghunter.scItem_ItemWindow_L_slideY/Moghunter.scItem_ItemWindow_slideTime;
		this._itemWindow.contentsOpacity += 256/Moghunter.scItem_ItemWindow_slideTime;
		if(!Moghunter.scItem_Wlayout_visible){
			this._itemWindow.opacity += 256/Moghunter.scItem_ItemWindow_slideTime;
		}
		if (this._itemWindow.contentsOpacity >= 255) {
			this._itemWindow.x = this._itemPosOrg[0];
			this._itemWindow.y = this._itemPosOrg[1];
			this._itemWindow.contentsOpacity = 255;
            this._wani = [0,0,null];
		};
	};
};

//==============================
// * checkTouchOn Sprites
//==============================
Scene_Item.prototype.checkTouchOnSprites = function() {
	 if (this._itemWindow.active) {
		 for (var i = 0; i < this._buttons.length; i++) {
			  if (this.isOnSprite(this._buttons[i])) {this.setTouchType(i)};
		 };
	 } else if (this._actorWindow.active) {
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
			 if (this.isOnSprite3(this._itemWindow)) {this.setTouchCancelPartyWindow();touch = true};
		 };	
		 if (!touch) {
			 for (var i = 0; i < this._buttons.length; i++) {
				  if (this.isOnSprite(this._buttons[i])) {this.setTouchType(i)
		              this.setTouchCancelPartyWindow();
				  };
			 };
		 };			 	 
	 };
};

//==============================
// * setTouchCancelPartyWindow
//==============================
Scene_Item.prototype.setTouchCancelPartyWindow = function() {
	  this._itemWindow.active = true;
	  this._actorWindow.active = false;
	  this._actorWindow._cursorAll = false;
};

//==============================
// * Set Touch Party
//==============================
Scene_Item.prototype.setTouchParty = function(index) {
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
Scene_Item.prototype.setTouchArrow = function(index) {
   if (index === 0) {
	    this.addIndexActorWindow(1);  
   } else {
	   this.addIndexActorWindow(-1);
   };
};

//==============================
// * Set Touch Type
//==============================
Scene_Item.prototype.setTouchType = function(index) {
   this._wani = [1,0,index];
    SoundManager.playCursor();
};

//==============================
// * add Index Actor Window
//==============================
Scene_Item.prototype.addIndexActorWindow = function(value) {
    this._actorWindow._index += value;
	if (this._actorWindow._index >= $gameParty.members().length) {this._actorWindow._index = 0};
	if (this._actorWindow._index < 0) {this._actorWindow._index = $gameParty.members().length - 1};
	SoundManager.playCursor();
};

//==============================
// * on Sprite
//==============================
Scene_Item.prototype.isOnSprite = function(sprite) {
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
Scene_Item.prototype.isOnSprite2 = function(sprite) {
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
Scene_Item.prototype.isOnSprite3 = function(sprite) {
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
Scene_Item.prototype.updateTouchScreen = function() {
    if (TouchInput.isTriggered()) {this.checkTouchOnSprites()};
};


//==============================
// * update Actor Status
//==============================
Scene_Item.prototype.updateActorStatus = function() {
	if (this._actorStatusIndex != this._actorWindow._index) {this.refreshStatusActor()};
	this._actorWindow.visible = false;
	this._actorWindow.x = -this._actorWindow.width;
	if (this._actorDataWindow) {this.updateActorDataWindow()};
};

//==============================
// * update Actor Data Window
//==============================
Scene_Item.prototype.updateActorDataWindow = function() {
	if (this._actorWindow.active) {
	    var nx = Moghunter.scItem_ActorWinX ;
	    var ny = Moghunter.scItem_ActorWinY ;
		 this._actorDataWindow.opacity += 256/Moghunter.scItem_ActorWin_sildeTime;
		 if(this._actorDataWindow.opacity >= 255){
			this._actorDataWindow.opacity = 255;
		}
    } else { 
	    var nx = Moghunter.scItem_ActorWinX + Moghunter.scItem_ActorWin_sildeX;
	    var ny = Moghunter.scItem_ActorWinY + Moghunter.scItem_ActorWin_sildeY;	
		this._actorDataWindow.opacity -= 256/Moghunter.scItem_ActorWin_sildeTime;
		if(this._actorDataWindow.opacity <= 0){
			this._actorDataWindow.opacity = 0;
		}
    };
    this._actorDataWindow.x = this.commandMoveTo(this._actorDataWindow.x,nx,Moghunter.scItem_ActorWin_sildeTime);
	this._actorDataWindow.y = this.commandMoveTo(this._actorDataWindow.y,ny,Moghunter.scItem_ActorWin_sildeTime);
	this.updatePartyWindow();
};

//==============================
// * Command Move To
//==============================
Scene_Item.prototype.commandMoveTo = function(value,real_value,speed) {
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
Scene_Item.prototype.refreshStatusActor = function() {
	this._actorStatusIndex = this._actorWindow._index;
	this._actorStatus = $gameParty.members()[this._actorWindow._index];
	if (this._actorStatus && !this._actorDataWindow) {this.createActorDataWindow()
	} else {
	   if (this._actorStatus) {
		   this._actorDataWindow.setActor(this._actorStatus)
	       this._actorDataWindow.x = Moghunter.scItem_ActorWinX + Moghunter.scItem_ActorWin_sildeX;
		   this._actorDataWindow.y = Moghunter.scItem_ActorWinY + Moghunter.scItem_ActorWin_sildeY;	
		   this._actorDataWindow.opacity = 0;
	  };	
	};
};

//==============================
// * create Actor Data Window
//==============================
Scene_Item.prototype.createActorDataWindow = function() {
	this._actorDataWindow = new ActorDataWindow();
	this._actorDataWindow.x = Moghunter.scItem_ActorWinX + Moghunter.scItem_ActorWin_sildeX;
	this._actorDataWindow.y = Moghunter.scItem_ActorWinY + Moghunter.scItem_ActorWin_sildeY;	
	this._actorDataWindow.setActor(this._actorStatus);
	this._actorDataWindow.opacity = 0;
	this.addChild(this._actorDataWindow);
};

//==============================
// * create Party Data
//==============================
Scene_Item.prototype.createPartyData = function() {
    this._partyWindow = [];
	this._partyPos = [];
	this._partyAni = [];
	this._partyPos[0] = [Moghunter.scItem_PartyX,Moghunter.scItem_PartyY];
	this._partyPos[1] = [Moghunter.scItem_PartyX_hide,Moghunter.scItem_PartyY_hide];
	this._partyPos[2] = [Moghunter.scItem_PartyX_last,Moghunter.scItem_PartyY_last];
	this._partyPos[3] = [Moghunter.scItem_PartyX_next,Moghunter.scItem_PartyY_next];
	for (var i = 0; i < $gameParty.members().length; i++) {
		this._partyWindow[i] = new PartyWindowData($gameParty.members()[i]);
		this._partyWindow[i].opacity = 0;
		this._partyWindow[i].x = Moghunter.scItem_PartyX_hide;
		this._partyWindow[i].y = Moghunter.scItem_PartyY_hide;
		this._partyAni[i] = [0,0];
		this.addChild(this._partyWindow[i]);
	};
	this.createPartyArrow();
	this.createAllMembersScope();
};

//==============================
// * refresh Part Data
//==============================
Scene_Item.prototype.refreshPartyData = function() {
	for (var i = 0; i < this._partyWindow.length; i++) {
		this._partyWindow[i].refresh();
	};
	this._actorDataWindow.refresh();
};

//==============================
// * update Party Window
//==============================
Scene_Item.prototype.updatePartyWindow = function() {
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
Scene_Item.prototype.updateSlidePartyWin = function(i) {
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
Scene_Item.prototype.updatePartyArrow = function() {
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
Scene_Item.prototype.updateSlidePartyArrow = function() {
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
Scene_Item.prototype.createPartyArrow = function() {
	this._partyArrow = [];
	this._partyArrowAni = [0,0];
	for (var i = 0; i < 2; i++) {
        this._partyArrow[i] = new Sprite(ImageManager.loadMenusitem(Moghunter.src_item_select_arrow));
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
Scene_Item.prototype.createAllMembersScope = function() {
     this._almSprite = new Sprite(ImageManager.loadMenusitem(Moghunter.src_item_select_all));
	 this._almSprite.anchor.x = 0.5;
	 this._almSprite.anchor.y = 0.5;
	 this._almSprite.visible = false;
     this.addChild(this._almSprite);
};

//==============================
// * updateAllMembers Sprite
//==============================
Scene_Item.prototype.updateAllMembersSprite = function() {
	 this._almSprite.x = this._partyPos[0][0] + (this._partyWindow[0].width / 2);
	 this._almSprite.y = this._partyPos[0][1] + (this._partyWindow[0].height / 2);
	 this._almSprite.visible = this._actorWindow._cursorAll;
};

//==============================
// * on Actor Cancel
//==============================
var _mog_scItem_onActorCancel = Scene_Item.prototype.onActorCancel;
Scene_Item.prototype.onActorCancel = function() {
    _mog_scItem_onActorCancel.call(this);
	this._actorWindow._cursorAll = false;
};

//==============================
// * refresh Actor WD
//==============================
Scene_Item.prototype.refreshActorWD = function() {
	if (this._partyWindow) {
		for (var i = 0; i < this._partyWindow.length; i++) {
			this._partyWindow[i].refresh();
		};
	};
	if (this._actorDataWindow) {this._actorDataWindow.refresh()};
};	

//==============================
// * process OK
//==============================
var _mog_scItem_wmact_useItem = Scene_Item.prototype.useItem;
Scene_Item.prototype.useItem = function() {
    _mog_scItem_wmact_useItem.call(this);
	this.refreshActorWD();
};

//==============================
// * update
//==============================
var _mog_scnItem_update = Scene_Item.prototype.update;
Scene_Item.prototype.update = function() {
    _mog_scnItem_update.call(this);
	this.updateDefaultWindow();
	if (!this._layout) {
		if (this._layImg.isReady()) {this.createSprites()};
		return
	};
	this.updateItemWindow();
	this.updateCommands();
	if (this._layoutItem) {this.updateItemLayout()};
	if (this._buttons) {this.updateButtons()};
	this.updateTouchScreen();
	if (this._actorWindow) {this.updateActorStatus()};
};

//=============================================================================
// * Party Window Data
//=============================================================================
function PartyWindowData() {
    this.initialize.apply(this, arguments);
};

PartyWindowData.prototype = Object.create(Sprite.prototype);
PartyWindowData.prototype.constructor = PartyWindowData;

//==============================
// * Initialize
//==============================
PartyWindowData.prototype.initialize = function(actor) {
    Sprite.prototype.initialize.call(this);	
	this.loadBitmaps();
    this._actor = actor;
};

//==============================
// * Refresh
//==============================
PartyWindowData.prototype.loadBitmaps = function() {
    this._layImg = ImageManager.loadMenusitem(Moghunter.src_item_select_Layout);
	this._hpMeterImg = ImageManager.loadMenusitem(Moghunter.src_item_select_hpmeter);
	this._mpMeterImg = ImageManager.loadMenusitem(Moghunter.src_item_select_mpmeter);
};

//==============================
// * create Sprites
//==============================
PartyWindowData.prototype.createSprites = function() {
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
PartyWindowData.prototype.refresh = function() {
    this.refreshPar();
	this.refreshHPMeter();
	this.refreshMPMeter();
	this.refresh_states();
};

//==============================
// * createPar
//==============================
PartyWindowData.prototype.createPar = function() {
    this._par = new Sprite(new Bitmap(320,160));
	this._par.bitmap.fontSize = Moghunter.scItem_PartyFontSize;
	this.addChild(this._par);
};

//==============================
// * refresh Par
//==============================
PartyWindowData.prototype.refreshPar = function() {
     this._par.bitmap.clear();
	 this._par.bitmap.drawText(this._actor.hp,Moghunter.scItem_PartyHPNumberX,Moghunter.scItem_PartyHPNumberY,80,32,"right"); 
	 this._par.bitmap.drawText(this._actor.mp,Moghunter.scItem_PartyMPNumberX,Moghunter.scItem_PartyMPNumberY,80,32,"right"); 
	 this._par.bitmap.drawText(this._actor.name(),Moghunter.scItem_PartyNameX,Moghunter.scItem_PartyNameY,120,32,"left");
};

//==============================
// * createHP Meter
//==============================
PartyWindowData.prototype.createHPMeter = function() {
    this._hpMeter = new Sprite(this._hpMeterImg);
	this._hpMeter.x = Moghunter.scItem_PartyHPMeterX;
	this._hpMeter.y = Moghunter.scItem_PartyHPMeterY;
	this.addChild(this._hpMeter);
};

//==============================
// * refreshHP Meter
//==============================
PartyWindowData.prototype.refreshHPMeter = function() {
	var cw = this._hpMeterImg.width;
	var ch = this._hpMeterImg.height;
	var wid = cw * this._actor.hp / this._actor.mhp;
	this._hpMeter.setFrame(0,0,wid,cw);
};

//==============================
// * createHP Meter
//==============================
PartyWindowData.prototype.createMPMeter = function() {
    this._mpMeter = new Sprite(this._mpMeterImg);
	this._mpMeter.x = Moghunter.scItem_PartyMPMeterX;
	this._mpMeter.y = Moghunter.scItem_PartyMPMeterY;
	this.addChild(this._mpMeter);
};

//==============================
// * refreshMP Meter
//==============================
PartyWindowData.prototype.refreshMPMeter = function() {
	var cw = this._mpMeterImg.width;
	var ch = this._mpMeterImg.height;
	var wid = cw * this._actor.mp / this._actor.mmp;
	this._mpMeter.setFrame(0,0,wid,cw);
};


//==============================
// * Create States
//==============================
PartyWindowData.prototype.createStates = function() {
	this._states_data = [0,0,0];
	this._state_icon = new Sprite(ImageManager.loadSystem("IconSet"));
	this._state_icon.x = Moghunter.scItem_PartyStatusX;
	this._state_icon.y = Moghunter.scItem_PartyStatusY;
	this._state_icon.visible = false;
	this.addChild(this._state_icon);
	this.refresh_states();	
};
	
//==============================
// * Create States
//==============================
PartyWindowData.prototype.refresh_states = function() {
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
PartyWindowData.prototype.update_states = function() {
	this._states_data[2] += 1;
	if (this.need_refresh_states()) {this.refresh_states();};
};	
	
//==============================
// * Need Refresh States
//==============================
PartyWindowData.prototype.need_refresh_states = function() {
	if (this._states_data[2] > 60) {return true};
	return false;
};	


//==============================
// * Update
//==============================
PartyWindowData.prototype.update = function() {
    Sprite.prototype.update.call(this);	
    if (!this._par && this._layImg.isReady()) {this.createSprites()};
	if (this._state_icon) {this.update_states()};
};

//=============================================================================
// * Actor Data Window
//=============================================================================
function ActorDataWindow() {
    this.initialize.apply(this, arguments);
};

ActorDataWindow.prototype = Object.create(Sprite.prototype)//角色窗口不是窗口，而是一个容器！
ActorDataWindow.prototype.constructor = ActorDataWindow;

//==============================
// * Initialize
//==============================
ActorDataWindow.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);	
    this._actor = null;
};

//==============================
// * setActor
//==============================
ActorDataWindow.prototype.setActor = function(actor) {
     this._actor = actor;
	 if (!this._layout) {this.createSprites()};
	 this.refresh();
};

//==============================
// * create Sprites
//==============================
ActorDataWindow.prototype.createSprites = function() {
     this.createLayout();
	 this.createStates();
	 this.createFaces();
	 this.createParameters();
};

//==============================
// * Refresh
//==============================
ActorDataWindow.prototype.refresh = function() {
     this.refreshParameters();
	 this.refresh_states();	
	 this.refreshFaces();
};

//==============================
// * create Layout
//==============================
ActorDataWindow.prototype.createLayout = function() {
     this._layout = new Sprite(ImageManager.loadMenusitem(Moghunter.src_item_actor_Layout));
	 this._layout.x = Moghunter.scItem_ActorWinlayout_X;
	 this._layout.y = Moghunter.scItem_ActorWinlayout_Y;
	 this.addChild(this._layout);
};

//==============================
// * create Parameters
//==============================
ActorDataWindow.prototype.createParameters = function() {
     this._par = new Sprite(new Bitmap(Graphics.boxWidth,Graphics.boxHeight));
	 this._par.bitmap.fontSize = Moghunter.scItem_ActorParFontSize;
	 this._par.x = Moghunter.scItem_ActorParX;
	 this._par.y = Moghunter.scItem_ActorParY;
	 this.addChild(this._par);
};

//==============================
// * refresh Parameters
//==============================
ActorDataWindow.prototype.refreshParameters = function() {
     this._par.bitmap.clear();
	 this._par.bitmap.drawText(this._actor.hp,
	 -60,Moghunter.scItem_ActorPar_ver*2,
	 160,32,"right");
	 this._par.bitmap.drawText(this._actor.mhp,
	 -60+Moghunter.scItem_ActorPar_hor,Moghunter.scItem_ActorPar_ver*2,
	 160,32,"right");
	 this._par.bitmap.drawText(this._actor.mp,
	 -60,Moghunter.scItem_ActorPar_ver*3,
	 160,32,"right");
	 this._par.bitmap.drawText(this._actor.mmp,
	 -60+Moghunter.scItem_ActorPar_hor,Moghunter.scItem_ActorPar_ver*3,
	 160,32,"right");	 
	 this._par.bitmap.drawText(this._actor.atk,
	 -60,Moghunter.scItem_ActorPar_ver*4,
	 160,32,"right"); 
	 this._par.bitmap.drawText(this._actor.def,
	 -60+Moghunter.scItem_ActorPar_hor,Moghunter.scItem_ActorPar_ver*4,
	 160,32,"right"); 
	 this._par.bitmap.drawText(this._actor.mat,
	 -60,Moghunter.scItem_ActorPar_ver*5,
	 160,32,"right"); 
	 this._par.bitmap.drawText(this._actor.mdf,
	 -60+Moghunter.scItem_ActorPar_hor,Moghunter.scItem_ActorPar_ver*5,
	 160,32,"right");
	 this._par.bitmap.drawText(this._actor.agi,
	 -60,Moghunter.scItem_ActorPar_ver*6,
	 160,32,"right"); 
	 this._par.bitmap.drawText(this._actor.luk,
	 -60+Moghunter.scItem_ActorPar_hor,Moghunter.scItem_ActorPar_ver*6,
	 160,32,"right");	
	 this._par.bitmap.drawText(this._actor.name(),
	  Moghunter.scItem_Actor_NameX, Moghunter.scItem_Actor_NameY,
	 160,32,"left");	 
};

//==============================
// * Create States
//==============================
ActorDataWindow.prototype.createStates = function() {
	this._states_data = [0,0,0];
	this._state_icon = new Sprite(ImageManager.loadSystem("IconSet"));
	this._state_icon.x = Moghunter.scItem_ActorStatesX;
	this._state_icon.y = Moghunter.scItem_ActorStatesY;
	this._state_icon.visible = false;
	this.addChild(this._state_icon);
	this.refresh_states();	
};
	
//==============================
// * Create States
//==============================
ActorDataWindow.prototype.refresh_states = function() {
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
ActorDataWindow.prototype.update_states = function() {
	this._states_data[2] += 1;
	if (this.need_refresh_states()) {this.refresh_states();};
};	
	
//==============================
// * Need Refresh States
//==============================
ActorDataWindow.prototype.need_refresh_states = function() {
	if (this._states_data[2] > 60) {return true};
	return false;
};	

//==============================
// * create Faces
//==============================
ActorDataWindow.prototype.createFaces = function() {
     this._faces = new Sprite();
	 this._faces.x = Moghunter.scItem_ActorFaceX;
	 this._faces.y = Moghunter.scItem_ActorFaceY;
	 this.addChild(this._faces);
};

//==============================
// * refresh Faces
//==============================
ActorDataWindow.prototype.refreshFaces = function() {
     this._faces.bitmap = ImageManager.loadMenusActorFace(Moghunter.menu_item_face_list[this._actor._actorId])
};

//==============================
// * update
//==============================
ActorDataWindow.prototype.update = function() {
    Sprite.prototype.update.call(this);	
	if (!this._actor) {return};
    this.update_states();
};

//=============================================================================
// ** Window ItemListM
//=============================================================================
function Window_ItemListM() {
    this.initialize.apply(this, arguments);
}
Window_ItemListM.prototype = Object.create(Window_Selectable.prototype);
Window_ItemListM.prototype.constructor = Window_ItemListM;

//==============================
// * initialize
//==============================
Window_ItemListM.prototype.initialize = function(x, y, width, height) {
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this._category = 'none';
    this._data = [];
	this.contentsOpacity = 0;
	this.opacity = 0;
};

//==============================
// * setCategory
//==============================
Window_ItemListM.prototype.setCategory = function(category) {
    if (this._category !== category) {
        this._category = category;
        this.refresh();
        this.resetScroll();
    }
};

//==============================
// * maxCols
//==============================
Window_ItemListM.prototype.maxCols = function() {
    return Moghunter.scItem_ItemWindow_col;
};

//==============================
// * spacing
//==============================
Window_ItemListM.prototype.spacing = function() {
    return 8;
};
//==============================
// * maxItems
//==============================
Window_ItemListM.prototype.maxItems = function() {
    return this._data ? this._data.length : 1;
};

//==============================
// * item
//==============================
Window_ItemListM.prototype.item = function() {
    var index = this.index();
    return this._data && index >= 0 ? this._data[index] : null;
};

//==============================
// * isCurrentItemEnabled
//==============================
Window_ItemListM.prototype.isCurrentItemEnabled = function() {
    return this.isEnabled(this.item());
};

//==============================
// * Includes
//==============================
Window_ItemListM.prototype.includes = function(item) {
    switch (this._category) {
    case 'item':
        return DataManager.isItem(item) && item.itypeId === 1;
    case 'weapon':
        return DataManager.isWeapon(item);
    case 'armor':
        return DataManager.isArmor(item);
    case 'keyItem':
        return DataManager.isItem(item) && item.itypeId === 2;
    default:
        return false;
    }
};

//==============================
// * needsNumber
//==============================
Window_ItemListM.prototype.needsNumber = function() {
    return true;
};

//==============================
// * is Enabled
//==============================
Window_ItemListM.prototype.isEnabled = function(item) {
    return $gameParty.canUse(item);
};

//==============================
// * makeItemList
//==============================
Window_ItemListM.prototype.makeItemList = function() {
    this._data = $gameParty.allItems().filter(function(item) {
        return this.includes(item);
    }, this);
    if (this.includes(null)) {
        this._data.push(null);
    }
};

//==============================
// * selectLast
//==============================
Window_ItemListM.prototype.selectLast = function() {
    var index = this._data.indexOf($gameParty.lastItem());
    this.select(index >= 0 ? index : 0);
};

//==============================
// * drawItem
//==============================
Window_ItemListM.prototype.drawItem = function(index) {
	this.contents.fontSize = Moghunter.scItem_ItemWindow_fontsize;
    var item = this._data[index];
    if (item) {
        var numberWidth = this.numberWidth();
        var rect = this.itemRect(index);
        rect.width -= this.textPadding();
        this.changePaintOpacity(this.isEnabled(item));
        this.drawItemName(item, rect.x, rect.y, rect.width - numberWidth);
        this.drawItemNumber(item, rect.x, rect.y, rect.width);
        this.changePaintOpacity(1);
    }
};

//==============================
// * numberWidth
//==============================
Window_ItemListM.prototype.numberWidth = function() {
    return this.textWidth('000');
};

//==============================
// * drawItemNumber
//==============================
Window_ItemListM.prototype.drawItemNumber = function(item, x, y, width) {
    if (this.needsNumber()) {
        this.drawText(':', x, y, width - this.textWidth('00'), 'right');
        this.drawText($gameParty.numItems(item), x, y, width, 'right');
    }
};

//==============================
// * updateHelp
//==============================
Window_ItemListM.prototype.updateHelp = function() {
    this.setHelpWindowItem(this.item());
};

//==============================
// * refresh
//==============================
Window_ItemListM.prototype.refresh = function() {
    this.makeItemList();
    this.createContents();
    this.drawAllItems();
};

//==============================
// * update
//==============================
var _mog_WindowItemM_update = Window_ItemListM.prototype.update;
Window_ItemListM.prototype.update = function() {
	if (this.contentsOpacity != 255) {return};
    _mog_WindowItemM_update.call(this);
	//this.opacity = 0;	
	if(!Moghunter.scItem_Wlayout_visible){
		this.opacity = 255;
	}else{
		this.opacity = 0;
	}
};

//==============================
// * process Cursor Move
//==============================
Window_MenuActor.prototype.processCursorMove = function() {
    if (this.isCursorMovable()) {
        var lastIndex = this.index();
        if (Input.isRepeated('down')) {
            this.cursorDown(Input.isTriggered('down'));
        };
        if (Input.isRepeated('up') ) {
            this.cursorUp(Input.isTriggered('up'));
        };
        if (Input.isRepeated('right')) {
            this.cursorDown(Input.isTriggered('right'));
        };
        if (Input.isRepeated('left')) {
            this.cursorUp(Input.isTriggered('left'));
        };		
        if (this.index() !== lastIndex) {
            SoundManager.playCursor();
        };
    };
};

//==============================
// * Update
//==============================
var _mog_scItem_wmact_update = Window_MenuActor.prototype.update;
Window_MenuActor.prototype.update = function() {
	_mog_scItem_wmact_update.call(this);
	if (!this._cursorAll) {this.updateScrollRoll()};
};

//==============================
// * update SCroll Roll
//==============================
Window_MenuActor.prototype.updateScrollRoll = function() {
    if (this.isOpenAndActive() && this.maxItems() > 0) {
		var srow = this.maxTopRow() === 0 ? 1 : this.maxCols();
        var threshold = 20;
		var idx = this._index;
        if (TouchInput.wheelY >= threshold) {
            this._index += srow;
			if (this._index > (this.maxItems() - 1)) {this._index = this.maxItems() - 1};
			this.select(this._index);
			if (idx != this._index) {SoundManager.playCursor()};
        };
        if (TouchInput.wheelY <= -threshold) {
            this._index -= srow;
			if (this._index < 0) {this._index = 0};
			this.select(this._index);
			if (idx != this._index) {SoundManager.playCursor()};
        };
    };
};	