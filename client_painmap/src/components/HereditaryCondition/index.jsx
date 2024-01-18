import React from 'react'
import './style.css';

const HereditaryCondition = ({ condition }) => {
  return (
    <div role='div'className='hereditaryCondition'>
      <h3 role='title'>{condition.hereditary_condition_name}</h3>
    </div>
  )
}

export default HereditaryCondition
