// Example1:

class Person{

    static species(){
        return "Homo Sapiens"
    }

    static speciesSentence(){
        return `Humans are classified as ${this.species()}`
        // this.species === Person.species
    }

    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
        this.hasJob = false
    }
    
    // -GETTER-
    get fullName(){ // GET Property
        //return "${this.firstName}"+ " " + "${this.lastName}"
        return `${this.firstName} ${this.lastName}`
    }

    // -SETTERS-
    set fullName(name){ // Property
        name = name.split(' ')// AKSAH THAKUR
        this.firstName = name[0] // AKASH
        this.lastName = name[1] // THAKUR
    }



    setFirstName(firstName){
        this.firstName = firstName
    }

    setLastName(lastName){
        this.lastName = lastName
    }


}


const object = new Person('Rani', 'Mishra')

//object.setFullName("Akash Thakur") // Method

object.fullName = "Rashmi Mogare" // Property


console.log(object.fullName)


// const object2 = new Person('Ananya', 'Mishra')

// console.log(object)

// object.setFirstName('Akash')
// console.log(object.fullName())

// console.log(Person.species())




