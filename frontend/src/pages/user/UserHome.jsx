import React, { useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import { Link } from 'react-router-dom'

const UserHome = () => {
  const {user} = useContext(AuthContext)
  return (
    <>
    <section className='hero__section pt-[60px] p-28 2xl:h-[800px]'>
      <div className="container ">
        <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
          <div>
            <div className='lg:w-[570px]'>
              <h4 className='text-[30px] leading-[46px] text-headingColor font-[700] md:text-[40px] md:leading-[50px]'>
                Join us on your journey to better health, we're here to support.
              </h4>
              <p className='text__para'>
              Discover personalized support on your path to Wellness your journery to better health begins here.
              </p>
              <Link to='/find-doctor'>
                <button className='btn'>Request an Appointment</button>
              </Link>
            </div>


            <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
              <div className='w-[90px] pr-4'>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] fond-[600] text-headingColor'>30+</h2>
                <span className='w-10px h-2 bg-yellowColor rounded-full block mt-[-13px]'></span>
                <p className='text__para'>Years of Experience</p>
              </div>
              <div className='w-[90px] pr-4'>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] fond-[600] text-headingColor'>15+</h2>
                <span className='w-10px h-2 bg-purpleColor rounded-full block mt-[-13px]'></span>
                <p className='text__para'>Clinic Locations</p>
              </div>
              <div className='w-[90px]'>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] fond-[600] text-headingColor'>100%</h2>
                <span className='w-10px h-2 bg-irisBlueColor rounded-full block mt-[-13px]'></span>
                <p className='text__para'>Patient Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default UserHome;