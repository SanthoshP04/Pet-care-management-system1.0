import Image from 'next/image'
import styles from './OurBlogs.module.css'
import Link from 'next/link'

interface OurBlogsProps{
   BlogId?:string,
    ImgUrl: string,
    Imgalt?:string,
    BlogTitle: string,
    BlogIntro:string,
}


export const OurBlogs = (
    {
        BlogId,ImgUrl,Imgalt,BlogTitle,BlogIntro
    }:OurBlogsProps

    
) => {
    return (
       
        <div className={styles.OurBlogsBox}>
           <Image
           src={ImgUrl}
           alt={Imgalt || "Blog Image"}
           height={250}
           width={400}
           />
          <div className={styles.OurBlogsBoxContent}>
            <h6>{BlogTitle}</h6>
            <p>{BlogIntro}</p>
                 <Link href={"/"}>View Details</Link>
           </div>
    </div>
    )
}


