import BattlePredictionAbstract from '../../../src/Models/Battle/BattlePredictionAbstract';
import SimpleBattleEntityFactory from '../../../src/Factories/Battle/SimpleBattleEntityFactory';
describe('BattlePredictionAbstract', () => {
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

  const startBattles = [
    startFirstBattle,
    factory.create()
  ]
  const endBattles = [
    endFirstBattle,
    factory.create()
  ]
  const battle = new BattlePredictionAbstract(startBattles, endBattles, 3)
  it('should return 3', () => {
    expect(battle.getUnitsTotal()).toBe(3)
  })
  it('should return valid start battles', () => {
    expect(battle.getStartBattles()).toBe(startBattles)
  })
  it('should return valid end battles', () => {
    expect(battle.getEndBattles()).toBe(endBattles)
  })
  it('should return true', () => {
    expect(battle.getEndBattles() !== battle.getStartBattles()).toBe(true)
  })
  describe('Pattern first battle', () => {
    const trainEntity = battle.getPattern()[0]
    it('should has length 6', () => {
      expect(trainEntity.input.length).toBe(6)
    })
    it('should has length 6', () => {
      expect(trainEntity.output.length).toBe(6)
    })
    describe('Start', () => {
      it('should has length 3', () => {
        expect(trainEntity.input[0]).toBe(3)
      })
      it('should has length 1', () => {
        expect(trainEntity.input[1]).toBe(1)
      })
      it('should has length 5', () => {
        expect(trainEntity.input[2]).toBe(5)
      })
      it('should has length 2', () => {
        expect(trainEntity.input[3]).toBe(2)
      })
      it('should has length 0', () => {
        expect(trainEntity.input[4]).toBe(0)
      })
      it('should has length 1', () => {
        expect(trainEntity.input[5]).toBe(1)
      })
    })
    describe('End', () => {
      it('should has length 2', () => {
        expect(trainEntity.output[0]).toBe(0.6666666666666667)
      })
      it('should has length 0', () => {
        expect(trainEntity.output[1]).toBe(0)
      })
      it('should has length 4', () => {
        expect(trainEntity.output[2]).toBe(.8)
      })
      it('should has length 1', () => {
        expect(trainEntity.output[3]).toBe(.5)
      })
      it('should has length 0', () => {
        expect(trainEntity.output[4]).toBe(0)
      })
      it('should has length 0', () => {
        expect(trainEntity.output[5]).toBe(0)
      })
    })
  })

   describe('Pattern first battle (opposite)', () => {
    const trainEntity = battle.getPattern()[1]
    it('should has length 6', () => {
      expect(trainEntity.input.length).toBe(6)
    })
    it('should has length 6', () => {
      expect(trainEntity.output.length).toBe(6)
    })
    describe('Start', () => {
      it('should has length 2', () => {
        expect(trainEntity.input[0]).toBe(2)
      })
      it('should has length 0', () => {
        expect(trainEntity.input[1]).toBe(0)
      })
      it('should has length 1', () => {
        expect(trainEntity.input[2]).toBe(1)
      })
      it('should has length 3', () => {
        expect(trainEntity.input[3]).toBe(3)
      })
      it('should has length 1', () => {
        expect(trainEntity.input[4]).toBe(1)
      })
      it('should has length 5', () => {
        expect(trainEntity.input[5]).toBe(5)
      })
    })
    describe('End', () => {
      it('should has length 1', () => {
        expect(trainEntity.output[0]).toBe(.5)
      })
      it('should has length 0', () => {
        expect(trainEntity.output[1]).toBe(0)
      })
      it('should has length 0', () => {
        expect(trainEntity.output[2]).toBe(0)
      })
      it('should has length 2', () => {
        expect(trainEntity.output[3]).toBe(0.6666666666666667)
      })
      it('should has length 0', () => {
        expect(trainEntity.output[4]).toBe(0)
      })
      it('should has length 4', () => {
        expect(trainEntity.output[5]).toBe(.8)
      })
    })
  })
})
