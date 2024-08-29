import {useState} from "react"
import "./style.css"



function EvenOdd()
{
    const[even,setEven]=useState("")
   
    function EvenHandler(nbr)
    {
        if(nbr%2==0)
        {
            setEven("it is even nbr")
        }
        else{
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
         
                <div className="grids">
                    {
                         arr.map(eachitem =>
                            (
                               <div key={eachitem.key}>{eachitem}</div>
                            ))
                    }
                
                </div>
          

        
        </div>
    )
}
export default EvenOdd;