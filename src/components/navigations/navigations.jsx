import {Routes,Route} from "react-router-dom"
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



function NavigationRouter()
{
    return( 
        <>
       
       
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
        </>
        
      
      
    )
}
export default NavigationRouter;