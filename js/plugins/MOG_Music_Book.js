//=============================================================================
// MOG_Music_Book.js
//=============================================================================

/*:
 * @plugindesc (v1.5)[v1.8]  面板 - 音乐书
 * @author Moghunter  （Drill_up翻译+优化）
 * 
 * @Drill_LE_param "音乐-%d"
 * @Drill_LE_parentKey "---音乐组%d至%d---"
 * @Drill_LE_var "Moghunter.musicbook_length"
 * 
 * @help  
 * =============================================================================
 * +++ MOG - Music Book (v1.5) +++
 * By Moghunter 
 * https://mogplugins.wordpress.com/
 * =============================================================================
 * 音乐书系统，你可以在菜单中收集或播放的音乐。
 * 【现已支持插件关联资源的打包、加密】
 *
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.插件的作用域：菜单界面。
 *   属于自定义的面板，用于展示音乐。
 * 2.音乐书分成4个部分：音乐列表窗口、进度条、音乐组、杂项数据。
 * 3.如果你添加了新的音乐，记得随时删掉旧存档，因为插件使用了全局
 *   存储，载入游戏后，会自动覆盖开启/关闭音乐的配置。
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 资源路径：img/Menu__musicbook （Menu后面有两个下划线）
 * 先确保项目img文件夹下是否有Menu__musicbook文件夹。
 * 要查看所有关联资源文件的插件，可以去看看"插件清单.xlsx"。
 * 使用背景，需要配置资源文件：
 *
 * 资源-整体布局
 * 资源-静态背景（音乐书与菜单背景没有交互）
 * 资源-进度条
 * 资源-进度指针
 * 资源-音乐
 * 资源-背景图片（播放指定音乐时切换的图片）
 * 资源-漂浮粒子
 *
 * 注意，配置音乐时，从1开始依次设置音乐，如果中途有空设置，那么空设置后面
 * 的音乐配置都不会被加载。
 *
 * -----------------------------------------------------------------------------
 * ----激活条件
 * 最初的音乐书的所有音乐都是上锁的，你需要通过插件指令来设置：
 *
 * 插件指令（解锁）：enable_music : A
 * 插件指令（上锁）：disable_music : A
 *
 * 参数A：音乐的id号
 *
 * 除了手动解锁外，如果在战斗中播放了指定的音乐，音乐书也会自动解锁相关音乐。
 *
 * -----------------------------------------------------------------------------
 * ----插件条件
 * 如果粒子没有正常显示，则需要导入标题 MOG_TitleParticles粒子插件 才能生效。
 *
 * -----------------------------------------------------------------------------
 * ----可选设定
 * 你可以通过插件指令，直接打开音乐书页面。
 *
 * 插件指令（打开界面）：  open_music_book
 * 插件指令（添加菜单项）：music_book_add_to_menu
 * 插件指令（移除菜单项）：music_book_remove_menu
 * 插件指令（添加标题项）：music_book_add_to_title
 * 插件指令（移除标题项）：music_book_remove_title
 * 
 * -----------------------------------------------------------------------------
 * ----关于Drill_up优化：
 * [v1.1]
 * 使得该插件支持关联资源的打包、加密。
 * 部署时勾选去除无关文件，本插件中相关的文件不会被去除。
 * [v1.2]
 * （mog的这个插件可能很久没管了，这里改动优化了许多地方）
 * 原插件需要在脚本中配置，且图片和音乐名字必须一样。这里分离了条件，并可以
 * 快捷设置你想添加的音乐了。
 * 添加了 用语-未解锁音乐 项。
 * 添加了控制音乐解锁的插件指令。
 * [v1.3]
 * 把音乐书的窗口全弄出来了，一共有3个。
 * [v1.4]
 * 使得音乐书可以添加到标题窗口里面。并添加了插件指令。
 * 修复了音乐数量只有5个问题，修复了粒子问题。
 * [v1.5]
 * 修改了插件分类。
 * [v1.6]
 * 修改了插件关联的资源文件夹。
 * [v1.7]
 * 修复了启动画面播放音乐时，该插件出现的空指针错误。
 * [v1.8]
 * 添加了最大值编辑的支持。
 * 
 * @param ---杂项---
 * @desc
 *
 * @param 资源-整体布局
 * @parent ---杂项---
 * @desc 音乐书的整体布局。
 * @default 音乐书-整体布局
 * @require 1
 * @dir img/Menu__musicbook/
 * @type file
 *
 * @param 资源-静态背景
 * @parent ---杂项---
 * @desc 音乐书固定静态背景的图片资源。音乐书与菜单和粒子都没有交互，是单独配置的插件。
 * @default 音乐书-默认背景
 * @require 1
 * @dir img/Menu__musicbook/
 * @type file
 *
 * @param 是否在菜单中显示
 * @parent ---杂项---
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true
 *
 * @param 用语-菜单名称
 * @parent 是否在菜单中显示
 * @desc 菜单项显示的名称。
 * @default 音乐书
 *
 * @param 是否在标题窗口中显示
 * @parent ---杂项---
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true-显示,false-不显示。注意数据存储的位置，如果是正常存储，标题将打开上一存档的数据。没有存档则会报错。
 * @default false
 *
 * @param 用语-标题窗口名称
 * @parent 是否在标题窗口中显示
 * @desc 标题窗口显示的名称。
 * @default 音乐书
 *
 * @param 数据是否全局存储
 * @parent 是否在标题窗口中显示
 * @type boolean
 * @on 全局存储
 * @off 正常存储
 * @desc true-存储在全局游戏中,false-存在存档记录中,音乐书的解锁隐藏状态存储位置。(该设置不会立即生效,要多试)
 * @default false
 *
 * @param 用语-完成度
 * @parent ---杂项---
 * @desc 表示"完成度"的信息用语。
 * @default 完成度
 *
 * @param 用语-未解锁音乐
 * @parent ---杂项---
 * @desc 表示未解锁音乐的信息用语。
 * @default -木有发现-
 * 
 * @param ---音乐组 1至20---
 * @desc
 *
 * @param 音乐-1
 * @parent ---音乐组 1至20---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-2
 * @parent ---音乐组 1至20---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-3
 * @parent ---音乐组 1至20---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-4
 * @parent ---音乐组 1至20---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-5
 * @parent ---音乐组 1至20---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-6
 * @parent ---音乐组 1至20---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-7
 * @parent ---音乐组 1至20---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-8
 * @parent ---音乐组 1至20---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-9
 * @parent ---音乐组 1至20---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-10
 * @parent ---音乐组 1至20---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-11
 * @parent ---音乐组 1至20---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-12
 * @parent ---音乐组 1至20---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-13
 * @parent ---音乐组 1至20---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-14
 * @parent ---音乐组 1至20---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-15
 * @parent ---音乐组 1至20---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-16
 * @parent ---音乐组 1至20---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-17
 * @parent ---音乐组 1至20---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-18
 * @parent ---音乐组 1至20---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-19
 * @parent ---音乐组 1至20---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-20
 * @parent ---音乐组 1至20---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 * 
 * @param ---音乐组21至40---
 * @desc
 *
 * @param 音乐-21
 * @parent ---音乐组21至40---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-22
 * @parent ---音乐组21至40---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-23
 * @parent ---音乐组21至40---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-24
 * @parent ---音乐组21至40---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-25
 * @parent ---音乐组21至40---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-26
 * @parent ---音乐组21至40---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-27
 * @parent ---音乐组21至40---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-28
 * @parent ---音乐组21至40---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-29
 * @parent ---音乐组21至40---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-30
 * @parent ---音乐组21至40---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-31
 * @parent ---音乐组21至40---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-32
 * @parent ---音乐组21至40---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-33
 * @parent ---音乐组21至40---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-34
 * @parent ---音乐组21至40---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-35
 * @parent ---音乐组21至40---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-36
 * @parent ---音乐组21至40---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-37
 * @parent ---音乐组21至40---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-38
 * @parent ---音乐组21至40---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-39
 * @parent ---音乐组21至40---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-40
 * @parent ---音乐组21至40---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param ---音乐组41至60---
 * @desc
 *
 * @param 音乐-41
 * @parent ---音乐组41至60---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-42
 * @parent ---音乐组41至60---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-43
 * @parent ---音乐组41至60---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-44
 * @parent ---音乐组41至60---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-45
 * @parent ---音乐组41至60---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-46
 * @parent ---音乐组41至60---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-47
 * @parent ---音乐组41至60---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-48
 * @parent ---音乐组41至60---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-49
 * @parent ---音乐组41至60---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-50
 * @parent ---音乐组41至60---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-51
 * @parent ---音乐组41至60---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-52
 * @parent ---音乐组41至60---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-53
 * @parent ---音乐组41至60---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-54
 * @parent ---音乐组41至60---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-55
 * @parent ---音乐组41至60---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-56
 * @parent ---音乐组41至60---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-57
 * @parent ---音乐组41至60---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-58
 * @parent ---音乐组41至60---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-59
 * @parent ---音乐组41至60---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-60
 * @parent ---音乐组41至60---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param ---音乐组61至80---
 * @desc
 *
 * @param 音乐-61
 * @parent ---音乐组61至80---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-62
 * @parent ---音乐组61至80---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-63
 * @parent ---音乐组61至80---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-64
 * @parent ---音乐组61至80---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-65
 * @parent ---音乐组61至80---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-66
 * @parent ---音乐组61至80---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-67
 * @parent ---音乐组61至80---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-68
 * @parent ---音乐组61至80---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-69
 * @parent ---音乐组61至80---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-70
 * @parent ---音乐组61至80---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-71
 * @parent ---音乐组61至80---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-72
 * @parent ---音乐组61至80---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-73
 * @parent ---音乐组61至80---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-74
 * @parent ---音乐组61至80---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-75
 * @parent ---音乐组61至80---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-76
 * @parent ---音乐组61至80---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-77
 * @parent ---音乐组61至80---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-78
 * @parent ---音乐组61至80---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-79
 * @parent ---音乐组61至80---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-80
 * @parent ---音乐组61至80---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param ---音乐组81至100---
 * @desc
 *
 * @param 音乐-81
 * @parent ---音乐组81至100---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-82
 * @parent ---音乐组81至100---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-83
 * @parent ---音乐组81至100---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-84
 * @parent ---音乐组81至100---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-85
 * @parent ---音乐组81至100---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-86
 * @parent ---音乐组81至100---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-87
 * @parent ---音乐组81至100---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-88
 * @parent ---音乐组81至100---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-89
 * @parent ---音乐组81至100---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-90
 * @parent ---音乐组81至100---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-91
 * @parent ---音乐组81至100---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-92
 * @parent ---音乐组81至100---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-93
 * @parent ---音乐组81至100---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-94
 * @parent ---音乐组81至100---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-95
 * @parent ---音乐组81至100---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-96
 * @parent ---音乐组81至100---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-97
 * @parent ---音乐组81至100---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-98
 * @parent ---音乐组81至100---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-99
 * @parent ---音乐组81至100---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param 音乐-100
 * @parent ---音乐组81至100---
 * @type struct<MusicBook>
 * @desc 设置音乐的属性。
 * @default 
 *
 * @param ---音乐列表窗口---
 * @desc
 *
 * @param 收起延迟
 * @parent ---音乐列表窗口---
 * @type number
 * @min 1
 * @desc 没有操作时，选择框会在一段时间后收起，单位帧。（1秒60帧）
 * @default 120
 * 
 * @param 平移-列表窗口 X
 * @parent ---音乐列表窗口---
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 10
 *
 * @param 平移-列表窗口 Y
 * @parent ---音乐列表窗口---
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 135
 *
 * @param 列表窗口起点 X
 * @parent ---音乐列表窗口---
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的x轴值，单位像素。（可为负数）
 * @default -100
 *
 * @param 列表窗口起点 Y
 * @parent ---音乐列表窗口---
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的y轴值，单位像素。（可为负数）
 * @default 0
 *
 * @param 列表窗口移动时长
 * @parent ---音乐列表窗口---
 * @type number
 * @min 1
 * @desc 从原位置到偏移的位置所需的时间，单位帧。（1秒60帧）
 * @default 30
 *
 * @param 列表窗口返回时长
 * @parent ---音乐列表窗口---
 * @type number
 * @min 1
 * @desc 从偏移的位置回到原位置所需的时间，单位帧。（1秒60帧）
 * @default 15
 *
 * @param 是否使用列表窗口布局
 * @parent ---音乐列表窗口---
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default true
 *
 * @param 资源-列表窗口
 * @desc 列表窗口的图片资源。
 * @parent 是否使用列表窗口布局
 * @default 音乐书-列表窗口
 * @require 1
 * @dir img/Menu__musicbook/
 * @type file
 *
 * @param 平移-列表窗口布局 X
 * @parent 是否使用列表窗口布局
 * @desc 修正图片的偏移用。以窗口的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default -10
 *
 * @param 平移-列表窗口布局 Y
 * @parent 是否使用列表窗口布局
 * @desc 修正图片的偏移用。以窗口的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 列表窗口宽度
 * @parent ---音乐列表窗口---
 * @type number
 * @min 50
 * @desc 窗口的高宽设置。注意，实际文本域的高宽要比该设置小一些，因为有内边距。具体去看看 "17.主菜单 > 窗口与布局.docx"。
 * @default 230
 *
 * @param 列表窗口高度
 * @parent ---音乐列表窗口---
 * @type number
 * @min 50
 * @desc 窗口的高宽设置。注意，实际文本域的高宽要比该设置小一些，因为有内边距。具体去看看 "17.主菜单 > 窗口与布局.docx"。
 * @default 360
 *
 * @param 列表窗口字体大小
 * @parent ---音乐列表窗口---
 * @type number
 * @min 1
 * @desc 列表窗口的字体大小。
 * @default 22
 *
 * @param 列表窗口列数
 * @parent ---音乐列表窗口---
 * @type number
 * @min 1
 * @desc 列表窗口的列数。
 * @default 1
 *
 * @param ---完成度窗口---
 * @desc
 * 
 * @param 平移-完成度 X
 * @parent ---完成度窗口---
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 510
 *
 * @param 平移-完成度 Y
 * @parent ---完成度窗口---
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 420
 *
 * @param 完成度起点 X
 * @parent ---完成度窗口---
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的x轴值，单位像素。（可为负数）
 * @default 60
 *
 * @param 完成度起点 Y
 * @parent ---完成度窗口---
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的y轴值，单位像素。（可为负数）
 * @default 0
 *
 * @param 完成度移动时长
 * @parent ---完成度窗口---
 * @type number
 * @min 1
 * @desc 从原位置到偏移的位置所需的时间，单位帧。（1秒60帧）
 * @default 30
 *
 * @param 完成度返回时长
 * @parent ---完成度窗口---
 * @type number
 * @min 1
 * @desc 从偏移的位置回到原位置所需的时间，单位帧。（1秒60帧）
 * @default 15
 *
 * @param 是否使用完成度布局
 * @parent ---完成度窗口---
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default true
 *
 * @param 资源-完成度
 * @desc 完成度的图片资源。
 * @parent 是否使用完成度布局
 * @default 
 * @require 1
 * @dir img/Menu__musicbook/
 * @type file
 *
 * @param 平移-完成度布局 X
 * @parent 是否使用完成度布局
 * @desc 修正图片的偏移用。以窗口的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 平移-完成度布局 Y
 * @parent 是否使用完成度布局
 * @desc 修正图片的偏移用。以窗口的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 完成度宽度
 * @parent ---完成度窗口---
 * @type number
 * @min 50
 * @desc 窗口的高宽设置。注意，实际文本域的高宽要比该设置小一些，因为有内边距。具体去看看 "17.主菜单 > 窗口与布局.docx"。
 * @default 290
 *
 * @param 完成度高度
 * @parent ---完成度窗口---
 * @type number
 * @min 50
 * @desc 窗口的高宽设置。注意，实际文本域的高宽要比该设置小一些，因为有内边距。具体去看看 "17.主菜单 > 窗口与布局.docx"。
 * @default 72
 *
 * @param 完成度字体大小
 * @parent ---完成度窗口---
 * @type number
 * @min 1
 * @desc 完成度的字体大小。
 * @default 22
 *
 *
 * @param ---帮助窗口---
 * @desc
 * 
 * @param 平移-帮助窗口 X
 * @parent ---帮助窗口---
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 0
 *
 * @param 平移-帮助窗口 Y
 * @parent ---帮助窗口---
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 510
 *
 * @param 帮助窗口起点 X
 * @parent ---帮助窗口---
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的x轴值，单位像素。（可为负数）
 * @default 0
 *
 * @param 帮助窗口起点 Y
 * @parent ---帮助窗口---
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的y轴值，单位像素。（可为负数）
 * @default 80
 *
 * @param 帮助窗口移动时长
 * @parent ---帮助窗口---
 * @type number
 * @min 1
 * @desc 从原位置到偏移的位置所需的时间，单位帧。（1秒60帧）
 * @default 30
 *
 * @param 帮助窗口返回时长
 * @parent ---帮助窗口---
 * @type number
 * @min 1
 * @desc 从偏移的位置回到原位置所需的时间，单位帧。（1秒60帧）
 * @default 15
 *
 * @param 是否使用帮助窗口布局
 * @parent ---帮助窗口---
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default true
 *
 * @param 资源-帮助窗口
 * @desc 帮助窗口的图片资源。
 * @parent 是否使用帮助窗口布局
 * @default 音乐书-帮助窗口
 * @require 1
 * @dir img/Menu__musicbook/
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
 * @default 0
 *
 * @param 帮助窗口宽度
 * @parent ---帮助窗口---
 * @type number
 * @min 50
 * @desc 窗口的高宽设置。注意，实际文本域的高宽要比该设置小一些，因为有内边距。具体去看看 "17.主菜单 > 窗口与布局.docx"。
 * @default 816
 *
 * @param 帮助窗口高度
 * @parent ---帮助窗口---
 * @type number
 * @min 50
 * @desc 窗口的高宽设置。注意，实际文本域的高宽要比该设置小一些，因为有内边距。具体去看看 "17.主菜单 > 窗口与布局.docx"。
 * @default 110
 *
 * @param 帮助窗口字体大小
 * @parent ---帮助窗口---
 * @type number
 * @min 1
 * @desc 帮助窗口的字体大小。
 * @default 22
 *
 * @param ---进度条---
 * @desc
 *
 * @param 资源-进度条
 * @parent ---进度条---
 * @desc 进度条的图片资源。
 * @default 音乐书-进度条
 * @require 1
 * @dir img/Menu__musicbook/
 * @type file
 *
 * @param 平移-进度条 X
 * @parent ---进度条---
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 90
 *
 * @param 平移-进度条 Y
 * @parent ---进度条---
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 420 
 *
 * @param 资源-进度指针
 * @parent ---进度条---
 * @desc 进度指针的图片资源。
 * @default 音乐书-进度指针
 * @require 1
 * @dir img/Menu__musicbook/
 * @type file
 *
 * @param 平移-进度指针 X
 * @parent ---进度条---
 * @desc 以进度框左上角的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default 0  
 *
 * @param 平移-进度指针 Y
 * @parent ---进度条---
 * @desc 以进度框左上角的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default 5  
 *
 * @param 平移-时间数字 X
 * @parent ---进度条---
 * @desc 以进度框左上角的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default 350
 *
 * @param 平移-时间数字 Y
 * @parent ---进度条---
 * @desc 以进度框左上角的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default 16
 */
 /*~struct~MusicBook:
 * 
 * @param 资源-音乐
 * @desc 指定bgm音乐资源。
 * @default 
 * @require 1
 * @dir audio/bgm/
 * @type file
 *
 * @param 音乐标题
 * @desc 音乐的标题文本。注意，音乐标题不能与其它重名。
 * @default 
 *
 * @param 音乐描述
 * @type note
 * @desc 音乐的描述文字。
 * @default 
 *
 * @param 资源-背景图片
 * @desc 指定音乐的背景图片资源。没有可以不设置。
 * @default 
 * @require 1
 * @dir img/Menu__musicbook/
 * @type file
 *
 * @param 资源-漂浮粒子
 * @desc 指定音乐漂浮粒子的资源。如果粒子没有正常显示,则需要导入 MOG_TitleParticles标题粒子插件 才能生效。
 * @default 
 * @require 1
 * @dir img/Menu__musicbook/
 * @type file
 *
 * @param 漂浮粒子X方向速度
 * @desc 漂浮粒子X方向的速度。可为小数,负数。（注意,两个速度都为0,粒子无法显示,如果y速度>=0,粒子只出现一次）
 * @default 0
 *
 * @param 漂浮粒子Y方向速度
 * @desc 漂浮粒子Y方向的速度。可为小数,负数。（注意,两个速度都为0,粒子无法显示,如果y速度>=0,粒子只出现一次）
 * @default -1
 *
 */

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//插件记录：
//		【该插件 上锁解锁为局部+全局 两个都存，其它变量混用】
//		
//

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_Music_Book = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_Music_Book');
    Moghunter.musicbook_command_menu = String(Moghunter.parameters['是否在菜单中显示'] || "true");
    Moghunter.musicbook_command_name = String(Moghunter.parameters['用语-菜单名称'] || "音乐书");
    Moghunter.musicbook_title_command_menu = String(Moghunter.parameters['是否在标题窗口中显示'] || "false");
    Moghunter.musicbook_title_command_name = String(Moghunter.parameters['用语-标题窗口名称'] || "音乐书");
    Moghunter.musicbook_title_data_global = String(Moghunter.parameters['数据是否全局存储'] || "false") === "true";
	Moghunter.musicbook_fade_time = Number(Moghunter.parameters['收起延迟'] || 120);
	Moghunter.musicbook_completion_word = String(Moghunter.parameters['用语-完成度'] || "Completion");
	Moghunter.musicbook_meter_x = Number(Moghunter.parameters['平移-进度条 X'] || 90);
	Moghunter.musicbook_meter_y = Number(Moghunter.parameters['平移-进度条 Y'] || 420);
	Moghunter.musicbook_point_x = Number(Moghunter.parameters['平移-进度指针 X'] || 0);
	Moghunter.musicbook_point_y = Number(Moghunter.parameters['平移-进度指针 Y'] || 5);	
    Moghunter.musicbook_time_number_x = Number(Moghunter.parameters['平移-时间数字 X'] || 350);
	Moghunter.musicbook_time_number_y = Number(Moghunter.parameters['平移-时间数字 Y'] || 16);
	
	Moghunter.musicbook_window_x = Number(Moghunter.parameters['平移-列表窗口 X'] || 10);
	Moghunter.musicbook_window_y = Number(Moghunter.parameters['平移-列表窗口 Y'] || 135);
	Moghunter.musicbook_window_slideX = Number(Moghunter.parameters['列表窗口起点 X'] || -100);
	Moghunter.musicbook_window_slideY = Number(Moghunter.parameters['列表窗口起点 Y'] || 0);
	Moghunter.musicbook_window_slideTime = Number(Moghunter.parameters['列表窗口移动时长'] || 30);
	Moghunter.musicbook_window_slideTimeback = Number(Moghunter.parameters['列表窗口返回时长'] || 15);
	Moghunter.musicbook_window_Layout_visible = String(Moghunter.parameters['是否使用列表窗口布局'] || "true") === "true";	
	Moghunter.musicbook_window_LayoutX = Number(Moghunter.parameters['平移-列表窗口布局 X'] || -10);
	Moghunter.musicbook_window_LayoutY = Number(Moghunter.parameters['平移-列表窗口布局 Y'] || 0);
	Moghunter.musicbook_window_width = Number(Moghunter.parameters['列表窗口宽度'] || 230);
	Moghunter.musicbook_window_height = Number(Moghunter.parameters['列表窗口高度'] || 360);
	Moghunter.musicbook_window_fontsize = Number(Moghunter.parameters['列表窗口字体大小'] || 22);
	Moghunter.musicbook_window_col = Number(Moghunter.parameters['列表窗口列数'] || 1);
	
	Moghunter.musicbook_comp_x = Number(Moghunter.parameters['平移-完成度 X'] || 510);
	Moghunter.musicbook_comp_y = Number(Moghunter.parameters['平移-完成度 Y'] || 420);
	Moghunter.musicbook_comp_slideX = Number(Moghunter.parameters['完成度起点 X'] || 60);
	Moghunter.musicbook_comp_slideY = Number(Moghunter.parameters['完成度起点 Y'] || 0);
	Moghunter.musicbook_comp_slideTime = Number(Moghunter.parameters['完成度移动时长'] || 30);
	Moghunter.musicbook_comp_slideTimeback = Number(Moghunter.parameters['完成度返回时长'] || 15);
	Moghunter.musicbook_comp_Layout_visible = String(Moghunter.parameters['是否使用完成度布局'] || "true") === "true";	
	Moghunter.musicbook_comp_LayoutX = Number(Moghunter.parameters['平移-完成度布局 X'] || 0);
	Moghunter.musicbook_comp_LayoutY = Number(Moghunter.parameters['平移-完成度布局 Y'] || 0);
	Moghunter.musicbook_comp_width = Number(Moghunter.parameters['完成度宽度'] || 290);
	Moghunter.musicbook_comp_height = Number(Moghunter.parameters['完成度高度'] || 72);
	Moghunter.musicbook_comp_fontsize = Number(Moghunter.parameters['完成度字体大小'] || 22);
	
	Moghunter.musicbook_help_x = Number(Moghunter.parameters['平移-帮助窗口 X'] || 0);
	Moghunter.musicbook_help_y = Number(Moghunter.parameters['平移-帮助窗口 Y'] || 510);
	Moghunter.musicbook_help_slideX = Number(Moghunter.parameters['帮助窗口起点 X'] || 0);
	Moghunter.musicbook_help_slideY = Number(Moghunter.parameters['帮助窗口起点 Y'] || 80);
	Moghunter.musicbook_help_slideTime = Number(Moghunter.parameters['帮助窗口移动时长'] || 30);
	Moghunter.musicbook_help_slideTimeback = Number(Moghunter.parameters['帮助窗口返回时长'] || 15);
	Moghunter.musicbook_help_Layout_visible = String(Moghunter.parameters['是否使用帮助窗口布局'] || "true") === "true";	
	Moghunter.musicbook_help_LayoutX = Number(Moghunter.parameters['平移-帮助窗口布局 X'] || 0);
	Moghunter.musicbook_help_LayoutY = Number(Moghunter.parameters['平移-帮助窗口布局 Y'] || 0);
	Moghunter.musicbook_help_width = Number(Moghunter.parameters['帮助窗口宽度'] || 816);
	Moghunter.musicbook_help_height = Number(Moghunter.parameters['帮助窗口高度'] || 110);
	Moghunter.musicbook_help_fontsize = Number(Moghunter.parameters['帮助窗口字体大小'] || 22);
	
	Moghunter.musicbook_locked = String(Moghunter.parameters['用语-未解锁音乐'] || "-木有发现-");
    Moghunter.src_Music_Book_layout = String(Moghunter.parameters['资源-整体布局']);
    Moghunter.src_Music_Book_layout_A = String(Moghunter.parameters['资源-列表窗口']);
    Moghunter.src_Music_Book_layout_B = String(Moghunter.parameters['资源-完成度']);
    Moghunter.src_Music_Book_layout_C = String(Moghunter.parameters['资源-帮助窗口']);
    Moghunter.src_Music_Book_A = String(Moghunter.parameters['资源-静态背景']);
    Moghunter.src_Music_Book_B = String(Moghunter.parameters['资源-进度条']);
    Moghunter.src_Music_Book_C = String(Moghunter.parameters['资源-进度指针']);
	
