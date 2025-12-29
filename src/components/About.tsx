import React from 'react';
import { Box, Container, Typography, Grid, Paper, Card, CardContent, Avatar, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';

const About: React.FC = () => {
  const { isDarkMode } = useTheme();

  const stats = [
    { label: 'Education Level', value: 'MCA', icon: <CodeIcon /> },
    { label: 'Projects Completed', value: '6+', icon: <CloudIcon /> },
    { label: 'Technologies Used', value: '15+', icon: <SecurityIcon /> },
    { label: 'Learning Progress', value: '100%', icon: <SpeedIcon /> },
  ];

  const skills = [
    { name: 'PHP & MySQL Development', level: 90, color: '#6366f1' },
    { name: 'Frontend Technologies', level: 85, color: '#8b5cf6' },
    { name: 'JavaScript & AJAX', level: 80, color: '#ec4899' },
    { name: 'Cloud & DevOps (Learning)', level: 70, color: '#f59e0b' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        background: isDarkMode 
          ? 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.05) 0%, transparent 50%)'
          : 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.05) 0%, transparent 50%)',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 800,
                  background: isDarkMode 
                    ? 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)'
                    : 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  mb: 2,
                }}
              >
                About Me
              </Typography>
              <Box
                sx={{
                  width: '80px',
                  height: '4px',
                  background: isDarkMode 
                    ? 'linear-gradient(90deg, #6366f1, #8b5cf6)'
                    : 'linear-gradient(90deg, #3b82f6, #6366f1)',
                  borderRadius: '2px',
                  mx: 'auto',
                }}
              />
            </Box>
          </motion.div>

          <Grid container spacing={4} alignItems="center">
            {/* Profile Image */}
            <Grid item xs={12} md={5}>
              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '-30px',
                        left: '-30px',
                        right: '-30px',
                        bottom: '-30px',
                        background: isDarkMode 
                          ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)'
                          : 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(99, 102, 241, 0.2) 100%)',
                        borderRadius: '30px',
                        filter: 'blur(30px)',
                        zIndex: -1,
                      },
                    }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        borderRadius: '30px',
                        background: isDarkMode 
                          ? 'rgba(30, 41, 59, 0.8)'
                          : 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(20px)',
                        border: isDarkMode 
                          ? '1px solid rgba(99, 102, 241, 0.2)'
                          : '1px solid rgba(59, 130, 246, 0.2)',
                      }}
                    >
                      <Avatar
                        src="/about.jpg"
                        alt="Prabhat Mishra"
                        sx={{
                          width: { xs: 280, md: 320 },
                          height: { xs: 280, md: 320 },
                          borderRadius: '20px',
                        }}
                      />
                    </Paper>
                  </Box>
                </Box>
              </motion.div>
            </Grid>

            {/* About Content */}
            <Grid item xs={12} md={7}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    color: isDarkMode ? '#f1f5f9' : '#1e293b',
                  }}
                >
                  MCA Student & Web Developer
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    mb: 4,
                    color: isDarkMode ? '#cbd5e1' : '#64748b',
                  }}
                >
                  I'm a dedicated full-stack web developer with expertise in PHP, MySQL, HTML, CSS, 
                  JavaScript, and AJAX. Currently pursuing my Master's in Computer Applications (MCA) 
                  at MIT World Peace University, I'm passionate about building scalable applications 
                  with clean code and responsive UI.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    mb: 4,
                    color: isDarkMode ? '#cbd5e1' : '#64748b',
                  }}
                >
                  I have hands-on experience from my role as a Trainee Web Developer at Tryon Infosoft, 
                  where I worked in an Agile environment and contributed to deployments and debugging. 
                  I'm also actively involved in cloud technologies through AWS Cloud Club and tech 
                  leadership roles.
                </Typography>

                {/* Skills Progress */}
                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 3,
                      color: isDarkMode ? '#f1f5f9' : '#1e293b',
                    }}
                  >
                    Core Competencies
                  </Typography>
                  {skills.map((skill, index) => (
                    <Box key={skill.name} sx={{ mb: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 600,
                            color: isDarkMode ? '#cbd5e1' : '#64748b',
                          }}
                        >
                          {skill.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 600,
                            color: skill.color,
                          }}
                        >
                          {skill.level}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: isDarkMode 
                            ? 'rgba(30, 41, 59, 0.8)'
                            : 'rgba(226, 232, 240, 0.8)',
                          '& .MuiLinearProgress-bar': {
                            backgroundColor: skill.color,
                            borderRadius: 4,
                          },
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          {/* Stats Section */}
          <motion.div variants={itemVariants}>
            <Grid container spacing={3} sx={{ mt: 8 }}>
              {stats.map((stat, index) => (
                <Grid item xs={6} md={3} key={stat.label}>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card
                      sx={{
                        textAlign: 'center',
                        p: 3,
                        height: '100%',
                        background: isDarkMode 
                          ? 'rgba(30, 41, 59, 0.8)'
                          : 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(20px)',
                        border: isDarkMode 
                          ? '1px solid rgba(99, 102, 241, 0.2)'
                          : '1px solid rgba(59, 130, 246, 0.2)',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          transition: 'all 0.3s ease',
                        },
                      }}
                    >
                      <CardContent sx={{ p: 0 }}>
                        <Box
                          sx={{
                            color: isDarkMode ? '#6366f1' : '#3b82f6',
                            mb: 2,
                            fontSize: '2.5rem',
                          }}
                        >
                          {stat.icon}
                        </Box>
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: 800,
                            mb: 1,
                            color: isDarkMode ? '#f1f5f9' : '#1e293b',
                          }}
                        >
                          {stat.value}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: isDarkMode ? '#cbd5e1' : '#64748b',
                            fontWeight: 500,
                          }}
                        >
                          {stat.label}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 