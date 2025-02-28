

import React from 'react';
import Wrapper from '@/Components/Wrapper/Wrapper';
import { Content } from '@/Components/Content/Content';

import { AdoptionProcess } from '@/Components/AdoptionProcess/AdoptionProcess';

 

const AdoptionProcesspage = () => {
  return (
    <div>
     <Wrapper>
    <Content 
h6Text='Our Adoption Process'
pText='Our Adoption process is designed to make finding your perfect furry campanion'/>
<AdoptionProcess />
    </Wrapper>
    </div>
  );
}

export default AdoptionProcesspage;
