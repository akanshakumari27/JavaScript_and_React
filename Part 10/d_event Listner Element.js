// we can perform activites in any thing like para, div, class

let p=document.querySelector("p")
p.addEventListener("click",function(){
    console.log("You Clicked Para")
})

let box=document.querySelector(".box")  //class
box.addEventListener("mouseenter",function (){
    alert("Mouse Insdie Box")
})

// ***** <this> in addEventListner() ******

let btn1=document.querySelector("button")
btn1.addEventListener("click",function(){
    console.log(this)  // "<button>Click Me!!</button>" will print from html
    // means "this" directly indicates/call button from HTML page
    
    console.dir(this)  // button object will return
    console.dir(this.innerText)
    this.style.backgroundColor="blue";  //it will change colur of button, when clicked
})


   // **** OR ****

let btn = document.querySelector("button")
let p2 = document.querySelector("p") ;
let h1 = document.querySelector("h1")
let h3 = document. querySelector("h3");

function changeColor() {
    console. dir( this.innerText );
    this. style. backgroundColor= "blue";
}
btn.addEventListener( "click" ,changeColor) ;

p2.addEventListener( " click" ,changeColor) ;

hl.addEventListener( "click" ,changeColor) ;

h3.addEventListener( "click" ,changeColor) ;
