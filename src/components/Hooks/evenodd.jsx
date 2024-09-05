import {useContext, useState} from "react"
import "./style.css"
import { UserDetails } from "../navigations/navigations"



function EvenOdd()
{
    const[even,setEven]=useState("")
    const {darkTheme}=useContext(UserDetails)
    const {handler}=useContext(UserDetails)
    const divStyle={
        backgroundColor:darkTheme?"yellow":"red",
    }
   
    function EvenHandler(nbr)
    {
        if(nbr%2==0)
        {
            setEven("it is even nbr")
        }
        else
        {
            setEven("it is odd nbr")
        }
    }
    const arr=[]
    for(let i=1;i<=100;i++)
    {
        arr.push(<button className="btn" key={i} onClick={()=>EvenHandler(i)}>{i}</button>)
    }
    return(
        <div>
          <h2>{even}</h2>
          <button onClick={handler}>change Theme</button>
         
                <div className="grids">
                    {
                         arr.map(eachitem =>
                            (
                               <div style={divStyle} key={eachitem.key}>{eachitem}</div>
                            ))
                    }
                
                </div>
          

        
        </div>
    )
}
export default EvenOdd;