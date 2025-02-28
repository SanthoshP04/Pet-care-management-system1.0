import Wrapper from '@/Components/Wrapper/Wrapper';
import React from 'react';
import AddNewPetForm from '../_components/AddNewPetForm/AddNewPetForm';


export const metadata = {
    title:"Add new Pets"
  }

const AddNewPetpage = () => {
  return (
<Wrapper>
  <AddNewPetForm />
</Wrapper>
  );
}

export default AddNewPetpage;
