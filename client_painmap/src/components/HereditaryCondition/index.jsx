import React from 'react'
import './style.css';

const HereditaryCondition = ({ condition }) => {
  return (
    <div role='div'className='hereditaryCondition'>
      <p role='title'>{condition.hereditary_condition_name}</p>
    </div>
  )
}

export default HereditaryCondition
