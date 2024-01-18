import React from 'react'
import './style.css';

const HereditaryCondition = ({ condition }) => {
  return (
    <div className='hereditaryCondition'>
      <p>{condition.hereditary_condition_name}</p>
    </div>
  )
}

export default HereditaryCondition
