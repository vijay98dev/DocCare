import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import AdminAuthContext from '../context/AdminAuthContext'



const AdminPrivateRoute = ({children}) => {
  const [is_AdminAuth,setIs_AdminAuth]=useState(false)
  const {user} = useContext(AdminAuthContext)
  
  if (user.is_admin == true){
    setIs_AdminAuth(true)
  }

  if (!is_AdminAuth){
    return <Navigate to='/adm/login'/>
  }
  return children
}

export default AdminPrivateRoute