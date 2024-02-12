import React, { useContext } from 'react'
import AdminAuthContext from '../../context/AdminAuthContext'



const AdminLogin = () => {
const {isAdminAuthenticated} = useContext(AdminAuthContext)
  return (
    <section className='px-5 lg:px-0'>
      <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10'>
        <h1 className='text-headingColor text-[22px] leading-9 fond-bold mb-10'>Hello<span className='text-primaryColor'>  Welcome</span>   Back !!!!!!!!!</h1>
        <form className='py-4 md:py-0' method='POST' onSubmit={isAdminAuthenticated}>
          <div className='mb-5'>
            <input type='email' placeholder='Enter your email' name='email' 
            className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer'  required/>
          </div>
          <div className='mb-5'>
            <input type='password' placeholder='Password' name='password' 
            className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer'  required/>
          </div>

          <div className='mt-7 '>
            <button type='submit' className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'>Login</button>
          </div>
   
        </form>
      </div>
    </section>
  )
}

export default AdminLogin