import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './styles.css';


const LoginForm = () => {
    const goTo = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginSuccessful, setLoginSuccessful] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userData = {
                email: e.target.email.value,
                password: e.target.password.value,
            }

            const response = await axios.post('http://localhost:5000/login', userData);

            if (response.status === 200) {
                setLoginSuccessful(true);
                goTo('/home');
            } else {
                console.error('Login failed:', response.data.error);
                setLoginSuccessful(false);
            }
        } catch (error) {
            console.error('Error during login:', error);
            setLoginSuccessful(false);
        }
    }

    const updateEmail = (e) => {
        const input = e.target.value;
        setEmail(input);
    }

    const updatePassword = (e) => {
        const input = e.target.value;
        setPassword(input);
    }

    return (
        <>
            <form onSubmit={handleSubmit} id='login-form' role='form'>
                <label>Email</label>
                <input type='text' name='email' placeholder='Your email' onChange={updateEmail} role='email' />

                <label>Password</label>
                <input type='password' name='password' placeholder='Password' onChange={updatePassword} role='password' />

                <input type='submit' value='Login' className='login-submit' />
            </form>

            <p className="signup-text">
                Don't have an account? <span onClick={() => goTo('/signup')} className="signup-link">Sign up</span> here
            </p>
        </>
    );
}

export default LoginForm;
