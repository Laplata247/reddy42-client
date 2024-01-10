import React from 'react'
import './style.css';

const Consultation = ({ consultation }) => {
  return (
    <div className='consultation'>
      <h3>{consultation.condition}</h3>
      <p>{consultation.start_date}</p>
    </div>
  )
}

export default Consultation
