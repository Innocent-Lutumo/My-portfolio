// src/components/SkillsContent.jsx
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import SkillCard from './SkillCard'; // Assuming SkillCard is in the same 'components' directory

const SkillsContent = ({ skills }) => {
  return (
    <Box sx={{ p: { xs: 1, sm: 2, md: 3 } }}> {/* Responsive padding */}
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, color: 'white' }}>
        My Skills
      </Typography>
      {skills.length > 0 ? (
        <Grid container spacing={3}> {/* Use Grid for responsive layout of skill cards */}
          {skills.map((skill) => (
            <Grid item xs={12} sm={6} md={6} key={skill.name}> {/* Each card takes full width on xs, half on sm/md */}
              <SkillCard skill={skill} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'center' }}>
          No skills to display.
        </Typography>
      )}
    </Box>
  );
};

export default SkillsContent;