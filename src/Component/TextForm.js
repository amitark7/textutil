import React ,{useState} from 'react'

export default function TextForm(props) {

    const handleOnClick= ()=>{
        // console.log("Button Clicked" +text);
        const new_Text=(text.toUpperCase());
        setText(new_Text);
    }

    const handleOnChange= (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const Clear= ()=>{
        setText('');
        console.log("Clear Click");
    }

    const handleupClick=()=>{
      let lower=text.toLowerCase();
      setText(lower);
    }

    const [text, setText] = useState("");
    // setText("Hello Amit");
  return (
    <div className='textForm'>
      <h2>{props.heading}</h2>
      <div>
       <textarea name="text" id="text" value={text} onChange={handleOnChange} rows="10" style={{backgroundColor:props.mode==='light'?'white':'#4e4949',color:props.mode==='light'?'black':'white'}}></textarea>
      </div>
      <button className='btn'  onClick={handleOnClick} >Click To Upper Case</button>
      <button className='btn' onClick={Clear}>Clear Text</button>
      <button className='btn' onClick={handleupClick}>Click To Lower Case</button>
      <h3>Your Text Summary </h3>
      <p>{text.split(" ").filter((Element)=>{return Element.length!==0}).length} Words And {text.length} Character In This Sentence</p>
      <p> {0.008 * text.split(" ").filter((Element)=>{return Element.length!==0}).length} Minutes To Read Sentences</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:'Enter Some Text Above in Box to Preview'}</p>
    </div>
  )
}
