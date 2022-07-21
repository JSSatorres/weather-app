import React from 'react'
import { Outlet } from 'react-router-dom'
import FormFormik from '../../components/formFormik'
import Nav from '../../components/nav'

const Profile = () => {
  return (
    <div>
        <Nav/>
        <FormFormik/>
    </div>
  )
}

export default Profile