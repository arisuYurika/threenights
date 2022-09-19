//-----------------------------------------------------------------------------
//  Galv's Message Styles
//-----------------------------------------------------------------------------
//  For: RPGMAKER MV
//  GALV_MessageStyles.js
//-----------------------------------------------------------------------------
//  2017-07-31 - Version 2.8 - Fixed bug with window closing after changing
//                           - windowskin or arrow.
//  2017-07-31 - Version 2.7 - Fixed bug cutting off text
//                           - Made choice box auto-position if off screen
//  2017-07-31 - Version 2.6 - Fixed bug with 'bottom' aligned messages not
//                           - moving to 'top' when leaving bottom of screen.
//                           - Added ability to change windowskin and arrow
//  2017-05-19 - Version 2.5 - Fixed 'dim' window background bug
//  2016-06-11 - Version 2.4 - Loading fonts issue wasnt fixed... fixed now!
//  2016-06-02 - Version 2.3 - Fixed an issue with loading custom fonts
//  2016-05-29 - Version 2.2 - Fixed compatibility issue with Yanfly name box
//  2016-05-23 - Version 2.1 - Added ability to target message to screen x,y
//                           - Made the "Window Position" show text command
//                           - change the popup window position.
//  2016-05-11 - Version 2.0 - Fixed issue with codes increasing box size
//                             Added ability to use \v[x] for variables in pop
//  2016-04-24 - Version 1.9 - Fixed issue with message codes \. \| \! etc.
//  2016-04-23 - Version 1.8 - Fixed faceHeight (oops, didnt even think haha)
//  2016-04-22 - Version 1.7 - Fixed issue if faceWidth was changed
//  2016-04-16 - Version 1.6 - Visual Novel Choices 'always mid' compatibility
//  2016-04-08 - Version 1.5 - fixed a bug where "a" wont target party leader
//                           - fixed box size with \{ and \} commands
//  2016-04-03 - Version 1.4 - stop rushing, Galv! Fixed more bugs
//  2016-04-03 - Version 1.3 - bug fix when using with Galv's Message Busts
//  2016-04-01 - Version 1.2 - added compatibility for Yanfly Message Core
//  2016-03-31 - Version 1.1 - fixed a bug when targeting event off screen
//                             above. Fixed minor other bugs.
//  2016-03-31 - Version 1.0 - release
//-----------------------------------------------------------------------------
// Terms can be found at:
// galvs-scripts.com
//-----------------------------------------------------------------------------

var Imported = Imported || {};
Imported.Galv_MessageStyles = true;

var Galv = Galv || {};                  // Galv's main object
Galv.Mstyle = Galv.Mstyle || {};        // Galv's stuff
Galv.VNC = Galv.VNC || {};
Galv.MB = Galv.MB || {};
Galv.MB.w = Galv.MB.w || 0;

