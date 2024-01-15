import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const SignupForm = () => {

    const goTo = useNavigate();

    const [ firstName, setFirstName ] = useState();
    const [ lastName, setLastName ] = useState();
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();
    const [ dateOfBirth, setDateOfBirth ] = useState('');
    const [ sex, setSex ] = useState('');
    const [ ethnicity, setEthnicity ] = useState('');
    const [ nhsMember, setNhsMember ] = useState('');
    const [ isSignupSuccessful, setSignupSuccessful ] = useState(null);

    //changed inputs - doesnt like string larger than 1
    const sexOptions = ['M', 'F'];
    const ethnicityOptions = ['Asian/Asian British', 'Black/Black British/African/Caribbean', 'White', 'Mixed-White and Asian', 'Mixed-White and Black Caribbean', 'Mixed-White and Black African', 'Mixed-Other', 'Other'].slice().sort();

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            //order is very important here - had to rearrrange to make work on back end
            const userData = {
                first_name: e.target.firstName.value,
                last_name: e.target.lastName.value,
                email: e.target.email.value,
                password: e.target.password.value,
                nhs_number: e.target.nhsMember.value,
                date_of_birth: e.target.dateOfBirth.value,
                sex: e.target.sex.value,
                ethnicity: e.target.ethnicity.value
            }

            console.log(userData)

            // const response = await axios.post('<backendURL>', userData);
            // const response = await axios.post('http://localhost:4000/patients', userData, { withCredentials: true });

            //changed to 5000
            const response = await axios.post('http://localhost:5000/patients', userData);

            // console.log(userData)

            if (response.status === 200) {
                setSignupSuccessful(true);

                goTo('/home');
            }
            else {
                console.error('Signup failed:', response.data.error);
                setSignupSuccessful(false);
            }


        } catch (error) {
            console.error('Error during signup:', error);
            setSignupSuccessful(false);
        } 
    }

    const updateFirstName = e => {
        const input = e.target.value;
        setFirstName(input);
    }

    const updateLastName = e => {
        const input = e.target.value;
        setLastName(input);
    }

    const updateEmail = e => {
        const input = e.target.value;
        setEmail(input);
    }

    const updatePassword = e => {
        const input = e.target.value;
        setPassword(input);
    }

    const updateDOB = e => {
        const input = e.target.value;
        setDateOfBirth(input);
    }

    const updateSex = e => {
        const input = e.target.value;
        setSex(input);
    }

    const updateEthnicity = e => {
        const input = e.target.value;
        setEthnicity(input);
    }

    return (
        <>
            <form onSubmit={handleSubmit} id='signup-form' role='form'>
                <label>First name</label>
                <input type='text' name='firstName' placeholder='Enter your first name' onChange={updateFirstName} role='first-name' />
                
                <label>Last name</label>
                <input type='text' name='lastName' placeholder='Enter your last name' onChange={updateLastName} role='last-name' />

                <label>Date of Birth</label>
                <input type='date' name='dateOfBirth' placeholder='MM/DD/YYYY' onChange={updateDOB} role='dateOfBirth' />

                <label>Sex</label>
                <select name='sex' onChange={updateSex} role='sex' value={sex}>
                    <option value='' disabled>Select Sex</option>
                    {sexOptions.map((option) => (
                        <option key={option} value={option}>
                        {option}
                        </option>
                    ))}
                </select>

                <label>Ethnicity</label>
                <select name='ethnicity' onChange={updateEthnicity} role='ethnicity' value={ethnicity}>
                    <option value='' disabled>Select Ethnicity</option>
                    {ethnicityOptions.map((option) => (
                        <option key={option} value={option}>
                        {option}
                        </option>
                    ))}
                </select>

                <label>Email</label>
                <input type='text' name='email' placeholder='example@email.com' onChange={updateEmail} role='email' />
                
                <label>Create Password</label>
                <input type='password' name='password' placeholder='must be 8 characters' onChange={updatePassword} role='password' />

                <label>Are you a NHS member?</label>
                <div>
                    <input
                        type='radio'
                        name='nhsMember'
                        value='True'
                        defaultChecked={false}
                        onChange={(e) => e.target.checked && setNhsMember(true)}
                        role='nhsMember'
                    />
                    <label htmlFor='nhsMemberYes'>Yes</label>

                    <input
                        type='radio'
                        name='nhsMember'
                        value='False' //this line needs to be Boolean(false) - cant get it to work
                        defaultChecked={true}
                        onChange={(e) => e.target.checked && setNhsMember(false)}
                        role='nhsMember'
                    />
                    <label htmlFor='nhsMemberNo'>No</label>
                </div>
                
                <input type='submit' value='Create Account'/>
            </form>

            <p>Already have an account? <span onClick={() => goTo('/login')}>Log in</span> here</p>
        </>
    )
}

export default SignupForm
