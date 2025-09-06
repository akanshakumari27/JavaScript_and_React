import {useState} from 'react'
export default function Button(){
    let [name, setName] = useState("Akansha")

    function get(event){
        console.log(event.target.value)
        setName(event.target.value)
    }
    return(
        <>
        <input type="text" placeholder="Enter your Name" value={name} onChange={get} />
        <button>Submit</button>
        </>
    )
}
