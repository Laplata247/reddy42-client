import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Consultation } from '../../components'
import { useConsultations } from '../../components/contexts';
import './style.css';

const MedicalHistoryPage = () => {
  const {consultations, setConsultations} = useConsultations()

  useEffect(() => {
    const displayConsultations = async () => {
      // const { data } = await axios.get("https://http://localhost:3000/something")
      // setConsultations(data)

      const data = [
        {
          "id": 1,
          "condition": "broken leg",
          "description": "broken leg in 5 places",
          "start_date": "20/12/2023",
          "end_date": "06/01/2024"
        },
        {
          "id": 2,
          "condition": "abdominal pain",
          "description": "pain caused by eating too much chocolate",
          "start_date": "10/11/2023",
          "end_date": "11/11/2023"
        },
        {
          "id": 3,
          "condition": "chest pain",
          "description": "winter flu",
          "start_date": "20/09/2023",
          "end_date": "20/09/2023"
        }
      ]

      setConsultations(data)
    }
    displayConsultations()
  }, [])

  return (
    <>
      <h1> Medical History Page</h1 >
      <div className='consultations'>
        {consultations.map(consultation => (
          <Link to={`${consultation.id}`} key={consultation.id}>
            <Consultation consultation={consultation} />
          </Link>
        ))
        }
      </div>
    </>
  )
}

export default MedicalHistoryPage
