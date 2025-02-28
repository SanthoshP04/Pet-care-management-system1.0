import Link from 'next/link'
import styles from './OurBlogs.module.css'


const GetAllBlogs = async () => {
    try {
  
      const res = await fetch("http://localhost:3001/api/Blogs", {
        cache:"no-store"
      })
  
      if (!res.ok) {
        throw new Error("Something went Wrong")
      }
  
      return res.json()
     
    } catch (error) {
   //  console.log(error)
     return null
     
    }
    
  }
export const OurBlogs= async() => {
    const { AllBlogsData } = await GetAllBlogs()
    return (
        <div className={styles.OurBlogsMain}>
            <div className={styles.OurBlogs_Row}>
                {
                   AllBlogsData.map((data: any)=> (
                        <div className={styles.OurBlogs_Box}key={data.id}>
                            <img src={data.UploadImage} alt={data.BlogTitle}/>
                        <div className={styles.OurBlogs_BoxContent}>
                            <h6>{data.BlogTitle}

                            </h6>
                            <p>{data.BlogDesc}</p>
                            <Link href={'/'} className={styles.OurBlogsButton}>Read More</Link>
                        </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )}