import NavBar from "../nav-bar/navbar";
import {Link,Outlet} from "react-router-dom";
import {useContext} from "react"
import { UserDetails } from "../navigations/navigations";
import { GlobalContext } from "../navigations/navigations";




function Category()
{
   const {username}=useContext(UserDetails)
   const{dispatch}=useContext(GlobalContext)
   function incrementHandler()
   {
    dispatch({
        type:"INCREMENT_AGE"
    })
   }
    return(
        <>
        <NavBar/>
        <div>this is {username}</div>
        <button onClick={incrementHandler}>increment</button>
        
       
       <Link to={"jwelery"}>jwelery</Link>
       <Link to={"electronics"}>Electronics</Link>
    
      
       
       <Outlet/>
        </>

    )
}
export default Category;