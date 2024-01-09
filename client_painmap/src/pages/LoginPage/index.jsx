import React, { useEffect } from 'react';
import { LoginForm } from '../../components';

const Login = () => {

    useEffect(() => {
        localStorage.clear()
    }, []);

    return (
        <>
            <h1>Login</h1>
            <LoginForm />
        </>
    )
}

export default Login;
