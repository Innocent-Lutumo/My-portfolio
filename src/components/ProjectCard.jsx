import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Chip,
} from "@mui/material";
import { Code, Launch } from "@mui/icons-material";

export default function ProjectCard({ project, onViewDetails }) {
  return (
    <Card
      sx={{
        width: 350,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#1a1a1a",
        color: "white",
        boxShadow: "0 8px 25px rgba(0,0,0,0.7)",
        borderRadius: 3,
        overflow: "hidden",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0 15px 30px rgba(102, 126, 234, 0.4)",
        },
        borderTop: "5px solid #667eea",
      }}
    >
      <CardContent sx={{ flexGrow: 1, pt: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Code sx={{ color: "#667eea", mr: 1 }} />
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "bold", mb: 0, color: "#667eea" }}
          >
            {project.title}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          sx={{ color: "#ccc", lineHeight: 1.6, mb: 3 }}
        >
          {project.description}
        </Typography>
        <Box sx={{ mb: 3 }}>
          {project.technologies.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              sx={{
                mr: 1,
                mb: 1,
                bgcolor: "#333",
                color: "#764ba2",
                fontWeight: "500",
                border: "1px solid #764ba2",
              }}
            />
          ))}
        </Box>
      </CardContent>
      <Box sx={{ p: 2, pt: 0 }}>
        <Button
          variant="outlined"
          fullWidth
          onClick={() => onViewDetails(project)}
          startIcon={<Launch />}
          sx={{
            borderColor: "#667eea",
            color: "#667eea",
            "&:hover": {
              borderColor: "#764ba2",
              backgroundColor: "rgba(102, 126, 234, 0.1)",
              color: "#764ba2",
            },
            transition: "all 0.3s ease",
          }}
        >
          View Details
        </Button>
      </Box>
    </Card>
  );
}
