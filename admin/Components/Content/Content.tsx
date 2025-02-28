import Link from 'next/link'
import styles from './Content.module.css'



export const Content =(
    {
        h6Text,LinkTo,LinkText
    }:{h6Text:string,LinkTo:string,LinkText:string}
) => {
    return(
        <div className={styles.Content}>
            <h6>{h6Text} </h6>
            <Link href={LinkTo} >{LinkText}</Link>
        </div>
    )
}