import axios from "axios"
import {useEffect,useState} from "react"


function UseMemos()
{
    const[data,setData]=useState([])
    async function fetchData()
    {
        try{
             const apiData=await axios.get('https://dummyjson.com/products')
             const response=apiData.data.products
            //  console.log(response)
             setData(response)
        }
        catch(err)
        {
            console.log(err)
        }
    }
    useEffect(()=>
    {
        fetchData();
    },[])
    function filterData(data)
    {
        const filterItems=data.filter(each=>each.price>=10)
        console.log(filterItems)
        setData(filterItems)

    }
  
   
    return(
        <>
        <h2>use Memo</h2>
        <button onClick={()=>filterData(data)}>price greater than 10 dollars</button>
        <button></button>
        {
            data.length>0 &&
            (
                <div>
                    {
                        data.map((each,id)=>
                        (
                            <div>{each.title}</div>
                        )
                        
                        )
                    }
                </div>
            )
        }
      
        </>

    )
}
export default UseMemos;