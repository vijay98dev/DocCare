import React, { useState } from 'react'
import signupImg from '../../assets/images/signup.jpg'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const UserRegister = () => {
  const [formError,setFormError]=useState([])
  const navigate = useNavigate();
  const baseURL='http://127.0.0.1:8000'

  const handleRegister =async (e) =>{
    e.preventDefault();
    setFormError([])
    const formData = new FormData();
    formData.append('first_name',e.target.name.value);
    formData.append('email',e.target.email.value);
    formData.append('password',e.target.password.value);
    formData.append('phone_number',e.target.phone_number.value);
    console.log(formData)
    try{
      const res = await axios.post(baseURL+'/register/',formData)
      console.log(res)
      if (res.status === 201){
        console.log('222222222222')
        console.log(res)

        navigate('/login',{
          state:res.data.Message
        })
        return res
      }
    }
    catch (error){
      if (error.response.status === 406){
        console.log('error')
        console.log(error.response.data)
        setFormError(error.response.data)
      }else{
        console.log(error);
      }
    }
    
  }


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

            <form method='POST' onSubmit={handleRegister} >
            <div className='mb-5'>
              <input type='text' placeholder='Name' name='name' 
              className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer'  required/>
            </div>
            <div className='mb-5'>
              <input type='email' placeholder='Email' name='email' 
              className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer'  required/>
            </div>
            <div className='mb-5'>
              <input type='text' placeholder='Phone Number' name='phone_number' 
              className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer'  required/>
            </div>
            <div className='mb-5'>
              <input type='password' placeholder='Password' name='password' 
              className='w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer'  required/>
            </div>
            <div className='mt-5'>
              <button 
              type='submit'
              className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'>Register</button>
            </div>
            <p className='mt-5 text-textColor text-center'>Already have an account? <Link to='/login' className='text-primaryColor font-medium ml-1'>Login</Link></p>
            </form>
            <ul className='text-danger'>
              {Object.keys(formError).map((key) => (
                formError[key].map((message, index) => (
                  <li key={`${key}_${index}`}>{message}</li>
                ))
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserRegister