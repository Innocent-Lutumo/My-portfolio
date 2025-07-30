// src/components/EducationDialog.jsx
import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import EducationItem from './EducationItem'; // Make sure this path is correct relative to EducationDialog.jsx

// This component now receives the 'education' data array as a prop
// It no longer functions as a Material-UI Dialog
export default function EducationDialog({ education }) {
  if (!education || !Array.isArray(education) || education.length === 0) {
    return (
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>No education data available.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 2 }}> {/* Added padding for overall content */}
      <Typography variant="h5" sx={{ mb: 3, color: 'white', fontWeight: 'bold' }}>Education Background</Typography>
      {education.map((edu, index) => (
        <React.Fragment key={index}>
          <EducationItem education={edu} compact={false} />
          {index < education.length - 1 && (
            <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.1)' }} /> // Add a divider between items
          )}
        </React.Fragment>
      ))}
    </Box>
  );
}