import React from "react";
import { Paper, Typography, Box, LinearProgress } from "@mui/material";
import { SiReact, SiDjango, SiCisco, SiAdobe } from "react-icons/si";

const iconMap = {
  "React.js": SiReact,
  Django: SiDjango,
  "Network Troubleshooting": SiCisco,
  "UI/UX Design": SiAdobe,
};

export default function SkillCard({ skill }) {
  const IconComponent = iconMap[skill.name] || SiReact;

  return (
    <Paper
      elevation={6}
      sx={{
        p: 3,
        borderRadius: 4,
        bgcolor: "#101010",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        boxShadow: "0px 6px 20px rgba(102, 126, 234, 0.15)",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 12px 24px rgba(102, 126, 234, 0.3)",
        },
      }}
    >
      {/* Icon */}
      <Box
        sx={{
          mb: 2,
          color: "#667eea",
          fontSize: "2.8rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconComponent />
      </Box>

      {/* Skill Name */}
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          color: "#e0e0e0",
          mb: 2,
        }}
      >
        {skill.name}
      </Typography>

      {/* Progress Bar */}
      <Box sx={{ width: "100%", mb: 2, position: "relative" }}>
        <LinearProgress
          variant="determinate"
          value={skill.level}
          sx={{
            height: 10,
            borderRadius: 5,
            backgroundColor: "#2e2e2e",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#667eea",
              borderRadius: 5,
            },
          }}
        />
        <Typography
          variant="body2"
          sx={{
            position: "absolute",
            top: -24,
            right: 0,
            fontSize: "0.8rem",
            fontWeight: "bold",
            color: "#999",
          }}
        >
          {skill.level}%
        </Typography>
      </Box>

      {/* Star-like Icon Level Display */}
      <Box sx={{ display: "flex", gap: 0.5, justifyContent: "center" }}>
        {[...Array(5)].map((_, i) => (
          <IconComponent
            key={i}
            style={{
              fontSize: "1.2rem",
              color: i < Math.round(skill.level / 20) ? "#667eea" : "#333",
              opacity: i < Math.round(skill.level / 20) ? 1 : 0.3,
            }}
          />
        ))}
      </Box>
    </Paper>
  );
}
