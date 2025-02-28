import styles from './Inputbox.module.css'
import { UploadButton } from "@/utils/uploadthing";

interface InputboxProps {
    lableText: string,
    id: string,
    type: string,
    value: string,
    onchange?: any
}

export const Inputbox =(
    {lableText,id,type,value,onchange}:InputboxProps
) => {
   return(
    <div className={styles.Inputbox}>
    <label htmlFor={id}>{lableText}</label><br />
    <input type={type} id={id} value={value} required onChange={onchange} />
</div>
   )
}

interface textAreaboxProps {
    lableText: string,
    id: string,
    value: string,
    onchange?: any
}
export const TextAreaBox = (
    {lableText,id,value,onchange}:textAreaboxProps
) => {
    return (
        <div className={styles.TextAreaBox}>
            <label htmlFor={id} >{lableText}</label><br />
            <textarea value={value}  onChange={onchange} id={id}cols={30} rows={10}></textarea>
        </div>
    )
}
// for image ul
 