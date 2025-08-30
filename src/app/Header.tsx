"use client";

import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

export default function Header() {
  const theme = useTheme();
  return (
    <AppBar position="sticky" color="primary" elevation={2}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', px: theme.spacing(4) }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 700, color: theme.palette.primary.contrastText }}>
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            Community Empowerment
          </Link>
        </Typography>
        <Box sx={{ display: 'flex', gap: theme.spacing(3) }}>
          <Button color="inherit" component={Link} href="#our-story" sx={{ fontWeight: 600 }}>Our Story</Button>
          <Button color="inherit" component={Link} href="#what-we-do" sx={{ fontWeight: 600 }}>What We Do</Button>
          <Button color="inherit" component={Link} href="#get-involved" sx={{ fontWeight: 600 }}>Get Involved</Button>
          <Button color="inherit" component={Link} href="#our-team" sx={{ fontWeight: 600 }}>Our Team</Button>
          <Button color="inherit" component={Link} href="#contact-us" sx={{ fontWeight: 600 }}>Contact Us</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
