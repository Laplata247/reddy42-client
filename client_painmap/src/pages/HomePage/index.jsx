import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const HomePage = () => {
  return (
    <div role='PageWrapper' className='home'>
      <h1>Welcome back!</h1>
      <div className='PageWrapper'> {/* This div will now use the grid layout */}
        <Link to="/chat">
          <div className="chat">
            <p>Chat with GP</p>
          </div>
        </Link>
        <Link to="/history">
          <div className="history">
            <p>Medical History</p>
          </div>
        </Link>
        <Link to="/select-gender">
          <div className="articulate">
            <p>Articulate Pain</p>
          </div>
        </Link>
        {/* <div className="images">
          <p>Past Images</p>
        </div> only invoke for experimental */}
      </div>
    </div>
  );
};

export default HomePage;
