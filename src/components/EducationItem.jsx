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
import { CheckCircle, School } from "@mui/icons-material";

export default function EducationItem({ education }) {
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
        borderLeft: "5px solid #764ba2",
      }}
    >
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", color: "#764ba2", mb: 1 }}
      >
        {education.award}
      </Typography>
      <Typography
        variant="subtitle1"
        color="text.secondary"
        sx={{ mb: 2, color: "#aaa" }}
      >
        {education.institution} ({education.duration})
      </Typography>
      <List sx={{ ml: 2 }}>
        {education.status && (
          <ListItem disableGutters sx={{ py: 0.5 }}>
            <ListItemIcon sx={{ minWidth: 30, color: "#f093fb" }}>
              <CheckCircle sx={{ fontSize: "1rem" }} />
            </ListItemIcon>
            <ListItemText
              primary={`Status: ${education.status}`}
              primaryTypographyProps={{
                color: "white",
                opacity: 0.9,
              }}
            />
          </ListItem>
        )}
        {education.gpa && (
          <ListItem disableGutters sx={{ py: 0.5 }}>
            <ListItemIcon sx={{ minWidth: 30, color: "#f093fb" }}>
              <CheckCircle sx={{ fontSize: "1rem" }} />
            </ListItemIcon>
            <ListItemText
              primary={`GPA: ${education.gpa}`}
              primaryTypographyProps={{
                color: "white",
                opacity: 0.9,
              }}
            />
          </ListItem>
        )}
        {education.subjects && (
          <ListItem disableGutters sx={{ py: 0.5 }}>
            <ListItemIcon sx={{ minWidth: 30, color: "#f093fb" }}>
              <CheckCircle sx={{ fontSize: "1rem" }} />
            </ListItemIcon>
            <ListItemText
              primary={`Subjects: ${education.subjects}`}
              primaryTypographyProps={{
                color: "white",
                opacity: 0.9,
              }}
            />
          </ListItem>
        )}
        {education.grade && (
          <ListItem disableGutters sx={{ py: 0.5 }}>
            <ListItemIcon sx={{ minWidth: 30, color: "#f093fb" }}>
              <CheckCircle sx={{ fontSize: "1rem" }} />
            </ListItemIcon>
            <ListItemText
              primary={`Grade: ${education.grade}`}
              primaryTypographyProps={{
                color: "white",
                opacity: 0.9,
              }}
            />
          </ListItem>
        )}
        {education.highlights && (
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", color: "#f093fb" }}
            >
              Highlights:
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
                mt: 1,
              }}
            >
              {education.highlights.map((highlight, i) => (
                <Chip
                  key={i}
                  label={highlight}
                  size="small"
                  sx={{
                    bgcolor: "#333",
                    color: "#f093fb",
                    border: "1px solid #f093fb",
                  }}
                />
              ))}
            </Box>
          </Box>
        )}
      </List>
    </Paper>
  );
}