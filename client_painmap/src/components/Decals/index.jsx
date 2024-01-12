import React from 'react'
import { Decal, useTexture} from '@react-three/drei'

function Decals({url, position, scale, rotation}) {
  const pain = useTexture(url)
  return (
    <Decal position={position} scale={scale} rotation={rotation}>
      <meshPhysicalMaterial
        transparent
        polygonOffset={true}
        map={pain}
        map-anisotropy={100}
        polygonOffsetFactor={-30}
        polygonOffsetUnits={0}
        roughness={1}
        clearcoat={0}
        metalness={0}
        toneMapped={false}
    />
    </Decal>
  )
}

export default Decals