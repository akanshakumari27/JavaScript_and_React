// 3 Major things in React 'Components', 'Props' and 'States'

// States in React
// Change in Component never brings Change or Update in UI
// The "State" is a built-in React Object that is used to contain data or information about the component
// A component state can change over time; whenever it changes, the component re-renders

let count = 0;
function get(){
    count = count+1;
    console.log(count)  //it will print!
}
function Practice(){
    return(
        <>
        <p>{count}</p>  {/*But this won't*/}
        <button onClick={get}>Click Me!</button>
        </>
    )
}
export default Practice;

// This code will not Work
// Components and Props are read-only inputs; if you try to directly change them inside the child, React will not re-render because props are "Immutable".
// If you want something inside the component to be changeable (like form input, counter, toggle, etc.), you must use state.
// State is a special variable managed by React that, when changes occur, it re-renders the component.
// To study about State, let's see what's Hooks first

// *** Hooks! ***
// Earlier Components were build under Classes known as "Class Component" but Nowadays it build under Function Known as "Functional Component".
// But there are few things, which we still can't use in Functional Components, but it's available in Class Components, So for that "Hooks" has been introduced
// Hooks allows us to use some Features in Functional Component which was present in Class Component but unavailable in Funcional.
// There are Total 15 Hooks right now, in which "Use State" is also one.


// 1) * First Hook ~ useState() *
// const [userDef , setuserDef] = useState(intial_valueOf_userDef);
// Always Remember to write 'set' before any defined User_Defined_Val

// useState returns an array of exactly 2 values
// 1. The current state. During the first render, it will match the initial State you have passed.
// 2. The set function that lets you update the state to a different value and trigger

// Now we can see changes of User-Trigger in UI

// *** Counter ***
import {useState} from "react"; // you need to import externally 

export default function(){
    
    {/* We need to write this inside Function*/}
    let [count, setCount] = useState(0);   {/* useState(0) ~ intialization, So except this whole code Rerenders, when Clicked Button */}
    
    let incCount=()=>{   {/*Or function incCount(){}*/}
        {/* count = count + 1 */}
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
    let [count , setCount] = useState(0)

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
