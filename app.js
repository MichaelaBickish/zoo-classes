import Alligator from './models/alligator.js'
import Butterfly from './models/butterfly.js'
import Cougar from './models/cougar.js'




let gators = {
    Ally: new Alligator ('Ally', 'Female', 4, 230, 8, 'Florida'),
    Julio: new Alligator ('Julio', 'Male', 6, 410, 10, 'Florida')
}
let Shelly = new Butterfly ('Shelly', 'Female', 'Monarch', 1)
let Arnold = new Cougar ('Arnold', 'male', 3, 8)








gators.Ally.eat('meats')
Shelly.eat('flower bloom')