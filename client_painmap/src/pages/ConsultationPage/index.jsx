import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useConsultations } from '../../components/contexts'
import './style.css';

const ConsultationPage = () => {
    const { consultations } = useConsultations()
    const [consultation, setConsultation] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const displayConsultation = async () => {
            setConsultation(consultations[id - 1])
        }
        displayConsultation()
    }, [])

    return (
        <div className='consultationDetails'>
            <h1>{consultation.condition}</h1>
            <h2>{consultation.description}</h2>
            <h3>Start date: {consultation.start_date}</h3>
            <h3>End date: {consultation.end_date}</h3>
            <Link to=".." relative="path">
                <button className='backBtn'>
                    Go Back
                </button>
            </Link>
        </div>
    )
}

export default ConsultationPage
