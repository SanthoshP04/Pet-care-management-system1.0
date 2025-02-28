"use client"

import { UploadButton, UploadDropzone } from '@/utils/uploadthing'
import styles from './AddNewBlogForm.module.css'
import Image from 'next/image'
import {  Inputbox, TextAreaBox } from "@/Components/Inputbox/Inputbox"
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


export const AddNewBlogForm =() =>{

   const  router= useRouter()
   const [BlogTitle,setBlogTitle]=useState('')
   const [BlogIntro,setBlogIntro]=useState('')
   const [BlogDesc,setBlogDesc]=useState('')
   const[UploadImage,setUploadImage]=useState('')
   const[SuccessMessage,setSuccessMessage]=useState('')
   
   const NewBlogFormSubmit = async(e: any) =>{
    e.preventDefault()


    try{
const res = await fetch("http://localhost:3001/api/Blogs", {
    method:"POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
       
        BlogTitle,
        BlogIntro,
        BlogDesc,
        UploadImage
    })
})
 if (res.ok){
   // setSuccessMessage("New Blog Created")
    router.push("/Blogs")
 } else{
   // console.log("Something Went Wrong")
   return
 }

    } catch(error){
      //  console.log(error)
      return 
    }
}


    return(
        <form className={styles.AddNewBlogForm} onSubmit={NewBlogFormSubmit}>
        <h6>Add New Blog</h6>
        <Inputbox
        lableText='Enter Blog Title'
        id='BlogTitle'
        type='text'
        value={BlogTitle}
        onchange={(e: any) => setBlogTitle(e.target.value)} />



         <TextAreaBox
        lableText='Enter Blog Intro'
        id='BlogIntro'
        value={BlogIntro}
        onchange={(e:any) => setBlogIntro(e.target.value)} />

<TextAreaBox
        lableText='Enter Blog Description'
        id='BlogDesc'
        value={BlogDesc}
        onchange={(e:any) => setBlogDesc(e.target.value)} />
      
      
     
       
                <div className={styles.ImageUpload}>
                    <label htmlFor="">Upload Image</label>
                 <div className={styles.UploadDropzone_WithImage}>
                 <UploadDropzone
                    appearance={
                       { container: {
                            width:"300px",
                            height:"300px"
                        },
                     uploadIcon:{
                    color:"rgb(255, 149, 10)"
                             },
                        button:{
                            background:"rgb(255, 149, 10)"
                        },
                        label:{
                            color:"rgb(255, 149, 10)"
                        }
                    }
                    }
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                 
                  console.log("Files: ", res);
                setUploadImage(res[0].url)
                }}
                onUploadError={(error: Error) => {
                
                  alert(`ERROR! ${error.message}`);
                }}
              />
           {
            UploadImage && (
                 
             <Link href={UploadImage} target='_blank'>
              <Image
              src={UploadImage}
              width={300}
              height={300}
              alt={""}
              /></Link>
            )
           }


                 </div>
           </div>

<button className={styles.Btn}>Save New Blog</button>

<p>{SuccessMessage}</p>


    </form>
    )
}