//=============================================================================
// MOG_TimeSystem.js
//=============================================================================

/*:
 * @plugindesc (v1.6)[v1.3]  地图UI - 时间系统
 * @author Moghunter （拾贝猫、Drill_up翻译）
 *
 * @param ---系统---
 * @desc
 *
 * @param 是否默认运行
 * @parent ---系统---
 * @type boolean
 * @on 运行
 * @off 不运行
 * @desc true - 运行，false - 不运行
 * 游戏开始后默认运行系统时间。
 * @default true
 *
 * @param 执行事件时是否停止
 * @parent ---系统---
 * @type boolean
 * @on 停止
 * @off 不停止
 * @desc true - 停止，false - 不停止
 * 只要不是并行处理的事件运行就停止时间流动。
 * @default true  
 *
 * @param 对话时是否停止
 * @parent ---系统---
 * @type boolean
 * @on 停止
 * @off 不停止
 * @desc true - 停止，false - 不停止
 * 对话是包含于执行事件的，如果执行事件停止，则对话也会停止时间。
 * @default true
 *
 * @param 时间流动速度
 * @parent ---系统---
 * @type number
 * @min 1
 * @max 3000
 * @desc 单位帧。设置60，即实际1秒相当于游戏的60帧（1秒）。
 * 设置120，即实际1秒相当于游戏的120帧（2秒）。最大3000。
 * @default 120
 *
 * @param 是否使用色调变换
 * @parent ---系统---
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * 不同的时间，游戏画面色调会变换。
 * @default true   
 *
 * @param 色调变换速度
 * @parent ---系统---
 * @desc 游戏画面色调变换的时间，单位帧。（1秒60帧）
 * @default 160
 *
 * @param ---用语---
 * @desc
 *
 * @param 星期名
 * @parent ---用语---
 * @type text[]
 * @desc 菜单中，显示表示星期含义的文字。
 * 顺序为：周日,周一,周二,周三,周四,周五,周六。
 * @default ["周日","周一","周二","周三","周四","周五","周六"]
 *
 * @param 季节名
 * @parent ---用语---
 * @type text[]
 * @desc 菜单中，显示表示季节含义的文字。
 * @default ["春","夏","秋","冬"]
 *
 * @param 月份名
 * @parent ---用语---
 * @type text[]
 * @desc 菜单中，显示表示月份含义的文字。
 * @default ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]
 *
 * @param 用语-时间
 * @parent ---用语---
 * @desc 菜单中，显示表示"时间"含义的文字。
 * @default 时间
 *
 * @param 用语-星期
 * @parent ---用语---
 * @desc 菜单中，显示表示"星期"含义的文字。
 * @default 星期
 *
 * @param 用语-季节
 * @parent ---用语---
 * @desc 菜单中，显示表示"季节"含义的文字。
 * @default 季节
 *
 * @param 用语-日
 * @parent ---用语---
 * @desc 菜单中，显示表示"日期"含义的文字。
 * @default 日
 *
 * @param 用语-月
 * @parent ---用语---
 * @desc 菜单中，显示表示"月"含义的文字。
 * @default 月
 *
 * @param 用语-年
 * @parent ---用语---
 * @desc 菜单中，显示表示"年"含义的文字。
 * @default 年
 *
 * @param 用语-游戏时长
 * @parent ---用语---
 * @desc 菜单中，显示表示"游戏时长"玩家一共花了多少时间的文字。
 * @default 游戏时长
 *
 * @param ---触发开关---
 * @desc
 *
 * @param 黎明开关
 * @parent ---触发开关---
 * @type switch
 * @desc 时间为 3:00-5:00 时，该开关一直处于on状态。
 * 其它时段为off状态。
 * @default 21
 *
 * @param 日出开关
 * @parent ---触发开关---
 * @type switch
 * @desc 时间为 6:00-8:00 时，该开关一直处于on状态。
 * 其它时段为off状态。
 * @default 22
 *
 * @param 日间开关
 * @parent ---触发开关---
 * @type switch
 * @desc 时间为 9:00-14:00 时，该开关一直处于on状态。
 * 其它时段为off状态。
 * @default 23
 *
 * @param 日落开关
 * @parent ---触发开关---
 * @type switch
 * @desc 时间为 15:00-17:00 时，该开关一直处于on状态。
 * 其它时段为off状态。
 * @default 24 
 *
 * @param 黄昏开关
 * @parent ---触发开关---
 * @type switch
 * @desc 时间为 18:00-20:00 时，该开关一直处于on状态。
 * 其它时段为off状态。
 * @default 25 
 *
 * @param 午夜开关
 * @parent ---触发开关---
 * @type switch
 * @desc 时间为 21:00-2:00 时，该开关一直处于on状态。
 * 其它时段为off状态。
 * @default 26
 *
 * @param 白天开关
 * @parent ---触发开关---
 * @type switch
 * @desc 时间为 9:00-18:00 时，该开关一直处于on状态。
 * 其它时段为off状态。
 * @default 27
 *
 * @param 黑夜开关
 * @parent ---触发开关---
 * @type switch
 * @desc 时间为 21:00-6:00 时，该开关一直处于on状态。
 * 其它时段为off状态。
 * @default 28
 * 
 * @param 星期开关
 * @parent ---触发开关---
 * @type switch[]
 * @desc 当前时间为第几个星期时，开关处于on状态。
 * 顺序为：周日,周一,周二,周三,周四,周五,周六。 
 * @default ["29","30","31","32","33","34","35"]
 *
 * @param 月份开关
 * @parent ---触发开关---
 * @type switch[]
 * @desc 当前时间为第几个月时，开关处于on状态。
 * @default ["40","41","42","43","44","45","46","47","48","49","50","51"]
 *
 * @param 季节开关
 * @parent ---触发开关---
 * @type switch[]
 * @desc 当前时间为哪一个季节时，开关处于on状态。
 * @default ["36","37","38","39"]
 *
 * @param ---触发变量---
 * @desc
 *
 * @param 时
 * @parent ---触发变量---
 * @type variable
 * @desc 设置的变量将与当前游戏的小时实时变化。
 * @default 13
 *
 * @param 分
 * @parent ---触发变量---
 * @type variable
 * @desc 设置的变量将与当前游戏的分钟实时变化。
 * @default 14
 *
 * @param 秒
 * @parent ---触发变量---
 * @type variable
 * @desc 设置的变量将与当前游戏的秒实时变化。
 * @default 15
 *
 * @param 年
 * @parent ---触发变量---
 * @type variable
 * @desc 设置的变量将与当前游戏的年实时变化。
 * @default 16
 *
 * @param 月
 * @parent ---触发变量---
 * @type variable
 * @desc 设置的变量将与当前游戏的月实时变化。
 * @default 17
 *
 * @param 日
 * @parent ---触发变量---
 * @type variable
 * @desc 设置的变量将与当前游戏的日期实时变化。
 * @default 18
 *
 * @param 星期
 * @parent ---触发变量---
 * @type variable
 * @desc 设置的变量将与当前游戏的星期实时变化。
 * @default 19
 *
 * @param 季节
 * @parent ---触发变量---
 * @type variable
 * @desc 设置的变量将与当前游戏的季节实时变化。
 * @default 20
 *
 * @param ---时间最大值---
 * @desc
 *
 * @param 最大分钟数
 * @parent ---时间最大值---
 * @type number
 * @min 1
 * @desc 你可以设置一小时有多少分钟。
 * @default 60
 *
 * @param 最大小时数
 * @parent ---时间最大值---
 * @type number
 * @min 1
 * @desc 你可以设置一天有多少小时。
 * @default 24
 *
 * @param 最大日期数
 * @parent ---时间最大值---
 * @type number
 * @min 1
 * @desc 你可以设置一个月有多少天。
 * @default 30 
 *
 * @param 最大星期数
 * @parent ---时间最大值---
 * @type number
 * @min 1
 * @desc 你可以设置一个星期有多少天。
 * 如果设置为4，则只剩下周日，周一，周二，周三为一个星期了。
 * @default 7
 *
 * @param 最大月份数
 * @parent ---时间最大值---
 * @type number
 * @min 1
 * @desc 你可以设置一年有多少月。
 * @default 12
 *
 * @param 最大季节数
 * @parent ---时间最大值---
 * @type number
 * @min 1
 * @desc 你可以设置一年有多少个季节。
 * @default 4
 *
 * @param 季节月跨度
 * @parent ---时间最大值---
 * @type number
 * @min 1
 * @desc 设置多少个月为一个季节。
 * @default 3  
 * 
 * @param ---时间初始化---
 * @desc
 *
 * @param 初始分钟
 * @parent ---时间初始化---
 * @type number
 * @min 0
 * @desc 游戏开始时，分钟的值。
 * @default 0
 *
 * @param 初始小时
 * @parent ---时间初始化---
 * @type number
 * @min 0
 * @desc 游戏开始时，小时的值。
 * @default 12 
 *
 * @param 初始日期
 * @parent ---时间初始化---
 * @type number
 * @min 0
 * @desc 游戏开始时，日期的值。
 * @default 1
 *
 * @param 初始星期
 * @parent ---时间初始化---
 * @type number
 * @min 0
 * @desc 设置最初计算开始的星期数，从0年1月1日开始算，设置0表示这天星期一，设置1表示这天星期二。
 * @default 1
 *
 * @param 初始月份
 * @parent ---时间初始化---
 * @type number
 * @min 0
 * @desc 游戏开始时，月份的值。
 * @default 1
 *
 * @param 初始季节
 * @parent ---时间初始化---
 * @type number
 * @min 0
 * @desc 游戏开始时，季节的值。
 * @default 1  
 *
 * @param 初始年数
 * @parent ---时间初始化---
 * @type number
 * @min 0
 * @desc 游戏开始时，年的值。
 * @default 1 
 *
 * @param 是否根据日期自动算星期
 * @parent ---时间初始化---
 * @type boolean
 * @on 自动算
 * @off 按照初始星期来
 * @desc true - 自动算，false - 按照初始星期来。
 * 系统根据1年1月1日为周二开始，根据日期算出星期。
 * @default false
 * 
 * @param ---画面色调---
 * @desc
 *
 * @param 黎明色调
 * @parent ---画面色调---
 * @desc 时间为 3:00-5:00 时的画面色调。
 * 红,绿,蓝,透明度 (默认-60,-60,-60,0)
 * @default -60,-60,-60,0
 *
 * @param 日出色调
 * @parent ---画面色调---
 * @desc 时间为 6:00-8:00 时的画面色调。
 * 红,绿,蓝,透明度 (默认30,30,30,0)
 * @default 30,30,30,0
 *
 * @param 日落色调
 * @parent ---画面色调---
 * @desc 时间为 15:00-17:00 时的画面色调。
 * 红,绿,蓝,透明度 (默认36,-14,-14,0)
 * @default 36,-14,-14,0
 *
 * @param 黄昏色调
 * @parent ---画面色调---
 * @desc 时间为 18:00-20:00 时的画面色调。
 * 红,绿,蓝,透明度 (默认-60,-60,-60,0)
 * @default -60,-60,-60,0
 *
 * @param 午夜色调
 * @parent ---画面色调---
 * @desc 时间为 21:00-2:00 时默认的画面色调。
 * 红,绿,蓝,透明度 (默认-98,-98,-98,0)
 * @default -98,-98,-98,0
 *
 * @param 白天色调
 * @parent ---画面色调---
 * @desc 时间为 9:00-18:00 时默认的画面色调。
 * 红,绿,蓝,透明度 (默认0,0,0,0)
 * @default 0,0,0,0
 *
 * @param ---窗口---
 * @desc
 *
 * @param 是否使用am/pm模式
 * @parent ---窗口---
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * 9:00 = 9:00am ，17:00 = 5:00pm 。
 * @default true  
 *
 * @param 窗口是否在地图上显示
 * @parent ---窗口---
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true
 *
 * @param 窗口是否在菜单上显示
 * @parent ---窗口---
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true 
 *
 * @param 平移-地图窗口 X
 * @parent ---窗口---
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 576
 *
 * @param 平移-地图窗口 Y
 * @parent ---窗口---
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 0
 *
 * @param 平移-菜单窗口 X
 * @parent ---窗口---
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 0
 *
 * @param 平移-菜单窗口 Y
 * @parent ---窗口---
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 324
 *
 * @help  
 * =============================================================================
 * +++ MOG Time System (v1.6) +++
 * By Moghunter 
 * https://mogplugins.wordpress.com/
 * =============================================================================
 * 时间系统可以构建虚拟的游戏时钟，并且记录玩家玩游戏的时长。
 *
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.插件的作用域：地图界面、战斗界面、菜单界面。
 *   该插件为一个实时系统，并在菜单界面会显示一个时间窗口。
 *   主要作用于地图界面。
 * 2.时间系统使得游戏能够表现出白天黑夜、日出日落效果。
 * 3.时间系统关联了变量和开关，你可以设置一个只在周一开放的商店，周末才出现的
 *   商贩，或者野外才出没的怪兽，一个月后突然袭击的boss等。
 * 注1 - 修改屏幕色调的函数将被该插件占用，你无法使用那个函数修改画面色调。
 * 注2 - 你可以设置时间数值的最大值，比如一年只有四个月，每个月一个季节。
 * 注3 - 日期的计算是基于整的年/月/日
 * 注4 - 菜单里面的窗口是固定大小的，若挤在一起没地方放，那么窗口会被变透明。
 * 注5 - 最初的日期为：0年1月1日，星期一，这一天的总天数为1。
 *       1年1月1日，星期二，这一天的总数为373。(每个月31天)
 *
 * -----------------------------------------------------------------------------
 * ----时间段设定
 * 黎明：  3:00  - 5:59       日出：  6:00  - 8:59
 * 日间：  9:00  - 14:59      日落：  15:00 - 17:59
 * 黄昏：  18:00 - 20:59      午夜：  21:00 - 2:59
 * 
 * 白天：  9:00  - 17:59      黑夜：  21:00 - 5:59
 *
 * -----------------------------------------------------------------------------
 * ----可选设定
 * 你可以在某个地图上的控制时间，在其 地图注释 中输入下面关键字：
 *
 * 地图注释（停用时间）：<Disable Time System>
 * 地图注释（停用色调）：<Disable Tint Screen>
 *
 * 你可以通过插件指令控制时间：
 *
 * 插件指令（显示窗口）：show_clock
 * 插件指令（隐藏窗口）：hide_clock
 *
 * 插件指令（恢复时间）：enable_time
 * 插件指令（停用时间）：disable_time
 * 
 *
 * 你可以使用脚本来对时间进行控制：
 *
 * 脚本：$gameSystem.time_system(true)
 *       恢复时间
 * 脚本：$gameSystem.time_system(false)
 *       停用时间
 * 脚本：$gameSystem.tint_screen(true) 
 *       恢复色调变换
 * 脚本：$gameSystem.tint_screen(false) 
 *       停用色调变换
 * 脚本：$gameSystem.record_tone
 *       保存当前的色调
 * 脚本：$gameSystem.restore_tone
 *       恢复保存的色调
 * 脚本：$gameSystem.set_time_speed(240)
 *       设置时间速度为240，实际1秒等于游戏中的4秒。（1秒60帧）
 * 脚本：$gameSystem.set_minute(20)
 *       设置当前的分钟数值为20
 * 脚本：$gameSystem.set_hour(6)
 *       设置当前的小时数值为6
 * 脚本：$gameSystem.set_day(15)
 *       设置当前的日期数值为15
 * 脚本：$gameSystem.set_month(3)
 *       设置当前的月份为3
 * 脚本：$gameSystem.set_year(2)
 *       设置当前的年为2
 * 脚本：$gameSystem.set_season(4)
 *       设置当前的季节为4（冬季）
 * 脚本：$gameSystem.add_minute(10)
 *       当前的分钟数 + 10
 * 脚本：$gameSystem.add_hour(2)
 *       当前的小时数 + 2
 * 脚本：$gameSystem.add_day(1)
 *       当前的日期 + 1
 * 脚本：$gameSystem.add_month(1)
 *       当前的月份 + 1
 * 脚本：$gameSystem.add_year(1)
 *       当前的年 + 1
 * 脚本：$gameSystem.add_season(1) 
 *       当前的季节 + 1
 *
 * -----------------------------------------------------------------------------
 * ----关于drill_up优化
 * [v1.1]
 * 修复了设置初始星期的问题，以及最初的设定时间。
 * [v1.2]
 * 修复了$gameSystem.add_minute时，分钟+1，小时却不增加的bug。
 * [v1.3]
 * 修改了插件分类。
 *
 */
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//插件记录：
//		mog对于数组，都是通过先用objects获取，再通过函数转层数组。
//		比如day_week_names，这里就会有很多不同的地方。（检查的mog修复更新了的地方会比较麻烦）
//		与mog1.6版本比较，下列函数差异比较大：
//			Game_System.prototype.setup_name_tm	
//			Game_System.prototype.setup_variable_tm
//		初始星期的问题在这个函数里改了一行：
//			Game_System.prototype.set_day_week
//		分钟+1满时不加小时问题：
//			Game_System.prototype.add_minute
//			（避开牵涉到check_max_time函数，那个是mog控制实时变化的量）

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_TimeSystem = true;
　　var Moghunter = Moghunter || {}; 

    // MAIN
  　Moghunter.parameters = PluginManager.parameters('MOG_TimeSystem');
	Moghunter.time_speed = Number(Moghunter.parameters['时间流动速度'] || 120);
	Moghunter.day_phase_trspd = Number(Moghunter.parameters['色调变换速度'] || 120);
	Moghunter.time_active_mode = String(Moghunter.parameters['是否默认运行'] || true);
	Moghunter.time_tint_mode = String(Moghunter.parameters['是否使用色调变换'] || true);
	Moghunter.time_stop_message = String(Moghunter.parameters['对话时是否停止'] || true);
	Moghunter.time_stop_interpreter = String(Moghunter.parameters['执行事件时是否停止'] || true);
	
	// VARIABLES
	Moghunter.sec_variableId = Number(Moghunter.parameters['秒'] || 15);
	Moghunter.min_variableId = Number(Moghunter.parameters['分'] || 14);
	Moghunter.hour_variableId = Number(Moghunter.parameters['时'] || 13);
	Moghunter.day_variableId = Number(Moghunter.parameters['日'] || 18);
	Moghunter.day_week_variableId = Number(Moghunter.parameters['星期'] || 19);
	Moghunter.month_variableId = Number(Moghunter.parameters['月'] || 17);
	Moghunter.season_variableId = Number(Moghunter.parameters['季节'] || 20);
	Moghunter.year_variableId = Number(Moghunter.parameters['年'] || 16);	
	// SWITCHES
	Moghunter.dawn_switchId = Number(Moghunter.parameters['黎明开关'] || 21);
	Moghunter.sunrise_switchId = Number(Moghunter.parameters['日出开关'] || 22);
	Moghunter.day_switchId = Number(Moghunter.parameters['日间开关'] || 23);
	Moghunter.sunset_switchId = Number(Moghunter.parameters['日落开关'] || 24);
    Moghunter.dusk_switchId = Number(Moghunter.parameters['黄昏开关'] || 25);
	Moghunter.night_switchId = Number(Moghunter.parameters['午夜开关'] || 26);	
    Moghunter.day_phase_switchId = Number(Moghunter.parameters['白天开关'] || 27);
	Moghunter.night_phase_switchId = Number(Moghunter.parameters['黑夜开关'] || 28);	
	if( Moghunter.parameters['星期开关'] != "" ){
		Moghunter.day_week_switches = JSON.parse(Moghunter.parameters['星期开关']);
	}else{
		Moghunter.day_week_switches = ["29","30","31","32","33","34","35"] ;
	}
	if( Moghunter.parameters['月份开关'] != "" ){
		Moghunter.month_switches = JSON.parse(Moghunter.parameters['月份开关']);
	}else{
		Moghunter.month_switches = ["40","41","42","43","44","45","46","47","48","49","50","51"] ;
	}
	if( Moghunter.parameters['季节开关'] != "" ){
		Moghunter.season_switches = JSON.parse(Moghunter.parameters['季节开关']);
	}else{
		Moghunter.season_switches = ["36","37","38","39"] ;
	}
	// START	
	Moghunter.start_minute = Number(Moghunter.parameters['初始分钟'] || 0);
    Moghunter.start_hour = Number(Moghunter.parameters['初始小时'] || 12);
    Moghunter.start_day = Number(Moghunter.parameters['初始日期'] || 1);
	Moghunter.start_month = Number(Moghunter.parameters['初始月份'] || 1);
	Moghunter.start_year = Number(Moghunter.parameters['初始年数'] || 0);	
	Moghunter.start_day_week = Number(Moghunter.parameters['初始星期'] || 1);	
	Moghunter.start_season = Number(Moghunter.parameters['初始季节'] || 1);	
    // MAX	
	Moghunter.min_max = Number(Moghunter.parameters['最大分钟数'] || 60);
	Moghunter.hour_max = Number(Moghunter.parameters['最大小时数'] || 24);
	Moghunter.day_max = Number(Moghunter.parameters['最大日期数'] || 30);
	Moghunter.day_week_max = Number(Moghunter.parameters['最大星期数'] || 7);
	Moghunter.month_max = Number(Moghunter.parameters['最大月份数'] || 12);
	Moghunter.season_max = Number(Moghunter.parameters['最大季节数'] || 4);
	Moghunter.season_interval = Number(Moghunter.parameters['季节月跨度'] || 3);
	// WORDS
	if( Moghunter.parameters['星期名'] != "" ){
		Moghunter.day_week_names = JSON.parse(Moghunter.parameters['星期名']);
	}else{
		Moghunter.day_week_names = ["周日","周一","周二","周三","周四","周五","周六"] ;
	}
	if( Moghunter.parameters['月份名'] != "" ){
		Moghunter.month_names = JSON.parse(Moghunter.parameters['月份名']);
	}else{
		Moghunter.month_names = ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"] ;
	}
	if( Moghunter.parameters['季节名'] != "" ){
		Moghunter.season_names = JSON.parse(Moghunter.parameters['季节名']);
	}else{
		Moghunter.season_names = ["春","夏","秋","冬"] ;
	}
	Moghunter.time_word = Object(Moghunter.parameters['用语-时间'] || "时间");
	Moghunter.day_word = Object(Moghunter.parameters['用语-日'] || "日");
	Moghunter.day_week_word = Object(Moghunter.parameters['用语-星期'] || "星期");
	Moghunter.month_word = Object(Moghunter.parameters['用语-月'] || "月");
	Moghunter.season_word = Object(Moghunter.parameters['用语-季节'] || "季节");
	Moghunter.year_word = Object(Moghunter.parameters['用语-年'] || "年");
	Moghunter.play_time_word = Object(Moghunter.parameters['用语-游戏时长'] || "游戏时长");
	// TONES
	Moghunter.sunset_tone = Object(Moghunter.parameters['日落色调'] || "");
	Moghunter.dusk_tone = Object(Moghunter.parameters['黄昏色调'] || "");
	Moghunter.night_tone = Object(Moghunter.parameters['午夜色调'] || "");
	Moghunter.dawn_tone = Object(Moghunter.parameters['黎明色调'] || "");
	Moghunter.sunrise_tone = Object(Moghunter.parameters['日出色调'] || "");
	Moghunter.day_tone = Object(Moghunter.parameters['白天色调'] || "");	
	// WINDOWS	
	Moghunter.display_pm_mode = String(Moghunter.parameters['是否使用am/pm模式'] || true);
	Moghunter.timeWindow_map = String(Moghunter.parameters['窗口是否在地图上显示'] || true);
	Moghunter.timeWindow_menu = String(Moghunter.parameters['窗口是否在菜单上显示'] || true);
    Moghunter.timeWindow_X = Number(Moghunter.parameters['平移-地图窗口 X'] || 576);
	Moghunter.timeWindow_Y = Number(Moghunter.parameters['平移-地图窗口 Y'] || 0);	
    Moghunter.timeWindow_menu_X = Number(Moghunter.parameters['平移-菜单窗口 X'] || 0);
	Moghunter.timeWindow_menu_Y = Number(Moghunter.parameters['平移-菜单窗口 Y'] || 324);
	
	
