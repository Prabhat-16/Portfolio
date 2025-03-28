import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { School } from '@mui/icons-material';

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
          <Typography variant="h2" component="h2" gutterBottom align="center">
            About Me
          </Typography>

          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12}>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    background: 'linear-gradient(135deg, #132f4c 0%, #0a1929 100%)',
                    border: '1px solid rgba(0, 188, 212, 0.1)',
                    '&:hover': {
                      boxShadow: '0 0 20px rgba(0, 188, 212, 0.2)',
                    },
                  }}
                >
                  <Typography variant="h5" gutterBottom sx={{ color: 'primary.light' }}>
                    Profile
                  </Typography>
                  <Typography paragraph sx={{ color: 'text.secondary' }}>
                    I am a skilled web developer specializing in backend technologies, particularly PHP and MySQL, 
                    with expertise in designing robust architectures and implementing complex functionalities. 
                    While my focus is on backend development, I have a strong grasp of front-end technologies 
                    like HTML, CSS, JavaScript, and AJAX for seamless integration.
                  </Typography>
                  <Typography paragraph sx={{ color: 'text.secondary' }}>
                    Currently learning DevOps and exploring automation, CI/CD, and cloud technologies. 
                    Passionate about continuous learning and staying updated with new technologies to build 
                    scalable and efficient solutions.
                  </Typography>
                </Paper>
              </motion.div>

              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    mt: 4,
                    background: 'linear-gradient(135deg, #132f4c 0%, #0a1929 100%)',
                    border: '1px solid rgba(0, 188, 212, 0.1)',
                    '&:hover': {
                      boxShadow: '0 0 20px rgba(0, 188, 212, 0.2)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <School sx={{ color: 'primary.light', mr: 1 }} />
                    <Typography variant="h5" sx={{ color: 'primary.light' }}>
                      Education
                    </Typography>
                  </Box>
                  {[
                    {
                      degree: 'MCA',
                      institution: 'MIT World Peace University',
                      location: 'Pune',
                      period: '2024 - Present',
                    },
                    {
                      degree: 'BCA',
                      institution: 'Bhagwan Mahavir University',
                      location: 'Surat',
                      period: '2021 - 2024',
                    },
                    {
                      degree: 'HSC',
                      institution: 'Vidhyakunj English Medium School',
                      location: 'Surat',
                      period: '2020 - 2021',
                    },
                  ].map((edu, index) => (
                    <Box
                      key={edu.degree}
                      component={motion.div}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      sx={{ mb: 2 }}
                    >
                      <Typography variant="h6" sx={{ color: 'text.primary' }}>
                        {edu.degree}
                      </Typography>
                      <Typography sx={{ color: 'text.secondary' }}>
                        {edu.institution}, {edu.location}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                        {edu.period}
                      </Typography>
                    </Box>
                  ))}
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 