// src/components/ExperienceDialog.jsx
import React from 'react';
import { Drawer, Box, IconButton, Typography } from '@mui/material'; // Import Drawer
import CloseIcon from '@mui/icons-material/Close';
import ExperienceItem from './ExperienceItem';

export default function ExperienceDialog({ open, onClose, experience }) {
  return (
    <Drawer
      anchor="right" // This is the key: opens from the right
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: '400px', // Set a fixed width for the drawer
          boxSizing: 'border-box',
          bgcolor: '#0a0a0a', // Apply your background color
          color: 'white',
        },
      }}
    >
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: '#1a1a1a' }}>
        <Typography variant="h6" component="div" sx={{ color: 'white' }}>
          My Professional Experience
        </Typography>
        <IconButton onClick={onClose} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Box sx={{ p: 2 }}>
        {experience.map((exp, index) => (
          <ExperienceItem key={index} experience={exp} compact={false} />
        ))}
      </Box>
    </Drawer>
  );
}