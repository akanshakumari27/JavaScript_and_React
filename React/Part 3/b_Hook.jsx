// 3 Major things in React 'Components', 'Props' and 'States'

// States in React
// Change in Component never brings Change or Update in UI
// The "State" is a built-in React Object that is used to contain data or information about the component
// A component state can change over time; whenever it changes, the component re-renders

let count = 0;
function get(){
    count = count+1;
    console.log(count)  //here u will notice, it prints 1 step previous (because this prints on console, before Render)
}
function Practice(){
    return(
        <>
        <p>{count}</p>  {/* And this prints in UI after Render, but after using useState, currently this will not print anything */}
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
// Go to "Font Awesome CDN" and paste link in (index.html) and from "Font Awesome" search for hearts.
import {useState} from "react";

export default function(){
    // Hooks can only be used inside Function and you can Call Multiple Hook, given below
    
    let [ like , setLike ] = useState(true)
    let [ count, setCount ] = useState(20)
    function getLike(){
        setLike(!like)   //toggle: (if like = True, it will turn False, and if False it will turn True)
        setCount(like? count+1:count-1)
    }
    return(
        <div>
            <p onClick={getLike}>
                {/* checking is current like True or False, and Toggle accordingly */}
                {like? <i className="fa-regular fa-heart"></i> : <i className="fa-solid fa-heart" style={{color:"red"}}></i>} 
            </p>
            <p>Clicks = {count}</p>
        </div>
    )
}


// *** Counter 2 ***
// When you want to increase counter 2 times!
import {useState} from "react"

export default function Button(){
    let [count , setCount] = useState(0)

    function getCount(){
        // This method will not work, (it will still increase 1 time) because it goes ascynchrnously
        setCount(count+1);
        setCount(count+1);

        // So we need to use CallBacks for it; therefore this will work!
        setCount((currentCount)=>{
            return currentCount + 1;
        })
        setCount((currentCount)=>{
            return currentCount + 1;
        })
        // This will update 2 times, therefor 0,2,4,6
        // OR just setCount(count+35)
        // setCount(25) ,it will directly return 25
    }  
    return(
        <div onClick={getCount}>
            <h2>Your CountUp: {count} </h2>
            <button>Click Me!</button>
        </div>
    )
}

// Counter 3
// Here you will do Intialization with a function
import {useState} from 'react'

function set(){
    console.log('first execution')
    return Math.random();
}

export default function Practice(){
    // If use (set()), means you are executing the function, then number of times u click button then that number of times, function set() will execute
    // you can check from console.log(), which is unecessary, because in first exeution we got intial value, so don't need to execute set() again, for uncessary space and time
    let [count, setcount] = useState(set);  // therfore use set without ()
    let get = ()=>{
        setcount(count+1)
        console.log('second execution')
    }
    return(
        <>
        <p>Count = {count}</p>
        <button onClick={get}>Click me!</button>
        </>
    )
}
