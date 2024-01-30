import React, { useContext } from 'react'
import AuthContext from '../../context/AuthContext'

const UserHome = () => {
  const {user} = useContext(AuthContext)
  return (
    <p>home</p>
  )
}

export default UserHome