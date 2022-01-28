import React, {useState} from "react";

function WorkoutTrackerCard({workout, routines, routineName}){
    // console.log(routineName)

    const [formArray, setFormArray] = useState([])
    // console.log(formObj)
    
//   const newFormData= document.querySelectorAll(`.${routineName}`)
//   console.log(newFormData)

    const [example, setExample]= useState('')

    
    
    function handleSubmit(e){
        e.preventDefault()
        console.log('submit')
        
    }

    
    function handleChange(e){
        console.log(e.target.value)
    }

    let fullRoutineObj={}
    
    return(
        <>
        <form onSubmit={(e)=>handleSubmit(e)}>
        <table>
            <tr>
                <th>Workout</th>
                <th>Sets Done</th>
                <th>Weight Used in sets</th>
                <th>reps: </th>
            </tr>
            {routines.map((a)=>{

                for(const key in a){
                    if(key === "time"){
                        
                    function handleTimeChange(e){
                        return setFormArray((oldArray)=>{
                            let inputValue= null
                            let inputName= null
                            oldArray.map((a)=>{
                                for(const key in a){
                                    
                                    if(key===e.target.name){
                                        return a[key]= e.target.value, inputName=key, inputValue= a[key]
                                    }
                                }
                            })
                            console.log(formArray)
                            console.log(inputValue)
                            console.log(inputName)
                            if(inputName===e.target.name){
                                
                                return inputValue===e.target.value, console.log('The if statement found an input name that matches')
                            }
                            else{
                            return ([...oldArray, {
                                [e.target.name]: e.target.value
                            }])
                        }
                        })
                    }
                                    // if(specificKey===e.target.name){
                                    //     return a[specificKey] = e.target.value

                                    // }
                                    // else{
                                    //     return ([...oldArray, {
                                    //         [e.target.name]: e.target.value
                                    //     }])

                                    // }
                                
                                
                                // debugger
                                // if(specificKey===e.target.name){
                                //     return a[specificKey] = e.target.value

                                // }
                                // else{
                                //     return ([...oldArray, {
                                //         [e.target.name]: e.target.value
                                //     }]), console.log(formArray)

                                // }
                                
                                
                                // return ([...oldArray, {
                                //     [e.target.name]: e.target.value
                                // }]), console.log(formArray)
                                
                            
                        function handleSubmit(e){
                            e.preventDefault()
                            console.log(e)
                        }
                return(
                        <tr key={a.name}>
                <td> {a.name}</td>
                <td> 
                    -----
                </td>
                <td> 
                    -----
                </td>
                <td> 
                    <input className={routineName} name={`time for ${a.name}`}onChange={handleTimeChange} placeholder= "time doing cardio" ></input>
                </td>
            </tr>
                )

                    }
                    if(key === "reps"){
                        let workoutName= a.name
                        let sets= 0
                        let reps=0
                        let weight=0
                        function handleSetsChange(e){
                            sets= e.target.value

                            console.log(e.target.value)

                        }
                        function handleRepsChange(e){
                            reps= e.target.value
                            console.log(reps)
                        }
                        function handleWeightChange(e){
                            weight= e.target.value
                            console.log(weight)
                        }
                        return(
                            <tr key={a.name}>
                <td> {a.name}</td>
                <td> 
                    <input className={routineName} onChange={handleSetsChange}placeholder= {`Number of sets of ${a.name}`} name={`sets for ${a.name}`}></input>
                </td>
                <td> 
                    <input className={routineName} onChange={handleWeightChange}placeholder= "Weight" name={`weight for ${a.name}`}></input>
                </td>
                <td> 
                    <input className={routineName} onChange={handleRepsChange}placeholder= "reps" name={`reps for ${a.name}`}></input>
                </td>
            </tr>
            
                        )
                        
                    }

                }
                
            })}
            <tfoot /><label name="date"/>Date: <label/>
        <input name="date" type="date"/> <tfoot/>
        </table>
        <input type="submit"></input>
        </form>
        </>
    )
}

export default WorkoutTrackerCard