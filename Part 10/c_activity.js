let btn = document.querySelector("button")
let h3=document.querySelector("h3")
let div=document.querySelector("div")
btn.addEventListener("click",function(){
    h3.innerText=getNum();
    div.style.backgroundColor=getNum();
})
function getNum(){
    let red=Math.floor(Math.random()*255)
    let green=Math.floor(Math.random()*255)
    let blue=Math.floor(Math.random()*255)
    let op=Math.floor(Math.random()*100)
    let num=`rgb(${red},${green},${blue},.${op})`
    return num;
}