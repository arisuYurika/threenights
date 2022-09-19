//=============================================================================
// MOG_FastTravel.js
//=============================================================================
/*:
 * @plugindesc (v1.1)[v1.5]  面板 - 世界地图
 * @author Moghunter （Drill_up翻译+优化）
 * 
 * @Drill_LE_param "城镇坐标-%d"
 * @Drill_LE_parentKey "---城镇坐标组%d至%d---"
 * @Drill_LE_var "Moghunter.fastTravel_Towns_length"
 * 
 * @Drill_LE_param "迷宫坐标-%d"
 * @Drill_LE_parentKey "---迷宫坐标组%d至%d---"
 * @Drill_LE_var "Moghunter.fastTravelDungeons_length"
 * 
 * @Drill_LE_param "其他坐标-%d"
 * @Drill_LE_parentKey "---其他坐标组%d至%d---"
 * @Drill_LE_var "Moghunter.fastTravelOther_length"
 *
 *
 * @help  
 * =============================================================================
 * +++ MOG - Fast Travel (v1.1) +++
 * By Moghunter 
 * https://mogplugins.wordpress.com/
 * =============================================================================
 * 你可以建立一个世界地图，通过世界地图选定想去的地方。
 * 【现已支持插件关联资源的打包、加密】
 *
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.插件的作用域：菜单界面。
 *   属于自定义的面板，用于快速移动到地图的某处。
 * 2.配置分为五个部分，坐标组、地图、类型按钮、坐标窗口、杂项数据。
 * 3.由于脚本硬性设定，选项类型被固定为三种：城镇、迷宫、其他。
 *   你无法修改类型的数量。
 * 
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 资源路径：img/Menu__fasttravel （Menu后面有两个下划线）
 * 先确保项目img文件夹下是否有Menu__fasttravel文件夹。
 * 要查看所有关联资源文件的插件，可以去看看"插件清单.xlsx"。
 * 如果没有，需要自己建立。需要配置资源文件：
 * 
 * 资源-整体布局
 * 资源-地图
 * 资源-地图背景
 * 资源-地图坐标点
 * 资源-坐标指针
 * 资源-城镇按钮
 * 资源-迷宫按钮
 * 资源-其他按钮
 * 资源-类型指针
 * 资源-菜单布局
 *
 * 城镇坐标1 资源-坐标介绍图
 * 城镇坐标2 资源-坐标介绍图
 * 城镇坐标3 资源-坐标介绍图
 * …………
 *
 * 迷宫坐标和其他坐标同理，如果没有介绍图，可以不配置。
 * 注意，配置必须从上往下，中间不能出现空配置，如果出现空配置，后面
 * 的配置将没有效果。
 *
 * -----------------------------------------------------------------------------
 * ----可选设定
 * 由于脚本设定，选项被固定为三种：城镇、迷宫、其他。
 * 三种没有明显的区别，可以通过修改图片资源来设置自己的分类。
 * （注意，冒号两边都有一个空格）
 * 
 * 插件指令（城镇坐标）：enable_town : A
 * 插件指令（城镇坐标）：disable_town : A
 * 
 * 插件指令（迷宫坐标）：enable_dungeon : B
 * 插件指令（迷宫坐标）：disbale_dungeon : B
 * 
 * 插件指令（其他坐标）：enable_other : C
 * 插件指令（其他坐标）：disable_other : C
 *
 * 参数A：城镇坐标编号
 * 参数B：迷宫坐标编号
 * 参数C：其他坐标编号
 *
 * 示例：
 * enable_town : 1
 * disable_town : 1
 * 配置了城镇坐标-1，那么编号就是1，默认所有地图不开放。
 *
 * -----------------------------------------------------------------------------
 * ----关于Drill_up优化：
 * [v1.1]
 * 使得该插件支持关联资源的打包、加密。
 * 部署时勾选去除无关文件，本插件中相关的文件不会被去除。
 * [v1.2]
 * 大幅度修改了坐标的设置，使其能更方便地设置。
 * 修改了地图和指针的关系，指针可以是浮动的也可以是旋转的。
 * 使得世界地图可以被添加到主菜单中。
 * 大幅度修改了其它窗口的数值。
 * 添加了更多菜单窗口相关控制变量。
 * [v1.3]
 * 修改了插件的分类。
 * [v1.4]
 * 修改了插件关联的资源文件夹。
 * [v1.5]
 * 添加了最大值编辑的支持。
 * 
 *
 * @param ---坐标组---
 * @default
 * 
 * @param ---城镇坐标组 1至20---
 * @parent ---坐标组---
 * @default
 * 
 * @param 城镇坐标-1
 * @parent ---城镇坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-2
 * @parent ---城镇坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-3
 * @parent ---城镇坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-4
 * @parent ---城镇坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-5
 * @parent ---城镇坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-6
 * @parent ---城镇坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-7
 * @parent ---城镇坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-8
 * @parent ---城镇坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-9
 * @parent ---城镇坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-10
 * @parent ---城镇坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-11
 * @parent ---城镇坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-12
 * @parent ---城镇坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-13
 * @parent ---城镇坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-14
 * @parent ---城镇坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-15
 * @parent ---城镇坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-16
 * @parent ---城镇坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-17
 * @parent ---城镇坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-18
 * @parent ---城镇坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-19
 * @parent ---城镇坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-20
 * @parent ---城镇坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param ---城镇坐标组21至40---
 * @parent ---坐标组---
 * @default
 * 
 * @param 城镇坐标-21
 * @parent ---城镇坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-22
 * @parent ---城镇坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-23
 * @parent ---城镇坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-24
 * @parent ---城镇坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-25
 * @parent ---城镇坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-26
 * @parent ---城镇坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-27
 * @parent ---城镇坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-28
 * @parent ---城镇坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-29
 * @parent ---城镇坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-30
 * @parent ---城镇坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-31
 * @parent ---城镇坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-32
 * @parent ---城镇坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-33
 * @parent ---城镇坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-34
 * @parent ---城镇坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-35
 * @parent ---城镇坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-36
 * @parent ---城镇坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-37
 * @parent ---城镇坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-38
 * @parent ---城镇坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-39
 * @parent ---城镇坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-40
 * @parent ---城镇坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param ---城镇坐标组41至60---
 * @parent ---坐标组---
 * @default
 * 
 * @param 城镇坐标-41
 * @parent ---城镇坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-42
 * @parent ---城镇坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-43
 * @parent ---城镇坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-44
 * @parent ---城镇坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-45
 * @parent ---城镇坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-46
 * @parent ---城镇坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-47
 * @parent ---城镇坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-48
 * @parent ---城镇坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-49
 * @parent ---城镇坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-50
 * @parent ---城镇坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-51
 * @parent ---城镇坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-52
 * @parent ---城镇坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-53
 * @parent ---城镇坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-54
 * @parent ---城镇坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-55
 * @parent ---城镇坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-56
 * @parent ---城镇坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-57
 * @parent ---城镇坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-58
 * @parent ---城镇坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-59
 * @parent ---城镇坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 城镇坐标-60
 * @parent ---城镇坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default
 * 
 * @param ---迷宫坐标组 1至20---
 * @parent ---坐标组---
 * @default
 * 
 * @param 迷宫坐标-1
 * @parent ---迷宫坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-2
 * @parent ---迷宫坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-3
 * @parent ---迷宫坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-4
 * @parent ---迷宫坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-5
 * @parent ---迷宫坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-6
 * @parent ---迷宫坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-7
 * @parent ---迷宫坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-8
 * @parent ---迷宫坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-9
 * @parent ---迷宫坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-10
 * @parent ---迷宫坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-11
 * @parent ---迷宫坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-12
 * @parent ---迷宫坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-13
 * @parent ---迷宫坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-14
 * @parent ---迷宫坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-15
 * @parent ---迷宫坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-16
 * @parent ---迷宫坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-17
 * @parent ---迷宫坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-18
 * @parent ---迷宫坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-19
 * @parent ---迷宫坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-20
 * @parent ---迷宫坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param ---迷宫坐标组21至40---
 * @parent ---坐标组---
 * @default
 * 
 * @param 迷宫坐标-21
 * @parent ---迷宫坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-22
 * @parent ---迷宫坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-23
 * @parent ---迷宫坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-24
 * @parent ---迷宫坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-25
 * @parent ---迷宫坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-26
 * @parent ---迷宫坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-27
 * @parent ---迷宫坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-28
 * @parent ---迷宫坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-29
 * @parent ---迷宫坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-30
 * @parent ---迷宫坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-31
 * @parent ---迷宫坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-32
 * @parent ---迷宫坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-33
 * @parent ---迷宫坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-34
 * @parent ---迷宫坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-35
 * @parent ---迷宫坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-36
 * @parent ---迷宫坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-37
 * @parent ---迷宫坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-38
 * @parent ---迷宫坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-39
 * @parent ---迷宫坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-40
 * @parent ---迷宫坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param ---迷宫坐标组41至60---
 * @parent ---坐标组---
 * @default
 * 
 * @param 迷宫坐标-41
 * @parent ---迷宫坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-42
 * @parent ---迷宫坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-43
 * @parent ---迷宫坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-44
 * @parent ---迷宫坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-45
 * @parent ---迷宫坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-46
 * @parent ---迷宫坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-47
 * @parent ---迷宫坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-48
 * @parent ---迷宫坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-49
 * @parent ---迷宫坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-50
 * @parent ---迷宫坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-51
 * @parent ---迷宫坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-52
 * @parent ---迷宫坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-53
 * @parent ---迷宫坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-54
 * @parent ---迷宫坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-55
 * @parent ---迷宫坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-56
 * @parent ---迷宫坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-57
 * @parent ---迷宫坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-58
 * @parent ---迷宫坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-59
 * @parent ---迷宫坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 迷宫坐标-60
 * @parent ---迷宫坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default
 * 
 * @param ---其他坐标组 1至20---
 * @parent ---坐标组---
 * @default
 * 
 * @param 其他坐标-1
 * @parent ---其他坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-2
 * @parent ---其他坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-3
 * @parent ---其他坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-4
 * @parent ---其他坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-5
 * @parent ---其他坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-6
 * @parent ---其他坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-7
 * @parent ---其他坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-8
 * @parent ---其他坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-9
 * @parent ---其他坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-10
 * @parent ---其他坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-11
 * @parent ---其他坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-12
 * @parent ---其他坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-13
 * @parent ---其他坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-14
 * @parent ---其他坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-15
 * @parent ---其他坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-16
 * @parent ---其他坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-17
 * @parent ---其他坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-18
 * @parent ---其他坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-19
 * @parent ---其他坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-20
 * @parent ---其他坐标组 1至20---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param ---其他坐标组21至40---
 * @parent ---坐标组---
 * @default
 * 
 * @param 其他坐标-21
 * @parent ---其他坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-22
 * @parent ---其他坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-23
 * @parent ---其他坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-24
 * @parent ---其他坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-25
 * @parent ---其他坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-26
 * @parent ---其他坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-27
 * @parent ---其他坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-28
 * @parent ---其他坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-29
 * @parent ---其他坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-30
 * @parent ---其他坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-31
 * @parent ---其他坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-32
 * @parent ---其他坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-33
 * @parent ---其他坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-34
 * @parent ---其他坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-35
 * @parent ---其他坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-36
 * @parent ---其他坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-37
 * @parent ---其他坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-38
 * @parent ---其他坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-39
 * @parent ---其他坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-40
 * @parent ---其他坐标组21至40---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param ---其他坐标组41至60---
 * @parent ---坐标组---
 * @default
 * 
 * @param 其他坐标-41
 * @parent ---其他坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-42
 * @parent ---其他坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-43
 * @parent ---其他坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-44
 * @parent ---其他坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-45
 * @parent ---其他坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-46
 * @parent ---其他坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-47
 * @parent ---其他坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-48
 * @parent ---其他坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-49
 * @parent ---其他坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-50
 * @parent ---其他坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-51
 * @parent ---其他坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-52
 * @parent ---其他坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-53
 * @parent ---其他坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-54
 * @parent ---其他坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-55
 * @parent ---其他坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-56
 * @parent ---其他坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-57
 * @parent ---其他坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-58
 * @parent ---其他坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-59
 * @parent ---其他坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 * @param 其他坐标-60
 * @parent ---其他坐标组41至60---
 * @type struct<TravelMap>
 * @desc 在地图上设置一个新坐标。
 * @default 
 * 
 *
 *
 * @param ----杂项----
 * @default 
 * 
 * @param 资源-整体布局
 * @parent ----杂项----
 * @desc 整体布局的图片资源。
 * @default 世界地图-整体布局
 * @require 1
 * @dir img/Menu__fasttravel/
 * @type file
 *
 * @param 是否添加到主菜单
 * @parent ----杂项----
 * @type boolean
 * @on 添加
 * @off 不添加
 * @desc true - 添加，false - 不添加
 * @default false
 *
 * @param 主菜单显示名
 * @parent ----杂项----
 * @desc 主菜单显示的选项名。
 * @default 世界地图
 *
 * @param 是否播放世界地图音乐
 * @parent ----杂项----
 * @type boolean
 * @on 播放
 * @off 音乐不变
 * @desc true - 播放，false - 音乐不变
 * @default false
 *
 * @param 世界地图音乐
 * @parent ----杂项----
 * @desc 世界地图的背景音乐。
 * @default 
 * @require 1
 * @dir audio/bgm/
 * @type file
 *
 * @param 进入后是否淡化音乐
 * @parent ----杂项----
 * @type boolean
 * @on 淡化
 * @off 不淡化
 * @desc true - 淡化，false - 不淡化
 * @default false
 *
 * @param 是否显示地图完成度
 * @parent ----杂项----
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true
 *
 * @param 平移-地图完成度 X
 * @parent ----杂项----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 590
 *
 * @param 平移-地图完成度 Y
 * @parent ----杂项----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 513
 *
 * @param 地图完成度字体大小
 * @parent ----杂项----
 * @type number
 * @min 1
 * @desc 地图完成度的字体大小。
 * @default 22
 *
 *
 * @param ----地图----
 * @default 
 * 
 * @param 资源-地图
 * @parent ----地图----
 * @desc 地图的图片资源。
 * @default 世界地图-地图
 * @require 1
 * @dir img/Menu__fasttravel/
 * @type file
 *
 * @param 是否记住上一个地图选项
 * @parent ----地图----
 * @type boolean
 * @on 记住
 * @off 默认选第一个
 * @desc true - 记住，false - 默认选第一个
 * @default true
 * 
 * @param 资源-地图背景
 * @parent ----地图----
 * @desc 地图背景的图片资源。
 * @default 世界地图-地图背景
 * @require 1
 * @dir img/Menu__fasttravel/
 * @type file
 *
 * @param 地图背景速度 X
 * @parent ----地图----
 * @desc 背景按x轴方向循环移动的速度。正数向左，负数向右。（可为小数）
 * @default 0
 *
 * @param 地图背景速度 Y
 * @parent ----地图----
 * @desc 背景按y轴方向循环移动的速度。正数向上，负数向下。（可为小数）
 * @default 0
 *
 * @param 是否显示地图坐标点
 * @parent ----地图----
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true
 * 
 * @param 资源-地图坐标点
 * @parent 是否显示地图坐标点
 * @desc 地图坐标点的图片资源。图片会切割成三份，分别表示三种类型的坐标点。
 * @default 世界地图-坐标点
 * @require 1
 * @dir img/Menu__fasttravel/
 * @type file
 *
 * @param 平移-地图坐标点 X
 * @parent 是否显示地图坐标点
 * @desc 以坐标点的中心为基准，x轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 平移-地图坐标点 Y
 * @parent 是否显示地图坐标点
 * @desc 以坐标点的中心为基准，y轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 是否显示坐标指针
 * @parent ----地图----
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true
 * 
 * @param 资源-坐标指针
 * @parent 是否显示坐标指针
 * @desc 坐标指针的图片资源。
 * @default 世界地图-坐标指针
 * @require 1
 * @dir img/Menu__fasttravel/
 * @type file
 *
 * @param 平移-坐标指针 X
 * @parent 是否显示坐标指针
 * @desc 以坐标点的位置为基准，x轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 平移-坐标指针 Y
 * @parent 是否显示坐标指针
 * @desc 以坐标点的位置为基准，y轴方向平移，单位像素。（可为负数）
 * @default 0
 * 
 * @param 坐标指针旋转速度
 * @parent 是否显示坐标指针
 * @desc 正数逆时针，负数顺时针，单位 弧度/帧。(1秒60帧)
 * 6.28表示一圈，设置0.01表示大概10秒转一圈，设置0则不旋转。
 * @default 0.01
 *
 * @param 是否使用坐标指针浮动效果
 * @parent 是否显示坐标指针
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default false
 *
 * @param 镜头移动速度
 * @parent ----地图----
 * @type number
 * @min 1
 * @desc 镜头在地图上移动的速度，单位像素。
 * @default 35
 *  
 * @param 选择后延迟
 * @parent ----地图----
 * @type number
 * @min 0
 * @desc 选择地图后的延迟时间，单位帧。（1秒60帧）该时间内，会进行缩放效果和旋转效果。
 * @default 15
 *
 * @param 是否使用缩放效果
 * @parent ----地图----
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * 进入指定的地图后，是否放大画面。
 * @default true
 *
 * @param 是否使用旋转效果
 * @parent ----地图----
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * 进入指定的地图后，是否旋转画面。
 * @default false
 *
 * @param 新地图文本颜色
 * @parent ----地图----
 * @type number
 * @min 0
 * @desc 没有去过的新地图的文本会用该颜色设置。
 * @default 6
 *
 * @param 取消后是否朝后
 * @parent ----地图----
 * @type boolean
 * @on 朝后
 * @off 不朝后
 * @desc true - 朝后，false - 不朝后
 * 按取消键后，玩家朝向后方。
 * @default false
 *
 * @param 取消后触发开关
 * @parent ----地图----
 * @type switch
 * @desc 如果玩家取消了世界地图，那么会开启指定的开关。（用于捕获玩家退出世界地图的特殊情况。）
 * @default 52
 *
 * @param ----坐标窗口----
 * @default 
 *
 * @param 平移-坐标窗口 X
 * @parent ----坐标窗口----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 616
 *
 * @param 平移-坐标窗口 Y
 * @parent ----坐标窗口----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 145
 *
 * @param 坐标窗口起点 X
 * @parent ----坐标窗口----
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的x轴值，单位像素。（可为负数）
 * @default 100
 *
 * @param 坐标窗口起点 Y
 * @parent ----坐标窗口----
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的y轴值，单位像素。（可为负数）
 * @default 0
 *
 * @param 坐标窗口移动时长
 * @parent ----坐标窗口----
 * @type number
 * @min 1
 * @desc 从偏移的位置到原位置所需的时间，单位帧。（1秒60帧）
 * @default 20
 *
 * @param 是否使用坐标窗口布局
 * @parent ----坐标窗口----
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default true
 * 
 * @param 资源-菜单布局
 * @parent 是否使用坐标窗口布局
 * @desc 坐标窗口布局的图片资源。
 * @default 世界地图-菜单布局
 * @require 1
 * @dir img/Menu__fasttravel/
 * @type file
 *
 * @param 平移-坐标窗口布局 X
 * @parent 是否使用坐标窗口布局
 * @desc 修正图片的偏移用。以窗口的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 平移-坐标窗口布局 Y
 * @parent 是否使用坐标窗口布局
 * @desc 修正图片的偏移用。以窗口的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default -53
 *
 * @param 坐标窗口宽度
 * @parent ----坐标窗口----
 * @type number
 * @min 50
 * @desc 窗口的高宽设置。注意，实际文本域的高宽要比该设置小一些，因为有内边距。具体去看看 "17.主菜单 > 窗口与布局.docx"。
 * @default 200
 *
 * @param 坐标窗口高度
 * @parent ----坐标窗口----
 * @type number
 * @min 50
 * @desc 窗口的高宽设置。注意，实际文本域的高宽要比该设置小一些，因为有内边距。具体去看看 "17.主菜单 > 窗口与布局.docx"。
 * @default 290
 *
 * @param 坐标窗口字体大小
 * @parent ----坐标窗口----
 * @type number
 * @min 1
 * @desc 坐标窗口的字体大小。
 * @default 22
 *
 * @param 坐标窗口列数
 * @parent ----坐标窗口----
 * @type number
 * @min 1
 * @desc 坐标窗口的列数。如果设置了多列，插件将根据情况自动切换坐标类型或者坐标列。
 * @default 1
 *
 * @param 平移-坐标介绍图 X
 * @parent ----坐标窗口----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 160
 *
 * @param 平移-坐标介绍图 Y
 * @parent ----坐标窗口----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 300
 *
 * @param 坐标介绍图起点 X
 * @parent ----坐标窗口----
 * @desc 介绍图初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的x轴值，单位像素。（可为负数）
 * @default -100
 *
 * @param 坐标介绍图起点 Y
 * @parent ----坐标窗口----
 * @desc 介绍图初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的y轴值，单位像素。（可为负数）
 * @default 0
 *
 * @param 坐标介绍图移动时长
 * @parent ----坐标窗口----
 * @type number
 * @min 1
 * @desc 从偏移的位置到原位置所需的时间，单位帧。（1秒60帧）
 * @default 20
 *
 * @param 平移-坐标描述 X
 * @parent ----坐标窗口----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 50
 *
 * @param 平移-坐标描述 Y
 * @parent ----坐标窗口----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 440
 *
 * @param 坐标描述宽度
 * @parent ----坐标窗口----
 * @type number
 * @min 50
 * @desc 描述窗口只有两行，如果字符长度大于宽度，字符会被横向压缩成宽度的大小。
 * @default 560
 *
 * @param 坐标描述字体大小
 * @parent ----坐标窗口----
 * @type number
 * @min 1
 * @desc 坐标描述的字体大小。
 * @default 20
 *
 *
 * @param ----类型按钮----
 * @default 
 * 
 * @param 资源-类型指针
 * @parent ----类型按钮----
 * @desc 类型指针的图片资源。
 * @default 世界地图-类型指针
 * @require 1
 * @dir img/Menu__fasttravel/
 * @type file
 *
 * @param 平移-类型指针 X
 * @parent ----类型按钮----
 * @desc 以选项的位置为基准，x轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 平移-类型指针 Y
 * @parent ----类型按钮----
 * @desc 以选项的位置为基准，y轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 是否使用类型指针滑动效果
 * @parent ----类型按钮----
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default true
 * 
 * @param 资源-城镇按钮
 * @parent ----类型按钮----
 * @desc 城镇按钮的图片资源。
 * @default 世界地图-城镇按钮
 * @require 1
 * @dir img/Menu__fasttravel/
 * @type file
 *
 * @param 平移-城镇按钮 X
 * @parent ----类型按钮----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 470
 *
 * @param 平移-城镇按钮 Y
 * @parent ----类型按钮----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 20
 * 
 * @param 资源-迷宫按钮
 * @parent ----类型按钮----
 * @desc 迷宫按钮的图片资源。
 * @default 世界地图-迷宫按钮
 * @require 1
 * @dir img/Menu__fasttravel/
 * @type file
 *
 * @param 平移-迷宫按钮 X
 * @parent ----类型按钮----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 575
 *
 * @param 平移-迷宫按钮 Y
 * @parent ----类型按钮----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 20
 * 
 * @param 资源-其他按钮
 * @parent ----类型按钮----
 * @desc 其他按钮的图片资源。
 * @default 世界地图-其他按钮
 * @require 1
 * @dir img/Menu__fasttravel/
 * @type file
 *
 * @param 平移-其他按钮 X
 * @parent ----类型按钮----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 680
 *
 * @param 平移-其他按钮 Y
 * @parent ----类型按钮----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 20
 */
