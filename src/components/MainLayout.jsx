import React from 'react'
// import Sidebar from '../components/SideBar'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div>
        {/* <MainLayout/> */}
        <Outlet/>
    </div>
  )
}

export default MainLayout