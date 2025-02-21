import React, { useState } from 'react'
import Header from './Compdash/Header'
import Sidebar from './SideBar/Sidebar';
import Main from './ui/Main';
import Content from './ui/Content';
import Profile from './Compdash/profile/Profile';
import Stats from './Compdash/stats/Stats';
import Team from './Compdash/Teams/Team';
import Event from './Compdash/Event/Event';

const Dash = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);


  const toggleSideBar = () =>{
    setIsSideBarOpen(!isSideBarOpen);
  } ;

  return (
    <div className='font-quicksand'>
        <Header toggleSideBar={toggleSideBar}/>
        <Sidebar isSideBarOpen={isSideBarOpen} />
        <Main>
          <Content>
            <Stats/>

            <div className='flex flex-col gap-3 lg:flex-row
            '>
              <Team/>
              <Event/>
            </div>
          </Content>
          <Profile/>
        </Main>
    </div>
  )
}

export default Dash