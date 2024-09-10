import {useState,useMemo} from "react"



function UseMemo()
{
    const[milkQty,setMilkQty]=useState(1)
    const[riceQty,setRiceQty]=useState(1)

    const milkprice=useMemo(()=>
    {
        console.log("milk qty rendered")
        const price1=50

        return milkQty*price1;
    
    },[milkQty])
    const riceprice=useMemo(()=>
    {
        console.log("rice qty rendered")
        const price2=100

        return price2*riceQty
    },[riceQty])
    function milkHandler()
    {
        setMilkQty(milkQty+1)
    }
    function riceHandler()
    {
        setRiceQty(riceQty+1)
    }
 
    return(
        <>
          <h2>{milkQty} price1={milkprice}</h2>
          <h2>{riceQty} price is{riceprice}</h2>

          <button onClick={milkHandler}>increase milk</button>
          <button onClick={riceHandler}>increase rice</button>
        </>
    )
}
export default UseMemo;