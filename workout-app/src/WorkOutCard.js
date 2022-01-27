import React from "react";
import styled from "styled-components";
import "./WorkOutCard.css";


function WorkOutCard({workoutName, workoutImage, currentUser}){
    return(
        <div className="boo">
        <div className="boo2">
            <h2>Workout: {workoutName} </h2>
            <img width= "200" height="200" src={workoutImage} />
            <br/>
            <h3>Sets: (3)</h3>
            <h3>Reps: (10)</h3>
        </div>
        </div>
    )
}
export default WorkOutCard;

