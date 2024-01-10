import React from 'react';
import { useNavigate } from 'react-router-dom';

function GenderSelection() {
  const navigate = useNavigate();

  const handleGenderSelection = () => {
    // Perform any logic here for gender selection
    // For example, when the user selects "Male":
    // You can save the gender selection to a state or perform any necessary actions

    // Then, navigate to the "Map Pain" page
    navigate('/painmap');
    console.log("clicked")
  };

  return (
    <div>
      <h1>Select Your Gender</h1>
      <button onClick={handleGenderSelection}>Select Male</button>
      {/* Add other gender options */}
    </div>
  );
}

export default GenderSelection;
