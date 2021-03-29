import Alligator from './models/alligator.js'
import Butterfly from './models/butterfly.js'
import Cougar from './models/cougar.js'
import Dingo from './models/dingo.js'
import Eel from './models/eel.js'
import Firefly from './models/firefly.js'
import Gazelle from './models/gazelle.js'





let gators = {
    Ally: new Alligator ('Ally', 'Female', 4, 230, 8, 'Florida'),
    Julio: new Alligator ('Julio', 'Male', 6, 410, 10, 'Florida')
}
let Shelly = new Butterfly ('Shelly', 'Female', 'Monarch', 1)
let Arnold = new Cougar ('Arnold', 'Male', 3, 8)
let Dino = new Dingo ('Dino', 'Male', 3, 15, 95)
let Elsie = new Eel ('Elsie', 'Female', 2, 14, true)
let Fred = new Firefly ('Fred', 'Male', 'High')
let Gerry = new Gazelle ('Gerry', 'Male', 7, 'tan', true)




gators.Ally.eat('meats')
Shelly.eat('flower bloom')
console.log(Arnold)