import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useConsultations } from '../../contexts'
import './style.css';
import axios from 'axios';

const ConsultationPage = () => {
    const { consultations } = useConsultations()
    const [consultation, setConsultation] = useState([])
    const { id } = useParams()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const displayConsultation = async () => {
            const { data } = await axios.get(`http://localhost:5000/conditions/${id}`)
            setConsultation(data.data)
            setLoading(false)
        }
        console.log(consultations)
        displayConsultation()
    }, [])

    return (
        <div role='details'className='consultationDetails'>
            {
                loading
                    ? <p style={{ marginTop: "200px", fontSize: "70px" }}>Loading...</p>
                    : <>

                        <h1>{consultation.condition_name}</h1>
                        <img width='200' height='200' src={`data:image/jpeg;base64,${consultation.image_data_base64}`} />
                        <h2>{consultation.description}</h2>
                        <h3>Start date: {consultation.start_date}</h3>
                        <h3>End date: {consultation.end_date}</h3>
                        <Link to=".." relative="path">
                            <button className='backBtn'>
                                Go Back
                            </button>
                        </Link>
                    </>

            }
        </div>
    )
}

export default ConsultationPage
