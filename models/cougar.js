export default class Cougar {
    constructor(name, gender, age, clawSizeInches){
      this.name = name
      this.gender = gender
      this.age = age
      this.clawSizeInches = clawSizeInches
    }
    eat(food) {
        console.log(`Chomp chomp all the ${food}ies.`)
        } 
}