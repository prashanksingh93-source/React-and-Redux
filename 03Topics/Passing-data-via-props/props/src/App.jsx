import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import Message from './component/Message.jsx'
import Nameitem from './component/Nameitem.jsx'


function App() {
  //let Name=[]
  let Name=['Annu','deepu','seetu','rishu']
  
  return(
    <><h1>Name</h1>
   <Message></Message>
   <Nameitem></Nameitem>

    </>
  )
}

export default App
