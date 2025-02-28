import styles from './SocialIcons.module.css'

import Link from 'next/link'
import { FaSquareInstagram,FaGithub,FaLinkedin,FaYoutube } from "react-icons/fa6";


export const SocialIcons=()=>{
    return(
        <div className={styles.SocialIcons}>
           
<Link href={' https://www.instagram.com'}target='_blank'>
<FaSquareInstagram />
 </Link>
 <Link href={'https://github.com'}target='_blank'>
<FaGithub />
 </Link> 
   <Link href={'https://www.linkedin.com'} target='_blank'>
<FaLinkedin />
 </Link>
 <Link href={' https://www.youtube.com '}target='_blank'>
<FaYoutube />
 </Link> 
        </div>
    )
}