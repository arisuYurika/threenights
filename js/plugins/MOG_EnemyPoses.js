//=============================================================================
// MOG_EnemyPoses.js
//=============================================================================

/*:
 * @plugindesc (v1.4)[v1.3]  单位 - 敌人姿势
 * @author Moghunter （Drill_up翻译）
 * 
 * @Drill_LE_param "SV敌人-%d-姿势"
 * @Drill_LE_parentKey "--SV敌人组%d至%d--"
 * @Drill_LE_var "Moghunter.poses_sv_list_length"
 * 
 * @Drill_LE_param "敌人-%d-姿势"
 * @Drill_LE_parentKey "--敌人组%d至%d--"
 * @Drill_LE_var "Moghunter.poses_list_length"
 * 
 *
 * @param ======一般模式======
 * @default 
 *
 * @param --敌人组 1至20--
 * @parent ======一般模式======
 * @default 
 *
 * @param 敌人-1-姿势
 * @parent --敌人组 1至20--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-2-姿势
 * @parent --敌人组 1至20--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-3-姿势
 * @parent --敌人组 1至20--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-4-姿势
 * @parent --敌人组 1至20--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-5-姿势
 * @parent --敌人组 1至20--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-6-姿势
 * @parent --敌人组 1至20--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-7-姿势
 * @parent --敌人组 1至20--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-8-姿势
 * @parent --敌人组 1至20--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-9-姿势
 * @parent --敌人组 1至20--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-10-姿势
 * @parent --敌人组 1至20--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-11-姿势
 * @parent --敌人组 1至20--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-12-姿势
 * @parent --敌人组 1至20--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-13-姿势
 * @parent --敌人组 1至20--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-14-姿势
 * @parent --敌人组 1至20--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-15-姿势
 * @parent --敌人组 1至20--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-16-姿势
 * @parent --敌人组 1至20--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-17-姿势
 * @parent --敌人组 1至20--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-18-姿势
 * @parent --敌人组 1至20--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-19-姿势
 * @parent --敌人组 1至20--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-20-姿势
 * @parent --敌人组 1至20--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param --敌人组21至40--
 * @parent ======一般模式======
 * @default 
 *
 * @param 敌人-21-姿势
 * @parent --敌人组21至40--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-22-姿势
 * @parent --敌人组21至40--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-23-姿势
 * @parent --敌人组21至40--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-24-姿势
 * @parent --敌人组21至40--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-25-姿势
 * @parent --敌人组21至40--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-26-姿势
 * @parent --敌人组21至40--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-27-姿势
 * @parent --敌人组21至40--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-28-姿势
 * @parent --敌人组21至40--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-29-姿势
 * @parent --敌人组21至40--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-30-姿势
 * @parent --敌人组21至40--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-31-姿势
 * @parent --敌人组21至40--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-32-姿势
 * @parent --敌人组21至40--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-33-姿势
 * @parent --敌人组21至40--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-34-姿势
 * @parent --敌人组21至40--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-35-姿势
 * @parent --敌人组21至40--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-36-姿势
 * @parent --敌人组21至40--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-37-姿势
 * @parent --敌人组21至40--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-38-姿势
 * @parent --敌人组21至40--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-39-姿势
 * @parent --敌人组21至40--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-40-姿势
 * @parent --敌人组21至40--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param --敌人组41至60--
 * @parent ======一般模式======
 * @default 
 *
 * @param 敌人-41-姿势
 * @parent --敌人组41至60--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-42-姿势
 * @parent --敌人组41至60--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-43-姿势
 * @parent --敌人组41至60--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-44-姿势
 * @parent --敌人组41至60--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-45-姿势
 * @parent --敌人组41至60--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-46-姿势
 * @parent --敌人组41至60--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-47-姿势
 * @parent --敌人组41至60--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-48-姿势
 * @parent --敌人组41至60--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-49-姿势
 * @parent --敌人组41至60--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-50-姿势
 * @parent --敌人组41至60--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-51-姿势
 * @parent --敌人组41至60--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-52-姿势
 * @parent --敌人组41至60--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-53-姿势
 * @parent --敌人组41至60--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-54-姿势
 * @parent --敌人组41至60--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-55-姿势
 * @parent --敌人组41至60--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-56-姿势
 * @parent --敌人组41至60--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-57-姿势
 * @parent --敌人组41至60--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-58-姿势
 * @parent --敌人组41至60--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-59-姿势
 * @parent --敌人组41至60--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-60-姿势
 * @parent --敌人组41至60--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param --敌人组61至80--
 * @parent ======一般模式======
 * @default 
 *
 * @param 敌人-61-姿势
 * @parent --敌人组61至80--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-62-姿势
 * @parent --敌人组61至80--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-63-姿势
 * @parent --敌人组61至80--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-64-姿势
 * @parent --敌人组61至80--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-65-姿势
 * @parent --敌人组61至80--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-66-姿势
 * @parent --敌人组61至80--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-67-姿势
 * @parent --敌人组61至80--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-68-姿势
 * @parent --敌人组61至80--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-69-姿势
 * @parent --敌人组61至80--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-70-姿势
 * @parent --敌人组61至80--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-71-姿势
 * @parent --敌人组61至80--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-72-姿势
 * @parent --敌人组61至80--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-73-姿势
 * @parent --敌人组61至80--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-74-姿势
 * @parent --敌人组61至80--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-75-姿势
 * @parent --敌人组61至80--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-76-姿势
 * @parent --敌人组61至80--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-77-姿势
 * @parent --敌人组61至80--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-78-姿势
 * @parent --敌人组61至80--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-79-姿势
 * @parent --敌人组61至80--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-80-姿势
 * @parent --敌人组61至80--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param --敌人组81至100--
 * @parent ======一般模式======
 * @default 
 *
 * @param 敌人-81-姿势
 * @parent --敌人组81至100--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-82-姿势
 * @parent --敌人组81至100--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-83-姿势
 * @parent --敌人组81至100--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-84-姿势
 * @parent --敌人组81至100--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-85-姿势
 * @parent --敌人组81至100--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-86-姿势
 * @parent --敌人组81至100--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-87-姿势
 * @parent --敌人组81至100--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-88-姿势
 * @parent --敌人组81至100--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-89-姿势
 * @parent --敌人组81至100--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-90-姿势
 * @parent --敌人组81至100--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-91-姿势
 * @parent --敌人组81至100--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-92-姿势
 * @parent --敌人组81至100--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-93-姿势
 * @parent --敌人组81至100--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-94-姿势
 * @parent --敌人组81至100--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-95-姿势
 * @parent --敌人组81至100--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-96-姿势
 * @parent --敌人组81至100--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-97-姿势
 * @parent --敌人组81至100--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-98-姿势
 * @parent --敌人组81至100--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-99-姿势
 * @parent --敌人组81至100--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-100-姿势
 * @parent --敌人组81至100--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param --敌人组101至120--
 * @parent ======一般模式======
 * @default 
 *
 * @param 敌人-101-姿势
 * @parent --敌人组101至120--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-102-姿势
 * @parent --敌人组101至120--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-103-姿势
 * @parent --敌人组101至120--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-104-姿势
 * @parent --敌人组101至120--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-105-姿势
 * @parent --敌人组101至120--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-106-姿势
 * @parent --敌人组101至120--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-107-姿势
 * @parent --敌人组101至120--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-108-姿势
 * @parent --敌人组101至120--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-109-姿势
 * @parent --敌人组101至120--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-110-姿势
 * @parent --敌人组101至120--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-111-姿势
 * @parent --敌人组101至120--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-112-姿势
 * @parent --敌人组101至120--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-113-姿势
 * @parent --敌人组101至120--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-114-姿势
 * @parent --敌人组101至120--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-115-姿势
 * @parent --敌人组101至120--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-116-姿势
 * @parent --敌人组101至120--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-117-姿势
 * @parent --敌人组101至120--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-118-姿势
 * @parent --敌人组101至120--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-119-姿势
 * @parent --敌人组101至120--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-120-姿势
 * @parent --敌人组101至120--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param --敌人组121至140--
 * @parent ======一般模式======
 * @default 
 *
 * @param 敌人-121-姿势
 * @parent --敌人组121至140--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-122-姿势
 * @parent --敌人组121至140--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-123-姿势
 * @parent --敌人组121至140--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-124-姿势
 * @parent --敌人组121至140--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-125-姿势
 * @parent --敌人组121至140--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-126-姿势
 * @parent --敌人组121至140--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-127-姿势
 * @parent --敌人组121至140--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-128-姿势
 * @parent --敌人组121至140--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-129-姿势
 * @parent --敌人组121至140--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-130-姿势
 * @parent --敌人组121至140--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-131-姿势
 * @parent --敌人组121至140--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-132-姿势
 * @parent --敌人组121至140--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-133-姿势
 * @parent --敌人组121至140--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-134-姿势
 * @parent --敌人组121至140--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-135-姿势
 * @parent --敌人组121至140--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-136-姿势
 * @parent --敌人组121至140--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-137-姿势
 * @parent --敌人组121至140--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-138-姿势
 * @parent --敌人组121至140--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-139-姿势
 * @parent --敌人组121至140--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-140-姿势
 * @parent --敌人组121至140--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param --敌人组141至160--
 * @parent ======一般模式======
 * @default 
 *
 * @param 敌人-141-姿势
 * @parent --敌人组141至160--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-142-姿势
 * @parent --敌人组141至160--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-143-姿势
 * @parent --敌人组141至160--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-144-姿势
 * @parent --敌人组141至160--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-145-姿势
 * @parent --敌人组141至160--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-146-姿势
 * @parent --敌人组141至160--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-147-姿势
 * @parent --敌人组141至160--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-148-姿势
 * @parent --敌人组141至160--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-149-姿势
 * @parent --敌人组141至160--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-150-姿势
 * @parent --敌人组141至160--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-151-姿势
 * @parent --敌人组141至160--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-152-姿势
 * @parent --敌人组141至160--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-153-姿势
 * @parent --敌人组141至160--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-154-姿势
 * @parent --敌人组141至160--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-155-姿势
 * @parent --敌人组141至160--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-156-姿势
 * @parent --敌人组141至160--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-157-姿势
 * @parent --敌人组141至160--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-158-姿势
 * @parent --敌人组141至160--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-159-姿势
 * @parent --敌人组141至160--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-160-姿势
 * @parent --敌人组141至160--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param --敌人组161至180--
 * @parent ======一般模式======
 * @default 
 *
 * @param 敌人-161-姿势
 * @parent --敌人组161至180--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-162-姿势
 * @parent --敌人组161至180--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-163-姿势
 * @parent --敌人组161至180--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-164-姿势
 * @parent --敌人组161至180--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-165-姿势
 * @parent --敌人组161至180--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-166-姿势
 * @parent --敌人组161至180--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-167-姿势
 * @parent --敌人组161至180--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-168-姿势
 * @parent --敌人组161至180--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-169-姿势
 * @parent --敌人组161至180--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-170-姿势
 * @parent --敌人组161至180--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-171-姿势
 * @parent --敌人组161至180--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-172-姿势
 * @parent --敌人组161至180--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-173-姿势
 * @parent --敌人组161至180--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-174-姿势
 * @parent --敌人组161至180--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-175-姿势
 * @parent --敌人组161至180--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-176-姿势
 * @parent --敌人组161至180--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-177-姿势
 * @parent --敌人组161至180--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-178-姿势
 * @parent --敌人组161至180--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-179-姿势
 * @parent --敌人组161至180--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-180-姿势
 * @parent --敌人组161至180--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param --敌人组181至200--
 * @parent ======一般模式======
 * @default 
 *
 * @param 敌人-181-姿势
 * @parent --敌人组181至200--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-182-姿势
 * @parent --敌人组181至200--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-183-姿势
 * @parent --敌人组181至200--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-184-姿势
 * @parent --敌人组181至200--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-185-姿势
 * @parent --敌人组181至200--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-186-姿势
 * @parent --敌人组181至200--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-187-姿势
 * @parent --敌人组181至200--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-188-姿势
 * @parent --敌人组181至200--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-189-姿势
 * @parent --敌人组181至200--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-190-姿势
 * @parent --敌人组181至200--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-191-姿势
 * @parent --敌人组181至200--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-192-姿势
 * @parent --敌人组181至200--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-193-姿势
 * @parent --敌人组181至200--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-194-姿势
 * @parent --敌人组181至200--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-195-姿势
 * @parent --敌人组181至200--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-196-姿势
 * @parent --敌人组181至200--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-197-姿势
 * @parent --敌人组181至200--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-198-姿势
 * @parent --敌人组181至200--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-199-姿势
 * @parent --敌人组181至200--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 敌人-200-姿势
 * @parent --敌人组181至200--
 * @desc 敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param ======SV模式======
 * @default 
 *
 * @param --SV敌人组 1至20--
 * @parent ======SV模式======
 * @default 
 *
 * @param SV敌人-1-姿势
 * @parent --SV敌人组 1至20--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-2-姿势
 * @parent --SV敌人组 1至20--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-3-姿势
 * @parent --SV敌人组 1至20--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-4-姿势
 * @parent --SV敌人组 1至20--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-5-姿势
 * @parent --SV敌人组 1至20--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-6-姿势
 * @parent --SV敌人组 1至20--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-7-姿势
 * @parent --SV敌人组 1至20--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-8-姿势
 * @parent --SV敌人组 1至20--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-9-姿势
 * @parent --SV敌人组 1至20--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-10-姿势
 * @parent --SV敌人组 1至20--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-11-姿势
 * @parent --SV敌人组 1至20--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-12-姿势
 * @parent --SV敌人组 1至20--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-13-姿势
 * @parent --SV敌人组 1至20--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-14-姿势
 * @parent --SV敌人组 1至20--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-15-姿势
 * @parent --SV敌人组 1至20--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-16-姿势
 * @parent --SV敌人组 1至20--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-17-姿势
 * @parent --SV敌人组 1至20--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-18-姿势
 * @parent --SV敌人组 1至20--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-19-姿势
 * @parent --SV敌人组 1至20--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-20-姿势
 * @parent --SV敌人组 1至20--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param --SV敌人组21至40--
 * @parent ======SV模式======
 * @default 
 *
 * @param SV敌人-21-姿势
 * @parent --SV敌人组21至40--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-22-姿势
 * @parent --SV敌人组21至40--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-23-姿势
 * @parent --SV敌人组21至40--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-24-姿势
 * @parent --SV敌人组21至40--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-25-姿势
 * @parent --SV敌人组21至40--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-26-姿势
 * @parent --SV敌人组21至40--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-27-姿势
 * @parent --SV敌人组21至40--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-28-姿势
 * @parent --SV敌人组21至40--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-29-姿势
 * @parent --SV敌人组21至40--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-30-姿势
 * @parent --SV敌人组21至40--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-31-姿势
 * @parent --SV敌人组21至40--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-32-姿势
 * @parent --SV敌人组21至40--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-33-姿势
 * @parent --SV敌人组21至40--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-34-姿势
 * @parent --SV敌人组21至40--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-35-姿势
 * @parent --SV敌人组21至40--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-36-姿势
 * @parent --SV敌人组21至40--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-37-姿势
 * @parent --SV敌人组21至40--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-38-姿势
 * @parent --SV敌人组21至40--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-39-姿势
 * @parent --SV敌人组21至40--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-40-姿势
 * @parent --SV敌人组21至40--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param --SV敌人组41至60--
 * @parent ======SV模式======
 * @default 
 *
 * @param SV敌人-41-姿势
 * @parent --SV敌人组41至60--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-42-姿势
 * @parent --SV敌人组41至60--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-43-姿势
 * @parent --SV敌人组41至60--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-44-姿势
 * @parent --SV敌人组41至60--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-45-姿势
 * @parent --SV敌人组41至60--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-46-姿势
 * @parent --SV敌人组41至60--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-47-姿势
 * @parent --SV敌人组41至60--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-48-姿势
 * @parent --SV敌人组41至60--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-49-姿势
 * @parent --SV敌人组41至60--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-50-姿势
 * @parent --SV敌人组41至60--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-51-姿势
 * @parent --SV敌人组41至60--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-52-姿势
 * @parent --SV敌人组41至60--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-53-姿势
 * @parent --SV敌人组41至60--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-54-姿势
 * @parent --SV敌人组41至60--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-55-姿势
 * @parent --SV敌人组41至60--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-56-姿势
 * @parent --SV敌人组41至60--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-57-姿势
 * @parent --SV敌人组41至60--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-58-姿势
 * @parent --SV敌人组41至60--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-59-姿势
 * @parent --SV敌人组41至60--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-60-姿势
 * @parent --SV敌人组41至60--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param --SV敌人组61至80--
 * @parent ======SV模式======
 * @default 
 *
 * @param SV敌人-61-姿势
 * @parent --SV敌人组61至80--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-62-姿势
 * @parent --SV敌人组61至80--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-63-姿势
 * @parent --SV敌人组61至80--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-64-姿势
 * @parent --SV敌人组61至80--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-65-姿势
 * @parent --SV敌人组61至80--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-66-姿势
 * @parent --SV敌人组61至80--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-67-姿势
 * @parent --SV敌人组61至80--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-68-姿势
 * @parent --SV敌人组61至80--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-69-姿势
 * @parent --SV敌人组61至80--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-70-姿势
 * @parent --SV敌人组61至80--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-71-姿势
 * @parent --SV敌人组61至80--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-72-姿势
 * @parent --SV敌人组61至80--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-73-姿势
 * @parent --SV敌人组61至80--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-74-姿势
 * @parent --SV敌人组61至80--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-75-姿势
 * @parent --SV敌人组61至80--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-76-姿势
 * @parent --SV敌人组61至80--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-77-姿势
 * @parent --SV敌人组61至80--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-78-姿势
 * @parent --SV敌人组61至80--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-79-姿势
 * @parent --SV敌人组61至80--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-80-姿势
 * @parent --SV敌人组61至80--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param --SV敌人组81至100--
 * @parent ======SV模式======
 * @default 
 *
 * @param SV敌人-81-姿势
 * @parent --SV敌人组81至100--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-82-姿势
 * @parent --SV敌人组81至100--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-83-姿势
 * @parent --SV敌人组81至100--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-84-姿势
 * @parent --SV敌人组81至100--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-85-姿势
 * @parent --SV敌人组81至100--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-86-姿势
 * @parent --SV敌人组81至100--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-87-姿势
 * @parent --SV敌人组81至100--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-88-姿势
 * @parent --SV敌人组81至100--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-89-姿势
 * @parent --SV敌人组81至100--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-90-姿势
 * @parent --SV敌人组81至100--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-91-姿势
 * @parent --SV敌人组81至100--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-92-姿势
 * @parent --SV敌人组81至100--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-93-姿势
 * @parent --SV敌人组81至100--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-94-姿势
 * @parent --SV敌人组81至100--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-95-姿势
 * @parent --SV敌人组81至100--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-96-姿势
 * @parent --SV敌人组81至100--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-97-姿势
 * @parent --SV敌人组81至100--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-98-姿势
 * @parent --SV敌人组81至100--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-99-姿势
 * @parent --SV敌人组81至100--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-100-姿势
 * @parent --SV敌人组81至100--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param --SV敌人组101至120--
 * @parent ======SV模式======
 * @default 
 *
 * @param SV敌人-101-姿势
 * @parent --SV敌人组101至120--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-102-姿势
 * @parent --SV敌人组101至120--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-103-姿势
 * @parent --SV敌人组101至120--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-104-姿势
 * @parent --SV敌人组101至120--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-105-姿势
 * @parent --SV敌人组101至120--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-106-姿势
 * @parent --SV敌人组101至120--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-107-姿势
 * @parent --SV敌人组101至120--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-108-姿势
 * @parent --SV敌人组101至120--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-109-姿势
 * @parent --SV敌人组101至120--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-110-姿势
 * @parent --SV敌人组101至120--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-111-姿势
 * @parent --SV敌人组101至120--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-112-姿势
 * @parent --SV敌人组101至120--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-113-姿势
 * @parent --SV敌人组101至120--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-114-姿势
 * @parent --SV敌人组101至120--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-115-姿势
 * @parent --SV敌人组101至120--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-116-姿势
 * @parent --SV敌人组101至120--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-117-姿势
 * @parent --SV敌人组101至120--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-118-姿势
 * @parent --SV敌人组101至120--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-119-姿势
 * @parent --SV敌人组101至120--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-120-姿势
 * @parent --SV敌人组101至120--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param --SV敌人组121至140--
 * @parent ======SV模式======
 * @default 
 *
 * @param SV敌人-121-姿势
 * @parent --SV敌人组121至140--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-122-姿势
 * @parent --SV敌人组121至140--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-123-姿势
 * @parent --SV敌人组121至140--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-124-姿势
 * @parent --SV敌人组121至140--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-125-姿势
 * @parent --SV敌人组121至140--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-126-姿势
 * @parent --SV敌人组121至140--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-127-姿势
 * @parent --SV敌人组121至140--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-128-姿势
 * @parent --SV敌人组121至140--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-129-姿势
 * @parent --SV敌人组121至140--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-130-姿势
 * @parent --SV敌人组121至140--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-131-姿势
 * @parent --SV敌人组121至140--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-132-姿势
 * @parent --SV敌人组121至140--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-133-姿势
 * @parent --SV敌人组121至140--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-134-姿势
 * @parent --SV敌人组121至140--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-135-姿势
 * @parent --SV敌人组121至140--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-136-姿势
 * @parent --SV敌人组121至140--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-137-姿势
 * @parent --SV敌人组121至140--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-138-姿势
 * @parent --SV敌人组121至140--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-139-姿势
 * @parent --SV敌人组121至140--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-140-姿势
 * @parent --SV敌人组121至140--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param --SV敌人组141至160--
 * @parent ======SV模式======
 * @default 
 *
 * @param SV敌人-141-姿势
 * @parent --SV敌人组141至160--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-142-姿势
 * @parent --SV敌人组141至160--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-143-姿势
 * @parent --SV敌人组141至160--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-144-姿势
 * @parent --SV敌人组141至160--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-145-姿势
 * @parent --SV敌人组141至160--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-146-姿势
 * @parent --SV敌人组141至160--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-147-姿势
 * @parent --SV敌人组141至160--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-148-姿势
 * @parent --SV敌人组141至160--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-149-姿势
 * @parent --SV敌人组141至160--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-150-姿势
 * @parent --SV敌人组141至160--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-151-姿势
 * @parent --SV敌人组141至160--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-152-姿势
 * @parent --SV敌人组141至160--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-153-姿势
 * @parent --SV敌人组141至160--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-154-姿势
 * @parent --SV敌人组141至160--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-155-姿势
 * @parent --SV敌人组141至160--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-156-姿势
 * @parent --SV敌人组141至160--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-157-姿势
 * @parent --SV敌人组141至160--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-158-姿势
 * @parent --SV敌人组141至160--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-159-姿势
 * @parent --SV敌人组141至160--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-160-姿势
 * @parent --SV敌人组141至160--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param --SV敌人组161至180--
 * @parent ======SV模式======
 * @default 
 *
 * @param SV敌人-161-姿势
 * @parent --SV敌人组161至180--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-162-姿势
 * @parent --SV敌人组161至180--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-163-姿势
 * @parent --SV敌人组161至180--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-164-姿势
 * @parent --SV敌人组161至180--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-165-姿势
 * @parent --SV敌人组161至180--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-166-姿势
 * @parent --SV敌人组161至180--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-167-姿势
 * @parent --SV敌人组161至180--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-168-姿势
 * @parent --SV敌人组161至180--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-169-姿势
 * @parent --SV敌人组161至180--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-170-姿势
 * @parent --SV敌人组161至180--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-171-姿势
 * @parent --SV敌人组161至180--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-172-姿势
 * @parent --SV敌人组161至180--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-173-姿势
 * @parent --SV敌人组161至180--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-174-姿势
 * @parent --SV敌人组161至180--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-175-姿势
 * @parent --SV敌人组161至180--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-176-姿势
 * @parent --SV敌人组161至180--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-177-姿势
 * @parent --SV敌人组161至180--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-178-姿势
 * @parent --SV敌人组161至180--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-179-姿势
 * @parent --SV敌人组161至180--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-180-姿势
 * @parent --SV敌人组161至180--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param --SV敌人组181至200--
 * @parent ======SV模式======
 * @default 
 *
 * @param SV敌人-181-姿势
 * @parent --SV敌人组181至200--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-182-姿势
 * @parent --SV敌人组181至200--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-183-姿势
 * @parent --SV敌人组181至200--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-184-姿势
 * @parent --SV敌人组181至200--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-185-姿势
 * @parent --SV敌人组181至200--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-186-姿势
 * @parent --SV敌人组181至200--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-187-姿势
 * @parent --SV敌人组181至200--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-188-姿势
 * @parent --SV敌人组181至200--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-189-姿势
 * @parent --SV敌人组181至200--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-190-姿势
 * @parent --SV敌人组181至200--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-191-姿势
 * @parent --SV敌人组181至200--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-192-姿势
 * @parent --SV敌人组181至200--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-193-姿势
 * @parent --SV敌人组181至200--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-194-姿势
 * @parent --SV敌人组181至200--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-195-姿势
 * @parent --SV敌人组181至200--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-196-姿势
 * @parent --SV敌人组181至200--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-197-姿势
 * @parent --SV敌人组181至200--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-198-姿势
 * @parent --SV敌人组181至200--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-199-姿势
 * @parent --SV敌人组181至200--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param SV敌人-200-姿势
 * @parent --SV敌人组181至200--
 * @desc SV敌人姿势的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @help  
 * =============================================================================
 * +++ MOG Enemy Poses (v1.3) +++
 * By Moghunter 
 * https://mogplugins.wordpress.com/
 * =============================================================================
 * 使得敌人战斗具有4种姿势：正常、虚弱、进攻、受伤。
 * 【现已支持插件关联资源的打包、加密】
 * ★★必须放在插件 MOG_BattlerMotion单位-呼吸效果 的后面★★
 * 
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.插件的作用域：战斗界面。
 *   只作用于敌人。
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 要查看所有关联资源文件的插件，可以去看看"插件清单.xlsx"。
 * 含有战斗姿势的敌人需要配置：（img/enemies/文件夹）
 *
 * 敌人-1-姿势（1表示与敌人编号为1的敌人拥有姿势）
 * 敌人-2-姿势
 * 敌人-3-姿势
 * ……
 *
 * 配置的图片是集合正常、虚弱、进攻、受伤四个姿态的png图片。
 * 不需要原版的Battler Poses注释，这里会自动根据你是否配置姿势来判断。
 * 注意仔细核对敌人姿势与敌人的编号。
 *
 * SV敌人-1-姿势（如果是SV模式，则配置这一块）
 * SV敌人-2-姿势
 * SV敌人-3-姿势
 * ……
 *
 * sv模式下，敌人图片资源都在sv_enemies文件夹中，敌人姿势资源放在其中。
 * 
 * -----------------------------------------------------------------------------
 * ----关于Drill_up优化：
 * [v1.1]
 * 使得该插件支持关联资源的打包、加密。
 * 部署时勾选去除无关文件，本插件中相关的文件不会被去除。
 * [v1.2]
 * 修改了插件的分类。
 * [v1.3]
 * 添加了最大值编辑的支持。
 *
 */

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//插件记录：
//		MOG在1.4中去掉了对旧版本的支持【这就很烦】
//			去掉 if (Imported.MOG_AuraEffect) 相关方法
//			去掉 if (Imported.MOG_BattlerMotion) 相关方法
//		
//		对读取敌人图片时，做了文件夹分类改动。
//			3379 poses_list变量定义
//			3439/3476/3493 $gameSystem.isSideView()的文件夹分类修改
//			3542 指定虚弱的图片
//

