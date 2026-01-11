import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let Name=['Annu','deepu','seetu','rishu']
  return(
    <><h1>Name</h1>
    <ul className="list-group">
   {Name.map((item) => <li key={item} className="list-group-item">{item}</li>)}
  
  </ul>
    </>
  )
}

export default App
