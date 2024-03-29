/*
    <h1>Getting Random Facts</h1>
    <button>Click Me! to get Facts</button>
    <p></p>
    <script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>  //github.axios-> installing-> cdn
    */ 

let url="https://catfact.ninja/fact"
let btn = document.querySelector("button")
let p=document.querySelector("p")
btn.addEventListener("click",async ()=>{  //as hav() is an async function, therfor we need to convert this also in async to call it's function
  let getIt = await hav()
  p.innerText = getIt
})
async function hav(){
  try {
    let getFact = await axios.get(url) //axios.get() = fetch()
    console.log(getFact.data.fact)
    return getFact.data.fact
  } catch (error) {
    console.log("Error: ",error)
    return "Error!"
  }
}
// But why need to replace axios.get() from fetch()
// because in fetch we got json file, then later to see data we again need to do .json() but in axios we can directly jump to data


/*
    <h1>Getting Random Dog Images</h1>
    <button>Click Me! to get images</button>
    <img src="" alt="Dog image">
    <div></div>
    <script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script> */

// Now for Dog Images
let url1="https://dog.ceo/api/breeds/image/random"
let btn1 = document.querySelector("button")
let image = document.querySelector("img")
let div=document.querySelector("div")
console.dir(div)
btn1.addEventListener("click",async ()=>{  
  let getFunc = await hav();
  image.setAttribute("src",getFunc.data.message)
  div.innerHTML = getFunc.data.message
})
async function hav(){
  try {
    let getImg = await axios.get(url1)
    return getImg;
  } catch (error) {
    let er = console.log("Error: ",error)
    return er;
  }
}
// do generally some API's are free, but still it have limits like, 20 or 15 calls in a minute.
// so remember not to use loop etc, otherwise they may block or can take other actions!