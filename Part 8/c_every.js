// Every And Some

// "every function"
// It will Return TRUE untill an unless all elements satisfying the given condition, else it will return false, same as "AND Operator"
[2,4,6,8].every((ele)=>{return ele%2==0})// OR console.log() // TRUE


// "some function"
// It's simillar like evey function but works as "OR Operator"
[2,3,5,7,9].some((ele)=>{return ele%2!=0}) // TRUE


// "reduce function  // also known as "reducer function""
// It returns single value ouput and operations is performed under themselves.
// arr.reduce(reducer function with 2 variables(accumulator,element))
let arr=[2,4,5,8,9]
arr.reduce((ac,el)=> { 
    // console.log(ac) // to check step wise steps
    return ac+el}) // sum ~ 28
console.log(arr)
// Firstly accumulator will have 0 and element will have 1st varibale, performance will go between them and result stored in accumulator 
// and further again process goes on with 2nd, 3rd.. variables, final result will store in accumulator

// Largest number in Array by Loop
let brr=[23,65,78,92]
let maxi=-1;
for(let i=0;i<=brr.length;i++){
    if(brr[i]>maxi){
        maxi=brr[i];
    }
}
console.log(maxi);

//Largest number in array by Reduce Function
let crr=[23,65,78,92]
let plug=crr.reduce((ac,el)=>{
    if(ac>el){
        return ac;
    }else{
        return el;
    }
})
console.log(plug)


// minimum number in array with reduce plus function
let num=[23,45,67,24,31,90,32,12]
function getmin(num){  // by writing under the function we can find min of any function by, getmin([,,,]) by taking inputs
    let plug=num.reduce((ac,el)=>{
        if(el>ac){
            return ac;
        }else{
            return el;
        }
    })
}
