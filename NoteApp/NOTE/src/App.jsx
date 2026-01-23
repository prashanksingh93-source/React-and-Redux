import './App.css'
import Navbar from './component/Navbar.jsx'
import { useState,useEffect } from 'react'
import Card from './component/Card.jsx'

function App() {
  const[note,setnote]=useState([])
  const[currentnote,setcurrentnote]=useState({title:'',dsc:''})
  useEffect(()=>{
   let Storage=localStorage.getItem('note')
    if(Storage){
      setnote(JSON.parse(Storage))
    }},[])
   
  const handleChange=(e)=>{
     setcurrentnote({...currentnote,[e.target.name]: e.target.value})
     console.log(currentnote)
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    setnote([...note,currentnote])
    setcurrentnote({title:'',dsc:''})
   localStorage.setItem('note',JSON.stringify([...note,currentnote]))
  }


  return(<>
   <Navbar />
   <main>
  <h1>create your note</h1>
  <form action="" onSubmit={handleSubmit}>
   <div>
    <label htmlFor="title">Title</label>
    <input type="text" value={currentnote.title} onChange={handleChange} name='title' id='title'/>
   </div>
   <div>
    <label htmlFor="dsc">Discription</label>
    <textarea type="text" name='dsc' id='dsc' value={currentnote.dsc} onChange={handleChange} />
   </div>
   <button>submit</button>
  </form>
  </main>
  <section className='yourNote'>
    <h3>your notes</h3>
    <div className='container'>
      {note && note.map((e)=>{
        return <Card title={e.title} dsc={e.dsc}/>
      })}
    </div>
  </section>
  </>)

}
export default App
