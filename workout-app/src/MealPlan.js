import React from "react";

function MealPlan({currentUser}){
const goals= currentUser.data.goals
//////
const toneMuscle= "To Tone muscles and get muscle definition"
const gainWeight="To Gain Overall Weight"
const looseWEight= "To Loose Overall Weight"
const gainMuscleMass= "To gain muscle mass"


if(goals===toneMuscle){
    return(
        <>
        <h1>Here is your meal plan when it comes to toning muscle and body definition:</h1>

        <br/>

        <p>paragraph explaining what foods to eat, and what foods to stay away from</p>

        <h2>Here are your Macros</h2>

        <p>what are macros? (explain macros), (have button to click)</p>
        <br/>
        <h3>Carbs:</h3>
        <h3>Protein: </h3>
        <h3>Fat:</h3>
        </>
    )
}
else{
    return(

        <h1>hi</h1>
    )
}
}

export default MealPlan