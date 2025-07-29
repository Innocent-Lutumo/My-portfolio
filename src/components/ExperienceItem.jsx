import React from "react";
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Chip,
} from "@mui/material";
import { CheckCircle, Work } from "@mui/icons-material";

export default function ExperienceItem({ experience }) {
  return (
    <Paper
      sx={{
        p: 4,
        mb: 4,
        bgcolor: "#1a1a1a",
        color: "white",
        boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
        borderRadius: 3,
        position: "relative",
        borderLeft: "5px solid #667eea",
      }}
    >
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", color: "#667eea", mb: 1 }}
      >
        {experience.role}
      </Typography>
      <Typography
        variant="subtitle1"
        color="text.secondary"
        sx={{ mb: 2, color: "#aaa" }}
      >
        {experience.organization} ({experience.year})
      </Typography>
      <List sx={{ ml: 2 }}>
        {experience.responsibilities.map((res, i) => (
          <ListItem key={i} disableGutters sx={{ py: 0.5 }}>
            <ListItemIcon sx={{ minWidth: 30, color: "#764ba2" }}>
              <CheckCircle sx={{ fontSize: "1rem" }} />
            </ListItemIcon>
            <ListItemText
              primary={res}
              primaryTypographyProps={{
                color: "white",
                opacity: 0.9,
              }}
            />
          </ListItem>
        ))}
      </List>
      {experience.achievements && (
        <Box sx={{ mt: 3 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#f093fb", mb: 1 }}
          >
            Achievements:
          </Typography>
          <List sx={{ ml: 2 }}>
            {experience.achievements.map((ach, i) => (
              <ListItem key={i} disableGutters sx={{ py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: 30, color: "#f093fb" }}>
                  <CheckCircle sx={{ fontSize: "1rem" }} />
                </ListItemIcon>
                <ListItemText
                  primary={ach}
                  primaryTypographyProps={{
                    color: "white",
                    opacity: 0.9,
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Paper>
  );
}