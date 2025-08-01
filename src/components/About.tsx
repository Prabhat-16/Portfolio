import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import CloudBackground from './CloudBackground';

const About: React.FC = () => {
  return (
    <Box
      id="about"
      sx={{
        py: 8,
        background: 'linear-gradient(135deg, #1e3a8a 0%, #1e1b4b 25%, #0f172a 50%, #020617 75%, #000000 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <CloudBackground zIndex={0} />

      <Container sx={{ position: 'relative', zIndex: 1 }}>
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
            mb: 6 
          }}>
            <Typography 
              variant="h2" 
              component="h2" 
              sx={{ 
                fontWeight: 800,
                textAlign: 'center',
                position: 'relative',
                color: '#ffffff',
                textShadow: '0 0 30px rgba(255, 255, 255, 0.3)',
                display: 'inline-block',
                fontFamily: '"Poppins", "Inter", sans-serif',
                letterSpacing: '-0.02em',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #3b82f6, #6366f1)',
                  borderRadius: '2px',
                }
              }}
            >
              About Me
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ mt: 2 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    background: 'rgba(19, 47, 76, 0.9)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 4,
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 8px 32px rgba(59, 130, 246, 0.1)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '1px',
                      background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent)',
                    },
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 15px 40px rgba(59, 130, 246, 0.2)',
                      borderColor: 'rgba(59, 130, 246, 0.5)',
                      transition: 'all 0.3s ease',
                    }
                  }}
                >
                  <Typography variant="h5" gutterBottom sx={{ color: '#3b82f6', mb: 3, fontWeight: 700, fontFamily: '"Inter", sans-serif', letterSpacing: '-0.01em' }}>
                    Cloud Developer Profile
                  </Typography>
                  <Typography paragraph sx={{ color: '#ffffff', lineHeight: 1.8, opacity: 0.9, fontFamily: '"Inter", sans-serif', fontWeight: 400, letterSpacing: '0.01em' }}>
                    I am a passionate cloud developer specializing in backend technologies, particularly PHP and MySQL, 
                    with expertise in designing robust cloud architectures and implementing scalable solutions. 
                    My focus extends beyond traditional backend development to include cloud-native technologies, 
                    DevOps practices, and modern deployment strategies.
                  </Typography>
                  <Typography paragraph sx={{ color: '#ffffff', mb: 0, lineHeight: 1.8, opacity: 0.9, fontFamily: '"Inter", sans-serif', fontWeight: 400, letterSpacing: '0.01em' }}>
                    Currently expanding my expertise in cloud platforms, containerization, and infrastructure as code. 
                    Passionate about building scalable, resilient applications that leverage the power of cloud computing 
                    to deliver exceptional user experiences.
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '10%',
                      left: '10%',
                      right: '-10px',
                      bottom: '-10px',
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(99, 102, 241, 0.1) 100%)',
                      borderRadius: '20px',
                      zIndex: 0,
                    }
                  }}
                >
                  <Box
                    component="img"
                    src="about.jpg"
                    alt="Cloud Developer Illustration"
                    sx={{
                      width: '100%',
                      height: 'auto',
                      maxWidth: '500px',
                      display: 'block',
                      margin: '0 auto',
                      position: 'relative',
                      zIndex: 1,
                      borderRadius: '20px',
                      boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)',
                      transform: 'perspective(1000px) rotateY(-5deg)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'perspective(1000px) rotateY(0deg)',
                        boxShadow: '0 25px 50px rgba(59, 130, 246, 0.4)',
                      },
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 