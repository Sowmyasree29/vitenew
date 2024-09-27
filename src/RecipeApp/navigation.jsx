import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./login";
import Register from "./register";
import { createContext,useState } from "react";
import ProductList from "./productslist";


export const GlobalContext=createContext()
function NavigationRouter()
{
    const[dark,setDark]=useState(false)
    const ThemeHandler=()=>
    {
        setDark(!dark)
    }
    return(
        <GlobalContext.Provider value={{
            themeHandler:ThemeHandler,
            dark:dark,
            setDark:setDark
        }}>

             
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/product" element={<ProductList/>}/>

        </Routes>
        </BrowserRouter>
        </GlobalContext.Provider>
    )
    

 
    


  
        
   
}
export default NavigationRouter;