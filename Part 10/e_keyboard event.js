   //   **** Mouse Event ****
let btn = document.querySelector("button")

btn.addEventListener("click",function(event){ //or "e"
    console.dir(event);  // PointerEvent //or 
    console.log("Button Clicked")
})

btn.addEventListener("dblclick",function(event){
    console.dir(event)   // MouseEvent
    console.log("Button Double Clicked")
})

//  **** KeyBoard Event ****
   // <input placeholder="Type Something"> HTML
let input=document.querySelector("input")
input.addEventListener("keydown",function(event){
    console.log(event)  // KeyboardEvent
    // KeyboardEvent properties examples
    console.log("Key is " + event.key)  // will give key or elemnt which entered  
    console.log("Code is " + event.code)  // will give code or name of element entered
    console.log("Key Button pressed down")
})
input.addEventListener("keyup",function(event){
    console.log(event);
    console.log("Key released")
})

//   **** Let's Create Game with Help of Keyboard Events ****
// if code=="ArrowUp"{console.log("Move Forward")}


    //    ******* Form Event *******
/*  <form action="/action">
 <input type="text" placeholder="Type here..">
 <button>Click to Submit</button>
 </form>  */

let form=document.querySelector("form")
let input1=document.querySelector("input")
form.addEventListener("submit",function(event){
    event.preventDefault();   //this will prevent default action(forwarding url named action/) but continues all action written below!!
    console.dir(input1)
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
    console.dir(form) //we will get alot different properties of form
    // form.elements -> form.elements[0] or form.elemnt[1] so on...
    let user=this.elements[0]  //form.elements[0]
    let pass=this.elements[1]  //form.elements[1]
    alert(`Your username is ${user.value} and password is ${pass.value}`)
})
 
      // *** Change Event and Input Event ***** //

let form4=document.querySelector("form")
form.addEventListener("submit",function(event){
    event.preventDefault();
})
  //Or can directely call user id and perform function like "user.addEventListener"
form4.addEventListener("change",function(){
    console.log("Change Event")  //for final change after filling final input!
    console.log(this.elements[0].value)
})
form4.addEventListener("input",function(){
    console.log("Input Event")  //for every Singel Inputs
    console.log(this.elements[0].value)
})

  // ***** $$ ******

let inp=document.querySelector("#input")
let p=document.querySelector("p")
inp.addEventListener("input",function(event){
    event.preventDefault()
    console.log(this.value)
    console.log(p.innerText=this.value)
})