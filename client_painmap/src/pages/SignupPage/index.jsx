import React, { useEffect } from 'react';
import { SignupForm } from '../../components';
import './styles.css';


const Signup = () => {

    useEffect(() => {
        localStorage.clear();
    }, []);

    return (
        <div className='Signup'>
            <div className="message">
                <div className="header">
                    <h1>Visualize Your Health, Simplify Your Care.</h1>
                </div>
                <p>Our app transforms pain into clear images, making doctor communication easy and frustration-free. Sign up for honest, efficient medical consultations.</p>
            </div>
            <div className="signup-container">
                <SignupForm />
            </div>
        </div>
    );
    
    
}

export default Signup;
