import React from 'react';
import { motion } from 'framer-motion';

const FloatingCloud = ({ style, floatX = 30, floatY = 0, duration = 8, delay = 0, opacity = 0.18 }: { style: React.CSSProperties; floatX?: number; floatY?: number; duration?: number; delay?: number; opacity?: number }) => (
  <motion.div
    animate={{
      opacity,
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

const CloudBackground: React.FC<{ zIndex?: number }> = ({ zIndex = 0 }) => (
  <>
    <FloatingCloud style={{ left: '10%', top: '15%', width: 180, height: 80, background: 'rgba(135,206,235,0.18)', zIndex }} floatX={40} duration={10} delay={0.1} />
    <FloatingCloud style={{ left: '65%', top: '10%', width: 120, height: 60, background: 'rgba(255,255,255,0.18)', zIndex }} floatX={30} floatY={10} duration={12} delay={0.3} />
    <FloatingCloud style={{ left: '50%', top: '70%', width: 160, height: 70, background: 'rgba(135,206,250,0.13)', zIndex }} floatX={25} floatY={15} duration={14} delay={0.5} />
    <FloatingCloud style={{ left: '80%', top: '60%', width: 90, height: 40, background: 'rgba(224,247,250,0.13)', zIndex }} floatX={20} floatY={8} duration={11} delay={0.7} />
    <FloatingCloud style={{ left: '20%', top: '75%', width: 110, height: 50, background: 'rgba(135,206,235,0.10)', zIndex }} floatX={35} floatY={12} duration={13} delay={0.9} />
  </>
);

export default CloudBackground; 