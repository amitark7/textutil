import "./App.css";
import Navbar from "./Component/Navbar";
import TextForm from "./Component/TextForm";
import React, {useState} from 'react'


function App() {
  const [mode,setmode]=useState('light');
  const [btntext,setbtntext]=useState('Dark Mode');
  const toogleMode=()=>{
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor='#4e4949'
      setbtntext('Light Mode');
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white'
      setbtntext('Dark Mode');
    }
  }
  return (
    <>
      <Navbar title="TextAnaylizer" aboutText='About' mode={mode} toogleMode={toogleMode} text={btntext}/>
      {/* <Navbar/> */}
      <div className="container" style={{color:(mode==='light'?'black':'white')}}>
        <TextForm heading="Enter the Text To Anaylize Below " mode={mode}/>
      </div>
    </>
  );
}

export default App;
