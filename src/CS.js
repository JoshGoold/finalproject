import { useState, useEffect } from 'react'
import axios from 'axios'
import Typewriter from 'typewriter-effect';
function CS() {
  const [userQuestion, setUserQuestion] = useState("");
  const [aiResponse, setaiResponse] = useState("");

async function submit(e){
  e.preventDefault();
 await axios.post("http://localhost:4100/chat-completion", {
    userQuestion: userQuestion,
  }).then(res=>{
    if(res.data.valid){
      setaiResponse(res.data.Message)
      
    } else{
      setaiResponse("Error")
    }
  })
}
  

  return (
    <>
    <h1>Ask A.I</h1>
      <form onSubmit={(e)=> submit(e)}>
      <input placeholder='Enter question here' type='text' onChange={(e)=>setUserQuestion(e.target.value)}></input>
      <button type='submit'>Submit</button>
      </form>
      <br></br>
      <br></br>
      <div className='ai'>
      <span>A.I Assistant:</span>&nbsp; 
      <span className='text'><Typewriter options={{autoStart: true, delay: 20, strings: [aiResponse], loop: false}}/></span>
      </div>
    </>
  )
}

export default CS
