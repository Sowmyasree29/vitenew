import EvenOdd from "../Hooks/evenodd";
import NavBar from "../nav-bar/navbar";
import { UserDetails } from "./navigations";
import { useContext } from "react";


function About()
{
    const {handler}=useContext(UserDetails)
    const {increment}=useContext(UserDetails)
    const {salary}=useContext(UserDetails)
    return(
        <>


        
        <NavBar/>
        <button onClick={handler}>change Theme</button>
        <button onClick={increment}>Increase salary</button>
        <div>salary is incremented to {salary}</div>
        <EvenOdd/>

        </>
    )
}
export default About;