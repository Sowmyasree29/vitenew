import {useState} from "react"



function Todos()
{
    const[input,setInput]=useState({
        name:'',
        completed:''
    })
    const[arr,setArr]=useState([])
    const[selected,setSelected]=useState(null)
    function changeHandler(event)
    {
        setInput({...input,
            [event.target.name]:event.target.value

        })
    }
    function submitHandler(e)
    {
        e.preventDefault();
        setArr([...arr,input])
        setInput({
            name:'',
            completed:''
        })
        
        
    }
    function updatedItem(e)
    {
        e.preventDefault()
        const todocopy=[...arr]
        todocopy[selected]=input
        setArr(todocopy)
        setInput({
            name:'',
            completed:''
        })
        setSelected(null)
        
        
    }
    function handleInput(ind)
    {
        setSelected(ind)
        const value=arr[ind]
        setInput(value)
        
    }
    return(
        <>
        <form onSubmit={selected !== null ?updatedItem :submitHandler}>
            <input type="text" name="name" placeholder="enter todo" onChange={changeHandler} value={input.name}/><br />
            <input type="text" name="completed" placeholder="enter status" onChange={changeHandler} value={input.completed}/><br />
            
            <button>add todo</button>
        </form>
        {
            arr.length>0 &&(
                <div>
                    {
                        arr.map((each,index)=>
                        (
                            <>
                            <div key={index}>
                            <div >{each.name}</div>
                            <div >{each.completed}</div>
                           <button onClick={()=>handleInput(index)}>update</button>
                           <button>delete</button>
                            </div>
                          
                            </>
                         
                        ))
                    }
                </div>
            )
        }


        </>
    )
}
export default Todos