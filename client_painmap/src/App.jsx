// App.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import Box from "./components/Box.jsx";
// Adjust the path as necessary

function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box />
    </Canvas>
  );
}

export default App;
