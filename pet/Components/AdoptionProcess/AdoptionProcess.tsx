import Link from 'next/link'
import styles from './AdoptionProcess.module.css'
const AdoptionProcessData=[
    {
        id:1,
        ProcessName:"Pet Adoption Laws in India for Dogs",
        ProcessDesc:"There are no pan-India dog-licenses, but owners can get their pets registered with local municipal authorities based on the city & state where they reside.",
    },

]

export const AdoptionProcess= ()=>{
    return (
    <div className={styles.AdoptionProcess_Main}>
        <div className={styles.AdoptionProcess_Row}>
           {
            AdoptionProcessData.map((data:any)=>(
                <div className={styles.AdoptionProcess_Box}key={data.id}>
                    <h6>{data.ProcessName}</h6>
                    <p>{data.ProcessDesc}</p>
                <Link href={"/"} className={styles.AdoptionProcess_Button}>
                View full details</Link>
                </div>
            ))
           }
        </div>
    </div>
      
    )
}