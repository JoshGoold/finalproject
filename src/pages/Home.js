import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from '../assets/logo.png'
import Trend from "./Trend";
import Shirts from "./Shirt";
import Sweaters from "./Sweater";
import Footer from "../Footer.js";
import Pants from "./Pants";
import Shoes from "./Shoes";
import axios from "axios";
import { CiShoppingCart } from "react-icons/ci";
import Default from '../assets/default.webp'

function Home(){
    const [showSidePanel, setShowSidePanel] = useState(true);
    const [light, setLight] = useState(false);
    const [modeText, setModeText] = useState("Light Mode")
    const [username, setUsername] = useState("")
    const nav = useNavigate()



    const handleSidePanel = () =>{
        setShowSidePanel(false)
        if(showSidePanel === false){
            setShowSidePanel(true)
        }
    }
    
    const element = document.getElementById("html")

    const handleMode = ()=>{
        setLight(true)
        setModeText("Dark Mode")
        element.style.colorScheme = "light";
        if(light === true){
            setLight(false)
            setModeText("Light Mode")
            element.style.colorScheme = "dark";
        }
    }
    axios.defaults.withCredentials = true;
    const handleLogout=()=>{
        axios.post("http://localhost:4100/logout")
        .then( res => {
            if(res.data.Message === "Success"){
                nav("/login");
            }
            
        }).catch(err => console.log(err))
    }
    useEffect(() => {
        // Fetch the username from the server
        axios.get('http://localhost:4100')
            .then(response => {
                if(response.data.valid){
                    setUsername(response.data.username)
                } else {
                    //if not logged into any account automatically redirects you to login
                    nav("/login");
                }
            })
            .catch(error => {
                console.error('Error fetching username:', error);
            });
    }, []);

   
    //variables for naviagtion handling
    const [home, setHome] = useState(true)
    const [sweater, setSweater] = useState(false)
    const [shirt, setShirt] = useState(false)
    const [pant, setPant] = useState(false)
    const [shoe,setShoe] = useState(false)

    //home navigation handling
    const handleHome =()=>{
        setHome(true)
        setPant(false)
        setShirt(false)
        setShoe(false)
        setSweater(false)
    }
    const handleSweaters=()=>{
        setHome(false)
        setPant(false)
        setShirt(false)
        setShoe(false)
        setSweater(true)
    }
    const handleShirts=()=>{
        setHome(false)
        setPant(false)
        setShirt(true)
        setShoe(false)
        setSweater(false)
    }
    const handlePants=()=>{
        setHome(false)
        setPant(true)
        setShirt(false)
        setShoe(false)
        setSweater(false)
    }
    const handleShoes=()=>{
        setHome(false)
        setPant(false)
        setShirt(false)
        setShoe(true)
        setSweater(false)
    }
    const handleCart=()=>{
        nav("/cart")
    }

   

    return(
        <div className="page">
            {showSidePanel && ( 
            <div className="side-panel slideInLeft">
                <img className={light ? 'lm' : 'dm'} src={Logo}></img>
                <button className={light ? 'lm' : 'dm'} onClick={handleHome}>Home</button>
                <button className={light ? 'lm' : 'dm'} onClick={handleShirts}>Shirts</button>
                <button className={light ? 'lm' : 'dm'} onClick={handleSweaters}>Sweaters</button>
                <button className={light ? 'lm' : 'dm'} onClick={handlePants}>Pants</button>
                <button className={light ? 'lm' : 'dm'} onClick={handleShoes}>Shoes</button>
                
                <div className="fix">
                    <button className={light ? 'lm' : 'dm'} onClick={handleMode}>{modeText}</button>
                <button id="end" className={light ? 'lm' : 'dm'}  onClick={handleLogout}>Logout</button>
                <button onClick={handleSidePanel} className="exit">❌</button>
                </div>
            </div>)}
       
        <div className="page-body">
          <div className="head fadeIn slideInLeft">
           
            <h1> {!showSidePanel && (<button className="show" onClick={handleSidePanel}>≣</button>)} <img src={Default} height="50px" width="50px"  alt=""></img> {username}</h1>
            <ul>
                <li>About Us</li> 
                <li>Services</li>
                <li>Contact</li>
                
                <li id="cart" onClick={handleCart}>{<CiShoppingCart/>}</li>
                
            </ul>
          </div>
          {home && (
            <Trend/>
          )}
          {shirt && (
            <Shirts/>
          )}
          {sweater && (
            <Sweaters/>
          )}
          {shoe && (
            <Shoes/>
          )}
          {pant && (
            <Pants />
          )}
          <Footer/>
          </div>
          
    </div>
    
    );
}
export default Home