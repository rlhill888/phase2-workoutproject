
import React, {useState, useEffect} from 'react';
import MainPage from './MainPage';
import Login from './Login';
 

function App() {
  const [userAccounts, setUserAccounts]= useState([])
  const [logInStatus, setLogInStatus]= useState(false)
  const [showNewUserTab, setShowNewUserTab]= useState(false)
  const [currentUser, setCurrentUser]= useState('')
  useEffect(() => {
    fetch('http://localhost:3001/Accounts')
    .then((resp) => resp.json())
    .then((data) =>{ 
      return setUserAccounts(data)})
  },[logInStatus,showNewUserTab,currentUser])
  return (
    <Login 
    userAccounts= {userAccounts} 
    logInStatus ={logInStatus} 
    setLogInStatus={setLogInStatus} 
    setShowNewUserTab={setShowNewUserTab} 
    setUserAccounts={setUserAccounts}
    showNewUserTab={showNewUserTab}
    setCurrentUser={setCurrentUser}
    currentUser={currentUser}/>
  )
}

export default App;
