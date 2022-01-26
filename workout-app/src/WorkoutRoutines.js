import React from "react";
import WorkOutCard from "./WorkOutCard";


function WorkoutRoutines({routineName}){

    return(
        <>
        <h2>Routine Name: (Routine Name PlaceHolder)</h2>
        Routine Img: <img />
        <div> 
        <WorkOutCard />
        <WorkOutCard />
        <WorkOutCard />
        <WorkOutCard />
        <WorkOutCard />
        </div>
        
        </>
    )
}

export default WorkoutRoutines