//=============================================================================
// ** TITLES SETTING
//=============================================================================	
	Moghunter.musicbook_length = 100;
	Moghunter.musicbook_data = [];
	for (var i = 0; i < Moghunter.musicbook_length; i++) {
		if( Moghunter.parameters['音乐-' + String(i+1) ] != "" ){
			//parse对空值转换会报错
			Moghunter.musicbook_data[i] = JSON.parse(Moghunter.parameters['音乐-' + String(i + 1) ]);
		}else{
			break;
		}
		Moghunter.musicbook_data[i][0] = String(Moghunter.musicbook_data[i]['资源-音乐']);
		Moghunter.musicbook_data[i][1] = String(Moghunter.musicbook_data[i]['音乐标题']);
		Moghunter.musicbook_data[i][2] = String(Moghunter.musicbook_data[i]['音乐描述']);
		Moghunter.musicbook_data[i][3] = String(Moghunter.musicbook_data[i]['资源-漂浮粒子']);
		Moghunter.musicbook_data[i][4] = Number(Moghunter.musicbook_data[i]['漂浮粒子X方向速度']);
		Moghunter.musicbook_data[i][5] = Number(Moghunter.musicbook_data[i]['漂浮粒子Y方向速度']);
		Moghunter.musicbook_data[i][6] = String(Moghunter.musicbook_data[i]['资源-背景图片']);
		//for(var a in Moghunter.musicbook_data[i]){
		//textb ="key:"+a+" value:"+Moghunter.musicbook_data[i][a]+"\n";
		//alert(textb);
		//}
	}
	
