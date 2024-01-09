import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

    const goTo = useNavigate();

    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();
    const [loginSuccessful, setLoginSuccessful] = useState(null);

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {

            const userData = {
                email: e.target.email.value,
                password: e.target.password.value,
            }

            const response = await axios.post('<backendURL>', userData);

            if (response.status === 200) {
                setLoginSuccessful(true);
            }
            else {
                console.error('Login failed:', response.data.error);
                setLoginSuccessful(false);
            }


        } catch (error) {
            console.error('Error during login:', error);
            setLoginSuccessful(false);
        } 
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
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type='text' name='email' placeholder='Enter Your Email' onChange={updateEmail} />

                <label>Password</label>
                <input type='text' name='password' placeholder='Enter Password' onChange={updatePassword} />

                <input type='submit' value='Login' />
            </form>

            <p>Don't have an account? <span onClick={() => goTo('/signup')}>Signup</span> here</p>
        </>
    )
}

export default LoginForm;
