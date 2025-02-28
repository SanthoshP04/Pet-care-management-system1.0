

import React from 'react';

import { CustomBg } from '@/Components/CustomBg/CustomBg';

import Wrapper from '@/Components/Wrapper/Wrapper';
import { Content } from '@/Components/Content/Content';
import { Pets } from '@/Components/Pets/Pets';
import { AdoptionProcess } from '@/Components/AdoptionProcess/AdoptionProcess';
import { OurBlogs } from '@/Components/OurBlogs/OurBlogs';



export const metadata={
    title:"Home"
}


const Homepage = () => {
 
  
  return (
    <div>
     <CustomBg
     ImgUrl='home2.o.jpg'
     h6Text='Easy Pets!'
     h5Text='Your Best Friend is Just a Click Away!'
     ButtonLinkText='Find Your Pet'
     ButtonLinkTo='/Pets'/>
    
    <Wrapper>
<Content 
h6Text='Adopt Pet Now!'
pText='Meet our adorable Pets.They are waiting for you.'/>
   
   <Pets />
   
   
   
    </Wrapper>
    
    <Wrapper>


    <Content 
h6Text='Our Adoption Process'
pText='Our Adoption process is designed to make finding your perfect furry campanion'/>
<AdoptionProcess />
    </Wrapper>
    
    <Wrapper>

    <Content 
h6Text='Our blogs!'
pText='Our Adoption process is designed to make finding your perfect furry campanion'/>

  <OurBlogs />
  
  
    </Wrapper>
    </div>
  )
}

export default Homepage;
