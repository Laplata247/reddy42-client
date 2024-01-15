import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { DecalGeometry } from 'three/addons/geometries/DecalGeometry.js'; //import decal geometry pakage
import html2canvas from 'html2canvas';
import { Model } from '../../components';
import DrawingOverlay from '../../components/DrawingOverlay';
import { Decal } from '@react-three/drei';
import './style.css';
const MapPainPage = () => {
  const [drawingEnabled, setDrawingEnabled] = useState(false);
  const [img, setImg] = useState('');
  const toggleDrawing = () => {
    setDrawingEnabled(!drawingEnabled);
  };
  const addDecal = () => {
    console.log("hit")
  }
  // const addDecal = () => {
  //   console.log("hit")
  //   const raycaster = new THREE.Raycaster() //defines raycaster
  //   const pos = {x: 0, y: 0} //defines position
  //   raycaster.setFromCamera(pos, camera) //relates raycaster to position and camera
  //   const hits = raycaster.intersectObjects(0) //hits is any click that interacts with the object not sur eif needed
  //   if (!hits.length){
  //     return
  //   }
  //   const position = hits[0].point.clone()
  //   const eye = position.clone()
  //   eye.add(hits[0].face.normal)
  //   const rotation = new THREE.Matrix4()
  //   rotation.lookAt(eye, position, THREE.Object3D.DEFAULT_UP)
  //   const euler = new THREE.Euler()
  //   euler.setFromRotationMatrix(rotation)
  //   const decalGeometry = new DecalGeometry(
  //     hits[0].object, hits[0].point, euler, new THREE.Vector3(1, 1, 1));
  //   const decalMaterial = new THREE.MeshStandardMaterial({
  //     color: 0xFFFFFF,
  //     depthTest: true,
  //     depthWrite: false
  //   })
  //   const decal = new THREE.Mesh(decalGeometry, decalMaterial)
  //   decal.receiveShadow = true
  //   screen.add(decal)
  // }
  const takeScreenshot = () => {
    const element = document.getElementById("canvasDiv")
    html2canvas(element).then((canvas) => {
      let image = canvas.toDataURL("image/jpeg");
      setImg(image)
      console.log(image)
      // const a = document.createElement("a")
      // a.href = image
      // a.download = "screenshot.jpeg"
      // a.click()
    })
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
      <button onClick={takeScreenshot}>Save image</button>
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