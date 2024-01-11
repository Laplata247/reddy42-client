import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ScrollControls } from '@react-three/drei';
import { DecalGeometry } from 'three/addons/geometries/DecalGeometry.js'; //import decal geometry pakage 
import html2canvas from 'html2canvas';
import { Model } from '../../components';
import DrawingOverlay from '../../components/DrawingOverlay';
import { Decal } from '@react-three/drei';

import './style.css';

const MapPainPage = () => {

  const [drawingEnabled, setDrawingEnabled] = useState(false);
  const [decals, setDecals] = useState([])
  const [img, setImg] = useState('');

  const toggleDrawing = () => {
    setDrawingEnabled(!drawingEnabled);
  };

  const takeScreenshot = () => {
    const element = document.getElementById("canvasDiv")
    html2canvas(element).then((canvas) => {
      let image = canvas.toDataURL("image/jpeg");
      setImg(image)
      // const a = document.createElement("a")
      // a.href = image
      // a.download = "screenshot.jpeg"
      // a.click()
    })
  }
  const removeDecal = () => {
    const newDecals = decals.slice(0,-1)
    setDecals(newDecals)

  }

  return (
    <>
      <h1>Map Pain Page</h1>

      <button onClick={toggleDrawing}>
        {drawingEnabled ? 'Disable Drawing' : 'Enable Drawing'}
      </button>

        <Canvas id='canvasDiv'
          gl={{
            preserveDrawingBuffer: true // allow showing model on the screenshot
          }}
          style={{
            height: '500px',
            width: '500px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'white',
            border: '2px solid Green'
          }}
          camera={{ position: [0, 0, 2] }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <Model decals={decals} setDecals={setDecals}/>
          <OrbitControls enableRotate={true} enablePan={false} enableZoom={true} />

        </Canvas>

      <button onClick={takeScreenshot}>Save image</button>
      <button onClick={removeDecal}>Undo</button>

      {/* Conditionally render the DrawingOverlay based on drawingEnabled */}
      {drawingEnabled && <DrawingOverlay modelRef={Model} />} {/* Pass the modelRef as a prop */}

      {/* display screenshot, save in db instead when db is finished */}
      <div id="container">
        <img width='500' height='500' src={`${img}`} />:
      </div>

    </>
  );
};

export default MapPainPage;
