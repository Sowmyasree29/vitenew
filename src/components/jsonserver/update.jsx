import {useParams,Link,useNavigate} from "react-router-dom"
import {useState,useEffect} from "react"
import axios from "axios"




function Update()
{
    const[data,setData]=useState({})
    const navigate=useNavigate();
    
    const {id}=useParams()
    async function fetchData()
    {
      try{
            const apiData=await axios.get(`http://localhost:3001/users/`+id)
            const response=apiData.data
            console.log(response)
            setData(response)

      }
      catch(err)
      {
        console.log(err)
      }
    }
    useEffect(()=>
    {
   fetchData();
    },[id])
    function changeHandler(event)
    {
        setData({...data,
            [event.target.name]:event.target.value
        })


    }
    function submitHandler(e)
    {
       e.preventDefault();
       async function updated()
       {
        try{
            const updated=await axios.put(`http://localhost:3001/users/`+id,data)
            const response1=updated.data
            console.log(response1,"one updated value")
            navigate('/')
            
            
        }
        catch(err)
        {
            console.log(err)
        }
       }
       updated();
      
    }

    return(
        <>
        <div>update</div>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="enter name" name="name" onChange={changeHandler} value={data.name} /><br />
            <input type="text" placeholder="enter id" name="id" onChange={changeHandler} value={data.id} /><br />
            <input type="email" placeholder="enter email" name="email" onChange={changeHandler} value={data.email}/><br />
            <button>update</button>
            <Link to={"/"}>Back</Link>

        </form>
        </>

    )
}
export default Update;