import React, { useContext } from 'react'
import AuthContext from '../../context/AuthContext'

const UserHome = () => {
  const {user} = useContext(AuthContext)
  return (
    <>
    {user && <p> {user.first_name}</p>}
    </>
  )
}

export default UserHome