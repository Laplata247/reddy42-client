import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './App.css'; // Ensure the CSS path is correct
import Model from './components/model.jsx'; // Import the Model component

function App() {
  return (
    <Canvas
      camera={{
        position: [0, 2, 8], // Adjust camera position as needed
        fov: 45, // Field of view
        near: 0.1, // Near clipping plane
        far: 100, // Far clipping plane
      }}
      shadowmap // Enable shadow mapping
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
        position={[5, 5, 5]} // Adjust the light's position
        intensity={1} // Light intensity
        castShadow // Enable shadow casting
        shadow-mapSize-width={1024} // Shadow map size (width)
        shadow-mapSize-height={1024} // Shadow map size (height)
      />
      <Model /> {/* Use the Model component to render your GLB model */}
      <OrbitControls />
    </Canvas>
  );
}

export default App;
