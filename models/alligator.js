
export default class Alligator {
    constructor (name, gender, age, weight, bodyLength, origin){
        this.name = name,
        this.gender = gender,
        this.age = age,
        this.weight = weight,
        this.bodyLength = bodyLength,
        this.origin = origin
   }

   eat(food) {
    console.log(`Chomp chomp all the ${food}ies.`)
    } 
}


