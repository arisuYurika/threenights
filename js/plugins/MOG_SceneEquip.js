//=============================================================================
// MOG_SceneEquip.js
//=============================================================================

/*:
 * @plugindesc (v1.0)[v1.9]  面板 - 全自定义装备界面
 * @author Moghunter （Drill_up翻译+优化）
 * 
 * @Drill_LE_param "角色头像-%d"
 * @Drill_LE_parentKey "---角色头像%d至%d---"
 * @Drill_LE_var "Moghunter.menu_equip_face_list_length"
 * 
 *
 * @param 资源-整体布局
 * @desc 整体布局的图片资源。
 * @default 装备界面-整体布局
 * @require 1
 * @dir img/Menu__equip/
 * @type file
 *
 * @param ----帮助窗口----
 * @default 
 *
 * @param 平移-帮助窗口 X
 * @parent ----帮助窗口----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 0
 *
 * @param 平移-帮助窗口 Y
 * @parent ----帮助窗口----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 516
 *
 * @param 帮助窗口起点 X
 * @parent ----帮助窗口----
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的x轴值，单位像素。（可为负数）
 * @default 0
 *
 * @param 帮助窗口起点 Y
 * @parent ----帮助窗口----
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的y轴值，单位像素。（可为负数）
 * @default 100
 *
 * @param 帮助窗口移动时长
 * @parent ----帮助窗口----
 * @type number
 * @min 1
 * @desc 从偏移的位置到原位置所需的时间，单位帧。（1秒60帧）
 * @default 30
 *
 * @param 是否使用帮助窗口布局
 * @parent ----帮助窗口----
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default true
 *
 * @param 资源-帮助窗口
 * @desc 帮助窗口的图片资源。
 * @parent 是否使用帮助窗口布局
 * @default 装备界面-帮助窗口
 * @require 1
 * @dir img/Menu__equip/
 * @type file
 *
 * @param 平移-帮助窗口布局 X
 * @parent 是否使用帮助窗口布局
 * @desc 修正图片的偏移用。以窗口的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 平移-帮助窗口布局 Y
 * @parent 是否使用帮助窗口布局
 * @desc 修正图片的偏移用。以窗口的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default -67
 *
 * @param 帮助窗口宽度
 * @parent ----帮助窗口----
 * @type number
 * @min 50
 * @desc 窗口的高宽设置。注意，实际文本域的高宽要比该设置小一些，因为有内边距。具体去看看 "17.主菜单 > 窗口与布局.docx"。
 * @default 816
 *
 * @param 帮助窗口高度
 * @parent ----帮助窗口----
 * @type number
 * @min 50
 * @desc 窗口的高宽设置。注意，实际文本域的高宽要比该设置小一些，因为有内边距。具体去看看 "17.主菜单 > 窗口与布局.docx"。
 * @default 110
 *
 * @param 帮助窗口字体大小
 * @parent ----帮助窗口----
 * @type number
 * @min 1
 * @desc 帮助窗口的字体大小。
 * @default 20
 *
 * @param ----选项窗口----
 * @default 
 *
 * @param 是否显示选项窗口
 * @parent ----选项窗口----
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * 装备、最强装备、清除 这三个选项你可以设置去掉，腾出空间。
 * @default true
 *
 * @param 是否显示选项文字
 * @parent ----选项窗口----
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * 装备、最强装备、清除 文字。
 * @default true
 * 
 * @param 平移-选项窗口 X
 * @parent ----选项窗口----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 308
 *
 * @param 平移-选项窗口 Y
 * @parent ----选项窗口----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 12
 *
 * @param 选项窗口起点 X
 * @parent ----选项窗口----
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的x轴值，单位像素。（可为负数）
 * @default 0
 *
 * @param 选项窗口起点 Y
 * @parent ----选项窗口----
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的y轴值，单位像素。（可为负数）
 * @default -100
 *
 * @param 选项窗口移动时长
 * @parent ----选项窗口----
 * @type number
 * @min 1
 * @desc 从偏移的位置到原位置所需的时间，单位帧。（1秒60帧）
 * @default 30
 *
 * @param 是否使用选项窗口布局
 * @parent ----选项窗口----
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default true
 *
 * @param 资源-选项窗口
 * @desc 选项窗口的图片资源。
 * @parent 是否使用选项窗口布局
 * @default 装备界面-选项窗口
 * @require 1
 * @dir img/Menu__equip/
 * @type file
 *
 * @param 平移-选项窗口布局 X
 * @parent 是否使用选项窗口布局
 * @desc 修正图片的偏移用。以窗口的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default 15
 *
 * @param 平移-选项窗口布局 Y
 * @parent 是否使用选项窗口布局
 * @desc 修正图片的偏移用。以窗口的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default 11
 *
 * @param 选项窗口宽度
 * @parent ----选项窗口----
 * @type number
 * @min 50
 * @desc 窗口的高宽设置。注意，实际文本域的高宽要比该设置小一些，因为有内边距。具体去看看 "17.主菜单 > 窗口与布局.docx"。
 * @default 510
 *
 * @param 选项窗口高度
 * @parent ----选项窗口----
 * @type number
 * @min 50
 * @desc 窗口的高宽设置。注意，实际文本域的高宽要比该设置小一些，因为有内边距。具体去看看 "17.主菜单 > 窗口与布局.docx"。
 * @default 110
 *
 * @param 选项窗口字体大小
 * @parent ----选项窗口----
 * @type number
 * @min 1
 * @desc 选项窗口的字体大小。
 * @default 20
 *
 * @param 选项窗口列数
 * @parent ----选项窗口----
 * @type number
 * @min 1
 * @desc 选项窗口的列数。
 * @default 3
 *
 * @param ----装备槽----
 * @default 
 * 
 * @param 平移-装备槽 X
 * @parent ----装备槽----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 308
 *
 * @param 平移-装备槽 Y
 * @parent ----装备槽----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 74
 *
 * @param 装备槽起点 X
 * @parent ----装备槽----
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的x轴值，单位像素。（可为负数）
 * @default 100
 *
 * @param 装备槽起点 Y
 * @parent ----装备槽----
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的y轴值，单位像素。（可为负数）
 * @default 0
 *
 * @param 装备槽移动时长
 * @parent ----装备槽----
 * @type number
 * @min 1
 * @desc 从偏移的位置到原位置所需的时间，单位帧。（1秒60帧）
 * @default 30
 *
 * @param 是否使用装备槽布局
 * @parent ----装备槽----
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default true
 *
 * @param 资源-装备槽
 * @desc 装备槽的图片资源。
 * @parent 是否使用装备槽布局
 * @default 装备界面-装备槽
 * @require 1
 * @dir img/Menu__equip/
 * @type file
 *
 * @param 平移-装备槽布局 X
 * @parent 是否使用装备槽布局
 * @desc 修正图片的偏移用。以窗口的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default 22
 *
 * @param 平移-装备槽布局 Y
 * @parent 是否使用装备槽布局
 * @desc 修正图片的偏移用。以窗口的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default 8
 *
 * @param 装备槽宽度
 * @parent ----装备槽----
 * @type number
 * @min 50
 * @desc 窗口的高宽设置。注意，实际文本域的高宽要比该设置小一些，因为有内边距。具体去看看 "17.主菜单 > 窗口与布局.docx"。
 * @default 510
 *
 * @param 装备槽高度
 * @parent ----装备槽----
 * @type number
 * @min 50
 * @desc 窗口的高宽设置。注意，实际文本域的高宽要比该设置小一些，因为有内边距。具体去看看 "17.主菜单 > 窗口与布局.docx"。
 * @default 230
 *
 * @param 装备槽字体大小
 * @parent ----装备槽----
 * @type number
 * @min 1
 * @desc 装备槽的字体大小。
 * @default 20
 *
 * @param 是否显示装备槽名
 * @parent ----装备槽----
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示。装备槽的类型名称。
 * @default true
 *
 * @param 装备图标左间距
 * @parent ----装备槽----
 * @type number
 * @min 0
 * @desc 控制装备图标的左侧间距。设置0，则装备槽名字会与装备的图标重叠。（默认138）
 * @default 138
 *
 * @param 是否手动分配所有槽位置
 * @parent ----装备槽----
 * @type boolean
 * @on 手动分配
 * @off 自动分配
 * @desc true - 手动分配，false - 自动分配。注意，手动分配将会打散所有选项的位置。
 * @default false
 * 
 * @param 所有槽位置
 * @parent 是否手动分配所有槽位置
 * @type text[]
 * @desc 填写格式为 100,100 ，对应第N个槽的位置。以窗口容器的点为基准，控制xy平移。
 * @default ["0,0","10,36","20,72","10,108","0,144"]
 *
 * @param 是否显示装备槽内装备名称
 * @parent ----装备槽----
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示。你可以设置装备只有装备图标，或者只有装备名称。
 * @default true
 *
 * @param 是否显示装备槽内装备图标
 * @parent ----装备槽----
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示。你可以设置装备只有装备图标，或者只有装备名称。
 * @default true
 *
 * @param ----装备列表----
 * @default 
 * 
 * @param 平移-装备列表 X
 * @parent ----装备列表----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 308
 *
 * @param 平移-装备列表 Y
 * @parent ----装备列表----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 288
 *
 * @param 装备列表起点 X
 * @parent ----装备列表----
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的x轴值，单位像素。（可为负数）
 * @default 100
 *
 * @param 装备列表起点 Y
 * @parent ----装备列表----
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的y轴值，单位像素。（可为负数）
 * @default 0
 *
 * @param 装备列表移动时长
 * @parent ----装备列表----
 * @type number
 * @min 1
 * @desc 从偏移的位置到原位置所需的时间，单位帧。（1秒60帧）
 * @default 30
 *
 * @param 是否使用装备列表布局
 * @parent ----装备列表----
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default true
 *
 * @param 资源-装备列表
 * @desc 装备列表的图片资源。
 * @parent 是否使用装备列表布局
 * @default 装备界面-装备列表
 * @require 1
 * @dir img/Menu__equip/
 * @type file
 *
 * @param 平移-装备列表布局 X
 * @parent 是否使用装备列表布局
 * @desc 修正图片的偏移用。以窗口的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 平移-装备列表布局 Y
 * @parent 是否使用装备列表布局
 * @desc 修正图片的偏移用。以窗口的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 装备列表宽度
 * @parent ----装备列表----
 * @type number
 * @min 50
 * @desc 窗口的高宽设置。注意，实际文本域的高宽要比该设置小一些，因为有内边距。具体去看看 "17.主菜单 > 窗口与布局.docx"。
 * @default 510
 *
 * @param 装备列表高度
 * @parent ----装备列表----
 * @type number
 * @min 50
 * @desc 窗口的高宽设置。注意，实际文本域的高宽要比该设置小一些，因为有内边距。具体去看看 "17.主菜单 > 窗口与布局.docx"。
 * @default 230
 *
 * @param 装备列表字体大小
 * @parent ----装备列表----
 * @type number
 * @min 1
 * @desc 装备列表的字体大小。
 * @default 20
 *
 * @param 装备列表列数
 * @parent ----装备列表----
 * @type number
 * @min 1
 * @desc 装备列表的列数。
 * @default 1
 * 
 *
 * @param ----角色窗口----
 * @default 
 * 
 * @param 平移-角色窗口 X
 * @parent ----角色窗口----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 10
 *
 * @param 平移-角色窗口 Y
 * @parent ----角色窗口----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 120
 *
 * @param 角色窗口起点 X
 * @parent ----角色窗口----
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的x轴值，单位像素。（可为负数）
 * @default 0
 *
 * @param 角色窗口起点 Y
 * @parent ----角色窗口----
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的y轴值，单位像素。（可为负数）
 * @default -100
 *
 * @param 角色窗口移动时长
 * @parent ----角色窗口----
 * @type number
 * @min 1
 * @desc 从偏移的位置到原位置所需的时间，单位帧。（1秒60帧）
 * @default 30
 *
 * @param 是否使用角色窗口布局
 * @parent ----角色窗口----
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default true
 *
 * @param 资源-角色窗口
 * @desc 角色窗口的图片资源。
 * @parent 是否使用角色窗口布局
 * @default 装备界面-角色窗口
 * @require 1
 * @dir img/Menu__equip/
 * @type file
 *
 * @param 平移-角色窗口布局 X
 * @parent 是否使用角色窗口布局
 * @desc 修正图片的偏移用。以窗口的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 平移-角色窗口布局 Y
 * @parent 是否使用角色窗口布局
 * @desc 修正图片的偏移用。以窗口的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 角色窗口宽度
 * @parent ----角色窗口----
 * @type number
 * @min 50
 * @desc 窗口的高宽设置。注意，实际文本域的高宽要比该设置小一些，因为有内边距。具体去看看 "17.主菜单 > 窗口与布局.docx"。
 * @default 300
 *
 * @param 角色窗口高度
 * @parent ----角色窗口----
 * @type number
 * @min 50
 * @desc 窗口的高宽设置。注意，实际文本域的高宽要比该设置小一些，因为有内边距。具体去看看 "17.主菜单 > 窗口与布局.docx"。
 * @default 350
 *
 * @param 角色窗口字体大小
 * @parent ----角色窗口----
 * @type number
 * @min 1
 * @desc 装备列表的字体大小。
 * @default 20
 *
 * @param ==能力值显示==
 * @parent ----角色窗口----
 * @default 
 *
 * @param 资源-能力情况图标
 * @desc 能力情况的图片资源。
 * @parent ==能力值显示==
 * @default 装备界面-能力情况图标
 * @require 1
 * @dir img/Menu__equip/
 * @type file
 *
 * @param 是否显示角色能力值名
 * @parent ==能力值显示==
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * 攻击、防御等能力值的名字。
 * @default false
 *
 * @param 角色能力值上间距
 * @parent ==能力值显示==
 * @type number
 * @min 0
 * @desc 角色能力数值的上间距，单位像素。(默认72)
 * @default 72
 *
 * @param 角色能力值左间距
 * @parent ==能力值显示==
 * @type number
 * @min 0
 * @desc 角色能力数值的左间距，单位像素，设置0，则数值会和能力名字重叠。(默认110)
 * @default 110
 *
 * @param 角色能力值宽度
 * @parent ==能力值显示==
 * @type number
 * @min 0
 * @desc 能力值数值显示的宽度，单位像素，如果你要显示9位数以上数值，该宽度需要扩大。(默认58)
 * @default 58
 *
 * @param 角色能力值高度
 * @parent ==能力值显示==
 * @type number
 * @min 0
 * @desc 能力值每行之间的高度间距，单位像素。(默认34)
 * @default 34
 *
 * @param 角色能力箭头间距
 * @parent ==能力值显示==
 * @type number
 * @min 0
 * @desc 能力箭头图片与左右数值的间距，单位像素。(默认16)
 * @default 16
 *
 *
 * @param 平移-角色名 X
 * @parent ----角色窗口----
 * @desc 以角色窗口的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default 20
 *
 * @param 平移-角色名 Y
 * @parent ----角色窗口----
 * @desc 以角色窗口的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default 20
 *
 * @param 平移-角色头像 X
 * @parent ----角色窗口----
 * @desc 以角色窗口的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default 140
 *
 * @param 平移-角色头像 Y
 * @parent ----角色窗口----
 * @desc 以角色窗口的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default -10
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
 * @help  
 * =============================================================================
 * +++ MOG - Scene Equip (v1.0) +++
 * By Moghunter 
 * https://mogplugins.wordpress.com/
 * =============================================================================
 * 可完全自己定义的装备界面设置。
 * 参数如何配的详细介绍去看看插件详细说明 "17.主菜单 > 窗口与布局.docx"。
 * 【现已支持插件关联资源的打包、加密】
 * 
 * -----------------------------------------------------------------------------
 * ----插件扩展
 * 插件可以单独使用，对装备界面做美化。
 * 被扩展：
 *   - Drill_X_SenceEquipParam 控件-装备界面角色能力值[扩展]
 *     通过该插件，可以扩展显示更多能力值增减情况。
 *
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.插件的作用域：菜单界面。
 *   可以设置物品面板(界面)的内容。
 * 2.该面板属于菜单面板，可以被菜单背景、菜单魔法圈等插件作用到。
 *   该面板关键字为：Scene_Equip
 *   更多关键字内容，见 "17.主菜单 > 菜单关键字.docx"。
 * 结构：
 *   (1.该配置包含五个窗口，帮助窗口、选项窗口、装备槽、装备列表、角色窗口。
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 资源路径：img/Menu__equip （Menu后面有两个下划线）
 * 资源路径：img/Menu__actorFaces （Menu后面有两个下划线）
 * 先确保项目img文件夹下是否有Menu__equip文件夹。
 * 先确保项目img文件夹下是否有Menu__actorFaces文件夹。
 * 要查看所有关联资源文件的插件，可以去看看"插件清单.xlsx"。
 * 如果没有，需要自己建立。需要配置资源文件：
 *
 * 资源-整体布局      (Menu__equip文件夹)
 * 资源-帮助窗口      (Menu__equip文件夹)
 * 资源-选项窗口      (Menu__equip文件夹)
 * 资源-装备槽        (Menu__equip文件夹)
 * 资源-装备列表      (Menu__equip文件夹)
 *
 * 资源-角色窗口      (Menu__equip文件夹)
 * 资源-能力情况图标  (Menu__equip文件夹)
 *
 * 角色头像-1 （Menu__actorFaces文件夹，头像1与编号为1的角色对应。）
 * 角色头像-2
 * 角色头像-3
 * ………
 * 
 * 1.框架资源都在Menu__equip文件夹中。
 * 2.角色图标、头像资源都在Menu__actorFaces文件夹中。
 *
 * -----------------------------------------------------------------------------
 * ----关于Drill_up优化：
 * [v1.1]
 * 使得该插件支持关联资源的打包、加密。
 * 部署时勾选去除无关文件，本插件中相关的文件不会被去除。
 * [v1.2]
 * 修改了选项窗口内部函数，为了使得选项窗口可以被去掉。
 * 修改了其它窗口的数值。
 * 大幅度添加了窗口相关控制变量。
 * [v1.3]
 * 修复了技能槽八个以上时显示不正常的问题。
 * [v1.4]
 * 使得你可以手动分配每个槽的位置。并控制装备间距。
 * 你还可以设置显示更多能力值增减列表。
 * [v1.5]
 * 添加了装备槽中的装备名称/图标可以不显示的功能。
 * [v1.6]
 * 修改了插件的分类。
 * [v1.7]
 * 修复了装备槽的装备文本没有变色的bug。
 * [v1.8]
 * 修改了插件关联的资源文件夹。
 * [v1.9]
 * 添加了最大值编辑的支持。
 *
 */

 //
 //插件记录：
 //		代码复杂度★★
 //		装备界面大部分方法都是直接覆盖重写。
 //
 //覆盖/半覆盖的方法：
 //		Scene_Equip.prototype.createSlotWindow
 //		Scene_Equip.prototype.onActorChange
 //		Scene_Equip.prototype.createCommandWindow
 //		（窗口方法是大多都是直接覆盖。）
 //
 
