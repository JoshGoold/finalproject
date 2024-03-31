
import shoes from '../assets/shoes.jpeg'
import Product from "../Cart/Product";
import { PRODUCTS} from "../Cart/Products";


function Shoes(){
    

    return(
        
          <div className="content fadeIn slideInRight">
                <div className="sweater">
                    <img alt="" src={shoes}></img>
                    <h1>Shop Shoes</h1>
                </div>
                <div className="sweaterProducts">
                    {PRODUCTS.slice(10, 15).map((product)=>(
                            <Product key={product.id} data={product}/>
                    ))}
                </div>
          </div>
  
    );
}
export default Shoes