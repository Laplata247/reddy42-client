import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, RandomizedLight, AccumulativeShadows, Environment } from '@react-three/drei';
import { DecalGeometry } from 'three/addons/geometries/DecalGeometry.js'; //import decal geometry pakage 
import html2canvas from 'html2canvas';
import { Model, Stickers, PainForm } from '../../components';

import './style.css';

const MapPainPage = () => {

  const [drawingEnabled, setDrawingEnabled] = useState(false);
  const [decals, setDecals] = useState([])
  const [img, setImg] = useState('');
  const [sticker, setSticker] = useState('src/assets/dot.png')
  const [scaleMod, setScaleMod] = useState(1)
  const [visible, setVisible] = useState(false)

  function togglePopup() {
    takeScreenshot();
    setVisible(!visible);
  };

  const toggleDrawing = () => {
    setDrawingEnabled(!drawingEnabled);
  };

  const takeScreenshot = () => {
    const element = document.getElementById("canvasDiv");
    html2canvas(element).then((canvas) => {
      let image = canvas.toDataURL("image/jpeg");
      setImg(image)
      // console.log(image)
      // const a = document.createElement("a")
      // a.href = image
      // a.download = "screenshot.jpeg"
      // a.click()
    })
  }
  const removeDecal = () => {
    const newDecals = decals.slice(0, -1)
    setDecals(newDecals)

  }

  return (
<div id='painPage'>
  <h1 class='pain_map_title'>Map Pain Page</h1>
  <p></p>
  <div class="center-container">
    <Canvas id='canvasDiv'
      gl={{
        preserveDrawingBuffer: true
      }}
      style={{
        height: '500px',
        width: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      shadows
      camera={{ position: [0, 0, 2] }}>

      <ambientLight intensity={0.5} />
      <spotLight position={[1, 5, -1]} angle={0.45} penumbra={1} />
      <directionalLight
        position={[5, 5, 1]}
        intensity={3}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        />
      <Model decals={decals} setDecals={setDecals} sticker={sticker} scaleMod={scaleMod}/>
      <OrbitControls enableRotate={true} enablePan={true} enableZoom={true} />
    </Canvas>
    <Stickers setSticker={setSticker} setScaleMod={setScaleMod} />
  
      <div id="button-container">
        <button class='butt' onClick={removeDecal}>Undo</button>
        <button class='butt' onClick={togglePopup}>Save image</button>
        {visible ? <PainForm toggle={togglePopup} image={img} /> : null}
          
      </div>
      <section class='diagram'>
        <img src="src/assets/clickIcon.png" alt="click on icon" height={70}/>   
        <img src="src/assets/scaleIcon.png" alt="click on icon" height={80} />
        <img src="src/assets/placeIcon.png" alt="click on icon" height={70}/>
      </section>
  </div>
  </div>
  );
};

export default MapPainPage;
