import React, { useEffect } from 'react';
import { LoginForm } from '../../components';
import './styles.css';

const Login = () => {

    useEffect(() => {
        localStorage.clear()
    }, []);

    return (
        <div className='login-container'>
            <div className='circle-1'></div>
            <div className='circle-2'></div>
            <div className='login-div'>
                <h1>Hi, there!</h1>
                <LoginForm />
            </div>
        </div>
    )
}

export default Login;
