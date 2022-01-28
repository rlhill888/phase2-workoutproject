import React from "react";
import FormCard from "./FormCard";


function StatsForm({currentUser}){
    const userForms= currentUser.form

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