import Product from "../Cart/Product";
import { PRODUCTS } from "../Cart/Products";
import { useState, useEffect } from "react";
import slided from '../assets/back.avif'
import slide1 from '../assets/pants.jpeg'
import slide2 from '../assets/sweater.jpeg'
import slide3 from '../assets/shoes.jpeg'
import slide4 from '../assets/shirts.jpeg'
import Logo from '../assets/logo.png'
function Trend(){

    const [slide, setSlide] = useState(true);

    const handleSlide=()=>{
        setSlide(false)
        if(slide===false){
            setSlide(true);
        }
    }

     //slideshow
     const [currentSlide, setCurrentSlide] = useState(0)

     const [currentText, setCurrentText] = useState(0)
     
     const time = 3000;
     let slides = [
        slided,
        slide1,
        slide2,
        slide3,
        slide4
    ]
    let texts = [
        "Shop Now",
        "Explore our Wardrobe",
        "Quality Guranteed",
        "For the best You",
        "The Future is Now"
    ]
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentSlide((prevSlide)=> (prevSlide+1)% slides.length)
            setCurrentText((prevText)=> (prevText + 1)% texts.length )
        }, time);
        return ()=> clearInterval(interval)
    }, [])
    return(
        
          <div className="content slideInRight fadeIn">
                <div className="trend">
                    <img id="slides" src={slides[currentSlide]} alt="" ></img>
                    <h1>{texts[currentText]}</h1>
                </div>
                <br/>
                <br></br>
                <h1 className="subhead">Top Sellers</h1>
                <div className="sweaterProducts">
                    {PRODUCTS.slice(17, 20).map((product)=>(
                        <Product data={product}/>
                    ))}
                    <img height="375px" src={Logo}></img>
                </div>
                {slide && (
                    <div>
                    <h1 className="subhead">New Drops</h1>
                <div className="sweaterProducts">
                {PRODUCTS.slice(12, 16).map((product)=>(
                    <Product data={product}/>
                ))}
                <button className="slide" onClick={handleSlide}>→</button>
                </div>
                </div>
                )}
                {!slide &&(
                     <div>
                     <h1 className="subhead">New Drops</h1>
                 <div className="sweaterProducts">
                 {PRODUCTS.slice(7, 11).map((product)=>(
                     <Product data={product}/>
                 ))}
                 <button className="slide"  onClick={handleSlide}>→</button>
                 </div>
                 </div>
                )}
                
                
                <h1 className="subhead">Explore Antiques</h1>
                <div className="sweaterProducts">
                {PRODUCTS.slice(0, 7).map((product)=>(
                    <Product data={product}/>
                ))}</div>
          </div>
    );
}
export default Trend