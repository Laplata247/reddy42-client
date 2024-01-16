import React, { useEffect } from 'react';
// Correct import statements
// import {Logo } from '../../components/Logo';

import './styles.css';


const Login = () => {

    useEffect(() => {
        localStorage.clear()
    }, []);

    return (

        <div className='login-container'>
            <div className='login-circle-1'></div>
            <div className='login-circle-2'></div>
            <div className='login-div'>
                <h1>Hi, there!</h1>
            </div>
        </div>
      )
    }   

export default Login; 
