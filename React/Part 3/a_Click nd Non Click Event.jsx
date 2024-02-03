function onclickListener(){
    console.log("Button Clicked")
}
function ondoubleclickEvent(){
    console.log("Double Clicked")
}
function onmouseEvent(){
    console.log("Mouse Hover")
}
export default function Button(){
    return(
        <div>
            <button onClick={onclickListener}>Click Me!</button>
            <p onMouseOver={onmouseEvent}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint aliquam perferendis,
                 in magni ad blanditiis adipisci ex magnam non reprehenderit, 
                beatae facilis voluptatibus fuga laudantium placeat cumque optio asperiores nobis.</p>
            <button onDoubleClick={ondoubleclickEvent}>Double Click Me!</button>
        {/* Remeber not onDoubleClick={ondoubleclickEvent()} beacuse as we refresh page it'll automatically execute function nd not gonna excute more number times we press button*/}
        </div>
    )
}


// *** event in Function for any Methods applying ***

function getEvent(event){
    console.log(event)  //this will print all Event object's Methods and Attributes!
    console.log("Submitted")
    event.preventDefault() //One of the Event's Method, used to prevent Default Submission of Form!
}
export default function Button(){
    return(
        <form onSubmit={getEvent}> {/* onClick will also Work */}
            <input type="text" placeholder="Write here.."></input>
            <button>Click Me!</button>
        </form>
    )
}
// * React automatically refresh UI but for Console we need to refresh page! *