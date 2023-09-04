import { Character } from "./Character.JS"

export class Thief extends Character {
  constructor(lifePoints, attackPoints, defensePoints){
    super('Thief', lifePoints, attackPoints, defensePoints)
  }

  thiefAttack(){
    this.lifePoints = this.defensePoints - (this.attackPoints * 2)
    return this
  }
}