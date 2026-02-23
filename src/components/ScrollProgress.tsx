import React from 'react';
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
        height: '3px',
        zIndex: 1001,
        bgcolor: '#030712',
      }}
    >
      <motion.div
        style={{
          scaleX,
          transformOrigin: '0%',
          height: '100%',
          background: '#4ade80',
          boxShadow: '0 0 10px rgba(74, 222, 128, 0.5)',
        }}
      />
    </Box>
  );
};

export default ScrollProgress;