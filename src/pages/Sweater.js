
import Sweater from '../assets/sweater.jpeg'
import Product from "../Cart/Product";
import { PRODUCTS} from "../Cart/Products";

function Sweaters(){
   

    return(
        
          <div className="content fadeIn slideInRight">
                <div className="sweater">
                    <img alt="" src={Sweater}></img>
                    <h1>Shop Sweaters</h1>
                </div>
                <div className="sweaterProducts">
                    {PRODUCTS.slice(0, 5).map((product)=>(
                            <Product key={product.id} data={product}/>
                    ))}
                </div>
          </div>
   
    );
}
export default Sweaters