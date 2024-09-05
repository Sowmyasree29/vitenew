import {useState,useEffect,useContext} from "react"
import axios from "axios"
import {Link} from "react-router-dom";
import { UserDetails } from "../navigations/navigations";


function Products()
{
    const {username}=useContext(UserDetails)
    const {salary}=useContext(UserDetails)


    const[products,setProducts]=useState([])
    const[records,setRecords]=useState([])
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
    console.log(response)
   
        setProducts(response)
        setRecords(response)
    

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
    function Handler(event)
    {
    setRecords(products.filter(p=>p.title.toLowerCase().includes(event.target.value)))
    }
    return(
        <div>
            <h2>products</h2>
            <div>salary is {salary}</div>
            <div>welcome {username}</div>
            <input type="text" onChange={Handler} placeholder="enter Brand name" />
            {
                records.length>0 &&
                
                    <div style={outerStyle}>
                        {
                            records.map((each,id)=>
                            
                              
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