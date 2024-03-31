import { useState } from "react";
import axios from "axios";
import Typewriter from "typewriter-effect";

function CS(){
const [aiRes, setaiRes] = useState("")
const [userQuestion, setUserQuestion] = useState("");

async function AskGPT(e){
    e.preventDefault();
    await axios.post("http://localhost:4100/chat-completion",{
        userQuestion: userQuestion,
    }).then(res=>{
        if(res.data.valid){
            console.log(res.data.Message)
            setaiRes(res.data.Message)
        } else {
            setaiRes(res.data.Message)
        }
    })

}

     return(
        <div className="content">
            <div className="container">
                <p>A.I Assistant</p>
                <div className="typewriter">
                    <Typewriter
                    options={{
                        autoStart: true, 
                        delay: 0.2, 
                        strings: [aiRes]}}/>
                </div>
                <form onSubmit={(e)=>AskGPT(e)}>
                <input 
                    value={userQuestion} 
                    onChange={(e)=> setUserQuestion(e.target.value)} 
                    placeholder="Enter your question">
                </input>
                <button>Send</button>
            </form>
            </div>
        </div>
    );
}

export default CS