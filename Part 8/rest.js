// Rest function is opposite to spread
// Allows a function to take an indefinite number of arguments and bundle them in an array

function sum(...args){   // ...args used for arguments to rest it
    for(let i=0;i<args.length;i++){
        console.log("We Got" + args[i])
    }
}
// sum(3,4,5)

function min(){
    console.log(arguments);
    console.log(arguments.length)
    //argumnets.push(1), pop, reduce, map any method we can't apply here because it's just a collection not an array
}
// min(1,2,3)  as arguments is a collection in js

// but still if we want to use arguments over array and want to apply methods on it we can do it by ...args
function sum(...args){
    return args.reduce((ac,el)=>ac+el)
}


// For Min
function min(...args){   // rest(args) helps to collect all in array
    return args.reduce((ac,el)=>{
        if(ac<el){
           return el; 
        }else{
            return ac;
        }
    })
}

function min(...rest) {
    return rest.reduce((minval, item) => minval > item ? item : minval)
}
console.log(min(987, 34, 54, 23));


function printit(msg1, msg2, msg3, ...args) {  // rest are always applied as in parameters ,msg1,msg2.. parameters
    console.log(msg1)
    console.log(msg2)
    console.log(msg3)
    console.log(...args)  // but spread not use as parameters therfor it will work as spread.
}
printit(1,2,3,4,5,6,7);