import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

function Model() {
  const gltf = useLoader(GLTFLoader, '/path/to/your/model.gltf'); // Replace with the correct path to your GLTF model

  const modelRef = useRef();

  return (
    <primitive
      object={gltf.scene}
      ref={modelRef}
      scale={[1, 1, 1]} // Adjust the scale as needed
      position={[0, 0, 0]} // Adjust the position as needed
    />
  );
}

export default Model;
