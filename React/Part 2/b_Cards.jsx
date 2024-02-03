// *** App.jsx ***
import ProductTab from './ProductTab'

function App() {
  return (
    <div>
      <h3 style={{display:"flex", flexDirection:"column", alignItems:"center"}}>Available Products</h3>
      <ProductTab />
    </div>
  )
}


// *** ProductTab.jsx ***
import Product from './Product'

function ProductTab(){
    //Passing Props in Every Single Product Component
    let styles={display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center"
            }
    return( 
        <div style={styles}>
        <Product title="Product 1" idx={0}/> {/* idx="0" will also work but pass it in String*/}
        <Product title="Product 2" idx={1}/> 
        <Product title="Product 3" idx={2}/> 
        <Product title="Product 4" idx={3}/> 
        </div>
    )
}


//   *** Product.jsx ***
// Building an Amazon Cards
import './Product.css'
import Price from './Price'
function Product({title, idx}){
    let price1 = ["4200","5400","6802","7685"]
    let price2 = ["768","259","422","703"]
    let description = [
    ["Hey! I'm project 1","Product 1"],
    ["Helo product 2","Product 2"],
    ["Heyy! product 3","Product 3"],
    ["Damn! product 4","Product 4"]]
    return(
        <div className='card'>
            <div className='upperCard'>
                <h2><b>{title}</b></h2>
                <p>{description[idx][0]}</p> {/* a[i][j] i'th row j'th element*/}
                <p style={{display:"flex", flexDirection:"column", alignItems:"center"}}>{description[idx][1]}</p>
            </div>
            <div className='lowerCard'>
                <Price oldPrice={price1[idx]} newPrice={price2[idx]}/>
                {/* "" when want to pass Strings(Static), {} if want to pass Variable Values(Dynamic), passing props in Single Price Component */}
            </div>
        </div>
    )
}


//  **** Price.jsx ****
export default function Price({oldPrice, newPrice}){
    // Seperate Price Componenet
    let oldPriceStyle={
        textDecoration: "line-through"
    }
    return(
        <div>
            <span style={oldPriceStyle}>{oldPrice}</span> {/*div takes whole line but, want to reflect both element in single line so used span*/}
            &nbsp;&nbsp;
            <span>{newPrice}</span>
        </div>
    )
}

//  *** Product.css ***
/* .card{
    border: 1.5px black solid;
    margin: 1%;
    padding: 1%;
    border-radius: 10px;
    width: 250px;
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
 }  */