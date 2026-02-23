import React from 'react';
import { Box } from '@mui/material';

const Background: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        bgcolor: '#030712',
        overflow: 'hidden',
      }}
    >
      {/* Starfield Video - Tinted Green for "Green Dot" effect */}
      <Box
        component="video"
        autoPlay
        muted
        loop
        playsInline
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.5,
          filter: 'hue-rotate(85deg) brightness(0.6) contrast(1.2) saturate(1.5)',
        }}
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-starfield-in-deep-space-34571-large.mp4" type="video/mp4" />
      </Box>

      {/* Green Nebula Glow Overlay (Top-Left) */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 10% 20%, rgba(16, 185, 129, 0.25) 0%, transparent 60%)',
          zIndex: 1,
        }}
      />

      {/* Sharp Grid Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(16, 185, 129, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          zIndex: 2,
          maskImage: 'radial-gradient(circle at 10% 20%, #000 80%, transparent 100%)',
          opacity: 0.8
        }}
      />
      
      {/* Sharp Green Dot Particles Layer with Glow */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          opacity: 0.5,
          backgroundImage: `
            radial-gradient(1px 1px at 10% 10%, #10b981 100%, transparent),
            radial-gradient(1.5px 1.5px at 20% 35%, rgba(16, 185, 129, 0.8) 0%, transparent 100%),
            radial-gradient(1px 1px at 30% 60%, #4ade80 100%, transparent),
            radial-gradient(2px 2px at 45% 20%, rgba(16, 185, 129, 0.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 55% 80%, #10b981 100%, transparent),
            radial-gradient(1.2px 1.2px at 70% 40%, rgba(16, 185, 129, 0.7) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 85% 15%, #4ade80 0%, transparent 100%),
            radial-gradient(1px 1px at 92% 70%, #10b981 100%, transparent),
            radial-gradient(2px 2px at 15% 85%, rgba(16, 185, 129, 0.3) 0%, transparent 100%),
            radial-gradient(1px 1px at 40% 90%, #4ade80 100%, transparent),
            radial-gradient(1.2px 1.2px at 65% 10%, #10b981 100%, transparent),
            radial-gradient(1.5px 1.5px at 80% 95%, rgba(16, 185, 129, 0.5) 0%, transparent 100%)
          `,
          backgroundSize: '33% 33%', // More frequent dots
          backgroundRepeat: 'repeat',
          filter: 'drop-shadow(0 0 2px rgba(16, 185, 129, 0.3))', // Add a global soft glow to dots
        }}
      />

      {/* Subtle depth overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          bgcolor: 'rgba(3, 7, 18, 0.1)',
          zIndex: 4,
        }}
      />
    </Box>
  );
};

export default Background;
