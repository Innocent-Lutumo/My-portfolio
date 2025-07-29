import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Box,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
  IconButton,
} from "@mui/material";
import { Code, CheckCircle } from "@mui/icons-material";
import { Fade } from "@mui/material";

export default function ProjectDialog({ project, open, onClose }) {
  if (!project) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 500 }}
      PaperProps={{
        sx: {
          bgcolor: "#1a1a1a",
          color: "white",
          boxShadow: "0 15px 40px rgba(0,0,0,0.8)",
          borderRadius: 3,
          border: "1px solid #333",
        },
      }}
    >
      <DialogTitle
        sx={{
          bgcolor: "#0a0a0a",
          borderBottom: "1px solid #333",
          color: "#667eea",
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#667eea" }}
          >
            {project.title}
          </Typography>
          <IconButton onClick={onClose} sx={{ color: "white" }}>
            <Code />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent dividers sx={{ py: 3 }}>
        <Typography variant="body1" paragraph sx={{ color: "#ccc" }}>
          {project.description}
        </Typography>
        <Divider sx={{ my: 2, borderColor: "#333" }} />
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", mb: 1, color: "#764ba2" }}
        >
          Technologies Used:
        </Typography>
        <Box sx={{ mb: 2 }}>
          {project.technologies.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              sx={{
                mr: 1,
                mb: 1,
                bgcolor: "#333",
                color: "#f093fb",
                border: "1px solid #f093fb",
              }}
            />
          ))}
        </Box>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", mb: 1, color: "#764ba2" }}
        >
          Key Features:
        </Typography>
        <List dense>
          {project.features.map((feature, i) => (
            <ListItem key={i} disableGutters sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 30, color: "#f093fb" }}>
                <CheckCircle sx={{ fontSize: "1rem" }} />
              </ListItemIcon>
              <ListItemText
                primary={feature}
                primaryTypographyProps={{ color: "#ccc" }}
              />
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions
        sx={{ bgcolor: "#0a0a0a", borderTop: "1px solid #333", p: 2 }}
      >
        <Button
          onClick={onClose}
          sx={{
            color: "#667eea",
            "&:hover": { bgcolor: "rgba(102, 126, 234, 0.1)" },
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
