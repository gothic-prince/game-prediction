import GamePredictionAbstract from '../src/GamePredictionAbstract'
export default class MockGamePrediction extends GamePredictionAbstract {
  /**
   * @abstract
   * @return {number}
   */
  getAlliesTotal () {
    return 1
  }
  /**
   * @abstract
   * @return {number}
   */
  getEnemiesTotal () {
    return 1
  }
}
