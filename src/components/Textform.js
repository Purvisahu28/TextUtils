 import React, {useState} from 'react'

export default function (props) {
    const handleUpClick =()=>{
        console.log("upper case was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted to upperCase","success");
    }
    const handlelowClick =()=>{
        console.log("lower case was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowerCase","success");

    }
    const handleclrtext =()=>{
      
      let newText='';
      setText(newText);
      props.showAlert("Text is Cleared","success");
  }
  const handleCopy=()=>{
    console.log("i am copy");
    var text=document.getElementById("myBox");
    text.select();
    //text.setSelectionRange(0,9999);
    document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is copied","success");
  }
    

    //handle event that is changes on spot:
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const handleSpace=()=>{
      console.log("remove extra sspace");
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra space is removed","success");


    }

    const[text,setText]=useState('Enter text here');
    //text="new text"....wrong
    //setText("new Text")...correct
  return (
  <> <div className="container" style={{color:props.mode==='dark'?'white':'#151730'}}>
 <h3 className='mb-3'>{props.heading} </h3>   
<div className="mb-3">
  <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'rgb(27 31 85)':'white',color:props.mode==='dark'?'white':'#151730'}} onChange={handleOnChange}  value={text} id="myBox" rows="10"  ></textarea>
  </div> 
  <button disabled={text.length===0}className="btn btn-secondary my-1"  onClick={handleUpClick}>convert to uppercase </button>
  <button disabled={text.length===0} className="btn btn-secondary mx-1 my-1" onClick={handlelowClick}>convert to lowercase </button>
  <button disabled={text.length===0} className="btn btn-secondary mx-1 my-1" onClick={handleclrtext}>clear text </button>
  <button disabled={text.length===0} className="btn btn-secondary mx-1 my-1" onClick={handleCopy}>Copy text</button>
  <button disabled={text.length===0} className="btn btn-secondary mx-1 my-1" onClick={handleSpace}>remove extra space </button>
</div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'#151730'}}>
  <h3>Your Text Summary</h3>
  <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words,{text.length} characters</p>
  <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}minutes</p>
  <h3>Preview:</h3>
  <p>{text.length>0?text:"Nothing to preview"}</p>
</div>
 </>   
  )
}
