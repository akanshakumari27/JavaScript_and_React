// Sending Headers with API requests
// "Sending Header" in "Axios request"

let url="https://icanhazdadjoke.com/"

 async function getHeader(){
   try{
     let get = await axios.get(url) //now here when data, we get to see all in "HTML content" but we want to extract in "application json format!"
     console.log(get.data)
   }catch(error){
    console.log("Error: ",error)
    }
  } 

// Improved Method for Header File
async function getHeader(){
  try{
    //So, first need to create header and pass object with key value pair!
    const config = {headers : { Accept: "application/json"} }
    let get = await axios.get(url, config)
    console.log(get.data)
  }catch(error){
    console.log("Error: ",error)
  }
}
