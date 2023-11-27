import logo from './logo.svg';
import { BrowserRouter as Router } from "react-router-dom";
import Accueil from './components/accueil/Accueil';
import './App.css';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import RouteConected from './Routes/RouteConected';
import RouteIntoApp from './Routes/RouteIntoApp';
import { useEffect, useState } from 'react';
function App() {
  const [loggedIn,setloggedIn]=useState(false)
  const user=localStorage.getItem('user')


  const retrieveData=()=>{
    if(user){
      setloggedIn(true)
    }
  }

  useEffect(()=>{
    retrieveData()
  },[])
  return (
    <div className="App">
         <Router> 
       {loggedIn?(
        <div style={{width:"100%",height:"100%"}}> 
       <Accueil/>
        <RouteIntoApp/>
        </div>
       ):
       <RouteConected setloggedIn={setloggedIn}/>
     }
     </Router>
    </div>
  );
}

export default App;
