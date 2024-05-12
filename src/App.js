import './App.css';
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import Aboutus from './components/Aboutus'
import Alert from './components/Alert'
import { useState } from 'react';
import React from "react";
//import "bootstrap/dist/js/bootstrap.min.js";
import {
  BrowserRouter as Main,
  Routes,
  Route,
  
} from 'react-router-dom';


function App() {
  const [mode,setMode]=useState('dark');
  const [alert, setAlert] = useState(null);
  //type:there are different types of aleert ...
  const showAlert=(message,type)=>{
       setAlert({
        msg: message,
        type: type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);
  }
  const toggleMode=()=>{
  if(mode==='light')
  {setMode('dark');
document.body.style.backgroundColor='#151730';
showAlert("Dark mode has been enabled","success");
document.title = 'TextUtils-DarkMode';
// setInterval(() => {
//   // document.title = 'TextUtils-INSTALL';


// }, 1000);
// setInterval(() => {
//   document.title = 'TextUtils-Amazing';

// }, 1500);
}
else  {setMode('light');
document.body.style.backgroundColor='white'
showAlert("Light mode has been enabled","success");
document.title = 'TextUtils-LightMode';
//title update for ex:facebook update the number of mesages 1..

}
}
  return (
    <>
{/* <Navbar title="Textutils" about="About Textutils"/> */}
{/* <Navbar/> */}

{/* <Router>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-5">
<Routes>
      <Route path="/about">
            <Aboutus />
          </Route>
      <Route path="/">
          <Textform showAlert={showAlert} heading="Enter the text to utilize" mode={mode} ></Textform>          </Route>
</Routes>
{/* <Aboutus /> */}
{/* <Textform showAlert={showAlert} heading="Enter the text to utilize" mode={mode} ></Textform> */}
{/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-5">
<Aboutus /> 
 <Textform showAlert={showAlert} heading="Enter the text to utilize" mode={mode} ></Textform> 
</div> */}
{/* </Router> */} 
<Main>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-5">

   <Routes>
<Route exact path='/about' element={<Aboutus mode={mode} />}></Route>
{/* <Route exact path='/about' element={<AboutUs/>}></Route> */}
<Route exact path='/' element={<Textform showAlert={showAlert} heading="Try TextUtils-Word counter,character counter,remove extra spaces" mode={mode} />}></Route>
   </Routes>
   </div>
   </Main>

</>
  );
}

export default App;
