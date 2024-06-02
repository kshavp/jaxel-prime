import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='m-4'>
        <ul className='flex justify-evenly'>
            <li className=' hover:underline'>
                <Link to="/">{"Home"}</Link>
            </li>
            <li className=' hover:underline'>
                <Link to="/csvtojson">{"CSV->JSON"}</Link>
            </li>
            <li className=' hover:underline'>
                <Link to="/jsontocsv">{"JSON->CSV"}</Link>
            </li>
            <li className=' hover:underline'>
                <Link to="https://github.com/kshavp/jaxel-prime">{"Repository"}</Link>
            </li>
            <li className=' hover:underline'>
                <Link to="https://keshavpriyam.vercel.app/">{"About"}</Link>
            </li>
        </ul>
        {/* <Outlet /> */}
    </nav>
  )
}

export default Navbar