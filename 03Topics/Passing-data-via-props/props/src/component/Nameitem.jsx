import Item from "./Item"   
function Nameitem(){
    let Name=['Annu','deepu','seetu','rishu']
    return <ul className="list-group">
    {Name.map((item)=>(<Item key={item} QName={item}></Item>))}
    </ul>} 

export default Nameitem