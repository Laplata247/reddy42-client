import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import html2canvas from 'html2canvas';
import Model from '../../components/model.jsx';
import DrawingOverlay from '../../components/DrawingOverlay';
import './style.css';

const MapPainPage = () => {
  const [drawingEnabled, setDrawingEnabled] = useState(false);

  const toggleDrawing = () => {
    setDrawingEnabled(!drawingEnabled);
  };


  const takeScreenshot = () => {
    const element = document.getElementById("canvasDiv")
    html2canvas(element).then((canvas) => {
      let image = canvas.toDataURL("image/jpeg");
      const a = document.createElement("a")
      a.href = image
      a.download = "screenshot.jpeg"
      a.click()
    })
  }

  return (
    <>
      <h1>Map Pain Page</h1>

      <button onClick={toggleDrawing}>
        {drawingEnabled ? 'Disable Drawing' : 'Enable Drawing'}
      </button>

      <div id='canvasDiv'>
        <Canvas
          gl={{
            preserveDrawingBuffer: true // allow showing model on the screenshot
          }}
          camera={{
            position: [0, 2, 8], // Camera position
            fov: 45,
            near: 0.1,
            far: 100,
          }}
          shadowMap={true} // Re-enable shadow mapping
          style={{
            height: '60vh',
            width: '70vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* skin colour */}
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={1}
            castShadow // Enable shadow casting
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <Model />

          <OrbitControls />
        </Canvas>
      </div>


      <button onClick={takeScreenshot}>Save image</button>

      {/* Conditionally render the DrawingOverlay based on drawingEnabled */}
      {drawingEnabled && <DrawingOverlay modelRef={Model} />} {/* Pass the modelRef as a prop */}
    </>
  );
};

export default MapPainPage;
