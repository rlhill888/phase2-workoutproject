import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import MainPage from './MainPage';
import Login from './Login';
 

function App() {
//   useEffect(() => {
//     fetch('http://localhost:3000/Accounts')
//     .then((resp) => resp.json())
//     .then((data) => console.log(data))
//   }, [])
  
  const [logInStatus, setLogInStatus]= useState(false)
  const [showNewUserTab, setShowNewUserTab]= useState(false)
  return (
    <Login logInStatus ={logInStatus} setLogInStatus={setLogInStatus} setShowNewUserTab={setShowNewUserTab} showNewUserTab={showNewUserTab}/>
  )
}

export default App;
