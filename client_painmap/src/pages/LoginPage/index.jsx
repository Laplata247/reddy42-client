import React, { useEffect } from 'react';
import { LoginForm } from '../../components';

const Login = () => {

    useEffect(() => {
        localStorage.clear()
    }, []);

    return (
        <>
            <h1>Hi, there!</h1>
            <LoginForm />
        </>
    )
}

export default Login;
