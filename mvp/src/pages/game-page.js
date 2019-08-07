import {
    scene
} from '../scene/index'
import Cuboid from '../block/cuboid'
import Cylinder from '../block/cylinder'
import ground from '../objects/ground'

export default class GamePage {
    constructor(callbacks) {
        this.callbacks = callbacks;
    }

    init() {
        this.scene = scene;
        this.ground = ground
        this.ground.init()
        this.scene.init()
        this.addInitBlock()
        this.addGround()
        this.render()
    }

    addInitBlock() {
        const cuboid = new Cuboid(-15, 0, 0)
        const cylinder = new Cylinder(23, 0, 0)
        this.scene.instance.add(cuboid.instance)
        this.scene.instance.add(cylinder.instance)
    }

    addGround() {
        this.scene.instance.add(this.ground.instance)
    }

    render() {
        this.scene.render()
        // 为什么一直渲染？
        requestAnimationFrame(this.render.bind(this))
    }

    show() {

    }

    hide() {

    }

    restart() {
        console.log('game page restart')
    }
}