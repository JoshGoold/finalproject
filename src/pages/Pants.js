import pants from '../assets/pants.webp'
import Product from "../Cart/Product";
import { PRODUCTS} from "../Cart/Products";

function Pants(){
    return(          
    <div className="content fadeIn slideInRight">
                <div className="sweater">
                    <img alt="" src={pants}></img>
                    <h1>Shop Pants</h1>
                </div>
                <div className="sweaterProducts">
                    {PRODUCTS.slice(15, 20).map((product)=>(
                            <Product key={product.id} data={product}/>
                    ))}
                </div>
          </div>
   
    );
}
export default Pants