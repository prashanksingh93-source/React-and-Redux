import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let Name=[];
    // let Name=['Annu','deepu','seetu','rishu']
  let conditional=Name.length==0?<h4>empty</h4>:null;
  return(<>
  <h1>Name</h1>
  {conditional}
  <ul className="list-group">
   {Name.map((item)=><li key={item} className="list-group-item">{item}</li>)}
  </ul>
  
  </>)
}

export default App
