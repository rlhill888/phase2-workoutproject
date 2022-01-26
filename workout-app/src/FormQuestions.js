import React, {useState} from "react";

function FormQuestions({allGoalOptions, completedForm, currentUser, setCompletedForm}){
    
    function handleSubmit(e){
        e.preventDefault() 
        
        
        currentUser.FormCompleted =true
        currentUser.data.age = ageAnswer
        currentUser.data.goals= goalsAnswer
        currentUser.data.height= (heightFeetAnswer*12)+parseInt(heightInchesAnswer)
        currentUser.data.weight= weightAnswer
        currentUser.data.bmi = (weightAnswer*703/(currentUser.data.height*currentUser.data.height)).toFixed(1)

        
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
    const [ageAnswer, setAgeAnswer]= useState(0)
    const [weightAnswer, setWeightAnswer]= useState(0)
    const [heightInchesAnswer, setHeightInchesAnswer]= useState(0)
    const [heightFeetAnswer, setHeightFeetAnswer]= useState(0)
    const [goalsAnswer, setGoalsAnswer]= useState('')

    if(completedForm=== false){
    return(
        //Enter heigh [5]'[6]
        <>
        <h2>Since this is your first time on our site, answer These Questions So We Can Figure Out The Best Workout Plan For You</h2>
        <form onSubmit={handleSubmit}>
            <br/>
            <label name= "Age"/> How old are you? <label/>
            <input onChange={handleAgeChange} name="Age" type="number" placeholder="Your age here" />
            <br/>
            <label name= "Weight Question"/> How much do you weigh? <label/>
            <input onChange= {handleWeightChange} name =" Weight Question" type="number" placeholder="Weight in pounds" />
            <br/>
            <label name= "Height Question"/> What is your height in Feet? <label/>
            <br/>
            example: <input onChange={handleHeightFeetChange} name= "Height Question feet" type="number" placeholder="5" min="0"/>'
                     <input onChange={handleHeightInchesChange} name= "Height Question inches" type="number" placeholder="6" min ="0" max="11" />
            <br/>
            <label name ="goals" /> What are your goals for working out? <label/>
            <br/>
            <input onClick={handleGoalAnswer} name ="goals"  type="radio" value= "To Gain Overall Weight"/> To Gain Overall Weight
            <br/>
            <input onClick={handleGoalAnswer} name ="goals"  type="radio" value= "To Loose Overall Weight"/> To Loose Overall Weight
            <br />
            <input onClick={handleGoalAnswer} name ="goals"  type="radio" value="To gain muscle mass"/> To gain muscle mass
            <br/>
            <input onClick={handleGoalAnswer} name ="goals"  type="radio" value="To Tone muscles and get muscle definition"/> To Tone muscles and get muscle definition 
            <br/>
            <p>Based on the answers to these questions we will make a customized workout and meal plan catered to you.</p>
            <input  type="submit" value="Click to get see your workout routines"/>


        </form>
        </>
    )
    }
    if(completedForm===true){
        return( <> </>)
    }
 
    
}

export default FormQuestions;