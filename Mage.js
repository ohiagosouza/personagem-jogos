import { Character } from "./Character.js";

export class Mage extends Character{
  constructor(charName,lifePoints, attackPoints, defensePoints, magicPoints){
    super(charName,lifePoints, attackPoints, defensePoints, magicPoints)
    this.magic = magicPoints
  }

  attacks(charName){
    const totalAttack = this.attack + this.magic
    console.log(`Ataque total de ${totalAttack}`)
    return this
  }

  restoreLife(charname){
    const restore = this.magic + this.life
  }

}