//=============================================================================
// ** 全局读取
//=============================================================================
	var _drill_global = DataManager.loadGlobalInfo();
	//alert(JSON.stringify(_drill_global));
	if( !Moghunter.global_mog_musicbook ){	//游戏没关情况
		if( _drill_global && _drill_global[0] && _drill_global[0]["_global_mog_musicbook"] ){		//游戏关闭后，重开读取global中的配置
			Moghunter.global_mog_musicbook = _drill_global[0]["_global_mog_musicbook"];
		}else{
			Moghunter.global_mog_musicbook = [];
			for(var i = 0; i < Moghunter.musicbook_data.length; i++){	//初始化
				Moghunter.global_mog_musicbook.push( false );
			}
		}
	}
	
	
//=============================================================================
// ** 全局存储
//=============================================================================
var _mog_musicbook_saveGlobal = DataManager.saveGlobalInfo;
DataManager.saveGlobalInfo = function(info) {	//第0个存档为全局存档
	if(!info[0]){info[0] = []};
	info[0]["_global_mog_musicbook"] = Moghunter.global_mog_musicbook;
	_mog_musicbook_saveGlobal.call(this,info);
};

DataManager.forceSaveGlobalInfo = function() {		//强制存储（任何改变的全局变量的地方都需要调用该方法）
	var globalInfo = this.loadGlobalInfo() || [];
	globalInfo[0] = this.makeSavefileInfo();
	this.saveGlobalInfo(globalInfo);
};

//=============================================================================
// ** ImageManager
//=============================================================================

//==============================
// * Music Book
//==============================
ImageManager.loadmusicbook = function(filename) {
    return this.loadBitmap('img/Menu__musicbook/', filename, 0, true);
};	

//=============================================================================
// ** Game_Interpreter
//=============================================================================	

//==============================
// * PluginCommand
//==============================
var _alias_mog_music_book_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_alias_mog_music_book_pluginCommand.call(this,command, args)
	if (command === "open_music_book")  {$gameSystem.music_book();};
	if (command === "enable_music" 
		&& Number(args[1]) <= Moghunter.global_mog_musicbook.length )  {
		Moghunter.global_mog_musicbook[Number(args[1])-1] = true;
		DataManager.forceSaveGlobalInfo();
		$gameSystem._music_list[Number(args[1])-1][0] = true;
	};
	if (command === "disable_music"
		&& Number(args[1]) <= Moghunter.global_mog_musicbook.length)  {
		Moghunter.global_mog_musicbook[Number(args[1])-1] = true;
		DataManager.forceSaveGlobalInfo();
		$gameSystem._music_list[Number(args[1])-1][0] = false;
	};
	if ( command === "music_book_add_to_menu" )  {
		Moghunter.musicbook_command_menu = "true";
	};
	if ( command === "music_book_remove_menu" )  {
		Moghunter.musicbook_command_menu = "false";
	};
	if ( command === "music_book_add_to_title" )  {
		Moghunter.musicbook_title_command_menu = "true";
	};
	if ( command === "music_book_remove_title" )  {
		Moghunter.musicbook_title_command_menu = "false";
	};
	return true;
};

//=============================================================================
// ** AudioManager
//=============================================================================	
//==============================
// * Play Bgm
//==============================
var _alias_mog_musicbook_aumngr_playBgm = AudioManager.playBgm
AudioManager.playBgm = function(bgm, pos) {
    _alias_mog_musicbook_aumngr_playBgm.call(this,bgm,pos)
	if ( $gameSystem && $gameSystem._music_list && bgm.name) {
		for (var i = 0; i < $gameSystem._music_list.length; i++) {
			if ($gameSystem._music_list[i][1] === bgm.name) {
				$gameSystem._music_list[i][0] = true;
				Moghunter.global_mog_musicbook[i] = true;
				DataManager.forceSaveGlobalInfo();
				break;
			}; 
		};
	};	
	if($gameTemp){
		$gameTemp._bgmBuffer = this._bgmBuffer;
	}
};

//==============================
// * Stop Bgm
//==============================
var _alias_mog_musicbook_stopBgm = AudioManager.stopBgm;
AudioManager.stopBgm = function() {
    _alias_mog_musicbook_stopBgm.call(this);
	if($gameTemp){
		$gameTemp._bgmBuffer = null;
	}
};

//==============================
// * Fade OutBgm
//==============================
var _alias_mog_musicbook_fadeOutBgm = AudioManager.fadeOutBgm;
AudioManager.fadeOutBgm = function(duration) {
    _alias_mog_musicbook_fadeOutBgm.call(this,duration);
	if($gameTemp){
		$gameTemp._bgmBuffer = null;
	}
};

//=============================================================================
// ** Scene Tittle 标题选项
//=============================================================================	
var _mog_musicbook_createCommandWindow = Scene_Title.prototype.createCommandWindow;
Scene_Title.prototype.createCommandWindow = function() {
    _mog_musicbook_createCommandWindow.call(this);
	this._commandWindow.setHandler('MusicBook',  this.commandMusicBook.bind(this));
};
Scene_Title.prototype.commandMusicBook = function() {
    this._commandWindow.close();
    SceneManager.push(Scene_Music_Book);
};
var _mog_musicbook_wtc_makeCommandList = Window_TitleCommand.prototype.makeCommandList;
Window_TitleCommand.prototype.makeCommandList = function() {
    _mog_musicbook_wtc_makeCommandList.call(this);
	if(Moghunter.musicbook_title_command_menu === "true" ){
		this.addCommand(String(Moghunter.musicbook_title_command_name),   'MusicBook');
	}
};	

//=============================================================================
// ** Game_Temp
//=============================================================================	

//==============================
// * Initialize
//==============================
var _alias_mog_musicbook_gtemp_initialize = Game_Temp.prototype.initialize
Game_Temp.prototype.initialize = function() {
	_alias_mog_musicbook_gtemp_initialize.call(this);
	this._bgmBuffer = null;
};

//=============================================================================
// ** Game_System
//=============================================================================	

//==============================
// * Bgm Duration
//==============================
Game_System.prototype.bgm_duration = function(type) {
	if (!$gameTemp._bgmBuffer || !$gameTemp._bgmBuffer.isReady()) {return 0};
	var duration = $gameTemp._bgmBuffer._totalTime / $gameTemp._bgmBuffer._pitch
	if (type === 0) {duration = Math.floor(duration);}
	return duration 
};

//==============================
// * Bgm pos
//==============================
Game_System.prototype.bgm_pos = function(type) {
	if (!$gameTemp._bgmBuffer || !$gameTemp._bgmBuffer.isReady()) {return 0};
    if (type === 0) {return Math.floor($gameTemp._bgmBuffer.seek());}
	else {return $gameTemp._bgmBuffer.seek()};
};

//==============================
// * Bgm bgm_loopLength
//==============================
Game_System.prototype.bgm_loopLength = function(type) {
	if (!$gameTemp._bgmBuffer || !$gameTemp._bgmBuffer.isReady()) {return 0};
    return $gameTemp._bgmBuffer._loopStart
};

//==============================
// * Bgm Length Text
//==============================
Game_System.prototype.bgmLengthText = function() {
    var hour = Math.floor(this.bgm_duration(0) / 60 / 60);
    var min = Math.floor(this.bgm_duration(0) / 60) % 60;
    var sec = this.bgm_duration(0) % 60;
    return hour.padZero(1) + ':' + min.padZero(2) + ':' + sec.padZero(2);
};

