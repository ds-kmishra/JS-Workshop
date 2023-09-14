const myArr = [0, 1, 2, 3, 6, 7, 43, 3]
const myArr1 = ["xyz", "lmn", "abc"]

//console.log(myArr1)

// Array is hetergenous in JS
const myArr2 = ["xyz", "lmn", "abc", 1, 2, 4, true]
//console.log(myArr2)

// Array Methods

//console.log(myArr.push(54))// 6 - length // [0,1,2,3,3, 54]

//console.log(myArr.pop()) // 54 - the element that have popped

// [0,1,2,3,3]

// console.log(myArr.unshift(67)); // 6 - length // [67,0,1,2,3,3]
// console.log(myArr.shift()); // 67 - the first ele removed
// console.log(myArr)

// [0, 1, 2, 3, 6, 7, 43, 3]

// console.log(myArr.includes(6)) // true
// console.log(myArr.indexOf(26)) // -1
// console.log(myArr.indexOf(3)) // 3rd index
// console.log(myArr.lastIndexOf(3)) // 7th index



// Slice and Splice

const A = [47, 46, 34, 26, 14, 13, 21]
console.log("Original Array : ", A)


const newArrSliced = A.slice(0, 3) // // Original Array is not affected 
console.log("Sliced Array : ", newArrSliced) //  [ 47, 46, 34 ]
console.log("Original Array : ", A) // [
//     47, 46, 34, 26,
//     14, 13, 21
//   ]

const newArrSpliced = A.splice(0, 3) // Original Array is affected 
console.log("Spliced Array : ", newArrSpliced) // [ 47, 46, 34 ]
console.log("Original Array : ", A) // [ 26, 14, 13, 21 ]