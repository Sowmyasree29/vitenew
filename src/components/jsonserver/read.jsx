import {useParams,Link} from "react-router-dom";
import {useEffect,useState} from "react"
import axios from "axios"



function Read()
{
    const {id}=useParams()
    const[data,setData]=useState({})
    
    async function fetchData()
    {
        try{
            const apiData=await axios.get(`http://localhost:3001/users/`+id)
            const response=apiData.data
            console.log(response,"1id")
            setData(response)
            
        }
        catch(err)
        {
            console.log(err)
        }
       
        
    }
    useEffect(()=>
    {
        fetchData()
    },[id])
    return(
        <>
        <div>read</div>
        {
            Object.keys(data).length>0 &&
            (
                <div>
                    <div><b>Name:</b>{data.name}</div>
                    <div><b>Id:</b>{data.id}</div>
                    <div><b>Email:</b>{data.email}</div>
                    <Link to={"/"}>back</Link>
                </div>
            )
        }

        </>

    )
}
export default Read;