//==============================
// * Bgm Pos Text
//==============================
Game_System.prototype.bgmPosText = function() {
    var hour = Math.floor(this.bgm_pos(0) / 60 / 60);
    var min = Math.floor(this.bgm_pos(0) / 60) % 60;
    var sec = this.bgm_pos(0) % 60;
    return hour.padZero(1) + ':' + min.padZero(2) + ':' + sec.padZero(2);
};

//==============================
// * Make Music List
//==============================
Game_System.prototype.make_music_list = function() {
	var music_data = Moghunter.musicbook_data;
	this._music_list = [];
	for (var i = 0; i < music_data.length; i++) {
		 var e = false;
		 var t = "";
		 var h = "";
		 var pn = null;
		 var px = 0;
		 var py = 0;		 
		 if (music_data[i][0] === $dataSystem.titleBgm.name) {e = true};
	     if (music_data[i][1]) {t = music_data[i][1]};
		 if (music_data[i][2]) {h = music_data[i][2]};
		 if (music_data[i][3]) {pn = music_data[i][3]};
		 if (music_data[i][4]) {px = music_data[i][4]};
		 if (music_data[i][5]) {py = music_data[i][5]};
		 this._music_list[i] = [e,music_data[i][0],t,h,pn,px,py,music_data[i][6]];
	};
};

//==============================
// * Music Book
//==============================
Game_System.prototype.music_book = function() {
	if (!this._music_list) {return};
    SoundManager.playOk();
    SceneManager.push(Scene_Music_Book);
};

//=============================================================================
// ** Scene Map
//=============================================================================	

//==============================
// * Initialize
//==============================
var _alias_mog_music_book_create = Scene_Map.prototype.create
Scene_Map.prototype.create = function() {
	_alias_mog_music_book_create.call(this)
	if (!$gameSystem._music_list) {$gameSystem.make_music_list();};
	if( Moghunter.musicbook_title_data_global ){	//值其实已经存了全局和分档两次，这里只切换读取哪一个
		for(var i = 0 ;i < Moghunter.global_mog_musicbook.length ; i++){
			$gameSystem._music_list[i][0] = Moghunter.global_mog_musicbook[i];
		}
	}
}

//=============================================================================
// ** Window Music List
//=============================================================================	
function Window_MusicList() {
    this.initialize.apply(this, arguments);
};

Window_MusicList.prototype = Object.create(Window_Selectable.prototype);
Window_MusicList.prototype.constructor = Window_MusicList;

//==============================
// * Initialize
//==============================
Window_MusicList.prototype.initialize = function(x, y, width, height) {
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
	this._ismoved = false;
	this._data = $gameSystem._music_list;
	this.activate();
	this.select(0);	
	this.refresh();
};

//==============================
// * Set Top Row
//==============================
var _alias_mog_music_book_setTopRow = Window_MusicList.prototype.setTopRow;
Window_MusicList.prototype.setTopRow = function(row) {
    _alias_mog_music_book_setTopRow.call(this,row);
	this._ismoved = true;
};

//==============================
// * ScrollDown
//==============================
var _alias_mog_music_book_wm_scrollDown = Window_MusicList.prototype.scrollDown
Window_MusicList.prototype.scrollDown = function() {
   _alias_mog_music_book_wm_scrollDown.call(this);
   this._ismoved = true;
};

//==============================
// * ScrollUp
//==============================
var _alias_mog_music_book_wm_scrollUp = Window_MusicList.prototype.scrollUp
Window_MusicList.prototype.scrollUp = function() {
    _alias_mog_music_book_wm_scrollUp.call(this);
    this._ismoved = true;   
};

//==============================
// * PageDown
//==============================
var _alias_mog_music_book_wm_cursorPagedown = Window_MusicList.prototype.cursorPagedown
Window_MusicList.prototype.cursorPagedown = function() {
	_alias_mog_music_book_wm_cursorPagedown.call(this)
    this._ismoved = true; 
};

//==============================
// * PageUP
//==============================
var _alias_mog_music_book_wm_cursorPageup = Window_MusicList.prototype.cursorPageup
Window_MusicList.prototype.cursorPageup = function() {
	_alias_mog_music_book_wm_cursorPageup.call(this)
	this._ismoved = true; 
};

//==============================
// * MaxCols
//==============================
Window_MusicList.prototype.maxCols = function() {
    return Moghunter.musicbook_window_col;
};

//==============================
// * MaxItems
//==============================
Window_MusicList.prototype.maxItems = function() {
    return this._data ? this._data.length : 1;
};

//==============================
// * IsCurrentItemEnabled
//==============================
Window_MusicList.prototype.isCurrentItemEnabled = function(i) {
    return this._data[i][0];
};

//==============================
// * Refresh
//==============================
Window_MusicList.prototype.refresh = function() {
	this.createContents();	
	this.contents.clear();	
	this.contents.fontsize = Moghunter.musicbook_window_fontsize;
    this.drawAllItems();
};

//==============================
// * DrawItem
//==============================
Window_MusicList.prototype.drawItem = function(i) {
    if ( this._data[i]) {
		 this.changePaintOpacity(this.isCurrentItemEnabled(i));
			 var rect = this.itemRect(i);
			 rect.width -= this.textPadding();				 
			 if (this.isCurrentItemEnabled(i)) {
			     if (this._data[i][2] != "") {
				    this.drawText(this._data[i][2] , rect.x, rect.y, this.width - 60,"center");
				 }
				 else {
			       this.drawText(this._data[i][1] , rect.x, rect.y, this.width - 60,"center");
				 };
			 }
	    else {		 
			 this.drawText(Moghunter.musicbook_locked , rect.x, rect.y, this.width - 60,"center");
		 };
         this.changePaintOpacity(1);
    };
};

//==============================
// * Process OK
//==============================
Window_MusicList.prototype.processOk = function() {
};

//==============================
// * isOKEnable
//==============================
Window_MusicList.prototype.isOkEnabled = function() {
    return true;
};

//==============================
// * processCancel
//==============================
var _alias_mog_music_book_processCancel = Window_Selectable.prototype.processCancel
Window_MusicList.prototype.processCancel = function() {
	_alias_mog_music_book_processCancel.call(this);
	AudioManager.stopBgm();
	BattleManager.replayBgmAndBgs()
};


//=============================================================================
// ** Window_MusicComp
//=============================================================================	
function Window_MusicComp() {
    this.initialize.apply(this, arguments);
}

Window_MusicComp.prototype = Object.create(Window_Base.prototype);
Window_MusicComp.prototype.constructor = Window_MusicComp;

//==============================
// * Initialize
//==============================
Window_MusicComp.prototype.initialize = function(x, y, width, height) {
    Window_Base.prototype.initialize.call(this, x, y, width, height);
	this._data = $gameSystem._music_list;
	this._data_comp = [];
	for (var i = 0; i < this._data.length; i++) {
		if (this._data[i][0]) {this._data_comp.push(this._data[i])};
	};
    this.refresh();
};

//==============================
// * Refresh
//==============================
Window_MusicComp.prototype.refresh = function() {
    this.contents.clear();
	this.contents.fontSize = Moghunter.musicbook_comp_fontsize;
	var comp = Math.floor((this._data_comp.length / this._data.length) * 100)
	var comp2 = "(" + this._data_comp.length + "/" + this._data.length + ")"	
    this.drawText(Moghunter.musicbook_completion_word + " " + comp + " % ", 0, 0, 200,"left");
	this.drawText(comp2, 0, 0, (this.width - 32),"right");
};

//=============================================================================
// ** Window Help
//=============================================================================	

//==============================
// * Set Text Rv
//==============================
Window_Help.prototype.setText_rv = function(text) {
    if (this._text !== text) {
		var words = text.split(' ');
		var text1 = "";
		var text2 = "";
		this.textWidth(text1)
		for (var i = 0; i < words.length; i++) {
			 if (this.textWidth(text1 + words[i]) < (this.width - 32)) {text1 += words[i] + " " }
		     else {text2 += words[i] + " "};			 
		};
        this._text = text;
        this.contents.clear();
		this.drawText(text1,0,0,(this.width - 32));
		this.drawText(text2,0,this.lineHeight(),(this.width - 32));
    };
};

//=============================================================================
// ** Window MenuCommand
//=============================================================================	

//==============================
// * make Command List
//==============================
var _alias_mog_music_book_addOriginalCommands = Window_MenuCommand.prototype.addOriginalCommands;
Window_MenuCommand.prototype.addOriginalCommands = function() {
	_alias_mog_music_book_addOriginalCommands.call(this);
	if (String(Moghunter.musicbook_command_menu) === "true") {
		this.addMusicBook();
	}
};
	
//==============================
// * Add Music Book
//==============================	
Window_MenuCommand.prototype.addMusicBook = function() {
    this.addCommand(String(Moghunter.musicbook_command_name), 'music_book', true);
};	
	
//=============================================================================
// ** Scene Menu
//=============================================================================	

//==============================
// * create Command Window
//==============================
var _alias_mog_music_book_reateCommandWindow = Scene_Menu.prototype.createCommandWindow;
Scene_Menu.prototype.createCommandWindow = function() {
	_alias_mog_music_book_reateCommandWindow.call(this); 
    this._commandWindow.setHandler('music_book',      this.commandMusicBook.bind(this));
	this._commandWindow.height -= this._commandWindow.itemHeight();  
};

//==============================
// * Music Book
//==============================
Scene_Menu.prototype.commandMusicBook = function() {
	if (!$gameSystem._music_list) {return};
    SceneManager.push(Scene_Music_Book);
};


