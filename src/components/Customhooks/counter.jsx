
import {useState} from "react"


const useCounter=(intialValue=0)=>
{
  const[count,setCount]=useState(intialValue)

  function increment()
  {
    setCount(count+1)
  }

  function decrement()
  {
    setCount(count-1)
  }
  function reset()
  {
    setCount(0)
  }
  return {count,increment,decrement,reset}
  
  
}
export default useCounter