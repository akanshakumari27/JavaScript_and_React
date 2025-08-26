// "Render" means the process of converting code (like HTML, CSS, and JavaScript) into the visual, interactive web pages that users see and interact with in their browser.

function onclickFunct(){
    console.log("Button Clicked")
}
function ondoubleclickFunct(){
    console.log("Double Clicked")
}
function onmouseEventFunct(){
    console.log("Mouse Hover")
}
export default function Button(){
    return(
        <div>
            <button onClick={onclickFunct}>Click Me!</button>
            <p onMouseOver={onmouseEventFunct}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint aliquam perferendis,
                 in magni ad blanditiis adipisci ex magnam non reprehenderit, 
                beatae facilis voluptatibus fuga laudantium placeat cumque optio asperiores nobis.</p>
            <button onDoubleClick={ondoubleclickFunct}>Double Click Me!</button>
        {/* Remeber not onDoubleClick={ondoubleclickFunct()} beacuse as we refresh page it'll automatically execute function nd not gonna excute more number times we press button*/}
        </div>
    )
}


// *** 'event Object' in Function for any Methods applying ***
function getEvent(event){
    console.log(event)  //this will print all Event object's Methods and Attributes!
    console.log("Submitted")
    event.preventDefault() //One of the Event's Method, used to prevent Default Submission of Form!
}
export default function Button(){
    return(
        <form onSubmit={getEvent}> {/* Here onSubmit's Methods and Attributes will display */} 
            <input type="text" placeholder="Write here.."></input>
            <button>Click Me!</button>  {/* or you can use onClick here, both will work same!*/}
        </form>
    )
}
// * React automatically refresh UI but for Console we need to refresh page! *
