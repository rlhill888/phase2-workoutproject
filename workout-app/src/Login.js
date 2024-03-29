import React, {useState, useEffect} from "react";
import MainPage from "./MainPage";
import styled from "styled-components";
import "./Login.css";
import FormQuestions from "./FormQuestions";
import MacrosButton from "./MacrosButton";
import Stats from "./Stats";

const Button = styled.button`
     && { background: black;
    border-color: yellow;
    color: yellow;
    font-family: 'Bebas Neue', cursive;
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 50px;
    padding: 10px;
    }

    &:hover {
        background: yellow;
        color: black;
        transition-duration: 1.3s;
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
  opacity: 0.6;
  margin: 20px;
    }
  `;

const Label = styled.label`
color: white;
padding: 10px;
text-align: center;
font-size: 20px;
font-family: 'Bebas Neue', cursive;
`;


function Login({logInStatus, 
    setCompletedForm,
    completedForm,
    setLogInStatus, 
    showNewUserTab, 
    setShowNewUserTab, 
    userAccounts,
    currentUser,
    setUserAccounts,
    allGoalOptions,
    setCurrentUser
 }){
 
    
    const [logInUserName, setLogInUserName]= useState('')
    const [logInPassword, setLogInPassword]= useState('')
    const [newUserName, setNewUserName]= useState('')
    const [newPassword, setNewPassword]= useState('')
    const [backgroundImage, setBackgroundImage]= useState('')
    const [logInError, setLogInError]= useState('')
    const [createAccountError, setCreateAccountError]= useState('')


    const [bg, setBg] = useState(false)

    

    function hanldeLogIn(e){

        e.preventDefault()
        //filter through our array of user accounts, 
        
        
        const attemptedAccountAcess= userAccounts.filter(account =>{
            return account.Username === logInUserName && account.Password === logInPassword
        })

        if(attemptedAccountAcess.length === 1){

            return setLogInStatus(true), setShowNewUserTab(false), setCurrentUser(attemptedAccountAcess[0]),  setLogInPassword(''), setLogInUserName(''), setCompletedForm(attemptedAccountAcess[0].FormCompleted), document.body.style.background = "black";

        }
        if(attemptedAccountAcess.length === 0){

            setLogInError("Incorrect user name or password please try again")

        }
        // return console.log(attemptedAccountAcess.length)
        
        //if user 
        // and password equals one inside of account array
        // user goes into the next tab, update current user state
        
    }
    function handleLogOut(){
        document.body.style.background= null
        return setLogInStatus(false), setShowNewUserTab(false), setCurrentUser('')
    }
    function handleNewUserButton(){
        handleBg()
        return setShowNewUserTab(true)
    }
    
    function handleCreateAccountButton(e){
        
        e.preventDefault()

        const attemptedAccountAcess= userAccounts.filter(account =>{
            return account.Username === newUserName && account.Password === newPassword
        })
        if(attemptedAccountAcess.length === 1){

            return setCreateAccountError("This user name has already been taken")

        }

        if(attemptedAccountAcess.length === 0){

        setCompletedForm(true)
        document.body.style.background= null
        handleBg()
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
            Routines: null,
            statsForm: []
        
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
    function changeBackground(color) {
        document.body.style.background = color;
     }

    function handleBg() {
        setBg((bg) => !bg) ;
    }
    const wrapper = bg ? "App dark" : "App light"



if(logInStatus===true && completedForm=== false){
        return(
                <FormQuestions currentUser={currentUser} completedForm={completedForm} setCompletedForm={setCompletedForm} allGoalOptions={allGoalOptions}/>
            )
            }

if(logInStatus===false && showNewUserTab=== true){

return(
    
<div className="createaccountdiv"> 

<h2>Create a New Account</h2>
<form>
    <label name="createNewUserName" /> Username: <label/>
    <Input onChange={handleNewUserNameChange} type="text" name="createNewUserName" />
    <br/>
    <label name="createNewPassword" /> Password: <label/>
    <Input onChange={handleNewPasswordChange}type="password" name="createPassword" />
    <br/>
    <input className="submit" onClick={handleCreateAccountButton}type="submit" value= "Create Account" className="submit" />
</form>

<p className="error">{createAccountError}</p>
<Button onClick={()=> {

    return setShowNewUserTab(false)
}}>Exit Account Creation</Button>

</div>)


}


if(logInStatus===false || logInStatus=== false && completedForm=== true){
    return(
        <>
        <div className="wrapper">
        
      <img src={require ("./workout4melogo.png")} alt="mainlogo" width="300" height="300" />
      <h2>The expertise you need to achieve your fitness goals</h2>
      <form className="mainform">
         <label>
           <p>Username:</p>
           <input onChange={handleLoginUserName} type= "text" className="input" />
           <p>Password:</p>
           <input onChange= {handleLoginPassword} type= "password" className="input"/>
         </label>
      </form>
      <p className="error">{logInError}</p>
      <Button onClick= {hanldeLogIn} type="submit">Log In</Button>
    
    </div>
  
    <div>
        
        <h2 className="newusertitlequestion">New User?</h2>

        <Button onClick={handleNewUserButton}>Register</Button>
         </div>
    </>
    
    )
}
if(logInStatus===true && completedForm===true){
    return ( <div className="logoutdiv"> 
  

    <Button onClick={handleLogOut}>Log Out</Button>


    <MainPage allGoalOptions={allGoalOptions} currentUser={currentUser} completedForm={completedForm} setCompletedForm={setCompletedForm} />
    
    <Stats currentUser={currentUser} />
    {/* {setLogInError('')}
    {setCreateAccountError('')} */}


    </div>
    
  )
}
}

export default Login;