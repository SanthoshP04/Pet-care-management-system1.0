import styles from './Pets.module.css'
import Link from 'next/link';
import React from 'react';
interface PetsBoxProps{
    Breed:string,
ImgUrl:string,
ImgAlt?:string,
Age:number,
Gender:string,
Desc:string,
}
 export const PetsBox = (
    {
        Breed,ImgUrl,ImgAlt,Age,Gender,Desc
    }:PetsBoxProps
 ) => {
  return (
   
    <div className={styles.PetsBox}>
    <p className={styles.Breed}>Breed:{Breed}</p>
        <img src= {ImgUrl} alt= {ImgAlt} />
        <div className={styles.PetsBoxContent}>
           
           

<div>
<p>Age:{Age}years<br/>
Gender: {Gender}</p>
</div>
<p className={styles.Desc}>
{Desc}
</p>
           <Link href={"/AdoptionProcess"}className={styles.Btn}> Adopt Now</Link>
</div>
  
  </div>
 
  );
}

export default PetsBox;
