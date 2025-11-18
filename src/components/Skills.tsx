import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import CloudBackground from './CloudBackground';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import JavascriptIcon from '@mui/icons-material/Javascript';
import WebIcon from '@mui/icons-material/Web';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloudIcon from '@mui/icons-material/Cloud';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import ApiIcon from '@mui/icons-material/Api';
import TerminalIcon from '@mui/icons-material/Terminal';
import ComputerIcon from '@mui/icons-material/Computer';
import LaptopIcon from '@mui/icons-material/Laptop';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

const Skills: React.FC = () => {
  const categories = [
    {
      title: "Languages & Frameworks",
      icon: <CodeIcon sx={{ fontSize: '2rem' }} />,
      items: [
        { name: "PHP", icon: <CodeIcon />, color: "#8b5cf6" },
        { name: "MySQL", icon: <StorageIcon />, color: "#3b82f6" },
        { name: "JavaScript", icon: <JavascriptIcon />, color: "#f59e0b" },
        { name: "React", icon: <WebIcon />, color: "#06b6d4" },
        { name: "HTML5", icon: <HtmlIcon />, color: "#ef4444" },
        { name: "CSS3", icon: <CssIcon />, color: "#3b82f6" },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <CloudIcon sx={{ fontSize: '2rem' }} />,
      items: [
        { name: "Git", icon: <GitHubIcon />, color: "#f97316" },
        { name: "GitHub Actions", icon: <IntegrationInstructionsIcon />, color: "#3b82f6" },
        { name: "Docker", icon: <CloudQueueIcon />, color: "#06b6d4" },
        { name: "Azure", icon: <CloudDoneIcon />, color: "#3b82f6" },
        { name: "AWS", icon: <CloudSyncIcon />, color: "#f59e0b" },
      ]
    },
    {
      title: "Development Tools",
      icon: <DeveloperModeIcon sx={{ fontSize: '2rem' }} />,
      items: [
        { name: "VS Code", icon: <TerminalIcon />, color: "#3b82f6" },
        { name: "Postman", icon: <ApiIcon />, color: "#f97316" },
        { name: "Netlify", icon: <CloudIcon />, color: "#06b6d4" },
        { name: "GitHub", icon: <GitHubIcon />, color: "#8b5cf6" },
      ]
    },
    {
      title: "Platforms",
      icon: <ComputerIcon sx={{ fontSize: '2rem' }} />,
      items: [
        { name: "Windows", icon: <ComputerIcon />, color: "#3b82f6" },
        { name: "Linux", icon: <LaptopIcon />, color: "#f59e0b" },
      ]
    }
  ];

  return (
    <Box
      id="skills"
      sx={{
        py: 12,
        background: 'linear-gradient(180deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <CloudBackground zIndex={0} />
      {/* Animated cloud particles */}
      {[...Array(30)].map((_, i) => (
        <Box
          key={i}
          component={motion.div}
          sx={{
            position: 'absolute',
            width: '6px',
            height: '6px',
            background: 'rgba(59, 130, 246, 0.6)',
            borderRadius: '50%',
            opacity: 0.3,
          }}
          animate={{
            y: ['0vh', '100vh'],
            opacity: [0.3, 0],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            delay: Math.random() * 8,
            ease: 'linear',
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `-${Math.random() * 20}%`,
          }}
        />
      ))}

      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            position: 'relative',
            mb: 8 
          }}>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Typography 
                variant="h2" 
                component="h2" 
                sx={{ 
                  fontWeight: 900,
                  mb: 2,
                  position: 'relative',
                  background: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 50%, #8b5cf6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline-block',
                  fontFamily: '"Poppins", "Inter", sans-serif',
                  letterSpacing: '-0.03em',
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  textShadow: '0 0 40px rgba(167, 139, 250, 0.5)',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-15px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100px',
                    height: '5px',
                    background: 'linear-gradient(90deg, transparent, #8b5cf6, #a78bfa, #8b5cf6, transparent)',
                    borderRadius: '10px',
                    boxShadow: '0 0 20px rgba(139, 92, 246, 0.6)',
                  }
                }}
              >
                ⚡ Tech Stack
              </Typography>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 4, 
                  color: '#ffffff',
                  textAlign: 'center',
                  maxWidth: '800px',
                  mx: 'auto',
                  fontSize: '1.1rem',
                  opacity: 0.9,
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                  lineHeight: 1.6,
                }}
              >
                As a cloud developer passionate about modern technologies, here's my comprehensive tech stack:
              </Typography>
            </motion.div>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2, duration: 0.5 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 5,
                    background: 'linear-gradient(145deg, rgba(30, 27, 75, 0.6) 0%, rgba(15, 23, 42, 0.6) 100%)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: 6,
                    border: '2px solid rgba(139, 92, 246, 0.3)',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 20px 60px rgba(139, 92, 246, 0.2), 0 0 0 1px rgba(139, 92, 246, 0.1) inset',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.8), transparent)',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'radial-gradient(circle at top right, rgba(139, 92, 246, 0.1), transparent 50%)',
                      pointerEvents: 'none',
                    },
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 30px 80px rgba(139, 92, 246, 0.35), 0 0 0 2px rgba(139, 92, 246, 0.4) inset',
                      borderColor: 'rgba(167, 139, 250, 0.6)',
                      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      sx={{ 
                        color: '#a78bfa',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        fontSize: { xs: '1.6rem', md: '2rem' },
                        fontWeight: 800,
                        fontFamily: '"Inter", sans-serif',
                        letterSpacing: '-0.02em',
                        textShadow: '0 4px 16px rgba(167, 139, 250, 0.5)',
                      }}
                    >
                      {category.icon} {category.title}
                    </Typography>
                  </Box>
                  <Box 
                    sx={{ 
                      display: 'grid',
                      gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(3, 1fr)' },
                      gap: 3,
                    }}
                  >
                    {category.items.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        whileHover={{ scale: 1.08, y: -8 }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 2,
                            p: 3,
                            borderRadius: 4,
                            background: `linear-gradient(145deg, rgba(${parseInt(item.color.slice(1,3), 16)}, ${parseInt(item.color.slice(3,5), 16)}, ${parseInt(item.color.slice(5,7), 16)}, 0.1) 0%, rgba(${parseInt(item.color.slice(1,3), 16)}, ${parseInt(item.color.slice(3,5), 16)}, ${parseInt(item.color.slice(5,7), 16)}, 0.05) 100%)`,
                            border: `2px solid ${item.color}40`,
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            cursor: 'pointer',
                            position: 'relative',
                            overflow: 'hidden',
                            '&::before': {
                              content: '""',
                              position: 'absolute',
                              top: 0,
                              left: '-100%',
                              width: '100%',
                              height: '100%',
                              background: `linear-gradient(90deg, transparent, ${item.color}20, transparent)`,
                              transition: 'left 0.5s ease',
                            },
                            '&:hover': {
                              background: `linear-gradient(145deg, rgba(${parseInt(item.color.slice(1,3), 16)}, ${parseInt(item.color.slice(3,5), 16)}, ${parseInt(item.color.slice(5,7), 16)}, 0.2) 0%, rgba(${parseInt(item.color.slice(1,3), 16)}, ${parseInt(item.color.slice(3,5), 16)}, ${parseInt(item.color.slice(5,7), 16)}, 0.1) 100%)`,
                              borderColor: `${item.color}80`,
                              boxShadow: `0 12px 32px ${item.color}40, 0 0 0 1px ${item.color}30 inset`,
                              '&::before': {
                                left: '100%',
                              }
                            }
                          }}
                        >
                          <Box
                            sx={{
                              width: 72,
                              height: 72,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              borderRadius: 3,
                              background: `${item.color}20`,
                              color: item.color,
                              fontSize: '3rem',
                              boxShadow: `0 8px 24px ${item.color}30`,
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                transform: 'rotate(10deg) scale(1.1)',
                                boxShadow: `0 12px 32px ${item.color}50`,
                              }
                            }}
                          >
                            {item.icon}
                          </Box>
                          <Typography 
                            variant="body1" 
                            sx={{ 
                              color: '#ffffff', 
                              fontWeight: 700, 
                              textAlign: 'center',
                              fontSize: '1rem',
                              fontFamily: '"Inter", sans-serif', 
                              letterSpacing: '0.02em',
                              lineHeight: 1.3,
                              textShadow: `0 2px 8px ${item.color}40`,
                            }}
                          >
                            {item.name}
                          </Typography>
                        </Box>
                      </motion.div>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills; 