import React, { useState } from 'react'
import { useAuthContext } from "../../hooks/useAuthContext";

import './style.css';

const FamilyForm = (props) => {
    const [familyEmail, setFamilyEmail] = useState('')
    const { user } = useAuthContext();

   async function handleSubmit(e) {
        e.preventDefault()
        const options = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    "patient_email": user.user_id, 
                    "related_patient_email": familyEmail
                })
        }
        const response = await fetch(
            `http://127.0.0.1:5000/create_relationship`,
            options
        );
        props.toggleFamilyPopup()
    }

    return (
        <div className="familyFormPopup">
            <div className="familyFormPopupElements">
                <h2>Add new family member</h2>

                <form onSubmit={handleSubmit}>
                    <label>
                        Add email address of your family member:
                        <input role="familyEmail" type="text" value={familyEmail} required={true}
                        placeholder='e.g. sarah@gmail.com'
                        onChange={e => setFamilyEmail(e.target.value)} />
                    </label>

                    <button type="submit">Add</button>
                </form>
                <button id='closeFamilyFormBtn' onClick={props.toggleFamilyPopup}>Cancel</button>
            </div>
        </div>
    )
}

export default FamilyForm
