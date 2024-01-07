let url = "https://catfact.ninja/fact"
fetch(url) // inspect - network - last random - response(or js response)
//paste fetch(url) in inspect returns **"Promise"** thrfor we can apply Promise methods
// API calls asynchronusly

// we can see the ans/output in network response but can't in console, it will display "body:ReadableStream" 
// therfor to see response in console, we will first "fetch it" and if sucesfully fetched, we will asked to "return it's json"
// now to see json data inside, if we recived sucesfully json, then console data for "json file"

fetch(url)
 .then((response)=>{  
   //  console.log(response.json()) //it will return Promise, therfor we can use Promise methods(then,catch)
    return response.json()
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


// Now fetch by using async and await
let url2 = "https://catfact.ninja/fact"

async function getFacts(){
   try{
    let res = await fetch(url2)  //as "both are asynchronus", as "they return Promise" therfor we will use "await"
    let data = await res.json()  //as "both are asynchronus", as "they return Promise" therfor we will use "await"
    console.log(data.fact)

    let res2 = await fetch(url2)
    let data2 = await res2.json()
    console.log(data2.fact)

    } catch(er){                   
      console.log("Your Error: ",er)
    }
    console.log("Yay Few Facts are here!!")  //"try and catch" incase any error, it will not afect further this excution!!
   }
getFacts()
 