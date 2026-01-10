import './App.css'
import { AppName } from './component/AppName.jsx'
import { TodoItem1 } from './component/Todoitem1.jsx'
import { TodoItem2 } from './component/Todoitem2.jsx'
import { AddTodo } from './component/AddTodo.jsx' 

function App() {
  return (<center className='Todo-Container'> 
    <AppName/>
    <AddTodo/>
    <div className='item-container'>
    <TodoItem1/>
    <TodoItem2/>
    </div>  
    </center>
  )
}

export default App
