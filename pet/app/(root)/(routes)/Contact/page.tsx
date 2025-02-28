
import React from 'react';
import {Inter}from "next/font/google";
import { CustomBg } from '@/Components/CustomBg/CustomBg';

import styles from './page.module.css';
import { ContactForm } from '../../_components/ContactForm/ContactForm';



export const metadata={
    title:"Contact us"
}
const Contactpage = () => {
  return (
    <div>
       <CustomBg
     ImgUrl='zet2.jpeg'
     h6Text='Easy Pets!'
     h5Text='Your Best Friend is Just a Click Away!'
     ButtonLinkText='Find Your Pet'
     ButtonLinkTo='/Pets'
     />
    
<ContactForm />
   
    </div>



  );
}

export default Contactpage;
