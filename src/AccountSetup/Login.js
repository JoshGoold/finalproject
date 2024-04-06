import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import { useNavigate } from "react-router-dom";


function Login(){

    //used for navigation
    const nav = useNavigate();

    //redirects to login path
    const redirect = () =>{
        nav(`/home/${username}`);
    }
    //redirects to register
    const register = () =>{
        nav("/");
    }
    //state variables used within component
    const [visible, setVisible] = useState(true);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");
    const [change, setChange] = useState(false);

    //stores user information
    const handleUsername = (e) => {
        setUsername(e.target.value);
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value);
    }
    //checks if password matches for password change
    function handleSamePassword  (e) {
        const pass = e.target.value;
        setNewPassword(pass);
    
        if (pass === password) {
            setLoginStatus("✅");
        } else {
            setLoginStatus("❌");
        }
        
    }
    //changes state between login and password change
    const handleChange = () =>{
        setChange(true);
    }
    //exits password change back to login form
    const handleExit = () =>{
        setChange(false);
        setLoginStatus("");
    }
    //handles password modification
    const handleNewPassword = () =>{
        if (email === "" || newPassword !== password){
            alert("Please provide a valid email and ensure passwords match.")
        } else {
            Axios.post("http://localhost:4100/changepass", {
                email: email,
                password: newPassword,
            }).then((response)=>{
                if(response.data.message){
                    setLoginStatus(response.data.message)
                } else {
                    setLoginStatus("Password Change Success")
                    
                }
            })
        }
    }
    Axios.defaults.withCredentials = true;

    //credential validation
    function handleLogin(){
        if(password == "" || username == ""){
            alert("Please enter all specified fields")
        }  else {
            Axios.post("http://localhost:4100/login", {
                username: username,
                password: password,
            }).then((response)=>{
                if(response.data.Login){
                    redirect();
                } else{
                    alert("Invalid Credentials")
                }
            })
        }
    }
    useEffect(() => {
        // Fetch the username from the server
        Axios.get('http://localhost:4100')
            .then(response => {
                if(response.data.valid){
                    nav(`/home/${username}`);
                } else {
                    console.log("invalid")
                    nav("/login");
                }
            })
            .catch(error => {
                console.error('Error fetching username:', error);
            });
    }, []);

    return(
        <div className="body">

        {visible && (<div className="welcome slideInLeft">
            <h1 className="title">Your One Step Away</h1>
            <p className="message">Login to begin shopping</p>
        </div>)}
        <div className="register slideInRight">
            <div className="registerForm">
                <div className="head">
                    <h1 className="fh">Login</h1>
                </div>
                {!change && (
                <div className="input-field">
                    <p>{loginStatus}</p>
                    <span> <FaUser/><input onChange={handleUsername} type="text" placeholder="Enter Username"></input></span>
                    <br/>
                    <span><FaLock/><input onChange={handlePassword} type="password" placeholder="Enter Password"></input></span>
                    <br/>
                    <a onClick={handleChange} href="#">Forgot your password?</a>
                </div>)}
                {change && (
                <div className="input-field">
                    <p>{loginStatus}</p>
                    <span> <MdEmail/><input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter Email"></input></span>
                    <br/>
                    <span><FaLock/><input onChange={handlePassword} type="password" placeholder="Enter New Password"></input></span>
                    <br/>
                    <span><FaLock/><input onChange={handleSamePassword} type="password" placeholder="Re-Enter Password"></input></span>
                    <br/>
                    <span>
                        <button onClick={handleNewPassword} className="bt">Change Password</button>
                        <button onClick={handleExit} className="bt">Exit</button>
                        </span>
                    
                </div>)}
                
               {!change && (
               <div className="buttons">
                    <button onClick={handleLogin} className="btn">Login</button>
                </div>)} 
                <a onClick={register} href="#">Register now</a>
            </div>
        </div>
    </div>

    );
}

export default Login