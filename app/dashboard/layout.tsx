import React, { useState } from 'react'
import SidenNav from './_components/SidenNav';
import Header from './_components/Header';


const layout = ({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) => { 
  

  
  return (
 


    <div className='bg-slate-100 h-screen'>
       <div className='md:w-64 hidden md:block fixed'>
        <SidenNav/>
       </div>
       <div className='md:ml-64'>
        <Header/>
       {children}
       </div>
    </div>
  
  )
}

export default layout