//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_SceneEquip = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_SceneEquip');  
	
	Moghunter.scEquip_HelpWindowX = Number(Moghunter.parameters['平移-帮助窗口 X'] || 0);
	Moghunter.scEquip_HelpWindowY = Number(Moghunter.parameters['平移-帮助窗口 Y'] || 516);	
	Moghunter.scEquip_HelpWindow_slideX = Number(Moghunter.parameters['帮助窗口起点 X'] || 0);
	Moghunter.scEquip_HelpWindow_slideY = Number(Moghunter.parameters['帮助窗口起点 Y'] || 100);
	Moghunter.scEquip_HelpWindow_slideTime = Number(Moghunter.parameters['帮助窗口移动时长'] || 30);	
	Moghunter.scEquip_HelpLayout_visible = String(Moghunter.parameters['是否使用帮助窗口布局'] || "true") === "true";
	Moghunter.scEquip_HelpLayoutX = Number(Moghunter.parameters['平移-帮助窗口布局 X'] || 0);
	Moghunter.scEquip_HelpLayoutY = Number(Moghunter.parameters['平移-帮助窗口布局 Y'] || -67);		
	Moghunter.scEquip_HelpWindow_width = Number(Moghunter.parameters['帮助窗口宽度'] || 816);
	Moghunter.scEquip_HelpWindow_height = Number(Moghunter.parameters['帮助窗口高度'] || 110);
	Moghunter.scEquip_HelpWindow_FontSize = Number(Moghunter.parameters['帮助窗口字体大小'] || 20);
	
	Moghunter.scEquip_ComWindow_visible = String(Moghunter.parameters['是否显示选项窗口'] || "true") === "true";
	Moghunter.scEquip_ComWindowX = Number(Moghunter.parameters['平移-选项窗口 X'] || 308);
	Moghunter.scEquip_ComWindowY = Number(Moghunter.parameters['平移-选项窗口 Y'] || 12);	
	Moghunter.scEquip_ComWindow_slideX = Number(Moghunter.parameters['选项窗口起点 X'] || 0);
	Moghunter.scEquip_ComWindow_slideY = Number(Moghunter.parameters['选项窗口起点 Y'] || -100);
	Moghunter.scEquip_ComWindow_slideTime = Number(Moghunter.parameters['选项窗口移动时长'] || 30);	
	Moghunter.scEquip_ComLayout_visible = String(Moghunter.parameters['是否使用选项窗口布局'] || "true") === "true";
	Moghunter.scEquip_ComLayoutX = Number(Moghunter.parameters['平移-选项窗口布局 X'] || 15);
	Moghunter.scEquip_ComLayoutY = Number(Moghunter.parameters['平移-选项窗口布局 Y'] || 11);	
	Moghunter.scEquip_ComWindow_width = Number(Moghunter.parameters['选项窗口宽度'] || 510);	
	Moghunter.scEquip_ComWindow_height = Number(Moghunter.parameters['选项窗口高度'] || 110);	
	Moghunter.scEquip_ComWindow_text_visible = String(Moghunter.parameters['是否显示选项文字'] || "true") === "true";
	Moghunter.scEquip_ComWindow_FontSize = Number(Moghunter.parameters['选项窗口字体大小'] || 20);
	Moghunter.scEquip_ComWindow_col = Number(Moghunter.parameters['选项窗口列数'] || 3);
	
	Moghunter.scEquip_SlotWindowX = Number(Moghunter.parameters['平移-装备槽 X'] || 308);
	Moghunter.scEquip_SlotWindowY = Number(Moghunter.parameters['平移-装备槽 Y'] || 74);	
	Moghunter.scEquip_SlotWindow_slideX = Number(Moghunter.parameters['装备槽起点 X'] || 100);
	Moghunter.scEquip_SlotWindow_slideY = Number(Moghunter.parameters['装备槽起点 Y'] || 0);	
	Moghunter.scEquip_SlotWindow_slideTime = Number(Moghunter.parameters['装备槽移动时长'] || 30);
	Moghunter.scEquip_SlotLayout_visible = String(Moghunter.parameters['是否使用装备槽布局'] || "true") === "true";	
	Moghunter.scEquip_SlotLayoutX = Number(Moghunter.parameters['平移-装备槽布局 X'] || 22);
	Moghunter.scEquip_SlotLayoutY = Number(Moghunter.parameters['平移-装备槽布局 Y'] || 8);	
	Moghunter.scEquip_SlotWindow_width = Number(Moghunter.parameters['装备槽宽度'] || 510);
	Moghunter.scEquip_SlotWindow_height = Number(Moghunter.parameters['装备槽高度'] || 230);	
	Moghunter.scEquip_SlotWindow_FontSize = Number(Moghunter.parameters['装备槽字体大小'] || 20);
	Moghunter.scEquip_Slot_left_margin = Number(Moghunter.parameters['装备图标左间距'] || 138);
	Moghunter.scEquip_Slot_Name_visible = String(Moghunter.parameters['是否显示装备槽名'] || "true") === "true";
	Moghunter.scEquip_Slot_pos_reset = String(Moghunter.parameters['是否手动分配所有槽位置'] || "false") === "true";	
	if( Moghunter.parameters['所有槽位置'] != "" ){
		Moghunter.scEquip_Slot_pos = JSON.parse(Moghunter.parameters['所有槽位置' ]);
	}else{
		Moghunter.scEquip_Slot_pos = [];
	}
	Moghunter.scEquip_Slot_drawname = String(Moghunter.parameters['是否显示装备槽内装备名称'] || "true") === "true";
	Moghunter.scEquip_Slot_drawicon = String(Moghunter.parameters['是否显示装备槽内装备图标'] || "true") === "true";
	
	Moghunter.scEquip_ItemWindowX = Number(Moghunter.parameters['平移-装备列表 X'] || 308);
	Moghunter.scEquip_ItemWindowY = Number(Moghunter.parameters['平移-装备列表 Y'] || 288);
	Moghunter.scEquip_ItemWindow_slideX = Number(Moghunter.parameters['装备列表起点 X'] || 100);
	Moghunter.scEquip_ItemWindow_slideY = Number(Moghunter.parameters['装备列表起点 Y'] || 0);
	Moghunter.scEquip_ItemWindow_slideTime = Number(Moghunter.parameters['装备列表移动时长'] || 30);
	Moghunter.scEquip_ItemLayout_visible = String(Moghunter.parameters['是否使用装备列表布局'] || "true") === "true";	
	Moghunter.scEquip_ItemLayoutX = Number(Moghunter.parameters['平移-装备列表布局 X'] || 0);
	Moghunter.scEquip_ItemLayoutY = Number(Moghunter.parameters['平移-装备列表布局 Y'] || 0);	
	Moghunter.scEquip_ItemWindow_width = Number(Moghunter.parameters['装备列表宽度'] || 510);
	Moghunter.scEquip_ItemWindow_height = Number(Moghunter.parameters['装备列表高度'] || 230);
	Moghunter.scEquip_ItemWindow_FontSize = Number(Moghunter.parameters['装备列表字体大小'] || 20);
	Moghunter.scEquip_ItemWindow_col = Number(Moghunter.parameters['装备列表列数'] || 1);
	
	Moghunter.scEquip_StatusWindowX= Number(Moghunter.parameters['平移-角色窗口 X'] || 10);
	Moghunter.scEquip_StatusWindowY = Number(Moghunter.parameters['平移-角色窗口 Y'] || 120);
	Moghunter.scEquip_StatusWindow_slideX= Number(Moghunter.parameters['角色窗口起点 X'] || 0);
	Moghunter.scEquip_StatusWindow_slideY = Number(Moghunter.parameters['角色窗口起点 Y'] || -100);
	Moghunter.scEquip_StatusWindow_slideTime = Number(Moghunter.parameters['角色窗口移动时长'] || 30);
	Moghunter.scEquip_StatusLayout_visible = String(Moghunter.parameters['是否使用角色窗口布局'] || "true") === "true";	
	Moghunter.scEquip_StatusLayoutX = Number(Moghunter.parameters['平移-角色窗口布局 X'] || 0);
	Moghunter.scEquip_StatusLayoutY = Number(Moghunter.parameters['平移-角色窗口布局 Y'] || 0);
	Moghunter.scEquip_StatusWindow_width = Number(Moghunter.parameters['角色窗口宽度'] || 300);
	Moghunter.scEquip_StatusWindow_height = Number(Moghunter.parameters['角色窗口高度'] || 350);
	Moghunter.scEquip_StatusWindow_FontSize = Number(Moghunter.parameters['角色窗口字体大小'] || 20);
	Moghunter.scEquip_ActorName_X = Number(Moghunter.parameters['平移-角色名 X'] || 20);
	Moghunter.scEquip_ActorName_Y = Number(Moghunter.parameters['平移-角色名 Y'] || 20);	
	Moghunter.scEquip_Face_X = Number(Moghunter.parameters['平移-角色头像 X'] || 140);
	Moghunter.scEquip_Face_Y = Number(Moghunter.parameters['平移-角色头像 Y'] || -10);	
	Moghunter.scEquip_Status_param_name_visible = String(Moghunter.parameters['是否显示角色能力值名'] || "true") === "true";
	Moghunter.scEquip_Status_param_up_margin = Number(Moghunter.parameters['角色能力值上间距'] || 72);
	Moghunter.scEquip_Status_param_left_margin = Number(Moghunter.parameters['角色能力值左间距'] || 120);
	Moghunter.scEquip_Status_param_width = Number(Moghunter.parameters['角色能力值宽度'] || 58);
	Moghunter.scEquip_Status_param_line_height = Number(Moghunter.parameters['角色能力值高度'] || 34);
	Moghunter.scEquip_Status_param_arrow_margin = Number(Moghunter.parameters['角色能力箭头间距'] || 16);
		
	Moghunter.src_menu_equip_layout = String(Moghunter.parameters['资源-整体布局']);
	Moghunter.src_menu_equip_help = String(Moghunter.parameters['资源-帮助窗口']);
	Moghunter.src_menu_equip_option = String(Moghunter.parameters['资源-选项窗口']);
	Moghunter.src_menu_equip_slot = String(Moghunter.parameters['资源-装备槽']);
	Moghunter.src_menu_equip_list = String(Moghunter.parameters['资源-装备列表']);
	Moghunter.src_menu_equip_actor = String(Moghunter.parameters['资源-角色窗口']);
	Moghunter.src_menu_equip_param = String(Moghunter.parameters['资源-能力情况图标']);
		
	Moghunter.menu_equip_face_list_length = 60;
	Moghunter.menu_equip_face_list = {};
	for (var i = 1; i <= Moghunter.menu_equip_face_list_length ; i++ ) {
		Moghunter.menu_equip_face_list[i] = Moghunter.parameters['角色头像-' + String(i) ];
	};
	
