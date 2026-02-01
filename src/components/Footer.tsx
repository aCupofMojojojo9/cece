'use client';

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CardMedia from "@mui/material/CardMedia";
import { useTheme } from "@mui/material/styles";

export default function Footer() {
  const theme = useTheme();
  return (
    <Box component="footer" sx={{ background: theme.palette.primary.main, color: theme.palette.primary.contrastText, pt: 6, pb: 0, }}>
      <Box
        sx={{
          mx: 'auto',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          px: '10%',
          display: 'flex',
          alignItems: 'stretch',
          justifyContent: 'space-evenly'
        }}
      >
        {/* Social Section */}
        <Box sx={{ width: { xs: '100%', md: '33.33%' },
            flex: '1 1 0', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', py: 2 }}>
          <Typography variant="h3" fontWeight={700} mb={2} color="white">
            Follow Us
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
            <IconButton component="a" href="https://www.facebook.com/cecesdreamnonprofit" target="_blank" rel="noopener noreferrer" sx={{ width: 56, height: 56, background: '#1877F3', borderRadius: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'center', '&:hover': { background: '#1877F3', opacity: 0.9 } }}>
              <svg width="48" height="48" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.67 56V30.5h8.55l1.28-9.93h-9.83v-6.35c0-2.87.8-4.83 4.92-4.83h5.26V.37A70.5 70.5 0 0 0 35.2 0c-7.58 0-12.77 4.63-12.77 13.13v7.33h-8.58V30.5h8.58V56h9.24z" fill="#fff"/>
              </svg>
            </IconButton>
            <IconButton sx={{ display: 'none', width: 56, height: 56, background: '#0A66C2', borderRadius: 1.5, '&:hover': { background: '#0A66C2', opacity: 0.9 } }}><LinkedInIcon sx={{ color: '#fff', fontSize: 44 }} /></IconButton>
            <IconButton component="a" href="https://www.instagram.com/cecesdreamnonprofit" target="_blank" rel="noopener noreferrer" sx={{ width: 56, height: 56, background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)', borderRadius: 1.5, '&:hover': { opacity: 0.9 } }}><InstagramIcon sx={{ color: '#fff', fontSize: 44 }} /></IconButton>
            <IconButton sx={{ display: 'none', width: 56, height: 56, background: '#FF0000', borderRadius: 1.5, '&:hover': { background: '#FF0000', opacity: 0.9 } }}><YouTubeIcon sx={{ color: '#fff', fontSize: 44 }} /></IconButton>
          </Box>
          <Typography variant="body2" color="white">
            Join us on social media and follow our journey as we empower communities and transform lives through education.
          </Typography>
        </Box>

        {/* Logo and Tagline Section */}
        <Box sx={{ width: { xs: '100%', md: '33.33%' }, flex: '1 1 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', py: 4, px: 2 }}>
          <CardMedia
            component="img"
            image="/cece/photos/cece-logo-white-text.png"
            alt="CECE's Dream Logo"
            sx={{ height: "auto", width: { xs: 160, sm: 200, md: 200 }, objectFit: "contain", mb: 2 }}
          />
          <Typography 
            sx={{ 
              fontWeight: 700, 
              letterSpacing: 1, 
              fontSize: { xs: '0.6rem', sm: '0.65rem', md: '0.7rem' }, 
              lineHeight: 1.4,
              color: 'white',
              textTransform: 'uppercase',
              mb: 0.5
            }}
          >
            Community Empowerment + Childhood Education
          </Typography>
          <Typography 
            sx={{ 
              fontStyle: "italic", 
              fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' }, 
              color: 'white'
            }}
          >
            A nonprofit organization
          </Typography>
        </Box>

        {/* Contact Section */}
        <Box sx={{ width: { xs: '100%', md: '33.33%' },
            flex: '1 1 0', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', py: 2 }}>
          <Typography variant="h3" fontWeight={700} mb={2} color="white">
            Contact CECE Dream
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, justifyContent: 'center' }}>
            <LocationOnIcon sx={{ mr: 1, color: 'white' }} />
            <Typography variant="body2" color="white">Kansas City, MO, USA</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, justifyContent: 'center' }}>
            <EmailIcon sx={{ mr: 1, color: 'white' }} />
            <Typography variant="body2" color="white">cece@cecesdream.org</Typography>
          </Box>
          <Button variant="contained" sx={{backgroundColor: 'rgb(255, 222, 89)', color: 'black', width: '200px', fontWeight: 700, mt: 'auto'}} href="https://donorbox.org/cece-790449" target="_blank">Donate today</Button>
        </Box>
      </Box>
      <Box sx={{ background: theme.palette.background.paper, color: theme.palette.text.primary, textAlign: 'center', py: 1, mt: 6, fontSize: '1rem', borderRadius: 0 }}>
        CECE is a 501(c)(3) nonprofit organization and all donations are tax-deductible. © 2025 Community Empowerment & Childhood Education
      </Box>
    </Box>
  );
}
