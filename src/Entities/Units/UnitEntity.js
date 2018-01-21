import UnitEntityInterface from './UnitEntityInterface'
export default class UnitEntity extends UnitEntityInterface {
  constructor(id, total = 0) {
    super()
    /**
     * @protected
     * @type {number}
     */
    this.id = id
    this.setTotal(total)
  }
  /**
   * @return {number}
   */
  getID () {
    return this.id
  }
  /**
   * @return {number}
   */
  getTotal () {
    return this.total
  }
  /**
   * @param total {number}
   */
  setTotal (total) {
    this.total = total
  }
  toArray (){
    return [
      this.getID(),
      this.getTotal()
    ]
  }
}
