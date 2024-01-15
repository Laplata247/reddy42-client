import React, { useEffect } from 'react';
import { SignupForm } from '../../components';
import './styles.css';

const Signup = () => {

    useEffect(() => {
        localStorage.clear();
    }, []);

    return (
        <div className="signup-container"> {/* This container will help position your circles */}
            <div className='circle-3'></div>
            <div className='circle-4'></div>
            <h1 className="signup-header">Sign up</h1>
            <SignupForm />
        </div>
    );
}

export default Signup;
