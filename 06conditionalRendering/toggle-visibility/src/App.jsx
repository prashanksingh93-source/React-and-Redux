import {useState} from 'react'
function App(){
  const[visible,setvisible]=useState(true)
  return<>
  <div><button onClick={()=>setvisible(!visible)}>{visible? "hide": "show"}</button></div>
  {visible && <p>this is visible now</p>}
  </>
}
export default App