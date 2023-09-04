import { Character } from "./Character.js"
import { Mage } from "./Mage.js"

const harry = new Character('Harry', 500, 200, 200)
const rabicho = new Character('Rabicho', 500, 250, 250)
const dumbledoor = new Mage('Dumbledoor',10000, 50000, 40000, 10000)

// harry.attacks(rabicho)
dumbledoor.attacks('Saruman')

// console.log(harry)
// console.log(rabicho)
console.log(dumbledoor)