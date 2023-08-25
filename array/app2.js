const array1 = ['abc', 'lmn', 'xyz', 'pqr']
const array2 = ['jkl', 'def']

//console.log(array1[1][2])

// One ways
// const allNames = array1.concat(array2)
// console.log(allNames)
// console.log(array1)
// console.log(array2)

// Second way: Spread Operator
// const allNamesSO = [...array1, ...array2]
// // [ 'abc', 'lmn', 'xyz', 'pqr', 'jkl', 'def' ]
// console.log(allNamesSO)

// const numbers = [[7, 3, 4, 2],[5, 6, 8, 4,[8, 9], 7, 3]]
// const newArray = numbers.flat(Infinity)// depth = 1, 2
// console.log(newArray)

// To check whether it is array or not
//console.log(Array.isArray('ABC')) // FALSE

// Build an array of characters out of String = PRODEVANS
//console.log(Array.from('PRODEVANS'))
/*
[
  'P', 'R', 'O',
  'D', 'E', 'V',
  'A', 'N', 'S'
]
*/

// Build an array out of the Object
//console.log(Array.from({name: 'PRODEVANS'})) // Interesting // []


let score1 = 100
let score2 = 500
let score3 = 400

console.log(Array.of(score1, score2, score3)) // [ 100, 500, 400 ]
