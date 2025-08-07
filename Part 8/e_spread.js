Math
Math.min(4,2,7,9,2,3,6)  //it will return minimum element

// but for an Array
let arr=[2,4,8,5,7]
Math.min(arr[1],arr[2],arr[3],arr[4],arr[5])  //this could be very lengthy process so

 // Spread Method
Math.max(...arr)
Math.min(...arr) // by writing three dots + name of an array can minimize work known as Spread Method
// It will indvidually takes all elements of an array and then return min.


console.log(arr) // it will display in array
console.log(...arr)  // it will invidually display all elements, not in array without []

console.log("Akansha")
console.log(..."Akansha") // Indvidually displays all character


// Spread with Array or String literals(creating different array and storing all elements in it)
let arr1=[2,3,5,7]
let arr2=[...arr1]  // remember [...___], as arr1 spreads as indvidual characters and again get stored in [] as another array.
console.log(arr2)  // Our new Array

arr2.push(6)       // we can indvidually perform functions in both arrays
console.log(arr2)
console.log(arr1)  // as they both arrays stored in different locations, output of arr nd arr2 will be different because we performing operations in inviduals

let str="Akansha Kumari"
let str2= [...str]   // remeber [...___] to get result in array
console.log(str2)    //  [ "A", "k", "a", "n", "s", "h", "a", " ", "K", "u", … ]

let char=[..."yellow"] // ['y', 'e', 'l', 'l', 'o', 'w']

let odd=[1,3,5,7]
let even=[2,4,6,8]
let total=[...odd,...even]  // combing 2 arrays


// ## Spread with Object Literals(key-value pairs)

// Object info
const info={
    id:"vomesh",
    password:"vomesh456@"
}

// Object info2
const info2={...info, name:"vomesh kumar", country:"India"} // storing and adding more info in new object literal info2

// Coverting Array into Object
// but object literals required Key-Value pairs, therfore indexes of an array will become key for an array's values
let drr=[2,5,8,3]
let obj1={...drr} //will display as Key-value pairs

// Converting String into Object
let objt2={..."Akansha"} // key->index number, value->characters
