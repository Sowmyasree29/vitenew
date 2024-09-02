import {useState,useEffect} from "react"
import axios from "axios"


function UseEffectExample()
{
    const[endpoint,setEndpoint]=useState("products")
    const[info,setInfo]=useState([])
    async function fetching()
    {
       
      
        try{
            const apiData=await axios.get(`https://fakestoreapi.com/${endpoint}`)
            
            const response=apiData.data
            console.log(response)
            
          
          
            
            setInfo([...response])


        }
        catch(err)
        {
            console.log(err)
        }
    }
    function changeHandler(each)
    {
        setEndpoint(each)
    }
   
    useEffect(()=>
    {
     fetching()
    },[endpoint])
   

    return(
        <>
       {
        ["products","carts","users"].map(each=>
        (
            <button onClick={()=>changeHandler(each)}>{each}</button>
        )
        )
       }
        <ul>
            {
                info.map((each,id)=>
                (
                    <li key={id}>{each.id}</li>
                )

                )
            }
        </ul>
        </>

    )
}
export default UseEffectExample;