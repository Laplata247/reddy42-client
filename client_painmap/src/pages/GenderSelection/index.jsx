import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Model } from '../../components/Model';
import './styles.css';
import { useGender } from '../../contexts';



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
    <div role="selector"className='select-gender'>
      <h1>Choose Sex</h1>
      <button role='butt1' className='gender-btn' onClick={handleSelectMale}>Select Male</button>
      <button role='butt2' className='gender-btn' onClick={handleSelectFemale}>Select Female</button>
    </div>
  );
}

export default GenderSelection;
