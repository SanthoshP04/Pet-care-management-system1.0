"use client"

import React, { useState } from 'react';

import styles from './AddNewPetForm.module.css'
import { Inputbox, TextAreaBox } from '@/Components/Inputbox/Inputbox';
import { UploadDropzone } from '@/utils/uploadthing';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';




const AddNewPetForm = () => {
const router = useRouter()

const [PetName,setPetName]= useState("")
const [PetBreed,setPetBreed]= useState("")
const [PetGender,setPetGender]= useState("")
const [PetAge,setPetAge]= useState("")
const [PetIntro,setPetIntro]= useState("")
const [PetDesc,setPetDesc]= useState("")
  const[UploadImageURL,setUploadImageURL] = useState("")



  const AddNewPet = async(e: any) => {

    e.preventDefault()
    
    try{

      const res = await fetch("http://localhost:3001/api/NewPet", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(
          {
            PetName,
            PetBreed,
            PetGender,
            PetAge,
            PetIntro,
            PetDesc,
            UploadImageURL
          }
        )
      })
      if(res.ok){
        //alert("New Pet Added")
        setPetName("")
        setPetBreed("")
        setPetGender("")
        setPetAge("")
        setPetIntro("")
        setPetDesc("")
        setUploadImageURL("")
        
router.push("/Pets")
      }
      else{
        //console.log("Something Went Wrong")
        return null
      }
    }
    catch(error) {
   //   console.log(error)
   return null
    }
  }
  return (
    <div className={styles.AddNewPetForm_Main}>
        <div className={styles.AddNewPetForm_Row}>
            <form onSubmit={AddNewPet}>
                <h6>Add New Pet Details</h6>
                <Inputbox 
                lableText='Enter Pet Name'
                type='text'
                id='PetName'
                value={PetName}
                onchange={(e:any) => setPetName(e.target.value)}
                />
                 <Inputbox 
                lableText='Enter Pet Breed'
                type='text'
                id='PetBreed'
                value={PetBreed}
                onchange={(e:any) => setPetBreed(e.target.value)}
                />
                 <Inputbox 
                lableText='Enter Pet Gender'
                type='text'
                id='PetGender'
                value={PetGender}
                onchange={(e:any) => setPetGender(e.target.value)}
                />
                 <Inputbox 
                lableText='Enter Pet Age'
                type='number'
                id='PetAge'
                value={PetAge}
                onchange={(e:any) => setPetAge(e.target.value)}
                />
                <TextAreaBox
                lableText='Enter Pet Intro'
                id='PetIntro'
                value={PetIntro}
                onchange={(e:any) => setPetIntro(e.target.value)}
                />
                  <TextAreaBox
                lableText='Enter Pet Description'
                id='PetDesc'
                value={PetDesc}
                onchange={(e:any) => setPetDesc(e.target.value)}
                />
                <div className={styles.ImageUpload}>
                  <label htmlFor="UploadImg">Upload Image</label>
                  <div className={styles.UploadDropzone_WithImg} id='UploadImg'>
                    <UploadDropzone
                    appearance={
                      {
                        container: {
                          width:"300px",
                          height:"300px",
                        },
                        uploadIcon:{
                          color:"var(--main)"
                        },
                        button:{
                          background:"var(--main)"
                        },
                        label:{
                          color:"var(--main)"
                        }
                      }
                    }
                    endpoint='imageUploader'
                    onClientUploadComplete={(res) => {
                      console.log("Files",res)
                     setUploadImageURL(res[0].url)
                    }}
                    onUploadError={(error: Error) => {
                      console.log("Error",error)
                    }}
                    />
{
   UploadImageURL && (
       <Link href={ UploadImageURL} target='_blank'>
         <Image
       src={ UploadImageURL}
       alt='Upload Image'
       height={300}
       width={300}
        />
       </Link>
  )
}

                  </div>
                </div>
                <button className={styles.btn}>Add New pet</button>
            </form>

        </div>
      
    </div>
  );
}

export default AddNewPetForm;
