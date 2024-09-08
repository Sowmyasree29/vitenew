
import{useState,useReducer} from "react";

const Reducer=(state,action)=>
    {
      switch(action.type)
      {
        case "INCREMENT_AGE":
            return {...state,age:state.age+1}
            case "CHANGE_NAME":
                return {...state,username:action.payload}
                case "ADD_TODO":
                return {...state,todos:[...state.todos,action.payload]}
                case "DELETED":
                    return {...state,todos:action.payload}
                default:
                return state

      }
    }

function ReducerExample()
{
    const[enteredTodo,setEnteredTodo]=useState("")
    const[deleted,setDeleted]=useState([])

    const initialState={
        username:"",
        id:"",
        age:0,
        todos:["repeat the class","do the assignment"],
        homeaddress:{}
    }
    const[current,dispatch]=useReducer(Reducer,initialState)
 
    function incrementHandler()
    {
        dispatch({
            type:"INCREMENT_AGE"
        })
       
    }
    function addHandler(event)
    {
   setEnteredTodo(event.target.value)
    }
    function submitHandler(e)
    {
        e.preventDefault();
        dispatch({
            type:"ADD_TODO",
            payload:enteredTodo
        })
        setEnteredTodo("")
    }
    function deleteHandler(index)
    {
        const target=current.todos.filter((_,id)=>id!==index)
        setDeleted(target)
        dispatch({
            type:"DELETED",
            payload:target
        })

    }

  


    
    return(
        <>
        {/* <form onSubmit={submitHandler}>
        <input type="text"  onChange={nameHandler} placeholder="enter name" value={name} />
        <button>submit</button>
        </form> */}
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="enter todo" name={enteredTodo} onChange={addHandler} value={enteredTodo} />
            <button>add +</button>
            


        </form>
        {
           
                <table>
                <tr>
                    <th>todo</th>
                    <th>action</th>
                </tr>
       
            {
                current.todos.map((each,index)=>
                    (
                     <tr key={index}>
                     <td >{each}</td>
                     <td><button onClick={()=>deleteHandler(index)}>delete</button></td>
                     </tr>
                   
                
                    )
                     )
            }
                 </table>
         
       
        }
          
        

    
        <h1>{current.age}</h1>
        <h2>{current.username}</h2>
        <button onClick={incrementHandler}>increment age</button>
        </>
    )
}
export default ReducerExample;