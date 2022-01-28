import React from "react";
import styled from "styled-components";
import "./WorkOutCard.css";

function WorkOutCard({workoutName, workoutImage, currentUser, setSets, id, reps, showReps, showTime, time}){

    function returnTimeOrReps(){

    }
    if(showReps===true){
    return(
        <>
        {/* <div className="boo">
        <div className="boo2"> */}
        <div className="row">
       
            <h2>Workout #{id}: 
            <br/>{workoutName} </h2>
            <img width= "175" height="175" src={workoutImage} />
            <h3 className="setreps">Sets: {setSets}<br/>
            Reps: {reps}</h3>
       

        </div>
        </>
    )
    }
    if(showTime===true){
        return(
            <>

            {/* <div className="boo">
            <div className="boo2"> */}
            <div className="row">
            <div>
                <h2>Workout #{id}: 
                <br/>{workoutName}</h2>
                <img width= "200" height="200" src={workoutImage} />
    
                <h3 className="setreps">Sets: {setSets}
                <br/>
                Time: {time} Minute{time>1 ? "s":""}</h3>
            </div>
            </div>

            </>
        )
        }
}
export default WorkOutCard;
