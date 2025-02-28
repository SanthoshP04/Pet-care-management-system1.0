import { Children } from 'react'
import styles from'./AuthBg.module.css'
export const AuthBg=(
    {children}:{children:React.ReactNode}
)=>{
    return(
        <div className={styles.AuthBg}>
            <div className={styles.AuthBgImg}></div>
         <div>
            {children}
            </div>
        </div>
    )
    
}