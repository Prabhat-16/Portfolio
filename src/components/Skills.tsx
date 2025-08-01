import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import CloudBackground from './CloudBackground';

const skillIconMap: Record<string, string> = {
  PHP: 'php',
  MYSQL: 'mysql',
  JAVASCRIPT: 'js',
  REACT: 'react',
  HTML5: 'html',
  CSS3: 'css',
  GIT: 'git',
  'GITHUB ACTIONS': 'githubactions',
  DOCKER: 'docker',
  AZURE: 'azure',
  AWS: 'aws',
  'VS CODE': 'vscode',
  POSTMAN: 'postman',
  NETLIFY: 'netlify',
  GITHUB: 'github',
  WINDOWS: 'windows',
  LINUX: 'linux',
};

const Skills: React.FC = () => {
  const categories = [
    {
      title: "Languages & Frameworks",
      icon: "💻",
      items: [
        { name: "PHP", color: "#777BB4" },
        { name: "MYSQL", color: "#4479A1" },
        { name: "JAVASCRIPT", color: "#F7DF1E" },
        { name: "REACT", color: "#61DAFB" },
        { name: "HTML5", color: "#E34F26" },
        { name: "CSS3", color: "#1572B6" },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      items: [
        { name: "GIT", color: "#F05032" },
        { name: "GITHUB ACTIONS", color: "#2088FF" },
        { name: "DOCKER", color: "#2496ED" },
        { name: "AZURE", color: "#0078D4" },
        { name: "AWS", color: "#FF9900" },
      ]
    },
    {
      title: "Development Tools",
      icon: "🔧",
      items: [
        { name: "VS CODE", color: "#007ACC" },
        { name: "POSTMAN", color: "#FF6C37" },
        { name: "NETLIFY", color: "#00C7B7" },
        { name: "GITHUB", color: "#181717" },
      ]
    },
    {
      title: "Platforms",
      icon: "🖥",
      items: [
        { name: "WINDOWS", color: "#0078D6" },
        { name: "LINUX", color: "#FCC624" },
      ]
    }
  ];

  return (
    <Box
      id="skills"
      sx={{
        py: 10,
        background: 'linear-gradient(135deg, #1e3a8a 0%, #1e1b4b 25%, #0f172a 50%, #020617 75%, #000000 100%)',
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
                  fontWeight: 800,
                  mb: 2,
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
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      sx={{ 
                        color: '#3b82f6',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        fontSize: { xs: '1.5rem', md: '1.8rem' },
                        fontWeight: 700,
                        fontFamily: '"Inter", sans-serif',
                        letterSpacing: '-0.01em',
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
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        style={{ display: 'flex', alignItems: 'center', gap: 12 }}
                      >
                        <img
                          src={`https://skillicons.dev/icons?i=${skillIconMap[item.name]}`}
                          alt={item.name}
                          style={{ width: 40, height: 40, marginRight: 8, filter: 'drop-shadow(0 2px 8px rgba(59,130,246,0.15))' }}
                        />
                        <Typography variant="subtitle1" sx={{ color: '#ffffff', fontWeight: 500, opacity: 0.9, fontFamily: '"Inter", sans-serif', letterSpacing: '0.01em' }}>
                          {item.name}
                        </Typography>
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