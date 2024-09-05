import NavBar from "../nav-bar/navbar";
import {Link,Outlet} from "react-router-dom";
import axios from "axios";
import {useState,useEffect,useContext} from "react"
import { UserDetails } from "../navigations/navigations";




function Category()
{
   const {username}=useContext(UserDetails)
    return(
        <>
        <NavBar/>
        <div>this is {username}</div>
       
       <Link to={"jwelery"}>jwelery</Link>
       <Link to={"electronics"}>Electronics</Link>
    
      
       
       <Outlet/>
        </>

    )
}
export default Category;