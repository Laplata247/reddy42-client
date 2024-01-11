import React from 'react'
import { Decal, useTexture} from '@react-three/drei'

function Decals({url, position, scale}) {
  const pain = useTexture(url)
  return (
    <Decal position={position} scale={scale}>
      <meshPhysicalMaterial
        transparent
        polygonOffset
        map={pain}
        polygonOffsetFactor={-10}
        roughness={1}
        clearcoat={0.5}
        metalness={0.75}
        toneMapped={false}
    />
    </Decal>
  )
}

export default Decals