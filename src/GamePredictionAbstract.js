import {
  Architect,
  Trainer
} from 'synaptic'
import GamePredictionInterface from './GamePredictionInterface'
export default class GamePredictionAbstract extends GamePredictionInterface {
  /**
   * @abstract
   * @return {number}
   */
  getAlliesTotal () {
    throw new Error('Method "getAlliesTotal" should be defined')
  }
  /**
   * @abstract
   * @return {number}
   */
  getEnemiesTotal () {
    throw new Error('Method "getAlliesTotal" should be defined')
  }

  /**
   * @param knowledge
   */
  constructor(knowledge = []) {
    super()
    this.knowledge = knowledge
    this.network = new Architect.Perceptron(
      this.getAlliesTotal() + this.getEnemiesTotal(),
      this.getAlliesTotal() + this.getEnemiesTotal(),
      1
    )
    this.trainer = new Trainer(this.getNetwork())
    this.alliesNumbers = []
    this.enemiesNumbers = []
  }
  /**
   * @protected
   * @return {number[]}
   */
  getAllies () {
    return this.alliesNumbers
  }
  /**
   * @protected
   * @return {number[]}
   */
  getEnemies () {
    return this.enemiesNumbers
  }
  /**
   * @protected
   * @return {Trainer}
   */
  getTrainer () {
    return this.trainer
  }
  /**
   * @protected
   * @return {Network}
   */
  getNetwork () {
    return this.network
  }
  /**
   * @param allies {number[]}
   */
  setAllies (allies) {
    if (allies.length !== this.getAlliesTotal()) {
      throw new Error(`Allies should consists ${this.getAlliesTotal()} players.`)
    }
    this.alliesNumbers = allies
  }
  /**
   * @param enemies {number[]}
   */
  setEnemies (enemies) {
    if (enemies.length !== this.getEnemiesTotal()) {
      throw new Error(`Enemies should consists ${this.getAlliesTotal()} players.`)
    }
    this.enemiesNumbers = enemies
  }

  /**
   * @return {number[]}
   */
  getKnowledge () {
    return this.knowledge
  }

  /**
   * @protected
   * @return {Array}
   */
  getTrainerSet () {
    return this.knowledge.map((data) => {
      return {
        input: data.slice(0, -1),
        output: data.slice(-1)
      }
    })
  }
  /**
   * @param result {boolean}
   */
  match(result) {
    this.knowledge.push(this.getAllies().concat(this.getEnemies()).concat(Number(result)))
    this.getTrainer().train(this.getTrainerSet(), this.getTrainerOptions())
  }

  /**
   * @protected
   */
  getTrainerOptions () {
    return {}
  }
  /**
   * @return {boolean}
   */
  isVictory () {
    const value = (
      this.getNetwork()
      .activate(this.getAllies()
      .concat(this.getEnemies()))
    )
    const fullInt = Math.round(value)
    return (fullInt === 1)
  }
}
