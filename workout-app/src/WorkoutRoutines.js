import React from "react";
import WorkOutCard from "./WorkOutCard";


function WorkoutRoutines({name}){

    return(
        <>
        <h2>Routine Name: {name}</h2>
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