import {useState} from "react"


 function UpdatedDeleted()
{
    const[formData,setFormData]=useState({
        
        username:"",
        email:""
    })
    const[arr,setArr]=useState([])

    function changeHandler(event)
    {
        setFormData({...formData,[event.target.name]:event.target.value})
    }
    function submitHandler(e)
    {
        e.preventDefault();
        console.log(formData)
        const existing=JSON.parse(localStorage.getItem("user"))||[]
        const updated=[...existing,formData]
        localStorage.setItem("user",JSON.stringify(updated))
        if(formData)
        {
            setArr([...arr,formData])
            setFormData({
                username:"",
                email:""
            })
        }
        

    }
    function updateHandler(index)
    {
       const retrive=JSON.parse(localStorage.getItem("user"))
       if(retrive && retrive[index])
       {
          const usrname=retrive[index]
          setFormData(
            {
                username:usrname.username,
                email:usrname.email
            }
          )
       }
       
       
    }
    function deleteHandler(username)
    {
        const exstData=JSON.parse(localStorage.getItem("user"))
        const filtered=exstData.filter(each=>each.username!=username)
        localStorage.setItem("user",JSON.stringify(filtered))
        

        setArr(filtered)
    }
   
  return(
    <div>
    <form onSubmit={submitHandler}>
        <input type="text" placeholder="enter Username" onChange={changeHandler} value={formData.username} name="username" /><br />
        <input type="email" placeholder="enter email" onChange={changeHandler} value={formData.email}  name="email"/><br />
        <button>submit</button>
    </form>
    {
        arr.length>0 &&(
            <table>
            {
                arr.map((each,index)=>
                (
                    <tr key={index}>
                    <td>{each.username}</td>
                    <td>{each.email}</td>
                    <td><button onClick={()=>updateHandler(index)}>update</button></td>
                    <td><button onClick={()=>deleteHandler(each.username)}>delete</button></td>
                  
                    </tr>
                )
                )
            }
            </table>
           
        )
    }
    </div>
  )
}
export default UpdatedDeleted;