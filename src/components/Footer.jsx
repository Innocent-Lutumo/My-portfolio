import React from "react";
import { Box, Typography, Container } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "black",
        color: "#bbb",
        py: 2,
        textAlign: "center",
        borderTop: "1px solid #333",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2">
          © {new Date().getFullYear()} Innocent Felix Lutumo. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}