import gameView from './view'
import gameModel from './model'

class GameController {
    constructor() {
        this.gameView = gameView
        this.gameModel = gameModel
        this.gameModel.stageChange.attach((sender, args) => {
            const stage = args.stage;
            switch (stage) {
                case 'game-over':
                    this.gameView.showGameOverPage()
                    break
                case 'game':
                    this.gameView.showGamePage()
                    break
                default:
                    break;
            }
        })
    }

    initPages() {
        // controller 负责页面切换
        const gamePageCallbacks = {
            showGameOverPage: () => {
                this.gameModel.setStage('game-over')
            }
        }
        const gameOverPageCallbacks = {
            gameRestart: () => {
                this.gameModel.setStage('game')
            }
        }
        this.gameView.initGamePage(gamePageCallbacks)
        this.gameView.initGameOverPage(gameOverPageCallbacks)
    }
}

export default new GameController()