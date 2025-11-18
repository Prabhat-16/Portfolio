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
        py: 12,
        background: 'linear-gradient(180deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
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
                fontWeight: 900,
                position: 'relative',
                background: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 50%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block',
                fontFamily: '"Poppins", "Inter", sans-serif',
                letterSpacing: '-0.03em',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
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
              🚀 My Projects
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
                      background: 'linear-gradient(145deg, rgba(30, 27, 75, 0.6) 0%, rgba(15, 23, 42, 0.6) 100%)',
                      backdropFilter: 'blur(20px)',
                      border: '2px solid rgba(139, 92, 246, 0.3)',
                      borderRadius: '24px',
                      boxShadow: '0 20px 60px rgba(139, 92, 246, 0.2), 0 0 0 1px rgba(139, 92, 246, 0.1) inset',
                      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.8), transparent)',
                        opacity: 0,
                        transition: 'opacity 0.4s ease',
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'radial-gradient(circle at top right, rgba(139, 92, 246, 0.15), transparent 60%)',
                        pointerEvents: 'none',
                      },
                      '&:hover': {
                        transform: 'translateY(-15px) scale(1.03)',
                        boxShadow: '0 30px 80px rgba(139, 92, 246, 0.4), 0 0 0 2px rgba(139, 92, 246, 0.4) inset',
                        borderColor: 'rgba(167, 139, 250, 0.6)',
                        '&::before': {
                          opacity: 1,
                        }
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
                            color: '#a78bfa',
                            fontWeight: 800,
                            fontFamily: '"Inter", sans-serif',
                            fontSize: '1.4rem',
                            mb: 1,
                            lineHeight: 1.4,
                            minHeight: '3.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            textShadow: '0 4px 16px rgba(167, 139, 250, 0.5)',
                          }}
                        >
                          {project.title}
                        </Typography>
                        <Typography 
                          sx={{ 
                            fontSize: '0.85rem',
                            color: '#c4b5fd',
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
                          color: '#f1f5f9',
                          mb: 3,
                          lineHeight: 1.8,
                          fontSize: '0.95rem',
                          flexGrow: 1,
                          fontFamily: '"Inter", sans-serif',
                          fontWeight: 400,
                          opacity: 0.95,
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
                                background: 'rgba(139, 92, 246, 0.15)',
                                border: '1.5px solid rgba(139, 92, 246, 0.4)',
                                color: '#c4b5fd',
                                fontWeight: 700,
                                fontSize: '0.8rem',
                                height: '28px',
                                '& .MuiChip-label': {
                                  px: 2,
                                },
                                '&:hover': {
                                  background: 'rgba(139, 92, 246, 0.25)',
                                  borderColor: 'rgba(139, 92, 246, 0.6)',
                                  transform: 'translateY(-2px)',
                                  boxShadow: '0 6px 16px rgba(139, 92, 246, 0.3)',
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
                            color: '#c4b5fd',
                            borderColor: 'rgba(139, 92, 246, 0.5)',
                            borderWidth: '2px',
                            borderRadius: '12px',
                            textTransform: 'none',
                            fontWeight: 700,
                            fontSize: '0.95rem',
                            px: 3,
                            py: 1.2,
                            mt: 1,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              background: 'rgba(139, 92, 246, 0.2)',
                              borderColor: 'rgba(139, 92, 246, 0.8)',
                              color: '#a78bfa',
                              transform: 'translateY(-3px)',
                              boxShadow: '0 8px 20px rgba(139, 92, 246, 0.4)',
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