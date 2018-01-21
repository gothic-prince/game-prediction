export default class BattleEntityInterface {
  /**
   * @return {UnitEntityInterface[]}
   */
  getAllies () {}
  /**
   * @return {UnitEntityInterface[]}
   */
  getEnemies () {}

  /**
   * @param id {number}
   * @return {UnitEntityInterface}
   */
  getAllieByID (id){}
  /**
   * @param id {number}
   * @return {UnitEntityInterface}
   */
  getEnemyByID (id){}
  /**
   * Landscape, visibility, lighting etc...
   * @return {number[]}
   */
  getOptions () {}
}
