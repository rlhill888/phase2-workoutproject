import React from "react";
import "./MealPlan.css";
import MacrosButton from "./MacrosButton";

function MealPlan({currentUser}){
const goals= currentUser.data.goals
//////
const toneMuscle= "To Tone muscles and get muscle definition"
const gainWeight="To Gain Overall Weight"
const looseWEight= "To Loose Overall Weight"
const gainMuscleMass= "To gain muscle mass"
const data= currentUser.data

let calories= 0;
let carbs= 0;
let protein= 0;
let fat= 0;
let activityLevel= 0








function handleMacrosButton(){
    console.log('click')
}
if(goals===toneMuscle){
    if(data.activityLevel=== "Little or no exercise"){
        activityLevel=1.3
    }
    if(data.activityLevel=== "Light exercise a few times a week"){
        activityLevel=1.45
    }
    if(data.activityLevel=== "Moderate exercise 3-5 times a week"){
        activityLevel=1.65
    }
    if(data.activityLevel=== "Heavy exercise 6-7 times per week"){
        activityLevel=1.85
    }
    calories= Math.floor(data.bmr * activityLevel)

    protein= data.weight
    carbs = Math.floor(calories*.38/4)
    fat= Math.floor(calories*.3/9)
    return(
        <>


        <h1 className="mealplantitle">Here is your meal plan when it comes to toning muscle and body definition :</h1>

        <br/>
        <div>
        <p>paragraph explaining what foods to eat, and what foods to stay away from</p>

        <h2>Here are your Macros:</h2>

        <MacrosButton />

        <br/>
        <h2>In order to loose weight, you should try to consume these daily macros to achieve your goals</h2>
        <h3>Calories: {calories}</h3>
        <h3>Carbs: {carbs} grams</h3>
        <h3>Protein: {protein} grams</h3>
        <h3>Fat: {fat} grams</h3>
                    


        </div>
       
        </>
    )
}
if(goals===looseWEight){
    if(data.activityLevel=== "Little or no exercise"){
        activityLevel=1.2
    }
    if(data.activityLevel=== "Light exercise a few times a week"){
        activityLevel=1.375
    }
    if(data.activityLevel=== "Moderate exercise 3-5 times a week"){
        activityLevel=1.55
    }
    if(data.activityLevel=== "Heavy exercise 6-7 times per week"){
        activityLevel=1.725
    }
    calories= Math.floor(data.bmr * activityLevel)

    protein= data.weight
    carbs = Math.floor(calories*.3/4)
    fat= Math.floor(calories*.3/9)
    
    
    return(
        <>
        <div><h1 className="mealplantitle">Here is your meal plan when it comes to losing weight :</h1>

        <br/>

        {/* <p>paragraph explaining what foods to eat, and what foods to stay away from</p> */}

        <h2>Here are your Macros</h2>

        <MacrosButton />
        <br/>
        <h2>In order to loose weight, you should try to consume these daily macros to achieve your goals</h2>
        <h3>Calories: {calories}</h3>
        <h3>Carbs: {carbs} grams</h3>
        <h3>Protein: {protein} grams</h3>
        <h3>Fat: {fat} grams</h3>
</div>
        
        </>
    )
}
if(goals===gainMuscleMass){
    if(data.activityLevel=== "Little or no exercise"){
        activityLevel=1.7
    }
    if(data.activityLevel=== "Light exercise a few times a week"){
        activityLevel=1.875
    }
    if(data.activityLevel=== "Moderate exercise 3-5 times a week"){
        activityLevel=2.05
    }
    if(data.activityLevel=== "Heavy exercise 6-7 times per week"){
        activityLevel=2.225
    }
    calories= Math.floor(data.bmr * activityLevel)

    protein= data.weight
    carbs = Math.floor(calories*.42/4)
    fat= Math.floor(calories*.42/9)
    
    
    
    return(
        <>
        <h1>Here is your meal plan when it comes to gaining muscle mass:</h1>

        <br/>

        <p>paragraph explaining what foods to eat, and what foods to stay away from</p>

        <h2>Here are your Macros</h2>

       <MacrosButton />
        <br/>
        <h2>In order to gain mucle mass, you should try to consume these daily macros to achieve your goals</h2>
        <h3>Calories: {calories}</h3>
        <h3>Carbs: {carbs} grams</h3>
        <h3>Protein: {protein} grams</h3>
        <h3>Fat: {fat} grams</h3>
        </>
    )
}
if(goals===gainWeight){

    if(data.activityLevel=== "Little or no exercise"){
        activityLevel=1.9
    }
    if(data.activityLevel=== "Light exercise a few times a week"){
        activityLevel=2.175
    }
    if(data.activityLevel=== "Moderate exercise 3-5 times a week"){
        activityLevel=2.3
    }
    if(data.activityLevel=== "Heavy exercise 6-7 times per week"){
        activityLevel=2.5
    }
    calories= Math.floor(data.bmr * activityLevel)

    protein= data.weight
    carbs = Math.floor(calories*.42/4)
    fat= Math.floor(calories*.42/9)
    
    return(
        <>
        <h1>Here is your meal plan when it comes to gaining weight:</h1>

        <br/>

        <h2>Here are your Macros</h2>
        <br/>
        <MacrosButton />
        <br/>
        <h2>In order to gain weight, you should try to consume these daily macros to achieve your goals</h2>
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