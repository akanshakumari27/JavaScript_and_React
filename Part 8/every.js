// "every function"
// It will Return TRUE untill an unless all elements satisfying it as true, otherwise it will return false, same as "AND Operator"
[2,4,6,8].every((ele)=>{ return ele%2==0})// OR console.log() // TRUE


// "some function"
// It's simillar like evey function but works as "OR Operator"
[2,3,5,7,9].some((ele)=>{return ele%2!=0}) // TRUE


// "reduce function  // also known as "reducer function""
// It's also return single ouput but perfomance performed under themselves.
// arr.reduce(reducer function with 2 variables(accumulator,element))
let arr=[2,4,5,8,9]
arr.reduce((ac,el)=> { 
    // console.log(ac) // to check step wise steps
    return ac+el}) // sum ~ 28
console.log(arr)
// Firstly accumulator will have 0 and element will have 1st varibale, performance will go between them and result stored in accumulator 
// and further again process goes on with 2nd, 3rd.. variables, final result will store in accumulator