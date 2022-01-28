import React, {useState} from "react";
import FormQuestions from "./FormQuestions";
import Login from "./Login";
import WorkoutSchedule from "./WorkoutSchedule";
import MealPlan from "./MealPlan";
import WorkoutRoutineTrackerForm from "./WorkoutRoutineTrackerForm";
import "./MainPage.css";
import StatsForm from "./StatsForm";



function MainPage({allGoalOptions, completedForm, currentUser, setCompletedForm}){

    const [logInStatus, setLogInStatus]= useState(false)
    console.log(currentUser)
    return(
        <div className="mainroutinepage">
    <h1>{`Welcome ${currentUser.Username}`}</h1>
    <div>
    <FormQuestions allGoalOptions={allGoalOptions} currentUser={currentUser} completedForm={completedForm} setCompletedForm={setCompletedForm} />

    </div>

    <div>
    <WorkoutSchedule currentUser={currentUser}/>
    </div>

    <div>
    <MealPlan currentUser={currentUser}/>
    </div>

    <div>
     <StatsForm currentUser={currentUser}/>
     </div>
     
    <div>
    <WorkoutRoutineTrackerForm currentUser={currentUser}/>
    </div>

    </div>
    )
}

export default MainPage;