import { GlobalContext } from "./navigation";
import { useContext } from "react";


function Register()
{
    const{dark,setDark,themeHandler}=useContext(GlobalContext)
    
    function submitHandler(e)
    {
        e.preventDefault();
    }
    return(
        <div>
            <h2>this is register page</h2>
            <form onSubmit={submitHandler}>
              <input type="text" placeholder="Enter username" name="username" />
              <button>submit</button>
            </form>
            <button onClick={themeHandler} style={{backgroundColor:dark?"black":"white",color:dark?"white":"black"}}>set theme</button>
        </div>

    )
}
export default Register;