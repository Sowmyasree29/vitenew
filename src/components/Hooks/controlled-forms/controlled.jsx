import {useState} from "react"


function ControlledForm()
{

    const[model,setModel]=useState("")
    const[err,setErr]=useState("")
    const[mobile,setMobile]=useState("")
    const[errs,setErrs]=useState("")
    
  
    const[arr,setArr]=useState([])
   

    function ModelName(event)
    {
        const modelname=event.target.value
        setModel(modelname)
        
        const error=ModelValidator(modelname)
      if(error)
      {
        setErr(error)
      }
      else{
        setErr("")
        
       
        

        
      }
        
       
      
        

    }
    function SubmitHandler(e)
    {
        e.preventDefault();
       

      
        const modelError = ModelValidator(model);
        const mobileError = MobileValidator(mobile);
    
        if (modelError || mobileError) {
          setErr(modelError);
          setErrs(mobileError);
        } else {
          const myObj = {
            models: model,
            mobilenumber: mobile,
          };
           
            setArr([...arr,myObj])
            setModel(""); // Clear the input fields after successful submission
            setMobile("");
            setErr("");
            setErrs("");
        }
        
    

    }
    function ModelValidator(value)
    {
         let error=""
         if(!value)
         {
            error="please enter model name"
         }
         else if (value.length<3)
         {
            error="model name should not be less than 3 charcters"
         }
       
         return error;
    }
    function MobileNbr(event)
    {
        const nbr=event.target.value
        setMobile(nbr)
        const errors=MobileValidator(nbr)
        if(errors){
            setErrs(errors)
        }
        else{
            setErrs("")
          
            
        }

    }
    function MobileValidator(value)
    {
        let errors=""
        if(!value)
        {
            errors="mobile nbr cannot be empty"
        }
        else if(value.length<=9)
        {
           errors="mobile nbr should be exactly 10 digits"
        }
        return errors
    }

    
    return(
        <form onSubmit={SubmitHandler} >
            <h3>Samsung complaint Form</h3>
        <div className="form-group">
          <label htmlFor="username">Enter device model</label>
          <input type="text" className="form-control" id="username" value={model} onChange={ModelName} />
          {err && <span style={{color:"red"}}>{err}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="mblnbr">Enter Mobile Number</label>
          <input type="text" className="form-control" id="mblnbr" value={mobile} onChange={MobileNbr} />
          {errs && <span>{errs}</span>}
        
        </div>
     
        <button type="submit" className="btn btn-default">
          Submit
        </button>
        {
            arr.length>0 && (
                <div>
                {
                    arr.map((eachperson,index)=>
                    (
                     <table key={index}>
                       
                        <tr>  <td style={{border:"1px solid black",width:"100px", height:"45px",padding:"6px"}}>{eachperson.models}</td>
                        <td style={{border:"1px solid black",width:"100px",height:"45px",padding:"6px"}}>{eachperson.mobilenumber}</td></tr>
                          
                        
                    

                     </table>   
                    )

                    )
                }
            </div>
            )
        
        }
       
      
      </form>
    )

}
export default ControlledForm;