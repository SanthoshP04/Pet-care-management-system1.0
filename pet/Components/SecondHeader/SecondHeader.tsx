import styles from './SecondHeader.module.css'
export const SecondHeader=(
    {ImgUrl}:{ImgUrl:string}
)=>{
    return(
        <div className={styles.SecondHeader}>
            <img src={ImgUrl} alt="" />
            
            <div className={styles.SecondHeaderOverlay}></div>
        </div>
    )
}