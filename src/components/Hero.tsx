import React from 'react';
import { Box, Typography, Container, Button, Avatar, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0a1929 0%, #132f4c 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background elements */}
      {[...Array(5)].map((_, i) => (
        <Box
          key={i}
          component={motion.div}
          sx={{
            position: 'absolute',
            width: '20vw',
            height: '20vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,188,212,0.1) 0%, rgba(0,188,212,0) 70%)',
            zIndex: 0,
          }}
          animate={{
            x: ['-20vw', '120vw'],
            y: ['-20vh', '120vh'],
            scale: [1, 2],
            opacity: [0.2, 0],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 3,
          }}
        />
      ))}

      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
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
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  fontWeight: 'bold',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                }}
              >
                Hi, I'm Prabhat Mishra
              </Typography>
              
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <Typography 
                  variant="h4" 
                  gutterBottom
                  sx={{ color: 'primary.light' }}
                >
                 Full Stack Developer / DevOps Enthusiast
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 4,
                    color: 'text.secondary',
                    maxWidth: '600px',
                  }}
                >
                  Specializing in PHP, MySQL, and Web Development
                </Typography>
              </motion.div>

              <Box sx={{ mt: 4 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  <Button
                    component={Link}
                    to="projects"
                    smooth={true}
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      mr: 2,
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      textTransform: 'none',
                      fontSize: '1.1rem',
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
                      fontSize: '1.1rem',
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
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <Avatar
                src="/me.jpg"
                alt="Prabhat Mishra"
                sx={{
                  width: { xs: 200, md: 300 },
                  height: { xs: 200, md: 300 },
                  border: '4px solid',
                  borderColor: 'primary.main',
                  boxShadow: '0 0 30px rgba(0, 188, 212, 0.3)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 0 40px rgba(0, 188, 212, 0.4)',
                  },
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero; 