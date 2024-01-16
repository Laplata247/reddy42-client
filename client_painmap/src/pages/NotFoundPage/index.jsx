import React from 'react'
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className='not-found'>
      <h1>Page not found</h1>
      <Link to="/">Home</Link>
    </div>
  )
}

export default NotFoundPage
