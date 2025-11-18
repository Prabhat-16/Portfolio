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
import ApiIcon from '@mui/icons-material/Api';
import DataObjectIcon from '@mui/icons-material/DataObject';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import CloudOffIcon from '@mui/icons-material/CloudOff';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import CloudDoneOutlinedIcon from '@mui/icons-material/CloudDoneOutlined';
import CloudQueueOutlinedIcon from '@mui/icons-material/CloudQueueOutlined';
import CloudSyncOutlinedIcon from '@mui/icons-material/CloudSyncOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import CloudOffOutlinedIcon from '@mui/icons-material/CloudOffOutlined';
import CloudCircleOutlinedIcon from '@mui/icons-material/CloudCircleOutlined';

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

  // Enhanced tech icons array with cloud icons added to existing ones
  const techIcons = [
    // Original icons with enhanced animations - updated to blue theme with better visibility
    { icon: <CodeIcon />, color: '#60a5fa', size: '2.8rem', speed: 18, delay: 0 },
    { icon: <TerminalIcon />, color: '#818cf8', size: '2.5rem', speed: 20, delay: 1 },
    { icon: <StorageIcon />, color: '#a78bfa', size: '2.6rem', speed: 22, delay: 2 },
    { icon: <SecurityIcon />, color: '#c4b5fd', size: '2.4rem', speed: 21, delay: 3 },
    { icon: <JavascriptIcon />, color: '#60a5fa', size: '2.8rem', speed: 17, delay: 4 },
    { icon: <HtmlIcon />, color: '#818cf8', size: '2.6rem', speed: 23, delay: 5 },
    { icon: <CssIcon />, color: '#a78bfa', size: '2.6rem', speed: 20, delay: 6 },
    { icon: <GitHubIcon />, color: '#c4b5fd', size: '2.5rem', speed: 18, delay: 7 },
    { icon: <ComputerIcon />, color: '#60a5fa', size: '2.6rem', speed: 22, delay: 8 },
    { icon: <DesktopWindowsIcon />, color: '#818cf8', size: '2.5rem', speed: 20, delay: 9 },
    { icon: <DeveloperBoardIcon />, color: '#a78bfa', size: '2.6rem', speed: 19, delay: 10 },
    { icon: <BuildIcon />, color: '#c4b5fd', size: '2.5rem', speed: 21, delay: 11 },
    { icon: <LanguageIcon />, color: '#60a5fa', size: '2.6rem', speed: 20, delay: 12 },
    { icon: <DnsIcon />, color: '#818cf8', size: '2.5rem', speed: 22, delay: 13 },
    { icon: <BugReportIcon />, color: '#a78bfa', size: '2.4rem', speed: 23, delay: 14 },
    
    // Added cloud icons - updated to blue theme with better visibility
    { icon: <CloudIcon />, color: '#60a5fa', size: '3.5rem', speed: 15, delay: 15 },
    { icon: <CloudQueueIcon />, color: '#818cf8', size: '3.2rem', speed: 18, delay: 16 },
    { icon: <CloudDoneIcon />, color: '#a78bfa', size: '3.3rem', speed: 16, delay: 17 },
    { icon: <CloudSyncIcon />, color: '#c4b5fd', size: '3rem', speed: 19, delay: 18 },
    { icon: <CloudUploadIcon />, color: '#60a5fa', size: '2.9rem', speed: 17, delay: 19 },
    { icon: <CloudDownloadIcon />, color: '#818cf8', size: '2.8rem', speed: 20, delay: 20 },
    { icon: <CloudCircleIcon />, color: '#a78bfa', size: '3.2rem', speed: 14, delay: 21 },
    { icon: <CloudDoneOutlinedIcon />, color: '#c4b5fd', size: '2.7rem', speed: 21, delay: 22 },
    { icon: <CloudQueueOutlinedIcon />, color: '#60a5fa', size: '2.9rem', speed: 18, delay: 23 },
    { icon: <CloudSyncOutlinedIcon />, color: '#818cf8', size: '2.6rem', speed: 22, delay: 24 },
    { icon: <CloudUploadOutlinedIcon />, color: '#a78bfa', size: '2.8rem', speed: 19, delay: 25 },
    { icon: <CloudDownloadOutlinedIcon />, color: '#c4b5fd', size: '2.5rem', speed: 23, delay: 26 },
    { icon: <CloudCircleOutlinedIcon />, color: '#60a5fa', size: '3rem', speed: 17, delay: 27 },
    { icon: <ApiIcon />, color: '#818cf8', size: '2.7rem', speed: 18, delay: 28 },
    { icon: <DataObjectIcon />, color: '#a78bfa', size: '2.6rem', speed: 22, delay: 29 },
    { icon: <StorageOutlinedIcon />, color: '#c4b5fd', size: '2.5rem', speed: 24, delay: 30 },
  ];

  // Helper to get a random vertical position
  const getRandomY = () => Math.random() * (window.innerHeight - 60);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated cloud background gradient */}
      <Box
        component={motion.div}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, #1e3a8a 0%, #1e1b4b 25%, #0f172a 50%, #020617 75%, #000000 100%)',
          zIndex: 0,
        }}
        animate={{
          background: [
            'linear-gradient(135deg, #1e3a8a 0%, #1e1b4b 25%, #0f172a 50%, #020617 75%, #000000 100%)',
            'linear-gradient(135deg, #1e1b4b 0%, #0f172a 25%, #020617 50%, #1e3a8a 75%, #1e1b4b 100%)',
            'linear-gradient(135deg, #1e3a8a 0%, #1e1b4b 25%, #0f172a 50%, #020617 75%, #000000 100%)',
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Enhanced floating tech icons with cloud icons added */}
      {techIcons.map((item, index) => {
        const y = getRandomY();
        return (
          <Box
            key={`icon-${index}`}
            component={motion.div}
            sx={{
              position: 'absolute',
              color: item.color,
              opacity: 0.85,
              fontSize: item.size || '2rem',
              zIndex: 1,
              top: y,
              left: 0,
              filter: 'drop-shadow(0 0 20px rgba(96, 165, 250, 0.6))',
            }}
            initial={{ 
              x: -80,
              y: y,
              rotate: 0,
              scale: 0.8,
            }}
            animate={{ 
              x: window.innerWidth + 80,
              y: [y, y - 30, y + 20, y - 15, y],
              rotate: [0, 5, -3, 2, 0],
              scale: [0.8, 1, 0.9, 1.1, 0.8],
            }}
            transition={{
              duration: item.speed || 18 + index * 2,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
              delay: item.delay || index * 1.5,
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
                fontSize: { xs: '2.5rem', sm: '4rem', md: '6rem' },
                fontWeight: 900,
                background: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 50%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 60px rgba(167, 139, 250, 0.5)',
                mb: 3,
                fontFamily: '"Poppins", "Inter", sans-serif',
                letterSpacing: '-0.04em',
                lineHeight: 1.1,
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
                    background: 'linear-gradient(90deg, #60a5fa 0%, #a78bfa 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontSize: { xs: '1.5rem', sm: '2rem', md: '2.8rem' },
                    fontWeight: 800,
                    fontFamily: '"Inter", "Poppins", sans-serif',
                    letterSpacing: '-0.02em',
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
                color: '#e2e8f0',
                maxWidth: '900px',
                mx: 'auto',
                fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.35rem' },
                opacity: 0.95,
                fontFamily: '"Inter", sans-serif',
                fontWeight: 400,
                letterSpacing: '0.01em',
                lineHeight: 1.7,
              }}
            >
              Specializing in PHP, MySQL, Web Development & Cloud Deployments. Building robust, scalable solutions with modern technologies and best practices.
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
                px: 5,
                py: 2,
                borderRadius: 4,
                textTransform: 'none',
                fontSize: { xs: '1.05rem', md: '1.15rem' },
                fontWeight: 700,
                background: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)',
                color: '#ffffff',
                boxShadow: '0 10px 30px rgba(139, 92, 246, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
                border: 'none',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                  transition: 'left 0.5s ease',
                },
                '&:hover': {
                  background: 'linear-gradient(135deg, #a78bfa 0%, #c4b5fd 100%)',
                  transform: 'translateY(-4px) scale(1.05)',
                  boxShadow: '0 15px 40px rgba(139, 92, 246, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.2) inset',
                  transition: 'all 0.3s ease',
                  '&::before': {
                    left: '100%',
                  }
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
                px: 5,
                py: 2,
                borderRadius: 4,
                textTransform: 'none',
                fontSize: { xs: '1.05rem', md: '1.15rem' },
                fontWeight: 700,
                borderWidth: '3px',
                borderColor: '#a78bfa',
                color: '#a78bfa',
                background: 'rgba(167, 139, 250, 0.1)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 0 20px rgba(167, 139, 250, 0.3)',
                '&:hover': {
                  borderColor: '#c4b5fd',
                  color: '#c4b5fd',
                  backgroundColor: 'rgba(167, 139, 250, 0.2)',
                  transform: 'translateY(-4px)',
                  boxShadow: '0 10px 30px rgba(167, 139, 250, 0.5)',
                  transition: 'all 0.3s ease',
                },
              }}
            >
              Get In Touch
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero; 