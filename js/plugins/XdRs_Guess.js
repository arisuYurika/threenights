//===============================================================================
 //===============================================================================
 /*:
 * @plugindesc  灯谜猜成语（主程序）<请搭配题库脚本一起使用>。
 *
 * @author 芯☆淡茹水
 * 
 * @help _____________________________________________
 *   灯谜猜成语，根据上面的谜题，从下面的备选字中选择对应的成语。
 *   
 *插件命令：1，进入游戏：Guess_idiom
 *     2，游戏中更改最大题目数：Change_max_val n  (n 为最大题目数)
 *
 *注意：1，若初次使用报找不到 BGM 文件的错误，请在插件设置里把
 *     BGM文件名重新输入一次。
 *         2，该游戏只支持鼠标操作。
 *
 *---------------------------------------------------------------
 * @param maxNum
 * @desc 一局最大题目数。
 * @default 20
 *---------------------------------------------------------------
 * @param varId1
 * @desc 记录回答正确题目数的变量ID。
 * @default 10
 *---------------------------------------------------------------
 * @param varId2
 * @desc 记录回答错误题目数的变量ID。
 * @default 11
 *--------------------------------------------------------------- 
 * @param bgmName
 * @desc 背景音乐文件名。
 * @default Field1
 *---------------------------------------------------------------
 * @param bgmVol
 * @desc 背景音乐音量。
 * @default 80
 *---------------------------------------------------------------
 */
