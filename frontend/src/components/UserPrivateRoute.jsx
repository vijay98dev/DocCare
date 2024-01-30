import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

const UserPrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  if(!isAuthenticated){
    return <Navigate to='/login' />;
  }
  return children;
}

export default UserPrivateRoute