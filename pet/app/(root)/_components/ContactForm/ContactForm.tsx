

"use client"
import styles from './ContactForm.module.css'
import Wrapper from '@/Components/Wrapper/Wrapper'

import { InputBox, TextAreaBox } from '@/Components/InputBox/InputBox'
import { useState } from 'react'
import { error } from 'console'
export const ContactForm=()=>{
    const[Name,SetName]=useState("")
    const[Email,SetEmail]=useState("")
    const[Subject,SetSubject]=useState("")
    const[Message,SetMessage]=useState("")
const[Error,SetError]=useState("")
    const[Success,SetSuccess]=useState("")


const ContactFormSubmit = async (e: any) => {
    e.preventDefault()

try {
const res = await fetch ("http://localhost:3000/api/Contact", {
    method: "POST",
    headers: {
        "Content-type":"application/json"
    },
    body: JSON.stringify({
Name,Email,Subject,Message
    })
})
if(res.ok){
   SetSuccess("Contact Form Data Saved SuccessFully")
SetName("")
SetEmail("")
SetSubject("")
SetMessage("")


} else{
    SetError("Something Went Wrong") 
}




} catch(error){
    SetError("Something Went Wrong") 
}



}
    return(
        <Wrapper>
        <div className={styles.ContactForm}>
        <form onSubmit={ContactFormSubmit}>
            <h6>Contact Us</h6>
            <InputBox 
            lableText='Your Name'
            Value={Name}
            Id='Name'
            Type='text'
            Onchange={(e: any)=>SetName(e.target.value)}/>
           
             <InputBox 
            lableText='Your Email'
            Value={Email}
            Id='Email'
            Type='email'
            Onchange={(e: any)=>SetEmail(e.target.value)}/>
           
             <InputBox 
            lableText='Your Subject'
            Value={Subject}
            Id='Subject'
            Type='text'
            Onchange={(e: any)=>SetSubject(e.target.value)}/>
        
        <TextAreaBox 
        Id='Message'
        lableText='Your Message'
        Value={Message}
        Onchange={(e: any)=> SetMessage(e.target.value)}/>
     <p className={styles.Success}>{Success}</p>
     <p className={styles.Error}>{Error}</p>

        <button type='submit'>Send Message</button>
         
        
        
        </form>
        </div>
        </Wrapper>
    )
}