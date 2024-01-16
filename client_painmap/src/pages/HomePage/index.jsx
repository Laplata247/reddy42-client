import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const HomePage = () => {
  return (
    <div className='home'>
      <h1>Home Page</h1>
    <div className='PageWrapper'>
      <h1>Welcome back, name!</h1>
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
      <div class="images">
      <p>Past Images</p>
      </div>
    </div>
    </div>
  );
};

export default HomePage;
