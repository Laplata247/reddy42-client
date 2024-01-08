// Box.jsx
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function Box() {
  const meshRef = useRef();
  useFrame(() => {
    meshRef.current.rotation.x += 0.005;
    meshRef.current.rotation.y += 0.005;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}

export default Box;
