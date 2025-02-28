

import React from 'react';


import styles from './page.module.css'
import { AllOurBlogsMain } from '@/Components/OurBlogs/AllOurBlogs';


export const metadata = {
  title:"All Blogs"
}

const  Blogpage = () => {
  return (
    <div>
      
     <div className={styles.Blogpage}></div>
    
{/* for blogs */}
<AllOurBlogsMain
h6Text="All Blogs"
LinkText="Add New Blog"
LinkTo="/AddNewBlog"/>

    </div>
  );
}

export default Blogpage;