//=============================================================================
// ** Game_Interpreter
//=============================================================================	

//==============================
// * PluginCommand
//==============================
var _alias_mog_timeSystem_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_alias_mog_timeSystem_pluginCommand.call(this,command, args)
	if (command === "show_clock")  {$gameSystem._time_window_visible = true;};
	if (command === "hide_clock")  {$gameSystem._time_window_visible = false;};
	if (command === "enable_time")  {$gameSystem._time_sys_active = true;};
	if (command === "disable_time")  {$gameSystem._time_sys_active = false;};
	return true;
};
	
//=============================================================================
// ** Game Map
//=============================================================================

//==============================
// * Setup
//==============================
var _alias_mog_timesys_gmap_setup = Game_Map.prototype.setup;
Game_Map.prototype.setup = function(mapId) {
    _alias_mog_timesys_gmap_setup.call(this,mapId)	
	if ($gameSystem._time_data) {this.set_time_sys_map()};
};

//==============================
// * Set Time Sys Map
//==============================
Game_Map.prototype.set_time_sys_map = function(mapId) {	
	$gameSystem._time_data[3] = true;
	$gameSystem._time_data[4] = true;
	$gameScreen._tone = $gameSystem._tone_data;
	this._timesys_tintscreen = true;
    this.notetags().forEach(function(note) {
         if (note === "<Disable Time System>" || String(Moghunter.time_active_mode) != "true") {
			 $gameSystem._time_data[3] = false};
		 if (note === "<Disable Tint Screen>" || String(Moghunter.time_tint_mode) != "true") {
			 $gameScreen.startTint([0,0,0,0], 0); $gameSystem._time_data[4] = false; this._timesys_tintscreen = false;};
	},this);
	if (this._timesys_tintscreen) {$gameSystem.time_system_clear()	};
};

