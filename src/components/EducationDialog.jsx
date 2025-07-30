// src/components/EducationDialog.jsx
import React from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton, Typography, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EducationItem from './EducationItem'; // Make sure this path is correct relative to EducationDialog.jsx

export default function EducationDialog({ open, onClose, education }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: '#1a1a1a', color: 'white' }}>
        My Education Background
        <IconButton onClick={onClose} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ bgcolor: '#0a0a0a', color: 'white', py: 2 }}>
        {education.map((edu, index) => (
          <EducationItem key={index} education={edu} compact={false} />
        ))}
      </DialogContent>
    </Dialog>
  );
}