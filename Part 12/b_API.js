
// Application Programming Interface
// Generally 2 softwares interact through API's
// But when any API interact through "https protocol", means interact on bases of internet, Web API
// User - API - server
// user sends the request to API, therfor API usually a url or link(end point) and API returns data in form of JSON

// Some Random APIs
// https://catfact.ninja/fact (sends random cat facts)(in json)
// https://www.boredapi.com/api/activity (sends an activity to do when bored)
// https://dog.ceo/api/breeds/image/random (sends cute dog pictures)

//APIs returns data only in JSON, which simillar to "object: key" in js, therfor no image as no html nd css

// JSON "Javascript Object Notation"
// It not only part of js," It's just an Format ", if call data API from any language it will return JSON only

// Earlier data was returned in XML form(very simillar to HTML), but now JSON
// JSON simillar to key:value pair of object But not Object, like "undefined" is in js object value but not in JSON
// to check all JSON value/properties, www.json.org
// can also check that given json is valid or not, json validator

let file={"fact": "Cats make about 100 different sounds. Dogs make only about 10.","length": 62}
console.log(file.fact)

// when JSON is in string format, we can use parse to extract it from string
// Acessing data from JSON
// a) JSON.parse(data) -- to parse a string data into js object
// b) JSON.stringify(data) -- to parse js object data into json

let json='{"fact": "Cats make about 100 different sounds. Dogs make only about 10.","length": 62}' //actual json
let js=JSON.parse(json) 
console.log(js.fact)

// b)
 let yay={    //object, key: value pair
    name:"Akansha",
    Lname:"kumari",
    course:"B.tech cse"
 }
 JSON.stringify(yay) //get output in json

 //  **** Testing API requets ****
 // Tools: Hoppscoth(we will work with this, no singup required) and postman(need to download and singup), though both are simillar
 // https://hoppscotch.io/


 // Ajax (Asynchronus javascript and xml)
 // here the request go from "Js(user) to API" and data return from "API to Js in JSON" {before data used to return in xml so, naming is done according to it before}
 // for all work done Asynchronusly, Example: if like any post in instagram it will send request to API and increase like internally 
 // without loading whole insta page that's known as asynchronus work

 // few example of "http verb", when API interact through "http protocol"{https://hoppscotch.io/}
 // "get" when we get an output from API in JSON
 // "post" when we post/upload in JSON 
 // "delete" when we delete anything in JSON
 

//  Status Codes {Status code MDN}
//  Examples :
//   200 - 0K
//   404 - Not Found
//   400 - Bad Request
//   500 - Internal Server Error


// Adding Informations in URL
// https://www.google.com/search?q=harry+poter (q=harry+poter: Key-value Pair) "Query String" (for space +)
// ?name=Akansha&age=22 (?name=Akansha(key-value pair) &age=22(and another key-value pair)) "Query String" (for and &)
// So whenever we want to pass additional information to url, we use "Query String"
// https://api.potterdb.com
// key-constant but value-variable
// if written 2 key-value pairs with "&" and one is invalid, then it will ignore the invalid one and we will recieve output only for valid one!
// Meta data -- data about data