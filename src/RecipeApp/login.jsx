
import {useState} from "react"
import axios from "axios"

function Login()
{
   const[formData,setFormData]=useState({
    username:"",
    password:'',
   })
   const[arr,setArr]=useState([])
   const divStyle={
    display:"flex",
    flexDirection:"column",
    marginLeft:"550px",
    marginTop:"150px",
    justifyContent:"center",
    alignItems:"center",
    border:"1px solid black",
    height:"400px",
    width:"400px"
   }

    function changeHandler(event)
    {
        setFormData({...formData,
            [event.target.name]:event.target.value
        })
      
   
    }
    
    function submitHandler(e)
    {
        e.preventDefault();
      
      
            fetchData(formData.username,formData.password)
       
      
     
    

    }
    async function fetchData(username,password)
    {
        console.log("api is hit")
        try{
            const apiData=await axios.post("https://dummyjson.com/auth/login",
                {
                username:username,
                password:password
                })
               
                console.log(apiData.data)
          
         
        }
        catch(err)
        {
            console.log(err)
        }
    }
    return(
        <div style={divStyle}>
            <h2>This is login page</h2>
            <form onSubmit={submitHandler}>
 
  <div className="mb-3">
    <label htmlFor="exampleInputUsername" className="form-label">
      Enter Username
    </label>
    <input
      type="text"
      className="form-control"
      id="exampleInputUsername"
      name="username"
      onChange={changeHandler}
      value={formData.username}
    />
  </div>
 
 
      <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Password
    </label>
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
      name="password"
      onChange={changeHandler}
      value={formData.password}
    />
  </div>
  
 

 
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>
{/* {
    arr.length>0 && (
        <div>
            {
                arr.map((each,index)=>
                (
                    <h1>{each.username} and password is {each.password}</h1>
                ))
            }
            </div>
    )
} */}

        </div>
    )
}
export default Login;