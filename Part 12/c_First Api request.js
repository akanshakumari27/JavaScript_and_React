let url = "https://catfact.ninja/fact"
fetch(url) // inspect - network - All - fact - preview
// This is how you can check API Status
//paste fetch(url) in console window, it will return **"Promise"** thrfore we can apply Promise methods on it
// API calls asynchronusly

// we can see the ans/output in network response but can't in console, it will display "body:ReadableStream" 
// therfore to see response in console, we will first "fetch it" and if sucesfully fetched, we will asked to "return it's json"
// now to see json data inside, if we recived sucesfully json, then console data for "json file"

fetch(url)
 .then((response)=>{   //the response we recieve from URL
   //  console.log(response.json()) //it will return Promise, therfor we can use Promise methods(then,catch)
    return response.json() //this also returns promise, this helps to read our Data
    console.log(response.json());
 })
 .then((data)=>{
   console.log("data 1: ",data.fact)
   return fetch(url)
 })
 .then((response)=>{
   return response.json()
 })
 .then((data2)=>{
   console.log("data 2:",data2.fact)
 })
 .catch((error)=>{
    console.log("Error - ",error)
 })
console.log("Hellow") // js won't wait for asynchronus function, it will continously execute(so probably this will execute first)

// ************************************************************************************************************************************* //

// Now fetch by using async and await
let url2 = "https://catfact.ninja/fact"

async function getFacts(){
    let res = fetch(url2);
    console.log(res);      
}

// getFacts() in console will return undefined because now its async function
// therefore it will not wait and prints the result, and it might happen that we haven't recieved any result yet from API
// that's y we will use await, so it will complete asynchronus call and then prints the result

async function getFacts(){
    let res = await fetch(url2);
    console.log(res);      
}

//to print only data from API, we will again use .json
// this printing two random Facts
async function getFacts(){
   try{
    let res = await fetch(url2)  
    let data = await res.json()  
    console.log(data.fact)

    let res2 = await fetch(url2)
    let data2 = await res2.json()
    console.log(data2.fact)

    } catch(er){                   
      console.log("Your Error: ",er)
    }
    console.log("Yay Few Facts are here!!")  //"try and catch" incase any error, it will not afect further this excution!!
   }
getFacts() //in console window
