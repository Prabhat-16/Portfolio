import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Link, Button, TextField, CircularProgress, Alert } from '@mui/material';
import { Email, LinkedIn, LocationOn, GitHub, Twitter, Instagram } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: null, message: '' });

    const webhookUrl = process.env.REACT_APP_DISCORD_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error('Discord Error: REACT_APP_DISCORD_WEBHOOK_URL is missing.');
      setStatus({ 
        type: 'error', 
        message: 'System Error: Dispatch URL not found. Please configure the webhook in .env.' 
      });
      setIsSending(false);
      return;
    }

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: "Portfolio Bot",
          avatar_url: "https://i.imgur.com/4M34hi2.png",
          embeds: [{
            title: "📡 New Incoming Transmission",
            color: 6735233, // High-tech Green
            fields: [
              { name: "👤 Sender", value: formData.name, inline: true },
              { name: "📧 Email", value: formData.email, inline: true },
              { name: "💬 Message", value: formData.message }
            ],
            footer: { text: "System Info: Portfolio v2.4.0 • Node.js Environment" },
            timestamp: new Date().toISOString()
          }]
        })
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'TRANSMISSION_SUCCESS: Message dispatched to system logs.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Webhook rejected the request');
      }
    } catch (error) {
      console.error('Discord Webhook Error:', error);
      setStatus({ type: 'error', message: 'TRANSMISSION_FAILED: Connection to dispatch server lost.' });
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Box
      id="contact"
      sx={{
        py: 12,
        bgcolor: 'transparent',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          {/* Section Header - Centered as per screenshot */}
          <Box sx={{ mb: 8, textAlign: 'center' }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 900,
                color: '#f1f5f9',
                fontFamily: "'Fira Code', monospace",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 3,
                mb: 2
              }}
            >
              <span style={{ color: '#10b981' }}>{">"}</span> Get In Touch
            </Typography>
            <Typography
              sx={{
                color: '#94a3b8',
                fontSize: '1.1rem',
                fontFamily: "'Inter', sans-serif"
              }}
            >
              Have a project in mind or want to collaborate? Drop me a message!
            </Typography>
          </Box>

          <Grid container spacing={4} alignItems="stretch">
            {/* Contact Form - Terminal Style */}
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  bgcolor: '#0f172a',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
                  position: 'relative',
                  backdropFilter: 'blur(10px)',
                  height: '100%'
                }}
              >
                {/* Terminal Header */}
                <Box 
                  sx={{ 
                    bgcolor: 'rgba(30, 41, 59, 0.7)', 
                    p: 2, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    borderBottom: '1px solid rgba(16, 185, 129, 0.1)' 
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ef4444', opacity: 0.8 }} />
                      <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#f59e0b', opacity: 0.8 }} />
                      <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#10b981', opacity: 0.8 }} />
                    </Box>
                    <Typography sx={{ color: '#10b981', fontSize: '0.85rem', ml: 1, fontFamily: "'Fira Code', monospace", fontWeight: 600 }}>
                      contact_form.sh
                    </Typography>
                  </Box>
                  <Typography sx={{ color: '#475569', fontSize: '0.75rem', fontFamily: "'Fira Code', monospace" }}>
                    ~/messages/new
                  </Typography>
                </Box>
                
                {/* Terminal Body */}
                <Box sx={{ p: { xs: 3, md: 5 }, pb: 12 }}>
                  <Typography sx={{ color: '#10b981', mb: 4, fontFamily: "'Fira Code', monospace", fontSize: '1rem' }}>
                    <span style={{ opacity: 0.5 }}>$</span> ./send_message --to prabhat
                  </Typography>

                  <form onSubmit={handleSubmit}>
                    {status.type && (
                      <Alert 
                        severity={status.type} 
                        sx={{ 
                          mb: 4, 
                          bgcolor: status.type === 'success' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                          color: status.type === 'success' ? '#10b981' : '#ef4444',
                          border: `1px solid ${status.type === 'success' ? '#10b981' : '#ef4444'}`,
                          '& .MuiAlert-icon': { color: status.type === 'success' ? '#10b981' : '#ef4444' }
                        }}
                      >
                        {status.message}
                      </Alert>
                    )}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      <Box>
                        <Typography sx={{ color: '#10b981', mb: 1.5, fontFamily: "'Fira Code', monospace", fontSize: '0.9rem', opacity: 0.9 }}>
                          --name
                        </Typography>
                        <TextField
                          fullWidth
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          variant="standard"
                          required
                          disabled={isSending}
                          InputProps={{ disableUnderline: true }}
                          sx={{
                            bgcolor: 'rgba(15, 23, 42, 0.5)',
                            p: 2,
                            borderRadius: '8px',
                            border: '1px solid rgba(16, 185, 129, 0.1)',
                            '&:hover': { borderColor: 'rgba(16, 185, 129, 0.3)' },
                            '& input': {
                              color: '#f1f5f9',
                              fontFamily: "'Fira Code', monospace",
                              fontSize: '1rem',
                              '&::placeholder': { color: '#475569', opacity: 1 }
                            },
                          }}
                        />
                      </Box>

                      <Box>
                        <Typography sx={{ color: '#10b981', mb: 1.5, fontFamily: "'Fira Code', monospace", fontSize: '0.9rem', opacity: 0.9 }}>
                          --email
                        </Typography>
                        <TextField
                          fullWidth
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          variant="standard"
                          required
                          disabled={isSending}
                          InputProps={{ disableUnderline: true }}
                          sx={{
                            bgcolor: 'rgba(15, 23, 42, 0.5)',
                            p: 2,
                            borderRadius: '8px',
                            border: '1px solid rgba(16, 185, 129, 0.1)',
                            '&:hover': { borderColor: 'rgba(16, 185, 129, 0.3)' },
                            '& input': {
                              color: '#f1f5f9',
                              fontFamily: "'Fira Code', monospace",
                              fontSize: '1rem',
                              '&::placeholder': { color: '#475569', opacity: 1 }
                            },
                          }}
                        />
                      </Box>

                      <Box>
                        <Typography sx={{ color: '#10b981', mb: 1.5, fontFamily: "'Fira Code', monospace", fontSize: '0.9rem', opacity: 0.9 }}>
                          --message
                        </Typography>
                        <TextField
                          fullWidth
                          name="message"
                          placeholder="Your message content..."
                          value={formData.message}
                          onChange={handleChange}
                          multiline
                          rows={4}
                          variant="standard"
                          required
                          disabled={isSending}
                          InputProps={{ disableUnderline: true }}
                          sx={{
                            bgcolor: 'rgba(15, 23, 42, 0.5)',
                            p: 2,
                            borderRadius: '8px',
                            border: '1px solid rgba(16, 185, 129, 0.1)',
                            '&:hover': { borderColor: 'rgba(16, 185, 129, 0.3)' },
                            '& textarea': {
                              color: '#f1f5f9',
                              fontFamily: "'Fira Code', monospace",
                              fontSize: '1rem',
                              '&::placeholder': { color: '#475569', opacity: 1 }
                            },
                          }}
                        />
                      </Box>
                    </Box>

                    {/* Submit Bar */}
                    <Button
                      type="submit"
                      fullWidth
                      disabled={isSending}
                      sx={{
                        mt: 6,
                        py: 2.5,
                        bgcolor: '#10b981',
                        color: '#000',
                        fontSize: '1.1rem',
                        fontWeight: 900,
                        fontFamily: "'Fira Code', monospace",
                        borderRadius: '0 0 12px 12px',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        '&:hover': {
                          bgcolor: '#059669',
                        },
                        '&.Mui-disabled': {
                          bgcolor: 'rgba(16, 185, 129, 0.3)',
                          color: 'rgba(0, 0, 0, 0.5)'
                        }
                      }}
                    >
                      {isSending ? (
                        <>
                          <CircularProgress size={24} sx={{ color: '#000', mr: 2 }} />
                          SENDING...
                        </>
                      ) : (
                        'SEND_MESSAGE'
                      )}
                    </Button>
                  </form>
                </Box>
              </Box>
            </Grid>

            {/* Side Info - Reorganized into a single Terminal */}
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  bgcolor: '#0f172a',
                  border: '1px solid rgba(56, 189, 248, 0.1)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {/* Info Terminal Header */}
                <Box sx={{ bgcolor: 'rgba(30, 41, 59, 0.6)', p: 2, borderBottom: '1px solid rgba(56, 189, 248, 0.1)' }}>
                  <Typography sx={{ color: '#38bdf8', fontSize: '0.85rem', fontFamily: "'Fira Code', monospace", fontWeight: 600 }}>
                    system_info.log
                  </Typography>
                </Box>

                <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', gap: 5 }}>
                  {/* Contact Info Section */}
                  <Box>
                    <Typography sx={{ color: '#38bdf8', mb: 3, fontFamily: "'Fira Code', monospace", fontSize: '0.9rem' }}>
                      $ cat user_details.json
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                      {[
                        { icon: <Email />, label: 'EMAIL', value: 'mprabhat1607@gmail.com', href: 'mailto:mprabhat1607@gmail.com' },
                        { icon: <LinkedIn />, label: 'LINKEDIN', value: 'prabhat-mishra', href: 'https://www.linkedin.com/in/prabhat-web-developer/' },
                        { icon: <LocationOn />, label: 'LOCATION', value: 'Pune, Maharashtra', href: null },
                      ].map((contact, index) => (
                        <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2.5 }}>
                          <Box sx={{ color: '#38bdf8', mt: 0.5 }}>{contact.icon}</Box>
                          <Box>
                            <Typography sx={{ color: '#475569', fontSize: '0.65rem', fontFamily: "'Fira Code', monospace", fontWeight: 700 }}>
                              {contact.label}
                            </Typography>
                            {contact.href ? (
                              <Link href={contact.href} target="_blank" underline="none" sx={{ color: '#f1f5f9', fontSize: '0.95rem', fontFamily: "'Fira Code', monospace", '&:hover': { color: '#38bdf8' } }}>
                                {contact.value}
                              </Link>
                            ) : (
                              <Typography sx={{ color: '#f1f5f9', fontSize: '0.95rem', fontFamily: "'Fira Code', monospace" }}>{contact.value}</Typography>
                            )}
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  {/* Social Links Section */}
                  <Box>
                    <Typography sx={{ color: '#38bdf8', mb: 3, fontFamily: "'Fira Code', monospace", fontSize: '0.9rem' }}>
                      $ ls social_handles/
                    </Typography>
                    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 1.5 }}>
                      {[
                        { icon: <GitHub />, label: 'GITHUB', href: 'https://github.com/Prabhat-16' },
                        { icon: <Twitter />, label: 'TWITTER', href: 'https://x.com/PRABHAT160703' },
                        { icon: <Instagram />, label: 'INSTAGRAM', href: 'https://www.instagram.com/prabhat_.16' },
                      ].map((social, index) => (
                        <Button
                          key={index}
                          href={social.href}
                          target="_blank"
                          startIcon={social.icon}
                          sx={{
                            justifyContent: 'flex-start',
                            color: '#38bdf8',
                            border: '1px solid rgba(56, 189, 248, 0.1)',
                            bgcolor: 'rgba(56, 189, 248, 0.05)',
                            fontFamily: "'Fira Code', monospace",
                            textTransform: 'none',
                            fontSize: '0.8rem',
                            py: 1.5,
                            '&:hover': { 
                              borderColor: '#38bdf8', 
                              bgcolor: 'rgba(56, 189, 248, 0.1)',
                              color: '#fff' 
                            }
                          }}
                        >
                          {social.label}
                        </Button>
                      ))}
                    </Box>
                  </Box>

                  {/* Footer Credits */}
                  <Box sx={{ mt: 'auto', pt: 4, borderTop: '1px solid rgba(30, 41, 59, 0.8)' }}>
                    <Typography sx={{ color: '#475569', fontSize: '0.75rem', fontFamily: "'Fira Code', monospace", lineHeight: 1.8 }}>
                      SYSTEM: v2.4.0-stable<br />
                      USER: prabhat@portfolio<br />
                      © {new Date().getFullYear()} Built with React & MUI
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;