/*~struct~TravelMap:
 * 
 * @param 坐标名
 * @desc 世界地图的坐标的名字。
 * @default 未命名坐标
 *
 * @param 坐标描述
 * @desc 世界地图的坐标的描述。描述只有两行，用"|"字符换行。| 左边是第一行，右边第二行。
 * @default 没有描述。
 *
 * @param 资源-坐标介绍图
 * @desc 坐标介绍图的图片资源。
 * @default 
 * @require 1
 * @dir img/Menu__fasttravel/
 * @type file
 *
 * @param 坐标X位置
 * @type number
 * @min 0
 * @desc 世界地图图片的x位置，单位像素。0为贴在最左边。
 * @default 0
 *
 * @param 坐标Y位置
 * @type number
 * @min 0
 * @desc 世界地图图片的y位置，单位像素。0为贴在最上面。
 * @default 0
 *
 * @param 目标地图ID
 * @type number
 * @min 0
 * @desc 坐标的目标地图的id。
 * @default 0
 *
 * @param 目标地图 X
 * @type number
 * @min 0
 * @desc 坐标的目标地图X位置，单位图块。
 * @default 0
 *
 * @param 目标地图 Y
 * @type number
 * @min 0
 * @desc 坐标的目标地图Y位置，单位图块。
 * @default 0
 *
 * @param 朝向
 * @type select
 * @option 下
 * @value 2
 * @option 左
 * @value 4
 * @option 右
 * @value 6
 * @option 上
 * @value 8
 * @desc 2 - 下，4 - 左，6 - 右，8 - 上
 * @default 2
 *
 */
 // ☢CAUTION!!☢ Don't Touch.^_^ ----------------------------------------
