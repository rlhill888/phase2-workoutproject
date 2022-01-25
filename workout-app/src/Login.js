import React, {useState, useEffect} from "react";
import MainPage from "./MainPage";



function Login({logInStatus, setLogInStatus, showNewUserTab, setShowNewUserTab  }){
    const [newUserName, setNewUserName]= useState('')
    const [newPassword, setNewPassword]= useState('')

    function hanldeLogIn(){
        return setLogInStatus(true), setShowNewUserTab(false)
    }
    function handleLogOut(){
        return setLogInStatus(false), setShowNewUserTab(false)
    }
    function handleNewUserButton(){
        return setShowNewUserTab(true)
    }
    
    function handleCreateAccountButton(e){
        e.preventDefault()
        // const newAccount= { 
        //     Username: newUserName,
        //     Password: newPassword
        // }
        
        // fetch('http://localhost:3000/Accounts', {
        //     method:'POST',
        //     headers:{
        //         'Content-Type':'application/json'
        //     },
        //     body: JSON.stringify(newAccount)
        // })
        // .then(res => res.json())
        // .then(data =>{ 
        //     console.log(newAccount)
        //     setNewUserName('')
        //     setNewPassword('')
        
        // })
        return setShowNewUserTab(false)
    }
    function handleNewUserNameChange(e){
        return setNewUserName(e.target.value), console.log(newUserName)
    }
    function handleNewPasswordChange(e){
        return setNewPassword(e.target.value), console.log(newPassword)
    }

if(logInStatus===false && showNewUserTab=== true){
return(<> 
<h1>Create a New Account</h1>
<form>
    <label name="createNewUserName"/> User Name: <label/>
    <input onChange={handleNewUserNameChange} type="text" name="createNewUserName" />
    <br/>
    <label name="createNewPassword"/> Password: <label/>
    <input onChange={handleNewPasswordChange}type="password" name="createPassword" />
    <br/>
    <input onClick={handleCreateAccountButton}type="submit" value= "Create Account"/>
</form>

</>)

}

if(logInStatus===false){
    return(
        <>
        <div className="wrapper">
      <h1>Welcome to whatever our site is called</h1>
      <form>
      <fieldset>
         <label>
           <p>Username:</p>
           <input type= "email" />
           <p>Password:</p>
           <input type= "password"/>
         </label>
       </fieldset>
       <button onClick= {hanldeLogIn} type="submit">Log In</button>
      </form>
    </div>
    <div>
        <h2>New User?</h2>
        <button onClick={handleNewUserButton}>I am a new User</button>
         </div>
    </>
    
    )
}
if(logInStatus===true){
    return ( <> 
    <button onClick={handleLogOut}>Log Out</button>
    <MainPage />
    
    </>)
}
}

export default Login;