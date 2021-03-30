import Alligator from './models/alligator.js'
    import Butterfly from './models/butterfly.js'
    import Cougar from './models/cougar.js'
    import Dingo from './models/dingo.js'
    import Eel from './models/eel.js'
    import Firefly from './models/firefly.js'
    import Gazelle from './models/gazelle.js'
    import Hawk from './models/hawk.js'
    import Impala from './models/impala.js'
    import Jaguar from './models/jaguar.js'
    import Kangaroo from './models/kangaroo.js'
    import Leopard from './models/leopard.js'
    import MaineCoon from './models/mainecoon.js'
    import Narwhal from './models/narwhal.js'
    import Octopus from './models/octopus.js'
    import Parrot from './models/parrot.js'
    import Quail from './models/quail.js'
    import Rattlesnake from './models/rattlesnake.js'
    import Salmon from './models/salmon.js'
    import Tiger from './models/tiger.js'
    import Urchin from './models/urchin.js'
    import Vulture from './models/vulture.js'
    import Warthog from './models/warthog.js'
    import XrayFish from './models/xrayFish.js'
    import YellowFinTuna from './models/yellowfinTuna.js'
    import Zebra from './models/zebra.js'

let SaltWaterFish = []

let gators = {
    Ally: new Alligator ('Ally', 'Female', 4, 230, 8, 'Florida'),
    Julio: new Alligator ('Julio', 'Male', 6, 410, 10, 'Florida')
}
let Shelly = new Butterfly ('Shelly', 'Female', 'Monarch', 1)
let Arnold = new Cougar ('Arnold', 'Male', 3, 8)
let Dino = new Dingo ('Dino', 'Male', 3, 15, 95)
let Elsie = new Eel ('Elsie', 'Female', 2, 14, 'NW Salt Tank',true)
let Fred = new Firefly ('Fred', 'Male', 'High')
let Gerry = new Gazelle ('Gerry', 'Male', 7, 'tan', true)
let Willie = new Hawk ('Willie', 'Male', 4, 8)
let Peter = new Impala ('Peter', 'Male', 10, 'Brown')
let Jill = new Jaguar ('Jill', 4, 'Black', true)
let Kevin = new Kangaroo ('Kevin', 'Male', 8, 'Red')
let Lisa = new Leopard ('Lisa', 'Female', 3, 'Multi', true)
let Millie = new MaineCoon ('Millie', 'Female', 14, true)
let Neo = new Narwhal ('Neo', 'Male', 19, 'NW Salt Tank')
let Oreo = new Octopus ('Oreo', 1, 7, 'NW Salt Tank')
let Lolli = new Parrot ('Lolli', 'Female', 10, true)
let Cora = new Quail ('Cora', 'Female', 2, 'Striped Brown')
let Victor = new Rattlesnake ('Victor', 'Male', 20, true)
let Dimitri = new Salmon ('Dimitri', 'Male', 'NE Freshwater Tank')
let Trent = new Tiger ('Trent', 'Male', 14, 7)
let Stu = new Urchin ('Stu', 3, 1.2, 'NW Salt Tank')
let Bill = new Vulture ('Bill', 'Male', 5, 7.4)
let Trish = new Warthog ('Trish', 'Female', 130, 16)
let Phil = new XrayFish ('Phil', 2, 8, 'purple', 'NE Freshwater Tank',true)
let Kipper = new YellowFinTuna ('Kipper', 2, 20, 'NW Salt Tank')
let Xander = new Zebra ('Xander', 12, 'Male', 62)


gators.Ally.eat('meats')
Shelly.eat('flower bloom')
console.log(Arnold)