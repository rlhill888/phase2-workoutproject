import React from "react";


function FormCard({currentUser, data}){
    
const sortedData= data.sort()
    function mapLoop(){
        data.forEach((a)=>{
            console.log(a)
            return (
                <p>something</p>

        )
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
        <p>form card</p>

        

        {sortedData.map((a)=>{
            return(<p>{JSON.stringify(a)}</p>)
        })}

        

        
           
        
       

        </div>
        
        </>
    )

}

export default FormCard