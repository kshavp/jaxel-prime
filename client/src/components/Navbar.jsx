import React from 'react'
import { FaGit, FaGithub, FaGithubAlt, FaHome, FaUser } from 'react-icons/fa'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='p-4 shadow-lg bg-green-300 font-bold relative'>
        <ul className='flex justify-evenly text-sm'>
            <li className='hover:border-neutral-800 transition duration-200'>
                <Link to="/" className='flex items-center gap-x-2'>
                <FaHome />{"Home"}
                </Link>
            </li>
            <li className='hover:border-neutral-800 transition duration-200'>
                <Link target="_blank" to="https://github.com/kshavp/jaxel-prime" className='flex items-center gap-x-2'>
                <FaGithub/> {"Repository"}
                </Link>
            </li>
            <li className='hover:border-neutral-800 transition duration-200'>
                <a href="#contact" className='flex items-center gap-x-2'><FaUser />Contact</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar