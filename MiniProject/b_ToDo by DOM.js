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

let delbtns=document.querySelectorAll(".del")  // ** Ignore this after **
for(delbtn of delbtns){
    delbtn.addEventListener("click",function(){
        this.parentElement.remove(); //remember remove and add is function, always use "()"
        // but it will work only for existence elment not appeneded element
    })
}

//  ******* Resolving above issue *******
// Now here we will take help of bubbling, known as "Event Delegation"

ul.addEventListener("click",function(event){
    console.dir(event)
    if(event.target.nodeName=="BUTTON"){
        let yes=event.target.parentElement;
        yes.remove();
        console.log("removed")
    }
})