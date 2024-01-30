// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import UserLayout from './layout/user/UserLayout'
import AdminLayout from './layout/admin/AdminLayout'
import DoctorLayout from './layout/doctor/DoctorLayout'

function App() {

  return (
    <>
    <Routes>
      <Route path='/*' element={<UserLayout/>}/>
      <Route path='adm/*' element={<AdminLayout/>} />
      <Route path='doctor/*' element={<DoctorLayout/>} />
    </Routes>
      
    </>
  )
}

export default App
