//=============================================================================
// GT50 Plugins - YEPPluginInfo
// GT_X_YEPPluginInfo.js
//=============================================================================

var Imported = Imported || {};
Imported.GT_X_YEPPluginInfo = true;

var GT = GT || {};
GT.YEPInfo = GT.YEPInfo || {};
GT.YEPInfo.version = 1.0;

//=============================================================================
/*:
 * @plugindesc [v1.0]        控件 - 模块信息窗口 - YEP插件信息扩展
 * @author ganfly
 *
 * @help
 * ============================================================================
 *  介绍
 * ============================================================================
 * 
 * 本插件为模块信息窗口的YEP插件信息扩展，可以显示YEP插件的信息。
 * 必须安装GT_ObjectInfoWindow才能运行。
 * 请将本插件置于GT_ObjectInfoWindow以及所有以下提到的YEP插件下方。
 * 
 * ============================================================================
 *  备注
 * ============================================================================
 * ----状态备注 
 *
 *     <被动状态扩展信息>
 *     xxxx
 *     xxxx
 *     </被动状态扩展信息>
 *     这会使得此状态作为被动状态显示在窗口内时显示额外的信息
 *     备注中间的内容每一行都代表显示的一行，可以写多行
 *     例如 <被动状态扩展信息>
 *          这是一句非常长的没有意
 *          义的话。
 *          </被动状态扩展信息>
 *  !!注意：这条备注必须配合YEP_AutoPassiveStates插件使用
 *
 * ============================================================================
 *  兼容性
 * ============================================================================
 * 
 *  目前已经同以下插件兼容，请将此插件置于以下所有插件的下方
 *     YEP_AbsorptionBarrier
 *     YEP_X_ArmorScaling
 *     YEP_X_CriticalControl
 *     YEP_ElementCore
 *     YEP_LifeSteal
 *     YEP_TargetCore
 *     YEP_AutoPassiveStates
 *     YEP_X_PassiveAuras
 *     YEP_X_AttachAugments
 *     YEP_X_ItemDurability
 *     YEP_X_ItemPictureImg
 *     YEP_X_ItemUpgradeSlots
 *     YEP_X_LimitedSkillUses
 *     YEP_X_PartyLimitGauge
 *     YEP_X_SkillCooldowns
 *     YEP_X_SkillCostItems
 *     YEP_InstantCast
 *     YEP_MultiTypeSkills
 *     YEP_SkillMasteryLevels
 *     YEP_X_EquipRequirements
 *         
 * ============================================================================
 *  用户规约
 * ============================================================================
 * 
 *  MIT规约。
 *  如果你使用了本插件，请在致谢中包含'ganfly'或者'gt50'，谢啦！
 * 
 * ============================================================================
 *  更新日志
 * ============================================================================
 * 
 * [v1.0] 完成插件。
 *
 * ============================================================================
 *  帮助结束
 * ============================================================================
 *
 * @param Text
 * @text ----用语设定----
 *
 * @param SkillCostText
 * @text YEP技能相关插件用语
 * @type struct<SkillCostText>
 * @parent Text
 * @desc 技能相关信息的显示设置
 * @default {"LimitedUses":"{\"Name\":\"剩余次数\",\"Show\":\"true\"}","PartyLimitCost":"{\"Name\":\"消耗战意\",\"Show\":\"true\"}","Warmup":"{\"Name\":\"预热时间\",\"Show\":\"true\"}","Cooldown":"{\"Name\":\"冷却时间\",\"Show\":\"true\"}","ItemCost":"{\"Name\":\"消耗物品\",\"Show\":\"true\"}","InstantCast":"{\"Name\":\"瞬发型%1\",\"Show\":\"true\"}","Level":"{\"Name\":\"等级\",\"Show\":\"true\"}"}
 *
 * @param ObjRequireText
 * @text YEP需求条件插件用语
 * @type struct<ObjRequireText>
 * @parent Text
 * @desc 装备需求条件信息的显示设置，部分需要YEP_X_ItemRequirements和YEP_X_EquipRequirements
 * @default {"ClassRequire":"{\"Name\":\"需求职业\",\"Show\":\"true\"}","MinLevelRequire":"{\"Name\":\"需求等级\",\"Show\":\"true\"}","MaxLevelRequire":"{\"Name\":\"等级限制\",\"Show\":\"true\"}","MinParamRequire":"{\"Name\":\"需求%1\",\"Show\":\"true\"}","MaxParamRequire":"{\"Name\":\"%1限制\",\"Show\":\"true\"}","SkillRequire":"{\"Name\":\"需求技能\",\"Show\":\"true\"}","SwitchRequire":"{\"Name\":\"需求进程\",\"Show\":\"true\"}"}
 *
 * @param YEPItemText
 * @text YEP物品相关插件用语
 * @type struct<YEPItemText>
 * @parent Text
 * @desc YEP物品插件相关用语的显示设置
 * @default {"ShowSlotsInfo":"true","ShowAugmentInfo":"true","ShowDurabilityInfo":"true"}
 *
 * @param YEPABarrierText
 * @text YEP吸收屏障插件用语
 * @type struct<YEPABarrierText>
 * @parent Text
 * @desc YEP屏障插件相关用语的显示设置
 * @default {"Barrier":"屏障","userBarrier":"{\"Name\":\"使用者%1\",\"Show\":\"true\"}","targetBarrier":"{\"Name\":\"目标%1\",\"Show\":\"true\"}","BarrierPenetration":"{\"Name\":\"%1穿透\",\"Show\":\"true\"}","battleStartBarrierPoints":"{\"Name\":\"固有%1\",\"Show\":\"true\"}","barrierRegen":"{\"Name\":\"%1自动回复\",\"Show\":\"true\"}"}
 *
 * @param YEPArmorScaleText
 * @text YEP护甲分级插件用语
 * @type struct<YEPArmorScaleText>
 * @parent Text
 * @desc YEP护甲分级插件相关用语的显示设置
 * @default {"armorReduction":"{\"Name\":\"护甲削减\",\"Show\":\"true\"}","armorPenetration":"{\"Name\":\"护甲穿透\",\"Show\":\"true\"}","physArmorRed":"{\"Name\":\"物理削减\",\"Show\":\"true\"}","magArmorRed":"{\"Name\":\"魔法削减\",\"Show\":\"true\"}","cerArmorRed":"{\"Name\":\"真实削减\",\"Show\":\"true\"}","physArmorPen":"{\"Name\":\"物理穿透\",\"Show\":\"true\"}","magArmorPen":"{\"Name\":\"魔法穿透\",\"Show\":\"true\"}","cerArmorPen":"{\"Name\":\"真实穿透\",\"Show\":\"true\"}"}
 *
 * @param YEPCriCtrlText
 * @text YEP暴击控制插件用语
 * @type struct<YEPCriCtrlText>
 * @parent Text
 * @desc YEP暴击控制插件相关用语的显示设置
 * @default {"ShowcritRate":"true","critMult":"{\"Name\":\"暴击效果\",\"Show\":\"true\"}","flatCrit":"{\"Name\":\"暴击效果加成\",\"Show\":\"true\"}","physicalCritRate":"{\"Name\":\"物理%1\",\"Show\":\"true\"}","magicalCritRate":"{\"Name\":\"魔法%1\",\"Show\":\"true\"}","certainCritRate":"{\"Name\":\"真实%1\",\"Show\":\"true\"}"}
 *
 * @param YEPElementText
 * @text YEP元素核心插件用语
 * @type struct<YEPElementText>
 * @parent Text
 * @desc YEP元素核心插件相关用语的显示设置
 * @default {"multipleElements":"{\"Name\":\"追加属性\",\"Show\":\"true\"}","bypassEleReflect":"{\"Name\":\"不可反射\",\"Show\":\"true\"}","elementAbsorb":"{\"Name\":\"元素吸收\",\"Show\":\"true\"}","elementReflect":"{\"Name\":\"%1元素反射\",\"Show\":\"true\"}","elementMagnify":"{\"Name\":\"%1元素倍增\",\"Show\":\"true\"}","elementAmplify":"{\"Name\":\"%1元素加成\",\"Show\":\"true\"}","elementNull":"{\"Name\":\"元素无效化\",\"Show\":\"true\"}","elementForcedRate1":"{\"Name\":\"%1绝对抗性\",\"Show\":\"true\"}","elementForcedRate2":"{\"Name\":\"%1绝对吸收\",\"Show\":\"true\"}"}
 *
 * @param YEPLifeStealText
 * @text YEP生命偷取插件用语
 * @type struct<YEPLifeStealText>
 * @parent Text
 * @desc YEP生命偷取插件相关用语的显示设置
 * @default {"hp":"{\"Name\":\"吸血\",\"Show\":\"true\"}","mp":"{\"Name\":\"吸蓝\",\"Show\":\"true\"}","allNull":"{\"Name\":\"禁止吸血吸蓝\",\"Show\":\"true\"}","hpNull":"{\"Name\":\"禁止吸血\",\"Show\":\"true\"}","mpNull":"{\"Name\":\"禁止吸蓝\",\"Show\":\"true\"}","allGuard":"{\"Name\":\"免疫吸血吸蓝\",\"Show\":\"true\"}","hpGuard":"{\"Name\":\"免疫吸血\",\"Show\":\"true\"}","mpGuard":"{\"Name\":\"免疫吸蓝\",\"Show\":\"true\"}","hpPhysical":"{\"Name\":\"物理吸血\",\"Show\":\"true\"}","hpMagical":"{\"Name\":\"魔法吸血\",\"Show\":\"true\"}","hpCertain":"{\"Name\":\"真实吸血\",\"Show\":\"true\"}","mpPhysical":"{\"Name\":\"物理吸蓝\",\"Show\":\"true\"}","mpMagical":"{\"Name\":\"魔法吸蓝\",\"Show\":\"true\"}","mpCertain":"{\"Name\":\"真实吸蓝\",\"Show\":\"true\"}"}
 *
 * @param YEPTargetText
 * @text YEP目标核心插件用语
 * @type struct<YEPTargetText>
 * @parent Text
 * @desc YEP目标核心插件相关用语的显示设置
 * @default {"EVERYBODY":"全场所有人","RANDOM ANY":"全场随机%1人","TARGET ALL FOES":"敌方全体","TARGET RANDOM FOES":"敌方单体+敌方随机%1人","RANDOM FOES":"敌方随机%1人","ALL BUT USER":"我方所有队友","TARGET ALL ALLIES":"我方全体","TARGET RANDOM ALLIES":"我方单体+我方随机%1人","RANDOM ALLIES":"我方随机%1人","MULTIPLE":"%1%2是%3倍数的目标","MULTIPLEText":"[\"全场\",\"我方\",\"敌方\"]"}
 *
 * @param YEPPassiveStateText
 * @text YEP被动状态插件用语
 * @type struct<YEPPassiveStateText>
 * @parent Text
 * @desc YEP被动状态插件相关用语的显示设置
 * @default {"ShowPassiveState":"true","StateCondition":"{\"Name\":\"[触发条件]\",\"Show\":\"true\"}","AlwaysAct":"[永久触发]","ConditionAct":"[条件触发]","TitleFmt":"\\c[4][被动]\\c[0]%1","Below":"低于","Above":"高于","Open":"开启","Close":"关闭"}
 *
 * @param YEPPassiveAurasText
 * @text YEP群体被动插件用语
 * @type struct<YEPPassiveAurasText>
 * @parent Text
 * @desc YEP群体被动插件相关用语的显示设置
 * @default {"ShowPassiveAuras":"true","friends":"队友光环","aliveFriends":"存活队友光环","deadFriends":"死亡队友光环","opponents":"对手光环","aliveOpponents":"存活对手光环","deadOpponents":"死亡对手光环","party":"角色光环","aliveParty":"存活角色光环","deadParty":"死亡角色光环","troop":"敌群光环","aliveTroop":"存活敌群光环","deadTroop":"死亡敌群光环","all":"全场光环","aliveAll":"全场存活光环","deadAll":"全场死亡光环"}
 *
 */
