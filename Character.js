export class Character {
  constructor(charName, lifePoints, attackPoints, defensePoints){
    this.charName = charName
    this.lifePoints = lifePoints
    this.attackPoints = attackPoints
    this.defensePoints = defensePoints
  }

  attacks(target){
    console.log(`${charName} recebeu um ataque de ${this.attack} pontos`)
    const newLife = this.defense - this.attack
    this.life -= newLife
    return this
  }
}