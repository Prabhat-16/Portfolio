import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import JavascriptIcon from '@mui/icons-material/Javascript';
import TerminalIcon from '@mui/icons-material/Terminal';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import { PhpIcon, ReactIcon, MySQLIcon, NodeJSIcon, DockerIcon, HTML5Icon, CSS3Icon, GitIcon, AzureIcon } from './TechIcons';

const Skills: React.FC = () => {
  const skills = [
    { name: "PHP", icon: <PhpIcon />, color: "#4ade80" },
    { name: "JavaScript", icon: <JavascriptIcon />, color: "#4ade80" },
    { name: "MySQL", icon: <MySQLIcon />, color: "#4ade80" },
    { name: "HTML5", icon: <HTML5Icon />, color: "#4ade80" },
    { name: "CSS3", icon: <CSS3Icon />, color: "#4ade80" },
    { name: "React", icon: <ReactIcon />, color: "#38bdf8" },
    { name: "Node.js", icon: <NodeJSIcon />, color: "#38bdf8" },
    { name: "Git & GitHub", icon: <GitIcon />, color: "#38bdf8" },
    { name: "Docker", icon: <DockerIcon />, color: "#38bdf8" },
    { name: "AWS", icon: <CloudSyncIcon />, color: "#38bdf8" },
    { name: "Azure", icon: <AzureIcon />, color: "#38bdf8" },
    { name: "Linux", icon: <TerminalIcon />, color: "#38bdf8" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <Box
      id="skills"
      sx={{
        py: 12,
        bgcolor: 'transparent',
        position: 'relative',
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
              $ ls ~/skills/
            </Typography>
            <Box sx={{ flexGrow: 1, height: '1px', bgcolor: 'rgba(74, 222, 128, 0.2)' }} />
          </Box>

          <Grid container spacing={3}>
            {skills.map((skill, index) => (
              <Grid item xs={6} sm={4} md={3} lg={2} key={skill.name}>
                <motion.div variants={itemVariants}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: '#0f172a',
                      border: '1px solid #1e293b',
                      borderRadius: '4px',
                      height: '120px',
                      '&:hover': {
                        borderColor: skill.color,
                        bgcolor: 'rgba(74, 222, 128, 0.05)',
                        transform: 'translateY(-4px)',
                      },
                      transition: 'all 0.2s ease-in-out',
                      cursor: 'default'
                    }}
                  >
                    <Box sx={{ color: skill.color, fontSize: '2.5rem', mb: 1, display: 'flex' }}>
                      {skill.icon}
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#f1f5f9',
                        fontWeight: 500,
                        fontFamily: "'Fira Code', monospace",
                        fontSize: '0.8rem',
                        textAlign: 'center'
                      }}
                    >
                      {skill.name}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 8, p: 3, border: '1px dashed #1e293b', borderRadius: '4px', bgcolor: 'rgba(15, 23, 42, 0.5)' }}>
            <Typography sx={{ color: '#4ade80', mb: 1, fontFamily: "'Fira Code', monospace" }}>$ cat status.json</Typography>
            <Typography
              sx={{
                color: '#94a3b8',
                fontFamily: "'Fira Code', monospace",
                fontSize: '0.9rem',
                lineHeight: 1.6
              }}
            >
              {`{`}
              <br />
              &nbsp;&nbsp;"learning": ["TypeScript", "Golang", "Advanced DevOps"],
              <br />
              &nbsp;&nbsp;"interests": ["System Architecture", "Open Source", "Security"],
              <br />
              &nbsp;&nbsp;"availability": "Open for new opportunities"
              <br />
              {`}`}
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;
