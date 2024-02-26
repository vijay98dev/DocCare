import React,{useContext, useEffect,useRef} from 'react'
import logo from '../../assets/images/logo.png'
import {NavLink, Link } from 'react-router-dom'
import {BiMenu} from 'react-icons/bi'
import AdminAuthContext from '../../context/AdminAuthContext'



const navLink =[
    {
      path:'/adm',
      display:'Home'
    },
    {
        path:'/adm/user',
        display:'Users'
      },
    {
      path:'/adm/doctor',
      display:'Doctors'
    },
]

const AdminHeader = () => {
    const {user,userLogout} = useContext(AdminAuthContext)
    const headerRef = useRef(null)
    const menuRef = useRef(null)

    const handleStickyHeader = () =>{
        window.addEventListener('scroll',() =>{
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            headerRef.current.classList.add('sticky__header')
        }else{
            headerRef.current.classList.remove('sticky__header')
        }
        })
    }

    useEffect(() => {
        handleStickyHeader()
        return () =>{window.removeEventListener('scroll',handleStickyHeader)}
    });

    const toggleMenu = () => {menuRef.current.classList.toggle('show__menu')}
  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          
            <div>
              <NavLink to='/'>
              <img src={logo}
              className="h-8 cursor-pointer rounded-full"  
                alt="Logo" />
                </NavLink>
            </div>
            <div className='navigation' ref={menuRef} onClick={toggleMenu}>
              <ul className='menu flex items-center gap-[5rem]'>
                  {
                    navLink.map((link,index) =>
                    <li key={index}>
                      <NavLink to={link.path} className={navClass => navClass.isActive ? 'text-primaryColor text-[14px] leading-7 font-[400]':'text-textColor text-[14px] leading-7 font-[300] hover:text-primaryColor'}>{link.display}</NavLink>
                    </li>) 
                  }
              </ul>
            </div>
          <div className='flex items-center gap-4'>
            <div className='hidden'>
                {/* <Link to='/'>
                  <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                    <img src={userImg} className='w-full rounded-full' alt='' />
                  </figure>
                </Link> */}
            </div>
            {user ? <button className='bg-primaryColor m-2 py-0 px-2 text-white font-semibold h-[35px] flex items-center justify-center rounded-full' onClick={userLogout}>Logout</button>:(
            <Link to='/adm/login'>
            <button className='bg-primaryColor m-2 py-0 px-2 text-white font-semibold h-[35px] flex items-center justify-center rounded-full'>Login</button>
            </Link>
            )}
            
            <span className='md:hidden' onClick={toggleMenu}>
                  <BiMenu className='w-5 h-5 cursor-pointer'/> 
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AdminHeader