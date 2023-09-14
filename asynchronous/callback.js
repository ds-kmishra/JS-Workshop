// -- callback function
let pizza
function orderPizza(callback){
    console.log('Order Pizza')

    setTimeout(() => {
        pizza = `🍕` // data
        console.log(`${pizza} is ready`)
        callback(pizza)    // call me pass me the data      
    }, 4000)
}

function pizzaReadyToEat(pizza){
    console.log(`Eat ${pizza}`)
}

orderPizza(pizzaReadyToEat)
 
console.log(`Calling a friend`)

// EXAMPLE - 2

function thing1 (callback) {
    callback()
}

function thing2 (callback) {
    callback()
}

function thing3 (callback) {
    callback()
}

// CALLBACK HELL 
thing1(() => {
    thing2 (() => {
        thing3 (
            () =>{

            }
        )
    })
})
