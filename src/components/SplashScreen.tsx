import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

// Floating cloud shape with continuous animation, always visible
const FloatingCloud = ({ style, floatX = 30, floatY = 0, duration = 8, delay = 0 }: { style: React.CSSProperties; floatX?: number; floatY?: number; duration?: number; delay?: number }) => (
  <motion.div
    animate={{
      opacity: 0.5,
      x: [0, floatX, -floatX, 0],
      y: [0, floatY, -floatY, 0],
    }}
    transition={{
      opacity: { duration: 0 },
      x: { duration, repeat: Infinity, ease: 'easeInOut', delay },
      y: { duration: duration * 1.2, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.5 },
    }}
    style={{
      position: 'absolute',
      borderRadius: '50%',
      filter: 'blur(32px)',
      ...style,
    }}
  />
);

const SplashScreen: React.FC = () => {
  // Light theme palette
  const lightSubText = '#4682B4';
  const gradient = 'linear-gradient(135deg, #e0f7fa 0%, #ffffff 100%)';

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        bgcolor: gradient,
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        flexDirection: 'column',
      }}
    >
      {/* Floating blurred cloud shapes (lighter colors) */}
      <FloatingCloud style={{ left: '10%', top: '15%', width: 180, height: 80, background: 'rgba(135,206,235,0.18)' }} floatX={40} duration={10} delay={0.1} />
      <FloatingCloud style={{ left: '65%', top: '10%', width: 120, height: 60, background: 'rgba(255,255,255,0.18)' }} floatX={30} floatY={10} duration={12} delay={0.3} />
      <FloatingCloud style={{ left: '50%', top: '70%', width: 160, height: 70, background: 'rgba(135,206,250,0.13)' }} floatX={25} floatY={15} duration={14} delay={0.5} />
      <FloatingCloud style={{ left: '80%', top: '60%', width: 90, height: 40, background: 'rgba(224,247,250,0.13)' }} floatX={20} floatY={8} duration={11} delay={0.7} />
      <FloatingCloud style={{ left: '20%', top: '75%', width: 110, height: 50, background: 'rgba(135,206,235,0.10)' }} floatX={35} floatY={12} duration={13} delay={0.9} />

      {/* Large, spaced HELLO WORLD text with gradient and animated underline, centered */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.2 }}
        style={{
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -8, 0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'relative', zIndex: 3, width: '100%' }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: `'Poppins', 'Montserrat', 'Segoe UI', 'Arial', 'sans-serif'`,
              background: 'linear-gradient(90deg, #5bb6e6 10%, #87CEEB 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 400,
              textAlign: 'center',
              letterSpacing: { xs: '0.2em', md: '0.35em' },
              fontSize: { xs: '3rem', sm: '4rem', md: '6rem', lg: '7rem' },
              mb: 1.5,
              userSelect: 'none',
              textShadow: '0 2px 12px #87ceeb33',
              whiteSpace: 'nowrap',
              lineHeight: 1.1,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: { xs: '100%', md: '100%' },
              position: 'relative',
              transition: 'font-size 0.3s, letter-spacing 0.3s',
            }}
          >
            HELLO WORLD
          </Typography>
          {/* Animated underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: [0, 1, 0.95, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            style={{
              height: 5,
              width: '60%',
              margin: '0 auto',
              background: 'linear-gradient(90deg, #5bb6e6 10%, #87CEEB 90%)',
              borderRadius: 2,
              transformOrigin: 'left',
              marginTop: -18,
              marginBottom: 10,
              opacity: 0.6,
            }}
          />
        </motion.div>
        <Typography
          variant="subtitle1"
          sx={{
            color: lightSubText,
            textAlign: 'center',
            fontWeight: 400,
            fontSize: { xs: '1.1rem', md: '1.25rem' },
            letterSpacing: 1,
            mt: 1,
            opacity: 0.85,
            userSelect: 'none',
            zIndex: 4,
          }}
        >
          Welcome to my portfolio
        </Typography>
      </motion.div>
    </Box>
  );
};

export default SplashScreen; 