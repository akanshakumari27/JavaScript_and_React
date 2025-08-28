// States in React
// Change in Component never brings Change or Update in UI
// The state is a built-in React Object that is used to contain data or information about the component
// A component state can change over time; whenever it changes, the component re-renders

// *** Hooks! ***
// Earlier Components were build under Classes known as "Class Component" but Nowadays it build under Function Known as "Functional Component".
// ThereFor Hooks allows us to use some Features in Functional Component which was present in Class Component but not in Funcional.
// "State" is also one of the feature used with help Hook.


// 1) * First Hook ~ useState() *
// const [state , setState] = useState(intialState);

// useState returns an array of exactly 2 values
// 1. The current state. During the first render, it will match the initial State you have passed.
// 2. The set function that lets you update the state to a different value and trigger

// Now as for any User-Trigger, we can see changes in console but not in UI page, so we use "useState" to see changes in UI page!

// *** Counter ***
import {useState} from "react";

export default function(){
    let [count, setCount] = useState(0); {/* useState(0) ~ intialization */}

    let incCount=()=>{  {/*Or function incCount(){}*/}
        setCount(count+1);
        console.log(count); {/* Will found in Page 1,2,3 but in Console 0,1,2 */}  
        {/* Because, in this Function we get the Value before "Rendering" and in Return we get value after "Reander" */}
    }
    return(
        <div>
            <h3>Count: {count}</h3> {/* value after rendering */}
            <button onClick={incCount}>Click Me!</button> 
        </div>
    )
}


// *** Liked Button ***
import {useState} from "react";

export default function(){
    // Hooks can only be used inside Function
    let [ like , setLike ] = useState(true)
    let [ count, setCount ] = useState(20)
    function getLike(){
        setLike(!like)  
        setCount( like? count+1:count-1)
    }
    return(
        <div>
            <p onClick={getLike}>
                {like? <i className="fa-regular fa-heart"></i> : <i className="fa-solid fa-heart" style={{color:"red"}}></i>}
            </p>
            <p>Clicks = {count}</p>
        </div>
    )
}


// *** Counter 2 ***
import {useState} from "react"

export default function Button(){
    let [ count , setCount] = useState(0)

    function getCount(){
        setCount((currentCount)=>{
            return currentCount + 1;
        })
        setCount((currentCount)=>{
            return currentCount + 1;
        })
        {/*This will update 2 times, therefor 0,2,4,6*/}
        {/* setCount(25) ,it will directly return 25*/}
    } 
    return(
        <div onClick={getCount}>
            <h2>Your CountUp: {count} </h2>
            <button>Click Me!</button>
        </div>
    )
}
