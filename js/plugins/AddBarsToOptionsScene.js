//=====================================
// AddBarsToOptionsScene.js
//=====================================
// Copyright (c) 2017 Tsumio
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// Version
// 1.1.0 2017/5/21 画像でバーとボタンを指定できる機能を追加
// 1.0.0 2017/5/21 公開
// ----------------------------------------------------------------------------
// [Blog]   : http://ntgame.wpblog.jp/
// [Twitter]: https://twitter.com/TsumioNtGame
//=============================================================================
/*:
 * @plugindesc (v1.10)[v1.2] 控件 - 选项界面的可拉动滑竿
 * @author ツミオ （Drill_up翻译+优化）
 * 
 * 
 * @param 资源-滑竿
 * @desc 滑竿的图片资源。不设置则使用默认绘制滑竿。
 * @default 选项界面滑竿-滑竿
 * @require 1
 * @dir img/Menu__ui/
 * @type file
 * 
 * @param 平移-滑竿 X
 * @desc 以当前选项位置为基准，x轴方向平移，单位像素。
 * @default 150
 * 
 * @param 滑竿长度
 * @type number
 * @min 10
 * @desc 滑竿的长度。
 * @default 150
 * 
 * @param 滑竿颜色
 * @desc 默认绘制滑竿的颜色，如果设置了资源，这该选项没有效果。
 * @default #000
 * 
 * 
 * @param 资源-滑竿钮
 * @desc 滑竿钮的图片资源。不设置则使用默认绘制滑竿钮。
 * @default 选项界面滑竿-滑竿钮
 * @require 1
 * @dir img/Menu__ui/
 * @type file
 * 
 * @param 平移-滑竿钮 X
 * @desc x轴方向平移，单位像素。（可为负数）这里用于修正滑竿钮的位置。
 * @default 0
 * 
 * @param 平移-滑竿钮 Y
 * @desc y轴方向平移，单位像素。（可为负数）这里用于修正滑竿钮的位置。
 * @default 0
 * 
 * @param 滑竿钮移动跨度
 * @type number
 * @min 1
 * @desc 滑竿钮的移动量，设置10，则点击或者拉动滑竿时，将移动10的量。
 * @default 10
 *
 * @param 滑竿钮颜色
 * @desc 默认绘制滑竿钮的颜色，如果设置了资源，这该选项没有效果。
 * @default #0099CC
 * 
 * @help 
 * =============================================================================
 * +++ AddBarsToOptionsScene (v1.10) +++
 * By ツミオ
// [Blog]   : http://ntgame.wpblog.jp/
// [Twitter]: https://twitter.com/TsumioNtGame
 * =============================================================================
 * 选项界面的声音等百分比选项会变成可以拉动的滑竿。
 * 
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.插件的作用域：菜单界面
 *   作用于选项界面的窗口。
 * 
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 资源路径：img/Menu__ui （Menu后面有两个下划线）
 * 先确保项目img文件夹下是否有Menu__ui文件夹！
 * 要查看所有关联资源文件的插件，可以去看看"插件清单.xlsx"。
 * 你可以配置资源文件，配置为空也可以，系统将使用默认滑竿：
 *
 * 资源-滑竿
 * 资源-滑竿钮
 *
 * -----------------------------------------------------------------------------
 * ----关于颜色：
 * 以下颜色可参考：
 *  #FF4444 赤    #40C0F0 蓝   
 *  #FF784C 橙    #8080FF 紫   
 *  #FFFF40 黄    #FF69B4 粉   
 *  #80FF80 绿    #8B4C39 棕   
 *  #98F5FF 青    #BEBEBE 亮灰 
 *  #797979 暗灰 
 *
 * 如果你想配置更完美的颜色，推荐去这个网址找到你想要的颜色代码：
 * http://tool.oschina.net/commons?type=3
 *
 * -----------------------------------------------------------------------------
 * ----关于Drill_up优化：
 * [v1.1]
 * 使得该插件支持关联资源的打包、加密。
 * 部署时勾选去除无关文件，本插件中相关的文件不会被去除。
 * [v1.2]
 * 修改了插件的分类。
 *
 * -----------------------------------------------------------------------------
 * ----使用条款（ツミオ）
 * 作者に無断で改変、再配布が可能で、利用形態（商用、18禁利用等）
 * についても制限はありません。
 * 自由に使用してください。
 * 【謝辞】
 * 栗下義孝さんからアイデアをいただきました。
 * [Twitter（18禁）]:https://twitter.com/kurige_y
 */

