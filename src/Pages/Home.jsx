import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className='flex flex-col'>
        <Link to="/">Home</Link>
        <Link to="/raju">I am Raju</Link>
        <Link to="/lokesh">I am Lokesh</Link>
    </div>
    </>
  )
}

export default Home