import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <Box
      id="about"
      sx={{
        py: 8,
        backgroundColor: 'background.default',
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
          background: 'radial-gradient(circle at 70% 30%, rgba(0,188,212,0.1) 0%, rgba(0,188,212,0) 50%)',
          zIndex: 0,
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

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
                color: 'primary.light',
                textAlign: 'center',
                fontWeight: 'bold',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #00bcd4, #008394)',
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
                    background: 'linear-gradient(135deg, rgba(19, 47, 76, 0.8) 0%, rgba(10, 25, 41, 0.8) 100%)',
                    borderRadius: 4,
                    border: '1px solid rgba(0, 188, 212, 0.1)',
                    backdropFilter: 'blur(10px)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '1px',
                      background: 'linear-gradient(90deg, transparent, rgba(0, 188, 212, 0.2), transparent)',
                    }
                  }}
                >
                  <Typography variant="h5" gutterBottom sx={{ color: 'primary.light', mb: 3 }}>
                    Profile
                  </Typography>
                  <Typography paragraph sx={{ color: 'text.secondary' }}>
                    I am a skilled web developer specializing in backend technologies, particularly PHP and MySQL, 
                    with expertise in designing robust architectures and implementing complex functionalities. 
                    While my focus is on backend development, I have a strong grasp of front-end technologies 
                    like HTML, CSS, JavaScript, and AJAX for seamless integration.
                  </Typography>
                  <Typography paragraph sx={{ color: 'text.secondary', mb: 0 }}>
                    Currently learning DevOps and exploring automation, CI/CD, and cloud technologies. 
                    Passionate about continuous learning and staying updated with new technologies to build 
                    scalable and efficient solutions.
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
                      background: 'linear-gradient(135deg, rgba(0, 188, 212, 0.1) 0%, rgba(0, 188, 212, 0.05) 100%)',
                      borderRadius: '10px',
                      zIndex: 0,
                    }
                  }}
                >
                  <Box
                    component="img"
                    src="about.jpg"
                    alt="Developer Illustration"
                    sx={{
                      width: '100%',
                      height: 'auto',
                      maxWidth: '500px',
                      display: 'block',
                      margin: '0 auto',
                      position: 'relative',
                      zIndex: 1,
                      borderRadius: '20px',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                      transform: 'perspective(1000px) rotateY(-5deg)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'perspective(1000px) rotateY(0deg)',
                        boxShadow: '0 25px 50px rgba(0, 188, 212, 0.3)',
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