import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import Decals from './Decals';

function Model() {
  const gltf = useLoader(GLTFLoader, '/3Dmale.gltf');

  // const modelRef = useRef();
  const geometry = gltf.scene.children[0].geometry;

  return (
      <mesh castShadow receiveShadow geometry={geometry} dispose={null} position={[0, 0, 0]} scale={[2, 2, 2]}>
       <meshStandardMaterial/>
       <Decals url={'src/assets/firstDecal.png'} position={[0, 0.5, 0.3]} scale={1}/>
       <Decals url={'src/assets/firstDecal.png'} position={[-0.2, 1, 0.3]} scale={0.1}/>
      </mesh>

  );
}

export default Model;
