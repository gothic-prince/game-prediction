export default class GamePredictionInterface {
  /**
   * @param allies {number[]}
   */
  setAllies (allies) {}
  /**
   * @param enemies {number[]}
   */
  setEnemies (enemies) {}
  /**
   * @param result {boolean}
   */
  match(result) {}
  /**
   * @return {boolean}
   */
  isVictory () {}
}
