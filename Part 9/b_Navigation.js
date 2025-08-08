// In Navigation, we can find or move from one to another
let h4 = document.querySelector("h4")
console.dir(h4)  //we can get all properties from here
h4.parentElement   //one of it's property, this will result the parent element of h4

let box=document.querySelector(".box")
console.dir(box)
box.children
box.childElementCount  //we will get child count

// Prvious siblings
ul
ul.children // here ul have 3 childrens li, li, li
ul.chlidren[0]  // extracting particular childrens
ul.children[2]
ul.children[1].previousElementSibling  // it will result li[0]
ul.children[1].nextElementSibling      // will result li[2]

let img=document.querySelector("img")
img.previousElementSibling.style.color="green" 

// *** Adding Elements ***
let newp=document.createElement("p") //created new element p
newp.innerText="Helow how are you"

// now need to declare parent element where we want to insert or append it
let body=document.querySelector("body")
body.appendChild(newp)  // it will display at below of body

let button = document.createElement("button")
button.innerText="Click Me!!"
let box1 = document.querySelector(".box")  // Now calling the parent where we want to append button
box1.appendChild(button)

newp.append("I'm Fine Thank you")  // it will add further more text from BACK of newp
newp.append(btn); //it append button
newp.prepend("Hey tell me!")  // it add text from FRONT
box1.prepend(newp)

// Now inserting according to requirment, insertAdjacent MDN
let btn = document.createElement("button")
btn.innerHTML="Click Me!!"
let p=document.querySelector("p")
p.insertAdjacentElement("beforebegin",btn)  // it will add before begining, not in paragraph, it will be seprated and just above paragraph (as like another para).
p.insertAdjacentElement("afterbegin",btn)   // will add after begining, means now it will add inside parapgah as first word.
p.insertAdjacentElement("beforeend",btn)    // will add before ending (or before fullstop). means inside that paragraph only, before fullstop.
p.insertAdjacentElement("afterend",btn)     // .will add after end (after fullstop), not in paragrph, it will sperated and just below from the para (as like another para).

// Removing Element
body.removeChild(btn)
p.remove
body.remove //infact we can remove whole body

// Question 1
// add <p> tag with RED text, which says "Hey! I am Red"
let para1 = document.createElement('p');  // First create element for para
para1.innerText = "Hey! I'm RED";
document.querySelector('body').append(para1); // First we will access Body and then Append Para
para1.style.color='red';

// Question 2
// add <h3> with blue text with written msg "I'm Blue H3"
let h3 = document.createElement('h3');   // all the process is doing in document!! So Document
h3.innerText = 'I am Blue H3';
document.querySelector('body').append(h3);
h3.style.color = 'blue';   
