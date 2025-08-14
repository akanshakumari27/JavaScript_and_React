   //   **** Mouse Event ****
let btn = document.querySelector("button")

btn.addEventListener("click",function(event){ //or "e"
    console.dir(event);  // PointerEvent //this will display all properties of PointerEvent (singel click comes under PointerEvent)
    console.log("Button Clicked")
})

btn.addEventListener("dblclick",function(event){
    console.dir(event)   // MouseEvent //this will display all properties of MouseEvent (double click comes under MouseEvent)
    console.log("Button Double Clicked")
})

//  **** KeyBoard Event ****
   // <input placeholder="Type Something"> HTML
let input=document.querySelector("input")
input.addEventListener("keydown",function(event){
    console.log(event)  // KeyboardEvent //this will display all properties of KeyboardEvent
    // KeyboardEvent properties examples
    console.log("Key is " + event.key)  // will give key or element which entered  
    console.log("Code is " + event.code)  // will give code or name of element entered
    console.log("Key Button pressed down")
})
input.addEventListener("keyup",function(event){
    console.log(event);
    console.log("Key released")
})

//   **** Let's Create Game with Help of Keyboard Events ****
let input = document.querySelector('input');

input.addEventListener('keydown', function(event){
    if(event.code == 'ArrowDown'){
        console.log("Character moves Downward");
    }else if(event.code == 'ArrowUp'){
        console.log("Character moves Upward");
    }else if(event.code == 'ArrowLeft'){
        console.log("Character moves Left Side");
    }else if(event.code == 'ArrowRight'){
        console.log('Character moves Right Side');
    }else{
        console.log("You pressed wrong key");
    }
})

    //    ******* Form Event *******
/*  <form action="/action">
 <input type="text" placeholder="Type here..">
 <button>Click to Submit</button>
 </form>  */

let form=document.querySelector("form")
let input1=document.querySelector("input")
form.addEventListener("submit",function(event){
    event.preventDefault();   //this will prevent default action(forwarding url named action/) but it continues all actions written below!!
    console.dir(input1)       //to see all the properties on input
    console.log(input1.value)  //in form, externally inserted lines we can't see through innerTEXT, "value" is used!!
})

/* 
<form action="/action">
        <input type="text" placeholder="Username" id="u">
        <input type="password" placeholder="Your Password" id="p">
        <button>Click to Submit</button>
    </form> */

let form2=document.querySelector("form")
let user=document.querySelector("#u")
let pass=document.querySelector("#p")
form2.addEventListener("submit",function(event){
    event.preventDefault();
    console.dir(user)
    //in form, externally inserted lines we can't see through innerTEXT, "value" is used!!
    alert(`Your Username is ${u.value} and your password is${p.value}`)
    
})
  // ** OR **
let form3=document.querySelector("form")
form3.addEventListener("submit",function(event){
    event.preventDefault();
    console.dir(form) //we will get alot different properties of 'Form'
    // exapnd Form -> form.elements -> form.elements[0] or form.elemnt[1] so on...
    let user=form.elements[2]  
    let user=this.elements[0]  //OR form.elements[0]
    let pass=this.elements[1]  //OR form.elements[1]
    alert(`Your username is ${user.value} and password is ${pass.value}`)
})
 
// *** Change Event and Input Event ***** //
// The Change event is used to track the change in value of an element (only works for <input>, <textarea> and <select> elements)
// This Change will just give record of final value comparing to initial (it will not track every singel changes, just Final value)

form4.addEventListener("change",function(){
    console.log("Change Event")  //for final change after filling final input!
    console.log(this.elements[0].value)
})
// OR
let text = document.querySelector('#text')
text.addEventListener('change', function(){
    console.log(text.value);   //Or this.value
})

// ----------------------------------------------------------------------------
// Input event is used to track every singel little changes (not only Final)
// The every keyword you will press, it will keep track of it.

form4.addEventListener("input",function(){
    console.log("Input Event")  //for every Singel Inputs
    console.log(this.elements[0].value)
})
// OR
let text = document.querySelector('#text');
text.addEventListener('input', function(){
    console.log(text.value)
})

  // ***** $$ ******

// We want to add every single changes in our paragraph
let inp=document.querySelector("#input")
let p=document.querySelector("p")
inp.addEventListener("input",function(event){
    console.log(this.value);
    p.innerText=this.value;   
})

// But, 'this' will not work with arrow function ()=>
