
import React, { useCallback } from 'react'
import Mainheading from './Mainheading';
import {useState} from "react"
import CustomButton from './CustomButton';

function UseCallback() {
const[toggle,setToggle]=useState(false)
const[age,setAge]=useState(0)
const clickHandler=useCallback(()=>
{
    setToggle(!toggle)
},[toggle])
const ageHandler=useCallback(()=>
{
    setAge(age+1)
},[age])

  return (
    <div>
        {
            toggle?(
                <h2>Welcome user</h2>
            ):null
        }
        <h2>age is {age}</h2>
      <Mainheading/>
      <CustomButton text="toggle" onPress={clickHandler}/>
      <CustomButton text="increment age" onPress={ageHandler}npm/>
    </div>
  )
}

export default UseCallback;
