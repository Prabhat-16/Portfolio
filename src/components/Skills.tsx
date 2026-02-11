import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import CloudBackground from './CloudBackground';
import JavascriptIcon from '@mui/icons-material/Javascript';
import ApiIcon from '@mui/icons-material/Api';
import TerminalIcon from '@mui/icons-material/Terminal';
import ComputerIcon from '@mui/icons-material/Computer';
import DevicesIcon from '@mui/icons-material/Devices';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import { PhpIcon, ReactIcon, MySQLIcon, BootstrapIcon, NodeJSIcon, DockerIcon, HTML5Icon, CSS3Icon, GitIcon, AzureIcon } from './TechIcons';

const Skills: React.FC = () => {
  const skills = [
    { name: "PHP", icon: <PhpIcon />, color: "#777BB4" },
    { name: "JavaScript", icon: <JavascriptIcon />, color: "#F7DF1E" },
    { name: "MySQL", icon: <MySQLIcon />, color: "#4479A1" },
    { name: "HTML5", icon: <HTML5Icon />, color: "#E34F26" },
    { name: "CSS3", icon: <CSS3Icon />, color: "#1572B6" },
    { name: "AJAX", icon: <ApiIcon />, color: "#06b6d4" },
    { name: "React", icon: <ReactIcon />, color: "#61DAFB" },
    { name: "Bootstrap", icon: <BootstrapIcon />, color: "#7952B3" },
    { name: "jQuery", icon: <JavascriptIcon />, color: "#0769AD" },
    { name: "Responsive Design", icon: <DevicesIcon />, color: "#f97316" },
    { name: "Node.js", icon: <NodeJSIcon />, color: "#339933" },
    { name: "Git & GitHub", icon: <GitIcon />, color: "#F05032" },
    { name: "Azure App Services", icon: <AzureIcon />, color: "#0078D4" },
    { name: "Azure VM", icon: <AzureIcon />, color: "#0078D4" },
    { name: "Linux", icon: <TerminalIcon />, color: "#FCC624" },
    { name: "Windows", icon: <ComputerIcon />, color: "#0078D6" },
    { name: "CI/CD", icon: <IntegrationInstructionsIcon />, color: "#3b82f6" },
    { name: "Docker", icon: <DockerIcon />, color: "#2496ED" },
    { name: "AWS", icon: <CloudSyncIcon />, color: "#FF9900" },
    { name: "Azure", icon: <AzureIcon />, color: "#0078D4" },
  ];

  return (
    <Box
      id="skills"
      sx={{
        py: 12,
        background: 'linear-gradient(180deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
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
                  fontWeight: 900,
                  mb: 2,
                  position: 'relative',
                  background: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 50%, #8b5cf6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline-block',
                  fontFamily: '"Poppins", "Inter", sans-serif',
                  letterSpacing: '-0.03em',
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  textShadow: '0 0 40px rgba(167, 139, 250, 0.5)',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-15px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100px',
                    height: '5px',
                    background: 'linear-gradient(90deg, transparent, #8b5cf6, #a78bfa, #8b5cf6, transparent)',
                    borderRadius: '10px',
                    boxShadow: '0 0 20px rgba(139, 92, 246, 0.6)',
                  }
                }}
              >
                ⚡ Tech Stack
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
                A comprehensive collection of technologies and tools I work with:
              </Typography>
            </motion.div>
          </Box>

          <Paper
            elevation={3}
            sx={{
              p: { xs: 3, md: 5 },
              background: 'linear-gradient(145deg, rgba(30, 27, 75, 0.6) 0%, rgba(15, 23, 42, 0.6) 100%)',
              backdropFilter: 'blur(20px)',
              borderRadius: 6,
              border: '2px solid rgba(139, 92, 246, 0.3)',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(139, 92, 246, 0.2), 0 0 0 1px rgba(139, 92, 246, 0.1) inset',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.8), transparent)',
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at top right, rgba(139, 92, 246, 0.1), transparent 50%)',
                pointerEvents: 'none',
              },
              '&:hover': {
                boxShadow: '0 30px 80px rgba(139, 92, 246, 0.35), 0 0 0 2px rgba(139, 92, 246, 0.4) inset',
                borderColor: 'rgba(167, 139, 250, 0.6)',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              }
            }}
          >
            <Box 
              sx={{ 
                display: 'grid',
                gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(5, 1fr)' },
                gap: 3,
              }}
            >
              {skills.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  whileHover={{ scale: 1.08, y: -8 }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                      p: 3,
                      borderRadius: 4,
                      background: `linear-gradient(145deg, rgba(${parseInt(item.color.slice(1,3), 16)}, ${parseInt(item.color.slice(3,5), 16)}, ${parseInt(item.color.slice(5,7), 16)}, 0.1) 0%, rgba(${parseInt(item.color.slice(1,3), 16)}, ${parseInt(item.color.slice(3,5), 16)}, ${parseInt(item.color.slice(5,7), 16)}, 0.05) 100%)`,
                      border: `2px solid ${item.color}40`,
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                      height: '100%',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: `linear-gradient(90deg, transparent, ${item.color}20, transparent)`,
                        transition: 'left 0.5s ease',
                      },
                      '&:hover': {
                        background: `linear-gradient(145deg, rgba(${parseInt(item.color.slice(1,3), 16)}, ${parseInt(item.color.slice(3,5), 16)}, ${parseInt(item.color.slice(5,7), 16)}, 0.2) 0%, rgba(${parseInt(item.color.slice(1,3), 16)}, ${parseInt(item.color.slice(3,5), 16)}, ${parseInt(item.color.slice(5,7), 16)}, 0.1) 100%)`,
                        borderColor: `${item.color}80`,
                        boxShadow: `0 12px 32px ${item.color}40, 0 0 0 1px ${item.color}30 inset`,
                        '&::before': {
                          left: '100%',
                        }
                      }
                    }}
                  >
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 3,
                        background: `${item.color}20`,
                        color: item.color,
                        fontSize: '3rem',
                        boxShadow: `0 8px 24px ${item.color}30`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'rotate(10deg) scale(1.1)',
                          boxShadow: `0 12px 32px ${item.color}50`,
                        }
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: '#ffffff', 
                        fontWeight: 700, 
                        textAlign: 'center',
                        fontSize: '0.95rem',
                        fontFamily: '"Inter", sans-serif', 
                        letterSpacing: '0.02em',
                        lineHeight: 1.3,
                        textShadow: `0 2px 8px ${item.color}40`,
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;