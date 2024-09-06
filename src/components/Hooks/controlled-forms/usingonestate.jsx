import {useState} from "react"
import TableComponent from "../../table-component/table.jsx"



function FormHandling()
{
  const initialform=  {
    username:'',
    email:'',
    occupation:'',
    gender:'',
    languages:[]
}

const formStyle={
  marginLeft:"500px",
}
// const[table,setTable]=useState([])
    const[formData,setFormData]=useState(
        {
            username:'',
            email:'',
            occupation:'',
            gender:'',
            languages:[]
        })
        const[arr,setArr]=useState([])
        const[err,setErr]=useState({})
        const[decide,setDecide]=useState(false)
        function onChangeHandler(event)
        {
            
            if(event.target.name==="languages")
            { 
                let copy={...formData} 
                // console.log(formData)
                if(event.target.checked)
                {
                    copy.languages.push(event.target.value)
                }
                else{
                    copy.languages=copy.languages.filter(each=>each !== event.target.value)
                }
                setFormData({...copy})

               
            }
            else{
                setFormData(()=>(
                    {
                       ...formData,
                        [event.target.name]:event.target.value
                    }
                ))
            }
          
          
            let isValid = validationForm(formData);
            if(isValid)
            {
                setDecide(true)
            }
            
           

        }
        function validationForm(formData)
        {
          let error={}
         
           if(formData.username.length<3)
          {
            error.username="username greater than 3 charcters"
          }
          if(formData.email==='')
            {
              error.email="email cannot be empty"
            }
            if(formData.occupation==='')
              {
                error.occupation="username cannot be empty"
              }
          setErr({...error})
        
return Object.keys(error).length===0
        }
    


        function onSubmitHandler(e) {
          e.preventDefault();
          
           // Get validation result
           const newFormData={
            data1:formData.username,
            data2:formData.email,
            data3:formData.occupation
           }
           const existingData=JSON.parse(localStorage.getItem("user"))||[]
           const updated=[...existingData,newFormData]
           localStorage.setItem("user",JSON.stringify(updated))
         
          
          if (decide) {
              setArr([...arr, newFormData]); 
               // Add formData to the array only if valid
           
               setFormData(initialform)
                   
          } else {
              alert("please fill the form correctly");
          }
          
      }
      
    return(
      <div>
        <form style={formStyle} onSubmit={onSubmitHandler} >
       
    <div className="form-group">
      <label htmlFor="username">Enter Name</label>
      <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={onChangeHandler} />
      <span style={{color:"red"}}>{err.username}</span>
 
    </div>
    <div className="form-group">
      <label htmlFor="email">Enter email</label>
      <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={onChangeHandler} />
      <span style={{color:"red"}}>{err.email}</span>
     
    
    </div>
    <div className="form-group">
      <label htmlFor="occupation">Select Occupation</label>
      <select className="form-control" name="occupation"  onChange={onChangeHandler}>
      <option value="Employee">Employee</option>
      <option value="student">student</option>
      <option value="others">others</option>
      </select>
     
    
    </div>
    <div className="form-group">
  <label htmlFor="gender">Gender</label>
  <div className="form-check">
    <input
      type="radio"
      className="form-check-input"
      id="male"
      name="gender"
      value="male"
      onChange={onChangeHandler}
    />
    <label htmlFor="male" className="form-check-label">Male</label>
  </div>
  <div className="form-check">
    <input
      type="radio"
      className="form-check-input"
      id="female"
      name="gender"
      value="female"
      onChange={onChangeHandler}
    />
    <label htmlFor="female" className="form-check-label">Female</label>
  </div>
  <div className="form-check">
    <input
      type="radio"
      className="form-check-input"
      id="other"
      name="gender"
      value="other"
      onChange={onChangeHandler}
    />
    <label htmlFor="other" className="form-check-label">Other</label>
  </div>
</div>

<div className="form-group">
  <label htmlFor="Languages">Languages</label>
  <div className="form-check">
    <input
      type="checkbox"
      className="form-check-input"
      id="html"
      name="languages"
      value="HTML"
      onChange={onChangeHandler}
    />
    <label htmlFor="html" className="form-check-label">HTML</label>
  </div>
  <div className="form-check">
    <input
      type="checkbox"
      className="form-check-input"
      id="css"
      name="languages"
      value="CSS"
      onChange={onChangeHandler}
    />
    <label htmlFor="css" className="form-check-label">CSS</label>
  </div>
  <div className="form-check">
    <input
      type="checkbox"
      className="form-check-input"
      id="js"
      name="languages"
      value="JS"
      onChange={onChangeHandler}
    />
    <label htmlFor="js" className="form-check-label">JS</label>
  </div>
</div>

<button type="submit" className="btn btn-default">Submit</button>

    </form>
   {arr.length>0 && (<TableComponent rowData={arr} />)} 
 </div>
     
    )}
 

export default FormHandling;