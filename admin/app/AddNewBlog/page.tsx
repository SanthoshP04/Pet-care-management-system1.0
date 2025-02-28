
import React from 'react';
import Wrapper from '@/Components/Wrapper/Wrapper';


import styles from './page.module.css'
//import { Inputbox } from '@/Components/Inputbox/Inputbox';//
import { AddNewBlogForm } from './AddNewBlogForm/AddNewBlogForm';

export const metadata ={
    title:"Add New Blog"
}

 const AddNewBlogpage = () => {
  return (
    <div>
    <Wrapper>
<div className={styles.AddNewBlog}>
    <div className={styles.AddNewBlog_Row}>
       
       <AddNewBlogForm />
    </div>
</div>
    </Wrapper>
    </div>
  );
}

export default AddNewBlogpage;
