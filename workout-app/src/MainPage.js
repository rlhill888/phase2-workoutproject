import React, {useState} from "react";
import FormQuestions from "./FormQuestions";
import Login from "./Login";
import WorkoutSchedule from "./WorkoutSchedule";


function MainPage(){

    const [logInStatus, setLogInStatus]= useState(false)
    return(
        <>
    <h1>this da main page</h1>
    <FormQuestions />
    <WorkoutSchedule />
    {/* <MealPlan /> */}
    </>
    )
}

export default MainPage;