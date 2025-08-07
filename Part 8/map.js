// Map function works similar as forEach function, but later it creates new array and stored all called elements in it
// It will create of same size of previous array, and if no value is passed in function inside map then it will print undefined
let arr=[2,3,4,5,6,7,8,9]
let double = arr.map((num)=>{
    console.log(num*num) // or return
})

//Filter Function 
// It will filter out and print the function if it's satisfying the given condition
let brr=[90,45,73,62];
let filt=brr.filter((element)=>{
    if(element%2==0){
        console.log(element)
    }
    // OR // return element%2==0;
})
