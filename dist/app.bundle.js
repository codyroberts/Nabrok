/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/animations/player.ts":
/*!**********************************!*\
  !*** ./src/animations/player.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function playerAnimation(scene) {
    scene.anims.create({
        key: 'idle',
        frames: scene.anims.generateFrameNumbers('player_idle', {
            start: 0,
            end: 15,
        }),
        frameRate: 5,
        repeat: -1,
    });
    scene.anims.create({
        key: 'walk_down',
        frames: scene.anims.generateFrameNumbers('player_walk', {
            start: 0,
            end: 3,
        }),
        frameRate: 5,
        repeat: -1,
    });
    scene.anims.create({
        key: 'walk_up',
        frames: scene.anims.generateFrameNumbers('player_walk', {
            start: 9,
            end: 11,
        }),
        frameRate: 5,
        repeat: -1,
    });
    scene.anims.create({
        key: 'walk_sideways',
        frames: scene.anims.generateFrameNumbers('player_walk', {
            start: 0,
            end: 3,
        }),
        frameRate: 5,
        repeat: -1,
    });
    console.log(scene.anims.generateFrameNumbers('player_attack', {
        start: 0,
        end: 4,
    }));
    console.log(scene.anims.generateFrameNumbers('player_attack', {
        start: 2,
        end: 5,
    }));
    scene.anims.create({
        key: 'attack',
        frames: scene.anims.generateFrameNumbers('player_attack', {
            end: 5,
        }),
        frameRate: 5,
    });
}
exports.default = playerAnimation;


/***/ }),

/***/ "./src/controls.ts":
/*!*************************!*\
  !*** ./src/controls.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//This file sets up the controls for the player
Object.defineProperty(exports, "__esModule", { value: true });
var attacking = false;
function controls(scene, player) {
    var _a;
    var controls = scene.input.keyboard.createCursorKeys();
    var body = player.body;
    // TODO: Cut controls out into function. CLean up function with fewer if statements.
    if (!controls.up.isDown &&
        !controls.down.isDown &&
        !controls.left.isDown &&
        !controls.right.isDown &&
        !(player.anims.isPlaying && ((_a = player.anims.currentAnim) === null || _a === void 0 ? void 0 : _a.key) === 'attack')) {
        player.anims.play('idle', true);
    }
    if (controls.up.isDown) {
        body.setVelocityY(-45);
        player.anims.play('walk_up', true);
    }
    else if (controls.down.isDown) {
        body.setVelocityY(45);
        player.anims.play('walk_down', true);
    }
    else {
        body.setVelocityY(0);
    }
    if (controls.left.isDown) {
        body.setVelocityX(-45);
        if (controls.down.isDown) {
            player.anims.play('walk_down', true);
        }
        else if (controls.up.isDown) {
            player.anims.play('walk_up', true);
        }
        else {
            player.flipX = true;
            player.anims.play('walk_sideways', true);
        }
    }
    else if (controls.right.isDown) {
        body.setVelocityX(45);
        if (controls.down.isDown) {
            player.anims.play('walk_down', true);
        }
        else if (controls.up.isDown) {
            player.anims.play('walk_up', true);
        }
        else {
            console.log('walking sideways');
            player.flipX = false;
            player.anims.play('walk_sideways', true);
        }
    }
    else {
        body.setVelocityX(0);
    }
    if (controls.space.isDown) {
        console.log('playing attack');
        attacking = true;
        player.anims.play('attack', true);
    }
}
exports.default = controls;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.game = exports.GameScene = void 0;
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
var controls_1 = __webpack_require__(/*! ./controls */ "./src/controls.ts");
var player_1 = __webpack_require__(/*! ./animations/player */ "./src/animations/player.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Game',
};
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.player = null;
        return _this;
    }
    GameScene.prototype.preload = function () {
        this.load.spritesheet('player_idle', 'assets/spritesheets/human/Idle.png', {
            frameWidth: 32,
            frameHeight: 32,
        });
        this.load.spritesheet('player_walk', 'assets/spritesheets/human/Walk.png', {
            frameWidth: 32,
            frameHeight: 32,
        });
        this.load.spritesheet('player_attack', 'assets/spritesheets/human/Attack.png', { frameWidth: 32, frameHeight: 32 });
    };
    GameScene.prototype.create = function () {
        this.player = this.physics.add.sprite(48, 48, 'hero');
        this.player.body = this.player.body;
        this.player.setSize(16, 16);
        this.cameras.main.setBounds(0, 0, 240, 240);
        this.physics.world.setBounds(0, 0, 240, 240);
        this.cameras.main.setZoom(4);
        this.cameras.main.zoomTo(6);
        this.cameras.main.startFollow(this.player, true, 0.05, 0.05);
        this.player.setScale(1);
        // Imports animations from animations.ts
        (0, player_1.default)(this);
    };
    GameScene.prototype.update = function () {
        // Imports game controls from controls.ts
        (0, controls_1.default)(this, this.player);
    };
    return GameScene;
}(Phaser.Scene));
exports.GameScene = GameScene;
var gameConfig = {
    title: 'Nabrok',
    type: Phaser.AUTO,
    scale: {
        width: window.innerWidth,
        height: window.innerHeight,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false,
        },
    },
    render: {
        pixelArt: true,
    },
    scene: GameScene,
    parent: 'game',
    // backgroundColor: '#000000',
};
exports.game = new Phaser.Game(gameConfig);


