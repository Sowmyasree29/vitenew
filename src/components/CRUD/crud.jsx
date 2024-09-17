import {useState,createContext} from "react"
import {Link} from "react-router-dom"


export const Global=createContext()

function Crud()
{
    const[formData,setFormData]=useState({
        name:"",
        id:"",
        todo:""

    })
    const[todos,setTodos]=useState([])

    function changeHandler(event)
    {
       setFormData({...formData,
        [event.target.name]:event.target.value
       })
    }
    function submitHandler(e)
    {
        e.preventDefault()
        setTodos([...todos,formData])
    }
    function updatedTodo(updated)
    {
        setTodos(todos.map(each=>
        {
            each.id==updated.id?updated:each
        }
        ))
    }

    return(
        <Global.Provider value={
            {updatedTodo:updatedTodo,setTodos}
        }>
        <>
        <form onSubmit={submitHandler}>
            <input type="text" value={formData.name} onChange={changeHandler} name="name" placeholder="enter name"/><br />
            <input type="text" value={formData.id} onChange={changeHandler} name="id" placeholder="enter id" /><br />
            <input type="text" value={formData.todo} onChange={changeHandler} name="todo" placeholder="enter todo" /><br />
            <button>Add Todo+</button>
        </form>
        {
            todos?.length>0 &&(
                <div>
                    {
                        todos.map((each,id)=>
                        (
                           
                            <div key={id}>
                                 <div>{each.name}</div>
                                 <div>{each.id}</div>
                                 <div>{each.todo}</div>
                                 <button>delete</button>
                                 <Link to={`/update/${each.id}`} state={{todoItem:each}}>update</Link>
                            </div>

                        ))
                    }
                </div>
            )
        }
        </>
        </Global.Provider>
    )
}
export default Crud