//=================================================================================
(function() {
var XdrsGuessDate = XdrsGuessDate || PluginManager.parameters('XdRs_Guess');
//=================================================================================
Bitmap.prototype.changeOutlineWidth = function(num) {
    this.outlineWidth = num;
};
var XdrsGuessCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    XdrsGuessCommand.call(this, command, args);
    if (command === 'Guess_idiom') {SceneManager.goto(Guess_Idioms);}
    if (command === 'Change_max_val') {
        var max = Math.max(parseInt(args) || 1, 1);
        $gameSystem.changeMaxVal(max);}
};
//=================================================================================
Game_System.prototype.maxSubNum = function() {
    return this._maxSubNum || XdrsGuessDate.maxNum;
};
Game_System.prototype.changeMaxVal = function(max) {
    this._maxSubNum = Math.min(max, parseInt(AllWords.length / 4));
};
//=================================================================================
function XdRs_Ui() {
    this.initialize.apply(this, arguments);
}
XdRs_Ui.prototype = Object.create(Sprite.prototype);
XdRs_Ui.prototype.constructor = XdRs_Ui;
XdRs_Ui.prototype.initialize = function(x, y, w, h, backColor) {
    Sprite.prototype.initialize.call(this);
    this.createCont(w, h);
    this._backColor = backColor;
    this.drawBack();
    this._oldX = x;
    this._oldY = y;
    this.move(x, y);
};
XdRs_Ui.prototype.oldX = function() {
    return this._oldX;
};
XdRs_Ui.prototype.oldY = function() {
    return this._oldY;
};
XdRs_Ui.prototype.createCont = function(w, h) {
    this.bitmap = new Bitmap(w, h);
    this.cont = new Sprite(new Bitmap(w, h));
    this.cont.bitmap.changeOutlineWidth(2);
    this.addChild(this.cont);
};
XdRs_Ui.prototype.changeFontName = function(name) {
    this.cont.bitmap.changeFontName(name);
};
XdRs_Ui.prototype.changeFontSize = function(size) {
    this.cont.bitmap.fontSize = size;
};
XdRs_Ui.prototype.changeFontColor = function(color) {
    this.cont.bitmap.textColor = color;
};
XdRs_Ui.prototype.changeFontBold = function(num) {
    this.cont.bitmap.changeFontBold(num);
};
XdRs_Ui.prototype.contClear = function() {
    this.cont.bitmap.clear();
};
XdRs_Ui.prototype.contClearRect = function(x,y,w,h) {
    this.cont.bitmap.clearRect(x,y,w,h);
};
XdRs_Ui.prototype.drawText = function(text,x,y,w,h,a) {
    this.cont.bitmap.drawText(text,x,y,w,h,a);
};
XdRs_Ui.prototype.shadeBlack = function(index) {
    switch (true) {
    case index === 0 :return 'rgba(80,80,80,120)';
    case index === 1 :return 'rgba(40,40,40,200)';
    case index === 2 :return 'rgb(20,20,20)';
    case index === 3 :return 'rgba(40,40,40,200)';
    case index === 4 :return 'rgba(80,80,80,120)';
    }
};
XdRs_Ui.prototype.drawBack = function() {
    var x = 0, y = 0, w = this.bitmap.width, h = this.bitmap.height;
    for (var i=0;i<5;i++){
        this.bitmap.fillRect(x, y, w, h, this.shadeBlack(i));
        x += 1; y += 1; w -= 2; h -= 2;
    }
    this.bitmap.fillRect(x, y, w, h, this._backColor);
    this.clearCorner();
    var place = [[11,11],[this.bitmap.width-11,11],[11,this.bitmap.height-11]];
    place.push([this.bitmap.width-11,this.bitmap.height-11]);
    for (var j=0; j<4;j++) {
        this.drawEdgeCircle(j, place[j][0], place[j][1]);
    } 
};
XdRs_Ui.prototype.clearCorner = function() {
    this.bitmap.clearRect(0, 0, 10, 10);
    this.bitmap.clearRect(this.bitmap.width-10, 0, 10, 10);
    this.bitmap.clearRect(0, this.bitmap.height-10, 10, 10);
    this.bitmap.clearRect(this.bitmap.width-10, this.bitmap.height-10, 10, 10);
};
XdRs_Ui.prototype.drawEdgeCircle = function(type,x,y) {
    var ar = 11, color;
    for (var i=0;i<9;i++){
        color = i < 5 ? this.shadeBlack(i) : this._backColor;
        this.bitmap.drawCircle(x, y, ar, color);
        ar -= 1;
    }
    var bx = [0,2].indexOf(type) >= 0 ? -4 : -16,
    by = [0,1].indexOf(type) >= 0 ? -4 : -16;
    this.bitmap.fillRect(x+bx, y+by, 20, 20, this._backColor);
    var place1 = [[-10,0],[7,0],[-10,-14],[7,-14]];
    this.bitmap.fillRect(x+place1[type][0], y+place1[type][1], 3, 15, this.shadeBlack(2));
    var place2 = [[0,-10],[-14,-10],[0,7],[-14,7]];
    this.bitmap.fillRect(x+place2[type][0], y+place2[type][1], 15, 3, this.shadeBlack(2));
    var place3 = [[0,-6],[-10,-6],[0,4],[-10,4]];
    this.bitmap.fillRect(x+place3[type][0], y+place3[type][1], 10, 2, this._backColor);
    var place4 = [[-6,0],[4,0],[-6,-10],[4,-10]];
    this.bitmap.fillRect(x+place4[type][0], y+place4[type][1], 2, 10, this._backColor);
    var place5 = [[0,-7],[-10,-7],[0,6],[-10,6]];
    this.bitmap.fillRect(x+place5[type][0], y+place5[type][1], 10, 1, this.shadeBlack(0));
    var place6 = [[-7,0],[6,0],[-7,-10],[6,-10]];
    this.bitmap.fillRect(x+place6[type][0], y+place6[type][1], 1, 10, this.shadeBlack(0));
};
XdRs_Ui.prototype.drawArea = function(x,y,w,h,color) {
    for (var i=0;i<2;i++){
        this.bitmap.fillRect(x, y, w, h, this.shadeBlack(i+3));
        x += 1; y += 1; w -= 2; h -= 2;
    }
    this.bitmap.fillRect(x, y, w, h, color);
    this.clearAreaCorner(x-3, y-3, w, h, color);
    
};
XdRs_Ui.prototype.clearAreaCorner = function(x, y, w, h, color) {
    this.bitmap.fillRect(x, y, 8, 8, this._backColor);
    this.bitmap.fillRect(w+x-2, y, 8, 8, this._backColor);
    this.bitmap.fillRect(x, h+y-2, 8, 8, this._backColor);
    this.bitmap.fillRect(w+x-2, h+y-2, 8, 8, this._backColor);
    var place = [[x+8, y+8],[w+x-2, y+8],[x+8, h+y-2],[w+x-2, h+y-2]];
    for (var i=0; i<4; i++) {
       this.repairArea(place[i][0],place[i][1],w,h,i,color); 
    }
};
XdRs_Ui.prototype.repairArea = function(x,y,w,h,type,color) {
    var ar = 7, bColor;
    for (var i=0;i<5;i++){
        bColor = i < 2 ? this.shadeBlack(i+2) : color;
        this.bitmap.drawCircle(x, y, ar, bColor);
        ar -= 1;
    }
    var kx = [0,2].indexOf(type) >= 0 ? 3 : 11,
    ky = [0,1].indexOf(type) >= 0 ? 3 : 11;
    this.bitmap.fillRect(x-kx, y-ky, 14, 14, color);
    var place1 = [[1,-5],[-6,-5],[1,3],[-6,3]];
    this.bitmap.fillRect(x+place1[type][0], y+place1[type][1], 5, 2, color);
    var place2 = [[-5,1],[3,1],[-5,-6],[3,-6]];
    this.bitmap.fillRect(x+place2[type][0], y+place2[type][1], 2, 5, color);
};
XdRs_Ui.prototype.drawLine = function(x,y,w,h,type) {
    var color;
    for (var i=0;i<2;i++){
        color = i < 2 ? this.shadeBlack(i) : this.shadeBlack(1);
        this.bitmap.fillRect(x, y, w, h, color);
        if (type === 0) y++;
        else x++;
    }
    
};
//=================================================================================
function XdRs_windowGuess() {
    this.initialize.apply(this, arguments);
}
XdRs_windowGuess.prototype = Object.create(XdRs_Ui.prototype);
XdRs_windowGuess.prototype.constructor = XdRs_windowGuess;
XdRs_windowGuess.prototype.initialize = function() {
    var ax = Graphics.width / 2 - 235;
    XdRs_Ui.prototype.initialize.call(this, ax, 80, 470, 480, 'rgb(0,180,180)');
    this._fonts = [];
    this._kuns = [];
    this._kunData = [null,null,null,null];
    this.drawWindow();
    this.drawTit();
};
XdRs_windowGuess.prototype.drawWindow = function() {
    this.drawArea(40, 15, 390, 60, 'rgb(255,255,255)');
    this.drawArea(40, 80, 390, 220, 'rgb(255,255,255)');
    this.drawArea(40, 302, 390, 160, 'rgb(255,255,255)');
};
XdRs_windowGuess.prototype.setKun = function(words) {
    if (this._fonts.length > 0) {
        for (var i=0; i < 24; i ++) {this.removeChild(this._fonts[i]);}
    }
    this._fonts = [];
    var f,x,y;
    for (var i=0; i < 24; i++){
        x = i % 8 * 46 +55; y = parseInt(i / 8) * 46 + 312;
        f = new XdRs_Ui(x,y,42,42,'rgb(0,150,150)');
        f.changeFontSize(24);
        f.changeFontColor('rgb(240,240,200)');
        f.drawText(words[i], 2, 2, 38, 38, 'center');
        this._fonts.push(f);
        this.addChild(f);
    }
};
XdRs_windowGuess.prototype.setKunSub = function() {
    var f,x,y;
    for (var i=0; i < 4; i++){
        x = i % 4 * 46 + 150;
        f = new XdRs_Ui(x,246,42,42,'rgb(0,150,150)');
        this._kuns.push(f);
        this.addChild(f);
    }
    for (i=0; i < 24; i++){
        x = i % 8 * 46 +55; y = parseInt(i / 8) * 46 + 312;
        f = new XdRs_Ui(x,y,42,42,'rgb(0,150,150)');
        this._kuns.push(f);
        this.addChild(f);
    }
};
XdRs_windowGuess.prototype.moveWord = function(index,x,y) {
    this._fonts[index].move(x,y);
    var ni = parseInt((x - 150) / 46);
    this._kunData[ni] = this._fonts[index];
};
XdRs_windowGuess.prototype.moveKun = function(index) {
    if (!this._kunData) return;
    var w = this._kunData[index];
    w.move(w.oldX(), w.oldY());
};
XdRs_windowGuess.prototype.drawTit = function() {
    this.changeFontSize(26);
    this.changeFontColor('rgb(255,120,0)');
    this.drawText('※ 灯谜猜成语 ※', 0, 28, 470, 32, 'center');
    this.changeFontColor('rgb(0,120,0)');
    this.drawText('----------------', 0, 8, 470, 32, 'center');
    this.drawText('----------------', 0, 48, 470, 32, 'center');
};
XdRs_windowGuess.prototype.drawCdm = function(txt) {
    this.contClearRect(140,82,200,160);
    this.cont.bitmap.gradientFillRect(140, 82, 200, 160, 'rgb(0,180,180)','rgb(255,255,255)', 20);
    this.changeFontSize(22);
    this.changeFontColor('rgb(0,30,30)');
    this.drawText(txt, 0, 125, 470, 32, 'center');
};
XdRs_windowGuess.prototype.drawCntLeft = function(now, max) {
    this.contClearRect(46,100,88,170);
    var txt = '第 ' + now + ' 题';
    this.changeFontSize(20);
    this.changeFontColor('rgb(120,0,120)');
    this.drawText(txt, 46, 100, 88, 20, 'center');
    txt = '共 ' + max + ' 题';
    this.drawText(txt, 46, 130, 88, 20, 'center');
    this.changeFontColor('rgb(120,120,120)');
    this.drawText('-------', 46, 112, 88, 20, 'center');
    this.drawText('-------', 46, 142, 88, 20, 'center');
};
XdRs_windowGuess.prototype.drawCntRight = function(right, wrong) {
    this.contClearRect(344,100,88,170);
    this.changeFontSize(20);
    this.changeFontColor('rgb(0,120,0)');
    this.drawText('√:', 344, 100, 42, 20);
    this.changeFontColor('rgb(120,0,0)');
    this.drawText('×:', 344, 130, 42, 20);
    this.changeFontColor('rgb(120,120,120)');
    this.drawText('----', 366, 110, 88, 20);
    this.drawText('----', 366, 140, 88, 20);
    this.changeFontColor('rgb(120,0,120)');
    this.drawText(''+right, 376, 100, 88, 20);
    this.drawText(''+wrong, 376, 130, 88, 20);
};
XdRs_windowGuess.prototype.wordsArea = function() {
    return new Rectangle(58+this.x,312+this.y,368,134);
};
XdRs_windowGuess.prototype.wordArea = function(index) {
    var rx = index % 8 * 46 + this.x + 58;
    var ry = parseInt(index / 8) * 46 + this.y + 312;
    return new Rectangle(rx,ry,42,42);
};
XdRs_windowGuess.prototype.kunsArea = function() {
    return new Rectangle(150+this.x,246+this.y,184,42);
};
XdRs_windowGuess.prototype.kunArea = function(index) {
    var rx = index * 46 + this.x + 150;
    return new Rectangle(rx,246+this.y,42,42);
};
//=================================================================================
function XdRs_windowTip() {
    this.initialize.apply(this, arguments);
}
XdRs_windowTip.prototype = Object.create(XdRs_Ui.prototype);
XdRs_windowTip.prototype.constructor = XdRs_windowTip;
XdRs_windowTip.prototype.initialize = function() {
    var ax = Graphics.width / 2 - 160;
    XdRs_Ui.prototype.initialize.call(this, ax, 180, 320, 170, 'rgb(0,180,180)');
    this._dataIndex = this._index = 0;
    this.drawTip();
};
XdRs_windowTip.prototype.index = function() {
    return this._index;
};
XdRs_windowTip.prototype.drawTip = function() {
    this.drawArea(30, 20, 260, 40, 'rgb(0,255,255)');
    this.drawArea(30, 70, 260, 80, 'rgb(255,255,255)');
    this.changeFontSize(26);
    this.changeFontColor('rgb(0,0,0)');
    this.drawText('是否退出？', 10, 26, 320, 32, 'center');
    this._tip1 = new XdRs_Ui(50,90,96,42,'rgb(0,100,100)');
    this._tip2 = new XdRs_Ui(166,90,96,42,'rgb(0,100,100)');
    this.addChild(this._tip1);this.addChild(this._tip2);
    this.setText();
};
XdRs_windowTip.prototype.setText = function() {
    this._tip1.contClear();this._tip2.contClear();
    var color = 'rgb(255,120,0)';
    this._tip1.changeFontSize(26);this._tip2.changeFontSize(26);
    this._tip1.changeFontColor(color);this._tip2.changeFontColor(color);
    this._tip1.drawText('确定', 0, 4, 96, 32, 'center');
    this._tip2.drawText('取消', 0, 4, 96, 32, 'center');
};
XdRs_windowTip.prototype.sureArea = function() {
    return new Rectangle(this.x+50,this.y+90,96,42);
};
XdRs_windowTip.prototype.celArea = function() {
    return new Rectangle(this.x+166,this.y+90,96,42);
};
//=================================================================================
function XdRs_windowMessage() {
    this.initialize.apply(this, arguments);
}
XdRs_windowMessage.prototype = Object.create(XdRs_Ui.prototype);
XdRs_windowMessage.prototype.constructor = XdRs_windowMessage;
XdRs_windowMessage.prototype.initialize = function(is_rigeht, answer, rigeht, wrong) {
    var ax = Graphics.width / 2 - 160;
    XdRs_Ui.prototype.initialize.call(this, ax, 370, 320, 180, 'rgb(0,180,180)');
    this.setMessage(is_rigeht, answer, rigeht, wrong);
};
XdRs_windowMessage.prototype.setMessage = function(is_rigeht, answer, rigeht, wrong) {
    var color = is_rigeht ? 'rgb(0,255,255)' : 'rgb(60,60,60)';
    this.drawArea(30, 15, 260, 40, color);
    this.drawArea(30, 62, 260, 100, 'rgb(255,255,255)');
    color = is_rigeht ? 'rgb(0,60,0)' : 'rgb(160,0,0)';
    var text = is_rigeht ? '回答正确！' : '回答错误~';
    this.changeFontSize(26);
    this.changeFontColor(color);
    this.drawText(text, 5, 20, 320, 32, 'center');
    this.changeFontSize(20);
    this.changeFontColor('rgb(120,120,120)');
    this.drawText('---------', 0, 88, 314, 32, 'center');
    this.changeFontColor('rgb(0,60,0)');
    this.drawText('答案:', 42, 76, 96, 32);
    this.drawText('√:', 62, 116, 96, 32);
    this.drawText(''+rigeht, 98, 116, 96, 32);
    if (is_rigeht) this.drawText('+1', 120, 116, 96, 32);
    this.changeFontColor('rgb(250,0,0)');
    this.drawText('×:', 172, 116, 96, 32);
    this.drawText(''+wrong, 206, 116, 96, 32);
    if (!is_rigeht) this.drawText('+1', 228, 116, 96, 32);
    this.changeFontSize(24);
    this.changeFontColor('rgb(240,80,0)');
    this.drawText(answer, 108, 74, 166, 32);
};
//=================================================================================
function XdRs_windowEnd() {
    this.initialize.apply(this, arguments);
}
XdRs_windowEnd.prototype = Object.create(XdRs_Ui.prototype);
XdRs_windowEnd.prototype.constructor = XdRs_windowEnd;
XdRs_windowEnd.prototype.initialize = function(max, right, wrong) {
    var ax = Graphics.width / 2 - 160;
    XdRs_Ui.prototype.initialize.call(this, ax, 180, 320, 180, 'rgb(255,255,255)');
    this.setTit(max, right, wrong);
    this._data = [max, right, wrong];
    this._titY = 110;
};
XdRs_windowEnd.prototype.setTit = function() {
    this._titWindow = new XdRs_Ui(0, 120, 320, 60, 'rgb(0,180,180)');
    this._titWindow.changeFontSize(28);
    this._titWindow.changeFontColor('rgb(240,240,240)');
    this._titWindow.drawText('答题结束', 0, 14, 320, 32, 'center');
    this.addChild(this._titWindow);
};
XdRs_windowEnd.prototype.setEnd = function() {
    this.changeFontSize(20);
    this.changeFontColor('rgb(0,30,30)');
    this.drawText('本次共回答          题', 0, 75, 262, 32, 'center');
    this.drawText('回答正确          题', 0, 105, 280, 32, 'center');
    this.drawText('回答错误          题', 0, 135, 280, 32, 'center');
    this.changeFontColor('rgb(255,100,0)');
    this.drawText(''+this._data[0], 142, 75, 54, 32, 'center');
    this.drawText(''+this._data[1], 142, 105, 54, 32, 'center');
    this.drawText(''+this._data[2], 142, 135, 54, 32, 'center');
};
XdRs_windowEnd.prototype.beReady = function() {
    return (this._titY === 0);
};
XdRs_windowEnd.prototype.update = function() {
    XdRs_Ui.prototype.update.call(this);
    if (this._titY > 0) {
        this._titY -= 5;
        this._titWindow.move(0,this._titY+10);
        if (this._titY === 5) this.setEnd();
    }
};
//=================================================================================
function Guess_Idioms() {
    this.initialize.apply(this, arguments);
}

Guess_Idioms.prototype = Object.create(Scene_Base.prototype);
Guess_Idioms.prototype.constructor = Guess_Idioms;

Guess_Idioms.prototype.initialize = function() {
    Scene_Base.prototype.initialize.call(this);
};
Guess_Idioms.prototype.start = function() {
    Scene_Base.prototype.start.call(this);
    SceneManager.clearStack();
    this.playBgm();
};
Guess_Idioms.prototype.create = function() {
    Scene_Base.prototype.create.call(this);
    this.createBackground();
    this.createDatas();
    this.createWindows();
};
Guess_Idioms.prototype.playBgm = function() {
    $gameSystem.saveBgm();
    var bgm = {};
    bgm.name = XdrsGuessDate.bgmName;
    bgm.volume = XdrsGuessDate.bgmVol;
    AudioManager.playBgm(bgm);
};
Guess_Idioms.prototype.createBackground = function() {
    this._backgroundSprite = new Sprite();
    this._backgroundSprite.bitmap = SceneManager.backgroundBitmap();
    this.addChild(this._backgroundSprite);
};
Guess_Idioms.prototype.createDatas = function() {
    this._maxSubNum = $gameSystem.maxSubNum();
    this._right = this._wrong = this._course = 0;
    this._judge = false;
    this._maxNum = parseInt(AllWords.length / 4)+1;
    this._subData = []; this._atData = [];var num;
    this.makeAcData();
    while (this._subData.length < this._maxSubNum) {
       num =  this.randNum(1, this._maxNum);
       if (this._subData.indexOf(num) < 0) this._subData.push(num);
    }
};
Guess_Idioms.prototype.createWindows = function() {
    this._backWindow = new XdRs_windowGuess();
    this.addChild(this._backWindow);
    this._overWindow = this._messWindow = this.tipWindow = null;
};
Guess_Idioms.prototype.refreshBackMessage = function() {
    var now = $gameSystem.maxSubNum()-this._maxSubNum+1;
    this._backWindow.drawCntLeft(now, $gameSystem.maxSubNum());
    this._backWindow.drawCntRight(this._right, this._wrong);
};
Guess_Idioms.prototype.refreshBackSub = function(sub) {
    this._backWindow.drawCdm(sub);
};
Guess_Idioms.prototype.randNum = function(min, max) { 
    var r1 = max - min, r2 = Math.random();   
    return (Math.round(r2 * r1) + min);   
};
Guess_Idioms.prototype.update = function() {
    Scene_Base.prototype.update.call(this);
    if (this._atData === undefined){this.gameOver(); return;}
    if (this._overWindow) {this.updateOver(); return;}
    if (this._messWindow) {this.updateMess(); return;}
    if (this._tipWindow) {this.updateTip(); return;}
    this.updateMain();
};
Guess_Idioms.prototype.updateMain = function() {
    switch(this._course) {
        case  0 :this.createSub();   return;
        case  1 :this.chooseWord();  return;
    }
};
Guess_Idioms.prototype.updateOver = function() {
    if (TouchInput.isTriggered() || TouchInput.isCancelled()) {
        SoundManager.playOk();
        this.gameOver();
    }
};
Guess_Idioms.prototype.gameOver = function() {
    $gameSystem.replayBgm();
    this.dataVar();
    SceneManager.goto(Scene_Map); 
};
Guess_Idioms.prototype.dataVar = function() {
    var id1 = parseInt(XdrsGuessDate.varId1),
    id2 = parseInt(XdrsGuessDate.varId2);
    $gameVariables.setValue(id1, this._right);
    $gameVariables.setValue(id2, this._wrong);
};
Guess_Idioms.prototype.makeAcData = function() {
    this._atData[0] = 'AuthorId=XdRs';
    this._atData[1] = 'AuthorName=KonglinChin';
    this._atData[2] = 'Data=17-09-17';
};
Guess_Idioms.prototype.updateMess = function() {
    if (TouchInput.isTriggered() || TouchInput.isCancelled()) {
        SoundManager.playOk();
        this.closeMessWindow();  
    }
};
Guess_Idioms.prototype.updateTip = function() {
    if (TouchInput.isCancelled()) {this.closeTipWindow(); return;}
    if (TouchInput.isTriggered()){
        if (this.touchInArea(this._tipWindow.sureArea())) {
            SoundManager.playOk();
            this.showOver();
        }
        if (this.touchInArea(this._tipWindow.celArea())) {this.closeTipWindow();}
    }
};
Guess_Idioms.prototype.randomSub = function() {
    this._subId = this.randNum(1, this._maxNum);
};
Guess_Idioms.prototype.createSub = function() {
    this._subId = this._subData.pop(); 
    while (Riddles[this._subId] === undefined) {this.randomSub();}
    this._answer = Riddles[this._subId]['answer'];
    this._answerData = [null,null,null,null];
    this._indexData = [null,null,null,null];
    this.refreshBackMessage();
    this._backWindow.drawCdm(Riddles[this._subId]['cdm']);
    this._backWindow.setKunSub();
    this.setWords();
    while (!this.setWordsOk()) this.setWords();
    this._backWindow.setKun(this._words);
    this._course = 1;
};
Guess_Idioms.prototype.setWordsOk = function() {
    if (this._atData === undefined) return false;
    if (this._words.length < 24) return false;
    for (var i=0;i<24;i++){
        if (this._words[i] === undefined) return false;
        if (this._words[i] === '') return false;
        if (this._words[i] === ' ') return false;
    }
    return true;
};
Guess_Idioms.prototype.setWords = function() {
    this._words = [];
    var index = 0;
    while (this._words.length < 4) {
        this._words.push(this._answer[index]);
        index ++;
    }
    while (this._words.length < 24) {
        index = this.randNum(0,AllWords.length);
        this._words.push(AllWords[index]);
    }
    this._words.sort(this.randsort());
    return this._words;
};
Guess_Idioms.prototype.randsort = function(a, b) {
    var num = this.randNum(1, this._words.length);
    return Math.random()>.5 ? -num : num; 
};
Guess_Idioms.prototype.chooseWord = function() {
    this.showAt();
    if (TouchInput.isTriggered()) {
        if (this.touchInArea(this._backWindow.wordsArea())) {
            for (var i=0;i<24;i++){
                if (this._indexData.indexOf(i) >= 0) continue;
                if (this.touchInArea(this._backWindow.wordArea(i))) {
                    SoundManager.playOk();
                    this.moveWord(i);
                }
            }
            
        }
        if (this.touchInArea(this._backWindow.kunsArea())) {
            for (var i=0;i<4;i++){
                if (this._indexData[i] === null) continue;
                if (this.touchInArea(this._backWindow.kunArea(i))) {
                    SoundManager.playCancel();
                    this.moveKun(i);
                }
            } 
        }
        return;
    }
    if (TouchInput.isCancelled()) {
        SoundManager.playCancel();
        this.showTip();
    }
};
Guess_Idioms.prototype.showAt = function() {
    if (Input.isPressed('ok') && Input.isPressed('pageup')) {
        alert(this._atData);
    }
};
Guess_Idioms.prototype.touchInArea = function(rect) {
    if (TouchInput.x <= rect.x || TouchInput.y <= rect.y) return false;
    if (TouchInput.x >= rect.x + rect.width) return false;
    if (TouchInput.y >= rect.y + rect.height) return false;
    return true;
};
Guess_Idioms.prototype.moveWord = function(index) {
    var ki;
    for (var i=0;i<4;i++){
        if (!this._answerData[i]) {ki = i; break;}
    }
    this._backWindow.moveWord(index,ki * 46 + 150,246);
    this.addAnswer(index);
    if (this.answerOk()) this.answerJudge();
};
Guess_Idioms.prototype.moveKun = function(index) {
    this._backWindow.moveKun(index);
    this.deleteAnswer(index); 
};
Guess_Idioms.prototype.addAnswer = function(index) {
    for (var i=0;i<4;i++){
        if (!this._answerData[i]) {
            this._answerData[i] = this._words[index];
            this._indexData[i] = index;
            break;
        }
    }
};
Guess_Idioms.prototype.deleteAnswer = function(index) {
     this._answerData[index] = null;
     this._indexData[index] = null;
};
Guess_Idioms.prototype.answerOk = function() {
     for (var i=0;i<4;i++){
        if (!this._answerData[i]) return false;
     }
     return true;
};
Guess_Idioms.prototype.answerJudge = function() {
    var txt = '';
    for (var i=0;i<4;i++){txt += this._answerData[i];}
    this._judge = (txt === this._answer);
    this.showMess();
};

Guess_Idioms.prototype.showMess = function() {
    var r = this._judge, a = this._answer;
    this._messWindow = new XdRs_windowMessage(r, a, this._right, this._wrong);
    this.addChild(this._messWindow);
    if (this._judge) this._right++;
    else this._wrong++;
};
Guess_Idioms.prototype.showOver = function() {
    var m = $gameSystem.maxSubNum() - this._maxSubNum;
    this._overWindow = new XdRs_windowEnd(m, this._right, this._wrong);
    this.addChild(this._overWindow);
};
Guess_Idioms.prototype.showTip = function() {
    this._tipWindow = new XdRs_windowTip();
    this.addChild(this._tipWindow);
};
Guess_Idioms.prototype.closeMessWindow = function() {
    this.removeChild(this._messWindow);
    this._messWindow = null;
    this._maxSubNum--;
    this._course = 0;
    if (this._maxSubNum === 0) this.showOver();
};
Guess_Idioms.prototype.closeTipWindow = function() {
    SoundManager.playCancel();
    this.removeChild(this._tipWindow);
    this._tipWindow = null;
};
})();
//=================================================================================
