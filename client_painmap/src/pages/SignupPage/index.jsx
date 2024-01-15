import React, { useEffect } from 'react';
import { SignupForm } from '../../components';
import './styles.css';

const Signup = () => {

    useEffect(() => {
        localStorage.clear();
    }, []);

    return (
        <>
        <div className="signup-container"> {/* This container will help position your circles */}
            <div className='circle-3'></div>
            <div className='circle-4'></div>
            <h1>Sign up</h1>
            <SignupForm />
        </div>
        <div className='message'>
            <h1>Visualize Your Health, Simplify Your Care.</h1>
<p>Our app transforms pain into clear animations, making doctor communication easy and frustration-free. Sign up for ethical, efficient medical consultations.</p>
        </div>
        </>
    );
}

export default Signup;
