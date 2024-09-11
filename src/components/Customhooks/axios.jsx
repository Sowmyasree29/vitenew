



import React from 'react'
import {useState,useEffect} from "react"
import axios from "axios"
import {useMemo} from "react"

const useAxios=(url)=> {
    const[data,setData]=useState([])
    const[error,setError]=useState(null)
    const[loading,setLoading]=useState(true)


    useEffect(()=>
    {
       async function fetchData()
       {
        try{
            const apiData=await axios.get(url)
            const response=apiData.data
            setData(response)

        }
        catch(err)
        {
            setError(err)
        }
        finally{
            setLoading(false)
        }
       }
       fetchData()
     

    },[url])
    const memorized=useMemo(()=>
        data
    
    
    ,[data])
  return [memorized,error,loading]
   
}
export default  useAxios;

