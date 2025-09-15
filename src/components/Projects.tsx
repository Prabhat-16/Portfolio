import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, Launch } from '@mui/icons-material';
import CloudBackground from './CloudBackground';

interface Project {
  title: string;
  description: string;
  duration: string;
  technologies: string[];
  githubLink: string;
}

const projects: Project[] = [
  {
    title: 'Careeion - Career Recommendation System',
    description: 'Developed a career recommendation system that suggests personalized career paths based on user input, skills, and preferences. The system analyzes user data to provide tailored career recommendations with detailed insights.',
    duration: 'May 2024 - Present',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Material-UI'],
    githubLink: 'https://github.com/Prabhat-16/Careeion',
  },
  {
    title: 'Web Billing Software',
    description: 'Developed a Web Billing Software enabling secure authentication, streamlined invoice generation, client management, and seamless payment processing. Implemented reporting, automation, and multi-platform access for efficient billing operations.',
    duration: 'Jan 2024 - Apr 2024',
    technologies: ['HTML', 'CSS', 'JavaScript', 'AJAX', 'PHP', 'MySQL', 'Bootstrap', 'jQuery'],
    githubLink: 'https://github.com/Prabhat-16/WebBilling',
  },
  {
    title: 'Full-Stack Construction Project',
    description: 'Full-stack construction project developed in core PHP with MySQL. Implemented features such as project management, task management, document management, communication, and reporting. Built using best practices for scalability and maintainability.',
    duration: 'Aug 2023 - Sep 2023',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/Prabhat-16/ConstructionWebsite',
  },
  {
    title: 'Movie Ticket Booking',
    description: 'Developed a responsive movie ticket booking website as a Frontend Developer. Built a client-facing platform for browsing movies, viewing showtimes, and booking tickets, along with an admin panel for managing schedules and ticket data.',
    duration: 'Sep 2024 - Dec 2024',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    githubLink: 'https://github.com/Prabhat-16/ONLINEMOVIEBOOKING',
  },
];

const Projects: React.FC = () => {
  return (
    <Box
      id="projects"
      sx={{
        py: 8,
        background: 'linear-gradient(135deg, #1e3a8a 0%, #1e1b4b 25%, #0f172a 50%, #020617 75%, #000000 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <CloudBackground zIndex={0} />

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
              gutterBottom 
              align="center"
              sx={{ 
                fontWeight: 800,
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
              ☁️ My Projects
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#ffffff',
                textAlign: 'center',
                maxWidth: '800px',
                mx: 'auto',
                fontSize: '1.1rem',
                mt: 2,
                opacity: 0.9,
                fontFamily: '"Inter", sans-serif',
                fontWeight: 400,
                letterSpacing: '0.01em',
                lineHeight: 1.6,
              }}
            >
              Explore my projects that demonstrate modern development practices and scalable solutions.
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ 
            mt: 2,
            '& .MuiGrid-item:last-child:nth-of-type(3n+1)': {
              marginLeft: 'auto',
              marginRight: 'auto',
              flexBasis: 'calc(33.333% - 32px)'
            }
          }}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} lg={4} key={project.title}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card 
                    elevation={3}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: 'rgba(19, 47, 76, 0.9)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(59, 130, 246, 0.3)',
                      borderRadius: '16px',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 16px 48px rgba(59, 130, 246, 0.25)',
                        borderColor: 'rgba(99, 102, 241, 0.5)',
                      },
                    }}
                  >
                    <CardContent sx={{ 
                      flexGrow: 1, 
                      p: 3,
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%'
                    }}>
                      <Box>
                        <Typography 
                          variant="h6"
                          component="h3"
                          gutterBottom 
                          sx={{ 
                            color: '#3b82f6',
                            fontWeight: 700,
                            fontFamily: '"Inter", sans-serif',
                            fontSize: '1.25rem',
                            mb: 1,
                            lineHeight: 1.4,
                            minHeight: '3.5rem',
                            display: 'flex',
                            alignItems: 'center'
                          }}
                        >
                          {project.title}
                        </Typography>
                        <Typography 
                          sx={{ 
                            fontSize: '0.8rem',
                            color: '#a5b4fc',
                            mb: 2,
                            fontFamily: '"Inter", sans-serif',
                            fontWeight: 500,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1
                          }}
                        >
                          <span style={{ fontSize: '1.2em' }}>⏳</span>
                          {project.duration}
                        </Typography>
                      </Box>
                      
                      <Typography 
                        variant="body2" 
                        paragraph
                        sx={{ 
                          color: '#e2e8f0',
                          mb: 3,
                          lineHeight: 1.7,
                          fontSize: '0.95rem',
                          flexGrow: 1,
                          fontFamily: '"Inter", sans-serif',
                          fontWeight: 400,
                        }}
                      >
                        {project.description}
                      </Typography>
                      
                      <Box sx={{ 
                        mt: 'auto',
                        pt: 2,
                        borderTop: '1px solid rgba(99, 102, 241, 0.1)'
                      }}>
                        <Box sx={{ 
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: 1,
                          mb: 2,
                          minHeight: '2.5rem'
                        }}>
                          {project.technologies.map((tech) => (
                            <Chip
                              key={tech}
                              label={tech}
                              size="small"
                              sx={{
                                background: 'rgba(99, 102, 241, 0.1)',
                                border: '1px solid rgba(99, 102, 241, 0.2)',
                                color: '#a5b4fc',
                                fontWeight: 500,
                                fontSize: '0.7rem',
                                height: '24px',
                                '& .MuiChip-label': {
                                  px: 1,
                                },
                                '&:hover': {
                                  background: 'rgba(99, 102, 241, 0.2)',
                                  transform: 'translateY(-1px)',
                                }
                              }}
                            />
                          ))}
                        </Box>
                        
                        <Button
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="outlined"
                          size="small"
                          startIcon={<GitHub sx={{ fontSize: '1.1rem' }} />}
                          sx={{
                            color: '#a5b4fc',
                            borderColor: 'rgba(99, 102, 241, 0.3)',
                            borderRadius: '8px',
                            textTransform: 'none',
                            fontWeight: 500,
                            fontSize: '0.85rem',
                            px: 2,
                            py: 0.8,
                            mt: 1,
                            transition: 'all 0.2s ease',
                            '&:hover': {
                              background: 'rgba(99, 102, 241, 0.1)',
                              borderColor: 'rgba(99, 102, 241, 0.5)',
                              transform: 'translateY(-1px)',
                              boxShadow: '0 4px 12px rgba(99, 102, 241, 0.15)',
                            }
                          }}
                        >
                          View on GitHub
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects; 