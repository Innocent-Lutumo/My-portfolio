// src/components/ExperienceDialog.jsx
import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import ExperienceItem from './ExperienceItem'; // Make sure this path is correct relative to ExperienceDialog.jsx

// This component now receives the 'experience' data array as a prop
// It no longer functions as a Material-UI Dialog
export default function ExperienceDialog({ experience }) {
  if (!experience || !Array.isArray(experience) || experience.length === 0) {
    return (
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>No experience data available.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 2 }}> {/* Added padding for overall content */}
      <Typography variant="h5" sx={{ mb: 3, color: 'white', fontWeight: 'bold' }}>Professional Experience</Typography>
      {experience.map((exp, index) => (
        <React.Fragment key={index}>
          <ExperienceItem experience={exp} compact={false} /> {/* Assuming compact=false for full details */}
          {index < experience.length - 1 && (
            <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.1)' }} /> // Add a divider between items
          )}
        </React.Fragment>
      ))}
    </Box>
  );
}