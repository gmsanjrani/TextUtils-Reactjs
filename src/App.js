import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="grey";
      showAlert('Dark mode Is Enabled','success');

    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert('Light mode Is Enabled','success');
    }
  }





  return (
    <>
      <Router>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} alert={alert}/> 
      <Alert alert={alert} />
     
      <div className="container">
      
      <Switch>
          <Route exact path="/about">
            <About />
      
          </Route>
          <Route exact path="/">
      <TextForm showAlert={showAlert} heading1="Enter Text" mode={mode} alert ={alert} />
          </Route>
      </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
