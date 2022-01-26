import React from "react";
import WorkOutCard from "./WorkOutCard";


function WorkoutRoutines({currentUser, name}){

    
    for(const key in currentUser.Routines){
        if(key===name){
            const specificRoutine = (currentUser.Routines[key])
            return specificRoutine.map((a)=>{
            console.log(a)
            return( <> 
            
            
            <WorkOutCard workoutName={a.name} currentUser={currentUser} workoutImage={a.Image}/> 
            
            </>)
            })
        }
    }


    
    
    return(
        <>
        <h2>Routine Name: {name}</h2>
        <div> 
        {/* {iterrateWorkoutCards} */}
        </div>
        
        </>
    )
}

export default WorkoutRoutines