/* ---------------------------------------------------------------------------
 * struct<SkillCostText>
 * ---------------------------------------------------------------------------
 */
/*~struct~SkillCostText:
 *
 * @param LimitedUses
 * @text 剩余次数
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"剩余次数","Show":"true"}
 *
 * @param PartyLimitCost
 * @text 队伍限制条消耗
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"消耗战意","Show":"true"}
 *
 * @param Warmup
 * @text 预热时间
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"预热时间","Show":"true"}
 *
 * @param Cooldown
 * @text 冷却时间
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"冷却时间","Show":"true"}
 *
 * @param ItemCost
 * @text 消耗物品
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"消耗物品","Show":"true"}
 *
 * @param InstantCast
 * @text 立即释放
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 %1 - 技能/物品
 * @default {"Name":"瞬发型%1","Show":"true"}
 *
 * @param Level
 * @text 技能等级
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"等级","Show":"true"}
 *
 */
/* ---------------------------------------------------------------------------
 * struct<ObjRequireText>
 * ---------------------------------------------------------------------------
 */
/*~struct~ObjRequireText:
 *
 * @param ClassRequire
 * @text 职业限制
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"需求职业","Show":"true"}
 *
 * @param MinLevelRequire
 * @text 最小等级限制
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"需求等级","Show":"true"}
 *
 * @param MaxLevelRequire
 * @text 最大等级限制
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"等级限制","Show":"true"}
 *
 * @param MinParamRequire
 * @text 最小参数限制
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"需求%1","Show":"true"}
 *
 * @param MaxParamRequire
 * @text 最大参数限制
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"%1限制","Show":"true"}
 *
 * @param SkillRequire
 * @text 技能限制
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"需求技能","Show":"true"}
 *
 * @param SwitchRequire
 * @text 开关限制
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"需求进程","Show":"true"}
 *
 */
/* ---------------------------------------------------------------------------
 * struct<YEPItemText>
 * ---------------------------------------------------------------------------
 */
/*~struct~YEPItemText:
 *
 * @param ShowSlotsInfo
 * @text 显示物品升级信息?
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc 是否显示物品升级信息
 * @default true
 *
 * @param ShowAugmentInfo
 * @text 显示物品镶嵌信息?
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc 是否显示物品镶嵌信息
 * @default true
 *
 * @param ShowDurabilityInfo
 * @text 显示物品耐久信息?
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc 是否显示物品耐久信息
 * @default true
 *
 */
/* ---------------------------------------------------------------------------
 * struct<YEPABarrierText>
 * ---------------------------------------------------------------------------
 */
/*~struct~YEPABarrierText:
 *
 * @param Barrier
 * @text 屏障用语
 * @desc 屏障用语的显示设置。
 * @default 屏障
 *
 * @param userBarrier
 * @text 使用者屏障
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * %1 - 屏障
 * @default {"Name":"使用者%1","Show":"true"}
 *
 * @param targetBarrier
 * @text 目标屏障
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * %1 - 屏障
 * @default {"Name":"目标%1","Show":"true"}
 *
 * @param BarrierPenetration
 * @text 屏障穿透
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * %1 - 屏障
 * @default {"Name":"%1穿透","Show":"true"}
 *
 * @param battleStartBarrierPoints
 * @text 战斗开始屏障
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * %1 - 屏障
 * @default {"Name":"固有%1","Show":"true"}
 *
 * @param barrierRegen
 * @text 屏障自动回复
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * %1 - 屏障
 * @default {"Name":"%1自动回复","Show":"true"}
 *
 */
/* ---------------------------------------------------------------------------
 * struct<YEPArmorScaleText>
 * ---------------------------------------------------------------------------
 */
/*~struct~YEPArmorScaleText:
 *
 * @param armorReduction
 * @text 护甲削减
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"护甲削减","Show":"true"}
 *
 * @param armorPenetration
 * @text 护甲穿透
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"护甲穿透","Show":"true"}
 *
 * @param physArmorRed
 * @text 物理护甲削减
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"物理削减","Show":"true"}
 *
 * @param magArmorRed
 * @text 魔法护甲削减
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"魔法削减","Show":"true"}
 *
 * @param cerArmorRed
 * @text 真实护甲削减
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"真实削减","Show":"true"}
 *
 * @param physArmorPen
 * @text 物理护甲穿透
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"物理穿透","Show":"true"}
 *
 * @param magArmorPen
 * @text 魔法护甲穿透
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"魔法穿透","Show":"true"}
 *
 * @param cerArmorPen
 * @text 真实护甲穿透
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"真实穿透","Show":"true"}
 *
 */
/* ---------------------------------------------------------------------------
 * struct<YEPCriCtrlText>
 * ---------------------------------------------------------------------------
 */
/*~struct~YEPCriCtrlText:
 *
 * @param ShowcritRate
 * @text 显示物品/技能暴击率?
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc 是否显示物品/技能暴击率
 * @default true
 *
 * @param critMult
 * @text 暴击效果
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"暴击效果","Show":"true"}
 *
 * @param flatCrit
 * @text 暴击效果加成
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"暴击效果加成","Show":"true"}
 *
 * @param physicalCritRate
 * @text 物理暴击率
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"物理%1","Show":"true"}
 *
 * @param magicalCritRate
 * @text 魔法暴击率
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"魔法%1","Show":"true"}
 *
 * @param certainCritRate
 * @text 真实暴击率
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"真实%1","Show":"true"}
 *
 */
/* ---------------------------------------------------------------------------
 * struct<YEPElementText>
 * ---------------------------------------------------------------------------
 */
/*~struct~YEPElementText:
 *
 * @param multipleElements
 * @text 追加元素
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"追加属性","Show":"true"}
 *
 * @param bypassEleReflect
 * @text 忽略元素反射
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"不可反射","Show":"true"}
 *
 * @param elementAbsorb
 * @text 元素吸收
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"元素吸收","Show":"true"}
 *
 * @param elementReflect
 * @text 元素反射
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * %1 - 元素名
 * @default {"Name":"%1元素反射","Show":"true"}
 *
 * @param elementMagnify
 * @text 元素倍增
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * %1 - 元素名
 * @default {"Name":"%1元素倍增","Show":"true"}
 *
 * @param elementAmplify
 * @text 元素加成
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * %1 - 元素名
 * @default {"Name":"%1元素加成","Show":"true"}
 *
 * @param elementNull
 * @text 元素清空
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"元素无效化","Show":"true"}
 *
 * @param elementForcedRate1
 * @text 绝对抗性
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * %1 - 元素名
 * @default {"Name":"%1绝对抗性","Show":"true"}
 *
 * @param elementForcedRate2
 * @text 绝对吸收
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * %1 - 元素名
 * @default {"Name":"%1绝对吸收","Show":"true"}
 *
 */
/* ---------------------------------------------------------------------------
 * struct<YEPLifeStealText>
 * ---------------------------------------------------------------------------
 */
/*~struct~YEPLifeStealText:
 *
 * @param hp
 * @text 吸血
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"吸血","Show":"true"}
 *
 * @param mp
 * @text 吸蓝
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"吸蓝","Show":"true"}
 *
 * @param allNull
 * @text 禁止吸血吸蓝
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"禁止吸血吸蓝","Show":"true"}
 *
 * @param hpNull
 * @text 禁止吸血
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"禁止吸血","Show":"true"}
 *
 * @param mpNull
 * @text 禁止吸蓝
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"禁止吸蓝","Show":"true"}
 *
 * @param allGuard
 * @text 免疫吸血吸蓝
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"免疫吸血吸蓝","Show":"true"}
 *
 * @param hpGuard
 * @text 免疫吸血
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"免疫吸血","Show":"true"}
 *
 * @param mpGuard
 * @text 免疫吸蓝
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"免疫吸蓝","Show":"true"}
 *
 * @param hpPhysical
 * @text 物理吸血
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"物理吸血","Show":"true"}
 *
 * @param hpMagical
 * @text 魔法吸血
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"魔法吸血","Show":"true"}
 *
 * @param hpCertain
 * @text 真实吸血
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"真实吸血","Show":"true"}
 *
 * @param mpPhysical
 * @text 物理吸蓝
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"物理吸蓝","Show":"true"}
 *
 * @param mpMagical
 * @text 魔法吸蓝
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"魔法吸蓝","Show":"true"}
 *
 * @param mpCertain
 * @text 真实吸蓝
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"真实吸蓝","Show":"true"}
 *
 */
/* ---------------------------------------------------------------------------
 * struct<YEPTargetText>
 * ---------------------------------------------------------------------------
 */