//=============================================================================
// ** Scene Music Book
//=============================================================================	
function Scene_Music_Book() {
    this.initialize.apply(this, arguments);
}
Scene_Music_Book.prototype = Object.create(Scene_Base.prototype);
Scene_Music_Book.prototype.constructor = Scene_Music_Book;

//==============================
// * Initialize
//==============================
Scene_Music_Book.prototype.initialize = function() {
    Scene_Base.prototype.initialize.call(this);
	BattleManager.saveBgmAndBgs();
	AudioManager.fadeOutBgm(1);
	AudioManager.stopBgs();
	this._playing_index = -1;
	this._bgmPos_old = -1;
	this._bgmduration_old = -1;
	if (!$gameSystem._music_list) {$gameSystem.make_music_list();};
	if( Moghunter.musicbook_title_data_global ){	//值其实已经存了全局和分档两次，这里只切换读取哪一个
		for(var i = 0 ;i < Moghunter.global_mog_musicbook.length ; i++){
			$gameSystem._music_list[i][0] = Moghunter.global_mog_musicbook[i];
		}
	}
	this._data = $gameSystem._music_list;
	this._cover_fade = false;
	this._fade_time = Math.max(Moghunter.musicbook_fade_time,1);
    this.create_backgrounds();
    this.create_main_layout();
	this._field = new Sprite();
	this.addChild(this._field);	//布局（先画，其图层都被放在后面）	
	this.create_particles();
	this.create_position();
	this.create_number_time();
    this.create_window_music_list();
    this.create_window_music_list_layout();
    this.create_window_comp();		  
    this.create_window_comp_layout();	
    this.create_window_help();
    this.create_window_help_layout();	
	for (var i = 0; i < this._sprite_particles.length; i++) {
		this.reset_particles(i);
	};
};

//==============================
// * 整体布局
//==============================
Scene_Music_Book.prototype.create_main_layout = function() {
	this._main_layout = new Sprite(ImageManager.loadmusicbook(Moghunter.src_Music_Book_layout));
	this.addChild(this._main_layout);	
};

//==============================
// * Music
//==============================
Scene_Music_Book.prototype.music = function() {
	if (!this._w_music_list) {return null}
	return this._data[this._w_music_list._index];
};

//==============================
// * Create Window Music List
//==============================
Scene_Music_Book.prototype.create_backgrounds = function() {
	this._background = new Sprite(ImageManager.loadmusicbook(Moghunter.src_Music_Book_A));
	this.addChild(this._background);
	this._cover = new Sprite();
    this._cover.anchor.x = 0.5;
    this._cover.anchor.y = 0.5;	
	this.addChild(this._cover);	
};

//==============================
// * Create Particles
//==============================
Scene_Music_Book.prototype.create_particles = function() {	
	this._sprite_particles = [];
	this._sprite_particles_data = [];	
    for (i = 0; i < 30; i++) {
	  this._sprite_particles.push(new Sprite());
	  this.addChild(this._sprite_particles[i]);
	  this._sprite_particles_data[i] = []	  
	  this.reset_particles(i);
	  this._sprite_particles[i].x = Math.floor((Math.random() * Graphics.boxWidth));
	  this._sprite_particles[i].y = Math.floor((Math.random() * Graphics.boxHeight));
	  this._sprite_particles[i].opacity = 0;
	  this._sprite_particles[i].blendMode = 1;
    };
};
	
//==============================
// * Refresh Particles
//==============================
Scene_Music_Book.prototype.refresh_particles = function() {
   if (!this.music()[4]) {return};
   for (i = 0; i < this._sprite_particles.length; i++){
	   this._sprite_particles[i].bitmap = ImageManager.loadmusicbook(String(this.music()[4]));
	   this.reset_particles(i);
       this._sprite_particles[i].x = Math.floor((Math.random() * Graphics.boxWidth));
	   this._sprite_particles[i].y = Math.floor((Math.random() * Graphics.boxHeight));	   
   };
};

//==============================
// * Clear Particles
//==============================
Scene_Music_Book.prototype.clear_particles = function() {
   for (i = 0; i < this._sprite_particles.length; i++){
	   this._sprite_particles[i].bitmap = null;
   };
};

//==============================
// * Reset Particles
//==============================	
Scene_Music_Book.prototype.reset_particles = function(i) {	
    if (!this.music()) {return};
	this._sprite_particles_data[i][0] = Math.floor((Math.random() * 2) * this.music()[5])
	this._sprite_particles_data[i][1] = Math.floor((Math.random() * 2) * this.music()[6])
	this._sprite_particles_data[i][2] = ((Math.random() * Moghunter.title_particle_a));
	this._sprite_particles[i].opacity = 0;
	this._sprite_particles[i].x = Math.floor((Math.random() * Graphics.boxWidth));
	var pz = ((Math.random() * 0.5) * 1);
	this._sprite_particles[i].scale = new PIXI.Point(0.5 + Number(pz), 0.5 + Number(pz));
	if (Moghunter.title_particle_sy < 0) { 
	    this._sprite_particles[i].y = Graphics.boxHeight + this._sprite_particles[i].height * 2;
	}
	else if (Moghunter.title_particle_sy > 0)
	{
		this._sprite_particles[i].y = -this._sprite_particles[i].height * 2;
	}
	else {
	    this._sprite_particles[i].y = Math.floor((Math.random() * Graphics.boxHeight));
    }
	if (this._sprite_particles_data[i][0] == 0 && this._sprite_particles_data[i][1] == 0) {
        this._sprite_particles[i].x = -this._sprite_particles[i].width * 5;
		this._sprite_particles_data[i][0] = 9999;
		this._sprite_particles_data[i][1] = 9999;
	};
};

//==============================
// * Reset Particles C
//==============================	
Scene_Music_Book.prototype.reset_particles_c = function(i) {
	if (!this._sprite_particles_data) {return false};
	if (this._sprite_particles[i].x < -this._sprite_particles[i].width * 2 || this._sprite_particles[i].x > Graphics.boxWidth + this._sprite_particles[i].width * 2) {return true};
	if (this._sprite_particles[i].y < -this._sprite_particles[i].height * 2 || this._sprite_particles[i].y > Graphics.boxHeight + this._sprite_particles[i].height * 2 ) {return true};
	return false;
};

//==============================
// * Update Particles
//==============================
Scene_Music_Book.prototype.update_particles = function() {	
   if (!this._sprite_particles_data) {return}
   for (var i = 0; i < this._sprite_particles.length; i++) {
        this._sprite_particles[i].x += this._sprite_particles_data[i][0];
		this._sprite_particles[i].y += this._sprite_particles_data[i][1];
		this._sprite_particles[i].opacity += 2;
		this._sprite_particles[i].rotation += this._sprite_particles_data[i][2];
    	if (this.reset_particles_c(i)) { this.reset_particles(i);};
	};
};

//==============================
// * Create Number Time
//==============================
Scene_Music_Book.prototype.create_number_time = function() {
      this._number_refresh = 0;
	  this._number_pos_data = [Moghunter.musicbook_time_number_x,Moghunter.musicbook_time_number_y];
      this._sprite_number = new Sprite(new Bitmap(300,32))
	  this._sprite_number.x = this._number_pos_data[0];
	  this._sprite_number.y = this._number_pos_data[1];
	  this.addChild(this._sprite_number);
	  this.refresh_number();
};

//==============================
// * Refresh Number
//==============================
Scene_Music_Book.prototype.refresh_number = function() {
	this._bgmPos_old = $gameSystem.bgm_pos(0);
	this._bgmduration_old = $gameSystem.bgm_duration(0);
	this._sprite_number.bitmap.clear();
	var text = $gameSystem.bgmPosText() + " : " + $gameSystem.bgmLengthText();
	this._sprite_number.bitmap.drawText(String(text),0,0,300,32,'center');
};

//==============================
// * Create Position
//==============================
Scene_Music_Book.prototype.create_position = function() {
      this._position_data = [Moghunter.musicbook_meter_x,Moghunter.musicbook_meter_y,-1,
	  Moghunter.musicbook_point_x,Moghunter.musicbook_point_y,0,0,0];
      this._sprite_pos_4 = new Sprite(ImageManager.loadmusicbook(Moghunter.src_Music_Book_B))
	  this._sprite_pos_4.x = this._position_data[0];
	  this._sprite_pos_4.y = this._position_data[1];
	  this.addChild(this._sprite_pos_4);		  
      this._sprite_pos_1 = new Sprite(ImageManager.loadmusicbook(Moghunter.src_Music_Book_B))
	  this._sprite_pos_1.x = this._position_data[0];
	  this._sprite_pos_1.y = this._position_data[1];
	  this.addChild(this._sprite_pos_1);
      this._sprite_pos_3 = new Sprite(ImageManager.loadmusicbook(Moghunter.src_Music_Book_B))
	  this._sprite_pos_3.x = this._position_data[0];
	  this._sprite_pos_3.y = this._position_data[1];
	  this.addChild(this._sprite_pos_3);	  
      this._sprite_pos_2 = new Sprite(ImageManager.loadmusicbook(Moghunter.src_Music_Book_C))
	  this._position_data[5] = this._position_data[0] + this._position_data[3];
	  this._sprite_pos_2.x = this._position_data[5];
	  this._sprite_pos_2.y = this._position_data[1] + this._position_data[4];
	  this._sprite_pos_2.anchor.x = 0.5;
	  this._sprite_pos_2.anchor.y = 0.5;
	  this.addChild(this._sprite_pos_2);	  
};

