import React from "react";

function FormQuestions(){
    return(
        <>
        <h2>Answer These Questions So We Can Figure Out The Best Workout Plan For You</h2>
        <form>
            <br/>
            <label name= "Age"/> How old are you? <label/>
            <input name="Age" type="number" placeholder="Your age here" />
            <br/>
            <label name= "Weight Question"/> How much do you weigh? <label/>
            <input name =" Weight Question" type="number" placeholder="Weight in pounds" />
            <br/>
            <label name= "Height Question"/> What is your height in Feet? <label/>
            <input name= "Height Question" type="number" placeholder="Height in feet" />
            <br/>
            <label name ="goals" /> What are your goals for working out? <label/>
            <br/>
            <input name ="goals"  type="radio"/> To Gain Overall Weight
            <br/>
            <input name ="goals"  type="radio"/> To Loose Overall Weight
            <br />
            <input name ="goals"  type="radio"/> To gain muscle mass
            <br/>
            <input name ="goals"  type="radio"/> To Tone muscles and get muscle definition 
            <br/>
            <p>Based on the answers to these questions we will make a customized workout and meal plan catered to you.</p>
            <input type="submit" value="Click to get see your workout routines"/>


        </form>
        </>
    )
}

export default FormQuestions;