/*~struct~YEPTargetText:
 *
 * @param EVERYBODY
 * @text 全场所有人
 * @desc  全场所有人用语。
 * @default 全场所有人
 *
 * @param RANDOM ANY
 * @text 全场随机x人
 * @desc  全场随机x人用语。
 * %1 - 人数
 * @default 全场随机%1人
 *
 * @param TARGET ALL FOES
 * @text 敌方全体
 * @desc  敌方全体用语。
 * @default 敌方全体
 *
 * @param TARGET RANDOM FOES
 * @text 敌方单体+敌方随机x人
 * @desc  敌方单体+敌方随机x人用语。
 * %1 - 人数
 * @default 敌方单体+敌方随机%1人
 *
 * @param RANDOM FOES
 * @text 敌方随机x人
 * @desc  敌方随机x人用语。
 * %1 - 人数
 * @default 敌方随机%1人
 *
 * @param ALL BUT USER
 * @text 我方除使用者外所有人
 * @desc  我方除使用者外所有人用语。
 * @default 我方所有队友
 *
 * @param TARGET ALL ALLIES
 * @text 我方全体
 * @desc  我方全体用语。
 * @default 我方全体
 *
 * @param TARGET RANDOM ALLIES
 * @text 我方单体+我方随机x人
 * @desc  我方单体+我方随机x人用语。
 * %1 - 人数
 * @default 我方单体+我方随机%1人
 *
 * @param RANDOM ALLIES
 * @text 我方随机x人
 * @desc  我方随机x人用语。
 * %1 - 人数
 * @default 我方随机%1人
 *
 * @param MULTIPLE
 * @text 满足条件的目标
 * @desc  满足条件的目标用语。
 * %1 - 全场/我方/敌方 %2 - 参数名 %3 - 数值
 * @default %1%2是%3倍数的目标
 *
 * @param MULTIPLEText
 * @text 满足条件的目标细则
 * @type text[]
 * @desc  全场/我方/敌方用语。
 * @default ["全场","我方","敌方"]
 *
 */
/* ---------------------------------------------------------------------------
 * struct<YEPPassiveStateText>
 * ---------------------------------------------------------------------------
 */
/*~struct~YEPPassiveStateText:
 *
 * @param ShowPassiveState
 * @text 是否显示被动状态
 * @type boolean
 * @on 显示
 * @off 隐藏
 * @desc 是否显示被动状态信息。
 * @default true
 *
 * @param StateCondition
 * @text 被动状态触发条件
 * @type struct<ParamText>
 * @desc 参数的显示设置。
 * @default {"Name":"[触发条件]","Show":"true"}
 *
 * @param AlwaysAct
 * @text 永久触发用语
 * @desc  永久触发用语。
 * @default [永久触发]
 *
 * @param ConditionAct
 * @text 条件触发用语
 * @desc  条件触发用语。
 * @default [条件触发]
 *
 * @param TitleFmt
 * @text 被动名称格式
 * @desc  被动名称格式。
 * %1 - 触发方式 %2 - 被动状态名
 * @default \c[4][被动]\c[0]%1
 *
 * @param Below
 * @text 小于等于用语
 * @desc  小于等于用语
 * @default 低于
 *
 * @param Above
 * @text 大于等于用语
 * @desc  大于等于用语
 * @default 高于
 *
 * @param Open
 * @text 开关开启用语
 * @desc  开关开启用语
 * @default 开启
 *
 * @param Close
 * @text 开关关闭用语
 * @desc  开关关闭用语
 * @default 关闭
 *
 */
/* ---------------------------------------------------------------------------
 * struct<YEPPassiveAurasText>
 * ---------------------------------------------------------------------------
 */
/*~struct~YEPPassiveAurasText:
 *
 * @param ShowPassiveAuras
 * @text 是否显示群体被动状态
 * @type boolean
 * @on 显示
 * @off 隐藏
 * @desc 是否显示群体被动状态信息。
 * @default true
 *
 * @param friends
 * @text 队友群体状态用语
 * @desc  队友群体状态用语。
 * @default 队友光环
 *
 * @param aliveFriends
 * @text 存活队友群体状态用语
 * @desc  存活队友群体状态用语。
 * @default 存活队友光环
 *
 * @param deadFriends
 * @text 死亡队友群体状态用语
 * @desc  死亡队友群体状态用语。
 * @default 死亡队友光环
 *
 * @param opponents
 * @text 对手群体状态用语
 * @desc  对手群体状态用语
 * @default 对手光环
 *
 * @param aliveOpponents
 * @text 存活对手群体状态用语
 * @desc  存活对手群体状态用语
 * @default 存活对手光环
 *
 * @param deadOpponents
 * @text 死亡对手群体状态用语
 * @desc  死亡对手群体状态用语
 * @default 死亡对手光环
 *
 * @param party
 * @text 角色群体状态用语
 * @desc  角色群体状态用语
 * @default 角色光环
 *
 * @param aliveParty
 * @text 存活角色群体状态用语
 * @desc  存活角色群体状态用语
 * @default 存活角色光环
 *
 * @param deadParty
 * @text 死亡角色群体状态用语
 * @desc  死亡角色群体状态用语
 * @default 死亡角色光环
 *
 * @param troop
 * @text 敌群群体状态用语
 * @desc  敌群群体状态用语
 * @default 敌群光环
 *
 * @param aliveTroop
 * @text 存活敌群群体状态用语
 * @desc  存活敌群群体状态用语
 * @default 存活敌群光环
 *
 * @param deadTroop
 * @text 死亡敌群群体状态用语
 * @desc  死亡敌群群体状态用语
 * @default 死亡敌群光环
 *
 * @param all
 * @text 全场角色群体状态用语
 * @desc  全场角色群体状态用语
 * @default 全场光环
 *
 * @param aliveAll
 * @text 全场存活角色群体状态用语
 * @desc  全场存活角色群体状态用语
 * @default 全场存活光环
 *
 * @param deadAll
 * @text 全场死亡角色群体状态用语
 * @desc  全场死亡角色群体状态用语
 * @default 全场死亡光环
 *
 */
/* ---------------------------------------------------------------------------
 * struct<ParamText>
 * ---------------------------------------------------------------------------
 */
/*~struct~ParamText:
 *
 * @param Name
 * @text 参数用语
 * @desc 参数的显示名称。
 * @default 
 *
 * @param Show
 * @text 参数是否显示
 * @type boolean
 * @on 显示
 * @off 隐藏
 * @desc 参数是否显示。
 * @default true
 *
 */
//=============================================================================

if (Imported.GT_ObjectInfoWindow) {
	
//=============================================================================
// Parameter Variables
//=============================================================================

GT.Parameters = PluginManager.parameters('GT_X_YEPPluginInfo');
GT.Param = GT.Param || {};

GT.Param.YEPSkillCostText = JSON.parse(GT.Parameters['SkillCostText']);
GT.Param.YEPObjRequireText = JSON.parse(GT.Parameters['ObjRequireText']);
GT.Param.YEPItemText = JSON.parse(GT.Parameters['YEPItemText']);
GT.Param.YEPABarrierText = JSON.parse(GT.Parameters['YEPABarrierText']);
GT.Param.YEPArmorScaleText = JSON.parse(GT.Parameters['YEPArmorScaleText']);
GT.Param.YEPCriCtrlText = JSON.parse(GT.Parameters['YEPCriCtrlText']);
GT.Param.YEPElementText = JSON.parse(GT.Parameters['YEPElementText']);
GT.Param.YEPLifeStealText = JSON.parse(GT.Parameters['YEPLifeStealText']);
GT.Param.YEPTargetText = JSON.parse(GT.Parameters['YEPTargetText']);
GT.Param.YEPPassiveStateText = JSON.parse(GT.Parameters['YEPPassiveStateText']);
GT.Param.YEPPassiveAurasText = JSON.parse(GT.Parameters['YEPPassiveAurasText']);

//=============================================================================
// DataManager
//=============================================================================

GT.YEPInfo.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
    if (!GT.YEPInfo.DataManager_isDatabaseLoaded.call(this)) 
		return false;
    if (!GT._loaded_GT_YEPInfo) {
		this.processYEPInfoNotetags($dataStates);
        GT._loaded_GT_YEPInfo = true;
    }
    return true;
};

DataManager.processYEPInfoNotetags = function (group) {
    for (var i = 1; i < group.length; i++) {
        var obj = group[i];
        this.setupPStateExInfoNotetags(obj);
    }
};

DataManager.setupPStateExInfoNotetags = function (obj) {
	var note1 = /<(?:被动状态扩展信息)>/i;
	var note2 = /<\/(?:被动状态扩展信息)>/i;
	
    var notedata = obj.note.split(/[\r\n]+/);
	obj.passiveExInfos = [];
	var evalMode = 'none';
	
    for (var i = 0; i < notedata.length; i++) {
        var line = notedata[i];
        if (line.match(note1)) {
            evalMode = 'info text top';
        } 
		else if (line.match(note2)) {
            evalMode = 'none';
        } 
		else if (evalMode === 'info text top') {
            obj.passiveExInfos.push(line);
        } 
    }
};

DataManager.isState = function(item) {
    return item && $dataStates.contains(item);
};

//=============================================================================
// Window_ObjectInfo
//=============================================================================

GT.YEPInfo.Window_ObjectInfo_initialize = Window_ObjectInfo.prototype.initialize;
Window_ObjectInfo.prototype.initialize = function(windowSet) {
	this._stateData = [];
	this._stateTitle = [];
	this._stateAfter = [];
	this._stateRequire = [];
	GT.YEPInfo.Window_ObjectInfo_initialize.call(this, windowSet);
};

GT.YEPInfo.Window_ObjectInfo_dataLength = Window_ObjectInfo.prototype.dataLength;
Window_ObjectInfo.prototype.dataLength = function() {
	var length = GT.YEPInfo.Window_ObjectInfo_dataLength.call(this);
	for (var i = 0; i < this._stateData.length; i++) {
		length += this._stateData[i].length + 1;
		length += this._stateAfter[i].length;
	}
	length += this.levelHeight() ? 1 : 0;
	return length;
};

GT.YEPInfo.Window_ObjectInfo_makeObjInfo = Window_ObjectInfo.prototype.makeObjInfo;
Window_ObjectInfo.prototype.makeObjInfo = function () {
	this._stateData = [];
	this._stateTitle = [];
	this._stateAfter = [];
	this._stateRequire = [];
	GT.YEPInfo.Window_ObjectInfo_makeObjInfo.call(this);
};