　　var Imported = Imported || {};
　　Imported.MOG_FastTravel = true;
　　var Moghunter = Moghunter || {}; 
	Moghunter.fastTravel_Towns = [];
	Moghunter.fastTravelDungeons = [];
	Moghunter.fastTravelOther = [];	
 // ☢CAUTION!!☢ Don't Touch.^_^ ---------------------------------------- 

	
	
	
//*****************************************************************************
// ** SETUP *******************************************************************
//*****************************************************************************
// Para configurar um mapa siga o seguinte exemplo.
//
// Moghunter.fastTravel_Towns[A] = {B,C,D,E,F,G,H}; 
// 
// A - ID do ponto
// B - Nome do Mapa
// C - X-axis do ponto do mapa.
// D - Y-axis do ponto do mapa.
// E - ID do mapa para ser telepotado.
// F - X-axis do mapa a ser teleportado.
// G - Y-axis do mapa a ser teleportado.
// H - Direção. (2 - Down / 4 - Left / 6 - Right / 8 - Up)
//
//*****************************************************************************



//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================

  　Moghunter.parameters = PluginManager.parameters('MOG_FastTravel');
    Moghunter.fastTravel_lastIndex = String(Moghunter.parameters['是否记住上一个地图选项'] || "true"); 
    Moghunter.fastTravel_playBgm = String(Moghunter.parameters['是否播放世界地图音乐'] || "false");
    Moghunter.fastTravel_BgmFileName =  String(Moghunter.parameters['世界地图音乐'] || "");
	Moghunter.fastTravel_fadeBgm = String(Moghunter.parameters['进入后是否淡化音乐'] || "true");
	Moghunter.fastTravel_MapMoveSpeed = Number(Moghunter.parameters['镜头移动速度'] || 35);
    Moghunter.fastTravel_fadeSpeed = Number(Moghunter.parameters['选择后延迟'] || 15); 
    Moghunter.fastTravel_zoomAnime = String(Moghunter.parameters['是否使用缩放效果'] || "true");
	Moghunter.fastTravel_rotationAnime = String(Moghunter.parameters['是否使用旋转效果'] || "false");
    Moghunter.fastTravel_CenterX = Number(Moghunter.parameters['平移-地图坐标点 X'] || 0);
	Moghunter.fastTravel_CenterY = Number(Moghunter.parameters['平移-地图坐标点 Y'] || 0);
    Moghunter.fastTravelNewColor = Number(Moghunter.parameters['新地图文本颜色'] || 6);
	Moghunter.fastTravel_directionCancel = String(Moghunter.parameters['取消后是否朝后'] || "true"); 	
    Moghunter.fastTravel_ListX = Number(Moghunter.parameters['平移-坐标窗口 X'] || 616);
	Moghunter.fastTravel_ListY = Number(Moghunter.parameters['平移-坐标窗口 Y'] || 145);	
    Moghunter.fastTravel_ListSlideX = Number(Moghunter.parameters['坐标窗口起点 X'] || 100);
	Moghunter.fastTravel_ListSlideY = Number(Moghunter.parameters['坐标窗口起点 Y'] || 0);	
	Moghunter.fastTravel_ListSlideTime = Number(Moghunter.parameters['坐标窗口移动时长'] || 20);	
	Moghunter.fastTravel_ListLayout_visible = String(Moghunter.parameters['是否使用坐标窗口布局'] || "true") === "true"; 	
	Moghunter.fastTravel_ListLayoutX = Number(Moghunter.parameters['平移-坐标窗口布局 X'] || 0);
	Moghunter.fastTravel_ListLayoutY = Number(Moghunter.parameters['平移-坐标窗口布局 Y'] || -53);
    Moghunter.fastTravel_ListWidth = Number(Moghunter.parameters['坐标窗口宽度'] || 200);
	Moghunter.fastTravel_ListHeight = Number(Moghunter.parameters['坐标窗口高度'] || 290);
	Moghunter.fastTravel_List_fontsize = Number(Moghunter.parameters['坐标窗口字体大小'] || 22);
	Moghunter.fastTravel_List_col = Number(Moghunter.parameters['坐标窗口列数'] || 1);
    Moghunter.fastTravel_Prev_X = Number(Moghunter.parameters['平移-坐标介绍图 X'] || 160);
	Moghunter.fastTravel_Prev_Y = Number(Moghunter.parameters['平移-坐标介绍图 Y'] || 300);
    Moghunter.fastTravel_PrevSlideX = Number(Moghunter.parameters['坐标介绍图起点 X'] || -100);
	Moghunter.fastTravel_PrevSlideY = Number(Moghunter.parameters['坐标介绍图起点 Y'] || 0);
	Moghunter.fastTravel_PrevSlideTime = Number(Moghunter.parameters['坐标介绍图移动时长'] || 20);
    Moghunter.fastTravel_desc_X = Number(Moghunter.parameters['平移-坐标描述 X'] || 50);
	Moghunter.fastTravel_desc_Y = Number(Moghunter.parameters['平移-坐标描述 Y'] || 440);	
	Moghunter.fastTravel_desc_width = Number(Moghunter.parameters['坐标描述宽度'] || 560);	
	Moghunter.fastTravel_desc_size = Number(Moghunter.parameters['坐标描述字体大小'] || 20);	
    Moghunter.fastTravel_ComA_X = Number(Moghunter.parameters['平移-城镇按钮 X'] || 470);
	Moghunter.fastTravel_ComA_Y = Number(Moghunter.parameters['平移-城镇按钮 Y'] || 20);	
    Moghunter.fastTravel_ComB_X = Number(Moghunter.parameters['平移-迷宫按钮 X'] || 575);
	Moghunter.fastTravel_ComB_Y = Number(Moghunter.parameters['平移-迷宫按钮 Y'] || 20);	
    Moghunter.fastTravel_ComC_X = Number(Moghunter.parameters['平移-其他按钮 X'] || 680);
	Moghunter.fastTravel_ComC_Y = Number(Moghunter.parameters['平移-其他按钮 Y'] || 20);
	Moghunter.fastTravel_CursorX = Number(Moghunter.parameters['平移-类型指针 X'] || 0); 	
	Moghunter.fastTravel_CursorY = Number(Moghunter.parameters['平移-类型指针 Y'] || 0); 	
	Moghunter.fastTravel_CursorFloat = String(Moghunter.parameters['是否使用类型指针滑动效果'] || "true");
	Moghunter.fastTravel_CursorBX = Number(Moghunter.parameters['平移-坐标指针 X'] || 0); 	
	Moghunter.fastTravel_CursorBY = Number(Moghunter.parameters['平移-坐标指针 Y'] || 0); 	
	Moghunter.fastTravel_rotate_speed = Number(Moghunter.parameters['坐标指针旋转速度'] || 0); 	
	Moghunter.fastTravel_CursorBFloat = String(Moghunter.parameters['是否使用坐标指针浮动效果'] || "true"); 	
	Moghunter.fastTravel_Comp_Show = String(Moghunter.parameters['是否显示地图完成度'] || "true"); 
    Moghunter.fastTravel_Comp_X = Number(Moghunter.parameters['平移-地图完成度 X'] || 590); 	
	Moghunter.fastTravel_Comp_Y = Number(Moghunter.parameters['平移-地图完成度 Y'] || 513);
	Moghunter.fastTravel_Comp_FontSize = Number(Moghunter.parameters['地图完成度字体大小'] || 22);
	Moghunter.fastTravel_back_speed_X = Number(Moghunter.parameters['地图背景速度 X'] || 0);
	Moghunter.fastTravel_back_speed_Y = Number(Moghunter.parameters['地图背景速度 Y'] || 0);
	Moghunter.fastTravel_add_to_menu = String(Moghunter.parameters['是否添加到主菜单'] || "false");
	Moghunter.fastTravel_add_to_menu_name = String(Moghunter.parameters['主菜单显示名']);
	Moghunter.fastTravel_cancel_btn = Number(Moghunter.parameters['取消后触发开关'] || 52);
	
	Moghunter.src_world_Layout = String(Moghunter.parameters['资源-整体布局']);
	Moghunter.src_world_Map = String(Moghunter.parameters['资源-地图']);
	Moghunter.src_world_Parallax = String(Moghunter.parameters['资源-地图背景']);
	Moghunter.src_world_Points_visible = String(Moghunter.parameters['是否显示地图坐标点']|| "true"); 	
	Moghunter.src_world_Points = String(Moghunter.parameters['资源-地图坐标点']);
	Moghunter.src_world_Cursor_B_visible = String(Moghunter.parameters['是否显示坐标指针']|| "true"); 	
	Moghunter.src_world_Cursor_B = String(Moghunter.parameters['资源-坐标指针']);
	Moghunter.src_world_Cursor_A = String(Moghunter.parameters['资源-类型指针']);
	Moghunter.src_world_ListName_A = String(Moghunter.parameters['资源-城镇按钮']);
	Moghunter.src_world_ListName_B = String(Moghunter.parameters['资源-迷宫按钮']);
	Moghunter.src_world_ListName_C = String(Moghunter.parameters['资源-其他按钮']);
	Moghunter.src_world_ListLayout = String(Moghunter.parameters['资源-菜单布局']);
	
	Moghunter.fastTravel_Towns_length = 60;
	Moghunter.fastTravel_Towns[0] = [];
	Moghunter.fastTravelDungeons_length = 60;
	Moghunter.fastTravelDungeons[0] = [];
	Moghunter.fastTravelOther_length = 60;
	Moghunter.fastTravelOther[0] = [];
	
	for (var i = 1; i <= Moghunter.fastTravel_Towns_length; i++) {
		if( Moghunter.parameters['城镇坐标-' + String(i) ] != "" ){
			Moghunter.fastTravel_Towns[i] = JSON.parse(Moghunter.parameters['城镇坐标-' + String(i) ]);
			Moghunter.fastTravel_Towns[i]['name'] = Moghunter.fastTravel_Towns[i]["坐标名"];
			Moghunter.fastTravel_Towns[i]['desc'] = Moghunter.fastTravel_Towns[i]["坐标描述"];
			Moghunter.fastTravel_Towns[i]['x'] = Moghunter.fastTravel_Towns[i]["坐标X位置"];
			Moghunter.fastTravel_Towns[i]['y'] = Moghunter.fastTravel_Towns[i]["坐标Y位置"];
			Moghunter.fastTravel_Towns[i]['mapID'] = Number(Moghunter.fastTravel_Towns[i]["目标地图ID"]);
			Moghunter.fastTravel_Towns[i]['mapX'] = Number(Moghunter.fastTravel_Towns[i]["目标地图 X"]);
			Moghunter.fastTravel_Towns[i]['mapY'] = Number(Moghunter.fastTravel_Towns[i]["目标地图 Y"]);
			Moghunter.fastTravel_Towns[i]['direction'] = Number(String(Moghunter.fastTravel_Towns[i]["朝向"]));
			Moghunter.fastTravel_Towns[i]['src_img'] = String(Moghunter.fastTravel_Towns[i]["资源-坐标介绍图"]);
		}else{
			break;
		}
	}
	for (var i = 1; i <= Moghunter.fastTravelDungeons_length; i++) {
		if( Moghunter.parameters['迷宫坐标-' + String(i) ] != "" ){
			Moghunter.fastTravelDungeons[i] = JSON.parse(Moghunter.parameters['迷宫坐标-' + String(i) ]);
			Moghunter.fastTravelDungeons[i]['name'] = Moghunter.fastTravelDungeons[i]["坐标名"];
			Moghunter.fastTravelDungeons[i]['desc'] = Moghunter.fastTravelDungeons[i]["坐标描述"];
			Moghunter.fastTravelDungeons[i]['x'] = Moghunter.fastTravelDungeons[i]["坐标X位置"];
			Moghunter.fastTravelDungeons[i]['y'] = Moghunter.fastTravelDungeons[i]["坐标Y位置"];
			Moghunter.fastTravelDungeons[i]['mapID'] = Number(Moghunter.fastTravelDungeons[i]["目标地图ID"]);
			Moghunter.fastTravelDungeons[i]['mapX'] = Number(Moghunter.fastTravelDungeons[i]["目标地图 X"]);
			Moghunter.fastTravelDungeons[i]['mapY'] = Number(Moghunter.fastTravelDungeons[i]["目标地图 Y"]);
			Moghunter.fastTravelDungeons[i]['direction'] = Number(String(Moghunter.fastTravelDungeons[i]["朝向"]));
			Moghunter.fastTravelDungeons[i]['src_img'] = String(Moghunter.fastTravelDungeons[i]["资源-坐标介绍图"]);
		}else{
			break;
		}
	}
	for (var i = 1; i <= Moghunter.fastTravelOther_length; i++) {
		if( Moghunter.parameters['其他坐标-' + String(i) ] != "" ){
			Moghunter.fastTravelOther[i] = JSON.parse(Moghunter.parameters['其他坐标-' + String(i) ]);
			Moghunter.fastTravelOther[i]['name'] = Moghunter.fastTravelOther[i]["坐标名"];
			Moghunter.fastTravelOther[i]['desc'] = Moghunter.fastTravelOther[i]["坐标描述"];
			Moghunter.fastTravelOther[i]['x'] = Moghunter.fastTravelOther[i]["坐标X位置"];
			Moghunter.fastTravelOther[i]['y'] = Moghunter.fastTravelOther[i]["坐标Y位置"];
			Moghunter.fastTravelOther[i]['mapID'] = Number(Moghunter.fastTravelOther[i]["目标地图ID"]);
			Moghunter.fastTravelOther[i]['mapX'] = Number(Moghunter.fastTravelOther[i]["目标地图 X"]);
			Moghunter.fastTravelOther[i]['mapY'] = Number(Moghunter.fastTravelOther[i]["目标地图 Y"]);
			Moghunter.fastTravelOther[i]['direction'] =  Number(String(Moghunter.fastTravelOther[i]["朝向"]));
			Moghunter.fastTravelOther[i]['src_img'] = String(Moghunter.fastTravelOther[i]["资源-坐标介绍图"]);
		}else{
			break;
		}
	}
	
	
