import Event from '../utils/event'
class GameModel {
    constructor() {
        this.stage = ''
        this.stageChange = new Event(this)
    }
    setStage(stage) {
        this.stage = stage
        this.stageChange.notify({
            stage: stage
        })
    }
    getStage() {
        return this.stage
    }
}

export default new GameModel()