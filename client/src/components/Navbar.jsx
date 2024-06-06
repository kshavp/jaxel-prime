import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='m-4'>
        <ul className='flex justify-evenly'>
            <li className='hover:border-neutral-800 border-b-2 border-neutral-400 transition duration-200'>
                <Link to="/">{"Home"}</Link>
            </li>
            <li className='hover:border-neutral-800 border-b-2 border-neutral-400 transition duration-200'>
                <Link to="/csvtojson">{"CSV->JSON"}</Link>
            </li>
            <li className='hover:border-neutral-800 border-b-2 border-neutral-400 transition duration-200'>
                <Link to="/jsontocsv">{"JSON->CSV"}</Link>
            </li>
            <li className='hover:border-neutral-800 border-b-2 border-neutral-400 transition duration-200'>
                <Link target="_blank" to="https://github.com/kshavp/jaxel-prime">{"Repository"}</Link>
            </li>
            <li className='hover:border-neutral-800 border-b-2 border-neutral-400 transition duration-200'>
                <Link target="_blank" to="https://keshavpriyam.vercel.app/">{"About"}</Link>
            </li>
        </ul>
        {/* <Outlet /> */}
    </nav>
  )
}

export default Navbar