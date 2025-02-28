import { Children } from 'react'
import styles from './Button.module.css'
import Link from 'next/link'
export const Button =(
    {LinkTo,LinkText}:{LinkTo:string,LinkText:string}
) =>{
    return(
    <Link href={LinkTo} className={styles.Btn}>{LinkText}</Link>)
}