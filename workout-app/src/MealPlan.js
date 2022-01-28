import React from "react";
import "./MealPlan.css";

function MealPlan({currentUser}){
const goals= currentUser.data.goals
//////
const toneMuscle= "To Tone muscles and get muscle definition"
const gainWeight="To Gain Overall Weight"
const looseWEight= "To Loose Overall Weight"
const gainMuscleMass= "To gain muscle mass"

const calories= 0;
const carbs= 0;
const protein= 0;
const fat= 0;

function handleMacrosButton(){
    console.log('click')
}
if(goals===toneMuscle){
    return(
        <>


        <h1 className="mealplantitle">Here is your meal plan when it comes to toning muscle and body definition :</h1>

        <br/>
        <div>
        <p>paragraph explaining what foods to eat, and what foods to stay away from</p>

        <h2>Here are your Macros:</h2>

        <h2>what are macros?</h2>
        <p>Macronutrients, or "macros", consist of carbohydrates, fat, and protein. They are the nutrients the body needs in large quantities. Keeping track of your macros can help you make smart, healthy food choices.</p>
            
             {/* (have button to click) */}

        <br/>
        <h3>Calories: {calories}</h3>
        <h3>Carbs: {carbs} grams</h3>
        <h3>Protein: {protein} grams</h3>
        <h3>Fat: {fat} grams</h3>
                    


        </div>
       
        </>
    )
}
if(goals===looseWEight){
    
    return(
        <>
        <h1 className="mealplantitle">Here is your meal plan when it comes to losing weight :</h1>

        <br/>

        <p>paragraph explaining what foods to eat, and what foods to stay away from</p>

        <h2>Here are your Macros</h2>

        <h2>what are macros?</h2>
        <p>Macronutrients, or "macros", consist of carbohydrates, fat, and protein. They are the nutrients the body needs in large quantities. Keeping track of your macros can help you make smart, healthy food choices.</p>
            
             {/* (have button to click) */}
        <br/>
        <h3>Calories: {calories}</h3>
        <h3>Carbs: {carbs} grams</h3>
        <h3>Protein: {protein} grams</h3>
        <h3>Fat: {fat} grams</h3>
        </>
    )
}
if(goals===gainMuscleMass){
    
    return(
        <>
        <h1>Here is your meal plan when it comes to gaining muscle mass:</h1>

        <br/>

        <p>paragraph explaining what foods to eat, and what foods to stay away from</p>

        <h2>Here are your Macros</h2>

        <p>what are macros? (explain macros), (have button to click)</p>
        <br/>
        <h3>Calories: {calories}</h3>
        <h3>Carbs: {carbs} grams</h3>
        <h3>Protein: {protein} grams</h3>
        <h3>Fat: {fat} grams</h3>
        </>
    )
}
if(goals===gainWeight){
    
    return(
        <>
        <h1>Here is your meal plan when it comes to gain weight:</h1>

        <br/>

        <p>paragraph explaining what foods to eat, and what foods to stay away from</p>

        <h2>Here are your Macros</h2>
        <br/>
        <button onClick={handleMacrosButton} >What are macros?</button>

        <p>what are macros? (explain macros), (have button to click)</p>
        <br/>
        <h3>Calories: {calories}</h3>
        <h3>Carbs: {carbs} grams</h3>
        <h3>Protein: {protein} grams</h3>
        <h3>Fat: {fat} grams</h3>
        </>
    )
}
else{
    return(

        <>
        </>
    )
}
}

export default MealPlan