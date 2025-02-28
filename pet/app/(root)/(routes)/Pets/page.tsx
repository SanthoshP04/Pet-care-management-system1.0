
import React from 'react';




import { CustomBg } from '@/Components/CustomBg/CustomBg';
import Wrapper from '@/Components/Wrapper/Wrapper';
import { Content } from '@/Components/Content/Content';
import { Pets } from '@/Components/Pets/Pets';

export const metadata ={
  title:"Our Pets"
}
const Petspage = () => {
  return (
    <div>
      <CustomBg
     ImgUrl='zet3.jpeg'
     h6Text='Easy Pets!'
     h5Text='Your Best Friend is Just a Click Away!'
     ButtonLinkText='View Blogs'
     ButtonLinkTo='/Blogs'/>
    
    <Wrapper>
    <Content 
    h6Text='Adopt Pet Now!'
    pText='Meet our adorable Pets.They are waiting for you.'
    />
       
       <Pets />
       
       
       
        </Wrapper>
    </div>
  
  );
}

export default Petspage;
