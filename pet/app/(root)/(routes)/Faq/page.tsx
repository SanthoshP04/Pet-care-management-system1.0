

import { CustomBg } from '@/Components/CustomBg/CustomBg';
import React from 'react';

const Faqpage = () => {
  return (
    <div>
      <CustomBg
     ImgUrl='zet1.jpeg'
     h6Text='Easy Pets!'
     h5Text='Frequently Asked Qustions!'
     ButtonLinkText='Find Your Pet'
    ButtonLinkTo='/Pets'
   />
    </div>
  );
}

export default Faqpage;
