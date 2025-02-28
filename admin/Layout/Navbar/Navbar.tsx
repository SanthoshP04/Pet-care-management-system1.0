import Link from "next/link"
import styles from './Navbar.module.css'
import Image from "next/image"


const NavLinks = [
   {
     LinkText:"Home",
    LinkTo:"/"
},
{
LinkText:"Abandoned Animal",
LinkTo:"/AbandonedAnimal"
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
    LinkText:"Contact",
   LinkTo:"/Contact"
},
{
    LinkText:"AdoptionProcess",
   LinkTo:"/AdoptionProcess"
},
]

export const Navbar =() =>{
    return(
       <nav className={styles.Navbar}>
        <Link href={"/"}>
        <Image 
        src={"/logo111.jpeg"}
        height={140}
        width={140}
        alt='logo2'
        />
        </Link>
        <div className={styles.NavLinks}>

            {
                NavLinks.map((data: any)=> (
                    <div key={data.LinkText}>
                        <Link href={data.LinkTo}>
                         {data.LinkText}
                        </Link>
                    </div>
                ))
            }
        </div>
       </nav>
    )
}