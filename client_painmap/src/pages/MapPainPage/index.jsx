import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from '../../components/model.jsx';
import DrawingOverlay from '../../components/DrawingOverlay';

const MapPainPage = () => {
  const [drawingEnabled, setDrawingEnabled] = useState(false);

  const toggleDrawing = () => {
    setDrawingEnabled(!drawingEnabled);
  };

  return (
    <>
      <h1>Map Pain Page</h1>

      <button onClick={toggleDrawing}>
        {drawingEnabled ? 'Disable Drawing' : 'Enable Drawing'}
      </button>

      <Canvas
        style={{
          height: '500px',
          width: '500px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background:'white'
        }}
        camera={{ position: [0, 0, 5] }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Model position={[0, 0, 0]} />
        <OrbitControls enableRotate={true} enablePan={true} enableZoom={true} />
      </Canvas>

      {/* Conditionally render the DrawingOverlay based on drawingEnabled */}
      {drawingEnabled && <DrawingOverlay />}
    </>
  );
};

export default MapPainPage;
