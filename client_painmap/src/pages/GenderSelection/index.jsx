import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Model } from '../../components/Model';
import { useGender } from '../../components/contexts';



function GenderSelection() {
  const navigate = useNavigate();
  const {setSelectedGender} = useGender();

  const handleSelectMale = () => {
    setSelectedGender('/3Dmale.gltf');
    navigate('/painmap');
  };

  const handleSelectFemale = () => {
    setSelectedGender('/Zara.gltf');
    navigate('/painmap');
  };

  return (
    <div>
      <h1>Select Your Gender</h1>
      <button onClick={handleSelectMale}>Select Male</button>
      <button onClick={handleSelectFemale}>Select Female</button>
    </div>
  );
}

export default GenderSelection;
