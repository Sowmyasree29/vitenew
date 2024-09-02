import { useState, useEffect } from "react";

function DropDown() {
  const [data, setData] = useState([]);
  const[unique,setUnique]=useState([]);
  const[getCountry,setGetCountry]=useState(" ");
  const[state,setState]=useState([])
  const[getstate,setGetstate]=useState(" ")
  const[city,setCity]=useState([])

  async function countries() {
    try {
      const apiData = await fetch(
        "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json"
      );
      const response = await apiData.json();
      setData(response); 
      console.log(data); 
      const uniquecountries=new Set(data.map(city=>city.country))
      setUnique([...uniquecountries])
     

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    countries();
  }, []);

  function onChangeHandler(event)
  {
    let country=event.target.value
    setGetCountry(country)
    setGetstate(""); // Reset state when country changes
    setCity([]);
    let states=data.filter(state=>state.country === country)
    
    let uniquestate=new Set(states.map(each=>each.subcountry))
    let uniarr=[...uniquestate]
    setState([...uniarr])
    
   

    
    
  }
  function changeState(event)
  {
    let state=event.target.value
    setGetstate(state)
    let cities=data.filter(each=>each.subcountry === state)
  
    let unistate=new Set(cities.map(each=>each.name))
    let unistarr=[...unistate]
    setCity([...unistarr])
   


  }
 

  

  return (
    <div>
    <form>
      <select style={{margin:"10px",width:"300px"}} onChange={onChangeHandler} value={getCountry} >
        
     
        {
          unique.map((ctr,index)=>
          (
            <option key={index} value={ctr}>{ctr}</option>
          )
         

      )
        }
      </select><br />
     
            <select style={{margin:"10px",width:"300px"}} onChange={changeState} value={getstate} >
           <option value=" ">select state</option> 

             {
               state.map((each,index)=>
              (
                <option value={each} key={index}>{each}</option>
              )

              )
            }
          </select><br />  


          <select style={{margin:"10px",width:"300px"}} >
          <option value=" ">select city</option>

{
   city.map((each,index)=>
  (
    <option value={each} key={index}>{each}</option>
  )

  )
}
</select>
    
    </form>
    </div>
  );
}

export default DropDown;

