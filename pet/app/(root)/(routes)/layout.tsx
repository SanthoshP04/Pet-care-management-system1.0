
import React from 'react';
import { Navbar } from '@/Layout/Navbar/Navbar'
import { Footer } from '@/Layout/Footer/Footer';
const Rotlayout = (
{children}:{children:React.ReactNode}
) => {
  return (
    <div>
        <Navbar />
      
      {children} 
      
      <Footer />
    </div>
  )
}

export default Rotlayout;