GT.YEPInfo.Window_ObjectInfo_calAllDataWidth = Window_ObjectInfo.prototype.calAllDataWidth;
Window_ObjectInfo.prototype.calAllDataWidth = function (width) {
	width = GT.YEPInfo.Window_ObjectInfo_calAllDataWidth.call(this, width);
	for (var i = 0; i < this._stateData.length; i++) {
		width = this.calculateDataWidth(this._stateData[i], width);
		width = this.calculateDataWidth(this._stateAfter[i], width, 1);
	}
	width = this.calculateDataWidth(this._stateTitle, width, 1);
	return width;
};

Window_ObjectInfo.prototype.levelHeight = function () {
	if (!this._actor) return 0;
	if (!DataManager.isSkill(this._item)) return 0;
	if (!Imported.YEP_SkillMasteryLevels) return 0;
	if (Imported.FTKR_STS && SceneManager._scene instanceof Scene_STS) return 0;
	if (!this.getObjTextShow('YEPSkillCostText', 'Level')) return 0;
	if (this._item.masteryMaxLevel <= 0) return 0;
	var level = this._actor.skillMasteryLevel(this._item);
	//if (level <= 0 && !Yanfly.Param.SMLShowLevel0) return 0;
	return this.lineHeight() + this.textPadding() * 2;
};

Window_ObjectInfo.prototype.stateHeight = function () {
	var height = 0;
	for (var i = 0; i < this._stateData.length; i++) {
		var lineHeight = this.MoreColsCalHeight(this._stateData[i]);
		lineHeight += this._stateAfter[i].length * this.lineHeight();
		if (lineHeight) lineHeight += this.textPadding() * 2 + this.lineHeight();
		height += lineHeight;
	}
	return height;
};

GT.YEPInfo.Window_ObjectInfo_calAllDataHeight = Window_ObjectInfo.prototype.calAllDataHeight;
Window_ObjectInfo.prototype.calAllDataHeight = function () {
	var height = GT.YEPInfo.Window_ObjectInfo_calAllDataHeight.call(this);
	height += this.stateHeight();
	height += this.levelHeight();
	return height;
};

GT.YEPInfo.Window_ObjectInfo_getItemInfo = Window_ObjectInfo.prototype.getItemInfo;
Window_ObjectInfo.prototype.getItemInfo = function () {
	GT.YEPInfo.Window_ObjectInfo_getItemInfo.call(this);
	this.getSkillItemBarrier();
	this.getSkillItemArmorScale();
	this.getSkillItemCritical();
	this.getSkillItemElement();
	this.getSkillItemLifeSteal();
	this.getSkillItemInstant();
};

GT.YEPInfo.Window_ObjectInfo_getEquipInfo = Window_ObjectInfo.prototype.getEquipInfo;
Window_ObjectInfo.prototype.getEquipInfo = function () {
	GT.YEPInfo.Window_ObjectInfo_getEquipInfo.call(this);
	var item = this._item;
	this.getEquipBarrier(item);
	this.getEquipArmorScale(item);
	this.getEquipCritical(item);
	this.getEquipElement(item);
	this.getEquipLifeSteal(item);
	this.getEquipSlotsInfo();
	this.getEquipAugmentInfo();
	this.getEquipRequirements();
	this.getObjPassiveState();
};

GT.YEPInfo.Window_ObjectInfo_getSkillInfo = Window_ObjectInfo.prototype.getSkillInfo;
Window_ObjectInfo.prototype.getSkillInfo = function () {
	GT.YEPInfo.Window_ObjectInfo_getSkillInfo.call(this);
	this.getSkillItemBarrier();
	this.getSkillItemArmorScale();
	this.getSkillItemCritical();
	this.getSkillItemElement();
	this.getSkillItemLifeSteal();
	this.getSkillItemInstant();
	this.getObjPassiveState();
};

Window_ObjectInfo.prototype.getObjPassiveState = function() {
	var item = this._item;
	if (!Imported.YEP_AutoPassiveStates) return;
	if (!eval(GT.Param.YEPPassiveStateText.ShowPassiveState)) return;
	if (!item.passiveStates || !item.passiveStates.length) return;
	for (var i = 0; i < item.passiveStates.length; i++) {
		var stateId = item.passiveStates[i];
		if (!stateId) continue;
		var state = $dataStates[stateId];
		this._stateData.push([]);
		this._stateAfter.push([]);
		this.getStateExInfos(state);
		this.getStateRequire(state);
		this.getStateTitle(state);
		this.getObjTraits(state);
		this.getEquipBarrier(state);
		this.getEquipArmorScale(state);
		this.getEquipCritical(state);
		this.getEquipElement(state);
		this.getEquipLifeSteal(state);
		this.getPassiveAuras(state);
	}
};

Window_ObjectInfo.prototype.getPassiveAuras = function(state) {
	if (!Imported.YEP_X_PassiveAuras) return;
	if (!eval(GT.Param.YEPPassiveAurasText.ShowPassiveAuras)) return;
	var aurasText = GT.Param.YEPPassiveAurasText;
	for (var i = 0; i < Yanfly.Aura.Types.length; i++) {
		var passiveAuras = state.aura[Yanfly.Aura.Types[i]];
		for (var j = 0; j < passiveAuras.length; j++) {
			if (!passiveAuras[j]) continue;
			var auraName = $dataStates[passiveAuras[j]].name;
			var auraIcon = $dataStates[passiveAuras[j]].iconIndex;
			if (GT.Param.OIWShowIcon && auraIcon !== 0) 
				auraName = '\\I['+ auraIcon + ']' + auraName;
			var text = this.addSystemColor(String(aurasText[Yanfly.Aura.Types[i]])) + ':' + this.addBasicColor(auraName);
			this.pushData(text, state);
		}
	}
};

Window_ObjectInfo.prototype.getStateExInfos = function(state) {
	var list = state.passiveExInfos;
	this._stateAfter[this._stateAfter.length - 1] = this._stateAfter[this._stateAfter.length - 1].concat(list);
};

Window_ObjectInfo.prototype.getStateTitle = function(state) {
	var name = state.name;
	if (GT.Param.OIWShowIcon && state.iconIndex !== 0)
		name = '\\I['+ state.iconIndex + ']' + name;
	if (this._stateRequire[this._stateRequire.length - 1])
		var condition = this.addBasicColor(String(GT.Param.YEPPassiveStateText.ConditionAct));
	else 
		var condition = this.addBasicColor(String(GT.Param.YEPPassiveStateText.AlwaysAct));
	var text = String(GT.Param.YEPPassiveStateText.TitleFmt).format(condition, name);
	this._stateTitle.push(text);
};

Window_ObjectInfo.prototype.getStateRequire = function(state) {
	if (!this.getObjTextShow('YEPPassiveStateText', 'StateCondition')) 
		return this._stateRequire.push(false);
	var text = this.getObjText('YEPPassiveStateText', 'StateCondition');
	var Below = String(GT.Param.YEPPassiveStateText.Below);
	var Above = String(GT.Param.YEPPassiveStateText.Above);
	var Open = String(GT.Param.YEPPassiveStateText.Open);
	var Close = String(GT.Param.YEPPassiveStateText.Close);
	var require = false;
    var note1a = /<(?:PASSIVE CONDITION):[ ](.*)[ ](?:ABOVE)[ ](\d+)([%％])>/i;
    var note1b = /<(?:PASSIVE CONDITION):[ ](.*)[ ](?:BELOW)[ ](\d+)([%％])>/i;
    var note2a = /<(?:PASSIVE CONDITION):[ ](.*)[ ](?:ABOVE)[ ](\d+)>/i;
    var note2b = /<(?:PASSIVE CONDITION):[ ](.*)[ ](?:BELOW)[ ](\d+)>/i;
    var note3a = /<(?:PASSIVE CONDITION):[ ]SWITCH[ ](\d+)[ ](.*)>/i;
	var notedata = state.note.split(/[\r\n]+/);
	for (var i = 0; i < notedata.length; i++) {
		var line = notedata[i];
		if (line.match(note1a)) {
			var rate = parseFloat(RegExp.$2);
			var param = this.getParamsText(String(RegExp.$1));
			var pass = text + this.addBasicColor(param + Above + rate + '%');
			this._stateAfter[this._stateAfter.length - 1].push(pass);
			require = true;
		}
		else if (line.match(note1b)) {
			var rate = parseFloat(RegExp.$2);
			var param = this.getParamsText(String(RegExp.$1));
		    var pass = text + this.addBasicColor(param + Below + rate + '%');
			this._stateAfter[this._stateAfter.length - 1].push(pass);
			require = true;
		}
		else if (line.match(note2a)) {
			var rate = parseInt(RegExp.$2);
			var param = this.getParamsText(String(RegExp.$1));
			var pass = text + this.addBasicColor(param + Above + rate);
			this._stateAfter[this._stateAfter.length - 1].push(pass);
			require = true;
		} 
		else if (line.match(note2b)) {
			var rate = parseInt(RegExp.$2);
			var param = this.getParamsText(String(RegExp.$1));
			var pass = text + this.addBasicColor(param + Below + rate);
			this._stateAfter[this._stateAfter.length - 1].push(pass);
			require = true;
		} 
		else if (line.match(note3a)) {
			var id = parseInt(RegExp.$1);
			var value = String(RegExp.$2).toUpperCase();
			var pass = '';
			if (['ON', 'TRUE', 'ENABLE', 'ENABLED'].contains(value)) {
				pass = text + this.addBasicColor($dataSystem.switches[id] + Open);
			}
			if (['OFF', 'FALSE', 'DISABLE', 'DISABLED'].contains(value)) {
				pass = text + this.addBasicColor($dataSystem.switches[id] + Close);
			}
			if (pass === '') continue;
			this._stateAfter[this._stateAfter.length - 1].push(pass);
			require = true;
		} 
	}
	this._stateRequire.push(require);
};

