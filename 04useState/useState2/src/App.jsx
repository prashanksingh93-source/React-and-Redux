import {useState} from 'react'

function App() {
  const[count,setCount]=useState(0)
  return (
    <>
      <div><p>this is count {count}</p></div>
      <div>
        <button onClick={()=>setCount(count + 1)}>pluse 1</button>
      </div>
    </>
  )
}

export default App
