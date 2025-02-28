
import styles from './Navbar.module.css'

import Link from 'next/link'

import Image from 'next/image'
const NavLinks =[
    {
        LinkText:"Home",
        LinkTo:"/Home",
    },{
        LinkText:"Login",
        LinkTo:"/Login",
    },
]
export const Navbar = () =>{
    return(
        <nav className={styles.Navbar}>
            <Image
            src="/logo2.jpg"
            alt='logo2'
            height={140}
            width={140}


            />
            <div className={styles.NavLinks}>
                {
                    NavLinks.map((I: any)=>(
<div key={I.LinkText}>
    <Link href={I.LinkTo}>
        {I.LinkText}
        </Link>
</div>
                    ))
                }
            </div>
    </nav>
    )
    
}