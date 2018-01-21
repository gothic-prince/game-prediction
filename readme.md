### Introduction:
It predicts losing units. 
Every times, after battle, you can set allies, enemies and lost units. 
Thus, you teach its to predict.

However you need save and provide knowledge.
### Notice:
It never give accurate information about lost units. 
### Example: 

```javascript
  const TANK = 1
  const BOMBER = 2
  const ARTILLERY = 3

  const factory = new SimpleBattleEntityFactory([TANK,BOMBER,ARTILLERY])

  const startFirstBattle = factory.create()
  // Start battle
  // Allies: 3 tanks, 1 bombers and 5 artilleries
  startFirstBattle.getAllieByID(TANK).setDefaultTotal(3)
  startFirstBattle.getAllieByID(BOMBER).setDefaultTotal(1)
  startFirstBattle.getAllieByID(ARTILLERY).setDefaultTotal(5)
  // Enemies: 2 tanks, 0 bombers and 1 artillery
  startFirstBattle.getEnemyByID(TANK).setDefaultTotal(2)
  startFirstBattle.getEnemyByID(BOMBER).setDefaultTotal(0)
  startFirstBattle.getEnemyByID(ARTILLERY).setDefaultTotal(1)

  const endFirstBattle = factory.create()
  // After battle, teams have lost units:
  // Allies: 1 tank, 1 bomber and 1 artillery
  endFirstBattle.getAllieByID(TANK).setDefaultTotal(2)
  endFirstBattle.getAllieByID(BOMBER).setDefaultTotal(0)
  endFirstBattle.getAllieByID(ARTILLERY).setDefaultTotal(4)
  // Enemies: 1 tank and 1 artillery
  endFirstBattle.getEnemyByID(TANK).setDefaultTotal(1)
  endFirstBattle.getEnemyByID(BOMBER).setDefaultTotal(0)
  endFirstBattle.getEnemyByID(ARTILLERY).setDefaultTotal(0)

  const battle = new BattlePrediction(
    [], // provide knowledge (before battle)
    [], // provode knowledge (after battle)
    3   // kind units total. So, we have only tank, bomber and artillery
  )
  battle.trainBattle(startFirstBattle, endFirstBattle)

  const analyzedBattle = battle.analyzeBattle(startFirstBattle)
  console.log(analyzedBattle)
  // accuracy: +- 1
  // {"allies": [{"id": 1, "total": 2}, {"id": 2, "total": 0}, {"id": 3, "total": 3}], "enemies": [{"id": 1, "total": 1}, {"id": 2, "total": 0}, {"id": 3, "total": 1}]}
```
