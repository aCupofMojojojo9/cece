'use client';

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
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
          alignItems: 'flex-start',
          justifyContent: 'space-between'
        }}
      >
        {/* Social Section */}
        <Box sx={{ width: { xs: '100%', md: '33%' },
            flexShrink: 0, textAlign: 'center' }}>
          <Typography variant="h3" fontWeight={700} mb={2} color="white">
            Get Social With Us
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
            <IconButton component="a" href="https://www.facebook.com/cecesdreamnonprofit" target="_blank" rel="noopener noreferrer" size="large" sx={{ background: '#1877F3', '&:hover': { background: '#1877F3' }, '&:active': { background: '#1877F3' } }}><FacebookIcon sx={{ color: '#fff' }} /></IconButton>
            <IconButton size="large" sx={{ background: '#0A66C2', '&:hover': { background: '#0A66C2' }, '&:active': { background: '#0A66C2' } }}><LinkedInIcon sx={{ color: '#fff' }} /></IconButton>
            <IconButton size="large" sx={{ background: '#E1306C', '&:hover': { background: '#E1306C' }, '&:active': { background: '#E1306C' } }}><InstagramIcon sx={{ color: '#fff' }} /></IconButton>
            <IconButton size="large" sx={{ background: '#FF0000', '&:hover': { background: '#FF0000' }, '&:active': { background: '#FF0000' } }}><YouTubeIcon sx={{ color: '#fff' }} /></IconButton>
          </Box>
          <Typography variant="body2" color="white">
            Come be a part of this amazing effort being led by CECE Dream. You will be happy that you did!
          </Typography>
        </Box>

        {/* Logo and Tagline Section */}
        <Box sx={{ width: { xs: '100%', md: '33%' }, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', justifyContent: 'flex-start', mt: { md: -2 } }}>
          <CardMedia
            component="img"
            image="/cece/cece-logo.png"
            alt="CECE's Dream Logo"
            sx={{ height: "auto", width: { xs: 180, sm: 220, md: 240 }, objectFit: "contain", mb: 1.5 }}
          />
          <Typography 
            sx={{ 
              fontWeight: 700, 
              letterSpacing: 1, 
              fontSize: { xs: '0.6rem', sm: '0.65rem', md: '0.7rem' }, 
              lineHeight: 1.5,
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
        <Box sx={{ width: { xs: '100%', md: '33%' },
            flexShrink: 0, textAlign: 'center', justifyContent: 'center'}}>
          <Typography variant="h3" fontWeight={700} mb={2} color="white">
            Contact CECE Dream
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, justifyContent: 'center' }}>
            <LocationOnIcon sx={{ mr: 1, color: 'white' }} />
            <Typography variant="body2" color="white">Kansas City, MO, USA</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, justifyContent: 'center' }}>
            <EmailIcon sx={{ mr: 1, color: 'white' }} />
            <Typography variant="body2" color="white">cece@cecesdream.org</Typography>
          </Box>
          <Button variant="contained" sx={{backgroundColor: 'rgb(255, 222, 89)', color: 'black', width: '200px', fontWeight: 700, mb: 1}} href="https://donorbox.org/cece-790449" target="_blank">Donate today</Button>
        </Box>
      </Box>
      <Box sx={{ background: theme.palette.background.paper, color: theme.palette.text.primary, textAlign: 'center', py: 1, mt: 6, fontSize: '1rem', borderRadius: 0 }}>
        CECE is a 501(c)(3) nonprofit organization and all donations are tax-deductible. © 2025 Community Empowerment & Childhood Education
      </Box>
    </Box>
  );
}
