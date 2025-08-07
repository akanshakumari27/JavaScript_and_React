// Default Parameters

//ther's 2 ways of defining function
//if user give value to a and b both (like: a=2,b=9) then b=3 will not be consider and that function will be evaluated as 2 and 9.
// First
let sam=function(a,b=3){ 
    return a+b;           
}
// Second
function sam(a,b=3){
    return a+b;
}

// BUT
let sam=function(a=3,b){} // Wrong because
// if we call function with one parameter like: sam(2),  then that 2 will assign to a and b will still undefind[a=2, b=still undefined]
// and if call function with 2 parameters like: sam(2,4), it will work, but it's still wrong method of assiging value to first param.