//=============================================================================
// ** ImageManager
//=============================================================================

//==============================
// * Fast Travel
//==============================
ImageManager.loadfasttravel = function(filename) {
    return this.loadBitmap('img/Menu__fasttravel/', filename, 0, true);
};


//=============================================================================
// ** Game_Interpreter
//=============================================================================	

//==============================
// * PluginCommand
//==============================
var _mog_fastravel_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _mog_fastravel_pluginCommand.call(this,command, args)
	if (command === "fast_travel")  {
        SceneManager.push(Scene_Fast_Travel);
		//this.wait(10);
    } else if (command === "enable_town")  {
		if ($gameSystem._fastTravelTowns[Number(args[1])]) {
		   $gameSystem._fastTravelTowns[Number(args[1])][0] = true;
	    };
    } else if (command === "disable_town")  {
		if ($gameSystem._fastTravelTowns[Number(args[1])]) {
		    $gameSystem._fastTravelTowns[Number(args[1])][0] = false;
		};
	} else if (command === "enable_dungeon")  {
		if ($gameSystem._fastTravelDungeons[Number(args[1])]) {
	    	$gameSystem._fastTravelDungeons[Number(args[1])][0] = true;
		};
    } else if (command === "disable_dungeon")  {
		if ($gameSystem._fastTravelDungeons[Number(args[1])]) {
    		$gameSystem._fastTravelDungeons[Number(args[1])][0] = false;
		};
	} else if (command === "enable_other")  {
		if ($gameSystem._fastTravelOther[Number(args[1])]) {
		    $gameSystem._fastTravelOther[Number(args[1])][0] = true;
		};
    } else if (command === "disable_other")  {
		if ($gameSystem._fastTravelOther[Number(args[1])]) {
		    $gameSystem._fastTravelOther[Number(args[1])][0] = false;
		};
	};	
	return true;
};

