import React, {useState} from "react";
import FormQuestions from "./FormQuestions";
import Login from "./Login";
import WorkoutSchedule from "./WorkoutSchedule";
import MealPlan from "./MealPlan";
import WorkoutRoutineTrackerForm from "./WorkoutRoutineTrackerForm";
import StatsForm from "./StatsForm";



function MainPage({allGoalOptions, completedForm, currentUser, setCompletedForm}){

    const [logInStatus, setLogInStatus]= useState(false)
    console.log(currentUser)
    return(
        <>
    <h1>{`Welcome ${currentUser.Username}`}</h1>
    <FormQuestions allGoalOptions={allGoalOptions} currentUser={currentUser} completedForm={completedForm} setCompletedForm={setCompletedForm} />
    <MealPlan currentUser={currentUser}/>
    <StatsForm currentUser={currentUser}/>
    <WorkoutRoutineTrackerForm currentUser={currentUser}/>
    <WorkoutSchedule currentUser={currentUser}/>

    </>
    )
}

export default MainPage;