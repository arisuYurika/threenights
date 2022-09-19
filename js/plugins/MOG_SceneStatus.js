//=============================================================================
// MOG_SceneStatus.js
//=============================================================================

/*:
 * @plugindesc (v1.0)[v1.8]  面板 - 全自定义状态界面
 * @author Moghunter （Drill_up翻译+优化）
 * 
 * @Drill_LE_param "角色前视图-%d"
 * @Drill_LE_parentKey "==角色前视图%d至%d=="
 * @Drill_LE_var "Moghunter.menu_status_bust_list_length"
 *
 *
 * @param 资源-整体布局
 * @desc 状态界面的整体布局。
 * @default 状态界面-整体布局
 * @require 1
 * @dir img/Menu__status/
 * @type file
 *
 * @param ----角色----
 * @desc
 *
 * @param 平移-角色名 X
 * @parent ----角色----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 30
 *
 * @param 平移-角色名 Y
 * @parent ----角色----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 97
 *	
 * @param 平移-职业 X
 * @parent ----角色----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 145
 *
 * @param 平移-职业 Y
 * @parent ----角色----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 97
 *	
 * @param 平移-帮助信息 X
 * @parent ----角色----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 0
 *
 * @param 平移-帮助信息 Y
 * @parent ----角色----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 520
 *
 * @param ----属性----
 * @desc
 *
 * @param 平移-等级数值 X
 * @parent ----属性----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 297
 *
 * @param 平移-等级数值 Y
 * @parent ----属性----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 19
 *
 * @param 平移-经验数值 X
 * @parent ----属性----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 450
 *
 * @param 平移-经验数值 Y
 * @parent ----属性----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 19
 *
 * @param 平移-升级所需经验 X
 * @parent ----属性----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 645
 *
 * @param 平移-升级所需经验 Y
 * @parent ----属性----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 19
 *
 * @param 平移-状态 X
 * @parent ----属性----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 546
 *
 * @param 平移-状态 Y
 * @parent ----属性----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 154
 *
 * @param 资源-生命条
 * @parent ----属性----
 * @desc 生命条的图片资源，默认流动，实际效果为图片资源的三分之一长。
 * @default 状态界面-生命条
 * @require 1
 * @dir img/Menu__status/
 * @type file
 *
 * @param 平移-生命条 X
 * @parent ----属性----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 607
 *
 * @param 平移-生命条 Y
 * @parent ----属性----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 180
 *
 * @param 平移-生命数值 X
 * @parent ----属性----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 600
 *
 * @param 平移-生命数值 Y
 * @parent ----属性----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 124
 *
 * @param 资源-魔法条
 * @parent ----属性----
 * @desc 魔法条的图片资源，默认流动，实际效果为图片资源的三分之一长。
 * @default 状态界面-魔法条
 * @require 1
 * @dir img/Menu__status/
 * @type file
 *
 * @param 平移-魔法条 X
 * @parent ----属性----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 607
 *
 * @param 平移-魔法条 Y
 * @parent ----属性----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 221
 * 
 * @param 平移-魔法数值 X
 * @parent ----属性----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 600
 *
 * @param 平移-魔法数值 Y
 * @parent ----属性----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 166
 *
 * @param 资源-怒气条
 * @parent ----属性----
 * @desc 怒气条的图片资源，默认流动，实际效果为图片资源的三分之一长。
 * @default 状态界面-怒气条
 * @require 1
 * @dir img/Menu__status/
 * @type file
 *
 * @param 平移-怒气条 X
 * @parent ----属性----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 607
 *
 * @param 平移-怒气条 Y
 * @parent ----属性----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 265
 * 
 * @param 平移-怒气数值 X
 * @parent ----属性----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 600
 *
 * @param 平移-怒气数值 Y
 * @parent ----属性----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 209
 * 	
 * @param 平移-攻击力 X
 * @parent ----属性----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 12
 *
 * @param 平移-攻击力 Y
 * @parent ----属性----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 144
 * 	
 * @param 平移-魔法攻击 X
 * @parent ----属性----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 12
 *
 * @param 平移-魔法攻击 Y
 * @parent ----属性----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 196
 * 	
 * @param 平移-敏捷度 X
 * @parent ----属性----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 12
 *
 * @param 平移-敏捷度 Y
 * @parent ----属性----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 251
 * 	
 * @param 平移-防御力 X
 * @parent ----属性----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 103
 *
 * @param 平移-防御力 Y
 * @parent ----属性----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 144
 * 				
 * @param 平移-魔法防御 X
 * @parent ----属性----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 103
 *
 * @param 平移-魔法防御 Y
 * @parent ----属性----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 196
 * 		
 * @param 平移-幸运值 X
 * @parent ----属性----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 103
 *
 * @param 平移-幸运值 Y
 * @parent ----属性----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 251
 *
 * @param ----装备----
 * @desc
 * 
 * @param 平移-装备槽1 X
 * @parent ----装备----
 * @desc x轴方向平移，单位像素。0为贴在最左边。以数据库>类型>装备类型的顺序为准，装备槽1一般代表武器。
 * @default 7
 *
 * @param 平移-装备槽1 Y
 * @parent ----装备----
 * @desc y轴方向平移，单位像素。0为贴在最上面。以数据库>类型>装备类型的顺序为准，装备槽1一般代表武器。
 * @default 347
 * 
 * @param 平移-装备槽2 X
 * @parent ----装备----
 * @desc x轴方向平移，单位像素。0为贴在最左边。以数据库>类型>装备类型的顺序为准。
 * @default 7
 *
 * @param 平移-装备槽2 Y
 * @parent ----装备----
 * @desc y轴方向平移，单位像素。0为贴在最上面。以数据库>类型>装备类型的顺序为准。
 * @default 398
 *		
 * @param 平移-装备槽3 X
 * @parent ----装备----
 * @desc x轴方向平移，单位像素。0为贴在最左边。以数据库>类型>装备类型的顺序为准。没有装备可以不设置。
 * @default 7
 *
 * @param 平移-装备槽3 Y
 * @parent ----装备----
 * @desc y轴方向平移，单位像素。0为贴在最上面。以数据库>类型>装备类型的顺序为准。没有装备可以不设置。
 * @default 449
 *		
 * @param 平移-装备槽4 X
 * @parent ----装备----
 * @desc x轴方向平移，单位像素。0为贴在最左边。以数据库>类型>装备类型的顺序为准。没有装备可以不设置。
 * @default 261
 *
 * @param 平移-装备槽4 Y
 * @parent ----装备----
 * @desc y轴方向平移，单位像素。0为贴在最上面。以数据库>类型>装备类型的顺序为准。没有装备可以不设置。
 * @default 376
 *		
 * @param 平移-装备槽5 X
 * @parent ----装备----
 * @desc x轴方向平移，单位像素。0为贴在最左边。以数据库>类型>装备类型的顺序为准。没有装备可以不设置。
 * @default 261
 *
 * @param 平移-装备槽5 Y
 * @parent ----装备----
 * @desc y轴方向平移，单位像素。0为贴在最上面。以数据库>类型>装备类型的顺序为准。没有装备可以不设置。
 * @default 427
 *		
 * @param 平移-装备槽6 X
 * @parent ----装备----
 * @desc x轴方向平移，单位像素。0为贴在最左边。以数据库>类型>装备类型的顺序为准。没有装备可以不设置。
 * @default 300
 *
 * @param 平移-装备槽6 Y
 * @parent ----装备----
 * @desc y轴方向平移，单位像素。0为贴在最上面。以数据库>类型>装备类型的顺序为准。没有装备可以不设置。
 * @default 450
 *		
 * @param 平移-装备槽7 X
 * @parent ----装备----
 * @desc x轴方向平移，单位像素。0为贴在最左边。以数据库>类型>装备类型的顺序为准。没有装备可以不设置。
 * @default 400
 *
 * @param 平移-装备槽7 Y
 * @parent ----装备----
 * @desc y轴方向平移，单位像素。0为贴在最上面。以数据库>类型>装备类型的顺序为准。没有装备可以不设置。
 * @default 450
 *		
 * @param 平移-装备槽8 X
 * @parent ----装备----
 * @desc x轴方向平移，单位像素。0为贴在最左边。以数据库>类型>装备类型的顺序为准。没有装备可以不设置。
 * @default 500
 *
 * @param 平移-装备槽8 Y
 * @parent ----装备----
 * @desc y轴方向平移，单位像素。0为贴在最上面。以数据库>类型>装备类型的顺序为准。没有装备可以不设置。
 * @default 450
 *		
 * @param 平移-装备槽9 X
 * @parent ----装备----
 * @desc x轴方向平移，单位像素。0为贴在最左边。以数据库>类型>装备类型的顺序为准。没有装备可以不设置。
 * @default 600
 *
 * @param 平移-装备槽9 Y
 * @parent ----装备----
 * @desc y轴方向平移，单位像素。0为贴在最上面。以数据库>类型>装备类型的顺序为准。没有装备可以不设置。
 * @default 450
 *		
 * @param 平移-装备槽10 X
 * @parent ----装备----
 * @desc x轴方向平移，单位像素。0为贴在最左边。以数据库>类型>装备类型的顺序为准。没有装备可以不设置。
 * @default 300
 *
 * @param 平移-装备槽10 Y
 * @parent ----装备----
 * @desc y轴方向平移，单位像素。0为贴在最上面。以数据库>类型>装备类型的顺序为准。没有装备可以不设置。
 * @default 550
 *		
 * @param 平移-装备槽11 X
 * @parent ----装备----
 * @desc x轴方向平移，单位像素。0为贴在最左边。以数据库>类型>装备类型的顺序为准。没有装备可以不设置。
 * @default 400
 *
 * @param 平移-装备槽11 Y
 * @parent ----装备----
 * @desc y轴方向平移，单位像素。0为贴在最上面。以数据库>类型>装备类型的顺序为准。没有装备可以不设置。
 * @default 550
 *		
 * @param 平移-装备槽12 X
 * @parent ----装备----
 * @desc x轴方向平移，单位像素。0为贴在最左边。以数据库>类型>装备类型的顺序为准。没有装备可以不设置。
 * @default 500
 *
 * @param 平移-装备槽12 Y
 * @parent ----装备----
 * @desc y轴方向平移，单位像素。0为贴在最上面。以数据库>类型>装备类型的顺序为准。没有装备可以不设置。
 * @default 550
 *
 * @param ----雷达图----
 * @desc
 *
 * @param 资源-雷达图
 * @parent ----雷达图----
 * @desc 雷达图的背景。
 * @default 状态界面-雷达图
 * @require 1
 * @dir img/Menu__status/
 * @type file
 *		
 * @param 平移-雷达图 X
 * @parent ----雷达图----
 * @desc x轴方向平移，单位像素。0为图片中心点贴在最左边。
 * @default 385
 *
 * @param 平移-雷达图 Y
 * @parent ----雷达图----
 * @desc y轴方向平移，单位像素。0为图片中心点贴在最上面。
 * @default 220
 *
 * @param 雷达图半径大小
 * @parent ----雷达图----
 * @type number
 * @min 1
 * @desc 该大小控制雷达多边形的大小，与资源图片大小无关。
 * @default 90
 *
 * @param 雷达图中心色
 * @parent ----雷达图----
 * @desc 雷达图中心的颜色，格式为 rgba(128, 255, 128, 0.2)，红,绿,蓝,透明度，红色在0-255之间，透明度在0-1之间。
 * @default rgba(128, 255, 128, 0.2)
 *
 * @param 雷达图边缘色
 * @parent ----雷达图----
 * @desc 雷达图边缘的颜色，格式为 rgba(128, 255, 128, 0.2)，红,绿,蓝,透明度，红色在0-255之间，透明度在0-1之间。
 * @default rgba(128, 255, 128, 0.9)
 *
 * @param 是否绘制生命
 * @parent ----雷达图----
 * @type boolean
 * @on 绘制
 * @off 不绘制
 * @desc true - 绘制，false - 不绘制，多边形将会出现生命值的角。（修改后要调整你的雷达背景图）
 * @default false
 *
 * @param 生命比例值
 * @parent ----雷达图----
 * @desc 控制生命在雷达图中的权重，比例10，生命值200，则权重结果为20。（用于防止某个属性值拉得太远，可为小数）
 * @default 10
 *
 * @param 是否绘制魔法
 * @parent ----雷达图----
 * @type boolean
 * @on 绘制
 * @off 不绘制
 * @desc true - 绘制，false - 不绘制，多边形将会出现魔法值的角。（修改后要调整你的雷达背景图）
 * @default false
 *
 * @param 魔法比例值
 * @parent ----雷达图----
 * @desc 控制魔法在雷达图中的权重，比例4.5，魔法值90，则权重结果为20。（用于防止某个属性值拉得太远，可为小数）
 * @default 4.5
 *
 * @param 是否绘制攻击力
 * @parent ----雷达图----
 * @type boolean
 * @on 绘制
 * @off 不绘制
 * @desc true - 绘制，false - 不绘制，多边形将会出现攻击力的角。（修改后要调整你的雷达背景图）
 * @default true
 *
 * @param 攻击力比例值
 * @parent ----雷达图----
 * @desc 控制攻击力在雷达图中的权重，比例1，攻击力20，则权重结果为20。（用于防止某个属性值拉得太远，可为小数）
 * @default 1
 *
 * @param 是否绘制防御力
 * @parent ----雷达图----
 * @type boolean
 * @on 绘制
 * @off 不绘制
 * @desc true - 绘制，false - 不绘制，多边形将会出现防御力的角。（修改后要调整你的雷达背景图）
 * @default true
 *
 * @param 防御力比例值
 * @parent ----雷达图----
 * @desc 控制防御力在雷达图中的权重，比例1，防御力20，则权重结果为20。（用于防止某个属性值拉得太远，可为小数）
 * @default 1
 *
 * @param 是否绘制魔法攻击
 * @parent ----雷达图----
 * @type boolean
 * @on 绘制
 * @off 不绘制
 * @desc true - 绘制，false - 不绘制，多边形将会出现魔法攻击的角。（修改后要调整你的雷达背景图）
 * @default true
 *
 * @param 魔法攻击比例值
 * @parent ----雷达图----
 * @desc 控制魔法攻击在雷达图中的权重，比例1，魔法攻击20，则权重结果为20。（用于防止某个属性值拉得太远，可为小数）
 * @default 1
 *
 * @param 是否绘制魔法防御
 * @parent ----雷达图----
 * @type boolean
 * @on 绘制
 * @off 不绘制
 * @desc true - 绘制，false - 不绘制，多边形将会出现魔法防御的角。（修改后要调整你的雷达背景图）
 * @default true
 *
 * @param 魔法防御比例值
 * @parent ----雷达图----
 * @desc 控制魔法防御在雷达图中的权重，比例1，魔法防御20，则权重结果为20。（用于防止某个属性值拉得太远，可为小数）
 * @default 1
 *
 * @param 是否绘制敏捷度
 * @parent ----雷达图----
 * @type boolean
 * @on 绘制
 * @off 不绘制
 * @desc true - 绘制，false - 不绘制，多边形将会出现敏捷度的角。（修改后要调整你的雷达背景图）
 * @default true
 *
 * @param 敏捷度比例值
 * @parent ----雷达图----
 * @desc 控制敏捷度在雷达图中的权重，比例2，敏捷度40，则权重结果为20。（用于防止某个属性值拉得太远，可为小数）
 * @default 2
 *
 * @param 是否绘制幸运值
 * @parent ----雷达图----
 * @type boolean
 * @on 绘制
 * @off 不绘制
 * @desc true - 绘制，false - 不绘制，多边形将会出现幸运值的角。（修改后要调整你的雷达背景图）
 * @default true
 *
 * @param 幸运比例值
 * @parent ----雷达图----
 * @desc 控制幸运值在雷达图中的权重，比例2，幸运值40，则权重结果为20。（用于防止某个属性值拉得太远，可为小数）
 * @default 2
 *
 * @param 是否固定比例最大值
 * @parent ----雷达图----
 * @type boolean
 * @on 固定
 * @off 不固定
 * @desc true - 固定，false - 不固定，固定后多边形将统一按照最大值来分配比例，不固定则按照最大属性值来分配比例。
 * @default false
 *
 * @param 比例最大值
 * @parent 是否固定比例最大值
 * @type number
 * @min 1
 * @desc 如果固定最大值，设置最大200，则权重1属性=200才能填满单个方向，权重2属性要400。（如果属性太大，会溢出）
 * @default 200
 * 
 * @param ----角色前视图----
 * @default 
 *
 * @param 平移-前视图 X
 * @parent ----角色前视图----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 580
 *
 * @param 平移-前视图 Y
 * @parent ----角色前视图----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 310
 * 
 * @param ==角色前视图 1至20==
 * @parent ----角色前视图----
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
 * @parent ----角色前视图----
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
 * @parent ----角色前视图----
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
 * @help  
 * =============================================================================
 * +++ MOG - Scene Status (v1.0) +++
 * By Moghunter 
 * https://mogplugins.wordpress.com/
 * =============================================================================
 * 可完全自己定义的状态界面设置。
 * 【现已支持插件关联资源的打包、加密】
 *
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.插件的作用域：菜单界面。
 *   可以设置整个状态面板(界面)的内容。
 * 2.该面板属于菜单面板，可以被菜单背景、菜单魔法圈等插件作用到。
 *   该面板关键字为：Scene_Status
 *   更多关键字内容，见 "17.主菜单 > 菜单关键字.docx"。
 * 结构：
 *   (1.该面板没有窗口，所有文字和图片都是零散分布，需要一个个配置。
 *   (2.状态面板可以通过按上一页(Q键)下一页(W键)直接切换当前角色。
 *
 * -----------------------------------------------------------------------------
 * ----素材规则
 * 这里固定设置了生命条是流动的。
 * 流动生命条的长度是资源图片长度的三分之一。
 * 生命条的图片会分成3等份，第1份和第3份要一模一样，第2份是
 * 第1份和第3份的过渡。（其它条与生命条一样）
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 资源路径：img/Menu__status （Menu后面有两个下划线）
 * 资源路径：img/Menu__actorFaces （Menu后面有两个下划线）
 * 先确保项目img文件夹下是否有Menu__status文件夹。
 * 先确保项目img文件夹下是否有Menu__actorFaces文件夹。
 * 要查看所有关联资源文件的插件，可以去看看"插件清单.xlsx"。
 * 如果没有，需要自己建立。需要配置资源文件：
 *
 * 资源-整体布局  （Menu__status文件夹）
 * 资源-雷达图
 * 资源-生命条
 * 资源-魔法条
 * 资源-怒气条
 *
 * 角色前视图-1   （Menu__actorFaces文件夹）
 * 角色前视图-2
 * 角色前视图-3
 * ………
 * 
 * 1.框架资源都在Menu__status文件夹中。
 * 2.角色图标、头像资源都在Menu__actorFaces文件夹中。
 *
 * -----------------------------------------------------------------------------
 * ----关于Drill_up优化：
 * [v1.1]
 * 使得该插件支持关联资源的打包、加密。
 * 部署时勾选去除无关文件，本插件中相关的文件不会被去除。
 * [v1.2]
 * 大幅度修改了位置参数。
 * 把mog原来的一些不适宜的属性布局换成了直观的雷达图。
 * [v1.3]
 * 修复了切换角色时雷达图没刷新的问题。
 * [v1.4]
 * 添加了更多装备槽显示。
 * [v1.5]
 * 添加了可以手动设置雷达图的最大值功能。
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
　　Imported.MOG_SceneStatus = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_SceneStatus');  
	Moghunter.scStatus_BustX = Number(Moghunter.parameters['平移-前视图 X'] || 580);
	Moghunter.scStatus_BustY = Number(Moghunter.parameters['平移-前视图 Y'] || 310);
	Moghunter.scStatus_ActorNameX = Number(Moghunter.parameters['平移-角色名 X'] || 30);
	Moghunter.scStatus_ActorNameY = Number(Moghunter.parameters['平移-角色名 Y'] || 97);
	Moghunter.scStatus_ClassX = Number(Moghunter.parameters['平移-职业 X'] || 145);
	Moghunter.scStatus_ClassY = Number(Moghunter.parameters['平移-职业 Y'] || 97);
	Moghunter.scStatus_ProfileX = Number(Moghunter.parameters['平移-帮助信息 X'] || 0);
	Moghunter.scStatus_ProfileY = Number(Moghunter.parameters['平移-帮助信息 Y'] || 520);
	
	Moghunter.scStatus_LevelX = Number(Moghunter.parameters['平移-等级数值 X'] || 297);
	Moghunter.scStatus_LevelY = Number(Moghunter.parameters['平移-等级数值 Y'] || 19);
	Moghunter.scStatus_ExpX = Number(Moghunter.parameters['平移-经验数值 X'] || 450);
	Moghunter.scStatus_ExpY = Number(Moghunter.parameters['平移-经验数值 Y'] || 19);
	Moghunter.scStatus_NExpX = Number(Moghunter.parameters['平移-升级所需经验 X'] || 645);
	Moghunter.scStatus_NExpY = Number(Moghunter.parameters['平移-升级所需经验 Y'] || 19);
	Moghunter.scStatus_StatesX = Number(Moghunter.parameters['平移-状态 X'] || 546);
	Moghunter.scStatus_StatesY = Number(Moghunter.parameters['平移-状态 Y'] || 154);
	Moghunter.scStatus_HPNumberX = Number(Moghunter.parameters['平移-生命数值 X'] || 600);
	Moghunter.scStatus_HPNumberY = Number(Moghunter.parameters['平移-生命数值 Y'] || 124);
	Moghunter.scStatus_MeterHPX = Number(Moghunter.parameters['平移-生命条 X'] || 607);
	Moghunter.scStatus_MeterHPY = Number(Moghunter.parameters['平移-生命条 Y'] || 180);	
	Moghunter.scStatus_MPNumberX = Number(Moghunter.parameters['平移-魔法数值 X'] || 600);
	Moghunter.scStatus_MPNumberY = Number(Moghunter.parameters['平移-魔法数值 Y'] || 166);
	Moghunter.scStatus_MeterMPX = Number(Moghunter.parameters['平移-魔法条 X'] || 607);
	Moghunter.scStatus_MeterMPY = Number(Moghunter.parameters['平移-魔法条 Y'] || 221);	
	Moghunter.scStatus_TPNumberX = Number(Moghunter.parameters['平移-怒气数值 X'] || 600);
	Moghunter.scStatus_TPNumberY = Number(Moghunter.parameters['平移-怒气数值 Y'] || 209);
	Moghunter.scStatus_MeterTPX = Number(Moghunter.parameters['平移-怒气条 X'] || 607);
	Moghunter.scStatus_MeterTPY = Number(Moghunter.parameters['平移-怒气条 Y'] || 265);	
	Moghunter.scStatus_ATKNumberX = Number(Moghunter.parameters['平移-攻击力 X'] || 12);
	Moghunter.scStatus_ATKNumberY = Number(Moghunter.parameters['平移-攻击力 Y'] || 144);
	//Moghunter.scStatus_MeterATKX = Number(Moghunter.parameters['ATK Meter X-Axis'] || 45);
	//Moghunter.scStatus_MeterATKY = Number(Moghunter.parameters['ATK Meter Y-Axis'] || 266);	
	Moghunter.scStatus_MATNumberX = Number(Moghunter.parameters['平移-魔法攻击 X'] || 12);
	Moghunter.scStatus_MATNumberY = Number(Moghunter.parameters['平移-魔法攻击 Y'] || 196);
	//Moghunter.scStatus_MeterMATX = Number(Moghunter.parameters['MAT Meter X-Axis'] || 203);
	//Moghunter.scStatus_MeterMATY = Number(Moghunter.parameters['MAT Meter Y-Axis'] || 266);	
	Moghunter.scStatus_AGINumberX = Number(Moghunter.parameters['平移-敏捷度 X'] || 12);
	Moghunter.scStatus_AGINumberY = Number(Moghunter.parameters['平移-敏捷度 Y'] || 251);
	//Moghunter.scStatus_MeterAGIX = Number(Moghunter.parameters['AGI Meter X-Axis'] || 361);
	//Moghunter.scStatus_MeterAGIY = Number(Moghunter.parameters['AGI Meter Y-Axis'] || 266);				
	Moghunter.scStatus_DEFNumberX = Number(Moghunter.parameters['平移-防御力 X'] || 103);
	Moghunter.scStatus_DEFNumberY = Number(Moghunter.parameters['平移-防御力 Y'] || 144);
	//Moghunter.scStatus_MeterDEFX = Number(Moghunter.parameters['DEF Meter X-Axis'] || 45);
	//Moghunter.scStatus_MeterDEFY = Number(Moghunter.parameters['DEF Meter Y-Axis'] || 322);		
	Moghunter.scStatus_MDFNumberX = Number(Moghunter.parameters['平移-魔法防御 X'] || 103);
	Moghunter.scStatus_MDFNumberY = Number(Moghunter.parameters['平移-魔法防御 Y'] || 196);
	//Moghunter.scStatus_MeterMDFX = Number(Moghunter.parameters['MDF Meter X-Axis'] || 203);
	//Moghunter.scStatus_MeterMDFY = Number(Moghunter.parameters['MDF Meter Y-Axis'] || 322);		
	Moghunter.scStatus_LUKNumberX = Number(Moghunter.parameters['平移-幸运值 X'] || 103);
	Moghunter.scStatus_LUKNumberY = Number(Moghunter.parameters['平移-幸运值 Y'] || 251);
	//Moghunter.scStatus_MeterLUKX = Number(Moghunter.parameters['LUK Meter X-Axis'] || 361);
	//Moghunter.scStatus_MeterLUKY = Number(Moghunter.parameters['LUK Meter Y-Axis'] || 322);		
	
	Moghunter.scStatus_Equip1_X = Number(Moghunter.parameters['平移-装备槽1 X'] || 7);
	Moghunter.scStatus_Equip1_Y = Number(Moghunter.parameters['平移-装备槽1 Y'] || 347);
	Moghunter.scStatus_Equip2_X = Number(Moghunter.parameters['平移-装备槽2 X'] || 7);
	Moghunter.scStatus_Equip2_Y = Number(Moghunter.parameters['平移-装备槽2 Y'] || 398);	
	Moghunter.scStatus_Equip3_X = Number(Moghunter.parameters['平移-装备槽3 X'] || 7);
	Moghunter.scStatus_Equip3_Y = Number(Moghunter.parameters['平移-装备槽3 Y'] || 449);	
	Moghunter.scStatus_Equip4_X = Number(Moghunter.parameters['平移-装备槽4 X'] || 261);
	Moghunter.scStatus_Equip4_Y = Number(Moghunter.parameters['平移-装备槽4 Y'] || 376);	
	Moghunter.scStatus_Equip5_X = Number(Moghunter.parameters['平移-装备槽5 X'] || 261);
	Moghunter.scStatus_Equip5_Y = Number(Moghunter.parameters['平移-装备槽5 Y'] || 427);	
	Moghunter.scStatus_Equip6_X = Number(Moghunter.parameters['平移-装备槽6 X'] || 300);
	Moghunter.scStatus_Equip6_Y = Number(Moghunter.parameters['平移-装备槽6 Y'] || 450);
	Moghunter.scStatus_Equip7_X = Number(Moghunter.parameters['平移-装备槽7 X'] || 400);
	Moghunter.scStatus_Equip7_Y = Number(Moghunter.parameters['平移-装备槽7 Y'] || 450);
	Moghunter.scStatus_Equip8_X = Number(Moghunter.parameters['平移-装备槽8 X'] || 500);
	Moghunter.scStatus_Equip8_Y = Number(Moghunter.parameters['平移-装备槽8 Y'] || 450);
	Moghunter.scStatus_Equip9_X = Number(Moghunter.parameters['平移-装备槽9 X'] || 600);
	Moghunter.scStatus_Equip9_Y = Number(Moghunter.parameters['平移-装备槽9 Y'] || 450);
	Moghunter.scStatus_Equip10_X = Number(Moghunter.parameters['平移-装备槽10 X'] || 300);
	Moghunter.scStatus_Equip10_Y = Number(Moghunter.parameters['平移-装备槽10 Y'] || 550);
	Moghunter.scStatus_Equip11_X = Number(Moghunter.parameters['平移-装备槽11 X'] || 400);
	Moghunter.scStatus_Equip11_Y = Number(Moghunter.parameters['平移-装备槽11 Y'] || 550);
	Moghunter.scStatus_Equip12_X = Number(Moghunter.parameters['平移-装备槽12 X'] || 500);
	Moghunter.scStatus_Equip12_Y = Number(Moghunter.parameters['平移-装备槽12 Y'] || 550);
	
	Moghunter.scStatus_ra_pos_x = Number(Moghunter.parameters['平移-雷达图 X'] || 385);
	Moghunter.scStatus_ra_pos_y = Number(Moghunter.parameters['平移-雷达图 Y'] || 220);
	Moghunter.scStatus_ra_size = Number(Moghunter.parameters['雷达图半径大小'] || 90);	
	Moghunter.scStatus_ra_color_1 = String(Moghunter.parameters['雷达图中心色'] || "rgba(128, 255, 128, 0.2)");	
	Moghunter.scStatus_ra_color_2 = String(Moghunter.parameters['雷达图边缘色'] || "rgba(128, 255, 128, 0.9)");	
	Moghunter.scStatus_ra_hp = String(Moghunter.parameters['是否绘制生命'] || "false") === "true";	
	Moghunter.scStatus_ra_hp_value = Number(Moghunter.parameters['生命比例值'] || 10);	
	Moghunter.scStatus_ra_mp = String(Moghunter.parameters['是否绘制魔法'] || "false") === "true";	
	Moghunter.scStatus_ra_mp_value = Number(Moghunter.parameters['魔法比例值'] || 4.5);	
	Moghunter.scStatus_ra_atk = String(Moghunter.parameters['是否绘制攻击力'] || "true") === "true";	
	Moghunter.scStatus_ra_atk_value = Number(Moghunter.parameters['攻击力比例值'] || 1);	
	Moghunter.scStatus_ra_def = String(Moghunter.parameters['是否绘制防御力'] || "true") === "true";	
	Moghunter.scStatus_ra_def_value = Number(Moghunter.parameters['防御力比例值'] || 1);	
	Moghunter.scStatus_ra_mat = String(Moghunter.parameters['是否绘制魔法攻击'] || "true") === "true";	
	Moghunter.scStatus_ra_mat_value = Number(Moghunter.parameters['魔法攻击比例值'] || 1);	
	Moghunter.scStatus_ra_mdf = String(Moghunter.parameters['是否绘制魔法防御'] || "true") === "true";	
	Moghunter.scStatus_ra_mdf_value = Number(Moghunter.parameters['魔法防御比例值'] || 1);	
	Moghunter.scStatus_ra_agi = String(Moghunter.parameters['是否绘制敏捷度'] || "true") === "true";	
	Moghunter.scStatus_ra_agi_value = Number(Moghunter.parameters['敏捷度比例值'] || 2);	
	Moghunter.scStatus_ra_luk = String(Moghunter.parameters['是否绘制幸运值'] || "true") === "true";	
	Moghunter.scStatus_ra_luk_value = Number(Moghunter.parameters['幸运比例值'] || 2);	
	Moghunter.scStatus_ra_max = String(Moghunter.parameters['是否固定比例最大值'] || "false") === "true";	
	Moghunter.scStatus_ra_max_value = Number(Moghunter.parameters['比例最大值'] || 999);	
	
	Moghunter.src_status_layout = String(Moghunter.parameters['资源-整体布局']);
	Moghunter.src_status_radial = String(Moghunter.parameters['资源-雷达图']);
	Moghunter.src_status_hp_meter = String(Moghunter.parameters['资源-生命条']);
	Moghunter.src_status_mp_meter = String(Moghunter.parameters['资源-魔法条']);
	Moghunter.src_status_tp_meter = String(Moghunter.parameters['资源-怒气条']);
	
	Moghunter.menu_status_bust_list_length = 60;
	Moghunter.menu_status_bust_list = {};
	for (var i = 1; i <= Moghunter.menu_status_bust_list_length ; i++ ) {
		Moghunter.menu_status_bust_list[i] = Moghunter.parameters['角色前视图-' + String(i) ];
	};
	
//=============================================================================
// ** ImageManager
//=============================================================================

//==============================
// * Status
//==============================
ImageManager.loadMenusstatus = function(filename) {
    return this.loadBitmap('img/Menu__status/', filename, 0, true);
};
ImageManager.loadMenusActorFace = function(filename) {
    return this.loadBitmap('img/Menu__actorFaces/', filename, 0, true);
};

//=============================================================================
// ** Scene Status
//=============================================================================

//==============================
// * create Background
//==============================
var _mog_scStatus_createBackground = Scene_Status.prototype.createBackground;
Scene_Status.prototype.createBackground = function() {
	_mog_scStatus_createBackground.call(this);
	this._field = new Sprite();
	this.addChild(this._field);	
};

//==============================
// * Create
//==============================
var _mog_scStatusM_create = Scene_Status.prototype.create;
Scene_Status.prototype.create = function() {
	_mog_scStatusM_create.call(this);
	this.createBust();
	this.createLayout();
	this.createStates();
	this.createMeters();
	this.resetPosition();
};

//==============================
// * Create Meters
//==============================
Scene_Status.prototype.createMeters = function() {
    this._meters = new MetersStatusM(this._actor);
	this._field.addChild(this._meters);
};

//==============================
// * Create States
//==============================
Scene_Status.prototype.createStates = function() {
	this._states_data = [0,0,0];
	this._state_icon = new Sprite(ImageManager.loadSystem("IconSet"));
	this._state_icon.x = Moghunter.scStatus_StatesX;
	this._state_icon.y = Moghunter.scStatus_StatesY;
	this._state_iconOrg = [this._state_icon.x,this._state_icon.y];
	this._state_icon.visible = false;
	this.addChild(this._state_icon);
	this.refresh_states();	
};

//==============================
// * Create States
//==============================
Scene_Status.prototype.refresh_states = function() {
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
Scene_Status.prototype.update_states = function() {
	this._states_data[2] += 1;
	if (this.need_refresh_states()) {this.refresh_states();};
	this._state_icon.x = this._state_iconOrg[0] + this._statusWindow.x;
	this._state_icon.y = this._state_iconOrg[1] + this._statusWindow.y;
	this._state_icon.opacity = this._statusWindow.contentsOpacity;
};	

//==============================
// * Update Meters
//==============================
Scene_Status.prototype.updateMeters = function() {	
	this._meters.x = this._statusWindow.x;
	this._meters.y =  this._statusWindow.y;
	this._meters.opacity = this._statusWindow.contentsOpacity;	
};

//==============================
// * Need Refresh States
//==============================
Scene_Status.prototype.need_refresh_states = function() {
	if (this._states_data[2] > 60) {return true};
	return false;
};	

//==============================
// * On Actor Change
//==============================
var _mog_scsStatusM_onActorChange = Scene_Status.prototype.onActorChange;
Scene_Status.prototype.onActorChange = function() {
	_mog_scsStatusM_onActorChange.call(this);
	this._field.removeChild(this._meters);
    this._meters = new MetersStatusM(this._actor);	//刷新雷达图
	this._field.addChild(this._meters);
    this.resetPosition();
};

//==============================
// * reset Position
//==============================
Scene_Status.prototype.resetPosition = function() {
    this.refreshBust();
	this._statusWindow.contentsOpacity = 0;
	this._statusWindow.x = 100;
	this._layout.opacity = 0;
	this._layout.x = -100;
	this._meters.setActor(this._actor);
	this.refresh_states();
	
};

//==============================
// * Create Layout
//==============================
Scene_Status.prototype.createLayout = function() {
	this._layout = new Sprite(ImageManager.loadMenusstatus(Moghunter.src_status_layout ));
	this._field.addChild(this._layout);
};

//==============================
// * Create Bust
//==============================
Scene_Status.prototype.createBust = function() {
	this._bust = new Sprite();
	//this._bust.anchor.x = 0.5;
	this._bust.x = Moghunter.scStatus_BustX;
	this._bust.y = Moghunter.scStatus_BustY;
	this._bust.org = [this._bust.x,this._bust.y]
	this._field.addChild(this._bust);
};

//==============================
// * refresh Bust
//==============================
Scene_Status.prototype.refreshBust = function() {
     this._bust.bitmap = ImageManager.loadMenusActorFace(Moghunter.menu_status_bust_list[this._actor._actorId]);
	 this._bust.opacity = 0;
};

//==============================
// * update Slide
//==============================
Scene_Status.prototype.updateSlide = function() {
	this._statusWindow.opacity = 0;
	this._statusWindow.contentsOpacity += 5;
	if (this._statusWindow.x > 0) {
		this._statusWindow.x -= 5;
		if (this._statusWindow.x <= 0) {this._statusWindow.x = 0};
	};
	this._layout.opacity += 5;
	if (this._layout.x < 0) {
		this._layout.x += 5;
		if (this._layout.x > 0) {this._layout.x = 0};
	};
	this._bust.x = this._bust.org[0]
	this._bust.opacity += 5;
	var by = (Graphics.boxHeight - this._bust.height) + this._bust.org[1];
	if (this._bust.y > by) {
		this._bust.y -= 20;
		if (this._bust.y < by) {this._bust.y = by};
	};
};

//==============================
// * Update
//==============================
var _mog_scStatatusM_update = Scene_Status.prototype.update;
Scene_Status.prototype.update = function() {
	_mog_scStatatusM_update.call(this);
    this.updateSlide();
	if (this._state_icon) {this.update_states()};
	if (this._meters) {this.updateMeters()};
};

//=============================================================================
// ** Window Status
//=============================================================================

//==============================
// * refresh
//==============================
Window_Status.prototype.refresh = function() {
    this.contents.clear();
    if (this._actor) {
		this.contents.fontSize = 24;
        this.drawText(this._actor.name(), Moghunter.scStatus_ActorNameX, Moghunter.scStatus_ActorNameY,120,"center");
		this.drawText(this._actor.level, Moghunter.scStatus_LevelX, Moghunter.scStatus_LevelY,100,"center");	
		this.drawText(this._actor.currentExp(), Moghunter.scStatus_ExpX, Moghunter.scStatus_ExpY,100,"center");
	    var nexp = this._actor.nextRequiredExp();
        if (this._actor.isMaxLevel()) {nexp = '-------'};	
		this.drawText(nexp, Moghunter.scStatus_NExpX, Moghunter.scStatus_NExpY,100,"center");	
		this.contents.fontSize = 22;
		this.drawText(this._actor.hp + " / " + this._actor.mhp, Moghunter.scStatus_HPNumberX, Moghunter.scStatus_HPNumberY,100,"right");
		this.drawText(this._actor.mp + " / " + this._actor.mmp, Moghunter.scStatus_MPNumberX , Moghunter.scStatus_MPNumberY,100,"right");
		this.drawText(this._actor.tp, Moghunter.scStatus_TPNumberX, Moghunter.scStatus_TPNumberY,100,"right");
		this.drawText(this._actor.atk, Moghunter.scStatus_ATKNumberX, Moghunter.scStatus_ATKNumberY,100,"right");
		this.drawText(this._actor.mat, Moghunter.scStatus_MATNumberX, Moghunter.scStatus_MATNumberY,100,"right");
		this.drawText(this._actor.agi, Moghunter.scStatus_AGINumberX, Moghunter.scStatus_AGINumberY,100,"right");
		this.drawText(this._actor.def, Moghunter.scStatus_DEFNumberX, Moghunter.scStatus_DEFNumberY,100,"right");
		this.drawText(this._actor.mdf, Moghunter.scStatus_MDFNumberX, Moghunter.scStatus_MDFNumberY,100,"right");
		this.drawText(this._actor.luk, Moghunter.scStatus_LUKNumberX, Moghunter.scStatus_LUKNumberY,100,"right");
		var temp_equips = this._actor.equips(); 
		if(temp_equips[0]){ this.drawItemName(temp_equips[0], Moghunter.scStatus_Equip1_X, Moghunter.scStatus_Equip1_Y);}
		if(temp_equips[1]){ this.drawItemName(temp_equips[1], Moghunter.scStatus_Equip2_X, Moghunter.scStatus_Equip2_Y);}
		if(temp_equips[2]){ this.drawItemName(temp_equips[2], Moghunter.scStatus_Equip3_X, Moghunter.scStatus_Equip3_Y);}
		if(temp_equips[3]){ this.drawItemName(temp_equips[3], Moghunter.scStatus_Equip4_X, Moghunter.scStatus_Equip4_Y);}
		if(temp_equips[4]){ this.drawItemName(temp_equips[4], Moghunter.scStatus_Equip5_X, Moghunter.scStatus_Equip5_Y);}
		if(temp_equips[5]){ this.drawItemName(temp_equips[5], Moghunter.scStatus_Equip6_X, Moghunter.scStatus_Equip6_Y);}
		if(temp_equips[6]){ this.drawItemName(temp_equips[6], Moghunter.scStatus_Equip7_X, Moghunter.scStatus_Equip7_Y);}
		if(temp_equips[7]){ this.drawItemName(temp_equips[7], Moghunter.scStatus_Equip8_X, Moghunter.scStatus_Equip8_Y);}
		if(temp_equips[8]){ this.drawItemName(temp_equips[8], Moghunter.scStatus_Equip9_X, Moghunter.scStatus_Equip9_Y);}
		if(temp_equips[9]){ this.drawItemName(temp_equips[9], Moghunter.scStatus_Equip10_X, Moghunter.scStatus_Equip10_Y);}
		if(temp_equips[10]){ this.drawItemName(temp_equips[10], Moghunter.scStatus_Equip11_X, Moghunter.scStatus_Equip11_Y);}
		if(temp_equips[11]){ this.drawItemName(temp_equips[11], Moghunter.scStatus_Equip12_X, Moghunter.scStatus_Equip12_Y);}
		this.drawActorClass(this._actor, Moghunter.scStatus_ClassX, Moghunter.scStatus_ClassY);
		this.drawTextEx(this._actor.profile(), Moghunter.scStatus_ProfileX, Moghunter.scStatus_ProfileY);	
    };
};

//=============================================================================
// * Meters Status M
//=============================================================================
function MetersStatusM() {
    this.initialize.apply(this, arguments);
};

MetersStatusM.prototype = Object.create(Sprite.prototype);
MetersStatusM.prototype.constructor = MetersStatusM;

//==============================
// * Initialize
//==============================
MetersStatusM.prototype.initialize = function(actor) {
    Sprite.prototype.initialize.call(this);	
	this.loadBitmaps();
    this._actor = actor;	
};

//==============================
// * Set Actor
//==============================
MetersStatusM.prototype.setActor = function(actor) {
    this._actor = actor;
	this.update();
};


//==============================
// * Load Bitmaps
//==============================
MetersStatusM.prototype.loadBitmaps = function() {
    this._meterImg1 = ImageManager.loadMenusstatus(Moghunter.src_status_hp_meter);
	this._meterImg2 = ImageManager.loadMenusstatus(Moghunter.src_status_mp_meter);
	this._meterImg3 = ImageManager.loadMenusstatus(Moghunter.src_status_tp_meter);
};

//==============================
// * 绘制多边形
//==============================
Bitmap.prototype.fillRadialPolygonKms = function(center, radius, points, color1, color2)
{
    if (!(points instanceof Array) || points.length <= 0)
    {
        return;
    }

    var edgeColor = color2 || color1;
    var context = this._context;
    context.save();

    var grad = context.createRadialGradient(
        center.x, center.y, 1,
        center.x, center.y, radius);
    grad.addColorStop(0, color1);
    grad.addColorStop(1, edgeColor);

    context.fillStyle = grad;
    context.beginPath();
    context.moveTo(points[0].x, points[0].y);
    for (var i = 1; i < points.length; i++)
    {
        context.lineTo(points[i].x, points[i].y);
    }
    context.closePath();
    context.fill();
    context.restore();
    this._setDirty();
};

//==============================
// * create Meters
//==============================
MetersStatusM.prototype.createMeters = function() {
    this._meters = [];
	this._metersAni = [];
	for (var i = 0; i < 3; i++) {
		 if (i == 0) {
		    this._meters[i] = new Sprite(this._meterImg1);
	     } else if (i == 1){
		    this._meters[i] = new Sprite(this._meterImg2);
	     } else if (i == 2){
		    this._meters[i] = new Sprite(this._meterImg3);
	     };
		 this._metersAni[i] = 0;
		 this.addChild(this._meters[i]);
	};
	
	//雷达图
	this.chart_x = Moghunter.scStatus_ra_pos_x;
	this.chart_y = Moghunter.scStatus_ra_pos_y;
	this.chart_size = Moghunter.scStatus_ra_size;
	this.param_list = [];
	if(Moghunter.scStatus_ra_hp){
		this.param_list.push(this._actor.mhp/Moghunter.scStatus_ra_hp_value);
	}
	if(Moghunter.scStatus_ra_mp){
		this.param_list.push(this._actor.mmp/Moghunter.scStatus_ra_mp_value);
	}
	if(Moghunter.scStatus_ra_atk){
		this.param_list.push(this._actor.atk/Moghunter.scStatus_ra_atk_value);
	}
	if(Moghunter.scStatus_ra_def){
		this.param_list.push(this._actor.def/Moghunter.scStatus_ra_def_value);
	}
	if(Moghunter.scStatus_ra_mat){
		this.param_list.push(this._actor.mat/Moghunter.scStatus_ra_mat_value);
	}
	if(Moghunter.scStatus_ra_mdf){
		this.param_list.push(this._actor.mdf/Moghunter.scStatus_ra_mdf_value);
	}
	if(Moghunter.scStatus_ra_agi){
		this.param_list.push(this._actor.agi/Moghunter.scStatus_ra_agi_value);
	}
	if(Moghunter.scStatus_ra_luk){
		this.param_list.push(this._actor.luk/Moghunter.scStatus_ra_luk_value);
	}
	
	if( Moghunter.scStatus_ra_max ){
		this.max_pra = Moghunter.scStatus_ra_max_value;
	}else{
		this.max_pra = Math.max.apply(Math,this.param_list);
	}
	
    var points = [];
	for(var i=0; i< this.param_list.length ;i++){
		
        var chartRadius = this.chart_size * this.param_list[i] / this.max_pra ;
        var angle = i * Math.PI * 2 / this.param_list.length - Math.PI / 2;
        var cos = Math.cos(angle);
        var sin = Math.sin(angle);
        var point = new Point(
            this.chart_x + cos * chartRadius,
            this.chart_y + sin * chartRadius);
        points.push(point);
	}
	this._radial_map = new Sprite();
	this._radial_map.bitmap = new Bitmap(Graphics.boxWidth, Graphics.boxHeight);
    this._radial_map.bitmap.fillRadialPolygonKms(
        new Point(this.chart_x,this.chart_y),
        this.chart_size,
        points,
        Moghunter.scStatus_ra_color_1,
        Moghunter.scStatus_ra_color_2);
		
	//雷达图背景
	this._radial_map_back = new Sprite(ImageManager.loadMenusstatus(Moghunter.src_status_radial));
	this._radial_map_back.anchor.x = 0.5;
	this._radial_map_back.anchor.y = 0.5;
	this._radial_map_back.x = this.chart_x;
	this._radial_map_back.y = this.chart_y;
	this._radial_map_back.opacity = 0;
	this._radial_map.opacity = 0;
	this.addChild(this._radial_map_back);
	this.addChild(this._radial_map);
};

//==============================
// * update Meters
//==============================
MetersStatusM.prototype.updateMeters = function() {
	for (var i = 0; i < this._meters.length; i++) {
		 var par1 = this._actor.hp;
		 var par2 = this._actor.mhp;
		 if (i === 0) {
		    var x = Moghunter.scStatus_MeterHPX;
			var y = Moghunter.scStatus_MeterHPY;
		    par1 = this._actor.hp;
		    par2 = this._actor.mhp;			
		 } else if (i === 1) {
		    var x = Moghunter.scStatus_MeterMPX;
			var y = Moghunter.scStatus_MeterMPY;
		    par1 = this._actor.mp;
		    par2 = this._actor.mmp;					
		 } else if (i === 2) {
		    var x = Moghunter.scStatus_MeterTPX;
			var y = Moghunter.scStatus_MeterTPY;
		    par1 = this._actor.tp;
		    par2 = 100;					
		 } /*else if (i === 3) {
		    var x = Moghunter.scStatus_MeterATKX;
			var y = Moghunter.scStatus_MeterATKY;
		    par1 = this._actor.atk;
		    par2 = this._actor.paramMax();				
		 } else if (i === 4) {
		    var x = Moghunter.scStatus_MeterMATX;
			var y = Moghunter.scStatus_MeterMATY;
		    par1 = this._actor.mat;
		    par2 = this._actor.paramMax();			
		 } else if (i === 5) {
		    var x = Moghunter.scStatus_MeterAGIX;
			var y = Moghunter.scStatus_MeterAGIY;
		    par1 = this._actor.agi;
		    par2 = this._actor.paramMax();				
		 } else if (i === 6) {
		    var x = Moghunter.scStatus_MeterDEFX;
			var y = Moghunter.scStatus_MeterDEFY;
		    par1 = this._actor.def;
		    par2 = this._actor.paramMax();				
		 } else if (i === 7) {
		    var x = Moghunter.scStatus_MeterMDFX;
			var y = Moghunter.scStatus_MeterMDFY;	
		    par1 = this._actor.mdf;
		    par2 = this._actor.paramMax();				
		 } else  {
		    var x = Moghunter.scStatus_MeterLUKX;
			var y = Moghunter.scStatus_MeterLUKY;
		    par1 = this._actor.luk;
		    par2 = this._actor.paramMax();				
		 };			 */
		 this._meters[i].x = x;
		 this._meters[i].y = y;		 
		 this.updateFlow(this._meters[i],par1,par2,i);
	};
	this._radial_map_back.opacity += 10;
	this._radial_map.opacity += 10;
};

//==============================
// * update Flow
//==============================
MetersStatusM.prototype.updateFlow = function(sprite,par1,par2,i) {
    var cw = sprite.bitmap.width / 3;
	var ch = sprite.bitmap.height;
	var cw2 = cw * 2;
	var wd = cw * par1 / par2;
	sprite.setFrame(this._metersAni[i],0,wd,ch);
	this._metersAni[i] += 4;
	if (this._metersAni[i] > cw2) {this._metersAni[i] = 0};
};

//==============================
// * Update
//==============================
MetersStatusM.prototype.update = function() {
    Sprite.prototype.update.call(this);	
    if (!this._meters && this._meterImg1.isReady()) {this.createMeters()};
    if (this._meters && this._actor) {this.updateMeters()};
};

