import {Architect, Trainer} from 'synaptic'
import BattlePredictionAbstract from './BattlePredictionAbstract'
export default class BattlePrediction extends BattlePredictionAbstract {
  /**
   * @param startBattles {BattleEntityInterface[]}
   * @param endBattles {BattleEntityInterface[]}
   * @param kindUnitsTotal {number}
   */
  constructor(startBattles = [], endBattles = [], kindUnitsTotal) {
    super(startBattles, endBattles, kindUnitsTotal)
    /**
     * @type {BattleEntityInterface[]}
     * @private
     */
    this._hopfield = new Architect.Hopfield(this.getUnitsTotal() * 2)
    /**
     * @protected
     * @type {Perceptron}
     */
    this._network = new Architect.Perceptron(
      this.getUnitsTotal() * 2,
      this.getUnitsTotal() * 2,
      this.getUnitsTotal() * 2
    )
    /**
     * @protected
     * @type {Trainer}
     */
    this._trainer = new Trainer(this.getNetwork())
  }

  /**
   * @protected
   * @return {Perceptron}
   */
  getNetwork () {
    return this._network
  }
  /**
   * @protected
   * @return {Trainer}
   */
  getTrainer () {
    return this._trainer
  }
  /**
   * @protected
   * @return {Hopfield}
   */
  getHopField () {
    return this._hopfield
  }

  /**
   * @param startBattles {BattleEntityInterface}
   * @param endBattles {BattleEntityInterface}
   */
  trainBattle (startBattles, endBattles) {
    this.addBattle(startBattles, endBattles)

    // this.getHopField().learn([])
  }
  /**
   * @param startBattles {BattleEntityInterface}
   * @return {BattleEntityInterface}
   */
  similarBattle (startBattles) {
    throw new Error('Method "similarBattle" should be defined')
  }
}