GT.YEPInfo.Window_ObjectInfo_getObjScope = Window_ObjectInfo.prototype.getObjScope;
Window_ObjectInfo.prototype.getObjScope = function() {
	var item = this._item;
	if (!Imported.YEP_TargetCore) return GT.YEPInfo.Window_ObjectInfo_getObjScope.call(this);
	if (!this.getObjTextShow('OIWMainText','Scope')) return;
	var text = '';
	var preText = this.getObjText('OIWMainText','Scope') + this.textColon();
	var category = GT.Param.YEPTargetText;
	var codeList1 = ['EVERYBODY', 'TARGET ALL FOES', 'ALL BUT USER', 'TARGET ALL ALLIES'];
	var codeList2 = ['RANDOM ANY', 'TARGET RANDOM FOES', 'TARGET RANDOM ALLIES', 'RANDOM ALLIES'];
	if (codeList1.contains(item.scope)) {
		for (var i = 0; i < codeList1.length; i++) {
			if (item.scope === codeList1[i]) {
				text = preText + this.addBasicColor(category[codeList1[i]]);
				break;
			}
		}
	}
	else if (codeList2.contains(item.scope)) {
		for (var i = 0; i < codeList2.length; i++) {
			if (item.scope === codeList2[i]) {
				text = preText + this.addBasicColor(category[codeList2[i]].format(item.randomTargets));
				break;
			}
		}
	}
	else if (item.scope === 3) {
		text = preText + this.addBasicColor(category['RANDOM FOES'].format(item.randomTargets));
	}
	else if (item.scope === 'MULTIPLE') {
		var insideList = JSON.parse(category['MULTIPLEText']);
		var multipleOf0List = ['EVERYBODY', 'FRIENDS', 'OPPONENTS'];
		for (var i = 0; i < 3; i++) {
			if (item.multipleOf[0] === multipleOf0List[i]) {
				var insideText = insideList[i];
			}
		}
		var paramList = ['LEVEL', 'HP', 'MP', 'TP'];
		if (paramList.contains(item.multipleOf[1])) {
			for (var i = 0; i < paramList.length; i++) {
				if (item.multipleOf[1] === paramList[i]) {
					var typeText = TextManager[paramList[i].toLowerCase()];
					break;
				}
			}
		}
		else {
			var typeText = TextManager.param(item.multipleOf[1]);
		}
		text = preText + this.addBasicColor(category['MULTIPLE'].format(insideText, typeText, item.multipleOf[2]));
	}
	else {
		return GT.YEPInfo.Window_ObjectInfo_getObjScope.call(this);
	}
	this._data.push(text);
};

GT.YEPInfo.Window_ObjectInfo_getSkillType = Window_ObjectInfo.prototype.getSkillType;
Window_ObjectInfo.prototype.getSkillType = function(item) {
	var text = '';
	if (Imported.YEP_MultiTypeSkills) {
		for (var i = 0; i < item.skillTypes.length; i++) {
			var type = item.skillTypes[i];
			if (text !== '') text += '/';
			text += $dataSystem.skillTypes[type];
		}
	}
	else {
		text = GT.YEPInfo.Window_ObjectInfo_getSkillType.call(this, item);
	}
	return text;
};

GT.YEPInfo.Window_ObjectInfo_getObjDamageEle = Window_ObjectInfo.prototype.getObjDamageEle;
Window_ObjectInfo.prototype.getObjDamageEle = function(text, damage) {
	text = GT.YEPInfo.Window_ObjectInfo_getObjDamageEle.call(this, text, damage);
	if (!Imported.YEP_ElementCore) return text;
	var category = 'YEPElementText';
	if (this.getObjTextShow(category, 'bypassEleReflect') && this._item.bypassElementReflect) {
		text += this.addBasicColor('/' + this.getObjText(category, 'bypassEleReflect', 1));
	}
	return text;
};

Window_ObjectInfo.prototype.getSkillItemLifeSteal = function () {
	if (!Imported.YEP_LifeSteal) return;
	var text = '';
	var item = this._item;
	var category = 'YEPLifeStealText';
	var codeList = ['hp', 'mp'];
	var typeList = ['Rate', 'Flat'];
	for (var i = 0; i < 4; ++i) {
		var code = codeList[(i < 2 ? 0 : 1)];
		if (!this.getObjTextShow(category, code)) continue;
		var value = item.lifeSteal[code + typeList[(i % 2)]];
		if (value) {
			text = this.getObjText(category, code) + this.textColon() + this.addBasicColor((i % 2) ? Math.floor(value) : (Math.floor(value * 100) + '%'));
			this._data.push(text);
		}
	}
	var codeList = ['allNull', 'hpNull', 'mpNull'];
	for (var i = 0; i < 3; ++i) {
		var code = codeList[i];
		if (!this.getObjTextShow(category, code)) continue;
		var value = item.lifeSteal[code];
		if (value) {
			text = this.addSystemColor(String(GT.Param.OIWMainText.TraitText)) + this.textColon() + this.addBasicColor(this.getObjText(category, code, 1));
			this._data.push(text);
		}
	}
};

Window_ObjectInfo.prototype.getEquipLifeSteal = function (item) {
	if (!Imported.YEP_LifeSteal) return;
	var text = '';
	var category = 'YEPLifeStealText';
	var codeList = ['hp', 'mp'];
	var typeList = ['Rate', 'Flat'];
	var hitList = ['Physical', 'Magical', 'Certain'];
	for (var i = 0; i < 12; ++i) {
		var code = codeList[(i < 6 ? 0 : 1)] + hitList[(i % 3)];
		if (!this.getObjTextShow(category, code)) continue;
		var value = item.lifeSteal[code + typeList[((i % 6) < 3 ? 0 : 1)]];
		if (value > 0) {
			text = this.getObjText(category, code) + this.addIncreaseColor('+' + (((i % 6) < 3) ? (Math.floor(value * 100) + '%') : Math.floor(value)));
			this.pushData(text, item);
		}
		else if (value < 0) {
			text = this.getObjText(category, code) + this.addDecreaseColor(((i % 6) < 3) ? (Math.floor(value * 100) + '%') : Math.floor(value));
			this.pushData(text, item);
		}
	}
	var codeList = ['allNull', 'hpNull', 'mpNull', 'allGuard', 'hpGuard', 'mpGuard'];
	for (var i = 0; i < 6; ++i) {
		var code = codeList[i];
		if (!this.getObjTextShow(category, code)) continue;
		var value = item.lifeSteal[code];
		if (value) {
			text = this.addSystemColor(String(GT.Param.OIWMainText.TraitText)) + this.textColon() + this.addBasicColor(this.getObjText(category, code, 1));
			this.pushData(text, item);
		}
	}
};

Window_ObjectInfo.prototype.getSkillItemElement = function() {
	if (!Imported.YEP_ElementCore) return;
	var text = '';
	var item = this._item;
	var category = 'YEPElementText';
	if (this.getObjTextShow(category, 'multipleElements')) {
		var elements = item.multipleElements;
		if (elements.length) {
			text = this.getObjText(category, 'multipleElements') + this.textColon();
			var eleText = '';
			for (var j = 0; j < elements.length; ++j) {
				var id = elements[j];
				if (!id) continue;
				if (eleText !== '') eleText += '/';
				eleText += $dataSystem.elements[id];
			}
			text += this.addBasicColor(eleText);
			this._damageData.push(text);
		}
	}
};

Window_ObjectInfo.prototype.getEquipElement = function(item) {
	if (!Imported.YEP_ElementCore) return;
	var text = '';
	var category = 'YEPElementText';
	var codeList = ['elementReflect', 'elementMagnify', 'elementAmplify'];
	var length = $dataSystem.elements.length;
	if (this.getObjTextShow(category, 'elementAbsorb')) {
		var elements = item.elementAbsorb;
		if (elements.length) {
			for (var j = 0; j < elements.length; ++j) {
				var id = elements[j];
				if (!id) continue;
				text = this.getObjText(category, 'elementAbsorb') + this.textColon() + this.addBasicColor($dataSystem.elements[id]);
				this.pushData(text, item);
			}
		}
	}
	for (var i = 0; i < 3; ++i) {
		var code = codeList[i];
		if (this.getObjTextShow(category, code)) {
			var elements = item[code];
			for (var j = 1; j <= length; ++j) {
				var rate = elements[j];
				if (!rate) continue;
				var valueText = rate > 0 ? (this.addIncreaseColor('+' + Math.floor(rate * 100) + '%')) : (this.addDecreaseColor(Math.floor(rate * 100) + '%'));
				text = this.getObjText(category, code).format($dataSystem.elements[j]) + valueText;
				this.pushData(text, item);
			}
		}
	}
	if(item.elementNull && this.getObjTextShow(category, 'elementNull')) {
		text = this.addSystemColor(String(GT.Param.OIWMainText.TraitText)) + this.textColon() + this.addBasicColor(this.getObjText(category, 'elementNull',1));
		this.pushData(text, item);
	}
	var elements = item.elementForcedRate;
	for (var j = 1; j <= length; ++j) {
		var rate = elements[j];
		if (!rate) continue;
		if (rate > 0 && this.getObjTextShow(category, 'elementForcedRate1')) {
			var valueText = this.addBasicColor(Math.floor(100 - rate * 100) + '%');
			text = this.getObjText(category, 'elementForcedRate1').format($dataSystem.elements[j]) + this.textColon() + valueText;
			this.pushData(text, item);
		}
		else if(this.getObjTextShow(category, 'elementForcedRate2')){
			var valueText = this.addBasicColor(Math.floor(rate * -100) + '%');
			text = this.getObjText(category, 'elementForcedRate2').format($dataSystem.elements[j]) + this.textColon() + valueText;
			this.pushData(text, item);
		}
	}
};

Window_ObjectInfo.prototype.getSkillItemCritical = function() {
	if (!Imported.YEP_X_CriticalControl) return;
	var text = '';
	var item = this._item;
	var baseItem = item;
	if (item.baseItemId)
		baseItem = DataManager.getBaseItem(item);
	var category = 'YEPCriCtrlText';
	if (eval(GT.Param.YEPCriCtrlText.ShowcritRate) && item.damage.type > 0 && item.damage.critical) {
		if (item.critRate.match(/rate[ ]=[ ](\d+).(\d+)/i)) {
			var rate = 0;
			eval(item.critRate);
			text = this.addSystemColor(this.getObjText('OIWXParamText', 'CRI')) + this.textColon() + this.addBasicColor(Math.floor(rate * 100) + '%');
			this._data.push(text);
		}
	}
	if (this.getObjTextShow(category, 'critMult') && item.damage.type > 0 && item.damage.critical) {
		if (item.critMult.match(/(?:value)[ ]\*\=[ ](\d+).(\d+)[ ]\+[ ]bonus/i)) {
			var rate = parseFloat(String(RegExp.$1) + '.' + String(RegExp.$2));
			text = this.getObjText(category, 'critMult') + this.textColon() + this.addBasicColor(Math.floor(rate * 100) + '%');
			this._data.push(text);
		}
	}
	if (this.getObjTextShow(category, 'flatCrit') && item.damage.type > 0 && item.damage.critical) {
		if (baseItem.note.match(/<(?:FLAT CRITICAL):[ ](\d+)([%％])[ ](.*)>/i)) {
			var rate = parseFloat(RegExp.$1 * 0.01);
            var stat = this.getParamsText(String(RegExp.$3));
			text = this.getObjText(category, 'flatCrit') + this.textColon() + this.addBasicColor(Math.floor(rate * 100) + '%' + ' ' + stat);
			this._data.push(text);
		}
	}
};

