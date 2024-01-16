import React from 'react';
import './styles.css';

const HomePage = () => {

  return (
    <div className='home'>
      <div className='PageWrapper'>
        <h1>Welcome back, name!</h1>
        <div className="articulate">
          <p>Articulate Pain</p>
        </div>
        <div className="chat">
          <p>Chat with GP</p>
        </div>
        <div className="history">
          <p>Medical History</p>
        </div>
        <div className="images">
          <p>Past Images</p>
        </div>
      </div>
    </div>
  );

}

export default HomePage
