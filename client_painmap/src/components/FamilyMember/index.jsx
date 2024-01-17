import React from 'react'
import { HereditaryCondition } from '../../components'

const FamilyMember = ({ member }) => {

  return (
    <div className='familyMember'>
      <h3>{member.first_name}</h3>
      <p>{member.last_name}</p>
      <p>{member.email}</p>
      <p>Hereditary conditions:</p>
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
