import {Architect, Trainer} from 'synaptic'
import BattlePredictionAbstract from './BattlePredictionAbstract'
import UnitEntity from '../../Entities/Units/UnitEntity';
import BattleEntity from '../../Entities/Battle/BattleEntity';
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
    this._hopfield = null
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
    /**
     * @type {boolean}
     * @private
     */
    this._trained = false
  }

  /**
   * @return {boolean}
   */
  isTrained () {
    return this._trained
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
  training () {
    this.getTrainer().train(this.getPattern())
  }
  /**
   * @param startBattles {BattleEntityInterface}
   * @param endBattles {BattleEntityInterface}
   */
  trainBattle (startBattles, endBattles) {
    this.addBattle(startBattles, endBattles)
    this.training()
  }
  /**
   * @param battle {BattleEntityInterface}
   * @return {BattleEntityInterface}
   */
  analyzeBattle (battle) {
    if (this.isTrained() === false) {
      this.training()
    }
    const percents = this.getNetwork().activate(battle.alliesToArray().concat(battle.enemiesToArray()))
    const allies = battle.getAllies().map((allie, index) => {
      return new UnitEntity(allie.getID(), Math.round(allie.getTotal() * percents[index]))
    })
    const enemies = battle.getEnemies().map((allie, index) => {
      return new UnitEntity(allie.getID(), Math.round(allie.getTotal() * percents[index]))
    })
    return new BattleEntity(allies, enemies)
  }
}
