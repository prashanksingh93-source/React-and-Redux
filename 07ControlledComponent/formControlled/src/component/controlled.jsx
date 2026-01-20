import {useState} from 'react'
function Change(){
    const[paswd,setpaswd]=useState(0)
    const[name,setname]=useState('')
    let handler=(e)=>{setpaswd(e.target.value)}
    function handleSubmit(event){
        event.preventDefault;
        alert(`Name : ${name} & Password : ${paswd}`)
    }
    return(<form onSubmit={handleSubmit}>
        <label For="paswd">password : </label>
        <input id='paswd' onChange={handler} value={paswd} type="text" /><br/>
        <label For="name">Name : </label>
        <input id='name' onChange={(e)=>{setname(e.target.value)}} value={name}/>
        <button type='submit'>login</button>
        </form>
    )
}
export default Change