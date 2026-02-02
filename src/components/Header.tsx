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
    { label: "Our Story", href: "/our-story" },
    { label: "What We Do", href: "/what-we-do" },
    { label: "From the Field", href: "/from-the-field" },
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
      setIsMobile(window.innerWidth < 1150);
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
      const scrollY = window.scrollY;
      
      if (isMobile) {
        if (scrollY > 300 && !shrunk) {
          setShrunk(true);
        } else if (scrollY < 100 && shrunk) {
          setShrunk(false);
        }
      } else {
        if (scrollY > 220 && !shrunk) {
          setShrunk(true);
        } else if (scrollY < 50 && shrunk) {
          setShrunk(false);
        }
      }
    };
    
    let rafId: number | null = null;
    const throttledScroll = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          handleScroll();
          rafId = null;
        });
      }
    };
    
    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", throttledScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [isMobile, shrunk]);

  const toolbarHeight = shrunk ? 92 : (isMobile ? 200 : 160);

  if (!mounted) {
    return null;
  }

  return (
    <AppBar position="sticky" color="primary" elevation={0} sx={{ borderRadius: 0, transition: 'all 0.3s ease-in-out' }}>
      <Toolbar sx={{ minHeight: toolbarHeight, px: { xs: 1.5, sm: 2, md: 4 }, py: { xs: 1, md: 1 }, display: "flex", justifyContent: "space-between", alignItems: "center", transition: 'min-height 0.3s ease-in-out' }}>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", cursor: "pointer" }} onClick={() => router.push("/")}>
          <CardMedia
            component="img"
            image="/cece/photos/cece-logo.png"
            alt="CECE's Dream Logo"
            sx={{ 
              height: "auto", 
              width: shrunk ? 100 : { xs: 180, sm: 200, md: 220, lg: 280 }, 
              objectFit: "contain", 
              mb: !shrunk ? { xs: 0.5, md: 1 } : 0, 
              transition: 'width 0.3s ease-in-out' 
            }}
          />
          {!shrunk && (
            <Box>
              <Typography 
                sx={{ 
                  fontWeight: 700, 
                  letterSpacing: 1, 
                  fontSize: { xs: '0.5rem', md: '0.7rem' }, 
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
                  fontSize: { xs: '0.65rem', md: '0.85rem' }, 
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
              <IconButton color="inherit" edge="end" onClick={() => setDrawerOpen(true)} sx={{ p: { xs: 0.5, sm: 1 }, mr: { xs: 0.5, sm: 1 } }}>
                <MenuIcon sx={{ fontSize: { xs: 32, sm: 36 } }} />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
                  <IconButton onClick={() => setDrawerOpen(false)} sx={{ p: 1.5 }}>
                    <CloseIcon sx={{ fontSize: { xs: 32, sm: 36 } }} />
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
