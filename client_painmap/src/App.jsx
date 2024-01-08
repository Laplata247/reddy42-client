import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Box from "./components/Box.jsx";
import './assets/box.css';


function App() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} castShadow />
      <Box />
      <OrbitControls />
    </Canvas>
  );
}

export default App;

