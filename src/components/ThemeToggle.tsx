import React from 'react';
import { IconButton, Tooltip, Box } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 20,
        right: 20,
        zIndex: 1000,
      }}
    >
      <Tooltip 
        title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        placement="left"
      >
        <Box
          sx={{
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '-4px',
              left: '-4px',
              right: '-4px',
              bottom: '-4px',
              background: isDarkMode 
                ? 'linear-gradient(135deg, #6366f1, #8b5cf6)'
                : 'linear-gradient(135deg, #3b82f6, #6366f1)',
              borderRadius: '20px',
              opacity: 0.3,
              filter: 'blur(8px)',
              zIndex: -1,
            },
          }}
        >
          <IconButton
            onClick={toggleTheme}
            component={motion.button}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            sx={{
              width: 56,
              height: 56,
              backgroundColor: isDarkMode 
                ? 'rgba(30, 41, 59, 0.9)' 
                : 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(20px)',
              border: isDarkMode 
                ? '1px solid rgba(99, 102, 241, 0.3)' 
                : '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '16px',
              boxShadow: isDarkMode 
                ? '0 8px 32px rgba(99, 102, 241, 0.2)' 
                : '0 8px 32px rgba(59, 130, 246, 0.2)',
              color: isDarkMode ? '#6366f1' : '#3b82f6',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                backgroundColor: isDarkMode 
                  ? 'rgba(30, 41, 59, 0.95)' 
                  : 'rgba(255, 255, 255, 0.95)',
                transform: 'translateY(-2px)',
                boxShadow: isDarkMode 
                  ? '0 12px 40px rgba(99, 102, 241, 0.3)' 
                  : '0 12px 40px rgba(59, 130, 246, 0.3)',
                borderColor: isDarkMode 
                  ? 'rgba(99, 102, 241, 0.5)' 
                  : 'rgba(59, 130, 246, 0.5)',
              },
            }}
          >
            <motion.div
              animate={{ rotate: isDarkMode ? 0 : 180 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {isDarkMode ? (
                <Brightness7 sx={{ fontSize: '1.5rem' }} />
              ) : (
                <Brightness4 sx={{ fontSize: '1.5rem' }} />
              )}
            </motion.div>
          </IconButton>
        </Box>
      </Tooltip>
    </motion.div>
  );
};

export default ThemeToggle; 