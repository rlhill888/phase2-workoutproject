import React from "react";
import WorkoutRoutineTrackerForm from "./WorkoutRoutineTrackerForm"
import WorkoutRoutines from "./WorkoutRoutines";

function WorkoutSchedule({currentUser}){
    const routine = currentUser.Routines
    
    function loadRoutines(routine){
        for(const key in routine){
            console.log(routine[key].constructor.name)
           
            
            
        }

    }

if(currentUser.FormCompleted === true){

return(
    <>
    <h2>Here are your workout routines:</h2>

    {loadRoutines(routine)}

    
    
    
    
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