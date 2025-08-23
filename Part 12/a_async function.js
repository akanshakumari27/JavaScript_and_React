// Asynchronus Function : it always returns Promise by default
// Functions running in parallel with other functions are called asynchronous
// With asynchronous programming, JS programs can start long-running tasks, and continue running other tasks in parallel.
// But, asynchronus programmes are difficult to write and difficult to debug.
// Modern asynchronous JS methods don't use callbacks. Instead, in JS, asynchronous programming is solved using Promises.

// A Promise is just an object which represents output value in either 3 form (pending, fullfilled or rejected) from an asynchronous operation.
// All modern async operations in JS (like fetch, timers, DB calls, file reads) use Promises under the hood.

async function graps(){
    // Though it's empty but still return Promise: fulfilled
}

async function greet(){
    console.log("Hello");  //it will return Promise: fulfilled, with value 'Hello'
}

// ## Cases where promise will show Rejected ##
async function greet(){
    throw "Some random error";  //this will throw an error, (throw keyword is used to throw error), Promise: rejected
    // And because of the Error further execution will also STOP!
    console.log("Hello");
}

async function greet(){
    abc.ab();           // Error, because abc is not defined. Promise: rejected
    console.log("Helo");
}

// Using Try and Catch for defined Async Function (will give output accordingly on executed sucessfully or Not)
greet()
 .then((result)=>{
    console.log("Sucessfully Executed",result)
 })
 .catch((error)=>{
    console.log("Failed the Execution:",error)
 })

// Defining Arrow function as Async Function
let demo = async ()=>{
    return 5;
}

//  *** Await keyword ***
// Marking a function async does not make its internal code run in parallel or on another thread — JavaScript is still single-threaded.
// What happens is: The function always returns a Promise and that Promise resolves after the function finishes (or rejects if there’s an error).
// If you use await inside, the function will pause at that point, let other tasks run, and then resume when the awaited Promise settles.
// We can use await only under Async Function 

// async → makes it possible to return a Promise and run parllely all functions without blocking any.
// await → but intentionally you can pause function’s execution until the Promise is done.
// though they’re opposites in that sense, but they work together.

function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{    //to make it asynchronus we will use setTimeout
            let num=Math.floor(Math.random()*10)+1;
            console.log(num)
            resolve()  //need to write resolve otherwise won't resolve after first excution and show pending {this indicate our promise Resolved}
        },1000)  
    })
}

async function call(){  //await keyword works only under async, that's y we used async here!
    await getNum()      // this await keyword will execute first and makes remaining function wait!(this will excute first)
    await getNum()      // Now this will excute (making another remaining function wait)
    await getNum()      // simillarly this;
    getNum()
}
// If we haven't used await, it will execute all function at same single time!!

// *** Now let's move on that "Colour Changing" code, which we had started from callback hell! ***
let h1=document.querySelector("h1")

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // Random and If statemnet is just to check, what happens, if any promise get rejected at mid! (u can ignore it for only color code)
            let num=Math.floor(Math.random()*10)+1;
            if(num<3){
                reject("Promise rejected")  
            }
            // ----------------------------------------
            h1.style.color=color
            resolve("color changed")
            console.log(color)
        },delay)
    })
}

// This Colour Code Started with {Call-Back Hell} -> better Approach {Promises} -> Optimised Approach {Async and Await}
async function change(){
    await changeColor("red",1000)
    await changeColor("yellow",1000)
    await changeColor("blue",1000)
    await changeColor("green",1000)
    changeColor("pink",1000)
    
    // because of reject function above, if it reject for rndm number(<3) between any color execution, the colour change will stop
    // But it also effects the sum execution, which is not even related/depended in above colour function; This kind of Error genrally Occurs in JS
    // further this sum execution will also stop
    
    let a=5          
    console.log(a)   
    console.log("Sum with 3 is:",a+3)
}
change()

// To solve this issue we use "try and catch"
// So, here we come up with little updation, using {try and catch}, to prevent any problem becoz of first program, which prevents second program execution too
async function change(){
    try {
    await changeColor("red",1000)
    await changeColor("yellow",1000)
    await changeColor("blue",1000)
    await changeColor("green",1000)
    changeColor("pink",1000)
    } catch(error) {
        console.log(error)
        console.log("Error caught")
    }
    // if any error above, it will not effect this further excution
    let a=5          
    console.log(a)    
    console.log("Sum with 3 is:",a+3)
}
change()
