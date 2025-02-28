import styles from'./MainBg.module.css'
interface MainBgProps{
    ImgUrl:string,
    ImgUrlAlt?:string,
    h6text:string
}
export const  MainBg=(
    {
       ImgUrl,
       ImgUrlAlt,
       h6text 
    }:MainBgProps
)=>{
    return(
       <div className={styles.MainBg}>
        <div>
            <div>
                <img src={ImgUrl} alt={ImgUrlAlt} />
            </div>
            <div className={styles.MainBgOverlay}></div>
        </div>
        <div className={styles.MainBgContent}>
           <h6>{h6text} </h6>

            
            </div>
           
        </div>
        
    )
}