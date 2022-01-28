
import React, {useState, useEffect} from 'react';
import MainPage from './MainPage';
import Login from './Login';
 

function App() {
  const [userAccounts, setUserAccounts]= useState([])
  const [logInStatus, setLogInStatus]= useState(false)
  const [showNewUserTab, setShowNewUserTab]= useState(false)
  const [currentUser, setCurrentUser]= useState('')
  const [allGoalOptions, setAllGoalOptions]= useState(null)
  const [completedForm, setCompletedForm]= useState(false)

  useEffect(() => {
    fetch('http://localhost:3001/Accounts')
    .then((resp) => resp.json())
    .then((data) =>{ 
      return setUserAccounts(data)})
  },[logInStatus,showNewUserTab,currentUser, completedForm])
  useEffect(() =>{
    fetch('http://localhost:3001/Goals')
    .then(res => res.json())
    .then(data =>{
      setAllGoalOptions(data)
    })
  }, [])
  
  
  return (
    <Login 
    setCompletedForm={setCompletedForm}
    userAccounts= {userAccounts} 
    logInStatus ={logInStatus} 
    setLogInStatus={setLogInStatus} 
    setShowNewUserTab={setShowNewUserTab} 
    setUserAccounts={setUserAccounts}
    showNewUserTab={showNewUserTab}
    setCurrentUser={setCurrentUser}
    allGoalOptions={allGoalOptions}
    completedForm={completedForm}
    currentUser={currentUser}/>
    
  )
}

export default App;