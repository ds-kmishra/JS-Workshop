// Example1

// const user = {}

// user.id = "9839289637"
// user.name = "rashmi"
// user.isLoggedIn = true

// console.log(user)

// Example2

// const anotherUser = {
//     email: "rashmi.mogare@prodevans.com",
//     fullName: {
//         userFullName:{
//             firstName:"Rashmi",
//             lastName:"Mogare"
//         }
//     }
// }

//console.log(anotherUser.fullName.userFullName.lastName)

// Example3
// anotherUser --> API
// const anotherUser = {
//     email: "rashmi.mogare@prodevans.com",
    
// }

// console.log(anotherUser.fullName?.userFullName.firstName)

//Example4
// const daytime ={
//     breakfast: 'oatmeal',
//     lunch: 'veg thali'
// }

// const eveningtime = {
//     evening: 'snacks',
//     dinner: 'pizza'
// }

// const backPackMeals = {...daytime, ...eveningtime}

// console.log(backPackMeals)


//Example5
// const daytime ={
//     breakfast: 'oatmeal',
//     lunch: 'veg thali'
// }

// const eveningtime = 'pizza'

// const backPackMeals = {daytime, ...eveningtime} // Spread Operator

// console.log(backPackMeals)

// Example6
// const object1 = {1: "a", 2: "b"}
// const object2 = {3: "a", 4: "b"}
// const object3 = {5: "a", 6: "b"}


// const newObject = {object1, object2, object3}
// console.log(newObject);

// // Using Spread Operator
// const brandNewObject = {...object1, ...object2, ...object3}
// console.log(brandNewObject);

//Example7
const object1 = {1: "a", 2: "b"}
const object2 = {3: "a", 4: "b"}
const object3 = {5: "a", 6: "b"}

// //---Problem
// const brandNewObject = Object.assign(object1, object2, object3)
// console.log(brandNewObject)
// //---Affect
// console.log(object1)

// Solution
const brandNewObject = Object.assign({},object1, object2, object3)
console.log(brandNewObject)

console.log(object1)
/*
Syntax: -
Object.assign(target, ...sources)
*/