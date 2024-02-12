import React, { useContext} from 'react'
import { Navigate } from 'react-router-dom'



const DoctorPrivateRoute = (children) => {
  const {user} = useContext()
  
  if (!user || !user.is_doctor){
    return <Navigate to='/adm/login'/>
  }
    return children
}

export default DoctorPrivateRoute