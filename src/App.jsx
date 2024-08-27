import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from "./list.jsx"

function App() {
  let myName="sowmya";
  

  return (
    <div>
         <h2>this is react practise session by {myName}</h2>
         <List/>
        
    </div>

 
  )
}

export default App
