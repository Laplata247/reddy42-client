import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  
    const goTo = useNavigate();

    return (
      <>
          <button onClick={() => goTo('/signup')}>Choose Language</button>
      </>
    )
}

export default LandingPage
