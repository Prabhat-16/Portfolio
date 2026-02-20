import React from 'react';
import { motion } from 'framer-motion';
import CloudIcon from '@mui/icons-material/Cloud';
import StorageIcon from '@mui/icons-material/Storage';
import SecurityIcon from '@mui/icons-material/Security';
import CodeIcon from '@mui/icons-material/Code';
import DnsIcon from '@mui/icons-material/Dns';
import RouterIcon from '@mui/icons-material/Router';

const FloatingIcon = ({ 
  icon: Icon,
  style, 
  floatX = 30, 
  floatY = 20, 
  duration = 8, 
  delay = 0, 
  color = '#6366f1'
}: { 
  icon: React.ElementType;
  style: React.CSSProperties; 
  floatX?: number; 
  floatY?: number; 
  duration?: number; 
  delay?: number; 
  color?: string;
}) => (
  <motion.div
    animate={{
      y: [0, floatY, -floatY, 0],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: delay,
    }}
    style={{
      position: 'absolute',
      ...style,
    }}
  >
    <Icon sx={{ fontSize: style.fontSize || 60, color: color, opacity: 0.15 }} />
  </motion.div>
);

const CloudBackground: React.FC<{ zIndex?: number }> = ({ zIndex = 0 }) => {
  return (
    <>
      {/* Floating Tech Icons */}
      <FloatingIcon 
        icon={CloudIcon}
        style={{ left: '10%', top: '15%', fontSize: 120, zIndex }} 
        floatY={30}
        duration={12} 
        delay={0} 
        color="#0ea5e9"
      />
      <FloatingIcon 
        icon={StorageIcon}
        style={{ right: '15%', top: '20%', fontSize: 80, zIndex }} 
        floatY={25}
        duration={15} 
        delay={1}
        color="#8b5cf6" 
      />
      <FloatingIcon 
        icon={SecurityIcon}
        style={{ left: '20%', bottom: '20%', fontSize: 90, zIndex }} 
        floatY={35}
        duration={18} 
        delay={2}
        color="#f59e0b" 
      />
      <FloatingIcon 
        icon={CodeIcon}
        style={{ right: '25%', bottom: '30%', fontSize: 70, zIndex }} 
        floatY={20}
        duration={14} 
        delay={3}
        color="#10b981" 
      />
      <FloatingIcon 
        icon={DnsIcon}
        style={{ left: '50%', top: '10%', fontSize: 60, zIndex }} 
        floatY={15}
        duration={20} 
        delay={4}
        color="#ec4899" 
      />
      
      {/* Network Lines / Data Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight,
            opacity: 0 
          }}
          animate={{
            y: [null, Math.random() * -100],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            width: '2px',
            height: '2px',
            background: '#ffffff',
            boxShadow: '0 0 4px #ffffff',
            borderRadius: '50%',
            zIndex: zIndex,
          }}
        />
      ))}

      {/* Connection Lines (Simulated) */}
       <svg style={{ position: 'absolute', width: '100%', height: '100%', zIndex: zIndex - 1, opacity: 0.1 }}>
        <line x1="15%" y1="20%" x2="50%" y2="15%" stroke="#6366f1" strokeWidth="1" />
        <line x1="50%" y1="15%" x2="85%" y2="25%" stroke="#6366f1" strokeWidth="1" />
        <line x1="20%" y1="80%" x2="50%" y2="15%" stroke="#6366f1" strokeWidth="1" />
      </svg>
    </>
  );
};

export default CloudBackground; 