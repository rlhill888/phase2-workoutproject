import React from "react";
import WorkoutRoutineTrackerForm from "./WorkoutRoutineTrackerForm"
import WorkoutRoutines from "./WorkoutRoutines";

function WorkoutSchedule({currentUser}){

if(currentUser.FormCompleted === true){

return(
    <>
    <h2>Here are your workout routines:</h2>
    <WorkoutRoutines />
    <WorkoutRoutines />
    <WorkoutRoutines />
    <WorkoutRoutines />
    <WorkoutRoutines />
    
    <WorkoutRoutineTrackerForm />
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