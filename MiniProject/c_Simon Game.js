let gameSeq=[];
let userSeq=[];
let btns=["red","yellow","blue","green"]

let started=false;
let level=0;

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started")
        started=true;
        levelUp();
    }
})
function levelUp(){
    level++;
    let h3=document.querySelector("h3")
    h3.innerText=`Level ${level}`

    let randIdx = Math.floor(Math.random()*3)
    let randColors = btns[randIdx]
    let randBtns = document.querySelector(`.${randColors}`)
    flashGame(randBtns)
}
function flashGame(btn){
    btn.classList.add("flashGame")  //this btn is in it's own functional scope
    setTimeout(function(){
        btn.classList.remove("flashGame")
    },250)
}  

// *** Now this is till when game started and get 1st flash ***

// *** Now when User press it's Key ***

let allBtns = document.querySelectorAll(".two")
for(btn of allBtns){   //this btn is in it's own functional scope
    btn.addEventListener("click",btnPress)
}
function btnPress(){
    let btn=this
    flashUser(btn)
}
function flashUser(btn){
    btn.classList.add("flashUser")  //this btn is in it's own functional scope
    setTimeout(function(){
        btn.classList.remove("flashUser")
    },250)
}