import React from "react";
import {
  Drawer,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Person,
  Work,
  Code,
  Email,
  GitHub,
  LinkedIn,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";

export default function NavigationDrawers({
  leftNavOpen,
  rightNavOpen,
  setLeftNavOpen,
  setRightNavOpen,
  setContactDialogOpen,
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navItems = [
    { name: "About", icon: <Person /> },
    { name: "Experience", icon: <Work /> },
    { name: "Projects", icon: <Code /> },
    { name: "Contact", icon: <Email /> },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setLeftNavOpen(false); // Close drawer after click
    }
  };

  return (
    <>
      {/* Left Drawer */}
      <Drawer
        anchor="left"
        open={leftNavOpen}
        onClose={() => setLeftNavOpen(false)}
        transitionDuration={300}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            width: 260,
            bgcolor: "#111",
            color: "white",
            borderRight: "1px solid #333",
            boxShadow: "4px 0 10px rgba(0,0,0,0.5)",
          },
        }}
        variant={isMobile ? "temporary" : "persistent"}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
          <IconButton onClick={() => setLeftNavOpen(false)} sx={{ color: "#667eea" }}>
            <ChevronLeft />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem
              key={item.name}
              button
              onClick={() => {
                if (item.name === "Contact") {
                  setContactDialogOpen(true);
                  setLeftNavOpen(false);
                } else {
                  handleScroll(item.name);
                }
              }}
              sx={{
                "&:hover": {
                  bgcolor: "#1e1e1e",
                },
                cursor: "pointer",
              }}
            >
              <ListItemIcon sx={{ color: "#667eea" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Right Drawer (optional) */}
      <Drawer
        anchor="right"
        open={rightNavOpen}
        onClose={() => setRightNavOpen(false)}
        transitionDuration={300}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            width: 260,
            bgcolor: "#111",
            color: "white",
            borderLeft: "1px solid #333",
            boxShadow: "-4px 0 10px rgba(0,0,0,0.5)",
          },
        }}
        variant={isMobile ? "temporary" : "persistent"}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-start", p: 1 }}>
          <IconButton onClick={() => setRightNavOpen(false)} sx={{ color: "#667eea" }}>
            <ChevronRight />
          </IconButton>
        </Box>
        <Box sx={{ px: 3, pt: 2 }}>
          <Typography variant="h6" sx={{ mb: 2, color: "#667eea" }}>
            Quick Links
          </Typography>
          <List>
            <ListItem
              button
              component="a"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ListItemIcon sx={{ color: "#667eea" }}>
                <GitHub />
              </ListItemIcon>
              <ListItemText primary="GitHub" />
            </ListItem>
            <ListItem
              button
              component="a"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ListItemIcon sx={{ color: "#667eea" }}>
                <LinkedIn />
              </ListItemIcon>
              <ListItemText primary="LinkedIn" />
            </ListItem>
            <ListItem button onClick={() => {
              setContactDialogOpen(true);
              setRightNavOpen(false);
            }}>
              <ListItemIcon sx={{ color: "#667eea" }}>
                <Email />
              </ListItemIcon>
              <ListItemText primary="Contact Me" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
