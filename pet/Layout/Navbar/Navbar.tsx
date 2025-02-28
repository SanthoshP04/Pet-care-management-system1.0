
"use client"
import Link from 'next/link'

import styles from './Navbar.module.css'
import Image from "next/image"
import { usePathname } from 'next/navigation'
const NavLinks=[{
    LinkText:"Home",
    LinkTo:"/Home"
},
{
    LinkText:"About Us",
    LinkTo:"/About"
},
{
    LinkText:"Petdonate",
    LinkTo:"/Faq"
},
{
    LinkText:"Abandoned Pet",
    LinkTo:"/AbandonedPet"
},
{
    LinkText:"Blogs",
    LinkTo:"/Blogs"
},
{
    LinkText:"Pets",
    LinkTo:"/Pets"
},
{
    LinkText:"Contact Us",
    LinkTo:"/Contact"
}
]

export const Navbar=()=>{
    const pathname=usePathname()
    return (
        <nav className={styles.Navbar}>
           <Link href={'/'}> <Image
            src="/logo2.jpg"
            alt="logo2"
            height={140}
            width={140}
            />
            </Link>
            <div className={styles.NavLinks}>
{
    NavLinks.map((data:any)=>(
        <div key={data.LinkText}>
            <Link href={data.LinkTo}
            className={pathname=== data.LinkTo ? styles.Active: ''}>
            {data.LinkText}
            </Link>
            </div>
    ))
}
            </div>
            <div className={styles.CustomBtns}>
                <Link href={"/AdoptionProcess"} className={styles.CustomBtn}>Adoption Process</Link>
            <Link href={"/Login"} className={styles.CustomBtn}>Login Now</Link> 
        
        </div></nav>
    )
}