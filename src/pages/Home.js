import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from '../assets/logo.png'
import Trend from "./Trend";
import Shirts from "./Shirt";
import Sweaters from "./Sweater";
import Footer from "./Footer.js";
import Pants from "./Pants";
import Shoes from "./Shoes";
import axios from "axios";
import { CiShoppingCart } from "react-icons/ci";
import Default from '../assets/default.webp';
import AboutUs from "./AboutUs.js";
import Contact from "./Contact.js";
import CS from './cS.js'
import { FaHome } from "react-icons/fa";
import { FaTshirt } from "react-icons/fa";
import { GiShirt } from "react-icons/gi";
import { PiPantsFill } from "react-icons/pi";
import { GiConverseShoe } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoInvertMode } from "react-icons/io5";
import { MdLogout } from "react-icons/md";

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
    const [cs, setCs] = useState(false)
    const [aboutUs, setAboutUs] = useState(false)
    const [contact, setContact] = useState(false)

    //home navigation handling
    const handleHome =()=>{
        setHome(true)
        setPant(false)
        setShirt(false)
        setShoe(false)
        setCs(false)
        setSweater(false)
        setAboutUs(false)
        setContact(false)
    }
    const handleSweaters=()=>{
        setHome(false)
        setPant(false)
        setShirt(false)
        setCs(false)
        setShoe(false)
        setCs(false)
        setSweater(true)
        setAboutUs(false)
        setContact(false)
    }
    const handleShirts=()=>{
        setHome(false)
        setPant(false)
        setShirt(true)
        setCs(false)
        setShoe(false)
        setCs(false)
        setSweater(false)
        setAboutUs(false)
        setContact(false)
    }
    const handlePants=()=>{
        setHome(false)
        setPant(true)
        setShirt(false)
        setShoe(false)
        setCs(false)
        setSweater(false)
        setAboutUs(false)
        setContact(false)
    }
    const handleShoes=()=>{
        setHome(false)
        setPant(false)
        setShirt(false)
        setShoe(true)
        setSweater(false)
        setAboutUs(false)
        setContact(false)
    }
    const handleAboutUs=()=>{
        setHome(false)
        setPant(false)
        setShirt(false)
        setCs(false)
        setShoe(false)
        setSweater(false)
        setAboutUs(true)
        setContact(false)
    }
    const handleContact=()=>{
        setHome(false)
        setPant(false)
        setShirt(false)
        setShoe(false)
        setCs(false)
        setSweater(false)
        setAboutUs(false)
        setContact(true)
    }
    const handleCs=()=>{
        setHome(false)
        setPant(false)
        setShirt(false)
        setShoe(false)
        setCs(true)
        setSweater(false)
        setAboutUs(false)
        setContact(false)
    }
    const handleCart=()=>{
        nav("/cart")
    }
    const handleMouseOver=()=>{
        setFullView(true);
    }
    const handleMouseOut=()=>{
        setFullView(false)
    }
    
   const [fullview, setFullView] = useState(false);

    return(
        <div className="page">
            {showSidePanel && ( 
            <div onMouseOut={handleMouseOut} onMouseOver={handleMouseOver} className="side-panel slideInLeft">
            <img className={light ? 'lm' : 'dm'} src={Logo}></img>
            <button className={light ? 'lm' : 'dm'} onClick={handleHome}><FaHome/>&nbsp;{fullview ? 'Home' : ''}</button>
            <button className={light ? 'lm' : 'dm'} onClick={handleShirts}><FaTshirt/>&nbsp;{fullview ? 'Shirts' : ''}</button>
            <button className={light ? 'lm' : 'dm'} onClick={handleSweaters}><GiShirt/>&nbsp;{fullview ? 'Sweaters' : ''}</button>
            <button className={light ? 'lm' : 'dm'} onClick={handlePants}><PiPantsFill/>&nbsp;{fullview ? 'Pants' : ''}</button>
            <button className={light ? 'lm' : 'dm'} onClick={handleShoes}><GiConverseShoe/>&nbsp;{fullview ? 'Shoes' : ''}</button>
            <button className={light ? 'lm' : 'dm'} onClick={handleCs}><RiCustomerService2Fill/>&nbsp;{fullview ? 'Virtual Assistant' : ''}</button>
            <button className={light ? 'lm' : 'dm'} onClick={handleMode}><IoInvertMode/>&nbsp;{fullview ? `${modeText}` : ''}</button>
            <div className="fix">
                
            <button id="end" className={light ? 'lm' : 'dm'}  onClick={handleLogout}><MdLogout/>&nbsp;{fullview ? 'Logout' : ''}</button>
            <button onClick={handleSidePanel} className="exit">❌</button>
            </div>
        </div>)}
       
        <div className="page-body">
          <div className="head fadeIn slideInLeft">
           
            <h1> {!showSidePanel && (<button className="show" onClick={handleSidePanel}>≣</button>)} <img src={Default} height="50px" width="50px"  alt=""></img> {username}</h1>
            <ul>
                <li className={light ? 'lm' : 'dm'} onClick={handleAboutUs}>About Us</li> 
                <li>Services</li>
                <li className={light ? 'lm' : 'dm'} onClick={handleContact}>Contact</li>
                
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
          {aboutUs && (
            <AboutUs/>
          )}
          {contact && (
            <Contact/>
          )}
          {cs && (
            <CS/>
          )}
          <Footer handleCs={handleCs}/>
          </div>
          
    </div>
    
    );
}
export default Home