//=============================================================================
// ** Game_System
//=============================================================================	

//==============================
// * Initialize
//==============================
var _mog_fastravel_gsys_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    _mog_fastravel_gsys_initialize.call(this);
    this._fastTravelTowns = [];
	this._fastTravelDungeons = [];
	this._fastTravelOther = [];
	this._fastTravelData = null;
	this._fastTravelSelection = [-1,""];
	this._fastTravelSelected = false;
    for (var i = 0; i < Moghunter.fastTravel_Towns.length; i++) {
		this._fastTravelTowns[i] = [false,Moghunter.fastTravel_Towns[i],false];
	}; 
	for (var i = 0; i < Moghunter.fastTravelDungeons.length; i++) {
		this._fastTravelDungeons[i] = [false,Moghunter.fastTravelDungeons[i],false];
	};
	for (var i = 0; i < Moghunter.fastTravelOther.length; i++) {
		this._fastTravelOther[i] = [false,Moghunter.fastTravelOther[i],false];
	};
	this._fastTravelComp = (Moghunter.fastTravel_Towns.length + Moghunter.fastTravelDungeons.length + Moghunter.fastTravelOther.length) - 3;
};

//=============================================================================
// ** Window Travel List
//=============================================================================	
function Window_TravelList() {
    this.initialize.apply(this, arguments);
};

Window_TravelList.prototype = Object.create(Window_Selectable.prototype);
Window_TravelList.prototype.constructor = Window_TravelList;

//==============================
// * Initialize
//==============================
Window_TravelList.prototype.initialize = function(x, y, width, height) {
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
	this._infoID = 0;
	this.activate();
	this.select(0);	
	if(!Moghunter.fastTravel_ListLayout_visible){
		this.opacity = 255;
	}else{
		this.opacity = 0;
	}
	this.refresh();
};

//==============================
// * data Is Avaliable
//==============================
Window_TravelList.prototype.dataIsAvailable = function(data) {
	if (!data) {return false};
	if (!data[0] || (data[0] && data[0] === false)) {return false};
	if (!data[1]) {return false};
	return true;
};

//==============================
// * data Is Avaliable
//==============================
Window_TravelList.prototype.setID = function(id) {
	this._infoID  = id;
	this.select(0);
	this.refresh();
};

//==============================
// * Make Data
//==============================
Window_TravelList.prototype.makeData = function() {
	this._data = [];
	if (this._infoID === 0) {
		var dataInfo = $gameSystem._fastTravelTowns;
	} else if (this._infoID === 1) {
		var dataInfo = $gameSystem._fastTravelDungeons;
	} else {
		var dataInfo = $gameSystem._fastTravelOther;
	};	
	for (var i = 0; i < dataInfo.length; i++) {
		var data = dataInfo[i + 1];
	    if (this.dataIsAvailable(data)) {this._data.push(data)};
	};
};

//==============================
// * MaxCols
//==============================
Window_TravelList.prototype.maxCols = function() {
    return Moghunter.fastTravel_List_col;
};

//==============================
// * MaxItems
//==============================
Window_TravelList.prototype.maxItems = function() {
    return this._data ? this._data.length : 1;
};

//==============================
// * IsCurrentItemEnabled
//==============================
Window_TravelList.prototype.item = function(i) {
    return this._data[i + 1];
};

//==============================
// * Refresh
//==============================
Window_TravelList.prototype.refresh = function() {
	this.makeData();
	this.contents.clear();	
	this.createContents();	
	this.contents.fontItalic = true;
    this.drawAllItems();
};

//==============================
// * DrawItem
//==============================
Window_TravelList.prototype.drawItem = function(i) {
	this.contents.fontSize = Moghunter.fastTravel_List_fontsize;	
	var rect = this.itemRect(i);
	rect.width -= this.textPadding();	
	this.changeTextColor(this.normalColor());
	if (!this._data[i][2]) {this.changeTextColor(this.textColor(Moghunter.fastTravelNewColor))}
	this.drawText(this._data[i][1].name , rect.x, rect.y,rect.width,"center");
};

//==============================
// * Process OK
//==============================
Window_TravelList.prototype.processOk = function() {
	 if (this._data.length === 0) {return}
	 $gameSystem._fastTravelSelected = true;
	 this.deactivate();
	 this.visible = false;
	 if (String(Moghunter.fastTravel_fadeBgm) === "true") {AudioManager.fadeOutBgm(2);};
	 SoundManager.playOk();
	 this.enableMapColor();
};

//==============================
// * enable Map Color
//==============================
Window_TravelList.prototype.enableMapColor = function() {
	var dataMap = [];
	if (this._infoID === 0) {
		var dataInfo = $gameSystem._fastTravelTowns;
	} else if (this._infoID === 1) {
		var dataInfo = $gameSystem._fastTravelDungeons;
	} else {
		var dataInfo = $gameSystem._fastTravelOther;
	};	
	for (var i = 0; i < dataInfo.length; i++) {
		 var data = dataInfo[i];
		 if (data && data[1]) {
		     if (data[1].name === this._data[this._index][1].name) {
					if (this._infoID === 0) {
						$gameSystem._fastTravelTowns[i][2] = true;
					} else if (this._infoID === 1) {
						$gameSystem._fastTravelDungeons[i][2] = true;
					} else {
						$gameSystem._fastTravelOther[i][2] = true;
					};				  
			  };
	      };
	};
};

//==============================
// * isOKEnable
//==============================
Window_TravelList.prototype.isOkEnabled = function() {
    return true;
};


// ======================================================================
// * Scene_Menu
// ======================================================================
var _mog_fastravel_createCommandWindow = Scene_Menu.prototype.createCommandWindow;
Scene_Menu.prototype.createCommandWindow = function() {
	_mog_fastravel_createCommandWindow.call(this);
    this._commandWindow.setHandler('Fast_Travel',   this.command_Fast_Travel.bind(this));
};
Scene_Menu.prototype.command_Fast_Travel = function() {
    SceneManager.push(Scene_Fast_Travel);
};
// ======================================================================
// * Window_MenuCommand
// ======================================================================
var _mog_fastravel_addOriginalCommands = Window_MenuCommand.prototype.addOriginalCommands;
Window_MenuCommand.prototype.addOriginalCommands = function() {
	_mog_fastravel_addOriginalCommands.call(this);
	if(Moghunter.fastTravel_add_to_menu === "true"){
		this.addCommand(Moghunter.fastTravel_add_to_menu_name, 'Fast_Travel', this.areMainCommandsEnabled());
	}
};

//=============================================================================
// ** Scene Fast Travel
//=============================================================================	
function Scene_Fast_Travel() {
    this.initialize.apply(this, arguments);
};

Scene_Fast_Travel.prototype = Object.create(Scene_Base.prototype);
Scene_Fast_Travel.prototype.constructor = Scene_Fast_Travel;

//==============================
// * Initialize
//==============================
Scene_Fast_Travel.prototype.initialize = function() {
    Scene_Base.prototype.initialize.call(this);
	this._Dataindex = 0;
	this._DataindexOld = -1;
	this._WidowindexOld = 0;
	this._np = [-1,-1];
	this._name = "";
	this._mapPos = [];
	this._needCenter = true;
	this._mapMoving = false;
	this._currentData = null;
	this._fadeTime =  Math.min(Math.max(Moghunter.fastTravel_fadeSpeed,1),255);	
	this._zoomFade = String(Moghunter.fastTravel_zoomAnime) === "true" ? true : false;
	this._rotationFade = String(Moghunter.fastTravel_rotationAnime) === "true" ? true : false;
	$gameSystem._fastTravelData = null;
	$gameSystem._fastTravelSelected = false;
	this._phase = 0;
	this._mapPos[0] = (Graphics.boxWidth / 2) + Moghunter.fastTravel_CenterX;
	this._mapPos[1] = (Graphics.boxHeight / 2) + Moghunter.fastTravel_CenterY;
	this._DataTown = this.makeData(0);
	this._DataDungeon = this.makeData(1);
	this._DataOther = this.makeData(2);
	if (String(Moghunter.fastTravel_playBgm) === "true") {this.playBgm()};
};

//==============================
// * Play Bgm
//==============================
Scene_Fast_Travel.prototype.playBgm = function() {
		BattleManager.saveBgmAndBgs();
	    var bgm = {};
	    bgm.name = String(Moghunter.fastTravel_BgmFileName);
	    bgm.pitch = 100;
	    bgm.volume = 100;
		AudioManager.playBgm(bgm,0);
};

