import React, { useEffect, useState } from 'react';
import { Box, Typography, Container, Button, Grid, Avatar, Chip } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import StorageIcon from '@mui/icons-material/Storage';
import SecurityIcon from '@mui/icons-material/Security';

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    { title: "Full Stack Web Developer", icon: <CodeIcon />, color: "#6366f1" },
    { title: "PHP Developer", icon: <StorageIcon />, color: "#8b5cf6" },
    { title: "Cloud Enthusiast", icon: <CloudIcon />, color: "#ec4899" },
    { title: "DevOps Learner", icon: <SecurityIcon />, color: "#f59e0b" }
  ];

  const skills = [
    "PHP", "JavaScript", "React", "MySQL", "HTML5", "CSS3", 
    "Node.js", "Bootstrap", "jQuery", "AJAX"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at top, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
      }}
    >
      {/* Floating geometric shapes */}
      {[...Array(6)].map((_, i) => (
        <Box
          key={i}
          component={motion.div}
          sx={{
            position: 'absolute',
            width: { xs: 60, md: 100 },
            height: { xs: 60, md: 100 },
            borderRadius: i % 2 === 0 ? '50%' : '20%',
            background: `linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)`,
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(99, 102, 241, 0.2)',
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 15}%`,
          }}
        />
      ))}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#818cf8',
                    fontWeight: 600,
                    mb: 2,
                    fontSize: '1.1rem',
                  }}
                >
                  👋 Hello, I'm
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '3rem', sm: '4rem', md: '5.5rem' },
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    mb: 2,
                    lineHeight: 1.1,
                  }}
                >
                  Prabhat Mishra
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box sx={{ height: '80px', mb: 3, display: 'flex', alignItems: 'center' }}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentRole}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5 }}
                      style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
                    >
                      <Box
                        sx={{
                          color: roles[currentRole].color,
                          display: 'flex',
                          alignItems: 'center',
                          fontSize: '2rem',
                        }}
                      >
                        {roles[currentRole].icon}
                      </Box>
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem' },
                          fontWeight: 700,
                          background: `linear-gradient(135deg, ${roles[currentRole].color} 0%, ${roles[currentRole].color}80 100%)`,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {roles[currentRole].title}
                      </Typography>
                    </motion.div>
                  </AnimatePresence>
                </Box>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#cbd5e1',
                    mb: 4,
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                    lineHeight: 1.6,
                    maxWidth: '600px',
                  }}
                >
                  Crafting scalable web applications with modern technologies. 
                  Specialized in PHP, MySQL, and full-stack development with clean code practices.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box sx={{ mb: 4, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {skills.slice(0, 6).map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + index * 0.1 }}
                    >
                      <Chip
                        label={skill}
                        sx={{
                          background: 'rgba(99, 102, 241, 0.1)',
                          color: '#818cf8',
                          border: '1px solid rgba(99, 102, 241, 0.3)',
                          fontWeight: 600,
                          '&:hover': {
                            background: 'rgba(99, 102, 241, 0.2)',
                            transform: 'translateY(-2px)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      />
                    </motion.div>
                  ))}
                </Box>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    component={Link}
                    to="projects"
                    smooth={true}
                    variant="contained"
                    size="large"
                    startIcon={<PlayArrowIcon />}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                    }}
                  >
                    View My Work
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
                      fontSize: '1.1rem',
                      fontWeight: 600,
                    }}
                  >
                    Let's Connect
                  </Button>
                </Box>
              </motion.div>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
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
                      top: '-20px',
                      left: '-20px',
                      right: '-20px',
                      bottom: '-20px',
                      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
                      borderRadius: '50%',
                      filter: 'blur(20px)',
                      zIndex: -1,
                    },
                  }}
                >
                  <Avatar
                    src="/me.jpeg"
                    alt="Prabhat Mishra"
                    sx={{
                      width: { xs: 250, md: 300 },
                      height: { xs: 250, md: 300 },
                      border: '4px solid rgba(99, 102, 241, 0.3)',
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                    }}
                  />
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDownwardIcon
              sx={{
                fontSize: '2rem',
                color: '#818cf8',
                opacity: 0.7,
              }}
            />
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero; 