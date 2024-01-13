import React, { useEffect } from 'react';
// Correct import statements
import { LoginForm, Logo } from '/src/components';

import './styles.css';


const Login = () => {

    useEffect(() => {
        localStorage.clear()
    }, []);

    return (
        <div className="login-container">
          <Logo /> 
          <div className='circle-1'></div>
          <div className='circle-2'></div>
          <div className='login-div'>
            <h1>Hi, there!👋</h1>
            <LoginForm />
          </div>
        </div>
      )
    }   

export default Login;
