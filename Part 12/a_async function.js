// Asynchronus Function

async function graps(){
    // Though it's empty but still return Promise: fulfilled
    // Asynchronus function means it will return Promise by default!
}

async function greet(){
    throw "Some random error"  //this throw an error, Promise: rejected
    console.log("Hello")
}
greet()
 .then((result)=>{
    console.log("Sucessfully Executed",result)
 })
 .catch((error)=>{
    console.log("Failed the Execution:",error)
 })

// we can assign async to arrow function also
let demo = async ()=>{
    return 5;
}


//  *** Await keyword ***

function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{    //to make it asynchronus we will use setTimeout
            let num=Math.floor(Math.random()*10)+1
            console.log(num)
            resolve()  //need to write resolve otherwise won't resolve after first excution and show pending
        },1000)  
    })
}

async function call(){  //await keyword works only under async, that's y we used async here!
    await getNum()
    await getNum()
    await getNum()
    getNum()
}


// *** Now let's move on that "Colour Changing" code, which we had started from callback hell! ***
let h1=document.querySelector("h1")

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        let num=Math.floor(Math.random()*10)+1
        if(num<3){
            reject("Promise rejected")  
        }
        setTimeout(()=>{
            h1.style.color=color
            resolve("color changed")
            console.log(color)
        },delay)
    })
}

async function change(){
    await changeColor("red",1000)
    await changeColor("yellow",1000)
    await changeColor("blue",1000)
    await changeColor("green",1000)
    changeColor("pink",1000)

    let a=5          //because of reject function above, if it reject for rndm number(<3), between any color execution, further this sum execution will also stop
    console.log(a)    //but this sum execution is not at all related/depended in above colour function, so solve issue we use "try and catch"
    console.log("Sum with 3 is:",a+3)
}
change()

// So, here we come up with little updation, using {try and catch}, to prevent any problem coz of first program, to excution in second program 
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