//==============================
// * Notetags
//==============================
Game_Map.prototype.notetags = function() {
	return $dataMap.note.split(/[\r\n]+/);
};

//=============================================================================
// ** Game Interpreter
//=============================================================================

//==============================
// * Command223
//==============================
var _alias_mog_timesys_ginter_command223 = Game_Interpreter.prototype.command223;
Game_Interpreter.prototype.command223 = function() {
	if ($gameMap._timesys_tintscreen) {return true};
    _alias_mog_timesys_ginter_command223.call(this);
	return true;
};

//=============================================================================
// ** Game Switches
//=============================================================================

//==============================
// * OnChange
//==============================
var _alias_mog_timesys_gswtc_onChange = Game_Switches.prototype.onChange
Game_Switches.prototype.onChange = function() {
    _alias_mog_timesys_gswtc_onChange.call(this);
	if ($gameSystem._time_data) {$gameSystem.set_base_time_phase();};
};

//=============================================================================
// ** Game Variables
//=============================================================================

//==============================
// * Set Value
//==============================
var _alias_mog_timesys_variables_setValue = Game_Variables.prototype.setValue
Game_Variables.prototype.setValue = function(variableId, value) {
	_alias_mog_timesys_variables_setValue.call(this,variableId, value);
    if ($gameSystem._time_data && this.is_time_variable(variableId)) {$gameSystem.refresh_time(0,variableId);$gameSystem.set_base_time_phase();};
};

