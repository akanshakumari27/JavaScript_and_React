// **** Object and State ****
import {useState} from 'react';
export default function Button(){
    let [col, setCol] = useState({blue: 0, red: 0, green: 0, yellow: 0})

    function getNumB(){
        // col.blue+=1
        // setCol({...col})

        //When our new value depends on Previous Value, we use callBacks
        setCol((updatedCol)=>{
            return {...updatedCol, blue: updatedCol.blue+1}
        })
    }
    function getNumR(){
        setCol((preVal)=>{
            return {...preVal, red: preVal.red+1}
        })
    }
    function getNumG(){
        setCol((preVal)=>{
            return{...preVal, green: preVal.green+1}
        })
    }
    function getNumY(){
        setCol((preVal)=>{
            return{...preVal, yellow: preVal.yellow+1}
        })
    }
    return(
        <>
            <p>Blue = {col.blue}</p>
            <button style={{backgroundColor: 'blue'}} onClick={getNumB}>+1</button>
      
            <p>Red = {col.red}</p>
            <button style={{backgroundColor: 'red'}} onClick={getNumR}>+1</button>
       
            <p>Green = {col.green}</p>
            <button style={{backgroundColor: 'green'}} onClick={getNumG}>+1</button>
      
            <p>Yellow = {col.yellow}</p>
            <button style={{backgroundColor: 'yellow', color: 'black'}} onClick={getNumY}>+1</button>
        </>
    )
}

// Why CallBacks? 
// Because React state updates are asynchronous and batched. 
// This means multiple setState calls might run together before re-render.
// Example: setCount(count + 1);
//          setCount(count + 1);
//  You might expect it to increase by 2, but actually it will only increase by 1 (since both use the same old count)

// In this Example, you might not see much change, but working with Huge Code dataBase, may cause Error, if not use CallBacks

// **** Array and State ****
import {useState} from 'react';
export default function Button(){
    let [col, setCol] = useState({blue: 0, red: 0, green: 0, yellow: 0})
    let [arr, setArr] = useState([''])

    function getNumB(){
        setCol((updatedCol)=>{
            return {...updatedCol, blue: updatedCol.blue+1}
        })
        setArr((updatedArr)=>{
            return[...updatedArr, 'Blue, ']
        })
    }
    function getNumR(){
        setCol((preVal)=>{
            return {...preVal, red: preVal.red+1}
        })
        setArr((updatedArr)=>{
            return[...updatedArr, 'Red, ']
        })
    }
    function getNumG(){
        setCol((preVal)=>{
            return{...preVal, green: preVal.green+1}
        })
        setArr((updatedArr)=>{
            return[...updatedArr, 'Green, ']
        })
    }
    function getNumY(){
        setCol((preVal)=>{
            return{...preVal, yellow: preVal.yellow+1}
        })
        setArr((updatedArr)=>{
            return[...updatedArr, 'Yellow, ']
        })
    }
    return(
        <>
        <p>[{arr}]</p>
            <p>Blue = {col.blue}</p>
            <button style={{backgroundColor: 'blue'}} onClick={getNumB}>+1</button>
    
            <p>Red = {col.red}</p>
            <button style={{backgroundColor: 'red'}} onClick={getNumR}>+1</button>
    
            <p>Green = {col.green}</p>
            <button style={{backgroundColor: 'green'}} onClick={getNumG}>+1</button>
      
            <p>Yellow = {col.yellow}</p>
            <button style={{backgroundColor: 'yellow', color: 'black'}} onClick={getNumY}>+1</button>
        </>
    )
}
