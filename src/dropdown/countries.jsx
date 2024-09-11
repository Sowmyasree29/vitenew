import axios from "axios"
import {useEffect,useState} from "react"


function Countries()
{
    const[data,setData]=useState([])
    const[getCountry,setGetCountry]=useState("")
    const[unique,setUnique]=useState([])
    const[state,setState]=useState([])
    async function fetchData()
    {
        try{
            const apiData=await axios.get(  "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json")
            const response=apiData.data
            console.log(response)
            setData(response)
            const uniquecountries=new Set(response.map(each=>each.country))
            console.log(uniquecountries)
            setUnique([...uniquecountries])
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
    function changeHandler(event)
    {
        let country=event.target.value
            setGetCountry(country)
            let states=data.filter(each=>each.country===country)
            let uniquestate=new Set(states.map(each=>each.subcountry))
            setState([...uniquestate])

    }

    return(
        <>
          <form>
            <select style={{margin:"10px",width:"300px"}} value={getCountry} onChange={changeHandler}>
             
                        {
                            unique.map((each,index)=>
                            (
                                <option key={index} value={each}>{each}</option>
                            )
                            )
                        }
                  
               

            </select><br />
            <select style={{margin:"10px", width:"300px"}}>
                {
                    state.map((each,index)=>
                    (
                        <option value={each} key={index}>{each}</option>
                    ))
                }
            </select>
          </form>
        </>

    )
}
export default Countries;