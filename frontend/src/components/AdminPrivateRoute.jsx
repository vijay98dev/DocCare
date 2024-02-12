import React, { useContext} from 'react'
import { Navigate } from 'react-router-dom'
import AdminAuthContext from '../context/AdminAuthContext'



const AdminPrivateRoute = ({children}) => {
  const {user} = useContext(AdminAuthContext)
  
  if (!user || !user.is_admin){
    return <Navigate to='/adm/login'/>
  }
    return children

}

export default AdminPrivateRoute