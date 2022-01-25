import React from "react";
import WorkoutRoutineTrackerForm from "./WorkoutRoutineTrackerForm"
import WorkoutRoutines from "./WorkoutRoutines";

function WorkoutSchedule({currentUser}){

if(currentUser.FormCompleted === true){

return(
    <>
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