//
//
//

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_EnemyPoses = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_EnemyPoses');
	
	Moghunter.poses_list_length = 200;
	Moghunter.poses_list = {};
	for (var i = 1; i <= Moghunter.poses_list_length ; i++ ) {
		Moghunter.poses_list[i] = String(Moghunter.parameters['敌人-' + String(i) + "-姿势" ]);
	};
	Moghunter.poses_sv_list_length = 200;
	Moghunter.poses_sv_list = {};
	for (var i = 1; i <= Moghunter.poses_sv_list_length ; i++ ) {
		Moghunter.poses_sv_list[i] = String(Moghunter.parameters['SV敌人-' + String(i) + "-姿势" ]);
	};
	
//=============================================================================
// ** Game_Battler
//=============================================================================

//==============================
// * Init Members
//==============================
var _mog_battlerposes_gbat_initMembers = Game_Battler.prototype.initMembers;
Game_Battler.prototype.initMembers = function() {
	_mog_battlerposes_gbat_initMembers.call(this);
	this._batPoses = [false,0,0,-1,false];
};

//==============================
// * setBPose
//==============================
Game_Battler.prototype.setBPose = function(pose) {
     this._batPoses[1] = pose;
	 this._batPoses[2] = pose === 2 ? 120 : 60;
};

