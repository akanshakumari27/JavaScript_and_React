// ****** React Props ********
// Props are the extra Information that you pass to JSX tag.

/*
   if we pass any information here, known as props
   <Product information />  ** will use as an argument in function, which further can use inside function, eg. given below**

       means

    function Product(information){
        return UI
    }
*/ 

/*
 sum(a+b){   //argument
    return a+b;
 }
 sum(4,3)  //value/parameter
 
 simillarly,

 <Product title="Phone" price="10k" /> (title = argument, Phone = value/parameter)
*/

// Now, if want to see inner props of component using Console.log, need to comment React.StrictMode otherwise will print object twice!
// function Product(props){
//   console.log(props)
// }


// a) ProductTab.jsx
function ProductTab(){
    return(
        <>
        <Product title="Phone"/>
        <Product title="Tablet"/>
        <Product title="Laptop"/>
        </>
    )
}
//Product.jsx
function Product(props){
    console.log(props)  //Object
    return(
        <div className = "Product"> {/* For styling "Product class" in css file */}
        <h4>{props.title}</h4>
        <p>Paragraph</p>
        </div>
    )
}


// b) ProductTab.jsx
function ProductTab(){
    return(
        <>
        <Product title="Phone" price={30000}/>
        <Product title="Laptop" price={70000}/>
        <Product title="Tablet" />
        </>
    )
}
//Product.jsx
function Product({title, price="4000"}){ //we can assign default value also, if price not given
    return(
        <div className = "Product">
        <h4>{title}</h4>
        <p>Price: {price/2}</p> {/*If write Props in number, we can apply arithmetic calculation too in it like this*/}
        </div>
    )
}

// *** Writing Props in form of Array and Object(Key-value) pair ***
// ProductTab.jsx
function ProductTab(){
    let options1 = ["hey, ","hello, ","how are you"] //bydefault there will be no space, so need to provide extra space
    let options2 = {veggie:"tomato", fruit:"apple", tree:"banana tree"} //Object only works when there only 1 Product to return
    return( 
        //all props must inside in {}
        <>
        <Product 
        title="Phone" 
        price={30000} 
        feature1 = {options1} 
        feature2 = {options2}
        feature3 = {["my ","name ","is Akansha"]}  /* writing Array directly */
        feature4 = {{phone:"micromax", pc:"hp", desktop:"dell"}}/>  {/* writing Object directly */}
        </>
    )
}
// Product.jsx
function Product({title, price, feature1, feature2, feature3, feature4}){ 
    return(
        <div className = "Product"> 
        <h4>{title}</h4>  {/*all Props in curly braces*/}
        <p>{feature1}</p>
        <p>{feature2.veggie}</p>
        <p>{feature3}</p>
        <p>{feature4.pc}</p> {/*Need to abstract particular key from oject otherwise it won't work*/}
        </div>
    )
}

// *** Rendering Array, extracting or printing all Array elements indvidually ****
function ProductTab(){
    let arrayElement = [<li>"Hello!"</li>,<li>"How"</li>,<li>"are"</li>,<li>"you"</li>]
    return( 
        <>
        <Product 
        title="Phone" 
        price={30000} 
        elements = {arrayElement} /> 
        </>
    )
}
function Product({title, price,elements}){ 
    return(
        <div className = "Product"> 
        <h4>{title}</h4>
        <p>{price}</p>
        <p>{elements}</p>
        </div>
    )
}
 
// Second Method
function ProductTab(){
    let arrayElement = ["Hello!","How","are","you"]
    return( 
        <>
        <Product 
        title="Phone" 
        price={30000} 
        elements = {arrayElement} /> 
        </>
    )
}
function Product({title, price, elements}){ 
    return(
        <div className = "Product"> 
        <h4>{title}</h4>
        <p>{price}</p>
        <p>{
         elements.map((element)=>(<li>{element}</li>)) //Map is used to iterate over an array and return new array()=>()
        }</p>
        </div>
    )
}


// *** Conditionals: Adding Elements on basis of Some Conditions ***
function ProductTab(){
    return( 
        <>
        <Product title="Phone" price={30000} /> 
        <Product title="EarPod" price={15000} /> 
        <Product title="Tab" price={50000} /> 
        </>
    )
}
function Product({title, price}){ 
    if(price>40000){
        return(
            <div className = "Product"> 
            <h4>{title}</h4>
            <p>{price}</p>
            <p>Discount: 5%</p>
            </div>
        )
    }else{
        return(
            <div className = "Product"> 
            <h4>{title}</h4>
            <p>{price}</p>
            </div>
        )
    }
}  
// Better and Optimised method with Dynamic Component of Styling
function Product({title, price}){
    let getStyle = {backgroundColor : price>30000 ? "pink":""}
    return(
        <div className = "Product" style={getStyle}> {/*Writing "style" in jsx*/}
        <h4>{title}</h4>
        <p>{price}</p>
        {/* <p>{price>40000 ? "Discount: 5%":""}</p> ,but this creates empty paragraph tag for false statement*/}
        {price>40000 ? <p>Discount: 5%</p>:null}
        {price<20000 ? <p>No Acesseries</p>: <a href='./'>Extra Acceseries</a>}
        {price>40000 && <p>Discount:5%</p>} 
        {/* && operator, if stament False nothing will execute as false&& = false*/}
        </div>
    )
}
