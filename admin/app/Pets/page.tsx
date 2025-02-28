import React from 'react';
import Wrapper from '@/Components/Wrapper/Wrapper';
import { Content } from '@/Components/Content/Content';

import { AllPets } from './_components/AllPets/AllPets';


export const metadata = {
  title:"Our Pets"
}
const Petspage = () => {
  return (
    <div>
      <Wrapper>
        <Content
        h6Text='All Pets' LinkText='All New Pets' LinkTo='/Pets/AddNewPet'/>

<AllPets />



      </Wrapper>
    </div>
  );
}

export default Petspage;
