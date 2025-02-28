
import styles from './Inputbox.module.css'
interface InputboxProps{
    labelText:string,
    Type:string,
    id:string,
    required?:boolean,
    value:string,
    onchange?:any
}


export const Inputbox = (
    {
        labelText, Type, id, required, onchange,value
    }:InputboxProps
    
)=>{
    return(
        <div className={styles.Inputbox}>
            <label htmlFor={id}>{labelText}</label><br />
            <input id={id} type={Type} value={value}required={required} onChange={onchange} />
        </div>
        
    )
}