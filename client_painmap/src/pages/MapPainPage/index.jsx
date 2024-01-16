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
<>
      <h1>Map Pain Page</h1>


      <div class="center-container">
      
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
            // background: 'white',
            // border: '2px solid Green'
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
          <Model decals={decals} setDecals={setDecals} sticker={sticker} scaleMod={scaleMod}/>
        {/* <color attach="background" args={["lightpink"]} /> */}
          {/* <RandomizedLight amount={8} radius={10} ambient={0.5} position={[2.5, 5, -5]} bias={0.001} /> */}
          <OrbitControls enableRotate={true} enablePan={true} enableZoom={true} />
        </Canvas>

        <button onClick={togglePopup}>Save image</button>
        {visible ? <PainForm toggle={togglePopup} image={img} /> : null}
        
        <Stickers setSticker={setSticker} setScaleMod={setScaleMod} />
        <button onClick={removeDecal}>Undo</button>
      </div>
   
</>
  );
};

export default MapPainPage;
