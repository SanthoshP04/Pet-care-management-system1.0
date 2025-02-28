import styles from './Footer.module.css'
import { SocialIcons } from '@/Components/SocialIcons/SocialIcons'
export const Footer=()=>{
    return(
        <footer className={styles.Footer}>
            <h6>@ 2024 pet shop</h6>
            <h6>feedback to me</h6>
    
        <div>
<SocialIcons/>

        </div>
        </footer>
    )
}