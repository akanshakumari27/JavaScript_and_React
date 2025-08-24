// Axios is library, with help of which we make HTTP request!
// Library to make HTTP request, it internally uses fetch
// Search Axios github -> scroll down -> install (you can install diffrent axios from this)
// But we will go to CDN section, copy CDN link and paste in HTML Header section (Script Tag)

// Use quotes (' ' or " ") - When you are passing a string literal (fixed text).
// Do NOT use quotes - When you are passing a variable that holds the URL [axios.get(url)]

/*    -- HTML Page --
    <h1>Getting Random Facts</h1>
    <button>Click Me! to get Facts</button>
    <p></p>
    <script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>  //github.axios-> installing-> cdn
*/ 

// Now write same code using AXIOS
// Why to use Axios over Fetch?
// fetch → You need to manually call and convert into .json() 
// Axios → Response data is already converted to JSON

let url="https://catfact.ninja/fact"
let btn = document.querySelector("button")
let p=document.querySelector("p")
btn.addEventListener("click",async ()=>{  //as hav() is an async function, therfore we need to convert this also in async to call it's function
  let getIt = await hav()
  p.innerText = getIt
})
async function hav(){
  try {
    let getFact = await axios.get(url) //axios.get(url) returns a response object, not the fact directly. So for data, getFacts.data.
    console.log(getFact.data.fact)
    // return getFact.data.fact [if linking this code with above 
  } catch (error) {
    console.log("Error: ",error)
    // return "Error!"
  }
}
// But why need to replace axios.get() from fetch()
// because in fetch we got json file, then later to see data we again need to do .json() but in axios we can directly jump to data

// ******* This when you want to Return TWO Facts ********
let url = 'https://catfact.ninja/fact'
let btn = document.querySelector('button')
let p = document.querySelector('p')

btn.addEventListener('click',async ()=>{
    let ans = await get();
    p.innerText = `Fact 1: ${ans.fact1}\nFact 2: ${ans.fact2}`;
    // p.innerText = ans;
})

async function get(){
    try{
        let getFacts = await axios.get(url)
        let getFacts2 = await axios.get(url)

        return{
            fact1: getFacts.data.fact,
            fact2: getFacts2.data.fact
        }
    }
    catch(er){
        let error = `You Caught Error ${er}`;
        return error;
    }
}

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
  image.setAttribute('src', getFunc)
})
async function hav(){
  try {
    let getImg = await axios.get(url1)
    return getImg.data.message;
  } catch (error) {
    let er = console.log("Error: ",error)
    return er;
  }
}
// do generally some API's are free, but still it have limits like, 20 or 15 calls in a minute.
// so remember not to use loop etc for API, otherwise they may block or can take other actions!
