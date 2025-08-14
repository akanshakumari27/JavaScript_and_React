let btn = document.querySelector("button")
let input = document.querySelector("input")
let ul = document.querySelector("ul")

btn.addEventListener("click",function(){
    let item=document.createElement("li")
    item.innerText=input.value
    ul.appendChild(item)

    let del=document.createElement("button")
    del.innerText="delete"
    del.classList.add("del")
    item.appendChild(del)

    input.value="";
})

let delbtns=document.querySelectorAll(".del")  // ** Ignore this Later **
for(delbtn of delbtns){
    delbtn.addEventListener("click",function(){
        this.parentElement.remove(); //remember remove and add is function, always use "()"
        // but it will work only for existence elment not appeneded element
    })
}

//  ******* Resolving above issue *******
// Now here we will take help of bubbling, known as "Event Delegation"
// Event Delegation is a method to solve problem, in which we use or take help of Bubbling.

ul.addEventListener("click",function(event){
    console.dir(event)  //this will dsiplay all properties, we will use nodeName property
    // nodeName property tells, which triggerd the 'Click' under ul, (li or button, Or whatever child present under ul)
    if(event.target.nodeName=="BUTTON"){  //we want to delete it, if button is clicked!!
        let yes=event.target.parentElement;
        yes.remove();
        console.log("removed")
    }
})

// ************************ Solved By Me! ********************************************

//     <h2>ToDo App</h2>
//     <button id="add">Add Item</button>
//     <ul id="List">
//     </ul>

let add = document.querySelector('#add')
let ul = document.querySelector('ul')

add.addEventListener('click',function(){
    let get = prompt("Enter your task You want to add")

    let btn1 = document.createElement('button')
    let btn2 = document.createElement('button')

    let li = document.createElement('li')
    ul.appendChild(li).innerText = get;
    
    li.appendChild(btn1).innerText = "Edit";
    li.appendChild(btn2).innerText = "Delete";

    btn1.addEventListener('click', function(){
    let get2 = prompt("Enter your Task");
    btn1.parentElement.innerText = get2;

    li.appendChild(btn1).innerText = "Edit";
    li.appendChild(btn2).innerText = "Delete";
    })
    
    btn2.addEventListener('click',function(){
        btn2.parentElement.remove();
    })
})
