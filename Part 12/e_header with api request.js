// Sending Headers with API requests
// "Sending Header" in "Axios request"

// In an API, headers are like extra information sent along with your request or response. They help the client and server communicate properly.

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
    // Headers can influence the format of the data you get from an API.
    // Here header will help to return the data in JSON Format
    // So, first need to create header and pass object with key value pair!
    const config = {headers : { Accept: "application/json"} }  // Object with Key-Value Pair
    let get = await axios.get(url, config)
    console.log(get.data)
  }catch(error){
    console.log("Error: ",error)
  }
}
