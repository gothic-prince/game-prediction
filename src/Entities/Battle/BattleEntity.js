import BattleEntityInterface from './BattleEntityInterface'
export default class BattleEntity extends BattleEntityInterface {
  /**
   * @param allies {UnitEntityInterface[]}
   * @param enemies {UnitEntityInterface[]}
   */
  constructor(allies = [], enemies = []) {
    super()
    /**
     * @protected
     * @type {UnitEntityInterface[]}
     */
    this.allies = allies
    /**
     * @protected
     * @type {UnitEntityInterface[]}
     */
    this.enemies = enemies
  }
  /**
   * @return {UnitEntityInterface[]}
   */
  getAllies () {
    return this.allies
  }
  /**
   * @return {UnitEntityInterface[]}
   */
  getEnemies () {
    return this.enemies
  }

  /**
   * @param id {number}
   * @return {UnitEntityInterface}
   */
  getAllieByID (id){
    return this.getAllies().find((unit) => {
      return unit.getID() === id
    }) || null
  }
  /**
   * @param id {number}
   * @return {UnitEntityInterface}
   */
  getEnemyByID (id){
    return this.getEnemies().find((unit) => {
        return unit.getID() === id
      }) || null
  }
  getOptions () {}
}
