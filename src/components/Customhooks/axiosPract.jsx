



import useAxios from "./axios";
import {useState,useEffect} from "react"

function AxiosPract()
{
    const[fill,setFill]=useState([])
    const[data,loading,err]=useAxios('https://dummyjson.com/products')
    useEffect(()=>{
        if(data && data.products)
            {
                console.log(data.products)
                setFill(data.products)
            }
    },[data])
   
    if(loading)
    {
        return <h3>please wait.....</h3>
    }
    return(
        <>
         {
            fill.length>0 &&(
                <div>
                    {
                        fill.map((each,id)=>
                        (
                          <div key={id}>{each.title}</div>
                        ))
                    }
                </div>
            )
        }
        </>
    )
}
export default AxiosPract;