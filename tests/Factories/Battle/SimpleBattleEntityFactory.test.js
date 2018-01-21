import SimpleBattleEntityFactory from '../../../src/Factories/Battle/SimpleBattleEntityFactory';
describe('SimpleBattleEntityFactory', () => {
  const TANK = 1
  const ARTILLERY = 2
  const BOMBER = 3
  const factory = new SimpleBattleEntityFactory([TANK, ARTILLERY, BOMBER])
  const battle = factory.create()
  battle.getAllieByID(TANK).setDefaultTotal(3)
  battle.getAllieByID(ARTILLERY).setDefaultTotal(2)
  battle.getEnemyByID(BOMBER).setDefaultTotal(1)
  battle.getEnemyByID(ARTILLERY).setDefaultTotal(5)
  battle.getEnemyByID(TANK).setDefaultTotal(4)
  describe('Allies', () => {
    describe('Total', () => {
      it('should return 3', () => {
        expect(battle.getAllies().length).toBe(3)
      })
    })
    describe('Tank', () => {
      it('should return 3', () => {
        expect(battle.getAllieByID(TANK).getTotal()).toBe(3)
      })
    })
    describe('Artillery', () => {
      it('should return 2', () => {
        expect(battle.getAllieByID(ARTILLERY).getTotal()).toBe(2)
      })
    })
    describe('Bomber', () => {
      it('should return 0', () => {
        expect(battle.getAllieByID(BOMBER).getTotal()).toBe(0)
      })
    })
    describe('Pattern', () => {
      const pattern = battle.alliesToArray()
      it('should be array', () => {
        expect(pattern instanceof Array).toBe(true)
      })
      it('should has length 3', () => {
        expect(pattern.length).toBe(3)
      })
      it('should return 3', () => {
        expect(pattern[0]).toBe(3)
      })
      it('should return 2', () => {
        expect(pattern[1]).toBe(2)
      })
      it('should return 0', () => {
        expect(pattern[2]).toBe(0)
      })
    })
  })
  describe('Enemies', () => {
    describe('Total', () => {
      it('should return 3', () => {
        expect(battle.getEnemies().length).toBe(3)
      })
    })
    describe('Tank', () => {
      it('should return 4', () => {
        expect(battle.getEnemyByID(TANK).getTotal()).toBe(4)
      })
    })
    describe('Artillery', () => {
      it('should return 5', () => {
        expect(battle.getEnemyByID(ARTILLERY).getTotal()).toBe(5)
      })
    })
    describe('Bomber', () => {
      it('should return 1', () => {
        expect(battle.getEnemyByID(BOMBER).getTotal()).toBe(1)
      })
    })
    describe('Pattern', () => {
      const pattern = battle.enemiesToArray()
      it('should be array', () => {
        expect(pattern instanceof Array).toBe(true)
      })
      it('should has length 3', () => {
        expect(pattern.length).toBe(3)
      })
      it('should return 4', () => {
        expect(pattern[0]).toBe(4)
      })
      it('should return 5', () => {
        expect(pattern[1]).toBe(5)
      })
      it('should return 1', () => {
        expect(pattern[2]).toBe(1)
      })
    })
  })
})
