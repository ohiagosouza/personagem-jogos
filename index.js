const Mage = require("./Mage")
const Thief = require("./Thief")
const Warrior = require("./Warrior")


const gandalf = new Mage('Gandalf', 100, 50, 900, 50)
const lupin = new Thief('Lupin', 100, 20, 10)
const kratos = new Warrior('Kratos', 200, 500, 250, 250)


console.table({gandalf, lupin, kratos})

// kratos.switchStance()
gandalf.attack(kratos)
// lupin.attack(gandalf)
// console.table({lupin, gandalf, kratos})

kratos.attack(gandalf)
// gandalf.heal(gandalf)


console.table({lupin, gandalf, kratos})