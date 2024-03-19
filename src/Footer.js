import Logo from './assets/logo.png'
import { IoIosContact } from "react-icons/io";
import { MdOutlineRateReview } from "react-icons/md";
import { IoIosInformationCircle } from "react-icons/io";
import { MdOutlinePolicy } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
function Footer(){

    return(
        <div className="footer">
            <hr color='black'></hr>
            <br/>
            <div className="main">
                <div className="links">
                    <ul>
                        <li><IoIosContact/>&nbsp; Contact</li>
                        <li><MdOutlineRateReview/>&nbsp; Review</li>
                        <li><IoIosInformationCircle/>&nbsp; About us</li>
                        <li><MdOutlinePolicy/>&nbsp; Policy Statement</li>
                        <li><MdSupportAgent/>&nbsp; Customer support</li>
                    </ul>
                </div>
                <div className="logo">
                    <img src={Logo}></img>
                </div>
                <div className="socials">
                    <ul>
                        <li><FaTwitter/>&nbsp; Twitter</li>
                        <li><FaFacebook/>&nbsp; Facebook</li>
                        <li><FaInstagram/>&nbsp; Instagram</li>
                        <li><FaYoutube/>&nbsp; Youtube</li>
                        <li><FaReddit/>&nbsp; Reddit</li>
                    </ul>
                </div>
            </div>
            <hr color='black'></hr>
            <div className="extra">
                <p>FAKE Inc &copy;</p>&nbsp; &nbsp;
                <span>2024 Copyright Agreement</span>
            </div>
            <hr color='black'></hr>
        </div>
    )
}

export default Footer