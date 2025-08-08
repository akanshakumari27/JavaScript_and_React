// Document Object Model
// It represent Document with a "Logical Tree"
// It allows us to Select/Manipulate/change WebPage Content (Using HTML) 
// Every singel HTML elements acts as Object in JavaScript, and if we want to change div element of HTML, we will access div object in JS

// "window"  inbuild object available in JS simillarly
// "document"  inbuild object available in HTML

// write in console: window, it will display all properties of JS
// write in console: console.dir(document), it will display all properties of HTML and CSS 

// all CSS and HTML code formed as a Document in JS.
// the console.log() returns the object in its string representation and
// console.dir() recognizes the object just as an object and outputs its properties.

console.dir(document);  // Here we will get alot of values, we will pick "all"
console.dir(document.all);  //document=Object, .all=It's Property/Object properties

// inside document-> all-> 9th index, it's h1
console.dir(document.all[9]) 
// we can change it's innerText
document.all[9].innerText="Peter Parker"

   // * Getting Element By Id *
// getElementById ,returns element as an object or null
document.getElementById("mainImg");  //mainImg is id name for image in HTML, this will return us image object!
let a=document.getElementById("mainImg")  // so we will first store it in Variable, then by this we can access Id and check and Modify Various things
a // will display img code line
console.dir(a)  //print img object
// Now you can apply diffrent objects on image variable to make changes.
a.src  
a.tagName
a.src="assets/creation_2.jpeg"  //we can change src

// Simillarly for paragrpah etc
document.getElementById("desription")
console.dir(document.getElementById("desription"))

     // * Getting elements by className *
// getElementsByClassName ,returns elements as an HTML collections or empty
// Not an array but similar to an array, we can iterate, find length but can't push and pop
// #{{only get id have element, rest all have collection of elements}}

document.getElementByClassName("images")
document.getElementsByClassName("images")[0] // to get index [0] element of array, ass in provided HTML code, there 3 elements present

//To get every element, go to JS File and write;
let smallimages=document.getElementsByClassName("images")
for(let i=0; i<=smallimages.length; i++){
    console.dir(smallimages[i]);   // Or "console.dir(smallimages[i].src)" for all sources of images
}

// you can even change the image
let smallimages=document.getElementsByClassName("images")
for(let i=0; i<=smallimages.length; i++){
    smallimages[i].src = "-----";  //add any image link, it will update all three images into that given link image   
}

document.getElementById("jdjs"); // NULL ,giving wrong id name will return NULL
document.getElementByClassName("dsbns"); //HTML collection, giving wrong classname will return HTML collection of 0 Length (showing 0 dsbns className exist)

   // * Getting Elements by TagName *
// getElementByTagName ,Returns element as an HTML collection or empty collection
document.getElementsByTagName("p")  // all available paragraph will display in serial number // "P" will also works
document.getElementsByTagName("p")[1].innerText="Hellow How are You"  // First available paragraph will upadte
document.getElementsByTagName("span") // if span is not available, we will get "HTML collections" as an output.

    // ** Query Selector **
// Benifits, we don't need to remember different selector Names
console.dir(document.querySelector("h1"))  //heading
console.dir(document.querySelector("#description"))  //Id 
// Note: Query selector is used to select only singel element, so in case of Class, it will display object of First image available in that class
console.dir(document.querySelector(".images")) 

// Demerit, It select only 1st object of that class, not whole
// like only 1st heading, 1st paragraph, 1st class

console.dir(document.querySelector("div a"));  //will select only 1st anchor tag inside div
console.dir(document.querySelectorAll("div a"))  //will select all anchor tags, will get Node list
// Therefore to select every P tag, or H1 tag, u can use 'All'.

  // ****** DOM Manipulation ,using properties and methods ********
let para=document.querySelector("p")
console.dir(para) // it will display alot of properties of it

// innerText, Shows the visible text contained in a node OR visible in a Screen
para.innerText;

// innerContent, Shows all the full text(even any hidden text, like display:none)
para.innerContent;

// innerHTML, Shows the full (text + Markup)(Text + Markup like bold, paragraph, or any other tag)
para.innerHTML;

// for Manipulation
para.innerText="Hey, I am <b>Akansha kumari</b>"  // It will not treat bold tag as Bold, it treats everything like Text only
para.innerHTML="Hey, I am <b>Akansha kumari</b>"  // This will work
para.innerHTML=`<u>${para.innerText}</u>`  // here you dont need to write whole para, just using this, will change all!


// *** Manipulating Attributes ***
// attributes like id, class, style etc(example, attributes of image tag= src, alt)(attributes of a tag= href etc)
Object.getAttribute(attr) //to get
Object.setAttribute(attr, val) //to set, 'val'+ is the value in which we want to set that attribute to Value

let img=document.querySelector('img') //1st image will display (as tag name is img)
img  //src will print
img.getAttribute("id")  //[~ mainImg] //by this we will get id
img.setAttribute("id","SpiderMan Image")  // we can change id
img.setAttribute("src","assets/creation_3.jpeg")  // can change src
img.getAttribute("class")  //[~ NULL]
img.setAttribute("class","Imagez")  //we can set the class also

   // ***** Manipulating Style ******
console.dir(img)  // will get alot properties of this object
img.style  // style, one of it's property

let heading=document.querySelector("h1")
console.dir(heading)
heading.style
heading.style.color="yellow"  //by this we can set the color
heading.style.backgroundColor="red"   //in js Camel Case works

let links=document.querySelectorAll('.box a') // 'a' is anchor tags
for(let i=0;i<links.length;i++){
     links[i].style.color="red"     
} 
  // OR
for(link of links){
   links.style.color="red"; 
}
// But by this, we can only set inline styling, not proper styling in css page!!
// Like we can't find setted style in "heading.style" in console, it will only visible when we set in our Main CSS Page!!

  //  **** Using Class List ****
let image=document.querySelector("img")
console.dir(image)   // as like "style","classList" is also one of it's property
image.classList   // we will get all classes if have
image.classList.add("Helow")    // we can add multiple classes like this
image.classList.remove("Helow")   

// why to choose ".classList.add()" over ".setAttribute("class","ClassName")"
// in .setAttribute we can acess only single class at a time, but in classList.add we can add and acess all multiple clases at time

image.classList.contains("backgroundColor")  //~[False]
// through contains we can check backgroundColor or any more properties is set in this particular class

image.classList.toggle("Helow")
// Toggle means, if True will become False vise versa
// by this if Helow class is already present, it will remove it ~[output = FALSE]
// else if not present, will add it ~[output = TRUE]

