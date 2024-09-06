import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./home";
import Create from "./create";
import Update from "./update";
import Read from "./read";



function Navigation()
{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/update/:id" element={<Update/>}/>
            <Route path="/read/:id" element={<Read/>}/>
        </Routes>
        </BrowserRouter>

    )
}
export default Navigation;