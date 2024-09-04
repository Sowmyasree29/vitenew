import NavBar from "../nav-bar/navbar";
import {Link,Outlet} from "react-router-dom";
import axios from "axios";
import {useState,useEffect} from "react"




function Category()
{
   
    return(
        <>
        <NavBar/>
       
       <Link to={"jwelery"}>jwelery</Link>
       <Link to={"electronics"}>Electronics</Link>
    
      
       
       <Outlet/>
        </>

    )
}
export default Category;