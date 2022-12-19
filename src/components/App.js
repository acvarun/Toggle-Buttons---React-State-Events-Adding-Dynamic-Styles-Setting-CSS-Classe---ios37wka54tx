import React, {useState} from 'react'
import '../styles/App.css';
const App = () => {
//code here 
  const [button1,setButton1]=useState("ON")
  const [button2,setButton2]=useState("OFF")
  const handleClick=()=>{
    button1==="ON"? setButton1("OFF") : setButton1("ON")
    button1==="ON"? setButton2("ON") : setButton2("OFF")
    
  }
  return (
    <div className="App">
      <button id="btn1" onClick={handleClick}>
      {/* assign value for button 1 */button1}
      </button>
      <br />
      <br />
      <button id="btn2" onClick={handleClick}>
        {/* assign value for button 2 */button2}
      </button>
    </div>
  );
}
