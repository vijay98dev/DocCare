import React from 'react'
import Header from '../../components/Header/Header'
import Routers from '../../routes/user/Routers'
import Footer from '../../components/Footer/Footer'

const UserLayout = () => {
  return (
    <>
    <Header/>
    <main>
        <Routers/>
    </main>
    <Footer/>
    </>
  )
}

export default UserLayout