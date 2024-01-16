import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const HomePage = () => {
  return (
    <div className='home'>
      <div className='PageWrapper'>
        <h1>Welcome back, name!</h1>
<<<<<<< HEAD
        <div className="articulate">
          <p>Articulate Pain</p>
        </div>
        <div className="chat">
          <p>Chat with GP</p>
        </div>
        <div className="history">
          <p>Medical History</p>
        </div>
=======
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
>>>>>>> 3d331cf21464ab698f939ad05f1095cb72fafa73
        <div className="images">
          <p>Past Images</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
