import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./home";
import Update from "./update";



function Navigation()
{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/update/:updateId" element={<Update/>}/>
        </Routes>
        </BrowserRouter>

    )
}
export default Navigation;