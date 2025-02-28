import styles from './CustomBg.module.css'

import {Button} from '../Button/Button'
interface CustomBgProps{
    ImgUrl: string,
    ImgUrlAlt?:string,
    h6Text:string,
    h5Text:string,
    ButtonLinkText:string,
    ButtonLinkTo:string,

}


export const CustomBg=(
    {
        ImgUrl,
        ImgUrlAlt,
        h6Text,
        h5Text,
        ButtonLinkText,
        ButtonLinkTo

    }:CustomBgProps
       
    
)=>{
    return(
        <div className={styles.CustomBg}>
    <div>
<div>
    <img src={ImgUrl} alt={ImgUrlAlt}/>
</div>
<div className={styles.CustomBgOverlay}></div>
</div>
<div className={styles.CustomBgContent}>
    <h6>{h6Text}</h6>
    <h5>{h5Text}</h5>

    <Button
    LinkText={ButtonLinkText}
    LinkTo={ButtonLinkTo}/>
</div>
</div>
    )
    
}
