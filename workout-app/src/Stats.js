import React from "react";
import './Stats.css';

function Stats({currentUser}){

    return(
        <>
        <div class='headers'>
        <h2>User Stats: </h2>
        <h3>BMI: {currentUser.data.bmi}</h3>
        <h3>BMR: {currentUser.data.bmr}</h3>
        <h3>Age: {currentUser.data.age}</h3>
        <h3>Weight: {currentUser.data.weight}</h3>


        </div>
       


        </>
    )
}

export default Stats;