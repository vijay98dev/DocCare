import React from 'react'
import {Routes,Route} from 'react-router-dom';
import AdminHome from '../../pages/admin/AdminHome';
import AdminLogin from '../../pages/admin/AdminLogin';
import AdminPrivateRoute from '../../components/AdminPrivateRoute';

const AdminRouter = () => {
  return (
    <Routes>
        
        <Route path='/' element={<AdminPrivateRoute><AdminHome/></AdminPrivateRoute>}/>
        <Route path='/login' element={<AdminLogin/>}/>
        
    </Routes>
  )
}

export default AdminRouter