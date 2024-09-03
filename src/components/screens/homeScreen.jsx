
import NavBar from "../nav-bar/navbar";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";



const Login=()=>
{
    const h2Style={marginLeft:"400px"}
    const formStyle={marginLeft:"400px"}
    const navigate=useNavigate();

    function handle()
    {
        navigate("/Home")
    }

    return(
        <>
   
<h2 style={h2Style}>welcome to Login page</h2>
<form style={formStyle} onSubmit={handle}>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email address
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    />
    <div id="emailHelp" className="form-text">
      We'll never share your email with anyone else.
    </div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Password
    </label>
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
    />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">
      Check me out
    </label>
  </div>
  
  <button>Login</button>

</form>




        </>
       
    )
}
export default Login;