//==============================
// * isBPose
//==============================
Game_Battler.prototype.isBPose = function(pose) {
     return this._batPoses[0];
};

//==============================
// * Force Action
//==============================
var _mog_batposes_forceAction = Game_Battler.prototype.forceAction;
Game_Battler.prototype.forceAction = function(skillId, targetIndex) {
	this.setBPose(2);
	_mog_batposes_forceAction.call(this,skillId, targetIndex);	
};

//==============================
// * Notetags
//==============================
Game_Battler.prototype.notetags = function() {
	if (this.isEnemy()) {return this.enemy().note.split(/[\r\n]+/)};
	if (this.isActor()) {return this.actor().note.split(/[\r\n]+/)};
};

//==============================
// * check Bat Poses
//==============================
Game_Battler.prototype.checkBatPoses = function() {
    this.notetags().forEach(function(note) {
		//if (note === "Battler Poses"){this._batPoses[0] = true;};
		 if ($gameSystem.isSideView()) {
			if( Moghunter.poses_sv_list[this.enemyId()] != "" ){
				this._batPoses[0] = true;
			}
		 }else{
			if( Moghunter.poses_list[this.enemyId()] != "" ){
				this._batPoses[0] = true;
			}
		 }
	},this);
};

//=============================================================================
// ** Game Enemy
//=============================================================================

