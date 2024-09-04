import {useState,useEffect} from "react"
import axios from "axios"
import {Link} from "react-router-dom";


function Products()
{
    const[products,setProducts]=useState([])
    const outerStyle={
        display:"grid",
        gridTemplateColumns:"repeat(4,1fr)",
        gap:"10px",
        gridTemplateRows: "repeat(6, 250px)"
        
    }

    async function fetchData()
    {
   try{
    const apiData=await axios.get("https://fakestoreapi.com/products")
    const response=apiData.data
   
        setProducts(response)
    

   }
   catch(err)
   {
    console.log(err)
   }
    }
    useEffect(()=>
    {
       fetchData();
    },[])
    return(
        <div>
            <h2>products</h2>
            {
                products.length>0 &&
                
                    <div style={outerStyle}>
                        {
                            products.map((each,id)=>
                            
                              
                                (
                                    <div key={id}>
                                   
                                    <div><img src={each.image} height={100} width={150} alt="" /></div>
                                    <div>{each.title}</div>
                                    <button><Link to={`${each.id}`}>View products</Link></button>
                                    </div>
                                )
                                 
                              
                             
                            )
                        }
                        </div>
                
            }

        </div>
    )
}
export default Products;