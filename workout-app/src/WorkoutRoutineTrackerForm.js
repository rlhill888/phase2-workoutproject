import React, {useState} from "react";
import WorkoutTrackerCard from "./WorkoutTrackerCard";


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
        <button onClick={()=> setFormType('none')}>Close Form</button>
        
        
        </>)
    
    }
    if(formType==="Chest and Triceps"){
        return(<> 
        <h1>Chest and Triceps Form</h1>
        <button onClick={()=> setFormType('none')}>Close Form</button>
        
        
        </>)
    
    }
    if(formType==="Leg Day"){
        return(<> 
        <h1>Leg Day Form</h1>
        <button onClick={()=> setFormType('none')}>Close Form</button>
        
        
        </>)
    
    }
if(showForm===false){
    return(

        <>
        <button onClick={handleButtonClick} >Track a New Workout</button>
        {/* <p>{currentUser.Username}</p>
        <WorkoutTrackerCard /> */}
        </>
    )
}
if(showForm===true){
    return(

        <>
        <button onClick={handleButtonClick} >Close Workout Form</button>
        <br/>
        <label name="routineLabel"> Which Routine would you like to track?</label>
        <br/>
        {routinesArray.map((a) =>{ 
            return( 
                
            <>
            <br/>
            <button onClick={() =>handleRoutineTypeClick(a)}>{a}</button> 
            </>)})}


        
        </>
    )
}
if(formType==="Back and biceps"){
    return(<h1>hi</h1>)

}
}
export default WorkoutRoutineTrackerForm