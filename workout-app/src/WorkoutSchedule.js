import React from "react";
import WorkoutRoutineTrackerForm from "./WorkoutRoutineTrackerForm"
import WorkoutRoutines from "./WorkoutRoutines";

function WorkoutSchedule({currentUser}){
    
    
    
    
    



if(currentUser.FormCompleted === true){
    const routinesArray = Object.keys(currentUser.Routines)

return(
    <>
    <h2>Here are your workout routines:</h2>
    
    {routinesArray.map((array) =>{ 
            return <WorkoutRoutines routine={array} currentUser={currentUser} key={array} name={array} 
            
            />
            
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