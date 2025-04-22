import React, { useEffect, useState } from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero: React.FC = () => {
  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "DevOps Enthusiast"
  ];
  
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
      {/* Animated particles */}
      {[...Array(50)].map((_, i) => (
        <Box
          key={i}
          component={motion.div}
          sx={{
            position: 'absolute',
            width: '2px',
            height: '2px',
            background: 'primary.main',
            borderRadius: '50%',
            boxShadow: '0 0 10px rgba(0, 188, 212, 0.5)',
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
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