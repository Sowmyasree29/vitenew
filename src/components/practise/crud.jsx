  
import {useState} from "react"

  function Crud()
  {
    const[arr,setArr]=useState([])
    const[todos,setTodos]=useState({
        todo:"",
        id:""
    })
    const[selected,setSelected]=useState(null)
    
    function changeHandler(event)
    {
        setTodos({...todos,
            [event.target.name]:event.target.value
        })
    }
    function addHandler(e)
    {
        e.preventDefault()
        setArr([...arr,todos])
        setTodos({
            todo:"",
            id:" "
        })

       

    }
    function updateHandler(indx)
    {
        setSelected(indx)
        const filter=arr.filter((each,id)=>each.id==indx)
        setTodos(filter[0])
       
    }
    function updated(e)
    {
      e.preventDefault()
      setArr(
        arr.map((each)=>each.id===selected?todos:each)

      )
      setSelected(null)
    //   setArr(
    //     arr.map((each) =>
    //       each.id === selected ? { ...each, ...todos } : each
    //     )
    //   );


      
    }

    function deleteHandler(indx)
    {
        const deleted=arr.filter((each,id)=>each.id!==indx)
        setArr(deleted)
    }
    return(
        <>
        <form onSubmit={selected!=null?updated:addHandler} >
            <input type="text" name="todo" onChange={changeHandler} value={todos.todo} placeholder="enter todo" /><br />
            <input type="text" name="id" onChange={changeHandler} placeholder="enter id" value={todos.id}/><br />
            <button >add todo</button>
        </form>
        {
            arr.length >0 &&(
                <div>
                    {
                        arr.map((each,id)=>
                        (
                            <div>
                               <div>{each.todo}</div>
                               <div>{each.id}</div>
                               <button onClick={()=>deleteHandler(each.id)}>delete</button>
                               <button onClick={()=>updateHandler(each.id)}>update</button>
                            </div>
                        ))
                    }
                </div>
            )
        }

        </>

    )
  }
  export default Crud;