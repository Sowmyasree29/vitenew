import NavBar from "../nav-bar/navbar";
import {Link,Outlet} from "react-router-dom";
import axios from "axios";
import {useState,useEffect} from "react"


function Jwelery()
{
    const[collect,setCollect]=useState([])
    const outerStyle={
        display:"grid",
        gridTemplateColumns:"repeat(4,1fr)",
        gap:"10px",
        gridTemplateRows:"300px",
      
    }
      async function allItems()
      {
        try{
            const fetchData=await axios.get("https://fakestoreapi.com/products/category/jewelery")
            const response=fetchData.data
            console.log(response)
            setCollect(response)

        }
        catch(err)
        {
            console.log(err)
        }
      }
      useEffect(()=>
    {
    allItems();
    },[])
    return(
        <>
        <h2>this is jwellery</h2>
        {
        collect.length>0 &&
        (
            <div style={outerStyle}>
                {
                    collect.map((each,id)=>
                    (
                        <div style={{border:"1px solid black",display:"grid",  alignItems:"center",justifyContent:"center"}}>
                         
                         <div><img src={each.image} height={100} width={200} alt="" /></div>
                         <div key={id}>"Title:"{each.title}</div>
                         <button><Link>view details</Link></button>
                         </div>
                       
                    )
                    )
                }
            </div>
        )
       }

        </>
    )
}
export default Jwelery;