//===============================================================================
 //===============================================================================
 /*:
 * @plugindesc  灯谜猜成语（题库）<请搭配主程序脚本一起使用>。
 *
 * @author 芯☆淡茹水
 * 
 * @help ____________________________________________________________________
 *   可依照原有的格式添加题目。
 *
 *注意：1，序号一定要递进。
 *          2，不要漏掉标点符号。
 *          3，添加的答案必须为四字成语，不然会报错。
 *          4，保存为 UTF-8 格式。
 *
*/
//=================================================================================
var Riddles = Riddles || {};
Riddles[1] = {'cdm':'一，二，五',   'answer':'丢三落四'};
Riddles[2] = {'cdm':'最赚钱的生意', 'answer':'一本万利'};
Riddles[3] = {'cdm':'最快的阅读',   'answer':'一目十行'};
Riddles[4] = {'cdm':'皇',           'answer':'白玉无瑕'};
Riddles[5] = {'cdm':'闹',           'answer':'门庭若市'};
Riddles[6] = {'cdm':'没有字的信',   'answer':'一纸空文'};
Riddles[7] = {'cdm':'吝',           'answer':'出口成章'};
Riddles[8] = {'cdm':'无米粥',       'answer':'左右开弓'};
Riddles[9] = {'cdm':'最好的记忆',   'answer':'过目不忘'};
Riddles[10] = {'cdm':'电灯泡',      'answer':'胆大心细'};
Riddles[11] = {'cdm':'牡丹',        'answer':'国色天香'};
Riddles[12] = {'cdm':'无底洞',      'answer':'深不可测'};
Riddles[13] = {'cdm':'柜',          'answer':'水到渠成'};
Riddles[14] = {'cdm':'紧急任务',    'answer':'事不宜迟'};
Riddles[15] = {'cdm':'肥皂泡',      'answer':'不攻自破'};
Riddles[16] = {'cdm':'彪',          'answer':'如虎添翼'};
Riddles[17] = {'cdm':'又到星期一',  'answer':'周而复始'};
Riddles[18] = {'cdm':'空对空导弹',  'answer':'见机行事'};
Riddles[19] = {'cdm':'百米赛跑',    'answer':'争先恐后'};
Riddles[20] = {'cdm':'渔',          'answer':'如鱼得水'};
Riddles[21] = {'cdm':'一个巴掌拍不响','answer':'孤掌难鸣'};
Riddles[22] = {'cdm':'赤橙绿蓝紫',  'answer':'青黄不接'};
Riddles[23] = {'cdm':'爱好跳伞',    'answer':'喜从天降'};
Riddles[24] = {'cdm':'自觉吃药',    'answer':'心服口服'};
Riddles[25] = {'cdm':'没病去抓药',  'answer':'自讨苦吃'};
Riddles[26] = {'cdm':'最短的季节',  'answer':'一日三秋'};
Riddles[27] = {'cdm':'杈',          'answer':'节外生枝'};
Riddles[28] = {'cdm':'躺下才舒服',  'answer':'坐立不安'};
Riddles[29] = {'cdm':'小时无能',    'answer':'大有作为'};
Riddles[30] = {'cdm':'带钱进棺材',  'answer':'爱财如命'};
Riddles[31] = {'cdm':'黯',          'answer':'有声有色'};
Riddles[32] = {'cdm':'浮',          'answer':'水乳交融'};
Riddles[33] = {'cdm':'回',          'answer':'表里如一'};
Riddles[34] = {'cdm':'盲人摸象',    'answer':'不识大体'};
Riddles[35] = {'cdm':'第十一本书',  'answer':'不可思议'};
Riddles[36] = {'cdm':'共用毛巾',    'answer':'面面俱到'};
Riddles[37] = {'cdm':'孤零零',      'answer':'一无所有'};
Riddles[38] = {'cdm':'细菌开大会',  'answer':'无微不至'};
Riddles[39] = {'cdm':'最高的瀑布',  'answer':'一落千丈'};
Riddles[40] = {'cdm':'23456789',    'answer':'缺衣少食'};
Riddles[41] = {'cdm':'擎天柱',      'answer':'顶天立地'};
Riddles[42] = {'cdm':'最长的腿',    'answer':'一步登天'};
Riddles[43] = {'cdm':'影集',        'answer':'包罗万象'};
Riddles[44] = {'cdm':'变奏为春',    'answer':'偷天换日'};
Riddles[45] = {'cdm':'不怕中间',    'answer':'畏首畏尾'};
Riddles[46] = {'cdm':'十五的月亮',  'answer':'正大光明'};
Riddles[47] = {'cdm':'乖',          'answer':'乘人不备'};
Riddles[48] = {'cdm':'遇事不求人',  'answer':'自力更生'};
Riddles[49] = {'cdm':'最多的颜色',  'answer':'万紫千红'};
Riddles[50] = {'cdm':'月人生',      'answer':'引人入胜'};
Riddles[51] = {'cdm':'伞兵',        'answer':'从天而降'};
Riddles[52] = {'cdm':'斌',          'answer':'文武双全'};
Riddles[53] = {'cdm':'八分之七',    'answer':'七上八下'};
Riddles[54] = {'cdm':'哑语',        'answer':'不言而喻'};
Riddles[55] = {'cdm':'一块变九块',  'answer':'四分五裂'};
Riddles[56] = {'cdm':'十二个放心',  'answer':'四平八稳'};
Riddles[57] = {'cdm':'神曲',        'answer':'不同凡响'};
Riddles[58] = {'cdm':'单方告别',    'answer':'一面之词'};
Riddles[59] = {'cdm':'最重的头发',  'answer':'千钧一发'};
Riddles[60] = {'cdm':'超级好牙刷',  'answer':'一毛不拔'};
Riddles[61] = {'cdm':'宫商角羽',    'answer':'五音不全'};
Riddles[62] = {'cdm':'电梯',        'answer':'能上能下'};
Riddles[63] = {'cdm':'二四六八',    'answer':'无独有偶'};
Riddles[64] = {'cdm':'最守信的话',  'answer':'一诺千金'};
Riddles[65] = {'cdm':'举重比赛',    'answer':'斤斤计较'};
Riddles[66] = {'cdm':'五句话',      'answer':'三言两语'};
Riddles[67] = {'cdm':'眼药水说明书','answer':'引人注目'};
Riddles[68] = {'cdm':'花香飘万年',  'answer':'流芳百世'};
Riddles[69] = {'cdm':'汕',          'answer':'半壁江山'};
Riddles[70] = {'cdm':'果断',        'answer':'瓜熟蒂落'};
Riddles[71] = {'cdm':'病入脏腑',    'answer':'心腹之患'};
Riddles[72] = {'cdm':'蟠桃宴',      'answer':'聚精会神'};
Riddles[73] = {'cdm':'打边鼓',      'answer':'旁敲侧击'};
Riddles[74] = {'cdm':'愚公',        'answer':'开山祖师'};
Riddles[75] = {'cdm':'龙',          'answer':'充耳不闻'};
Riddles[76] = {'cdm':'味美天下闻',  'answer':'鲜为人知'};
Riddles[77] = {'cdm':'卧倒',        'answer':'五体投地'};
Riddles[78] = {'cdm':'气象站休息',  'answer':'不测风云'};
Riddles[79] = {'cdm':'猜谜忌直',    'answer':'歪打正着'};
Riddles[80] = {'cdm':'拔牙',        'answer':'骨肉分离'};
Riddles[81] = {'cdm':'普查户口',    'answer':'无所不至'};
Riddles[82] = {'cdm':'选刀',        'answer':'唯利是图'};
Riddles[83] = {'cdm':'高喊生病了',  'answer':'大声疾呼'};
Riddles[84] = {'cdm':'军事论文',    'answer':'纸上谈兵'};
Riddles[85] = {'cdm':'每年消耗一度电','answer':'一年一度'};
Riddles[86] = {'cdm':'哀乐',        'answer':'可歌可泣'};
Riddles[87] = {'cdm':'矮子穿长袍',  'answer':'拖拖拉拉'};
Riddles[88] = {'cdm':'八戒收徒',    'answer':'能者为师'};
Riddles[89] = {'cdm':'蛀书虫',      'answer':'咬文嚼字'};
Riddles[90] = {'cdm':'言多必失',    'answer':'祸从口出'};
Riddles[91] = {'cdm':'足不立松土',  'answer':'脚踏实地'};
Riddles[92] = {'cdm':'二分之七',    'answer':'不三不四'};
Riddles[92] = {'cdm':'倒车镜',      'answer':'回光返照'};
Riddles[93] = {'cdm':'画地为牢',    'answer':'固步自封'};
Riddles[94] = {'cdm':'钻空子',      'answer':'乘虚而入'};
Riddles[95] = {'cdm':'跷跷板',      'answer':'此起彼伏'};
Riddles[96] = {'cdm':'夺取全部冠军','answer':'片甲不留'};
Riddles[97] = {'cdm':'烫',          'answer':'赴汤蹈火'};
Riddles[98] = {'cdm':'天火',        'answer':'自然而然'};
Riddles[99] = {'cdm':'田',          'answer':'挖空心思'};
Riddles[100] = {'cdm':'仝',         'answer':'一应俱全'};
//=================================================================================
//=================================================================================
var AllWords = AllWords || [];
for (var i in Riddles) {AllWords += Riddles[i]['answer'].split(".");}
//=================================================================================