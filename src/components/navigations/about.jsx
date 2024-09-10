import EvenOdd from "../Hooks/evenodd";
import NavBar from "../nav-bar/navbar";
import { UserDetails } from "./navigations";
import { useContext } from "react";
import {GlobalContext} from "./navigations"


function About()
{
    const {current,dispatch} =useContext(GlobalContext)
    const {handler}=useContext(UserDetails)
    const {increment}=useContext(UserDetails)
    const {salary}=useContext(UserDetails)
    return(
        <>


        
        <NavBar/>
        <h2>{current.count}</h2>
       
        
        <button onClick={handler}>change Theme</button>
        <button onClick={increment}>Increase salary</button>
        <div>salary is incremented to {salary}</div>
        <EvenOdd/>

        </>
    )
}
export default About;