Window_ObjectInfo.prototype.getEquipCritical = function(item) {
	if (!Imported.YEP_X_CriticalControl) return;
	var text = '';
	var category = 'YEPCriCtrlText';
	var codeList = ['critMult', 'physicalCritRate', 'magicalCritRate', 'certainCritRate'];
	for (var j = 0; j < 4; ++j) {
		var code = codeList[j];
		if (this.getObjTextShow(category, code)) {
			var rate = item[code + 'Bonus'];
			if (rate) {
				var valueText = rate > 0 ? (this.addIncreaseColor('+' + Math.floor(rate * 100) + '%')) : (this.addDecreaseColor(Math.floor(rate * 100) + '%'));
				text = this.getObjText(category, code).format(this.getObjText('OIWXParamText', 'CRI')) + valueText;
				this.pushData(text, item);
			}
		}
	}
	if (this.getObjTextShow(category, 'flatCrit')) {
		var flat = item.flatCritBonus;
		if (flat) {
			var valueText = flat > 0 ? (this.addIncreaseColor('+' + Math.floor(flat))) : (this.addDecreaseColor(Math.floor(flat)));
			text = this.getObjText(category, 'flatCrit') + valueText;
			this.pushData(text, item);
		}
	}
};

Window_ObjectInfo.prototype.getSkillItemArmorScale = function() {
	if (!Imported.YEP_X_ArmorScaling) return;
	var text = '';
	var item = this._item;
	var category = 'YEPArmorScaleText';
	var codeList = ['armorReduction', 'armorPenetration'];
	for (var j = 0; j < 2; ++j) {
		var code = codeList[j];
		if (this.getObjTextShow(category, code)) {
			var rate = item[code + 'Rate'];
			if (rate) {
				text = this.getObjText(category, code) + this.textColon() + this.addBasicColor(Math.floor(rate * 100) + '%');
				this._data.push(text);
			}
			var flat = item[code + 'Flat'];
			if (flat) {
				text = this.getObjText(category, code) + this.textColon() + this.addBasicColor(Math.floor(flat));
				this._data.push(text);
			}
		} 
	}
	if (item.positiveArmorScale === '' && item.negativeArmorScale === '' && this.getObjTextShow(category, 'armorPenetration')) {
		text = this.getObjText(category, 'armorPenetration') + this.textColon() + this.addBasicColor(100 + '%');
		this._data.push(text);
	}
};

Window_ObjectInfo.prototype.getEquipArmorScale = function(item) {
	if (!Imported.YEP_X_ArmorScaling) return;
	var text = '';
	var category = 'YEPArmorScaleText';
	var codeList = ['physArmorRed', 'physArmorPen', 'magArmorRed', 'magArmorPen','cerArmorRed', 'cerArmorPen'];
	for (var j = 0; j < 6; ++j) {
		var code = codeList[j];
		if (this.getObjTextShow(category, code)) {
			var rate = item[code + 'Rate'];
			if (rate) {
				var valueText = this.addIncreaseColor('+' + Math.floor(rate * 100) + '%');
				text = this.getObjText(category, code) + valueText;
				this.pushData(text, item);
			}
			var flat = item[code + 'Flat'];
			if (flat) {
				var valueText = this.addIncreaseColor('+' + Math.floor(flat));
				text = this.getObjText(category, code) + valueText;
				this.pushData(text, item);
			}
		}
	}
};

Window_ObjectInfo.prototype.getSkillItemBarrier = function() {
	if (!Imported.YEP_AbsorptionBarrier) return;
	var text = '';
	var item = this._item;
	var category = 'YEPABarrierText';
	var codeList = ['userBarrier', 'targetBarrier'];
	var turnText = String(GT.Param.OIWStateBuffText.TurnText);
	var barrierText = String(GT.Param.YEPABarrierText.Barrier);
	for (var j = 0; j < 2; ++j) {
		var code = codeList[j];
		var barriers = item[code];
		if (barriers && this.getObjTextShow(category, code)) {
			for (var i = 0; i < barriers.length; ++i) {
				var value = barriers[i] || 0;
				var turn = i;
				if (value !== 0) {
					var valueText = value > 0 ? this.addIncreaseColor('+' + value + ' ' + (turn ? (turn + turnText) : '')) : this.addDecreaseColor(value + ' ' + (turn ? (turn + turnText) : ''));
					text = this.getObjText(category, code).format(barrierText) + this.textColon() + valueText;
					this._data.push(text);
				}
			}
		}
	}
	if (this.getObjTextShow(category, 'BarrierPenetration')) {
		var rate = item.barrierPenetrationRate;
		if (rate) {
			text = this.getObjText(category, 'BarrierPenetration').format(barrierText) + this.textColon() + this.addBasicColor(Math.floor(rate * 100) + '%');
			this._data.push(text);
		}
		var flat = item.barrierPenetrationFlat;
		if (flat) {
			text = this.getObjText(category, 'BarrierPenetration').format(barrierText) + this.textColon() + this.addBasicColor(Math.floor(flat));
			this._data.push(text);
		}
	}
};

Window_ObjectInfo.prototype.getEquipBarrier = function(item) {
	if (!Imported.YEP_AbsorptionBarrier) return;
	var text = '';
	var category = 'YEPABarrierText';
	var codeList = ['battleStartBarrierPoints', 'barrierRegen'];
	var turnText = String(GT.Param.OIWStateBuffText.TurnText);
	var barrierText = String(GT.Param.YEPABarrierText.Barrier);
	if (this.getObjTextShow(category, 'BarrierPenetration')) {
		var rate = item.barrierPenetrationRate;
		if (rate) {
			var valueText = rate > 0 ? this.addIncreaseColor('+' + Math.floor(rate * 100) + '%') : this.addDecreaseColor(Math.floor(rate * 100) + '%');
			text = this.getObjText(category, 'BarrierPenetration').format(barrierText) + valueText;
			this.pushData(text, item);
		}
		var flat = item.barrierPenetrationFlat;
		if (flat) {
			var valueText = flat > 0 ? this.addIncreaseColor('+' + Math.floor(flat)) : this.addDecreaseColor(Math.floor(flat));
			text = this.getObjText(category, 'BarrierPenetration').format(barrierText) + valueText;
			this.pushData(text, item);
		}
	}
	for (var j = 0; j < 2; ++j) {
		var code = codeList[j];
		if (this.getObjTextShow(category, code)) {
			var BPList = item[code];
			if (BPList) {
				for (var i = 0; i < BPList.length; ++i) {
					var value = BPList[i] || 0;
					var turn = i;
					if (value !== 0) {
						var valueText = value > 0 ? this.addIncreaseColor('+' + value + ' ' + (turn ? (turn + turnText) : '')) : this.addDecreaseColor(value + ' ' + (turn ? (turn + turnText) : ''));
						text = this.getObjText(category, code).format(barrierText) + valueText;
						this.pushData(text, item);
					}
				}
			}
		}
	}
};

Window_ObjectInfo.prototype.getEquipSlotsInfo = function() {
	if (!Imported.YEP_X_ItemUpgrades) return;
	if (!eval(GT.Param.YEPItemText.ShowSlotsInfo)) return;
	var item = this._item;
    var baseItem = DataManager.getBaseItem(item);
	if (!item.slotsApplied) ItemManager.initSlotUpgradeNotes(item);
	if (!DataManager.isIndependent(item)) return;
	if (baseItem.upgradeSlots <= 0) return;
    if (Yanfly.Param.IUSSlotsText !== '') {
		var text = this.addSystemColor(Yanfly.Param.IUSSlotsText);
		var value = Yanfly.Util.toGroup(item.upgradeSlots);
		if (item.originalUpgradeSlots) {
			value += '/' + Yanfly.Util.toGroup(item.originalUpgradeSlots);
		} 
		else {
			value += '/' + Yanfly.Util.toGroup(baseItem.upgradeSlots);
		}
		text += this.addBasicColor(value);
		this._data.push(text);
	}
	if (!eval(Yanfly.Param.IUSShowSlots)) return;
    if (item.slotsApplied.length <= 0) return;
	var fmt = Yanfly.Param.IUSSlotFmt;
    for (var i = 0; i < item.slotsApplied.length; ++i) {
        text = this.addBasicColor(fmt.format(i + 1, item.slotsApplied[i]));
        this._data.push(text);
    }
};

Window_ObjectInfo.prototype.getEquipAugmentInfo = function() {
	if (!Imported.YEP_X_AttachAugments) return;
	if (!eval(GT.Param.YEPItemText.ShowAugmentInfo)) return;
	var item = this._item;
	if (!DataManager.isIndependent(item)) return;
	ItemManager.checkAugmentSlots(item);
	var length = item.augmentSlotItems.length;
	for (var i = 0; i < length; ++i) {
        this.getAugmentData(i);
    }
};

Window_ObjectInfo.prototype.getAugmentData = function(slot) {
    var text = this._item.augmentSlotItems[slot];
    if (text.match(/NONE/i)) {
        text = Yanfly.Param.AugmentNoneText;
    }
	else if (text.match(/ITEM[ ](\d+)/i)) {
        var id = parseInt(RegExp.$1);
        var item = $dataItems[id];
        if (item) {
            text = '\\i[' + item.iconIndex + ']' + item.name;
        } 
		else {
            text = Yanfly.Param.AugmentNoneText;
        }
    } 
	else if (text.match(/WEAPON[ ](\d+)/i)) {
        var id = parseInt(RegExp.$1);
        var item = $dataWeapons[id];
        if (item) {
            text = '\\i[' + item.iconIndex + ']' + item.name;
        } 
		else {
            text = Yanfly.Param.AugmentNoneText;
        }
    } 
	else if (text.match(/ARMOR[ ](\d+)/i)) {
        var id = parseInt(RegExp.$1);
        var item = $dataArmors[id];
        if (item) {
            text = '\\i[' + item.iconIndex + ']' + item.name;
        } 
		else {
            text = Yanfly.Param.AugmentNoneText;
        }
    }
	text = this.addBasicColor(text);
    this._data.push(text);
};

