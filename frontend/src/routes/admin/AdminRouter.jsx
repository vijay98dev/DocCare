import React from 'react'
import {Routes,Route} from 'react-router-dom';
import AdminHome from '../../pages/admin/AdminHome';
import AdminLogin from '../../pages/admin/AdminLogin';
import AdminPrivateRoute from '../../components/AdminPrivateRoute';
import AdminUserList from '../../pages/admin/AdminUserList';
import AdminDocList from '../../pages/admin/AdminDocList';


const AdminRouter = () => {
  return (
    <Routes>
        
            <Route path='/' element={<AdminPrivateRoute> <AdminHome/> </AdminPrivateRoute>}/>
            <Route path='/login' element={<AdminLogin/>}/>
            <Route path='/user' element={<AdminUserList/>}/>
            <Route path='/doctor' element={<AdminDocList/>}/>
    </Routes>
  )
}

export default AdminRouter