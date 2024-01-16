import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Consultation } from '../../components'
import { useConsultations } from '../../contexts';
import './style.css';
import axios from 'axios';

import { useAuthContext } from "../../hooks/useAuthContext";

const MedicalHistoryPage = () => {
  const { consultations, setConsultations } = useConsultations()
  const [loading, setLoading] = useState(true);

  const { user } = useAuthContext();

  useEffect(() => {
    const displayConsultations = async () => {
      const { data } = await axios.get(`http://localhost:5000/conditions/users/${user.user_id}`)
      setConsultations(data.data)
      setLoading(false)
    }
    displayConsultations()
  }, [])

  return (
    <div className='history-page'>
      <h1>Medical History Page</h1>
      <div className='consultations'>
        {
          loading
            ? <p style={{ marginTop: "200px", fontSize: "70px" }}>Loading...</p>
            : <>
            {
              consultations.map(consultation => (
                <Link to={`${consultation.id}`} key={consultation.id}>
                  <Consultation consultation={consultation} />
                </Link>
              ))
            }
            </>
        }
      </div>
    </div>
  )
}

export default MedicalHistoryPage
