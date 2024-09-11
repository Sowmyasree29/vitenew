
import {useState} from "react"


const useCustomStorage=()=>
{
    const[formData,setFormData]=useState({
        name:"",
        id:""
        
    })
    const[data,setData]=useState([])
   
    


    function changeHandler(event)
    {
        setFormData({...formData,
            [event.target.name]:event.target.value})
    }

    function submitHandler(e)
    {
        e.preventDefault();
        setData([...data,formData])
        const existingData=JSON.parse(localStorage.getItem("user"))||[]
        const upadtedData=[...existingData,formData]
        localStorage.setItem("user",JSON.stringify(upadtedData))
        
    }
    
    
    
    return {submitHandler,changeHandler,formData,data}

}
export default useCustomStorage