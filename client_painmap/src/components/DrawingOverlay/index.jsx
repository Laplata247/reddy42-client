import React, { useRef, useState, useEffect } from 'react';

const DrawingOverlay = () => {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [context, setContext] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.strokeStyle = 'red'; // Customize drawing color here
      ctx.lineWidth = 2; // Customize line width here
      setContext(ctx);
    }
  }, []);

  const isWithinCanvas = (x, y) => {
    const canvas = canvasRef.current;
    if (!canvas) return false;

    return x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height;
  };

  const startDrawing = (e) => {
    if (context && isWithinCanvas(e.nativeEvent.offsetX, e.nativeEvent.offsetY)) {
      console.log('Start drawing');
      setDrawing(true);
      context.beginPath();
      context.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    }
  };

  const draw = (e) => {
    if (drawing && context && isWithinCanvas(e.nativeEvent.offsetX, e.nativeEvent.offsetY)) {
      console.log('Drawing');
      context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      context.stroke();
    }
  };

  const endDrawing = () => {
    if (context) {
      console.log('End drawing');
      setDrawing(false);
      context.closePath();
    }
  };

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
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
