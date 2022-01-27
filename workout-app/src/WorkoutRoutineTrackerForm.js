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
    }

    &:hover {
        background: yellow;
        color: black;
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
        <h1>Back and Biceps Form</h1>
        <WorkoutTrackerCard routineName="Back and Biceps" routines={routines["Back and Biceps"]}/>
        <Button onClick={()=> setFormType('none')}>Close Form</Button>
        
        
        </>)
    
    }
    if(formType==="Chest and Triceps"){
        return(<> 
        <h1>Chest and Triceps Form</h1>
        <Button onClick={()=> setFormType('none')}>Close Form</Button>
        
        
        </>)
    
    }
    if(formType==="Leg Day"){
        return(<> 
        <h1>Leg Day Form</h1>
        <Button onClick={()=> setFormType('none')}>Close Form</Button>
        
        
        </>)
    
    }
if(showForm===false){
    return(

        <>
        <Button onClick={handleButtonClick} >Track a New Workout</Button>
        {/* <p>{currentUser.Username}</p>
        <WorkoutTrackerCard /> */}
        </>
    )
}
if(showForm===true){
    return(

        <>
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


        
        </>
    )
}
if(formType==="Back and biceps"){
    return(<h1>hi</h1>)

}
}
export default WorkoutRoutineTrackerForm