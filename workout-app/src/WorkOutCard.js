import React from "react";

function WorkOutCard({workoutName, workoutImage, currentUser}){
    return(
        <>
        <div>
            <h2>Workout: {workoutName} </h2>
            <img width= "200" height="200" src={workoutImage} />
        </div>
        <div>
            <h3>Sets: (variable for number of sets depending on workout plan and data)</h3>
            <h3>Reps: (variable for number of reps depending on workout plan and data)</h3>
        </div>
        </>
    )
}
export default WorkOutCard;

