import React from 'react'
import DocHeader from '../../components/Header/DocHeader'
import DocRouters from '../../routes/doctor/DocRouters'
import Footer from '../../components/Footer/Footer'
import DocAuthContext, { DocAuthProvider } from '../../context/DocAuthContext'

const DoctorLayout = () => {
  return (
    <>
    <DocAuthProvider>
    <DocHeader/>
    <main>
      <DocRouters/>
    </main>
    <Footer/>
    </DocAuthProvider>
    </>
  )
}

export default DoctorLayout