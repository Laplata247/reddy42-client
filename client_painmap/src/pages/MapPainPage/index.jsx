import React, { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { DecalGeometry } from 'three/addons/geometries/DecalGeometry.js'; //import decal geometry pakage 
import Model from '../../components/model.jsx';
import DrawingOverlay from '../../components/DrawingOverlay';
import { Decal } from '@react-three/drei';


const MapPainPage = () => {

  const [drawingEnabled, setDrawingEnabled] = useState(false);

  const toggleDrawing = () => {
    setDrawingEnabled(!drawingEnabled);
  };

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
          background:'white',
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
        <Model onClick={e => addDecal()} position={[0, 0, 0]}/>
        <OrbitControls enableRotate={true} enablePan={true} enableZoom={true} />
      </Canvas>
      {/* Conditionally render the DrawingOverlay based on drawingEnabled */}
      {drawingEnabled && <DrawingOverlay/>}
    </>
  );
};
export default MapPainPage;