"use client";

import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import Image from "next/image";
import CardMedia from "@mui/material/CardMedia";


const navLinks = [
    { label: "Community Empowerment Childhood Education", href: "/" },
    { label: "Our story", href: "#our-story" },
    { label: "What we do", href: "#what-we-do" },
    { label: "Get involved", href: "#get-involved" },
    { label: "Our Team", href: "#our-team" },
    { label: "Contact Us", href: "#contact-us" },
];

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppBar position="sticky" color="primary" elevation={0}>
      <Toolbar sx={{ px: 0, display: "flex" }}>
        <Box sx={{ display: 'flex', gap: 1, height: isMobile ? 300 : 92, justifyContent: "center" }}>
            <CardMedia
                component="img"
                image="https://cecesdream.org/_assets/media/fbb0a7197462a4c6fb74e78bd98f7ee0.png"
                alt="Description"
                sx={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
        </Box>
        {isMobile ? (
          <>
            <IconButton color="inherit" edge="start" onClick={() => setDrawerOpen(true)} sx={{ position: "absolute", right: 16, top: 16 }}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
              <List>
                {navLinks.map((link) => (
                  <ListItem key={link.label} disablePadding>
                    <ListItemButton component={Link} href={link.href} onClick={() => setDrawerOpen(false)}>
                      <ListItemText primary={link.label} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: 4, justifyContent: "right"}}>
            {navLinks.map((link) => (
              <Button key={link.label} color="inherit" component={Link} href={link.href} sx={{ fontWeight: 700 }}>
                {link.label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
