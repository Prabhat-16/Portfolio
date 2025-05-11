import React, { useEffect, useState } from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import SecurityIcon from '@mui/icons-material/Security';
import JavascriptIcon from '@mui/icons-material/Javascript';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import ComputerIcon from '@mui/icons-material/Computer';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import BuildIcon from '@mui/icons-material/Build';
import LanguageIcon from '@mui/icons-material/Language';
import DnsIcon from '@mui/icons-material/Dns';
import BugReportIcon from '@mui/icons-material/BugReport';

const Hero: React.FC = () => {
  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "DevOps and Cloud Enthusiast"
  ];
  
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Expanded tech icons array
  const techIcons = [
    { icon: <CodeIcon />, color: '#00bcd4', size: '2.5rem', speed: 18 },
    { icon: <TerminalIcon />, color: '#4caf50', size: '2.2rem', speed: 20 },
    { icon: <StorageIcon />, color: '#ff9800', size: '2.3rem', speed: 22 },
    { icon: <CloudIcon />, color: '#2196f3', size: '2.4rem', speed: 19 },
    { icon: <SecurityIcon />, color: '#f44336', size: '2.1rem', speed: 21 },
    { icon: <JavascriptIcon />, color: '#F7DF1E', size: '2.5rem', speed: 17 },
    { icon: <HtmlIcon />, color: '#E34F26', size: '2.3rem', speed: 23 },
    { icon: <CssIcon />, color: '#1572B6', size: '2.3rem', speed: 20 },
    { icon: <GitHubIcon />, color: '#181717', size: '2.2rem', speed: 18 },
    { icon: <CloudQueueIcon />, color: '#00C7B7', size: '2.4rem', speed: 21 },
    { icon: <ComputerIcon />, color: '#2496ED', size: '2.3rem', speed: 22 },
    { icon: <DesktopWindowsIcon />, color: '#0078D6', size: '2.2rem', speed: 20 },
    { icon: <DeveloperBoardIcon />, color: '#FCC624', size: '2.3rem', speed: 19 },
    { icon: <BuildIcon />, color: '#FB7A24', size: '2.2rem', speed: 21 },
    { icon: <LanguageIcon />, color: '#777BB4', size: '2.3rem', speed: 20 },
    { icon: <DnsIcon />, color: '#4479A1', size: '2.2rem', speed: 22 },
    { icon: <BugReportIcon />, color: '#e91e63', size: '2.1rem', speed: 23 },
  ];

  // Helper to get a random vertical position
  const getRandomY = () => Math.random() * (window.innerHeight - 40);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0a1929 0%, #132f4c 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background gradient */}
      <Box
        component={motion.div}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, #0a1929 0%, #132f4c 100%)',
          zIndex: 0,
        }}
        animate={{
          background: [
            'linear-gradient(135deg, #0a1929 0%, #132f4c 100%)',
            'linear-gradient(135deg, #132f4c 0%, #0a1929 100%)',
            'linear-gradient(135deg, #0a1929 0%, #132f4c 100%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Flying tech icons (left to right) */}
      {techIcons.map((item, index) => {
        const y = getRandomY();
        return (
          <Box
            key={`icon-${index}`}
            component={motion.div}
            sx={{
              position: 'absolute',
              color: item.color,
              opacity: 0.3,
              fontSize: item.size || '2rem',
              zIndex: 1,
              top: y,
              left: 0,
            }}
            initial={{ x: -60 }}
            animate={{ x: window.innerWidth + 60 }}
            transition={{
              duration: item.speed || 18 + index * 2,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
              delay: index * 2,
            }}
          >
            {item.icon}
          </Box>
        );
      })}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box
          sx={{
            textAlign: 'center',
            position: 'relative',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography 
              variant="h1" 
              component="h1" 
              gutterBottom
              sx={{ 
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem' },
                fontWeight: 900,
                background: 'linear-gradient(45deg, #00bcd4, #008394)',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 30px rgba(0, 188, 212, 0.3)',
                mb: 3,
              }}
            >
              Hi, I'm Prabhat Mishra
            </Typography>
          </motion.div>

          <Box sx={{ height: '80px', mb: 4, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Typography 
                  variant="h3" 
                  sx={{ 
                    color: 'primary.light',
                    fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                    fontWeight: 'bold',
                  }}
                >
                  I'm a {roles[currentRole]}
                </Typography>
              </motion.div>
            </AnimatePresence>
          </Box>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 6,
                color: 'text.secondary',
                maxWidth: '800px',
                mx: 'auto',
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
              }}
            >
              Specializing in PHP, MySQL, and Web Development. Building robust and scalable solutions
              with modern technologies and best practices.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Button
              component={Link}
              to="projects"
              smooth={true}
              variant="contained"
              size="large"
              sx={{
                mr: 2,
                px: 4,
                py: 1.5,
                borderRadius: 2,
                textTransform: 'none',
                fontSize: { xs: '1rem', md: '1.1rem' },
                background: 'linear-gradient(45deg, #00bcd4 30%, #008394 90%)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #008394 30%, #00bcd4 90%)',
                  transform: 'scale(1.05)',
                  transition: 'transform 0.2s',
                },
              }}
            >
              View Projects
            </Button>
            <Button
              component={Link}
              to="contact"
              smooth={true}
              variant="outlined"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 2,
                textTransform: 'none',
                fontSize: { xs: '1rem', md: '1.1rem' },
                borderColor: 'primary.light',
                color: 'primary.light',
                '&:hover': {
                  borderColor: 'primary.main',
                  background: 'rgba(0,188,212,0.1)',
                  transform: 'scale(1.05)',
                  transition: 'transform 0.2s',
                },
              }}
            >
              Contact Me
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero; 