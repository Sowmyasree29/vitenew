import {useState,useEffect} from "react"
import axios from "axios"


const useAxios=(url)=>
{
    const[data,setData]=useState([])
    const[loading,setLoading]=useState(true)
    const[err,setErr]=useState(null)
    async function fetchData()
    {
        try{
            const apiData=await axios.get(url)
            const response=apiData.data
            console.log(response)
            setData(response)
            setLoading(false)
            setErr("")

        }
        catch(err)
        {
          
            setLoading(false)
            setErr(err)
        }
    }
    useEffect(()=>
    {
        fetchData();
    },[url])
    return [data,loading,err]
}
export default useAxios