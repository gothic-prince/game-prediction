import BattleEntityFactoryInterface from './BattleEntityFactoryInterface';
import UnitEntity from '../../Entities/Units/UnitEntity';
import BattleEntity from '../../Entities/Battle/BattleEntity';
export default class SimpleBattleEntityFactory extends BattleEntityFactoryInterface {
  /**
   * @param IDsAllUnits {number[]}
   */
  constructor(IDsAllUnits = []) {
    super()
    /**
     * @protected
     * @type {number[]}
     */
    this.ids = IDsAllUnits
  }
  /**
   * @return {BattleEntityInterface}
   */
  create () {
    const allies = this.createUnits()
    const enemies = this.createUnits()
    const battle = new BattleEntity(allies, enemies)
    return battle
  }

  /**
   * @protected
   * @return {UnitEntityInterface[]}
   */
  createUnits () {
    return this.ids.map((id) => {
      const unit = new UnitEntity(id, 0)
      return unit
    })
  }
}