import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <ul className='nav'>
      <li className='nav-item'>
        <Link className='nav-link active'  to="/">
          Home
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to="/signin">
          Signin
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/about'>
          About us
        </Link>
      </li>
      <li className='nav-item'>
        <a className='nav-link disabled' aria-disabled='true'>
          Disabled
        </a>
      </li>
    </ul>
  );
}

export default Nav