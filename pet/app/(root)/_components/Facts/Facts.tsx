import styles from './Facts.module.css'


export const Facts=(
    {pText}:{pText:string}
)=>{
   return( <div className={styles.Facts}>
    <h6>Do You Know</h6>
    <p>
    {pText} </p>
    </div>

)}
