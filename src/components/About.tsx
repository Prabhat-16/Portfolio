import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

const About: React.FC = () => {

  const stats = [
    { label: 'Education Level', value: 'MCA', icon: <CodeIcon /> },
    { label: 'Projects Completed', value: '6+', icon: <StorageIcon /> },
    { label: 'Technologies', value: '15+', icon: <IntegrationInstructionsIcon /> },
    { label: 'Uptime', value: '99.9%', icon: <TerminalIcon /> },
  ];

  const skills = [
    { name: 'PHP & MySQL', level: 90 },
    { name: 'Frontend Tech', level: 85 },
    { name: 'JavaScript & AJAX', level: 80 },
    { name: 'Cloud & DevOps', level: 70 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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

  const renderProgressBar = (level: number) => {
    const bars = 20;
    const filled = Math.round((level / 100) * bars);
    const empty = bars - filled;
    return `[${'#'.repeat(filled)}${'.'.repeat(empty)}] ${level}%`;
  };

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        bgcolor: 'transparent',
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
            <Box sx={{ mb: 8, display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '3rem' },
                  fontWeight: 800,
                  color: '#4ade80',
                  fontFamily: "'Fira Code', monospace",
                  textShadow: '0 0 20px rgba(74, 222, 128, 0.3)'
                }}
              >
                {">"} About Me
              </Typography>
              <Box sx={{ flexGrow: 1, height: '1px', bgcolor: 'rgba(74, 222, 128, 0.2)' }} />
            </Box>
          </motion.div>

          <Grid container spacing={6}>
            <Grid item xs={12} md={7}>
              <motion.div variants={itemVariants}>
                <Box sx={{ p: 4, border: '1px solid #1e293b', borderRadius: '4px', bgcolor: '#0f172a' }}>
                  <Typography sx={{ color: '#4ade80', mb: 2, fontFamily: "'Fira Code', monospace" }}>$ cat profile.md</Typography>
                  <Typography
                    sx={{
                      color: '#f1f5f9',
                      fontSize: '0.95rem',
                      lineHeight: 1.8,
                      fontFamily: "'Inter', sans-serif",
                      mb: 4
                    }}
                  >
                    <strong style={{ color: '#4ade80' }}>## Summary</strong><br />
                    Experienced Full-Stack Developer currently pursuing Master's in Computer Applications (MCA) at MIT-WPU. 
                    I bridge the gap between robust backend systems and intuitive frontend experiences.<br /><br />
                    
                    <strong style={{ color: '#4ade80' }}>## Background</strong>
                    <ul style={{ paddingLeft: '20px', margin: '10px 0' }}>
                      <li>Trainee Web Developer @ Tryon Infosoft</li>
                      <li>Tech Lead & Cloud Enthusiast</li>
                      <li>Passionate about automation and scalable architectures</li>
                    </ul>
                  </Typography>

                  <Typography sx={{ color: '#4ade80', mb: 2 }}>$ ls -la core_competencies/</Typography>
                  <Box sx={{ fontFamily: "'Fira Code', monospace" }}>
                    {skills.map((skill) => (
                      <Box key={skill.name} sx={{ mb: 1, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between' }}>
                        <Typography sx={{ color: '#38bdf8' }}>- {skill.name}</Typography>
                        <Typography sx={{ color: '#94a3b8' }}>{renderProgressBar(skill.level)}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={5}>
              <motion.div variants={itemVariants}>
                <Grid container spacing={3}>
                  {stats.map((stat, index) => (
                    <Grid item xs={6} key={stat.label}>
                      <Paper
                        elevation={0}
                        sx={{
                          p: 3,
                          height: '100%',
                          bgcolor: '#0f172a',
                          border: '1px solid #1e293b',
                          textAlign: 'center',
                          '&:hover': {
                            borderColor: '#4ade80',
                            bgcolor: 'rgba(74, 222, 128, 0.05)',
                          },
                          transition: 'all 0.3s'
                        }}
                      >
                        <Box sx={{ color: '#4ade80', mb: 1 }}>{stat.icon}</Box>
                        <Typography variant="h4" sx={{ color: '#f1f5f9', fontWeight: 700, mb: 0.5 }}>
                          {stat.value}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#94a3b8', fontSize: '0.8rem' }}>
                          {stat.label}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>

                <Box sx={{ mt: 4, p: 3, border: '1px solid #1e293b', bgcolor: '#0f172a', borderRadius: '4px' }}>
                  <Typography sx={{ color: '#4ade80', mb: 1 }}>$ ping google.com</Typography>
                  <Typography sx={{ color: '#94a3b8', fontFamily: "'Fira Code', monospace", fontSize: '0.85rem' }}>
                    64 bytes from 142.250.190.46: icmp_seq=1 ttl=117 time=14.2 ms<br />
                    64 bytes from 142.250.190.46: icmp_seq=2 ttl=117 time=14.5 ms<br />
                    <span style={{ color: '#4ade80' }}>System online and ready for new challenges.</span>
                  </Typography>
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
 