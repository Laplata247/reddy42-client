import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const DrawingOverlay = ({ cameraRef, sceneRef }) => { // Pass the cameraRef and sceneRef as props
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  useEffect(() => {
    console.log("hit")
    const canvas = canvasRef.current;
    console.log("canvas: ", canvas)
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.strokeStyle = 'red'; // Customize drawing color here
      ctx.lineWidth = 2; // Customize line width here
    }
  }, []);

  const isWithinCanvas = (x, y) => {
    const canvas = canvasRef.current;
    if (!canvas) return false;
    return x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height;
  };
  const startDrawing = (e) => {
    if (isWithinCanvas(e.nativeEvent.offsetX, e.nativeEvent.offsetY)) {
      setDrawing(true);
      mouse.x = (e.nativeEvent.offsetX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.nativeEvent.offsetY / window.innerHeight) * 2 + 1;

      // Update the raycaster with the current mouse position
      raycaster.setFromCamera(mouse, cameraRef.current); // Use the camera from props

      // Perform the raycast
      const intersects = raycaster.intersectObject(sceneRef.current, true);

      if (intersects.length > 0) {
        // Get the intersection point on the 3D model
        const intersectionPoint = intersects[0].point;

        // Here, you can implement your drawing logic using intersectionPoint
        // For example, you can apply a texture at the intersection point.
      }
    }
  };
  const draw = (e) => {
    if (drawing) {
      // Implement your drawing logic here
      // You can use e.nativeEvent.offsetX and e.nativeEvent.offsetY
      // to get the current mouse position and draw on the canvas.
    }
  };
  const endDrawing = () => {
    // Implement your logic to end the drawing here
    // This function should be called when drawing is completed
    setDrawing(false);
  };
  return (
    <canvas
      ref={canvasRef}
      width={500}
      height={500}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'auto',
      }}
      onMouseDown={startDrawing}
      onMouseUp={endDrawing}
      onMouseMove={draw}
      onTouchStart={startDrawing}
      onTouchEnd={endDrawing}
      onTouchMove={draw}
    />
  );
};
export default DrawingOverlay;
