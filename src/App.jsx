import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from "./list.jsx"
import CustomImage from "./props.jsx"
import { recipiedata } from './dummy.js'
import MainHeading from "./Mainheading/Heading.jsx"
import SecondaryHeading from "./Mainheading/Secondaryheading.jsx"
import Button from "./Button/index.jsx"
import Counter from "./components/Hooks/counter.jsx"
import TodoList from "./components/Hooks/todo.jsx"

import EvenOdd from "./components/Hooks/evenodd.jsx"




function App() {
 
  return (
    <div>
        <EvenOdd/>
        <TodoList/>
    </div>

  )
}

export default App
