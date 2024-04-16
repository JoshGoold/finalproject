import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import React, {useState} from 'react';
import Axios from 'axios'
import { useNavigate } from "react-router-dom";


function Register(){

    //used for navigation
    const nav = useNavigate();

    //redirects to login path
    const redirect = () =>{
        nav("/login");
    }
    //email validation
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)*[a-zA-Z]{2,}))$/;
    const validateEmailComprehensive = (email) => {
        return re.test(email);
      };
    //state variables used within application
    const [visible, setVisible] = useState(true);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [registerStatus, setRegisterStatus] = useState("");
    const backendUrl = `http://${process.env.BACKEND_SERVICE}:${process.env.BACKEND_PORT}`
    //stores user input
    const handleUsername = (e) => {
        setUsername(e.target.value);
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value);
    }
    const handleEmail= (e) =>{
        setEmail(e.target.value)
    }

    //credential validation
    const handleRegister = ()=>{
        if(email == "" || password == "" ||username == ""){
            alert("Please enter all specified fields")
        } else if (!validateEmailComprehensive(email)){
            alert("Enter a valid email address")
        } else if (password.length > 10){
            alert("Password must be 10 or less characters")
        } else {
            // Axios.post("/api/register", {
            //     username: username,
            //     email: email,
            //     password: password,
            // }).then((response)=>{
            //     if(response.data.message){
            //         setRegisterStatus(response.data.message)
            //     } else{
            //         setRegisterStatus("Account created successfully,")
            //         redirect();
            //     }
            // })
            redirect();
        }
    }

    return(
        <div className="body">

        {visible && (<div className="welcome slideInLeft">
            <h1 className="title">Welcome to FAKE</h1>
            <p className="message">Join our platform today</p>
        </div>)}
        <div className="register slideInRight">
            <div className="registerForm">
                <div className="head">
                    <h1 className="fh">Register Now</h1>
                </div>
                <div className="input-field">
                    <p>{registerStatus}</p>
                    <span> <FaUser/><input onChange={handleUsername} type="text" placeholder="Enter Username"></input></span>
                   
                    <br/>
                    <span><MdEmail/><input onChange={handleEmail} type="text" placeholder="Enter Email"></input></span>
                    <br/>
                    <span><FaLock/><input onChange={handlePassword} type="password" placeholder="Enter Password"></input></span>
                    <br/>
                    
                </div>
                <div className="buttons">
                    <button onClick={handleRegister} className="btn">Create Account</button>
                </div>
                <a onClick={redirect} href="#">Have an account already?</a>
            </div>
        </div>
    </div>

    );
}

export default Register