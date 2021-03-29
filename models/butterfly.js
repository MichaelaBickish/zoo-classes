export default class Butterfly {
    constructor (name, gender, species, age){
        this.name = name
        this.gender = gender
        this.species = species
        this.age = age
    }
    eat(food) {
        console.log(`Sip sip all the ${food}ies.`)
        } 
}