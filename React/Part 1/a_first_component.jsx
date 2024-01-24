// Component is reusable and independent piece of code

function Title(){  // Component name always starts from Capital
    return(
        <h1>Hello World!</h1>  // return value could be any one single HTML element 
    );
}
// <Title> </Title> = <Title /> 

import './App.css'

function Title(){
  return <button>Click Me!</button>
}

function App() {
  return(
    <div>
      <h2>Hello! I'm Heading</h2>
      <p>Hey! I'm Paragraph</p>
      <Title />
    </div>
  )
}

// *********************************************
// when Title is in different file name Title.jsx
function Title(){
    return <button>Click Me! Title</button>
  }

export default Title  //Default Export, when Export only a single value

// App.jsx file
import Title from './Title.jsx' //instead of import Title, we can write any name,like import Title2

function App() {
  return(
    <div>
      <h2>Hello! I'm Heading</h2>
      <p>Hey! I'm Paragraph</p>  {/*similarly here also Title2, if changed above*/} 
      <Title />  
    </div>
  )
}

// *** Import - Export ***
// a) export default Name1   ** Deafault exports are handy for exporting single value **
//    import Name1 from './Name1.jsx'

// b) export {Name1}    ** Named Exports are useful when need to export Multiple Values **
//   import {Name1} from './Name1.jsx'

//  JSX Rules (Writing Markup in JSX)
// a) Component name always starts from Capital
// b) There always should closing Tag {because when bebble convert jsx to js, it will search for closing syntax to compile it's work}
// c) camelCase in most of things {className} 
// d) also if we have any reserved keyword in Js, we can't use it as HTML attributes in JSX, use alternates.

// React Fragment, as per Rules need to return only single html entity in function, but creating "div" for that creates/stores extra Node.
// So, if not want to create that extra Node, can use React Fragment (replacing <div></div> = <></> )

// {_} curly braces allows us to write pure javascript inside. 
function App() {
  let name = "Akansha kumari"
  return(
    <>
      <h2>Hello! I'm Heading</h2>
      <p> 2 * 2 = {2*2} </p>
      <p>Your Good Name is {name.toUpperCase()}</p>
    </>
  );
}

// Structuring Components
// Created one Product Card (title + description), but if want lumps of 3 cards we will again make ProductTab.jsx
// Sumarize all 3 cards in ProductTab.jsx and then will import that ProdctTab in main App.jsx, This is what proper Structuring of Componenets