// Application Programming Interface
// Generally 2 softwares interact through API's, it’s a way for different software programs to communicate with each other.
// But when any API interact through "https protocol", means interact on bases of internet are known as Web API
// APIs can help update a webpage in real-time without reloading it (eg: Like button in Instagram, after clicking like, page didn't reload again)

// Example 1: Zomato haven't build it's own Map, it's using Google's Map API (Here zomato efforts and time saved)
// Example 2: While Signup in few Websites, they directly asked, signup with Google or Microsoft (because these 2 have vast stored data about user)
// So those new Websites saved time and energy, to again go verify new users, because verified users are already exist in Google and Microsoft

// But as those websites like Zomato etc, are allowed to gather only required information of user, not all info!! so for this security, they use API Keys

// user sends the request to API, therfor API usually a url or link(end point) and API returns data in form of JSON
// Therefore then we use that data in JSON form only

// Some Random APIs
// https://catfact.ninja/fact (sends random cat facts)(in json)
// https://www.boredapi.com/api/activity (sends an activity to do when bored)
// https://dog.ceo/api/breeds/image/random (sends cute dog pictures)

// APIs returns data only in JSON, which simillar to "object: key" in js, therfore no image as no html and css

// JSON "Javascript Object Notation"
// It is not tied only to JavaScript, it’s language-independent but uses a syntax similar to JavaScript objects.
// "It's just an Format", if call data API from any language it will return JSON only

// Earlier data was returned in XML form(very simillar to HTML), but nowdays it returns in JSON format.
// JSON simillar to key:value pair of object But not Object, it’s just a string format (text-based).
// to check all JSON value/properties, www.json.org
// can also check that given json is valid or not; json validator

// Here you directly create a JavaScript object literal (not JSON string).
// No parsing step, it’s already an object.
let file={"fact": "Cats make about 100 different sounds. Dogs make only about 10.","length": 62}
console.log(file.fact)

// In JS, JSON comes in string format, so we need to use parse to extract it from string
// Acessing data from JSON
// a) JSON.parse(data) -- converts a JSON string into a JavaScript object.
// b) JSON.stringify(data) -- converts a JavaScript object into a JSON string.

// Here you start with a JSON string (notice the outer '...' and inner "...").
// JSON.parse(...) converts that JSON string → into a real JavaScript object.
let json='{"fact": "Cats make about 100 different sounds. Dogs make only about 10.","length": 62}'; //actual json
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
 // Here we will see Tools to test APIs
 // Tools: Hoppscoth(we will work with this, no singup required) and postman(need to download and singup), though both are simillar
 // https://hoppscotch.io/


 // Ajax (Asynchronus javascript and XML)
 // {before data used to return in xml so, naming is done according to it; but now we recive data in form of JSON}
 // Here the request go from "JS(user) to API" and data return from "API to JS in JSON" (This is done Asynchronusly)
 // for all work done Asynchronusly, Example: if like any post in instagram it will send request to API and increase like internally 
 // without loading whole insta page that's known as asynchronus work.

 // few example of "http verb", when API interact through "http protocol"{https://hoppscotch.io/}
 // "get" when we get an output from API in JSON
 // "post" when we post/upload in JSON 
 // "delete" when we delete anything in JSON
 

//  Status Codes (in hopscoth app) {Status code MDN}
//  Examples :
//   200 - 0K
//   404 - Not Found
//   400 - Bad Request
//   500 - Internal Server Error


// Adding Informations in URL
// https://www.google.com/search?q=harry+poter [q=harry+poter: Key(q)-value(harry+poter) Pair]
// ?name=Akansha&age=22 (?name=Akansha(key-value pair) &age=22(and another key-value pair)) "Query String"(&)
// So whenever we want to pass additional information to url, we use "Query String"
// https://api.potterdb.com  (u can normally search in Google: Harry potter API OR/ Twitter API)
// Scroll down -> APIs Docs -> API -> REST -> Expand to see all avilable APIs
// https://potterdb.com/  : in additonal add given API and paste Whole link to Hoppscotch site!! 

// 'key is constant' but 'value is variable'
// if written 2 key-value pairs with "&" and one is invalid, then it will ignore the invalid one and we will recieve output only for valid one!
// Meta data means; data about data
