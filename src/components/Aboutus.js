import React, { useState } from 'react'

export default function about(props) {
//    const [myStyle, setMyStyle] = useState({
//     color:'white',
//     backgroundColor:'black'
//   })
//   const [btnText, setbtnText] = useState("Enable Light Mode")
//   const toggleStyle=()=>
//   {
//       if (myStyle.color=='white')
//       {
//         setMyStyle({
//           color:'black',
//           backgroundColor:'white'
//         })
//         setbtnText("Enable Dark Mode")
//       }
//       else {
//         setMyStyle({
//         color:'white',
//         backgroundColor:'black'
//       })
//       setbtnText("Enable Light Mode")

//       }
//  }
let myStyle={
  
  backgroundColor:props.mode==='dark'?'rgb(27 31 85)':'white',
  color: props.mode==='dark'?'white':'rgb(27 31 85)',
  // border:'2px solid',
  // borderColor: props.mode==='dark'?'white':'#151730',

}
  return (
    <div className="container" style={{color: props.mode==='dark'?'white':'rgb(27 31 85)'}}>
      <h3 className="my-3">About Us:</h3>
      <div className="accordion my-2" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
       <strong>Analyze your text</strong> 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      TextUtils extension will allow you to quickly perform such functions as: Reverse a text to read from end to start Title Case sentence Format number for thousand separator and to include decimal poi…      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      Free Use means a specific case in which people can use the work without permission according to the copyright limitation on the work.      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <strong>Browser Collaboration</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      Browser compatibility, often known as cross-browser compatibility, refers to whether or not a website or web application functions as intended in any particular browser version on different devices.      </div>
    </div>
  </div>
</div>
{/* <div className="container">
<button type="button" onClick={toggleStyle}class="btn btn-primary">{btnText}</button>
</div> */}
    </div>
  )
}
