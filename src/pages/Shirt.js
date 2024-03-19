
import shirt from '../assets/shirts.jpeg'
import Product from "../Cart/Product";
import { PRODUCTS} from "../Cart/Products";

function Shirts(){
   return(
          <div className="content fadeIn slideInRight">
                <div className="sweater">
                    <img alt="" src={shirt}></img>
                    <h1>Shop Shirts</h1>
                </div>
                <div className="sweaterProducts">
                    {PRODUCTS.slice(5, 10).map((product)=>(
                            <Product key={product.id} data={product}/>
                    ))}
                </div>
          </div>
  
    );
}
export default Shirts