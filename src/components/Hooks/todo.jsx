import { TodoArray } from "./todoarray.js";
import {useState} from "react"
import CustomRectangleCard from "../bootstrap/Custom-card.jsx"


function TodoList() {
    const[todo,setTodo]=useState(TodoArray())
    const[message,setMessage]=useState("")
    const[item,setItem]=useState(false)
    const[update,setUpdate]=useState("")

    function AddHandler()
    {

        const len=todo.length
        const myObj={
            id:len+1,
            text:`item is ${len+1}`
        }
        setTodo([...todo,myObj])
    }
    function DeleteHandler(id)
    {
        const filtereditem=todo.filter(eachtodo=>eachtodo.id!=id)
        console.log(filtereditem)
        setTodo(filtereditem)
    }
    function UpdateHandler(id) {
        const itemToUpdate = todo.find(eachtodo => eachtodo.id === id);
    
        if (itemToUpdate) {
            setItem(true);
            setUpdate(`${id} is updated`);
        } else {
            setItem(false);
            setUpdate("");
        }
    }
    

   
    
    return (
        <div>
            {item &&
          <CustomRectangleCard updated={update}/>}
          
             
           
            <button onClick={AddHandler}>add item</button>

            
            
            <ul>
            {
                todo.map((eachitem) => {
                    const{id,text}=eachitem
                    return(
                        
                        <div  key={id}>
                           
                        <li>{text}</li>
                        <button onClick={()=>DeleteHandler(id)}>Delete item</button>
                        <button onClick={()=>UpdateHandler(id)}>Update</button>

                       
                        
                </div>
                    )
                   
                
                    
})
            }
            </ul>
        </div>
    );
}

export default TodoList;
