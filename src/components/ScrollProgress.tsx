import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        zIndex: 1001,
        background: 'rgba(30, 41, 59, 0.8)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <motion.div
        style={{
          scaleX,
          transformOrigin: '0%',
          height: '100%',
          background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899)',
          borderRadius: '0 2px 2px 0',
        }}
      />
    </Box>
  );
};

export default ScrollProgress;