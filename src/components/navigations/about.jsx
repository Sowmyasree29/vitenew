import EvenOdd from "../Hooks/evenodd";
import NavBar from "../nav-bar/navbar";
import { UserDetails } from "./navigations";
import { useContext,useState,useEffect } from "react";
import {GlobalContext} from "./navigations"
import useAxios from "../Customhooks/axios";


function About()
{
    const {current,dispatch} =useContext(GlobalContext)
    const {handler}=useContext(UserDetails)
    const {increment}=useContext(UserDetails)
    const {salary}=useContext(UserDetails)
    const[data,setData]=useState([])
    const[products,error,loading]=useAxios('https://dummyjson.com/products')
    
    const[recipe,err,load]=useAxios('https://dummyjson.com/recipes')
      useEffect(()=>
      {
        if(products && products.products)
            {
                
                setData(products.products)
            }
      },[products])
       
    
    
   
    if(loading)
        {
            return <h3>please wait loading....</h3>
        }
   
  
    return(
        <>


        
        <NavBar/>
        {
            data.length>0 && (
                <div>
                    {
                        data.map(each=>
                        (
                            <div>{each.title}</div>
                        )
                        )
                    }
                </div>
            )
        }
        <h2>{current.count}</h2>
       
        
        <button onClick={handler}>change Theme</button>
        <button onClick={increment}>Increase salary</button>
        <div>salary is incremented to {salary}</div>
        {/* <EvenOdd/> */}

        </>
    )
}
export default About;