//==============================
// * Is Time Variable
//==============================
Game_Variables.prototype.is_time_variable = function(variableId) {
	if (Moghunter.sec_variableId === variableId) {return true};
	if (Moghunter.min_variableId === variableId) {return true};
	if (Moghunter.hour_variableId === variableId) {return true};
	if (Moghunter.day_variableId === variableId) {return true};
	if (Moghunter.month_variableId === variableId) {return true};
	if (Moghunter.year_variableId === variableId) {return true};
	if (Moghunter.day_week_variableId === variableId) {return true};
	if (Moghunter.season_variableId === variableId) {return true};	
	return false;
};

//=============================================================================
// ** DataManager
//=============================================================================

//==============================
// * Setup New Game
//==============================
var _alias_mog_timesys_dtmag_setupNewGame =  DataManager.setupNewGame
DataManager.setupNewGame = function() {
	_alias_mog_timesys_dtmag_setupNewGame.call(this)
	$gameSystem.setup_time_system();
};

//=============================================================================
// ** Game System
//=============================================================================

//==============================
// * Setup Time System
//==============================
Game_System.prototype.setup_time_system = function() {	
    this._stop_time_message = false;
    this._stop_time_interpreter = false;
	this._time_window_visible = true;
	this._time_sys_active = true;
	if (String(Moghunter.time_stop_message) === "true") {this._stop_time_message = true};
	if (String(Moghunter.time_stop_interpreter) === "true") {this._stop_time_interpreter = true};
	this._old_play_time = this.playtime();
	this._refresh_window_time = false;
	this._time_data = [0,0,-1,true,true];
	this._time_data[0] = Math.min(Math.max(Moghunter.time_speed,1),3000);
	this._time_data[0] *= 2;
	this._time_data[5] = Math.min(Math.max(Moghunter.day_phase_trspd,10),999);
	this.setup_name_tm();
	this.setup_tone_tm();
	this.setup_max_tm();
    this.setup_variable_tm();
	this.setup_switch_tm();
    this.time_system_clear();
};

//==============================
// * Setup Name TM
//==============================
Game_System.prototype.setup_name_tm = function() {
	this._day_week_names = Moghunter.day_week_names;
	this._season_names = Moghunter.season_names;
	this._month_names = Moghunter.month_names;
};