/***/ }),

/***/ 0:
/*!*****************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://localhost:8080 ./src/main.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\jqrai\dev\Nabrok\node_modules\webpack-dev-server\client\index.js?http://localhost:8080 */"./node_modules/webpack-dev-server/client/index.js?http://localhost:8080");
module.exports = __webpack_require__(/*! ./src/main.ts */"./src/main.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9ob3Qgc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2xvZyQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbnMvcGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9scy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsdUJBQXVCO1FBQ3ZDOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDdkpBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFOzs7Ozs7Ozs7Ozs7OztBQ3BCQSxTQUFTLGVBQWUsQ0FBQyxLQUFtQjtJQUMxQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUNqQixHQUFHLEVBQUUsTUFBTTtRQUNYLE1BQU0sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLGFBQWEsRUFBRTtZQUN0RCxLQUFLLEVBQUUsQ0FBQztZQUNSLEdBQUcsRUFBRSxFQUFFO1NBQ1IsQ0FBQztRQUNGLFNBQVMsRUFBRSxDQUFDO1FBQ1osTUFBTSxFQUFFLENBQUMsQ0FBQztLQUNYLENBQUM7SUFFRixLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUNqQixHQUFHLEVBQUUsV0FBVztRQUNoQixNQUFNLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLEVBQUU7WUFDdEQsS0FBSyxFQUFFLENBQUM7WUFDUixHQUFHLEVBQUUsQ0FBQztTQUNQLENBQUM7UUFDRixTQUFTLEVBQUUsQ0FBQztRQUNaLE1BQU0sRUFBRSxDQUFDLENBQUM7S0FDWCxDQUFDO0lBRUYsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDakIsR0FBRyxFQUFFLFNBQVM7UUFDZCxNQUFNLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLEVBQUU7WUFDdEQsS0FBSyxFQUFFLENBQUM7WUFDUixHQUFHLEVBQUUsRUFBRTtTQUNSLENBQUM7UUFDRixTQUFTLEVBQUUsQ0FBQztRQUNaLE1BQU0sRUFBRSxDQUFDLENBQUM7S0FDWCxDQUFDO0lBRUYsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDakIsR0FBRyxFQUFFLGVBQWU7UUFDcEIsTUFBTSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsYUFBYSxFQUFFO1lBQ3RELEtBQUssRUFBRSxDQUFDO1lBQ1IsR0FBRyxFQUFFLENBQUM7U0FDUCxDQUFDO1FBQ0YsU0FBUyxFQUFFLENBQUM7UUFDWixNQUFNLEVBQUUsQ0FBQyxDQUFDO0tBQ1gsQ0FBQztJQUNGLE9BQU8sQ0FBQyxHQUFHLENBQ1QsS0FBSyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLEVBQUU7UUFDaEQsS0FBSyxFQUFFLENBQUM7UUFDUixHQUFHLEVBQUUsQ0FBQztLQUNQLENBQUMsQ0FDSDtJQUNELE9BQU8sQ0FBQyxHQUFHLENBQ1QsS0FBSyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLEVBQUU7UUFDaEQsS0FBSyxFQUFFLENBQUM7UUFDUixHQUFHLEVBQUUsQ0FBQztLQUNQLENBQUMsQ0FDSDtJQUVELEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ2pCLEdBQUcsRUFBRSxRQUFRO1FBQ2IsTUFBTSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsZUFBZSxFQUFFO1lBQ3hELEdBQUcsRUFBRSxDQUFDO1NBQ1AsQ0FBQztRQUNGLFNBQVMsRUFBRSxDQUFDO0tBQ2IsQ0FBQztBQUNKLENBQUM7QUFFRCxrQkFBZSxlQUFlOzs7Ozs7Ozs7Ozs7OztBQ2hFOUIsK0NBQStDOztBQUkvQyxJQUFJLFNBQVMsR0FBRyxLQUFLO0FBQ3JCLFNBQVMsUUFBUSxDQUFDLEtBQW1CLEVBQUUsTUFBb0M7O0lBQ3pFLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFO0lBQ3hELElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFrQztJQUV0RCxvRkFBb0Y7SUFDcEYsSUFDRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTTtRQUNuQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTTtRQUNyQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTTtRQUNyQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTTtRQUN0QixDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksYUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLDBDQUFFLEdBQUcsTUFBSyxRQUFRLENBQUMsRUFDdkU7UUFDQSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDO0tBQ2hDO0lBRUQsSUFBSSxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRTtRQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUM7S0FDbkM7U0FBTSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUM7S0FDckM7U0FBTTtRQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0tBQ3JCO0lBRUQsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3RCLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDeEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQztTQUNyQzthQUFNLElBQUksUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUU7WUFDN0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQztTQUNuQzthQUFNO1lBQ0wsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJO1lBQ25CLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUM7U0FDekM7S0FDRjtTQUFNLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7UUFDckIsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN4QixNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDO1NBQ3JDO2FBQU0sSUFBSSxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRTtZQUM3QixNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDO1NBQ25DO2FBQU07WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDO1lBQy9CLE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSztZQUNwQixNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDO1NBQ3pDO0tBQ0Y7U0FBTTtRQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0tBQ3JCO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDO1FBQzdCLFNBQVMsR0FBRyxJQUFJO1FBQ2hCLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7S0FDbEM7QUFDSCxDQUFDO0FBRUQsa0JBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEdkIsdUZBQWdDO0FBQ2hDLDRFQUFpQztBQUNqQyw0RkFBaUQ7QUFFakQsSUFBTSxXQUFXLEdBQXVDO0lBQ3RELE1BQU0sRUFBRSxLQUFLO0lBQ2IsT0FBTyxFQUFFLEtBQUs7SUFDZCxHQUFHLEVBQUUsTUFBTTtDQUNaO0FBRUQ7SUFBK0IsNkJBQVk7SUFHekM7UUFBQSxZQUNFLGtCQUFNLFdBQVcsQ0FBQyxTQUduQjtRQURDLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSTs7SUFDcEIsQ0FBQztJQUVNLDJCQUFPLEdBQWQ7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsb0NBQW9DLEVBQUU7WUFDekUsVUFBVSxFQUFFLEVBQUU7WUFDZCxXQUFXLEVBQUUsRUFBRTtTQUNoQixDQUFDO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLG9DQUFvQyxFQUFFO1lBQ3pFLFVBQVUsRUFBRSxFQUFFO1lBQ2QsV0FBVyxFQUFFLEVBQUU7U0FDaEIsQ0FBQztRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUNuQixlQUFlLEVBQ2Ysc0NBQXNDLEVBQ3RDLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLENBQ3BDO0lBQ0gsQ0FBQztJQUVNLDBCQUFNLEdBQWI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sQ0FBUTtRQUM1RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQWtDO1FBQ2pFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFFM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztRQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1FBRTVDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztRQUM1RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFFdkIsd0NBQXdDO1FBQ3hDLG9CQUFlLEVBQUMsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSwwQkFBTSxHQUFiO1FBQ0UseUNBQXlDO1FBQ3pDLHNCQUFRLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDN0IsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQyxDQTlDOEIsTUFBTSxDQUFDLEtBQUssR0E4QzFDO0FBOUNZLDhCQUFTO0FBZ0R0QixJQUFNLFVBQVUsR0FBaUM7SUFDL0MsS0FBSyxFQUFFLFFBQVE7SUFFZixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7SUFFakIsS0FBSyxFQUFFO1FBQ0wsS0FBSyxFQUFFLE1BQU0sQ0FBQyxVQUFVO1FBQ3hCLE1BQU0sRUFBRSxNQUFNLENBQUMsV0FBVztLQUMzQjtJQUVELE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLE1BQU0sRUFBRTtZQUNOLE9BQU8sRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDakIsS0FBSyxFQUFFLEtBQUs7U0FDYjtLQUNGO0lBQ0QsTUFBTSxFQUFFO1FBQ04sUUFBUSxFQUFFLElBQUk7S0FDZjtJQUVELEtBQUssRUFBRSxTQUFTO0lBRWhCLE1BQU0sRUFBRSxNQUFNO0lBQ2QsOEJBQThCO0NBQy9CO0FBRVksWUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vbG9nXCI6IFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9ob3QvbG9nLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90IHN5bmMgXlxcXFwuXFxcXC9sb2ckXCI7IiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcidcblxuZnVuY3Rpb24gcGxheWVyQW5pbWF0aW9uKHNjZW5lOiBQaGFzZXIuU2NlbmUpIHtcbiAgc2NlbmUuYW5pbXMuY3JlYXRlKHtcbiAgICBrZXk6ICdpZGxlJyxcbiAgICBmcmFtZXM6IHNjZW5lLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKCdwbGF5ZXJfaWRsZScsIHtcbiAgICAgIHN0YXJ0OiAwLFxuICAgICAgZW5kOiAxNSxcbiAgICB9KSxcbiAgICBmcmFtZVJhdGU6IDUsXG4gICAgcmVwZWF0OiAtMSxcbiAgfSlcblxuICBzY2VuZS5hbmltcy5jcmVhdGUoe1xuICAgIGtleTogJ3dhbGtfZG93bicsXG4gICAgZnJhbWVzOiBzY2VuZS5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycygncGxheWVyX3dhbGsnLCB7XG4gICAgICBzdGFydDogMCxcbiAgICAgIGVuZDogMyxcbiAgICB9KSxcbiAgICBmcmFtZVJhdGU6IDUsXG4gICAgcmVwZWF0OiAtMSxcbiAgfSlcblxuICBzY2VuZS5hbmltcy5jcmVhdGUoe1xuICAgIGtleTogJ3dhbGtfdXAnLFxuICAgIGZyYW1lczogc2NlbmUuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ3BsYXllcl93YWxrJywge1xuICAgICAgc3RhcnQ6IDksXG4gICAgICBlbmQ6IDExLFxuICAgIH0pLFxuICAgIGZyYW1lUmF0ZTogNSxcbiAgICByZXBlYXQ6IC0xLFxuICB9KVxuXG4gIHNjZW5lLmFuaW1zLmNyZWF0ZSh7XG4gICAga2V5OiAnd2Fsa19zaWRld2F5cycsXG4gICAgZnJhbWVzOiBzY2VuZS5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycygncGxheWVyX3dhbGsnLCB7XG4gICAgICBzdGFydDogMCxcbiAgICAgIGVuZDogMyxcbiAgICB9KSxcbiAgICBmcmFtZVJhdGU6IDUsXG4gICAgcmVwZWF0OiAtMSxcbiAgfSlcbiAgY29uc29sZS5sb2coXG4gICAgc2NlbmUuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ3BsYXllcl9hdHRhY2snLCB7XG4gICAgICBzdGFydDogMCxcbiAgICAgIGVuZDogNCxcbiAgICB9KVxuICApXG4gIGNvbnNvbGUubG9nKFxuICAgIHNjZW5lLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKCdwbGF5ZXJfYXR0YWNrJywge1xuICAgICAgc3RhcnQ6IDIsXG4gICAgICBlbmQ6IDUsXG4gICAgfSlcbiAgKVxuXG4gIHNjZW5lLmFuaW1zLmNyZWF0ZSh7XG4gICAga2V5OiAnYXR0YWNrJyxcbiAgICBmcmFtZXM6IHNjZW5lLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKCdwbGF5ZXJfYXR0YWNrJywge1xuICAgICAgZW5kOiA1LFxuICAgIH0pLFxuICAgIGZyYW1lUmF0ZTogNSxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGxheWVyQW5pbWF0aW9uXG4iLCIvL1RoaXMgZmlsZSBzZXRzIHVwIHRoZSBjb250cm9scyBmb3IgdGhlIHBsYXllclxuXG5pbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJ1xuXG5sZXQgYXR0YWNraW5nID0gZmFsc2VcbmZ1bmN0aW9uIGNvbnRyb2xzKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHBsYXllcjogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSkge1xuICBjb25zdCBjb250cm9scyA9IHNjZW5lLmlucHV0LmtleWJvYXJkLmNyZWF0ZUN1cnNvcktleXMoKVxuICBjb25zdCBib2R5ID0gcGxheWVyLmJvZHkgYXMgUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkJvZHlcblxuICAvLyBUT0RPOiBDdXQgY29udHJvbHMgb3V0IGludG8gZnVuY3Rpb24uIENMZWFuIHVwIGZ1bmN0aW9uIHdpdGggZmV3ZXIgaWYgc3RhdGVtZW50cy5cbiAgaWYgKFxuICAgICFjb250cm9scy51cC5pc0Rvd24gJiZcbiAgICAhY29udHJvbHMuZG93bi5pc0Rvd24gJiZcbiAgICAhY29udHJvbHMubGVmdC5pc0Rvd24gJiZcbiAgICAhY29udHJvbHMucmlnaHQuaXNEb3duICYmXG4gICAgIShwbGF5ZXIuYW5pbXMuaXNQbGF5aW5nICYmIHBsYXllci5hbmltcy5jdXJyZW50QW5pbT8ua2V5ID09PSAnYXR0YWNrJylcbiAgKSB7XG4gICAgcGxheWVyLmFuaW1zLnBsYXkoJ2lkbGUnLCB0cnVlKVxuICB9XG5cbiAgaWYgKGNvbnRyb2xzLnVwLmlzRG93bikge1xuICAgIGJvZHkuc2V0VmVsb2NpdHlZKC00NSlcbiAgICBwbGF5ZXIuYW5pbXMucGxheSgnd2Fsa191cCcsIHRydWUpXG4gIH0gZWxzZSBpZiAoY29udHJvbHMuZG93bi5pc0Rvd24pIHtcbiAgICBib2R5LnNldFZlbG9jaXR5WSg0NSlcbiAgICBwbGF5ZXIuYW5pbXMucGxheSgnd2Fsa19kb3duJywgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICBib2R5LnNldFZlbG9jaXR5WSgwKVxuICB9XG5cbiAgaWYgKGNvbnRyb2xzLmxlZnQuaXNEb3duKSB7XG4gICAgYm9keS5zZXRWZWxvY2l0eVgoLTQ1KVxuICAgIGlmIChjb250cm9scy5kb3duLmlzRG93bikge1xuICAgICAgcGxheWVyLmFuaW1zLnBsYXkoJ3dhbGtfZG93bicsIHRydWUpXG4gICAgfSBlbHNlIGlmIChjb250cm9scy51cC5pc0Rvd24pIHtcbiAgICAgIHBsYXllci5hbmltcy5wbGF5KCd3YWxrX3VwJywgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcGxheWVyLmZsaXBYID0gdHJ1ZVxuICAgICAgcGxheWVyLmFuaW1zLnBsYXkoJ3dhbGtfc2lkZXdheXMnLCB0cnVlKVxuICAgIH1cbiAgfSBlbHNlIGlmIChjb250cm9scy5yaWdodC5pc0Rvd24pIHtcbiAgICBib2R5LnNldFZlbG9jaXR5WCg0NSlcbiAgICBpZiAoY29udHJvbHMuZG93bi5pc0Rvd24pIHtcbiAgICAgIHBsYXllci5hbmltcy5wbGF5KCd3YWxrX2Rvd24nLCB0cnVlKVxuICAgIH0gZWxzZSBpZiAoY29udHJvbHMudXAuaXNEb3duKSB7XG4gICAgICBwbGF5ZXIuYW5pbXMucGxheSgnd2Fsa191cCcsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCd3YWxraW5nIHNpZGV3YXlzJylcbiAgICAgIHBsYXllci5mbGlwWCA9IGZhbHNlXG4gICAgICBwbGF5ZXIuYW5pbXMucGxheSgnd2Fsa19zaWRld2F5cycsIHRydWUpXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGJvZHkuc2V0VmVsb2NpdHlYKDApXG4gIH1cbiAgaWYgKGNvbnRyb2xzLnNwYWNlLmlzRG93bikge1xuICAgIGNvbnNvbGUubG9nKCdwbGF5aW5nIGF0dGFjaycpXG4gICAgYXR0YWNraW5nID0gdHJ1ZVxuICAgIHBsYXllci5hbmltcy5wbGF5KCdhdHRhY2snLCB0cnVlKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRyb2xzXG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJ1xuaW1wb3J0IGNvbnRyb2xzIGZyb20gJy4vY29udHJvbHMnXG5pbXBvcnQgcGxheWVyQW5pbWF0aW9uIGZyb20gJy4vYW5pbWF0aW9ucy9wbGF5ZXInXG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xuICBhY3RpdmU6IGZhbHNlLFxuICB2aXNpYmxlOiBmYWxzZSxcbiAga2V5OiAnR2FtZScsXG59XG5cbmV4cG9ydCBjbGFzcyBHYW1lU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xuICBwcml2YXRlIHBsYXllcjogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHNjZW5lQ29uZmlnKVxuXG4gICAgdGhpcy5wbGF5ZXIgPSBudWxsXG4gIH1cblxuICBwdWJsaWMgcHJlbG9hZCgpIHtcbiAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3BsYXllcl9pZGxlJywgJ2Fzc2V0cy9zcHJpdGVzaGVldHMvaHVtYW4vSWRsZS5wbmcnLCB7XG4gICAgICBmcmFtZVdpZHRoOiAzMixcbiAgICAgIGZyYW1lSGVpZ2h0OiAzMixcbiAgICB9KVxuICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgncGxheWVyX3dhbGsnLCAnYXNzZXRzL3Nwcml0ZXNoZWV0cy9odW1hbi9XYWxrLnBuZycsIHtcbiAgICAgIGZyYW1lV2lkdGg6IDMyLFxuICAgICAgZnJhbWVIZWlnaHQ6IDMyLFxuICAgIH0pXG4gICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KFxuICAgICAgJ3BsYXllcl9hdHRhY2snLFxuICAgICAgJ2Fzc2V0cy9zcHJpdGVzaGVldHMvaHVtYW4vQXR0YWNrLnBuZycsXG4gICAgICB7IGZyYW1lV2lkdGg6IDMyLCBmcmFtZUhlaWdodDogMzIgfVxuICAgIClcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGUoKSB7XG4gICAgdGhpcy5wbGF5ZXIgPSB0aGlzLnBoeXNpY3MuYWRkLnNwcml0ZSg0OCwgNDgsICdoZXJvJykgYXMgYW55XG4gICAgdGhpcy5wbGF5ZXIuYm9keSA9IHRoaXMucGxheWVyLmJvZHkgYXMgUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkJvZHlcbiAgICB0aGlzLnBsYXllci5zZXRTaXplKDE2LCAxNilcblxuICAgIHRoaXMuY2FtZXJhcy5tYWluLnNldEJvdW5kcygwLCAwLCAyNDAsIDI0MClcbiAgICB0aGlzLnBoeXNpY3Mud29ybGQuc2V0Qm91bmRzKDAsIDAsIDI0MCwgMjQwKVxuXG4gICAgdGhpcy5jYW1lcmFzLm1haW4uc2V0Wm9vbSg0KVxuICAgIHRoaXMuY2FtZXJhcy5tYWluLnpvb21Ubyg2KVxuICAgIHRoaXMuY2FtZXJhcy5tYWluLnN0YXJ0Rm9sbG93KHRoaXMucGxheWVyLCB0cnVlLCAwLjA1LCAwLjA1KVxuICAgIHRoaXMucGxheWVyLnNldFNjYWxlKDEpXG5cbiAgICAvLyBJbXBvcnRzIGFuaW1hdGlvbnMgZnJvbSBhbmltYXRpb25zLnRzXG4gICAgcGxheWVyQW5pbWF0aW9uKHRoaXMpXG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKCkge1xuICAgIC8vIEltcG9ydHMgZ2FtZSBjb250cm9scyBmcm9tIGNvbnRyb2xzLnRzXG4gICAgY29udHJvbHModGhpcywgdGhpcy5wbGF5ZXIpXG4gIH1cbn1cblxuY29uc3QgZ2FtZUNvbmZpZzogUGhhc2VyLlR5cGVzLkNvcmUuR2FtZUNvbmZpZyA9IHtcbiAgdGl0bGU6ICdOYWJyb2snLFxuXG4gIHR5cGU6IFBoYXNlci5BVVRPLFxuXG4gIHNjYWxlOiB7XG4gICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuICB9LFxuXG4gIHBoeXNpY3M6IHtcbiAgICBkZWZhdWx0OiAnYXJjYWRlJyxcbiAgICBhcmNhZGU6IHtcbiAgICAgIGdyYXZpdHk6IHsgeTogMCB9LFxuICAgICAgZGVidWc6IGZhbHNlLFxuICAgIH0sXG4gIH0sXG4gIHJlbmRlcjoge1xuICAgIHBpeGVsQXJ0OiB0cnVlLFxuICB9LFxuXG4gIHNjZW5lOiBHYW1lU2NlbmUsXG5cbiAgcGFyZW50OiAnZ2FtZScsXG4gIC8vIGJhY2tncm91bmRDb2xvcjogJyMwMDAwMDAnLFxufVxuXG5leHBvcnQgY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShnYW1lQ29uZmlnKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==