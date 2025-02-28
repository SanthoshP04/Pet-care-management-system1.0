import styles from './OurBlogs.module.css'

import { Content } from "../Content/Content"
import Wrapper from "../Wrapper/Wrapper"


import { OurBlogs } from "@/Components/OurBlogs/OurBlogs";

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

interface OurBlogsMainProps{
    h6Text: string,
    LinkText: string,
    LinkTo: string
}


export const AllOurBlogsMain = async(
    {h6Text,LinkText,LinkTo}:OurBlogsMainProps
) => {

  const {AllBlogsData} = await GetAllBlogs()
 // console.log(AllBlogsData)
      return(
          <Wrapper>
   <Content 
    h6Text={h6Text}
    LinkText={LinkText}
    LinkTo={LinkTo}/>
  

  {/* for allblogs */}
  <div className={styles.OurBlogs}>
    <div className={styles.OurBlogs_Row}>

{
  AllBlogsData.map((blog: any) => {
    return(
      <OurBlogs
      key={blog._id}
      ImgUrl={blog.UploadImage}
      Imgalt={blog.Imgalt}
      BlogTitle={blog.BlogTitle}
      BlogIntro={blog.BlogIntro}
      />
    )
  })
}

    </div>
  </div>
 </Wrapper>
    )
}