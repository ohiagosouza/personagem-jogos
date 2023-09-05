const Character = require("./Character")

class Warrior extends Character {
  constructor(name, lifePoints, attackPoints, defensePoints, shieldPoints){
    super(name, lifePoints, attackPoints, defensePoints)
    this.shieldPoints = shieldPoints
    this.stance = true
  }

  attack(target) {
    if(this.stance === true) {
      super.attack(target)
    } else {
      return `Não é possível atacar em modo defesa`
    }
  }

  switchStance() {
    if(this.stance === true) {
      this.stance = false
      this.defensePoints += this.shieldPoints
    } else {
      this.stance = true
      this.defensePoints -= this.shieldPoints
    }
  }
}

module.exports = Warrior