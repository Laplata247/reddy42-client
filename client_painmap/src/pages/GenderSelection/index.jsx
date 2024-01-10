// GenderSelection.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function GenderSelection() {
  const navigate = useNavigate();

  const handleSelectMale = () => {
    navigate('/painmap'); // Use the path that leads to your MapPainPage
    console.log("clicked")
  };

  return (
    <div>
      <h1>Select Your Gender</h1>
      <button onClick={handleSelectMale}>Select Male</button>
      {/* Add other gender options or logic as needed */}
    </div>
  );
}

export default GenderSelection;