//=============================================================================
// ** 资源文件夹
//=============================================================================
ImageManager.load_MenuUi = function(filename) {
    return this.loadBitmap('img/Menu__ui/', filename, 0, true);
};

(function () {

    var N = 'AddBarsToOptionsScene';
  	var param = PluginManager.parameters(N);
    var $bar_position_ABOS = Number(param['平移-滑竿 X'] || 150);
    var $bar_length_ABOS = Number(param['滑竿长度'] || 150);
    var $bar_color_ABOS = String(param['滑竿颜色'] ||'#000');
    var $button_color_ABOS = String(param['滑竿钮颜色'] ||'#0099CC');
    var $button_offset_ABOS = Number(param['滑竿钮移动跨度'] ||10);
    var $img_bar_ABOS = String(param['资源-滑竿'])||'';
    var $img_button_ABOS = String(param['资源-滑竿钮'])||'';
    var $button_x_offset_ABOS = Number(param['平移-滑竿钮 X'])||0;
    var $button_y_offset_ABOS = Number(param['平移-滑竿钮 Y'])||0;

//-----------------------------------------------------------------------------
// プラグインコマンドの設定
//-----------------------------------------------------------------------------
    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
    };

//-----------------------------------------------------------------------------
// Window_Optionsクラスに機能を追加する
//-----------------------------------------------------------------------------

var _Window_Options_initialize = Window_Options.prototype.initialize;
Window_Options.prototype.initialize = function() {
    _Window_Options_initialize.call(this);
};

var _Window_Options_update = Window_Options.prototype.update;
Window_Options.prototype.update = function() {
    _Window_Options_update.call(this);
    this.updateBarSprite();
};


var _Window_Options_drawItem = Window_Options.prototype.drawItem;
Window_Options.prototype.drawItem = function(index) {
    _Window_Options_drawItem.apply(this, arguments);
    this.initialize_BarSprite();
    //ここからバー追加
    //this.addBar(index);
};

//文字のスプライト初期化
Window_Options.prototype.initialize_BarSprite = function(){
    if(this.sprite_bar === undefined)
    {


        /*ここから画像用の定義*/
        this.sprite_img_bar = [];
        this.sprite_img_button = [];
        if($img_bar_ABOS !== '' || $img_bar_ABOS !== undefined)
        {
            //バー画像
            var bitmap = ImageManager.load_MenuUi($img_bar_ABOS);
            for(var i = 0; i < 12; i++)
            {
                this.sprite_img_bar[i] = new Sprite(bitmap);
                //一回飛ばす
                this.sprite_img_bar[i].y = -814;
                this.addChild(this.sprite_img_bar[i]);
            }
        }
        
        //スプライト生成
        this.sprite_bar = new Sprite();//内側
        this.sprite_bar.bitmap = new Bitmap(Graphics.width, Graphics.height);
        //addChild
        this.addChild(this.sprite_bar);

        if($img_button_ABOS !== '' || $img_button_ABOS !== undefined)
        {
            //ボタン画像
            var bitmap = ImageManager.load_MenuUi($img_button_ABOS);
            for(var i = 0; i < 12; i++)
            {
                this.sprite_img_button[i] = new Sprite(bitmap);
                //一回飛ばす
                this.sprite_img_button[i].y = -814;
                this.addChild(this.sprite_img_button[i]);
            }
        }

        //バグ回避用
        this.button_position = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    }
};


Window_Options.prototype.addBar = function(index){
    var symbol = this.commandSymbol(index);
    var rect = this.itemRectForText(index);
    var value = this.getConfigValue(symbol);
    
    if (this.isVolumeSymbol(symbol)) {
        //適切な位置に調整
        var _temp_button_position = this.getShouldDrawButtonPosition(value);
        this.button_position[index] = $bar_position_ABOS + _temp_button_position;
        //タッチされたかどうか判定
        var _on_touch_button = this.isTouchButton(rect.x + this.button_position[index],rect.y + 37);

        if(_on_touch_button)
        {
            this.changeButtonPosition(rect.x + this.button_position[index],rect.y + 37,index);
        }

        //this.drawText('あははははうんこだー！', rect.x, rect.y, 50 , 'left');
        this.drawBar(rect.x + $bar_position_ABOS, rect.y + 40, rect.x + $bar_position_ABOS + $bar_length_ABOS,rect.y + 37, $bar_color_ABOS, 6,index);
        this.drawButton(rect.x + this.button_position[index], rect.y + 37, 10, $button_color_ABOS,index);
    }
};

Window_Options.prototype.getShouldDrawButtonPosition = function(value){
    //var max_position = $bar_position_ABOS + $bar_length_ABOS;
    //var min_position = $bar_position_ABOS;
    //console.log(value);
    return $bar_length_ABOS * value / 100;
};




Window_Options.prototype.drawBar = function(x, y, x2, y2,color,lineWidth,index){
    //画像なしの場合
    if($img_bar_ABOS === '' || $img_bar_ABOS === undefined)
    {
        //色指定
        this.sprite_bar.bitmap.context.strokeStyle = color;
        this.sprite_bar.bitmap.context.fillStyle = color;
        //太さ指定
        this.sprite_bar.bitmap.context.lineWidth = lineWidth;
        //直線の描画
        this.sprite_bar.bitmap.context.beginPath();
        this.sprite_bar.bitmap.context.moveTo(x, y);
        this.sprite_bar.bitmap.context.lineTo(x2, y2);
        this.sprite_bar.bitmap.context.closePath();
        this.sprite_bar.bitmap.context.stroke();
    }else{
        //画像ありの場合
        for(var i = 0; i < this.sprite_img_bar.length;i++)
        {
            this.sprite_img_bar[index].x = x
            this.sprite_img_bar[index].y = y - (this.sprite_img_bar[index].height / 2);
        }
    }
};

Window_Options.prototype.drawButton = function(x , y , radius , color,index){
    if($img_button_ABOS === '' || $img_button_ABOS === undefined)
    {
        //画像なしの場合
        this.sprite_bar.bitmap.drawCircle(x,y,radius + 2,'#000');//外枠
        this.sprite_bar.bitmap.drawCircle(x,y,radius,color);//内側
    }else
    {
        //画像ありの場合
        for(var i = 0; i < this.sprite_img_button.length;i++)
        {
            this.sprite_img_button[index].x = x - (this.sprite_img_button[index].width / 2) + $button_x_offset_ABOS;
            this.sprite_img_button[index].y = y - (this.sprite_img_button[index].height / 2) + $button_y_offset_ABOS;
        }
    }
};

Window_Options.prototype.isTouchButton = function(position_x,position_y){
    //タッチ座標取得
    var x = this.canvasToLocalX(TouchInput.x);
    var y = this.canvasToLocalY(TouchInput.y);

    position_x -= 15;//座標取得位置の調整
    position_y -= 15;//座標取得位置の調整

    if(this._touching == true)
    {
        //x～x＋30とy～y＋30を取得する
        if(((x >= position_x - 500) && (x <= position_x + 500)) && (y >= position_y) && (y <= position_y + 30))
        {
            //console.log("タッチされたよ");
            return true;//タッチされた
        }
    }
    return false;//タッチされてない
};

Window_Options.prototype.changeButtonPosition = function(position_x,position_y,index){
    //タッチ座標取得
    var x = this.canvasToLocalX(TouchInput.x);
    var y = this.canvasToLocalY(TouchInput.y);

    if(TouchInput.isMoved() && TouchInput.isLongPressed())
    {
        if(position_x + 10 < x)
        {
            this.cursorRight();
        }
        if(position_x - 10 > x)
        {
            this.cursorLeft();
        }
    }
};

Window_Options.prototype.updateBarSprite = function(){
    this.sprite_bar.bitmap.clear();
    var topIndex = this.topIndex();
    for (var i = 0; i < this.maxPageItems(); i++) {
        var index = topIndex + i;
        if (index < this.maxItems()) {
            this.addBar(index);
        }
    }
};

Window_Options.prototype.volumeOffset = function() {
    return $button_offset_ABOS;
};

})();