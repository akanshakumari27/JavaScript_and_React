//setTimeout(function,time)

setTimeout(()=>{
    console.log("Hello Moto") // Fn1
},2000)

console.log("Hey") //Fn2

setTimeout(()=>{
    console.log("Hello World") // Fn3
},2000)

   // Output ~ Fn2, after 2secs both Fn1 nd Fn3

// But Js is Single threaded(can execute one "function" at one "time"), still able to manage executing both function at same time(after 2sec)
// Browser generally written in c++ (sometimes java)(Multi Threaded), so actually js is sending it's function to browser, browser is waiting for given 2secs
// After completion of 2secs, browser is now sending that in Call Stack of js, Now js recognise it have it's stored function there, will execute it then(execution time gap between both function is very miliseconds)!
// As js is single threaded, if all work done by js alone, it will first wait for 2secs to run Fn1, then Fn2 ,then again wait for 2secs Fn3 as waiting is also one of the task.

// As js is single threaded language, it work as Synchronus(one execution at one time).
// But because of setTimeout it act as Aschronus Nature due to which we face few problems.