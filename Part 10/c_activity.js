// Genrate Random Colour Task:
let button = document.querySelector('button');
let h3 = document.querySelector('h3');
let yes = document.querySelector('.box')

button.addEventListener('click',function(){
    let randcolor = genRandColor();
    h3.innerText = `My colour is ${randcolor}`;
    yes.style.backgroundColor = `rgb${randcolor}`;
})

function genRandColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let color = `(${red},${green},${blue})`;
    return color;
}
