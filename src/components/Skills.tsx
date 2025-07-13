import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Language,
  Storage,
  Javascript,
  Code,
  Html,
  Css,
  GitHub,
  CloudQueue,
  Terminal,
  Build,
  Cloud,
  PostAdd,
  Computer,
  DesktopWindows,
  DeveloperBoard
} from '@mui/icons-material';
import CloudBackground from './CloudBackground';

const Skills: React.FC = () => {
  const categories = [
    {
      title: "Languages & Frameworks",
      icon: "💻",
      items: [
        { name: "PHP", color: "#777BB4", icon: <Language sx={{ fontSize: 30 }} /> },
        { name: "MYSQL", color: "#4479A1", icon: <Storage sx={{ fontSize: 30 }} /> },
        { name: "JAVASCRIPT", color: "#F7DF1E", icon: <Javascript sx={{ fontSize: 30 }} /> },
        { name: "REACT", color: "#61DAFB", icon: <Code sx={{ fontSize: 30 }} /> },
        { name: "HTML5", color: "#E34F26", icon: <Html sx={{ fontSize: 30 }} /> },
        { name: "CSS3", color: "#1572B6", icon: <Css sx={{ fontSize: 30 }} /> },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      items: [
        { name: "GIT", color: "#F05032", icon: <Terminal sx={{ fontSize: 30 }} /> },
        { name: "GITHUB ACTIONS", color: "#2088FF", icon: <GitHub sx={{ fontSize: 30 }} /> },
        { name: "DOCKER", color: "#2496ED", icon: <Computer sx={{ fontSize: 30 }} /> },
        { name: "AZURE", color: "#0078D4", icon: <CloudQueue sx={{ fontSize: 30 }} /> },
        { name: "AWS", color: "#FF9900", icon: <Cloud sx={{ fontSize: 30 }} /> },
      ]
    },
    {
      title: "Development Tools",
      icon: "🔧",
      items: [
        { name: "VS CODE", color: "#007ACC", icon: <Code sx={{ fontSize: 30 }} /> },
        { name: "POSTMAN", color: "#FF6C37", icon: <PostAdd sx={{ fontSize: 30 }} /> },
        { name: "NETLIFY", color: "#00C7B7", icon: <Cloud sx={{ fontSize: 30 }} /> },
        { name: "XAMPP", color: "#FB7A24", icon: <Computer sx={{ fontSize: 30 }} /> },
        { name: "GITHUB", color: "#181717", icon: <GitHub sx={{ fontSize: 30 }} /> },
      ]
    },
    {
      title: "Platforms",
      icon: "🖥",
      items: [
        { name: "WINDOWS", color: "#0078D6", icon: <DesktopWindows sx={{ fontSize: 30 }} /> },
        { name: "LINUX", color: "#FCC624", icon: <DeveloperBoard sx={{ fontSize: 30 }} /> },
      ]
    }
  ];

  return (
    <Box
      id="skills"
      sx={{
        py: 10,
        background: 'linear-gradient(135deg, #F0F8FF 0%, #E0F6FF 50%, #B0E0E6 100%)',
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
            background: 'rgba(135, 206, 235, 0.6)',
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
                  fontWeight: 'bold',
                  mb: 2,
                  position: 'relative',
                  background: 'linear-gradient(90deg, #5bb6e6 10%, #87CEEB 60%, #4682B4 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  WebkitTextFillColor: 'transparent',
                  textFillColor: 'transparent',
                  display: 'inline-block',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '60px',
                    height: '4px',
                    background: 'linear-gradient(90deg, #87CEEB, #B0E0E6)',
                    borderRadius: '2px',
                  }
                }}
              >
                ☁️ Cloud & Tech Stack
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
                  color: '#34495e',
                  textAlign: 'center',
                  maxWidth: '800px',
                  mx: 'auto',
                  fontSize: '1.1rem',
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
                    p: 4,
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 4,
                    border: '1px solid rgba(135, 206, 235, 0.3)',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 8px 32px rgba(135, 206, 235, 0.1)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '1px',
                      background: 'linear-gradient(90deg, transparent, rgba(135, 206, 235, 0.3), transparent)',
                    },
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 15px 40px rgba(135, 206, 235, 0.2)',
                      borderColor: 'rgba(135, 206, 235, 0.5)',
                      transition: 'all 0.3s ease',
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      sx={{ 
                        color: '#4682B4',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        fontSize: { xs: '1.5rem', md: '1.8rem' },
                        fontWeight: 600,
                      }}
                    >
                      {category.icon} {category.title}
                    </Typography>
                  </Box>
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: 1.5,
                      '& > *': {
                        flex: '1 1 auto',
                        minWidth: { xs: '140px', sm: '160px' },
                        maxWidth: { xs: '100%', sm: '200px' },
                      }
                    }}
                  >
                    {category.items.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Paper
                          elevation={2}
                          sx={{
                            p: 2,
                            backgroundColor: 'rgba(135, 206, 235, 0.1)',
                            border: '1px solid rgba(135, 206, 235, 0.2)',
                            borderRadius: 2,
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            '&:hover': {
                              backgroundColor: 'rgba(135, 206, 235, 0.15)',
                              borderColor: 'rgba(135, 206, 235, 0.4)',
                              transform: 'translateY(-3px)',
                              boxShadow: '0 8px 20px rgba(135, 206, 235, 0.2)',
                            }
                          }}
                        >
                          <Box sx={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center', 
                            gap: 1,
                            textAlign: 'center'
                          }}>
                            <Box sx={{ 
                              color: item.color,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              mb: 1
                            }}>
                              {item.icon}
                            </Box>
                            <Typography 
                              variant="body2" 
                              sx={{ 
                                fontWeight: 600,
                                color: '#2c3e50',
                                fontSize: '0.9rem',
                              }}
                            >
                              {item.name}
                            </Typography>
                          </Box>
                        </Paper>
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