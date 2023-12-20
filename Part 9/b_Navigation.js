// In Navigation, we can find or move from one to another
let h4 = document.querySelector("h4")
console.dir(h4)  //we can get all properties from here
h4.parentElement   //one of it's property

let box=document.querySelector(".box")
console.dir(box)
box.children
box.childElementCount  //we will get child count

// Prvious siblings
ul
ul.children // HTML collection l1,l2,l3
ul.chlidren[0]
ul.children[2]
ul.children[1].previousElementSibling
ul.children[1].nextElementSibling

let img=document.querySelector("img")
img.previousElementSibling.style.color="green" 

// *** Adding Element ***
let newp=document.createElement("p") //create element
newp.innerText="Helow how are you"
 // now need to declare parent element where we want to insert/append it
let body=document.querySelector("body")
body.appendChild(newp)  // it will display at below of body

let button = document.createElement("button")
button.innerText="Click Me!!"
let box1 = document.querySelector(".box")  // Now creating parent where tp append 
box1.appendChild(button)

newp.append("I'm Fine Thank you")  // it will add further more text from back
newp.prepend("Hey tell me!")  // it add gtext from first
box1.prepend(newp)

// Now inserting according to required
let btn = document.createElement("button")
btn.innerHTML="Click Me!!"
let p=document.querySelector("p")
p.insertAdjacentElement("beforebegin",btn)  // it will add before begining 
p.insertAdjacentElement("afterbegin",btn)   // will add after begining
p.insertAdjacentElement("beforeend",btn)    // will add before ending(or before fullstop).
p.insertAdjacentElement("afterend",btn)     // .will add after end(after fullstop)

// Removing Element
body.removeChild(btn)
p.remove
body.remove //infact we can remove whole body