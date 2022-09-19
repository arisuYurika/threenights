/*:
 * @plugindesc v1.00  VShake 垂直晃动
 * @author 流逝的岁月
 *
 * @help
 * ============================================================================
 * 介绍
 * ============================================================================
 *
 *
 * 
 * 这款插件提供了可垂直震动
 *
 *
 *
 *
 * 插件指令:
 * ZzyVSF IsHShake x(true/false)           //这会开启/关闭水平震动
 * ZzyVSF IsVShake x(true/false)           //这会开启/关闭垂直震动
 * ZzyVSF HForce x                         //修改水平震动比例,这可以是一个小数
 * ZzyVSF VForce x                         //修改垂直震动比例,这可以是一个小数
 *
 *
 *
 *
 * 我叫坂本：v1.00 完成插件功能
 *
 *----------------------------------------------------------
 *
 *
 *
 * @param ---主设置---
 * @default
 *
 *
 * @param IsHShake
 * @text 允许水平震动
 * @parent ---主设置---
 * @type boolean
 * @on YES
 * @off NO
 * @desc 是否允许垂直震动的产生
 * YES - true     NO - false
 * @default true
 *
 * @param IsVShake
 * @text 允许垂直震动
 * @parent ---主设置---
 * @type boolean
 * @on YES
 * @off NO
 * @desc 是否允许水平震动的产生
 * YES - true     NO - false
 * @default true
 *
 * @param HForce
 * @text 水平震动强度
 * @parent ---主设置---
 * @type text
 * @desc 这会使原版震动的倍数,默认*1,可以填写小数
 * @default 1
 *
 * @param VForce
 * @text 垂直震动强度
 * @parent ---主设置---
 * @type text
 * @desc 这会使原版震动的倍数,默认*1,可以填写小数
 * @default 1
 *
 *
 */
 
var LiuYue = LiuYue || {};
LiuYue.LiuYue_VShake = true;//插件启动


var Zzy = Zzy || {};
Zzy.VSF = Zzy.VSF || {};
Zzy.VSF.version = 1.00;  
Zzy.Parameters = PluginManager.parameters('LiuYue_VShake');
Zzy.Param = Zzy.Param || {};

Zzy.Param.VSFIsHShake = eval(String(Zzy.Parameters['IsHShake']));
Zzy.Param.VSFIsVShake = eval(String(Zzy.Parameters['IsVShake']));
Zzy.Param.VSFHForce = String(Zzy.Parameters['HForce']);
Zzy.Param.VSFVForce = String(Zzy.Parameters['VForce']);



//==================================================================
//Game_System
//==================================================================

Zzy.VSF.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() 
{
    Zzy.VSF.Game_System_initialize.call(this);
	this.ZzyVSFInitData();//初始化数据
};

Game_System.prototype.ZzyVSFInitData = function()
{
	this._ZzyVSFIsHShake = Zzy.Param.VSFIsHShake;
	this._ZzyVSFIsVShake = Zzy.Param.VSFIsVShake;
	this._ZzyVSFHForce = Zzy.Param.VSFHForce;
	this._ZzyVSFVForce = Zzy.Param.VSFVForce;
}


//==================================================================
//Game_Interpreter
//==================================================================

Zzy.VSF.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args)//插件命令
{
	Zzy.VSF.Game_Interpreter_pluginCommand.call(this,command,args);

	if(command === 'ZzyVSF')
	{
		this.ZzyVSFCommand(args);
	}
	

}

Game_Interpreter.prototype.ZzyVSFCommand = function(args)
{
	var command = String(args[0]);
	switch(command)
	{
		case 'IsHShake':
		var isEnable = eval(String(args[1]));
		$gameSystem._ZzyVSFIsHShake = isEnable;
		break;

		case 'IsVShake':
		var isEnable = eval(String(args[1]));
		$gameSystem._ZzyVSFIsVShake = isEnable;
		break;
		
		case 'HForce':
		var force = Number(args[1]);
		$gameSystem._ZzyVSFHForce = force;
		break;
		
		case 'VForce':
		var force = Number(args[1]);
		$gameSystem._ZzyVSFVForce = force;
		break;		

	}
}



//==================================================================
//Spriteset_Base
//==================================================================
Zzy.VSF.Spriteset_Base_updatePosition = Spriteset_Base.prototype.updatePosition;
Spriteset_Base.prototype.updatePosition = function() 
{
	Zzy.VSF.Spriteset_Base_updatePosition.call(this);
	
	if(!$gameSystem._ZzyVSFIsHShake)//没有开启水平震动
	{
		this.x -= Math.round($gameScreen.shake());
	}
	
	if($gameSystem._ZzyVSFIsVShake)//开启了垂直震动时
	{
		this.y += Math.round($gameScreen.ZzyVSFVShake() * $gameSystem._ZzyVSFVForce);//震动幅度
	}
};


//==================================================================
//Game_Screen
//==================================================================
Zzy.VSF.Game_Screen_shake = Game_Screen.prototype.shake;//水平震动
Game_Screen.prototype.shake = function() 
{
	var Hshake = Zzy.VSF.Game_Screen_shake.call(this);
    return Hshake * $gameSystem._ZzyVSFHForce;
};

Game_Screen.prototype.ZzyVSFVShake = function()//垂直震动
{
	return this._shake * $gameSystem._ZzyVSFVForce;
}