//=============================================================================
// ** ImageManager
//=============================================================================
//==============================
// * Equip
//==============================
ImageManager.loadMenusequip = function(filename) {
    return this.loadBitmap('img/Menu__equip/', filename, 0, true);
};
ImageManager.loadMenusActorFace = function(filename) {
    return this.loadBitmap('img/Menu__actorFaces/', filename, 0, true);
};

//=============================================================================
// ** Scene Equip
//=============================================================================

//==============================
// * create Background
//==============================
var _mog_scEquip_createBackground = Scene_Equip.prototype.createBackground;
Scene_Equip.prototype.createBackground = function() {
	_mog_scEquip_createBackground.call(this);
	this._field = new Sprite();
	this.addChild(this._field);	
};

//==============================
// * Create
//==============================
var _mog_scEquipM_create = Scene_Equip.prototype.create;
Scene_Equip.prototype.create = function() {
	_mog_scEquipM_create.call(this);
	this._helpWindow.x = Moghunter.scEquip_HelpWindowX;
	this._helpWindow.y = Moghunter.scEquip_HelpWindowY;	
	this._helpWindow.standardFontSize = function(){ return Moghunter.scEquip_HelpWindow_FontSize;}	//字体修改
	this._helpWindow.width = Moghunter.scEquip_HelpWindow_width;
	this._helpWindow.height = Moghunter.scEquip_HelpWindow_height;
	this._helpWindowOrg = [this._helpWindow.x,this._helpWindow.y];
	
	this._commandWindow.x = Moghunter.scEquip_ComWindowX;
	this._commandWindow.y = Moghunter.scEquip_ComWindowY;
	this._commandWindow.contents.fontSize = Moghunter.scEquip_ComWindow_FontSize;	
	this._commandWindow.width = Moghunter.scEquip_ComWindow_width;
	this._commandWindow.height = Moghunter.scEquip_ComWindow_height;
	this._commandWindowOrg = [this._commandWindow.x,this._commandWindow.y];
	
    this._slotWindow.x = Moghunter.scEquip_SlotWindowX;
	this._slotWindow.y = Moghunter.scEquip_SlotWindowY;
	this._slotWindow.contents.fontSize = Moghunter.scEquip_SlotWindow_FontSize;
	this._slotWindow.width = Moghunter.scEquip_SlotWindow_width;
	this._slotWindow.height = Moghunter.scEquip_SlotWindow_height;
	this._slotWindowOrg = [this._slotWindow.x,this._slotWindow.y];
	
	this._itemWindow.x = Moghunter.scEquip_ItemWindowX;
	this._itemWindow.y = Moghunter.scEquip_ItemWindowY;
	this._itemWindow.contents.fontSize = Moghunter.scEquip_ItemWindow_FontSize;
	this._itemWindow.width = Moghunter.scEquip_ItemWindow_width;
	this._itemWindow.height = Moghunter.scEquip_ItemWindow_height;
	this._itemWindowOrg = [this._itemWindow.x,this._itemWindow.y];
	
	this._statusWindow.x = Moghunter.scEquip_StatusWindowX;
	this._statusWindow.y = Moghunter.scEquip_StatusWindowY;
	this._statusWindow.contents.fontSize = Moghunter.scEquip_StatusWindow_FontSize;
	this._statusWindow.width = Moghunter.scEquip_StatusWindow_width;
	this._statusWindow.height = Moghunter.scEquip_StatusWindow_height;
	this._statusWindowOrg = [this._statusWindow.x,this._statusWindow.y];
	
	this.createSprites();
	this.resetPosition();
};

