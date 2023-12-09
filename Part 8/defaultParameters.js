// Default Parameters

//ther's 2 ways of defining function
// First
let sam=function(a,b=3){  //if user give value to a and b both then b=3 will not be consider otherwise b=3.
    return a+b;           
}
// Second
function sam(a,b=3){
    return a+b;
}

// BUT
let sam=function(a=3,b){} // Wrong because
// if sam(2),  [a=2, b=still undefined]