//==============================
// * Setup
//==============================
var _mog_batposes_setup = Game_Enemy.prototype.setup;
Game_Enemy.prototype.setup = function(enemyId, x, y) {
	_mog_batposes_setup.call(this,enemyId, x, y);
    this.checkBatPoses();
	
};

//==============================
// * Transform
//==============================
var _alias_batposes_transform = Game_Enemy.prototype.transform
Game_Enemy.prototype.transform = function(enemyId) {
    _alias_batposes_transform.call(this,enemyId) 
	var enmy = $dataEnemies[enemyId]
    var enmynotes = enmy.note.split(/[\r\n]+/)
	this._batPoses = [false,0,0,-1,false];
	enmynotes.forEach(function(note) {
		if ($gameSystem.isSideView()) {
			if (Moghunter.poses_sv_list[this.enemyId()] != ""){this._batPoses[0] = true;}
		}else{
			if (Moghunter.poses_list[this.enemyId()] != ""){this._batPoses[0] = true;}
		}
	},this);
};

//=============================================================================
// ** Sprite Enemy
//=============================================================================

//==============================
// * loadBitmap
//==============================
var _mog_batposes_sprenemy_loadBitmap = Sprite_Enemy.prototype.loadBitmap;
Sprite_Enemy.prototype.loadBitmap = function(name, hue) {
	if (this._battler && this._battler.isBPose()) {
		 if ($gameSystem.isSideView()) {
			name = Moghunter.poses_sv_list[this._battler.enemyId()];
		 }else{
			name = Moghunter.poses_list[this._battler.enemyId()];
		 }
	}
	this._battler._batPoses[3] = -1; 
	this.visible = false;
	_mog_batposes_sprenemy_loadBitmap.call(this,name, hue);
};

