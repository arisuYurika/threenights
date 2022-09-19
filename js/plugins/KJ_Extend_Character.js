/*:
 * @plugindesc Character. v1.0.0
 * @author Kong Jing
 *
 * @help
 * 修复了自带的接近玩家（不会被障碍物卡主不动）
 *
 * 在自定义路线中写脚本
 * this.moveTowardCharacterEx(index);
 * 向着事件Id为index的坐标走去。
 *
 * this.moveTowardDestination(x, y);
 * 向地图指定位置走去。
 *
 * this.moveTowardDestinationEx(Id1, Id2);
 * 向变量Id1为x坐标, 变量Id2为y坐标的位置走去。
 *
 */

//原版本的一个细节问题2333.
Game_Character.prototype.findDirectionTo = function(goalX, goalY) {
    var searchLimit = this.searchLimit();
    var mapWidth = $gameMap.width();
    var nodeList = [];
    var openList = [];
    var closedList = [];
    var start = {};
    var best = null;//此处应该为null，原版本为start

    if (this.x === goalX && this.y === goalY) {
        return 0;
    }

    start.parent = null;
    start.x = this.x;
    start.y = this.y;
    start.g = 0;
    start.f = $gameMap.distance(start.x, start.y, goalX, goalY);
    nodeList.push(start);
    openList.push(start.y * mapWidth + start.x);
	
	if(start.f == 1){
		var deltaX1 = $gameMap.deltaX(goalX, start.x);
		var deltaY1 = $gameMap.deltaY(goalY, start.y);
		if (deltaY1 > 0 && this.isMapPassable(start.x, start.y, 2)) {
			return 2;
		} else if (deltaX1 < 0 && this.isMapPassable(start.x, start.y, 4)) {
			return 4;
		} else if (deltaX1 > 0 && this.isMapPassable(start.x, start.y, 6)) {
			return 6;
		} else if (deltaY1 < 0 && this.isMapPassable(start.x, start.y, 8)) {
			return 8;
		}
	}
    while (nodeList.length > 0) {
        var bestIndex = 0;
        for (var i = 0; i < nodeList.length; i++) {
            if (nodeList[i].f < nodeList[bestIndex].f) {
                bestIndex = i;
            }
        }

        var current = nodeList[bestIndex];
        var x1 = current.x;
        var y1 = current.y;
        var pos1 = y1 * mapWidth + x1;
        var g1 = current.g;

        nodeList.splice(bestIndex, 1);
        openList.splice(openList.indexOf(pos1), 1);
        closedList.push(pos1);

        if (current.x === goalX && current.y === goalY) {
            best = current;
            goaled = true;
            break;
        }

        if (g1 >= searchLimit) {
            continue;
        }

        for (var j = 0; j < 4; j++) {
            var direction = 2 + j * 2;
            var x2 = $gameMap.roundXWithDirection(x1, direction);
            var y2 = $gameMap.roundYWithDirection(y1, direction);
            var pos2 = y2 * mapWidth + x2;

            if (closedList.contains(pos2)) {
                continue;
            }
            if (!this.canPass(x1, y1, direction)) {
                continue;
            }

            var g2 = g1 + 1;
            var index2 = openList.indexOf(pos2);

            if (index2 < 0 || g2 < nodeList[index2].g) {
                var neighbor;
                if (index2 >= 0) {
                    neighbor = nodeList[index2];
                } else {
                    neighbor = {};
                    nodeList.push(neighbor);
                    openList.push(pos2);
                }
                neighbor.parent = current;
                neighbor.x = x2;
                neighbor.y = y2;
                neighbor.g = g2;
                neighbor.f = g2 + $gameMap.distance(x2, y2, goalX, goalY);
                if (!best || neighbor.f - neighbor.g < best.f - best.g) {
                    best = neighbor;
                }
            }
        }
    }

    var node = best;
    while (node.parent && node.parent !== start) {
        node = node.parent;
    }

    var deltaX1 = $gameMap.deltaX(node.x, start.x);
    var deltaY1 = $gameMap.deltaY(node.y, start.y);
    if (deltaY1 > 0) {
        return 2;
    } else if (deltaX1 < 0) {
        return 4;
    } else if (deltaX1 > 0) {
        return 6;
    } else if (deltaY1 < 0) {
        return 8;
    }

    var deltaX2 = this.deltaXFrom(goalX);
    var deltaY2 = this.deltaYFrom(goalY);
    if (Math.abs(deltaX2) > Math.abs(deltaY2)) {
        return deltaX2 > 0 ? 4 : 6;
    } else if (deltaY2 !== 0) {
        return deltaY2 > 0 ? 8 : 2;
    }

    return 0;
};
//优化接近玩家
Game_Character.prototype.moveTowardCharacter = function(character) {
	var x = character.x;
	var y = character.y;
	var direction = this.findDirectionTo(x, y);
	if (direction > 0) {
		this.moveStraight(direction);
	}
};

//向事件寻路
Game_Character.prototype.moveTowardCharacterEx = function(index) {
	var character = $gameMap._events[index];
	var x = character.x;
	var y = character.y;
	var direction = this.findDirectionTo(x, y);
	if (direction > 0) {
		this.moveStraight(direction);
	}
};

//向指定坐标寻路
Game_Character.prototype.moveTowardDestination = function(x, y) {
	var direction = this.findDirectionTo(x, y);
	if (direction > 0) {
		this.moveStraight(direction);
	}
};

//向变量所指位置走去
Game_Character.prototype.moveTowardDestinationEx = function(Id1, Id2) {
	var x = $gameVariables.value(Id1);
	var y = $gameVariables.value(Id2);
	var direction = this.findDirectionTo(x, y);
	if (direction > 0) {
		this.moveStraight(direction);
	}
};