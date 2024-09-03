
import { NavLink } from "react-router-dom";



function NavBar()
{
    const linkStyle={
        textDecoration:"none",color:"blue"
    }
    const liStyle={
        margin:"10px"
    }
    return(
        <>
 <nav className="navbar navbar-expand-sm bg-light">
  <div className="container-fluid">
  
    <ul className="navbar-nav">

      <li style={liStyle} className="nav-item">
      <NavLink style={linkStyle} to={"/about"}>About</NavLink>
      </li>
      <li style={liStyle} className="nav-item">
      <NavLink style={linkStyle} to={"/login"}>Login</NavLink>
      </li>
      <li style={liStyle} className="nav-item">
      <NavLink style={linkStyle} to={"/register"}>Register</NavLink>
      </li>

  
    </ul>
  </div>
</nav>

 

        </>
    )
}
export default NavBar;