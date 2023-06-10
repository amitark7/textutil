import PropTypes from 'prop-types';
import React from 'react'


export default function Navbar(props) {
// const [myStyle,setmyStyle]=useState({
//     color:'black',
//     backgroundColor:'#f2eded'
// });
// const [btntext,setbtntext]=useState("Click To Dark Mode");
// const toggleStyle =()=>{
//    if(myStyle.color==='black')
//    {
//     setmyStyle({
//       color:'white',
//       backgroundColor:'black'
//     })
//     setbtntext("Click To Light Mode");
//   }
//    else{
//     setmyStyle({
//       color:'black',
//       backgroundColor:'#f2eded'
//     })
//     setbtntext("Click To Dark Mode");
//    }
// }
  return (
    <div className={`amit ${props.mode}`} >
    <div><h2>{props.title}</h2>
    </div>
    <ul>
      <li>Home</li>
      <li>{props.aboutText}</li>
    </ul>
   <div className='mode' onClick={props.toogleMode} style={{height:'30px',width:'30px',backgroundColor:props.mode==='light'?'black':'white'}}></div>
  </div>
  )
}

Navbar.propTypes={                
                 title:PropTypes.string,
                  aboutText:PropTypes.string
}

Navbar.defaultProps={
    title:"Enter Title",
    aboutText:"Enter About Text"
}
