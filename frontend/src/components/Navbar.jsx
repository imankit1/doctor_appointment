import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

function Navbar() {


    const navigate = useNavigate();

    const { token, setToken, userData } = useContext(AppContext)

    const [showMenu, setShowMenu] = useState(false);


    const logout = () => {
        setToken(false)
        localStorage.removeItem('token')
    }



    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-none border-b-gray-400'>
            <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="" />
            <ul className="hidden md:flex items-center gap-8 font-medium">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `relative py-1 transition-colors duration-300 
      ${isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`
                    }
                >
                    HOME

                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </NavLink>

                <NavLink
                    to="/doctors"
                    className={({ isActive }) =>
                        `relative py-1 transition-colors duration-300 
      ${isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`
                    }
                >
                    ALL DOCTORS
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </NavLink>

                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        `relative py-1 transition-colors duration-300 
      ${isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`
                    }
                >
                    ABOUT
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </NavLink>

                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        `relative py-1 transition-colors duration-300 
      ${isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`
                    }
                >
                    CONTACT
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
            </ul>


            <div className='flex items-center gap-4'>
                {
                    token && userData
                        ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                            <img className='w-8 rounded-full' src={userData.image} alt="" />
                            <img className='w-2.5' src={assets.dropdown_icon} alt="" />

                            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                                <div className='min-w-48 bg-stone-100 rounded flex  flex-col gap-4 p-4'>
                                    <p onClick={() => navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                                    <p onClick={() => navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                                    <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
                                </div>
                            </div>
                        </div>

                        : <button onClick={() => navigate('/login')} className='bg-blue-500 text-white px-8 py-3 rounded-full font-light hidden md:block cursor-pointer'>Create account</button>

                }
                <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
                {/* ----mobile menu------ */}
                <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                    <div className='flex items-center justify-between px-5 py-6'>
                        <img className='w-36' src={assets.logo} alt="" />
                        <img className='w-7' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="" />
                    </div>
                    <ul className='flex flex-col items-center gap-2 mt-5 text-lg font-medium'>
                        <NavLink onClick={() => setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>HOME</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded inline-block'>ALL DOCTORS</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>ABOUT</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>CONTACT</p></NavLink>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Navbar
