import NavBar from "../nav-bar/navbar";
import EvenOdd from "../Hooks/evenodd.jsx"
import { useContext } from "react";
import { GlobalContext } from "./navigations.jsx";


function HomeScreen()
{
    const {dispatch}=useContext(GlobalContext)
    function decrementHandler()
    {
        dispatch({
            type:"DECREMENT_AGE"
        })
    }
  
    return(
        <>
        <button onClick={decrementHandler}>decrement</button>
       <NavBar/>
       <EvenOdd/>
        </>


    )
}
export default HomeScreen;