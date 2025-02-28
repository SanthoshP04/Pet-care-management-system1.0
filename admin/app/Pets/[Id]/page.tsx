
"use client";
import Image from 'next/image';
import styles from './page.module.css'

import React, { useEffect, useState } from "react";
import Wrapper from '@/Components/Wrapper/Wrapper';

interface Params {
  Id: string;
}

interface PetSpecificpageProps {
  params: Promise<Params>;  
}


const GetSpecifcPet = async (Id: string) => {
  try {
    const res = await fetch(`http://localhost:3001/api/NewPet/${Id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

const PetSpecificpage: React.FC<PetSpecificpageProps> = ({ params }) => {
  
  const [SpecificPet, SetSpecificPet] = useState<any>(null);
  const [Loading, SetLoading] = useState<boolean>(true);
  const [Error, SetError] = useState<string | null>(null);
  const [UnwrappedParams, SetUnwrappedParams] = useState<Params | null>(null);

 
  useEffect(() => {
    const unwrapParams = async () => {
      const resolvedParams = await params; 
      SetUnwrappedParams(resolvedParams); 
    };

    unwrapParams();
  }, [params]);

  
  useEffect(() => {
    const FetchPet = async () => {
      if (UnwrappedParams) {
        SetLoading(true);
        SetError(null); 

        try {
         
          const data = await GetSpecifcPet(UnwrappedParams.Id);

          if (data) {
            SetSpecificPet(data); 
          } else {
            SetError("Failed to fetch data");
          }
        } catch (error) {
          SetError("An error occurred while fetching pet details");
          console.error(error);
        } finally {
          SetLoading(false);  
        }
      }
    };

    
    if (UnwrappedParams) {
      FetchPet();
    }
  }, [UnwrappedParams]);  

 
  if (Loading) {
    return <h1>Loading...</h1>;
  }

  
  if (Error) {
    return <h1>{Error}</h1>;
  }

 
  return (
   <Wrapper>
     <div className={styles.PetSpecificpage}>
    <div>
        <Image
        src={SpecificPet.UploadImageURL}
        alt={SpecificPet.PetBreed}
        height={700}
        width={400}/>
    </div>
    <div className={styles.Content}>
        <p className={styles.Breed}><span>Breed: </span> {SpecificPet.PetBreed} </p>
      
       <p className={styles.GrnderAge}>
        <span>Gender: {SpecificPet.PetGender}</span>
        <span>Age: {SpecificPet.PetAge}</span>
       </p>
       <p className={styles.PetName}><span>Name: </span>{SpecificPet.PetName} </p>
        <p className={styles.Intro}> {SpecificPet.PetIntro} </p>
        <p className={styles.Desc}> {SpecificPet.PetDesc} </p>
        

    </div>
    </div>
   </Wrapper>
   
  );
};

export default PetSpecificpage;