//==============================
// * Setup Tone TM
//==============================
Game_System.prototype.setup_tone_tm = function() {
	this._tone_data = [0,0,0,0];
	this._day_phase_tone = [[],[],[],[],[],[]];
	this.set_time_var(this._day_phase_tone[0],Moghunter.sunset_tone,1);
	this.set_time_var(this._day_phase_tone[1],Moghunter.day_tone,1);
	this.set_time_var(this._day_phase_tone[2],Moghunter.dusk_tone,1);
	this.set_time_var(this._day_phase_tone[3],Moghunter.night_tone,1);
	this.set_time_var(this._day_phase_tone[4],Moghunter.dawn_tone,1);
	this.set_time_var(this._day_phase_tone[5],Moghunter.sunrise_tone,1);
};	

//==============================
// * Setup Max TM
//==============================
Game_System.prototype.setup_max_tm = function() {
	this._min_max = Math.min(Math.max(Moghunter.min_max,1),999);
	this._hour_max = Math.min(Math.max(Moghunter.hour_max,1),999);
	this._day_max  = Math.min(Math.max(Moghunter.day_max + 1,1),999);
	this._day_week_max = Math.min(Math.max(Moghunter.day_week_max,1),999);
	this._month_max =  Math.min(Math.max(Moghunter.month_max,1),999);
	this._season_max = Math.min(Math.max(Moghunter.season_max,1),999);
	this._season_interval = [0, Math.min(Math.max(Moghunter.season_interval,1),999)];
	this._total_days_week = 0;
};

//==============================
// * Setup Variable TM
//==============================
Game_System.prototype.setup_variable_tm = function() {
	this._sec_variableId = Moghunter.sec_variableId;
	this._min_variableId = Moghunter.min_variableId;
	this._hour_variableId = Moghunter.hour_variableId;
	this._day_variableId = Moghunter.day_variableId;
	this._month_variableId = Moghunter.month_variableId;
	this._year_variableId = Moghunter.year_variableId;
	this._day_week_variableId = Moghunter.day_week_variableId;
	this._season_variableId = Moghunter.season_variableId;	
    $gameVariables._data[this._sec_variableId] = 0;
	$gameVariables._data[this._min_variableId] = Math.min(Math.max(Moghunter.start_minute,0),this.max_time(this._min_variableId) - 1);
	$gameVariables._data[this._hour_variableId] = Math.min(Math.max(Moghunter.start_hour,0),this.max_time(this._hour_variableId) - 1);
	$gameVariables._data[this._day_variableId] = Math.min(Math.max(Moghunter.start_day,1),this.max_time(this._day_variableId) - 1);
	$gameVariables._data[this._month_variableId] = Math.min(Math.max(Moghunter.start_month - 1,0),this.max_time(this._month_variableId) - 1);
	$gameVariables._data[this._year_variableId] = Math.min(Math.max(Moghunter.start_year,0),9999);
	$gameVariables._data[this._day_week_variableId] = Math.min(Math.max(Moghunter.start_day_week - 1,0),this.max_time(this._day_week_variableId) - 1);
	$gameVariables._data[this._season_variableId] = Math.min(Math.max(Moghunter.start_season - 1,0),this.max_time(this._season_variableId) - 1);
};

//==============================
// * Setup Switch TM
//==============================
Game_System.prototype.setup_switch_tm = function() {
	this._dawn_switchId = Moghunter.dawn_switchId;
	this._sunrise_switchId = Moghunter.sunrise_switchId;	
	this._day_switchId = Moghunter.day_switchId;
	this._sunset_switchId = Moghunter.sunset_switchId;
	this._dusk_switchId = Moghunter.dusk_switchId;
	this._night_switchId = Moghunter.night_switchId;
	this._day_phase_switchId = Moghunter.day_phase_switchId;
	this._night_phase_switchId = Moghunter.night_phase_switchId;
	this._day_phase_switches = [this._dawn_switchId,this._sunrise_switchId,this._day_switchId,
	this._sunset_switchId,this._dusk_switchId,this._night_switchId,this._day_phase_switchId,
	this._night_phase_switchId];
	this._day_week_switches = Moghunter.day_week_switches;
	this._month_switches = Moghunter.month_switches;
	this._season_switches = Moghunter.season_switches;
	for (var i = 0; i < this._day_phase_switches.length; i++) {
		 $gameSwitches._data[Number(this._day_phase_switches[i])] = false;
	};	
	for (var i = 0; i < this._day_week_switches.length; i++) {
		 $gameSwitches._data[Number(this._day_week_switches[i])] = false;
	};	
	for (var i = 0; i < this._month_switches.length; i++) {
		 $gameSwitches._data[this._month_switches[i]] = false;
	};		
	for (var i = 0; i < this._season_switches.length; i++) {
		 $gameSwitches._data[this._season_switches[i]] = false;
	};	
};

//==============================
// * Set Time Var
//==============================
Game_System.prototype.set_time_var = function(object,value,type) {
	var s = value.split(',');
	//var s = value;
	if (type === 0){
		for (var i = 0; i < s.length; i++) {object.push(String(s[i]));	};
	}
    else {
	    for (var i = 0; i < s.length; i++) {object.push(Number(s[i]));	};
   };
};

//==============================
// * Set Base Time 
//==============================
Game_System.prototype.set_base_time_phase = function() {
	this.set_day_phase();
	this.set_day_week();
	this.refresh_season();	
};

//==============================
// * Time System Clear
//==============================
Game_System.prototype.time_system_clear = function() {
	this.set_base_time_phase();
    var preTone = $gameScreen._tone
	if (this.allow_tint_screen()) {
		$gameScreen._tone = this.set_tint_phase();
		$gameScreen.startTint(this.set_tint_phase(),1);
	};
	this._refresh_window_time = true;
};

//==============================
// * Restore Tone
//==============================
Game_System.prototype.restore_tone = function() {
	this.set_base_time_phase();
    $gameScreen._tone = this._tone_data;
	$gameScreen.startTint(this._tone_data, 1);
	$gameMap.requestRefresh(); 
};

//==============================
// * Record Tone
//==============================
Game_System.prototype.record_tone = function() {
    this._tone_data = $gameScreen._tone;
};

//==============================
// * Time System
//==============================
Game_System.prototype.time_system = function(value) {
   this._time_data[3] = value;
};

//==============================
// * Tint Screen
//==============================
Game_System.prototype.tint_screen = function(value) {
   this._time_data[4] = value;
};

//==============================
// * Set Time Speed
//==============================
Game_System.prototype.set_time_speed = function(value) {
	this._time_data[0] = Math.min(Math.max(value,1),3000);
	this._time_data[0] *= 2;
};

//==============================
// * Set Minute
//==============================
Game_System.prototype.set_minute = function(value) {
   var value_real = Math.min(Math.max(value,0),this.max_time(this._min_variableId) - 1);
   $gameVariables._data[this._min_variableId] = value_real;
   this.time_system_clear();
};

//==============================
// * Set Hour
//==============================
Game_System.prototype.set_hour = function(value) {
   var value_real = Math.min(Math.max(value,0),this.max_time(this._hour_variableId) - 1);
   $gameVariables._data[this._hour_variableId] = value_real;
   this.time_system_clear();
};

//==============================
// * Set Day
//==============================
Game_System.prototype.set_day = function(value) {
   var value_real = Math.min(Math.max(value,0),this.max_time(this._day_variableId) - 1);
   $gameVariables._data[this._day_variableId] = value_real;
   this.time_system_clear();
};

