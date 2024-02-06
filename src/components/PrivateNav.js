import React from 'react'
import { Link } from 'react-router-dom';
const PrivateNav = () => {
  return (
    <ul className='nav'>
      <li className='nav-item'>
        <Link className='nav-link active' to='/dashboard'>
          Home
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/dashboard/user-profile'>
          User Profile
        </Link>
      </li>
      
    </ul>
  );
}

export default PrivateNav