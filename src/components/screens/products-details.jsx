import {useParams} from "react-router-dom";
import {useState,useEffect} from "react"
import axios from "axios"
import CustomCard from "../bootstrap/cards";



function ProductDetails()
{
    const[product,setProduct]=useState({})
   const dynamicPath= useParams()
   async function fetchData()
   {
    try{
      const apiData=await axios.get(`https://fakestoreapi.com/products/${dynamicPath.productId}`)
      const response=apiData.data
      setProduct(response)
    }
    catch(err)
    {
        console.log(err)
    }
   }
useEffect(()=>
{
    fetchData();
},[dynamicPath])
    return(
        <div>
          
        {
           Object.keys(product).length>0 &&
           (
            <div>
               
                    {/* {product.title}
                </div>
                <img src={product.image} height={200} width={200} alt="" />
                <div>{product.description}</div> */}
                <CustomCard title={product.title} img={product.image} desc={product.description}/>
                </div>
           )
        }
        </div>
    )
}
export default ProductDetails;