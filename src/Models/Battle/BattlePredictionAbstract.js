import BattlePredictionInterface from './BattlePredictionInterface'
import TrainingSet from '../../Entities/TrainingSet/TrainingSet';
export default class BattlePredictionAbstract extends BattlePredictionInterface {
  /**
   * @param startBattles {BattleEntityInterface[]}
   * @param endBattles {BattleEntityInterface[]}
   * @param kindUnitsTotal {number}
   */
  constructor(startBattles, endBattles, kindUnitsTotal) {
    super()
    /**
     * @type {BattleEntityInterface[]}
     * @private
     */
    this._startBattles = startBattles
    /**
     * @type {BattleEntityInterface[]}
     * @private
     */
    this._endBattles = endBattles
    /**
     * @type {number}
     * @private
     */
    this._kindUnitsTotal = kindUnitsTotal
  }
  getUnitsTotal () {
    return this._kindUnitsTotal
  }
  /**
   * @return {BattleEntityInterface[]}
   */
  getStartBattles () {
    return this._startBattles
  }
  /**
   * @return {BattleEntityInterface[]}
   */
  getEndBattles () {
    return this._endBattles
  }

  /**
   * @param spawnedUnits {number[]}
   * @param lostUnits {number[]}
   * @return {number[]}
   */
  toPercents (spawnedUnits, lostUnits) {
    return spawnedUnits.map((spawnedTotal, index) => {
      const listTotal = lostUnits[index]
      if (listTotal === 0 || spawnedTotal === 0) {
        return 0
      }
      return (listTotal * 100 / spawnedTotal) / 100
    })
  }
  /**
   * @return {TrainingSet[]}
   */
  getPattern () {
    const trainingSet = []
    this.getStartBattles().map((startBattle, index) => {
      const endBattle = this.getEndBattles()[index]
      trainingSet.push(
        new TrainingSet(
          startBattle.alliesToArray().concat(startBattle.enemiesToArray()),
          this.toPercents(
            startBattle.alliesToArray().concat(startBattle.enemiesToArray()),
            endBattle.alliesToArray().concat(endBattle.enemiesToArray())
          )
        )
      )
      trainingSet.push(
        new TrainingSet(
          startBattle.enemiesToArray().concat(startBattle.alliesToArray()),
          this.toPercents(
            startBattle.enemiesToArray().concat(startBattle.alliesToArray()),
            endBattle.enemiesToArray().concat(endBattle.alliesToArray())
          )
        )
      )
    })
    return trainingSet
  }
  /**
   * @protected
   * @param startBattles {BattleEntityInterface}
   * @param endBattles {BattleEntityInterface}
   */
  addBattle (startBattles, endBattles) {
    this._startBattles.push(startBattles)
    this._endBattles.push(endBattles)
  }
  /**
   * @param startBattles {BattleEntityInterface}
   * @param endBattles {BattleEntityInterface}
   */
  trainBattle (startBattles, endBattles) {
    throw new Error('Method "trainBattle" should be defined')
  }
  /**
   * @param battle {BattleEntityInterface}
   * @return {BattleEntityInterface}
   */
  analyzeBattle (battle) {
    throw new Error('Method "analyze" should be defined')
  }
  /**
   * @param startBattles {BattleEntityInterface}
   * @return {BattleEntityInterface}
   */
  similarBattle (startBattles) {
    throw new Error('Method "similarBattle" should be defined')
  }
}
