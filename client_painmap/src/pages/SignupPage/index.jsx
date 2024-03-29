import React, { useEffect } from 'react';
import { SignupForm } from '../../components';
import { Logo } from '../../components';
import './styles.css';


const Signup = () => {

    useEffect(() => {
        localStorage.clear();
    }, []);

    return (
        <div className='Signup'>
            <div className="message">
                <div className='signup-logo'>
                    <Logo />
                </div>
    
                <h1 role='message-heading'>Visualize Your Health, Simplify Your Care.</h1>
                
                <p>Our app transforms pain into clear images, making doctor communication easy and frustration-free. Sign up for honest, efficient medical consultations.</p>
            </div>
            <div className='signup-upper-container'>
                <h1>Signup</h1>
            <div className="signup-container">
                <SignupForm />
            </div>
            </div>
        </div>
    );
    
    
}

export default Signup;