//==============================
// * Set Month
//==============================
Game_System.prototype.set_month = function(value) {
   var value_real = Math.min(Math.max(value - 1,0),this.max_time(this._month_variableId) - 1);
   $gameVariables._data[this._month_variableId] = value_real;
   this.time_system_clear();
};

//==============================
// * Set Year
//==============================
Game_System.prototype.set_year = function(value) {
   var value_real = Math.min(Math.max(value - 1,0),this.max_time(this._year_variableId));
   $gameVariables._data[this._year_variableId] = value_real;
   this.time_system_clear();
};

//==============================
// * Set Season
//==============================
Game_System.prototype.set_season = function(value) {
   var value_real = Math.min(Math.max(value - 1,0),this.max_time(this._season_variableId));
   $gameVariables._data[this._season_variableId] = value_real;
   this.time_system_clear();
};

//==============================
// * Add Minute
//==============================
Game_System.prototype.add_minute = function(value) {
   if (value <= 0) {return};
   $gameVariables._data[this._min_variableId] += value;
   if ($gameVariables._data[this._min_variableId]  >= this.max_time(this._min_variableId)) {
	   this.refresh_time(1,this._minute_variableId);
	   this.add_hour(1);		//在这里小时+1（check_max_time函数过程复杂，不适合改）
   };
   this.check_max_time(this._min_variableId);   
   this.time_system_clear();
};

//==============================
// * Add Hour
//==============================
Game_System.prototype.add_hour = function(value) {
   if (value <= 0) {return};
   $gameVariables._data[this._hour_variableId] += value;
   if ($gameVariables._data[this._hour_variableId]  >= this.max_time(this._hour_variableId)) {this.refresh_time(1,this._hour_variableId)};
   this.check_max_time(this._hour_variableId);   
   this.time_system_clear();
};

//==============================
// * Add Day
//==============================
Game_System.prototype.add_day = function(value) {
   if (value <= 0) {return};
   $gameVariables._data[this._day_variableId] += value;
   if ($gameVariables._data[this._day_variableId]  >= this.max_time(this._day_variableId)) {this.refresh_time(1,this._day_variableId);};
   this.check_max_time(this._day_variableId);   
   this.time_system_clear();
};

//==============================
// * Add Month
//==============================
Game_System.prototype.add_month = function(value) {
	if (value <= 0) {return};
    $gameVariables._data[this._month_variableId] += value;
    for (var i = 0; i < value; i++) {this.set_season_par()}
    if ($gameVariables._data[this._month_variableId]  >= this.max_time(this._month_variableId)) {this.refresh_time(1,this._month_variableId)};
    this.check_max_time(this._month_variableId);   
    this.time_system_clear();
};

//==============================
// * Add Year
//==============================
Game_System.prototype.add_year = function(value) {
   $gameVariables._data[this._year_variableId] += value;
   this.check_max_time(this._year_variableId);   
   this.time_system_clear();
};

//==============================
// * Add Season
//==============================
Game_System.prototype.add_season = function(value) {
   $gameVariables._data[this._season_variableId] += value;
   if ($gameVariables._data[this._season_variableId]  >= this.max_time(this._season_variableId)) {this.refresh_time(1,this._season_variableId)};
   this.check_max_time(this._season_variableId);   
   this.time_system_clear();
};

//==============================
// * sec
//==============================
Game_System.prototype.second = function() {
    return  Math.floor($gameVariables._data[this._sec_variableId] / 100);
};

//==============================
// * min
//==============================
Game_System.prototype.minute = function() {
    return $gameVariables._data[this._min_variableId];
};

//==============================
// * hour
//==============================
Game_System.prototype.hour = function() {
    return $gameVariables._data[this._hour_variableId];
};

//==============================
// * hour PM
//==============================
Game_System.prototype.hour_pm = function() {
	if (this.hour() > 12) {return this.hour() - 12};
    return this.hour();
};

//==============================
// * Day
//==============================
Game_System.prototype.day = function() {
    return $gameVariables._data[this._day_variableId];
};

//==============================
// * Month
//==============================
Game_System.prototype.month = function() {
    return $gameVariables._data[this._month_variableId] + 1;
};

//==============================
// * Year
//==============================
Game_System.prototype.year = function() {
    return $gameVariables._data[this._year_variableId];
};

//==============================
// * Season
//==============================
Game_System.prototype.season = function() {
	return $gameVariables._data[this._season_variableId] + 1;
};

//==============================
// * Set Season
//==============================
Game_System.prototype.set_season_par = function() {	
	this._season_interval[0] += 1
	if (this._season_interval[0] < 0) {this._season_interval[0] = 0};
	if (this._season_interval[0] >= this._season_interval[1]) {
		this._season_interval[0] = 0;
     	$gameVariables._data[this._season_variableId] += 1;
		if ($gameVariables._data[this._season_variableId] >= this.max_time(this._season_variableId)) {
			$gameVariables._data[this._season_variableId] = 0			
		};
   };
   this.refresh_season();
};

//==============================
// * Refresh Season
//==============================
Game_System.prototype.refresh_season = function() {	
	for (var i = 0; i < this._season_switches.length; i++) {$gameSwitches._data[Number(this._season_switches[i])] = false};
	$gameSwitches._data[Number(this._season_switches[$gameVariables._data[this._season_variableId]])] = true;
	for (var i = 0; i < this._month_switches.length; i++) {$gameSwitches._data[Number(this._month_switches[i])] = false};
	$gameSwitches._data[Number(this._month_switches[$gameVariables._data[this._month_variableId]])] = true;
	$gameMap.requestRefresh();  
};	

//==============================
// * Total Days
//==============================
Game_System.prototype.total_days = function() {
	var months = ($gameVariables._data[this._month_variableId] * (this.max_time(this._day_variableId) - 1));
	var years = ($gameVariables._data[this._year_variableId] * ((this.max_time(this._day_variableId) - 1) * this.max_time(this._month_variableId)));
	var days = $gameVariables._data[this._day_variableId];
	this._total_days_week = (months + years + days);
    return this._total_days_week;
}

//==============================
// * Set Day Week
//==============================
Game_System.prototype.set_day_week = function() {
    this.total_days();
	var total_weeks = Math.floor(this._total_days_week / this.max_time(this._day_week_variableId)) * this.max_time(this._day_week_variableId)
	var day = (this._total_days_week - total_weeks)
	$gameVariables._data[this._day_week_variableId] = Moghunter.start_day_week + day;
	for (var i = 0; i < this._day_week_switches.length; i++) {$gameSwitches._data[Number(this._day_week_switches[i])] = false};
	$gameSwitches._data[Number(this._day_week_switches[$gameVariables._data[this._day_week_variableId]])] = true;
	$gameMap.requestRefresh();
};

//==============================
// * Day Week
//==============================
Game_System.prototype.day_week = function() {
	 return $gameVariables._data[this._day_week_variableId] + 1;
};

//==============================
// * Day Week Name
//==============================
Game_System.prototype.day_week_name = function() {
	 if (this._day_week_names[this.day_week() - 1]) {
    	 return String(this._day_week_names[this.day_week() - 1])}
	 else {return "Day Week " + String(this.day_week()) }
};

//==============================
// * Season Name
//==============================
Game_System.prototype.season_name = function() {
	if (this._season_names[this.season() - 1]) {
	return String(this._season_names[this.season() - 1])}
	else  {return "Season " + String(this.season())};
};

