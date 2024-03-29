import React from 'react'
import AdminHeader from '../../components/Header/AdminHeader'
import AdminRouter from '../../routes/admin/AdminRouter'
import Footer from '../../components/Footer/Footer'
import { AdminAuthProvider } from '../../context/AdminAuthContext'

const AdminLayout = () => {
  return (
    <>
    <AdminAuthProvider>
        <AdminHeader/>
        <main>
            <AdminRouter/>
        </main>
        <Footer/>
    </AdminAuthProvider>
    </>
  )
}

export default AdminLayout