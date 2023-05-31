import React from 'react'

// import { logout } from '../services/authorize'
import { Link, useNavigate } from 'react-router-dom'

const NavbarComponent = () => {
  const navigate = useNavigate()

  return (
    <div className="flex justify-between">
      <ul className="flex">
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href="/">Home</a>
        </li>
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href="/appointment">Appointment</a>
        </li>
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href="/apply-doctor">Apply Doctor</a>
        </li>
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href="/profile">Profile</a>
        </li>
      </ul>
      <ul className="flex">
        <li className="mr-6">
          <Link to="/login" className="text-blue-500 hover:text-blue-800" >Login</Link>
        </li>
        <li className="mr-6">
          <Link to="/register" className="text-blue-500 hover:text-blue-800">Register</Link>
        </li>
        {/* <li className="mr-6">
          <button onClick={() => logout(() => navigate('/login'))} className="text-blue-500 hover:text-blue-800">logout</button>
        </li> */}
      </ul>
    </div>







  )
}

export default NavbarComponent