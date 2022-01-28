import React, {useState} from "react";
import "./MacrosButton.css";
import styled from "styled-components";

const Button = styled.button`
     && { background: black;
    border-color: yellow;
    color: yellow;
    font-family: 'Bebas Neue', cursive;
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 50px;
    padding: 10px;
    }

    &:hover {
        background: yellow;
        color: black;
        transition-duration: 1.3s;
    }
`;

function MacrosButton(){
const [macrosButton, setMacrosButton]= useState(false)
function handleButton(){
    setMacrosButton(!macrosButton)
}

if(macrosButton=== false)
    return (
        <>
        <Button onClick={handleButton}>What are Macros?</Button>

        </>
    )
if(macrosButton===true){
    return(
        <>
        <div>
        <h2>What is a macro?</h2>
        <p>First and foremost, knowing what you’re counting is super important, right?<p>Well, “macro” is short for macronutrient. What’s a macronutrient? They’re the three categories of nutrients you eat the most and provide you with most of your energy: protein, carbohydrates and fats.</p> So when you’re counting your macros, you’re counting the grams of proteins, carbs or fat that you’re consuming.</p>
        <h2>Why do people count macros?</h2>
        <p>Keeping track of your macros can help you make (or plan to make) smart, healthy food choices. It’s similar to counting calories or points, but it takes the ideology one step further.</p>
        <h2>So calories don’t matter?</h2>
        <p>Sorry, but no. Calories DO matter. In the simplest terms, weight loss happens when you burn more calories than you consume.</p> <p>Macro counting helps you understand where those calories are coming from and how they affect your body. It also helps you understand that not all calories are created equal.</p>

        <p>For example, let’s say you have a calorie goal of 2,000 a day. One gram of protein is 4 calories. So if you eat 125 g of protein, you’re eating 500 calories from protein, leaving you 1,500 calories to split between your fat and carbs.</p>

        <p>“I like that people can focus more on the composition of their food, so they’re going to pay more attention to how they’re fueling their body and how their body reacts, which is really beneficial,” says Claire Brailer, a Registered Dietitian in Montana.</p> <p>“It also might help people meet their fitness goals because they will be having greater satiety when they’re focusing on getting enough protein and paying more attention to what kind of carbohydrates they are consuming rather than just calories alone.”</p>

        <Button onClick={handleButton}>Close Macro Explination</Button>
        </div>

        </>
    )
}

}

export default MacrosButton