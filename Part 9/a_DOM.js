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

   // Getting Element By Id
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

     // Getting elements by className
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

   // Getting Elements by TagName
// getElementByTagName ,Returns element as an HTML collection or empty collection
document.getElementsByTagName("p")  // all paragraph will display in serial number
document.getElementsByTagName("p")[1].innerText="Hellow How are You"
document.getElementsByTagName("span") //as span is not available, we will get "HTML collections" as an output.

    // Query Selector
// Benifits, we don't need to remember different selector Names


