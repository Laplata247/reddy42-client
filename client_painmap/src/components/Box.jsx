import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

function Box() {
  const meshRef = useRef();
  const [position, setPosition] = useState([0, 0, 0]);

  useFrame(() => {
    // If you want to continuously animate or change the position, you can do it here
  });

  const handleClick = () => {
    // Change position on click. For example, move up along the y-axis
    setPosition((prevPosition) => [prevPosition[0], prevPosition[1] + 0.2, prevPosition[2]]);
  };

  return (
    <mesh ref={meshRef} position={position} onClick={handleClick}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="pink" />
    </mesh>
  );
}

export default Box;