//==============================
// * Month Name
//==============================
Game_System.prototype.month_name = function() {
	if (this._month_names[this.month() - 1]) {
	return String(this._month_names[this.month() - 1])}
	else  {return "Month " + String(this.month()) };
};

//==============================
// * Time Speed
//==============================
Game_System.prototype.time_speed = function() {
    return this._time_data[0];
};

//==============================
// * Day Phase
//==============================
Game_System.prototype.day_phase = function() {
    return this._time_data[1];
};

//==============================
// * Day Phase Old
//==============================
Game_System.prototype.day_phase_old = function() {
    return this._time_data[2];
};

//==============================
// * Time Active
//==============================
Game_System.prototype.time_active = function() {
    return this._time_data[3];
};

//==============================
// * Tint Screen Active
//==============================
Game_System.prototype.tint_screen_active = function() {
    return this._time_data[4];
};

//==============================
// * Day Phase Transition Speed
//==============================
Game_System.prototype.day_phase_transition_speed = function() {
	return this._time_data[5];
};

//==============================
// * Update Seconds
//==============================
Game_System.prototype.update_seconds = function() {
	$gameVariables._data[this._sec_variableId] += this.time_speed();
	if ($gameVariables._data[this._sec_variableId]  >= this.max_time(this._sec_variableId)) {this.refresh_time(1,this._min_variableId)};
    this.check_max_time(this._sec_variableId);
};

//==============================
// * Refresh Time
//==============================
Game_System.prototype.refresh_time = function(value,parameter) {
	    $gameVariables._data[parameter] += value;
		if ($gameVariables._data[parameter]  >= this.max_time(parameter)) {
			switch (parameter) {
			case this._sec_variableId: // sec
				this.refresh_time(1,this._min_variableId);
				break;				
			case this._min_variableId: // min
				this.refresh_time(1,this._hour_variableId);
				$gameMap.requestRefresh();
				break;
			case this._hour_variableId: // hour
				this.refresh_time(1,this._day_variableId);
				this.set_day_week();
				$gameMap.requestRefresh();
				break;
			case this._day_variableId: // day
				this.refresh_time(1,this._month_variableId);
				this.set_season_par();
	            $gameMap.requestRefresh();  
				break;
			case this._month_variableId: // month
				this.refresh_time(1,this._year_variableId);
	            $gameMap.requestRefresh();  	
				break;
			};
		};
	    this.check_max_time(parameter);
};

//==============================
// * Check Max Time
//==============================
Game_System.prototype.check_max_time = function(parameter) {
	if ($gameVariables._data[parameter] >= this.max_time(parameter) || $gameVariables._data[parameter] < 0) {
		if (this._hour_variableId === parameter || this._month_variableId === parameter) {
			var dif = $gameVariables._data[parameter] - this.max_time(parameter)
		    $gameVariables._data[parameter] = dif - 1;
		} else if (this._day_variableId === parameter) {
			var dif = $gameVariables._data[parameter] - this.max_time(parameter)
		    $gameVariables._data[parameter] = dif;
			if ($gameVariables._data[parameter] <= 0) {$gameVariables._data[parameter] = 1};
		} else {
	    	$gameVariables._data[parameter] = 0;
		};
        if ($gameVariables._data[parameter]  < 0) {$gameVariables._data[parameter] = 0};
		this.set_day_phase();
		this._refresh_window_time = true;
	};
};
  
//==============================
// * MaxTime
//==============================
Game_System.prototype.max_time = function(parameter) {
        switch (parameter) {
		case this._sec_variableId: // min
            return 6000;
            break;			
		case this._min_variableId: // min
            return this._min_max;
            break;
		case this._hour_variableId: // hour
            return this._hour_max;
            break;
		case this._day_variableId: // day
            return this._day_max;
            break;
		case this._month_variableId: // month
            return this._month_max;
            break;
		case this._year_variableId: // year
            return 9999;
            break;
		case this._season_variableId: // season
            return this._season_max;
            break;
		case this._day_week_variableId: // Day Week
            return this._day_week_max;
            break;			
		default :
	       return 1;
           break				
		};  
};

//==============================
// * Day Phase Effect
//==============================
Game_System.prototype.day_phase_effect = function() {
	this._time_data[2] = this._time_data[1];	
    this.set_switch_phase();
	if (this.allow_tint_screen()) {$gameScreen.startTint(this.set_tint_phase(), this.day_phase_transition_speed());};
	$gameMap.requestRefresh();
};

//==============================
// * Set Tint Phase
//==============================
Game_System.prototype.set_tint_phase = function() {
	if (this._day_phase_tone[this.day_phase()]) {
		r = Number(this._day_phase_tone[this.day_phase()][0]);
		g = Number(this._day_phase_tone[this.day_phase()][1]);
		b = Number(this._day_phase_tone[this.day_phase()][2]);
		a = Number(this._day_phase_tone[this.day_phase()][3]);
		return [r,g,b,a];
    }
	else {return [0,0,0,0]};	
};

//==============================
// * Set Switch Phase
//==============================
Game_System.prototype.set_switch_phase = function() {
	for (var i = 0; i < this._day_phase_switches.length; i++) {$gameSwitches._data[Number(this._day_phase_switches[i])] = false;};	
    $gameSwitches._data[this._day_phase_switchId] = false;
    $gameSwitches._data[this._night_phase_switchId] = false;
	switch (this.day_phase()) {
		case 0: // Sunset
		    $gameSwitches._data[Number(this._day_phase_switches[3])] = true;
            $gameSwitches._data[this._day_phase_switchId] = true;
            break;
		case 2: // Dusk
		    $gameSwitches._data[Number(this._day_phase_switches[4])] = true;
            break
		case 3: // Night
		    $gameSwitches._data[Number(this._day_phase_switches[5])] = true;
		    $gameSwitches._data[this._night_phase_switchId] = true;			
            break;
		case 4: // Dawn
		    $gameSwitches._data[Number(this._day_phase_switches[0])] = true;
            $gameSwitches._data[this._night_phase_switchId] = true;				
            break;
		case 5: // Sunrise
		    $gameSwitches._data[Number(this._day_phase_switches[1])] = true;
            break;
		default : // Day
		    $gameSwitches._data[Number(this._day_phase_switches[2])] = true;
            $gameSwitches._data[this._day_phase_switchId] = true;
            break;
	};
};

//==============================
// * Allow Tint Screen
//==============================
Game_System.prototype.allow_tint_screen = function() {
  if (!this.tint_screen_active()) {return false};
  return true;
};

//==============================
// * Set Day Phase
//==============================
Game_System.prototype.set_day_phase = function() {
	if (this.hour() >= 21 || this.hour() < 3) {this._time_data[1] = 3} // Night
	else if (this.hour() >= 18) {this._time_data[1] = 2} //Dusk
	else if (this.hour() >= 15) {this._time_data[1] = 0} // Sunset
	else if (this.hour() >= 9) {this._time_data[1] = 1} // Normal
	else if (this.hour() >= 6) {this._time_data[1] = 5} // Sunrise
	else if (this.hour() >= 3) {this._time_data[1] = 4} // Dawn
};

//==============================
// * Update Time System
//==============================
Game_System.prototype.update_time_system = function() {
  if (!this.allow_time_system()) {return};	
  this.update_seconds()	;    
  if (this.day_phase() != this.day_phase_old()) {this.day_phase_effect();};
};

