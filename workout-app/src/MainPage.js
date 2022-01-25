import React, {useState} from "react";
import FormQuestions from "./FormQuestions";
import Login from "./Login";
import WorkoutSchedule from "./WorkoutSchedule";


function MainPage({currentUser}){

    const [logInStatus, setLogInStatus]= useState(false)
    return(
        <>
    <h1>{`Welcome ${currentUser.Username}`}</h1>
    <FormQuestions currentUser={currentUser} />
    <WorkoutSchedule currentUser={currentUser}/>
    {/* <MealPlan /> */}
    </>
    )
}

export default MainPage;