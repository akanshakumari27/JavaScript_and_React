// Document Object Model
// It represent Document with a "Logical Tree"
// It allows us to Select/Manipulate/change WebPage Content (Using HTML) 

// "window"  inbuild object available in js simillarly
// "document"  inbuild object available in html

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
document.getElementById("mainImg"); 
let a=document.getElementById("mainImg")  //by this we can access Id and check and Modify Various things
console.dir(a)  //print img object
a.src  
a.tagName
a.src="assets/creation_2.jpeg"  //we can chnage src

// Simillarly for paragrpah etc
document.getElementById("desription")
console.dir(document.getElementById("desription"))

     // * Getting elements by className *
// getElementsByClassName ,returns elements as an HTML collections or empty
// Not an array but similar to an array, we can iterate, find length but can't push and pop
// #{{only get id have element rest all have elements}}

document.getElementByClassName("images")
document.getElementsByClassName("images")[0] //for indexes in array

//To get every element
let smallimages=document.getElementsByClassName("images")
for(let i=0; i<=smallimages.length; i++){
    console.dir(smallimages[i]);   // Or "smallimages[i].src" for all sources of images
}

   // * Getting Elements by TagName *
// getElementByTagName ,Returns element as an HTML collection or empty collection
document.getElementsByTagName("p")  // all paragraph will display in serial number
document.getElementsByTagName("p")[1].innerText="Hellow How are You"
document.getElementsByTagName("span") //as span is not available, we will get "HTML collections" as an output.

    // * Query Selector *
// Benifits, we don't need to remember different selector Names
console.dir(document.querySelector("h1"))  //heading
console.dir(document.querySelector("#description"))  //Id
console.dir(document.querySelector(".images"))  //class

// Demerit, It select only 1st object of that class, not whole
// like only 1st heading, 1st paragraph, 1st class

console.dir(document.querySelector("div a"));  //will select only 1st anchor tag inside div
console.dir(document.querySelectorAll("div a"))  //will select all anchor tags, will get Node list


  // ****** DOM Manipulation ,using properties and methods ********
let para=document.querySelector("p")
console.dir(para) // it will display alot of properties of it

// innerText, Shows the visible text contained in a node(one of the property)
para.innerText;

// innerContent, Shows full text(like display: none etc)
para.innerContent;

// innerHTML, Shows full text + Markup
para.innerHTML;

// for Manipulation
para.innerHTML="Hey, I am <b>Akansha kumari</b>"
para.innerHTML=`<u>${para.innerHTML}</u>`


   // *** Manipulating Attributes ***
// attributes like id, class, style etc(example, attributes of image tag= src, alt)(attributes of a tag= href etc)
Object.getAttribute(attr) //to get
Object.setAttribute(attr) //to set

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

let links=document.querySelectorAll('.box a')
for(let i=0;i<links.length;i++){
     links[i].style.color="red"     
} 
  // OR
for(link of links){
   links.style.color="red"; 
}
// But by this, we can only set inline styling, not proper styling in css page!!
// Like we can't find styles in "heading.style", which is set in css Page!!

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




