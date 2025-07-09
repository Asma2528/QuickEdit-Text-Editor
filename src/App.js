import './App.css';
import Navbar from './components/Navbar';
import TextEditor from './components/TextEditor';
import About from './components/About';
import  { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  const [mode,setMode]=useState('light');

  const ToggleMode=()=>{
    if(mode==='light'){
      document.body.style.backgroundColor='#262b33';
      document.body.style.color='white'; // #58c4dc
      setMode('dark');
    }
    else if(mode==='dark'){
      document.body.style.backgroundColor='white';
      document.body.style.color='#262b33';
      setMode('light');
    }
  }
  



  
  return (
 <div className="">
  <BrowserRouter>
  <Navbar title="QuickEdit" mode={mode} ToggleMode={ToggleMode} />
  <div className="container">
    <Routes>
      <Route path="/" element={<TextEditor mode={mode} />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </div>
</BrowserRouter>

 </div>
  );
}

export default App;
