import React from "react";
import { Paper, Typography, Box, LinearProgress } from "@mui/material";

// Import icons from react-icons/si
import { SiReact, SiDjango, SiCisco, SiAdobe } from "react-icons/si";

const iconMap = {
  "React.js": SiReact,
  Django: SiDjango,
  "Network Troubleshooting": SiCisco, // Cisco icon for networking
  "UI/UX Design": SiAdobe, // Adobe icon for design (could be Figma or Sketch if preferred)
};

export default function SkillCard({ skill }) {
  const IconComponent = iconMap[skill.name] || SiReact; // fallback to React icon if not found

  return (
    <Paper
      sx={{
        width: 150,
        mr: 4,
        p: 3,
        textAlign: "center",
        height: "80%",
        bgcolor: "#1a1a1a",
        color: "white",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 5px 15px rgba(0,0,0,0.7)",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0 15px 30px rgba(102, 126, 234, 0.4)",
          "&::before": {
            transform: "scaleX(1)",
          },
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          bgcolor: "#667eea",
          transform: "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.3s ease-in-out",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 1,
          color: "#667eea",
          fontSize: "2rem",
        }}
      >
        <IconComponent />
      </Box>

      <Typography
        variant="h6"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 2, color: "#667eea" }}
      >
        {skill.name}
      </Typography>
      <Box sx={{ position: "relative", mb: 2 }}>
        <LinearProgress
          variant="determinate"
          value={skill.level}
          sx={{
            height: 8,
            borderRadius: 4,
            bgcolor: "#333",
            "& .MuiLinearProgress-bar": {
              bgcolor: "#667eea",
              borderRadius: 4,
            },
          }}
        />
        <Typography
          variant="body2"
          sx={{
            position: "absolute",
            right: 0,
            top: -30,
            fontWeight: "bold",
            fontSize: "0.9rem",
            color: "#667eea",
          }}
        >
          {skill.level}%
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 0.5,
        }}
      >
        {[...Array(5)].map((_, i) => (
          <IconComponent
            key={i}
            style={{
              fontSize: "1.2rem",
              color: i < Math.ceil(skill.level / 20) ? "#667eea" : "#333",
            }}
          />
        ))}
      </Box>
    </Paper>
  );
}
