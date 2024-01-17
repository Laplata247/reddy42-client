import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Consultation, FamilyMember, HereditaryCondition } from '../../components'
import { useConsultations } from '../../contexts';
import './style.css';
import axios from 'axios';

import { useAuthContext } from "../../hooks/useAuthContext";

const MedicalHistoryPage = () => {
  const { consultations, setConsultations } = useConsultations()
  const [family, setFamily] = useState([]);
  const [hereditaryConditions, setHereditaryConditions] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuthContext();

  useEffect(() => {
    const displayConsultations = async () => {
      const { data } = await axios.get(`http://localhost:5000/conditions/users/${user.user_id}`)
      setConsultations(data.data)

      const data2 = await axios.get(`http://localhost:5000/patients/${user.user_id}/family`)
      setFamily(data2.data.family_members)

      const data3 = await axios.get(`http://localhost:5000/patients/${user.user_id}`)

      // use set to make sure the conditions are unique
      const hereditaryConditionsSet = new Set([...hereditaryConditions, ...data3.data.data.hereditary_conditions]);
      const hereditaryConditionsArray = Array.from(hereditaryConditionsSet);
      setHereditaryConditions(hereditaryConditionsArray);
      setLoading(false)
    }
    displayConsultations()
  }, [])

  return (
    <div className='history-page'>

      <div className='history-container'>

      <div className='hereditary-family-container'>

        <div className='hereditary-conditions'>
          <h2>Hereditary conditions:</h2>
          {
            loading
              ? <p style={{ marginTop: "200px", fontSize: "70px" }}>Loading...</p>
              : (
                hereditaryConditions.length > 0 ? (
                  <>
                    {hereditaryConditions.map((condition, index) => (
                      <HereditaryCondition key={index} condition={condition} />
                    ))}
                  </>
                ) : (
                  <p>No hereditary conditions available.</p>
                )
              )
          }
          <button>Add</button>
        </div>

        <div className='family-members'>
          <h2>Family members:</h2>
          {
            loading
              ? <p style={{ marginTop: "200px", fontSize: "70px" }}>Loading...</p>
              : <>
                {
                  family.map(member => (
                      <FamilyMember member={member} />
                  ))
                }
              </>
          }
          <button>Add</button>
        </div>        
      </div>
      <div className='consultations-container'>

        <h1>My Medical History</h1>
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

      </div>
    </div>
  )
}

export default MedicalHistoryPage
