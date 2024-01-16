import React from 'react';
import './styles.css';

const HomePage = () => {

  return (
    <div className='home'>
      <h1>Home Page</h1>
      <div className='PageWrapper'>
        <h1>Welcome back, name!</h1>
        <div class="articulate">
          <p>Articulate Pain</p>
        </div>
        <div class="chat">
          <p>Chat with GP</p>
        </div>
        <div class="history">
          <p>Medical History</p>
        </div>
        <div class="images">
          <p>Past Images</p>
        </div>
      </div>
    </div>
  );

}

export default HomePage
