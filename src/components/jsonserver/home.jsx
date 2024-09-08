import {useState,useEffect} from "react"
import axios from "axios";
import {Link,useNavigate} from "react-router-dom";



function Home()
{
    const[data,setData]=useState([])
    const navigate=useNavigate();
    const[formData,setFormData]=useState({
        name:"",
        id:"",
        email:""
    })
    const initialData={
        name:"",
        id:"",
        email:""
    }
    
   async function fetchData()
   {
    try{
        const apiData=await axios.get("http://localhost:3002/users")
        console.log(apiData)
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
},[])
function changeHandler(event)
{
    setFormData({
        ...formData,
        [event.target.name]:event.target.value
    })
}
function submitHandler(e)
{
    e.preventDefault();
    async function addedData()
    {
        try{
            const addData=await axios.post("http://localhost:3002/users",formData)
            const response1=addData.data
            console.log(addData,"addeddata")
            console.log(response1,"response")
            setData([...data,response1])
            setFormData(initialData)

            // setData(response1)

        }
        catch(err)
        {
            console.log(err)
        }
    

    }
    addedData();
}
function deleteHandler(id)
{
   async function deleted()
   {
    try{
         const deleting=await axios.delete(`http://localhost:3002/users/`+id)
         const response2=deleting.data
         location.reload();


         
    }
    catch(err)
    {
        console.log(err)
    }
   }
   deleted();
}


    return(
        <>
        <div>Home</div>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="enter name" name="name" onChange={changeHandler} value={formData.name}/><br />
            <input type="text" placeholder="enter id" name="id" onChange={changeHandler} value={formData.id} /><br />
            <input type="email" placeholder="enter email" name="email" onChange={changeHandler} value={formData.email}/><br />
            <button>add +</button>

        </form>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((each,id)=>
                    ( 
                       <tr key={id}>
                        <td>{each.id}</td>
                        <td>{each.name}</td>
                        <td>{each.email}</td>
                        <td><Link to={`/read/${each.id}`}>read</Link></td>
                        <td><Link to={`/update/${each.id}`}>edit</Link></td>
                        <td><button onClick={()=>deleteHandler(each.id)}>delete</button></td>
                       </tr> 
                    ))
                }

            </tbody>
        </table>
        </>

    )
}
export default Home;