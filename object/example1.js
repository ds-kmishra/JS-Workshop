// symbol

function getData(x, v){ // named functions
    return x
}

const user = {
    name: 'Alex',
    "full name": 'Alex Jasper',
    age: 18,
    location: 'Delhi',
    action1: function talk(){
        console.log("talking")
    },
    action2:function walk(){
        return "walking on the street"
    },
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}

user.email = "alex.jasper@prodevans.com"

user.greeting = function morningGreet(){
    console.log("Good Morning!")
}


user.specialGreet = () => {
    console.log("Happy Birthday!!!")
}



console.log(user.greeting())
console.log(user.email)

console.log(user)

//console.log(user["full name"])




//console.log(user.name)

//console.log(user.action1())
/*
    Alex
    talking
    undefined
*/

//console.log(user.action2())
/*
    Alex
    walking on the street
*/

