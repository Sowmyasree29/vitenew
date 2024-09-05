
import { NavLink } from "react-router-dom";
import { UserDetails } from "../navigations/navigations";
import { useContext } from "react";



function NavBar()
{
  const {darkTheme}=useContext(UserDetails)
    const linkStyle={
        textDecoration:"none",color:"blue"
    }
    const liStyle={
        margin:"10px"
    }
    return(
        <>
 <nav className={`navbar navbar-expand-sm bg-${darkTheme?"dark":"light"}`}>
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
      <li style={liStyle} className="nav-item">
      <NavLink style={linkStyle} to={"/category"}>category</NavLink>
      </li>
      <li style={liStyle} className="nav-item">
      <NavLink style={linkStyle} to={"/products"}>products</NavLink>
      </li>

  
    </ul>
  </div>
</nav>

 

        </>
    )
}
export default NavBar;