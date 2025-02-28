
import styles from './Pets.module.css'
import PetsBox from './PetsBox'


const GetPets = async () => {
    try {
const res = await fetch(" http://localhost:3000/api/Pets ", {
    cache:"no-store"
})
if (!res.ok) {
    throw new Error("Failed")
}
 return res.json()
    }catch (error) {
        console.log(error)
    }
}
export const Pets = async()=>{
    const{AllPetsData} = await GetPets()
    return (
        <div className={styles.PetsMain}>
            <div className={styles.PetsRow} >
        
            {
                 
               AllPetsData.map((data:any) => (
                
                <PetsBox
                
                    Breed={data.PetBreed}
                    ImgUrl={data.UploadImageURL}
                    ImgAlt={data.PetBreed}
                    Age={data.PetAge}
                    Gender={data.PetGender}
                    Desc={data.PetIntro}/>
                   
               ))
               
            }
             </div>
              </div>
         
            

    )
}