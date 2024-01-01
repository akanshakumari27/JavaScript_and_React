// Call Stack, Last In First Out
function one(){
    return 1
}
function two(){
    return one() + one()
}
function three(){
    return two() + one()  
}
three() // calling it in Global Scope
//If we call three(), it will first call two(), two() will call one(), now final call is to one(){last in} will complete it's work and return back to two(){first out}
//Now viseVersa two() will also finish it's work and return to three()
//And finally three() get it's two(), now it will again directly call to one() and find sum and give Result {first in last out}
//Previously three() value == undefined ,Now three() == 3
//Note, It will still in Functional scope, js won't able to recognize it until call it in Global scope


 // ***** BreakPoints *****

// Now we can debug and check in browser step by step,
// 1) Sources -> top -> app.js 
// 2) First alot any breakpoint(can be multiple breakpoints), where code will stop during/after Run! Refresh
// 3) press "arrowdown"(Step into next function call), we can see all multiple steps/every single execution in Stack
// 4) In "Scope" also we will get outputs after every execution
// 5) This is how we can check every single steps of stack and can debug it!!