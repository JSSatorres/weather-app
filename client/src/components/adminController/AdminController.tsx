import React from 'react'
import {useGetUsersQuery} from '../../store/api/users'

const AdminController = () => {
    const {data }= useGetUsersQuery(undefined)
    const users = data?.users
    console.log(users);
    
  return (
    <div>
        <h1>User </h1>
        <h4> isLoading</h4>


    </div>
  )
}

export default AdminController