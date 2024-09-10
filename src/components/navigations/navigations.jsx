import {Routes,Route, BrowserRouter} from "react-router-dom"
import NavBar from "../nav-bar/navbar";
import Register from "../screens/aboutScreen";
import Login from "../screens/homeScreen";
import HomeScreen from "./home.jsx";
import {Navigate} from "react-router-dom"
import About from "./about.jsx"
import Category from "../screens/category.jsx";
import Jwelery from "../screens/jwelery.jsx";
import Electronics from "../screens/electronics.jsx";
import Products from "../screens/products.jsx";
import ProductDetails from "../screens/products-details.jsx";
import {useState,createContext,useReducer} from "react"

import { initialState,ReducerFunction } from "./useReducer.js";


export const UserDetails=createContext()
export const GlobalContext=createContext()

function NavigationRouter()
{
  

  const[isDark,setIsDark]=useState(true)
  const[salary,setSalary]=useState(100000)
  function Handler()
  {
    setIsDark(!isDark)
  }
  function Increment()
  {
    setSalary(salary+1000)
  }
const[current,dispatch]=useReducer(ReducerFunction,initialState)
console.log(current)

  
  const[username,setUsername]=useState("iam globalstate")
    return( 
      <GlobalContext.Provider value={
        {current:current,dispatch:dispatch}

      }>
      <UserDetails.Provider value={{
        username:"hello user",
        darkTheme:isDark,
        salary:salary,
        handler:Handler,
        increment:Increment,
      }
       

      }>

     
        <>
       <BrowserRouter>
       
          <Routes>
          <Route path="/" element={<Navigate to="/register" />}/>
          <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
          <Route path="/Home" element={<HomeScreen/>}/>
          <Route path="/category" element={<Category/>}>
          <Route index element={<Jwelery/>}/>
          <Route path="jwelery" element={<Jwelery/>}/>
          <Route path="electronics" element={<Electronics/>}/>
          </Route>
          <Route path="/about" element={<About/>}/>
          <Route path="products" element={<Products/>}/>
          <Route path="products/:productId" element={<ProductDetails/>}/>

        </Routes>
        </BrowserRouter>
        </>
        
      </UserDetails.Provider> 
      </GlobalContext.Provider>
      
    )
}
export default NavigationRouter;