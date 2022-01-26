import React, {useState} from "react";
import FormQuestions from "./FormQuestions";
import Login from "./Login";
import WorkoutSchedule from "./WorkoutSchedule";


function MainPage({allGoalOptions, completedForm, currentUser, setCompletedForm}){

    const [logInStatus, setLogInStatus]= useState(false)
    return(
        <>
    <h1>{`Welcome ${currentUser.Username}`}</h1>
    <FormQuestions allGoalOptions={allGoalOptions} currentUser={currentUser} completedForm={completedForm} setCompletedForm={setCompletedForm} />
    <WorkoutSchedule currentUser={currentUser}/>
    {/* <MealPlan /> */}
    </>
    )
}

export default MainPage;