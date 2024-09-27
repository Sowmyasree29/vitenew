import React from 'react'
import {useState} from "react"
import { useMemo } from 'react'

function UseMemo() {
    const[incr,setIncr]=useState(0)
    const[count,setCount]=useState(0)

   function expensiveCalculation(num)
   {
    for(let i=0;i<100000;i++)
    {
    
    }
    return num*2

   }
   const memoizedValue=useMemo(()=>expensiveCalculation(count),[count]);
  return (
    <div>
       <button onClick={()=>setCount(count+1)}>increase count</button>
       <button onClick={()=>setIncr(incr+1)}>increase increment</button>

      
    </div>
  )
}

export default U
