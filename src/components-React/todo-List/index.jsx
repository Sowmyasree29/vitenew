import React from 'react'
import {useState} from "react";
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/slice/todoReducer.jsx';  






function  TodoList() {
  const[currentTodo,setCurrentTodo]=useState("")
  const dispatch=useDispatch()

  function changeHandler(event)
  {
    setCurrentTodo(event.target.value)
  }
  function addHandler()
  {
    dispatch(addTodo("sowmya"))
  }
  return (
    <div>
      <input type="text" name="todo" placeholder="enter your todo"  value={currentTodo} onChange={changeHandler}/>
      <button onClick={addHandler}>Add todo +</button>
    </div>
  )
}

export default  TodoList;
