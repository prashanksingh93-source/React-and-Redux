import { useState } from "react"
function App() {
 const[text,setText]=useState("Annu are very good fullStact developer")

  return (
    <><div><h3>{text}</h3></div>
    <button onClick={()=>setText("now he is so bad")}>click 1</button>
    <button onClick={()=>setText("ab kya try krna chahta hain vo ")}>click 2</button>
      
    </>
  )
}

export default App
