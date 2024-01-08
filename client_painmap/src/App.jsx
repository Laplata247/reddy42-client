import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './App.css'; // Ensure the CSS path is correct
import Model from './components/model.jsx'; // Import the Model component

function App() {
  return (
    <Canvas
      camera={{
        position: [0, 2, 8],
        fov: 45,
        near: 0.1,
        far: 100,
      }}
      shadowMap={true} // Enable shadow mapping by setting it to true
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <Model />

      <OrbitControls />
    </Canvas>
  );
}

export default App;
