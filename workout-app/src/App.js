
import React, {useState, useEffect} from 'react';
import MainPage from './MainPage';
import Login from './Login';
 

function App() {
  const [userAccounts, setUserAccounts]= useState([])
  const [logInStatus, setLogInStatus]= useState(false)
  const [showNewUserTab, setShowNewUserTab]= useState(false)
  const [currentUser, setCurrentUser]= useState('')
  const [allGoalOptions, setAllGoalOptions]= useState(null)

  const [color, setColor] = useState("");

  function randomHex(){
    console.log("Func Called");
    let letters = "0123456789ABCDEF";
    let random = "#";
    for (let i = 0; i < 6; i++) {
        random += letters[Math.floor(Math.random() * 16)];
    }
    setColor({
      color: random,
    });
    console.log("New color: "+color.color);
  };


  

  useEffect(() => {
    fetch('http://localhost:3001/Accounts')
    .then((resp) => resp.json())
    .then((data) =>{ 
      return setUserAccounts(data)})
  },[logInStatus,showNewUserTab,currentUser])
  useEffect(() =>{
    fetch('http://localhost:3001/Goals')
    .then(res => res.json())
    .then(data =>{
      setAllGoalOptions(data)
    })
  }, [])
  
  return (
    <Login 
    userAccounts= {userAccounts} 
    logInStatus ={logInStatus} 
    setLogInStatus={setLogInStatus} 
    setShowNewUserTab={setShowNewUserTab} 
    setUserAccounts={setUserAccounts}
    showNewUserTab={showNewUserTab}
    setCurrentUser={setCurrentUser}
    allGoalOptions={allGoalOptions}
    currentUser={currentUser}
    
    color={color}
    setColor={setColor}
    />
    
  )
}

export default App;