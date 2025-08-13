let btn=document.querySelector("button")
console.dir(btn)  //Here u will get all properties of Button, which you can apply!

// Inline Onclick
<button onclick="console.log('Button is Clicked'); console.log('Hey! Akansha')">Click Me!</button>

// Extrenal OnClick
btn.onclick=function(){
    console.log("Button is clicked")
}
// OR
 function perform(){
     alert("Button is clicked")
 }
 btn.onclick=perform; 
 

// *** For Multiple Buttons ***
let buttons=document.querySelectorAll("button")
console.dir(buttons)  // this will give Node List, for all buttons available in HTML page!

for(btn of buttons){
    btn.onclick=helo;  //we can write outside function
    btn.onmouseenter=function(){   //or inside function ,on-mouse-enter will perform action when your bring cursor above that button
        console.log("yay");
    }
    console.dir(btn)  //now it give properties of an indvidual button object
    //in above line, don't use parenthesis() like, "helo()" because it will call the function directly, without performing any event and iterate automatically
}

function helo(){
    alert("Say Hello");
}
