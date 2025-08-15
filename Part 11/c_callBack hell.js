// One of the Problem coz of Asynchronus Nature of js is callback hell!
// (1st) {This after every 1 sec colour will change until blue and then stop!)
let h1=document.querySelector("h1")

setTimeout(()=>{
    h1.style.color="red";
},1000)

setTimeout(()=>{
    h1.style.color="green";
},2000)

setTimeout(()=>{
    h1.style.color="blue";
},3000)

// (2nd) More Better Approach
function changeColor(color,delay){
    setTimeout(function(){
        h1.style.color=color
    },delay)
}
changeColor("red",1000)
changeColor("blue",2000)
changeColor("green",3000)  //all are independent
// But still, as js is single threaded, here we explicitly giving time after every seconds for every execution
// But if we want to run every execution after it's previous execution automatically, we need to link them together(or make them depedent)
// Bcause sometimes while, storing Big datas, we want if 1st excution failed, then don't run all further excution(making it depedent)

// (3rd)
function changeColor(color,delay,further){
    setTimeout(function(){
        h1.style.color=color
        if(further()) further() //if this function == true, then call it (means if previous function will not run, it will prevent further excution too)
    },delay)
}

changeColor("red",1000,()=>{
    changeColor("yellow",1000,()=>{
        changeColor("green",1000,()=>{
            changeColor("blue",1000) //as here the function is not present therfor no further call
        })
    })
})
// This is known as "CallBack Nesting -> CallBack Hell", when we try the JS to work as ashyncronusly!
// which become so complicated therfore to avoid this we use (promises | await | async)

// Another Example of "Call Back Hell" (callback nesting)
// Suppose we are extracting data from DataBase, and the saving of that data depends on Internet speed
function savtoDB(data,high,low){
    let checkInternet = Math.floor(Math.random()*10)+1;  //this will give internet connection 1 to 10 signal
    if(checkInternet > 4){
        high()
    }else{
        low()
    }
}
// As this function consist of one string value and 2 functions!, so we Looped and passes functions, such that it depdent on each other!

savtoDB("Akansha",()=>{  //high()1 //if function 1 become true then further 2 and 3 will run
    console.log("Data1: Good connection Data1 run sucesfully")
    savtoDB("kumari",()=>{  //high()2 ,if function 2 become true then further 3 will run
        console.log("Data2: Good connection Data2 run sucesfully")
        savtoDB("B.tec Cse",()=>{  //high()3
            console.log("Data3: Good connection Data3 run sucesfully")
        },()=>{  //low()3
            console.log("Data3: Poor Connection, failed to run Data3")
        })
    },()=>{  //low()2
        console.log("Data2: Poor Connection, failed to run Data2")
    })
},()=>{  //low()1
    console.log("Data1: Poor Connection, failed to run Data1")
})

// Here if First data Fails to Save, it will prevent further upcoming datas to get Save!!
// This is Example of Call-Back Hell!
