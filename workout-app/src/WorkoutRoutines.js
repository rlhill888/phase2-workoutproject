import React from "react";
import WorkOutCard from "./WorkOutCard";
import styled from "styled-components";
import "./WorkoutRoutines.css";


function WorkoutRoutines({currentUser, name}){

    
    function iterrateWorkoutCards(){
        function setRepsOrTime(array){
            
        }
    for(const key in currentUser.Routines){
        if(key===name){
            
            
            const specificRoutine = (currentUser.Routines[key])
            const workOutGoal = currentUser.data.goals
            
            function setSets(){
                if(workOutGoal === "To Gain Overall Weight" ){
                    return 3
                }
                if(workOutGoal === "To Loose Overall Weight" ){
                    return 4
                }
                if(workOutGoal === "To Tone muscles and get muscle definition" ){
                    return 4
                }
                if(workOutGoal === "To gain muscle mass" ){
                    return 2
                }
                
            }
            function setReps(){

            }
            
        
            return specificRoutine.map((a)=>{

                for(const key in a){
                    if(key==="reps"){
                        return (<WorkOutCard key={a.id} workoutName={a.name} currentUser={currentUser} workoutImage={a.Image} setSets={setSets()} id={a.id} showReps={true} reps={a.reps} showTime={false} time={a.time}/>)
                    }
                    if(key==="time"){ 
                        return <WorkOutCard key={a.id} workoutName={a.name} currentUser={currentUser} workoutImage={a.Image} setSets={setSets()} id={a.id} showReps={false} reps={a.reps} showTime={true} time={a.time}/>
                    }
                }
                
            return( <div className="rowcard"> 
            <WorkOutCard key={a.id} workoutName={a.name} currentUser={currentUser} workoutImage={a.Image} setSets={setSets()} id={a.id}/> 
            </div>)
            })
        }
    }
}


    
    
    return(
        <>
     <div className="column">
        <h2 className="routinetitle">Routine Name: 
        <br/>{name}</h2>
        
        {iterrateWorkoutCards()}
        </div>
        </>
    )
}

export default WorkoutRoutines