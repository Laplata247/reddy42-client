import React, { useState } from 'react'
import { useAuthContext } from "../../hooks/useAuthContext";
import './style.css';

const HereditaryForm = (props) => {
    const [hereditaryCondition, setHereditaryCondition] = useState('')
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
                    "email": user.user_id,
                    "hereditary_condition_name": hereditaryCondition
                })
        }
        const response = await fetch(
            `http://127.0.0.1:5000/hereditary_conditions`,
            options
        );
        props.toggleHereditaryPopup()
    }

    return (
        <div className="hereditaryFormPopup">
            <div className="hereditaryFormPopupElements">
                <h2>Add new hereditary condition</h2>

                <form onSubmit={handleSubmit}>
                    <label>
                        Add hereditary condition name:
                        <input role="hereditaryCondition" type="text" value={hereditaryCondition} required={true}
                            placeholder='e.g. Albinism'
                            onChange={e => setHereditaryCondition(e.target.value)} />
                    </label>

                    <button type="submit">Add</button>
                </form>
                <button id='closeHereditaryFormBtn' onClick={props.toggleHereditaryPopup}>Cancel</button>
            </div>
        </div>
    )
}
export default HereditaryForm
