import {Routes,Route} from "react-router-dom"
import NavBar from "../nav-bar/navbar";
import Register from "../screens/aboutScreen";
import Login from "../screens/homeScreen";
import HomeScreen from "./home.jsx";
import {Navigate} from "react-router-dom"
import About from "./about.jsx"


function NavigationRouter()
{
    return( 
        <>
       
       
          <Routes>
          <Route path="/" element={<Navigate to="/register" />}/>
          <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
          <Route path="/Home" element={<HomeScreen/>}/>
          <Route path="/about" element={<About/>}/>

        </Routes>
        </>
        
      
      
    )
}
export default NavigationRouter;