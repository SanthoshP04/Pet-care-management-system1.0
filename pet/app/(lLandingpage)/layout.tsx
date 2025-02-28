import React from 'react'; 

import{Navbar} from './layout/Navbar/Navbar'
import{Footer} from './layout/Footer/Footer'
const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
   <Navbar/>
    {children}
    <Footer/>
    </>
  )
}

export default layout;
