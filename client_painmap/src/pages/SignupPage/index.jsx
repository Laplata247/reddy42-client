import React, { useEffect } from 'react';
import { SignupForm } from '../../components';
import './styles.css';

const Signup = () => {

    useEffect(() => {
        localStorage.clear();
    }, []);

    return (
        <div className='Signup'>
            <div className='message'>
                <h1>Visualize Your Health, Simplify Your Care.</h1>
                <p>Our app transforms pain into clear animations, making doctor communication easy and frustration-free. Sign up for ethical, efficient medical consultations.</p>
            </div>
            <div className="signup-container">
                <SignupForm />
            </div>
        </div>
    );
}

export default Signup;
