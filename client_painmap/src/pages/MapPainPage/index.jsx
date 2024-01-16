import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, RandomizedLight, AccumulativeShadows, Environment } from '@react-three/drei';
import { DecalGeometry } from 'three/addons/geometries/DecalGeometry.js'; // Import decal geometry package
import html2canvas from 'html2canvas';
import { Model, Stickers, PainForm } from '../../components';

import './style.css';

const MapPainPage = () => {
  const [drawingEnabled, setDrawingEnabled] = useState(false);
  const [decals, setDecals] = useState([]);
  const [img, setImg] = useState('');
  const [sticker, setSticker] = useState('src/assets/dot.png');
  const [scaleMod, setScaleMod] = useState(1);
  const [visible, setVisible] = useState(false);

  const canvasRef = useRef(null);

  function togglePopup() {
    takeScreenshot();
    setVisible(!visible);
  }

  const toggleDrawing = () => {
    setDrawingEnabled(!drawingEnabled);
  };

  const takeScreenshot = () => {
    const element = canvasRef.current;
    if (!element) return;

    html2canvas(element).then((canvas) => {
      let image = canvas.toDataURL('image/jpeg');
      setImg(image);
    });
  };

  const removeDecal = () => {
    const newDecals = decals.slice(0, -1);
    setDecals(newDecals);
  };

  return (
    <>
      <h1>Map Pain Page</h1>

      <div className="center-container">
        <Canvas
          ref={canvasRef}
          gl={{
            preserveDrawingBuffer: true, // allow showing model on the screenshot
          }}
          style={{
            height: '500px',
            width: '500px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          shadows
          camera={{ position: [0, 0, 2] }}
        >
          <ambientLight intensity={0.5} />
          <spotLight position={[1, 5, -1]} angle={0.45} penumbra={1} />
          <directionalLight
            position={[5, 5, 1]}
            intensity={3}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <Model decals={decals} setDecals={setDecals} sticker={sticker} scaleMod={scaleMod} />
          <OrbitControls enableRotate={true} enablePan={true} enableZoom={true} />
        </Canvas>
        <div id="button-container">
          <button onClick={togglePopup}>Save image</button>
          <button onClick={removeDecal}>Undo</button>
        </div>

        {visible ? <PainForm toggle={togglePopup} image={img} /> : null}

        <Stickers setSticker={setSticker} setScaleMod={setScaleMod} />
      </div>
    </>
  );
};

export default MapPainPage;
