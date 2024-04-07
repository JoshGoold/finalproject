import { useState, useEffect } from 'react'
import axios from 'axios'
import background from '../assets/csupport.avif'
import Typewriter from 'typewriter-effect';
import { FaArrowAltCircleUp } from "react-icons/fa";
function CS(props) {
  const [userQuestion, setUserQuestion] = useState("");
  const [aiResponse, setaiResponse] = useState("");

  
  async function submit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4100/chat-completion", {
        userQuestion: userQuestion,
      });
      if (response.data.valid) {
        setaiResponse("")
        setaiResponse(response.data.Message);
      } else {
        setaiResponse("Error");
      }
    } catch (error) {
      console.error("Error submitting question:", error);
      setaiResponse("Error");
    }
  }
  


  return (
    <>
    <div className='abc'>
    <img src={background}></img>
    <h1 className='c'><Typewriter options={{autoStart: true, delay: 80, strings: ["Customer Support","Meet George","Ask him anything", "We value our customers", "The Future Is Now"], loop: true}}/></h1>
    </div>
    <hr color='black'></hr>
    <h2 className='h'>Meet George - our virtual assistant!</h2>
   
      <div className='wrap'>
      <div className='ai'>
      <span>A.I Assistant: George</span>&nbsp; 
      <hr></hr>
      <div className='background'>
      <span className='text'><Typewriter options={{autoStart: true, delay: 20, strings: [aiResponse], loop: false}}/></span></div>
      </div>
      
      <form onSubmit={(e)=> submit(e)}>
      <input placeholder='Enter question here' type='text' onChange={(e)=>setUserQuestion(e.target.value)}></input>
      <button title='Send' type='submit'><FaArrowAltCircleUp/></button>
      </form>
      </div>
      <p className='b'>Our virtual assistant George is equipped to provide you with knowledge about our website, our company and our commitment to our community <br/> 
         Ask him any question you may have about available items, trends, top sellers<br/>
         if you have any question george cannot answer please  <a onClick={props.hCU}>contact us</a></p>
    </>
  )
}

export default CS
