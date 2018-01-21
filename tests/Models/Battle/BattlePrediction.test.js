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
  battle.training()
  const analyzeBattle = battle.analyzeBattle(startFirstBattle)

  it('should return 2', () => {
    expect(analyzeBattle.getAllieByID(TANK).getTotal()).toBe(2)
  })
  it('should return 0 or 1', () => {
    expect(
      analyzeBattle.getAllieByID(BOMBER).getTotal() === 0 ||
      analyzeBattle.getAllieByID(BOMBER).getTotal() === 1
    ).toBe(true)
  })
  it('should return 3 or 4', () => {
    expect(
      analyzeBattle.getAllieByID(ARTILLERY).getTotal() === 4 ||
      analyzeBattle.getAllieByID(ARTILLERY).getTotal() === 3
    ).toBe(true)
  })

  it('should return 1', () => {
    expect(analyzeBattle.getEnemyByID(TANK).getTotal()).toBe(1)
  })
  it('should return 0 or 1', () => {
    expect(
      analyzeBattle.getEnemyByID(BOMBER).getTotal() === 0 ||
      analyzeBattle.getEnemyByID(BOMBER).getTotal() === 1
    ).toBe(true)
  })
  it('should return 0 or 1', () => {
    expect(
      analyzeBattle.getEnemyByID(ARTILLERY).getTotal() === 0 ||
      analyzeBattle.getEnemyByID(ARTILLERY).getTotal() === 1
    ).toBe(true)
  })
})