//-----------------------------------------------------------------------------
/*:
 * @plugindesc (v.2.8) Settings to change how your "Show Text" messages look as well as code to make them floating.
 * 
 * @author Galv - galvs-scripts.com
 *
 * @param Input Indicator
 * @desc pos,x,y - pos is a direction number (numpad). 1,2,3,4,6,7,8,9.
 * @default 2,0,-12
 *
 * @param Indicator Zoom
 * @desc The zoom % of the message indicator and message arrows.
 * default 100%
 * @default 100
 *
 * @param Message Padding
 * @desc Adds padding around the text in the message box... top,right,bottom,left
 * @default 0,0,0,0
 *
 * @param Message Windowskin
 * @desc Windowskin file from /img/system/ to use for all Show Text messages
 * Default: Window
 * @default Window
 *
 * @param Other Windowskins
 * @desc List windowskin names (separated by commas without spaces) that you want to cache for use in your game.
 * @default Window1,Window2,Window3
 *
 * @param Arrow Graphic
 * @desc Image from /img/system/ that is used to point at the target of a floating message box. Leave blank for none.
 * @default WindowArrow
 *
 * @param Other Arrow Graphics
 * @desc List arrow graphics (separated by commas without spaces) that you want to cache for use in your game.
 * @default WindowArrow1,WindowArrow2,WindowArrow3
 *
 * @param Windowskin Back Opacity
 * @desc The opacity of the window background.
 * 0 - 255
 * @default 192
 *
 * @param Y Offset
 * @desc How far away from the event/actor the message box will appear in pixels
 * @default 60
 *
 * @param Font
 * @desc Name of the font to use for just message box and choice box. Leave blank for default.
 * @default
 *
 * @param Font Filename
 * @desc Name of the font file located in /fonts/ folder in your project. Leave blank for default.
 * @default
 *
 * @param Font Outline
 * @desc true or false - if text has outlines on it or not.
 * @default true
 *
 * @param Font Size
 * @desc The size of the font in Show Text message boxes.
 * default 28
 * @default 28
 *
 * @help
 *   Galv's Message Styles
 * ----------------------------------------------------------------------------
 * The main purpose of this plugin is to allow your "Show Text" message boxes
 * to have a different style to other windows in the game. The plugin settings
 * have a variety of visual settings you can tweak, and in addition using a
 * text code in Show Text messages will allow you to turn that message into a
 * floating message.
 * ----------------------------------------------------------------------------
 *   CODE to use in SHOW TEXT message
 * ----------------------------------------------------------------------------
 * The following code MUST be put in the first line of a message to work.
 *
 *       \pop[x]
 *
 * x = event Id - to target an event on the map
 *     0 to target the event the Show Text command is used it
 *     -1,-2,-3,-4... negative numbers to target followers in those postions
 *     a1,a2,a3, etc... to target a specific actor IF they are a follower. If
 *                      not a follower, the message will not display
 *     x,y to target SCREEN pixel position
 *
 * EXAMPLES
 * \pop[23]  // targets event 23
 * \pop[-3]  // targets the 3rd follower in your follower lineup
 * \pop[a8]  // targets actor 8, only if the actor is a follower on the map
 * \pop[200,200] // targets screen position at 200px X and 200px Y
 *
 * ----------------------------------------------------------------------------
 *   SCRIPT call to change windowskin and arrow graphic
 * ----------------------------------------------------------------------------
 *    Galv.Mstyle.img('window','arrow',r);  // Change windowskin image and the
 *                                          // arrow graphic. Use 0 to leave
 *                                          // existing graphic.
 *                                          // r = true or false if you want
 *                                          // the skin/arrow to change only
 *                                          // when message window is closed
 *            
 *
 * EXAMPLES
 * Galv.Mstyle.img('Window1','Arrow1');  // Change windowskin to Window1.png
 *                                       // and arrow graphic to Arrow1.png
 * Galv.Mstyle.img(0,'Arrow1');          // Don't change windowskin, only
 *                                       // change arrow graphic to Arrow1.png
 * Galv.Mstyle.img('Window2',0,true);    // Don't change arrow graphic, only
 *                                       // windowskin graphic to Window2.png
 *                                       // also, this will only do the change
 *                                       // when the window is closed.
 */

//-----------------------------------------------------------------------------
//  CODE STUFFS
//-----------------------------------------------------------------------------


