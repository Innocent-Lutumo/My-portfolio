import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import { Email, Phone, GitHub, LinkedIn, Code } from "@mui/icons-material";
import { Zoom } from "@mui/material";

export default function ContactDialog({ open, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      TransitionComponent={Zoom}
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
            Get In Touch
          </Typography>
          <IconButton onClick={onClose} sx={{ color: "white" }}>
            <Code />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent dividers sx={{ py: 3 }}>
        <Typography
          variant="body1"
          paragraph
          sx={{ color: "#ccc", textAlign: "center", mb: 3 }}
        >
          I'm always open to new opportunities and collaborations. Feel free to
          reach out!
        </Typography>
        <List>
          <ListItem sx={{ justifyContent: "center", py: 1 }}>
            <ListItemIcon sx={{ color: "#667eea" }}>
              <Email />
            </ListItemIcon>
            <ListItemText
              primary="innocrng23@gmail.com"
              primaryTypographyProps={{
                color: "white",
                fontSize: "1.1rem",
              }}
            />
          </ListItem>
          <ListItem sx={{ justifyContent: "center", py: 1 }}>
            <ListItemIcon sx={{ color: "#667eea" }}>
              <Phone />
            </ListItemIcon>
            <ListItemText
              primary="+255 616 580 004"
              primaryTypographyProps={{
                color: "white",
                fontSize: "1.1rem",
              }}
            />
          </ListItem>
        </List>
        <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2 }}>
          <IconButton
            href="https://github.com/Innocent-Lutumo/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white", "&:hover": { color: "#667eea" } }}
          >
            <GitHub sx={{ fontSize: "2.5rem" }} />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/innocent-lutumo-56969b35b/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white", "&:hover": { color: "#667eea" } }}
          >
            <LinkedIn sx={{ fontSize: "2.5rem" }} />
          </IconButton>
        </Box>
      </DialogContent>
      <DialogActions
        sx={{
          bgcolor: "#0a0a0a",
          borderTop: "1px solid #333",
          p: 2,
          justifyContent: "center",
        }}
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
