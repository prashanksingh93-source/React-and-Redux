import{useState} from 'react'
function App(){
  const[text,settext]=useState('this is event hanling in react')
  let handleClick=()=>{settext('you don in event handling in react')}
  return(
    <>
    <div><h3>{text}</h3></div>
    <div>
      <button onClick={handleClick}>click</button>
      <button onClick={()=>settext('i am hero bro')}>click2</button>
      <button onClick={()=>alert('inline Click')}>click3 </button>
    </div>
    </>
  )
}
export default App;