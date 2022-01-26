import React, {useState, useEffect} from "react";
import MainPage from "./MainPage";
import styled from "styled-components";
import "./index.css";

const Button = styled.button`
    background: black;
    border-color: white;
    color: white;
    font-size: 16px;
`;

// const H1 = styled.h1`
//     text-family: monospace;
// `

// const Input = styled.input`
//     padding: 0.5em;
//     margin: 0.5em;
//     color: ${props => props.inputColor || "red"};
//     background: green;
//     border: none;border
// `;

function Login({logInStatus, 
    setLogInStatus, 
    showNewUserTab, 
    setShowNewUserTab, 
    userAccounts,
    currentUser,
    setUserAccounts, 
    setCurrentUser  }){
    
    
    const [logInUserName, setLogInUserName]= useState('')
    const [logInPassword, setLogInPassword]= useState('')
    const [newUserName, setNewUserName]= useState('')
    const [newPassword, setNewPassword]= useState('')
    const [completedForm, setCompletedForm]= useState(false)

    function hanldeLogIn(e){

        e.preventDefault()
        //filter through our array of user accounts, 
        
        const attemptedAccountAcess= userAccounts.filter(account =>{
            return account.Username === logInUserName && account.Password === logInPassword
        })

        if(attemptedAccountAcess.length === 1){

            return setLogInStatus(true), setShowNewUserTab(false), setCurrentUser(attemptedAccountAcess[0]), setCompletedForm(attemptedAccountAcess[0].FormCompleted), setLogInPassword(''), setLogInUserName('')

        }
        if(attemptedAccountAcess.length === 0){
            console.log("Incorrect user name or password please try again")
        }
        // return console.log(attemptedAccountAcess.length)
        
        //if user 
        // and password equals one inside of account array
        // user goes into the next tab, update current user state
        
    }
    function handleLogOut(){
        return setLogInStatus(false), setShowNewUserTab(false), setCurrentUser('')
    }
    function handleNewUserButton(){
        return setShowNewUserTab(true)
    }
    
    function handleCreateAccountButton(e){
        e.preventDefault()
        const newAccount= { 
            Username: newUserName,
            Password: newPassword,
            FormCompleted: false,
            data: {
                age: null,
                weight: null,
                height: null,
                goals: null,
                bmi: null
        }
    }
        
        fetch('http://localhost:3001/Accounts', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newAccount)
        })
        .then(res => res.json())
        .then(data =>{ 
            console.log(newAccount)
            setNewUserName('')
            setNewPassword('')
        
        })
        return setShowNewUserTab(false)
    }
    function handleNewUserNameChange(e){
        return setNewUserName(e.target.value), console.log(newUserName)
    }
    function handleNewPasswordChange(e){
        return setNewPassword(e.target.value), console.log(newPassword)
    }
    function handleLoginUserName(e){
        return setLogInUserName(e.target.value)
        
    }
    function handleLoginPassword(e){
        return setLogInPassword(e.target.value)

    }

if(logInStatus===false && showNewUserTab=== true){
return(<> 
<h2>Create a New Account</h2>
<form>
    <label name="createNewUserName" /> User Name: <label/>
    <input onChange={handleNewUserNameChange} type="text" name="createNewUserName" />
    <br/>
    <label name="createNewPassword" /> Password: <label/>
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
      <h1>Workout 4 Me</h1>
      <h2>The expertise you need to achieve your fitness goals</h2>
      <form>
         <label>
           <p>Username:</p>
           <input onChange={handleLoginUserName} type= "text" />
           <p>Password:</p>
           <input onChange= {handleLoginPassword} type= "password"/>
         </label>
         </form>
       <Button onClick= {hanldeLogIn} type="submit">Log In</Button>

      
    </div>
    <div>
        <h2>New User?</h2>
        <Button onClick={handleNewUserButton}>Sign Up</Button>
         </div>
    </>
    
    )
}
if(logInStatus===true){
    return ( <> 
    <Button onClick={handleLogOut}>Log Out</Button>
    <MainPage currentUser={currentUser} completedForm={completedForm} setCompletedForm={setCompletedForm} />
    
    </>)
}
}

export default Login;