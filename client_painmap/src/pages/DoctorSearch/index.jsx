import React from 'react';
import { Link } from 'react-router-dom';
import { SearchForm } from '../../components';

import { useState, useEffect } from 'react'
import { Consultation } from '../../components'
import { useConsultations } from '../../contexts';
import axios from 'axios';

import { useAuthContext } from "../../hooks/useAuthContext";

const DoctorSearch = () => {
  const { consultations, setConsultations } = useConsultations()
  const [loading, setLoading] = useState(true);
//////////////////////////////////////////////////////////
  const { user } = useAuthContext();
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    const displayConsultations = async () => {
      const { data } = await axios.get(`http://localhost:5000/conditions/users/${searchString}`)
      setConsultations(data.data)
      setLoading(false)
    }
    displayConsultations()
  }, [searchString])

  function handleSearch(userInput){
    setSearchString(userInput);
}

  //////////////////////////////////////////////////////////
  return (
    <>
      <SearchForm handleSearch={handleSearch} lastSearch={searchString}/>
      <Link to="/">Home</Link>

      <h1>Patient medical history</h1 >
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
    </>
  )
}

export default DoctorSearch
