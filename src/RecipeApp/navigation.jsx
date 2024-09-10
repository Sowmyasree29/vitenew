import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./login";
import Register from "./register";



function NavigationRouter()
{
    return(
             
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
        </BrowserRouter>
    )
    

 
    


  
        
   
}
export default NavigationRouter;