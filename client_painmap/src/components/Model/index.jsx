import React, { useRef, useState } from 'react';
import { useLoader, useThree, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { Vector2, Raycaster, Vector3, Euler, Matrix4} from 'three';
import Decals from '../Decals';
import { useGender } from '../contexts';

function Model({decals, setDecals}) {
  
  const {selectedGender} = useGender()
  console.log(selectedGender)
  const gltf = useLoader(GLTFLoader, selectedGender);
  console.log("didn't load")
  let [num, setNum] = useState(0)
  const {camera, mouse} = useThree()
  const modelRef = useRef();

  const raycaster = new Raycaster();
  const intersectionPoint = new Vector3();
  const perpendicularVector = new Vector3();
  const euler = new Euler()

  useFrame(()=>{
    // console.log('x axis: ', mouse.x)
    // console.log('y axis: ', mouse.y)

  })
  


  const handleClick = () => {
    raycaster.setFromCamera(new Vector2(mouse.x, mouse.y), camera);
    const intersects = raycaster.intersectObject(modelRef.current);

    if (intersects.length > 0) {
      intersectionPoint.copy(intersects[0].point);
      intersects[0].face.normal.applyNormalMatrix(intersects[0].object.matrixWorld);
      perpendicularVector.copy(intersects[0].face.normal);

      const rotationMatrix = new Matrix4().lookAt(new Vector3(), perpendicularVector, new Vector3(0, 1, 0));

      euler.setFromRotationMatrix(rotationMatrix);
      const rotationX = euler.x;
      const rotationY = euler.y;
      const rotationZ = euler.z;
      console.log(intersectionPoint)
      console.log(mouse.x, mouse.y)

    setNum (num+=0.1)
    setDecals([...decals, {
      'url': 'src/assets/pizza.png',
      'x': intersectionPoint['x'],
      'y': intersectionPoint['y']*1.3,
      'z': intersectionPoint['z'],
      'scale': 0.15,
      'rx': rotationX,
      'ry':rotationY,
      'rz':rotationZ,
    }])

  }}

  const geometry = gltf.scene.children[0].geometry;

  return (
      <mesh onClick={handleClick} ref={modelRef}
        castShadow receiveShadow position={[0, -1.1, 0]}  geometry={geometry} dispose={null} scale={[1.3, 1.3, 1.3]}>
       <meshStandardMaterial/>
       {decals.map(decal => 
        <Decals 
          url={decal['url']} 
          position={[decal['x'], decal['y'], decal['z']]} 
          scale={decal['scale']} 
          rotation={[decal['rx'], decal['ry'], decal['rz']]}/>)}
        <axesHelper args={[5]} />
        <gridHelper />
      </mesh>

  );
 }

export default Model;
