import React from 'react'
import { Link } from 'react-router-dom'

const Raju = () => {
  return (
    <>
       <div className='flex flex-col'>
        <h1>Free Tibet</h1>
        <Link to="/">Home</Link>
        <Link to="/raju">I am Raju</Link>
        <Link to="/lokesh">I am Lokesh</Link>
       </div>
    </>
  )
}

export default Raju