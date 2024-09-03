
import {Link,useNavigate} from "react-router-dom"
import FormHandling from "../Hooks/controlled-forms/usingonestate"



const Register=()=>
    {
        const h2Style={marginLeft:"400px"}
        const formStyle={marginLeft:"400px"}
        const navigate=useNavigate()
        function handler()
        {
            navigate("/Home")
        }


        return(
            <>

            <h2 style={h2Style}>welcome to registration page</h2>
           <form style={formStyle} onSubmit={handler}>
         
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Enter username
    </label>
    <input
      type="text"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    />
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      email
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleInputPassword1"
    />
     <div id="emailHelp" className="form-text">
      We'll never share your email with anyone else.
    </div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail2" className="form-label">
      Enter Password
    </label>
    <input
      type="password"
      className="form-control"
      id="exampleInputEmail2"
      aria-describedby="emailHelp"
    />
   
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">
      Check me out
    </label>
  </div>

           <Link to={"/login"}>Already have an account</Link><br />
           <button >Register</button>

           </form>
            
    
        
          
            </>
        )
    }
    export default Register;