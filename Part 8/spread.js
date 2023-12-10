Math
Math.min(4,2,7,9,2,3,6)

// but for an Array
let arr=[2,4,8,5,7]
Math.min(arr[1],arr[2],arr[3],arr[4],arr[5])  //this could be very lengthy process so

 // Spread Method
Math.min(...arr) // by writing three dots + name of an array can minimize work known as Spread Method

console.log(arr) // it will display in array
console.log(...arr)  // it will invidually display all elements not in array without []

console.log("Akansha")
console.log(..."Akansha") // Indvidually displays all character


// Spread with array or string literals(creating different array and storing all elements in it)
let arr1=[2,3,5,7]
let arr2=[...arr1]  // remember [...___]
console.log(arr2)  // similar as array
arr2.push(6)       // we can indvidually perform functions in indvidual arrays
console.log(arr2)
console.log(arr1)  // as they both arrays stored in different locations, output of arr nd arr2 will be different because we performing performance in inviduals

let str="Akansha Kumari"
let str2= [...str]   // remeber [...___] to get result in array
console.log(str2)    //  [ "A", "k", "a", "n", "s", "h", "a", " ", "K", "u", … ]

let char=[..."yellow"]
// char

let odd=[1,3,5,7]
let even=[2,4,6,8]
let total=[...odd,...even]  // combing 2 arrays


// Spread with Object Literals(key-value pairs)
const info={
    id:"vomesh",
    password:"vomesh456@"
}

let info2={...info, name:"vomesh kumar", country:"India"} // storing and adding more info in new object literal info2

// Displaying array through Object literals
// but object literals required Key-Value pairs, therfor index number will become it's key
let drr=[2,5,8,3]
let obj1={...drr}

// for String
let objt2={..."Akansha"} // key->index number, value->characters