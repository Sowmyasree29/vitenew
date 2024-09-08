import {useState,useEffect} from "react"
import axios from "axios"
import {useParams,Link,useNavigate} from "react-router-dom"



function Update()
{
    const[formData,setFormData]=useState({})
    const {updateId}=useParams();
    const navigate=useNavigate();
    
    async function fetchData()
    {
       try{
        const apiData=await axios.get(`http://localhost:3000/users/`+updateId)
       const response=apiData.data
       setFormData(response)
       }
       catch(err)
       {
        console.log(err)
       }
    }
    useEffect(()=>
    {
        fetchData();
    },[updateId])
    function changeHandler(event)
    {
      setFormData({...formData,
        [event.target.name]:event.target.value
      })
    }
    function submitHandler(e)
    {
    e.preventDefault();
   
        async function fetchingData()
        {
            try{
                const update=await axios.put(`http://localhost:3000/users/`+updateId,formData)
                navigate('/')
            }
            catch(err)
            {
                console.log(err)
            }
         
        }

        fetchingData();
   
       
    }
   
    
    return(
        <>
        <div>update page</div>
        <form onSubmit={submitHandler}>
        <input type="text" placeholder="enter id" name="id" onChange={changeHandler} value={formData.id} /><br />
            <input type="text" placeholder="enter username" name="username" onChange={changeHandler} value={formData.username} /><br />
            <input type="text" placeholder="enter todo" name="todo" onChange={changeHandler} value={formData.todo} /><br />
            <input type="text" placeholder="completed" name="completed" onChange={changeHandler} value={formData.completed} /><br />
            <button>update</button>
            <button><Link to={'/'}>Back</Link></button>
        </form>
        </>
    )
}
export default Update;