//==============================
// * updateFrame
//==============================
var _mog_batpose_sprenemy_updateFrame = Sprite_Enemy.prototype.updateFrame;
Sprite_Enemy.prototype.updateFrame = function() {
	if (this._battler.isBPose()) {this.updateFramePoses();return};
	_mog_batpose_sprenemy_updateFrame.call(this);
};

//==============================
// * getPoseData
//==============================
Sprite_Enemy.prototype.getPoseData = function() {
   this._battler._batPoses[3] = this.bitmap.width / 4;
   this.batPosesIdle();
   this.visible = true;
};

//==============================
// * Pose Width
//==============================
Sprite_Enemy.prototype.poseWidth = function() {
   return this._battler._batPoses[3];
};

//==============================
// * Pose Index
//==============================
Sprite_Enemy.prototype.poseIndex = function() {
   return this._battler._batPoses[1] * this._battler._batPoses[3];
};

//==============================
// * Bat Poses Iddle
//==============================
Sprite_Enemy.prototype.batPosesIdle = function() {
   var lowHp = Math.floor(this._battler.mhp * 33 / 100);
   this._battler._batPoses[1] = this._battler.hp <= lowHp ? 1 : 0;
   this._battler._batPoses[2] = 0;
};

//==============================
// * updatePoseDuration
//==============================
Sprite_Enemy.prototype.updatePoseDuration = function() {
   this._battler._batPoses[2] -= 1;
   if (this._battler._batPoses[2] === 0) {this.batPosesIdle()}; 
};

