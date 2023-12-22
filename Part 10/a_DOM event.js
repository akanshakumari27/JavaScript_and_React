let btn=document.querySelector("button")
console.dir(btn)

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
console.dir(buttons)  // this will give Node List, as we selected all!

for(btn of buttons){
    btn.onclick=helo;  //we can write function outside
    btn.onmouseenter=function(){   //or inside
        console.log("yay");
    }
    console.dir(btn)  //now it give properties of an indvidual button object
    //without function it will iterate automatically whole, it won't will be in our control!!
    //in above line, don't do "helo()" coz again it will iterate automatically, becz we calling it right here!!
}

function helo(){
    alert("Say Hello");
}