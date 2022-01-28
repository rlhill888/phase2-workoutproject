import React from "react";
import FormCard from "./FormCard";


function StatsForm({currentUser}){
    const userForms= currentUser.statsForm

    if (userForms.length === 0){
        return(
            <>
            <h1>Past workouts:</h1>

            <h2>You havent tracked any workouts yet.</h2>

            </>
        )
    }

    return(

        <>
        <h2>Past workouts: </h2>
        {userForms.map((a)=>{
                return <FormCard data={a} />
            
            
        })}

        </>
    )


}

export default StatsForm