// By Destructuring Method we can abstrat any particular element and store in differnt variable
let names=["Akansha","suman","vishesh","rohit","ankur"]
//let winner=names[0];
//let runnerup=names[1];  instead we can use destructure 
let[winner, runnerup, ...other]=names;  // using combination of destructure and rest method

// Destructure in Object
const info={
    name:"Akansha kumari",
    password:"Helo435",
    subject:["English","Hindi","Science","Math"],
    course:"B.tech",
    city:"Bareilly",
    country:"India"
}

    // Calling Object Seperately
// let name=info.name;
// let city=info.city;

// Calling Object by Destructor Method
// let{name, city, country, subject}=info;

let{ name:HerName, city:HerCity , Matter="Hello"}=info;  // OR  yes:Matter="Hello"
    // by this, if we write HerName or HerCity, then we will get output else error plus we can assign defult value too
