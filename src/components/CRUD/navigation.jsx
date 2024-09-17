import { BrowserRouter,Routes,Route } from "react-router-dom";
import Crud from "./crud";
import Update from "./update";
import { Global } from "./crud";



function Navigation()
{
    return(
      
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Crud/>}/>
            <Route path="/update/:updateId" element={<Update/>}/>
        </Routes>
        </BrowserRouter>
     
    )
}
export default Navigation;