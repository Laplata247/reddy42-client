import React from 'react'
import { HereditaryCondition } from '../../components'
import './styles.css'

const FamilyMember = ({ member }) => {

  return (
    <div className='familyMember'>
      <p className='fam-member-name'>Name: <span>{member.first_name}</span> <span>{member.last_name}</span></p>
      {/* <h3>{member.first_name}</h3>
      <p>{member.last_name}</p> */}
      <p><b>Email:</b> {member.email}</p>
      <h3>Hereditary conditions:</h3>
      {
        member.hereditary_conditions.length > 0 ? (
          <>
            {member.hereditary_conditions.map((condition, index) => (
              <HereditaryCondition key={index} condition={condition} />
            ))}
          </>
        ) : (
          <p>No hereditary conditions available.</p>
        )
      }
    </div>
  )
}

export default FamilyMember