Window_ObjectInfo.prototype.getEquipRequirements = function () {
	if (!Imported.YEP_X_EquipRequirements) return;
	if (!this.cheakRequirements()) return;
    this.getEquipClassRequirements();
    this.getEquipLevelRequirements();
    this.getEquipParamRequirements();
    this.getEquipSkillRequirements();
    this.getEquipSwitchRequirements();
    this.getEquipCustomRequirements();
};

Window_ObjectInfo.prototype.cheakRequirements = function() {
	var item = this._item;
    var requirements = item.equipRequirements;
    if (!requirements) {
        if (item.baseItemId) {
            item.equipRequirements = DataManager.getBaseItem(item).equipRequirements;
            requirements = item.equipRequirements;
        }
    }
    return requirements;
};

Window_ObjectInfo.prototype.getEquipClassRequirements = function() {
	if (!this.getObjTextShow('YEPObjRequireText','ClassRequire')) return;
    if (this._item.equipRequirements['classes'].length <= 0) return;
    var classes = this._item.equipRequirements['classes'];
    var text = '';
	for (var i = 0; i < classes.length; ++i) {
		var classId = classes[i];
		var name = $dataClasses[classId].name;
		if (GT.Param.OIWShowIcon && Imported.YEP_ClassChangeCore) {
			var iconIndex = $dataClasses[classId].iconIndex;
			if (iconIndex !== 0)
				name = '\\I[' + iconIndex + ']' + name;
		}
		text = this.getObjText('YEPObjRequireText','ClassRequire') + this.textColon() + this.addBasicColor(name);
		this._requireData.push(text);
	}
};

Window_ObjectInfo.prototype.getEquipLevelRequirements = function() {
    if ((this._item.equipRequirements['atLeast'][8] > 0) && this.getObjTextShow('YEPObjRequireText','MinLevelRequire')) {
        var text = this.getObjText('YEPObjRequireText','MinLevelRequire');
	    text += this.textColon() + this.addBasicColor(this._item.equipRequirements['atLeast'][8]);
		this._requireData.push(text);
    }
    if ((this._item.equipRequirements['atMost'][8] > 0) && this.getObjTextShow('YEPObjRequireText','MaxLevelRequire')) {
        var text = this.getObjText('YEPObjRequireText','MaxLevelRequire');
        text += this.textColon() + this.addBasicColor(this._item.equipRequirements['atMost'][8]);
		this._requireData.push(text);
    }
};

Window_ObjectInfo.prototype.getEquipParamRequirements = function() {
    for (var i = 0; i < 8; ++i) {
        if ((this._item.equipRequirements['atLeast'][i] > 0) && this.getObjTextShow('YEPObjRequireText','MinParamRequire')) {
			var fmt = this.getObjText('YEPObjRequireText','MinParamRequire');
			var text = fmt.format(TextManager.param(i));
			text += this.textColon() + this.addBasicColor(this._item.equipRequirements['atLeast'][i]);
			this._requireData.push(text);
        }
		if ((this._item.equipRequirements['atMost'][i] > 0) && this.getObjTextShow('YEPObjRequireText','MaxParamRequire')) {
			var fmt = this.getObjText('YEPObjRequireText','MaxParamRequire');
			var text = fmt.format(TextManager.param(i));
			text += this.textColon() + this.addBasicColor(this._item.equipRequirements['atMost'][i]);
			this._requireData.push(text);
        }
    }
};

Window_ObjectInfo.prototype.getEquipSkillRequirements = function() {
	if (!this.getObjTextShow('YEPObjRequireText','SkillRequire')) return;
    if (this._item.equipRequirements['skills'].length <= 0) return;
    var skills = this._item.equipRequirements['skills'];
	var text = '';
	for (var i = 0; i < skills.length; ++i) {
		var skillId = skills[i];
		var name = $dataSkills[skillId].name;
		if (GT.Param.OIWShowIcon) {
			var iconIndex = $dataSkills[skillId].iconIndex;
			if (iconIndex !== 0)
				name = '\\I[' + iconIndex + ']' + name;
		}
		text = this.getObjText('YEPObjRequireText','SkillRequire') + this.textColon() + this.addBasicColor(name);
		this._requireData.push(text);
	}
};

Window_ObjectInfo.prototype.getEquipSwitchRequirements = function() {
	if (!this.getObjTextShow('YEPObjRequireText','SwitchRequire')) return;
    var switches = this._item.equipRequirements['switches'];
    var length = switches.length;
    for (var i = 0; i < length; ++i) {
        var sw = switches[i];
        var text = this.getObjText('YEPObjRequireText','SwitchRequire') + this.textColon() + this.addBasicColor($dataSystem.switches[sw]);
        text = text.replace(/<<(.*?)>>/i, '');
        this._requireData.push(text);
    }
};

Window_ObjectInfo.prototype.getEquipCustomRequirements = function() {
	if (!this._actor) return;
    if (this._item.customEquipReqText === '') return;
    var text = '';
    var a = this._actor;
    var user = this._actor;
    var subject = this._actor;
    var s = $gameSwitches._data;
    var v = $gameVariables._data;
    var code = this._item.customEquipReqText;
    try {
      eval(code);
    } catch (e) {
      Yanfly.Util.displayError(e, code, 'EQUIP CUSTOM TEXT ERROR');
    }
    this._requireData.push(text);
};

Window_ObjectInfo.prototype.getObjOtherCost = function(item) {
	this.getObjLimitedUses(item);
	this.getObjWarmup(item);
	this.getObjCooldown(item);
	this.getObjItemCost(item);
	this.getObjPartyLimitCost(item);
};

Window_ObjectInfo.prototype.getObjLimitedUses = function(skill) {
	if (!this._actor) return;
	if(!Imported.YEP_X_LimitedSkillUses) return;
	if (!this.getObjTextShow('YEPSkillCostText','LimitedUses')) return;
    if (!this._actor.isSkillLimitedUse(skill)) return;
    if (Yanfly.Param.LSUFormat === '') return;
	var fmt = Yanfly.Param.LSUFormat;
    var current = this._actor.skillLimitedUseCurrent(skill.id);
    current = Yanfly.Util.toGroup(current);
    var max = this._actor.skillLimitedUseMax(skill.id);
    max = Yanfly.Util.toGroup(max);
    var text = this.getObjText('YEPSkillCostText','LimitedUses') + this.textColon() + '\\c[' + Yanfly.Param.LSUTextColor + ']' + fmt.format(current, max);
    if (Yanfly.Icon.LimitedUse > 0) {
		text += '\\I[' + Yanfly.Icon.LimitedUse + ']';
    }
	this._costData.push(text);
};

Window_ObjectInfo.prototype.getObjPartyLimitCost = function(skill) {
	if (!this._actor) return;
	if(!Imported.YEP_X_PartyLimitGauge) return;
	if (!this.getObjTextShow('YEPSkillCostText','PartyLimitCost')) return;
	if (this._actor.partyLimitCost(skill) <= 0) return;
    var unit = this._actor.friendsUnit();
	var fmt = Yanfly.Param.PLGCostFmt;
    var cost = this._actor.partyLimitCost(skill);
    var text = this.getObjText('YEPSkillCostText','PartyLimitCost') + this.textColon() + '\\c[' + Yanfly.Param.PLGCostColor + ']' + fmt.format(Yanfly.Util.toGroup(cost), unit.partyLimitGaugeCurrent(), unit.partyLimitGaugeIncrements());
    if (Yanfly.Param.PLGDrawIcon && unit.partyLimitGaugeIcon() > 0) {
        var icon = unit.partyLimitGaugeIcon();
		text += '\\I[' + icon + ']';
    }
	this._costData.push(text);
};

Window_ObjectInfo.prototype.getObjWarmup = function(skill) {
	if(!Imported.YEP_X_SkillCooldowns) return;
	if (!this.getObjTextShow('YEPSkillCostText','Warmup')) return;
	if (!skill.warmup) return;
	var fmt = Yanfly.Param.WUFmt;
    var value = skill.warmup;
    if (value % 1 !== 0) value = value.toFixed(2);
    if (value <= 0.009) value = 0.01;
    var text = this.getObjText('YEPSkillCostText','Warmup') + this.textColon() + '\\c[' + Yanfly.Param.WUTextColor + ']' + fmt.format(Yanfly.Util.toGroup(value));
    if (Yanfly.Icon.Warmup > 0) {
		text += '\\I[' + Yanfly.Icon.Warmup + ']';
    }
    this._costData.push(text);
};

Window_ObjectInfo.prototype.getObjCooldown = function(skill) {
	if(!Imported.YEP_X_SkillCooldowns) return;
	if (!this.getObjTextShow('YEPSkillCostText','Cooldown')) return;
	if (!skill.cooldown[skill.id]) return;
	var fmt = Yanfly.Param.CDFmt;
    var value = skill.cooldown[skill.id];
    if (value % 1 !== 0) value = value.toFixed(2);
    if (value <= 0.009) value = 0.01;
    var text = this.getObjText('YEPSkillCostText','Cooldown') + this.textColon() + '\\c[' + Yanfly.Param.CDTextColor + ']' + fmt.format(Yanfly.Util.toGroup(value));
    if (Yanfly.Icon.Cooldown > 0) {
        text += '\\I[' + Yanfly.Icon.Cooldown + ']';
    }
	this._costData.push(text);
};

Window_ObjectInfo.prototype.getObjItemCost = function(skill) {
	if (!this._actor) return;
	if(!Imported.YEP_X_SkillCostItems) return;
	if (!this.getObjTextShow('YEPSkillCostText','ItemCost')) return;
	if (Yanfly.Param.SCICostStyle === 0) return;
    var array = this._actor.skillItemCost(skill);
    var max = array.length;
    if (max <= 0) return;
    for (var i = 0; i < max; ++i) {
        var arr = array[max - i - 1];
        var item = arr[0];
        var cost = arr[1];
        this.getObjSoloItemCost(item, cost);
    }
};

Window_ObjectInfo.prototype.getObjSoloItemCost = function(item, cost) {
    var amt1 = Yanfly.Util.toGroup(cost);
    var amt2 = Yanfly.Util.toGroup(this._actor.numItems(item));
    var fmt = Yanfly.Param.SCIAmountFmt;
    var text = this.getObjText('YEPSkillCostText','ItemCost') + this.textColon() + this.addBasicColor(fmt.format(amt1, amt2));
	text += '\\I[' + item.iconIndex + ']';
	text += this.addBasicColor(item.name);
    this._costData.push(text);
};

