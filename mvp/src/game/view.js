import GamePage from '../pages/game-page'
import GameOverPage from '../pages/game-over-page'

class GameView {
    constructor() {

    }

    initGamePage(callbacks) {
        this.gamePage = new GamePage(callbacks)
        this.gamePage.init()
    }

    initGameOverPage(callbacks) {
        this.gameOverPage = new GameOverPage(callbacks)
        this.gameOverPage.init({
            scene: this.gamePage.scene
        })
    }

    showGameOverPage() {
        this.gamePage.hide()
        this.gameOverPage.show()
    }

    showGamePage() {
        this.gameOverPage.hide()
        this.gamePage.restart()
        this.gamePage.show()
    }

    restartGame() {
        this.gamePage.restart()
    }
}

export default new GameView()