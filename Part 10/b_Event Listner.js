// But as in previous methods, we can't call 2 or more functions for a single click, by using onclick
// therfor we can't perform 2 or more activities together for single click

// Event listners listens what we want to perform by clicking, dragging, keybordkey etc and perform for us
// MDN addeventlistner

let buttons = document.querySelectorAll("button")
for(btn of buttons){
    // btn.onclick = sayHello  // this will not work
    // btn.onclick = Gupta     // By onclick, only last declared function will work
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
