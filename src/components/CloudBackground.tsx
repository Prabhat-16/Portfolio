import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const FloatingCloud = ({ 
  style, 
  floatX = 30, 
  floatY = 0, 
  duration = 8, 
  delay = 0, 
  opacity = 0.18,
  isDarkMode = false
}: { 
  style: React.CSSProperties; 
  floatX?: number; 
  floatY?: number; 
  duration?: number; 
  delay?: number; 
  opacity?: number;
  isDarkMode?: boolean;
}) => (
  <motion.div
    animate={{
      opacity,
      x: [0, floatX, -floatX, 0],
      y: [0, floatY, -floatY, 0],
      scale: [1, 1.1, 0.9, 1],
    }}
    transition={{
      opacity: { duration: 0 },
      x: { duration, repeat: Infinity, ease: 'easeInOut', delay },
      y: { duration: duration * 1.2, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.5 },
      scale: { duration: duration * 0.8, repeat: Infinity, ease: 'easeInOut', delay: delay + 1 },
    }}
    style={{
      position: 'absolute',
      borderRadius: '50%',
      filter: 'blur(32px)',
      background: isDarkMode 
        ? 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 100%)'
        : 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(99, 102, 241, 0.1) 50%, transparent 100%)',
      ...style,
    }}
  />
);

const CloudBackground: React.FC<{ zIndex?: number }> = ({ zIndex = 0 }) => {
  const { isDarkMode } = useTheme();

  return (
    <>
      {/* Main floating clouds */}
      <FloatingCloud 
        style={{ left: '10%', top: '15%', width: 180, height: 80, zIndex }} 
        floatX={40} 
        duration={10} 
        delay={0.1} 
        isDarkMode={isDarkMode}
      />
      <FloatingCloud 
        style={{ left: '65%', top: '10%', width: 120, height: 60, zIndex }} 
        floatX={30} 
        floatY={10} 
        duration={12} 
        delay={0.3}
        isDarkMode={isDarkMode}
      />
      <FloatingCloud 
        style={{ left: '50%', top: '70%', width: 160, height: 70, zIndex }} 
        floatX={25} 
        floatY={15} 
        duration={14} 
        delay={0.5}
        isDarkMode={isDarkMode}
      />
      <FloatingCloud 
        style={{ left: '80%', top: '60%', width: 90, height: 40, zIndex }} 
        floatX={20} 
        floatY={8} 
        duration={11} 
        delay={0.7}
        isDarkMode={isDarkMode}
      />
      <FloatingCloud 
        style={{ left: '20%', top: '75%', width: 110, height: 50, zIndex }} 
        floatX={35} 
        floatY={12} 
        duration={13} 
        delay={0.9}
        isDarkMode={isDarkMode}
      />
      
      {/* Additional smaller particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: ['0vh', '100vh'],
            opacity: [0, 0.3, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `-${Math.random() * 20}%`,
            width: '4px',
            height: '4px',
            background: isDarkMode 
              ? 'rgba(99, 102, 241, 0.6)' 
              : 'rgba(59, 130, 246, 0.6)',
            borderRadius: '50%',
            filter: 'blur(1px)',
            zIndex,
          }}
        />
      ))}
    </>
  );
};

export default CloudBackground; 