//==============================
// * Create Position
//==============================
Scene_Music_Book.prototype.refresh_position_data = function() {
	this._position_data[6] = this._sprite_pos_1.bitmap.height / 3;
	this._position_data[2] = this._sprite_pos_1.bitmap.width;
	this._position_data[1] = this._position_data[6] ;
	this._sprite_pos_1.setFrame(0,0, this._position_data[2], this._position_data[6]);
};

//==============================
// * Update Meter
//==============================
Scene_Music_Book.prototype.update_meter = function() {
    this._sprite_pos_3.setFrame(0,this._position_data[6], this.m_rate, this._position_data[6]);
	var loop_range = this._position_data[2] * $gameSystem.bgm_loopLength() / $gameSystem.bgm_duration(1);
	this._sprite_pos_4.setFrame(0,this._position_data[6] * 2, loop_range, this._position_data[6]);
};

//==============================
// * Set M Rate
//==============================
Scene_Music_Book.prototype.set_m_rate = function() {
	return this._position_data[2] * $gameSystem.bgm_pos(1) / $gameSystem.bgm_duration(1);
};

//==============================
// * Update Position
//==============================
Scene_Music_Book.prototype.update_position = function() {
    this._sprite_pos_2.x = this._position_data[5] + this.m_rate;
};

//==============================
// * Create Window Music List
//==============================
Scene_Music_Book.prototype.create_window_music_list = function() {
    var w = Moghunter.musicbook_window_width;
    var h = Moghunter.musicbook_window_height;	
    var x = Moghunter.musicbook_window_x + Moghunter.musicbook_window_slideX;
    var y = Moghunter.musicbook_window_y + Moghunter.musicbook_window_slideY;
	this._w_music_list = new Window_MusicList(x,y,w,h);
	this._w_music_list.setHandler('cancel',   this.popScene.bind(this));	
	this._w_music_list._move = 0;	
	this.addChild(this._w_music_list);
	this._fade = [0,0,Graphics.height + 72,
	              Graphics.height - this._w_music_list.height];	
}; 

//==============================
// * Create Window Music List Layout
//==============================
Scene_Music_Book.prototype.create_window_music_list_layout = function() {
	this._layoutMusic = new Sprite(ImageManager.loadmusicbook(Moghunter.src_Music_Book_layout_A));
	if(!Moghunter.musicbook_window_Layout_visible){
		this._layoutMusic = new Sprite("");
	};
	this._layoutMusic.x = this._w_music_list.x +Moghunter.musicbook_window_LayoutX;
	this._layoutMusic.y = this._w_music_list.y +Moghunter.musicbook_window_LayoutY;
	this._field.addChild(this._layoutMusic);	
};

//==============================
// * Create Window Comp
//==============================
Scene_Music_Book.prototype.create_window_comp = function() {
    var w = Moghunter.musicbook_comp_width;
    var h = Moghunter.musicbook_comp_height;	
    var x = Moghunter.musicbook_comp_x + Moghunter.musicbook_comp_slideX;
    var y = Moghunter.musicbook_comp_y + Moghunter.musicbook_comp_slideY;
	this._w_music_comp = new Window_MusicComp(x,y,w,h);
	this._w_music_comp.contents.fontSize = Moghunter.musicbook_comp_fontsize;	//字体修改
	this._w_music_comp._move = 0;
	this.addChild(this._w_music_comp);
	this._fade2 = [0,0,this._fade[2] - this._w_music_comp.height,
	              this._fade[3] - this._w_music_comp.height];		
};

//==============================
// * Create Window Comp Layout
//==============================
Scene_Music_Book.prototype.create_window_comp_layout = function() {
	this._layoutComp = new Sprite(ImageManager.loadmusicbook(Moghunter.src_Music_Book_layout_B));
	if(!Moghunter.musicbook_comp_Layout_visible){
		this._layoutComp = new Sprite("");
	};
	this._layoutComp.x = this._w_music_comp.x +Moghunter.musicbook_comp_LayoutX;
	this._layoutComp.y = this._w_music_comp.y +Moghunter.musicbook_comp_LayoutY;
	this._field.addChild(this._layoutComp);	
};
	
//==============================
// * Create Window help
//==============================
Scene_Music_Book.prototype.create_window_help = function() {
    this._helpWindow = new Window_Help();
	this._helpWindow.x = Moghunter.musicbook_help_x + Moghunter.musicbook_help_slideX ;
	this._helpWindow.y = Moghunter.musicbook_help_y + Moghunter.musicbook_help_slideY ;
	this._helpWindow.height = Moghunter.musicbook_help_height ;
	this._helpWindow.width = Moghunter.musicbook_help_width ;
	this._helpWindow.standardFontSize = function(){ return Moghunter.musicbook_help_fontsize;}	//字体修改
	this._helpWindow._move = 0;
    this.addChild(this._helpWindow);
};
//==============================
// * Create Window Layout
//==============================
Scene_Music_Book.prototype.create_window_help_layout = function() {
	this._layoutHelp = new Sprite(ImageManager.loadmusicbook(Moghunter.src_Music_Book_layout_C));
	if(!Moghunter.musicbook_help_Layout_visible){
		this._layoutHelp = new Sprite("");
	};
	this._layoutHelp.x = this._helpWindow.x +Moghunter.musicbook_help_slideX;
	this._layoutHelp.y = this._helpWindow.y +Moghunter.musicbook_help_slideY;
	this._field.addChild(this._layoutHelp);	
};

//==============================
// * Refresh Music
//==============================
Scene_Music_Book.prototype.refresh_music = function() {
	this._number_refresh = 0;
	if (!this.music()[0]) {this.nodata_effect();return};		
	SoundManager.playOk();
	if (this._playing_index === this._w_music_list._index) {return;};
	var text = this.music()[2] + " - " + this.music()[3];
	this._helpWindow.setText_rv(text);
    this.refresh_cover();
	this.play_music();
	this._playing_index = this._w_music_list._index;
    this.clear_particles();
    this.refresh_particles();	
};

//==============================
// * No Data Effect
//==============================
Scene_Music_Book.prototype.nodata_effect = function() {
   SoundManager.playBuzzer();
   this._cover_fade = true;
   this.clear_particles();
   this._helpWindow.setText_rv("");
   AudioManager.stopBgm();
   this._playing_index = this._w_music_list._index;
};

//==============================
// * Refresh Cover
//==============================
Scene_Music_Book.prototype.refresh_cover = function() {	
	//var file_name = String(this.music()[7]) + ".png"
	//var path = "img/Menu__musicbook/"
	this._cover_fade = false;
	this._cover.bitmap = ImageManager.loadmusicbook(this.music()[7])
	this._cover.opacity = 0;
	this._cover.scale.x = 1.5;
	this._cover.scale.y = this._cover.scale.x;
	this._cover.x = Graphics.width / 2;
	this._cover.y = Graphics.height / 2;
};

//==============================
// * Play Music
//==============================
Scene_Music_Book.prototype.play_music = function() {  	
	var bgm = [];
	bgm.name = this.music()[1];	bgm.volume = 100;bgm.pitch = 100;bgm.pan = 0;
 	AudioManager.playBgm(bgm,0);
};

//==============================
// * Need Refresh
//==============================
Scene_Music_Book.prototype.need_refresh = function() {  
     if (this._w_music_list._ismoved) {return true};
     if (TouchInput.isTriggered()) {return true};
     if (Input.isTriggered("ok")) {return true};
     if (Input.isTriggered('up')) {return true}; 
	 if (Input.isTriggered('right')) {return true};
	 if (Input.isTriggered('left')) {return true};
	 if (Input.isTriggered('down')) {return true};
     return false;
};