//==============================
// * createSlotWindow
//==============================
var _mog_scsEquipM_createSlotWindow = Scene_Equip.prototype.createSlotWindow;
Scene_Equip.prototype.createSlotWindow = function() {
	if( !Moghunter.scEquip_ComWindow_visible ){
		this._slotWindow = new Window_EquipSlot(0, 0, 0, 0);
		this._slotWindow.setHelpWindow(this._helpWindow);
		this._slotWindow.setStatusWindow(this._statusWindow);
		this._slotWindow.setHandler('ok',       this.onSlotOk.bind(this));
		//this._slotWindow.setHandler('cancel',   this.onSlotCancel.bind(this));
		this._slotWindow.setHandler('cancel',   this.popScene.bind(this));
		this._slotWindow.setHandler('pagedown', this.nextActor.bind(this));
		this._slotWindow.setHandler('pageup',   this.previousActor.bind(this));
		this.addWindow(this._slotWindow);
		this._slotWindow.activate();
		this._slotWindow.select(0);//修改 选项窗口的绑定事件 到 装备列表中
	}else{
		_mog_scsEquipM_createSlotWindow.call(this);
	}
};

var _mog_EquipSlot_initialize = Window_EquipSlot.prototype.initialize;
Window_EquipSlot.prototype.initialize = function(x, y, width, height) {
	var wx = Moghunter.scEquip_SlotWindowX;
	var wy = Moghunter.scEquip_SlotWindowY;
	var ww = Moghunter.scEquip_SlotWindow_width;
	var wh = Moghunter.scEquip_SlotWindow_height;
	_mog_EquipSlot_initialize.call(this,wx,wy,ww,wh);
};

