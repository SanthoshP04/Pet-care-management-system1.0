
import React from 'react';
import { CustomBg } from '@/Components/CustomBg/CustomBg';

import { Facts } from '../../_components/Facts/Facts';
import Wrapper from '@/Components/Wrapper/Wrapper';
import styles from './page.module.css'
import {Content} from '@/Components/Content/Content'

import { SecondHeader } from '@/Components/SecondHeader/SecondHeader';


import { AdoptionProcess } from '@/Components/AdoptionProcess/AdoptionProcess';
const AboutPage = () => {
  return (
    <>
    
  <CustomBg 
  ImgUrl='/zet5.jpg'
  h6Text="About us"
  h5Text='we are in market since 1998'
  ButtonLinkText='Find Your Pets'
  ButtonLinkTo="/Pets "
 
  />
    <Facts
     pText='Blogging about pets is one the best ways to reach your 
     target audience and attract customers to your brand. Writing about
      common topics in the pet industry establishes your authority and credibility.'/> 
  <SecondHeader 

ImgUrl="footer1.jpeg"/>

   <Wrapper>
    <div className={styles.Aboutus}>
<div className={styles.AboutusContent}>
  <h6>About Us</h6>
  <p>
  My first meeting with cats happened when I was a little child; then I saw cats on TV. 
  Now, I comprehend that my life will be funnier if I adopt a cat, and even more, if I 
  persuade my close friend to follow my example: 
  a cat does not require too much space,
   this animal can listen and support,
    if it is trained properly, and, finally, a cat may 
   be funny to pick me up within a short period of time.

When a person lives alone and has nobody to
 share own ideas and feeling, 
it is high time to think about pet’s adoption.
 To my mind, it is better to
 talk to a little living being, even not a human,
  than talk to yourself.
  When a person lives alone and has nobody to
 share own ideas and feeling, 
it is high time to think about pet’s adoption.
 To my mind, it is better to
 talk to a little living being, even not a human,
  than talk to yourself.When a person lives alone and has nobody to
 share own ideas and feeling, 
it is high time to think about pet’s adoption.
 To my mind, it is better to
 talk to a little living being, even not a human,
  than talk to yourself.
  

  </p>
</div><div className={styles.AboutusImg}>
  <img src="adopt.jpeg" alt="adopt"></img>
</div>
    </div>
   </Wrapper>


<Wrapper>
  <div className={styles.Vision}>
<div><h6>Our Vision</h6>
<p>A humane and compassionate future for every animal friend. 
  To rescue, rehabilitate and rehome animals in crisis, ensure
   healthy pets through education, advocacy and affordable services,
    and inspire a community where the animal-human bond is celebrated
     and nurtured.
  </p></div>
  <div>
    <img src="vission.jpeg" alt=" " />
  </div>
  <div className={styles.Vision}>
  <div>
    <img src="mission.jpeg" alt=" " />
  </div>
  <div>
    <h6>Our Mission</h6>
<p>A humane and compassionate future for every animal friend. 
  To rescue, rehabilitate and rehome animals in crisis, ensure
   healthy pets through education, advocacy and affordable services,
    and inspire a community where the animal-human bond is celebrated
     and nurtured.
  </p></div>
  </div>
  </div>
</Wrapper>

<Content
h6Text='Our Adoption Process! '
pText='Our adoption process is designed to make finding your perfect
furry companion'/>
<AdoptionProcess />
     
    </>
  );
}

export default AboutPage
