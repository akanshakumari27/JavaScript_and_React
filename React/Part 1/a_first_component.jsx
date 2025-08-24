// App.jsx and App.css : Both make (one component File, combined of all 3 HTML, CSS, JavaScript)
// Genrally Every Components has diffrent component file.jsx, but just for shake of practice right now, we will make all under App.jsx

// ******** App.jsx *********
import './App.css'
function Title(){  // Component name always starts from Capital
  return (
      <button>Click Me!</button>  // return value could be any one single HTML element
  );   
}
// <Title> </Title> OR <Title/> both are Correct!
function App() {
  return(
    <div>
      <h2>Hello! I'm Heading</h2>
      <p>Hey! I'm Paragraph</p>
      <Title/>
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
// a) export default Name1             ("Default exports" are handy for exporting "single" value)
//    import Name1 from './Name1.jsx'  (We can import with Diffrent name too, regardless of Export name)

// b) export {Name1 Name2}  ("Named Exports" are useful when need to export "Multiple" Values)
//    import {Name1 Name2} from './Name1.jsx'

// c) export default function Name1() {return <h1>Hello</h1>;}
//    import { Name1 } from './Name1.jsx';  (we can import with custom name here, for that follow below import procedure)
// OR import { Name1 as MyComponent } from './Name1.jsx'; 

// React Documentation -> Quick Start -> Describing the UI -> Writing markup with JSX -> Scroll Down (Rules for JSX)

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
      <p> 2 * 2 = {2*2} </p>  //expresion inside {} is treated as pure JS
      <p>Your Good Name is {name.toUpperCase()}</p>
    </>
  );
}

// Structuring Components
// Created one Product Card (title + description), product.jsx
// but if want lumps of 3 cards we will again make ProductTab.jsx, importing product.jsx, where Storing and Sumarizing 3 Product Cards
// Now we will import that ProdctTab in main App.jsx, This is what proper Structuring of Componenets

// Styling React Components
// For every singel components, we should make seprate styling sheet
// App.jsx -> App.css
// Product.jsx -> Product.css
// ProductTab.jsx -> ProductTab.css
// And to link styling sheet we Import that to JSX sheet!! 
// Inside React, there WebPack is available which gives functionality of Import and Export
