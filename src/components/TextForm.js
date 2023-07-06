import React, { useState,useRef } from "react";

export default function TextForm() {
const [text,setText]=useState("");
const textareaRef = useRef(null);
function handleOnChange(event){
 setText(event.target.value)
}
function handleToUpper(){
    setText(text.toUpperCase())
}
function handleToLower(){
    setText(text.toLowerCase())
}
function handleClear(){
  setText("");
}
//Copy Text 
const handleCopyClick = () => {
  const textarea = textareaRef.current;
  textarea.select();
  document.execCommand('copy');
  textarea.setSelectionRange(0, 0); // Optional: Deselect the text
  console.log('Text copied!');
};
  return (
    <div className="container my-4">
    <h4>Text here</h4>
      <div className="form-floating">
        <div class="form-floating mb-3">
  <textarea ref={textareaRef} class="form-control" placeholder="Leave a comment here" value={text} id="floatingTextarea2Disabled" onChange={handleOnChange} style={{height: 200}} ></textarea>
</div>    
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleToUpper}>ToUpperCase</button>
      <button disabled={text.length===0} className="btn btn-primary " onClick={handleToLower}>ToLowerCase</button>
      {/* <button className="btn btn-primary btn-lg mx-3 my-3" onClick={handleCount}>Word Count</button> */}
      <button disabled={text.length===0} className="btn btn-primary  mx-2 my-2" onClick={handleCopyClick}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary  mx-2 my-2" onClick={handleClear}>Clear</button>
      <div className="container">
        <h4>Detail Summary</h4>
        <h6> Total Words Are {text.split(" ").filter((element)=>{return element!=0}) .length} and Number of Characters are {text.length}</h6>
      </div>
      {/* <div className="container">
        <h4>Time Required to Read Document in Seconds <br/>{0.2*text.split(" ").filter((element)=>{return element!=0}) .length}</h4>
      </div> */}
    </div>
  );
}
