import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const CloudBackground: React.FC = () => {
  const clouds = [
    { id: 1, size: 120, top: '10%', left: '5%', delay: 0, duration: 25 },
    { id: 2, size: 80, top: '25%', left: '70%', delay: 5, duration: 30 },
    { id: 3, size: 100, top: '60%', left: '15%', delay: 10, duration: 28 },
    { id: 4, size: 60, top: '80%', left: '60%', delay: 15, duration: 35 },
    { id: 5, size: 90, top: '40%', left: '80%', delay: 20, duration: 32 },
  ];

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1,
        overflow: 'hidden',
      }}
    >
      {clouds.map((cloud) => (
        <motion.div
          key={cloud.id}
          style={{
            position: 'absolute',
            width: cloud.size,
            height: cloud.size * 0.6,
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '50px',
            top: cloud.top,
            left: cloud.left,
          }}
          animate={{
            x: [0, 100, 200, 100, 0],
            y: [0, -20, 0, 20, 0],
            opacity: [0.3, 0.6, 0.8, 0.6, 0.3],
          }}
          transition={{
            duration: cloud.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: cloud.delay,
          }}
        />
      ))}
      
      {/* Additional smaller cloud particles */}
      {Array.from({ length: 8 }).map((_, index) => (
        <motion.div
          key={`particle-${index}`}
          style={{
            position: 'absolute',
            width: 20 + Math.random() * 30,
            height: 15 + Math.random() * 20,
            background: 'rgba(255, 255, 255, 0.6)',
            borderRadius: '20px',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, 50, 100, 50, 0],
            y: [0, -10, 0, 10, 0],
            opacity: [0.2, 0.5, 0.7, 0.5, 0.2],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 10,
          }}
        />
      ))}
    </Box>
  );
};

export default CloudBackground; 