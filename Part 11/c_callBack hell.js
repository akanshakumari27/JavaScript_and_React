// One of the Problem coz of Asynchronus Nature of js is callback hell!
// (1st)
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

// Better Approach (2nd)
function changeColor(color,delay){
    setTimeout(function(){
        h1.style.color=color
    },delay)
}
changeColor("red",1000)
changeColor("blue",2000)
changeColor("green",3000)  //all are independent
// But still, as js is single threaded we giving time after every seconds for every execution,
// But if we want to run every execution after it's previous execution linked together(depedent)
// Bcause sometimes while, storing Big datas, we want if 1st excution failed, then don't run all further excution(depedent)

// (3rd)
function changeColor(color,delay,further){
    setTimeout(function(){
        h1.style.color=color
        if(further()) further() //if this function == true, then call it
    },delay)
}

changeColor("red",1000,()=>{
    changeColor("yellow",1000,()=>{
        changeColor("green",1000,()=>{
            changeColor("blue",1000) //as here the function not exist therfor no further call
        })
    })
})
// This is known as "CallBack Nesting -> CallBack Hell", when we try to js work as ashyncronusly!
// which become so complicated therfor to avoid this we use promises

// Another Example of "Call Back Hell" (callback nesting)
function savtoDB(data,high,low){
    let checkInternet=Math.floor(Math.random()*10)+1
    if(checkInternet>4){
        high()
    }else{
        low()
    }
}

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


