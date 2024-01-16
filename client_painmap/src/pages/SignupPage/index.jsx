import React, { useEffect } from 'react';
import { SignupForm } from '../../components';
import './styles.css';

const Signup = () => {

    useEffect(() => {
        localStorage.clear();
    }, []);

    return (
<<<<<<< HEAD
        <div className='Signup'>
            <div className="message">
                <div className="header">
                    <h1>Visualize Your Health, Simplify Your Care.</h1>
                </div>
                <p>Our app transforms pain into clear animations, making doctor communication easy and frustration-free. Sign up for ethical, efficient medical consultations.</p>
            </div>
            <div className="signup-container">
                <SignupForm />
            </div>
=======
        <div className="signup-container"> {/* This container will help position your circles */}
            {/* <div className='circle-3'></div>
            <div className='circle-4'></div> */}
            <h1 className="signup-header">Sign up</h1>
            <SignupForm />
>>>>>>> a6484fa7df170a4fb3be0fb257f5918d45801f62
        </div>
    );
    
    
}

export default Signup;
