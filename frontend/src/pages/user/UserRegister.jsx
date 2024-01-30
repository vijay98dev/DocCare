import React from 'react'
import signupImg from '../../assets/images/signup.jpg'
import { Link } from 'react-router-dom'



const UserRegister = () => {
  return (
    <section className='px-5 xl:px-0'>
      <div className='max-w-[1170px] mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          {/*==============img box =============*/}
          <div className='hidden lg:block rounded-l-lg'>
            <figure className='rounded-l-lg'>
              <img src={signupImg} alt='' className='w-full rounded-l-lg'/>
            </figure>
          </div>
          {/* ++++++ signup form ++++++++++ */}
          <div className="rounded-l-lg lg:pl-16 py-10">
            <h1 className='text-headingColor text-[22px] leading-8 font-bold mb-10'>
              Create an  <span className='text-primaryColor'> Account!!!!</span>
            </h1>

            <form >
            <div className='mb-5'>
              <input type='text' placeholder='Name' name='name' value=''
              className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer'  required/>
            </div>
            <div className='mb-5'>
              <input type='email' placeholder='Email' name='email' value=''
              className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer'  required/>
            </div>
            <div className='mb-5'>
              <input type='text' placeholder='Phone Number' name='phone_number' value=''
              className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer'  required/>
            </div>
            <div className='mb-5'>
              <input type='password' placeholder='Password' name='password' value=''
              className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer'  required/>
            </div>
            <div className='mt-5'>
              <button 
              type='submit'
              className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'>Register</button>
            </div>
            <p className='mt-5 text-textColor text-center'>Already have an account? <Link to='/login' className='text-primaryColor font-medium ml-1'>Login</Link></p>
            </form>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserRegister