import { useState, useEffect } from "react";
import axios from "axios";
import { IoIosText } from "react-icons/io";
import Typewriter from "typewriter-effect";
import cs from './assets/cs.avif'

function CustomerSupport() {
  const [userQuestion, setUserQuestion] = useState("");
  const [aiResponse, setaiResponse] = useState("");


  async function main(e) {
    e.preventDefault();
    await axios
      .post("http://localhost:4100/chat-completion", {
        userQuestion: userQuestion,
      })
      .then((res) => {
        if (res.data.valid) {
          setaiResponse(res.data.Message);
        } else {
          setaiResponse("Error");
        }
      });
  }


  

const style1 = {
  "color": "tomato",
}
const style2 = {
  "color": "aqua",
}
const style3 = {
  "color": "orange",
}
const style4 = {
  "color": "white",
}
const style5 = {
  "color": "lightgreen",
}

  return (
    <>
    
    <div className="cs-top">
      <img src={cs}></img>
      <div className="h">
      <Typewriter options={{
        autoStart: true,
        delay: 100,
        strings: [
          "Customer Support",
          "Meet George, our virtual Assistant",
          "Ask him anything",
          "The future is now"
        ],
        loop: true
      }}/>
      </div>
      
    </div>
    
    <div className="cs-container">
      
      <div className="ai">
        <span className="ai-a">A.I Assistant: GEORGE</span>&nbsp;
        <hr></hr>
        <span className="text">
          <Typewriter
            options={{
              autoStart: true,
              delay: 20,
              strings: [aiResponse],
              loop: false,
            }}
          />
        </span>
      </div>
      <br></br>
      <hr></hr>
      <br></br>
      <form onSubmit={(e)=> main(e)}>
        <input
          placeholder="Enter question here"
          type="text"
          onChange={(e) => setUserQuestion(e.target.value)}
        ></input>
        <button title="Send" type="submit"><IoIosText/></button>
      </form>
      
      
    </div>
    <div className="cs-flex">
      <span>
      <h3 style={style5}>Customer Service</h3>
      <p className="cs-p">lorem ipsum sjs kanm kax l, jdbcm? jbdcb! ncb, wecuib ujewbcb. webch</p>
      </span>
      <span>
      <h3 style={style1}>Customer Loyalty</h3>
      <p className="cs-p">lorem ipsum sjs kanm kax l, jdbcm? jbdcb! ncb, wecuib ujewbcb. webch</p>
      </span>
      <span>
      <h3 style={style2}>Customer Support</h3>
      <p className="cs-p">lorem ipsum sjs kanm kax l, jdbcm? jbdcb! ncb, wecuib ujewbcb. webch</p>
      </span>
      <span>
      <h3 style={style3}>Customer Relationship</h3>
      <p className="cs-p">lorem ipsum sjs kanm kax l, jdbcm? jbdcb! ncb, wecuib ujewbcb. webch</p>
      </span>
      <span>
      <h3 style={style4}>Customer Experience</h3>
      <p className="cs-p">lorem ipsum sjs kanm kax l, jdbcm? jbdcb! ncb, wecuib ujewbcb. webch</p>
      </span>
      </div>
    </>
  );
}

export default CustomerSupport;
