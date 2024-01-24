 // React Props
// Props are the extra Information that you pass to JSX tag.
// Components are like function

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
        <div className = "Product">
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