//==============================
// * Create CommandWindow
//==============================
var _mog_scsEquipM_createCommandWindow = Scene_Equip.prototype.createCommandWindow;
Scene_Equip.prototype.createCommandWindow = function() {
	if( !Moghunter.scEquip_ComWindow_visible ){
		this._commandWindow = new Window_EquipCommand(0, 0, 0);
		this._commandWindow.setHelpWindow(this._helpWindow);
	}else{
		_mog_scsEquipM_createCommandWindow.call(this);
	}
};

var _mog_EquipCommand_initialize = Window_EquipCommand.prototype.initialize;
Window_EquipCommand.prototype.initialize = function(x, y, width, height) {
	var wx = Moghunter.scEquip_ComWindowX;
	var wy = Moghunter.scEquip_ComWindowY;
	var ww = Moghunter.scEquip_ComWindow_width;
	var wh = Moghunter.scEquip_ComWindow_height;
	_mog_EquipCommand_initialize.call(this,wx,wy,ww,wh);
};

//==============================
// * On Actor Change
//==============================
var _mog_scsEquipM_onActorChange = Scene_Equip.prototype.onActorChange;
Scene_Equip.prototype.onActorChange = function() {
	if( !Moghunter.scEquip_ComWindow_visible ){
		this.refreshActor();
		//this._commandWindow.activate();
		this._slotWindow.activate();
		this._slotWindow.select(0);
	}else{
		_mog_scsEquipM_onActorChange.call(this);
	}
	this.resetPosition();
	this.update();
};


