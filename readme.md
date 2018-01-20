### Introduction:
It predicts victory or defeat. 
Every times, after match, you can set allies, enemies and result of game. 
Thus, you teach its to predict.

However you need save and provide knowledge.

### Example: 

```javascript
class HostPrediction extends GamePredictionAbstract {
  getAlliesTotal () {
    return 5
  }
  getEnemiesTotal () {
    return 5
  }
}

const RESULT_VICTORY = true
const RESULT_DEFEAT = false

const game = new HostPrediction(knowledge)

game.setAllies([HERO_SONYA, HERO_MORALES, HERO_TYRAEL, HERO_ZULGIN, HERO_THRALL])
game.setEnemies([HERO_AURIEL, HERO_VALLA, HERO_SYLVANAS, HERO_MURADIN, HERO_JAINE])
game.match(RESULT_VICTORY)
console.log(game.isVictory()) // it save allies, enemies and result. It return true.

game.setAllies([HERO_SONYA, HERO_MORALES, HERO_MURADIN, HERO_VALLA, HERO_THRALL])
game.setEnemies([HERO_MALF, HERO_JUNKRAD, HERO_FALSTAT, HERO_TYRAEL, HERO_JAINE])
game.match(RESULT_DEFEAT) // it save allies, enemies and result. It return false.

game.setAllies([HERO_MURADIN, HERO_LIMING, HERO_HUNZO, HERO_JUNKRAD, HERO_MORALES])
game.setEnemies([HERO_SONYA, HERO_ANUBARAK, HERO_VALLA, HERO_MALF, HERO_FALSTAT])

console.log(game.isVictory())

console.log(game.getKnowledge()) //So, you can get knowledge
```