//==============================
// * updateFramePoses
//==============================
Sprite_Enemy.prototype.updateFramePoses = function() {
 	if (this.poseWidth() === -1 && this.bitmap.isReady()) {this.getPoseData()};
	if (this.poseWidth() === -1) {return};
	if (this._battler._batPoses[2] > 0) {this.updatePoseDuration()};
	var frameHeight = this.bitmap.height;
    if (this._effectType === 'bossCollapse') {frameHeight = this._effectDuration;};	
    this.setFrame(this.poseIndex(), 0, this.poseWidth(), frameHeight);
};

//=============================================================================
// ** Game Action
//=============================================================================

//==============================
// * Apply
//==============================
var _mog_batposes_apply = Game_Action.prototype.apply;
Game_Action.prototype.apply = function(target) {
	 var oldhp = target.hp;
	 _mog_batposes_apply.call(this,target);
	 if (oldhp > target.hp && this.item().damage.type != 0) {target.setBPose(3);
	 } else if (oldhp < target.hp) {target.setBPose(1)};
};

//==============================
// * Prepare
//==============================
var _mog_batposes_action_prepare = Game_Action.prototype.prepare
Game_Action.prototype.prepare = function() {	
	_mog_batposes_action_prepare.call(this);
	if (this.subject()) {this.subject().setBPose(2);};
};