//==============================
// * Allow Time System
//==============================
Game_System.prototype.allow_time_system = function() {
  if (!this.time_active()) {return false};
  if (!this._time_sys_active) {return false};
  if (SceneManager.isSceneChanging()) {return false};
  if (this._stop_time_interpreter && $gameMap.isEventRunning()) {return false};
  if (this._stop_time_message && $gameMessage.isBusy()) {return false}
  return true;
};

//=============================================================================
// ** Scene Map
//=============================================================================

//==============================
// * createDisplayObjects
//==============================
var _alias_mog_timesys_smap_createDisplayObjects = Scene_Map.prototype.createDisplayObjects;
Scene_Map.prototype.createDisplayObjects = function() {
	_alias_mog_timesys_smap_createDisplayObjects.call(this);
   if (Moghunter.timeWindow_map === "true") {this.createTimeStatus();};
};

//==============================
// * create Time Status
//==============================
Scene_Map.prototype.createTimeStatus = function() {
   this._time_status_window = new Window_Time_Status(0);
   this._time_status_window.x = Moghunter.timeWindow_X;
   this._time_status_window.y = Moghunter.timeWindow_Y;
   this._time_status_window.set_window_size();
   this.addChild(this._time_status_window);	
};

//==============================
// * Update
//==============================
var _alias_mog_timesystem_scmap_update = Scene_Map.prototype.update;
Scene_Map.prototype.update = function() {
	$gameSystem._refresh_window_time = false;
	$gameSystem.update_time_system()
	_alias_mog_timesystem_scmap_update.call(this);		
};

//==============================
// * Terminate
//==============================
var _alias_mog_scmap_terminate = Scene_Map.prototype.terminate;
Scene_Map.prototype.terminate = function() {
	_alias_mog_scmap_terminate.call(this);
	if ($gameMap._timesys_tintscreen) {$gameSystem._tone_data = $gameScreen._tone;};
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
// ** Scene Menu
//=============================================================================

//==============================
// * Create
//==============================
var _alias_mog_timesys_scmenu_create = Scene_Menu.prototype.create
Scene_Menu.prototype.create = function() {
	_alias_mog_timesys_scmenu_create.call(this);
    if (Moghunter.timeWindow_menu === "true") {this.createTimeStatus();};
};

//==============================
// * create Time Status
//==============================
Scene_Menu.prototype.createTimeStatus = function() {
   $gameSystem._refresh_window_time = false;
   this._time_status_window = new Window_Time_Status(1);
   this._time_status_window.x = Moghunter.timeWindow_menu_X;
   this._time_status_window.y = Moghunter.timeWindow_menu_Y;
   this.addChild(this._time_status_window);	
};

//=============================================================================
// ** Window_Time_Status
//=============================================================================
function Window_Time_Status() {
    this.initialize.apply(this, arguments);
};

Window_Time_Status.prototype = Object.create(Window_Base.prototype);
Window_Time_Status.prototype.constructor = Window_Time_Status;

//==============================
// * Initialize
//==============================
Window_Time_Status.prototype.initialize = function(x, y) {
	this.pm_mode = false;
	if (String(Moghunter.display_pm_mode) === "true") {this.pm_mode = true};
    Window_Base.prototype.initialize.call(this, 0, 0, 240, 228);
	this.contents.fontSize = 20;
	this._window_size = [-500,-500,0,0];
    this.refresh();
	this._old_play_time = $gameSystem.playtime();
	this._mode = 0;
};

//==============================
// * Set Window Size
//==============================
Window_Time_Status.prototype.set_window_size = function() {
   this.height = 120;
   this._mode = 1;	
   this._window_size = [this.x - ($gameMap.tileWidth() / 2),this.y - $gameMap.tileHeight(),
   this.width + this.x - $gameMap.tileWidth(),this.height + this.y];
   this.refresh();
};

//==============================
// * Refresh
//==============================
Window_Time_Status.prototype.refresh = function() {
    this.contents.clear();
	this.draw_time_contents();
};

//==============================
// * Update
//==============================
Window_Time_Status.prototype.update = function() {
	Window_Base.prototype.update.call(this);
	this.visible = this.need_visible();
    if ($gameSystem._refresh_window_time) {this.refresh();}
	if (this.need_fade()) {this.opacity -= 15;}
	else {this.opacity += 15};
	this.contentsOpacity = this.opacity;
	if (this._mode === 0 && this._old_play_time != $gameSystem.playtime()) {this.refresh();this._old_play_time = $gameSystem.playtime()};
};

//==============================
// * Need Visible
//==============================
Window_Time_Status.prototype.need_visible = function() {
	return $gameSystem._time_window_visible;
};

//==============================
// * Need Fade
//==============================
Window_Time_Status.prototype.need_fade = function() {
	if ($gamePlayer.screen_realX() < this._window_size[0]) {return false};
	if ($gamePlayer.screen_realX() > this._window_size[2]) {return false};
	if ($gamePlayer.screen_realY() < this._window_size[1]) {return false};
	if ($gamePlayer.screen_realY() > this._window_size[3]) {return false};
	if (this.opacity < 100) {return false};
	return true;	
};
	
//==============================
// * Draw Time Contents
//==============================
Window_Time_Status.prototype.draw_time_contents = function() {
   var x = this.width - 130;
   var y = 26;
   this.contents.drawText(Moghunter.time_word, 0, 0, 90,32);
   if (this.pm_mode) {var apm = " am";if ($gameSystem.hour() >= 12) {var apm = " pm"};
	   this.contents.drawText($gameSystem.hour_pm() + ":" +  $gameSystem.minute().padZero(2) + apm, x, 0, 90,32,"right");  
   }
   else {
      this.contents.drawText($gameSystem.hour().padZero(2) + ":" +  $gameSystem.minute().padZero(2), x, 0, 90,32,"right");
   };   
   if (this._mode === 1) {
       this.contents.drawText(Moghunter.day_word, 0, y, 90,32);
	   var text = $gameSystem.day_week_name() + " " + $gameSystem.month().padZero(2) + "/" + $gameSystem.day().padZero(2);
	   this.contents.drawText(text, x - 30, y, 120,32,"right");
	   this.contents.drawText(Moghunter.year_word, 0, y * 2, 90,32);
	   var text = $gameSystem.year() + " " + $gameSystem.season_name();
	   this.contents.drawText(text, x - 30, y * 2, 120,32,"right");
   }
   else {
	   this.contents.drawText($gameSystem.day(), x, y, 90,32,"right");
	   this.contents.drawText(Moghunter.day_word, 0, y, 90,32);
	   this.contents.drawText($gameSystem.day(), x, y, 90,32,"right");     
	   this.contents.drawText(Moghunter.day_week_word, 0, y * 2, 90,32);
	   this.contents.drawText($gameSystem.day_week_name(), x, y * 2, 90,32,"right");  
	   this.contents.drawText(Moghunter.month_word, 0, y * 3, 90,32);
	   this.contents.drawText($gameSystem.month_name(), x, y * 3, 90,32,"right");      
	   this.contents.drawText(Moghunter.year_word, 0, y * 4, 90,32);
	   this.contents.drawText($gameSystem.year(), x, y * 4, 90,32,"right");    
	   this.contents.drawText(Moghunter.season_word, 0, y * 5, 90,32);
	   this.contents.drawText($gameSystem.season_name(), x, y * 5, 90,32,"right");
	   this.contents.drawText(Moghunter.play_time_word, 0, y * 6, 90,32);
	   this.contents.drawText($gameSystem.playtimeText(), x, y * 6, 90,32,"right");
   };
};
