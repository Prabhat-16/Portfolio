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

// Animated code symbols
const CodeSymbol = ({ symbol, delay, x, y }: { symbol: string; delay: number; x: string; y: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0, rotate: -180 }}
    animate={{ 
      opacity: [0, 0.6, 0.3, 0.6, 0],
      scale: [0, 1.2, 0.8, 1, 0],
      rotate: [0, 180, 360],
      y: [0, -20, 0, -10, 0]
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    style={{
      position: 'absolute',
      left: x,
      top: y,
      fontSize: '2rem',
      color: '#6366f1',
      fontFamily: 'monospace',
      fontWeight: 'bold',
      textShadow: '0 0 10px rgba(99, 102, 241, 0.5)',
      zIndex: 5,
    }}
  >
    {symbol}
  </motion.div>
);

// Matrix-style falling characters
const MatrixChar = ({ char, delay, x }: { char: string; delay: number; x: string }) => (
  <motion.div
    initial={{ y: '-10vh', opacity: 0 }}
    animate={{ 
      y: '110vh',
      opacity: [0, 0.8, 0.4, 0]
    }}
    transition={{
      duration: 3 + Math.random() * 2,
      delay,
      repeat: Infinity,
      ease: "linear"
    }}
    style={{
      position: 'absolute',
      left: x,
      fontSize: '1.2rem',
      color: '#8b5cf6',
      fontFamily: 'monospace',
      fontWeight: 'bold',
      textShadow: '0 0 8px rgba(139, 92, 246, 0.6)',
      zIndex: 1,
    }}
  >
    {char}
  </motion.div>
);

const SplashScreen: React.FC = () => {
  const codeSymbols = ['</', '/>', '{}', '[]', '()', '=>', '&&', '||', '++', '--', '!=', '==='];
  const matrixChars = ['0', '1', '{', '}', '<', '>', '/', '*', '+', '-', '=', ';'];

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 25%, #312e81 50%, #1e1b4b 75%, #0f172a 100%)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        flexDirection: 'column',
      }}
    >
      {/* Matrix-style falling characters */}
      {[...Array(15)].map((_, i) => (
        <MatrixChar
          key={i}
          char={matrixChars[Math.floor(Math.random() * matrixChars.length)]}
          delay={Math.random() * 3}
          x={`${Math.random() * 100}%`}
        />
      ))}

      {/* Floating blurred cloud shapes (dark theme colors) */}
      <FloatingCloud style={{ left: '10%', top: '15%', width: 180, height: 80, background: 'rgba(99, 102, 241, 0.15)' }} floatX={40} duration={10} delay={0.1} />
      <FloatingCloud style={{ left: '65%', top: '10%', width: 120, height: 60, background: 'rgba(139, 92, 246, 0.12)' }} floatX={30} floatY={10} duration={12} delay={0.3} />
      <FloatingCloud style={{ left: '50%', top: '70%', width: 160, height: 70, background: 'rgba(236, 72, 153, 0.10)' }} floatX={25} floatY={15} duration={14} delay={0.5} />
      <FloatingCloud style={{ left: '80%', top: '60%', width: 90, height: 40, background: 'rgba(99, 102, 241, 0.08)' }} floatX={20} floatY={8} duration={11} delay={0.7} />
      <FloatingCloud style={{ left: '20%', top: '75%', width: 110, height: 50, background: 'rgba(139, 92, 246, 0.08)' }} floatX={35} floatY={12} duration={13} delay={0.9} />

      {/* Animated code symbols around the text */}
      {codeSymbols.map((symbol, i) => (
        <CodeSymbol
          key={symbol}
          symbol={symbol}
          delay={i * 0.3}
          x={`${15 + (i % 4) * 20}%`}
          y={`${20 + Math.floor(i / 4) * 15}%`}
        />
      ))}

      {/* Glowing orbs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
            rotate: [0, 360],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
          style={{
            position: 'absolute',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${['#6366f1', '#8b5cf6', '#ec4899'][i % 3]} 0%, transparent 70%)`,
            left: `${20 + i * 12}%`,
            top: `${30 + (i % 2) * 40}%`,
            filter: 'blur(2px)',
            zIndex: 3,
          }}
        />
      ))}

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
        {/* Glowing background for text */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            width: '120%',
            height: '120%',
            background: 'radial-gradient(ellipse, rgba(99, 102, 241, 0.2) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(40px)',
            zIndex: -1,
          }}
        />

        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -8, 0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'relative', zIndex: 3, width: '100%' }}
        >
          {/* Individual letter animations */}
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            {['H', 'E', 'L', 'L', 'O', ' ', 'W', 'O', 'R', 'L', 'D'].map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  rotateX: 0,
                  color: ['#6366f1', '#8b5cf6', '#ec4899', '#6366f1']
                }}
                transition={{ 
                  delay: i * 0.1,
                  duration: 0.8,
                  color: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ 
                  scale: 1.2, 
                  rotateY: 360,
                  textShadow: '0 0 20px currentColor'
                }}
                style={{
                  fontFamily: `'Poppins', 'Montserrat', 'Segoe UI', 'Arial', 'sans-serif'`,
                  fontWeight: 700,
                  fontSize: 'clamp(3rem, 8vw, 7rem)',
                  letterSpacing: '0.1em',
                  cursor: 'pointer',
                  textShadow: '0 4px 20px rgba(99, 102, 241, 0.3)',
                  marginRight: letter === ' ' ? '1rem' : '0.1em',
                  display: 'inline-block',
                  transformStyle: 'preserve-3d',
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </Box>

          {/* Animated underline with particles */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: [0, 1, 0.95, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            style={{
              height: 5,
              width: '60%',
              margin: '1rem auto 0',
              background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899)',
              borderRadius: 2,
              transformOrigin: 'left',
              opacity: 0.8,
              boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)',
              position: 'relative',
            }}
          >
            {/* Particles on the underline */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  x: ['0%', '100%', '0%'],
                  scale: [0.5, 1, 0.5],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  position: 'absolute',
                  top: '-2px',
                  width: '6px',
                  height: '6px',
                  background: '#ffffff',
                  borderRadius: '50%',
                  boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              color: '#cbd5e1',
              textAlign: 'center',
              fontWeight: 500,
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              letterSpacing: 1,
              mt: 2,
              opacity: 0.9,
              userSelect: 'none',
              zIndex: 4,
            }}
          >
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Welcome to my portfolio
            </motion.span>
          </Typography>
        </motion.div>

        {/* Typing cursor effect */}
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          style={{
            position: 'absolute',
            right: '-20px',
            top: '50%',
            width: '3px',
            height: '60%',
            background: '#6366f1',
            borderRadius: '2px',
          }}
        />
      </motion.div>
    </Box>
  );
};

export default SplashScreen;