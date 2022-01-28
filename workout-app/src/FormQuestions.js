import React, {useState} from "react";
import styled from "styled-components";
import "./FormQuestions.css";

function FormQuestions({allGoalOptions, completedForm, currentUser, setCompletedForm}){
    
    function handleSubmit(e){
        e.preventDefault() 
        
        
        currentUser.FormCompleted =true
        currentUser.data.age = ageAnswer
        currentUser.data.goals= goalsAnswer
        currentUser.data.height= (heightFeetAnswer*12)+parseInt(heightInchesAnswer)
        currentUser.data.weight= weightAnswer
        currentUser.data.bmi = (weightAnswer*703/(currentUser.data.height*currentUser.data.height)).toFixed(1)
        currentUser.data.activityLevel= activityLevel
        currentUser.data.bmr= (655 + (4.35*(currentUser.data.weight))+(4.7*(currentUser.data.height)) - (4.7 *(currentUser.data.age)))

        
        for(const key in allGoalOptions){
            if(goalsAnswer === key ){
                currentUser.Routines= allGoalOptions[key]
            }
        }
        
        
            
        
        fetch(`http://localhost:3001/Accounts/${currentUser.id}`,{
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(currentUser)
            
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(currentUser)
            setCompletedForm(true)
            setAgeAnswer(0)
            setHeightFeetAnswer(0)
            setHeightFeetAnswer(0)
            setGoalsAnswer('')
            setWeightAnswer(0)
            
        })
        // console.log((heightFeetAnswer*12)+parseInt(heightInchesAnswer))
        // console.log(currentUser)
    }
    function handleAgeChange(e){
        setAgeAnswer(e.target.value)
    }
    function handleWeightChange(e){
        setWeightAnswer(e.target.value)

    }
    function handleHeightInchesChange(e){
        setHeightInchesAnswer(e.target.value)
    }
    function handleHeightFeetChange(e){
        setHeightFeetAnswer(e.target.value)
    }
    function handleGoalAnswer(e){
        setGoalsAnswer(e.target.value)

    }
    function handleActivityLevelQuestion(e){
        setActivityLevel(e.target.value)

    }
    const [ageAnswer, setAgeAnswer]= useState(0)
    const [weightAnswer, setWeightAnswer]= useState(0)
    const [heightInchesAnswer, setHeightInchesAnswer]= useState(0)
    const [heightFeetAnswer, setHeightFeetAnswer]= useState(0)
    const [goalsAnswer, setGoalsAnswer]= useState('')
    const [activityLevel, setActivityLevel]= useState('')

    if(completedForm=== false){
    return(
        //Enter heigh [5]'[6]
        <>
         <div className="tea">

        <h2 className="firsttimetitle">Since this is your first time on our site, <br/> answer these questions to get a customized Workout and Meal Plan :</h2>
       
        <form onSubmit={handleSubmit} >
           <div className="form">
            <label name= "Age" /> How old are you? <label/>
            <input onChange={handleAgeChange} name="Age" type="number" placeholder="Age in years" className="inputbox"/>

            <br/>
            <label name= "Weight Question" /> How much do you weigh? <label/>
            <input onChange= {handleWeightChange} name = "Weight Question" type="number" placeholder="Weight in pounds" className="inputbox"/>

            <br/>
            <label name= "Height Question" /> What is your height? <label/>
            <input onChange={handleHeightFeetChange} name= "Height Question feet" type="number" placeholder="5" min="0" className="inputbox2"/> ft
            <input onChange={handleHeightInchesChange} name= "Height Question inches" type="number" placeholder="6" min ="0" max="11" className="inputbox2"/> in

            <br />
            <label name= "Activity Level Question" /> What is your activity level? <label/>
            <br/>
            <input onChange={handleActivityLevelQuestion} name= "Activity Level Question" type="radio" value="Little or no exercise" className= "radio" /> Little or no exercise
            <br />
            <input onChange={handleActivityLevelQuestion} name= "Activity Level Question" type="radio" value="Light exercise a few times a week" className= "radio" /> Light exercise a few times a week
            <br />
            <input onChange={handleActivityLevelQuestion} name= "Activity Level Question" type="radio" value="Moderate exercise 3-5 times a week" className= "radio" /> Moderate exercise 3-5 times a week
            <br />
            <input onChange={handleActivityLevelQuestion} name= "Activity Level Question" type="radio" value="Heavy exercise 6-7 times per week" className= "radio" /> Heavy exercise 6-7 times per week
            <br />
           
           
            <br/>
            <label name ="goals" /> What is your main goal for working out? <label/>
            <br/>
            <input onClick={handleGoalAnswer} name ="goals"  type="radio" value= "To Gain Overall Weight" className="radio" /> To gain overall weight
            <br/>
            <input onClick={handleGoalAnswer} name ="goals"  type="radio" value= "To Loose Overall Weight" className="radio" /> To lose overall weight
            <br />
            <input onClick={handleGoalAnswer} name ="goals"  type="radio" value="To gain muscle mass" className="radio" /> To gain muscle mass
            <br/>

            <input onClick={handleGoalAnswer} name ="goals"  type="radio" value="To Tone muscles and get muscle definition" className="radio" /> To tone muscles and get muscle definition 

            <br/>
            <h2 className="based">Based on your answers<br/>
             you will receive a workout and meal plan catered to you</h2>
            </div>
            <div className="submitdiv">
            <input type="submit" value="Submit" className="submit"/>
            </div>
          

        </form>
        </div>
        </>
    )
    }
    if(completedForm===true){
        return( <> </>)
    }
 
    
}

export default FormQuestions;