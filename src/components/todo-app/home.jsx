import {useState,useEffect} from "react"
import axios from "axios"
import {Link} from "react-router-dom"



function Home()
{
    const[formData,setFormData]= useState({
        id:"",
        username:"",
        todo:"",
        completed:""
    })
    const[data,setData]=useState([])
    const headStyle={
        height:"30px",
        width:"70px",
        margin:"8px"
    }
    const headStyle2={
        width:"250px",
        height:"30px"
    }
    async function fetchData()
    {
        try{
            const apiData=await axios.get("http://localhost:3000/users")
            const response=apiData.data
            setData(response)
            console.log(response)

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
        setFormData({...formData,
            [event.target.name]:event.target.value
        })

    }
    function submitHandler(e)
    {
        e.preventDefault();
        setData([...data,formData])
        async function fetchingData()
        {
            try{
               const added=await axios.post("http://localhost:3000/users",formData)
               const response1=added.data
            //    setData(response1)
            console.log(response1)
            }
            catch(err)
            {
                console.log(err)
            }
        }
        fetchingData();
    }
    function deleteHandler(id)
    {
        async function deleting()
        {
            try{
                const del=await axios.delete(`http://localhost:3000/users/`+id)
                location.reload();
            }
            catch(err)
            {
                console.log(err)
            }
        }


        deleting();
        
    }

    return(
        <>
        <div>home page</div>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="enter id" name="id" onChange={changeHandler} value={formData.id} /><br />
            <input type="text" placeholder="enter username" name="username" onChange={changeHandler} value={formData.username} /><br />
            <input type="text" placeholder="enter todo" name="todo" onChange={changeHandler} value={formData.todo} /><br />
            <input type="text" placeholder="completed" name="completed" onChange={changeHandler} value={formData.completed} /><br />
            <button>add +</button>
        </form>
        {
            data.length>0 && (
                <table>
                    <thead>
                        <tr>
                            <th style={headStyle}>id</th>
                            <th style={headStyle}>username</th>
                            <th style={headStyle2}>todo</th>
                            <th style={headStyle}>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((each,id)=>
                            (
                                <tr key={id}>
                                    <td>{each.id}</td>
                                    <td>{each.username}</td>
                                    <td>{each.todo}</td>
                                    <td>{each.completed}</td>
                                    <td><Link to={`/update/${each.id}`}>edit</Link></td>
                                    <td><button onClick={()=>deleteHandler(each.id)}>Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            )
        }
        </>
    )
}
export default Home;