import { useState } from "react";

export default function Button(){
    const url = 'https://official-joke-api.appspot.com/random_joke'
    let [joke, setJoke] = useState({})

    //as API calls works Asynchronusly, you need to keep this Async, else it will not work
    let get = async ()=>{
        let fetchUrl =  await fetch(url)
        let convertUrl = await fetchUrl.json()
        console.log(convertUrl)

        setJoke({setup: convertUrl.setup, punchline: convertUrl.punchline})
    }
    return(
        <>
        <p>{joke.setup}</p>
        <p>{joke.punchline}</p>
        <button onClick={get}>Get Joke</button>
        </>
    )
}

// Now we will see use of 'useEffect()'
