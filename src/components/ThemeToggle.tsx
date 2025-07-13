import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Tooltip title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
      <IconButton
        onClick={toggleTheme}
        sx={{
          position: 'fixed',
          top: 20,
          right: 20,
          zIndex: 1000,
          backgroundColor: isDarkMode ? 'rgba(19, 47, 76, 0.9)' : 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          border: isDarkMode 
            ? '1px solid rgba(0, 188, 212, 0.3)' 
            : '1px solid rgba(135, 206, 235, 0.3)',
          boxShadow: isDarkMode 
            ? '0 4px 15px rgba(0, 188, 212, 0.2)' 
            : '0 4px 15px rgba(135, 206, 235, 0.2)',
          color: isDarkMode ? '#00bcd4' : '#4682B4',
          '&:hover': {
            backgroundColor: isDarkMode ? 'rgba(19, 47, 76, 0.95)' : 'rgba(255, 255, 255, 0.95)',
            transform: 'scale(1.1)',
            boxShadow: isDarkMode 
              ? '0 6px 20px rgba(0, 188, 212, 0.3)' 
              : '0 6px 20px rgba(135, 206, 235, 0.3)',
          },
          transition: 'all 0.3s ease',
        }}
      >
        {isDarkMode ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle; 