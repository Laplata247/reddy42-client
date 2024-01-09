import React, { useEffect } from 'react';
import { SignupForm } from '../../components';

const Signup = () => {

    useEffect(() => {
        localStorage.clear()
    }, []);

    return (
        <>
            <h1>Signup</h1>
            <SignupForm />
        </>
    )
}

export default Signup;
