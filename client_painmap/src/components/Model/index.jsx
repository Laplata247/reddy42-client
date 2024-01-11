import React, { useRef, useState } from 'react';
import { useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import Decals from '../Decals';
import { useGender } from '../contexts';

function Model({decals, setDecals}) {
  
  const {selectedGender} = useGender()
  console.log(selectedGender)
  const gltf = useLoader(GLTFLoader, selectedGender);
  console.log("didn't load")
  let [num, setNum] = useState(0)
  const {camera, mouse} = useThree()

  const handleClick = () => {
    setNum (num+=0.1)
    console.log(mouse.x, "becomes: ", (mouse.x/1.3), mouse.y, "becomes: ", ((mouse.y+1.1)/1.3) )
    setDecals([...decals, {
      'url': 'src/assets/pizza.png',
      'x': mouse.x/1.3,
      'y': (mouse.y+1.1)/1.3,
      'z': 0.1,
      'scale': 0.1
    }])
    console.log(decals)

  }

  const geometry = gltf.scene.children[0].geometry;

  return (
      <mesh onClick={handleClick}
        castShadow receiveShadow position={[0, -1.1, 0]}  geometry={geometry} dispose={null} scale={[1.3, 1.3, 1.3]}>
       <meshStandardMaterial/>
       {decals.map(decal => 
        <Decals url={decal['url']} position={[decal['x'], decal['y'], decal['z']]} scale={decal['scale']}/>)}
        <axesHelper args={[5]} />
      </mesh>

  );
}

export default Model;
