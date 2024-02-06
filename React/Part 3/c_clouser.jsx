// Clouser is the Feature in jsavascript, where "Inner Function" has an acess to the variable of an "Outer Function"

// *** Object and State ***
// Task: creating a Ludo button for Total number of counts of an each Color, no use of Clouser here though 
import {useState} from "react"

export default function Button(){
    let [ count, setCount] = useState({red:0, yellow:0, green:0, blue:0}) //Can write for both (Array & Object)

    function blueCount(){
        count.blue+=1
        setCount({...count}) /*Spread so that can create it's new adress nd work with by acessing particular key required form an Object
        (because we can't directly see Updated Object, need to pass it's copy)*/
   /*OR setCount({...count , blue: count.blue+1 }) */
   /*OR setCount(()=>{
    return {...count , blue: count.blue+=1}
   })  as whenever our next value Depends on Previous Value, we use callBack(better approch) */
    }
    function redCount(){
        setCount(()=>{
            return{...count, red: count.red+=1}
        })
    }
    function greenCount(){
        setCount(()=>{
            return{...count, green: count.green+=1}
        })
    }
    function yellowCount(){
        setCount(()=>{
            return{...count, yellow: count.yellow+=1}
        })
    }
    return(
        <div>
            <p>Red: {count.red}</p>
            <button onClick={redCount} style={{backgroundColor:"red"}}>+1</button>
            <p>Yellow: {count.yellow}</p>
            <button onClick={yellowCount} style={{backgroundColor:"yellow"}}>+1</button>
            <p>Green: {count.green}</p>
            <button onClick={greenCount} style={{backgroundColor:"green"}}>+1</button>
            <p>Blue: {count.blue}</p>
            <button onClick={blueCount} style={{backgroundColor:"blue"}}>+1</button>
        </div>
    )
}

// *** Array and State ***
import {useState} from "react"

export default function Button(){
    let [ count, setCount] = useState({red:0, yellow:0, green:0, blue:0}) //Object' key:value pair
    let [ print ,setPrint] = useState(["Moves: "])

    function blueCount(){
        count.blue+=1
        setCount({...count}) 
        setPrint(()=>{
            return[...print,"Blue, "]
        })
    }
    function redCount(){
        setCount(()=>{
            return{...count, red:count.red+=1}
        })
        setPrint(()=>{
            return[...print, "Red, "] 
        //Spread coz React doesn't show updated value of Array/Object in it's main adress in UI(tho internally updated),So needs to create New adress and make changes in to reflect in page
        })
    }
    function greenCount(){
        setCount(()=>{
            return{...count, green:count.green+=1}
        })
        setPrint(()=>{
            return[...print,"Green, "]
        })
    }
    function yellowCount(){
        setCount(()=>{
            return{...count, yellow:count.yellow+=1}
        })
        setPrint(()=>{
            return[...print,"Yellow, "]
        })
    }
    return(
        <div>
            <p>{print}</p>
            <p>Red: {count.red}</p>
            <button onClick={redCount} style={{backgroundColor:"red"}}>+1</button>

            <p>Yellow: {count.yellow}</p>
            <button onClick={yellowCount} style={{backgroundColor:"yellow"}}>+1</button>

            <p>Green: {count.green}</p>
            <button onClick={greenCount} style={{backgroundColor:"green"}}>+1</button>
            
            <p>Blue: {count.blue}</p>
            <button onClick={blueCount} style={{backgroundColor:"blue"}}>+1</button>
        </div>
    )
}
