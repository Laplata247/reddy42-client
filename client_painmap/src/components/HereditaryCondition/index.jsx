import React from 'react'
import './style.css';

const HereditaryCondition = ({ condition }) => {
  return (
    <div className='hereditaryCondition'>
      <h3>{condition.hereditary_condition_name}</h3>
    </div>
  )
}

export default HereditaryCondition
