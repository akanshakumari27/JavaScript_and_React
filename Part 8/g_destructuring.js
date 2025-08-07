// By Destructuring Method we can abstrat any particular element and store in differnt variable
let names=["Akansha","suman","vishesh","rohit","ankur"]
//let winner=names[0];
//let runnerup=names[1];  instead we can use destructure 
let[winner, runnerup, ...other]=names;  // using combination of {destructure and rest} method
// Now if we call winner = it will return Akansha
// runnerup = suman
// other = ['vishesh','rohit','ankur']

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
// And you want to add extra 'key:value' like 'Matter="Hello"'
let{name, city, country, subject, Matter="Hello"}=info;  // we need to write exact same name given in Object's key.

// but if we want to call that 'key' with different name, we can write as 'key : diffrentName' 
let{ name:HerName, city:HerCity , yes:Matter="Hello"}=info; 
// by this, if we write HerName or HerCity, then we will get output else just writting name or city will return error now.
