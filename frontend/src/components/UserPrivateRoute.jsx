import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const UserPrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const {user} = useContext(AuthContext)
  if (user){
    setIsAuthenticated(true)
  }

  if(!isAuthenticated){
    return <Navigate to='/login' />;
  }
  return children
}

export default UserPrivateRoute