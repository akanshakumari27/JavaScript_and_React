// Promise Helps us to pevent from Call-Back Hell
// Promise Object represents the 'resolve' or 'reject' of an Asynchronus operations and results its Value.

// as Promise is Object, therfore it will have it's Methods/Properties too
// 2 popular Methods, "then()" and "catch()"
// then(), if Promise fullfilled and want to go for further execution after fullfilled
// catch(), if Promise rejected(error) and then go for further excution after rejection

function savetoDB(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed > 4){
            resolve("Good Conection")
        }else{
            reject("Bad Conection")
        }
    })
}
savetoDB("Apple")
   .then(()=>{
       console.log("Sucessfully Executed Data 1")
       return savetoDB("Banana")  //if 1 sucesfully excuted, will call 2 by then(), other wise .catch()
    })
    .then(()=>{
        console.log("Sucessfully Executed Data 2")
        return savetoDB("Guava") //if 2 sucesfully excuted, will call 3 by then(), other wise .catch()
    })
    .then(()=>{
        console.log("Sucessfully Executed Data 3")
    })
    .catch(()=>{
       console.log("Unsucesfull")
    })

// Better Version of same problem, but better solution! (Actually both are same Codes: here just added result for console window, nothing much)
// Known as Promise chaining
// As in try-catch; there Multiple Try and Single Catch Available, simillarly Mutiple '.then' and single '.catch'
savetoDB("Apple")
   .then((result)=>{
       console.log("Sucessfully Executed Data 1")
       console.log("Result is :", result)  // result-> "Good Conection" or "Bad Conection", which is mentioned above as resolve() and reject()
       return savetoDB("Banana")  //if 1 sucesfully excuted, will call 2 by then(), other wise .catch()
    })
    .then((result)=>{
        console.log("Sucessfully Executed Data 2")
        console.log("Result is :", result)
        return savetoDB("Guava") //if 2 sucesfully excuted, will call 3 by then(), other wise .catch()
    })
    .then((result)=>{
        console.log("Sucessfully Executed Data 3")
        console.log("Result is :", result)
    })
    .catch((error)=>{
       console.log("Unsucesfull")
       console.log("Result is :", error) // error->reject
    })



// Now doing the color problem solved above with help of Promise
let h1=document.querySelector("h1")

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color
            resolve("color changed")  //we haven't created reject function, as no chance of being getting reject in color change
        },delay)
    })
}
changeColor("red",1000)
 .then(()=>{
    console.log("Red updated")
    return changeColor("yellow",1000) //if this become sucessfull then proceed for next .then()
 })
 .then(()=>{
    console.log("Yellow updated")
    return changeColor("blue",1000)
 })
 .then(()=>{
    console.log("Blue updated")
    return changeColor("orange",1000)
 })
 .then(()=>{
    console.log("Orange updated")
 })
 // No catch() as no chnace of being geting rejected
