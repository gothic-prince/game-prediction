export default class BattlePredictionInterface {
  /**
   * @return {BattleEntityInterface[]}
   */
  getStartBattles () {}
  /**
   * @return {BattleEntityInterface[]}
   */
  getEndBattles () {}
  /**
   * @param startBattles {BattleEntityInterface}
   * @param endBattles {BattleEntityInterface}
   */
  trainBattle (startBattles, endBattles) {}
  /**
   * @param startBattles {BattleEntityInterface}
   * @return {BattleEntityInterface}
   */
  similarBattle (startBattles) {}
}
