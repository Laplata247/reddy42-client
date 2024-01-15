import React from 'react'
import './style.css';

const Consultation = ({ consultation }) => {
  return (
    <div className='consultation'>
      <h3>{consultation.condition_name}</h3>
      <img width='200' height='200' src={`data:image/jpeg;base64,${consultation.image_data_base64}`} />
      <p>{consultation.start_date.toString().slice(0,16)}</p>
    </div>
  )
}

export default Consultation
