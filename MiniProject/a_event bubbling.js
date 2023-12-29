let div=document.querySelector("div")
let ul=document.querySelector("ul")
let li=document.querySelector("li")

// If we click ul or li, it will call it's parents also, example(clicked div, it will call("div, ul, li"))known as "Event Bubbling"
div.addEventListener("click",function(){
    console.log("div is clicked")
}) 
ul.addEventListener("click",function(event){
    event.stopPropagation() //to prevent Event Bubbling we use this
    console.log("ul is clicked")
})
li.addEventListener("click",function(event){
    event.stopPropagation()
    console.log("li is clicked")
})