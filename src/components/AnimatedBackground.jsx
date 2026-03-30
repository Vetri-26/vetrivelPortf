import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let points = [];
    const focalLength = 500;
    const numPoints = 250;

    // Utilize the custom theme palette colors
    const colors = ['#FB2900', '#E00005', '#4F494B', '#e5e5e5', '#3A0303'];

    // Initialize 3D particles
    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: (Math.random() - 0.5) * 3000,
        y: (Math.random() - 0.5) * 3000,
        z: Math.random() * 2000,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 1 + 1 // Add varied speed
      });
    }

    let animationFrameId;

    // Mouse interactive state
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      // Calculate cursor offset relative to center of screen
      targetX = (e.clientX - width / 2) * 0.5; // Multiply by factor for intensity
      targetY = (e.clientY - height / 2) * 0.5;
    };

    const render = () => {
      // Paint the deep dark background
      ctx.fillStyle = '#080B14';
      ctx.fillRect(0, 0, width, height);

      // Smooth interpolation (lerp) towards target mouse coordinates
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      const centerX = width / 2 - currentX;
      const centerY = height / 2 - currentY;

      points.forEach(point => {
        // Move point towards the camera over time
        point.z -= point.speed;
        
        // If the point is past the camera, reset it far into the distance
        if (point.z <= 0) {
          point.x = (Math.random() - 0.5) * 3000;
          point.y = (Math.random() - 0.5) * 3000;
          point.z = 2000;
        }

        // Calculate 2D projection using calculated shifted center
        const scale = focalLength / point.z;
        const x2d = centerX + point.x * scale;
        const y2d = centerY + point.y * scale;

        // Draw if within screen bounds (with some margin for points shifting offscreen nicely)
        if (x2d >= -50 && x2d <= width + 50 && y2d >= -50 && y2d <= height + 50) {
          ctx.beginPath();
          ctx.arc(x2d, y2d, point.size * scale, 0, Math.PI * 2);
          ctx.fillStyle = point.color;
          // Fade in as they come closer to give a fog-like depth effect
          ctx.globalAlpha = Math.max(0, 1 - (point.z / 1800));
          ctx.fill();
        }
      });
      
      ctx.globalAlpha = 1; // Reset alpha
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full z-0 block pointer-events-none"
    />
  );
};

export default AnimatedBackground;
