import React, {useState, useEffect} from "react";
import MainPage from "./MainPage";
import styled from "styled-components";
import "./Login.css";

const Button = styled.button`
     && { background: black;
    border-color: yellow;
    color: yellow;
    font-family: 'Bebas Neue', cursive;
    font-size: 20px;
    margin: 20px;
    }

    &:hover {
        background: yellow;
        color: black;
    }
`;

const Input = styled.input`
    && { background-color: black;
    border-color: white;
    color: white;
    padding: 10px;
    text-align: center;
    font-size: 20px;
    font-family: 'Bebas Neue', cursive;
    }
  `;

const Label = styled.label`
color: white;
padding: 10px;
text-align: center;
font-size: 20px;
font-family: 'Bebas Neue', cursive;
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
    allGoalOptions, 
    setCurrentUser,


}){
    
    
    const [logInUserName, setLogInUserName]= useState('')
    const [logInPassword, setLogInPassword]= useState('')
    const [newUserName, setNewUserName]= useState('')
    const [newPassword, setNewPassword]= useState('')
    const [completedForm, setCompletedForm]= useState(false)


    const [bg, setBg] = useState(false)


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
        },
            Routines: null 
        
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

    function handleBg() {
        setBg((bg) => !bg) ;
    }

if(logInStatus===false && showNewUserTab=== true){
return(<> 
<h2>Create a New Account</h2>
<form className="new-form">
    <label name="createNewUserName" /> Username: <label/>
    <Input onChange={handleNewUserNameChange} type="text" name="createNewUserName" />
    <br/>
    <label name="createNewPassword" /> Password: <label/>
    <Input onChange={handleNewPasswordChange}type="password" name="createPassword" />
    <br/>
    <input className="submit" onClick={handleCreateAccountButton}type="submit" value= "Create Account"/>
</form>

</>)

}

const wrapper = bg ? "App dark" : "App light"

if(logInStatus===false){
    return(
        <>
        <div className={wrapper}>
      <h1>Workout 4 Me</h1>
      <h2>The expertise you need to achieve your fitness goals</h2>
      <form className="mainform">
         <label>
           <p>Username:</p>
           <input onChange={handleLoginUserName} type= "text" className="input" />
           <p>Password:</p>
           <input onChange= {handleLoginPassword} type= "password" className="input"/>
         </label>
      </form>
      <Button onClick= {hanldeLogIn} type="submit">Log In</Button>
    </div>
    <div>
        <h2>New User?</h2>
        <Button onClick={handleNewUserButton, handleBg}>Register</Button>
         </div>
    </>
    
    )
}
if(logInStatus===true){
    return ( <> 
    <Button onClick={handleLogOut}>Log Out</Button>
    <MainPage allGoalOptions={allGoalOptions} currentUser={currentUser} completedForm={completedForm} setCompletedForm={setCompletedForm} />
    
    </>)
}
}

export default Login;