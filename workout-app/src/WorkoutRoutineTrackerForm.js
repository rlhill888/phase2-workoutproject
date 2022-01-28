import React, {useState} from "react";
import WorkoutTrackerCard from "./WorkoutTrackerCard";
import "./WorkoutRoutineTrackerForm.css"
import styled from "styled-components";

const Button = styled.button`
     && { background: black;
    border-color: yellow;
    color: yellow;
    font-family: 'Bebas Neue', cursive;
    font-size: 20px;
    margin: 20px;
    padding: 10px;
    }

    &:hover {
        background: yellow;
        color: black;
        transition-duration: 1.3s;
    }
`;

function WorkoutRoutineTrackerForm({currentUser}){
    const routines= currentUser.Routines
    const routinesArray = Object.keys(currentUser.Routines)

    const [showForm, setShowForm]= useState(false)
    const [formType, setFormType]= useState("none")

    
    function handleRoutineTypeClick(a){
        return setFormType(a)

    }

    function handleButtonClick(){
        return setShowForm(!showForm)
    }
    if(formType==="Back and Biceps"){
        return(<> 
        <div >
        <h1 className="formtitle">Back and Biceps Form</h1>
        <div className= 'forms'>
        <WorkoutTrackerCard routineName="Back and Biceps" routines={routines["Back and Biceps"]}/>

<Button onClick={()=> setFormType('none')}>Close Form</Button>
        </div>
       

        </div>
        </>)
    
    }
    if(formType==="Chest and Triceps"){
        return(<> 
        <h1 className="formtitle">Chest and Triceps Form</h1>
        <div className= 'forms'>
        <WorkoutTrackerCard routineName="Chest and Triceps" routines={routines["Chest and Triceps"]}/>

<Button onClick={()=> setFormType('none')}>Close Form</Button>
        </div>
        

        
        
        </>)
    
    }
    if(formType==="Leg Day"){
        return(<> 
        <h1 className="formtitle">Leg Day Form</h1>
        <div className= 'forms'><WorkoutTrackerCard routineName="Leg Day" routines={routines["Leg Day"]}/>
        <Button onClick={()=> setFormType('none')}>Close Form</Button></div>
        

        
        
        </>)
    
    }
if(showForm===false){
    return(

        <>
        <div className= 'buttTab'>
        <Button onClick={handleButtonClick} >Track a New Workout</Button>
        </div>
       

        {/* <p>{currentUser.Username}</p>
        <WorkoutTrackerCard /> */}
        </>
    )
}
if(showForm===true){
    return(

        <>
        <div className= 'buttonTab'>
        <Button onClick={handleButtonClick} >Close Workout Form</Button>

<br/>
<label name="routineLabel"> Which Routine would you like to track?</label>
<br/>
{routinesArray.map((a) =>{ 
    return( 
        
    <>
    <br/>
    <Button onClick={() =>handleRoutineTypeClick(a)}>{a}</Button> 

    </>)})}

        </div>
       

        
        </>
    )
}
if(formType==="Back and biceps"){
    return(<h1>hi</h1>)

}
}
export default WorkoutRoutineTrackerForm