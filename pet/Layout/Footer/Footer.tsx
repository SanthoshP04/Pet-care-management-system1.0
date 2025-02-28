
import Link from 'next/link'
import styles from './Footer.module.css'

import { SocialIcons } from "@/Components/SocialIcons/SocialIcons"


import { FaArrowCircleRight } from "react-icons/fa";
const Aboutus=[ {
    LinkText:"About us",
    LinkTo:"/About"

},{
    LinkText:"Blogs",
    LinkTo:"/Blogs"

},{
    LinkText:"Contact Us",
    LinkTo:"/Contact"

},{
    LinkText:"Adoption Process",
    LinkTo:"/"

},]

const Help= [{
    LinkText:"Terms & Conditions",
    LinkTo:"/"

},{
    LinkText:"Privacy Policy",
    LinkTo:"/"

},{
    LinkText:"Do's & Don't",
    LinkTo:"/"

},{
    LinkText:"Faq",
    LinkTo:"/"

},

]

export const Footer =()=>{
    return(
        <footer className={styles.Footer}>
          <div className={styles.FooterRows1}>
            <div>
                <img src="/logo2.jpg" alt=""/>
                <p>Find Your Furry in New Way!</p>
            </div>
            <div><h6>About Us</h6>
            {
                Aboutus.map((data:any)=>(
                    <div key={data.LinkText}>
                        <Link href={data.LinkTo} className={styles.FooterLink}>
                       <span> <FaArrowCircleRight /></span>{data.LinkText}</Link>
                    </div>
                ))
            }
          </div>

          <div>
            <h6>Help</h6>
            {
                Help.map((data:any)=>(
                    <div key={data.LinkText}>
                        <Link href={data.LinkTo} className={styles.FooterLink}>
                       <span> <FaArrowCircleRight /></span>{data.LinkText}</Link>
                    </div>
                ))
            }
         </div>
          </div>
          <div className={styles.FooterRows2}>
            <h6>@Pet adoption </h6>
            <h6>@2024 all rights reserved </h6>
            <div>
            <SocialIcons />
            </div>
          </div>
        </footer>
    )
}