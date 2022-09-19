//=============================================================================
// MOG_SceneFile.js
//=============================================================================

/*:
 * @plugindesc (v1.0)[v1.8]  面板 - 全自定义存档界面
 * @author Moghunter （Drill_up翻译+优化）
 * 
 * @Drill_LE_param "角色前视图-%d"
 * @Drill_LE_parentKey "==角色前视图%d至%d=="
 * @Drill_LE_var "Moghunter.menu_save_act_list_length"
 * 
 *
 * @param ----杂项数据----
 * @default 
 *
 * @param 资源-整体布局
 * @parent ----杂项数据----
 * @desc 整体布局的图片资源。
 * @default 存档界面-整体布局
 * @require 1
 * @dir img/Menu__save/
 * @type file
 * 
 * @param 最大存档数
 * @parent ----杂项数据----
 * @type number
 * @min 2
 * @desc 存档的上限数量。
 * @default 6
 *
 * @param 用语-没有存档
 * @parent ----杂项数据----
 * @desc 没有存档时，角色窗口显示的内容。如果你修改了存档的上限数量，请先将"是否转换选择窗口"的开关关闭。
 * @default - 没有存档 -
 *
 * @param 平移-帮助信息 X
 * @parent ----杂项数据----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 20
 *
 * @param 平移-帮助信息 Y
 * @parent ----杂项数据----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 520
 *
 * @param ----游戏截图----
 * @default 
 *
 * @param 存档是否存储截图
 * @parent ----游戏截图----
 * @type boolean
 * @on 存储
 * @off 不存储
 * @desc true - 存储，false - 不存储。当前位置截图会存入存档中，会程度影响一定的存储速度。
 * @default true
 *
 * @param 平移-截图 X
 * @parent ----游戏截图----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 390
 *
 * @param 平移-截图 Y
 * @parent ----游戏截图----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 105
 *
 * @param 截图起点 X
 * @parent ----游戏截图----
 * @desc 截图初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的x轴值，单位像素。（可为负数）
 * @default 100
 *
 * @param 截图起点 Y
 * @parent ----游戏截图----
 * @desc 截图初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的y轴值，单位像素。（可为负数）
 * @default 0
 *
 * @param 截图移动时长
 * @parent ----游戏截图----
 * @type number
 * @min 1
 * @desc 从偏移的位置到原位置所需的时间，单位帧。（1秒60帧）
 * @default 20
 *
 * @param 截图宽度
 * @parent ----游戏截图----
 * @type number
 * @min 50
 * @desc 截图的宽度，最好设置为窗口宽高比例一致的大小。
 * @default 330
 *
 * @param 截图高度
 * @parent ----游戏截图----
 * @type number
 * @min 50
 * @desc 截图的高度，最好设置为窗口宽高比例一致的大小。
 * @default 253
 *
 * @param ----选择窗口----
 * @default 
 *
 * @param 平移-选择窗口 X
 * @parent ----选择窗口----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 20
 *
 * @param 平移-选择窗口 Y
 * @parent ----选择窗口----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 160
 *
 * @param 选择窗口宽度
 * @parent ----选择窗口----
 * @type number
 * @min 50
 * @desc 窗口的高宽设置。注意，实际文本域的高宽要比该设置小一些，因为有内边距。具体去看看 "17.主菜单 > 窗口与布局.docx"。
 * @default 295
 *
 * @param 选择窗口高度
 * @parent ----选择窗口----
 * @type number
 * @min 50
 * @desc 窗口的高宽设置。注意，实际文本域的高宽要比该设置小一些，因为有内边距。具体去看看 "17.主菜单 > 窗口与布局.docx"。
 * @default 375
 *
 * @param 选择窗口字体大小
 * @parent ----选择窗口----
 * @type number
 * @min 1
 * @desc 选择窗口的字体大小。
 * @default 22
 *
 * @param 选择窗口列数
 * @parent ----选择窗口----
 * @type number
 * @min 1
 * @desc 选择窗口的列数。
 * @default 2
 *
 * @param 选择窗口选项高度
 * @parent ----选择窗口----
 * @type number
 * @min 20
 * @desc 选择窗口的选项的高度。
 * @default 100
 *
 * @param 是否转换选择窗口
 * @parent ----选择窗口----
 * @type boolean
 * @on 转换
 * @off 不转换
 * @desc true - 转换，false - 不转换。将选择窗口变成图片阵列。
 * @default true
 *
 * @param 资源-可选对象
 * @parent 是否转换选择窗口
 * @desc 可选对象的图片资源。可选对象在选择指针的前面。
 * @default 存档界面-可选对象
 * @require 1
 * @dir img/Menu__save/
 * @type file
 *
 * @param 资源-选择指针
 * @parent 是否转换选择窗口
 * @desc 选择指针的图片资源。
 * @default 存档界面-选择指针
 * @require 1
 * @dir img/Menu__save/
 * @type file
 * 
 * @param 平移-选择指针 X
 * @parent 是否转换选择窗口
 * @desc 修正指针的偏移用。以窗口的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default 0
 * 
 * @param 平移-选择指针 Y
 * @parent 是否转换选择窗口
 * @desc 修正指针的偏移用。以窗口的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param ----角色窗口----
 * @default 
 *
 * @param 平移-角色窗口 X
 * @parent ----角色窗口----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 330
 *
 * @param 平移-角色窗口 Y
 * @parent ----角色窗口----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 25
 *
 * @param 角色窗口起点 X
 * @parent ----角色窗口----
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的x轴值，单位像素。（可为负数）
 * @default -100
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
 * @default 25
 *
 * @param 是否使用角色窗口布局
 * @parent ----角色窗口----
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用。
 * @default true
 *
 * @param 资源-角色窗口
 * @parent 是否使用角色窗口布局
 * @desc 角色窗口的图片资源。
 * @default 存档界面-角色窗口
 * @require 1
 * @dir img/Menu__save/
 * @type file
 * 
 * @param 角色窗口布局 X
 * @parent 是否使用角色窗口布局
 * @desc 修正图片的偏移用。以窗口的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default 0
 * 
 * @param 角色窗口布局 Y
 * @parent 是否使用角色窗口布局
 * @desc 修正图片的偏移用。以窗口的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 角色窗口宽度
 * @parent ----角色窗口----
 * @type number
 * @min 50
 * @desc 窗口的高宽设置。注意，实际文本域的高宽要比该设置小一些，因为有内边距。具体去看看 "17.主菜单 > 窗口与布局.docx"。
 * @default 465
 *
 * @param 角色窗口高度
 * @parent ----角色窗口----
 * @type number
 * @min 50
 * @desc 窗口的高宽设置。注意，实际文本域的高宽要比该设置小一些，因为有内边距。具体去看看 "17.主菜单 > 窗口与布局.docx"。
 * @default 580
 *
 * @param 角色窗口字体大小
 * @parent ----角色窗口----
 * @type number
 * @min 1
 * @desc 帮助窗口的字体大小。
 * @default 22
 *
 * @param 是否显示属性
 * @parent ----角色窗口----
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示。你可以设置不显示，把属性画在布局图片里面，也可以直接通过文本显示。
 * @default true
 *
 * @param 角色窗口属性颜色
 * @parent ----角色窗口----
 * @type number
 * @min 0
 * @desc 如果设置显示属性，这里可以改变属性文字的颜色，对应颜色编号。0为白色。
 * @default 23
 *
 * @param 用语-游戏时长
 * @parent ----角色窗口----
 * @desc 游戏时长属性的用语。
 * @default 游戏时长
 *
 * @param 平移-游戏时长 X
 * @parent ----角色窗口----
 * @desc 以窗口的点为基准，x轴方向平移，单位像素。如果内容超出窗口范围，会被遮住。
 * @default 246
 *  
 * @param 平移-游戏时长 Y
 * @parent ----角色窗口----
 * @desc 以窗口的点为基准，y轴方向平移，单位像素。如果内容超出窗口范围，会被遮住。
 * @default 0
 *
 * @param 用语-所在地
 * @parent ----角色窗口----
 * @desc 所在地属性的用语。
 * @default 所在地
 *
 * @param 平移-所在地 X
 * @parent ----角色窗口----
 * @desc 以窗口的点为基准，x轴方向平移，单位像素。如果内容超出窗口范围，会被遮住。
 * @default 0
 *  
 * @param 平移-所在地 Y
 * @parent ----角色窗口----
 * @desc 以窗口的点为基准，y轴方向平移，单位像素。如果内容超出窗口范围，会被遮住。
 * @default 0
 *
 * @param 平移-角色名 X
 * @parent ----角色窗口----
 * @desc 以窗口的点为基准，x轴方向平移，单位像素。如果内容超出窗口范围，会被遮住。
 * @default 210
 *  
 * @param 平移-角色名 Y
 * @parent ----角色窗口----
 * @desc 以窗口的点为基准，y轴方向平移，单位像素。如果内容超出窗口范围，会被遮住。
 * @default 332
 *
 * @param 平移-等级 X
 * @parent ----角色窗口----
 * @desc 以窗口的点为基准，x轴方向平移，单位像素。如果内容超出窗口范围，会被遮住。
 * @default 324
 *  
 * @param 平移-等级 Y
 * @parent ----角色窗口----
 * @desc 以窗口的点为基准，y轴方向平移，单位像素。如果内容超出窗口范围，会被遮住。
 * @default 332
 *
 * @param 平移-金钱 X
 * @parent ----角色窗口----
 * @desc 以窗口的点为基准，x轴方向平移，单位像素。如果内容超出窗口范围，会被遮住。
 * @default 0
 *  
 * @param 平移-金钱 Y
 * @parent ----角色窗口----
 * @desc 以窗口的点为基准，y轴方向平移，单位像素。如果内容超出窗口范围，会被遮住。
 * @default 200
 *
 * @param 平移-能力值组 X
 * @parent ----角色窗口----
 * @desc 以窗口的点为基准，x轴方向平移，单位像素。如果内容超出窗口范围，会被遮住。
 * @default 0
 *  
 * @param 平移-能力值组 Y
 * @parent ----角色窗口----
 * @desc 以窗口的点为基准，y轴方向平移，单位像素。如果内容超出窗口范围，会被遮住。
 * @default 300
 *  
 * @param 能力值组横向间距
 * @parent ----角色窗口----
 * @type number
 * @min 0
 * @desc 能力值组的横向间距。单位像素。
 * @default 150
 *  
 * @param 能力值组纵向间距
 * @parent ----角色窗口----
 * @type number
 * @min 0
 * @desc 能力值组的纵向间距。单位像素。
 * @default 28
 *
 * @param 是否显示最大生命与魔法
 * @parent ----角色窗口----
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示。存档信息设置显示最大生命与最大魔法值。
 * @default false
 *
 * @param 平移-角色前视图 X
 * @parent ----角色窗口----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 580
 *
 * @param 平移-角色前视图 Y
 * @parent ----角色窗口----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 410
 *
 * @param 角色前视图起点 X
 * @parent ----角色窗口----
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的x轴值，单位像素。（可为负数）
 * @default 80
 *
 * @param 角色前视图起点 Y
 * @parent ----角色窗口----
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的y轴值，单位像素。（可为负数）
 * @default 0
 *
 * @param 角色前视图移动时长
 * @parent ----角色窗口----
 * @type number
 * @min 1
 * @desc 从偏移的位置到原位置所需的时间，单位帧。（1秒60帧）
 * @default 30
 * 
 * @param ==角色前视图 1至20==
 * @parent ----角色窗口----
 * @default 
 *
 * @param 角色前视图-1
 * @parent ==角色前视图 1至20==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-2
 * @parent ==角色前视图 1至20==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-3
 * @parent ==角色前视图 1至20==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-4
 * @parent ==角色前视图 1至20==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-5
 * @parent ==角色前视图 1至20==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-6
 * @parent ==角色前视图 1至20==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-7
 * @parent ==角色前视图 1至20==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-8
 * @parent ==角色前视图 1至20==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-9
 * @parent ==角色前视图 1至20==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-10
 * @parent ==角色前视图 1至20==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-11
 * @parent ==角色前视图 1至20==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-12
 * @parent ==角色前视图 1至20==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-13
 * @parent ==角色前视图 1至20==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-14
 * @parent ==角色前视图 1至20==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-15
 * @parent ==角色前视图 1至20==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-16
 * @parent ==角色前视图 1至20==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-17
 * @parent ==角色前视图 1至20==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-18
 * @parent ==角色前视图 1至20==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-19
 * @parent ==角色前视图 1至20==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-20
 * @parent ==角色前视图 1至20==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 * 
 * @param ==角色前视图21至40==
 * @parent ----角色窗口----
 * @default 
 *
 * @param 角色前视图-21
 * @parent ==角色前视图21至40==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-22
 * @parent ==角色前视图21至40==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-23
 * @parent ==角色前视图21至40==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-24
 * @parent ==角色前视图21至40==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-25
 * @parent ==角色前视图21至40==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-26
 * @parent ==角色前视图21至40==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-27
 * @parent ==角色前视图21至40==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-28
 * @parent ==角色前视图21至40==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-29
 * @parent ==角色前视图21至40==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-30
 * @parent ==角色前视图21至40==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-31
 * @parent ==角色前视图21至40==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-32
 * @parent ==角色前视图21至40==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-33
 * @parent ==角色前视图21至40==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-34
 * @parent ==角色前视图21至40==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-35
 * @parent ==角色前视图21至40==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-36
 * @parent ==角色前视图21至40==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-37
 * @parent ==角色前视图21至40==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-38
 * @parent ==角色前视图21至40==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-39
 * @parent ==角色前视图21至40==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-40
 * @parent ==角色前视图21至40==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 * 
 * @param ==角色前视图41至60==
 * @parent ----角色窗口----
 * @default 
 *
 * @param 角色前视图-41
 * @parent ==角色前视图41至60==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-42
 * @parent ==角色前视图41至60==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-43
 * @parent ==角色前视图41至60==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-44
 * @parent ==角色前视图41至60==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-45
 * @parent ==角色前视图41至60==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-46
 * @parent ==角色前视图41至60==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-47
 * @parent ==角色前视图41至60==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-48
 * @parent ==角色前视图41至60==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-49
 * @parent ==角色前视图41至60==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-50
 * @parent ==角色前视图41至60==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-51
 * @parent ==角色前视图41至60==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-52
 * @parent ==角色前视图41至60==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-53
 * @parent ==角色前视图41至60==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-54
 * @parent ==角色前视图41至60==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-55
 * @parent ==角色前视图41至60==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-56
 * @parent ==角色前视图41至60==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-57
 * @parent ==角色前视图41至60==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-58
 * @parent ==角色前视图41至60==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-59
 * @parent ==角色前视图41至60==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 * @param 角色前视图-60
 * @parent ==角色前视图41至60==
 * @desc 角色前视图的图片资源。与角色编号对应。
 * @default 
 * @require 1
 * @dir img/Menu__actorFaces/
 * @type file
 *
 *
 * @help  
 * =============================================================================
 * +++ MOG - Scene File (v1.0) +++
 * By Moghunter 
 * https://mogplugins.wordpress.com/
 * =============================================================================
 * 可完全自己定义的存档界面设置。
 * 参数如何配的详细介绍去看看插件详细说明 "17.主菜单 > 窗口与布局.docx"。
 * 【现已支持插件关联资源的打包、加密】
 *
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.插件的作用域：菜单界面。
 *   可以设置存档面板(界面)的内容。
 * 2.该面板属于菜单面板，可以被菜单背景、菜单魔法圈等插件作用到。
 *   该面板关键字为：Scene_Save
 *   更多关键字内容，见 "17.主菜单 > 菜单关键字.docx"。
 * 结构：
 *   (1.该配置包含选择窗口、角色窗口、游戏截图、杂项数据四个部分。
 *   (2.存档的截图功能会较大影响游戏速度，你可以选择关闭截图功能。
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 资源路径：img/Menu__save （Menu后面有两个下划线）
 * 资源路径：img/Menu__actorFaces （Menu后面有两个下划线）
 * 先确保项目img文件夹下是否有Menu__save文件夹。
 * 先确保项目img文件夹下是否有Menu__actorFaces文件夹。
 * 要查看所有关联资源文件的插件，可以去看看"插件清单.xlsx"。
 * 如果没有，需要自己建立。需要配置资源文件：
 *
 * 资源-整体布局  （Menu__save文件夹）
 * 资源-角色窗口  
 * 资源-选择指针  
 * 资源-可选对象  
 *
 * 角色前视图-1   （Menu__actorFaces文件夹）
 * 角色前视图-2
 * 角色前视图-3
 * ………
 * 
 * 1.框架资源都在Menu__save文件夹中。
 * 2.角色图标、头像资源都在Menu__actorFaces文件夹中。
 *
 * -----------------------------------------------------------------------------
 * ----关于Drill_up优化：
 * [v1.1]
 * 使得该插件支持关联资源的打包、加密。
 * 部署时勾选去除无关文件，本插件中相关的文件不会被去除。
 * [v1.2]
 * 大幅度修改了内部写死的数据，并添加了窗口相关控制变量。
 * 添加了游戏截图的功能。
 * [v1.3]
 * 存储方式优化，解决了没有截图的bug。
 * [v1.4]
 * 添加了不存储截图的开关。
 * [v1.5]
 * 修复了属性文字设置不显示时没有效果的bug。
 * [v1.6]
 * 修改了插件的分类。
 * [v1.7]
 * 修改了插件关联的资源文件夹。
 * [v1.8]
 * 添加了最大值编辑的支持。
 *
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_SceneFile = true;
　　var Moghunter = Moghunter || {}; 
  　Moghunter.parameters = PluginManager.parameters('MOG_SceneFile');
	Moghunter.scFile_MaxData = Number(Moghunter.parameters['最大存档数'] || 6);
	Moghunter.scFile_NoData = String(Moghunter.parameters['用语-没有存档'] || "- 没有存档 -");
	Moghunter.scFile_HelpX = Number(Moghunter.parameters['平移-帮助信息 X'] || 20);
	Moghunter.scFile_HelpY = Number(Moghunter.parameters['平移-帮助信息 Y'] || 520);
	
	Moghunter.scFile_Snap_usable = String(Moghunter.parameters['存档是否存储截图'] || "true") === "true";
    Moghunter.scFile_SnapX = Number(Moghunter.parameters['平移-截图 X'] || 390);
    Moghunter.scFile_SnapY = Number(Moghunter.parameters['平移-截图 Y'] || 105);
	Moghunter.scFile_Snap_slideX = Number(Moghunter.parameters['截图起点 X'] || 100);
	Moghunter.scFile_Snap_slideY = Number(Moghunter.parameters['截图起点 Y'] || 0);
	Moghunter.scFile_Snap_slideTime = Number(Moghunter.parameters['截图移动时长'] || 20);
    Moghunter.scFile_Snap_width = Number(Moghunter.parameters['截图宽度'] || 330);
    Moghunter.scFile_Snap_height = Number(Moghunter.parameters['截图高度'] || 253);
	
	Moghunter.scFile_SelX = Number(Moghunter.parameters['平移-选择窗口 X'] || 20);
	Moghunter.scFile_SelY = Number(Moghunter.parameters['平移-选择窗口 Y'] || 160);	
	Moghunter.scFile_Sel_width = Number(Moghunter.parameters['选择窗口宽度'] || 295);	
	Moghunter.scFile_Sel_height = Number(Moghunter.parameters['选择窗口高度'] || 375);	
	Moghunter.scFile_Sel_FontSize = Number(Moghunter.parameters['选择窗口字体大小'] || 22);
	Moghunter.scFile_Sel_col = Number(Moghunter.parameters['选择窗口列数'] || 2);
	Moghunter.scFile_Sel_itemHeight = Number(Moghunter.parameters['选择窗口选项高度'] || 100);
	Moghunter.scFile_Sel_change = String(Moghunter.parameters['是否转换选择窗口'] || "true") === "true";
	Moghunter.scFile_CursorX = Number(Moghunter.parameters['平移-选择指针 X'] || 0);
	Moghunter.scFile_CursorY = Number(Moghunter.parameters['平移-选择指针 Y'] || 0);
	
	Moghunter.scFile_ActX = Number(Moghunter.parameters['平移-角色窗口 X'] || 330);
	Moghunter.scFile_ActY = Number(Moghunter.parameters['平移-角色窗口 Y'] || 25);	
	Moghunter.scFile_Act_slideX = Number(Moghunter.parameters['角色窗口起点 X'] || -100);
	Moghunter.scFile_Act_slideY = Number(Moghunter.parameters['角色窗口起点 Y'] || 0);
	Moghunter.scFile_Act_slideTime = Number(Moghunter.parameters['角色窗口移动时长'] || 25);
	Moghunter.scFile_ParBack_visible = String(Moghunter.parameters['是否使用角色窗口布局'] || "true") === "true";
	Moghunter.scFile_ParBackX = Number(Moghunter.parameters['角色窗口布局 X'] || 0);
	Moghunter.scFile_ParBackY = Number(Moghunter.parameters['角色窗口布局 Y'] || 0);
	Moghunter.scFile_Act_width = Number(Moghunter.parameters['角色窗口宽度'] || 465);	
	Moghunter.scFile_Act_height = Number(Moghunter.parameters['角色窗口高度'] || 580);	
	Moghunter.scFile_FontSize = Number(Moghunter.parameters['角色窗口字体大小'] || 22);
	Moghunter.scFile_Text_visible = String(Moghunter.parameters['是否显示属性'] || "true") === "true";
	Moghunter.scFile_TextColor = Number(Moghunter.parameters['角色窗口属性颜色'] || 23);
	Moghunter.scFile_PlayTimeWord = String(Moghunter.parameters['用语-游戏时长'] || "游戏时长");
	Moghunter.scFile_PlayTimeX = Number(Moghunter.parameters['平移-游戏时长 X'] || 246); 
	Moghunter.scFile_PlayTimeY = Number(Moghunter.parameters['平移-游戏时长 Y'] || 0);
	Moghunter.scFile_LocationWord = String(Moghunter.parameters['用语-所在地'] || "所在地");
	Moghunter.scFile_LocationX = Number(Moghunter.parameters['平移-所在地 X'] || 0); 
	Moghunter.scFile_LocationY = Number(Moghunter.parameters['平移-所在地 Y'] || 0);
	Moghunter.scFile_nameX = Number(Moghunter.parameters['平移-角色名 X'] || 210); 
	Moghunter.scFile_nameY = Number(Moghunter.parameters['平移-角色名 Y'] || 332);
	Moghunter.scFile_levelX = Number(Moghunter.parameters['平移-等级 X'] || 324); 
	Moghunter.scFile_levelY = Number(Moghunter.parameters['平移-等级 Y'] || 332);
	Moghunter.scFile_goldX = Number(Moghunter.parameters['平移-金钱 X'] || 0); 
	Moghunter.scFile_goldY = Number(Moghunter.parameters['平移-金钱 Y'] || 200);
	Moghunter.scFile_ParX = Number(Moghunter.parameters['平移-能力值组 X'] || 0); 
	Moghunter.scFile_ParY = Number(Moghunter.parameters['平移-能力值组 Y'] || 300);
	Moghunter.scFile_ParS_hor = Number(Moghunter.parameters['能力值组横向间距'] || 150); 
	Moghunter.scFile_ParS = Number(Moghunter.parameters['能力值组纵向间距'] || 28); 
	Moghunter.scFile_Par_hpmp_visible = String(Moghunter.parameters['是否显示最大生命与魔法'] || "false") === "true";
    Moghunter.scFile_ActorX = Number(Moghunter.parameters['平移-角色前视图 X'] || 580);
    Moghunter.scFile_ActorY = Number(Moghunter.parameters['平移-角色前视图 Y'] || 410);
	Moghunter.scFile_Actor_slideX = Number(Moghunter.parameters['角色前视图起点 X'] || 80);
	Moghunter.scFile_Actor_slideY = Number(Moghunter.parameters['角色前视图起点 Y'] || 0);
	Moghunter.scFile_Actor_slideTime = Number(Moghunter.parameters['角色前视图移动时长'] || 30);
	
	
	Moghunter.src_menu_file_layout = String(Moghunter.parameters['资源-整体布局']);
	Moghunter.src_menu_file_act_layout = String(Moghunter.parameters['资源-角色窗口']);
	Moghunter.src_menu_file_Cursor = String(Moghunter.parameters['资源-选择指针']);
	Moghunter.src_menu_file_CursorBack = String(Moghunter.parameters['资源-可选对象']);
	
	Moghunter.menu_save_act_list_length = 60;
	Moghunter.menu_save_act_list = {};
	for (var i = 1; i <= Moghunter.menu_save_act_list_length ; i++ ) {
		Moghunter.menu_save_act_list[i] = Moghunter.parameters['角色前视图-' + String(i) ];
	};
	
//=============================================================================
// ** ImageManager
//=============================================================================

//==============================
// * Menus
//==============================
ImageManager.loadMenusFile = function(filename) {
    return this.loadBitmap('img/Menu__save/', filename, 0, true);
};
ImageManager.loadMenusActorFace = function(filename) {
    return this.loadBitmap('img/Menu__actorFaces/', filename, 0, true);
};
	
//=============================================================================
// ** Data Manager
//=============================================================================

//==============================
// * Max Save Files
//==============================	
DataManager.maxSavefiles = function() {
    return Moghunter.scFile_MaxData;
};

//==============================
// * Max Save File Info 
//==============================
var _mog_dataManager_makeSavefileInfo = DataManager.makeSavefileInfo ;
DataManager.makeSavefileInfo = function() {
	var info = _mog_dataManager_makeSavefileInfo.call(this);
	
	info.members    = $gameParty.members();
	if ( $dataMap && $dataMap.displayName  ) {
    	  info.location   = $dataMap.displayName;
	} else {
		if ($dataMapInfos[$gameMap._mapId]) {
		  info.location = $dataMapInfos[$gameMap._mapId].name;
		} else {
		  info.location = "";
		};
	};
	var actor = info.members[0];
	info.actor = [actor.name(),actor.level,actor.mhp,actor.mmp,actor.atk,actor.def,
	              actor.mat,actor.mdf,actor.agi,actor.luk,actor._actorId];
	info.gold = $gameParty.gold();   

	if(Moghunter.scFile_Snap_usable){
		var bitmap = this.drill_makeSavefileBitmap();
		if (bitmap){
			info.snapUrl = bitmap.drill_toDataURL();
		}
	}
    return info;
};

//=============================================================================
// ** Window_SavefileList 选择窗口
//=============================================================================

//==============================
// * initialize
//==============================
var _mog_sfile_wsav_initialize = Window_SavefileList.prototype.initialize;
Window_SavefileList.prototype.initialize = function(x, y, width, height) {
    _mog_sfile_wsav_initialize.call(this,x, y, width, height)
	this.x = Moghunter.scFile_SelX ;
	this.y = Moghunter.scFile_SelY ;
	this.width = Moghunter.scFile_Sel_width ;
	this.height = Moghunter.scFile_Sel_height ;
	
	if(Moghunter.scFile_Sel_change){
		this.visible = false;
		this.y += (Graphics.boxHeight * 2);	//选择窗口隐藏
	}
};

Window_SavefileList.prototype.maxVisibleItems = function() {
    return DataManager.maxSavefiles();
};

Window_SavefileList.prototype.windowWidth = function() {
    return Moghunter.scFile_Sel_width;
};

Window_SavefileList.prototype.itemHeight = function() {
    return Moghunter.scFile_Sel_itemHeight;
};
Window_SavefileList.prototype.maxCols = function() {
    return Moghunter.scFile_Sel_col;
};

Window_SavefileList.prototype.standardFontSize = function() {
    return Moghunter.scFile_Sel_FontSize;
};

//=============================================================================
// ** Scene File
//=============================================================================

//==============================
// * initialize
//==============================
var _mog_sfile_sf_initialize = Scene_File.prototype.initialize; 
Scene_File.prototype.initialize = function() {
    _mog_sfile_sf_initialize.call(this);
	this._fIndex = -3;
	this._actorIndex = -1; 
};

//==============================
// * create
//==============================
var _mog_sfile_create = Scene_File.prototype.create;
Scene_File.prototype.create = function() {
    _mog_sfile_create.call(this)
	this.createActorPicture();
	this.createCursor();
	this.createLayout();
	this.createParBack();
    this.createWindowData();
	this.createSnapImg();
	if (this._listWindow._index < 0 || this._listWindow._index > Moghunter.scFile_MaxData-1 ) {this._listWindow._index = 0};
};
	
//==============================
// * create Actor Picture 角色前视图
//==============================
Scene_File.prototype.createActorPicture = function() {
     this._ActorPicture = new Sprite();
	 this.addChild(this._ActorPicture);
};

//==============================
// * create SnapImg 游戏截图
//==============================
Scene_File.prototype.createSnapImg = function() {
     this._snap_image = new Sprite();
	 this.addChild(this._snap_image);
};

//==============================
// * create Layout
//==============================
Scene_File.prototype.createLayout = function() {
     this._layout = new Sprite(ImageManager.loadMenusFile(Moghunter.src_menu_file_layout));
	 this.addChild(this._layout);
};

//==============================
// * create Par Back
//==============================
Scene_File.prototype.createParBack = function() {
     this._parBack = new Sprite(ImageManager.loadMenusFile(Moghunter.src_menu_file_act_layout));
	 if(!Moghunter.scFile_ParBack_visible){this._parBack = new Sprite();}
	 this._parBack.x = Moghunter.scFile_ActX + Moghunter.scFile_ParBackX;
	 this._parBack.y = Moghunter.scFile_ActY + Moghunter.scFile_ParBackY;
	 this._parBack.opacity = 0;
	 this._parBack.visible = false;
	 this.addChild(this._parBack);
};

//==============================
// * update Par Back
//==============================
Scene_File.prototype.updateParBack = function() {
     this._parBack.visible = this._actorIndex > 0 ? true : false;
};

//==============================
// * create Cursor
//==============================
Scene_File.prototype.createCursor = function() {
    this._Cursor = new Sprite(ImageManager.loadMenusFile(Moghunter.src_menu_file_Cursor));
	if( !Moghunter.scFile_Sel_change ){
		this._Cursor = new Sprite();
	}
	 this._Cursor.opacity = 0;
    this._Cursorback = new Sprite(ImageManager.loadMenusFile(Moghunter.src_menu_file_CursorBack));
	if( !Moghunter.scFile_Sel_change ){
		this._Cursorback = new Sprite();
	}
	 this._Cursorback.x = Moghunter.scFile_SelX;
	 this._Cursorback.y = Moghunter.scFile_SelY;
	 this.addChild(this._Cursor);
	 this.addChild(this._Cursorback);
};

//==============================
// * update Cursor
//==============================
Scene_File.prototype.updateCursor = function() {
    var nx = Moghunter.scFile_SelX + Moghunter.scFile_CursorX;
	var ny = Moghunter.scFile_SelY + Moghunter.scFile_CursorY;
	 var i =  Math.floor(this._listWindow._index / Moghunter.scFile_Sel_col);
	 var j =  Math.floor(this._listWindow._index % Moghunter.scFile_Sel_col);
	 nx += this._listWindow.width / Moghunter.scFile_Sel_col * j;
	 ny += Moghunter.scFile_Sel_itemHeight * i;
	 this._Cursor.x = this.barCMT(this._Cursor.x,nx);
	 this._Cursor.y = this.barCMT(this._Cursor.y,ny);
	 if (this._Cursor.opacity < 254) {this._Cursor.opacity += 10};
};

//==============================
// * next Index
//==============================
Scene_File.prototype.nextIndex = function(value) {	//确保循环选择
     SoundManager.playCursor();
	 this._listWindow._index += value;
	 if (this._listWindow._index < 0) {this._listWindow._index = Moghunter.scFile_MaxData-1 };
	 if (this._listWindow._index > Moghunter.scFile_MaxData-1) {this._listWindow._index = 0};
}; 


//==============================
// * update Command
//==============================
Scene_File.prototype.updateCommand = function() {
	//if (Input.isRepeated("right")) {this.nextIndex(1)}
	//else if (Input.isRepeated("left")) {this.nextIndex(-1)}
	if (TouchInput.isTriggered() && Moghunter.scFile_Sel_change ) {
		this.checkTouchFile()
	};
};

//==============================
// * check Touch File
//==============================
Scene_File.prototype.checkTouchFile = function() {
	var oldIndex = this._listWindow._index;
	var onfile = false
	for (i = 0; i < Moghunter.scFile_MaxData; i++) {
         if (this.isOnFile(i)) {
			 this._listWindow._index = i;
			 onfile = true;
		 };
	};
	if (!onfile) {return};
	if (oldIndex === this._listWindow._index) {
		this._listWindow.processOk();
	} else {
		SoundManager.playCursor();
	};
};

//==============================
// * On Picture Com 设置区域为选中文件的区域
//==============================
Scene_File.prototype.isOnFile = function(index) {	 
     var x = Moghunter.scFile_SelX + Moghunter.scFile_CursorX;
	 var y = Moghunter.scFile_SelY + Moghunter.scFile_CursorY;
	 var i =  Math.floor(index / Moghunter.scFile_Sel_col);
	 var j =  Math.floor(index % Moghunter.scFile_Sel_col);
	 x += this._listWindow.width / Moghunter.scFile_Sel_col * j;
	 y += Moghunter.scFile_Sel_itemHeight * i;
	 var cw = this._Cursor.bitmap.width;
	 var ch = this._Cursor.bitmap.height;
	 if (TouchInput.x < x) { return false};
	 if (TouchInput.x > x + cw) { return false};
	 if (TouchInput.y < y) { return false};
	 if (TouchInput.y > y + ch) { return false};
	 return true;	 
};	
	

//==============================
// * bar CMT
//==============================
Scene_File.prototype.barCMT = function(value,real_value) {
	if (value == real_value) {return value};
	var dnspeed = 3 + (Math.abs(value - real_value) / 10);
	if (value > real_value) {value -= dnspeed;
	    if (value < real_value) {value = real_value};}
    else if (value < real_value) {value  += dnspeed;
    	if (value  > real_value) {value  = real_value};		
    };
	return Math.floor(value);
};

//==============================
// * refresh Actor Picture
//==============================
Scene_File.prototype.refreshActorPicture = function() {
      this._actorIndex =  this._dataWindow.actorID();
	  this._ActorPicture.bitmap = null;
	  if (!this._actorIndex) {return};
	  this._ActorPicture.bitmap = ImageManager.loadMenusActorFace(Moghunter.menu_save_act_list[this._actorIndex]);
	  this._ActorPicture.x = Moghunter.scFile_ActorX + Moghunter.scFile_Actor_slideX;
	  this._ActorPicture.y = Moghunter.scFile_ActorY + Moghunter.scFile_Actor_slideY;
	  this._ActorPicture.opacity = 0;
	  this._ActorPicture._move = 0;
};

//==============================
// * update Actor Picture
//==============================
Scene_File.prototype.updateActorPicture = function() {
 	  if (!this._ActorPicture.bitmap || !this._ActorPicture.bitmap.isReady()) {return};
	  
	this._ActorPicture._move += 1;
	if( this._ActorPicture._move < Moghunter.scFile_Actor_slideTime ){
		this._ActorPicture.opacity += ( 256 / Moghunter.scFile_Actor_slideTime);
		this._ActorPicture.x -= (Moghunter.scFile_Actor_slideX / Moghunter.scFile_Actor_slideTime);
		this._ActorPicture.y -= (Moghunter.scFile_Actor_slideY / Moghunter.scFile_Actor_slideTime);
	}
	
};

//==============================
// * refresh Snap Img
//==============================
Scene_File.prototype.refreshSnapImg = function() {
	
	if( !$gameSystem._drill_save_file_imgs_buffer ){
	}
	  
    var info = DataManager.loadSavefileInfo(this._fIndex +1);
    //var valid = DataManager.isThisGameFile(this._fIndex +1);
	//alert(JSON.stringify(info));
	if ( info == null || info.snapUrl == null ){
		this._snap_image.bitmap = null;
        return;
    }
	
	if( Decrypter ){
　　	var DH = Decrypter.hasEncryptedImages;
		Decrypter.hasEncryptedImages = false;
		this._snap_image.bitmap = ImageManager.loadNormalBitmap(info.snapUrl);
		Decrypter.hasEncryptedImages = DH; 	
	}else{
		this._snap_image.bitmap = ImageManager.loadNormalBitmap(info.snapUrl);
	}
	
	this._snap_image.x = Moghunter.scFile_SnapX + Moghunter.scFile_Snap_slideX;
	this._snap_image.y = Moghunter.scFile_SnapY + Moghunter.scFile_Snap_slideY;
	this._snap_image.opacity = 0;
	this._snap_image._move = 0;
}

//==============================
// * update Snap Img
//==============================
Scene_File.prototype.updateSnapImg = function() {
 	  if (!this._snap_image.bitmap || !this._snap_image.bitmap.isReady()) {return};
	  
	this._snap_image._move += 1;
	if( this._snap_image._move < Moghunter.scFile_Snap_slideTime ){
		this._snap_image.opacity += ( 256 / Moghunter.scFile_Snap_slideTime);
		this._snap_image.x -= (Moghunter.scFile_Snap_slideX / Moghunter.scFile_Snap_slideTime);
		this._snap_image.y -= (Moghunter.scFile_Snap_slideY / Moghunter.scFile_Snap_slideTime);
	}
	
};

//==============================
// * create Window Data
//==============================
Scene_File.prototype.createWindowData = function() {
	 var x = Moghunter.scFile_ActX;
	 var y = Moghunter.scFile_ActY;
	 var w = Moghunter.scFile_Act_width;
	 var h = Moghunter.scFile_Act_height;
	 this._dataWindow = new Window_FileData(x,y,w,h);
	 this.addChild(this._dataWindow);
};

//==============================
// * refresh Window Data
//==============================
Scene_File.prototype.refreshDataWindow = function() {
	this._fIndex = this._listWindow._index;
	this._dataWindow.setData(this._fIndex);
	this._dataWindow._move = 0;
	this._dataWindow.x = Moghunter.scFile_ActX + Moghunter.scFile_Act_slideX ;
	this._dataWindow.y = Moghunter.scFile_ActY + Moghunter.scFile_Act_slideY ;
	this._parBack.opacity = 0;
	this._dataWindow.opacity = 0;
	this._dataWindow.contentsOpacity = 0;
};

//==============================
// * update Window Data
//==============================
Scene_File.prototype.updateWindowData = function() {
	  
	this._dataWindow._move += 1;
	if( this._dataWindow._move < Moghunter.scFile_Act_slideTime ){
		if( Moghunter.scFile_ParBack_visible ){
			this._parBack.opacity += ( 256 / Moghunter.scFile_Act_slideTime);
		}else{
			this._dataWindow.opacity += ( 256 / Moghunter.scFile_Act_slideTime);
		}
		this._dataWindow.contentsOpacity += ( 256 / Moghunter.scFile_Act_slideTime);
		this._dataWindow.x -= (Moghunter.scFile_Act_slideX / Moghunter.scFile_Act_slideTime);
		this._dataWindow.y -= (Moghunter.scFile_Act_slideY / Moghunter.scFile_Act_slideTime);
		this._parBack.x = this._dataWindow.x;
		this._parBack.y = this._dataWindow.y;
	}
	
};

//==============================
// * update
//==============================
var _mog_sfile_sf_update = Scene_File.prototype.update;
Scene_File.prototype.update = function() {
	_mog_sfile_sf_update.call(this);
	this.updateActorPicture();
	this.updateWindowData();
	this.updateSnapImg();
	this.updateCursor();	
	this.updateParBack();
	if (this._fIndex != this._listWindow._index) {
		this.refreshDataWindow();
		this.refreshActorPicture();			//刷新角色图像
		this.refreshSnapImg();				//刷新游戏截屏
	};
	if (!SceneManager.isSceneChanging()) {this.updateCommand()};
	this._helpWindow.opacity = 0;
	this._helpWindow.x = Moghunter.scFile_HelpX;
	this._helpWindow.y = Moghunter.scFile_HelpY;
	
};

//=============================================================================
// ** Window FileData
//=============================================================================
function Window_FileData() {
    this.initialize.apply(this, arguments);
}

Window_FileData.prototype = Object.create(Window_Base.prototype);
Window_FileData.prototype.constructor = Window_FileData;

//==============================
// * initialize
//==============================
Window_FileData.prototype.initialize = function(x, y, width, height) {
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this.active = false;
    this._fileIndex = 0;
	this._actorID = null;
	this._dataInfo = null;
	this.contents.fontSize = Moghunter.scFile_FontSize;
};

//==============================
// * data
//==============================
Window_FileData.prototype.data = function() {
	return this._dataInfo;
};

//==============================
// * actor ID
//==============================
Window_FileData.prototype.actorID = function() {
	return this._actorID;
};

//==============================
// * set Data
//==============================
Window_FileData.prototype.setData = function(index) {
	this._fileIndex = index;
	this._dataInfo = DataManager.loadSavefileInfo(this._fileIndex + 1);
	this.refresh();
};

//==============================
// * refresh
//==============================
Window_FileData.prototype.refresh = function() {
	 if (this.contents) {this.contents.clear()};
	 this._actorID = null;
	 if (this.data()) {this.drawData() 
	 } else {
		this.drawText(Moghunter.scFile_NoData, (this.width / 2) - 80, (this.height / 2) - 50, 120, 'center'); 
	 };
};

//==============================
// * draw Data
//==============================
Window_FileData.prototype.drawData = function() {
	  var actor = this.data().actor;
	  if( !actor ){ return; }
	  var x = Moghunter.scFile_ParX;
	  var y = Moghunter.scFile_ParY;
	  var s = Moghunter.scFile_ParS;
	  var h = Moghunter.scFile_ParS_hor;
	  this._actorID = actor[10];
	  
	  this.changeTextColor(this.textColor(Moghunter.scFile_TextColor));
	  this.drawText(String(Moghunter.scFile_PlayTimeWord), Moghunter.scFile_PlayTimeX, Moghunter.scFile_PlayTimeY, 120, 'left');
	  this.drawText(String(Moghunter.scFile_LocationWord), Moghunter.scFile_LocationX, Moghunter.scFile_LocationY , 120, 'left');
	  this.drawText(TextManager.levelA, Moghunter.scFile_levelX, Moghunter.scFile_levelY, 120, 'left'); // Level
	  if (this._gold) {this.drawText(TextManager.currencyUnit, Moghunter.scFile_goldX ,Moghunter.scFile_goldY , 120, 'left')}; // Gold
	  
	  if(Moghunter.scFile_Text_visible){
		  if(Moghunter.scFile_Par_hpmp_visible){
			this.drawText(TextManager.param(0), x, y + s * 0, 120, 'left'); // HP
			this.drawText(TextManager.param(1), x, y + s * 1, 120, 'left'); // MP
		  }
		  this.drawText(TextManager.param(2), x, y + s * 2, 120, 'left'); // Atk
		  this.drawText(TextManager.param(3), x, y + s * 3, 120, 'left'); // Def
		  this.drawText(TextManager.param(4), x, y + s * 4, 120, 'left'); // Mat
		  this.drawText(TextManager.param(5), x, y + s * 5, 120, 'left'); // Mdf
		  this.drawText(TextManager.param(6), x, y + s * 6, 120, 'left'); // Agi
		  this.drawText(TextManager.param(7), x, y + s * 7, 120, 'left'); // Luk
	  }
	  
	  this.resetTextColor();	  
	  this.drawText(this.data().playtime, Moghunter.scFile_PlayTimeX + 50, Moghunter.scFile_PlayTimeY, 120, 'right');
	  this.drawText(this.data().location, Moghunter.scFile_LocationX + 50, Moghunter.scFile_LocationY, 160, 'right');
	  this.drawText(actor[1], Moghunter.scFile_levelX , Moghunter.scFile_levelY, 80, 'right'); // Level	  
	  if (this._gold) {this.drawText(this.data().gold, Moghunter.scFile_goldX ,Moghunter.scFile_goldY , 120, 'right')}; // Gold	
	  
	  this.drawText(actor[0], Moghunter.scFile_nameX, Moghunter.scFile_nameY, 120, 'left'); // Name	  
	  if(Moghunter.scFile_Par_hpmp_visible){
		this.drawText(actor[2], x + h, y + s * 0, 80, 'left'); // HP	  
		this.drawText(actor[3], x + h, y + s * 1, 80, 'left'); // MP	  
	  }
	  this.drawText(actor[4], x + h, y + s * 2, 80, 'left'); // Atk	 	  
	  this.drawText(actor[5], x + h, y + s * 3, 80, 'left'); // Def	  
	  this.drawText(actor[6], x + h, y + s * 4, 80, 'left'); // Mat	  
	  this.drawText(actor[7], x + h, y + s * 5, 80, 'left'); // Mdf		  
	  this.drawText(actor[8], x + h, y + s * 6, 80, 'left'); // Agi	  
	  this.drawText(actor[9], x + h, y + s * 7, 80, 'left'); // Luk	  
};

//==============================
// * Update
//==============================
Window_FileData.prototype.update = function() {
     Window_Base.prototype.update.call(this);
	if( Moghunter.scFile_ParBack_visible ){
		this.opacity = 0;
	}
};



//==============================
// * 读取图片
//==============================
/*
var _drill_DM_LSImage = DataManager.loadSavefileImages;
DataManager.loadSavefileImages = function(info){
    _drill_DM_LSImage.call(this, info);
    if (info.snapUrl && Decrypter){
		var DH = Decrypter.hasEncryptedImages;	//图片加密标志
		Decrypter.hasEncryptedImages = false;	
        ImageManager.loadNormalBitmap(info.snapUrl);
		Decrypter.hasEncryptedImages = DH; 	
    }
};
*/

