import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import { Link } from 'react-scroll';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import DevicesIcon from '@mui/icons-material/Devices';
import MailIcon from '@mui/icons-material/Mail';
import DescriptionIcon from '@mui/icons-material/Description';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const navItems = [
    { name: 'Home', icon: <HomeIcon />, to: 'hero' },
    { name: 'About', icon: <PersonIcon />, to: 'about' },
    { name: 'Skills', icon: <DevicesIcon />, to: 'skills' },
    { name: 'Projects', icon: <DescriptionIcon />, to: 'projects' },
    { name: 'Contact', icon: <MailIcon />, to: 'contact' },
  ];

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 30,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        px: 2,
        py: 1,
        bgcolor: 'rgba(15, 23, 42, 0.8)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        border: '1px solid rgba(74, 222, 128, 0.2)',
        display: 'flex',
        gap: 1,
        boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
      }}
    >
      {navItems.map((item) => (
        <Tooltip key={item.name} title={item.name} arrow placement="top">
          <motion.div
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <IconButton
              component={Link}
              to={item.to}
              smooth={true}
              duration={500}
              sx={{
                color: '#94a3b8',
                '&:hover': {
                  color: '#4ade80',
                  bgcolor: 'rgba(74, 222, 128, 0.1)',
                },
                '&.active': {
                  color: '#4ade80',
                  bgcolor: 'rgba(74, 222, 128, 0.1)',
                }
              }}
            >
              {item.icon}
            </IconButton>
          </motion.div>
        </Tooltip>
      ))}
    </Box>
  );
};

export default Navbar;
