import React from "react";
import { Paper, Typography, Box, LinearProgress } from "@mui/material";
import { SiReact, SiDjango, SiCisco, SiAdobe } from "react-icons/si";
// You might need to install react-icons if you haven't already: npm install react-icons

// Map skill names to their respective icons
const iconMap = {
  "React.js": SiReact,
  Django: SiDjango,
  "Network Troubleshooting": SiCisco,
  "UI/UX Design": SiAdobe,
  // Add more mappings as needed for your skills
  // Example for a general default icon if a specific one isn't found
  Default: SiReact, // Or any other general tech icon
};

export default function SkillCard({ skill }) {
  // Use the specific icon or a default one
  const IconComponent = iconMap[skill.name] || iconMap.Default;

  // Function to determine star color based on level (0-5 stars)
  const getStarColor = (index, level) => {
    // Each star represents 20% of the skill level
    const filledStars = Math.round(level / 20);
    return index < filledStars ? "#2196F3" : "#333"; // Primary blue for filled, dark grey for empty
  };

  return (
    <Paper
      elevation={6} // Using elevation for a lifted card effect
      sx={{
        p: 0, // Remove padding from Paper directly, manage inside Box
        borderRadius: 4,
        bgcolor: "#1a1a1a", // Consistent dark background
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        overflow: 'hidden', // Ensure rounded corners apply correctly
        transition: "transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out",
        boxShadow: "0 8px 20px rgba(0,0,0,0.4)", // Darker shadow for black background
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 15px 30px rgba(0,0,0,0.6)", // More prominent shadow on hover
        },
        minHeight: '200px', // Ensure a consistent height for skill cards
      }}
    >
      {/* Skill Header Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          p: 2, // Padding for this section
          bgcolor: "#121212", // Slightly lighter dark background for the header
          borderBottom: "1px solid rgba(255,255,255,0.1)", // Subtle separator
        }}
      >
        {/* Icon */}
        <Box
          sx={{
            mr: 2, // Margin right to separate icon from text
            color: "#2196F3", // Primary blue for icon
            fontSize: { xs: "2rem", sm: "2.5rem" }, // Responsive icon size
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconComponent />
        </Box>

        {/* Skill Name */}
        <Typography
          variant="h6" // Larger typography for the skill name
          component="div"
          sx={{
            fontWeight: "bold",
            // Blue gradient for the skill name, similar to project titles
            background: "linear-gradient(90deg, #2196F3, #21CBF3)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: 1.2, // Adjust line height for better appearance
          }}
        >
          {skill.name}
        </Typography>
      </Box>

      {/* Skill Details / Progress Section */}
      <Box sx={{ p: 2, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {/* Expertise Level Text */}
        <Typography
          variant="body2"
          sx={{
            color: "rgba(255,255,255,0.7)",
            mb: 1, // Margin below text
            fontWeight: 'bold',
          }}
        >
          Expertise: {skill.level}%
        </Typography>

        {/* Progress Bar */}
        <LinearProgress
          variant="determinate"
          value={skill.level}
          sx={{
            height: 10,
            borderRadius: 5,
            backgroundColor: "#2e2e2e", // Dark track color
            mb: 2, // Margin below progress bar
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#2196F3", // Primary blue for the progress bar
              borderRadius: 5,
            },
          }}
        />

        {/* Star Rating */}
        <Box sx={{ display: "flex", gap: 0.5, justifyContent: "flex-start", alignItems: 'center' }}>
          {[...Array(5)].map((_, i) => (
            <IconComponent // Re-using the skill icon for stars, but smaller
              key={i}
              style={{
                fontSize: "1.2rem", // Size of star icons
                color: getStarColor(i, skill.level), // Dynamic color based on level
                opacity: 1, // Keep opacity consistent for stars
              }}
            />
          ))}
        </Box>
      </Box>
    </Paper>
  );
}