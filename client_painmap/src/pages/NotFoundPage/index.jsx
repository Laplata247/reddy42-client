import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as PIXI from 'pixi.js';
import SimplexNoise from 'simplex-noise';

const NotFoundPage = () => {
  const ref = useRef(null);
  const simplex = new SimplexNoise();

  const randomHSL = () => {
    const hue = Math.floor(Math.random() * 360);
    const saturation = 70; // Use a saturation level that ensures colors are vivid but not overwhelming
    const lightness = 50; // Standard lightness for a balanced color
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  useEffect(() => {
    const app = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
      transparent: true,
    });
    ref.current.appendChild(app.view);

    const orbs = [];
    for (let i = 0; i < 20; i++) {
      const color = PIXI.utils.string2hex(randomHSL());
      const orb = new PIXI.Graphics();
      orb.beginFill(color);
      const radius = Math.random() * (window.innerHeight / 10 - 10) + 10;
      orb.drawCircle(0, 0, radius);
      orb.endFill();
      orb.x = Math.random() * app.renderer.width;
      orb.y = Math.random() * app.renderer.height;
      app.stage.addChild(orb);
      orbs.push({ graphics: orb, xSpeed: Math.random() * 4 - 2, ySpeed: Math.random() * 4 - 2 });
    }

    app.ticker.add(() => {
      orbs.forEach(orb => {
        orb.graphics.x += orb.xSpeed;
        orb.graphics.y += orb.ySpeed;

        // Simple boundary collision detection
        if (orb.graphics.x < 0 || orb.graphics.x > app.renderer.width) {
          orb.xSpeed *= -1;
        }
        if (orb.graphics.y < 0 || orb.graphics.y > app.renderer.height) {
          orb.ySpeed *= -1;
        }
      });
    });

    window.addEventListener('resize', () => {
      app.renderer.resize(window.innerWidth, window.innerHeight);
    });

    return () => {
      window.removeEventListener('resize', () => {
        app.renderer.resize(window.innerWidth, window.innerHeight);
      });
      app.destroy(true, true);
    };
  }, []);

  return (
    <div className
="not-found-container" ref={ref}>
<div className="message-container">
<h1>Page Not Found</h1>
<Link to="/">Go to Home</Link>
</div>
</div>
);
};

export default NotFoundPage;