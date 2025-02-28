import Wrapper from '@/Components/Wrapper/Wrapper';
import React from 'react';
import styles from'./page.module.css'
const ContactData = async () => {
  try{
    const res = await fetch("http://localhost:3001/api/Contact",{
      cache: "no-store",
    });

    if(!res.ok) {
      throw new Error("Failed to fetch Data")
    }
    return res.json()
  }
  catch(error){
    console.log(error)
  }
}
const ContactPage =  async () => {
 
  const {ContactFormData} = await ContactData()
  //console.log(ContactFormData)
  return (
  <Wrapper>
     <h6 className={styles.h6text}>Contact Form Data </h6>
   <div className={styles.ContactForm_Main}>
   
    <div className={styles.ContactForm_Rows}>
      {
        ContactFormData.map((data: any) => (
        //  <h1</h1>
        <div key={data._id}className={styles.ContactForm_Box}>
          <h6><span>Name: </span>{data.Name}</h6>
          <h5><span>Email: </span>{data.Email}</h5>
          <p className={styles.Subject}>
            <span>Subject: </span>
            {data.Subject}
          </p>
        
          <p className={styles.Message}>
            <span>Message: </span>
            {data.Message}

          </p>
       

<p className={styles.CreatedAT}>
  <span>Created At: </span>
 {
  new Intl.DateTimeFormat('en-IN', {
    year:'numeric', month:'2-digit',
    day:"2-digit"
  }).format(new Date (data.createdAt))
 }
</p>

        </div>
       
      ))
      }

    </div>
   </div>
  </Wrapper>
  );
}

export default ContactPage;