//==============================
// * Create
//==============================
Scene_Fast_Travel.prototype.create = function() {
	this._field = new Sprite();
	this.addChild(this._field);
    this.createParallax();
	this._Mapfield = new Sprite();
	this._field.addChild(this._Mapfield);	
	this._field.opacity = 0	
	this.createMap();
	this.createStage();
	this.createPoints();
	this.createCursorNext();
	this.createLayout();	
	this.createListLayout();
	this.createListName();
	this.createCursor();
	this.createWindowList(); 
	this.createCompleted(); 
	if (String(Moghunter.fastTravel_lastIndex) === "true") { 
	    if ($gameSystem._fastTravelSelection[0] >= 0) {this.checkLastSelection()};
	};
};

//==============================
// * check Last Selection
//==============================
Scene_Fast_Travel.prototype.checkLastSelection = function() {
    if ($gameSystem._fastTravelSelection[0] === 0) {
	    var dataInfo = this._DataTown;
	} else if($gameSystem._fastTravelSelection[0] === 1) {
		var dataInfo = this._DataDungeon;
	} else {
		var dataInfo = this._DataOther;
	};
	var index = -1;
	for (var i = 0; i < dataInfo.length; i++) {
		var data = dataInfo[i][1];
	    if (data.name === $gameSystem._fastTravelSelection[1].name) {index = i};
	};	
	if (index >= 0) {
		this._Dataindex = $gameSystem._fastTravelSelection[0];
		this._windowList.setID(this._Dataindex)
		if (index >= this._windowList.maxItems()) {index = 0};
		this._windowList.select(index);
        this.refreshPointData();		
	};
};

//==============================
// * update Fade In 
//==============================
Scene_Fast_Travel.prototype.updateFadeIn = function() {
	this._fadeTime--;
	if (this._sprite_mcursor) {this._sprite_mcursor.visible = false};
	if ($gameSystem._fastTravelSelected) {
	if (this._zoomFade && !this._snapShot) {this.createSnapShot()};
	    if (this._fadeTime <= 0) {this._field.opacity -= 4};
		if (this._snapShot) {
			this._snapShot.scale.x += 0.005;
			this._snapShot.scale.y = this._snapShot.scale.x;
			if (this._rotationFade) {this._snapShot.rotation += 0.01};
			this._snapShot.opacity = this._field.opacity;
		};
	    if (this._field.opacity <= 0) {
			$gameSystem._fastTravelSelected = false;
		    this.selectMap();				
		};
	} else {
		this._field.opacity -= 8; 
	    if (this._field.opacity <= 0) {
		    SceneManager.pop();		
		    if(SceneManager._stack.length > 0){ SceneManager.pop(); }		
		};		
	};
	this._parallax.opacity = this._field.opacity ;
};

//==============================
// * Create Snap Shot
//==============================
Scene_Fast_Travel.prototype.createSnapShot = function() {
	 this._stageprev.visible = false;
	 this._windowList.deactivate();
	 this._windowList.visible = false;	 
	 this._windowList.update();
     this._snapShot = new Sprite();
	 this._snapShot.bitmap = SceneManager.snap();
	 this._snapShot.anchor.x = 0.5;
	 this._snapShot.anchor.y = 0.5;
	 this._snapShot.x = this._snapShot.bitmap.width / 2;
	 this._snapShot.y = this._snapShot.bitmap.height / 2;
	 this.addChild(this._snapShot);
	 this._field.visible = false;
};


//==============================
// * update Fade Out
//==============================
Scene_Fast_Travel.prototype.updateFadeOut = function() {
	 this._field.opacity += 8;
     if (this._field.opacity >= 255) {
		 this._phase = 1; 
		 this._windowList.activate();
	 }
	 this._parallax.opacity = this._field.opacity ;
};

//==============================
// * set Center Start
//==============================
Scene_Fast_Travel.prototype.setCenterStart = function() {
	this._needCenter = false;
    this._Mapfield.x = -this._mapPos[0];
	this._Mapfield.y = -this._mapPos[1];
	if (!this._currentData) {
        this._np = [this._map.bitmap.width / 2,this._map.bitmap.height / 2];
	} else {
		this._Mapfield.x =  -this._np[0] + this._mapPos[0];
		this._Mapfield.y =  -this._np[1] + this._mapPos[1];
	};
};

//==============================
// * Make Data
//==============================
Scene_Fast_Travel.prototype.makeData = function(index) {
	var dataMap = [];
	if (index === 0) {
		var dataInfo = $gameSystem._fastTravelTowns;
	} else if (index === 1) {
		var dataInfo = $gameSystem._fastTravelDungeons;
	} else {
		var dataInfo = $gameSystem._fastTravelOther;
	};	
	for (var i = 0; i < dataInfo.length; i++) {
		var data = dataInfo[i + 1];
	    if (this.dataIsAvailable(data)) {dataMap.push(data)};
	};
	return dataMap;
};

//==============================
// * data Is Avaliable
//==============================
Scene_Fast_Travel.prototype.dataIsAvailable = function(data) {
	if (!data) {return false};
	if (!data[0]) {return false};
	if (!data[1]) {return false};
	return true;
};

//==============================
// * Create Parallax
//==============================
Scene_Fast_Travel.prototype.createParallax = function() {
    this._parallax =  new TilingSprite(ImageManager.loadfasttravel(Moghunter.src_world_Parallax));
    this._parallax.move(0, 0, Graphics.boxWidth, Graphics.boxHeight);
	this._field.addChild(this._parallax);
};

//==============================
// * Create Map
//==============================
Scene_Fast_Travel.prototype.createMap = function() {
    this._map = new Sprite(ImageManager.loadfasttravel(Moghunter.src_world_Map));
    this._Mapfield.addChild(this._map);
};

//==============================
// * Create Layout
//==============================
Scene_Fast_Travel.prototype.createLayout = function() {
    this._layout = new Sprite(ImageManager.loadfasttravel(Moghunter.src_world_Layout));
	this._field.addChild(this._layout);	
};

//==============================
// * Create Stage
//==============================
Scene_Fast_Travel.prototype.createStage = function() {
	 this._stageprev = new Sprite();
	 this._stageprev.bitmap = new Bitmap(32,32);
	 this._stageprev.x = Moghunter.fastTravel_Prev_X + Moghunter.fastTravel_PrevSlideX;
	 this._stageprev.y = Moghunter.fastTravel_Prev_Y + Moghunter.fastTravel_PrevSlideY;
	 this._stageprev.opacity = 255;
	 this._stageprev.anchor.x = 0.5;
	 this._stageprev.anchor.y = 0.5;	 
     this._helpWindow = new Window_Help();
     this._field.addChild(this._helpWindow);
	 this._field.addChild(this._stageprev);	
};
	
//==============================
// * refresh Stage
//==============================
Scene_Fast_Travel.prototype.refreshStage = function() {
     var name = String(this._currentData.src_img);
	 this._stageprev.bitmap = ImageManager.loadfasttravel(name);
	 this._stageprev.x = Moghunter.fastTravel_Prev_X + Moghunter.fastTravel_PrevSlideX;
	 this._stageprev.y = Moghunter.fastTravel_Prev_Y + Moghunter.fastTravel_PrevSlideY;
     this._stageprev.opacity = 0;
	 this._helpWindow.x = Moghunter.fastTravel_desc_X;
	 this._helpWindow.y = Moghunter.fastTravel_desc_Y;
	 this._helpWindow.width = Moghunter.fastTravel_desc_width;
     this._helpWindow.opacity = 0;
	 this._helpWindow.setText_rv(this._currentData.desc);
};

//==============================
// * update Stage
//==============================
Scene_Fast_Travel.prototype.updateStage = function() {
	 if (this._mapMoving) {return};
	 this._stageprev.x -= Moghunter.fastTravel_PrevSlideX/Moghunter.fastTravel_PrevSlideTime;
	 this._stageprev.y -= Moghunter.fastTravel_PrevSlideY/Moghunter.fastTravel_PrevSlideTime;
	 this._stageprev.opacity += 256/Moghunter.fastTravel_PrevSlideTime;
	 if (this._stageprev.opacity >= 255) {
		this._stageprev.x = Moghunter.fastTravel_Prev_X;
		this._stageprev.y = Moghunter.fastTravel_Prev_Y;
		this._stageprev.opacity = 255;
	 };
	 this._stageprev.visible = !this._currentData ? false : true;
};

//==============================
// * Set Text Rv
//==============================
Window_Help.prototype.setText_rv = function(text) {
    if (this._text !== text) {
		var words = text.split('|');
		var text1 = "";
		var text2 = "";
		text1 = words[0];
		if( words.length > 1 ){
			text2 = words[1];
		}
        this._text = text;
        this.contents.clear();
		this.contents.fontSize = Moghunter.fastTravel_desc_size;
		this.drawText(text1,0,0,(this.width - 32));
		this.drawText(text2,0,this.lineHeight(),(this.width - 32));
    };
};

//==============================
// * Create Completed
//==============================
Scene_Fast_Travel.prototype.createCompleted = function() {
	 this._comp = new Sprite(new Bitmap(200,32));
     this._comp.x = Moghunter.fastTravel_Comp_X
	 this._comp.y = Moghunter.fastTravel_Comp_Y
	 this._comp.bitmap.fontSize = Moghunter.fastTravel_Comp_FontSize;
	 var ct = 	this._DataTown.length + this._DataDungeon.length + this._DataOther.length;
	 var perc = Math.floor(ct / $gameSystem._fastTravelComp * 100)
	 var total = ct + " / " + $gameSystem._fastTravelComp
     this._comp.bitmap.drawText(total + " (" + perc + "%"  + ")",0,0,200,32, "center");
	 this._field.addChild(this._comp);	
	 this._comp.visible = String(Moghunter.fastTravel_Comp_Show) === "true" ? true : false;
};

