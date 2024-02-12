import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProfileDetails from '../../pages/Doctor/ProfileDetails'
import DocRegister from '../../pages/Doctor/DocRegister'
import DocLogin from '../../pages/Doctor/DocLogin'

const DocRouters = () => {
  return (
    <Routes>
        <Route path='/' element = {<ProfileDetails/>}/>
        <Route path='/register' element ={<DocRegister/>}/>
        <Route path='/login' element ={<DocLogin/>}/>
    </Routes>
  )
}

export default DocRouters