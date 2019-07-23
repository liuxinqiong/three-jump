import * as THREE from '../libs/three'
import game from './game/game.js'
GameGlobal.ImageBitmap = function() {} // TODO: adapter 支持
window.THREE = THREE;

class Main {
    constructor() {

    }

    static init() {
        game.init()
    }
}

export default Main;