Window_ObjectInfo.prototype.getSkillItemInstant = function() {
	if(!Imported.YEP_InstantCast) return;
	if (!this.getObjTextShow('YEPSkillCostText','InstantCast')) return;
	var item = this._item;
    if (!item) return;
	var actor = this._actor;
    if (!actor) return;
    if (!actor.isInstantCast(item)) return;
	var icon = Yanfly.Icon.Instant;
	var type = DataManager.isItem(item) ? TextManager.item : TextManager.skill;
    var text = this.addBasicColor(this.getObjText('YEPSkillCostText','InstantCast', 1).format(type));
	if (icon) text = '\\I[' + icon + ']' + text;
	this._costData.push(text);
};

GT.YEPInfo.Window_ObjectInfo_getObjLastInfo = Window_ObjectInfo.prototype.getObjLastInfo;
Window_ObjectInfo.prototype.getObjLastInfo = function () {
	GT.YEPInfo.Window_ObjectInfo_getObjLastInfo.call(this);
	var text = '';
	if (this.isDrawDurability()) {
		text = this.addSystemColor(Yanfly.Param.IDurText);
		var fmt = Yanfly.Param.IDurFmt;
        var cur = DataManager.getDurability(this._item);
        var max = DataManager.getMaxDurability(this._item);
		if (cur > 0) {
			text += '\\c[' + this.durabilityColor(cur, max) + ']' + fmt.format(cur, max);
		} 
		else {
			text += '\\c[' + Yanfly.Param.IDurColor['unbreak'] + ']' + Yanfly.Param.IDurUnbreakable;
		}
		this._lastData.push(text);
	}
};

Window_ObjectInfo.prototype.isDrawDurability = function() {
    if (DataManager.isItem(this._item)) return false;
	if (DataManager.isSkill(this._item)) return false;
	if (!Imported.YEP_ItemCore) return false;
	if (!Imported.YEP_X_ItemDurability) return false;
    if (!Yanfly.Param.IDurShowUnbr) {
      if (DataManager.getDurability(this._item) < 0) return false;
    }
    return eval(GT.Param.YEPItemText.ShowDurabilityInfo);
};

Window_ObjectInfo.prototype.durabilityColor = function(cur, max) {
    var value = DataManager.getBaseItem(this._item).durability;
    if (cur === max) {
        return Yanfly.Param.IDurColor['max'];
    } else if (cur >= 1.90 * value) {
        return Yanfly.Param.IDurColor['rate190'];
    } else if (cur >= 1.75 * value) {
        return Yanfly.Param.IDurColor['rate175'];
    } else if (cur >= 1.50 * value) {
        return Yanfly.Param.IDurColor['rate150'];
    } else if (cur >= 1.20 * value) {
        return Yanfly.Param.IDurColor['rate120'];
    } else if (cur >= 1.10 * value) {
        return Yanfly.Param.IDurColor['rate110'];
    } else if (cur >= 1.00 * value) {
        return Yanfly.Param.IDurColor['rate100'];
    } else if (cur >= 0.80 * value) {
        return Yanfly.Param.IDurColor['rate80'];
    } else if (cur >= 0.50 * value) {
        return Yanfly.Param.IDurColor['rate50'];
    } else if (cur >= 0.25 * value) {
        return Yanfly.Param.IDurColor['rate25'];
    } else if (cur >= 0.10 * value) {
        return Yanfly.Param.IDurColor['rate10'];
    } else {
        return Yanfly.Param.IDurColor['rate1'];
    }
};

Window_ObjectInfo.prototype.itemHasPictureImage = function() {
	if(!Imported.YEP_X_ItemPictureImg) return false;
    if (!this._item) return false;
    var filename = ItemManager.getItemPictureImageFilename(this._item);
    return filename !== '';
};

Window_ObjectInfo.prototype.readyItemPictureImage = function(item) {
    if (item !== this._item) return;
    var bitmap = ItemManager.getItemPictureImage(item);
    if (bitmap.width <= 0) {
        return setTimeout(this.readyItemPictureImage.bind(this, item), 250);
    }
	else {
        this.drawItemPictureImage(bitmap);
    }
};

Window_ObjectInfo.prototype.drawItemPictureImage = function(bitmap) {
    var pw = bitmap.width;
    var ph = bitmap.height;
    var sx = 0;
    var sy = 0;
    var dw = pw;
    var dh = ph;
    if (dw > this.lineHeight() * 3) {
        var rate = this.lineHeight() * 3 / dw;
        dw = Math.floor(dw * rate);
        dh = Math.floor(dh * rate);
    }
    if (dh > this.lineHeight() * 3) {
        var rate = this.lineHeight() * 3 / dh;
        dw = Math.floor(dw * rate);
        dh = Math.floor(dh * rate);
    }
    var dx = this.textPadding();
    var dy = this.textPadding();
    this.contents.blt(bitmap, sx, sy, pw, ph, dx, dy, dw, dh);
};

GT.YEPInfo.Window_ObjectInfo_drawOtherInfo = Window_ObjectInfo.prototype.drawOtherInfo;
Window_ObjectInfo.prototype.drawOtherInfo = function () {
	GT.YEPInfo.Window_ObjectInfo_drawOtherInfo.call(this);
	this.drawLevel();
	this.drawPassiveState();
};

Window_ObjectInfo.prototype.drawLevel = function () {
	var skill = this._item;
	if (!this.levelHeight()) return;
	var x = this.textPadding();
	var y = this.titleHeight() + this.exDataHeight(this._textTop) + this.dataHeight() + this.exDataHeight(this._damageData) + this.exDataHeight(this._textBottom) + this.exDataHeight(this._costData) + this.exDataHeight(this._requireData) + this.stateHeight();
	this.drawHorzLine(y);
	y += this.textPadding();
	var level = this._actor.skillMasteryLevel(skill);
	//if (level <= 0 && !Yanfly.Param.SMLShowLevel0) return;
    width = this.contents.width - this.textPadding() * 2 - x;
    var color1 = this.textColor(Yanfly.Param.SMLGauge1);
    var color2 = this.textColor(Yanfly.Param.SMLGauge2);
    var gaugeH = Yanfly.Param.SMLGaugeH;
    var gaugeY = y + this.lineHeight() - gaugeH - 2;
    if (Yanfly.Param.SMLGaugeOutline) {
		gaugeY -= 2;
		gaugeH += 2;
    }
    this.contents.fillRect(x, gaugeY, width, gaugeH, this.gaugeBackColor());
    if (Yanfly.Param.SMLGaugeOutline) {
		gaugeY += 1;
		gaugeH -= 2;
		x += 1;
		width -= 1;
    }
    var rate = this._actor.skillMasteryRate(skill);
    var fillW = Math.floor(width * rate);
    this.contents.gradientFillRect(x, gaugeY, fillW, gaugeH, color1, color2);
	var text = this.getObjText('YEPSkillCostText', 'Level') + ':' + this.addBasicColor(level);
	this.drawTextEx(text, x, y);
	var cur = this._actor.skillMasteryUses(skill);
	var max = this._actor.skillMasteryUsageMax(skill);
	text = this.addBasicColor(cur + '/' + max);
	x = this.contents.width - this.textPadding() * 2 - this.textWidthEx(text);
	this.drawTextEx(text, x, y);
};

Window_ObjectInfo.prototype.drawPassiveState = function () {
	if (!this.stateHeight()) return;
	var x = 0;
	var y = 0;
	var y_0 = this.titleHeight() + this.exDataHeight(this._textTop) + this.dataHeight() + this.exDataHeight(this._damageData);
	var width = this.contents.width / this.maxCols();
	for (var j = 0; j < this._stateData.length; j++) {
		this.drawHorzLine(y_0);
		var data = this._stateData[j];
		var text = this._stateTitle[j];
		this.drawTextEx(text, this.textPadding(), y_0 + this.textPadding());
		var rows = data.length % this.maxCols() ? Math.ceil(data.length / this.maxCols()) : data.length / this.maxCols();
		for (var i = 0; i < data.length; i++) {
			x = this.textPadding() + Math.floor(i / rows) * width;
			y = (i % rows + 1) * this.lineHeight() + y_0 + this.textPadding();
			var line = data[i];
			this.drawTextEx(line, x, y);
		}
		y_0 += this.MoreColsCalHeight(this._stateData[j]) + this.textPadding() + this.lineHeight();
		data = this._stateAfter[j];
		for (var i = 0; i < data.length; i++) {
			x = this.textPadding();
			y = i * this.lineHeight() + y_0;
			var line = data[i];
			this.drawTextEx(line, x, y);
		}
		y_0 += this._stateAfter[j].length * this.lineHeight() + this.textPadding();
	}
};

GT.YEPInfo.Window_ObjectInfo_pushData = Window_ObjectInfo.prototype.pushData;
Window_ObjectInfo.prototype.pushData = function(text, item) {
	if (DataManager.isWeapon(item) || DataManager.isArmor(item))
	    return GT.YEPInfo.Window_ObjectInfo_pushData.call(this, text, item);
	else if (DataManager.isState(item))
		return this._stateData[this._stateData.length - 1].push(text);
};

Window_ObjectInfo.prototype.getParamsText = function(param) {
	param = param.toLowerCase();
	switch (param) {
		case 'hp': return TextManager.hp;
		case 'mp': return TextManager.mp;
		case 'tp': return TextManager.tp;
		case 'maxhp':
		case 'max hp': return TextManager.param(0);
		case 'maxmp':
		case 'max mp':
		case 'maxsp':
		case 'max sp': return TextManager.param(1);
		case 'atk': return TextManager.param(2);
		case 'def': return TextManager.param(3);
		case 'mat': return TextManager.param(4);
		case 'mdf': return TextManager.param(5);
		case 'agi': return TextManager.param(6);
		case 'luk': return TextManager.param(7);
	}
	if (param.match(/VARIABLE[ ](\d+)/i)) {
        return $dataSystem.variables[parseInt(RegExp.$1)];
    }
	return '';
};

//=============================================================================
// End of File
//=============================================================================

} else {

Imported.GT_X_YEPPluginInfo = false;	
var text = '警告，你试图在没有安装GT_ObjectInfoWindow的情况下运行GT_X_YEPPluginInfo，请安装GT_ObjectInfoWindow。';
console.log(text);
require('nw.gui').Window.get().showDevTools();

}; // Imported.GT_ObjectInfoWindow