//==============================
// * 存储图片
//==============================
Bitmap.prototype.drill_toDataURL = function(){	//图片存储大小比较
	var png = this._canvas.toDataURL('image/png');
	var jpeg = this._canvas.toDataURL('image/jpeg');
	return (png.length < jpeg.length) ? png : jpeg;
};


DataManager.drill_makeSavefileBitmap = function(){ //画图区
    var bitmap = $gameTemp.drill_getSavefileBitmap();
    if (!bitmap){
        return null;
    }
    var newBitmap = new Bitmap(Moghunter.scFile_Snap_width, Moghunter.scFile_Snap_height);
    newBitmap.blt(bitmap, 0, 0, bitmap.width, bitmap.height, 0, 0, newBitmap.width, newBitmap.height);
    return newBitmap;
};

SceneManager.drill_getSnapForBackground = function() {
	if( SceneManager._scene.constructor.name == "Scene_Map" ){
		return this.snap();　//从地图中获取快照
	}
	return this._backgroundBitmap;
};

//==============================
// * 缓冲图片
//==============================
var _drill_scFile_Game_Temp_initialize = Game_Temp.prototype.initialize;
Game_Temp.prototype.initialize = function(){
    _drill_scFile_Game_Temp_initialize.call(this);
    this._savefileBitmap = null;
};

Game_Temp.prototype.drill_getSavefileBitmap = function(){
    if (this._savefileBitmap){
        return this._savefileBitmap;
    }else{
        return SceneManager.drill_getSnapForBackground();
    }
};