import React, { useContext } from 'react'
import DocAuthContext from '../../context/DocAuthContext'

const DocLogin = () => {
    const {isDocAuthenticated} = useContext(DocAuthContext)
  return (
    <section className='px-5 lg:px-0'>
      <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10'>
        <h1 className='text-headingColor text-[22px] leading-9 fond-bold mb-10'>Hello<span className='text-primaryColor'>  Welcome</span>   Back !!!!!!!!!</h1>
        <form className='py-4 md:py-0' method='POST' onSubmit={isDocAuthenticated} >
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
          <p className='mt-5 text-textColor text-center'>Don&apos;t have an account ? <Link to='/register' className='text-primaryColor font-ml-1'>Register</Link></p>
        </form>
      </div>
    </section>
  )
}

export default DocLogin