//==============================
// * Create List Name
//==============================
Scene_Fast_Travel.prototype.createListName = function() {
    this._listName = [];
	this._listName[0] = new Sprite(ImageManager.loadfasttravel(Moghunter.src_world_ListName_A))
	this._listName[0].x = Moghunter.fastTravel_ComA_X;
	this._listName[0].y = Moghunter.fastTravel_ComA_Y;
	this._field.addChild(this._listName[0]);
	this._listName[1] = new Sprite(ImageManager.loadfasttravel(Moghunter.src_world_ListName_B))
	this._listName[1].x = Moghunter.fastTravel_ComB_X;
	this._listName[1].y = Moghunter.fastTravel_ComB_Y;	
	this._field.addChild(this._listName[1]);	
	this._listName[2] = new Sprite(ImageManager.loadfasttravel(Moghunter.src_world_ListName_C))
	this._listName[2].x = Moghunter.fastTravel_ComC_X;
	this._listName[2].y = Moghunter.fastTravel_ComC_Y;	
	this._field.addChild(this._listName[2]);	
};

//==============================
// * update List Name
//==============================
Scene_Fast_Travel.prototype.updateListName = function() {
    this.slideDown(this._listName[0],0,Moghunter.fastTravel_ComA_Y);
	this.slideDown(this._listName[1],1,Moghunter.fastTravel_ComB_Y);
	this.slideDown(this._listName[2],2,Moghunter.fastTravel_ComC_Y);
};

//==============================
// * update List Name
//==============================
Scene_Fast_Travel.prototype.slideDown = function(sprite,index,y) {
	if (this._Dataindex === index) {
		if (sprite.y < y + 20) {
			sprite.y += 4;
			if (sprite.y > y + 20) {sprite.y = y + 20};
		};
	} else {
	    if (sprite.y > y) {
		    sprite.y -= 4;
			if (sprite.y < y ) {sprite.y = y}; 
		};
	};
};

//==============================
// * Create Cursor
//==============================
Scene_Fast_Travel.prototype.createCursor = function() {
    this._cursor = new Sprite(ImageManager.loadfasttravel(Moghunter.src_world_Cursor_A));
	this._cursor.anchor.x = 0.5;
	this._cursorAni = [0,0,0];
	this._cursorFloat = String(Moghunter.fastTravel_CursorFloat) === "true" ? true : false;
	this._field.addChild(this._cursor);	
};

//==============================
// * Update Cursor
//==============================
Scene_Fast_Travel.prototype.updateCursor = function() {
	 if (this._cursorFloat) {this.updateCursorFloat()};
	 if (this._Dataindex === 0) {
         this._cursor.x = this._listName[0].x + (this._listName[0].bitmap.width / 2) + Moghunter.fastTravel_CursorX;
	     this._cursor.y = this._listName[0].y + this._listName[0].bitmap.height + this._cursorAni[1] + Moghunter.fastTravel_CursorY;
	 } else if (this._Dataindex === 1) {
         this._cursor.x = this._listName[1].x + (this._listName[1].bitmap.width / 2) + Moghunter.fastTravel_CursorX;
	     this._cursor.y = this._listName[1].y + this._listName[1].bitmap.height + this._cursorAni[1] + Moghunter.fastTravel_CursorY;		 
	 } else {
         this._cursor.x = this._listName[2].x + (this._listName[2].bitmap.width / 2) + Moghunter.fastTravel_CursorX;
	     this._cursor.y = this._listName[2].y + this._listName[2].bitmap.height + this._cursorAni[1] + Moghunter.fastTravel_CursorY;				 
	 };
};

//==============================
// * Update Cursor Float
//==============================
Scene_Fast_Travel.prototype.updateCursorFloat = function() {
	 this._cursorAni[3] ++;
	 if (this._cursorAni[3] < 3) {return};
	 this._cursorAni[3] = 0; 
     this._cursorAni[0] ++
	 if (this._cursorAni[0] < 10) {
		 this._cursorAni[1] --;
	 } else if (this._cursorAni[0] < 20) {
		 this._cursorAni[1] ++;
	 } else {
		 this._cursorAni[0] = 0;
		 this._cursorAni[1] = 0;
	 };
};

//==============================
// * Create Cursor Next
//==============================
Scene_Fast_Travel.prototype.createCursorNext = function() {
    this._cursorB = new Sprite(ImageManager.loadfasttravel(""));
	if(Moghunter.src_world_Cursor_B_visible === "true"){
		this._cursorB = new Sprite(ImageManager.loadfasttravel(Moghunter.src_world_Cursor_B));
	}
	this._cursorB.anchor.x = 0.5;
	this._cursorB.anchor.y = 0.5;
	this._cursorBAni = [0,0,0];
	this._cursorBFloat = String(Moghunter.fastTravel_CursorBFloat) === "true" ? true : false;
	this._Mapfield.addChild(this._cursorB);	
};

//==============================
// * Update CursorB
//==============================
Scene_Fast_Travel.prototype.updateCursorB = function() {
	 if (this._cursorBFloat) {this.updateCursorBFloat()};
     //this._cursorB.x = this._np[0] + Moghunter.fastTravel_CursorBX;
     //this._cursorB.y = this._np[1] + this._cursorBAni[1] + Moghunter.fastTravel_CursorBY - 10;
     this._cursorB.x = Number(this._np[0]) + Moghunter.fastTravel_CursorBX;
	 this._cursorB.y = Number(this._np[1]) + this._cursorBAni[1] + Moghunter.fastTravel_CursorBY;
	 this._cursorB.rotation += Moghunter.fastTravel_rotate_speed;
	 this._cursorB.visible = !this._currentData ? false : true;
};

//==============================
// * Update Cursor B Float
//==============================
Scene_Fast_Travel.prototype.updateCursorBFloat = function() {
	 this._cursorBAni[3] ++;
	 if (this._cursorBAni[3] < 3) {return};
	 this._cursorBAni[3] = 0; 
     this._cursorBAni[0] ++
	 if (this._cursorBAni[0] < 10) {
		 this._cursorBAni[1] ++;
	 } else if (this._cursorBAni[0] < 20) {
		 this._cursorBAni[1] --;
	 } else {
		 this._cursorBAni[0] = 0;
		 this._cursorBAni[1] = 0;
	 };
};

//==============================
// * Create Points
//==============================
Scene_Fast_Travel.prototype.createPoints = function() {
    this._pointTown = [];
	this._pointDungeon = [];
	this._pointOther = [];
	this._pointImg = ImageManager.loadfasttravel("");
	if( Moghunter.src_world_Points_visible === "true" ){
		this._pointImg = ImageManager.loadfasttravel(Moghunter.src_world_Points);
	}
	this._pointNeedRefresh = true;
	for (var i = 0; i < this._DataTown.length; i++) {
		 this._pointTown[i] = new Sprite(this._pointImg);
		 this._pointTown[i].x = this._DataTown[i][1].x;
		 this._pointTown[i].y = this._DataTown[i][1].y;
		 this._pointTown[i].anchor.x = 0.5;
		 this._pointTown[i].anchor.y = 0.5;
		 this._Mapfield.addChild(this._pointTown[i]);
	};
	for (var i = 0; i < this._DataDungeon.length; i++) {
		 this._pointDungeon[i] = new Sprite(this._pointImg);
		 this._pointDungeon[i].x = this._DataDungeon[i][1].x;
		 this._pointDungeon[i].y = this._DataDungeon[i][1].y;	
		 this._pointDungeon[i].anchor.x = 0.5;
		 this._pointDungeon[i].anchor.y = 0.5;
		 this._Mapfield.addChild(this._pointDungeon[i]);
	};
	for (var i = 0; i < this._DataOther.length; i++) {
		 this._pointOther[i] = new Sprite(this._pointImg);
		 this._pointOther[i].x = this._DataOther[i][1].x;
		 this._pointOther[i].y = this._DataOther[i][1].y;
		 this._pointOther[i].anchor.x = 0.5;
		 this._pointOther[i].anchor.y = 0.5;
		 this._Mapfield.addChild(this._pointOther[i]);
	};		
};

//==============================
// * refresh Points
//==============================
Scene_Fast_Travel.prototype.refreshPoint = function() {
	this._pointNeedRefresh = false;
    this.setFramePoint(this._pointTown,0);
	this.setFramePoint(this._pointDungeon,1);
	this.setFramePoint(this._pointOther,2);
};

//==============================
// * set Frame Point
//==============================
Scene_Fast_Travel.prototype.setFramePoint = function(sprites,index) {
	var cw = this._pointImg.width / 3;
	var ch = this._pointImg.height;
	var rg = cw * index;
	for (var i = 0; i < sprites.length; i++) {
		 sprites[i].setFrame(rg,0,cw,ch);
	};
	
};

//==============================
// * update Points
//==============================
Scene_Fast_Travel.prototype.updatePoints = function() {
	if (this._pointNeedRefresh &&this._pointImg.isReady()) {this.refreshPoint()};
};

//==============================
// * Create  List Layout
//==============================
Scene_Fast_Travel.prototype.createListLayout = function() {
	 this._listLayout = new Sprite(ImageManager.loadfasttravel(Moghunter.src_world_ListLayout));
	 if(!Moghunter.fastTravel_ListLayout_visible){
		this._listLayout = new Sprite("");
	 }
	 this._field.addChild(this._listLayout); 
};

//==============================
// * update  List Layout
//==============================
Scene_Fast_Travel.prototype.updateListLayout = function() {
	 this._listLayout.x = this._windowList.x + Moghunter.fastTravel_ListLayoutX;
	 this._listLayout.y = this._windowList.y + Moghunter.fastTravel_ListLayoutY;
	 this._listLayout.opacity = this._windowList.contentsOpacity;
	 this._listLayout.visible = this._windowList.visible;
};

