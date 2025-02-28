import React from 'react';

import { CustomBg } from '@/Components/CustomBg/CustomBg';
import { OurBlogs } from '@/Components/OurBlogs/OurBlogs';
import { WrappedNextRouterError } from 'next/dist/server/route-modules/app-route/module';
import Wrapper from '@/Components/Wrapper/Wrapper';

import { Content } from '@/Components/Content/Content';


export const metadata ={
    title:" Our Blogs"
}



const Blogspage = () => {
  return (
    <div>
         <CustomBg
     ImgUrl='zet2.jpeg'
     h6Text='Easy Pets!'
     h5Text='Discover, Learn,Love :Your Ultimate Guide to Dog Care and Adoption!'
     ButtonLinkText='Find Your Pet'
     ButtonLinkTo='/Pets'/>
     <Wrapper>
     <Content 
h6Text='Our Blogs!'
pText='Our Adoption process is designed to make finding your perfect furry campanion!'/>
    <OurBlogs />
    </Wrapper>
    </div>
  );
}

export default Blogspage;
