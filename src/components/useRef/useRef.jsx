
import {useState,useRef} from "react"
import axios from "axios"



function LoginForm()
{
    const usernameRef=useRef("")
    const passwordRef=useRef("")
    const[error,setError]=useState({usernameError:" ",passwordError:" "})
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
  { !error.usernameError && !error.passwordError && <table >
    <th style={{border:"1px solid black"}}>username</th>
    <th style={{border:"1px solid black"}}>password</th>
   <tr style={{border:"1px solid black",height:"20px" }}>
    <td style={{border:"1px solid black",width:"50px"}}> {usernameRef.current.value} </td>
    <td> {passwordRef.current.value} </td>
   </tr>
  </table>
    }
</form>
    )
}
export default LoginForm;