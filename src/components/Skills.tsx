import React from 'react';
import { Box, Container, Typography, Grid, Paper, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const skills: Skill[] = [
  { name: 'PHP', level: 90, color: '#777BB4' },
  { name: 'MySQL', level: 85, color: '#4479A1' },
  { name: 'HTML/CSS', level: 80, color: '#E34F26' },
  { name: 'JavaScript', level: 75, color: '#F7DF1E' },
  { name: 'AJAX', level: 70, color: '#00758F' },
  { name: 'Git & Github', level: 75, color: '#F05032' },
  { name: 'C/C++', level: 70, color: '#00599C' },
];

const Skills: React.FC = () => {
  return (
    <Box
      id="skills"
      sx={{
        py: 8,
        backgroundColor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background patterns */}
      {[...Array(20)].map((_, i) => (
        <Box
          key={i}
          component={motion.div}
          sx={{
            position: 'absolute',
            width: '2px',
            height: '2px',
            background: 'primary.main',
            borderRadius: '50%',
          }}
          animate={{
            y: ['0vh', '100vh'],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'linear',
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `-${Math.random() * 20}%`,
          }}
        />
      ))}

      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h2" component="h2" gutterBottom align="center">
            Skills
          </Typography>

          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 4,
                  background: 'linear-gradient(135deg, #132f4c 0%, #0a1929 100%)',
                  border: '1px solid rgba(0, 188, 212, 0.1)',
                }}
              >
                {skills.map((skill, index) => (
                  <Box key={skill.name} sx={{ mb: 3 }}>
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="h6" sx={{ color: skill.color }}>
                          {skill.name}
                        </Typography>
                        <Typography variant="h6" sx={{ color: skill.color }}>
                          {skill.level}%
                        </Typography>
                      </Box>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      >
                        <LinearProgress
                          variant="determinate"
                          value={skill.level}
                          sx={{
                            height: 10,
                            borderRadius: 5,
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            '& .MuiLinearProgress-bar': {
                              background: `linear-gradient(90deg, ${skill.color}80 0%, ${skill.color} 100%)`,
                              borderRadius: 5,
                            },
                          }}
                        />
                      </motion.div>
                    </motion.div>
                  </Box>
                ))}
              </Paper>
            </Grid>
          </Grid>

          <Box sx={{ mt: 6 }}>
            <Typography variant="h3" gutterBottom align="center" sx={{ color: 'primary.light' }}>
              Languages
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              {['English', 'Hindi', 'Gujarati'].map((language, index) => (
                <Grid item key={language}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Paper
                      elevation={2}
                      sx={{
                        px: 4,
                        py: 2,
                        textAlign: 'center',
                        background: 'linear-gradient(45deg, #00bcd4 30%, #008394 90%)',
                        color: 'white',
                        borderRadius: 2,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          boxShadow: '0 0 20px rgba(0, 188, 212, 0.5)',
                        },
                      }}
                    >
                      <Typography variant="h6">{language}</Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills; 