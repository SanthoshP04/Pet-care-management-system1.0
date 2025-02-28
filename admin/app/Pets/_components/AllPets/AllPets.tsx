
import React from 'react';
import styles from './AllPets.module.css'
import Image from 'next/image';
import Link from 'next/link';


const GetAllPetsData = async () => {
    try {
        const res = await fetch ("http://localhost:3000/api/Pets", {
            cache :"no-store"
        })
        if(!res.ok){
           throw new Error("Something Went Wrong")
        }
        return res.json()


    } catch (error){
        console.log(error);
        return null;
    }
}


export const AllPets = async() => {
    const {AllPetsData} =await GetAllPetsData()
  return (
  
    <div className={styles.AllPets_Main}>
        +
        <div className={styles.AllPets_Row}>
    
    {
        
        AllPetsData.map((data: any) =>(
      <div key ={data._id}className={styles.AllPets_Box}>
      <h5 className={styles.Breed}>{data.PetBreed}</h5>
      <Image
      src={data.UploadImageURL} 
      alt={data.PetBreed}
      height={350}
      width={450}
      />

<div className={styles.AllPets_Box_Content}>

    <p className={styles.AllPets_CustomerDetails}>
        <span>Age : {data.PetAge}</span>
        <span>Gender : {data.PetGender}</span>
    </p>
    <h6><span>Pet Name : </span>{data.PetName}</h6>
    <p className={styles.AllPets_Box_Intro}>
        {data.PetIntro}
    </p>
   <Link href={`/Pets/${data._id}`}>View details</Link>
</div>
 </div>
         ))   
    }
    
    </div>
    </div>
    
  );
}


