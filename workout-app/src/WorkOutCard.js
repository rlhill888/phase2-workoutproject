import React from "react";

function WorkOutCard({workoutName, workoutImage, currentUser, setSets, id, reps, showReps, showTime, time}){

    function returnTimeOrReps(){

    }
    if(showReps===true){
    return(
        <>
        <div>
            <h2>Workout #{id}: {workoutName} </h2>
            <img width= "200" height="200" src={workoutImage} />
        </div>
        <div>
            <h3>Sets: {setSets}</h3>
            <h3>Reps: {reps}</h3>
        </div>
        </>
    )
    }
    if(showTime===true){
        return(
            <>
            <div>
                <h2>Workout #{id}: {workoutName} </h2>
                <img width= "200" height="200" src={workoutImage} />
            </div>
            <div>
                <h3>Sets: {setSets}</h3>
                <h3>Time: {time} Minute{time>1 ? "s":""}</h3>
            </div>
            </>
        )
        }
}
export default WorkOutCard;

