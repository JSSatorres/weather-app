import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../../components/nav'

const Home = () => {
  return (
    <div>
        <Nav/>
        <Outlet />
    </div>
  )
}

export default Home