import { useDispatch, useSelector } from "react-redux";
import { GlobalContext } from "./navigation";
import { useContext, useEffect } from "react";
import { buy,sell } from "../reduxToolkit/toys/toySlice";
import { fetchDataPromise } from "../reduxToolkit/products/productsSlice";
import { addToCart } from "../reduxToolkit/cart/cart";
import { Link } from "react-router-dom";




function Register()
{
    const{dark,setDark,themeHandler}=useContext(GlobalContext)
  
    const {toys}=useSelector(state=>state.toyData)
    const{carts}=useSelector(state=>state.cartData)
    const {data}=useSelector(state=>state.productData)
    console.log(data)
    const dispatch=useDispatch()
   
    useEffect(()=>
    {
        dispatch(fetchDataPromise())

    },[])
    console.log(carts)
 
  
    
    function submitHandler(e)
    {
        e.preventDefault();
    }
    return(
        <div>
            <h2>this is register page</h2>
            <form onSubmit={submitHandler}>
              <input type="text" placeholder="Enter username" name="username" />
              <button>submit</button>
            </form>
            {/* <button onClick={themeHandler} style={{backgroundColor:dark?"black":"white",color:dark?"white":"black"}}>set theme</button>
            <button onClick={()=>dispatch(buy())}>buy them</button> */}
            {
                data.length>0 &&(
                    <div>
                        {
                            data.map((each,id)=>
                            (
                                <div>
                               <div>{each.title}</div>
                               <button onClick={()=>dispatch(addToCart(each))}>add to cart</button>
                               <Link to={"/addtocart"}>view cart</Link>
                               </div> 
                            ))
                        }
                    </div>
                )

            }
          

        </div>

    )
}
export default Register;