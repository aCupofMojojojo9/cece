"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import CardMedia from "@mui/material/CardMedia";
import HomeIcon from "@mui/icons-material/Home";


const navLinks = [
    { label: "Home", href: "/" },
    { label: "Our story", href: "#our-story" },
    { label: "What we do", href: "#what-we-do" },
    { label: "Get involved", href: "#get-involved" },
    { label: "Our Team", href: "/our-team" },
    { label: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [shrunk, setShrunk] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 900);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobile) {
        if (window.scrollY > 200 && !shrunk) {
          setShrunk(true);
        } else if (window.scrollY <= 200 && shrunk) {
          setShrunk(false);
        }
      } else {
        if (window.scrollY > 140 && !shrunk) {
          setShrunk(true);
        } else if (window.scrollY <= 140 && shrunk) {
          setShrunk(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile, shrunk]);

  const toolbarHeight = shrunk ? 92 : (isMobile ? 200 : 160);

  if (!mounted) {
    return null;
  }

  return (
    <AppBar position="sticky" color="primary" elevation={0} sx={{ borderRadius: 0}}>
      <Toolbar sx={{ minHeight: toolbarHeight, px: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", cursor: "pointer" }} onClick={() => router.push("/")}>
          <CardMedia
            component="img"
            image="/cece/cece-logo.png"
            alt="CECE's Dream Logo"
            sx={{ height: "auto", width: shrunk ? 100 : (isMobile ? 120 : 280), objectFit: "contain", mb: !shrunk && !isMobile ? 0.5 : 0 }}
          />
          {!shrunk && !isMobile && (
            <Box>
              <Typography 
                sx={{ 
                  fontWeight: 700, 
                  letterSpacing: 1, 
                  fontSize: '0.7rem', 
                  lineHeight: 1.4,
                  color: '#222',
                  display: 'block',
                  textTransform: 'uppercase'
                }}
              >
                Community Empowerment + Childhood Education
              </Typography>
              <Typography 
                sx={{ 
                  fontStyle: "italic", 
                  fontSize: '0.85rem', 
                  color: '#222',
                  display: 'block',
                  mt: 0.25
                }}
              >
                A nonprofit organization
              </Typography>
            </Box>
          )}
        </Box>
          {isMobile ? (
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
              <IconButton color="inherit" edge="end" onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
                  <IconButton onClick={() => setDrawerOpen(false)}>
                    <CloseIcon />
                  </IconButton>
                </Box>
                <List sx={{ minWidth: 250 }}>
                  {navLinks.map((link) => (
                    <ListItem key={link.label} disablePadding>
                      <ListItemButton component={Link} href={link.href} onClick={() => setDrawerOpen(false)}>
                        <ListItemText primary={link.label} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </Box>
          ) : (
            <Box sx={{ display: "flex", gap: 1 }}>
              {navLinks.map((link) => (
                link.label === "Home"
                  ? <IconButton key={link.label} color="inherit" component={Link} href={link.href} sx={{ px: 1.5 }}><HomeIcon /></IconButton>
                  : <Button key={link.label} color="inherit" component={Link} href={link.href} sx={{ px: 1.5 }}>
                      {link.label}
                    </Button>
              ))}
            </Box>
          )}
      </Toolbar>
    </AppBar>
  );
}
