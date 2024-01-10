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
    const [isSignupSuccessful, setSignupSuccessful] = useState(null);

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {

            const userData = {
                firstName: e.target.firstName.value,
                lastName: e.target.lastName.value,
                email: e.target.email.value,
                password: e.target.password.value,
            }

            // const response = await axios.post('<backendURL>', userData);
            const response = await axios.post('http://localhost:4000/patients', userData);

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

    return (
        <>
            <form onSubmit={handleSubmit} id='signup-form'>
                <label>First name</label>
                <input type='text' name='firstName' placeholder='Enter Your First Name' onChange={updateFirstName} />
                
                <label>Last name</label>
                <input type='text' name='lastName' placeholder='Enter Your Last Name' onChange={updateLastName} />
                
                <label>Email</label>
                <input type='text' name='email' placeholder='Enter Your Email' onChange={updateEmail} />
                
                <label>Create Password</label>
                <input type='text' name='password' placeholder='Enter Password' onChange={updatePassword} />
                
                <input type='submit' value='Create Account'/>
            </form>

            <p>Already have an account? <span onClick={() => goTo('/login')}>Log in</span> here</p>
        </>
    )
}

export default SignupForm
