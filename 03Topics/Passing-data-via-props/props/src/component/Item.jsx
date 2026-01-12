import style from './item.module.css'
function Item({item}){
   return <li className={`"ist-group-item" ${style.liItem}`} name={item}>{item}</li>
}
export default Item