//==============================
// * Update Window
//==============================
Scene_Music_Book.prototype.update_window = function() {  
	if (this._fade[0] > 0){this._fade[0] -= 1};
	if (this.need_refresh()) {this._fade[0] = this._fade_time}
	if (this._fade[0] === 0) {	//向起点淡去
		this._w_music_list.x += Moghunter.musicbook_window_slideX/Moghunter.musicbook_window_slideTime;
		this._w_music_list.y += Moghunter.musicbook_window_slideY/Moghunter.musicbook_window_slideTime;
		this._w_music_list.contentsOpacity -= 256/Moghunter.musicbook_window_slideTime;
		this._main_layout.opacity -= 256/Moghunter.musicbook_window_slideTime;
		this._w_music_list._move -= 256/Moghunter.musicbook_window_slideTime;
		this._layoutMusic.x = this._w_music_list.x +Moghunter.musicbook_window_LayoutX;
		this._layoutMusic.y = this._w_music_list.y +Moghunter.musicbook_window_LayoutY;
		
		if (this._w_music_list._move <= 0) {
			this._w_music_list.x = Moghunter.musicbook_window_x + Moghunter.musicbook_window_slideX;
			this._w_music_list.y = Moghunter.musicbook_window_y + Moghunter.musicbook_window_slideY;
			this._w_music_list.contentsOpacity = 0;
			this._main_layout.opacity = 0;
			this._layoutMusic.opacity = 0;
			this._w_music_list._move = 0;
		};
		if(Moghunter.musicbook_window_Layout_visible){
			this._w_music_list.opacity = 0;
			this._layoutMusic.opacity -= 256/Moghunter.musicbook_window_slideTime;
		}else{
			this._w_music_list.opacity -= 256/Moghunter.musicbook_window_slideTime;
		}
		
		this._w_music_comp.x += Moghunter.musicbook_comp_slideX/Moghunter.musicbook_comp_slideTime;
		this._w_music_comp.y += Moghunter.musicbook_comp_slideY/Moghunter.musicbook_comp_slideTime;
		this._w_music_comp.contentsOpacity -= 256/Moghunter.musicbook_comp_slideTime;
		this._w_music_comp._move -= 256/Moghunter.musicbook_comp_slideTime;
		this._layoutComp.x = this._w_music_comp.x +Moghunter.musicbook_comp_LayoutX;
		this._layoutComp.y = this._w_music_comp.y +Moghunter.musicbook_comp_LayoutY;
		
		if (this._w_music_comp._move <= 0) {
			this._w_music_comp.x = Moghunter.musicbook_comp_x + Moghunter.musicbook_comp_slideX;
			this._w_music_comp.y = Moghunter.musicbook_comp_y + Moghunter.musicbook_comp_slideY;
			this._w_music_comp.contentsOpacity = 0;
			this._layoutComp.opacity = 0;
			this._w_music_comp._move = 0;
		};
		if(Moghunter.musicbook_comp_Layout_visible){
			this._w_music_comp.opacity = 0;
			this._layoutComp.opacity -= 256/Moghunter.musicbook_comp_slideTime;
		}else{
			this._w_music_comp.opacity -= 256/Moghunter.musicbook_comp_slideTime;
		}
		
		this._helpWindow.x += Moghunter.musicbook_help_slideX/Moghunter.musicbook_help_slideTime;
		this._helpWindow.y += Moghunter.musicbook_help_slideY/Moghunter.musicbook_help_slideTime;
		this._helpWindow.contentsOpacity -= 256/Moghunter.musicbook_help_slideTime;
		this._helpWindow._move -= 256/Moghunter.musicbook_help_slideTime;
		this._layoutHelp.x = this._helpWindow.x +Moghunter.musicbook_help_LayoutX;
		this._layoutHelp.y = this._helpWindow.y +Moghunter.musicbook_help_LayoutY;
		
		if (this._helpWindow._move <= 0) {
			this._helpWindow.x = Moghunter.musicbook_help_x + Moghunter.musicbook_help_slideX;
			this._helpWindow.y = Moghunter.musicbook_help_y + Moghunter.musicbook_help_slideY;
			this._helpWindow.contentsOpacity = 0;
			this._layoutHelp.opacity = 0;
			this._helpWindow._move = 0;
		};
		if(Moghunter.musicbook_help_Layout_visible){
			this._helpWindow.opacity = 0;
			this._layoutHelp.opacity -= 256/Moghunter.musicbook_help_slideTime;
		}else{
			this._helpWindow.opacity -= 256/Moghunter.musicbook_help_slideTime;
		}
	}
	else { //从起点显现回来
		this._w_music_list.x -= Moghunter.musicbook_window_slideX/Moghunter.musicbook_window_slideTimeback;
		this._w_music_list.y -= Moghunter.musicbook_window_slideY/Moghunter.musicbook_window_slideTimeback;
		this._w_music_list.contentsOpacity += 256/Moghunter.musicbook_window_slideTimeback;
		this._main_layout.opacity += 256/Moghunter.musicbook_window_slideTimeback;
		this._w_music_list._move += 256/Moghunter.musicbook_comp_slideTimeback;
		this._layoutMusic.x = this._w_music_list.x +Moghunter.musicbook_window_LayoutX;
		this._layoutMusic.y = this._w_music_list.y +Moghunter.musicbook_window_LayoutY;
		
		if (this._w_music_list._move >= 255) {
			this._w_music_list.x = Moghunter.musicbook_window_x;
			this._w_music_list.y = Moghunter.musicbook_window_y;
			this._w_music_list.contentsOpacity = 255;
			this._main_layout.opacity = 255;
			this._layoutMusic.opacity = 255;
			this._w_music_list._move = 255;
		};
		if(Moghunter.musicbook_window_Layout_visible){
			this._w_music_list.opacity = 0;
			this._layoutMusic.opacity += 256/Moghunter.musicbook_window_slideTime;
		}else{
			this._w_music_list.opacity += 256/Moghunter.musicbook_window_slideTime;
		}
		
		this._w_music_comp.x -= Moghunter.musicbook_comp_slideX/Moghunter.musicbook_comp_slideTimeback;
		this._w_music_comp.y -= Moghunter.musicbook_comp_slideY/Moghunter.musicbook_comp_slideTimeback;
		this._w_music_comp.contentsOpacity += 256/Moghunter.musicbook_comp_slideTimeback;
		this._w_music_comp._move += 256/Moghunter.musicbook_comp_slideTimeback;
		this._layoutComp.x = this._w_music_comp.x +Moghunter.musicbook_comp_LayoutX;
		this._layoutComp.y = this._w_music_comp.y +Moghunter.musicbook_comp_LayoutY;
		
		if (this._w_music_comp._move >= 255) {
			this._w_music_comp.y = this._fade2[2];
			this._w_music_comp.x = Moghunter.musicbook_comp_x;
			this._w_music_comp.y = Moghunter.musicbook_comp_y;
			this._w_music_comp.contentsOpacity = 255;
			this._layoutComp.opacity = 255;
			this._w_music_comp._move = 255;
		};
		if(Moghunter.musicbook_comp_Layout_visible){
			this._w_music_comp.opacity = 0;
			this._layoutComp.opacity += 256/Moghunter.musicbook_comp_slideTime;
		}else{
			this._w_music_comp.opacity += 256/Moghunter.musicbook_comp_slideTime;
		}
		
		this._helpWindow.x -= Moghunter.musicbook_help_slideX/Moghunter.musicbook_help_slideTimeback;
		this._helpWindow.y -= Moghunter.musicbook_help_slideY/Moghunter.musicbook_help_slideTimeback;
		this._helpWindow.contentsOpacity += 256/Moghunter.musicbook_help_slideTimeback;
		this._helpWindow._move += 256/Moghunter.musicbook_help_slideTimeback;
		this._layoutHelp.x = this._helpWindow.x +Moghunter.musicbook_help_LayoutX;
		this._layoutHelp.y = this._helpWindow.y +Moghunter.musicbook_help_LayoutY;
		
		if (this._helpWindow._move >= 255) {
			this._helpWindow.y = this._fade2[2];
			this._helpWindow.x = Moghunter.musicbook_help_x;
			this._helpWindow.y = Moghunter.musicbook_help_y;
			this._helpWindow.contentsOpacity = 255;
			this._layoutHelp.opacity = 255;
			this._helpWindow._move = 255;
		};
		if(Moghunter.musicbook_help_Layout_visible){
			this._helpWindow.opacity = 0;
			this._layoutHelp.opacity += 256/Moghunter.musicbook_help_slideTime;
		}else{
			this._helpWindow.opacity += 256/Moghunter.musicbook_help_slideTime;
		}
   };
   if (this._cover_fade ) {this._cover.opacity -= 5;}
   else {this._cover.opacity += 5;};
   this._w_music_list._ismoved = false;
   
   if (this._cover.scale.x > 1.00) {this._cover.scale.x -= 0.01}
   this._cover.scale.y = this._cover.scale.x;
   this._sprite_pos_1.x = Moghunter.musicbook_meter_x;
   this._sprite_pos_1.y = Moghunter.musicbook_meter_y;
   //this._sprite_pos_1.y += this._position_data[1];
   this._sprite_pos_2.y = this._sprite_pos_1.y + this._position_data[4];
   this._sprite_pos_3.y = this._sprite_pos_1.y;
   this._sprite_pos_4.y = this._sprite_pos_3.y + this._position_data[6] / 2;
   this._sprite_number.x = this._number_pos_data[0] + this._sprite_pos_1.x;
   this._sprite_number.y = this._number_pos_data[1] + this._sprite_pos_1.y;   
}; 
  
//==============================
// * Need Refresh Number
//==============================
Scene_Music_Book.prototype.need_refresh_number = function() { 
	if (this._bgmPos_old != $gameSystem.bgm_pos(0)) {return true};
	if (this._bgmduration_old != $gameSystem.bgm_duration(0)) {return true};
	return false;
};

//==============================
// * Update
//==============================
Scene_Music_Book.prototype.update = function() {   
    Scene_Base.prototype.update.call(this);	
	if (!this.music()) {return};
	this._number_refresh += 1
	this.m_rate = this.set_m_rate();
	if (this.need_refresh_number()) {this.refresh_number();this._number_refresh = 0};
	if (Input.isTriggered("ok") || (TouchInput.isTriggered() && this._w_music_list.isTouchedInsideFrame())) {this.refresh_music()};
    if (this._position_data[2] === -1 && this._sprite_pos_1.bitmap.isReady()) {this.refresh_position_data()};
	if (this._position_data[2] > -1) {this.update_position()};
	this.update_particles();
	this.update_meter();
    this.update_window();
};
