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
    // Original icons with enhanced animations - updated to blue theme
    { icon: <CodeIcon />, color: '#3b82f6', size: '2.5rem', speed: 18, delay: 0 },
    { icon: <TerminalIcon />, color: '#6366f1', size: '2.2rem', speed: 20, delay: 1 },
    { icon: <StorageIcon />, color: '#818cf8', size: '2.3rem', speed: 22, delay: 2 },
    { icon: <SecurityIcon />, color: '#a5b4fc', size: '2.1rem', speed: 21, delay: 3 },
    { icon: <JavascriptIcon />, color: '#3b82f6', size: '2.5rem', speed: 17, delay: 4 },
    { icon: <HtmlIcon />, color: '#6366f1', size: '2.3rem', speed: 23, delay: 5 },
    { icon: <CssIcon />, color: '#818cf8', size: '2.3rem', speed: 20, delay: 6 },
    { icon: <GitHubIcon />, color: '#a5b4fc', size: '2.2rem', speed: 18, delay: 7 },
    { icon: <ComputerIcon />, color: '#3b82f6', size: '2.3rem', speed: 22, delay: 8 },
    { icon: <DesktopWindowsIcon />, color: '#6366f1', size: '2.2rem', speed: 20, delay: 9 },
    { icon: <DeveloperBoardIcon />, color: '#818cf8', size: '2.3rem', speed: 19, delay: 10 },
    { icon: <BuildIcon />, color: '#a5b4fc', size: '2.2rem', speed: 21, delay: 11 },
    { icon: <LanguageIcon />, color: '#3b82f6', size: '2.3rem', speed: 20, delay: 12 },
    { icon: <DnsIcon />, color: '#6366f1', size: '2.2rem', speed: 22, delay: 13 },
    { icon: <BugReportIcon />, color: '#818cf8', size: '2.1rem', speed: 23, delay: 14 },
    
    // Added cloud icons - updated to blue theme
    { icon: <CloudIcon />, color: '#3b82f6', size: '3rem', speed: 15, delay: 15 },
    { icon: <CloudQueueIcon />, color: '#6366f1', size: '2.8rem', speed: 18, delay: 16 },
    { icon: <CloudDoneIcon />, color: '#818cf8', size: '2.9rem', speed: 16, delay: 17 },
    { icon: <CloudSyncIcon />, color: '#a5b4fc', size: '2.7rem', speed: 19, delay: 18 },
    { icon: <CloudUploadIcon />, color: '#3b82f6', size: '2.6rem', speed: 17, delay: 19 },
    { icon: <CloudDownloadIcon />, color: '#6366f1', size: '2.5rem', speed: 20, delay: 20 },
    { icon: <CloudCircleIcon />, color: '#818cf8', size: '2.8rem', speed: 14, delay: 21 },
    { icon: <CloudDoneOutlinedIcon />, color: '#a5b4fc', size: '2.4rem', speed: 21, delay: 22 },
    { icon: <CloudQueueOutlinedIcon />, color: '#3b82f6', size: '2.6rem', speed: 18, delay: 23 },
    { icon: <CloudSyncOutlinedIcon />, color: '#6366f1', size: '2.3rem', speed: 22, delay: 24 },
    { icon: <CloudUploadOutlinedIcon />, color: '#818cf8', size: '2.5rem', speed: 19, delay: 25 },
    { icon: <CloudDownloadOutlinedIcon />, color: '#a5b4fc', size: '2.2rem', speed: 23, delay: 26 },
    { icon: <CloudCircleOutlinedIcon />, color: '#3b82f6', size: '2.7rem', speed: 17, delay: 27 },
    { icon: <ApiIcon />, color: '#6366f1', size: '2.4rem', speed: 18, delay: 28 },
    { icon: <DataObjectIcon />, color: '#818cf8', size: '2.3rem', speed: 22, delay: 29 },
    { icon: <StorageOutlinedIcon />, color: '#a5b4fc', size: '2.2rem', speed: 24, delay: 30 },
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
        background: 'linear-gradient(135deg, #1e3a8a 0%, #1e1b4b 25%, #0f172a 50%, #020617 75%, #000000 100%)',
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
              opacity: 0.6,
              fontSize: item.size || '2rem',
              zIndex: 1,
              top: y,
              left: 0,
              filter: 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.4))',
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
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem' },
                fontWeight: 900,
                color: '#ffffff',
                textShadow: '0 0 30px rgba(255, 255, 255, 0.3)',
                mb: 3,
                fontFamily: '"Playfair Display", serif',
                letterSpacing: '-0.03em',
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
                    color: '#ffffff',
                    fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                    fontWeight: 700,
                    fontFamily: '"Inter", "Poppins", sans-serif',
                    letterSpacing: '-0.01em',
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
                color: '#ffffff',
                maxWidth: '800px',
                mx: 'auto',
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                opacity: 0.9,
                fontFamily: '"Inter", sans-serif',
                fontWeight: 400,
                letterSpacing: '0.01em',
                lineHeight: 1.6,
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
                px: 4,
                py: 1.5,
                borderRadius: 2,
                textTransform: 'none',
                fontSize: { xs: '1rem', md: '1.1rem' },
                background: 'linear-gradient(45deg, #1e3a8a, #1e1b4b)',
                color: '#ffffff',
                '&:hover': {
                  background: 'linear-gradient(45deg, #1e1b4b, #1e3a8a)',
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
                borderColor: '#3b82f6',
                color: '#3b82f6',
                '&:hover': {
                  borderColor: '#1e3a8a',
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
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