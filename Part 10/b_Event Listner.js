// But as in previous methods, we can't call 2 functions together for a single click
// therfor we can't perform 2 activities together for single click

// Event listners listens what we want to perform by clicking, dragging, keybordkey etc and perform for us

let buttons = document.querySelectorAll("button")
for(btn of buttons){
    // btn.onclick=sayHello   //this won't work
    // btn.onclick=Gupta
    btn.addEventListener("click",sayHello)
    btn.addEventListener("click",Gupta)
    btn.addEventListener("dblclick",function(){
        console.log("You Double clicked Me!!")
    })
    console.dir(btn)
}
function sayHello(){
    alert("Say Hello");
}
function Gupta(){
    alert("Mr. Gupta")
}