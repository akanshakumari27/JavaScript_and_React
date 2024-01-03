// as Promise is Object, therfor it will have it's Methods/Properties too
// 2 popular Methods, "then()" and "catch()"
// then(), if Promise fullfilled and want to go for further execution after fullfilled
// catch(), if Promise rejected(error) and then go for further excution after rejection

function callit(data){
    return new Promise((resolve,reject)=>{
        let check=Math.floor(Math.random()*10)+1
        if(check>4){
            resolve("Good Conection")
        }else{
            reject("Bad Conection")
        }
    })
}
callit("Hello Moto")
   .then(()=>{
       console.log("Sucessfully Executed Data 1")
       return callit("Hey Moto")  //if 1 sucesfully excuted, will call 2 by then(), other wise .catch()
    })
    .then(()=>{
        console.log("Sucessfully Executed Data 2")
        return callit("Hi Moto") //if 2 sucesfully excuted, will call 3 by then(), other wise .catch()
    })
    .then(()=>{
        console.log("Sucessfully Executed Data 3")
    })
    .catch(()=>{
       console.log("Unsucesfull")
    })
// Better Version of same problem, but better solution!
// Known as Promise chaining

callit("Hello Moto")
   .then((result)=>{
       console.log("Sucessfully Executed Data 1")
       console.log("Result is :", result)  // results-> resolve
       return callit("Hey Moto")  //if 1 sucesfully excuted, will call 2 by then(), other wise .catch()
    })
    .then((result)=>{
        console.log("Sucessfully Executed Data 2")
        console.log("Result is :", result)
        return callit("Hi Moto") //if 2 sucesfully excuted, will call 3 by then(), other wise .catch()
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