import {useState} from "react"


function Counter()
{
    const[count,setCount]=useState(0)
    const CountHandler=(type)=>
    {
        switch(type)
        {
            case "Increment":
            setCount(count+1)
            break
            case "Decrement":
                setCount(count-1)
                break
                case "Reset":
                 setCount(0)
                 
                    default:
                        break


            
        }
      
    }
    

    return(
        <div>
            <h2>the count is {count}</h2>
               <button onClick={()=>CountHandler("Increment")}>Increment</button>
               <button onClick={()=>CountHandler("Decrement")}>Decrement</button>
               <button onClick={()=>CountHandler("Reset")}>Reset</button>
        </div>
     
    )
}
export default Counter;