(function() {

Galv.Mstyle.skin = PluginManager.parameters('Galv_MessageStyles')['Message Windowskin'];

Galv.Mstyle.font = PluginManager.parameters('Galv_MessageStyles')['Font'];
Galv.Mstyle.fontFile = PluginManager.parameters('Galv_MessageStyles')['Font Filename'];
Graphics.loadFont(Galv.Mstyle.font,'fonts/' + Galv.Mstyle.fontFile);

Galv.Mstyle.arrow = PluginManager.parameters('Galv_MessageStyles')['Arrow Graphic'];
Galv.Mstyle.arrowGraphics = PluginManager.parameters('Galv_MessageStyles')['Other Arrow Graphics'].split(',') || [];
Galv.Mstyle.windowGraphics = PluginManager.parameters('Galv_MessageStyles')['Other Windowskins'].split(',') || [];

Galv.Mstyle.opacity = Number(PluginManager.parameters('Galv_MessageStyles')['Windowskin Back Opacity']);
Galv.Mstyle.fontSize = Number(PluginManager.parameters('Galv_MessageStyles')['Font Size']);
Galv.Mstyle.yOffet = Number(PluginManager.parameters('Galv_MessageStyles')['Y Offset']);
Galv.Mstyle.iZoom = Number(PluginManager.parameters('Galv_MessageStyles')['Indicator Zoom']) * 0.01;

Galv.Mstyle.ignoreChars = ['$','.','|','!','>','<','^'];
Galv.Mstyle.outline = PluginManager.parameters('Galv_MessageStyles')['Font Outline'].toLowerCase() == 'true' ? true : false;

Galv.Mstyle.indPos = PluginManager.parameters('Galv_MessageStyles')['Input Indicator'].split(",");
for (var i = 0; i < Galv.Mstyle.indPos.length; i++) {
	Galv.Mstyle.indPos[i] = Number(Galv.Mstyle.indPos[i]);
};

Galv.Mstyle.padding = PluginManager.parameters('Galv_MessageStyles')['Message Padding'].split(",");
for (var i = 0; i < Galv.Mstyle.padding.length; i++) {
	Galv.Mstyle.padding[i] = Number(Galv.Mstyle.padding[i]);
};



Galv.Mstyle.target = null;
Galv.Mstyle.thisEvent = null;

Galv.Mstyle.refreshOnClose = false;

Galv.Mstyle.checkTarget = function(text) {
	var target = null;
    var tmp = text.replace(/\\/g, '\x1b');
    tmp = tmp.replace(/\x1b\x1b/g, '\\');
	tmp = tmp.replace(/\x1bV\[(\d+)\]/gi, function() {
        return $gameVariables.value(parseInt(arguments[1]));
    }.bind(this));
    tmp = tmp.replace(/\x1bpop\[([-a]*\d*)+(,[0-9]+)*\]/gi, function() {
		if (arguments[2]) { // x,y locate
			target = [arguments[1],arguments[2].replace(",","")];
		} else {
			target = arguments[1];
		};
    }.bind(this));
	return target;
};

Galv.Mstyle.setTarget = function(target) {
	if (target.constructor.name == "Array") { // X,Y object
		Galv.Mstyle.xyTarget = {
			_x: Number(target[0]),
			_y: Number(target[1]),
			screenX: function() {return this._x},
			screenY: function() {return this._y},
		};
		return Galv.Mstyle.xyTarget;
	} else if (target[0] != "a") { // If Target is an ID (event or negatives for follower)
		target = Number(target);
		// event ID or player
		if (target >= -1) {
			switch (target) {
				case 0:
					return $gameMap.event(Galv.Mstyle.thisEvent);
					break;
				case -1:
					return $gamePlayer;
					break;
				default:
					return $gameMap.event(target);
					break;
			};
		} else {
			var f = Math.abs(target);
			
			if (f > $gameParty.battleMembers().length) {
				// if no follower exists - don't do it!
				return false;
			} else {
				return $gamePlayer._followers.follower(f - 2);
			};
		};
	} else if (target[0] == "a") { // Target an actor - check if in followers
		var actor = $gameActors.actor(Number(target.replace("a","")));
		actorIndex = actor.index();
		if (actorIndex < 0 || actorIndex > $gameParty.battleMembers().length) {
			return false;
		} else {
			var ind = actorIndex - 1;
			return ind < 0 ? $gamePlayer : $gamePlayer._followers.follower(ind);
		};
	};
};


Galv.Mstyle.img = function(winImg,arrowImg,refreshOnClose) {
	if (winImg) $gameSystem._messageWindowSkin = winImg;
	if (arrowImg) $gameSystem._messageArrowGraphic = arrowImg;

	if (refreshOnClose) {
		Galv.Mstyle.refreshOnClose = true; //SceneManager._scene._messageWindow.refreshOnClose = true;
	} else {
		Galv.Mstyle.refreshMessageWindows();
	};
};

Galv.Mstyle.refreshMessageWindows = function() {
	if (SceneManager._scene._messageWindow) SceneManager._scene._messageWindow.refreshGraphics();
	if (SceneManager._scene._nameWindow) SceneManager._scene._nameWindow.refreshGraphics();
};

// GAME SYSTEM
//-----------------------------------------------------------------------------

Galv.Mstyle.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	Galv.Mstyle.Game_System_initialize.call(this);
	this._messageWindowSkin = Galv.Mstyle.skin + "";
	this._messageArrowGraphic = Galv.Mstyle.arrow + "";
};

// INTERPRETER
//-----------------------------------------------------------------------------

Galv.Mstyle.Game_Interpreter_command101 = Game_Interpreter.prototype.command101;
Game_Interpreter.prototype.command101 = function() {
	var ispop = this._list[this._index + 1].parameters[0].match(/\\pop/i);
	if (ispop) {
		Galv.Mstyle.thisEvent = this._eventId;
		Galv.Mstyle.target = Galv.Mstyle.setTarget(Galv.Mstyle.checkTarget(this._list[this._index + 1].parameters[0]));
		if (Galv.Mstyle.target == false) {
			while (this.nextEventCode() === 401) {  // Text data
				this._index++;
			};
			return false;
		};
	} else {
		Galv.Mstyle.thisEvent = null;
		Galv.Mstyle.target = null;
	};
	Galv.Mstyle.Game_Interpreter_command101.call(this);
};



// ESCAPE CODE ADD
Galv.Mstyle.Window_Base_convertEscapeCharacters = Window_Base.prototype.convertEscapeCharacters;
Window_Base.prototype.convertEscapeCharacters = function(text) {
	var text = Galv.Mstyle.Window_Base_convertEscapeCharacters.call(this,text);
		text = text.replace(/\x1bpop\[([-a]*\d*)+(,[0-9]+)*\]/gi, function() {
        return "";
    }.bind(this));
	return text;
};

Window_Message.prototype.textWidthEx = function(text) {
    return this.drawTextEx(text, 0, this.contents.height);
};

Window_Message.prototype.refreshGraphics = function() {
	this.loadWindowskin();
	this.contents.clear();
	this.updateTone();
	this.changeWindowDimensions();
    this.createContents();
	this.openness = 0;
	this.createWindowTail();
	
	if (this._choiceWindow) {
		this._choiceWindow.loadWindowskin();
		this._choiceWindow.contents.clear();
		this._choiceWindow.createContents();
		this._choiceWindow.openness = 0;
	}
};




// WINDOW MESSAGE
//-----------------------------------------------------------------------------

Galv.Mstyle.Window_Message_initialize = Window_Message.prototype.initialize;
Window_Message.prototype.initialize = function() {
	Galv.Mstyle.Window_Message_initialize.call(this);
	this.backOpacity = Galv.Mstyle.opacity;
};

Galv.Mstyle.Window_Message_updateClose = Window_Message.prototype.updateClose;
Window_Message.prototype.updateClose = function() {
	if (Galv.Mstyle.refreshOnClose && this.isClosed()) {
		Galv.Mstyle.refreshOnClose = false;
		Galv.Mstyle.refreshMessageWindows();
    }
	Galv.Mstyle.Window_Message_updateClose.call(this);
};

// Store default
Galv.Mstyle.Window_Message_windowHeight = Window_Message.prototype.windowHeight;

// Overwrite to set contents height big enough to fit expanding text
Window_Message.prototype.windowHeight = function() {
    return Graphics.boxHeight;
};

Window_Message.prototype.createWindowTail = function() {
	if (this._tailSprite) this.removeChild(this._tailSprite);
	this._tailSprite = new Sprite();
	this._tailSprite.bitmap = ImageManager.loadSystem($gameSystem._messageArrowGraphic);
	this._tailSprite.opacity = 0;
	this._tailSprite.anchor.x = 0.5;
	this.addChild(this._tailSprite);
};


Galv.Mstyle.Window_Message_resetFontSettings = Window_Message.prototype.resetFontSettings;
Window_Message.prototype.resetFontSettings = function() {
    Galv.Mstyle.Window_Message_resetFontSettings.call(this);
	if (Galv.Mstyle.font != "") this.contents.fontFace = Galv.Mstyle.font;
	this.contents.fontSize = Galv.Mstyle.fontSize;
};


Galv.Mstyle.Window_Message_startMessage = Window_Message.prototype.startMessage;
Window_Message.prototype.startMessage = function() {
	Galv.Mstyle.Window_Message_startMessage.call(this);
	this.changeWindowDimensions();
	this.refreshDimmerBitmap();
	this.setPopSettings();
};

Galv.Mstyle.Window_Message_updatePlacement = Window_Message.prototype.updatePlacement;
Window_Message.prototype.updatePlacement = function() {

	if (!Galv.Mstyle.outline) this.contents._drawTextOutline = function() {};
	if (Galv.Mstyle.target) {
		this.pTarget = Galv.Mstyle.target;
		// if target is undefined - cancel this message.
		this.updateFloatPlacement();
		this._goldWindow.y = this.y > 0 ? 0 : Graphics.boxHeight - this._goldWindow.height;
	} else {
		this.pTarget = null;
		this.changeWindowDimensions();
		Galv.Mstyle.Window_Message_updatePlacement.call(this);
	};
};

Galv.Mstyle.Window_Message_terminateMessage = Window_Message.prototype.terminateMessage;
Window_Message.prototype.terminateMessage = function() {
	Galv.Mstyle.Window_Message_terminateMessage.call(this);
	this.pTarget = null;
	Galv.Mstyle.target = null;
	Galv.Mstyle.thisEvent = null;
};

Galv.Mstyle.Window_Message_update = Window_Message.prototype.update;
Window_Message.prototype.update = function() {
	Galv.Mstyle.Window_Message_update.call(this);
	this.updateFloatPlacement();
};


Window_Message.prototype.setPopSettings = function() {
	this.tailPos = $gameMessage._positionType;
	switch ($gameMessage._positionType) {
		case 1: // MIDDLE
			this.yOffset = -(this.height / 2);
			break;
		case 2: // BOTTOM
			this.yOffset = 15;
	};
};

Window_Message.prototype.updateFloatPlacement = function() {
	if (!this._tailSprite) this.createWindowTail();
	if (this.pTarget == null) {
		this._tailSprite.opacity = 0;
		return;
	};
	
	if (this.openness < 255) this._tailSprite.opacity = 0;
	// Update the text box position

	
	// init pos X,Y
	var posX = this.pTarget.screenX() - this.width / 2;
	var posY = this.pTarget.screenY() + this.yOffset;
	
	// set posX
	if (posX + this.width > Graphics.boxWidth) {
		posX = Graphics.boxWidth - this.width;
	} else if (posX < 0) {
		posX = 0;
	};
	this.x = posX;
	this._tailSprite.x = this.pTarget.screenX() - this.x;
	
	// set posY
	if (posY + this.height > Graphics.boxHeight) {
		var maxY = Graphics.boxHeight - this.height;
		posY = Math.min(maxY,this.pTarget.screenY() - Galv.Mstyle.yOffet - this.height);
		this.tailPos = 0;
	} else if (posY < 0) {
		posY = Math.max(this.pTarget.screenY() + 15,0); // position box under when it hits top of screen
		this.tailPos = 2;
	} else {
		this.tailPos = $gameMessage._positionType;
	};
	this.y = posY;
	
	
	if (this.openness > 200) {
		if (this.tailPos == 1) { // MID
			this._tailSprite.opacity = 0;
		} else if (this.tailPos == 2) { // BOT
			this._tailSprite.y = 2;
			this._tailSprite.scale.y = -1;
			this._tailSprite.opacity += 50;
		} else if (this.tailPos == 0) { // TOP
			this._tailSprite.scale.y = 1;
			this._tailSprite.y = this.height - 2;
			this._tailSprite.opacity += 50;
		};
	};
	
	this.updateFloats(this.x,this.width,this.y,this.height);
};

Window_Message.prototype.updateFloats = function(x,w,y,h) {
	this._choiceWindow.updateChoiceFloat(x,w,y,h);
};

// Yanfly Core Compatibility
if (Imported.YEP_MessageCore) {
	Galv.Mstyle.Window_Message_updateFloats = Window_Message.prototype.updateFloats;
	Window_Message.prototype.updateFloats = function(x,w,y,h) {
		Galv.Mstyle.Window_Message_updateFloats.call(this,x,w,y,h);
		this._nameWindow.updateNameFloat();
	};
	
	Galv.Mstyle.Window_Message_adjustWindowSettings = Window_Message.prototype.adjustWindowSettings;
	Window_Message.prototype.adjustWindowSettings = function() {
		if (this.pTarget) return;
		Galv.Mstyle.Window_Message_adjustWindowSettings.call(this);
	};

	Window_NameBox.prototype.updateNameFloat = function() {
		this.adjustPositionX();
		this.adjustPositionY();
	};
	
	Galv.Mstyle.Window_NameBox_adjustPositionY = Window_NameBox.prototype.adjustPositionY;
	Window_NameBox.prototype.adjustPositionY = function() {
		if (this._parentWindow.pTarget) {
			if (this._parentWindow.y > this._parentWindow.pTarget.screenY()) {
				this.y = this._parentWindow.y + this._parentWindow.height;
				this.y -= eval(Yanfly.Param.MSGNameBoxBufferY);
			} else {
				this.y = this._parentWindow.y;
				this.y -= this.height;
				this.y += eval(Yanfly.Param.MSGNameBoxBufferY);
			}
		} else {
			Galv.Mstyle.Window_NameBox_adjustPositionY.call(this);
		};
	};
	
	Galv.Mstyle.Window_NameBox_initialize = Window_NameBox.prototype.initialize;
	Window_NameBox.prototype.initialize = function(parentWindow) {
		Galv.Mstyle.Window_NameBox_initialize.call(this,parentWindow);
		this.backOpacity = Galv.Mstyle.opacity;
	};
	

	Galv.Mstyle.Window_NameBox_resetFontSettings = Window_NameBox.prototype.resetFontSettings;
	Window_NameBox.prototype.resetFontSettings = function() {
		Galv.Mstyle.Window_NameBox_resetFontSettings.call(this);
		if (Galv.Mstyle.font != "") this.contents.fontFace = Yanfly.Param.MSGFontName;
		this.contents.fontSize = Galv.Mstyle.fontSize;
		if (!Galv.Mstyle.outline) this.contents._drawTextOutline = function() {};
	};
	
	Window_NameBox.prototype.loadWindowskin = function() {
		this.windowskin = ImageManager.loadSystem($gameSystem._messageWindowSkin);
	};
	
	Window_NameBox.prototype.refreshGraphics = function() {
		this.loadWindowskin();
		this.contents.clear();
		this.updateTone();
		this.createContents();
		this.openness = 0;
	};
	
	
};


Galv.Mstyle.Window_Message_newLineX = Window_Message.prototype.newLineX;
Window_Message.prototype.newLineX = function() {
	return $gameMessage.faceName() === '' ? Galv.Mstyle.padding[3] : Window_Base._faceWidth + 24 + Galv.Mstyle.padding[3];
};

Galv.Mstyle.Window_Message_newPage = Window_Message.prototype.newPage;
Window_Message.prototype.newPage = function(textState) {
	Galv.Mstyle.Window_Message_newPage.call(this,textState);
	textState.y += Galv.Mstyle.padding[0];
};

Window_Message.prototype.changeWindowDimensions = function() {
	if (this.pTarget != null) {
		// Calc max width and line height to get dimensions
		var w = 10;
		var h = 0;

		if (Imported.Galv_MessageBusts) {
			if ($gameMessage.bustPos == 1) {
				var faceoffset = 0;
			} else {
				var faceoffset = Galv.MB.w;
			};
		} else {
			var faceoffset = Window_Base._faceWidth + 25;
		};

		// Calc X Offset
		var xO = $gameMessage._faceName ? faceoffset : 0;
		xO += Galv.Mstyle.padding[1] + Galv.Mstyle.padding[3]; // Added padding

		// Calc text width
		this.resetFontSettings();
		for (var i = 0; i < $gameMessage._texts.length; i++) {
			var lineWidth = this.testWidthEx($gameMessage._texts[i]) + this.standardPadding() * 2 + xO;
			if (w < lineWidth) w = lineWidth;
			
		};
		this.resetFontSettings();
		this.width = Math.min(Graphics.boxWidth,w);
		
		// Calc minimum lines
		var minFaceHeight = 0;
		if ($gameMessage._faceName) {
			w += 15;
			if (Imported.Galv_MessageBusts) {
				if ($gameMessage.bustPos == 1) w += Galv.MB.w;
				minFaceHeight = 0;
			} else {
				minFaceHeight = Window_Base._faceHeight + this.standardPadding() * 2;
			};
		};
		
		// Calc text height
		var textState = { index: 0 };
		textState.text = this.convertEscapeCharacters($gameMessage.allText());
		var allLineHeight = this.calcTextHeight(textState,true);
		var height = allLineHeight + this.standardPadding() * 2;
		var minHeight = this.fittingHeight($gameMessage._texts.length);
		this.height = Math.max(height,minHeight,minFaceHeight);
		this.height += Galv.Mstyle.padding[0] + Galv.Mstyle.padding[2];
		this.yOffset = -Galv.Mstyle.yOffet - this.height;
		
	} else {
		this.yOffset = 0;
		this.width = this.windowWidth();
		this.height = Galv.Mstyle.Window_Message_windowHeight.call(this);
		this.x = (Graphics.boxWidth - this.width) / 2;
	};
};

Window_Message.prototype.testWidthEx = function(text) {
    return this.drawTextExTest(text, 0, this.contents.height);
};

Window_Base.prototype.drawTextExTest = function(text, x, y) {
	Galv.Mstyle.testActive = false;
    if (text) {
		Galv.Mstyle.testActive = true;
        var textState = { index: 0, x: x, y: y, left: x };
        textState.text = this.convertEscapeCharacters(text);
        textState.height = this.calcTextHeight(textState, false);
        while (textState.index < textState.text.length) {
            this.processCharacter(textState);
        }
		Galv.Mstyle.testActive = false;
        return textState.x - x;
    } else {
        return 0;
    }
};


Galv.Mstyle.Window_Message_processEscapeCharacter = Window_Message.prototype.processEscapeCharacter;
Window_Message.prototype.processEscapeCharacter = function(code, textState) {
	if (Galv.Mstyle.testActive && Galv.Mstyle.ignoreChars.contains(code)) {
		var code = '.';
	};
	Galv.Mstyle.Window_Message_processEscapeCharacter.call(this,code,textState);
};

Galv.Mstyle.Window_Message_startWait = Window_Message.prototype.startWait;
Window_Message.prototype.startWait = function(count) {
	if (Galv.Mstyle.testActive) return;
	Galv.Mstyle.Window_Message_startWait.call(this,count);
};

//if (Galv.Mstyle.skin != 'window') {
	// Overwrite
	Window_Message.prototype.loadWindowskin = function() {
		this.windowskin = ImageManager.loadSystem($gameSystem._messageWindowSkin);
	};
//};

Galv.Mstyle.Window_Message__refreshPauseSign = Window_Message.prototype._refreshPauseSign;
Window_Message.prototype._refreshPauseSign = function() {
	Galv.Mstyle.Window_Message__refreshPauseSign.call(this);
	
	var x = 0;
	var y = 0;
	var oX = Galv.Mstyle.indPos[1];
	var oY = Galv.Mstyle.indPos[2];
	
	this._windowPauseSignSprite.anchor.y = 0.5;
	this._windowPauseSignSprite.anchor.x = 0.5;
	
	var pos = Galv.Mstyle.indPos[0];
	
	switch (pos) {
		case 1:
			x = oX;
			y = this._height + oY;
			break;
		case 2:
			x = this._width / 2 + oX;
			y = this._height + oY;
			break;
		case 3:
			x = this.width + oX;
			y = this._height + oY;
			break;
		case 4:
			x = oX;
			y = this.height / 2 + oY;
			break;
		case 6:
			x = this.width + oX;
			y = this.height / 2 + oY;
			break;
		case 7:
			x = oX;
			y = oY;
			break;
		case 8:
			x = this._width / 2 + oX;
			y = oY;
			break;
		case 9:
			x = this.width + oX;
			y = oY;
			break;
	}
	this._windowPauseSignSprite.move(x, y);
};

Galv.Mstyle.Window_Message__createAllParts = Window_Message.prototype._createAllParts;
Window_Message.prototype._createAllParts = function() {
	Galv.Mstyle.Window_Message__createAllParts.call(this);
	this._windowPauseSignSprite.scale.x = Galv.Mstyle.iZoom;
	this._windowPauseSignSprite.scale.y = Galv.Mstyle.iZoom;
	this._downArrowSprite.scale.x = Galv.Mstyle.iZoom;
	this._downArrowSprite.scale.y = Galv.Mstyle.iZoom;
	this._upArrowSprite.scale.x = Galv.Mstyle.iZoom;
	this._upArrowSprite.scale.y = Galv.Mstyle.iZoom;
};


// SCENE BOOT
//-----------------------------------------------------------------------------

Galv.Mstyle.Scene_Boot_loadSystemImages = Scene_Boot.loadSystemImages;
Scene_Boot.loadSystemImages = function() {
	Galv.Mstyle.Scene_Boot_loadSystemImages.call(this);
	ImageManager.loadSystem(Galv.Mstyle.skin);
	ImageManager.loadSystem(Galv.Mstyle.arrow);
	for (var i = 0; i < Galv.Mstyle.arrowGraphics.length; i++) {
		ImageManager.loadSystem(Galv.Mstyle.arrowGraphics[i]);
	}
	for (var i = 0; i < Galv.Mstyle.windowGraphics.length; i++) {
		ImageManager.loadSystem(Galv.Mstyle.windowGraphics[i]);
	}
};




// WINDOW CHOICE
//-----------------------------------------------------------------------------

Galv.Mstyle.Window_ChoiceList_initialize = Window_ChoiceList.prototype.initialize;
Window_ChoiceList.prototype.initialize = function(messageWindow) {
	Galv.Mstyle.Window_ChoiceList_initialize.call(this,messageWindow);
	this.backOpacity = Galv.Mstyle.opacity;
};


Galv.Mstyle.Window_ChoiceList_drawItem = Window_ChoiceList.prototype.drawItem;
Window_ChoiceList.prototype.drawItem = function(index) {
	if (!Galv.Mstyle.outline) this.contents._drawTextOutline = function() {};
    Galv.Mstyle.Window_ChoiceList_drawItem.call(this,index);
};

Galv.Mstyle.Window_ChoiceList_resetFontSettings = Window_ChoiceList.prototype.resetFontSettings;
Window_ChoiceList.prototype.resetFontSettings = function() {
    Galv.Mstyle.Window_ChoiceList_resetFontSettings.call(this);
	if (Galv.Mstyle.font != "") this.contents.fontFace = Galv.Mstyle.font;
	this.contents.fontSize = Galv.Mstyle.fontSize;
};

Window_ChoiceList.prototype.updateChoiceFloat = function(x,w,y,h) {
	var positionType = Galv.VNC.alwaysMid ? 1 : $gameMessage.choicePositionType();
	var setY = y + h;
	if (setY + this.height > Graphics.boxHeight) {
		this.y = y - this.height;
	} else {
		this.y = setY;
	}
	
    switch (positionType) {
    case 0:
        this.x = x;
        break;
    case 1:
        this.x = x + (w / 2) - this.width / 2;
        break;
    case 2:
        this.x = x + w - this.width;
        break;
    };
};

//if (Galv.Mstyle.skin != 'window') {
	// Overwrite
	Window_ChoiceList.prototype.loadWindowskin = function() {
		this.windowskin = ImageManager.loadSystem($gameSystem._messageWindowSkin);
	};
//};

})();