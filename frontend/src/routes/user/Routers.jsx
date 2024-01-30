import React from 'react';
import {Routes,Route} from 'react-router-dom';
import UserHome from '../../pages/user/UserHome';
import UserService from '../../pages/user/UserService';
import UserLogin from '../../pages/user/UserLogin';
import UserRegister from '../../pages/user/UserRegister';
import UserContact from '../../pages/user/UserContact';
import DoctorsList from '../../pages/user/DoctorsList';
import DocDetails from '../../pages/user/DocDetails';
import Notification from '../../pages/user/Notification';
import UserPrivateRoute from '../../components/UserPrivateRoute';
import UserProfile from '../../pages/user/UserProfile';

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<UserHome/>}/>
      <Route path='/service' element={<UserService/>}/>
      <Route path='/login' element={<UserLogin/>}/>
      <Route path='/register' element={<UserRegister/>}/>
      <Route path='/contact' element={<UserContact/>}/>
      <Route path='/find-doctor' element={<DoctorsList/>}/>
      <Route path='/doctor/:id' element={<DocDetails/>}/>
      <Route path='/notification' element={<UserPrivateRoute> <Notification/></UserPrivateRoute>}/>
      <Route path='/profile' element={<UserPrivateRoute><UserProfile/></UserPrivateRoute>}/>
    </Routes>
  )
}

export default Routers