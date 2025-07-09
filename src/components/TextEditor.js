import React from 'react'
import { useState } from 'react';

export default function TextEditor(props) {
  const [text,setText]=useState("");

  const onTextChange=(event)=>{
    setText(event.target.value)
  }

  const convertToUppercase=()=>{
    let newText=text.toUpperCase();
    setText(newText);
  }

  const convertToLowercase=()=>{
    let newText=text.toLowerCase();
    setText(newText);
  }

  const convertToCapitalize=()=>{
    
    let sentences = text.toLowerCase().split(/([.?!]\s+)/);


    const capitalized = sentences
        .map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1));

    setText(capitalized.join(''));
  }

  const clearText=()=>{
    setText("");
  }

  const copyText=()=>{
  navigator.clipboard.writeText(text);
  }

  const removeSpaces=()=>{
    let wtext=text.trim().replace(/\s+/g," ");

    setText(wtext);

  }


  const reverseText=()=>{

    setText(text.split('').reverse().join(''));
  }

  return (
    <>
        <div className="my-5">
  <p className="my-2 fs-5 ">Enter Your Text Below:</p>
  <textarea id="textArea" className="form-control border-3 border-info" style={{
            backgroundColor: props.mode === 'dark' ? '#262b33' : 'white',
            color: props.mode === 'dark' ? 'white' : 'black',
          }} rows="10" value={text} onChange={onTextChange} ></textarea>
        <div className="my-2">
  <button className={`m-2 btn btn-info`} disabled={text.length===0} onClick={convertToUppercase}>Uppercase</button>
  <button className={`m-2 btn btn-info }`} disabled={text.length===0} onClick={convertToLowercase}>Lowercase</button>
  <button className={`m-2 btn btn-info`} disabled={text.length===0} onClick={convertToCapitalize}>Capitalize</button>
  <button className={`m-2 btn btn-info`} disabled={text.length===0} onClick={removeSpaces}>Remove Extra Spaces</button>
  <button className={`m-2 btn btn-info`} disabled={text.length===0} onClick={reverseText}>Reverse Text</button>
  <button className={`m-2 btn btn-info`} disabled={text.length===0} onClick={clearText}>Clear</button>
  <button className={`m-2 btn btn-info`} disabled={text.length===0} onClick={copyText}>Copy</button>
  </div>
<div className="my-3 fs-6">
    <p className="fs-4">Your Text Summary:</p> <b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} </b>words<br/><b>{text.length}</b> characters <br/><b> {text.split("\n").length} </b>lines <br/> Your content will take <b>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} </b>minutes to read
  </div>
</div>
    </>
  )
}