//==============================
// * Create Sprites
//==============================
Scene_Equip.prototype.createSprites = function() {
	this.createLayout();
	this.createLayoutHelp();
	this.createLayoutCommand();
	this.createLayoutSlot();
	this.createLayoutItem();
	this.createLayoutStatus();
};

//==============================
// * Create Layout
//==============================
Scene_Equip.prototype.createLayout = function() {
	this._layout = new Sprite(ImageManager.loadMenusequip(Moghunter.src_menu_equip_layout));
	this._field.addChild(this._layout);	
};

//==============================
// * Create LayoutHelp
//==============================
Scene_Equip.prototype.createLayoutHelp = function() {
	this._layoutHelp = new Sprite(ImageManager.loadMenusequip(Moghunter.src_menu_equip_help));
	if(!Moghunter.scEquip_HelpLayout_visible){
		this._layoutHelp = new Sprite("");
	};
	this._field.addChild(this._layoutHelp);	
};

//==============================
// * Create LayoutCommand
//==============================
Scene_Equip.prototype.createLayoutCommand = function() {
	this._layoutCommand = new Sprite(ImageManager.loadMenusequip(Moghunter.src_menu_equip_option));
	if(!Moghunter.scEquip_ComLayout_visible){
		this._layoutCommand = new Sprite("");
	};
	this._field.addChild(this._layoutCommand);	
};

//==============================
// * Create LayoutSlot
//==============================
Scene_Equip.prototype.createLayoutSlot = function() {
	this._layoutSlot = new Sprite(ImageManager.loadMenusequip(Moghunter.src_menu_equip_slot));
	if(!Moghunter.scEquip_SlotLayout_visible){
		this._layoutSlot = new Sprite("");
	};
	this._field.addChild(this._layoutSlot);	
};

//==============================
// * Create LayoutItem
//==============================
Scene_Equip.prototype.createLayoutItem = function() {
	this._layoutItem = new Sprite(ImageManager.loadMenusequip(Moghunter.src_menu_equip_list));
	if(!Moghunter.scEquip_ItemLayout_visible){
		this._layoutItem = new Sprite("");
	};
	this._field.addChild(this._layoutItem);	
};

//==============================
// * Create LayoutStatus
//==============================
Scene_Equip.prototype.createLayoutStatus = function() {
	this._layoutStatus = new Sprite(ImageManager.loadMenusequip(Moghunter.src_menu_equip_actor));
	if(!Moghunter.scEquip_StatusLayout_visible){
		this._layoutStatus = new Sprite("");
	};
	this._field.addChild(this._layoutStatus);	
};

//==============================
// * update Sprites
//==============================
Scene_Equip.prototype.updateSprites = function() {
	 this.updateSlide();
     this.updateLayout()	
};

//==============================
// * reset Position
//==============================
Scene_Equip.prototype.resetPosition = function() {
	this._helpWindow.x = this._helpWindowOrg[0] + Moghunter.scEquip_HelpWindow_slideX;
	this._helpWindow.y = this._helpWindowOrg[1] + Moghunter.scEquip_HelpWindow_slideY;
	this._helpWindow_slide = 0;
	this._commandWindow.x = this._commandWindowOrg[0] + Moghunter.scEquip_ComWindow_slideX;
	this._commandWindow.y = this._commandWindowOrg[1] + Moghunter.scEquip_ComWindow_slideY;
	this._commandWindow_slide = 0;
	this._slotWindow.x = this._slotWindowOrg[0] + Moghunter.scEquip_SlotWindow_slideX;
	this._slotWindow.y = this._slotWindowOrg[1] + Moghunter.scEquip_SlotWindow_slideY;
	this._slotWindow_slide = 0;
	this._itemWindow.x = this._itemWindowOrg[0] + Moghunter.scEquip_ItemWindow_slideX;
	this._itemWindow.y = this._itemWindowOrg[1] + Moghunter.scEquip_ItemWindow_slideY;
	this._itemWindow_slide = 0;
	this._statusWindow.x = this._statusWindowOrg[0] + Moghunter.scEquip_StatusWindow_slideX;
	this._statusWindow.y = this._statusWindowOrg[1] + Moghunter.scEquip_StatusWindow_slideY;
	this._statusWindow_slide = 0;

	this._helpWindow.contentsOpacity = 0;
	this._commandWindow.contentsOpacity = 0;
	this._slotWindow.contentsOpacity = 0;
	this._itemWindow.contentsOpacity = 0;
	this._statusWindow.contentsOpacity = 0;
	
};

