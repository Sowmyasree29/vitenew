import {useState,useEffect,useRef} from "react"
import TableComponent from "../../table-component/table"


function TabSwitching()
{
    const loginref=useRef(null)
    const registerref=useRef(null)
    const[lg,setLg]=useState(false)
    const[rg,setRg]=useState(false)
    const[arr,setArr]=useState([])
    const[formData,setFormData]=useState({
        username:"",
        email:"",
        
    })
    const[register,setRegister]=useState({
        username:'',
        password:""
    })
    const[arr2,setArr2]=useState([])
    function loginHandler()
    {
        setLg(true)
        setRg(false)
        // console.log("login is clicked")
    }
    function registerHandler()
    {
        setRg(true)
        setLg(false)
        // console.log("register is clicked")
    }
    useEffect(()=>
    {
        const login=loginref.current
        const register=registerref.current
        if(login)
        {
            
            login.addEventListener("click",loginHandler)
        }
        if(register)
        {
            
            register.addEventListener("click",registerHandler)
        }
        return
        ()=>
        {
            if(login)
            {
                login.removeEventListener("click",loginHandler)
            }
            if(register)
                {
                    register.removeEventListener("click",registerHandler)
                }
        }


    },[lg,rg])

    function HandlerName(event)
    {
       
        setFormData({...formData,
        [event.target.name]:event.target.value})


    }
    function HandlerName2(event)
    {
    setRegister({...register,
        [event.target.name]:event.target.value
    })
}

    function SubmitHandler2(e) {
        e.preventDefault();
        const newForm2 = {
            data1: register.username,
            data2: register.password
        };

        setArr2([...arr2, newForm2]);
        
    }

    
    function submitHandler(e)
    {
      e.preventDefault();
      const newForm={
        data1:formData.username,
        data2:formData.email
      }
      console.log(arr)
      setArr([...arr,newForm])

    }

   return(
    <>
    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
    <button style={{margin:"50px",backgroundColor:"violet"}} ref={loginref}>Login</button><br/>
    <button style={{backgroundColor:"violet"}} ref={registerref}>register</button>
    </div>
      
       {
        lg && (

           <>
           <h2 style={{margin:"10px"}}>login Form</h2>
           <form onSubmit={submitHandler}>
            <input style={{margin:"10px"}} type="text" value={formData.username} placeholder="enter name" name="username" onChange={HandlerName}/><br/>
            <input style={{margin:"10px"}} type="email" value={formData.email} placeholder="enter email" name="email" onChange={HandlerName} /><br/>
            <button>submit</button><br/>
          
           </form>
           {
            arr.length>0 && (
              <div>
               
                       
                         <TableComponent  rowData={arr} head1="username" head2="password"/>
                
              </div>
            )
           }
           </>
           
        )
       }
       {
               rg && (

                <>
                <h2 style={{margin:"10px"}}>Register Form</h2>
                <form onSubmit={SubmitHandler2}>
                 <input style={{margin:"10px"}} type="text" value={register.username} placeholder="enter name" name="username" onChange={HandlerName2}/><br/>
                 <input style={{margin:"10px"}} type="password" value={register.password} placeholder="enter password" name="password" onChange={HandlerName2} /><br/>
                 <button>submit</button><br/>
               
                </form>
                {
                 arr2.length>0 && (
                   <div>
                     {
                         arr2.map((each,index)=>
                         (
                             <TableComponent key={index} rowData={arr2}/>
     
                         ))
                     }
                   </div>
                 )
                }
                </>
                
             )
      
       }
    </>
 

   )

    
}
export default TabSwitching;