//==============================
// * Create Window List
//==============================
Scene_Fast_Travel.prototype.createWindowList = function() {
	var w = Moghunter.fastTravel_ListWidth;
	var h = Moghunter.fastTravel_ListHeight;
	var x = Moghunter.fastTravel_ListX;
	var y = Moghunter.fastTravel_ListY;	
    this._windowList = new Window_TravelList(x,y,w,h);
	this._windowList.deactivate();
	this._windowList.x = Moghunter.fastTravel_ListX + Moghunter.fastTravel_ListSlideX;
	this._windowList.y = Moghunter.fastTravel_ListY + Moghunter.fastTravel_ListSlideY;
	this._windowList.contentsOpacity = 0;
	this._field.addChild(this._windowList);
	this.updateListLayout();
};

//==============================
// * update Window List
//==============================
Scene_Fast_Travel.prototype.updateWindowList = function() {
	this._windowList.x -= Moghunter.fastTravel_ListSlideX/Moghunter.fastTravel_ListSlideTime;
	this._windowList.y -= Moghunter.fastTravel_ListSlideY/Moghunter.fastTravel_ListSlideTime;
	this._windowList.contentsOpacity += 256/Moghunter.fastTravel_ListSlideTime;
	if (this._windowList.contentsOpacity >= 255) {
		this._windowList.x = Moghunter.fastTravel_ListX;
		this._windowList.y = Moghunter.fastTravel_ListY;
		this._windowList.contentsOpacity = 255;
	};
};

//==============================
// * Need Refresh Point DAta
//==============================
Scene_Fast_Travel.prototype.needRefreshPointData = function() {
    if (this._DataindexOld != this._Dataindex) {return true};
	if (this._WidowindexOld != this._windowList._index) {return true};
	return false;
};

//==============================
// * refresh Point Data
//==============================
Scene_Fast_Travel.prototype.refreshPointData = function() {
	this._currentData = null;
	$gameSystem._fastTravelData = null;
    this._DataindexOld = this._Dataindex;
	this._WidowindexOld = this._windowList._index;
	if (this._Dataindex === 0) {
		var data = this._DataTown;
	} else if (this._Dataindex === 1) {
	    var data = this._DataDungeon;
	} else {
		var data = this._DataOther;
	};	
	if (!data || (data && data.length === 0) || !data[this._WidowindexOld]) {
    	return
	};
	this._name = data[this._WidowindexOld][1].name;
	this._currentData = data[this._WidowindexOld][1]; 
	$gameSystem._fastTravelData = data[this._WidowindexOld][1]; 
    this._np = [data[this._WidowindexOld][1].x,data[this._WidowindexOld][1].y];
	this.refreshStage();
};

//==============================
// * update Command
//==============================
Scene_Fast_Travel.prototype.updateCommand = function() {
	//物品多于2列时需要作出判断（两种情况：index移不动了、index加到了下一行或者上一行）【这里用_oldindex，物品界面用_index，原因不明…】
     if (Input.isRepeated('left') ) {
		if( this._windowList.maxCols()>1 ){
			var cur_pos = this._list_oldindex % this._windowList.maxCols();
			if( this._list_oldindex == this._windowList._index 
			|| cur_pos == 0 ){
				this.nextData(-1);
			}
		}else{
			this.nextData(-1);
		}
		
	 } else if (Input.isRepeated('right') ) { 
		if( this._windowList.maxCols()>1 ){
			var cur_pos = this._list_oldindex % this._windowList.maxCols();
			if( this._list_oldindex == this._windowList._index 
			|| cur_pos == this._windowList.maxCols()-1 ){
				this.nextData(1);
			}
		}else{
			this.nextData(1);
		}
		 
	 }else if ( Input.isRepeated('pagedown')) { 
		this.nextData(-1);
	 }else if ( Input.isRepeated('pageup')) { 
		this.nextData(1);
	 }else if (Input.isTriggered('ok')) { 
		 if (this._currentData) {
			 this._windowList.visible = false;
			 this._windowList.deactivate();
			 $gameSystem._fastTravelSelection = [this._Dataindex,this._currentData];
		 } else {
		     SoundManager.playBuzzer();
		 };
	 } else if (Input.isTriggered('cancel') || TouchInput.isCancelled()) { 
		 this.executeCancel();
	 } else if (TouchInput.isTriggered()) {
		 this.checkTouchOnListCom()
	 };
	 this._list_oldindex = this._windowList._index;
};
	
//==============================
// * check Touch On List Com
//==============================
Scene_Fast_Travel.prototype.checkTouchOnListCom = function() {
     if (this.isOnSprite(this._listName[0])) {
		 this._Dataindex = 0;
		 this.nextData(0);
		 this._list_oldindex = 0;
	 } else if (this.isOnSprite(this._listName[1])) {
		 this._Dataindex = 1;
		 this.nextData(0);
		 this._list_oldindex = 0;
	 } else if (this.isOnSprite(this._listName[2])) {	 
		 this._Dataindex = 2;
		 this.nextData(0);		
		 this._list_oldindex = 0; 
	 };
};	

//==============================
// * is On Sprite
//==============================
Scene_Fast_Travel.prototype.isOnSprite = function(sprite) {
	 var cw = sprite.bitmap.width;
	 var ch = sprite.bitmap.height;
	 if (TouchInput.x < sprite.x) { return false};
	 if (TouchInput.x > sprite.x + cw) { return false};
	 if (TouchInput.y < sprite.y) { return false};
	 if (TouchInput.y > sprite.y + ch) { return false};
	 return true;	 
};	

//==============================
// * Select Stage
//==============================
Scene_Fast_Travel.prototype.executeCancel = function() {
	 SoundManager.playCancel();
	 if (String(Moghunter.fastTravel_playBgm) === "true") {
	     AudioManager.stopBgm();
	     BattleManager.replayBgmAndBgs();	 
	 };
	 this._phase = 2; 
	 this._windowList.deactivate();
	 $gameSwitches._data[Moghunter.fastTravel_cancel_btn] = true;
	 if (String(Moghunter.fastTravel_directionCancel) === "true") { this.setPlayerDirectionforCancel()};
};

//==============================
// * Set Player Direction for 
//==============================
Scene_Fast_Travel.prototype.setPlayerDirectionforCancel = function() {
	if ($gamePlayer._direction === 2) {
	    $gamePlayer.setDirection(8)
	} else if($gamePlayer._direction === 4) {
		$gamePlayer.setDirection(6)
	} else if($gamePlayer._direction === 6) {	
		$gamePlayer.setDirection(4)
	} else {
        $gamePlayer.setDirection(2)
	};
};

//==============================
// * Select Map
//==============================
Scene_Fast_Travel.prototype.selectMap = function() {
	if (this._currentData) {
        $gameSystem._fastTravelSelection = [this._Dataindex,this._currentData];
	};	
	 $gameSystem._fastTravelSelected = false;
	 var dir = this.setDirection(this._currentData.direction);
     $gamePlayer.reserveTransfer(this._currentData.mapID, this._currentData.mapX, this._currentData.mapY, dir, 0);
	 //SceneManager.goto(Scene_Map);
	 this._phase = 2; 
	 this._windowList.deactivate();
};

//==============================
// * set Direction
//==============================
Scene_Fast_Travel.prototype.setDirection = function(dir) {
	if (dir === 4 || dir === 6 || dir === 8) {return dir};
	return 2;
};

//==============================
// * next Data
//==============================
Scene_Fast_Travel.prototype.nextData = function(value) {
    this._Dataindex += value;
	if (this._Dataindex > 2) {this._Dataindex = 0};
	if (this._Dataindex < 0) {this._Dataindex = 2};
	SoundManager.playCursor();
	this._windowList.setID(this._Dataindex);
	this._windowList.x = Moghunter.fastTravel_ListX + Moghunter.fastTravel_ListSlideX;
	this._windowList.y = Moghunter.fastTravel_ListY + Moghunter.fastTravel_ListSlideY;
	this._windowList.contentsOpacity = 0;
}; 

//==============================
// * Update Parallax
//==============================
Scene_Fast_Travel.prototype.updateParallax = function() {
    this._parallax.origin.x += Moghunter.fastTravel_back_speed_X;
	this._parallax.origin.y += Moghunter.fastTravel_back_speed_Y;
}; 

//==============================
// * Update Parallax
//==============================
Scene_Fast_Travel.prototype.updateMapPosition = function() {
     if (this.needRefreshPointData()) {this.refreshPointData()};
	 this._Mapfield.x = this.mapMoveTo(this._Mapfield.x,-this._np[0] + this._mapPos[0]);
	 this._Mapfield.y = this.mapMoveTo(this._Mapfield.y,-this._np[1] + this._mapPos[1]);
	 if (this._Mapfield.x === (-this._np[0] + this._mapPos[0]) && this._Mapfield.y === (-this._np[1] + this._mapPos[1])) {
		 this._mapMoving = false; 
	 } else {
		 this._mapMoving = true; 
	 };
}; 

//==============================
// * Map Move To
//==============================
Scene_Fast_Travel.prototype.mapMoveTo = function(value,real_value) {
	if (value == real_value) {return value};
	var dnspeed = 3 + (Math.abs(value - real_value) / Moghunter.fastTravel_MapMoveSpeed);
	if (value > real_value) {value -= dnspeed;
	    if (value < real_value) {value = real_value};}
    else if (value < real_value) {value  += dnspeed;
    	if (value  > real_value) {value  = real_value};		
    };
	return Math.floor(value);
};

//==============================
// * Update
//==============================
Scene_Fast_Travel.prototype.update = function() {
    Scene_Base.prototype.update.call(this);
	if (this._needCenter) {
		if (this._map.bitmap.isReady()) {this.setCenterStart()};
		return;
	};	
    if (this._phase === 1 && !$gameSystem._fastTravelSelected) {this.updateCommand()};
	if (this._phase > 0) {
		this.updateMapPosition();
		this.updateWindowList();
		this.updateListLayout();
	};
	this.updateParallax();
	this.updatePoints();
	this.updateCursor();
	this.updateCursorB();
	this.updateStage();
	this.updateListName();
	if (this._phase === 0) {this.updateFadeOut()
	} else if ((!this._mapMoving && $gameSystem._fastTravelSelected) || this._phase === 2) {this.updateFadeIn()};
};