//==============================
// * update Slide
//==============================
Scene_Equip.prototype.updateSlide = function() {
	this._helpWindow_slide += 1;
	this._commandWindow_slide += 1;
	this._slotWindow_slide += 1;
	this._itemWindow_slide += 1;
	this._statusWindow_slide += 1;
	
	if( this._helpWindow_slide <= Moghunter.scEquip_HelpWindow_slideTime ){
		this._helpWindow.contentsOpacity += ( 256 / Moghunter.scEquip_HelpWindow_slideTime);
		this._helpWindow.x -= (Moghunter.scEquip_HelpWindow_slideX / Moghunter.scEquip_HelpWindow_slideTime);
		this._helpWindow.y -= (Moghunter.scEquip_HelpWindow_slideY / Moghunter.scEquip_HelpWindow_slideTime);
	}
	if( this._commandWindow_slide <= Moghunter.scEquip_ComWindow_slideTime ){
		if( Moghunter.scEquip_ComWindow_visible ){
			this._commandWindow.contentsOpacity += ( 256 / Moghunter.scEquip_ComWindow_slideTime);
		}
		this._commandWindow.x -= (Moghunter.scEquip_ComWindow_slideX / Moghunter.scEquip_ComWindow_slideTime);
		this._commandWindow.y -= (Moghunter.scEquip_ComWindow_slideY / Moghunter.scEquip_ComWindow_slideTime);
	}
	if( this._slotWindow_slide <= Moghunter.scEquip_SlotWindow_slideTime ){
		this._slotWindow.contentsOpacity += ( 256 / Moghunter.scEquip_SlotWindow_slideTime);
		this._slotWindow.x -= (Moghunter.scEquip_SlotWindow_slideX / Moghunter.scEquip_SlotWindow_slideTime);
		this._slotWindow.y -= (Moghunter.scEquip_SlotWindow_slideY / Moghunter.scEquip_SlotWindow_slideTime);
	}
	if( this._itemWindow_slide <= Moghunter.scEquip_ItemWindow_slideTime ){
		this._itemWindow.contentsOpacity += ( 256 / Moghunter.scEquip_ItemWindow_slideTime);
		this._itemWindow.x -= (Moghunter.scEquip_ItemWindow_slideX / Moghunter.scEquip_ItemWindow_slideTime);
		this._itemWindow.y -= (Moghunter.scEquip_ItemWindow_slideY / Moghunter.scEquip_ItemWindow_slideTime);
	}
	if( this._statusWindow_slide <= Moghunter.scEquip_StatusWindow_slideTime ){
		this._statusWindow.contentsOpacity += ( 256 / Moghunter.scEquip_StatusWindow_slideTime);
		this._statusWindow.x -= (Moghunter.scEquip_StatusWindow_slideX / Moghunter.scEquip_StatusWindow_slideTime);
		this._statusWindow.y -= (Moghunter.scEquip_StatusWindow_slideY / Moghunter.scEquip_StatusWindow_slideTime);
	}
	
};

//==============================
// * update Layout
//==============================
Scene_Equip.prototype.updateLayout = function() {
	this._layoutHelp.x = this._helpWindow.x + Moghunter.scEquip_HelpLayoutX;
	this._layoutHelp.y = this._helpWindow.y + Moghunter.scEquip_HelpLayoutY;
	this._layoutHelp.opacity = this._helpWindow.contentsOpacity;
	this._helpWindow.opacity = 0;	
	if(!Moghunter.scEquip_HelpLayout_visible){this._helpWindow.opacity=255;};
	this._layoutCommand.x = this._commandWindow.x + Moghunter.scEquip_ComLayoutX;
	this._layoutCommand.y = this._commandWindow.y + Moghunter.scEquip_ComLayoutY;
	this._layoutCommand.opacity = this._commandWindow.contentsOpacity;
    this._commandWindow.opacity = 0;	
	if(!Moghunter.scEquip_ComLayout_visible){this._commandWindow.opacity=255;};
	this._layoutSlot.x = this._slotWindow.x + Moghunter.scEquip_SlotLayoutX;
	this._layoutSlot.y = this._slotWindow.y + Moghunter.scEquip_SlotLayoutY;
	this._layoutSlot.opacity = this._slotWindow.contentsOpacity;
    this._slotWindow.opacity = 0;		
	if(!Moghunter.scEquip_SlotLayout_visible){this._slotWindow.opacity=255;};
	this._layoutItem.x = this._itemWindow.x + Moghunter.scEquip_ItemLayoutX;
	this._layoutItem.y = this._itemWindow.y + Moghunter.scEquip_ItemLayoutY;
	this._layoutItem.opacity = this._itemWindow.contentsOpacity;
    this._itemWindow.opacity = 0;	
	if(!Moghunter.scEquip_ItemLayout_visible){this._itemWindow.opacity=255;};
	this._layoutStatus.x = this._statusWindow.x + Moghunter.scEquip_StatusLayoutX;
	this._layoutStatus.y = this._statusWindow.y + Moghunter.scEquip_StatusLayoutY;
	this._layoutStatus.opacity = this._statusWindow.contentsOpacity;
    this._statusWindow.opacity = 0;	
	if(!Moghunter.scEquip_StatusLayout_visible){this._statusWindow.opacity=255;};
};

//==============================
// * Update
//==============================
var _mog_scEquipM_update = Scene_Equip.prototype.update;
Scene_Equip.prototype.update = function() {
	_mog_scEquipM_update.call(this);
    if (this._layout) {this.updateSprites()};
};

//=============================================================================
// ** Window Equip Slot
//=============================================================================

//==============================
// * Window Slot Item
//==============================
Window_EquipSlot.prototype.drawItem = function(index) {
	this.contents.fontSize = Moghunter.scEquip_SlotWindow_FontSize;
    if (this._actor) {
        var rect = this.itemRectForText(index);
        this.changeTextColor(this.systemColor());
        this.changePaintOpacity(this.isEnabled(index));
		if( Moghunter.scEquip_Slot_Name_visible ){
            this.drawText(this.slotName(index), rect.x, rect.y, 138, this.lineHeight());
		}
        this.drawItemName(this._actor.equips()[index], rect.x + Moghunter.scEquip_Slot_left_margin, rect.y);
        this.changePaintOpacity(true);
    }
};
//==============================
// * Window Slot 绘制名字、图标（多次继承拦截）
//==============================
var _mog_scEquip_slot_drawItemName = Window_EquipSlot.prototype.drawItemName;
Window_EquipSlot.prototype.drawItemName = function(item, x, y, width) {
	this._mog_scEquip_isDrawingItemName = true;
	_mog_scEquip_slot_drawItemName.call(this, item, x, y, width);
	this._mog_scEquip_isDrawingItemName = false;
};
var _mog_scEquip_slot_drawIcon = Window_EquipSlot.prototype.drawIcon;
Window_EquipSlot.prototype.drawIcon = function(iconIndex, x, y) {
	if(this._mog_scEquip_isDrawingItemName == true){
		if( Moghunter.scEquip_Slot_drawicon == false ){
			return;
		}
	}
	_mog_scEquip_slot_drawIcon.call(this,iconIndex, x, y);
}
var _mog_scEquip_slot_drawText = Window_EquipSlot.prototype.drawText;
Window_EquipSlot.prototype.drawText = function(text, x, y, maxWidth, align) {
	if(this._mog_scEquip_isDrawingItemName == true){
		if( Moghunter.scEquip_Slot_drawname == false ){
			return;
		}
	}
	_mog_scEquip_slot_drawText.call(this, text, x, y, maxWidth, align);
}
//==============================
// * Window Slot Rect 
//==============================
var _mog_scEquipM_Slot_itemRect = Window_EquipSlot.prototype.itemRect;
Window_EquipSlot.prototype.itemRect = function(index) {
	if( !Moghunter.scEquip_Slot_pos_reset ){
		return _mog_scEquipM_Slot_itemRect.call(this,index);
	}
    var rect = new Rectangle();
    var maxCols = this.maxCols();
    rect.width = this.itemWidth();
    rect.height = this.itemHeight();
    rect.x = index % maxCols * (rect.width + this.spacing()) - this._scrollX;
    rect.y = Math.floor(index / maxCols) * rect.height - this._scrollY;
	if( index < Moghunter.scEquip_Slot_pos.length ){
		var pos = Moghunter.scEquip_Slot_pos[index].split(/[，,]/);
		if( pos.length == 2 ){
			rect.x = Number(pos[0]);
			rect.y = Number(pos[1]);
		}
	}
    return rect;
};

