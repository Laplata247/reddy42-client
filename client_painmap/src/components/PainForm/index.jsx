import React, { useState } from 'react'

import './style.css';

const PainForm = (props) => {
    const [condition, setCondition] = useState('')
    const [description, setDescription] = useState('')
    const today = new Date();
    const [startDate, setStartDate] = useState(today)

   async function handleSubmit(e) {
        e.preventDefault()

        const imageWithoutPrefix = props.image.substring("data:image/jpeg;base64,".length);


        const options = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // 'Authorization': ?
            },
            body: JSON.stringify(
                {
                    "patient_id": 1,  //TODO change to patient id
                    "condition_name": condition,
                    "description": description,
                    "start_date": startDate,  //TODO fix time
                    "end_date": "2023-6-21", //TODO change to smth
                    "image": imageWithoutPrefix
                })

        }
        const response = await fetch(
            `http://127.0.0.1:5000/conditions`,
            options
        );

        console.log(response)
        
        props.toggle()
    }

    return (
        <div className="painFormPopup">
            <div className="painFormPopupElements">
                <h2>Add new consultation</h2>

                <img width='300' height='300' src={`${props.image}`} />:

                <form onSubmit={handleSubmit}>
                    <label>
                        Add title:
                        <input type="text" value={condition} required={true}
                        placeholder='e.g. headache'
                        onChange={e => setCondition(e.target.value)} />
                    </label>
                    <label>
                        Description:
                        <input type="text" value={description} required={true}
                        placeholder='e.g. throbbing pain on left side of head'
                        onChange={e => setDescription(e.target.value)} />
                    </label>
                    <label>
                        Start date:
                        <input type="datetime-local" value={startDate} required={true}
                        onChange={e => setStartDate(e.target.value)} />
                    </label>
                    <button type="submit">Add</button>
                </form>
                <button id='closeBtn' onClick={props.toggle}>Cancel</button>
            </div>
        </div>
    )
}

export default PainForm
