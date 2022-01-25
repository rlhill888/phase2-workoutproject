import React from "react";

function WorkOutCard({workoutName, workoutImage}){
    return(
        <>
        <div>
            <h2>Workout: Workout name </h2>
            <img width= "200" height="200" src={'https://cathe.com/wp-content/uploads/2017/06/shutterstock_314080721.jpg'} />
        </div>
        <div>
            <h3>Sets: (variable for number of sets depending on workout plan and data)</h3>
            <h3>Reps: (variable for number of reps depending on workout plan and data)</h3>
        </div>
        </>
    )
}
export default WorkOutCard;

