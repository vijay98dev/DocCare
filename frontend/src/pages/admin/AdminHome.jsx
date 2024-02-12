import React, { useContext } from 'react'
import AdminAuthContext from '../../context/AdminAuthContext'

const AdminHome = () => {
    const {user} = useContext(AdminAuthContext)
    const is_admin = user && user.is_admin;
  return (
    <>
    {is_admin ? user.first_name : 'hallo'}
    </>
  )
}

export default AdminHome