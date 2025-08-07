// Map function works similar as forEach function, but later it creates new array and stored all called elements in it
// It will create of same size of previous array
let arr=[2,3,4,5,6,7,8,9]
let double = arr.map((num)=>{
    console.log(num*num) // or return
})
// and if no value is passed in function inside the map then it will print undefined.
// as it should be of same size of previpus array, therefore [undefined, undefined, undefined,....]
let double = arr.map((num)=>{})

// let's see working of Map with Array-object
let students =[
    {
        name:'Akansha',
        marks: 89
    },
    {
        name:'Amit',
        marks: 45
    },
    {
        name:'Saurav',
        marks: 68
    },
    {
        name:'Naina',
        marks: 45
    }
]
let studentsName = students.map((get)=>{
    return get.name;
})
console.log(studentsName); //it will return array of names

//Filter Function 
// It will filter out and print the function if it's satisfying the given condition
let brr=[90,45,73,62];
let filt=brr.filter((element)=>{
    return element%2==0 //if the elements present in array satisfies the given condition
    // then filter function will filter out and returns seprate array of filtered elements
})