//=============================================================================
// ** BattleManager
//=============================================================================

//==============================
// * endAction
//==============================
var _mog_batpose_Bmgr_endAction = BattleManager.endAction;
BattleManager.endAction = function() {
	if (this._subject) {this._subject._batPoses[2] = 1};
	_mog_batpose_Bmgr_endAction.call(this);
};

/*
if (Imported.MOG_AuraEffect) {
//=============================================================================
// ** Aura PlaneA
//=============================================================================	
	
//==============================
// * Update
//==============================
var _mog_batpose_aua_update_aura = Aura_PlaneA.prototype.update_aura;
Aura_PlaneA.prototype.update_aura = function(sprite) {
    _mog_batpose_aua_update_aura.call(this,sprite);
    if (this._SprBat && this.bitmap && sprite._battler.isBPose()) {
	   var width = this.bitmap.width / 4;
	   var wd = sprite._battler._batPoses[1] * sprite._battler._batPoses[3];
       this.setFrame(wd, 0, width, this.bitmap.height);
	};	
};

//=============================================================================
// ** Aura PlaneB
//=============================================================================	

//==============================
// * Reset Particle
//==============================
var _mog_batpose_aub_reset_particle = Aura_PlaneB.prototype.reset_particle;
Aura_PlaneB.prototype.reset_particle = function(i,sprite,initial) {
    if (sprite._battler.isBPose()) {this._aura_data[2] = sprite.bitmap.width / 4;};	
    _mog_batpose_aub_reset_particle.call(this,i,sprite,initial)
};
};

if (Imported.MOG_BattlerMotion) {
//=============================================================================
// ** SpriteBattleShadow
//=============================================================================	
	
//==============================
// * Update Shadow
//==============================
var _mog_batpose_Sprshd_update_shadow = SpriteBattlerShadow.prototype.update_shadow;
SpriteBattlerShadow.prototype.update_shadow = function(sprite) {	
    _mog_batpose_Sprshd_update_shadow.call(this,sprite)
    if (this.bitmap && sprite._battler.isBPose()) {
	   var width = this.bitmap.width / 4;
	   var wd = sprite._battler._batPoses[1] * sprite._battler._batPoses[3];
       this.setFrame(wd, 0, width, this.bitmap.height);
	};
};
};
*/