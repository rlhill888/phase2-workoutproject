import React from "react";
import WorkoutRoutineTrackerForm from "./WorkoutRoutineTrackerForm"
import WorkoutRoutines from "./WorkoutRoutines";
import "./WorkoutSchedule.css";

function WorkoutSchedule({currentUser}){


if(currentUser.FormCompleted === true){
    const routinesArray = Object.keys(currentUser.Routines)

return(
    <>
    <h2 className="workoutroutinetitle">Here are your workout routines:</h2>
    
    {routinesArray.map((array) =>{ 
            return (
                <>
            <div className="routine"> <WorkoutRoutines routine={array} currentUser={currentUser} key={array} name={array}/></div>
            <br/>
            </>
            
            
            )
            
        })}
     </>
)
}
if(currentUser.FormCompleted === false){
    return(
        <>
        
        
        </>



    )
}
}

export default WorkoutSchedule;