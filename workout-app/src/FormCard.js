import React from "react";


function FormCard({currentUser, data}){

    function forLoop(){
        console.log(data)
        data.map((a)=>{
            return (
                <tr>
                    <td>workout</td>
                    <td>workout stat</td>
                </tr>)

        })
        // return (
        //     <tr>
        //         <td>workout</td>
        //         <td>workout stat</td>
        //     </tr>)
    }

    

    return(


        <>
        <div>

        <table> 
            <tr>
                <th>Workout</th>
                <th>Workout Stats</th>
            </tr>
            {forLoop()}
        </table>
            
        
        <p>form card</p>

        </div>
        
        </>
    )

}

export default FormCard