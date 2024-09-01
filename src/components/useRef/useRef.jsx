
import {useState,useRef} from "react"
import axios from "axios"



function LoginForm()
{
    const usernameRef=useRef("")
    const passwordRef=useRef("")
    const[error,setError]=useState({usernameError:" ",passwordError:" "})
    const[arrs,setArrs]=useState([])
    
   
    const myObj={
        username:"",
        password:""
    }
    function ValidateForm(e)
    {
       e.preventDefault();
       
       const userNameEntered=usernameRef.current.value
       const passwordEntered=passwordRef.current.value
       const FormError={
        usernameError:"",
        passwordError:""
       }
       if(!userNameEntered)
       {
        
       FormError.usernameError="it should not be empty"
      
     
        
       }
       else if(userNameEntered.length>20)
       {
        FormError.usernameError="it should be greater than 20"
       
       }
       if(!passwordEntered)
        {
         
        FormError.passwordError="it should not be empty"
      
      
         
        }
       if(passwordEntered.length>20)
       {
        FormError.passwordError="it should be greayer than 20"
      
       }
       if (FormError.usernameError || FormError.passwordError) {
        setError(FormError)
        console.log("Form has errors:", FormError);
       
       
       
        // Exit if there are validation errors
      } else {
        // Hit the API
        setError({ usernameError: "", passwordError: "" });
        myObj.username=userNameEntered
        myObj.password=passwordEntered
        
        setArrs([...arrs,myObj])
        
        
        loginapi(userNameEntered, passwordEntered);
        
      }


    
       
return FormError
       
      

    }

    const loginapi=async(username,password)=>
    {
        console.log("api is hit")
        try{
            const response=await axios.post("https://dummyjson.com/auth/login",
                {
                    "username":username,
                    "password":password,
    
                }
             
            )
            console.log(response.data)
            
        }
        catch(err){
    console.log(err)
        }
       
    }
    function DeleteHandler(index)
    {
        const filtered = arrs.filter((eachobj, idx) => idx !== index);
        setArrs(filtered)


    }

    
    return(
        <form onSubmit={ValidateForm}>
  <div className="form-group">
    <label htmlFor="username">UserName:</label>
    <input type="text" className="form-control" id="username" ref={usernameRef}/>
    {error.usernameError && <p style={{color:"red"}}>{error.usernameError}</p>}

  </div>
  <div className="form-group">
    <label htmlFor="pwd">Password:</label>
    <input type="password" className="form-control" id="pwd" ref={passwordRef} />
    {error.passwordError && <p style={{color:"red"}}>{error.passwordError}</p>}
  
   
  </div>
  <button type="submit" className="btn btn-default">
    Submit
  </button>
 
    {
        arrs.length>0 && <div>
            {
                arrs.map((eachperson,index)=>
                (
                    <div key={index}>
                        {/* <span>{index}</span> */}
                    <span style={{margin:"2px"}} >username is {eachperson.username}</span>
                    <span style={{margin:"2px"}} >password is {eachperson.password}</span>
                    <button onClick={()=>DeleteHandler(index)}>Delete</button>
                    </div>
                )
               
                )
            }
        </div>
    }
</form>
    )
}
export default LoginForm;