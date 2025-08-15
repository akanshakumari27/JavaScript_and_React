// JS is single Threaded, means it executes one task at a time in sequence and will not procedd until and unless that operation is Over!
// If a task takes too long, it can freeze the page and make the website unresponsive.
// To prevent this JS use Asynchrnous programming (callbacks, promises, async/await)

//setTimeout(function,time)

setTimeout(()=>{
    console.log("Hello Moto") // Fn1
},2000)

console.log("Hey") //Fn2

setTimeout(()=>{
    console.log("Hello World") // Fn3
},2000)

   // Output ~ Fn2, after 2secs both Fn1 nd Fn3

// But Js is Single threaded(can execute one "function" at one "time"), still it able to manage executing both function at same time(after 2sec)
// And also JS is not waiting for Fn1, it is first printing Fn2 and the executing Fn1 and Fn3 (BUt if JS is single threaded, then it should go sequence wise, it should not wait)

// JS is singel threaded, but all execution is performing in Browser (which generally written in c++)(sometimes java), Which is Multi-Threaded Language
// So actually js is sending it's function to browser, browser is waiting for given 2secs
// After completion of 2secs, browser is now sending that in Call Stack of js, Now js recognise it have it's stored function there
// Still JS actually executed the Fn1 and then Fn3, but execution time gap between both function is very miliseconds, thats y, we wont able to recoginse and seems both executed at same time.

// As js is single threaded, if all work done by js alone, it will first wait for 2secs to run Fn1, then Fn2 ,then again wait for 2secs Fn3 as waiting is also one of the task.

// As js is single threaded language means it work as Synchronus(one execution at one time in a sync).
// But because of setTimeout it act as Aschronus Nature due to which we face few problems.
