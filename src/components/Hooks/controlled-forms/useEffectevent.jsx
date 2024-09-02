import {useEffect,useState} from "react"


function UseEffectEvent()
{
   const[data,setData]=useState({
    xposition:0,
    yposition:0
   })

    function mouseMoveTracker(event)
    {
        const{clientX,clientY}=event
        setData({...data,xposition:clientX,yposition:clientY})
        debugger
        console.log(clientX)
    }
    useEffect(()=>
    {
        window.addEventListener("mousemove",mouseMoveTracker)
        return ()=>
            window.removeEventListener("mousemove",mouseMoveTracker)

    },[])

    
    return(
        <>
<h2>{data.xposition}</h2>
<h2>{data.yposition}</h2>
        </>

    )
}
export default UseEffectEvent;