import {useState} from "react"

function App() {
  const [text, settext] = useState('this is ternary operation')
  let btn=()=>{settext('this is button one')}
  let btn2=()=>{settext('this is button two')}
  const ternary=true


  return (
    <><div><h2>{text}</h2></div>
    <button onClick={btn}>click1</button>
    {ternary ? (<button onClick={()=>alert('this is alert')}>alert</button>):(<button onClick={btn2}>click2</button>)}


      
    </>
  )
}

export default App
