"use client"
import{useState}from 'react'


import styles from './page.module.css'
import { AuthBg } from '../../_components/AuthBg/AuthBg'
import {Inputbox} from '../../_components/Inputbox/Inputbox'
import {BackButton} from '../../_components/BackButton/BackButton'




const Loginpage=() =>{
  const [name, setName]= useState("")
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
const[varient,setVarient]= useState('Login')
const changeVarient=()=>{
  setVarient(varient==='Login'?'Register':"Login")
}
  return (
    <div>
      <AuthBg>
     
       <div className={styles.Auth}>
        
       <div className={styles.AuthRow}>
        <form>
        <BackButton 
        LinkText='Back To Home'
        LinkTo="/"
        />
          <h6>{
            varient ==='Login'?'Login Now':"Register Now" }
          </h6>{
            varient==='Register'&&(
          <Inputbox 
            labelText='Your Name'
            required={true}
            Type='text'
            id='Namel'
            value={name}
            onchange={(e:any)=>setName(e.target.value)}
            />)
}
            <Inputbox 
            labelText='Your Email'
            required={true}
            Type='email'
            id='email'
            value={email}
            onchange={(e:any)=>setEmail(e.target.value)}
            />
            <Inputbox 
            labelText='Your Password'
            required={true}
            Type='password'
            id='Password'
            value={password}
            onchange={(e:any)=>setPassword(e.target.value)}
            />
            <button type='submit' className={styles.Btn}>Login Now</button>
         <p>
          {varient==='Login'?"Don't have account?":"Already have an Account?"}
          <span onClick={changeVarient}>
            {varient==='Login'? "Register Now":"Login Now"}
          </span>
         </p>
        </form>
       </div>
       </div>
      </AuthBg>
    </div>
  )
}

export default Loginpage
