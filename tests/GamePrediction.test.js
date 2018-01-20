import MockGamePrediction from './MockGamePrediction'

describe('GamePrediction', () => {
  const game = new MockGamePrediction()
  const TANK = 1
  const BOMBER = 2
  const ANTI_AIR_CRAFT_GUN = 3
  const ARTILLERY = 4

  describe('Tank vs Artillery', () => {
    it('should be defeat',  () => {
      game.setAllies([TANK])
      game.setEnemies([ARTILLERY])
      game.match(false)
      expect(game.isVictory()).toBe(false)
    })
  })
  describe('Antiair vs Bombers', () => {
    it('should be victory',  () => {
      game.setAllies([ANTI_AIR_CRAFT_GUN])
      game.setEnemies([BOMBER])
      game.match(true)
      expect(game.isVictory()).toBe(true)
    })
  })
  describe('Antiair vs Tanks', () => {
    it('should be victory',  () => {
      game.setAllies([ANTI_AIR_CRAFT_GUN])
      game.setEnemies([TANK])
      game.match(true)
      expect(game.isVictory()).toBe(true)
    })
  })
  describe('check: Tanks vs Artillery', () => {
    it('should be defeat',  () => {
      game.setAllies([TANK])
      game.setEnemies([ARTILLERY])
      expect(game.isVictory()).toBe(false)
    })
  })
  describe('check: Antiair vs Bombers', () => {
    it('should be victory',  () => {
      game.setAllies([ANTI_AIR_CRAFT_GUN])
      game.setEnemies([BOMBER])
      expect(game.isVictory()).toBe(true)
    })
  })
  describe('check: Antiair vs Tanks', () => {
    it('should be victory',  () => {
      game.setAllies([ANTI_AIR_CRAFT_GUN])
      game.setEnemies([TANK])
      expect(game.isVictory()).toBe(true)
    })
  })
})
