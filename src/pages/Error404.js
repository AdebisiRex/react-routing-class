import React from 'react'
import Nav from '../components/Nav'

const Error404 = () => {
  return (
    <>
    <Nav/>
    <div className='bg-danger min-vh-100 d-flex align-items-center justify-content-center'>

        <div className='text-center text-white'>
            <h1>There has been an error</h1>
            <p>Please track back a little  bit</p>
        </div>

    </div>
    </>
  )
}

export default Error404