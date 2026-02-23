import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const bootCommands = [
  "[  OK  ] Loading kernel...",
  "[  OK  ] Initializing system modules...",
  "[  OK  ] Connecting to neural network...",
  "[  OK  ] Establishing secure connection...",
  "[  OK  ] Loading user profile: prabhat_mishra",
  "[  OK  ] Rendering portfolio environment...",
  "STARTING PORTFOLIO SERVICE...",
];

const SplashScreen: React.FC = () => {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    if (visibleLines < bootCommands.length) {
      const timer = setTimeout(() => {
        setVisibleLines(prev => prev + 1);
      }, 300 + Math.random() * 400);
      return () => clearTimeout(timer);
    }
  }, [visibleLines]);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        bgcolor: '#030712',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 4
      }}
    >
      <Box sx={{ width: '100%', maxWidth: '600px' }}>
        <Box sx={{ mb: 4 }}>
          <Typography
            sx={{
              color: '#4ade80',
              fontFamily: "'Fira Code', monospace",
              fontSize: { xs: '0.8rem', md: '1rem' },
              lineHeight: 1.8
            }}
          >
            {bootCommands.slice(0, visibleLines).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              >
                {line}
              </motion.div>
            ))}
          </Typography>
        </Box>

        {visibleLines === bootCommands.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h2"
              sx={{
                color: '#f1f5f9',
                fontFamily: "'Fira Code', monospace",
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '3.5rem' },
                letterSpacing: '0.1em',
                mb: 2,
                textAlign: 'center'
              }}
            >
              READY_
            </Typography>
            <motion.div
              animate={{ width: ['0%', '100%'] }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              style={{
                height: '2px',
                background: '#4ade80',
                margin: '0 auto',
                maxWidth: '200px'
              }}
            />
          </motion.div>
        )}

        <Box sx={{ mt: 8, display: 'flex', justifyContent: 'center' }}>
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            style={{
              color: '#94a3b8',
              fontFamily: "'Fira Code', monospace",
              fontSize: '0.8rem'
            }}
          >
            System v2.4.0-stable | prabhat@portfolio_os
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default SplashScreen;
