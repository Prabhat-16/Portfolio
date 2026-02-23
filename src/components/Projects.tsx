import React from 'react';
import { Box, Container, Typography, Grid, Paper, Chip, Button } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

interface Project {
  title: string;
  description: string;
  duration: string;
  technologies: string[];
  githubLink: string;
}

const projects: Project[] = [
  {
    title: 'Task Tracker App',
    description: 'Full-stack application built with React, Node.js, and MySQL featuring real-time task updates. Deployed on Azure VM with comprehensive task management capabilities.',
    duration: '2024',
    technologies: ['React', 'Node.js', 'MySQL', 'Azure'],
    githubLink: 'https://github.com/Prabhat-16/Task-Tracker-Frontend',
  },
  {
    title: 'AI Chatbot - DeepSeek',
    description: 'Intelligent chatbot built with React frontend and DeepSeek v3 API integration. Features real-time chat functionality and modern UI design.',
    duration: '2024',
    technologies: ['React', 'DeepSeek API', 'Azure'],
    githubLink: 'https://github.com/Prabhat-16/AzureAiModel',
  },
  {
    title: 'CAREERION',
    description: 'AI-powered career recommendation system built using the MERN stack. Uses machine learning to analyze user skills and suggest suitable career paths.',
    duration: '2023',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'ML'],
    githubLink: 'https://github.com/Prabhat-16/Careerion-Frontend',
  },
  {
    title: 'Movie Ticket Booking',
    description: 'Frontend movie booking platform with admin schedule control. Features responsive design and ticket booking functionality.',
    duration: '2023',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    githubLink: 'https://github.com/Prabhat-16/ONLINEMOVIEBOOKING',
  },
  {
    title: 'Web Billing System',
    description: 'PHP billing platform featuring login, invoices, and payment tracking using AJAX and MySQL.',
    duration: '2022',
    technologies: ['PHP', 'MySQL', 'AJAX'],
    githubLink: 'https://github.com/Prabhat-16/WebBilling',
  },
  {
    title: 'Construction Site',
    description: 'Core PHP and MySQL site featuring project showcase and contact forms. Fast and responsive design.',
    duration: '2022',
    technologies: ['PHP', 'MySQL', 'HTML5'],
    githubLink: 'https://github.com/Prabhat-16/ConstructionWebsite',
  },
];

const Projects: React.FC = () => {
  return (
    <Box
      id="projects"
      sx={{
        py: 12,
        bgcolor: 'transparent',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
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
              {">"} Featured Projects
            </Typography>
            <Box sx={{ flexGrow: 1, height: '1px', bgcolor: 'rgba(74, 222, 128, 0.2)' }} />
          </Box>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} lg={4} key={project.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      height: '100%',
                      bgcolor: '#0f172a',
                      border: '1px solid #1e293b',
                      display: 'flex',
                      flexDirection: 'column',
                      '&:hover': {
                        borderColor: '#38bdf8',
                        transform: 'translateY(-4px)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                      },
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    <Box sx={{ mb: 2 }}>
                      <Typography sx={{ color: '#4ade80', fontSize: '0.8rem', mb: 1 }}>
                        $ ./deploy --id={project.duration}
                      </Typography>
                      <Typography
                        variant="h5"
                        sx={{
                          color: '#f1f5f9',
                          fontWeight: 700,
                          fontFamily: "'Fira Code', monospace",
                          mb: 2
                        }}
                      >
                        {project.title}
                      </Typography>
                    </Box>

                    <Typography
                      variant="body2"
                      sx={{
                        color: '#94a3b8',
                        lineHeight: 1.6,
                        mb: 3,
                        flexGrow: 1,
                        fontFamily: "'Fira Code', monospace",
                        fontSize: '0.9rem'
                      }}
                    >
                      {project.description}
                    </Typography>

                    <Box sx={{ mb: 3, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            bgcolor: 'rgba(56, 189, 248, 0.1)',
                            color: '#38bdf8',
                            border: '1px solid rgba(56, 189, 248, 0.2)',
                            borderRadius: '4px',
                            fontFamily: "'Fira Code', monospace",
                            fontSize: '0.7rem',
                          }}
                        />
                      ))}
                    </Box>

                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Button
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<GitHubIcon />}
                        sx={{
                          color: '#4ade80',
                          textTransform: 'none',
                          fontSize: '0.85rem',
                          fontFamily: "'Fira Code', monospace",
                          '&:hover': { bgcolor: 'rgba(74, 222, 128, 0.1)' }
                        }}
                      >
                        [source]
                      </Button>
                      <Button
                        startIcon={<LaunchIcon />}
                        sx={{
                          color: '#38bdf8',
                          textTransform: 'none',
                          fontSize: '0.85rem',
                          fontFamily: "'Fira Code', monospace",
                          '&:hover': { bgcolor: 'rgba(56, 189, 248, 0.1)' }
                        }}
                      >
                        [demo]
                      </Button>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
          
          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Typography
              sx={{
                color: '#4ade80',
                fontFamily: "'Fira Code', monospace",
                cursor: 'pointer',
                '&:hover': { textDecoration: 'underline' }
              }}
            >
              $ view-all --on-github
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;
 