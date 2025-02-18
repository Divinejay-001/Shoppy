import React, { useState } from 'react'
import Header from './Compdash/Header'
import Sidebar from './Compdash/Sidebar';

const Dash = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);


  const toggleSideBar = () =>{
    setIsSideBarOpen(!isSideBarOpen);
  } ;

  return (
    <div className='font-quicksand'>
        <Header toggleSideBar={toggleSideBar}/>
        <Sidebar isSideBarOpen={isSideBarOpen} />
    </div>
  )
}

export default Dash