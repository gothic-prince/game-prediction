import BattlePrediction from '../../../src/Models/Battle/BattlePrediction';
import SimpleBattleEntityFactory from '../../../src/Factories/Battle/SimpleBattleEntityFactory';
describe('BattlePrediction', () => {
  const TANK = 1
  const BOMBER = 2
  const ARTILLERY = 3

  const factory = new SimpleBattleEntityFactory([TANK,BOMBER,ARTILLERY])

  const startFirstBattle = factory.create()

  startFirstBattle.getAllieByID(TANK).setDefaultTotal(3)
  startFirstBattle.getAllieByID(BOMBER).setDefaultTotal(1)
  startFirstBattle.getAllieByID(ARTILLERY).setDefaultTotal(5)

  startFirstBattle.getEnemyByID(TANK).setDefaultTotal(2)
  startFirstBattle.getEnemyByID(BOMBER).setDefaultTotal(0)
  startFirstBattle.getEnemyByID(ARTILLERY).setDefaultTotal(1)

  const endFirstBattle = factory.create()

  endFirstBattle.getAllieByID(TANK).setDefaultTotal(2)
  endFirstBattle.getAllieByID(BOMBER).setDefaultTotal(0)
  endFirstBattle.getAllieByID(ARTILLERY).setDefaultTotal(4)

  endFirstBattle.getEnemyByID(TANK).setDefaultTotal(1)
  endFirstBattle.getEnemyByID(BOMBER).setDefaultTotal(0)
  endFirstBattle.getEnemyByID(ARTILLERY).setDefaultTotal(0)

  const battle = new BattlePrediction([], [], 3)
  battle.trainBattle(startFirstBattle, endFirstBattle)
  it('analyzeBattle', () => {
    expect(battle.analyzeBattle(startFirstBattle)).toBe(true)
  })
})