//=============================================================================
// ** Window Equip Command
//=============================================================================

//==============================
// * draw Text
//==============================
var _mog_scEquipCom_drawText = Window_EquipCommand.prototype.drawText;
Window_EquipCommand.prototype.drawText = function(text, x, y, maxWidth, align) {
	if( Moghunter.scEquip_ComWindow_text_visible ){
		_mog_scEquipCom_drawText.call(this,text, x, y, maxWidth, align);
	}
};

Window_EquipCommand.prototype.windowWidth = function() {
    return Moghunter.scEquip_ComWindow_width;
};
Window_EquipCommand.prototype.maxCols = function() {
    return Moghunter.scEquip_ComWindow_col;
};

Window_EquipCommand.prototype.standardFontSize = function() {
    return Moghunter.scEquip_ComWindow_FontSize;
};

//=============================================================================
// ** Window Equip Status
//=============================================================================

//==============================
// * initialize
//==============================
var _mog_scequip_westatus_initialize = Window_EquipStatus.prototype.initialize;
Window_EquipStatus.prototype.initialize = function(x, y) {
    _mog_scequip_westatus_initialize.call(this,x,y);
	this._parImg = ImageManager.loadMenusequip(Moghunter.src_menu_equip_param);
	this._parData = [0,0];
};

//==============================
// * draw Text
//==============================
Window_EquipStatus.prototype.createFaceSprite = function() {
	this._faceSprite = new Sprite();
	this._faceSprite.x = Moghunter.scEquip_Face_X;
	this._faceSprite.y = Moghunter.scEquip_Face_Y;
	this.addChild(this._faceSprite);
};

//==============================
// * refresh
//==============================
Window_EquipStatus.prototype.refresh = function() {
    this.contents.clear();
	this.contents.fontSize = Moghunter.scEquip_StatusWindow_FontSize;
    if (this._actor) {
		this._parData[0] = this._parImg.width / 3;
		this._parData[1] = this._parImg.height;
    	if (!this._faceSprite) {this.createFaceSprite()};
		this.refreshFaceSprite();
        this.drawActorName(this._actor, Moghunter.scEquip_ActorName_X, Moghunter.scEquip_ActorName_Y );
        for (var i = 0; i < 6; i++) {
            this.drawItem(0, Moghunter.scEquip_Status_param_up_margin +  Moghunter.scEquip_Status_param_line_height * (1 + i), 2 + i);
        }
    }
};

//==============================
// * refresh Face Sprite
//==============================
Window_EquipStatus.prototype.refreshFaceSprite = function() {
	 this._faceSprite.bitmap = ImageManager.loadMenusActorFace(Moghunter.menu_equip_face_list[this._actor._actorId]);
};

//==============================
// * window Height
//==============================

Window_EquipStatus.prototype.windowHeight = function() {
    return Moghunter.scEquip_StatusWindow_height;
};
Window_EquipStatus.prototype.windowWidth = function() {
    return Moghunter.scEquip_StatusWindow_width;
};


//==============================
// * draw Par Name
//==============================
Window_EquipStatus.prototype.drawParamName = function(x, y, paramId) {
	if( Moghunter.scEquip_Status_param_name_visible ){
		this.changeTextColor(this.systemColor());
		this.drawText(TextManager.param(paramId), x, y, 120);
	}
};


//==============================
// * draw Item
//==============================
Window_EquipStatus.prototype.drawItem = function(x, y, paramId) {
	this.contents.fontSize = Moghunter.scEquip_StatusWindow_FontSize;
    this.drawParamName(x + this.textPadding(), y, paramId);
	var l = Moghunter.scEquip_Status_param_left_margin;
	var w = Moghunter.scEquip_Status_param_width;
	var a = Moghunter.scEquip_Status_param_arrow_margin;
    if (this._actor) {
        this.drawCurrentParam(x + l, y, paramId);
		if (this._tempActor) {this.drawRightArrowM(x + l + w + a/2, y + 8,paramId)};
    }
    if (this._tempActor) {
        this.drawNewParam(x + l + w + a*2, y, paramId);
    }
};
//==============================
// * draw Right Arrow + number
//==============================
Window_EquipStatus.prototype.drawRightArrowM = function(x, y,paramId) {

    var newValue = this._tempActor.param(paramId);
    var diffvalue = newValue - this._actor.param(paramId); 
    if (diffvalue > 0) {
		 var sx = this._parData[0];
	} else if (diffvalue < 0) {
		var sx = this._parData[0] * 2;
	} else {
	    var sx = 0	
	};		
    this.contents.blt(this._parImg, sx, 0, this._parData[0], this._parData[1], x, y);	
	 
};
Window_EquipStatus.prototype.drawCurrentParam = function(x, y, paramId) {
    this.resetTextColor();
    this.drawText(this._actor.param(paramId), x, y, Moghunter.scEquip_Status_param_width, 'right');
};
Window_EquipStatus.prototype.drawNewParam = function(x, y, paramId) {
    var newValue = this._tempActor.param(paramId);
    var diffvalue = newValue - this._actor.param(paramId);
    this.changeTextColor(this.paramchangeTextColor(diffvalue));
    this.drawText(newValue, x, y, Moghunter.scEquip_Status_param_width, 'right');
};

//==============================
// * update
//==============================
var _mog_scnEquipUpdate = Window_EquipStatus.prototype.update;
Window_EquipStatus.prototype.update = function() {
    _mog_scnEquipUpdate.call(this);
	this._faceSprite.opacity = this.contentsOpacity;
};

//=============================================================================
// ** Window Equip Item
//=============================================================================

//==============================
// * Window Equip Item
//==============================
var _mog_scEquip_Wequip_drawItemName = Window_EquipItem.prototype.drawItemName;
Window_EquipItem.prototype.drawItemName = function(item, x, y, width) {
	this.contents.fontSize = Moghunter.scEquip_ItemWindow_FontSize;
    _mog_scEquip_Wequip_drawItemName.call(this,item, x, y, width)
};

//==============================
// * max Cols
//==============================
Window_EquipItem.prototype.maxCols = function() {
    return Moghunter.scEquip_ItemWindow_col;
};

