import React from 'react'
import {Routes,Route} from 'react-router-dom';
import AdminHome from '../../pages/admin/AdminHome';
import AdminLogin from '../../pages/admin/AdminLogin';

const AdminRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<AdminHome/>}/>
        <Route path='/login' element={<AdminLogin/>}/>
    </Routes>
  )
}

export default AdminRouter